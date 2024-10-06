"use strict";(self.webpackChunkarpespythontools=self.webpackChunkarpespythontools||[]).push([[761],{4565:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var t=o(4848),a=o(8453),s=o(1432);const r="# Build command  : docker build -t arptools .\n# Run docker     : docker run -ti --net=host -v /host/path:/home arptools bash\n#                : docker run -ti -p 8888:8888 -v ${PWD}:/home arptools bash\n# Launch jupyter : jupyter-notebook\n#                : jupyter-notebook --ip 0.0.0.0\n#                : jupyter-notebook --ip 0.0.0.0 --port 9999\n# In Jupyter     : import sys\n#                : sys.path.append(\"/root\")\n#                : import arpespythontools as arp\n\n# Start from Ubuntu 22.04 LTS\nFROM ubuntu:jammy\n\n# Update OS\nRUN apt update && apt upgrade -y\n\n# Install software packages\nRUN apt install -y python3 python3-pip git fonts-open-sans\n\n# Install pip packages\nRUN pip3 install arpespythontools\n\n# jupyterlab settings\nRUN mkdir /etc/jupyter && \\\n    (echo \"c.ServerApp.ip = '0.0.0.0'\" && \\\n     echo \"c.ServerApp.allow_root = True\" && \\\n     echo \"c.ServerApp.open_browser = False\") \\\n        >> /etc/jupyter/jupyter_server_config.py\n\n# clone arpespythontools to `/root` directory\nWORKDIR /root\n\n# matplotlib customizations (optional)\nRUN mkdir -p /root/.config/matplotlib && \\\n touch /root/.config/matplotlib/matplotlibrc && \\\n (echo 'font.family       : sans-serif' && \\\n  echo 'font.style        : normal' && \\\n  echo 'font.weight       : regular' && \\\n  echo 'font.sans-serif   : Open Sans, DejaVu Sans' && \\\n  echo 'axes.linewidth    : 0.8' && \\\n  echo 'axes.titlesize    : 16' && \\\n  echo 'axes.labelsize    : 16' && \\\n  echo 'xtick.major.size  : 8' && \\\n  echo 'xtick.minor.size  : 4' && \\\n  echo 'xtick.major.width : 0.8' && \\\n  echo 'xtick.minor.width : 0.6' && \\\n  echo 'xtick.labelsize   : 16' && \\\n  echo 'xtick.direction   : in' && \\\n  echo 'ytick.major.size  : 8' && \\\n  echo 'ytick.minor.size  : 4' && \\\n  echo 'ytick.major.width : 0.8' && \\\n  echo 'ytick.minor.width : 0.6' && \\\n  echo 'ytick.labelsize   : 16' && \\\n  echo 'ytick.direction   : in' && \\\n  echo 'image.origin      : lower') >> /root/.config/matplotlib/matplotlibrc\n\n# leave in `/home` which we can map with the host\nWORKDIR /home\n",i={title:"Getting started",slug:"/",keywords:["arpes","data analysis","data visualization","python","matplotlib","scienta-omicron","scienta","ses"]},l=void 0,c={id:"gs",title:"Getting started",description:"Installation",source:"@site/docs/gs.md",sourceDirName:".",slug:"/",permalink:"/arpespythontools/docs/",draft:!1,unlisted:!1,editUrl:"https://github.com/pranabdas/arpespythontools/blob/main/docs/gs.md",tags:[],version:"current",frontMatter:{title:"Getting started",slug:"/",keywords:["arpes","data analysis","data visualization","python","matplotlib","scienta-omicron","scienta","ses"]},sidebar:"docs",next:{title:"Hands-on",permalink:"/arpespythontools/docs/category/hands-on"}},p={},h=[{value:"Installation",id:"installation",level:3},{value:"Importing arpespythontools",id:"importing-arpespythontools",level:3},{value:"Run in Docker container (optional)",id:"run-in-docker-container-optional",level:3},{value:"Sample dataset",id:"sample-dataset",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(n.p,{children:["We will need ",(0,t.jsx)(n.a,{href:"https://www.python.org/",children:"Python 3"})," installed in your system. We\ncan install latest stable release of ",(0,t.jsx)(n.strong,{children:"arpespytontools"})," from PyPI:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pip install --upgrade arpespythontools\n"})}),"\n",(0,t.jsx)(n.p,{children:"I will be using Jupyter notebook to write and execute our python codes. You can\ninstall Jupyter Lab using pip:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pip install --upgrade jupyterlab\n"})}),"\n",(0,t.jsx)(n.p,{children:"Of course, you can use any other IDE or code editor of your choice."}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["If you are new to python programming, you can check out my ",(0,t.jsx)(n.a,{href:"https://pranabdas.github.io/python-tutorial/",children:"python tutorial"}),"."]})}),"\n",(0,t.jsx)(n.h3,{id:"importing-arpespythontools",children:"Importing arpespythontools"}),"\n",(0,t.jsxs)(n.p,{children:["We can import the module by ",(0,t.jsx)(n.code,{children:"import arpespythontools as arp"})," so that later in\nthe code we can refer to the module as ",(0,t.jsx)(n.code,{children:"arp"})," in short."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import arpespythontools as arp\n"})}),"\n",(0,t.jsx)(n.h3,{id:"run-in-docker-container-optional",children:"Run in Docker container (optional)"}),"\n",(0,t.jsxs)(n.p,{children:["If you want to setup and run python in a container, I have a\n",(0,t.jsx)(n.a,{href:"https://github.com/pranabdas/arpespythontools/blob/master/Dockerfile",children:"Dockerfile"}),",\nplease adjust according to your needs."]}),"\n","\n",(0,t.jsx)(s.A,{language:"dockerfile",title:"Dockerfile",showLineNumbers:!0,children:r}),"\n",(0,t.jsxs)(n.p,{children:["Build the Docker image (you can specify any name for your image, here\n",(0,t.jsx)(n.code,{children:"arptools"}),"):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker build -t arptools .\n"})}),"\n",(0,t.jsx)(n.p,{children:"Run Docker (you can either forward a specific port or if are using Linux, map\nhost network):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker run -ti -p 8888:8888 -v ${PWD}:/home arptools bash\ndocker run -ti --net=host -v /host/path:/home arptools bash\n"})}),"\n",(0,t.jsx)(n.p,{children:"Launch Jupyterlab inside the container:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"jupyter-lab\n"})}),"\n",(0,t.jsx)(n.h3,{id:"sample-dataset",children:"Sample dataset"}),"\n",(0,t.jsxs)(n.p,{children:["You can download the sample dataset used in this tutorial from ",(0,t.jsx)(n.a,{href:"http://dx.doi.org/10.17632/rfhhh54g9m",children:"here"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}}}]);