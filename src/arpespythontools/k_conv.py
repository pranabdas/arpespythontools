#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Purpose: Ek vs energy to Ebin vs k conversion of ARPES spectra
@author: Pranab Das (GitHub: @pranabdas)
"""

import numpy as np


def k_conv(data, energy, angle, fermi_energy):
    """
    [data_k, e_bin, k] = k_conv(data, energy, angle, fermi_energy)
    This function requires intensity data as two dimensional array (x-dimension
    is along energy, and y-dimension along angle), and energy and angle as one
    dimensional array. Also we need to provide the position of Fermi energy.

    Then the function returns intensity in k-space, binding energy and k vector.
    """
    # transform energy and angle in increasing order
    is_energy_flipped = False
    if energy[0] > energy[-1]:
        is_energy_flipped = True
        energy = np.flip(energy)
        data = np.flip(data, 0)

    is_angle_flipped = False
    if angle[0] > angle[-1]:
        is_angle_flipped = True
        angle = np.flip(angle)
        data = np.flip(data, 1)

    k_min = 0.512 * np.sqrt(energy[np.shape(energy)[0] - 1]) * np.sin(np.deg2rad(angle[0]))

    k_max = 0.512 * np.sqrt(energy[np.shape(energy)[0] - 1]) * np.sin(np.deg2rad(angle[np.shape(angle)[0] - 1]))

    k = np.linspace(k_min, k_max, num=np.shape(angle)[0])
    k_temp = np.linspace(0, 0, np.shape(angle)[0])

    data_k = np.ndarray((np.shape(energy)[0], np.shape(angle)[0]))

    for ii in range(np.shape(energy)[0]):
        for jj in range(np.shape(angle)[0]):
            k_temp[jj] = 0.512 * np.sqrt(energy[ii]) * np.sin(np.deg2rad(angle[jj]))
        data_k[ii] = np.interp(k, k_temp, data[ii], left=float("nan"), right=float("nan"))

    # transform back into original order
    if is_energy_flipped:
        energy = np.flip(energy)
        data_k = np.flip(data_k, 0)

    if is_angle_flipped:
        k = np.flip(k)
        data_k = np.flip(data_k, 1)

    e_bin = fermi_energy - energy

    return data_k, e_bin, k
