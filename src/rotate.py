#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Program: Rotate Fermi map data in k-space.
Version: 20191215
@author: Pranab Das (Twitter: @pranab_das)
"""
def rotate(data, angle, x, y):
    '''
    data_r, KX, KY = rotate(data, 45, x, y)
    This program assumes you input 3-dimensional data with energy in the first 
    dimension, x and y as second and third dimesions. Provide the angle in 
    degree. The rotation is made around the center/ Gamma point (x = 0, y = 0).
    '''
    import numpy as np
    from scipy import interpolate

    data[np.isnan(data)] = 0

    angle_rad = np.deg2rad(angle)

    c, s = np.cos(angle_rad), np.sin(angle_rad)

    rot_matrix = np.array([[c, s],
                           [-s, c]])

    data_r = np.zeros([data.shape[0],\
                            int(abs(data.shape[1]*np.cos(angle_rad)) + \
                            abs(data.shape[2]*np.sin(angle_rad))), \
                            int(abs(data.shape[1]*np.sin(angle_rad)) + \
                            abs(data.shape[2]*np.cos(angle_rad)))])
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

    X = np.linspace(X_start, X_end, data_r.shape[1])
    Y = np.linspace(Y_start, Y_end, data_r.shape[2])

    X_grid, Y_grid = np.meshgrid(X, Y)
    X_grid = X_grid.transpose()
    Y_grid = Y_grid.transpose()

    rot_matrix = np.array([[c, -s], \
                           [s, c]])

    for ii in range(data_r.shape[0]):
        interp_func = interpolate.RectBivariateSpline(x, y, data[ii, :, :])
        for jj in range(data_r.shape[1]):
            for kk in range(data_r.shape[2]):
                x_temp, y_temp = rot_matrix @[[X_grid[jj, kk]], [Y_grid[jj, kk]]]

                if x_temp < x_start or x_temp > x_end or \
                y_temp < y_start or y_temp > y_end:
                    data_r[ii, jj, kk] = np.nan
                else:
                    data_r[ii, jj, kk] = interp_func(x_temp, y_temp)

    return data_r, X, Y
