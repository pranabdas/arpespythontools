#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Program: Extracts plane slice from 3D volume data.
@author: Pranab Das (GitHub: @pranabdas)

example: plane_slice = plane_slice(data, x, x_min, x_max)
"""

import numpy as np


def plane_slice(data, x, x_min, x_max):

    # make sure `x_min` is less than `x_max`
    if x_min > x_max:
        x_min, x_max = x_max, x_min

    # in case `x` is not in increasing order, reverse `x_min` and `x_max`
    if x[0] > x[-1]:
        x_min, x_max = x_max, x_min

    index_min = np.nanargmin(abs(x - x_min))
    index_max = np.nanargmin(abs(x - x_max))

    # convert nan values to zero
    data[np.isnan(data)] = 0

    plane_slice = np.zeros([data.shape[1], data.shape[2]])

    # note that `range` includes index_min but excludes index_max
    for ii in range(index_min, index_max + 1):
        plane_slice = plane_slice + data[ii, :, :]

    return plane_slice
