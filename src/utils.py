#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Purpose: Utils
Version: 20240524
@author: Pranab Das (GitHub: @pranabdas)
"""

REGEX_DICT = {"num_int": r"[+-]?\d+"}
REGEX_DICT.update({"num_dbl": r"[-+]?\d*\.\d+(?:[eE][-+]?\d+)?"})
REGEX_DICT.update({"energy_len": (r"^\s*Dimension\s+1\s+size\s*=\s*{0}").format(REGEX_DICT["num_int"])})
REGEX_DICT.update({"angle_len": (r"^\s*Dimension\s+2\s+size\s*=\s*{0}").format(REGEX_DICT["num_int"])})
REGEX_DICT.update({"angle_data": r"^\s*Dimension\s+2\s+scale\s*="})
