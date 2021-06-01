#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Program: Rotate 3D array, axis of rotation is along first dimension
Version: 20210601
@author: Pranab Das (Twitter: @pranab_das)
"""
def rotate_3D(data, rotation, x, y):
    import numpy as np
    from scipy import interpolate

    data[np.isnan(data)] = 0
    rotation = np.deg2rad(rotation)
    c, s = np.cos(rotation), np.sin(rotation)
    rot_matrix = np.array([[c, s],
                          [-s, c]])

    data_r = np.zeros([int(abs(data.shape[1]*np.cos(rotation)) + \
                           abs(data.shape[2]*np.sin(rotation))), \
                       int(abs(data.shape[1]*np.sin(rotation)) + \
                           abs(data.shape[2]*np.cos(rotation)))])

    x_start = x[0]
    x_end = x[-1]
    y_start = y[0]
    y_end = y[-1]

    min_max = rot_matrix @[[x_start, x_end, x_end, x_start],\
                           [y_start, y_start, y_end, y_end]]

    X_start = min_max[0, :].min()
    X_end = min_max[0, :].max()
    Y_start = min_max[1, :].min()
    Y_end = min_max[1, :].max()

    X = np.linspace(X_start, X_end, data_r.shape[0])
    Y = np.linspace(Y_start, Y_end, data_r.shape[1])

    X_grid, Y_grid = np.meshgrid(X, Y)
    X_grid = X_grid.transpose()
    Y_grid = Y_grid.transpose()

    rot_matrix = np.array([[c, -s], \
                           [s, c]])

    x_temp, y_temp = np.copy(data_r), np.copy(data_r)

    mask = np.full([int(abs(data.shape[1]*np.cos(rotation)) + \
                        abs(data.shape[2]*np.sin(rotation))), \
                    int(abs(data.shape[1]*np.sin(rotation)) + \
                        abs(data.shape[2]*np.cos(rotation)))], False, dtype=bool)

    for ii in range(mask.shape[0]):
        for jj in range(mask.shape[1]):
            x_temp[ii, jj], y_temp[ii, jj] = rot_matrix @[[X_grid[ii, jj]], [Y_grid[ii, jj]]]
            if x_temp[ii, jj] < x_start or x_temp[ii, jj] > x_end or \
               y_temp[ii, jj] < y_start or y_temp[ii, jj] > y_end:
                mask[ii, jj] = True

    data_3r = []
    for ii in range(data.shape[0]):
        interp = interpolate.RectBivariateSpline(x, y, data[ii, :, :])
        data_r = interp.ev(x_temp, y_temp)
        data_r[mask] = np.nan
        data_3r.append(data_r)

    data_3r = np.array(data_3r)
    return data_3r, X, Y
