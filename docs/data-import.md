### Importing ARPES data
At the moment, this module can only import data produced by Scienta-Omicron SES program. For the Spectral scans, we will use the plaintext (.txt) files as input, and in case of Fermi map data, we will need the ZIP files as input.

First thing first, import arpespythontools in your program  

    import arpespythontools as arp

##### Load ARPES Spectra from SES plaintext file

    [data, energy, angle] = arp.load_ses_spectra('sample_spectra.txt')

Here, `data` is a two dimensional numpy array; x-dimension is along energy and y-dimension is along angle/theta. `energy` and `angle` are one dimensional vectors of kinetic energy in eV and angle values in degree, respectively. 

Note that it is also possible to import the text data from an url source instead of local file path. 

```
[data, energy, angle] = arp.load_ses_spectra('https://data.mendeley.com/datasets/rfhhh54g9m/2/files/c3ef4285-ed19-447a-b7bf-effd94a62fbb/sample_spectrum.txt')
```

##### Load Fermi Map data from SES ZIP file

    [map_data, energy, theta, phi] = arp.load_ses_map('sample_map_data.zip')

`map_data` will contain three dimensional array of Fermi map data; x-dimension is along energy, y-dimension is along theta and z-dimension is along phi. `energy`, `theta`, and `phi` are one dimensional vectors of kinetic energy (eV), theta (deg), and phi (deg), respectively.

Notice that you do not need to unzip the SES produced ZIP file, the program directly reads from ZIP data.
