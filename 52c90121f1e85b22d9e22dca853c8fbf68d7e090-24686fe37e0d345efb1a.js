"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[445],{9283:function(e,t,n){n.d(t,{Z:function(){return _e}});var r=n(8167),i=n(8014),o=n(9519),c=n(7294),a=n(5444),s=n(4310),u=n(7171),h=n(8525),l=n(136),f=n(2963),d=n(1120),v=n(3433),g=n(4942),p=n(5671),y=n(3144);function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,d.Z)(e);if(t){var i=(0,d.Z)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return(0,f.Z)(this,n)}}function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){(0,g.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function x(e){return Array.isArray?Array.isArray(e):"[object Array]"===E(e)}function L(e){return"string"==typeof e}function b(e){return"number"==typeof e}function Z(e){return!0===e||!1===e||function(e){return w(e)&&null!==e}(e)&&"[object Boolean]"==E(e)}function w(e){return"object"==typeof e}function S(e){return null!=e}function _(e){return!e.trim().length}function E(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}var C=function(e){return"Invalid value for key ".concat(e)},I=function(e){return"Pattern length exceeds max of ".concat(e,".")},N=Object.prototype.hasOwnProperty,O=function(){function e(t){var n=this;(0,p.Z)(this,e),this._keys=[],this._keyMap={};var r=0;t.forEach((function(e){var t=A(e);r+=t.weight,n._keys.push(t),n._keyMap[t.id]=t,r+=t.weight})),this._keys.forEach((function(e){e.weight/=r}))}return(0,y.Z)(e,[{key:"get",value:function(e){return this._keyMap[e]}},{key:"keys",value:function(){return this._keys}},{key:"toJSON",value:function(){return JSON.stringify(this._keys)}}]),e}();function A(e){var t=null,n=null,r=null,i=1;if(L(e)||x(e))r=e,t=$(e),n=R(e);else{if(!N.call(e,"name"))throw new Error(function(e){return"Missing ".concat(e," property in key")}("name"));var o=e.name;if(r=o,N.call(e,"weight")&&(i=e.weight)<=0)throw new Error(function(e){return"Property 'weight' in key '".concat(e,"' must be a positive integer")}(o));t=$(o),n=R(o)}return{path:t,id:n,weight:i,src:r}}function $(e){return x(e)?e:e.split(".")}function R(e){return x(e)?e.join("."):e}var j={useExtendedSearch:!1,getFn:function(e,t){var n=[],r=!1;return function e(t,i,o){if(S(t))if(i[o]){var c=t[i[o]];if(!S(c))return;if(o===i.length-1&&(L(c)||b(c)||Z(c)))n.push(function(e){return null==e?"":function(e){if("string"==typeof e)return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}(e)}(c));else if(x(c)){r=!0;for(var a=0,s=c.length;a<s;a+=1)e(c[a],i,o+1)}else i.length&&e(c,i,o+1)}else n.push(t)}(e,L(t)?t.split("."):t,0),r?n:n[0]},ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1},F=M(M(M(M({},{isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:function(e,t){return e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1}}),{includeMatches:!1,findAllMatches:!1,minMatchCharLength:1}),{location:0,threshold:.6,distance:100}),j),W=/[^ ]+/g;function P(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,n=new Map,r=Math.pow(10,t);return{get:function(t){var i=t.match(W).length;if(n.has(i))return n.get(i);var o=1/Math.pow(i,.5*e),c=parseFloat(Math.round(o*r)/r);return n.set(i,c),c},clear:function(){n.clear()}}}var K=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.getFn,r=void 0===n?F.getFn:n,i=t.fieldNormWeight,o=void 0===i?F.fieldNormWeight:i;(0,p.Z)(this,e),this.norm=P(o,3),this.getFn=r,this.isCreated=!1,this.setIndexRecords()}return(0,y.Z)(e,[{key:"setSources",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.docs=e}},{key:"setIndexRecords",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.records=e}},{key:"setKeys",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.keys=t,this._keysMap={},t.forEach((function(t,n){e._keysMap[t.id]=n}))}},{key:"create",value:function(){var e=this;!this.isCreated&&this.docs.length&&(this.isCreated=!0,L(this.docs[0])?this.docs.forEach((function(t,n){e._addString(t,n)})):this.docs.forEach((function(t,n){e._addObject(t,n)})),this.norm.clear())}},{key:"add",value:function(e){var t=this.size();L(e)?this._addString(e,t):this._addObject(e,t)}},{key:"removeAt",value:function(e){this.records.splice(e,1);for(var t=e,n=this.size();t<n;t+=1)this.records[t].i-=1}},{key:"getValueForItemAtKeyId",value:function(e,t){return e[this._keysMap[t]]}},{key:"size",value:function(){return this.records.length}},{key:"_addString",value:function(e,t){if(S(e)&&!_(e)){var n={v:e,i:t,n:this.norm.get(e)};this.records.push(n)}}},{key:"_addObject",value:function(e,t){var n=this,r={i:t,$:{}};this.keys.forEach((function(t,i){var o=n.getFn(e,t.path);if(S(o))if(x(o))!function(){for(var e=[],t=[{nestedArrIndex:-1,value:o}];t.length;){var c=t.pop(),a=c.nestedArrIndex,s=c.value;if(S(s))if(L(s)&&!_(s)){var u={v:s,i:a,n:n.norm.get(s)};e.push(u)}else x(s)&&s.forEach((function(e,n){t.push({nestedArrIndex:n,value:e})}))}r.$[i]=e}();else if(!_(o)){var c={v:o,n:n.norm.get(o)};r.$[i]=c}})),this.records.push(r)}},{key:"toJSON",value:function(){return{keys:this.keys,records:this.records}}}]),e}();function z(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.getFn,i=void 0===r?F.getFn:r,o=n.fieldNormWeight,c=void 0===o?F.fieldNormWeight:o,a=new K({getFn:i,fieldNormWeight:c});return a.setKeys(e.map(A)),a.setSources(t),a.create(),a}function B(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.errors,r=void 0===n?0:n,i=t.currentLocation,o=void 0===i?0:i,c=t.expectedLocation,a=void 0===c?0:c,s=t.distance,u=void 0===s?F.distance:s,h=t.ignoreLocation,l=void 0===h?F.ignoreLocation:h,f=r/e.length;if(l)return f;var d=Math.abs(a-o);return u?f+d/u:d?1:f}function D(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:F.minMatchCharLength,n=[],r=-1,i=-1,o=0,c=e.length;o<c;o+=1){var a=e[o];a&&-1===r?r=o:a||-1===r||((i=o-1)-r+1>=t&&n.push([r,i]),r=-1)}return e[o-1]&&o-r>=t&&n.push([r,o-1]),n}var q=32;function J(e){for(var t={},n=0,r=e.length;n<r;n+=1){var i=e.charAt(n);t[i]=(t[i]||0)|1<<r-n-1}return t}var V=function(){function e(t){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=r.location,o=void 0===i?F.location:i,c=r.threshold,a=void 0===c?F.threshold:c,s=r.distance,u=void 0===s?F.distance:s,h=r.includeMatches,l=void 0===h?F.includeMatches:h,f=r.findAllMatches,d=void 0===f?F.findAllMatches:f,v=r.minMatchCharLength,g=void 0===v?F.minMatchCharLength:v,y=r.isCaseSensitive,m=void 0===y?F.isCaseSensitive:y,k=r.ignoreLocation,M=void 0===k?F.ignoreLocation:k;if((0,p.Z)(this,e),this.options={location:o,threshold:a,distance:u,includeMatches:l,findAllMatches:d,minMatchCharLength:g,isCaseSensitive:m,ignoreLocation:M},this.pattern=m?t:t.toLowerCase(),this.chunks=[],this.pattern.length){var x=function(e,t){n.chunks.push({pattern:e,alphabet:J(e),startIndex:t})},L=this.pattern.length;if(L>q){for(var b=0,Z=L%q,w=L-Z;b<w;)x(this.pattern.substr(b,q),b),b+=q;if(Z){var S=L-q;x(this.pattern.substr(S),S)}}else x(this.pattern,0)}}return(0,y.Z)(e,[{key:"searchIn",value:function(e){var t=this.options,n=t.isCaseSensitive,r=t.includeMatches;if(n||(e=e.toLowerCase()),this.pattern===e){var i={isMatch:!0,score:0};return r&&(i.indices=[[0,e.length-1]]),i}var o=this.options,c=o.location,a=o.distance,s=o.threshold,u=o.findAllMatches,h=o.minMatchCharLength,l=o.ignoreLocation,f=[],d=0,g=!1;this.chunks.forEach((function(t){var n=t.pattern,i=t.alphabet,o=t.startIndex,p=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=r.location,o=void 0===i?F.location:i,c=r.distance,a=void 0===c?F.distance:c,s=r.threshold,u=void 0===s?F.threshold:s,h=r.findAllMatches,l=void 0===h?F.findAllMatches:h,f=r.minMatchCharLength,d=void 0===f?F.minMatchCharLength:f,v=r.includeMatches,g=void 0===v?F.includeMatches:v,p=r.ignoreLocation,y=void 0===p?F.ignoreLocation:p;if(t.length>q)throw new Error(I(q));for(var m,k=t.length,M=e.length,x=Math.max(0,Math.min(o,M)),L=u,b=x,Z=d>1||g,w=Z?Array(M):[];(m=e.indexOf(t,b))>-1;){var S=B(t,{currentLocation:m,expectedLocation:x,distance:a,ignoreLocation:y});if(L=Math.min(S,L),b=m+k,Z)for(var _=0;_<k;)w[m+_]=1,_+=1}b=-1;for(var E=[],C=1,N=k+M,O=1<<k-1,A=0;A<k;A+=1){for(var $=0,R=N;$<R;){B(t,{errors:A,currentLocation:x+R,expectedLocation:x,distance:a,ignoreLocation:y})<=L?$=R:N=R,R=Math.floor((N-$)/2+$)}N=R;var j=Math.max(1,x-R+1),W=l?M:Math.min(x+R,M)+k,P=Array(W+2);P[W+1]=(1<<A)-1;for(var K=W;K>=j;K-=1){var z=K-1,J=n[e.charAt(z)];if(Z&&(w[z]=+!!J),P[K]=(P[K+1]<<1|1)&J,A&&(P[K]|=(E[K+1]|E[K])<<1|1|E[K+1]),P[K]&O&&(C=B(t,{errors:A,currentLocation:z,expectedLocation:x,distance:a,ignoreLocation:y}))<=L){if(L=C,(b=z)<=x)break;j=Math.max(1,2*x-b)}}if(B(t,{errors:A+1,currentLocation:x,expectedLocation:x,distance:a,ignoreLocation:y})>L)break;E=P}var V={isMatch:b>=0,score:Math.max(.001,C)};if(Z){var G=D(w,d);G.length?g&&(V.indices=G):V.isMatch=!1}return V}(e,n,i,{location:c+o,distance:a,threshold:s,findAllMatches:u,minMatchCharLength:h,includeMatches:r,ignoreLocation:l}),y=p.isMatch,m=p.score,k=p.indices;y&&(g=!0),d+=m,y&&k&&(f=[].concat((0,v.Z)(f),(0,v.Z)(k)))}));var p={isMatch:g,score:g?d/this.chunks.length:1};return g&&r&&(p.indices=f),p}}]),e}(),G=function(){function e(t){(0,p.Z)(this,e),this.pattern=t}return(0,y.Z)(e,[{key:"search",value:function(){}}],[{key:"isMultiMatch",value:function(e){return T(e,this.multiRegex)}},{key:"isSingleMatch",value:function(e){return T(e,this.singleRegex)}}]),e}();function T(e,t){var n=e.match(t);return n?n[1]:null}var U=function(e){(0,l.Z)(n,e);var t=m(n);function n(e){return(0,p.Z)(this,n),t.call(this,e)}return(0,y.Z)(n,[{key:"search",value:function(e){var t=e===this.pattern;return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}}],[{key:"type",get:function(){return"exact"}},{key:"multiRegex",get:function(){return/^="(.*)"$/}},{key:"singleRegex",get:function(){return/^=(.*)$/}}]),n}(G),Q=function(e){(0,l.Z)(n,e);var t=m(n);function n(e){return(0,p.Z)(this,n),t.call(this,e)}return(0,y.Z)(n,[{key:"search",value:function(e){var t=-1===e.indexOf(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}}],[{key:"type",get:function(){return"inverse-exact"}},{key:"multiRegex",get:function(){return/^!"(.*)"$/}},{key:"singleRegex",get:function(){return/^!(.*)$/}}]),n}(G),Y=function(e){(0,l.Z)(n,e);var t=m(n);function n(e){return(0,p.Z)(this,n),t.call(this,e)}return(0,y.Z)(n,[{key:"search",value:function(e){var t=e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}}],[{key:"type",get:function(){return"prefix-exact"}},{key:"multiRegex",get:function(){return/^\^"(.*)"$/}},{key:"singleRegex",get:function(){return/^\^(.*)$/}}]),n}(G),H=function(e){(0,l.Z)(n,e);var t=m(n);function n(e){return(0,p.Z)(this,n),t.call(this,e)}return(0,y.Z)(n,[{key:"search",value:function(e){var t=!e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}}],[{key:"type",get:function(){return"inverse-prefix-exact"}},{key:"multiRegex",get:function(){return/^!\^"(.*)"$/}},{key:"singleRegex",get:function(){return/^!\^(.*)$/}}]),n}(G),X=function(e){(0,l.Z)(n,e);var t=m(n);function n(e){return(0,p.Z)(this,n),t.call(this,e)}return(0,y.Z)(n,[{key:"search",value:function(e){var t=e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}],[{key:"type",get:function(){return"suffix-exact"}},{key:"multiRegex",get:function(){return/^"(.*)"\$$/}},{key:"singleRegex",get:function(){return/^(.*)\$$/}}]),n}(G),ee=function(e){(0,l.Z)(n,e);var t=m(n);function n(e){return(0,p.Z)(this,n),t.call(this,e)}return(0,y.Z)(n,[{key:"search",value:function(e){var t=!e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}}],[{key:"type",get:function(){return"inverse-suffix-exact"}},{key:"multiRegex",get:function(){return/^!"(.*)"\$$/}},{key:"singleRegex",get:function(){return/^!(.*)\$$/}}]),n}(G),te=function(e){(0,l.Z)(n,e);var t=m(n);function n(e){var r,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=i.location,c=void 0===o?F.location:o,a=i.threshold,s=void 0===a?F.threshold:a,u=i.distance,h=void 0===u?F.distance:u,l=i.includeMatches,f=void 0===l?F.includeMatches:l,d=i.findAllMatches,v=void 0===d?F.findAllMatches:d,g=i.minMatchCharLength,y=void 0===g?F.minMatchCharLength:g,m=i.isCaseSensitive,k=void 0===m?F.isCaseSensitive:m,M=i.ignoreLocation,x=void 0===M?F.ignoreLocation:M;return(0,p.Z)(this,n),(r=t.call(this,e))._bitapSearch=new V(e,{location:c,threshold:s,distance:h,includeMatches:f,findAllMatches:v,minMatchCharLength:y,isCaseSensitive:k,ignoreLocation:x}),r}return(0,y.Z)(n,[{key:"search",value:function(e){return this._bitapSearch.searchIn(e)}}],[{key:"type",get:function(){return"fuzzy"}},{key:"multiRegex",get:function(){return/^"(.*)"$/}},{key:"singleRegex",get:function(){return/^(.*)$/}}]),n}(G),ne=function(e){(0,l.Z)(n,e);var t=m(n);function n(e){return(0,p.Z)(this,n),t.call(this,e)}return(0,y.Z)(n,[{key:"search",value:function(e){for(var t,n=0,r=[],i=this.pattern.length;(t=e.indexOf(this.pattern,n))>-1;)n=t+i,r.push([t,n-1]);var o=!!r.length;return{isMatch:o,score:o?0:1,indices:r}}}],[{key:"type",get:function(){return"include"}},{key:"multiRegex",get:function(){return/^'"(.*)"$/}},{key:"singleRegex",get:function(){return/^'(.*)$/}}]),n}(G),re=[U,ne,Y,H,ee,X,Q,te],ie=re.length,oe=/ +(?=([^\"]*\"[^\"]*\")*[^\"]*$)/;function ce(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.split("|").map((function(e){for(var n=e.trim().split(oe).filter((function(e){return e&&!!e.trim()})),r=[],i=0,o=n.length;i<o;i+=1){for(var c=n[i],a=!1,s=-1;!a&&++s<ie;){var u=re[s],h=u.isMultiMatch(c);h&&(r.push(new u(h,t)),a=!0)}if(!a)for(s=-1;++s<ie;){var l=re[s],f=l.isSingleMatch(c);if(f){r.push(new l(f,t));break}}}return r}))}var ae=new Set([te.type,ne.type]),se=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.isCaseSensitive,i=void 0===r?F.isCaseSensitive:r,o=n.includeMatches,c=void 0===o?F.includeMatches:o,a=n.minMatchCharLength,s=void 0===a?F.minMatchCharLength:a,u=n.ignoreLocation,h=void 0===u?F.ignoreLocation:u,l=n.findAllMatches,f=void 0===l?F.findAllMatches:l,d=n.location,v=void 0===d?F.location:d,g=n.threshold,y=void 0===g?F.threshold:g,m=n.distance,k=void 0===m?F.distance:m;(0,p.Z)(this,e),this.query=null,this.options={isCaseSensitive:i,includeMatches:c,minMatchCharLength:s,findAllMatches:f,ignoreLocation:h,location:v,threshold:y,distance:k},this.pattern=i?t:t.toLowerCase(),this.query=ce(this.pattern,this.options)}return(0,y.Z)(e,[{key:"searchIn",value:function(e){var t=this.query;if(!t)return{isMatch:!1,score:1};var n=this.options,r=n.includeMatches;e=n.isCaseSensitive?e:e.toLowerCase();for(var i=0,o=[],c=0,a=0,s=t.length;a<s;a+=1){var u=t[a];o.length=0,i=0;for(var h=0,l=u.length;h<l;h+=1){var f=u[h],d=f.search(e),g=d.isMatch,p=d.indices,y=d.score;if(!g){c=0,i=0,o.length=0;break}if(i+=1,c+=y,r){var m=f.constructor.type;ae.has(m)?o=[].concat((0,v.Z)(o),(0,v.Z)(p)):o.push(p)}}if(i){var k={isMatch:!0,score:c/i};return r&&(k.indices=o),k}}return{isMatch:!1,score:1}}}],[{key:"condition",value:function(e,t){return t.useExtendedSearch}}]),e}(),ue=[];function he(e,t){for(var n=0,r=ue.length;n<r;n+=1){var i=ue[n];if(i.condition(e,t))return new i(e,t)}return new V(e,t)}var le="$and",fe="$or",de="$path",ve="$val",ge=function(e){return!(!e[le]&&!e[fe])},pe=function(e){return!!e[de]},ye=function(e){return!x(e)&&w(e)&&!ge(e)},me=function(e){return(0,g.Z)({},le,Object.keys(e).map((function(t){return(0,g.Z)({},t,e[t])})))};function ke(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.auto,i=void 0===r||r,o=function e(n){var r=Object.keys(n),o=pe(n);if(!o&&r.length>1&&!ge(n))return e(me(n));if(ye(n)){var c=o?n[de]:r[0],a=o?n[ve]:n[c];if(!L(a))throw new Error(C(c));var s={keyId:R(c),pattern:a};return i&&(s.searcher=he(a,t)),s}var u={children:[],operator:r[0]};return r.forEach((function(t){var r=n[t];x(r)&&r.forEach((function(t){u.children.push(e(t))}))})),u};return ge(e)||(e=me(e)),o(e)}function Me(e,t){var n=t.ignoreFieldNorm,r=void 0===n?F.ignoreFieldNorm:n;e.forEach((function(e){var t=1;e.matches.forEach((function(e){var n=e.key,i=e.norm,o=e.score,c=n?n.weight:null;t*=Math.pow(0===o&&c?Number.EPSILON:o,(c||1)*(r?1:i))})),e.score=t}))}function xe(e,t){var n=e.matches;t.matches=[],S(n)&&n.forEach((function(e){if(S(e.indices)&&e.indices.length){var n={indices:e.indices,value:e.value};e.key&&(n.key=e.key.src),e.idx>-1&&(n.refIndex=e.idx),t.matches.push(n)}}))}function Le(e,t){t.score=e.score}function be(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.includeMatches,i=void 0===r?F.includeMatches:r,o=n.includeScore,c=void 0===o?F.includeScore:o,a=[];return i&&a.push(xe),c&&a.push(Le),e.map((function(e){var n=e.idx,r={item:t[n],refIndex:n};return a.length&&a.forEach((function(t){t(e,r)})),r}))}var Ze=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0;(0,p.Z)(this,e),this.options=M(M({},F),n),this.options.useExtendedSearch,this._keyStore=new O(this.options.keys),this.setCollection(t,r)}return(0,y.Z)(e,[{key:"setCollection",value:function(e,t){if(this._docs=e,t&&!(t instanceof K))throw new Error("Incorrect 'index' type");this._myIndex=t||z(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}},{key:"add",value:function(e){S(e)&&(this._docs.push(e),this._myIndex.add(e))}},{key:"remove",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){return!1},t=[],n=0,r=this._docs.length;n<r;n+=1){var i=this._docs[n];e(i,n)&&(this.removeAt(n),n-=1,r-=1,t.push(i))}return t}},{key:"removeAt",value:function(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}},{key:"getIndex",value:function(){return this._myIndex}},{key:"search",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.limit,r=void 0===n?-1:n,i=this.options,o=i.includeMatches,c=i.includeScore,a=i.shouldSort,s=i.sortFn,u=i.ignoreFieldNorm,h=L(e)?L(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return Me(h,{ignoreFieldNorm:u}),a&&h.sort(s),b(r)&&r>-1&&(h=h.slice(0,r)),be(h,this._docs,{includeMatches:o,includeScore:c})}},{key:"_searchStringList",value:function(e){var t=he(e,this.options),n=this._myIndex.records,r=[];return n.forEach((function(e){var n=e.v,i=e.i,o=e.n;if(S(n)){var c=t.searchIn(n),a=c.isMatch,s=c.score,u=c.indices;a&&r.push({item:n,idx:i,matches:[{score:s,value:n,norm:o,indices:u}]})}})),r}},{key:"_searchLogical",value:function(e){var t=this,n=ke(e,this.options),r=function e(n,r,i){if(!n.children){var o=n.keyId,c=n.searcher,a=t._findMatches({key:t._keyStore.get(o),value:t._myIndex.getValueForItemAtKeyId(r,o),searcher:c});return a&&a.length?[{idx:i,item:r,matches:a}]:[]}for(var s=[],u=0,h=n.children.length;u<h;u+=1){var l=e(n.children[u],r,i);if(l.length)s.push.apply(s,(0,v.Z)(l));else if(n.operator===le)return[]}return s},i=this._myIndex.records,o={},c=[];return i.forEach((function(e){var t=e.$,i=e.i;if(S(t)){var a=r(n,t,i);a.length&&(o[i]||(o[i]={idx:i,item:t,matches:[]},c.push(o[i])),a.forEach((function(e){var t,n=e.matches;(t=o[i].matches).push.apply(t,(0,v.Z)(n))})))}})),c}},{key:"_searchObjectList",value:function(e){var t=this,n=he(e,this.options),r=this._myIndex,i=r.keys,o=r.records,c=[];return o.forEach((function(e){var r=e.$,o=e.i;if(S(r)){var a=[];i.forEach((function(e,i){a.push.apply(a,(0,v.Z)(t._findMatches({key:e,value:r[i],searcher:n})))})),a.length&&c.push({idx:o,item:r,matches:a})}})),c}},{key:"_findMatches",value:function(e){var t=e.key,n=e.value,r=e.searcher;if(!S(n))return[];var i=[];if(x(n))n.forEach((function(e){var n=e.v,o=e.i,c=e.n;if(S(n)){var a=r.searchIn(n),s=a.isMatch,u=a.score,h=a.indices;s&&i.push({score:u,key:t,value:n,idx:o,norm:c,indices:h})}}));else{var o=n.v,c=n.n,a=r.searchIn(o),s=a.isMatch,u=a.score,h=a.indices;s&&i.push({score:u,key:t,value:o,norm:c,indices:h})}return i}}]),e}();function we(){var e=(0,a.K2)(Se).allMdx.nodes,t=new Ze(e,{keys:["frontmatter.title","frontmatter.description","frontmatter.author"]});return function(e){return t.search(e)}}Ze.version="6.5.3",Ze.createIndex=z,Ze.parseIndex=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.getFn,r=void 0===n?F.getFn:n,i=t.fieldNormWeight,o=void 0===i?F.fieldNormWeight:i,c=e.keys,a=e.records,s=new K({getFn:r,fieldNormWeight:o});return s.setKeys(c),s.setIndexRecords(a),s},Ze.config=F,Ze.parseQuery=ke,function(){ue.push.apply(ue,arguments)}(se);var Se="4126024046";var _e=function(e){var t=e.title,n=void 0===t?"What's New?":t,l=e.description,f=void 0===l?"Trending Articles, or even ones from users you Follow":l,d=e.className,v=void 0===d?"":d,g=(0,h.useRecoilState)(s.Z)[1],p=(0,h.useRecoilState)(u.Z)[1],y=c.useRef(null),m=we();return c.createElement("section",{className:"page-content-top "+v},c.createElement("div",{className:"page-meta"},c.createElement("h1",{className:"page-content-header"},n),c.createElement("p",{className:"page-content-description"},f)),c.createElement("div",{className:"page-actions"},c.createElement("label",{className:"search-bar"},c.createElement("input",{type:"text",placeholder:" ",onKeyDown:function(e){e.key;p(m(y.current.value))},ref:y}),c.createElement(o.G,{className:"search-bar-icon",icon:i.wn1}),c.createElement("span",{className:"search-bar-placeholder"},"Search")),c.createElement(a.rU,{to:"/bookmarks",className:"bookmarks-button",onClick:function(){return g({routeSlug:"/bookmarks",routeTitle:"Bookmarks"})}},c.createElement(o.G,{className:"bookmarks-icon",icon:r.xV}),c.createElement("span",{className:"text"},"Your Bookmarks"))))}},7171:function(e,t,n){var r=(0,n(8525).atom)({key:"search",default:[]});t.Z=r}}]);
//# sourceMappingURL=52c90121f1e85b22d9e22dca853c8fbf68d7e090-24686fe37e0d345efb1a.js.map