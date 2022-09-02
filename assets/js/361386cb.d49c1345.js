"use strict";(self.webpackChunkarpespythontools=self.webpackChunkarpespythontools||[]).push([[65],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,f=m["".concat(l,".").concat(u)]||m[u]||c[u]||o;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2322:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return c}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],p={title:"Loading ARPES data",sidebar_label:"Importing data",keywords:["arpes data","ses","scienta","scienta-omicron"]},l=void 0,s={unversionedId:"data-import",id:"data-import",title:"Loading ARPES data",description:"At the moment, this module can only import data produced by Scienta-Omicron SES",source:"@site/docs/data-import.md",sourceDirName:".",slug:"/data-import",permalink:"/arpespythontools/docs/data-import",draft:!1,editUrl:"https://github.com/pranabdas/arpespythontools/blob/main/docs/data-import.md",tags:[],version:"current",frontMatter:{title:"Loading ARPES data",sidebar_label:"Importing data",keywords:["arpes data","ses","scienta","scienta-omicron"]},sidebar:"docs",previous:{title:"Hands-on",permalink:"/arpespythontools/docs/category/hands-on"},next:{title:"Data visualization",permalink:"/arpespythontools/docs/visualization"}},d={},c=[{value:"Load ARPES Spectra from SES plaintext file",id:"load-arpes-spectra-from-ses-plaintext-file",level:3},{value:"Load Fermi Map data from SES ZIP file",id:"load-fermi-map-data-from-ses-zip-file",level:3}],m={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"At the moment, this module can only import data produced by Scienta-Omicron SES\nprogram. For the spectral scans, we will use the plaintext (",(0,o.kt)("inlineCode",{parentName:"p"},".txt"),") output file\nas input, and in case of Fermi map data, we will need the ZIP files as input\nformat."),(0,o.kt)("p",null,"First thing first, import ",(0,o.kt)("inlineCode",{parentName:"p"},"arpespythontools")," in your program:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import arpespythontools as arp\n")),(0,o.kt)("h3",{id:"load-arpes-spectra-from-ses-plaintext-file"},"Load ARPES Spectra from SES plaintext file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"data, energy, angle = arp.load_ses_spectra('sample_spectra.txt')\n")),(0,o.kt)("p",null,"Here, ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," is a two dimensional numpy array; x-dimension is along energy and\ny-dimension is along angle/theta. ",(0,o.kt)("inlineCode",{parentName:"p"},"energy")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"angle")," are one dimensional\nvectors of kinetic energy in eV and angle values are in degree, respectively."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you have a workflow to directly work from cloud services like Dropbox or\nOneDrive, it is possible to import data directly from an URL source instead of\nlocal file path. You will require additional code for Dropbox or OneDrive\nauthentication, which is not currently included with ",(0,o.kt)("strong",{parentName:"p"},"arpespythontools"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'url = "https://pranabdas.github.io/drive/datasets/arpes/sample_spectrum.txt"\ndata, energy, angle = arp.load_ses_spectra(url)\n')),(0,o.kt)("h3",{id:"load-fermi-map-data-from-ses-zip-file"},"Load Fermi Map data from SES ZIP file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"map_data, energy, theta, phi = arp.load_ses_map('sample_map_data.zip')\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"map_data")," will contain three dimensional array of Fermi map data; x-dimension\nis along energy, y-dimension is along theta and z-dimension is along phi.\n",(0,o.kt)("inlineCode",{parentName:"p"},"energy"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"theta"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"phi")," are one dimensional vectors of kinetic energy (eV),\ntheta (deg), and phi (deg), respectively."),(0,o.kt)("p",null,"Notice that you do not need to unzip the SES produced ",(0,o.kt)("inlineCode",{parentName:"p"},".zip")," file, the program\ndirectly reads from ",(0,o.kt)("inlineCode",{parentName:"p"},".zip")," file."))}u.isMDXComponent=!0}}]);