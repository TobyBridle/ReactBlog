"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[374],{7333:function(e,t,a){a.r(t);var l=a(7294),r=a(5444),o=a(8525),s=a(4310),n=a(9519),i=a(8167),c=a(2645),m=a(6249),u=a(9283);var p="3157840430";t.default=function(){var e=(0,o.useRecoilState)(s.Z)[1],t="https://blog.bridle.ml";l.useEffect((function(){t=window.location.origin,e({routeSlug:"/articles",routeTitle:"All Articles"})}),[]);var a=(0,r.K2)(p).allMdx.nodes,g={title:"All Articles",description:(new Date).toJSON().slice(0,10).replace(/-/g,"/")+" - Some of the most popular hobbyist articles on the site. Gatsby, React & other frameworks are the centrepiece of our articles."};return l.createElement(m.Z,{meta:g,className:"use-temp"},l.createElement(u.Z,{title:"All Articles",description:"No trending or popular here, just all articles in one place."}),l.createElement("section",{className:"PostsContainer AllArticles-Flow"},a.map((function(a){var o,s,m=a.frontmatter,u=m.title,p=m.description,g=m.articleThumbnail,d=m.author,b=m.authorPicture,E=m.slug,h=m.tags,f=a.timeToRead;return l.createElement(r.rU,{key:E,className:"blog-route",to:E,onClick:function(){return e({routeTitle:u,routeSlug:E})}},l.createElement("div",{className:"blog-route-left"},l.createElement("div",{className:"blog-route-author-info"},l.createElement("div",{className:"blog-route-author-profile"},l.createElement("img",{src:b,alt:d+"'s Profile"})),l.createElement("span",null,d)),l.createElement("div",{className:"blog-route-title"},(void 0===s&&(s=48),(o=u)?o.length>s?o.slice(0,s).trim()+"...":o:"...")),l.createElement("p",{className:"blog-route-description","data-nosnippet":!0},p),l.createElement("div",{className:"blog-route-tags","data-nosnippet":!0},h.length>1?h.map((function(e){return l.createElement("div",{key:E+e,className:"blog-route-tag","data-nosnippet":!0},e)})):l.createElement("div",{className:"blog-route-tag","data-nosnippet":!0},h))),l.createElement("div",{className:"blog-route-right"},l.createElement("div",{className:"blog-route-thumbnail"},l.createElement("img",{src:t+"/assets/Thumbnails/"+g,alt:"Article Thumbnail"})),l.createElement("div",{className:"blog-route-estimated","data-nosnippet":!0},l.createElement(n.G,{className:"blog-route-estimated-icon",icon:i.SZ}),l.createElement("span",{"data-nosnippet":!0},f," min(s)"))),l.createElement(c.Z,{size:"large"}))}))))}}}]);
//# sourceMappingURL=component---src-pages-articles-js-0840dc27438bf24cc25e.js.map