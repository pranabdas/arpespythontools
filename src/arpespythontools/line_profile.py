#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Program: Extracts line profile from 2D data.
@author: Pranab Das (GitHub: @pranabdas)
"""

import numpy as np


def line_profile(data, y, y_min, y_max):

    # make sure `y_min` is less than `y_max`
    if y_min > y_max:
        y_min, y_max = y_max, y_min

    # in case `y` is not in increasing order, reverse `y_min` and `y_max`
    if y[0] > y[-1]:
        y_min, y_max = y_max, y_min

    index_min = np.nanargmin(abs(y - y_min))
    index_max = np.nanargmin(abs(y - y_max))

    # convert nan values to zero
    data[np.isnan(data)] = 0

    line_prof = np.zeros(data.shape[0])

    # note that `range` includes index_min but excludes index_max
    for ii in range(index_min, index_max + 1):
        line_prof = line_prof + data[:, ii]

    return line_prof
