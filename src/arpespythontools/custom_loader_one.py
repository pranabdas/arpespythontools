#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Program: custom loader to suit specific data format as requested by a user
@author: Pranab Das (GitHub: @pranabdas)
"""

import itertools
import math
import warnings
import numpy as np


def custom_loader_one(fname, polar_start=None, polar_end=None):

    # suppress numpy warning related to max_rows behavior
    with warnings.catch_warnings():
        warnings.filterwarnings(action="ignore")
        # read only one line for theta values
        theta = np.loadtxt(fname, dtype="float64", max_rows=1)

    data = itertools.islice(open(fname), None)
    # exclude blank and comment lines, comments must begin with `#`
    data = itertools.dropwhile(lambda x: x.strip() == "" or x.strip()[0] == "#", data)
    # skip first/theta row
    data = np.loadtxt(data, dtype="float64", skiprows=1)

    energy = np.unique(data[:, 0])
    polar_len = int(len(data) / len(energy))
    # check dimension agree after integer conversion
    # note: assert can be switched off globally using `-O` or `-OO` flag
    assert polar_len * len(energy) == len(data), "dimension mismatch"

    if polar_start and polar_end:
        phi = np.linspace(polar_start, polar_end, num=polar_len)
    else:
        phi = np.arange(polar_len)

    intensity = np.zeros((len(energy), len(theta), polar_len), dtype="float64")

    for i in range(len(data)):
        assert math.isclose(data[i, 0], energy[i % len(energy)]), "energy value irregularity"
        intensity[i % len(energy), :, i // len(energy)] = data[i, 1:]

    return intensity, energy, theta, phi


def gen_test_data():
    """
    generates fake/random data for testing `custom_loader_one`
    You can run:
    python3 -c 'from src.custom_loader_one import *; gen_test_data()' > out.txt

    alternatively, execute python code interactively:
    python3 -i src/custom_loader_one.py

    or enter python interpreter and run python code:
    python3
    >>> exec(open("src/custom_loader_one.py").read())

    and save data:
    >>> from contextlib import redirect_stdout
    >>> with open('out.txt', 'w') as f:
    ...     with redirect_stdout(f):
    ...         gen_test_data()
    """
    print("# generated fake/random data to test `custom_loader_one`")
    print("\n\t", end="")

    th = np.linspace(-5.8, 5.8, 10, dtype="float64")

    for i in range(len(th)):
        print(th[i], end=" ")
    print()

    ph = np.linspace(-3, 3, 5, dtype="float64")
    e = np.linspace(10, 15, 15, dtype="float64")

    for i in range(len(ph) * len(e)):
        print(e[i % len(e)], end=" ")
        for _ in range(len(th)):
            print(np.random.rand() * 50, end=" ")
        print()
