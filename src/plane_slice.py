#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Program: Extracts plane slice from 3D volume data.
Version: 20220203
@author: Pranab Das (GitHub: @pranabdas)

plane_slice = plane_slice(data, x, x_min, x_max)
"""


def plane_slice(data, x, x_min, x_max):
    import numpy as np

    index_min = np.argmin(abs(x - x_min))
    index_max = np.argmin(abs(x - x_max))

    plane_slice = np.zeros([data.shape[1], data.shape[2]])

    # note that `range` includes index_min but excludes index_max
    for ii in range(index_min, index_max + 1):
        plane_slice = plane_slice + data[ii, :, :]

    return plane_slice
