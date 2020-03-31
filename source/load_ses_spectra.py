#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Program: To load ARPES data from SES text output file.
Version: 20191205
@author: Pranab Das (Twitter: @pranab_das)
[data, energy, angle] = load_arpes_text_data("example_spectrum.txt")
"""
def load_ses_spectra(filename) :
    import numpy as np

    fid = open(filename, 'r')
    if fid.mode == 'r' :
        contents = fid.readlines()
    fid.close()

    energy_length = contents[7]
    start_string = contents[7].find("=") + 1
    end_string = contents[7].find("\n")
    energy_length = int(contents[7][start_string : end_string])

    angle_length = contents[10]
    start_string = contents[10].find("=") + 1
    end_string = contents[10].find("\n")
    angle_length = int(contents[10][start_string : end_string])

    angle = contents[11]
    start_string = contents[11].find("=") + 1
    end_string = contents[11].find("\n")
    angle_temp = contents[11][start_string : end_string]

    angle = np.linspace(0, 0, angle_length)

    start_string = 0
    for ii in range(angle_length):
        end_string = angle_temp.find(" ", start_string)
        angle[ii] = float(angle_temp[start_string : end_string])
        start_string = end_string + 1

    energy = np.linspace(0, 0, energy_length)

    data = np.ndarray((energy_length, angle_length))

    for ii in range(energy_length):
        data_temp = contents[57 + ii]
        end_string = data_temp.find("\n")
        data_temp = data_temp[1 : end_string]

        start_string = 0
        for jj in range(angle_length + 1):
            end_string = data_temp.find("  ", start_string)
            if jj == 0 :
                energy[ii] = float(data_temp[start_string : end_string])
                start_string = end_string + 1
            elif jj > 0 :
                data[ii][jj - 1] = float(data_temp[start_string : \
                         end_string])
                start_string = end_string + 1

    return data, energy, angle
