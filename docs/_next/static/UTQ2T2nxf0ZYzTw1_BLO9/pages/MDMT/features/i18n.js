(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"7ljp":function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return l})),n.d(t,"MDXProvider",(function(){return f})),n.d(t,"mdx",(function(){return O})),n.d(t,"useMDXComponents",(function(){return d})),n.d(t,"withMDXComponents",(function(){return s}));var r=n("q1tI"),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){return function(t){var n=d(t.components);return(a.a.createElement(e,i({},t,{components:n})))}},d=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"===typeof e?e(t):u(u({},t),e)),n},f=function(e){var t=d(e.components);return(a.a.createElement(l.Provider,{value:t},e.children))},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),l=d(n),s=r,f=l["".concat(i,".").concat(s)]||l[s]||g[s]||o;return n?a.a.createElement(f,u(u({ref:t},c),{},{components:n})):a.a.createElement(f,u({ref:t},c))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[m]="string"===typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},Ff2n:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,"a",(function(){return r}))},KE4x:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/features/i18n",function(){return n("xwvL")}])},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},wx14:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},xwvL:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var r=n("wx14"),a=n("Ff2n"),o=n("q1tI"),i=n.n(o),c=n("7ljp"),u=(i.a.createElement,{}),p="wrapper";function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.mdx)(p,Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("h1",{id:"multi-languages-support"},"Multi Languages Support"),Object(c.mdx)("p",null,"MDMT supports multiple languages by default.",Object(c.mdx)("br",{parentName:"p"}),"\n","You can switch languages from the language selector (earth icon on top-right of the page)."),Object(c.mdx)("p",null,"The language selector does:"),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},"Redirect the browser to the URL for chosen language"),Object(c.mdx)("li",{parentName:"ul"},"Switch labels in sidebar / header")),Object(c.mdx)("h2",{id:"configuration"},"Configuration"),Object(c.mdx)("p",null,"You can set the languages to support in config.js.",Object(c.mdx)("br",{parentName:"p"}),"\n","By default MDMT supports English and Japanese."),Object(c.mdx)("pre",null,Object(c.mdx)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'// Supported languages\nlanguages: {\n    en: "English",\n    ja: "\u65e5\u672c\u8a9e"\n}\n\nmainLanguage: "en",\n')),Object(c.mdx)("p",null,"Pages for the main languages are served in the root of the URL, and other languages are served in their directories.",Object(c.mdx)("br",{parentName:"p"}),"\n","For example, in this website English pages are served in ",Object(c.mdx)("inlineCode",{parentName:"p"},"https://amagi.dev/MDMT/")," and Japanese pages are located in ",Object(c.mdx)("inlineCode",{parentName:"p"},"https://amagi.dev/MDMT/ja/"),"."),Object(c.mdx)("h2",{id:"translate-pages"},"Translate Pages"),Object(c.mdx)("p",null,"To add translated pages, just put Markdown files under the directory for the language.",Object(c.mdx)("br",{parentName:"p"}),"\n","For example, in this document Japanese version of ",Object(c.mdx)("inlineCode",{parentName:"p"},"pages/index.md")," is located in ",Object(c.mdx)("inlineCode",{parentName:"p"},"pages/ja/index.md"),"."))}l.isMDXComponent=!0,l.frontmatter={title:"Multi Languages Support \ud83d\udc8a MDMT - Markdown Document Template #MDMTjs",color:"#EE33BB"}}},[["KE4x",0,1]]]);