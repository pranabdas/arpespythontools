#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Program: 2D curvature of a spectra
Version: 20191207
@author: Pranab Das (Twitter: @pranab_das)
"""

def cv2d(data, x, y, bw=5, c1=0.001, c2=0.001, w='default'):
    import numpy as np
    from astropy.convolution import convolve, Box2DKernel
    # https://docs.astropy.org/en/latest/api/astropy.convolution.Box2DKernel.html

    if (w=='default'):
        w = data.shape[0]/data.shape[1]

    data_smth = convolve(data, Box2DKernel(bw))

    # remove the borders
    bo = int(bw/2 + 1)
    data_smth = data_smth[bo:-bo, bo:-bo]
    x = x[bo:-bo]
    y = y[bo:-bo]

    dE   = np.gradient(data_smth, axis=0)
    dT   = np.gradient(data_smth, axis=1)*w
    d2E  = np.gradient(np.gradient(data_smth, axis=0), axis=0)
    d2T  = np.gradient(np.gradient(data_smth, axis=1), axis=1)*w*w
    dEdT = np.gradient(np.gradient(data_smth, axis=1), axis=0)*w

    # 2D curvature - https://doi.org/10.1063/1.3585113
    cv2d = ((1 + c1*dE**2)*c2*d2T - 2*c1*c2*dE*dT*dEdT + (1 + c2*dT**2)*c1*d2E)/ \
                       (1 + c1*dE**2 + c2*dT**2)**1.5

    return cv2d, x, y
