---
title: Modules
---
Full list of **arpespythontools** modules/ routines in alphabetical order:

```python
import arpespythontools as arp
```

### crop_2d
```python
data_crop, x_crop, y_crop = arp.crop_2d(data, x, y, x_min, x_max, y_min, y_max)
```
Returns cropped 2D array and corresponding axes scaling vectors defined by
[x_min, x_max] and [y_min, y_max].

**Inputs:**
- `data` : 2D array (intensity matrix).
- `x` : 1D vector (e.g., angle).
- `y` : 1D vector (e.g., energy).
- `x_min` and `x_max` : lower and upper bound of `x` to crop.
- `y_min` and `y_max` : lower and upper bound of `y` to crop.

**Outputs:**
- `data_crop` : cropped 2D array.
- `x_crop` : corresponding x-scaling vector.
- `y_crop` : corresponding y-scaling vector.

### export_itx
```python
arp.export_itx(path, data, x=[], y=[], z =[], wave_name='wave', \
    x_label='x-label', y_label='y-label', z_label='z-label')
```
Exports 1D, 2D, or 3D array to Igor text (`.itx`) file.

**Inputs:**
- `path` : Output filename or path of the `.itx` file.
- `data` : Input data array to save. Could be 1D, 2D, or 3D array.
- `x`, `y`, `z` (optional) : axes scaling for the corresponding input data array.
If a value is not provided, default `DimOffset=0` and `DimDelta=1` would be
applied.
- `wave_name` (optional) : Igor wave name.
- `x-`, `y-`, `z-label` (optional) : labels for `x`, `y` and `z`, respectively.

### import_itx
```python
data, x, y, z = arp.import_itx(name)
```

Loads data and its axes scaling from Igor text (`.itx`) format.

**Inputs:**
- `name` (string) : Input Igor text filename.

**Outputs:**
- `data` : 1D, 2D, or 3D array.
- `x`, `y`, `z` : axes scales. Number of output returned depends on the input
wave dimension.

### k_conv
```python
data_k, e_bin, k = arp.k_conv(data, energy, angle, fermi_energy)
```
Transforms the intensity fromm real space to k-space.

**Inputs:**
- `data` : 2D array of intensity values in real space. Dimension 1 is along
energy and Dimension 2 is along angle.
- `energy` : 1D array of kinetic energy values in eV.
- `angle` : 1D array of theta values in degree.
- `fermi_energy` (number) : Fermi energy value in eV in terms of kinetic energy.

**Outputs:**
- `data_k` : 2D array of intensity values in k-space. Intensity values outside
the interpolation range is set to `NaN` (not a number).
- `e_bin` : 1D array of Binding energy values in eV. Binding energy below Fermi
energy is positive convention is used.
- `k` : 1D array of momentum (k) values in $$\mathring{A}^{-1}$$.

### k_conv_3D
```python
data_k, e_bin, kx, ky = arp.k_conv3D(data, energy, theta, phi, fermi_energy)
```
Transforms the Fermi map data from real space to k-space.

**Inputs:**
- `data` : 3D matrix of intensity values in real space. Dimension 1 is along
kinetic energy, Dimension 2 is along theta, and Dimension 3 along phi.
- `energy` : 1D array of kinetic energy values in eV.
- `theta` : 1D array of theta values in degree. This is the direction along the
slit.
- `phi` : 1D array of phi values in degree. This is the direction perpendicular
to the slit.
- `fermi_energy` (number) : Fermi energy value in eV in terms of kinetic energy.

**Outputs:**
- `data_k` : 3D matrix of intensity values in k-space. Intensity values outside
the interpolation range is set to `NaN` (not a number).
- `e_bin` : 1D array of Binding energy values in eV. Binding energy below Fermi
energy is positive convention is used.
- `kx`, `ky` : 1D array of momentum (k) values in $$\mathring{A}^{-1}$$ along
the slit, and perpendicular to the slit directions, respectively.

### line_profile
```python
edc = arp.line_profile(data, y, y_min, y_max)
```
Returns the 1D vector of integrated line profile. The integration is done along
the second dimension of `data`.

**Inputs:**
- `data` : 2D array.
- `y` : 1D vector of axis scaling along the second dimension of `data`.
- `y_min`, `y_max` : integration bounds.

**Outputs:**
- `edc` : 1D vector of integrated values defined by the width [y_min, y_max]
along the first dimension.


### load_ses_map
```python
data, energy, theta, phi = arp.load_map_data(name)
```

Loads Fermi map data from output `.zip` file of Scienta-Omicron SES program.

**Inputs:**
- `name` (string) : name or file path of `.zip` map data file. It could be a local path
or URL path.

**Outputs:**
- `data`: 3D array of intensity values. Dimension 1 → energy, Dimension 2 →
angle theta (along the slit direction), and Dimension 3 → angle phi (azimuth/
perpendicular to the slit direction).
- `energy`: 1D vector of kinetic energy points in eV.
- `theta`: 1D vector of theta values in degree.
- `phi` : 1D vector of phi values in degree.

### load_ses_spectra
```python
data, angle, energy = arp.load_ses_spectra(name)
```

Loads data from a text file produced by Scienta-Omicron SES program.

**Inputs:**
- `name` (string) : name or file path of SES `.txt` file. It could be a local path or a
URL address.

**Outputs:**
- `data` : 2D array (numpy ndarry) of intensity values.
- `angle` : 1D vector (numpy ndarry) of angle values in degree.
- `energy` : 1D vector (numpy ndarry) of kinetic energy values in eV.

### plane_slice
```python
surf = arp.plane_slice(data, x, x_min, x_max)
```
Returns the 2D slice along the first dimension of `data` and integrated in the
width [x_min, x_max].

**Inputs:**
- `data` : 3D matrix.
- `x` : axes scaling along the first dimension.
- `x_min`, `x_max` : integration bounds.

**Outputs:**
- `surf` : 2D array.

### rotate
```python
data_r, theta_r, phi_r = arp.rotate(data, angle, theta, phi)
```
Rotates the volume data (3D matrix) perpendicular to the first dimension. Center
of rotation is theta=0, phi=0.

**Inputs:**
- `data` : 3D array. First, second, and third dimensions are along energy,
theta, and phi, respectively. The data will be rotated perpendicular to energy,
i.e., in the theta-phi plane.
- `angle` : amount of rotation in degree. Positive value rotes counter
clockwise.
- `theta` : 1D array of axis scaling along the second dimension of `data`.
- `phi` : 1D array of axis scaling along the third dimension of `data`.

**Outputs:**
- `data_r` : rotated 3D matrix. Data points outside of interpolation range is
set to `NaN` (not a number).
- `theta_r` : 1D array of axis scaling along the second dimension of `data_r`.
- `phi_r` : 1D array of axis scaling along the third dimension of `data_r`.

:::caution

Rotation involves some heavy interpolation. This operation might take several
tens of minutes depending on the data size and computational power. Perhaps we
need to improve the algorithm by parallelizing along the first dimension.

:::
