"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[491],{5735:function(e){e.exports=function(e,t){var a=t.length,r=e.length;if(r>a)return!1;if(r===a)return e===t;e:for(var n=0,l=0;n<r;n++){for(var o=e.charCodeAt(n);l<a;)if(t.charCodeAt(l++)===o)continue e;return!1}return!0}},8238:function(e,t,a){a.d(t,{Z:function(){return d}});var r=a(8167),n=a(8014),l=a(9519),o=a(7294),s=a(1597),c=a(9856),i=a(2653),m=((0,i.atom)({key:"SearchAtom",default:[]}),a(5735)),u=a.n(m);var d=function(e){var t=e.title,a=void 0===t?"What's New?":t,m=e.description,d=void 0===m?"Trending Articles, or even ones from users you Follow":m,g=e.className,p=void 0===g?"":g,E=e.postsRef,f=void 0===E?{}:E,b=(0,i.useRecoilState)(c.Z)[1],h=o.createRef(null),v=o.useState([]),N=v[0],k=v[1],w=["Enter","Shift","Tab","Escape","Meta","Control","Alt","ArrowLeft","ArrowRight","ArrowUp","ArrowDown","F1","F2","F3","F4","F5","F6","F7","F8","F9"];return o.createElement("section",{className:"page-content-top "+p},o.createElement("div",{className:"page-meta"},o.createElement("h1",{className:"page-content-header"},a),o.createElement("p",{className:"page-content-description"},d)),o.createElement("div",{className:"page-actions"},o.createElement("label",{className:"search-bar"},o.createElement("div",{className:"search-bar__widget"},o.createElement("input",{type:"text",placeholder:" ",onKeyDown:function(e){var t=e.key;if(0!=Object.keys(f).length&&!w.includes(t)){if(h.current.value.length<=1&&"Backspace"==t)return k([]);if("Backspace"==t){var a=h.current.value,r=f.filter((function(e){return u()(a.trim().toLowerCase()+t.toLowerCase(),e.frontmatter.title.toLowerCase())}));k(r)}else{var n=f.filter((function(e){return u()(h.current.value.trim().toLowerCase()+t.toLowerCase(),e.frontmatter.title.toLowerCase())}));k(n)}}},ref:h}),o.createElement(l.G,{className:"search-bar-icon",icon:n.wn1}),o.createElement("span",{className:"search-bar-placeholder"},"Search")),o.createElement("div",{className:"search-bar__results"},o.createElement("ul",null,N.length>0&&N.map((function(e){var t,a,n=e.frontmatter,c=n.title,i=n.author,m=n.authorPicture,u=n.description,d=n.tags,g=n.articleThumbnail,p=n.slug,E=e.timeToRead;return o.createElement("li",{className:"search-result"},o.createElement(s.rU,{key:p,className:"blog-route",to:p,onClick:function(){return b({routeTitle:c,routeSlug:p})}},o.createElement("div",{className:"blog-route-left"},o.createElement("div",{className:"blog-route-author-info"},o.createElement("div",{className:"blog-route-author-profile"},o.createElement("img",{src:m,alt:i+"'s Profile"})),o.createElement("span",null,i)),o.createElement("div",{className:"blog-route-title"},(void 0===a&&(a=48),(t=c)?t.length>a?t.slice(0,a).trim()+"...":t:"...")),o.createElement("p",{className:"blog-route-description","data-nosnippet":!0},u),o.createElement("div",{className:"blog-route-tags","data-nosnippet":!0},d.length>1?d.map((function(e){return o.createElement("div",{key:p+e,className:"blog-route-tag","data-nosnippet":!0},e)})):o.createElement("div",{className:"blog-route-tag","data-nosnippet":!0},d))),o.createElement("div",{className:"blog-route-right"},o.createElement("div",{className:"blog-route-thumbnail"},o.createElement("img",{src:origin+"/assets/Thumbnails/"+g,alt:"Article Thumbnail"})),o.createElement("div",{className:"blog-route-estimated","data-nosnippet":!0},o.createElement(l.G,{className:"blog-route-estimated-icon",icon:r.SZ}),o.createElement("span",{"data-nosnippet":!0},E," min(s)")))))}))))),o.createElement(s.rU,{to:"/bookmarks",className:"bookmarks-button",onClick:function(){return b({routeSlug:"/bookmarks",routeTitle:"Bookmarks"})}},o.createElement(l.G,{className:"bookmarks-icon",icon:r.xV}),o.createElement("span",{className:"text"},"Your Bookmarks"))))}},8668:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var r=a(7294),n=a(8238),l=a(2215),o=a(7514),s=a(2653),c=a(9856),i=a(1597),m=a(9519),u=a(8167);function d(){var e=(0,s.useRecoilState)(c.Z)[1];r.useEffect((function(){e({routeSlug:"/articles/front-end",routeTitle:"Front-End"})}),[]);var t={title:"Articles about Front-End",description:(new Date).toJSON().slice(0,10).replace(/-/g,"/")+" - Want to read some articles about Front-End Developoment? Look no further, here are some articles to release the CSS-hating monster inside you."},a=(0,i.K2)(g).allMdx.nodes;return a=a.filter((function(e){return e.frontmatter.tags.includes("Front End")})),r.createElement(o.Z,{meta:t,className:"use-temp"},r.createElement(n.Z,{title:"Front-End Articles",description:"Articles to release the CSS-hating monster inside you.",postsRef:a}),r.createElement("section",{className:"PostsContainer AllArticles-Flow"},a.map((function(t){var a,n,o=t.frontmatter,s=o.title,c=o.description,d=o.articleThumbnail,g=o.author,p=o.authorPicture,E=o.slug,f=o.tags,b=t.timeToRead;return r.createElement(i.rU,{key:E,className:"blog-route",to:E,onClick:function(){return e({routeTitle:s,routeSlug:E})}},r.createElement("div",{className:"blog-route-left"},r.createElement("div",{className:"blog-route-author-info"},r.createElement("div",{className:"blog-route-author-profile"},r.createElement("img",{src:p,alt:g+"'s Profile"})),r.createElement("span",null,g)),r.createElement("div",{className:"blog-route-title"},(void 0===n&&(n=48),(a=s)?a.length>n?a.slice(0,n).trim()+"...":a:"...")),r.createElement("p",{className:"blog-route-description","data-nosnippet":!0},c),r.createElement("div",{className:"blog-route-tags","data-nosnippet":!0},f.length>1?f.map((function(e){return r.createElement("div",{key:E+e,className:"blog-route-tag","data-nosnippet":!0},e)})):r.createElement("div",{className:"blog-route-tag","data-nosnippet":!0},f))),r.createElement("div",{className:"blog-route-right"},r.createElement("div",{className:"blog-route-thumbnail"},r.createElement("img",{src:"https://blog.bridle.ml/assets/Thumbnails/"+d,alt:"Article Thumbnail"})),r.createElement("div",{className:"blog-route-estimated","data-nosnippet":!0},r.createElement(m.G,{className:"blog-route-estimated-icon",icon:u.SZ}),r.createElement("span",{"data-nosnippet":!0},b," min(s)"))),r.createElement(l.Z,{size:"large"}))}))))}var g="3157840430"}}]);
//# sourceMappingURL=component---src-pages-articles-front-end-js-c8e9ed8fbe142baf1212.js.map