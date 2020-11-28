# -*- coding: utf-8 -*-
"""
Purpose: To load ARPES MAP data from the ZIP file produced by Scienta SES program.
Version: 20201128
@author: Pranab Das (Twitter: @pranab_das)
[data, energy, theta, phi] = load_map_data("map_data.zip")
"""
def load_ses_map(filename) :
    import numpy as np
    import zipfile
    from io import BytesIO
    from urllib.request import urlopen

    # Check the path contains the zip file
    if (filename[-4:].lower() != '.zip'):
        print('Please provide a .zip file!')
    
    if (filename[:7]=='http://') or (filename[:8]=='https://'):
        web=True
    else:
        web=False
        
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

    energy_length = contents[10].decode()
    start_string = energy_length.find("=") + 1
    end_string = energy_length.find("\r")
    energy_length = int(energy_length[start_string : end_string])
#    print("Size of energy dimension =", energy_length)

    theta_length = contents[11].decode()
    start_string = theta_length.find("=") + 1
    end_string = theta_length.find("\r")
    theta_length = int(theta_length[start_string : end_string])
#    print("Size of theta dimension =", theta_length)

    phi_length = contents[12].decode()
    start_string = phi_length.find("=") + 1
    end_string = phi_length.find("\r")
    phi_length = int(phi_length[start_string : end_string])
#    print("Size of theta dimension =", phi_length)

    map_data_path = contents[14].decode()
    start_string = map_data_path.find("=") + 1
    end_string = map_data_path.find("\r")
    map_data_path = map_data_path[start_string : end_string]

    fid = map_data.open(map_data_path, 'r')
    data = np.frombuffer(fid.read(), dtype=np.dtype(np.float32))
    data = np.float64(data)
    data = data.reshape((energy_length, theta_length, phi_length), order='F')
    fid.close()

    energy_offset = contents[15].decode()
    start_string = energy_offset.find("=") + 1
    end_string = energy_offset.find("\r")
    energy_offset = float(energy_offset[start_string : end_string])

    energy_delta = contents[16].decode()
    start_string = energy_delta.find("=") + 1
    end_string = energy_delta.find("\r")
    energy_delta = float(energy_delta[start_string : end_string])

    energy_end = energy_offset + (energy_length - 1)*energy_delta
    energy = np.linspace(energy_offset, energy_end, num = energy_length)

    theta_offset = contents[18].decode()
    start_string = theta_offset.find("=") + 1
    end_string = theta_offset.find("\r")
    theta_offset = float(theta_offset[start_string : end_string])

    theta_delta = contents[19].decode()
    start_string = theta_delta.find("=") + 1
    end_string = theta_delta.find("\n")
    theta_delta = float(theta_delta[start_string : end_string])

    theta_end = theta_offset + (theta_length - 1)*theta_delta
    theta = np.linspace(theta_offset, theta_end, num = theta_length)

    phi_offset = contents[21].decode()
    start_string = phi_offset.find("=") + 1
    end_string = phi_offset.find("\n")
    phi_offset = float(phi_offset[start_string : end_string])

    phi_delta = contents[22].decode()
    start_string = phi_delta.find("=") + 1
    end_string = phi_delta.find("\n")
    phi_delta = float(phi_delta[start_string : end_string])

    phi_end = phi_offset + (phi_length - 1)*phi_delta
    phi = np.linspace(phi_offset, phi_end, num = phi_length)

    return data, energy, theta, phi
