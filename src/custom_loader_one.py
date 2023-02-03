#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Program: custom loader to suit specific data format as requested by a user
Version: 20220203
@author: Pranab Das (GitHub: @pranabdas)
"""


def custom_loader_one(fname):
    import warnings
    import numpy as np

    with warnings.catch_warnings():
        warnings.filterwarnings(action='ignore')
        theta = np.loadtxt(fname, dtype="float64", max_rows=1)
    data = np.loadtxt(fname, dtype="float64", skiprows=2)
    energy = np.unique(data[:, 0])
    polar_len = int(len(data) / len(energy))
    polar_start = input(
        "Enter polar angle start value (if unknown, leave empty): ")
    polar_end = input(
        "Enter polar angle end value (if unknown, leave empty): ")

    try:
        polar_start = np.float64(polar_start)
    except:
        polar_start = np.nan

    try:
        polar_end = np.float64(polar_end)
    except:
        polar_end = np.nan

    # check dimension agree
    assert polar_len * len(energy) == len(data), "dimension mismatch"

    phi = range(polar_len)

    if (np.isnan(polar_start)) or np.isnan(polar_end):
        pass
    else:
        phi = np.linspace(polar_start, polar_end, num=polar_len)

    intensity = np.zeros((len(energy), len(theta), polar_len), dtype="float64")

    for i in range(len(data)):
        assert data[i, 0] == energy[i %
                                    len(energy)], "energy value irregularity"
        intensity[i % len(energy), :, i // len(energy)] = data[i, 1:]

    return intensity, energy, theta, phi
