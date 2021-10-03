#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Program: Extracts line profile from 2D data.
Version: 20210611
@author: Pranab Das (Twitter: @pranab_das)
"""
def line_profile(data, y, y_min, y_max) :
    import numpy as np

    index_min = np.argmin(abs(y - y_min))
    index_max = np.argmin(abs(y - y_max))

    line_profile = np.zeros(data.shape[0])

    for ii in range(index_min, index_max) :
        line_profile = line_profile + data[:, ii]

    return line_profile
