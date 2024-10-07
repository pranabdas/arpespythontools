#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Program: Second derivative/ Laplacian of 2D spectra
@author: Pranab Das (GitHub: @pranabdas)
"""

from astropy.convolution import convolve, Box2DKernel
import numpy as np


def laplacian(data, x, y, bw=5, w=1):
    # https://docs.astropy.org/en/latest/api/astropy.convolution.Box2DKernel.html
    # https://docs.astropy.org/en/latest/api/astropy.convolution.convolve.html
    data_smth = convolve(data, Box2DKernel(bw), boundary='extend')

    # Laplacian
    diff2 = np.gradient(np.gradient(data_smth, x, axis=0), x, axis=0) + \
        w * w * np.gradient(np.gradient(data_smth, y, axis=1), y, axis=1)

    return diff2
