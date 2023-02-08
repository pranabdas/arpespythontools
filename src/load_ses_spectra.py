#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Program: To load ARPES data from SES text output file.
Version: 20191205
@author: Pranab Das (GitHub: @pranabdas)
[data, energy, angle] = load_arpes_text_data("example_spectrum.txt")
"""


def load_ses_spectra(filename):
    import numpy as np
    import urllib.request

    if (filename[:7] == 'http://') or (filename[:8] == 'https://'):
        web = True
    else:
        web = False

    if (web):
        try:
            headers = {'User-Agent': 'Mozilla/5.0'}
            req = urllib.request.Request(url=filename, headers=headers)
            contents = urllib.request.urlopen(req).read().decode()
            contents = contents.splitlines()
        except:
            print('Could not read url.')

    else:
        fid = open(filename, 'r')
        if fid.mode == 'r':
            contents = fid.read()
        fid.close()
        contents = contents.splitlines()

    lineNumberEnergyLength = -1
    lineNumberAngleLength = -1
    # lineNumberEnergy = -1
    lineNumberAngle = -1
    lineNumberData = -1

    for line in np.arange(len(contents)):
        if (contents[line].find('Dimension 1 size') != -1):
            lineNumberEnergyLength = line

        if (contents[line].find('Dimension 2 size') != -1):
            lineNumberAngleLength = line

        # if (contents[line].find('Dimension 1 scale') != -1):
        #     lineNumberEnergy = line

        if (contents[line].find('Dimension 2 scale') != -1):
            lineNumberAngle = line

        if (contents[line].find('Data 1') != -1):
            lineNumberData = line

    energy_length = contents[lineNumberEnergyLength]
    energy_length = int(energy_length.split("=")[-1])

    angle_length = contents[lineNumberAngleLength]
    angle_length = int(angle_length.split("=")[-1])

    angle = contents[lineNumberAngle].split("=")[-1]
    angle = angle.split(" ")

    for ii in range(len(angle)):
        angle[ii] = float(angle[ii])

    angle = np.array(angle)

    energy = np.linspace(0, 0, energy_length)
    data = np.ndarray((energy_length, angle_length))

    for ii in range(energy_length):
        data_row = contents[lineNumberData + 1 + ii]
        data_row = data_row.split(" ")
        data_row = list(filter(None, data_row))

        for jj in range(len(data_row)):
            data_row[jj] = float(data_row[jj])

        energy[ii] = data_row[0]
        data[ii, :] = data_row[1:]

    return data, energy, angle
