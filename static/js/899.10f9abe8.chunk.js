"use strict";(self.webpackChunk_goit_react_hw_08_phonebook_=self.webpackChunk_goit_react_hw_08_phonebook_||[]).push([[899],{4708:function(n,r,e){var t=e(9439),o=e(7462),i=e(2791),a=e(1402),c=e(1540),u=e(184),s=function(n,r){return(0,o.Z)({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},r&&!n.vars&&{colorScheme:n.palette.mode})},l=function(n){return(0,o.Z)({color:(n.vars||n).palette.text.primary},n.typography.body1,{backgroundColor:(n.vars||n).palette.background.default,"@media print":{backgroundColor:(n.vars||n).palette.common.white}})};r.ZP=function(n){var r=(0,a.Z)({props:n,name:"MuiCssBaseline"}),e=r.children,p=r.enableColorScheme,f=void 0!==p&&p;return(0,u.jsxs)(i.Fragment,{children:[(0,u.jsx)(c.Z,{styles:function(n){return function(n){var r,e,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a={};i&&n.colorSchemes&&Object.entries(n.colorSchemes).forEach((function(r){var e,o=(0,t.Z)(r,2),i=o[0],c=o[1];a[n.getColorSchemeSelector(i).replace(/\s*&/,"")]={colorScheme:null==(e=c.palette)?void 0:e.mode}}));var c=(0,o.Z)({html:s(n,i),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:n.typography.fontWeightBold},body:(0,o.Z)({margin:0},l(n),{"&::backdrop":{backgroundColor:(n.vars||n).palette.background.default}})},a),u=null==(r=n.components)||null==(e=r.MuiCssBaseline)?void 0:e.styleOverrides;return u&&(c=[c,u]),c}(n,f)}}),e]})}},1889:function(n,r,e){e.d(r,{ZP:function(){return j}});var t=e(3433),o=e(4942),i=e(3366),a=e(7462),c=e(2791),u=e(8182),s=e(1184),l=e(8519),p=e(4419),f=e(6934),d=e(1402),m=e(3967);var v=c.createContext(),h=e(5878),g=e(1217);function b(n){return(0,g.Z)("MuiGrid",n)}var x=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],Z=(0,h.Z)("MuiGrid",["root","container","item","zeroMinWidth"].concat((0,t.Z)([0,1,2,3,4,5,6,7,8,9,10].map((function(n){return"spacing-xs-".concat(n)}))),(0,t.Z)(["column-reverse","column","row-reverse","row"].map((function(n){return"direction-xs-".concat(n)}))),(0,t.Z)(["nowrap","wrap-reverse","wrap"].map((function(n){return"wrap-xs-".concat(n)}))),(0,t.Z)(x.map((function(n){return"grid-xs-".concat(n)}))),(0,t.Z)(x.map((function(n){return"grid-sm-".concat(n)}))),(0,t.Z)(x.map((function(n){return"grid-md-".concat(n)}))),(0,t.Z)(x.map((function(n){return"grid-lg-".concat(n)}))),(0,t.Z)(x.map((function(n){return"grid-xl-".concat(n)}))))),w=e(184),S=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function k(n){var r=parseFloat(n);return"".concat(r).concat(String(n).replace(String(r),"")||"px")}function y(n){var r=n.breakpoints,e=n.values,t="";Object.keys(e).forEach((function(n){""===t&&0!==e[n]&&(t=n)}));var o=Object.keys(r).sort((function(n,e){return r[n]-r[e]}));return o.slice(0,o.indexOf(t))}var W=(0,f.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(n,r){var e=n.ownerState,o=e.container,i=e.direction,a=e.item,c=e.spacing,u=e.wrap,s=e.zeroMinWidth,l=e.breakpoints,p=[];o&&(p=function(n,r){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n||n<=0)return[];if("string"===typeof n&&!Number.isNaN(Number(n))||"number"===typeof n)return[e["spacing-xs-".concat(String(n))]];var t=[];return r.forEach((function(r){var o=n[r];Number(o)>0&&t.push(e["spacing-".concat(r,"-").concat(String(o))])})),t}(c,l,r));var f=[];return l.forEach((function(n){var t=e[n];t&&f.push(r["grid-".concat(n,"-").concat(String(t))])})),[r.root,o&&r.container,a&&r.item,s&&r.zeroMinWidth].concat((0,t.Z)(p),["row"!==i&&r["direction-xs-".concat(String(i))],"wrap"!==u&&r["wrap-xs-".concat(String(u))]],f)}})((function(n){var r=n.ownerState;return(0,a.Z)({boxSizing:"border-box"},r.container&&{display:"flex",flexWrap:"wrap",width:"100%"},r.item&&{margin:0},r.zeroMinWidth&&{minWidth:0},"wrap"!==r.wrap&&{flexWrap:r.wrap})}),(function(n){var r=n.theme,e=n.ownerState,t=(0,s.P$)({values:e.direction,breakpoints:r.breakpoints.values});return(0,s.k9)({theme:r},t,(function(n){var r={flexDirection:n};return 0===n.indexOf("column")&&(r["& > .".concat(Z.item)]={maxWidth:"none"}),r}))}),(function(n){var r=n.theme,e=n.ownerState,t=e.container,i=e.rowSpacing,a={};if(t&&0!==i){var c,u=(0,s.P$)({values:i,breakpoints:r.breakpoints.values});"object"===typeof u&&(c=y({breakpoints:r.breakpoints.values,values:u})),a=(0,s.k9)({theme:r},u,(function(n,e){var t,i=r.spacing(n);return"0px"!==i?(0,o.Z)({marginTop:"-".concat(k(i))},"& > .".concat(Z.item),{paddingTop:k(i)}):null!=(t=c)&&t.includes(e)?{}:(0,o.Z)({marginTop:0},"& > .".concat(Z.item),{paddingTop:0})}))}return a}),(function(n){var r=n.theme,e=n.ownerState,t=e.container,i=e.columnSpacing,a={};if(t&&0!==i){var c,u=(0,s.P$)({values:i,breakpoints:r.breakpoints.values});"object"===typeof u&&(c=y({breakpoints:r.breakpoints.values,values:u})),a=(0,s.k9)({theme:r},u,(function(n,e){var t,i=r.spacing(n);return"0px"!==i?(0,o.Z)({width:"calc(100% + ".concat(k(i),")"),marginLeft:"-".concat(k(i))},"& > .".concat(Z.item),{paddingLeft:k(i)}):null!=(t=c)&&t.includes(e)?{}:(0,o.Z)({width:"100%",marginLeft:0},"& > .".concat(Z.item),{paddingLeft:0})}))}return a}),(function(n){var r,e=n.theme,t=n.ownerState;return e.breakpoints.keys.reduce((function(n,o){var i={};if(t[o]&&(r=t[o]),!r)return n;if(!0===r)i={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===r)i={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{var c=(0,s.P$)({values:t.columns,breakpoints:e.breakpoints.values}),u="object"===typeof c?c[o]:c;if(void 0===u||null===u)return n;var l="".concat(Math.round(r/u*1e8)/1e6,"%"),p={};if(t.container&&t.item&&0!==t.columnSpacing){var f=e.spacing(t.columnSpacing);if("0px"!==f){var d="calc(".concat(l," + ").concat(k(f),")");p={flexBasis:d,maxWidth:d}}}i=(0,a.Z)({flexBasis:l,flexGrow:0,maxWidth:l},p)}return 0===e.breakpoints.values[o]?Object.assign(n,i):n[e.breakpoints.up(o)]=i,n}),{})}));var M=function(n){var r=n.classes,e=n.container,o=n.direction,i=n.item,a=n.spacing,c=n.wrap,u=n.zeroMinWidth,s=n.breakpoints,l=[];e&&(l=function(n,r){if(!n||n<=0)return[];if("string"===typeof n&&!Number.isNaN(Number(n))||"number"===typeof n)return["spacing-xs-".concat(String(n))];var e=[];return r.forEach((function(r){var t=n[r];if(Number(t)>0){var o="spacing-".concat(r,"-").concat(String(t));e.push(o)}})),e}(a,s));var f=[];s.forEach((function(r){var e=n[r];e&&f.push("grid-".concat(r,"-").concat(String(e)))}));var d={root:["root",e&&"container",i&&"item",u&&"zeroMinWidth"].concat((0,t.Z)(l),["row"!==o&&"direction-xs-".concat(String(o)),"wrap"!==c&&"wrap-xs-".concat(String(c))],f)};return(0,p.Z)(d,b,r)},_=c.forwardRef((function(n,r){var e=(0,d.Z)({props:n,name:"MuiGrid"}),t=(0,m.Z)().breakpoints,o=(0,l.Z)(e),s=o.className,p=o.columns,f=o.columnSpacing,h=o.component,g=void 0===h?"div":h,b=o.container,x=void 0!==b&&b,Z=o.direction,k=void 0===Z?"row":Z,y=o.item,_=void 0!==y&&y,j=o.rowSpacing,z=o.spacing,N=void 0===z?0:z,C=o.wrap,E=void 0===C?"wrap":C,P=o.zeroMinWidth,O=void 0!==P&&P,T=(0,i.Z)(o,S),B=j||N,G=f||N,F=c.useContext(v),L=x?p||12:F,$={},R=(0,a.Z)({},T);t.keys.forEach((function(n){null!=T[n]&&($[n]=T[n],delete R[n])}));var D=(0,a.Z)({},o,{columns:L,container:x,direction:k,item:_,rowSpacing:B,columnSpacing:G,wrap:E,zeroMinWidth:O,spacing:N},$,{breakpoints:t.keys}),I=M(D);return(0,w.jsx)(v.Provider,{value:L,children:(0,w.jsx)(W,(0,a.Z)({ownerState:D,className:(0,u.Z)(I.root,s),as:g,ref:r},R))})})),j=_},4507:function(n,r,e){e.d(r,{Z:function(){return x}});var t=e(7462),o=e(3366),i=e(2791),a=e(4942);var c=i.createContext(null);function u(){return i.useContext(c)}var s="function"===typeof Symbol&&Symbol.for?Symbol.for("mui.nested"):"__THEME_NESTED__",l=e(184);var p=function(n){var r=n.children,e=n.theme,o=u(),a=i.useMemo((function(){var n=null===o?e:function(n,r){return"function"===typeof r?r(n):(0,t.Z)({},n,r)}(o,e);return null!=n&&(n[s]=null!==o),n}),[e,o]);return(0,l.jsx)(c.Provider,{value:a,children:r})},f=e(9886),d=e(9120),m={};function v(n,r,e){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return i.useMemo((function(){var i=n&&r[n]||r;if("function"===typeof e){var c=e(i),u=n?(0,t.Z)({},r,(0,a.Z)({},n,c)):c;return o?function(){return u}:u}return n?(0,t.Z)({},r,(0,a.Z)({},n,e)):(0,t.Z)({},r,e)}),[n,r,e,o])}var h=function(n){var r=n.children,e=n.theme,t=n.themeId,o=(0,d.Z)(m),i=u()||m,a=v(t,o,e),c=v(t,i,e,!0);return(0,l.jsx)(p,{theme:c,children:(0,l.jsx)(f.T.Provider,{value:a,children:r})})},g=e(988),b=["theme"];function x(n){var r=n.theme,e=(0,o.Z)(n,b),i=r[g.Z];return(0,l.jsx)(h,(0,t.Z)({},e,{themeId:i?g.Z:void 0,theme:i||r}))}}}]);
//# sourceMappingURL=899.10f9abe8.chunk.js.map