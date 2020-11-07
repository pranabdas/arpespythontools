### Getting started with ARPES Python tools

**Requirements:**  
You will need [Python 3](https://www.python.org/){:target="_blank"}, and following Python packages installed in your computer:  

+ [numpy](https://numpy.org/){:target="_blank"}
+ [matplotlib](https://matplotlib.org/){:target="_blank"}
+ [scipy](https://www.scipy.org/){:target="_blank"}

```py
pip3 install numpy scipy matplotlib
```

**Installation of ARPES Python tools:**  
You can download/clone the module from GitHub - [https://github.com/pranabdas/arpespythontools](https://github.com/pranabdas/arpespythontools) 

```
git clone --depth 1 https://github.com/pranabdas/arpespythontools.git
```

**Importing ARPES python tools in your programs:**  
You can import the module by  `import arpespythontools as arp` so that later in the code you can refer to the module as `arp` in short.
```py 
import sys
sys.path.append("/parent/arpespythontools/path/")
import arpespythontools as arp
```

**Run ARPES python tools along with Jupyter notebook in Docker:** 

[Dockerfile](https://github.com/pranabdas/arpespythontools/blob/master/Dockerfile): 
```dockerfile
# Start from Ubuntu 20.04 LTS
FROM ubuntu:focal

# Update OS
RUN apt update && apt upgrade -y

# Install software packages 
RUN apt install -y python3 python3-pip git fonts-open-sans

# Install pip packages 
RUN pip3 install jupyterlab numpy scipy matplotlib

# bashrc settings
RUN echo 'alias jupyter-notebook="jupyter-notebook --allow-root --no-browser"' \
>> $HOME/.bashrc

# clone code from git repository and remove some packages
WORKDIR /root
RUN git clone --depth 1 https://github.com/pranabdas/arpespythontools.git

# leave in `/home` which we can map with the host
WORKDIR /home
```

Build the Docker image:
```
docker build -t arptools .
```

Run Docker (you can either forward a specific port or map host network):
```
docker run -ti -p 8888:8888 -v ${pwd}:/home arptools bash
docker run -ti --net=host -v /host/path:/home arptools bash
```

Launch Jupyter notebook inside the container: 
```
jupyter-notebook
```

Include in your notebook:
```py
import sys
sys.path.append("/root")
import arpespythontools as arp
```

**Sample data used in this tutorial:**   
You can find the sample data set used in this tutorial here - [http://dx.doi.org/10.17632/rfhhh54g9m](http://dx.doi.org/10.17632/rfhhh54g9m){:target="_blank"}
