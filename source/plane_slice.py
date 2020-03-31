#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Program: Extracts plane slice from 3D volume data.
Version: 20191205
@author: Pranab Das (Twitter: @pranab_das)

plane_slice = plane_slice(data, x, x_min, x_max)
"""
def plane_slice(data, x, x_min, x_max) :
    import numpy as np

    for ii in range(len(x)) :
        if x[ii] >= x_min :
            index_min = ii
            break

    for ii in range(len(x)) :
        if x[ii] > x_max :
            index_max = ii - 1
            break

    plane_slice = np.zeros([data.shape[1], data.shape[2]])

    for ii in range(index_min, index_max) :
        plane_slice = plane_slice + data[ii, :, :]

    return plane_slice
