/*! For license information please see component---src-pages-explore-js-917c0fe98a337f337bc3.js.LICENSE.txt */
"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[87],{2168:function(e,t,a){a.r(t),a.d(t,{default:function(){return b}});var l=a(7294),r=a(9283),n=a(2645),o=a(8525),i=(0,o.atom)({key:"FilterAtom",default:"Following"});var s=function(){var e=(0,o.useRecoilState)(i),t=e[0],a=e[1];return l.createElement("section",{className:"filter-container"},l.createElement(n.Z,{size:"medium",pos:"bottom",thickness:"slim",transform:{at:650,axis:"x",pos:"top",size:"medium"}}),l.createElement("button",{className:"Following"===t?"filter-following active-post-filter":"filter-following",onClick:function(){return a("Following")}},"Following"),l.createElement("button",{className:"Popular"===t?"filter-popular active-post-filter":"filter-popular",onClick:function(){return a("Popular")}},"Popular"),l.createElement("div",{className:"Following"===t?"active-filter-slider":"active-filter-slider slide-right"}))},c=a(6249),m=a(3433),u=a(5444),p=a(9519),f=a(8167),g=a(4310),d="3289425803",E=function(e){var t=e.postCount,a=void 0===t?void 0:t,r=(0,o.useRecoilState)(g.Z)[1],s=(0,u.K2)(d).allMdx.nodes,c={following:s.filter((function(e){return"none"!==e.frontmatter.following})).slice(0,a),popular:s.filter((function(e){return e.frontmatter.rank>0})).sort((function(e,t){return e.frontmatter.rank-t.frontmatter.rank})).slice(0,a)},E=(0,o.useRecoilState)(i)[0];return l.createElement("section",{className:"PostsContainer"},l.createElement(n.Z,{size:"medium",pos:"right",thickness:"slim",transform:{at:650,axis:"x",pos:"none",size:"medium"}}),c[E.toLowerCase()].map((function(e){var t,a,o=[],i=e.frontmatter,s=i.title,c=i.description,g=i.articleThumbnail,d=i.author,E=i.authorPicture,b=i.slug,h=i.tags,v=i.rank,N=e.timeToRead;return v>0&&o.push.apply(o,(0,m.Z)(h).concat(["#"+v+" on Trending 🔥"])),l.createElement(u.rU,{key:b,className:"blog-route",to:b,onClick:function(){return r({routeTitle:s,routeSlug:b})}},l.createElement("div",{className:"blog-route-left"},l.createElement("div",{className:"blog-route-author-info"},l.createElement("div",{className:"blog-route-author-profile"},l.createElement("img",{src:E,alt:d+"'s Profile"})),l.createElement("span",null,d)),l.createElement("div",{className:"blog-route-title"},(void 0===a&&(a=48),(t=s)?t.length>a?t.slice(0,a).trim()+"...":t:"...")),l.createElement("p",{className:"blog-route-description","data-nosnippet":!0},c),l.createElement("div",{className:"blog-route-tags","data-nosnippet":!0},o.length>1?o.map((function(e){return l.createElement("div",{key:b+e,className:"blog-route-tag","data-nosnippet":!0},e)})):l.createElement("div",{className:"blog-route-tag","data-nosnippet":!0},h))),l.createElement("div",{className:"blog-route-right"},l.createElement("div",{className:"blog-route-thumbnail"},l.createElement("img",{src:"https://blog.bridle.ml/assets/Thumbnails/"+g,alt:"Article Thumbnail"})),l.createElement("div",{className:"blog-route-estimated","data-nosnippet":!0},l.createElement(p.G,{className:"blog-route-estimated-icon",icon:f.SZ}),l.createElement("span",{"data-nosnippet":!0},N," min(s)"))),l.createElement(n.Z,{size:"large"}))})))};var b=function(){var e={title:"Explore Articles",description:(new Date).toJSON().slice(0,10).replace(/-/g,"/")+" - Some of the most popular hobbyist articles on the site. Gatsby, React & other frameworks are the centrepiece of our articles."};return l.createElement(c.Z,{meta:e},l.createElement("div",{className:"explore_page",style:{width:"100%",height:"100%"}},l.createElement(r.Z,null),l.createElement(s,null),l.createElement(E,null)))}}}]);
//# sourceMappingURL=component---src-pages-explore-js-917c0fe98a337f337bc3.js.map