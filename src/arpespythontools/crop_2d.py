#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Program: Crop image/ 2-dimensional data
@author: Pranab Das (GitHub: @pranabdas)
"""

import numpy as np


def crop_2d(data, x, y, x_min, x_max, y_min, y_max):
    """
    data_crop, x_crop, y_crop = crop_2d(data, x, y, x_min, x_max, y_min, y_max)
    """

    # make sure `x_min` is less than `x_max`
    if x_min > x_max:
        x_min, x_max = x_max, x_min

    if y_min > y_max:
        y_min, y_max = y_max, y_min

    # in case `x` is not in increasing order, reverse `x_min` and `x_max`
    if x[0] > x[-1]:
        x_min, x_max = x_max, x_min

    if y[0] > y[-1]:
        y_min, y_max = y_max, y_min

    x_min_index = np.nanargmin(abs(x - x_min))
    x_max_index = np.nanargmin(abs(x - x_max))

    y_min_index = np.nanargmin(abs(y - y_min))
    y_max_index = np.nanargmin(abs(y - y_max))

    # slicing excludes the max index
    crop_data = data[x_min_index : (x_max_index + 1), y_min_index : (y_max_index + 1)]
    crop_x = x[x_min_index : (x_max_index + 1)]
    crop_y = y[y_min_index : (y_max_index + 1)]

    return crop_data, crop_x, crop_y
