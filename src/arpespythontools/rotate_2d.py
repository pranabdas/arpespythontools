#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Program: Rotate 2D array perpendicular to the plane
@author: Pranab Das (GitHub: @pranabdas)
"""

import numpy as np
from scipy import interpolate


def rotate_2d(data, rotation, x, y):

    # transform x and y in increasing order
    is_x_flipped = False
    if x[0] > x[-1]:
        is_x_flipped = True
        x = np.flip(x)
        data = np.flip(data, 0)

    is_y_flipped = False
    if y[0] > y[-1]:
        is_y_flipped = True
        y = np.flip(y)
        data = np.flip(data, 1)

    # convert nan values to zero
    data[np.isnan(data)] = 0

    rotation = np.deg2rad(rotation)
    c, s = np.cos(rotation), np.sin(rotation)
    rot_matrix = np.array([[c, s], [-s, c]])

    data_r = np.zeros(
        [
            int(abs(data.shape[0] * np.cos(rotation)) + abs(data.shape[1] * np.sin(rotation))),
            int(abs(data.shape[0] * np.sin(rotation)) + abs(data.shape[1] * np.cos(rotation))),
        ]
    )

    x_start = x[0]
    x_end = x[-1]
    y_start = y[0]
    y_end = y[-1]

    min_max = rot_matrix @ [[x_start, x_end, x_end, x_start], [y_start, y_start, y_end, y_end]]

    X_start = min_max[0, :].min()
    X_end = min_max[0, :].max()
    Y_start = min_max[1, :].min()
    Y_end = min_max[1, :].max()

    X = np.linspace(X_start, X_end, data_r.shape[0])
    Y = np.linspace(Y_start, Y_end, data_r.shape[1])

    X_grid, Y_grid = np.meshgrid(X, Y)
    X_grid = X_grid.transpose()
    Y_grid = Y_grid.transpose()

    rot_matrix = np.array([[c, -s], [s, c]])

    x_temp, y_temp = np.copy(data_r), np.copy(data_r)

    mask = np.full(
        [
            int(abs(data.shape[0] * np.cos(rotation)) + abs(data.shape[1] * np.sin(rotation))),
            int(abs(data.shape[0] * np.sin(rotation)) + abs(data.shape[1] * np.cos(rotation))),
        ],
        False,
        dtype=bool,
    )

    for ii in range(mask.shape[0]):
        for jj in range(mask.shape[1]):
            x_temp[ii, jj], y_temp[ii, jj] = np.ndarray.flatten(rot_matrix @ [[X_grid[ii, jj]], [Y_grid[ii, jj]]])
            if (
                x_temp[ii, jj] < x_start
                or x_temp[ii, jj] > x_end
                or y_temp[ii, jj] < y_start
                or y_temp[ii, jj] > y_end
            ):
                mask[ii, jj] = True

    interp = interpolate.RectBivariateSpline(x, y, data)
    data_r = interp.ev(x_temp, y_temp)
    data_r[mask] = np.nan

    # transform back into original order
    if is_x_flipped:
        X = np.flip(X)
        data_r = np.flip(data_r, 0)

    if is_y_flipped:
        Y = np.flip(Y)
        data_r = np.flip(data_r, 1)

    return data_r, X, Y
