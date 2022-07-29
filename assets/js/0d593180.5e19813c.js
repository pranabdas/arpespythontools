"use strict";(self.webpackChunkarpespythontools=self.webpackChunkarpespythontools||[]).push([[423],{3905:function(a,e,t){t.d(e,{Zo:function(){return o},kt:function(){return k}});var s=t(7294);function n(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function m(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,s)}return t}function p(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){n(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function r(a,e){if(null==a)return{};var t,s,n=function(a,e){if(null==a)return{};var t,s,n={},m=Object.keys(a);for(s=0;s<m.length;s++)t=m[s],e.indexOf(t)>=0||(n[t]=a[t]);return n}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(s=0;s<m.length;s++)t=m[s],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(n[t]=a[t])}return n}var i=s.createContext({}),l=function(a){var e=s.useContext(i),t=e;return a&&(t="function"==typeof a?a(e):p(p({},e),a)),t},o=function(a){var e=l(a.components);return s.createElement(i.Provider,{value:e},a.children)},N={inlineCode:"code",wrapper:function(a){var e=a.children;return s.createElement(s.Fragment,{},e)}},c=s.forwardRef((function(a,e){var t=a.components,n=a.mdxType,m=a.originalType,i=a.parentName,o=r(a,["components","mdxType","originalType","parentName"]),c=l(t),k=n,h=c["".concat(i,".").concat(k)]||c[k]||N[k]||m;return t?s.createElement(h,p(p({ref:e},o),{},{components:t})):s.createElement(h,p({ref:e},o))}));function k(a,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof a||n){var m=t.length,p=new Array(m);p[0]=c;var r={};for(var i in e)hasOwnProperty.call(e,i)&&(r[i]=e[i]);r.originalType=a,r.mdxType="string"==typeof a?a:n,p[1]=r;for(var l=2;l<m;l++)p[l]=t[l];return s.createElement.apply(null,p)}return s.createElement.apply(null,t)}c.displayName="MDXCreateElement"},4018:function(a,e,t){t.r(e),t.d(e,{assets:function(){return o},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return N}});var s=t(7462),n=t(3366),m=(t(7294),t(3905)),p=["components"],r={title:"Working with XPS data",sidebar_label:"XPS data"},i=void 0,l={unversionedId:"xps",id:"xps",title:"Working with XPS data",description:"X-ray Photoemission Spectroscopy (XPS) data is recorded in the same way as the",source:"@site/docs/xps.md",sourceDirName:".",slug:"/xps",permalink:"/arpespythontools/docs/xps",draft:!1,editUrl:"https://github.com/pranabdas/arpespythontools/blob/main/docs/xps.md",tags:[],version:"current",frontMatter:{title:"Working with XPS data",sidebar_label:"XPS data"},sidebar:"docs",previous:{title:"Enhancing spectra",permalink:"/arpespythontools/docs/enhancements"},next:{title:"Igor text",permalink:"/arpespythontools/docs/igor"}},o={},N=[{value:"Save/export XPS data",id:"saveexport-xps-data",level:3}],c={toc:N};function k(a){var e=a.components,t=(0,n.Z)(a,p);return(0,m.kt)("wrapper",(0,s.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,m.kt)("p",null,"X-ray Photoemission Spectroscopy (XPS) data is recorded in the same way as the\nARPES spectra. It records two dimensional (energy- and angle- resolved)\nintensities. Since the energy range for XPS scans are often very large, the\ndata files could be very large (up to several hundred megabytes). Generally, we\ndo not need any angle-resolved information, therefore the spectra can be saved\nin simple energy vs. intensity two column format."),(0,m.kt)("p",null,"XPS data are generally measured in transmission mode, which has angular range\nabout (-3, 3) degree. Often there are some artifacts on the edge of detector, so\nwe can restrict only to the central part with integration limits for line\nprofile."),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-python",metastring:"showLineNumbers",showLineNumbers:!0},'import arpespythontools as arp\nimport numpy as np\n\ndata, energy, angle = arp.load_ses_spectra("xps_data.txt")\nintensity = arp.line_profile(data, angle, -2.5, 2.5)\n')),(0,m.kt)("p",null,"If you require energy in terms of binding energy instead of kinetic energy, you\ncan convert using:"),(0,m.kt)("div",{className:"math math-display"},(0,m.kt)("span",{parentName:"div",className:"katex-display"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("msub",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msub"},"E"),(0,m.kt)("mrow",{parentName:"msub"},(0,m.kt)("mi",{parentName:"mrow"},"b"),(0,m.kt)("mi",{parentName:"mrow"},"i"),(0,m.kt)("mi",{parentName:"mrow"},"n"))),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("msub",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msub"},"E"),(0,m.kt)("mi",{parentName:"msub"},"F")),(0,m.kt)("mo",{parentName:"mrow"},"\u2212"),(0,m.kt)("msub",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msub"},"E"),(0,m.kt)("mrow",{parentName:"msub"},(0,m.kt)("mi",{parentName:"mrow"},"k"),(0,m.kt)("mi",{parentName:"mrow"},"i"),(0,m.kt)("mi",{parentName:"mrow"},"n")))),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"E_{bin} = E_F - E_{kin}")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"E"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3361em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0576em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"bin"))))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,m.kt)("span",{parentName:"span"})))))),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"E"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3283em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0576em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.13889em"}},"F")))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,m.kt)("span",{parentName:"span"})))))),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"E"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3361em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0576em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"kin"))))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,m.kt)("span",{parentName:"span"}))))))))))),(0,m.kt)("div",{className:"math math-display"},(0,m.kt)("span",{parentName:"div",className:"katex-display"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("msub",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msub"},"E"),(0,m.kt)("mi",{parentName:"msub"},"F")),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mi",{parentName:"mrow"},"h"),(0,m.kt)("mi",{parentName:"mrow"},"\u03bd"),(0,m.kt)("mo",{parentName:"mrow"},"\u2212"),(0,m.kt)("msub",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msub"},"W"),(0,m.kt)("mi",{parentName:"msub"},"\u03d5"))),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"E_F = h\\nu - W_{\\phi}")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"E"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3283em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0576em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.13889em"}},"F")))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,m.kt)("span",{parentName:"span"})))))),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7778em",verticalAlign:"-0.0833em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"h"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.06366em"}},"\u03bd"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.9694em",verticalAlign:"-0.2861em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"W"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3361em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.1389em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"\u03d5"))))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2861em"}},(0,m.kt)("span",{parentName:"span"}))))))))))),(0,m.kt)("p",null,"where ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("msub",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msub"},"E"),(0,m.kt)("mi",{parentName:"msub"},"F"))),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"E_F")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"E"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3283em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0576em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.13889em"}},"F")))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,m.kt)("span",{parentName:"span"}))))))))))," is Fermi energy, and ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("msub",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msub"},"W"),(0,m.kt)("mi",{parentName:"msub"},"\u03d5"))),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"W_{\\phi}")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.9694em",verticalAlign:"-0.2861em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"W"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3361em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.1389em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"\u03d5"))))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2861em"}},(0,m.kt)("span",{parentName:"span"}))))))))))," is work function which is about 4.5\neV for our setup."),(0,m.kt)("admonition",{type:"tip"},(0,m.kt)("p",{parentName:"admonition"},"If you do not need to specify the integration limits i.e., you want to sum over\nfull angle range, it is simpler to use ",(0,m.kt)("inlineCode",{parentName:"p"},"numpy.sum")," method instead."),(0,m.kt)("pre",{parentName:"admonition"},(0,m.kt)("code",{parentName:"pre",className:"language-python"},"import numpy as np\nintensity = np.sum(data, axis=1)\n"))),(0,m.kt)("h3",{id:"saveexport-xps-data"},"Save/export XPS data"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-python"},'xps_data = np.array([energy, intensity]).T\nnp.savetxt("xps_data.x_y", xps_data)\n')),(0,m.kt)("p",null,"In the above example, we have saved the data in two column (",(0,m.kt)("inlineCode",{parentName:"p"},".x_y"),") format,\nwhich is suitable for importing to other XPS analysis software (like CasaXPS)."),(0,m.kt)("p",null,"We may also use the module ",(0,m.kt)("inlineCode",{parentName:"p"},"save_xps")," to save data."),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-python"},'arp.save_xps(energy, intensity, "xps_data.x_y")\n')),(0,m.kt)("p",null,"If you need to load the two column data using python:"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-python"},'energy, intensity = np.loadtxt("xps_data.x_y", unpack=True)\n')),(0,m.kt)("admonition",{type:"tip"},(0,m.kt)("p",{parentName:"admonition"},"If you only need to obtain integrated intensity from the SES spectra for XPS\ndata analysis, you may try our ",(0,m.kt)("a",{parentName:"p",href:"https://pranabdas.github.io/xps/"},"web application"),".")))}k.isMDXComponent=!0}}]);