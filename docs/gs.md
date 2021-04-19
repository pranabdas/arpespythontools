---
title: Getting started
sidebar_label: Setup
slug: /
---
### Requirements
You will need [Python 3](https://www.python.org/), and following Python packages
installed in your computer:

- [numpy](https://numpy.org/)
- [matplotlib](https://matplotlib.org/)
- [scipy](https://www.scipy.org/)

```bash
pip install --upgrade numpy scipy matplotlib
```

### Getting ARPES Python tools
You can clone the module using git:

```bash
git clone --depth 1 https://github.com/pranabdas/arpespythontools.git
```

Or you can directly download the package [here](
https://github.com/pranabdas/arpespythontools/releases).

You can install the required python packages from the `requirements.txt`
specification:
```bash
pip install --upgrade -r requirements.txt
```

### Importing ARPES python tools in your programs
We can import the module by `import arpespythontools as arp` so that later in
the code we can refer to the module as `arp` in short.
```python
import sys
sys.path.append("/parent/arpespythontools/path/")
import arpespythontools as arp
```

If you put the library inside your working directory, you don't need first two
lines above.

### Run Python and Jupyter notebook in Docker container

I have a [Dockerfile](
https://github.com/pranabdas/arpespythontools/blob/master/Dockerfile), you can
adjust according to your needs.
```dockerfile title="Dockerfile"
# Start from Ubuntu 20.04 LTS
FROM ubuntu:focal

# Update OS
RUN apt update && apt upgrade -y

# Install software packages
RUN apt install -y python3 python3-pip git fonts-open-sans

# Install pip packages
RUN pip3 install jupyterlab numpy scipy matplotlib

# bashrc settings
RUN echo 'alias jupyter-notebook=\
"jupyter-notebook --allow-root --no-browser --ip 0.0.0.0"' >> $HOME/.bashrc

# clone code from git repository and remove some packages
WORKDIR /root
RUN git clone --depth 1 https://github.com/pranabdas/arpespythontools.git

# leave in `/home` which we can map with the host
WORKDIR /home
```

Build the Docker image:
```bash
docker build -t arptools .
```

Run Docker (you can either forward a specific port or if are using Linux, map
host network):
```bash
docker run -ti -p 8888:8888 -v ${PWD}:/home arptools bash
docker run -ti --net=host -v /host/path:/home arptools bash
```

Launch Jupyter notebook inside the container:
```bash
jupyter-notebook
```

Include in your notebook:
```python
import sys
sys.path.append("/root")
import arpespythontools as arp
```

### Example data used in this tutorial
You can find the sample data set used in this tutorial [here](
http://dx.doi.org/10.17632/rfhhh54g9m).
