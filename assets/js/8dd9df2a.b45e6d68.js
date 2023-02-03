"use strict";(self.webpackChunkarpespythontools=self.webpackChunkarpespythontools||[]).push([[153],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return b}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,b=u["".concat(p,".").concat(m)]||u[m]||f[m]||a;return n?o.createElement(b,i(i({ref:t},s),{},{components:n})):o.createElement(b,i({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9202:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return b},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],l={title:"Extracting line profile",sidebar_label:"Line profile"},p=void 0,c={unversionedId:"line-profile",id:"line-profile",title:"Extracting line profile",description:"How can we extract line profile from our two-dimensional image data? The",source:"@site/docs/line-profile.md",sourceDirName:".",slug:"/line-profile",permalink:"/arpespythontools/docs/line-profile",draft:!1,editUrl:"https://github.com/pranabdas/arpespythontools/blob/main/docs/line-profile.md",tags:[],version:"current",frontMatter:{title:"Extracting line profile",sidebar_label:"Line profile"},sidebar:"docs",previous:{title:"k-space conversion",permalink:"/arpespythontools/docs/k-conv"},next:{title:"Slicing volume data",permalink:"/arpespythontools/docs/plane-slice"}},s={},u=[],f={toc:u},m="wrapper";function b(e){var t=e.components,l=(0,r.Z)(e,i);return(0,a.kt)(m,(0,o.Z)({},f,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"How can we extract line profile from our two-dimensional image data? The\nfunction ",(0,a.kt)("inlineCode",{parentName:"p"},"line_profile")," does the work. Let's say we want to extract an energy\ndistribution curve (EDC) from our ARPES spectrum."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"showLineNumbers",showLineNumbers:!0},"import arpespythontools as arp\ndata, energy, angle = arp.load_ses_spectra('sample_spectra.txt')\n\n# extract line profile between angles (-3, 3)\nedc = arp.line_profile(data, angle, -3, 3)\n\n# Plot image\nimport matplotlib.pyplot as plt\n%matplotlib inline\n# Above line is specific to Jupyter Notebook\nplt.figure(figsize = (8, 6))\nplt.plot(energy, edc/max(edc))\nplt.xlabel('$E_{kin}$ (eV)')\nplt.ylabel('Intensity (a.u)')\nplt.show()\n")),(0,a.kt)("picture",null,(0,a.kt)("source",{type:"image/webp",srcSet:n(9818).Z}),(0,a.kt)("img",{src:n(1551).Z,alt:"edc"})),(0,a.kt)("p",null,"How about if we want the momentum distribution curve (MDC) instead? That means\nwe have to extract line profile along the other axis, which can be  done by\ntransposing the data, and interchanging the axes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"showLineNumbers",showLineNumbers:!0},"# extract line profile between energy values (16.5, 16.7)\nmdc = arp.line_profile(data.T, energy, 16.5, 16.7)\n\n# Plot image\nimport matplotlib.pyplot as plt\n%matplotlib inline\n# Above line is specific to Jupyter Notebook\nplt.figure(figsize = (8, 6))\nplt.plot(angle, mdc/max(mdc))\nplt.xlabel('$\\\\theta$ (deg)')\nplt.ylabel('Intensity (a.u)')\nplt.show()\n")),(0,a.kt)("picture",null,(0,a.kt)("source",{type:"image/webp",srcSet:n(3679).Z}),(0,a.kt)("img",{src:n(7630).Z,alt:"mdc"})),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If you do not need to specify the integration limits i.e., you want to sum over\nfull angle (in case of EDC) or energy (in case MDC) range, it is simpler to use\n",(0,a.kt)("inlineCode",{parentName:"p"},"numpy.sum")," method instead."),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import numpy as np\nedc = np.sum(data, axis=1)\nmdc = np.sum(data, axis=0)\n"))))}b.isMDXComponent=!0},1551:function(e,t,n){t.Z=n.p+"assets/images/edc-967c65177ad769eda778aac9e7fe8322.png"},9818:function(e,t){t.Z="data:image/webp;base64,UklGRlQmAABXRUJQVlA4IEgmAABQ6QCdASrJAiQCPm02l0kkIqKhIfK5eIANiWlu4XaxH9V/6Ttrqkakf2Hmv6+uO+SfOn/evUB5gH68dIPzAfsP+5nvhehX/E/hz8AH88/23//7AD0AP2g9XD/jfvR8G/9X/4H7se2T///YA///qAf//rl+jn9C/GDwb/wn5CeefiO8w+wnqe42/Qf5n/fehf8e+w34j+8ftr/Yf3S+737P/xP714m/Hz+y/KT4Avy3+af3z+0ftv/Xf284222n+y9QL2P+g/5z/E/uD/jvTr/w/Qf7A/638hP6r9gP8h/of+j/u37yf2rnRfxH/M9gD+Tf1b/Y/3392/839Mf9F/0/9F/ov2E9rP51/lf+V/lPyV+wb+Uf1P/Yf3D/Q//H/K//////d968f3L/8vudfrx/yvz/FXjtRnNvRUr6a7Et6kJhd+GnARFfNdiW9SEwu/DTgIivmuxLepCYW3XQM06dgdMUd7efg9PusUJn4wcAdlWGebiiVIiytmkkHAqHtZWzSSDgVD2LvEwSoHmPBZAV+KSFhGRYlMBRcsuGUkg4FQ9rK2aSQcCoe1lbLMfjLbc19fdBXPnWOnkDgVD2srZpJBwKh7WVs0Au6FlVOOzRPL6RV+6bLUg4FQ9rK2aSQcCoe1lbNALuhZVTnQ5F4ghimIK8Coe1lbNJIOBUPaytmkiqEzC5V97kiLlC7K9vcdi7zO5wKh7WVs0kg4FQ9rK2aSKoTMNrnUSAA/koQyqVED1RpE0eEM56LgqJpYKqatsr4ocCoe1lbNJIOBUPaytmgF3Qsqpz07K2ztSSV6innp+WNIOBUPaytmkkGiwbspD7Q2JUslTCeYyzSSDgVD2srZpJBwKh7F3cV/qZebsvGrJceL82U2fjlSQcCoe1lbNJIOBUPayDbHrnZjKLWPAu0HS/UD8UosTzoaoVnENRHFIOBUPaytmkkHAqHtZVSs7xH8c3m3vsQCVt5nWtBjRnllgoDyADKF7vE62KahKegE9/a6shWNIOBUPaytmkkHAqHsXdwbvqfMpv+berSrLOJosqZxvpxlcTGwsaQcCoe1lbNJIOBUO+UK95ps7A44S2JlgbAlafaG0hL7IV1a1FfYzSSDgVD2srZpJBwKW8XwB0GCyUdxnMRUTfMjRg6nnoMG/TZuc43een5Y0g4FQ9rK2aSKoQ4ZoMAQJge6WY2FXLfBj7Q2kGeXiUOU4ex+PGaSQcCoe1lbNJIAwYWrneaPbSZmEh71MR6TcglRETf3TNxb/C+bBwKg6hzhrfTaShwKh7WVs0kg4FQ9qlzEQj5NHVlIj5hV+oLLGXwYggD+BmjMHU89PDyjXU680A50g4FQ9rK2aSQcCoexd3A0LPP2ODiWx9obSDgPbI+tOTEJXStmkkHAqHtZWzSSAMHeWsIiCxpBwHVb+pCuxEWFgeaSQcCoe1lbNJIN9DDobRVeNIOBUP9U/Bq8Q7cefGxZXbz0/LGkHAqHtZWyzH4unI1s6+yUOZcwbM0IP1lbNJIMzYO7jgqKZ7+Zi8nyhzOP5ifFYqG+B7NovoD55Zt1rmioe1lbNJIN9DDn2E7xuyaze6T14mo3gC36eQOBUPaz0Wl0oFubO+ZXMbCvvAqHcKAJ1HXedbmmpIA4Ug4FQ9rK2aSIw8RKiN9EV7SGiLHWj2YBR4N+UV4+TiGCHycLGPg89PvTM/LGkHAqHtZXOlb4TUnfwx8NWyso6JcbDH8vmgavnRizQC7oWVU56fljSDgVD2srVIyjTop8gU8aynmNrTO/sFtNwA72H6pzrfqvfEulVK2NzP2OBMTVpuykkHAqHtZWzSS8WBjNwj2y76hvhYx/K2OWzJGE7Kn+gEcF4C5C9q0u5D4POilLhnj0npFnhmi2oiNDg8Asy/hJTz0/LGkHAqHtZZRgXqSK688npnd1alhkOeZhFoO3ywZ8o7XjGeklSqlolvRFezu9SEs8pVPiSEws/6dr9NcFolioGTfJtL0paY6ZUSPeu/DTOENotN/+VicNfEcrW8/avZYahlLFyrfZWysnye/md3Ha8RJyRbEDXWGUhcyqsTj53u9cVeE2+0RwjoLbWj5B/NjirNa5+d/A/Bj7z0Ezd576jLP+ZqTO0wWswuhsfwaKkfpjkjpWohVSe0q/U2C1gXh4KK/MEwrhgXS3En+1TACbsnUfHta9sJhLa4hTAqHsQIjd+TPGCjd/zYTAcdGdPa6l9SEz3q+u5thHfpwT6PeaNd4LFLG7mPNN6DqJJCHtTQoE3mCQn/L2zNS+p9t5ibCo2jzU+qxBKX8H8+t7VMCnTw8geCTaWeu2Xhm2akKEPTtOm/L8icBEXSJtERMVitDUfpUNUNfRdTTNrK2aSQcCoe1lbKmIbH4+24OzYK8m0VCmzwi0lOOo8yzSCRApIOBUPkZWzSSDgVD2srZpI/7iXMQgGTEzwg8AMzEbp2p8MI9amPIvRePGaSQcCoe1lbNJIOBUPaytmmr6n9IOBUPaytmegA/v/cOvO7WRZGCyuIw5JsX7DX/LvZ5ygLyMXRG+MB4oIfQRuha2VSl0QSDbatya+cU4T44gLK7rlhaI6hKLZwAbE5PO1Sf+CMV1Iah7wRoOaflHYZXIw50p1h25PUvizHEkfWB/1FctEyx/f6kZIpU3+bM657/wWnYIxtT5yoWatgSAUSQqqwWecwlyNOk+8Ce21lsE3JDjeCT9opfYpXXjd4f1XwE/d7zgwemu+bCSHPPIB+L1Uz6od9FJy8cjgCeSL88ztNxHPDqTu6WRcqbQEdxR7JOmtQinAnbcDWBA1Ita7LT1mt+lwkga3GyimmCVSJfUKa+SgM6m4m0yxkuaQjYDLqDt3kkuClb3kgDnnzE9CnUvnKn3uawUOgZL6OTOHEWng2MTdg1C/A6xh64xaSPu6bUjH6Q+6xkQIvYOyT3EK7PkHbyYtTxmIJ7j1IHFL6eD2Qf9HDVBJnHSBwb5IvVGHUjbGjyAG3eTQoqKsXtXTxhGBu+h5NjcQlnmEBfa09clW3SQWx3+Y8t8v/tTNohTpMjIM2lC8n+tVL2sWplgAcOtQcLv8L7/Mq9cgxslOvDkickLS0HFRZIxDXHqGC4FdvotJrW86tRM/bA+XZqVMk2nip6TP0JODuQ3YUhNSpIVwwDIMtB7BKYct1qeMZ+9LhSSbBc0VhwVZvustG/9sPaDr7Dq8hHn0y+wH0I3F7qPG7qb7HnseVygxfEGhT8mW4WjwPKLa1el7/5yE58zbyc/usxE7riKyb0hhPOS9l+eY3j8aipf7fX2n3HuQHhInDUHjj1DV+f9J73NLCbwlhaLsjv6MlEhcJtXLsN4K/m2c/sKJrxtzO4hy4mS8ZCLF9zo0XcDA71d0STHHU//UokA7c1r4pmNMljHJoFy8RhYF1Qiq+1Uv8vmhQIY7chFT6V+9C5MGiAmPgbxTJAzeVPCEJl9dL99zM5kSkHcZlN8id/7H16aXqJ5FP/+XHW/GM+UcO9FHMzWgXZ6a4z45/8HxoemQHswwLyiurGluVJTKzt9kJnPybMMoPD4y0ZQkBv8rOsN0ECA2L7o8MdKYqoS785dvcmpc2lTEUvm6g7qVJfhxiJRTXajgKB/TBg/KzV258b/hCd43AqoRzHAGAmohBqEuoUL2725BdlqcvYChFLsZFUkwzE38nFC1uYfdgF36Fs3q78yTHlwLzVtoBlk9+2/j5bg7dSSEDJnslCi/1lPXpa2k4fvbY4qs4hES4cwCgHLbwP5OVVjWPNlN9/8TX6uykss2Ao0qv7YRp4Y5zjIs2dvZ72EqV7SlYyT/P/o25vX7Q1l/GFD+BK1q4d4/fo8+E+RA2zVsVGSZNksT2YNLXmBPMAELzIFTQRO9ixK13ZlTf9MLT26hy9Eg+mlk37vhGNd1adl1l+vK4DU9FjWRRX+rvj8plJPYiXQCu9ZnPNjhkm3eM7A/oQvNVDofvfE8/RxWM4KLC/uyGA9pk7aqAgBgXEb/H1lhutSKrZvD6JVpfGWrnBvwvJdJ/IclvXU+zmCAAewEsz8pmWSsIOY64N5ViDdDl5n6welqCo46fD0rVs6jIAhHyHsNGTp/+HOPimor7lx+L7JX6DVOoQlRtAzsBdGoOwb9Z0euRuIL5p+lEREVMYu/HNOIJz6Esb0XMzQ/2Zc4N9DpTBOhW6dSmqRPyiTy4S8EYbW13KgcVS4OWggMVMyIb+WoOL6iHd5ZaucIrbPKri4jl4OA7AfoiKKGUjmKldlSQSouEuk1nz/eDE1QiPSXqCMa+R8h9q8f9MoCFWY4JoCDk+HPA9LUFnh28QKp4j/kREfocSQzO9jMMd4zEV1cp2JHZqlRC1XNadjP4tnCyxXM9Z1ToTd8+0x8PpHSCdBOnZeBbiKPe9UEhOWCorA8WL9jLqs8AVFv08LBZEKqTIIbdRIfIjK8dLVc8L2dD/jQUsOAJ5nIn9kaGr8BS4IPFMnzk759XBqVYnZcbQBeBSi/I2P7BGxvIDSMTtHOsY4KUlq2qvpcl/Ua1xNheUlujrv4fOcfOVxjHEfRAzcFSyGQikYMKq+8V3eIwfdxUQqH9Q2k1rbTI2NsdnonyGZf7zptoygv1q8O+TX/0tSwXfqy1RQLxDlyVPO5Kdi7MBMX+myW9MAwg+XAtC4m7hmimK6EIuZJosqW+cJ5zNaWnkLDCCA8pYkiZc9lqdsrCBcoz0nnzxradYWjCYG7bnv3VWcXw3OJji8FfW6fRPeq/6MVgR2mjSZ/I1nnnQ/b1wb1L+1iKNquokupIDAqLARVpV1G7CnwXCECuNYTHYihzJFjHayDuQpRp4hymWS/UsS+j+ODYms4wy8OPWHRd65T2wrhtD6t+XvAxbB/9OLh1BCJbGn+nPT1puAqb54jes79/ecJ6voKCYAA947AdqjAaRVJJaezwn7LXBq6umqokej1YR2br3UxXuCpLsFl9yvtVLh2PMZKIWepey4KEq1hPefXZtRC5Ct5uDLozAjn0/CX1d0cFOaj3scXe1l8jaAxzJj+r1nYlnzoBbIWJASiHMvGJZ79NTmwxoXjMKaW++7jHiMjDNv4J1oDtl8mXxdUmiDLi95tuISS+YixDdcfget81fUahW0g6VN5dzhfyk1VWiiGsrGA8kgiE+YmjBnFxkav28cutyAHb9CwuXCwSfXervOBIZLgJbq66LF5YJfBcjxJFthshxPHrq7wt6pkwXLILCZUaILu4HYFNuLw53pEmHmYCJUASjjP/AwRP/QfFFwWCe64BopUdV0wO8TXwaV87+M0Aou4bNWen3rcRuzKKm+CrZmRRWO40XCaIaBVaqapuW1+uH7oeSA4cjHpYTuu6AXxsBKJ1tClonLdfmJv0t4qq7JbqmH49Xspd2ZDsZt7ysg7U4oSZX8Vw3BumMvN0G/GIqQr6o/JBUZNVlKbuZcBXozv/J5zMXR8/dmvLmJ5wHDlLA8SA9PU4KYGjB99Sm6FHocK6jQit+t4zZz45ca3kfoQgDkrDjBKQFeAIaWEFFbRUKq7NsqPDaTixUTby3ANJPI+Yn4Qy/lZZBvw3j6zlqgUCvULFcZ9JBbG2Bi1jsayFixcii5rLzMVkTqsF0rcQjpFeZQjfGtUSVzsm7xZN9IoXt+dAbcJu3TIBYR4HcqwOgVSnsNy2FKz3HqQNv25QVm4xC4qom/oGEhmG72nBb6NPmVFxPJZRXUoOOi6iU1wG3PxS0iTunyMZepSgHWg7/e74WQQfJ2BuHROtMC8jinbA1FKjjeQaqWPqMOKjMUvckOInQsSz9bLrdeJS6A0aDxvC/tXaDNo4IqUZ7lOpMtbBHk83SvnublK8hxrq/P5VhCj2LnpUmomg6AoIe8CoCDfqkr9SCNhxB2/ka+TUW/djLgZAViy/YYNnhnQKrZ+S+dkzbj15eYy3a5ejcmZZL5+5bMz2rFmY06lOwDw5b+v+Xbxjz/hSIlellTwYuUl2y+SpmDzwODKORUufdu2nxLNku2R/1QTF9ZUOV/JUxrNbawHTSgokoRzY4i3c5nkF0jJVYRgDflQgHD8ffOo9DRzcNffJJh0bLcc7zdYkfwCS25WuytD6JUrvl6Hv0cJKu3YiRRQGk8vR6L1PL1AMZ9ThL2oZ9bx8q369n7XoStKpqLpXxlKuiM2EHxIsXgh7IeQupZXqsjHZZnLPCS6bsAqskFDhxmju6n+1OfF4t01LVk2YqwiX878AAgdEUx4qXZhszWPmLznaj5iV4st9HBuv2Cc8BPHFF2CuNTJu7sp4eJ5N+OEmEkwrYoLX5SZc9/0dPIf/VyiwyzPdkIaq/Qff22BklIbg4P+3hzSiOeA4EA7GuT+kvS+5RwZc8tIS0xileWtkN4Sg0oMzXaaMEkqqGl6PUHIKsQK1fI4ktJSzejd9kIhPUeFnHQU6jNZY11cK+Mb4DLZeW1BYx4j9k7RSH8QpRsJtVrFKUuvVZ2qaXBWsU1EXfYiFQ5UQMZcRrR9DXK8gA+htgqPJ2zPR9KNTjnxgCUuVL4A/eYB4WX4RGr+SvD974+hKEkJElog0ZhWaBhia1jpFjHDQlpdyY51APFbqNvShi/VeSh2GKNm+5BN3frywvE2VreCmIHCcRBc+JjwX4mM5VNlGD2GsYOOqGHLcIDH0U/3qc9INRe0DeD31uXXSAG92kEqSc65sFhl9nk6vLj5weiui4+HX4ASnejCpK/B9w/7Hl4WQrkxNj0suu8Zr/JpVa+5FKWyVYWrxrEDX/zLHyn2DZ9y7mb70UTZpRdYzTvC0ZLOMt4DxpTuWji8p/iW3S1VyrEmSoYHNkuJv5ijUHl3If8ln1Np/xdu7eKNp+WoYBhOLus0A+GXm2meJnGdjAcxoUaiv7AR2y6S81MzDro74V3etV3xZnZgu3hdkv/1acOSFG0z/m02LEu4V6Ey89d/3vefazSQzE3T2F+lhuNBx92ylKRjiB+yBGJkag2TOMLuOjjHOhkym4K1DsHD4Ji155iOXAWJ0cCypHy18NYzOYOOFIe7NULLYxnEpUsAUzKfNnm1IyW2vwoBn/+1r4qC1pq6zKZbeF9hXs6XrxWl2m8zCfeS5Dby4eeogKkqjyfPMMBcWY55jIJq3WPc0fzsWClpW1/XzNdxXuEDkd/7v1LQejUcv03xzEeM5CJShcYDcbi6uR860pWMAwz/asPR4M0u1NvYfMr8pDcw7ZyPMyp85LctYWa/zI5uFtVm4eIX8Q1GiBk7MYMqhBlX+Zq3QZgDewXd1PSh7Sw1SpaQOsSj//tjd1dPWHZtVZ90pJLluQiDwvnOZp5/UbiOMe9Lr8z5QHcyikxajHgm1g79uDYKQlBfEw7kT9wrVbZqAiZpRqM9O8Tt6lt4aKFQQv4HjkDxJ9y6nvHRocoLLeS5PM7/rPwW0hqfWtKyywB8JkJBfc7zDtmaNWdeAqzgSJjbZ6tONCvIa4rlZkZ1O838kpE4dfad7BTl1GTf/WgcAD/OdtgO82OTtDBM5Nf2L579tQiZWjxkJhztd+9EowqhgGTc01DUCHDur6bJEbE+ZlMbLeDCH8Aym8ZxVP76YK7G0ly73aubdf8g9V4TExDIGO9M/QAAAAdyNJR/PDZFqh6UVWWXdtEWtQvie/XMBEshVVZfNfH3zHNKMNfa4jjXfprrbMIeRnDoKDbtxsN+9hQEi4aNudHV7PxuVnDoWGRM1M4iqugHj2X17x8d0VrcTo3a12cO7T6samMG/Dtdy/ZtIXMku5cmG39t1my1m0tz5Ma088HLykBdQs78AbIETnQ221SIbGgx8eaurOJwDFwfD7Mqf4hGKkLdk9cL3z2eikGNXKXTwzPO5l9v/HXzvSjI0F0YPYWRI6u9lHPujEneSuyYoCdGKqaGOKaTuK3YVk89gCjPP16euJK737GpRUQuiotzj0685a8pmsh9yZFssbS9jFBprGhLGx8VIo8qdIj4Kz6s60nQ7pfu0dF80iJ7BcMaL/RAzb8WHY+xvXwx05AU6D3Pen6dlk++vDsbkFqy7oztEwicbjrf700TY3Kxqyy9hz65E7/MUP7PLHwetSpl4GT4zRnn4l2efSb1xqPUZxp5wgs67+NZjUKPb9nOeHEX8ABrO7/BX6aCcXls+8HVGYaAA6ZHoHpFNiMaJM5zEm4hVv4BcwQPw8/2NIO9xPI6gpyiNm31zyQtBH1C/y1hZiLnMCSFLT3V3p9E/ACY3kxZJOEcY2/hp4Rq+GWexMnYXLE0+NvgfbXnrI1Lon2wkl6g/9p0QhPKpmRWSIY9tpqqIydC5uCeiLOWhcUDciGhn8Yp/R3eF3z+JOZZPzpb0iQquJWDBYvRjaA+dFPVpnbBZJAfSkqU/7Ss5QdbEEbvsL8IxDpVoqLi5zZDpTgq6byuUGPcVQxaP06toPBWtjhX/hGK4WSd0ZDbrQm9AD0HDfqzL74PAM6Soe3SU5x1Jkd3r9RJgU4H0uwapf6Ub1jespnc8gBTsFetHZohqrmBUIyGsskUto4NM5uF/xixI4I7JmtDNM1On/JH1Q52EFRjIEzeC8m23PXfbajk8VohYtIGs0VdySWbZ9kbxnAbr/t3oHE0zPJdAtgMatRBMyAETuztzUqcevUwUQbewSeXuVj1/iODUJdzIDsowP6QGm0UqNqYc/iz8bYcUznEWHGHX4bR5OTZnqqdbSuIHo4t8JzFS6BIFXmMJ6Sy2D9ztOZhpB6pbHbwnWtaGzXWC6YyHsehJ5x+QgE624VFhl4tWBqCmrNvbnqe2wEwjGvWr+zJjnB1DDMZ8cf6e5snE10Ll8C5c5MebdmoBEF9Q613cgq72MEvwhgbNsOe+vgx5t7VXB1ZCpeMOveupLBFsjif2VgS95QScM/6HNdr+ZPc0EuX3yj0gos3UJMUJMH28vi6AWAQ+oK0mJkeCO02xq1tIdvomDD/Xcjv3A9qDfayxOmOW0Tq8jGADn+pANmhy+wUhys6fwushEZDWFazb7TX9Bl68fJCTEm5oBpT6cM7AJ3CocR+XjfkgcT5SjKmpAteMc4zf2wabB5Q/6dfucSN1BirBt+FTAApd6FRuZd+wLudPCvKgSYF/hv5eZjQsjtHVB9EeH15WNg+9pCKeAoRsqTFLFcOvs5WGgt0ttx0FzAOxfR+cuuPEAh5i7Z/CFGU7hU3+0APyH3naSr9hDeO9aTz6eKlgMFEZmW9jH+2XSPqhQtGQTYOHhnJMeUIllfPYeuTZyYtB7Hen79ceCpOYaDb7x/HuiC5f9NedsrIXO+scw4IL6uZXFCN01BdpMWNFVA1woIsFhCegeeO0yt2OU5jgPThx+Mq0/k1w9JyfRDK8IFudzgzr1SC4fLOOMiLY6oS1DyKFovsgQ639Pf94WUc/CmvRl1hzQP+x9G6QBeTnrMcC+B//1lWUrH1SNzl2I/Tmhf7QtoFKFlOIZQDeyn6SDKJLFaHihm0yYY495nMA3IF4V35OCxuL+ITEe5za9eCuwaK9tAWgJCCWJhk05QiAmcHEYeqpAAACAyCfn+O8eH3Uky3i5X2uJcWIw3dx4s2oO9BHBdxekGAzrkGO4nUIpCgLlJsUeAHM8I1nBirp8oHLiXfJ9Uv81KTDH8HtN7AIkW98w78yBKO/y/z4bAFdOTXFlfAEmJjXP/4U1dFZjbmslvsNBT/lztLOoOCubisEwatigerzJrUdNE1AUPDcd+RgKUT1p6X3f1VRoAbYBW3bKPOyrX5ccLGENjQwvm/iJezp8wKQT8oTC+sneel2nQ2WvdQRKOp5mV3Q0YkAgyoiGQsU4DgKoBMATECeZ0L0+kWlktOKT34rZFZhTMZDKFA5mhIX3shq1xDMGqI7L2o0YWW9cxBFiW27LOdJesFjAer1dDiewx7L3vkOMVt0zhI4hTFhw6VmJ0XkDIgJqZPnWG5kjvbI4ttjxFs7LymswbuWt5iUAQjlYEat9Vo5wXMcNRqClI5q+oFgytKzeh4ZjjaylFUw9yNBAEwTa3yjDxbtY1f/pnrrmQ0GeMjt8qB691xvicpqCAWiv9hJ4fa+ljCof5CU+zfWZkMGr0FbdHUmfnVf6+0+Ig6mHIpB57BfWWWZoT7S1pNtGhQZCeTurY80hHOwFKViSytzGKrWvByLmX0QAD0zIHQt3J1xqTzl+6t9bzFy0MjmrnasALDbdV5vMjsgjg/+/yPVwBod2ltyFl6Bxd2yiZjB0ktqrRTiHIl1XpTu1kxcpXDOMcKlUexbThA1RAcZh8CA6eaQOpwdkvmW/cRE6kEbpqeEHbq7vlmUIryh319N/vTEivTk6ZFcmalOM07BKYGipN7WjfzN8gfo6kdvaBYavZuDbD16+rK55ofAlgtnkbMWGMqEkGLpMmwwEp4brq6NXcvU2GdsMuUOWMgLiDvZdZP/jih9T1MZm/kAkfnS2aNsOccRywvrdFSUJj9kR7pYRR1peEUTclClLvLHgQyD2vgY3d6Q5/8pJ6E1Q7+cegzrE5ToWQOmKzYCFLkYmRi4fxxUVP5MMn0zzjWaMke0L7b2oFECOrpMvob0kOAGmqIm/4u9TLnn/AgwxGdZmkNwVBHmLDh0rMTovIGRR84NrnWOh78BupBQifVSXUq6/XZWeCik336QIlYrEbkX8HvRhdsZjWVBY25VRNFP3Cd/iymA2HAIH9pKgKYPS9wl013pVuX2QC6kYzqP23wqPlpA6JN6eI7ILgbQ3DoqsnWLQf0vmnO8tkJQ+gNmkcrXwogWLQmABHm3H1wJdXtSo9Wyd/Y2eV7Cyp1rAvu3Jec72qT62jTC7iyumSE7sF/HvGGzPF7SBsq7nOYb7fpqe1dgYY7xJqokXdWJjiKRuGJpBpqtL6mktbqLCWZZQMTmzih7vszThHpt8ihMTDxuG7BGPKW+gQg0pLQ2ceX8pFDxVeaWGB2oyIXG4hBUus4/xpKbj7Vw+QKigLL0p4ptfab280xA839axOHIrIqaIn7W3EaabR6xT69zdULfCohAkYd3Ei57iJkeCnhvky4b3j3HVjPyjUNxxzVAMpYGsdLXpB/23ZkIBuNQEw6IwL1AN1hWRKx9JfunuKTyK6QqYi9wG66JBNC+gSQ7N8B2BF/4lC4u5lNgS/eJZwpWZWxhj7X16moC5IGDJbUxDz+aKLxzd/KQnwwHbRJSawxwvpX3CbZdHQQcVoCWm/kutnWbPIxbwDWpldRcRxsFUzu5YT4ktoIANJUlKfHjSnAJn4Ldzj1nj+JoCviy7/mEufjW5rZDc12x8lHF/sZXmc43L8bubIfNDuDv6EajffowX/hslyxRiTWFgw2Ks+6V+bWwiQQZbPyzolW3JG8CfA+fdi43P7iTKSeAfKpZpYyr6+Afhf+mCDG1+NI3DEkS4RjqK7MjzZFVjI/Vd+9K3tDxbCVIAZrLKnjVVFjIq58gW9vnMJ0RHYuY+JEUwORGI82HpZbbaHsFOKRZthf3DAzpgbjrHMrZRoH6j5Xvt539SRgpsWvPre8t5ylNmMkTP64cCEYSY2dN/m/eiGzkRQ7OZy6/ynWCrvJSfb3MDo/qeN5P2gLS6IchVXgoOa846I2Q29OdxruZfYGCxerjqjAiwT2sR3MrZIYc7WKKiqwRxDuHENwqwcgRe4wqEwwfABZeUasvfeci5Du38u6RQj2+3dVqmgZrqYX8Fl0IJI1KuCi+3CVYXNOF+qKjkJf1rK4ITaf2H93HIqP3l7phP94U8eLujUPnXfLU+fc2YmDZ/K/bVCSCtqHvaZ1CoxauiE5aTafXBWkzkO2klOra2I7YCMOFSNHbdSO4f/T/Ui1iFX8LvmeTbpmu9n+VmFCFiGv5K6VOS6knIXmOWrGyPpCBfqLscqg113YqEV1JFewWPVVKTrngJ8rHlqL1tqiHQc9C1ulpOZ1kVGotguuUsSgVwpGWZN4AJ+byNgI746V5gjI/g2pMCGVy7bjHDgUtwuDZmU+3sMwxuEXo5HJG6USim0HYhCeOwUCb8UxJf4wu3eaJPxdxgjnROoYkWUGzY/qAQxkCDXVD98T+mC/2u1DdR8GoH+GpcqAf1ESltECbWVr4gfxuW+Xdbxft6b6GD+kH8cwjZDGsZHXUTOJ91KNhSCrUBPUn1Onyw4DeVYs89WMQ/XDPG2YoP/enjoVIMppf5NuqCBECPBEY0OL8sSD2Ohr1eN9FpF0D7AEnfTjqkn2Ezl5yxkO/jqmzye6a/cbfBz4zhYDJvVLsLHQ1kVSjQDz11I7yDxeOCaBbe9MEDVKNPzi89YXUVHmeMKlTG6F3XKuXFNNDrVA7k9oPJ4PY5RZ9+UXCs8Z4V2z3EJ9Hw1xD4voEiXRavmDDdqkoyX99Y/+SMY4PDoGgZtCbfZ68bolhMoTTI+MHuQKhV+RC0lJj2jRQct67EXgZxfPEJB/9GRBwon31FAc2UAmhyZ2MX577p728lgHyNndxsN9YUaPjN9t5XcY9bkTqJS117+JXT6/mAhdAAkfydozrMG++/ny3p/NPlmmEhA5yJA6obq3LnfNk1z1e7D6tPf33opQ/EFZvt/crX3BlzsLWE7mweCMcEHXtBvhRvDm5O/dwbFnVBBV9kOBjy+cuz7MFm8wfn6DRmYEGoovwq05pd0NEz9vMcCVlqeO3POabDFl5rbmSyIPld3BTNz33p+61Dk65oHTBIQX7/Pl+RUAR3u8bbpevZVP1e75e8aFr60o6SORx1doulHsYq1q8xU/hzlU3gNfws2D+APq/WX+GLEiKE5unRPRFeytVU0WY8ljiQF8aY5JQFh0vx8ewMytf+3n/l73yRMWFjNc02N9CUqRTk9v0uxusHnGse3/VpdYfTx/7O0TVfLoUCxzIgN3obZXbAQRW2TaUoGgEBZJejuCuDhLcXhXfKFpaGdYH1sssci/IAF90TAQ2TPNoGFL0K6F80bEZmHYHSsOsj5yViUFK0AMZOCkrbEUyli/7yzW3xUWtgMV9Jk7Nfj+sCsAFHeOseDl9vUEG3HwZ1WvDr/hRuddBQfphEtICq1I3l0/tEQDuvQoyAxa9SLAUGEHzMAHpRzyvukKKATkZDrGdu7li5j9MErsAAAAAAA=="},7630:function(e,t,n){t.Z=n.p+"assets/images/mdc-e229ec1a0a22466d2e3bffa377ce25e2.png"},3679:function(e,t,n){t.Z=n.p+"assets/images/mdc-5896cee717ca43ae81e9e3c850e092df.webp"}}]);