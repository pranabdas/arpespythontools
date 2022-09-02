#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Program: This program converts 3D ARPES Fermi map data from real space to
k-space.
Version: 20220902
@author: Pranab Das (GitHub: @pranabdas)
"""


def interp(data_slice, energy_val, theta, phi, kx, ky):
    from scipy import interpolate
    import numpy as np

    theta_temp = np.arcsin(kx/(0.512*np.sqrt(energy_val)))*180/np.pi
    phi_temp = np.linspace(0, 0, len(phi))
    theta_grid, phi_grid = np.meshgrid(theta_temp, phi_temp)

    for jj in range(np.shape(data_slice)[1]):
        for kk in range(np.shape(data_slice)[0]):
            phi_grid[kk, jj] = np.arcsin(ky[kk]/(0.512*np.sqrt(energy_val)\
                    *np.cos(theta_grid[0, jj]*np.pi/180)))*180/np.pi

    func = interpolate.RectBivariateSpline(phi, theta, data_slice)
    data_k = func.ev(phi_grid, theta_grid)

    # nan wrapping for outside interpolation range data points
    mask_theta = (theta_grid < theta[0]) | (theta_grid > theta[-1])
    mask_phi = (phi_grid < phi[0]) | (phi_grid > phi[-1])
    mask = mask_theta | mask_phi
    data_k[mask] = np.nan
    return data_k


def k_conv3d_mp(data, energy, theta, phi, fermi_energy):
    '''
    data_k, e_bin, kx, ky = k_conv3d(data, energy, theta, phi, fermi_energy)
    '''
    import numpy as np
    from multiprocessing import Pool
    from itertools import repeat

    data = np.transpose(data, (0, 2, 1))
    # Transpose the data, 0 -> energy, 1 -> phi, 2 -> theta
    kx_min = 0.512 * np.sqrt(energy[-1]) * np.sin(theta[0]*np.pi/180)
    kx_max = 0.512 * np.sqrt(energy[-1]) * np.sin(theta[len(theta)-1]*np.pi/180)
    kx = np.linspace(kx_min, kx_max, len(theta))

    ky_min = 0.512 * np.sqrt(energy[-1]) * np.sin(phi[0]*np.pi/180)
    ky_max = 0.512 * np.sqrt(energy[-1]) * np.sin(phi[len(phi)-1]*np.pi/180)
    ky = np.linspace(ky_min, ky_max, len(phi))

    pool = Pool()
    input_array_tuple = zip(data, energy, repeat(theta), repeat(phi), repeat(kx), repeat(ky))
    data_k = pool.starmap(interp, input_array_tuple)
    pool.close()
    data_k = np.array(data_k)
    data_k = np.transpose(data_k, (0, 2, 1)) # Transpose back to original order

    e_bin = fermi_energy - energy

    return data_k, e_bin, kx, ky
