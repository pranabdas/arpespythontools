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
    import urllib.request

    if (filename[:7]=='http://') or (filename[:8]=='https://'):
        web=True
    else:
        web=False

    if (web):
        try:
            headers = {'User-Agent': 'Mozilla/5.0'}
            req = urllib.request.Request(url = filename, headers = headers)
            contents = urllib.request.urlopen(req).read().decode()
            contents = contents.splitlines()
        except:
            print('Could not read url.')

    else:
        fid = open(filename, 'r')
        if fid.mode == 'r' :
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
    start_string = contents[lineNumberEnergyLength].find("=") + 1
    end_string = len(contents[lineNumberEnergyLength])
    energy_length = int(contents[lineNumberEnergyLength][start_string : end_string])

    angle_length = contents[lineNumberAngleLength]
    start_string = contents[lineNumberAngleLength].find("=") + 1
    end_string = len(contents[lineNumberAngleLength])
    angle_length = int(contents[lineNumberAngleLength][start_string : end_string])

    angle = contents[lineNumberAngle]
    start_string = contents[lineNumberAngle].find("=") + 1
    end_string = len(contents[lineNumberAngle])
    angle_temp = contents[lineNumberAngle][start_string : end_string]

    angle = np.linspace(0, 0, angle_length)

    start_string = 0
    for ii in range(angle_length):
        end_string = angle_temp.find(" ", start_string)
        angle[ii] = float(angle_temp[start_string : end_string])
        start_string = end_string + 1

    energy = np.linspace(0, 0, energy_length)

    data = np.ndarray((energy_length, angle_length))

    for ii in range(energy_length):
        data_temp = contents[lineNumberData + 1 + ii]
        end_string = len(data_temp)
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
