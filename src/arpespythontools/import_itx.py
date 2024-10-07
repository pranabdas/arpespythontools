#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Program: Import Igor text data.
@author: Pranab Das (GitHub: @pranabdas)
"""

import numpy as np


def import_itx(data_path):
    """
    import_itx('itx_file.itx')
    Imports Igor text data. This function support reading/importing 1-, 2-, and
    3-dimensional data waves.
    """

    contents = open(data_path, "r").readlines()

    # 1D data file
    if contents[1][:8] == "WAVES/D\t" or contents[1][:8] == "WAVES/D ":
        data = []
        for ii in range(len(contents)):
            if contents[ii + 3] == "END\n":
                break
            data.append(float(contents[ii + 3].lstrip("\t").rstrip("\n")))
            dimsize = ii + 1

        temp = contents[dimsize + 4].split(";")[0]
        dimoffset = float(temp[temp.find("x") + 1 :].split(",")[0])
        dimdelta = float(temp[temp.find("x") + 1 :].split(",")[1])
        x = np.linspace(dimoffset, (dimoffset + dimdelta * (dimsize - 1)), dimsize)

        return data, x

    # Higher dimensional data file
    else:
        dimsize = (contents[1][contents[1].find("(") + 1 : contents[1].find(")")]).split(",")
        dimsize = list(map(int, dimsize))

        # 2-dimensional data
        if len(dimsize) == 2:
            data = np.ndarray((dimsize[0], dimsize[1]))
            for ii in range(dimsize[0]):
                data_row = contents[ii + 3][contents[ii + 3].find("\t") + 1 : contents[ii + 3].find("\n")]
                data_row = data_row.split("\t")
                data[ii, :] = np.asarray(list(map(float, data_row)))

            temp = contents[4 + dimsize[0]].split(";")
            x_offset = float(temp[0][temp[0].find("x") + 1 : temp[0].find('"')].split(",")[:-1][0])
            x_delta = float(temp[0][temp[0].find("x") + 1 : temp[0].find('"')].split(",")[:-1][1])
            y_offset = float(temp[1][temp[1].find("y") + 1 : temp[1].find('"')].split(",")[:-1][0])
            y_delta = float(temp[1][temp[1].find("y") + 1 : temp[1].find('"')].split(",")[:-1][1])

            x_end = x_offset + x_delta * (dimsize[0] - 1)
            x = np.linspace(x_offset, x_end, dimsize[0])

            y_end = y_offset + y_delta * (dimsize[1] - 1)
            y = np.linspace(y_offset, y_end, dimsize[1])

            return data, x, y

        # 3-dimensional data
        elif len(dimsize) == 3:
            data = np.ndarray((dimsize[0] * dimsize[2], dimsize[1]))
            for ii in range(dimsize[0] * dimsize[2]):
                data_row = contents[ii + 3][contents[ii + 3].find("\t") + 1 : contents[ii + 3].find("\n")]
                data_row = data_row.split("\t")
                data[ii, :] = np.asarray(list(map(float, data_row)))

            data = data.reshape(dimsize[0] * dimsize[1] * dimsize[2])
            data = data.reshape((dimsize[1], dimsize[0], dimsize[2]), order="F")
            data = np.transpose(data, (1, 0, 2))

            temp = contents[4 + dimsize[0] * dimsize[2]].split(";")
            x_offset = float(temp[0][temp[0].find("x") + 1 : temp[0].find('"')].split(",")[:-1][0])
            x_delta = float(temp[0][temp[0].find("x") + 1 : temp[0].find('"')].split(",")[:-1][1])
            y_offset = float(temp[1][temp[1].find("y") + 1 : temp[1].find('"')].split(",")[:-1][0])
            y_delta = float(temp[1][temp[1].find("y") + 1 : temp[1].find('"')].split(",")[:-1][1])
            z_offset = float(temp[2][temp[2].find("z") + 1 : temp[2].find('"')].split(",")[:-1][0])
            z_delta = float(temp[2][temp[2].find("z") + 1 : temp[2].find('"')].split(",")[:-1][1])

            x_end = x_offset + x_delta * (dimsize[0] - 1)
            x = np.linspace(x_offset, x_end, dimsize[0])

            y_end = y_offset + y_delta * (dimsize[1] - 1)
            y = np.linspace(y_offset, y_end, dimsize[1])

            z_end = z_offset + z_delta * (dimsize[2] - 1)
            z = np.linspace(z_offset, z_end, dimsize[2])

            return data, x, y, z
