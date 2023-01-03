#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Program: Crop image/ 2-dimensional data
Version: 20230103
@author: Pranab Das (GitHub: @pranabdas)
"""


def crop_2d(data, x, y, x_min, x_max, y_min, y_max):
    '''
    data_crop, x_crop, y_crop = crop_2d(data, x, y, x_min, x_max, y_min, y_max)
    '''
    import numpy as np

    x_min_index = np.nanargmin(abs(x - x_min))
    x_max_index = np.nanargmin(abs(x - x_max))

    y_min_index = np.nanargmin(abs(y - y_min))
    y_max_index = np.nanargmin(abs(y - y_max))

    # slicing excludes the max index
    crop_data = data[x_min_index: (x_max_index + 1),
                     y_min_index: (y_max_index + 1)]
    crop_x = x[x_min_index: (x_max_index + 1)]
    crop_y = y[y_min_index: (y_max_index + 1)]

    return crop_data, crop_x, crop_y
