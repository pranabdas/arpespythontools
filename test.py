#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Program: Python unittest
Version: 20210602
@author: Pranab Das (Twitter: @pranab_das)
Run    : python3 test.py
or     : python3 -m unittest test.py
"""
import unittest
from src.load_ses_spectra import load_ses_spectra
from src.load_ses_map import load_ses_map
from src.k_conv import k_conv
from src.k_conv3D import k_conv3D
from src.crop_2d import crop_2d
from src.line_profile import line_profile
from src.plane_slice import plane_slice
from src.rotate_2D import rotate_2D
from src.rotate_3D import rotate_3D

# load the data from url. If you have the data files locally, you may replace
# the urls with local file path
url = "https://pranabdas.github.io/drive/datasets/arpes/sample_spectrum.txt"
data, energy, angle = load_ses_spectra(url)

# for the Fermi map data
url = 'https://pranabdas.github.io/drive/datasets/arpes/sample_map_data.zip'
data_map, energy_map, theta, phi = load_ses_map(url)

class Test(unittest.TestCase):
    def test_load_ses_spectra(self):
        self.assertEqual(data.shape, (301, 571))
        self.assertEqual(len(energy), 301)
        self.assertEqual(len(angle), 571)
        self.assertAlmostEqual(data[200, 200], 106.00164747)
        self.assertEqual(energy[300], 16.9)
        self.assertEqual(angle[400], 3.5441056)

    def test_load_ses_map(self):
        self.assertEqual(data_map.shape, (365, 571, 51))
        self.assertEqual(len(energy_map), 365)
        self.assertEqual(len(theta), 571)
        self.assertEqual(len(phi), 51)
        self.assertAlmostEqual(data_map[200, 200, 25], 77.57816314)
        self.assertEqual(energy_map[200], 16.58)
        self.assertAlmostEqual(theta[200], -2.7009340)
        self.assertEqual(phi[30], 1.0)

    def test_k_conv(self):
        data_k, e_bin, k = k_conv(data, energy, angle, 16.67)
        self.assertEqual(data_k.shape, (301, 571))
        self.assertEqual(len(e_bin), 301)
        self.assertEqual(len(k), 571)
        # self.assertAlmostEqual(data_k[200, 200], 96.51326542)
        self.assertAlmostEqual(e_bin[200], 0.27)
        self.assertAlmostEqual(k[200], -0.09881188)

    def test_k_conv3D(self):
        data_k, e_bin, kx, ky = k_conv3D(data_map, energy_map, theta, phi, 16.67)
        self.assertEqual(data_k.shape, (365, 571, 51))
        self.assertEqual(len(e_bin), 365)
        self.assertEqual(len(kx), 571)
        self.assertEqual(len(ky), 51)
        # self.assertAlmostEqual(data_k[200, 300, 25], 79.90909761)
        self.assertAlmostEqual(e_bin[250], -0.40999999)
        self.assertAlmostEqual(kx[300], 0.01603355)
        self.assertAlmostEqual(ky[30], 0.03809519)

    def test_crop_2d(self):
        data_crop, x_crop, y_crop = crop_2d(data, energy, angle, 16, 16.8, -6, 4)
        self.assertEqual(data_crop.shape, (160, 321))
        self.assertEqual(len(x_crop), 160)
        self.assertEqual(len(y_crop), 321)
        self.assertAlmostEqual(data_crop[100, 100], 358.26367950)
        self.assertAlmostEqual(x_crop[50], 16.25)
        self.assertAlmostEqual(y_crop[50], -4.449648)

    def test_line_profile(self):
        edc = line_profile(data, angle, -3, 3)
        mdc = line_profile(data.T, energy, 16.5, 16.7)
        self.assertAlmostEqual(edc[250], 103059.02996563)
        self.assertAlmostEqual(mdc[250], 28065.45765495)

    def test_plane_slice(self):
        surf = plane_slice(data_map, energy_map, 15.6, 15.8)
        self.assertAlmostEqual(surf[175, 25], 10275.25982666)
        surf = plane_slice(data_map.transpose([2, 0, 1]), phi, -0.5, 0.5)
        self.assertAlmostEqual(surf[175, 25], 36.72578543)

    def test_rotate_2D(self):
        data_r, theta_r, phi_r = rotate_2D(data_map[150, :, :], 45, theta, phi)
        self.assertEqual(data_r.shape, (439, 439))
        self.assertEqual(len(theta_r), 439)
        self.assertEqual(len(phi_r), 439)
        # self.assertAlmostEqual(data_r[200, 250], 143.48184917)
        self.assertAlmostEqual(theta_r[200], -0.88572823)
        self.assertAlmostEqual(phi_r[400], 8.15602716)

    def test_rotate_3D(self):
        data_r, theta_r, phi_r = rotate_3D(data_map, 45, theta, phi)
        self.assertEqual(data_r.shape, (365, 439, 439))
        self.assertEqual(len(theta_r), 439)
        self.assertEqual(len(phi_r), 439)
        # self.assertAlmostEqual(data_r[200, 250, 150], 1.80742301)
        self.assertAlmostEqual(theta_r[200], -0.88572823)
        self.assertAlmostEqual(phi_r[400], 8.15602716)

if __name__ == "__main__":
    unittest.main()
