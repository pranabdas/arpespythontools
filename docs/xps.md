---
title: Working with XPS data
sidebar_label: XPS data
---
X-ray Photoemission Spectroscopy (XPS) data is recorded in the same way as the
ARPES spectra. It records two dimensional (energy- and angle- resolved)
intensities. Since the energy range for XPS scans are often very large, the
data files could be very large (up to several hundred megabytes). Generally, we
do not need any angle-resolved information, therefore the spectra can be saved
in simple energy vs. intensity two column format.

XPS data are generally measured in transmission mode, which has angular range
about (-3, 3) degree. Often there are some artifacts on the edge of detector, so
we can restrict only to the central part with integration limits for line
profile.

```python showLineNumbers
import arpespythontools as arp
import numpy as np

data, energy, angle = arp.load_ses_spectra("xps_data.txt")
intensity = arp.line_profile(data, angle, -2.5, 2.5)
```

If you require energy in terms of binding energy instead of kinetic energy, you
can convert using:

$$
E_{bin} = E_F - E_{kin}
$$

$$
E_F = h\nu - W_{\phi}
$$

where $E_F$ is Fermi energy, and $W_{\phi}$ is work function which is about 4.5
eV for our setup.

:::tip

If you do not need to specify the integration limits i.e., you want to sum over
full angle range, it is simpler to use `numpy.sum` method instead.

```python
import numpy as np
intensity = np.sum(data, axis=1)
```

:::

### Save/export XPS data

```python
xps_data = np.array([energy, intensity]).T
np.savetxt("xps_data.x_y", xps_data)
```

In the above example, we have saved the data in two column (`.x_y`) format,
which is suitable for importing to other XPS analysis software (like CasaXPS).

We may also use the module `save_xps` to save data.

```python
arp.save_xps(energy, intensity, "xps_data.x_y")
```

If you need to load the two column data using python:
```python
energy, intensity = np.loadtxt("xps_data.x_y", unpack=True)
```

:::tip

If you only need to obtain integrated intensity from the SES spectra for XPS
data analysis, you may try our [web application](
https://pranabdas.github.io/xps/).

:::
