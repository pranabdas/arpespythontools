#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Program: Extracts line profile from 2D data.
Version: 20230210
@author: Pranab Das (GitHub: @pranabdas)
"""


def line_profile(data, y, y_min, y_max):
    import numpy as np

    # make sure `y_min` is less than `y_max`
    if (y_min > y_max):
        y_min, y_max = y_max, y_min

    # in case `y` is not in increasing order, reverse `y_min` and `y_max`
    if (y[0] > y[-1]):
        y_min, y_max = y_max, y_min

    index_min = np.nanargmin(abs(y - y_min))
    index_max = np.nanargmin(abs(y - y_max))

    # convert nan values to zero
    data[np.isnan(data)] = 0

    line_profile = np.zeros(data.shape[0])

    # note that `range` includes index_min but excludes index_max
    for ii in range(index_min, index_max + 1):
        line_profile = line_profile + data[:, ii]

    return line_profile
