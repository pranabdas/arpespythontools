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
REGEX_DICT.update({"map_width": (r"^\s*width\s*=\s*{0}").format(REGEX_DICT["num_int"])})
REGEX_DICT.update({"map_height": (r"^\s*height\s*=\s*{0}").format(REGEX_DICT["num_int"])})
REGEX_DICT.update({"map_depth": (r"^\s*depth\s*=\s*{0}").format(REGEX_DICT["num_int"])})
REGEX_DICT.update({"map_data_path": r"^\s*path\s*=\s*."})
REGEX_DICT.update({"map_width_offset": (r"^\s*width_offset\s*=\s*{0}").format(REGEX_DICT["num_dbl"])})
REGEX_DICT.update({"map_height_offset": (r"^\s*height_offset\s*=\s*{0}").format(REGEX_DICT["num_dbl"])})
REGEX_DICT.update({"map_depth_offset": (r"^\s*depth_offset\s*=\s*{0}").format(REGEX_DICT["num_dbl"])})
REGEX_DICT.update({"map_width_delta": (r"^\s*width_delta\s*=\s*{0}").format(REGEX_DICT["num_dbl"])})
REGEX_DICT.update({"map_height_delta": (r"^\s*height_delta\s*=\s*{0}").format(REGEX_DICT["num_dbl"])})
REGEX_DICT.update({"map_depth_delta": (r"^\s*depth_delta\s*=\s*{0}").format(REGEX_DICT["num_dbl"])})
