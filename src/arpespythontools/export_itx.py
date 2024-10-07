#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Purpose: Igor text (.itx) file writer
@author: Pranab Das (GitHub: @pranabdas)
"""

import numpy as np


def export_itx(
    path, data, x=[], y=[], z=[], wave_name="wave", x_label="x-label", y_label="y-label", z_label="z-label"
):
    """
    export_itx(path, data, x=[], y=[], z =[], wave_name='wave',
    x_label='x-label', y_label='y-label', z_label='z-label')

    Exports Igor text data. This function support writing/exporting 1-, 2-, and
    3-dimensional data waves.
    """
    dimsize = (np.asarray(data)).shape
    # Axis scaling
    if len(x) < 2:
        x_offset = 0
        x_delta = 1
    else:
        x_offset = x[0]
        x_delta = (x[-1] - x[0]) / (len(x) - 1)

    if len(y) < 2:
        y_offset = 0
        y_delta = 1
    else:
        y_offset = y[0]
        y_delta = (y[-1] - y[0]) / (len(y) - 1)

    if len(z) < 2:
        z_offset = 0
        z_delta = 1
    else:
        z_offset = z[0]
        z_delta = (z[-1] - z[0]) / (len(z) - 1)

    # 1-dimensional array
    if len(dimsize) == 1:
        with open(path, "w") as fid:
            fid.write("IGOR\nWAVES/D\t{0}\nBEGIN\n".format(wave_name))
            for ii in range(len(data)):
                if data[ii] == 0:
                    fid.write("\t0")
                else:
                    fid.write(str("\t%f" % data[ii]).rstrip("0"))
                fid.write("\n")
            fid.write("END\n")
            fid.write(
                (
                    'X SetScale/P x {0}, {1}, "{2}", {3}; \
            SetScale/P y 0, 0, "", {3}; \n'.format(
                        x_offset, x_delta, x_label, wave_name
                    )
                )
            )
        fid.close()

    # 2-dimensional array
    if len(dimsize) == 2:
        with open(path, "w") as fid:
            fid.write("IGOR\nWAVES/N=({0},{1})\t{2}\nBEGIN\n".format(dimsize[0], dimsize[1], wave_name))
            for ii in range(len(x)):
                for jj in range(len(y)):
                    if data[ii][jj] == 0:
                        fid.write("\t0")
                    else:
                        fid.write(str("\t%f" % data[ii][jj]).rstrip("0"))
                fid.write("\n")
            fid.write("\n")
            fid.write("END\n")
            fid.write(
                (
                    'X SetScale/P x {0}, {1}, "{2}", {3}; SetScale/P y {4}, {5}, "{6}", {3}; SetScale d 0,0,"", {3}\n'.format(
                        x_offset, x_delta, x_label, wave_name, y_offset, y_delta, y_label
                    )
                )
            )
        fid.close()

    # 3-dimensional array
    if len(dimsize) == 3:
        with open(path, "w") as fid:
            fid.write(
                "IGOR\nWAVES/N=({0},{1},{2})\t{3}\nBEGIN\n".format(dimsize[0], dimsize[1], dimsize[2], wave_name)
            )
            for kk in range(len(z)):
                for ii in range(len(x)):
                    for jj in range(len(y)):
                        if data[ii][jj][kk] == 0:
                            fid.write("\t0")
                        else:
                            fid.write(str("\t%f" % data[ii][jj][kk]).rstrip("0"))
                    fid.write("\n")
                fid.write("\n")
            fid.write("END\n")
            fid.write(
                (
                    'X SetScale/P x {0}, {1}, "{2}", {3}; SetScale/P y {4}, {5}, "{6}", {3}; SetScale/P z {7}, {8}, "{9}", {3}; SetScale d 0,0,"", {3}\n'.format(
                        x_offset, x_delta, x_label, wave_name, y_offset, y_delta, y_label, z_offset, z_delta, z_label
                    )
                )
            )
        fid.close()
