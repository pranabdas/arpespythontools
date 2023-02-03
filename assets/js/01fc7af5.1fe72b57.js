"use strict";(self.webpackChunkarpespythontools=self.webpackChunkarpespythontools||[]).push([[285],{3905:function(a,e,t){t.d(e,{Zo:function(){return o},kt:function(){return h}});var n=t(7294);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function m(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function p(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){s(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function r(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},m=Object.keys(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var i=n.createContext({}),l=function(a){var e=n.useContext(i),t=e;return a&&(t="function"==typeof a?a(e):p(p({},e),a)),t},o=function(a){var e=l(a.components);return n.createElement(i.Provider,{value:e},a.children)},N="mdxType",c={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(a,e){var t=a.components,s=a.mdxType,m=a.originalType,i=a.parentName,o=r(a,["components","mdxType","originalType","parentName"]),N=l(t),k=s,h=N["".concat(i,".").concat(k)]||N[k]||c[k]||m;return t?n.createElement(h,p(p({ref:e},o),{},{components:t})):n.createElement(h,p({ref:e},o))}));function h(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var m=t.length,p=new Array(m);p[0]=k;var r={};for(var i in e)hasOwnProperty.call(e,i)&&(r[i]=e[i]);r.originalType=a,r[N]="string"==typeof a?a:s,p[1]=r;for(var l=2;l<m;l++)p[l]=t[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},2093:function(a,e,t){t.r(e),t.d(e,{assets:function(){return o},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return N}});var n=t(7462),s=t(3366),m=(t(7294),t(3905)),p=["components"],r={title:"k-space conversion"},i=void 0,l={unversionedId:"k-conv",id:"k-conv",title:"k-space conversion",description:"The electron analyzer records the intensities in angle and kinetic energy. In",source:"@site/docs/k-conv.md",sourceDirName:".",slug:"/k-conv",permalink:"/arpespythontools/docs/k-conv",draft:!1,editUrl:"https://github.com/pranabdas/arpespythontools/blob/main/docs/k-conv.md",tags:[],version:"current",frontMatter:{title:"k-space conversion"},sidebar:"docs",previous:{title:"Data visualization",permalink:"/arpespythontools/docs/visualization"},next:{title:"Line profile",permalink:"/arpespythontools/docs/line-profile"}},o={},N=[{value:"k-space conversion for 3D Fermi map data",id:"k-space-conversion-for-3d-fermi-map-data",level:3},{value:"Multiprocessing version",id:"multiprocessing-version",level:3}],c={toc:N},k="wrapper";function h(a){var e=a.components,r=(0,s.Z)(a,p);return(0,m.kt)(k,(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,m.kt)("p",null,"The electron analyzer records the intensities in angle and kinetic energy. In\norder to convert convert into k-space we can use the following formula:"),(0,m.kt)("div",{className:"math math-display"},(0,m.kt)("span",{parentName:"div",className:"katex-display"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("msub",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msub"},"E"),(0,m.kt)("mrow",{parentName:"msub"},(0,m.kt)("mi",{parentName:"mrow"},"b"),(0,m.kt)("mi",{parentName:"mrow"},"i"),(0,m.kt)("mi",{parentName:"mrow"},"n"))),(0,m.kt)("mo",{parentName:"mrow"},"+"),(0,m.kt)("msub",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msub"},"W"),(0,m.kt)("mi",{parentName:"msub"},"\u03d5")),(0,m.kt)("mo",{parentName:"mrow"},"+"),(0,m.kt)("msub",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msub"},"E"),(0,m.kt)("mrow",{parentName:"msub"},(0,m.kt)("mi",{parentName:"mrow"},"k"),(0,m.kt)("mi",{parentName:"mrow"},"i"),(0,m.kt)("mi",{parentName:"mrow"},"n"))),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mi",{parentName:"mrow"},"h"),(0,m.kt)("mi",{parentName:"mrow"},"\u03bd")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"E_{bin} + W_\u03d5 + E_{kin} = h\\nu")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"E"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3361em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0576em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"bin"))))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,m.kt)("span",{parentName:"span"})))))),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.9694em",verticalAlign:"-0.2861em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"W"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3361em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.1389em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"\u03d5")))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2861em"}},(0,m.kt)("span",{parentName:"span"})))))),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"E"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3361em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0576em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"kin"))))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,m.kt)("span",{parentName:"span"})))))),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"h"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.06366em"}},"\u03bd")))))),(0,m.kt)("div",{className:"math math-display"},(0,m.kt)("span",{parentName:"div",className:"katex-display"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("msub",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msub"},"k"),(0,m.kt)("mo",{parentName:"msub",lspace:"0em",rspace:"0em"},"\u2225")),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("msqrt",{parentName:"mrow"},(0,m.kt)("mrow",{parentName:"msqrt"},(0,m.kt)("mfrac",{parentName:"mrow"},(0,m.kt)("mrow",{parentName:"mfrac"},(0,m.kt)("mn",{parentName:"mrow"},"2"),(0,m.kt)("mi",{parentName:"mrow"},"m")),(0,m.kt)("msup",{parentName:"mfrac"},(0,m.kt)("mi",{parentName:"msup",mathvariant:"normal"},"\u210f"),(0,m.kt)("mn",{parentName:"msup"},"2"))),(0,m.kt)("msub",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msub"},"E"),(0,m.kt)("mrow",{parentName:"msub"},(0,m.kt)("mi",{parentName:"mrow"},"k"),(0,m.kt)("mi",{parentName:"mrow"},"i"),(0,m.kt)("mi",{parentName:"mrow"},"n"))))),(0,m.kt)("mi",{parentName:"mrow"},"sin"),(0,m.kt)("mo",{parentName:"mrow"},"\u2061"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"\u03b8"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"k_{\\parallel} = \\sqrt{\\frac{2m}{\\hbar^2} E_{kin}} \\sin(\\theta)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0496em",verticalAlign:"-0.3552em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3448em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.5198em",marginLeft:"-0.0315em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mrel mtight"},"\u2225"))))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3552em"}},(0,m.kt)("span",{parentName:"span"})))))),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"2.44em",verticalAlign:"-0.7884em"}}),(0,m.kt)("span",{parentName:"span",className:"mord sqrt"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.6516em"}},(0,m.kt)("span",{parentName:"span",className:"svg-align",style:{top:"-4.4em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"4.4em"}}),(0,m.kt)("span",{parentName:"span",className:"mord",style:{paddingLeft:"1em"}},(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,m.kt)("span",{parentName:"span",className:"mfrac"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.3214em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.314em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"},"\u210f"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.7401em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.989em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))))),(0,m.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,m.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,m.kt)("span",{parentName:"span",style:{top:"-3.677em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"},"2"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"m")))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.686em"}},(0,m.kt)("span",{parentName:"span"}))))),(0,m.kt)("span",{parentName:"span",className:"mclose nulldelimiter"})),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"E"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3361em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0576em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"kin"))))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,m.kt)("span",{parentName:"span"})))))))),(0,m.kt)("span",{parentName:"span",style:{top:"-3.6116em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"4.4em"}}),(0,m.kt)("span",{parentName:"span",className:"hide-tail",style:{minWidth:"1.02em",height:"2.48em"}},(0,m.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"2.48em",viewBox:"0 0 400000 2592",preserveAspectRatio:"xMinYMin slice"},(0,m.kt)("path",{parentName:"svg",d:"M424,2478\nc-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514\nc0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20\ns-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121\ns209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081\nl0 -0c4,-6.7,10,-10,18,-10 H400000\nv40H1014.6\ns-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185\nc-2,6,-10,9,-24,9\nc-8,0,-12,-0.7,-12,-2z M1001 80\nh400000v40h-400000z"}))))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.7884em"}},(0,m.kt)("span",{parentName:"span"}))))),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mop"},"sin"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"\u03b8"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,m.kt)("admonition",{type:"info"},(0,m.kt)("p",{parentName:"admonition"},"In the above expression, photon momentum is ignored, which is good approximation\nfor photon energies in UV range or lower. If high photon energy is used (e.g.,\nsoft-x-ray), we will need correction for photon momentum.")),(0,m.kt)("p",null,"The input data is in uniform grid of angle (degree) and energy. After point-wise\nconversion, we no longer have uniform grid in k-space. In order to store the\ndata in uniform grid, we make use of interpolation."),(0,m.kt)("p",null,"The ",(0,m.kt)("inlineCode",{parentName:"p"},"k_conv")," function can convert two-dimensional Energy vs theta data to\nbinding energy vs ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"k")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"k")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k")))))," (momentum). Here binding energy below the Fermi energy is\npositive convention used."),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-python",metastring:"showLineNumbers",showLineNumbers:!0},"import arpespythontools as arp\ndata, energy, angle = arp.load_ses_spectra('sample_spectra.txt')\ndata_k, e_bin, k = arp.k_conv(data, energy, angle, 16.67)\n# Fermi energy = 16.67 eV\n\n# Plot image\nimport matplotlib.pyplot as plt\n%matplotlib inline\n# Above line is specific to Jupyter Notebook\nplt.figure(figsize = (8, 6))\nplt.imshow(data_k, origin = 'lower', aspect = 'auto', \\\n            extent = (k[0], k[-1], e_bin[0], e_bin[-1]))\nplt.xlabel(\"k ($\\AA^{-1}$)\")\nplt.ylabel('$E_{bin}$ (eV)')\nplt.set_cmap('magma_r')\nplt.show()\n")),(0,m.kt)("p",null,"Which would produce a plot like this:"),(0,m.kt)("picture",null,(0,m.kt)("source",{type:"image/webp",srcSet:t(1644).Z}),(0,m.kt)("img",{src:t(6171).Z,alt:"k-space-image-plot"})),(0,m.kt)("h3",{id:"k-space-conversion-for-3d-fermi-map-data"},"k-space conversion for 3D Fermi map data"),(0,m.kt)("p",null,"Similarly, we can convert three dimensional (Energy, theta, phi)  Fermi map data\nto ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"k")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"k")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"))))),"-space by using ",(0,m.kt)("inlineCode",{parentName:"p"},"k_conv3d")," function."),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-python"},"data, energy, theta, phi = arp.load_ses_map('sample_map_data.zip')\ndata_k, e_bin, kx, ky = arp.k_conv3d(data, energy, theta, phi, 16.67)\n# Fermi energy = 16.67 eV\n")),(0,m.kt)("admonition",{type:"caution"},(0,m.kt)("p",{parentName:"admonition"},"Depending on the size of data matrix and computing power, the ",(0,m.kt)("inlineCode",{parentName:"p"},"k_conv3d")," might\ntake several minutes to complete.")),(0,m.kt)("h3",{id:"multiprocessing-version"},"Multiprocessing version"),(0,m.kt)("p",null,"There is also a multiprocessing implementation of the ",(0,m.kt)("inlineCode",{parentName:"p"},"k_conv3d"),", which should\nbe up to as many times faster as many processor cores are available."),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-python"},"data_k, e_bin, kx, ky = arp.k_conv3d_mp(data, energy, theta, phi, 16.67)\n")))}h.isMDXComponent=!0},6171:function(a,e,t){e.Z=t.p+"assets/images/k-space-image-plot-1b819896be619f7181cd761430ff2513.png"},1644:function(a,e,t){e.Z=t.p+"assets/images/k-space-image-plot-477d37efc4099fc8d7b6fba4d3158466.webp"}}]);