#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Program: This program converts 3D ARPES Fermi map data from real space to
k-space.
@author: Pranab Das (GitHub: @pranabdas)
"""

import os
import psutil
import sys
from itertools import repeat
from multiprocessing import Pool
import numpy as np
from scipy import interpolate


def interp(data_slice, energy_val, theta, phi, kx, ky):

    theta_temp = np.arcsin(kx / (0.512 * np.sqrt(energy_val))) * 180 / np.pi
    phi_temp = np.linspace(0, 0, len(phi))
    theta_grid, phi_grid = np.meshgrid(theta_temp, phi_temp)

    for jj in range(np.shape(data_slice)[1]):
        for kk in range(np.shape(data_slice)[0]):
            phi_grid[kk, jj] = (
                np.arcsin(ky[kk] / (0.512 * np.sqrt(energy_val) * np.cos(theta_grid[0, jj] * np.pi / 180)))
                * 180
                / np.pi
            )

    func = interpolate.RectBivariateSpline(phi, theta, data_slice)
    data_k = func.ev(phi_grid, theta_grid)

    # nan wrapping for outside interpolation range data points
    mask_theta = (theta_grid < theta[0]) | (theta_grid > theta[-1])
    mask_phi = (phi_grid < phi[0]) | (phi_grid > phi[-1])
    mask = mask_theta | mask_phi
    data_k[mask] = np.nan
    return data_k


def limit_cpu():
    """
    sets process priority low, so that system can still run other process
    """
    PLATFORM = sys.platform
    process = psutil.Process(os.getpid())
    if PLATFORM[:3] == "win":
        process.nice(psutil.BELOW_NORMAL_PRIORITY_CLASS)
    else:
        process.nice(19)


def k_conv3d_mp(data, energy, theta, phi, fermi_energy):
    """
    data_k, e_bin, kx, ky = k_conv3d(data, energy, theta, phi, fermi_energy)
    """
    # transform sure energy, theta, and phi into increasing order
    # necessary for using scipy `interpolate.RectBivariateSpline`
    is_energy_flipped = False
    if energy[0] > energy[-1]:
        is_energy_flipped = True
        energy = np.flip(energy)
        data = np.flip(data, 0)

    is_theta_flipped = False
    if theta[0] > theta[-1]:
        is_theta_flipped = True
        theta = np.flip(theta)
        data = np.flip(data, 1)

    is_phi_flipped = False
    if phi[0] > phi[-1]:
        is_phi_flipped = True
        phi = np.flip(phi)
        data = np.flip(data, 2)

    data = np.transpose(data, (0, 2, 1))
    # Transpose the data, 0 -> energy, 1 -> phi, 2 -> theta
    kx_min = 0.512 * np.sqrt(energy[-1]) * np.sin(theta[0] * np.pi / 180)
    kx_max = 0.512 * np.sqrt(energy[-1]) * np.sin(theta[len(theta) - 1] * np.pi / 180)
    kx = np.linspace(kx_min, kx_max, len(theta))

    ky_min = 0.512 * np.sqrt(energy[-1]) * np.sin(phi[0] * np.pi / 180)
    ky_max = 0.512 * np.sqrt(energy[-1]) * np.sin(phi[len(phi) - 1] * np.pi / 180)
    ky = np.linspace(ky_min, ky_max, len(phi))

    pool = Pool(None, limit_cpu)
    input_array_tuple = zip(data, energy, repeat(theta), repeat(phi), repeat(kx), repeat(ky))
    data_k = pool.starmap(interp, input_array_tuple)
    pool.close()
    data_k = np.array(data_k)
    # Transpose back to original order
    data_k = np.transpose(data_k, (0, 2, 1))

    # transform back into original order
    if is_energy_flipped:
        energy = np.flip(energy)
        data_k = np.flip(data_k, 0)

    if is_theta_flipped:
        kx = np.flip(kx)
        data_k = np.flip(data_k, 1)

    if is_phi_flipped:
        ky = np.flip(ky)
        data_k = np.flip(data_k, 2)

    e_bin = fermi_energy - energy

    return data_k, e_bin, kx, ky
