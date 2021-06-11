---
title: Image plot
---
This example provides basic example of image plot using **matplotlib**. There is
a huge list of customization possible using **matplotlib**. You can consult
[matplotlib](https://matplotlib.org) documentation for advanced customizations.
```python
import arpespythontools as arp
data, energy, angle = arp.load_ses_spectra('sample_spectra.txt')

# Plot image
import matplotlib.pyplot as plt
%matplotlib inline
# Above line is specific to Jupyter Notebook
plt.figure(figsize = (8, 6))
plt.imshow(data, origin = 'lower', aspect = 'auto', \
            extent = (angle[0], angle[-1], energy[0], energy[-1]))
plt.xlabel("$\\theta$ (deg)")
plt.ylabel('$E_{kin}$ (eV)')
plt.set_cmap('magma_r')
plt.show()
```

You should see a plot like this upon successful execution:

![plot-sample-spectra](/img/plot-sample-spectra.png)
