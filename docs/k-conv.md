### k-space conversion for single spectra
The electron analyzer records the intensities in angle and kinetic energy. In order to convert convert into k-space we can the following formula: 
$$ E_{bin} + W_ϕ + E_{kin} = h\nu $$

$$ k_{\parallel} = \sqrt{\frac{2m}{\hbar^2} E_{kin}} \sin(\theta) $$

The input data is in uniform grid of angle (degree) and energy. After point-wise conversion, we no longer have uniform grid in k-space. In order to store the data in uniform grid, we make use of interpolation. 

The **k_conv** function can convert two-dimensional Energy vs Theta data to Binding energy vs **k** (momentum). Here Binding energy below the Fermi energy is positive convention used. 

```py
import arpespythontools as arp  
[data, energy, angle] = arp.load_ses_spectra('sample_spectra.txt')
[data_k, e_bin, k] = arp.k_conv(data, energy, angle, 16.67) 
# Fermi energy = 16.67 eV  

# Plot image
import matplotlib.pyplot as plt
%matplotlib inline
# Above line is specific to Jupyter Notebook
plt.figure(figsize = (8, 6))
plt.imshow(data_k, origin = 'lower', aspect = 'auto', \
            extent = (k[0], k[-1], e_bin[0], e_bin[-1]))
plt.xlabel("k ($\AA^{-1}$)")
plt.ylabel('$E_{bin}$ (eV)')
plt.set_cmap('magma_r')
plt.show()
```
Which would produce a plot like this:  
![k-space-image-plot](./img/k-space-image-plot.png){:style="width:500px"} 

##### k-space conversion for 3D Fermi map data
Similarly, we can convert three dimensional (Energy, theta, phi)  Fermi map data to **k**-space by using **k_conv3D** function.

```py
[data, energy, theta, phi] = arp.load_ses_map('sample_map_data.zip')
[data_k, e_bin, kx, ky] = arp.k_conv3D(data, energy, theta, phi, 16.67)
# Fermi energy = 16.67 eV
```
Depending on the size of data and computing power, the program might take few minutes to complete the calculations.
