#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Purpose: Ek vs energy to Ebin vs k conversion of ARPES spectra
Version: 20191207
@author: Pranab Das (Twitter: @pranab_das)
"""
def k_conv(data, energy, angle, fermi_energy) :
    '''
    [data_k, e_bin, k] = k_conv(data, energy, angle, fermi_energy)
    This function requires intensity data as two dimensional array (x-dimension 
    is along energy, and y-dimension along angle), and energy and angle as one 
    dimensional array. Also we need to provide the position of Fermi energy.

    Then the function returns intensity in k-space, binding energy and k vector.
    '''
    import numpy as np

    k_min = 0.512 * np.sqrt(energy[np.shape(energy)[0] - 1]) \
    * np.sin(angle[0]*np.pi/180)

    k_max = 0.512 * np.sqrt(energy[np.shape(energy)[0] - 1]) \
    * np.sin(angle[np.shape(angle)[0] - 1]*np.pi/180)

    k = np.linspace(k_min, k_max, num = np.shape(angle)[0])
    k_temp = np.linspace(0, 0, np.shape(angle)[0])

    data_k = np.ndarray((np.shape(energy)[0], np.shape(angle)[0]))

    for ii in range(np.shape(energy)[0]):
        for jj in range(np.shape(angle)[0]):
            k_temp[jj] = 0.512 * np.sqrt(energy[ii]) \
            * np.sin(angle[jj]*np.pi/180)
        data_k[ii] = np.interp(k, k_temp, data[ii], left=float('nan'),\
                 right=float('nan'))

    e_bin = fermi_energy - energy

    return data_k, e_bin, k
