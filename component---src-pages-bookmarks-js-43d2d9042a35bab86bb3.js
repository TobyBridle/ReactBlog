(self.webpackChunkblog=self.webpackChunkblog||[]).push([[682],{8926:function(e){function t(e,t,n,r,o,a,i){try{var s=e[a](i),l=s.value}catch(c){return void n(c)}s.done?t(l):Promise.resolve(l).then(r,o)}e.exports=function(e){return function(){var n=this,r=arguments;return new Promise((function(o,a){var i=e.apply(n,r);function s(e){t(i,o,a,s,l,"next",e)}function l(e){t(i,o,a,s,l,"throw",e)}s(void 0)}))}},e.exports.__esModule=!0,e.exports.default=e.exports},5584:function(e,t,n){"use strict";var r=n(7757),o=n(8926);t.J=void 0;var a=n(8525);t.J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if("undefined"==typeof window)return{persistAtom:function(){}};var t=e.key,n=void 0===t?"recoil-persist":t,i=e.storage,s=void 0===i?localStorage:i,l=function(e){var t=e.onSet,n=e.node,a=e.trigger,i=e.setSelf;if("get"===a){var s=u();"function"==typeof s.then&&s.then((function(e){e.hasOwnProperty(n.key)&&i(e[n.key])})),s.hasOwnProperty(n.key)&&i(s[n.key])}t(function(){var e=o(r.mark((function e(t){var o;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"function"==typeof(o=u()).then?o.then((function(e){return c(t,e,n.key)})):c(t,o,n.key);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},c=function(e,t,n){null!=e&&e instanceof a.DefaultValue&&t.hasOwnProperty(n)?delete t[n]:t[n]=e,f(t)},u=function(){var e=s.getItem(n);return null==e?{}:"string"==typeof e?m(e):"function"==typeof e.then?e.then(m):{}},m=function(e){if(void 0===e)return{};try{return JSON.parse(e)}catch(t){return console.error(t),{}}},f=function(e){try{"function"==typeof s.mergeItem?s.mergeItem(n,JSON.stringify(e)):s.setItem(n,JSON.stringify(e))}catch(t){console.error(t)}};return{persistAtom:l}}},1413:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(7294),o=n(6249),a=n(9283),i=n(2645),s=n(8525),l=n(4310),c=n(5444),u=n(9519),m=n(8167),f=n(2330),p=n(7171);function d(){var e=(0,s.useRecoilState)(l.Z)[1],t=((0,s.useRecoilState)(p.Z)[0],(0,s.useRecoilState)(f.Z)[0]),n="https://blog.bridle.ml",d=(0,c.K2)(g).allMdx.nodes,v=r.useState([]),h=v[0],k=v[1];r.useEffect((function(){n=window.location.origin,k(d.filter((function(e){return t.includes(e.frontmatter.slug)})))}),[]);var y={title:"Your Bookmarks",description:(new Date).toJSON().slice(0,10).replace(/-/g,"/")+' - Want to read an article later? Press "Bookmark?" and it\'ll stay here for another time.'};return r.createElement(o.Z,{meta:y,className:"use-temp"},r.createElement(a.Z,{title:"Bookmarks",description:"Rediscover some articles you've never finished.",className:"bookmark-page"}),r.createElement("section",{className:"PostsContainer AllArticles-Flow"},h.map((function(t){var o,a,s=t.frontmatter,l=s.title,f=s.description,p=s.articleThumbnail,d=s.author,g=s.authorPicture,v=s.slug,h=s.tags,k=t.timeToRead;return r.createElement(c.rU,{key:v,className:"blog-route",to:v,onClick:function(){return e({routeTitle:l,routeSlug:v})}},r.createElement("div",{className:"blog-route-left"},r.createElement("div",{className:"blog-route-author-info"},r.createElement("div",{className:"blog-route-author-profile"},r.createElement("img",{src:g,alt:d+"'s Profile"})),r.createElement("span",null,d)),r.createElement("div",{className:"blog-route-title"},(void 0===a&&(a=48),(o=l)?o.length>a?o.slice(0,a).trim()+"...":o:"...")),r.createElement("p",{className:"blog-route-description","data-nosnippet":!0},f),r.createElement("div",{className:"blog-route-tags","data-nosnippet":!0},h.length>1?h.map((function(e){return r.createElement("div",{key:v+e,className:"blog-route-tag","data-nosnippet":!0},e)})):r.createElement("div",{className:"blog-route-tag","data-nosnippet":!0},h))),r.createElement("div",{className:"blog-route-right"},r.createElement("div",{className:"blog-route-thumbnail"},r.createElement("img",{src:n+"/assets/Thumbnails/"+p,alt:"Article Thumbnail"})),r.createElement("div",{className:"blog-route-estimated","data-nosnippet":!0},r.createElement(u.G,{className:"blog-route-estimated-icon",icon:m.SZ}),r.createElement("span",{"data-nosnippet":!0},k," min(s)"))),r.createElement(i.Z,{size:"large"}))}))))}var g="3157840430"},2330:function(e,t,n){"use strict";var r=n(8525),o=(0,n(5584).J)({key:"bookmark-persist"}).persistAtom,a=(0,r.atom)({key:"BookmarkAtom",default:[],effects_UNSTABLE:[o]});t.Z=a}}]);
//# sourceMappingURL=component---src-pages-bookmarks-js-43d2d9042a35bab86bb3.js.map