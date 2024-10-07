#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Program: 2D curvature of a spectra
@author: Pranab Das (GitHub: @pranabdas)
"""

from astropy.convolution import convolve, Box2DKernel
import numpy as np


def cv2d(data, x, y, bw=5, c1=0.001, c2=0.001, w=1):

    # https://docs.astropy.org/en/latest/api/astropy.convolution.Box2DKernel.html
    # https://docs.astropy.org/en/latest/api/astropy.convolution.convolve.html
    data_smth = convolve(data, Box2DKernel(bw), boundary="extend")

    dx = np.gradient(data_smth, axis=0)
    dy = np.gradient(data_smth, axis=1) * w
    d2x = np.gradient(np.gradient(data_smth, x, axis=0), x, axis=0)
    d2y = np.gradient(np.gradient(data_smth, y, axis=1), y, axis=1) * w * w
    dxdy = np.gradient(np.gradient(data_smth, y, axis=1), x, axis=0) * w

    # 2D curvature - https://doi.org/10.1063/1.3585113
    cv2d = ((1 + c1 * dx**2) * c2 * d2y - 2 * c1 * c2 * dx * dy * dxdy + (1 + c2 * dy**2) * c1 * d2x) / (
        1 + c1 * dx**2 + c2 * dy**2
    ) ** 1.5

    return cv2d
