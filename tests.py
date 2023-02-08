#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Program: Python unittest
Version: 20230208
@author: Pranab Das (GitHub: @pranabdas)
Run    : python3 tests.py
or     : python3 -m unittest tests.py
"""
import unittest
from numpy import testing, flip
from src.load_ses_spectra import load_ses_spectra
from src.load_ses_map import load_ses_map
from src.k_conv import k_conv
from src.k_conv3d import k_conv3d
from src.k_conv3d_mp import k_conv3d_mp
from src.k_conv3d_mp_alt import k_conv3d_mp_alt
from src.crop_2d import crop_2d
from src.line_profile import line_profile
from src.plane_slice import plane_slice
from src.rotate_2d import rotate_2d
from src.rotate_3d import rotate_3d

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
        self.assertAlmostEqual(data_k[200, 200], 96.51326542, places=3)
        self.assertAlmostEqual(e_bin[200], 0.27)
        self.assertAlmostEqual(k[200], -0.09881188)

    # change data ordering
    def test2_k_conv(self):
        data_k, e_bin, k = k_conv(data[::-1, ...], energy[::-1], angle, 16.67)
        self.assertEqual(data_k.shape, (301, 571))
        self.assertEqual(len(e_bin), 301)
        self.assertEqual(len(k), 571)
        self.assertAlmostEqual(
            data_k[::-1, ...][200, 200], 96.51326542, places=3)
        self.assertAlmostEqual(e_bin[::-1][200], 0.27)
        self.assertAlmostEqual(k[200], -0.09881188)

    def test_k_conv3d(self):
        data_k, e_bin, kx, ky = k_conv3d(
            data_map, energy_map, theta, phi, 16.67)
        self.assertEqual(data_k.shape, (365, 571, 51))
        self.assertEqual(len(e_bin), 365)
        self.assertEqual(len(kx), 571)
        self.assertEqual(len(ky), 51)
        self.assertAlmostEqual(data_k[200, 300, 25], 79.90909761, places=3)
        self.assertAlmostEqual(e_bin[250], -0.40999999)
        self.assertAlmostEqual(kx[300], 0.01603355)
        self.assertAlmostEqual(ky[30], 0.03809519)

    # change data ordering
    def test2_k_conv3d(self):
        data_k, e_bin, kx, ky = k_conv3d(
            flip(data_map, 1), energy_map, theta[::-1], phi, 16.67)
        self.assertEqual(data_k.shape, (365, 571, 51))
        self.assertEqual(len(e_bin), 365)
        self.assertEqual(len(kx), 571)
        self.assertEqual(len(ky), 51)
        self.assertAlmostEqual(
            flip(data_k, 1)[200, 300, 25], 79.90909761, places=3)
        self.assertAlmostEqual(e_bin[250], -0.40999999)
        self.assertAlmostEqual(kx[::-1][300], 0.01603355)
        self.assertAlmostEqual(ky[30], 0.03809519)

    def test_k_conv3d_mp(self):
        data_k, e_bin, kx, ky = k_conv3d_mp(
            data_map, energy_map, theta, phi, 16.67)
        self.assertEqual(data_k.shape, (365, 571, 51))
        self.assertEqual(len(e_bin), 365)
        self.assertEqual(len(kx), 571)
        self.assertEqual(len(ky), 51)
        self.assertAlmostEqual(data_k[200, 300, 25], 79.90909761, places=3)
        self.assertAlmostEqual(e_bin[250], -0.40999999)
        self.assertAlmostEqual(kx[300], 0.01603355)
        self.assertAlmostEqual(ky[30], 0.03809519)
        data_k_, _, _, _ = k_conv3d(data_map, energy_map, theta, phi, 16.67)
        testing.assert_array_equal(data_k, data_k_)

    # change data ordering
    def test2_k_conv3d_mp(self):
        data_k, e_bin, kx, ky = k_conv3d_mp(
            flip(data_map, 1), energy_map, theta[::-1], phi, 16.67)
        self.assertEqual(data_k.shape, (365, 571, 51))
        self.assertEqual(len(e_bin), 365)
        self.assertEqual(len(kx), 571)
        self.assertEqual(len(ky), 51)
        self.assertAlmostEqual(
            flip(data_k, 1)[200, 300, 25], 79.90909761, places=3)
        self.assertAlmostEqual(e_bin[250], -0.40999999)
        self.assertAlmostEqual(kx[::-1][300], 0.01603355)
        self.assertAlmostEqual(ky[30], 0.03809519)

    # change data ordering
    def test3_k_conv3d_mp(self):
        data_k, e_bin, kx, ky = k_conv3d_mp(
            flip(data_map, 2), energy_map, theta, phi[::-1], 16.67)
        self.assertEqual(data_k.shape, (365, 571, 51))
        self.assertEqual(len(e_bin), 365)
        self.assertEqual(len(kx), 571)
        self.assertEqual(len(ky), 51)
        self.assertAlmostEqual(
            flip(data_k, 2)[200, 300, 25], 79.90909761, places=3)
        self.assertAlmostEqual(e_bin[250], -0.40999999)
        self.assertAlmostEqual(kx[300], 0.01603355)
        self.assertAlmostEqual(ky[::-1][30], 0.03809519)

    def test_k_conv3d_mp_alt(self):
        data_k, e_bin, kx, ky = k_conv3d_mp_alt(
            data_map, energy_map, theta, phi, 16.67)
        self.assertEqual(data_k.shape, (365, 571, 51))
        self.assertEqual(len(e_bin), 365)
        self.assertEqual(len(kx), 571)
        self.assertEqual(len(ky), 51)
        self.assertAlmostEqual(data_k[200, 300, 25], 79.90909761, places=3)
        self.assertAlmostEqual(e_bin[250], -0.40999999)
        self.assertAlmostEqual(kx[300], 0.01603355)
        self.assertAlmostEqual(ky[30], 0.03809519)
        data_k_, _, _, _ = k_conv3d_mp(data_map, energy_map, theta, phi, 16.67)
        testing.assert_almost_equal(data_k, data_k_)

    # change data ordering
    def test2_k_conv3d_mp_alt(self):
        data_k, e_bin, kx, ky = k_conv3d_mp_alt(
            flip(data_map, 1), energy_map, theta[::-1], phi, 16.67)
        self.assertEqual(data_k.shape, (365, 571, 51))
        self.assertEqual(len(e_bin), 365)
        self.assertEqual(len(kx), 571)
        self.assertEqual(len(ky), 51)
        self.assertAlmostEqual(
            flip(data_k, 1)[200, 300, 25], 79.90909761, places=3)
        self.assertAlmostEqual(e_bin[250], -0.40999999)
        self.assertAlmostEqual(kx[::-1][300], 0.01603355)
        self.assertAlmostEqual(ky[30], 0.03809519)

    def test_crop_2d(self):
        data_crop, x_crop, y_crop = crop_2d(
            data, energy, angle, 16, 16.8, -6, 4)
        self.assertEqual(data_crop.shape, (161, 322))
        self.assertEqual(len(x_crop), 161)
        self.assertEqual(len(y_crop), 322)
        self.assertAlmostEqual(data_crop[100, 100], 358.26367950)
        self.assertAlmostEqual(x_crop[50], 16.25)
        self.assertAlmostEqual(y_crop[50], -4.449648)

    # flip min/max
    def test2_crop_2d(self):
        data_crop, x_crop, y_crop = crop_2d(
            data, energy, angle, 16.8, 16, 4, -6)
        self.assertEqual(data_crop.shape, (161, 322))
        self.assertEqual(len(x_crop), 161)
        self.assertEqual(len(y_crop), 322)
        self.assertAlmostEqual(data_crop[100, 100], 358.26367950)
        self.assertAlmostEqual(x_crop[50], 16.25)
        self.assertAlmostEqual(y_crop[50], -4.449648)

    # change data ordering
    def test3_crop_2d(self):
        data_crop, x_crop, y_crop = crop_2d(
            data[::-1, ...], energy[::-1], angle, 16, 16.8, -6, 4)
        self.assertEqual(data_crop.shape, (161, 322))
        self.assertEqual(len(x_crop), 161)
        self.assertEqual(len(y_crop), 322)
        self.assertAlmostEqual(data_crop[::-1, ...][100, 100], 358.26367950)
        self.assertAlmostEqual(x_crop[::-1][50], 16.25)
        self.assertAlmostEqual(y_crop[50], -4.449648)

    def test_line_profile(self):
        edc = line_profile(data, angle, -3, 3)
        mdc = line_profile(data.T, energy, 16.5, 16.7)
        self.assertAlmostEqual(edc[250], 103690.02924323082)
        self.assertAlmostEqual(mdc[250], 28385.215015411377)

    def test2_line_profile(self):
        """
        test it works when x_min is greater than x_max
        """
        edc = line_profile(data, angle, 3, -3)
        mdc = line_profile(data.T, energy, 16.7, 16.5)
        self.assertAlmostEqual(edc[250], 103690.02924323082)
        self.assertAlmostEqual(mdc[250], 28385.215015411377)

    def test3_line_profile(self):
        """
        test it works when angle values are not in increasing order
        """
        edc = line_profile(data, angle, -3, 3)
        mdc = line_profile(data.T, energy, 16.5, 16.7)
        self.assertAlmostEqual(edc[250], 103690.02924323082)
        self.assertAlmostEqual(mdc[250], 28385.215015411377)

    def test_plane_slice(self):
        surf = plane_slice(data_map, energy_map, 15.6, 15.8)
        self.assertAlmostEqual(surf[175, 25], 10639.354034423828)
        surf = plane_slice(data_map.transpose([2, 0, 1]), phi, -0.5, 0.5)
        self.assertAlmostEqual(surf[175, 25], 43.904175247997046)

    def test2_plane_slice(self):
        """
        test it works when x_min is greater than x_max
        """
        surf = plane_slice(data_map, energy_map, 15.8, 15.6)
        self.assertAlmostEqual(surf[175, 25], 10639.354034423828)
        surf = plane_slice(data_map.transpose([2, 0, 1]), phi, -0.5, 0.5)
        self.assertAlmostEqual(surf[175, 25], 43.904175247997046)

    def test3_plane_slice(self):
        """
        test it works when energy values are not in increasing order
        """
        surf = plane_slice(data_map[::-1, ...], energy_map[::-1], 15.8, 15.6)
        self.assertAlmostEqual(surf[175, 25], 10639.354034423828)
        surf = plane_slice(data_map.transpose([2, 0, 1]), phi, -0.5, 0.5)
        self.assertAlmostEqual(surf[175, 25], 43.904175247997046)

    def test_rotate_2d(self):
        data_r, theta_r, phi_r = rotate_2d(data_map[150, :, :], 45, theta, phi)
        self.assertEqual(data_r.shape, (439, 439))
        self.assertEqual(len(theta_r), 439)
        self.assertEqual(len(phi_r), 439)
        self.assertAlmostEqual(data_r[200, 250], 143.48184917, places=3)
        self.assertAlmostEqual(theta_r[200], -0.88572823)
        self.assertAlmostEqual(phi_r[400], 8.15602716)

    def test2_rotate_2d(self):
        data_r, theta_r, phi_r = rotate_2d(flip(data_map[150, :, :], 0), 45, theta[::-1], phi)
        self.assertEqual(data_r.shape, (439, 439))
        self.assertEqual(len(theta_r), 439)
        self.assertEqual(len(phi_r), 439)
        self.assertAlmostEqual(flip(data_r, 0)[200, 250], 143.48184917, places=3)
        self.assertAlmostEqual(theta_r[::-1][200], -0.88572823)
        self.assertAlmostEqual(phi_r[400], 8.15602716)

    def test3_rotate_2d(self):
        data_r, theta_r, phi_r = rotate_2d(flip(data_map[150, :, :], 1), 45, theta, phi[::-1])
        self.assertEqual(data_r.shape, (439, 439))
        self.assertEqual(len(theta_r), 439)
        self.assertEqual(len(phi_r), 439)
        self.assertAlmostEqual(flip(data_r, 1)[200, 250], 143.48184917, places=3)
        self.assertAlmostEqual(theta_r[200], -0.88572823)
        self.assertAlmostEqual(phi_r[::-1][400], 8.15602716)

    def test_rotate_3d(self):
        data_r, theta_r, phi_r = rotate_3d(data_map, 45, theta, phi)
        self.assertEqual(data_r.shape, (365, 439, 439))
        self.assertEqual(len(theta_r), 439)
        self.assertEqual(len(phi_r), 439)
        self.assertAlmostEqual(data_r[200, 250, 150], 1.80742301, places=3)
        self.assertAlmostEqual(theta_r[200], -0.88572823)
        self.assertAlmostEqual(phi_r[400], 8.15602716)

    def test2_rotate_3d(self):
        data_r, theta_r, phi_r = rotate_3d(flip(data_map, 1), 45, theta[::-1], phi)
        self.assertEqual(data_r.shape, (365, 439, 439))
        self.assertEqual(len(theta_r), 439)
        self.assertEqual(len(phi_r), 439)
        self.assertAlmostEqual(flip(data_r, 1)[200, 250, 150], 1.80742301, places=3)
        self.assertAlmostEqual(theta_r[::-1][200], -0.88572823)
        self.assertAlmostEqual(phi_r[400], 8.15602716)

    def test3_rotate_3d(self):
        data_r, theta_r, phi_r = rotate_3d(flip(data_map, 2), 45, theta, phi[::-1])
        self.assertEqual(data_r.shape, (365, 439, 439))
        self.assertEqual(len(theta_r), 439)
        self.assertEqual(len(phi_r), 439)
        self.assertAlmostEqual(flip(data_r, 2)[200, 250, 150], 1.80742301, places=3)
        self.assertAlmostEqual(theta_r[200], -0.88572823)
        self.assertAlmostEqual(phi_r[::-1][400], 8.15602716)


if __name__ == "__main__":
    unittest.main()
