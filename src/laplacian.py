#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Program: Second derivative/ Laplacian of 2D spectra
Version: 20210821
@author: Pranab Das (Twitter: @pranab_das)
"""
def laplacian(data, x, y, bw=5, w='default'):
    import numpy as np
    from astropy.convolution import convolve, Box2DKernel
    # https://docs.astropy.org/en/latest/api/astropy.convolution.Box2DKernel.html

    if (w=='default'):
        w = data.shape[0]/data.shape[1]

    data_smth = convolve(data, Box2DKernel(bw))

    # crop the edges
    bo = int(bw/2 + 1)
    data_smth = data_smth[bo:-bo, bo:-bo]
    x = x[bo:-bo]
    y = y[bo:-bo]

    # Laplacian
    diff2 = np.gradient(np.gradient(data_smth, axis=0), axis=0) + \
        w*w*np.gradient(np.gradient(data_smth, axis=1), axis=1)

    # NaN wrapping for edges instead of cropping
    # for ii in range(data.shape[0]):
    #     for jj in range(data.shape[1]):
    #         if (ii <= bo+1 or ii >= data.shape[0]-bo-1 or \
    #             jj <= bo+1 or jj >= data.shape[1]-bo-1):
    #             diff2[ii][jj] = np.nan

    return diff2, x, y
