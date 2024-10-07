#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Program: Save XPS data in two column format
@author: Pranab Das (GitHub: @pranabdas)
"""

import datetime
import numpy as np


def save_xps(energy, intensity, filename=None):

    if not filename:
        filename = "XPS_data_" + datetime.datetime.now().strftime("%Y%m%d%H%M%S") + ".x_y"

    # check energy and intensity have same length
    if len(energy) != len(intensity):
        raise ValueError("Lengths of input arrays do not match")
    else:
        data = np.array([energy, intensity]).T
        np.savetxt(filename, data)
