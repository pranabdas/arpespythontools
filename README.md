<h1 align="center">ARPES Python Tools</h1>

<p align="center">
  <a href="https://github.com/pranabdas/arpespythontools/actions/workflows/python-tests.yml"><img src="https://github.com/pranabdas/arpespythontools/actions/workflows/python-tests.yml/badge.svg" alt="Python tests status"></a>
  <a href="https://github.com/pranabdas/arpespythontools/actions/workflows/deploy-gh-pages.yml"><img src="https://github.com/pranabdas/arpespythontools/actions/workflows/deploy-gh-pages.yml/badge.svg" alt="Deploy gh-pages status"></a>
  <a href="https://github.com/pranabdas/arpespythontools/actions/workflows/publish.yml"><img src="https://github.com/pranabdas/arpespythontools/actions/workflows/publish.yml/badge.svg" alt="Deploy gh-pages status"></a>
  <a href="https://github.com/pranabdas/arpespythontools/blob/master/LICENSE"><img src="https://img.shields.io/github/license/sourcerer-io/hall-of-fame.svg?colorB=A31F34"></a>
  <a href="https://pypi.org/project/arpespythontools/"><img src="https://img.shields.io/github/v/release/pranabdas/arpespythontools.svg" alt="Latest Release"/></a>
</p>

This python library helps you load, analyze and visualize ARPES data.

## Quick start

Install latest stable version:
```console
pip install --upgrade arpespythontools
```

Import and start using:

```python
import arpespythontools as arp

data, energy, angle = arp.load_ses_spectra("sample_spectrum.txt")
data_k, e_bin, k = arp.k_conv(data, energy, angle, 16.67)
```

Please find the detailed documentation here: https://pranabdas.github.io/arpespythontools/
