# -*- coding: utf-8 -*-
"""
Purpose: To load ARPES MAP data from the ZIP file produced by Scienta SES program.
Version: 20211003
@author: Pranab Das (GitHub: @pranabdas)
[data, energy, theta, phi] = load_map_data("map_data.zip")
"""


def load_ses_map(filename):
    from io import BytesIO
    import numpy as np
    from urllib.request import urlopen
    import zipfile

    # Check the path contains the zip file
    if (filename[-4:].lower() != '.zip'):
        print('Please provide a .zip file!')

    if (filename[:7] == 'http://') or (filename[:8] == 'https://'):
        web = True
    else:
        web = False

    if (web):
        try:
            filename = urlopen(filename)
            map_data = zipfile.ZipFile(BytesIO(filename.read()))
        except:
            print('Could not read url.')
    else:
        map_data = zipfile.ZipFile(filename, 'r')

    ini_file = map_data.open('viewer.ini')
    contents = ini_file.readlines()
    ini_file.close()

    for line in range(len(contents)):
        contents[line] = contents[line].decode().strip()

    for line in range(len(contents)):
        energy_length = contents[line].split("=")
        if energy_length[0].strip() == "width":
            energy_length = int(energy_length[-1])
            break

    for line in range(len(contents)):
        theta_length = contents[line].split("=")
        if theta_length[0].strip() == "height":
            theta_length = int(theta_length[-1])
            break

    for line in range(len(contents)):
        phi_length = contents[line].split("=")
        if phi_length[0].strip() == "depth":
            phi_length = int(phi_length[-1])
            break

    for line in range(len(contents)):
        map_data_path = contents[line].split("=")
        if map_data_path[0].strip() == "path":
            map_data_path = str(map_data_path[-1].strip())
            break

    fid = map_data.open(map_data_path, 'r')
    data = np.frombuffer(fid.read(), dtype=np.dtype(np.float32))
    data = np.float64(data)
    data = data.reshape((energy_length, theta_length, phi_length), order='F')
    fid.close()

    for line in range(len(contents)):
        energy_offset = contents[line].split("=")
        if energy_offset[0].strip() == "width_offset":
            energy_offset = float(energy_offset[-1])
            break

    for line in range(len(contents)):
        energy_delta = contents[line].split("=")
        if energy_delta[0].strip() == "width_delta":
            energy_delta = float(energy_delta[-1])
            break

    energy_end = energy_offset + (energy_length - 1)*energy_delta
    energy = np.linspace(energy_offset, energy_end, num=energy_length)

    for line in range(len(contents)):
        theta_offset = contents[line].split("=")
        if theta_offset[0].strip() == "height_offset":
            theta_offset = float(theta_offset[-1])
            break

    for line in range(len(contents)):
        theta_delta = contents[line].split("=")
        if theta_delta[0].strip() == "height_delta":
            theta_delta = float(theta_delta[-1])
            break

    theta_end = theta_offset + (theta_length - 1)*theta_delta
    theta = np.linspace(theta_offset, theta_end, num=theta_length)

    for line in range(len(contents)):
        phi_offset = contents[line].split("=")
        if phi_offset[0].strip() == "depth_offset":
            phi_offset = float(phi_offset[-1])
            break

    for line in range(len(contents)):
        phi_delta = contents[line].split("=")
        if phi_delta[0].strip() == "depth_delta":
            phi_delta = float(phi_delta[-1])
            break

    phi_end = phi_offset + (phi_length - 1)*phi_delta
    phi = np.linspace(phi_offset, phi_end, num=phi_length)

    return data, energy, theta, phi
