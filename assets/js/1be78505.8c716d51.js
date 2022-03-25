"use strict";(self.webpackChunkarpespythontools=self.webpackChunkarpespythontools||[]).push([[514,608],{7808:function(e,t,a){a.r(t),a.d(t,{default:function(){return re}});var n=a(7294),r=a(8790),l=a(4608),i=a(2600),o=a(6010),c=a(5999),d=a(8801),s="backToTopButton_RiI4",m="backToTopButtonShow_ssHd";function u(){var e=(0,d.aD)({threshold:300}),t=e.shown,a=e.scrollToTop;return n.createElement("button",{"aria-label":(0,c.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.Z)("clean-btn",d.kM.common.backToTopButton,s,t&&m),type:"button",onClick:a})}var b=a(5537),p=a(7462);function h(e){return n.createElement("svg",(0,p.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}var v="collapseSidebarButton_FykI",f="collapseSidebarButtonIcon_DTRl";function E(e){var t=e.onClick;return n.createElement("button",{type:"button",title:(0,c.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,c.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.Z)("button button--secondary button--outline",v),onClick:t},n.createElement(h,{className:f}))}var g=a(3366),k=a(9960),_=a(2389),C=["item","onItemClick","activePath","level","index"];function S(e){var t=e.categoryLabel,a=e.onClick;return n.createElement("button",{"aria-label":(0,c.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:a})}function I(e){var t=e.item,a=e.onItemClick,r=e.activePath,l=e.level,i=e.index,c=(0,g.Z)(e,C),s=t.items,m=t.label,u=t.collapsible,b=t.className,h=t.href,v=function(e){var t=(0,_.Z)();return(0,n.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,d.Wl)(e):void 0}),[e,t])}(t),f=(0,d._F)(t,r),E=(0,d.Mg)(h,r),I=(0,d.uR)({initialState:function(){return!!u&&(!f&&t.collapsed)}}),N=I.collapsed,Z=I.setCollapsed;!function(e){var t=e.isActive,a=e.collapsed,r=e.setCollapsed,l=(0,d.D9)(t);(0,n.useEffect)((function(){t&&!l&&a&&r(!1)}),[t,l,a,r])}({isActive:f,collapsed:N,setCollapsed:Z});var y=(0,d.fP)(),M=y.expandedItem,T=y.setExpandedItem;function x(e){void 0===e&&(e=!N),T(e?null:i),Z(e)}var L=(0,d.LU)().autoCollapseSidebarCategories;return(0,n.useEffect)((function(){u&&M&&M!==i&&L&&Z(!0)}),[u,M,i,Z,L]),n.createElement("li",{className:(0,o.Z)(d.kM.docs.docSidebarItemCategory,d.kM.docs.docSidebarItemCategoryLevel(l),"menu__list-item",{"menu__list-item--collapsed":N},b)},n.createElement("div",{className:(0,o.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":E})},n.createElement(k.Z,(0,p.Z)({className:(0,o.Z)("menu__link",{"menu__link--sublist":u,"menu__link--sublist-caret":!h&&u,"menu__link--active":f}),onClick:u?function(e){null==a||a(t),h?x(!1):(e.preventDefault(),x())}:function(){null==a||a(t)},"aria-current":E?"page":void 0,"aria-expanded":u?!N:void 0,href:u?null!=v?v:"#":v},c),m),h&&u&&n.createElement(S,{categoryLabel:m,onClick:function(e){e.preventDefault(),x()}})),n.createElement(d.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:N},n.createElement(H,{items:s,tabIndex:N?-1:0,onItemClick:a,activePath:r,level:l+1})))}var N=a(3919),Z=a(541),y="menuExternalLink_KU1_",M=["item","onItemClick","activePath","level","index"];function T(e){var t=e.item,a=e.onItemClick,r=e.activePath,l=e.level,i=(e.index,(0,g.Z)(e,M)),c=t.href,s=t.label,m=t.className,u=(0,d._F)(t,r),b=(0,N.Z)(c);return n.createElement("li",{className:(0,o.Z)(d.kM.docs.docSidebarItemLink,d.kM.docs.docSidebarItemLinkLevel(l),"menu__list-item",m),key:s},n.createElement(k.Z,(0,p.Z)({className:(0,o.Z)("menu__link",!b&&y,{"menu__link--active":u}),"aria-current":u?"page":void 0,to:c},b&&{onClick:a?function(){return a(t)}:void 0},i),s,!b&&n.createElement(Z.Z,null)))}var x="menuHtmlItem_hP_2";function L(e){var t=e.item,a=e.level,r=e.index,l=t.value,i=t.defaultStyle,c=t.className;return n.createElement("li",{className:(0,o.Z)(d.kM.docs.docSidebarItemLink,d.kM.docs.docSidebarItemLinkLevel(a),i&&x+" menu__list-item",c),key:r,dangerouslySetInnerHTML:{__html:l}})}var A=["item"];function P(e){var t=e.item,a=(0,g.Z)(e,A);switch(t.type){case"category":return n.createElement(I,(0,p.Z)({item:t},a));case"html":return n.createElement(L,(0,p.Z)({item:t},a));default:return n.createElement(T,(0,p.Z)({item:t},a))}}var F=["items"];function B(e){var t=e.items,a=(0,g.Z)(e,F);return n.createElement(d.D_,null,t.map((function(e,t){return n.createElement(P,(0,p.Z)({key:t,item:e,index:t},a))})))}var H=(0,n.memo)(B),w="menu_izAj",D="menuWithAnnouncementBar_l2a_";function W(e){var t=e.path,a=e.sidebar,r=e.className,l=function(){var e=(0,d.nT)().isActive,t=(0,n.useState)(e),a=t[0],r=t[1];return(0,d.RF)((function(t){var a=t.scrollY;e&&r(0===a)}),[e]),e&&a}();return n.createElement("nav",{className:(0,o.Z)("menu thin-scrollbar",w,l&&D,r)},n.createElement("ul",{className:(0,o.Z)(d.kM.docs.docSidebarMenu,"menu__list")},n.createElement(H,{items:a,activePath:t,level:1})))}var R="sidebar_RiAD",z="sidebarWithHideableNavbar_d0QC",U="sidebarHidden_Lg_2",q="sidebarLogo_YUvz";function V(e){var t=e.path,a=e.sidebar,r=e.onCollapse,l=e.isHidden,i=(0,d.LU)(),c=i.navbar.hideOnScroll,s=i.hideableSidebar;return n.createElement("div",{className:(0,o.Z)(R,c&&z,l&&U)},c&&n.createElement(b.Z,{tabIndex:-1,className:q}),n.createElement(W,{path:t,sidebar:a}),s&&n.createElement(E,{onClick:r}))}var K=n.memo(V),Y=function(e){var t=e.sidebar,a=e.path,r=(0,d.el)();return n.createElement("ul",{className:(0,o.Z)(d.kM.docs.docSidebarMenu,"menu__list")},n.createElement(H,{items:t,activePath:a,onItemClick:function(e){"category"===e.type&&e.href&&r.toggle(),"link"===e.type&&r.toggle()},level:1}))};function G(e){return n.createElement(d.Zo,{component:Y,props:e})}var j=n.memo(G);function J(e){var t=(0,d.iP)(),a="desktop"===t||"ssr"===t,r="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(K,e),r&&n.createElement(j,e))}var O=a(6775),Q={docPage:"docPage_Vq7T",docMainContainer:"docMainContainer_aAbH",docsWrapper:"docsWrapper_IhPJ",docSidebarContainer:"docSidebarContainer_F5kt",docMainContainerEnhanced:"docMainContainerEnhanced_GYyB",docSidebarContainerHidden:"docSidebarContainerHidden_kytD",collapsedDocSidebar:"collapsedDocSidebar_aVSx",expandSidebarButtonIcon:"expandSidebarButtonIcon_WaKh",docItemWrapperEnhanced:"docItemWrapperEnhanced_ikMU"};function X(e){var t=e.toggleSidebar;return n.createElement("div",{className:Q.collapsedDocSidebar,title:(0,c.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,c.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},n.createElement(h,{className:Q.expandSidebarButtonIcon}))}function $(e){var t,a=e.children,r=(0,d.Vq)();return n.createElement(n.Fragment,{key:null!=(t=null==r?void 0:r.name)?t:"noSidebar"},a)}function ee(e){var t=e.sidebar,a=e.hiddenSidebarContainer,r=e.setHiddenSidebarContainer,l=(0,O.TH)().pathname,i=(0,n.useState)(!1),c=i[0],s=i[1],m=(0,n.useCallback)((function(){c&&s(!1),r((function(e){return!e}))}),[r,c]);return n.createElement("aside",{className:(0,o.Z)(d.kM.docs.docSidebarContainer,Q.docSidebarContainer,a&&Q.docSidebarContainerHidden),onTransitionEnd:function(e){e.currentTarget.classList.contains(Q.docSidebarContainer)&&a&&s(!0)}},n.createElement($,null,n.createElement(J,{sidebar:t,path:l,onCollapse:m,isHidden:c})),c&&n.createElement(X,{toggleSidebar:m}))}function te(e){var t=e.hiddenSidebarContainer,a=e.children,r=(0,d.Vq)();return n.createElement("main",{className:(0,o.Z)(Q.docMainContainer,(t||!r)&&Q.docMainContainerEnhanced)},n.createElement("div",{className:(0,o.Z)("container padding-top--md padding-bottom--lg",Q.docItemWrapper,t&&Q.docItemWrapperEnhanced)},a))}function ae(e){var t=e.children,a=(0,d.Vq)(),r=(0,n.useState)(!1),l=r[0],o=r[1];return n.createElement(i.Z,{wrapperClassName:Q.docsWrapper},n.createElement(u,null),n.createElement("div",{className:Q.docPage},a&&n.createElement(ee,{sidebar:a.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:o}),n.createElement(te,{hiddenSidebarContainer:l},t)))}var ne=a(4739);function re(e){var t=e.versionMetadata,a=function(e){var t=e.route.routes,a=e.versionMetadata,n=e.location,l=t.find((function(e){return(0,O.LX)(n.pathname,e)}));if(!l)return null;var i=l.sidebar,o=i?a.docsSidebars[i]:void 0;return{docElement:(0,r.H)(e.route.routes,{versionMetadata:a}),sidebarName:i,sidebarItems:o}}(e);if(!a)return n.createElement(l.default,null);var i=a.docElement,c=a.sidebarName,s=a.sidebarItems;return n.createElement(n.Fragment,null,n.createElement(ne.Z,{version:t.version,tag:(0,d.os)(t.pluginId,t.version)}),n.createElement(d.FG,{className:(0,o.Z)(d.kM.wrapper.docsPages,d.kM.page.docsDocPage,e.versionMetadata.className)},n.createElement(d.qu,{version:t},n.createElement(d.bT,{name:c,items:s},n.createElement(ae,null,i)))))}},4608:function(e,t,a){a.r(t),a.d(t,{default:function(){return o}});var n=a(7294),r=a(2600),l=a(5999),i=a(8801);function o(){return n.createElement(n.Fragment,null,n.createElement(i.d,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),n.createElement(r.Z,null,n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}}}]);