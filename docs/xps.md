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

```python
import arpespythontools as arp
import numpy as np

data, energy, angle = arp.load("xps_data.txt")
intensity = arp.line_profile(data, angle, -2.5, 2.5)

# energy is in terms of kinetic energy (eV)
# if you need in terms of binding energy:
# e_bin = fermi_energy - e_kin

xps_data = data = np.array([energy, intensity]).T
np.savetxt("xps_data.x_y", xps_data)
```

In the above example, we have saved the data in two column (`.x_y`) format,
which is suitable for importing to other XPS analysis software (like CasaXPS).

:::tip

If you do not need to specify the integration limits i.e., you want to sum over
full angle range, it is simpler to use `numpy.sum` method instead.

```python
import numpy as np
intensity = np.sum(data, axis=1)
```

:::