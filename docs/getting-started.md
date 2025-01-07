---
title: Getting started
slug: /
keywords: ["arpes", "data analysis", "data visualization", "python", "matplotlib", "scienta-omicron", "scienta", "ses"]
---
### Installation

We will need [Python 3](https://www.python.org/) (version `3.9` - `3.12`)
installed in the system. You can check the Python version in your system, using
`python --version` in a terminal application. We can install latest stable
release of **arpespytontools** from PyPI:

```bash
pip install --upgrade arpespythontools
```

:::warning Still using older Python?

If you are still using an older version of Python, please use a compatible
version. If you are using Python `v3.8`, please install:

```bash
pip install arpespythontools==1.0.*
```

::::

I will be using Jupyter notebook to write and execute our python codes. You can
install Jupyter Lab using pip:

```bash
pip install --upgrade jupyterlab
```

Launch Jupyterlab and create or open a Python 3 Notebook:
```bash
jupyter lab
```

Of course, you can use any other IDE or code editor of your choice.

### Importing arpespythontools

We can import the module by `import arpespythontools as arp` so that later in
the code we can refer to the module as `arp` in short.
```python
import arpespythontools as arp
```

### Sample dataset

You can download the sample dataset used in this tutorial from [here](
http://dx.doi.org/10.17632/rfhhh54g9m).

:::info

If you are new to Python programming, you can check out my [python tutorial](
https://pranabdas.github.io/python-tutorial/).

:::
