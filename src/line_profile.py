#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Program: Extracts line profile from 2D data.
Version: 20210522
@author: Pranab Das (Twitter: @pranab_das)
"""
def line_profile(data, y, y_min, y_max) :
    import numpy as np

    for ii in range(len(y)) :
        if y[ii] >= y_min :
            index_min = ii
            break

    for ii in range(len(y)) :
        if y[ii] > y_max :
            index_max = ii - 1
            break

    line_profile = np.linspace(0, 0, data.shape[0])

    for ii in range(index_min, index_max) :
        line_profile = line_profile + data[:, ii]

    return line_profile
