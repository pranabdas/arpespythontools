---
title: Loading ARPES data
sidebar_label: Importing data
keywords: ["arpes data", "ses", "scienta", "scienta-omicron"]
---
At the moment, this module can only import data produced by Scienta-Omicron SES
program. However, you can implement custom loader specific to your data file,
and use other modules. Here is an example of [custom loader](
https://github.com/pranabdas/arpespythontools/blob/main/src/custom_loader_one.py).
For the spectral scans, we will use SES produced plaintext (`.txt`) output file
as input, while in case of Fermi map data, we will need the ZIP files as input
format.

First thing first, import `arpespythontools` in your program:
```python
import arpespythontools as arp
```

### Load ARPES Spectra from SES plaintext file
```python
data, energy, angle = arp.load_ses_spectra('sample_spectra.txt')
```

Here, `data` is a two dimensional numpy array; x-dimension is along energy and
y-dimension is along angle/theta. `energy` and `angle` are one dimensional
vectors of kinetic energy in eV and angle values are in degree, respectively.

:::tip

If you have a workflow to directly work from cloud services like Dropbox or
OneDrive, it is possible to import data directly from an URL source instead of
local file path. You will require additional code for Dropbox or OneDrive
authentication, which is not currently included with **arpespythontools**.

:::

```python
url = "https://pranabdas.github.io/drive/datasets/arpes/sample_spectrum.txt"
data, energy, angle = arp.load_ses_spectra(url)
```

### Load Fermi Map data from SES ZIP file
```python
map_data, energy, theta, phi = arp.load_ses_map('sample_map_data.zip')
```

`map_data` will contain three dimensional array of Fermi map data; x-dimension
is along energy, y-dimension is along theta and z-dimension is along phi.
`energy`, `theta`, and `phi` are one dimensional vectors of kinetic energy (eV),
theta (deg), and phi (deg), respectively.

Notice that you do not need to unzip the SES produced `.zip` file, the program
directly reads from `.zip` file.
