(self.webpackChunkblog=self.webpackChunkblog||[]).push([[351],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,l,u,s;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(l=c;0!=l--;)if(!i(e[l],a[l]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(s=e.entries();!(l=s.next()).done;)if(!a.has(l.value[0]))return!1;for(s=e.entries();!(l=s.next()).done;)if(!i(l.value[1],a.get(l.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(s=e.entries();!(l=s.next()).done;)if(!a.has(l.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(l=c;0!=l--;)if(e[l]!==a[l])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(u=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(a,u[l]))return!1;if(t&&e instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==u[l]&&"__v"!==u[l]&&"__o"!==u[l]||!e.$$typeof)&&!i(e[u[l]],a[u[l]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,u=[];function s(){l=e(u.map((function(e){return e.props}))),f.canUseDOM?t(l):n&&(l=n(l))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return l},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,u=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){u.push(this),s()},a.componentDidUpdate=function(){s()},a.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),s()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},6249:function(e,t,n){"use strict";n.d(t,{Z:function(){return we}});var r=n(7294),o=n(3433),i=n(5444),a=n(4310),c=n(8525);var l,u,s,f,p=function(){var e=(0,c.useRecoilState)(a.Z),t=e[0],n=e[1],l=r.useState([!1,{}]),u=l[0],s=l[1];return r.useEffect((function(){fetch("/links.json").then((function(e){return e.json()})).then((function(e){return s(e)})),s((0,o.Z)(u))}),[]),r.createElement("nav",null,r.createElement("h3",{className:"logo"},r.createElement(i.rU,{to:"/explore/",onClick:function(){return n({routeSlug:"/explore/",routeTitle:"Explore"})}},"Bridle")),r.createElement("ul",{className:"navlinks"},!!u[2]&&u.map((function(e){return e.navSlug===t.routeSlug?r.createElement("li",{className:"active-nav",key:t.routeSlug},r.createElement(i.rU,{to:t.routeSlug},t.routeTitle)):r.createElement("li",{key:e.navSlug},r.createElement(i.rU,{to:e.navSlug,onClick:function(){return n({routeSlug:e.navSlug,routeTitle:e.navTitle})}},e.navTitle))}))))},d=n(5697),m=n.n(d),h=n(4839),y=n.n(h),g=n(2993),b=n.n(g),v=n(6494),T=n.n(v),w="bodyAttributes",E="htmlAttributes",A="titleAttributes",S={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},C=(Object.keys(S).map((function(e){return S[e]})),"charset"),O="cssText",k="href",j="http-equiv",P="innerHTML",x="itemprop",I="name",L="property",N="rel",B="src",M="target",R={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},_="defaultTitle",H="defer",q="encodeSpecialCharacters",D="onChangeClientState",z="titleTemplate",U=Object.keys(R).reduce((function(e,t){return e[R[t]]=t,e}),{}),F=[S.NOSCRIPT,S.SCRIPT,S.STYLE],Y="data-react-helmet",K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Z=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},V=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},G=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},$=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},J=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Q=function(e){var t=re(e,S.TITLE),n=re(e,z);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=re(e,_);return t||r||void 0},X=function(e){return re(e,D)||function(){}},ee=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return W({},e,t)}),{})},te=function(e,t){return t.filter((function(e){return void 0!==e[S.BASE]})).map((function(e){return e[S.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},ne=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&le("Helmet: "+e+' should be of type "Array". Instead found type "'+K(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],l=c.toLowerCase();-1===t.indexOf(l)||n===N&&"canonical"===e[n].toLowerCase()||l===N&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==P&&c!==O&&c!==x||(n=c)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][u]&&(o[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],l=T()({},r[c],o[c]);r[c]=l}return e}),[]).reverse()},re=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},oe=(l=Date.now(),function(e){var t=Date.now();t-l>16?(l=t,e(t)):setTimeout((function(){oe(e)}),0)}),ie=function(e){return clearTimeout(e)},ae="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||oe:n.g.requestAnimationFrame||oe,ce="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ie:n.g.cancelAnimationFrame||ie,le=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ue=null,se=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,u=e.scriptTags,s=e.styleTags,f=e.title,p=e.titleAttributes;de(S.BODY,r),de(S.HTML,o),pe(f,p);var d={baseTag:me(S.BASE,n),linkTags:me(S.LINK,i),metaTags:me(S.META,a),noscriptTags:me(S.NOSCRIPT,c),scriptTags:me(S.SCRIPT,u),styleTags:me(S.STYLE,s)},m={},h={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=d[e].oldTags)})),t&&t(),l(e,m,h)},fe=function(e){return Array.isArray(e)?e.join(""):e},pe=function(e,t){void 0!==e&&document.title!==e&&(document.title=fe(e)),de(S.TITLE,t)},de=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(Y),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var l=a[c],u=t[l]||"";n.getAttribute(l)!==u&&n.setAttribute(l,u),-1===o.indexOf(l)&&o.push(l);var s=i.indexOf(l);-1!==s&&i.splice(s,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(Y):n.getAttribute(Y)!==a.join(",")&&n.setAttribute(Y,a.join(","))}},me=function(e,t){var n=document.head||document.querySelector(S.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===P)n.innerHTML=t.innerHTML;else if(r===O)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(Y,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},he=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},ye=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[R[n]||n]=e[n],t}),t)},ge=function(e,t,n){switch(e){case S.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(o={key:e})[Y]=!0,i=ye(n,o),[r.createElement(S.TITLE,i,e)];var e,n,o,i},toString:function(){return function(e,t,n,r){var o=he(n),i=fe(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+J(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+J(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case w:case E:return{toComponent:function(){return ye(t)},toString:function(){return he(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var o,i=((o={key:n})[Y]=!0,o);return Object.keys(t).forEach((function(e){var n=R[e]||e;if(n===P||n===O){var r=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=t[e]})),r.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===P||e===O)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+J(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===F.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},be=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.scriptTags,u=e.styleTags,s=e.title,f=void 0===s?"":s,p=e.titleAttributes;return{base:ge(S.BASE,t,r),bodyAttributes:ge(w,n,r),htmlAttributes:ge(E,o,r),link:ge(S.LINK,i,r),meta:ge(S.META,a,r),noscript:ge(S.NOSCRIPT,c,r),script:ge(S.SCRIPT,l,r),style:ge(S.STYLE,u,r),title:ge(S.TITLE,{title:f,titleAttributes:p},r)}},ve=y()((function(e){return{baseTag:te([k,M],e),bodyAttributes:ee(w,e),defer:re(e,H),encode:re(e,q),htmlAttributes:ee(E,e),linkTags:ne(S.LINK,[N,k],e),metaTags:ne(S.META,[I,C,j,L,x],e),noscriptTags:ne(S.NOSCRIPT,[P],e),onChangeClientState:X(e),scriptTags:ne(S.SCRIPT,[B,P],e),styleTags:ne(S.STYLE,[O],e),title:Q(e),titleAttributes:ee(A,e)}}),(function(e){ue&&ce(ue),e.defer?ue=ae((function(){se(e,(function(){ue=null}))})):(se(e),ue=null)}),be)((function(){return null})),Te=(u=ve,f=s=function(e){function t(){return Z(this,t),$(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!b()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case S.SCRIPT:case S.NOSCRIPT:return{innerHTML:t};case S.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return W({},r,((t={})[n.type]=[].concat(r[n.type]||[],[W({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case S.TITLE:return W({},o,((t={})[r.type]=a,t.titleAttributes=W({},i),t));case S.BODY:return W({},o,{bodyAttributes:W({},i)});case S.HTML:return W({},o,{htmlAttributes:W({},i)})}return W({},o,((n={})[r.type]=W({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=W({},t);return Object.keys(e).forEach((function(t){var r;n=W({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,o={};return r.Children.forEach(e,(function(e){if(e&&e.props){var r=e.props,i=r.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[U[n]||n]=e[n],t}),t)}(G(r,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case S.LINK:case S.META:case S.NOSCRIPT:case S.SCRIPT:case S.STYLE:o=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:o,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(o,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=G(e,["children"]),o=W({},n);return t&&(o=this.mapChildrenToProps(t,o)),r.createElement(u,o)},V(t,null,[{key:"canUseDOM",set:function(e){u.canUseDOM=e}}]),t}(r.Component),s.propTypes={base:m().object,bodyAttributes:m().object,children:m().oneOfType([m().arrayOf(m().node),m().node]),defaultTitle:m().string,defer:m().bool,encodeSpecialCharacters:m().bool,htmlAttributes:m().object,link:m().arrayOf(m().object),meta:m().arrayOf(m().object),noscript:m().arrayOf(m().object),onChangeClientState:m().func,script:m().arrayOf(m().object),style:m().arrayOf(m().object),title:m().string,titleAttributes:m().object,titleTemplate:m().string},s.defaultProps={defer:!0,encodeSpecialCharacters:!0},s.peek=u.peek,s.rewind=function(){var e=u.rewind();return e||(e=be({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},f);Te.renderStatic=Te.rewind;var we=function(e){var t=e.children,n=e.meta,o=e.className,i=void 0===o?"":o,a="https://blog.bridle.ml";return r.useEffect((function(){a=window.location.origin,document.documentElement.className="theme-light",console.group("Easter EGG :)"),console.info("%cHello! Nice to see someone here.","color: lime; font-size: 2em;"),console.info("I've got a treat for you (crazy, I know!). Change the document class from `theme-light` to `theme-dark` for an eye-pleasing easteregg <3"),console.groupEnd()})),r.createElement(r.Fragment,null,r.createElement(Te,null,r.createElement("link",{rel:"icon",href:a+"//assets/favicon-light.svg"}),r.createElement("link",{rel:"icon",href:a+"//assets/favicon-dark.svg",media:"(prefers-color-scheme: dark)"}),r.createElement("title",null,"Toby Bridle | "+(n.title?n.title:"Portfolio Blog")),r.createElement("meta",{charSet:"utf-8"}),r.createElement("meta",{name:"description",content:n.description?n.description:"A Blog Page made for display on Toby Bridle's Portfolio"}),r.createElement("meta",{name:"author",content:n.author?n.author:"Toby Bridle"}),r.createElement("link",{rel:"manifest",href:a+"//assets/manifest.json",crossOrigin:"use-credentials"}),r.createElement("meta",{name:"theme-color",content:"#f4f4f4"}),r.createElement("meta",{name:"apple-mobile-web-app-status-bar-style",content:"black-translucent"}),r.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:a+"//assets/apple-touch.png"}),r.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:a+"//assets/apple-touch-dark.png",media:"(prefers-color-scheme: dark)"}),r.createElement("link",{rel:"icon",sizes:"32x32",href:a+"//assets/favicon-light.ico"}),r.createElement("link",{rel:"icon",sizes:"32x32",href:a+"//assets/favicon-dark.ico",media:"(prefers-color-scheme: dark)"}),r.createElement("meta",{name:"robots",content:n.robots?n.robots:"index,nofollow"}),r.createElement("meta",{"http-equiv":"content-language",content:"en-us"}),r.createElement("meta",{property:"og:site_name",content:"Toby Bridle | Portfolio"}),r.createElement("meta",{property:"og:title",content:"Toby Bridle | "+(n.title?n.title:"Portfolio Blog")}),r.createElement("meta",{name:"twitter:title",content:"Toby Bridle | "+(n.title?n.title:"Portfolio Blog")}),r.createElement("meta",{property:"og:type",content:"article"}),r.createElement("meta",{property:"og:description",content:n.description?n.description:"A Blog Page made for display on Toby Bridle's Portfolio"}),r.createElement("meta",{name:"twitter-description",content:n.description?n.description:"A Blog Page made for display on Toby Bridle's Portfolio"}),r.createElement("meta",{property:"og:image",content:n.image?n.image:a+"//assets/page-preview-light.jpg"}),r.createElement("meta",{property:"twitter:card",content:n.twitter_card?n.twitter_card:"summary_large_image"}),r.createElement("meta",{property:"twitter:url",content:n.url?n.url:a}),r.createElement("meta",{property:"twitter:image",content:n.image?n.image:a+"//assets/page-preview-light.svg"}),")"),r.createElement("div",{className:"App"},r.createElement("section",{className:"navbar-wrapper"},r.createElement(p,null)),r.createElement("section",{className:"page-content "+i},t)))}},4310:function(e,t,n){"use strict";var r=n(8525),o="undefined"!=typeof window,i=o?"/"===window.location.pathname||"/explore/"===window.location.pathname?"Explore":document.title.split(" | ")[1]:"Explore",a=(0,r.atom)({key:"navigation",default:{routeSlug:o?"/"===window.location.pathname?"/explore":window.location.pathname:"/explore",routeTitle:i}});t.Z=a}}]);
//# sourceMappingURL=commons-bac9da5dacef3d40fc4f.js.map