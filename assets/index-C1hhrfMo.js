(function(){const h=document.createElement("link").relList;if(h&&h.supports&&h.supports("modulepreload"))return;for(const _ of document.querySelectorAll('link[rel="modulepreload"]'))p(_);new MutationObserver(_=>{for(const o of _)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&p(r)}).observe(document,{childList:!0,subtree:!0});function a(_){const o={};return _.integrity&&(o.integrity=_.integrity),_.referrerPolicy&&(o.referrerPolicy=_.referrerPolicy),_.crossOrigin==="use-credentials"?o.credentials="include":_.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function p(_){if(_.ep)return;_.ep=!0;const o=a(_);fetch(_.href,o)}})();function $s(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}var ye={exports:{}};var qs=ye.exports,Vn;function Vs(){return Vn||(Vn=1,(function(u,h){(function(a,p){p(h)})(qs,(function(a){var p="1.9.4";function _(t){var e,i,n,s;for(i=1,n=arguments.length;i<n;i++){s=arguments[i];for(e in s)t[e]=s[e]}return t}var o=Object.create||(function(){function t(){}return function(e){return t.prototype=e,new t}})();function r(t,e){var i=Array.prototype.slice;if(t.bind)return t.bind.apply(t,i.call(arguments,1));var n=i.call(arguments,2);return function(){return t.apply(e,n.length?n.concat(i.call(arguments)):arguments)}}var c=0;function d(t){return"_leaflet_id"in t||(t._leaflet_id=++c),t._leaflet_id}function f(t,e,i){var n,s,l,m;return m=function(){n=!1,s&&(l.apply(i,s),s=!1)},l=function(){n?s=arguments:(t.apply(i,arguments),setTimeout(m,e),n=!0)},l}function y(t,e,i){var n=e[1],s=e[0],l=n-s;return t===n&&i?t:((t-s)%l+l)%l+s}function g(){return!1}function x(t,e){if(e===!1)return t;var i=Math.pow(10,e===void 0?6:e);return Math.round(t*i)/i}function b(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function P(t){return b(t).split(/\s+/)}function k(t,e){Object.prototype.hasOwnProperty.call(t,"options")||(t.options=t.options?o(t.options):{});for(var i in e)t.options[i]=e[i];return t.options}function B(t,e,i){var n=[];for(var s in t)n.push(encodeURIComponent(i?s.toUpperCase():s)+"="+encodeURIComponent(t[s]));return(!e||e.indexOf("?")===-1?"?":"&")+n.join("&")}var S=/\{ *([\w_ -]+) *\}/g;function E(t,e){return t.replace(S,function(i,n){var s=e[n];if(s===void 0)throw new Error("No value provided for variable "+i);return typeof s=="function"&&(s=s(e)),s})}var Z=Array.isArray||function(t){return Object.prototype.toString.call(t)==="[object Array]"};function G(t,e){for(var i=0;i<t.length;i++)if(t[i]===e)return i;return-1}var j="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function et(t){return window["webkit"+t]||window["moz"+t]||window["ms"+t]}var M=0;function z(t){var e=+new Date,i=Math.max(0,16-(e-M));return M=e+i,window.setTimeout(t,i)}var V=window.requestAnimationFrame||et("RequestAnimationFrame")||z,U=window.cancelAnimationFrame||et("CancelAnimationFrame")||et("CancelRequestAnimationFrame")||function(t){window.clearTimeout(t)};function Y(t,e,i){if(i&&V===z)t.call(e);else return V.call(window,r(t,e))}function it(t){t&&U.call(window,t)}var ht={__proto__:null,extend:_,create:o,bind:r,get lastId(){return c},stamp:d,throttle:f,wrapNum:y,falseFn:g,formatNum:x,trim:b,splitWords:P,setOptions:k,getParamString:B,template:E,isArray:Z,indexOf:G,emptyImageUrl:j,requestFn:V,cancelFn:U,requestAnimFrame:Y,cancelAnimFrame:it};function Q(){}Q.extend=function(t){var e=function(){k(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},i=e.__super__=this.prototype,n=o(i);n.constructor=e,e.prototype=n;for(var s in this)Object.prototype.hasOwnProperty.call(this,s)&&s!=="prototype"&&s!=="__super__"&&(e[s]=this[s]);return t.statics&&_(e,t.statics),t.includes&&(xt(t.includes),_.apply(null,[n].concat(t.includes))),_(n,t),delete n.statics,delete n.includes,n.options&&(n.options=i.options?o(i.options):{},_(n.options,t.options)),n._initHooks=[],n.callInitHooks=function(){if(!this._initHooksCalled){i.callInitHooks&&i.callInitHooks.call(this),this._initHooksCalled=!0;for(var l=0,m=n._initHooks.length;l<m;l++)n._initHooks[l].call(this)}},e},Q.include=function(t){var e=this.prototype.options;return _(this.prototype,t),t.options&&(this.prototype.options=e,this.mergeOptions(t.options)),this},Q.mergeOptions=function(t){return _(this.prototype.options,t),this},Q.addInitHook=function(t){var e=Array.prototype.slice.call(arguments,1),i=typeof t=="function"?t:function(){this[t].apply(this,e)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(i),this};function xt(t){if(!(typeof L>"u"||!L||!L.Mixin)){t=Z(t)?t:[t];for(var e=0;e<t.length;e++)t[e]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var ut={on:function(t,e,i){if(typeof t=="object")for(var n in t)this._on(n,t[n],e);else{t=P(t);for(var s=0,l=t.length;s<l;s++)this._on(t[s],e,i)}return this},off:function(t,e,i){if(!arguments.length)delete this._events;else if(typeof t=="object")for(var n in t)this._off(n,t[n],e);else{t=P(t);for(var s=arguments.length===1,l=0,m=t.length;l<m;l++)s?this._off(t[l]):this._off(t[l],e,i)}return this},_on:function(t,e,i,n){if(typeof e!="function"){console.warn("wrong listener type: "+typeof e);return}if(this._listens(t,e,i)===!1){i===this&&(i=void 0);var s={fn:e,ctx:i};n&&(s.once=!0),this._events=this._events||{},this._events[t]=this._events[t]||[],this._events[t].push(s)}},_off:function(t,e,i){var n,s,l;if(this._events&&(n=this._events[t],!!n)){if(arguments.length===1){if(this._firingCount)for(s=0,l=n.length;s<l;s++)n[s].fn=g;delete this._events[t];return}if(typeof e!="function"){console.warn("wrong listener type: "+typeof e);return}var m=this._listens(t,e,i);if(m!==!1){var v=n[m];this._firingCount&&(v.fn=g,this._events[t]=n=n.slice()),n.splice(m,1)}}},fire:function(t,e,i){if(!this.listens(t,i))return this;var n=_({},e,{type:t,target:this,sourceTarget:e&&e.sourceTarget||this});if(this._events){var s=this._events[t];if(s){this._firingCount=this._firingCount+1||1;for(var l=0,m=s.length;l<m;l++){var v=s[l],w=v.fn;v.once&&this.off(t,w,v.ctx),w.call(v.ctx||this,n)}this._firingCount--}}return i&&this._propagateEvent(n),this},listens:function(t,e,i,n){typeof t!="string"&&console.warn('"string" type argument expected');var s=e;typeof e!="function"&&(n=!!e,s=void 0,i=void 0);var l=this._events&&this._events[t];if(l&&l.length&&this._listens(t,s,i)!==!1)return!0;if(n){for(var m in this._eventParents)if(this._eventParents[m].listens(t,e,i,n))return!0}return!1},_listens:function(t,e,i){if(!this._events)return!1;var n=this._events[t]||[];if(!e)return!!n.length;i===this&&(i=void 0);for(var s=0,l=n.length;s<l;s++)if(n[s].fn===e&&n[s].ctx===i)return s;return!1},once:function(t,e,i){if(typeof t=="object")for(var n in t)this._on(n,t[n],e,!0);else{t=P(t);for(var s=0,l=t.length;s<l;s++)this._on(t[s],e,i,!0)}return this},addEventParent:function(t){return this._eventParents=this._eventParents||{},this._eventParents[d(t)]=t,this},removeEventParent:function(t){return this._eventParents&&delete this._eventParents[d(t)],this},_propagateEvent:function(t){for(var e in this._eventParents)this._eventParents[e].fire(t.type,_({layer:t.target,propagatedFrom:t.target},t),!0)}};ut.addEventListener=ut.on,ut.removeEventListener=ut.clearAllEventListeners=ut.off,ut.addOneTimeEventListener=ut.once,ut.fireEvent=ut.fire,ut.hasEventListeners=ut.listens;var wt=Q.extend(ut);function R(t,e,i){this.x=i?Math.round(t):t,this.y=i?Math.round(e):e}var Dt=Math.trunc||function(t){return t>0?Math.floor(t):Math.ceil(t)};R.prototype={clone:function(){return new R(this.x,this.y)},add:function(t){return this.clone()._add(A(t))},_add:function(t){return this.x+=t.x,this.y+=t.y,this},subtract:function(t){return this.clone()._subtract(A(t))},_subtract:function(t){return this.x-=t.x,this.y-=t.y,this},divideBy:function(t){return this.clone()._divideBy(t)},_divideBy:function(t){return this.x/=t,this.y/=t,this},multiplyBy:function(t){return this.clone()._multiplyBy(t)},_multiplyBy:function(t){return this.x*=t,this.y*=t,this},scaleBy:function(t){return new R(this.x*t.x,this.y*t.y)},unscaleBy:function(t){return new R(this.x/t.x,this.y/t.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=Dt(this.x),this.y=Dt(this.y),this},distanceTo:function(t){t=A(t);var e=t.x-this.x,i=t.y-this.y;return Math.sqrt(e*e+i*i)},equals:function(t){return t=A(t),t.x===this.x&&t.y===this.y},contains:function(t){return t=A(t),Math.abs(t.x)<=Math.abs(this.x)&&Math.abs(t.y)<=Math.abs(this.y)},toString:function(){return"Point("+x(this.x)+", "+x(this.y)+")"}};function A(t,e,i){return t instanceof R?t:Z(t)?new R(t[0],t[1]):t==null?t:typeof t=="object"&&"x"in t&&"y"in t?new R(t.x,t.y):new R(t,e,i)}function J(t,e){if(t)for(var i=e?[t,e]:t,n=0,s=i.length;n<s;n++)this.extend(i[n])}J.prototype={extend:function(t){var e,i;if(!t)return this;if(t instanceof R||typeof t[0]=="number"||"x"in t)e=i=A(t);else if(t=ft(t),e=t.min,i=t.max,!e||!i)return this;return!this.min&&!this.max?(this.min=e.clone(),this.max=i.clone()):(this.min.x=Math.min(e.x,this.min.x),this.max.x=Math.max(i.x,this.max.x),this.min.y=Math.min(e.y,this.min.y),this.max.y=Math.max(i.y,this.max.y)),this},getCenter:function(t){return A((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,t)},getBottomLeft:function(){return A(this.min.x,this.max.y)},getTopRight:function(){return A(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(t){var e,i;return typeof t[0]=="number"||t instanceof R?t=A(t):t=ft(t),t instanceof J?(e=t.min,i=t.max):e=i=t,e.x>=this.min.x&&i.x<=this.max.x&&e.y>=this.min.y&&i.y<=this.max.y},intersects:function(t){t=ft(t);var e=this.min,i=this.max,n=t.min,s=t.max,l=s.x>=e.x&&n.x<=i.x,m=s.y>=e.y&&n.y<=i.y;return l&&m},overlaps:function(t){t=ft(t);var e=this.min,i=this.max,n=t.min,s=t.max,l=s.x>e.x&&n.x<i.x,m=s.y>e.y&&n.y<i.y;return l&&m},isValid:function(){return!!(this.min&&this.max)},pad:function(t){var e=this.min,i=this.max,n=Math.abs(e.x-i.x)*t,s=Math.abs(e.y-i.y)*t;return ft(A(e.x-n,e.y-s),A(i.x+n,i.y+s))},equals:function(t){return t?(t=ft(t),this.min.equals(t.getTopLeft())&&this.max.equals(t.getBottomRight())):!1}};function ft(t,e){return!t||t instanceof J?t:new J(t,e)}function mt(t,e){if(t)for(var i=e?[t,e]:t,n=0,s=i.length;n<s;n++)this.extend(i[n])}mt.prototype={extend:function(t){var e=this._southWest,i=this._northEast,n,s;if(t instanceof K)n=t,s=t;else if(t instanceof mt){if(n=t._southWest,s=t._northEast,!n||!s)return this}else return t?this.extend(W(t)||ot(t)):this;return!e&&!i?(this._southWest=new K(n.lat,n.lng),this._northEast=new K(s.lat,s.lng)):(e.lat=Math.min(n.lat,e.lat),e.lng=Math.min(n.lng,e.lng),i.lat=Math.max(s.lat,i.lat),i.lng=Math.max(s.lng,i.lng)),this},pad:function(t){var e=this._southWest,i=this._northEast,n=Math.abs(e.lat-i.lat)*t,s=Math.abs(e.lng-i.lng)*t;return new mt(new K(e.lat-n,e.lng-s),new K(i.lat+n,i.lng+s))},getCenter:function(){return new K((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new K(this.getNorth(),this.getWest())},getSouthEast:function(){return new K(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(t){typeof t[0]=="number"||t instanceof K||"lat"in t?t=W(t):t=ot(t);var e=this._southWest,i=this._northEast,n,s;return t instanceof mt?(n=t.getSouthWest(),s=t.getNorthEast()):n=s=t,n.lat>=e.lat&&s.lat<=i.lat&&n.lng>=e.lng&&s.lng<=i.lng},intersects:function(t){t=ot(t);var e=this._southWest,i=this._northEast,n=t.getSouthWest(),s=t.getNorthEast(),l=s.lat>=e.lat&&n.lat<=i.lat,m=s.lng>=e.lng&&n.lng<=i.lng;return l&&m},overlaps:function(t){t=ot(t);var e=this._southWest,i=this._northEast,n=t.getSouthWest(),s=t.getNorthEast(),l=s.lat>e.lat&&n.lat<i.lat,m=s.lng>e.lng&&n.lng<i.lng;return l&&m},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(t,e){return t?(t=ot(t),this._southWest.equals(t.getSouthWest(),e)&&this._northEast.equals(t.getNorthEast(),e)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function ot(t,e){return t instanceof mt?t:new mt(t,e)}function K(t,e,i){if(isNaN(t)||isNaN(e))throw new Error("Invalid LatLng object: ("+t+", "+e+")");this.lat=+t,this.lng=+e,i!==void 0&&(this.alt=+i)}K.prototype={equals:function(t,e){if(!t)return!1;t=W(t);var i=Math.max(Math.abs(this.lat-t.lat),Math.abs(this.lng-t.lng));return i<=(e===void 0?1e-9:e)},toString:function(t){return"LatLng("+x(this.lat,t)+", "+x(this.lng,t)+")"},distanceTo:function(t){return At.distance(this,W(t))},wrap:function(){return At.wrapLatLng(this)},toBounds:function(t){var e=180*t/40075017,i=e/Math.cos(Math.PI/180*this.lat);return ot([this.lat-e,this.lng-i],[this.lat+e,this.lng+i])},clone:function(){return new K(this.lat,this.lng,this.alt)}};function W(t,e,i){return t instanceof K?t:Z(t)&&typeof t[0]!="object"?t.length===3?new K(t[0],t[1],t[2]):t.length===2?new K(t[0],t[1]):null:t==null?t:typeof t=="object"&&"lat"in t?new K(t.lat,"lng"in t?t.lng:t.lon,t.alt):e===void 0?null:new K(t,e,i)}var Tt={latLngToPoint:function(t,e){var i=this.projection.project(t),n=this.scale(e);return this.transformation._transform(i,n)},pointToLatLng:function(t,e){var i=this.scale(e),n=this.transformation.untransform(t,i);return this.projection.unproject(n)},project:function(t){return this.projection.project(t)},unproject:function(t){return this.projection.unproject(t)},scale:function(t){return 256*Math.pow(2,t)},zoom:function(t){return Math.log(t/256)/Math.LN2},getProjectedBounds:function(t){if(this.infinite)return null;var e=this.projection.bounds,i=this.scale(t),n=this.transformation.transform(e.min,i),s=this.transformation.transform(e.max,i);return new J(n,s)},infinite:!1,wrapLatLng:function(t){var e=this.wrapLng?y(t.lng,this.wrapLng,!0):t.lng,i=this.wrapLat?y(t.lat,this.wrapLat,!0):t.lat,n=t.alt;return new K(i,e,n)},wrapLatLngBounds:function(t){var e=t.getCenter(),i=this.wrapLatLng(e),n=e.lat-i.lat,s=e.lng-i.lng;if(n===0&&s===0)return t;var l=t.getSouthWest(),m=t.getNorthEast(),v=new K(l.lat-n,l.lng-s),w=new K(m.lat-n,m.lng-s);return new mt(v,w)}},At=_({},Tt,{wrapLng:[-180,180],R:6371e3,distance:function(t,e){var i=Math.PI/180,n=t.lat*i,s=e.lat*i,l=Math.sin((e.lat-t.lat)*i/2),m=Math.sin((e.lng-t.lng)*i/2),v=l*l+Math.cos(n)*Math.cos(s)*m*m,w=2*Math.atan2(Math.sqrt(v),Math.sqrt(1-v));return this.R*w}}),Ri=6378137,Xe={R:Ri,MAX_LATITUDE:85.0511287798,project:function(t){var e=Math.PI/180,i=this.MAX_LATITUDE,n=Math.max(Math.min(i,t.lat),-i),s=Math.sin(n*e);return new R(this.R*t.lng*e,this.R*Math.log((1+s)/(1-s))/2)},unproject:function(t){var e=180/Math.PI;return new K((2*Math.atan(Math.exp(t.y/this.R))-Math.PI/2)*e,t.x*e/this.R)},bounds:(function(){var t=Ri*Math.PI;return new J([-t,-t],[t,t])})()};function Qe(t,e,i,n){if(Z(t)){this._a=t[0],this._b=t[1],this._c=t[2],this._d=t[3];return}this._a=t,this._b=e,this._c=i,this._d=n}Qe.prototype={transform:function(t,e){return this._transform(t.clone(),e)},_transform:function(t,e){return e=e||1,t.x=e*(this._a*t.x+this._b),t.y=e*(this._c*t.y+this._d),t},untransform:function(t,e){return e=e||1,new R((t.x/e-this._b)/this._a,(t.y/e-this._d)/this._c)}};function se(t,e,i,n){return new Qe(t,e,i,n)}var ti=_({},At,{code:"EPSG:3857",projection:Xe,transformation:(function(){var t=.5/(Math.PI*Xe.R);return se(t,.5,-t,.5)})()}),wo=_({},ti,{code:"EPSG:900913"});function Ni(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Di(t,e){var i="",n,s,l,m,v,w;for(n=0,l=t.length;n<l;n++){for(v=t[n],s=0,m=v.length;s<m;s++)w=v[s],i+=(s?"L":"M")+w.x+" "+w.y;i+=e?I.svg?"z":"x":""}return i||"M0 0"}var ei=document.documentElement.style,Pe="ActiveXObject"in window,Lo=Pe&&!document.addEventListener,Fi="msLaunchUri"in navigator&&!("documentMode"in document),ii=Pt("webkit"),Gi=Pt("android"),Hi=Pt("android 2")||Pt("android 3"),ko=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),Po=Gi&&Pt("Google")&&ko<537&&!("AudioNode"in window),ni=!!window.opera,ji=!Fi&&Pt("chrome"),Ui=Pt("gecko")&&!ii&&!ni&&!Pe,Co=!ji&&Pt("safari"),Wi=Pt("phantom"),$i="OTransition"in ei,Mo=navigator.platform.indexOf("Win")===0,qi=Pe&&"transition"in ei,oi="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!Hi,Vi="MozPerspective"in ei,So=!window.L_DISABLE_3D&&(qi||oi||Vi)&&!$i&&!Wi,re=typeof orientation<"u"||Pt("mobile"),To=re&&ii,Eo=re&&oi,Yi=!window.PointerEvent&&window.MSPointerEvent,Ki=!!(window.PointerEvent||Yi),Ji="ontouchstart"in window||!!window.TouchEvent,Io=!window.L_NO_TOUCH&&(Ji||Ki),Bo=re&&ni,zo=re&&Ui,Ao=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,Oo=(function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("testPassiveEventSupport",g,e),window.removeEventListener("testPassiveEventSupport",g,e)}catch{}return t})(),Zo=(function(){return!!document.createElement("canvas").getContext})(),si=!!(document.createElementNS&&Ni("svg").createSVGRect),Ro=!!si&&(function(){var t=document.createElement("div");return t.innerHTML="<svg/>",(t.firstChild&&t.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"})(),No=!si&&(function(){try{var t=document.createElement("div");t.innerHTML='<v:shape adj="1"/>';var e=t.firstChild;return e.style.behavior="url(#default#VML)",e&&typeof e.adj=="object"}catch{return!1}})(),Do=navigator.platform.indexOf("Mac")===0,Fo=navigator.platform.indexOf("Linux")===0;function Pt(t){return navigator.userAgent.toLowerCase().indexOf(t)>=0}var I={ie:Pe,ielt9:Lo,edge:Fi,webkit:ii,android:Gi,android23:Hi,androidStock:Po,opera:ni,chrome:ji,gecko:Ui,safari:Co,phantom:Wi,opera12:$i,win:Mo,ie3d:qi,webkit3d:oi,gecko3d:Vi,any3d:So,mobile:re,mobileWebkit:To,mobileWebkit3d:Eo,msPointer:Yi,pointer:Ki,touch:Io,touchNative:Ji,mobileOpera:Bo,mobileGecko:zo,retina:Ao,passiveEvents:Oo,canvas:Zo,svg:si,vml:No,inlineSvg:Ro,mac:Do,linux:Fo},Xi=I.msPointer?"MSPointerDown":"pointerdown",Qi=I.msPointer?"MSPointerMove":"pointermove",tn=I.msPointer?"MSPointerUp":"pointerup",en=I.msPointer?"MSPointerCancel":"pointercancel",ri={touchstart:Xi,touchmove:Qi,touchend:tn,touchcancel:en},nn={touchstart:$o,touchmove:Ce,touchend:Ce,touchcancel:Ce},$t={},on=!1;function Go(t,e,i){return e==="touchstart"&&Wo(),nn[e]?(i=nn[e].bind(this,i),t.addEventListener(ri[e],i,!1),i):(console.warn("wrong event specified:",e),g)}function Ho(t,e,i){if(!ri[e]){console.warn("wrong event specified:",e);return}t.removeEventListener(ri[e],i,!1)}function jo(t){$t[t.pointerId]=t}function Uo(t){$t[t.pointerId]&&($t[t.pointerId]=t)}function sn(t){delete $t[t.pointerId]}function Wo(){on||(document.addEventListener(Xi,jo,!0),document.addEventListener(Qi,Uo,!0),document.addEventListener(tn,sn,!0),document.addEventListener(en,sn,!0),on=!0)}function Ce(t,e){if(e.pointerType!==(e.MSPOINTER_TYPE_MOUSE||"mouse")){e.touches=[];for(var i in $t)e.touches.push($t[i]);e.changedTouches=[e],t(e)}}function $o(t,e){e.MSPOINTER_TYPE_TOUCH&&e.pointerType===e.MSPOINTER_TYPE_TOUCH&&ct(e),Ce(t,e)}function qo(t){var e={},i,n;for(n in t)i=t[n],e[n]=i&&i.bind?i.bind(t):i;return t=e,e.type="dblclick",e.detail=2,e.isTrusted=!1,e._simulated=!0,e}var Vo=200;function Yo(t,e){t.addEventListener("dblclick",e);var i=0,n;function s(l){if(l.detail!==1){n=l.detail;return}if(!(l.pointerType==="mouse"||l.sourceCapabilities&&!l.sourceCapabilities.firesTouchEvents)){var m=dn(l);if(!(m.some(function(w){return w instanceof HTMLLabelElement&&w.attributes.for})&&!m.some(function(w){return w instanceof HTMLInputElement||w instanceof HTMLSelectElement}))){var v=Date.now();v-i<=Vo?(n++,n===2&&e(qo(l))):n=1,i=v}}}return t.addEventListener("click",s),{dblclick:e,simDblclick:s}}function Ko(t,e){t.removeEventListener("dblclick",e.dblclick),t.removeEventListener("click",e.simDblclick)}var ai=Te(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),ae=Te(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),rn=ae==="webkitTransition"||ae==="OTransition"?ae+"End":"transitionend";function an(t){return typeof t=="string"?document.getElementById(t):t}function le(t,e){var i=t.style[e]||t.currentStyle&&t.currentStyle[e];if((!i||i==="auto")&&document.defaultView){var n=document.defaultView.getComputedStyle(t,null);i=n?n[e]:null}return i==="auto"?null:i}function q(t,e,i){var n=document.createElement(t);return n.className=e||"",i&&i.appendChild(n),n}function tt(t){var e=t.parentNode;e&&e.removeChild(t)}function Me(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function qt(t){var e=t.parentNode;e&&e.lastChild!==t&&e.appendChild(t)}function Vt(t){var e=t.parentNode;e&&e.firstChild!==t&&e.insertBefore(t,e.firstChild)}function li(t,e){if(t.classList!==void 0)return t.classList.contains(e);var i=Se(t);return i.length>0&&new RegExp("(^|\\s)"+e+"(\\s|$)").test(i)}function F(t,e){if(t.classList!==void 0)for(var i=P(e),n=0,s=i.length;n<s;n++)t.classList.add(i[n]);else if(!li(t,e)){var l=Se(t);ci(t,(l?l+" ":"")+e)}}function nt(t,e){t.classList!==void 0?t.classList.remove(e):ci(t,b((" "+Se(t)+" ").replace(" "+e+" "," ")))}function ci(t,e){t.className.baseVal===void 0?t.className=e:t.className.baseVal=e}function Se(t){return t.correspondingElement&&(t=t.correspondingElement),t.className.baseVal===void 0?t.className:t.className.baseVal}function vt(t,e){"opacity"in t.style?t.style.opacity=e:"filter"in t.style&&Jo(t,e)}function Jo(t,e){var i=!1,n="DXImageTransform.Microsoft.Alpha";try{i=t.filters.item(n)}catch{if(e===1)return}e=Math.round(e*100),i?(i.Enabled=e!==100,i.Opacity=e):t.style.filter+=" progid:"+n+"(opacity="+e+")"}function Te(t){for(var e=document.documentElement.style,i=0;i<t.length;i++)if(t[i]in e)return t[i];return!1}function Ft(t,e,i){var n=e||new R(0,0);t.style[ai]=(I.ie3d?"translate("+n.x+"px,"+n.y+"px)":"translate3d("+n.x+"px,"+n.y+"px,0)")+(i?" scale("+i+")":"")}function st(t,e){t._leaflet_pos=e,I.any3d?Ft(t,e):(t.style.left=e.x+"px",t.style.top=e.y+"px")}function Gt(t){return t._leaflet_pos||new R(0,0)}var ce,de,di;if("onselectstart"in document)ce=function(){N(window,"selectstart",ct)},de=function(){X(window,"selectstart",ct)};else{var he=Te(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);ce=function(){if(he){var t=document.documentElement.style;di=t[he],t[he]="none"}},de=function(){he&&(document.documentElement.style[he]=di,di=void 0)}}function hi(){N(window,"dragstart",ct)}function ui(){X(window,"dragstart",ct)}var Ee,pi;function fi(t){for(;t.tabIndex===-1;)t=t.parentNode;t.style&&(Ie(),Ee=t,pi=t.style.outlineStyle,t.style.outlineStyle="none",N(window,"keydown",Ie))}function Ie(){Ee&&(Ee.style.outlineStyle=pi,Ee=void 0,pi=void 0,X(window,"keydown",Ie))}function ln(t){do t=t.parentNode;while((!t.offsetWidth||!t.offsetHeight)&&t!==document.body);return t}function mi(t){var e=t.getBoundingClientRect();return{x:e.width/t.offsetWidth||1,y:e.height/t.offsetHeight||1,boundingClientRect:e}}var Xo={__proto__:null,TRANSFORM:ai,TRANSITION:ae,TRANSITION_END:rn,get:an,getStyle:le,create:q,remove:tt,empty:Me,toFront:qt,toBack:Vt,hasClass:li,addClass:F,removeClass:nt,setClass:ci,getClass:Se,setOpacity:vt,testProp:Te,setTransform:Ft,setPosition:st,getPosition:Gt,get disableTextSelection(){return ce},get enableTextSelection(){return de},disableImageDrag:hi,enableImageDrag:ui,preventOutline:fi,restoreOutline:Ie,getSizedParentNode:ln,getScale:mi};function N(t,e,i,n){if(e&&typeof e=="object")for(var s in e)gi(t,s,e[s],i);else{e=P(e);for(var l=0,m=e.length;l<m;l++)gi(t,e[l],i,n)}return this}var Ct="_leaflet_events";function X(t,e,i,n){if(arguments.length===1)cn(t),delete t[Ct];else if(e&&typeof e=="object")for(var s in e)vi(t,s,e[s],i);else if(e=P(e),arguments.length===2)cn(t,function(v){return G(e,v)!==-1});else for(var l=0,m=e.length;l<m;l++)vi(t,e[l],i,n);return this}function cn(t,e){for(var i in t[Ct]){var n=i.split(/\d/)[0];(!e||e(n))&&vi(t,n,null,null,i)}}var _i={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function gi(t,e,i,n){var s=e+d(i)+(n?"_"+d(n):"");if(t[Ct]&&t[Ct][s])return this;var l=function(v){return i.call(n||t,v||window.event)},m=l;!I.touchNative&&I.pointer&&e.indexOf("touch")===0?l=Go(t,e,l):I.touch&&e==="dblclick"?l=Yo(t,l):"addEventListener"in t?e==="touchstart"||e==="touchmove"||e==="wheel"||e==="mousewheel"?t.addEventListener(_i[e]||e,l,I.passiveEvents?{passive:!1}:!1):e==="mouseenter"||e==="mouseleave"?(l=function(v){v=v||window.event,bi(t,v)&&m(v)},t.addEventListener(_i[e],l,!1)):t.addEventListener(e,m,!1):t.attachEvent("on"+e,l),t[Ct]=t[Ct]||{},t[Ct][s]=l}function vi(t,e,i,n,s){s=s||e+d(i)+(n?"_"+d(n):"");var l=t[Ct]&&t[Ct][s];if(!l)return this;!I.touchNative&&I.pointer&&e.indexOf("touch")===0?Ho(t,e,l):I.touch&&e==="dblclick"?Ko(t,l):"removeEventListener"in t?t.removeEventListener(_i[e]||e,l,!1):t.detachEvent("on"+e,l),t[Ct][s]=null}function Ht(t){return t.stopPropagation?t.stopPropagation():t.originalEvent?t.originalEvent._stopped=!0:t.cancelBubble=!0,this}function yi(t){return gi(t,"wheel",Ht),this}function ue(t){return N(t,"mousedown touchstart dblclick contextmenu",Ht),t._leaflet_disable_click=!0,this}function ct(t){return t.preventDefault?t.preventDefault():t.returnValue=!1,this}function jt(t){return ct(t),Ht(t),this}function dn(t){if(t.composedPath)return t.composedPath();for(var e=[],i=t.target;i;)e.push(i),i=i.parentNode;return e}function hn(t,e){if(!e)return new R(t.clientX,t.clientY);var i=mi(e),n=i.boundingClientRect;return new R((t.clientX-n.left)/i.x-e.clientLeft,(t.clientY-n.top)/i.y-e.clientTop)}var Qo=I.linux&&I.chrome?window.devicePixelRatio:I.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function un(t){return I.edge?t.wheelDeltaY/2:t.deltaY&&t.deltaMode===0?-t.deltaY/Qo:t.deltaY&&t.deltaMode===1?-t.deltaY*20:t.deltaY&&t.deltaMode===2?-t.deltaY*60:t.deltaX||t.deltaZ?0:t.wheelDelta?(t.wheelDeltaY||t.wheelDelta)/2:t.detail&&Math.abs(t.detail)<32765?-t.detail*20:t.detail?t.detail/-32765*60:0}function bi(t,e){var i=e.relatedTarget;if(!i)return!0;try{for(;i&&i!==t;)i=i.parentNode}catch{return!1}return i!==t}var ts={__proto__:null,on:N,off:X,stopPropagation:Ht,disableScrollPropagation:yi,disableClickPropagation:ue,preventDefault:ct,stop:jt,getPropagationPath:dn,getMousePosition:hn,getWheelDelta:un,isExternalTarget:bi,addListener:N,removeListener:X},pn=wt.extend({run:function(t,e,i,n){this.stop(),this._el=t,this._inProgress=!0,this._duration=i||.25,this._easeOutPower=1/Math.max(n||.5,.2),this._startPos=Gt(t),this._offset=e.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=Y(this._animate,this),this._step()},_step:function(t){var e=+new Date-this._startTime,i=this._duration*1e3;e<i?this._runFrame(this._easeOut(e/i),t):(this._runFrame(1),this._complete())},_runFrame:function(t,e){var i=this._startPos.add(this._offset.multiplyBy(t));e&&i._round(),st(this._el,i),this.fire("step")},_complete:function(){it(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(t){return 1-Math.pow(1-t,this._easeOutPower)}}),$=wt.extend({options:{crs:ti,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(t,e){e=k(this,e),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(t),this._initLayout(),this._onResize=r(this._onResize,this),this._initEvents(),e.maxBounds&&this.setMaxBounds(e.maxBounds),e.zoom!==void 0&&(this._zoom=this._limitZoom(e.zoom)),e.center&&e.zoom!==void 0&&this.setView(W(e.center),e.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=ae&&I.any3d&&!I.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),N(this._proxy,rn,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(t,e,i){if(e=e===void 0?this._zoom:this._limitZoom(e),t=this._limitCenter(W(t),e,this.options.maxBounds),i=i||{},this._stop(),this._loaded&&!i.reset&&i!==!0){i.animate!==void 0&&(i.zoom=_({animate:i.animate},i.zoom),i.pan=_({animate:i.animate,duration:i.duration},i.pan));var n=this._zoom!==e?this._tryAnimatedZoom&&this._tryAnimatedZoom(t,e,i.zoom):this._tryAnimatedPan(t,i.pan);if(n)return clearTimeout(this._sizeTimer),this}return this._resetView(t,e,i.pan&&i.pan.noMoveStart),this},setZoom:function(t,e){return this._loaded?this.setView(this.getCenter(),t,{zoom:e}):(this._zoom=t,this)},zoomIn:function(t,e){return t=t||(I.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+t,e)},zoomOut:function(t,e){return t=t||(I.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-t,e)},setZoomAround:function(t,e,i){var n=this.getZoomScale(e),s=this.getSize().divideBy(2),l=t instanceof R?t:this.latLngToContainerPoint(t),m=l.subtract(s).multiplyBy(1-1/n),v=this.containerPointToLatLng(s.add(m));return this.setView(v,e,{zoom:i})},_getBoundsCenterZoom:function(t,e){e=e||{},t=t.getBounds?t.getBounds():ot(t);var i=A(e.paddingTopLeft||e.padding||[0,0]),n=A(e.paddingBottomRight||e.padding||[0,0]),s=this.getBoundsZoom(t,!1,i.add(n));if(s=typeof e.maxZoom=="number"?Math.min(e.maxZoom,s):s,s===1/0)return{center:t.getCenter(),zoom:s};var l=n.subtract(i).divideBy(2),m=this.project(t.getSouthWest(),s),v=this.project(t.getNorthEast(),s),w=this.unproject(m.add(v).divideBy(2).add(l),s);return{center:w,zoom:s}},fitBounds:function(t,e){if(t=ot(t),!t.isValid())throw new Error("Bounds are not valid.");var i=this._getBoundsCenterZoom(t,e);return this.setView(i.center,i.zoom,e)},fitWorld:function(t){return this.fitBounds([[-90,-180],[90,180]],t)},panTo:function(t,e){return this.setView(t,this._zoom,{pan:e})},panBy:function(t,e){if(t=A(t).round(),e=e||{},!t.x&&!t.y)return this.fire("moveend");if(e.animate!==!0&&!this.getSize().contains(t))return this._resetView(this.unproject(this.project(this.getCenter()).add(t)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new pn,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),e.noMoveStart||this.fire("movestart"),e.animate!==!1){F(this._mapPane,"leaflet-pan-anim");var i=this._getMapPanePos().subtract(t).round();this._panAnim.run(this._mapPane,i,e.duration||.25,e.easeLinearity)}else this._rawPanBy(t),this.fire("move").fire("moveend");return this},flyTo:function(t,e,i){if(i=i||{},i.animate===!1||!I.any3d)return this.setView(t,e,i);this._stop();var n=this.project(this.getCenter()),s=this.project(t),l=this.getSize(),m=this._zoom;t=W(t),e=e===void 0?m:e;var v=Math.max(l.x,l.y),w=v*this.getZoomScale(m,e),C=s.distanceTo(n)||1,T=1.42,O=T*T;function H(rt){var je=rt?-1:1,Hs=rt?w:v,js=w*w-v*v+je*O*O*C*C,Us=2*Hs*O*C,Ii=js/Us,qn=Math.sqrt(Ii*Ii+1)-Ii,Ws=qn<1e-9?-18:Math.log(qn);return Ws}function pt(rt){return(Math.exp(rt)-Math.exp(-rt))/2}function at(rt){return(Math.exp(rt)+Math.exp(-rt))/2}function bt(rt){return pt(rt)/at(rt)}var _t=H(0);function te(rt){return v*(at(_t)/at(_t+T*rt))}function Ns(rt){return v*(at(_t)*bt(_t+T*rt)-pt(_t))/O}function Ds(rt){return 1-Math.pow(1-rt,1.5)}var Fs=Date.now(),Wn=(H(1)-_t)/T,Gs=i.duration?1e3*i.duration:1e3*Wn*.8;function $n(){var rt=(Date.now()-Fs)/Gs,je=Ds(rt)*Wn;rt<=1?(this._flyToFrame=Y($n,this),this._move(this.unproject(n.add(s.subtract(n).multiplyBy(Ns(je)/C)),m),this.getScaleZoom(v/te(je),m),{flyTo:!0})):this._move(t,e)._moveEnd(!0)}return this._moveStart(!0,i.noMoveStart),$n.call(this),this},flyToBounds:function(t,e){var i=this._getBoundsCenterZoom(t,e);return this.flyTo(i.center,i.zoom,e)},setMaxBounds:function(t){return t=ot(t),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),t.isValid()?(this.options.maxBounds=t,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(t){var e=this.options.minZoom;return this.options.minZoom=t,this._loaded&&e!==t&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(t):this},setMaxZoom:function(t){var e=this.options.maxZoom;return this.options.maxZoom=t,this._loaded&&e!==t&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(t):this},panInsideBounds:function(t,e){this._enforcingBounds=!0;var i=this.getCenter(),n=this._limitCenter(i,this._zoom,ot(t));return i.equals(n)||this.panTo(n,e),this._enforcingBounds=!1,this},panInside:function(t,e){e=e||{};var i=A(e.paddingTopLeft||e.padding||[0,0]),n=A(e.paddingBottomRight||e.padding||[0,0]),s=this.project(this.getCenter()),l=this.project(t),m=this.getPixelBounds(),v=ft([m.min.add(i),m.max.subtract(n)]),w=v.getSize();if(!v.contains(l)){this._enforcingBounds=!0;var C=l.subtract(v.getCenter()),T=v.extend(l).getSize().subtract(w);s.x+=C.x<0?-T.x:T.x,s.y+=C.y<0?-T.y:T.y,this.panTo(this.unproject(s),e),this._enforcingBounds=!1}return this},invalidateSize:function(t){if(!this._loaded)return this;t=_({animate:!1,pan:!0},t===!0?{animate:!0}:t);var e=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var i=this.getSize(),n=e.divideBy(2).round(),s=i.divideBy(2).round(),l=n.subtract(s);return!l.x&&!l.y?this:(t.animate&&t.pan?this.panBy(l):(t.pan&&this._rawPanBy(l),this.fire("move"),t.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(r(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:e,newSize:i}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(t){if(t=this._locateOptions=_({timeout:1e4,watch:!1},t),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var e=r(this._handleGeolocationResponse,this),i=r(this._handleGeolocationError,this);return t.watch?this._locationWatchId=navigator.geolocation.watchPosition(e,i,t):navigator.geolocation.getCurrentPosition(e,i,t),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(t){if(this._container._leaflet_id){var e=t.code,i=t.message||(e===1?"permission denied":e===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:e,message:"Geolocation error: "+i+"."})}},_handleGeolocationResponse:function(t){if(this._container._leaflet_id){var e=t.coords.latitude,i=t.coords.longitude,n=new K(e,i),s=n.toBounds(t.coords.accuracy*2),l=this._locateOptions;if(l.setView){var m=this.getBoundsZoom(s);this.setView(n,l.maxZoom?Math.min(m,l.maxZoom):m)}var v={latlng:n,bounds:s,timestamp:t.timestamp};for(var w in t.coords)typeof t.coords[w]=="number"&&(v[w]=t.coords[w]);this.fire("locationfound",v)}},addHandler:function(t,e){if(!e)return this;var i=this[t]=new e(this);return this._handlers.push(i),this.options[t]&&i.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),tt(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(it(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var t;for(t in this._layers)this._layers[t].remove();for(t in this._panes)tt(this._panes[t]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(t,e){var i="leaflet-pane"+(t?" leaflet-"+t.replace("Pane","")+"-pane":""),n=q("div",i,e||this._mapPane);return t&&(this._panes[t]=n),n},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var t=this.getPixelBounds(),e=this.unproject(t.getBottomLeft()),i=this.unproject(t.getTopRight());return new mt(e,i)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(t,e,i){t=ot(t),i=A(i||[0,0]);var n=this.getZoom()||0,s=this.getMinZoom(),l=this.getMaxZoom(),m=t.getNorthWest(),v=t.getSouthEast(),w=this.getSize().subtract(i),C=ft(this.project(v,n),this.project(m,n)).getSize(),T=I.any3d?this.options.zoomSnap:1,O=w.x/C.x,H=w.y/C.y,pt=e?Math.max(O,H):Math.min(O,H);return n=this.getScaleZoom(pt,n),T&&(n=Math.round(n/(T/100))*(T/100),n=e?Math.ceil(n/T)*T:Math.floor(n/T)*T),Math.max(s,Math.min(l,n))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new R(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(t,e){var i=this._getTopLeftPoint(t,e);return new J(i,i.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(t){return this.options.crs.getProjectedBounds(t===void 0?this.getZoom():t)},getPane:function(t){return typeof t=="string"?this._panes[t]:t},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(t,e){var i=this.options.crs;return e=e===void 0?this._zoom:e,i.scale(t)/i.scale(e)},getScaleZoom:function(t,e){var i=this.options.crs;e=e===void 0?this._zoom:e;var n=i.zoom(t*i.scale(e));return isNaN(n)?1/0:n},project:function(t,e){return e=e===void 0?this._zoom:e,this.options.crs.latLngToPoint(W(t),e)},unproject:function(t,e){return e=e===void 0?this._zoom:e,this.options.crs.pointToLatLng(A(t),e)},layerPointToLatLng:function(t){var e=A(t).add(this.getPixelOrigin());return this.unproject(e)},latLngToLayerPoint:function(t){var e=this.project(W(t))._round();return e._subtract(this.getPixelOrigin())},wrapLatLng:function(t){return this.options.crs.wrapLatLng(W(t))},wrapLatLngBounds:function(t){return this.options.crs.wrapLatLngBounds(ot(t))},distance:function(t,e){return this.options.crs.distance(W(t),W(e))},containerPointToLayerPoint:function(t){return A(t).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(t){return A(t).add(this._getMapPanePos())},containerPointToLatLng:function(t){var e=this.containerPointToLayerPoint(A(t));return this.layerPointToLatLng(e)},latLngToContainerPoint:function(t){return this.layerPointToContainerPoint(this.latLngToLayerPoint(W(t)))},mouseEventToContainerPoint:function(t){return hn(t,this._container)},mouseEventToLayerPoint:function(t){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))},mouseEventToLatLng:function(t){return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))},_initContainer:function(t){var e=this._container=an(t);if(e){if(e._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");N(e,"scroll",this._onScroll,this),this._containerId=d(e)},_initLayout:function(){var t=this._container;this._fadeAnimated=this.options.fadeAnimation&&I.any3d,F(t,"leaflet-container"+(I.touch?" leaflet-touch":"")+(I.retina?" leaflet-retina":"")+(I.ielt9?" leaflet-oldie":"")+(I.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var e=le(t,"position");e!=="absolute"&&e!=="relative"&&e!=="fixed"&&e!=="sticky"&&(t.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var t=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),st(this._mapPane,new R(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(F(t.markerPane,"leaflet-zoom-hide"),F(t.shadowPane,"leaflet-zoom-hide"))},_resetView:function(t,e,i){st(this._mapPane,new R(0,0));var n=!this._loaded;this._loaded=!0,e=this._limitZoom(e),this.fire("viewprereset");var s=this._zoom!==e;this._moveStart(s,i)._move(t,e)._moveEnd(s),this.fire("viewreset"),n&&this.fire("load")},_moveStart:function(t,e){return t&&this.fire("zoomstart"),e||this.fire("movestart"),this},_move:function(t,e,i,n){e===void 0&&(e=this._zoom);var s=this._zoom!==e;return this._zoom=e,this._lastCenter=t,this._pixelOrigin=this._getNewPixelOrigin(t),n?i&&i.pinch&&this.fire("zoom",i):((s||i&&i.pinch)&&this.fire("zoom",i),this.fire("move",i)),this},_moveEnd:function(t){return t&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return it(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(t){st(this._mapPane,this._getMapPanePos().subtract(t))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(t){this._targets={},this._targets[d(this._container)]=this;var e=t?X:N;e(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&e(window,"resize",this._onResize,this),I.any3d&&this.options.transform3DLimit&&(t?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){it(this._resizeRequest),this._resizeRequest=Y(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var t=this._getMapPanePos();Math.max(Math.abs(t.x),Math.abs(t.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(t,e){for(var i=[],n,s=e==="mouseout"||e==="mouseover",l=t.target||t.srcElement,m=!1;l;){if(n=this._targets[d(l)],n&&(e==="click"||e==="preclick")&&this._draggableMoved(n)){m=!0;break}if(n&&n.listens(e,!0)&&(s&&!bi(l,t)||(i.push(n),s))||l===this._container)break;l=l.parentNode}return!i.length&&!m&&!s&&this.listens(e,!0)&&(i=[this]),i},_isClickDisabled:function(t){for(;t&&t!==this._container;){if(t._leaflet_disable_click)return!0;t=t.parentNode}},_handleDOMEvent:function(t){var e=t.target||t.srcElement;if(!(!this._loaded||e._leaflet_disable_events||t.type==="click"&&this._isClickDisabled(e))){var i=t.type;i==="mousedown"&&fi(e),this._fireDOMEvent(t,i)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(t,e,i){if(t.type==="click"){var n=_({},t);n.type="preclick",this._fireDOMEvent(n,n.type,i)}var s=this._findEventTargets(t,e);if(i){for(var l=[],m=0;m<i.length;m++)i[m].listens(e,!0)&&l.push(i[m]);s=l.concat(s)}if(s.length){e==="contextmenu"&&ct(t);var v=s[0],w={originalEvent:t};if(t.type!=="keypress"&&t.type!=="keydown"&&t.type!=="keyup"){var C=v.getLatLng&&(!v._radius||v._radius<=10);w.containerPoint=C?this.latLngToContainerPoint(v.getLatLng()):this.mouseEventToContainerPoint(t),w.layerPoint=this.containerPointToLayerPoint(w.containerPoint),w.latlng=C?v.getLatLng():this.layerPointToLatLng(w.layerPoint)}for(m=0;m<s.length;m++)if(s[m].fire(e,w,!0),w.originalEvent._stopped||s[m].options.bubblingMouseEvents===!1&&G(this._mouseEvents,e)!==-1)return}},_draggableMoved:function(t){return t=t.dragging&&t.dragging.enabled()?t:this,t.dragging&&t.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var t=0,e=this._handlers.length;t<e;t++)this._handlers[t].disable()},whenReady:function(t,e){return this._loaded?t.call(e||this,{target:this}):this.on("load",t,e),this},_getMapPanePos:function(){return Gt(this._mapPane)||new R(0,0)},_moved:function(){var t=this._getMapPanePos();return t&&!t.equals([0,0])},_getTopLeftPoint:function(t,e){var i=t&&e!==void 0?this._getNewPixelOrigin(t,e):this.getPixelOrigin();return i.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(t,e){var i=this.getSize()._divideBy(2);return this.project(t,e)._subtract(i)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(t,e,i){var n=this._getNewPixelOrigin(i,e);return this.project(t,e)._subtract(n)},_latLngBoundsToNewLayerBounds:function(t,e,i){var n=this._getNewPixelOrigin(i,e);return ft([this.project(t.getSouthWest(),e)._subtract(n),this.project(t.getNorthWest(),e)._subtract(n),this.project(t.getSouthEast(),e)._subtract(n),this.project(t.getNorthEast(),e)._subtract(n)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(t){return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())},_limitCenter:function(t,e,i){if(!i)return t;var n=this.project(t,e),s=this.getSize().divideBy(2),l=new J(n.subtract(s),n.add(s)),m=this._getBoundsOffset(l,i,e);return Math.abs(m.x)<=1&&Math.abs(m.y)<=1?t:this.unproject(n.add(m),e)},_limitOffset:function(t,e){if(!e)return t;var i=this.getPixelBounds(),n=new J(i.min.add(t),i.max.add(t));return t.add(this._getBoundsOffset(n,e))},_getBoundsOffset:function(t,e,i){var n=ft(this.project(e.getNorthEast(),i),this.project(e.getSouthWest(),i)),s=n.min.subtract(t.min),l=n.max.subtract(t.max),m=this._rebound(s.x,-l.x),v=this._rebound(s.y,-l.y);return new R(m,v)},_rebound:function(t,e){return t+e>0?Math.round(t-e)/2:Math.max(0,Math.ceil(t))-Math.max(0,Math.floor(e))},_limitZoom:function(t){var e=this.getMinZoom(),i=this.getMaxZoom(),n=I.any3d?this.options.zoomSnap:1;return n&&(t=Math.round(t/n)*n),Math.max(e,Math.min(i,t))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){nt(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(t,e){var i=this._getCenterOffset(t)._trunc();return(e&&e.animate)!==!0&&!this.getSize().contains(i)?!1:(this.panBy(i,e),!0)},_createAnimProxy:function(){var t=this._proxy=q("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(t),this.on("zoomanim",function(e){var i=ai,n=this._proxy.style[i];Ft(this._proxy,this.project(e.center,e.zoom),this.getZoomScale(e.zoom,1)),n===this._proxy.style[i]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){tt(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var t=this.getCenter(),e=this.getZoom();Ft(this._proxy,this.project(t,e),this.getZoomScale(e,1))},_catchTransitionEnd:function(t){this._animatingZoom&&t.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(t,e,i){if(this._animatingZoom)return!0;if(i=i||{},!this._zoomAnimated||i.animate===!1||this._nothingToAnimate()||Math.abs(e-this._zoom)>this.options.zoomAnimationThreshold)return!1;var n=this.getZoomScale(e),s=this._getCenterOffset(t)._divideBy(1-1/n);return i.animate!==!0&&!this.getSize().contains(s)?!1:(Y(function(){this._moveStart(!0,i.noMoveStart||!1)._animateZoom(t,e,!0)},this),!0)},_animateZoom:function(t,e,i,n){this._mapPane&&(i&&(this._animatingZoom=!0,this._animateToCenter=t,this._animateToZoom=e,F(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:t,zoom:e,noUpdate:n}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(r(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&nt(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function es(t,e){return new $(t,e)}var Lt=Q.extend({options:{position:"topright"},initialize:function(t){k(this,t)},getPosition:function(){return this.options.position},setPosition:function(t){var e=this._map;return e&&e.removeControl(this),this.options.position=t,e&&e.addControl(this),this},getContainer:function(){return this._container},addTo:function(t){this.remove(),this._map=t;var e=this._container=this.onAdd(t),i=this.getPosition(),n=t._controlCorners[i];return F(e,"leaflet-control"),i.indexOf("bottom")!==-1?n.insertBefore(e,n.firstChild):n.appendChild(e),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(tt(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(t){this._map&&t&&t.screenX>0&&t.screenY>0&&this._map.getContainer().focus()}}),pe=function(t){return new Lt(t)};$.include({addControl:function(t){return t.addTo(this),this},removeControl:function(t){return t.remove(),this},_initControlPos:function(){var t=this._controlCorners={},e="leaflet-",i=this._controlContainer=q("div",e+"control-container",this._container);function n(s,l){var m=e+s+" "+e+l;t[s+l]=q("div",m,i)}n("top","left"),n("top","right"),n("bottom","left"),n("bottom","right")},_clearControlPos:function(){for(var t in this._controlCorners)tt(this._controlCorners[t]);tt(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var fn=Lt.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(t,e,i,n){return i<n?-1:n<i?1:0}},initialize:function(t,e,i){k(this,i),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var n in t)this._addLayer(t[n],n);for(n in e)this._addLayer(e[n],n,!0)},onAdd:function(t){this._initLayout(),this._update(),this._map=t,t.on("zoomend",this._checkDisabledLayers,this);for(var e=0;e<this._layers.length;e++)this._layers[e].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(t){return Lt.prototype.addTo.call(this,t),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var t=0;t<this._layers.length;t++)this._layers[t].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(t,e){return this._addLayer(t,e),this._map?this._update():this},addOverlay:function(t,e){return this._addLayer(t,e,!0),this._map?this._update():this},removeLayer:function(t){t.off("add remove",this._onLayerChange,this);var e=this._getLayer(d(t));return e&&this._layers.splice(this._layers.indexOf(e),1),this._map?this._update():this},expand:function(){F(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var t=this._map.getSize().y-(this._container.offsetTop+50);return t<this._section.clientHeight?(F(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=t+"px"):nt(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return nt(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var t="leaflet-control-layers",e=this._container=q("div",t),i=this.options.collapsed;e.setAttribute("aria-haspopup",!0),ue(e),yi(e);var n=this._section=q("section",t+"-list");i&&(this._map.on("click",this.collapse,this),N(e,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var s=this._layersLink=q("a",t+"-toggle",e);s.href="#",s.title="Layers",s.setAttribute("role","button"),N(s,{keydown:function(l){l.keyCode===13&&this._expandSafely()},click:function(l){ct(l),this._expandSafely()}},this),i||this.expand(),this._baseLayersList=q("div",t+"-base",n),this._separator=q("div",t+"-separator",n),this._overlaysList=q("div",t+"-overlays",n),e.appendChild(n)},_getLayer:function(t){for(var e=0;e<this._layers.length;e++)if(this._layers[e]&&d(this._layers[e].layer)===t)return this._layers[e]},_addLayer:function(t,e,i){this._map&&t.on("add remove",this._onLayerChange,this),this._layers.push({layer:t,name:e,overlay:i}),this.options.sortLayers&&this._layers.sort(r(function(n,s){return this.options.sortFunction(n.layer,s.layer,n.name,s.name)},this)),this.options.autoZIndex&&t.setZIndex&&(this._lastZIndex++,t.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;Me(this._baseLayersList),Me(this._overlaysList),this._layerControlInputs=[];var t,e,i,n,s=0;for(i=0;i<this._layers.length;i++)n=this._layers[i],this._addItem(n),e=e||n.overlay,t=t||!n.overlay,s+=n.overlay?0:1;return this.options.hideSingleBase&&(t=t&&s>1,this._baseLayersList.style.display=t?"":"none"),this._separator.style.display=e&&t?"":"none",this},_onLayerChange:function(t){this._handlingClick||this._update();var e=this._getLayer(d(t.target)),i=e.overlay?t.type==="add"?"overlayadd":"overlayremove":t.type==="add"?"baselayerchange":null;i&&this._map.fire(i,e)},_createRadioElement:function(t,e){var i='<input type="radio" class="leaflet-control-layers-selector" name="'+t+'"'+(e?' checked="checked"':"")+"/>",n=document.createElement("div");return n.innerHTML=i,n.firstChild},_addItem:function(t){var e=document.createElement("label"),i=this._map.hasLayer(t.layer),n;t.overlay?(n=document.createElement("input"),n.type="checkbox",n.className="leaflet-control-layers-selector",n.defaultChecked=i):n=this._createRadioElement("leaflet-base-layers_"+d(this),i),this._layerControlInputs.push(n),n.layerId=d(t.layer),N(n,"click",this._onInputClick,this);var s=document.createElement("span");s.innerHTML=" "+t.name;var l=document.createElement("span");e.appendChild(l),l.appendChild(n),l.appendChild(s);var m=t.overlay?this._overlaysList:this._baseLayersList;return m.appendChild(e),this._checkDisabledLayers(),e},_onInputClick:function(){if(!this._preventClick){var t=this._layerControlInputs,e,i,n=[],s=[];this._handlingClick=!0;for(var l=t.length-1;l>=0;l--)e=t[l],i=this._getLayer(e.layerId).layer,e.checked?n.push(i):e.checked||s.push(i);for(l=0;l<s.length;l++)this._map.hasLayer(s[l])&&this._map.removeLayer(s[l]);for(l=0;l<n.length;l++)this._map.hasLayer(n[l])||this._map.addLayer(n[l]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var t=this._layerControlInputs,e,i,n=this._map.getZoom(),s=t.length-1;s>=0;s--)e=t[s],i=this._getLayer(e.layerId).layer,e.disabled=i.options.minZoom!==void 0&&n<i.options.minZoom||i.options.maxZoom!==void 0&&n>i.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var t=this._section;this._preventClick=!0,N(t,"click",ct),this.expand();var e=this;setTimeout(function(){X(t,"click",ct),e._preventClick=!1})}}),is=function(t,e,i){return new fn(t,e,i)},xi=Lt.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(t){var e="leaflet-control-zoom",i=q("div",e+" leaflet-bar"),n=this.options;return this._zoomInButton=this._createButton(n.zoomInText,n.zoomInTitle,e+"-in",i,this._zoomIn),this._zoomOutButton=this._createButton(n.zoomOutText,n.zoomOutTitle,e+"-out",i,this._zoomOut),this._updateDisabled(),t.on("zoomend zoomlevelschange",this._updateDisabled,this),i},onRemove:function(t){t.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(t){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(t.shiftKey?3:1))},_zoomOut:function(t){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(t.shiftKey?3:1))},_createButton:function(t,e,i,n,s){var l=q("a",i,n);return l.innerHTML=t,l.href="#",l.title=e,l.setAttribute("role","button"),l.setAttribute("aria-label",e),ue(l),N(l,"click",jt),N(l,"click",s,this),N(l,"click",this._refocusOnMap,this),l},_updateDisabled:function(){var t=this._map,e="leaflet-disabled";nt(this._zoomInButton,e),nt(this._zoomOutButton,e),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||t._zoom===t.getMinZoom())&&(F(this._zoomOutButton,e),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||t._zoom===t.getMaxZoom())&&(F(this._zoomInButton,e),this._zoomInButton.setAttribute("aria-disabled","true"))}});$.mergeOptions({zoomControl:!0}),$.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new xi,this.addControl(this.zoomControl))});var ns=function(t){return new xi(t)},mn=Lt.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(t){var e="leaflet-control-scale",i=q("div",e),n=this.options;return this._addScales(n,e+"-line",i),t.on(n.updateWhenIdle?"moveend":"move",this._update,this),t.whenReady(this._update,this),i},onRemove:function(t){t.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(t,e,i){t.metric&&(this._mScale=q("div",e,i)),t.imperial&&(this._iScale=q("div",e,i))},_update:function(){var t=this._map,e=t.getSize().y/2,i=t.distance(t.containerPointToLatLng([0,e]),t.containerPointToLatLng([this.options.maxWidth,e]));this._updateScales(i)},_updateScales:function(t){this.options.metric&&t&&this._updateMetric(t),this.options.imperial&&t&&this._updateImperial(t)},_updateMetric:function(t){var e=this._getRoundNum(t),i=e<1e3?e+" m":e/1e3+" km";this._updateScale(this._mScale,i,e/t)},_updateImperial:function(t){var e=t*3.2808399,i,n,s;e>5280?(i=e/5280,n=this._getRoundNum(i),this._updateScale(this._iScale,n+" mi",n/i)):(s=this._getRoundNum(e),this._updateScale(this._iScale,s+" ft",s/e))},_updateScale:function(t,e,i){t.style.width=Math.round(this.options.maxWidth*i)+"px",t.innerHTML=e},_getRoundNum:function(t){var e=Math.pow(10,(Math.floor(t)+"").length-1),i=t/e;return i=i>=10?10:i>=5?5:i>=3?3:i>=2?2:1,e*i}}),os=function(t){return new mn(t)},ss='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',wi=Lt.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(I.inlineSvg?ss+" ":"")+"Leaflet</a>"},initialize:function(t){k(this,t),this._attributions={}},onAdd:function(t){t.attributionControl=this,this._container=q("div","leaflet-control-attribution"),ue(this._container);for(var e in t._layers)t._layers[e].getAttribution&&this.addAttribution(t._layers[e].getAttribution());return this._update(),t.on("layeradd",this._addAttribution,this),this._container},onRemove:function(t){t.off("layeradd",this._addAttribution,this)},_addAttribution:function(t){t.layer.getAttribution&&(this.addAttribution(t.layer.getAttribution()),t.layer.once("remove",function(){this.removeAttribution(t.layer.getAttribution())},this))},setPrefix:function(t){return this.options.prefix=t,this._update(),this},addAttribution:function(t){return t?(this._attributions[t]||(this._attributions[t]=0),this._attributions[t]++,this._update(),this):this},removeAttribution:function(t){return t?(this._attributions[t]&&(this._attributions[t]--,this._update()),this):this},_update:function(){if(this._map){var t=[];for(var e in this._attributions)this._attributions[e]&&t.push(e);var i=[];this.options.prefix&&i.push(this.options.prefix),t.length&&i.push(t.join(", ")),this._container.innerHTML=i.join(' <span aria-hidden="true">|</span> ')}}});$.mergeOptions({attributionControl:!0}),$.addInitHook(function(){this.options.attributionControl&&new wi().addTo(this)});var rs=function(t){return new wi(t)};Lt.Layers=fn,Lt.Zoom=xi,Lt.Scale=mn,Lt.Attribution=wi,pe.layers=is,pe.zoom=ns,pe.scale=os,pe.attribution=rs;var Mt=Q.extend({initialize:function(t){this._map=t},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});Mt.addTo=function(t,e){return t.addHandler(e,this),this};var as={Events:ut},_n=I.touch?"touchstart mousedown":"mousedown",Ot=wt.extend({options:{clickTolerance:3},initialize:function(t,e,i,n){k(this,n),this._element=t,this._dragStartTarget=e||t,this._preventOutline=i},enable:function(){this._enabled||(N(this._dragStartTarget,_n,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(Ot._dragging===this&&this.finishDrag(!0),X(this._dragStartTarget,_n,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(t){if(this._enabled&&(this._moved=!1,!li(this._element,"leaflet-zoom-anim"))){if(t.touches&&t.touches.length!==1){Ot._dragging===this&&this.finishDrag();return}if(!(Ot._dragging||t.shiftKey||t.which!==1&&t.button!==1&&!t.touches)&&(Ot._dragging=this,this._preventOutline&&fi(this._element),hi(),ce(),!this._moving)){this.fire("down");var e=t.touches?t.touches[0]:t,i=ln(this._element);this._startPoint=new R(e.clientX,e.clientY),this._startPos=Gt(this._element),this._parentScale=mi(i);var n=t.type==="mousedown";N(document,n?"mousemove":"touchmove",this._onMove,this),N(document,n?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(t){if(this._enabled){if(t.touches&&t.touches.length>1){this._moved=!0;return}var e=t.touches&&t.touches.length===1?t.touches[0]:t,i=new R(e.clientX,e.clientY)._subtract(this._startPoint);!i.x&&!i.y||Math.abs(i.x)+Math.abs(i.y)<this.options.clickTolerance||(i.x/=this._parentScale.x,i.y/=this._parentScale.y,ct(t),this._moved||(this.fire("dragstart"),this._moved=!0,F(document.body,"leaflet-dragging"),this._lastTarget=t.target||t.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),F(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(i),this._moving=!0,this._lastEvent=t,this._updatePosition())}},_updatePosition:function(){var t={originalEvent:this._lastEvent};this.fire("predrag",t),st(this._element,this._newPos),this.fire("drag",t)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(t){nt(document.body,"leaflet-dragging"),this._lastTarget&&(nt(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),X(document,"mousemove touchmove",this._onMove,this),X(document,"mouseup touchend touchcancel",this._onUp,this),ui(),de();var e=this._moved&&this._moving;this._moving=!1,Ot._dragging=!1,e&&this.fire("dragend",{noInertia:t,distance:this._newPos.distanceTo(this._startPos)})}});function gn(t,e,i){var n,s=[1,4,2,8],l,m,v,w,C,T,O,H;for(l=0,T=t.length;l<T;l++)t[l]._code=Ut(t[l],e);for(v=0;v<4;v++){for(O=s[v],n=[],l=0,T=t.length,m=T-1;l<T;m=l++)w=t[l],C=t[m],w._code&O?C._code&O||(H=Be(C,w,O,e,i),H._code=Ut(H,e),n.push(H)):(C._code&O&&(H=Be(C,w,O,e,i),H._code=Ut(H,e),n.push(H)),n.push(w));t=n}return t}function vn(t,e){var i,n,s,l,m,v,w,C,T;if(!t||t.length===0)throw new Error("latlngs not passed");yt(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);var O=W([0,0]),H=ot(t),pt=H.getNorthWest().distanceTo(H.getSouthWest())*H.getNorthEast().distanceTo(H.getNorthWest());pt<1700&&(O=Li(t));var at=t.length,bt=[];for(i=0;i<at;i++){var _t=W(t[i]);bt.push(e.project(W([_t.lat-O.lat,_t.lng-O.lng])))}for(v=w=C=0,i=0,n=at-1;i<at;n=i++)s=bt[i],l=bt[n],m=s.y*l.x-l.y*s.x,w+=(s.x+l.x)*m,C+=(s.y+l.y)*m,v+=m*3;v===0?T=bt[0]:T=[w/v,C/v];var te=e.unproject(A(T));return W([te.lat+O.lat,te.lng+O.lng])}function Li(t){for(var e=0,i=0,n=0,s=0;s<t.length;s++){var l=W(t[s]);e+=l.lat,i+=l.lng,n++}return W([e/n,i/n])}var ls={__proto__:null,clipPolygon:gn,polygonCenter:vn,centroid:Li};function yn(t,e){if(!e||!t.length)return t.slice();var i=e*e;return t=hs(t,i),t=ds(t,i),t}function bn(t,e,i){return Math.sqrt(fe(t,e,i,!0))}function cs(t,e,i){return fe(t,e,i)}function ds(t,e){var i=t.length,n=typeof Uint8Array<"u"?Uint8Array:Array,s=new n(i);s[0]=s[i-1]=1,ki(t,s,e,0,i-1);var l,m=[];for(l=0;l<i;l++)s[l]&&m.push(t[l]);return m}function ki(t,e,i,n,s){var l=0,m,v,w;for(v=n+1;v<=s-1;v++)w=fe(t[v],t[n],t[s],!0),w>l&&(m=v,l=w);l>i&&(e[m]=1,ki(t,e,i,n,m),ki(t,e,i,m,s))}function hs(t,e){for(var i=[t[0]],n=1,s=0,l=t.length;n<l;n++)us(t[n],t[s])>e&&(i.push(t[n]),s=n);return s<l-1&&i.push(t[l-1]),i}var xn;function wn(t,e,i,n,s){var l=n?xn:Ut(t,i),m=Ut(e,i),v,w,C;for(xn=m;;){if(!(l|m))return[t,e];if(l&m)return!1;v=l||m,w=Be(t,e,v,i,s),C=Ut(w,i),v===l?(t=w,l=C):(e=w,m=C)}}function Be(t,e,i,n,s){var l=e.x-t.x,m=e.y-t.y,v=n.min,w=n.max,C,T;return i&8?(C=t.x+l*(w.y-t.y)/m,T=w.y):i&4?(C=t.x+l*(v.y-t.y)/m,T=v.y):i&2?(C=w.x,T=t.y+m*(w.x-t.x)/l):i&1&&(C=v.x,T=t.y+m*(v.x-t.x)/l),new R(C,T,s)}function Ut(t,e){var i=0;return t.x<e.min.x?i|=1:t.x>e.max.x&&(i|=2),t.y<e.min.y?i|=4:t.y>e.max.y&&(i|=8),i}function us(t,e){var i=e.x-t.x,n=e.y-t.y;return i*i+n*n}function fe(t,e,i,n){var s=e.x,l=e.y,m=i.x-s,v=i.y-l,w=m*m+v*v,C;return w>0&&(C=((t.x-s)*m+(t.y-l)*v)/w,C>1?(s=i.x,l=i.y):C>0&&(s+=m*C,l+=v*C)),m=t.x-s,v=t.y-l,n?m*m+v*v:new R(s,l)}function yt(t){return!Z(t[0])||typeof t[0][0]!="object"&&typeof t[0][0]<"u"}function Ln(t){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),yt(t)}function kn(t,e){var i,n,s,l,m,v,w,C;if(!t||t.length===0)throw new Error("latlngs not passed");yt(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);var T=W([0,0]),O=ot(t),H=O.getNorthWest().distanceTo(O.getSouthWest())*O.getNorthEast().distanceTo(O.getNorthWest());H<1700&&(T=Li(t));var pt=t.length,at=[];for(i=0;i<pt;i++){var bt=W(t[i]);at.push(e.project(W([bt.lat-T.lat,bt.lng-T.lng])))}for(i=0,n=0;i<pt-1;i++)n+=at[i].distanceTo(at[i+1])/2;if(n===0)C=at[0];else for(i=0,l=0;i<pt-1;i++)if(m=at[i],v=at[i+1],s=m.distanceTo(v),l+=s,l>n){w=(l-n)/s,C=[v.x-w*(v.x-m.x),v.y-w*(v.y-m.y)];break}var _t=e.unproject(A(C));return W([_t.lat+T.lat,_t.lng+T.lng])}var ps={__proto__:null,simplify:yn,pointToSegmentDistance:bn,closestPointOnSegment:cs,clipSegment:wn,_getEdgeIntersection:Be,_getBitCode:Ut,_sqClosestPointOnSegment:fe,isFlat:yt,_flat:Ln,polylineCenter:kn},Pi={project:function(t){return new R(t.lng,t.lat)},unproject:function(t){return new K(t.y,t.x)},bounds:new J([-180,-90],[180,90])},Ci={R:6378137,R_MINOR:6356752314245179e-9,bounds:new J([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(t){var e=Math.PI/180,i=this.R,n=t.lat*e,s=this.R_MINOR/i,l=Math.sqrt(1-s*s),m=l*Math.sin(n),v=Math.tan(Math.PI/4-n/2)/Math.pow((1-m)/(1+m),l/2);return n=-i*Math.log(Math.max(v,1e-10)),new R(t.lng*e*i,n)},unproject:function(t){for(var e=180/Math.PI,i=this.R,n=this.R_MINOR/i,s=Math.sqrt(1-n*n),l=Math.exp(-t.y/i),m=Math.PI/2-2*Math.atan(l),v=0,w=.1,C;v<15&&Math.abs(w)>1e-7;v++)C=s*Math.sin(m),C=Math.pow((1-C)/(1+C),s/2),w=Math.PI/2-2*Math.atan(l*C)-m,m+=w;return new K(m*e,t.x*e/i)}},fs={__proto__:null,LonLat:Pi,Mercator:Ci,SphericalMercator:Xe},ms=_({},At,{code:"EPSG:3395",projection:Ci,transformation:(function(){var t=.5/(Math.PI*Ci.R);return se(t,.5,-t,.5)})()}),Pn=_({},At,{code:"EPSG:4326",projection:Pi,transformation:se(1/180,1,-1/180,.5)}),_s=_({},Tt,{projection:Pi,transformation:se(1,0,-1,0),scale:function(t){return Math.pow(2,t)},zoom:function(t){return Math.log(t)/Math.LN2},distance:function(t,e){var i=e.lng-t.lng,n=e.lat-t.lat;return Math.sqrt(i*i+n*n)},infinite:!0});Tt.Earth=At,Tt.EPSG3395=ms,Tt.EPSG3857=ti,Tt.EPSG900913=wo,Tt.EPSG4326=Pn,Tt.Simple=_s;var kt=wt.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(t){return t.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(t){return t&&t.removeLayer(this),this},getPane:function(t){return this._map.getPane(t?this.options[t]||t:this.options.pane)},addInteractiveTarget:function(t){return this._map._targets[d(t)]=this,this},removeInteractiveTarget:function(t){return delete this._map._targets[d(t)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(t){var e=t.target;if(e.hasLayer(this)){if(this._map=e,this._zoomAnimated=e._zoomAnimated,this.getEvents){var i=this.getEvents();e.on(i,this),this.once("remove",function(){e.off(i,this)},this)}this.onAdd(e),this.fire("add"),e.fire("layeradd",{layer:this})}}});$.include({addLayer:function(t){if(!t._layerAdd)throw new Error("The provided object is not a Layer.");var e=d(t);return this._layers[e]?this:(this._layers[e]=t,t._mapToAdd=this,t.beforeAdd&&t.beforeAdd(this),this.whenReady(t._layerAdd,t),this)},removeLayer:function(t){var e=d(t);return this._layers[e]?(this._loaded&&t.onRemove(this),delete this._layers[e],this._loaded&&(this.fire("layerremove",{layer:t}),t.fire("remove")),t._map=t._mapToAdd=null,this):this},hasLayer:function(t){return d(t)in this._layers},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},_addLayers:function(t){t=t?Z(t)?t:[t]:[];for(var e=0,i=t.length;e<i;e++)this.addLayer(t[e])},_addZoomLimit:function(t){(!isNaN(t.options.maxZoom)||!isNaN(t.options.minZoom))&&(this._zoomBoundLayers[d(t)]=t,this._updateZoomLevels())},_removeZoomLimit:function(t){var e=d(t);this._zoomBoundLayers[e]&&(delete this._zoomBoundLayers[e],this._updateZoomLevels())},_updateZoomLevels:function(){var t=1/0,e=-1/0,i=this._getZoomSpan();for(var n in this._zoomBoundLayers){var s=this._zoomBoundLayers[n].options;t=s.minZoom===void 0?t:Math.min(t,s.minZoom),e=s.maxZoom===void 0?e:Math.max(e,s.maxZoom)}this._layersMaxZoom=e===-1/0?void 0:e,this._layersMinZoom=t===1/0?void 0:t,i!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var Yt=kt.extend({initialize:function(t,e){k(this,e),this._layers={};var i,n;if(t)for(i=0,n=t.length;i<n;i++)this.addLayer(t[i])},addLayer:function(t){var e=this.getLayerId(t);return this._layers[e]=t,this._map&&this._map.addLayer(t),this},removeLayer:function(t){var e=t in this._layers?t:this.getLayerId(t);return this._map&&this._layers[e]&&this._map.removeLayer(this._layers[e]),delete this._layers[e],this},hasLayer:function(t){var e=typeof t=="number"?t:this.getLayerId(t);return e in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(t){var e=Array.prototype.slice.call(arguments,1),i,n;for(i in this._layers)n=this._layers[i],n[t]&&n[t].apply(n,e);return this},onAdd:function(t){this.eachLayer(t.addLayer,t)},onRemove:function(t){this.eachLayer(t.removeLayer,t)},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},getLayer:function(t){return this._layers[t]},getLayers:function(){var t=[];return this.eachLayer(t.push,t),t},setZIndex:function(t){return this.invoke("setZIndex",t)},getLayerId:function(t){return d(t)}}),gs=function(t,e){return new Yt(t,e)},Et=Yt.extend({addLayer:function(t){return this.hasLayer(t)?this:(t.addEventParent(this),Yt.prototype.addLayer.call(this,t),this.fire("layeradd",{layer:t}))},removeLayer:function(t){return this.hasLayer(t)?(t in this._layers&&(t=this._layers[t]),t.removeEventParent(this),Yt.prototype.removeLayer.call(this,t),this.fire("layerremove",{layer:t})):this},setStyle:function(t){return this.invoke("setStyle",t)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var t=new mt;for(var e in this._layers){var i=this._layers[e];t.extend(i.getBounds?i.getBounds():i.getLatLng())}return t}}),vs=function(t,e){return new Et(t,e)},Kt=Q.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(t){k(this,t)},createIcon:function(t){return this._createIcon("icon",t)},createShadow:function(t){return this._createIcon("shadow",t)},_createIcon:function(t,e){var i=this._getIconUrl(t);if(!i){if(t==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var n=this._createImg(i,e&&e.tagName==="IMG"?e:null);return this._setIconStyles(n,t),(this.options.crossOrigin||this.options.crossOrigin==="")&&(n.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),n},_setIconStyles:function(t,e){var i=this.options,n=i[e+"Size"];typeof n=="number"&&(n=[n,n]);var s=A(n),l=A(e==="shadow"&&i.shadowAnchor||i.iconAnchor||s&&s.divideBy(2,!0));t.className="leaflet-marker-"+e+" "+(i.className||""),l&&(t.style.marginLeft=-l.x+"px",t.style.marginTop=-l.y+"px"),s&&(t.style.width=s.x+"px",t.style.height=s.y+"px")},_createImg:function(t,e){return e=e||document.createElement("img"),e.src=t,e},_getIconUrl:function(t){return I.retina&&this.options[t+"RetinaUrl"]||this.options[t+"Url"]}});function ys(t){return new Kt(t)}var me=Kt.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(t){return typeof me.imagePath!="string"&&(me.imagePath=this._detectIconPath()),(this.options.imagePath||me.imagePath)+Kt.prototype._getIconUrl.call(this,t)},_stripUrl:function(t){var e=function(i,n,s){var l=n.exec(i);return l&&l[s]};return t=e(t,/^url\((['"])?(.+)\1\)$/,2),t&&e(t,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var t=q("div","leaflet-default-icon-path",document.body),e=le(t,"background-image")||le(t,"backgroundImage");if(document.body.removeChild(t),e=this._stripUrl(e),e)return e;var i=document.querySelector('link[href$="leaflet.css"]');return i?i.href.substring(0,i.href.length-11-1):""}}),Cn=Mt.extend({initialize:function(t){this._marker=t},addHooks:function(){var t=this._marker._icon;this._draggable||(this._draggable=new Ot(t,t,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),F(t,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&nt(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(t){var e=this._marker,i=e._map,n=this._marker.options.autoPanSpeed,s=this._marker.options.autoPanPadding,l=Gt(e._icon),m=i.getPixelBounds(),v=i.getPixelOrigin(),w=ft(m.min._subtract(v).add(s),m.max._subtract(v).subtract(s));if(!w.contains(l)){var C=A((Math.max(w.max.x,l.x)-w.max.x)/(m.max.x-w.max.x)-(Math.min(w.min.x,l.x)-w.min.x)/(m.min.x-w.min.x),(Math.max(w.max.y,l.y)-w.max.y)/(m.max.y-w.max.y)-(Math.min(w.min.y,l.y)-w.min.y)/(m.min.y-w.min.y)).multiplyBy(n);i.panBy(C,{animate:!1}),this._draggable._newPos._add(C),this._draggable._startPos._add(C),st(e._icon,this._draggable._newPos),this._onDrag(t),this._panRequest=Y(this._adjustPan.bind(this,t))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(t){this._marker.options.autoPan&&(it(this._panRequest),this._panRequest=Y(this._adjustPan.bind(this,t)))},_onDrag:function(t){var e=this._marker,i=e._shadow,n=Gt(e._icon),s=e._map.layerPointToLatLng(n);i&&st(i,n),e._latlng=s,t.latlng=s,t.oldLatLng=this._oldLatLng,e.fire("move",t).fire("drag",t)},_onDragEnd:function(t){it(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",t)}}),ze=kt.extend({options:{icon:new me,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(t,e){k(this,e),this._latlng=W(t)},onAdd:function(t){this._zoomAnimated=this._zoomAnimated&&t.options.markerZoomAnimation,this._zoomAnimated&&t.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(t){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&t.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(t){var e=this._latlng;return this._latlng=W(t),this.update(),this.fire("move",{oldLatLng:e,latlng:this._latlng})},setZIndexOffset:function(t){return this.options.zIndexOffset=t,this.update()},getIcon:function(){return this.options.icon},setIcon:function(t){return this.options.icon=t,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var t=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(t)}return this},_initIcon:function(){var t=this.options,e="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),i=t.icon.createIcon(this._icon),n=!1;i!==this._icon&&(this._icon&&this._removeIcon(),n=!0,t.title&&(i.title=t.title),i.tagName==="IMG"&&(i.alt=t.alt||"")),F(i,e),t.keyboard&&(i.tabIndex="0",i.setAttribute("role","button")),this._icon=i,t.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&N(i,"focus",this._panOnFocus,this);var s=t.icon.createShadow(this._shadow),l=!1;s!==this._shadow&&(this._removeShadow(),l=!0),s&&(F(s,e),s.alt=""),this._shadow=s,t.opacity<1&&this._updateOpacity(),n&&this.getPane().appendChild(this._icon),this._initInteraction(),s&&l&&this.getPane(t.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&X(this._icon,"focus",this._panOnFocus,this),tt(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&tt(this._shadow),this._shadow=null},_setPos:function(t){this._icon&&st(this._icon,t),this._shadow&&st(this._shadow,t),this._zIndex=t.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(t){this._icon&&(this._icon.style.zIndex=this._zIndex+t)},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center).round();this._setPos(e)},_initInteraction:function(){if(this.options.interactive&&(F(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),Cn)){var t=this.options.draggable;this.dragging&&(t=this.dragging.enabled(),this.dragging.disable()),this.dragging=new Cn(this),t&&this.dragging.enable()}},setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var t=this.options.opacity;this._icon&&vt(this._icon,t),this._shadow&&vt(this._shadow,t)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var t=this._map;if(t){var e=this.options.icon.options,i=e.iconSize?A(e.iconSize):A(0,0),n=e.iconAnchor?A(e.iconAnchor):A(0,0);t.panInside(this._latlng,{paddingTopLeft:n,paddingBottomRight:i.subtract(n)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function bs(t,e){return new ze(t,e)}var Zt=kt.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(t){this._renderer=t.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(t){return k(this,t),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&t&&Object.prototype.hasOwnProperty.call(t,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),Ae=Zt.extend({options:{fill:!0,radius:10},initialize:function(t,e){k(this,e),this._latlng=W(t),this._radius=this.options.radius},setLatLng:function(t){var e=this._latlng;return this._latlng=W(t),this.redraw(),this.fire("move",{oldLatLng:e,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(t){return this.options.radius=this._radius=t,this.redraw()},getRadius:function(){return this._radius},setStyle:function(t){var e=t&&t.radius||this._radius;return Zt.prototype.setStyle.call(this,t),this.setRadius(e),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var t=this._radius,e=this._radiusY||t,i=this._clickTolerance(),n=[t+i,e+i];this._pxBounds=new J(this._point.subtract(n),this._point.add(n))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(t){return t.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function xs(t,e){return new Ae(t,e)}var Mi=Ae.extend({initialize:function(t,e,i){if(typeof e=="number"&&(e=_({},i,{radius:e})),k(this,e),this._latlng=W(t),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(t){return this._mRadius=t,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var t=[this._radius,this._radiusY||this._radius];return new mt(this._map.layerPointToLatLng(this._point.subtract(t)),this._map.layerPointToLatLng(this._point.add(t)))},setStyle:Zt.prototype.setStyle,_project:function(){var t=this._latlng.lng,e=this._latlng.lat,i=this._map,n=i.options.crs;if(n.distance===At.distance){var s=Math.PI/180,l=this._mRadius/At.R/s,m=i.project([e+l,t]),v=i.project([e-l,t]),w=m.add(v).divideBy(2),C=i.unproject(w).lat,T=Math.acos((Math.cos(l*s)-Math.sin(e*s)*Math.sin(C*s))/(Math.cos(e*s)*Math.cos(C*s)))/s;(isNaN(T)||T===0)&&(T=l/Math.cos(Math.PI/180*e)),this._point=w.subtract(i.getPixelOrigin()),this._radius=isNaN(T)?0:w.x-i.project([C,t-T]).x,this._radiusY=w.y-m.y}else{var O=n.unproject(n.project(this._latlng).subtract([this._mRadius,0]));this._point=i.latLngToLayerPoint(this._latlng),this._radius=this._point.x-i.latLngToLayerPoint(O).x}this._updateBounds()}});function ws(t,e,i){return new Mi(t,e,i)}var It=Zt.extend({options:{smoothFactor:1,noClip:!1},initialize:function(t,e){k(this,e),this._setLatLngs(t)},getLatLngs:function(){return this._latlngs},setLatLngs:function(t){return this._setLatLngs(t),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(t){for(var e=1/0,i=null,n=fe,s,l,m=0,v=this._parts.length;m<v;m++)for(var w=this._parts[m],C=1,T=w.length;C<T;C++){s=w[C-1],l=w[C];var O=n(t,s,l,!0);O<e&&(e=O,i=n(t,s,l))}return i&&(i.distance=Math.sqrt(e)),i},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return kn(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(t,e){return e=e||this._defaultShape(),t=W(t),e.push(t),this._bounds.extend(t),this.redraw()},_setLatLngs:function(t){this._bounds=new mt,this._latlngs=this._convertLatLngs(t)},_defaultShape:function(){return yt(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(t){for(var e=[],i=yt(t),n=0,s=t.length;n<s;n++)i?(e[n]=W(t[n]),this._bounds.extend(e[n])):e[n]=this._convertLatLngs(t[n]);return e},_project:function(){var t=new J;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,t),this._bounds.isValid()&&t.isValid()&&(this._rawPxBounds=t,this._updateBounds())},_updateBounds:function(){var t=this._clickTolerance(),e=new R(t,t);this._rawPxBounds&&(this._pxBounds=new J([this._rawPxBounds.min.subtract(e),this._rawPxBounds.max.add(e)]))},_projectLatlngs:function(t,e,i){var n=t[0]instanceof K,s=t.length,l,m;if(n){for(m=[],l=0;l<s;l++)m[l]=this._map.latLngToLayerPoint(t[l]),i.extend(m[l]);e.push(m)}else for(l=0;l<s;l++)this._projectLatlngs(t[l],e,i)},_clipPoints:function(){var t=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(t))){if(this.options.noClip){this._parts=this._rings;return}var e=this._parts,i,n,s,l,m,v,w;for(i=0,s=0,l=this._rings.length;i<l;i++)for(w=this._rings[i],n=0,m=w.length;n<m-1;n++)v=wn(w[n],w[n+1],t,n,!0),v&&(e[s]=e[s]||[],e[s].push(v[0]),(v[1]!==w[n+1]||n===m-2)&&(e[s].push(v[1]),s++))}},_simplifyPoints:function(){for(var t=this._parts,e=this.options.smoothFactor,i=0,n=t.length;i<n;i++)t[i]=yn(t[i],e)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(t,e){var i,n,s,l,m,v,w=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(i=0,l=this._parts.length;i<l;i++)for(v=this._parts[i],n=0,m=v.length,s=m-1;n<m;s=n++)if(!(!e&&n===0)&&bn(t,v[s],v[n])<=w)return!0;return!1}});function Ls(t,e){return new It(t,e)}It._flat=Ln;var Jt=It.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return vn(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(t){var e=It.prototype._convertLatLngs.call(this,t),i=e.length;return i>=2&&e[0]instanceof K&&e[0].equals(e[i-1])&&e.pop(),e},_setLatLngs:function(t){It.prototype._setLatLngs.call(this,t),yt(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return yt(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var t=this._renderer._bounds,e=this.options.weight,i=new R(e,e);if(t=new J(t.min.subtract(i),t.max.add(i)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(t))){if(this.options.noClip){this._parts=this._rings;return}for(var n=0,s=this._rings.length,l;n<s;n++)l=gn(this._rings[n],t,!0),l.length&&this._parts.push(l)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(t){var e=!1,i,n,s,l,m,v,w,C;if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(l=0,w=this._parts.length;l<w;l++)for(i=this._parts[l],m=0,C=i.length,v=C-1;m<C;v=m++)n=i[m],s=i[v],n.y>t.y!=s.y>t.y&&t.x<(s.x-n.x)*(t.y-n.y)/(s.y-n.y)+n.x&&(e=!e);return e||It.prototype._containsPoint.call(this,t,!0)}});function ks(t,e){return new Jt(t,e)}var Bt=Et.extend({initialize:function(t,e){k(this,e),this._layers={},t&&this.addData(t)},addData:function(t){var e=Z(t)?t:t.features,i,n,s;if(e){for(i=0,n=e.length;i<n;i++)s=e[i],(s.geometries||s.geometry||s.features||s.coordinates)&&this.addData(s);return this}var l=this.options;if(l.filter&&!l.filter(t))return this;var m=Oe(t,l);return m?(m.feature=Ne(t),m.defaultOptions=m.options,this.resetStyle(m),l.onEachFeature&&l.onEachFeature(t,m),this.addLayer(m)):this},resetStyle:function(t){return t===void 0?this.eachLayer(this.resetStyle,this):(t.options=_({},t.defaultOptions),this._setLayerStyle(t,this.options.style),this)},setStyle:function(t){return this.eachLayer(function(e){this._setLayerStyle(e,t)},this)},_setLayerStyle:function(t,e){t.setStyle&&(typeof e=="function"&&(e=e(t.feature)),t.setStyle(e))}});function Oe(t,e){var i=t.type==="Feature"?t.geometry:t,n=i?i.coordinates:null,s=[],l=e&&e.pointToLayer,m=e&&e.coordsToLatLng||Si,v,w,C,T;if(!n&&!i)return null;switch(i.type){case"Point":return v=m(n),Mn(l,t,v,e);case"MultiPoint":for(C=0,T=n.length;C<T;C++)v=m(n[C]),s.push(Mn(l,t,v,e));return new Et(s);case"LineString":case"MultiLineString":return w=Ze(n,i.type==="LineString"?0:1,m),new It(w,e);case"Polygon":case"MultiPolygon":return w=Ze(n,i.type==="Polygon"?1:2,m),new Jt(w,e);case"GeometryCollection":for(C=0,T=i.geometries.length;C<T;C++){var O=Oe({geometry:i.geometries[C],type:"Feature",properties:t.properties},e);O&&s.push(O)}return new Et(s);case"FeatureCollection":for(C=0,T=i.features.length;C<T;C++){var H=Oe(i.features[C],e);H&&s.push(H)}return new Et(s);default:throw new Error("Invalid GeoJSON object.")}}function Mn(t,e,i,n){return t?t(e,i):new ze(i,n&&n.markersInheritOptions&&n)}function Si(t){return new K(t[1],t[0],t[2])}function Ze(t,e,i){for(var n=[],s=0,l=t.length,m;s<l;s++)m=e?Ze(t[s],e-1,i):(i||Si)(t[s]),n.push(m);return n}function Ti(t,e){return t=W(t),t.alt!==void 0?[x(t.lng,e),x(t.lat,e),x(t.alt,e)]:[x(t.lng,e),x(t.lat,e)]}function Re(t,e,i,n){for(var s=[],l=0,m=t.length;l<m;l++)s.push(e?Re(t[l],yt(t[l])?0:e-1,i,n):Ti(t[l],n));return!e&&i&&s.length>0&&s.push(s[0].slice()),s}function Xt(t,e){return t.feature?_({},t.feature,{geometry:e}):Ne(e)}function Ne(t){return t.type==="Feature"||t.type==="FeatureCollection"?t:{type:"Feature",properties:{},geometry:t}}var Ei={toGeoJSON:function(t){return Xt(this,{type:"Point",coordinates:Ti(this.getLatLng(),t)})}};ze.include(Ei),Mi.include(Ei),Ae.include(Ei),It.include({toGeoJSON:function(t){var e=!yt(this._latlngs),i=Re(this._latlngs,e?1:0,!1,t);return Xt(this,{type:(e?"Multi":"")+"LineString",coordinates:i})}}),Jt.include({toGeoJSON:function(t){var e=!yt(this._latlngs),i=e&&!yt(this._latlngs[0]),n=Re(this._latlngs,i?2:e?1:0,!0,t);return e||(n=[n]),Xt(this,{type:(i?"Multi":"")+"Polygon",coordinates:n})}}),Yt.include({toMultiPoint:function(t){var e=[];return this.eachLayer(function(i){e.push(i.toGeoJSON(t).geometry.coordinates)}),Xt(this,{type:"MultiPoint",coordinates:e})},toGeoJSON:function(t){var e=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(e==="MultiPoint")return this.toMultiPoint(t);var i=e==="GeometryCollection",n=[];return this.eachLayer(function(s){if(s.toGeoJSON){var l=s.toGeoJSON(t);if(i)n.push(l.geometry);else{var m=Ne(l);m.type==="FeatureCollection"?n.push.apply(n,m.features):n.push(m)}}}),i?Xt(this,{geometries:n,type:"GeometryCollection"}):{type:"FeatureCollection",features:n}}});function Sn(t,e){return new Bt(t,e)}var Ps=Sn,De=kt.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(t,e,i){this._url=t,this._bounds=ot(e),k(this,i)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(F(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){tt(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(t){return this.options.opacity=t,this._image&&this._updateOpacity(),this},setStyle:function(t){return t.opacity&&this.setOpacity(t.opacity),this},bringToFront:function(){return this._map&&qt(this._image),this},bringToBack:function(){return this._map&&Vt(this._image),this},setUrl:function(t){return this._url=t,this._image&&(this._image.src=t),this},setBounds:function(t){return this._bounds=ot(t),this._map&&this._reset(),this},getEvents:function(){var t={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var t=this._url.tagName==="IMG",e=this._image=t?this._url:q("img");if(F(e,"leaflet-image-layer"),this._zoomAnimated&&F(e,"leaflet-zoom-animated"),this.options.className&&F(e,this.options.className),e.onselectstart=g,e.onmousemove=g,e.onload=r(this.fire,this,"load"),e.onerror=r(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(e.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),t){this._url=e.src;return}e.src=this._url,e.alt=this.options.alt},_animateZoom:function(t){var e=this._map.getZoomScale(t.zoom),i=this._map._latLngBoundsToNewLayerBounds(this._bounds,t.zoom,t.center).min;Ft(this._image,i,e)},_reset:function(){var t=this._image,e=new J(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),i=e.getSize();st(t,e.min),t.style.width=i.x+"px",t.style.height=i.y+"px"},_updateOpacity:function(){vt(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var t=this.options.errorOverlayUrl;t&&this._url!==t&&(this._url=t,this._image.src=t)},getCenter:function(){return this._bounds.getCenter()}}),Cs=function(t,e,i){return new De(t,e,i)},Tn=De.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var t=this._url.tagName==="VIDEO",e=this._image=t?this._url:q("video");if(F(e,"leaflet-image-layer"),this._zoomAnimated&&F(e,"leaflet-zoom-animated"),this.options.className&&F(e,this.options.className),e.onselectstart=g,e.onmousemove=g,e.onloadeddata=r(this.fire,this,"load"),t){for(var i=e.getElementsByTagName("source"),n=[],s=0;s<i.length;s++)n.push(i[s].src);this._url=i.length>0?n:[e.src];return}Z(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(e.style,"objectFit")&&(e.style.objectFit="fill"),e.autoplay=!!this.options.autoplay,e.loop=!!this.options.loop,e.muted=!!this.options.muted,e.playsInline=!!this.options.playsInline;for(var l=0;l<this._url.length;l++){var m=q("source");m.src=this._url[l],e.appendChild(m)}}});function Ms(t,e,i){return new Tn(t,e,i)}var En=De.extend({_initImage:function(){var t=this._image=this._url;F(t,"leaflet-image-layer"),this._zoomAnimated&&F(t,"leaflet-zoom-animated"),this.options.className&&F(t,this.options.className),t.onselectstart=g,t.onmousemove=g}});function Ss(t,e,i){return new En(t,e,i)}var St=kt.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(t,e){t&&(t instanceof K||Z(t))?(this._latlng=W(t),k(this,e)):(k(this,t),this._source=e),this.options.content&&(this._content=this.options.content)},openOn:function(t){return t=arguments.length?t:this._source._map,t.hasLayer(this)||t.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(t){return this._map?this.close():(arguments.length?this._source=t:t=this._source,this._prepareOpen(),this.openOn(t._map)),this},onAdd:function(t){this._zoomAnimated=t._zoomAnimated,this._container||this._initLayout(),t._fadeAnimated&&vt(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),t._fadeAnimated&&vt(this._container,1),this.bringToFront(),this.options.interactive&&(F(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(t){t._fadeAnimated?(vt(this._container,0),this._removeTimeout=setTimeout(r(tt,void 0,this._container),200)):tt(this._container),this.options.interactive&&(nt(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(t){return this._latlng=W(t),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(t){return this._content=t,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var t={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&qt(this._container),this},bringToBack:function(){return this._map&&Vt(this._container),this},_prepareOpen:function(t){var e=this._source;if(!e._map)return!1;if(e instanceof Et){e=null;var i=this._source._layers;for(var n in i)if(i[n]._map){e=i[n];break}if(!e)return!1;this._source=e}if(!t)if(e.getCenter)t=e.getCenter();else if(e.getLatLng)t=e.getLatLng();else if(e.getBounds)t=e.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(t),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var t=this._contentNode,e=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof e=="string")t.innerHTML=e;else{for(;t.hasChildNodes();)t.removeChild(t.firstChild);t.appendChild(e)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var t=this._map.latLngToLayerPoint(this._latlng),e=A(this.options.offset),i=this._getAnchor();this._zoomAnimated?st(this._container,t.add(i)):e=e.add(t).add(i);var n=this._containerBottom=-e.y,s=this._containerLeft=-Math.round(this._containerWidth/2)+e.x;this._container.style.bottom=n+"px",this._container.style.left=s+"px"}},_getAnchor:function(){return[0,0]}});$.include({_initOverlay:function(t,e,i,n){var s=e;return s instanceof t||(s=new t(n).setContent(e)),i&&s.setLatLng(i),s}}),kt.include({_initOverlay:function(t,e,i,n){var s=i;return s instanceof t?(k(s,n),s._source=this):(s=e&&!n?e:new t(n,this),s.setContent(i)),s}});var Fe=St.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(t){return t=arguments.length?t:this._source._map,!t.hasLayer(this)&&t._popup&&t._popup.options.autoClose&&t.removeLayer(t._popup),t._popup=this,St.prototype.openOn.call(this,t)},onAdd:function(t){St.prototype.onAdd.call(this,t),t.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof Zt||this._source.on("preclick",Ht))},onRemove:function(t){St.prototype.onRemove.call(this,t),t.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof Zt||this._source.off("preclick",Ht))},getEvents:function(){var t=St.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(t.preclick=this.close),this.options.keepInView&&(t.moveend=this._adjustPan),t},_initLayout:function(){var t="leaflet-popup",e=this._container=q("div",t+" "+(this.options.className||"")+" leaflet-zoom-animated"),i=this._wrapper=q("div",t+"-content-wrapper",e);if(this._contentNode=q("div",t+"-content",i),ue(e),yi(this._contentNode),N(e,"contextmenu",Ht),this._tipContainer=q("div",t+"-tip-container",e),this._tip=q("div",t+"-tip",this._tipContainer),this.options.closeButton){var n=this._closeButton=q("a",t+"-close-button",e);n.setAttribute("role","button"),n.setAttribute("aria-label","Close popup"),n.href="#close",n.innerHTML='<span aria-hidden="true">&#215;</span>',N(n,"click",function(s){ct(s),this.close()},this)}},_updateLayout:function(){var t=this._contentNode,e=t.style;e.width="",e.whiteSpace="nowrap";var i=t.offsetWidth;i=Math.min(i,this.options.maxWidth),i=Math.max(i,this.options.minWidth),e.width=i+1+"px",e.whiteSpace="",e.height="";var n=t.offsetHeight,s=this.options.maxHeight,l="leaflet-popup-scrolled";s&&n>s?(e.height=s+"px",F(t,l)):nt(t,l),this._containerWidth=this._container.offsetWidth},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center),i=this._getAnchor();st(this._container,e.add(i))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var t=this._map,e=parseInt(le(this._container,"marginBottom"),10)||0,i=this._container.offsetHeight+e,n=this._containerWidth,s=new R(this._containerLeft,-i-this._containerBottom);s._add(Gt(this._container));var l=t.layerPointToContainerPoint(s),m=A(this.options.autoPanPadding),v=A(this.options.autoPanPaddingTopLeft||m),w=A(this.options.autoPanPaddingBottomRight||m),C=t.getSize(),T=0,O=0;l.x+n+w.x>C.x&&(T=l.x+n-C.x+w.x),l.x-T-v.x<0&&(T=l.x-v.x),l.y+i+w.y>C.y&&(O=l.y+i-C.y+w.y),l.y-O-v.y<0&&(O=l.y-v.y),(T||O)&&(this.options.keepInView&&(this._autopanning=!0),t.fire("autopanstart").panBy([T,O]))}},_getAnchor:function(){return A(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),Ts=function(t,e){return new Fe(t,e)};$.mergeOptions({closePopupOnClick:!0}),$.include({openPopup:function(t,e,i){return this._initOverlay(Fe,t,e,i).openOn(this),this},closePopup:function(t){return t=arguments.length?t:this._popup,t&&t.close(),this}}),kt.include({bindPopup:function(t,e){return this._popup=this._initOverlay(Fe,this._popup,t,e),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(t){return this._popup&&(this instanceof Et||(this._popup._source=this),this._popup._prepareOpen(t||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(t){return this._popup&&this._popup.setContent(t),this},getPopup:function(){return this._popup},_openPopup:function(t){if(!(!this._popup||!this._map)){jt(t);var e=t.layer||t.target;if(this._popup._source===e&&!(e instanceof Zt)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(t.latlng);return}this._popup._source=e,this.openPopup(t.latlng)}},_movePopup:function(t){this._popup.setLatLng(t.latlng)},_onKeyPress:function(t){t.originalEvent.keyCode===13&&this._openPopup(t)}});var Ge=St.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(t){St.prototype.onAdd.call(this,t),this.setOpacity(this.options.opacity),t.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(t){St.prototype.onRemove.call(this,t),t.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var t=St.prototype.getEvents.call(this);return this.options.permanent||(t.preclick=this.close),t},_initLayout:function(){var t="leaflet-tooltip",e=t+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=q("div",e),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+d(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(t){var e,i,n=this._map,s=this._container,l=n.latLngToContainerPoint(n.getCenter()),m=n.layerPointToContainerPoint(t),v=this.options.direction,w=s.offsetWidth,C=s.offsetHeight,T=A(this.options.offset),O=this._getAnchor();v==="top"?(e=w/2,i=C):v==="bottom"?(e=w/2,i=0):v==="center"?(e=w/2,i=C/2):v==="right"?(e=0,i=C/2):v==="left"?(e=w,i=C/2):m.x<l.x?(v="right",e=0,i=C/2):(v="left",e=w+(T.x+O.x)*2,i=C/2),t=t.subtract(A(e,i,!0)).add(T).add(O),nt(s,"leaflet-tooltip-right"),nt(s,"leaflet-tooltip-left"),nt(s,"leaflet-tooltip-top"),nt(s,"leaflet-tooltip-bottom"),F(s,"leaflet-tooltip-"+v),st(s,t)},_updatePosition:function(){var t=this._map.latLngToLayerPoint(this._latlng);this._setPosition(t)},setOpacity:function(t){this.options.opacity=t,this._container&&vt(this._container,t)},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center);this._setPosition(e)},_getAnchor:function(){return A(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),Es=function(t,e){return new Ge(t,e)};$.include({openTooltip:function(t,e,i){return this._initOverlay(Ge,t,e,i).openOn(this),this},closeTooltip:function(t){return t.close(),this}}),kt.include({bindTooltip:function(t,e){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(Ge,this._tooltip,t,e),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(t){if(!(!t&&this._tooltipHandlersAdded)){var e=t?"off":"on",i={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?i.add=this._openTooltip:(i.mouseover=this._openTooltip,i.mouseout=this.closeTooltip,i.click=this._openTooltip,this._map?this._addFocusListeners():i.add=this._addFocusListeners),this._tooltip.options.sticky&&(i.mousemove=this._moveTooltip),this[e](i),this._tooltipHandlersAdded=!t}},openTooltip:function(t){return this._tooltip&&(this instanceof Et||(this._tooltip._source=this),this._tooltip._prepareOpen(t)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(t){return this._tooltip&&this._tooltip.setContent(t),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(t){var e=typeof t.getElement=="function"&&t.getElement();e&&(N(e,"focus",function(){this._tooltip._source=t,this.openTooltip()},this),N(e,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(t){var e=typeof t.getElement=="function"&&t.getElement();e&&e.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(t){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var e=this;this._map.once("moveend",function(){e._openOnceFlag=!1,e._openTooltip(t)});return}this._tooltip._source=t.layer||t.target,this.openTooltip(this._tooltip.options.sticky?t.latlng:void 0)}},_moveTooltip:function(t){var e=t.latlng,i,n;this._tooltip.options.sticky&&t.originalEvent&&(i=this._map.mouseEventToContainerPoint(t.originalEvent),n=this._map.containerPointToLayerPoint(i),e=this._map.layerPointToLatLng(n)),this._tooltip.setLatLng(e)}});var In=Kt.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(t){var e=t&&t.tagName==="DIV"?t:document.createElement("div"),i=this.options;if(i.html instanceof Element?(Me(e),e.appendChild(i.html)):e.innerHTML=i.html!==!1?i.html:"",i.bgPos){var n=A(i.bgPos);e.style.backgroundPosition=-n.x+"px "+-n.y+"px"}return this._setIconStyles(e,"icon"),e},createShadow:function(){return null}});function Is(t){return new In(t)}Kt.Default=me;var _e=kt.extend({options:{tileSize:256,opacity:1,updateWhenIdle:I.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(t){k(this,t)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(t){t._addZoomLimit(this)},onRemove:function(t){this._removeAllTiles(),tt(this._container),t._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(qt(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(Vt(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(t){return this.options.opacity=t,this._updateOpacity(),this},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var t=this._clampZoom(this._map.getZoom());t!==this._tileZoom&&(this._tileZoom=t,this._updateLevels()),this._update()}return this},getEvents:function(){var t={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=f(this._onMoveEnd,this.options.updateInterval,this)),t.move=this._onMove),this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},createTile:function(){return document.createElement("div")},getTileSize:function(){var t=this.options.tileSize;return t instanceof R?t:new R(t,t)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(t){for(var e=this.getPane().children,i=-t(-1/0,1/0),n=0,s=e.length,l;n<s;n++)l=e[n].style.zIndex,e[n]!==this._container&&l&&(i=t(i,+l));isFinite(i)&&(this.options.zIndex=i+t(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!I.ielt9){vt(this._container,this.options.opacity);var t=+new Date,e=!1,i=!1;for(var n in this._tiles){var s=this._tiles[n];if(!(!s.current||!s.loaded)){var l=Math.min(1,(t-s.loaded)/200);vt(s.el,l),l<1?e=!0:(s.active?i=!0:this._onOpaqueTile(s),s.active=!0)}}i&&!this._noPrune&&this._pruneTiles(),e&&(it(this._fadeFrame),this._fadeFrame=Y(this._updateOpacity,this))}},_onOpaqueTile:g,_initContainer:function(){this._container||(this._container=q("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var t=this._tileZoom,e=this.options.maxZoom;if(t!==void 0){for(var i in this._levels)i=Number(i),this._levels[i].el.children.length||i===t?(this._levels[i].el.style.zIndex=e-Math.abs(t-i),this._onUpdateLevel(i)):(tt(this._levels[i].el),this._removeTilesAtZoom(i),this._onRemoveLevel(i),delete this._levels[i]);var n=this._levels[t],s=this._map;return n||(n=this._levels[t]={},n.el=q("div","leaflet-tile-container leaflet-zoom-animated",this._container),n.el.style.zIndex=e,n.origin=s.project(s.unproject(s.getPixelOrigin()),t).round(),n.zoom=t,this._setZoomTransform(n,s.getCenter(),s.getZoom()),g(n.el.offsetWidth),this._onCreateLevel(n)),this._level=n,n}},_onUpdateLevel:g,_onRemoveLevel:g,_onCreateLevel:g,_pruneTiles:function(){if(this._map){var t,e,i=this._map.getZoom();if(i>this.options.maxZoom||i<this.options.minZoom){this._removeAllTiles();return}for(t in this._tiles)e=this._tiles[t],e.retain=e.current;for(t in this._tiles)if(e=this._tiles[t],e.current&&!e.active){var n=e.coords;this._retainParent(n.x,n.y,n.z,n.z-5)||this._retainChildren(n.x,n.y,n.z,n.z+2)}for(t in this._tiles)this._tiles[t].retain||this._removeTile(t)}},_removeTilesAtZoom:function(t){for(var e in this._tiles)this._tiles[e].coords.z===t&&this._removeTile(e)},_removeAllTiles:function(){for(var t in this._tiles)this._removeTile(t)},_invalidateAll:function(){for(var t in this._levels)tt(this._levels[t].el),this._onRemoveLevel(Number(t)),delete this._levels[t];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(t,e,i,n){var s=Math.floor(t/2),l=Math.floor(e/2),m=i-1,v=new R(+s,+l);v.z=+m;var w=this._tileCoordsToKey(v),C=this._tiles[w];return C&&C.active?(C.retain=!0,!0):(C&&C.loaded&&(C.retain=!0),m>n?this._retainParent(s,l,m,n):!1)},_retainChildren:function(t,e,i,n){for(var s=2*t;s<2*t+2;s++)for(var l=2*e;l<2*e+2;l++){var m=new R(s,l);m.z=i+1;var v=this._tileCoordsToKey(m),w=this._tiles[v];if(w&&w.active){w.retain=!0;continue}else w&&w.loaded&&(w.retain=!0);i+1<n&&this._retainChildren(s,l,i+1,n)}},_resetView:function(t){var e=t&&(t.pinch||t.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),e,e)},_animateZoom:function(t){this._setView(t.center,t.zoom,!0,t.noUpdate)},_clampZoom:function(t){var e=this.options;return e.minNativeZoom!==void 0&&t<e.minNativeZoom?e.minNativeZoom:e.maxNativeZoom!==void 0&&e.maxNativeZoom<t?e.maxNativeZoom:t},_setView:function(t,e,i,n){var s=Math.round(e);this.options.maxZoom!==void 0&&s>this.options.maxZoom||this.options.minZoom!==void 0&&s<this.options.minZoom?s=void 0:s=this._clampZoom(s);var l=this.options.updateWhenZooming&&s!==this._tileZoom;(!n||l)&&(this._tileZoom=s,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),s!==void 0&&this._update(t),i||this._pruneTiles(),this._noPrune=!!i),this._setZoomTransforms(t,e)},_setZoomTransforms:function(t,e){for(var i in this._levels)this._setZoomTransform(this._levels[i],t,e)},_setZoomTransform:function(t,e,i){var n=this._map.getZoomScale(i,t.zoom),s=t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(e,i)).round();I.any3d?Ft(t.el,s,n):st(t.el,s)},_resetGrid:function(){var t=this._map,e=t.options.crs,i=this._tileSize=this.getTileSize(),n=this._tileZoom,s=this._map.getPixelWorldBounds(this._tileZoom);s&&(this._globalTileRange=this._pxBoundsToTileRange(s)),this._wrapX=e.wrapLng&&!this.options.noWrap&&[Math.floor(t.project([0,e.wrapLng[0]],n).x/i.x),Math.ceil(t.project([0,e.wrapLng[1]],n).x/i.y)],this._wrapY=e.wrapLat&&!this.options.noWrap&&[Math.floor(t.project([e.wrapLat[0],0],n).y/i.x),Math.ceil(t.project([e.wrapLat[1],0],n).y/i.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(t){var e=this._map,i=e._animatingZoom?Math.max(e._animateToZoom,e.getZoom()):e.getZoom(),n=e.getZoomScale(i,this._tileZoom),s=e.project(t,this._tileZoom).floor(),l=e.getSize().divideBy(n*2);return new J(s.subtract(l),s.add(l))},_update:function(t){var e=this._map;if(e){var i=this._clampZoom(e.getZoom());if(t===void 0&&(t=e.getCenter()),this._tileZoom!==void 0){var n=this._getTiledPixelBounds(t),s=this._pxBoundsToTileRange(n),l=s.getCenter(),m=[],v=this.options.keepBuffer,w=new J(s.getBottomLeft().subtract([v,-v]),s.getTopRight().add([v,-v]));if(!(isFinite(s.min.x)&&isFinite(s.min.y)&&isFinite(s.max.x)&&isFinite(s.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var C in this._tiles){var T=this._tiles[C].coords;(T.z!==this._tileZoom||!w.contains(new R(T.x,T.y)))&&(this._tiles[C].current=!1)}if(Math.abs(i-this._tileZoom)>1){this._setView(t,i);return}for(var O=s.min.y;O<=s.max.y;O++)for(var H=s.min.x;H<=s.max.x;H++){var pt=new R(H,O);if(pt.z=this._tileZoom,!!this._isValidTile(pt)){var at=this._tiles[this._tileCoordsToKey(pt)];at?at.current=!0:m.push(pt)}}if(m.sort(function(_t,te){return _t.distanceTo(l)-te.distanceTo(l)}),m.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var bt=document.createDocumentFragment();for(H=0;H<m.length;H++)this._addTile(m[H],bt);this._level.el.appendChild(bt)}}}},_isValidTile:function(t){var e=this._map.options.crs;if(!e.infinite){var i=this._globalTileRange;if(!e.wrapLng&&(t.x<i.min.x||t.x>i.max.x)||!e.wrapLat&&(t.y<i.min.y||t.y>i.max.y))return!1}if(!this.options.bounds)return!0;var n=this._tileCoordsToBounds(t);return ot(this.options.bounds).overlaps(n)},_keyToBounds:function(t){return this._tileCoordsToBounds(this._keyToTileCoords(t))},_tileCoordsToNwSe:function(t){var e=this._map,i=this.getTileSize(),n=t.scaleBy(i),s=n.add(i),l=e.unproject(n,t.z),m=e.unproject(s,t.z);return[l,m]},_tileCoordsToBounds:function(t){var e=this._tileCoordsToNwSe(t),i=new mt(e[0],e[1]);return this.options.noWrap||(i=this._map.wrapLatLngBounds(i)),i},_tileCoordsToKey:function(t){return t.x+":"+t.y+":"+t.z},_keyToTileCoords:function(t){var e=t.split(":"),i=new R(+e[0],+e[1]);return i.z=+e[2],i},_removeTile:function(t){var e=this._tiles[t];e&&(tt(e.el),delete this._tiles[t],this.fire("tileunload",{tile:e.el,coords:this._keyToTileCoords(t)}))},_initTile:function(t){F(t,"leaflet-tile");var e=this.getTileSize();t.style.width=e.x+"px",t.style.height=e.y+"px",t.onselectstart=g,t.onmousemove=g,I.ielt9&&this.options.opacity<1&&vt(t,this.options.opacity)},_addTile:function(t,e){var i=this._getTilePos(t),n=this._tileCoordsToKey(t),s=this.createTile(this._wrapCoords(t),r(this._tileReady,this,t));this._initTile(s),this.createTile.length<2&&Y(r(this._tileReady,this,t,null,s)),st(s,i),this._tiles[n]={el:s,coords:t,current:!0},e.appendChild(s),this.fire("tileloadstart",{tile:s,coords:t})},_tileReady:function(t,e,i){e&&this.fire("tileerror",{error:e,tile:i,coords:t});var n=this._tileCoordsToKey(t);i=this._tiles[n],i&&(i.loaded=+new Date,this._map._fadeAnimated?(vt(i.el,0),it(this._fadeFrame),this._fadeFrame=Y(this._updateOpacity,this)):(i.active=!0,this._pruneTiles()),e||(F(i.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:i.el,coords:t})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),I.ielt9||!this._map._fadeAnimated?Y(this._pruneTiles,this):setTimeout(r(this._pruneTiles,this),250)))},_getTilePos:function(t){return t.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(t){var e=new R(this._wrapX?y(t.x,this._wrapX):t.x,this._wrapY?y(t.y,this._wrapY):t.y);return e.z=t.z,e},_pxBoundsToTileRange:function(t){var e=this.getTileSize();return new J(t.min.unscaleBy(e).floor(),t.max.unscaleBy(e).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var t in this._tiles)if(!this._tiles[t].loaded)return!1;return!0}});function Bs(t){return new _e(t)}var Qt=_e.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(t,e){this._url=t,e=k(this,e),e.detectRetina&&I.retina&&e.maxZoom>0?(e.tileSize=Math.floor(e.tileSize/2),e.zoomReverse?(e.zoomOffset--,e.minZoom=Math.min(e.maxZoom,e.minZoom+1)):(e.zoomOffset++,e.maxZoom=Math.max(e.minZoom,e.maxZoom-1)),e.minZoom=Math.max(0,e.minZoom)):e.zoomReverse?e.minZoom=Math.min(e.maxZoom,e.minZoom):e.maxZoom=Math.max(e.minZoom,e.maxZoom),typeof e.subdomains=="string"&&(e.subdomains=e.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(t,e){return this._url===t&&e===void 0&&(e=!0),this._url=t,e||this.redraw(),this},createTile:function(t,e){var i=document.createElement("img");return N(i,"load",r(this._tileOnLoad,this,e,i)),N(i,"error",r(this._tileOnError,this,e,i)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(i.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(i.referrerPolicy=this.options.referrerPolicy),i.alt="",i.src=this.getTileUrl(t),i},getTileUrl:function(t){var e={r:I.retina?"@2x":"",s:this._getSubdomain(t),x:t.x,y:t.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var i=this._globalTileRange.max.y-t.y;this.options.tms&&(e.y=i),e["-y"]=i}return E(this._url,_(e,this.options))},_tileOnLoad:function(t,e){I.ielt9?setTimeout(r(t,this,null,e),0):t(null,e)},_tileOnError:function(t,e,i){var n=this.options.errorTileUrl;n&&e.getAttribute("src")!==n&&(e.src=n),t(i,e)},_onTileRemove:function(t){t.tile.onload=null},_getZoomForUrl:function(){var t=this._tileZoom,e=this.options.maxZoom,i=this.options.zoomReverse,n=this.options.zoomOffset;return i&&(t=e-t),t+n},_getSubdomain:function(t){var e=Math.abs(t.x+t.y)%this.options.subdomains.length;return this.options.subdomains[e]},_abortLoading:function(){var t,e;for(t in this._tiles)if(this._tiles[t].coords.z!==this._tileZoom&&(e=this._tiles[t].el,e.onload=g,e.onerror=g,!e.complete)){e.src=j;var i=this._tiles[t].coords;tt(e),delete this._tiles[t],this.fire("tileabort",{tile:e,coords:i})}},_removeTile:function(t){var e=this._tiles[t];if(e)return e.el.setAttribute("src",j),_e.prototype._removeTile.call(this,t)},_tileReady:function(t,e,i){if(!(!this._map||i&&i.getAttribute("src")===j))return _e.prototype._tileReady.call(this,t,e,i)}});function Bn(t,e){return new Qt(t,e)}var zn=Qt.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(t,e){this._url=t;var i=_({},this.defaultWmsParams);for(var n in e)n in this.options||(i[n]=e[n]);e=k(this,e);var s=e.detectRetina&&I.retina?2:1,l=this.getTileSize();i.width=l.x*s,i.height=l.y*s,this.wmsParams=i},onAdd:function(t){this._crs=this.options.crs||t.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var e=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[e]=this._crs.code,Qt.prototype.onAdd.call(this,t)},getTileUrl:function(t){var e=this._tileCoordsToNwSe(t),i=this._crs,n=ft(i.project(e[0]),i.project(e[1])),s=n.min,l=n.max,m=(this._wmsVersion>=1.3&&this._crs===Pn?[s.y,s.x,l.y,l.x]:[s.x,s.y,l.x,l.y]).join(","),v=Qt.prototype.getTileUrl.call(this,t);return v+B(this.wmsParams,v,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+m},setParams:function(t,e){return _(this.wmsParams,t),e||this.redraw(),this}});function zs(t,e){return new zn(t,e)}Qt.WMS=zn,Bn.wms=zs;var zt=kt.extend({options:{padding:.1},initialize:function(t){k(this,t),d(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),F(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var t={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(t.zoomanim=this._onAnimZoom),t},_onAnimZoom:function(t){this._updateTransform(t.center,t.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(t,e){var i=this._map.getZoomScale(e,this._zoom),n=this._map.getSize().multiplyBy(.5+this.options.padding),s=this._map.project(this._center,e),l=n.multiplyBy(-i).add(s).subtract(this._map._getNewPixelOrigin(t,e));I.any3d?Ft(this._container,l,i):st(this._container,l)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var t in this._layers)this._layers[t]._reset()},_onZoomEnd:function(){for(var t in this._layers)this._layers[t]._project()},_updatePaths:function(){for(var t in this._layers)this._layers[t]._update()},_update:function(){var t=this.options.padding,e=this._map.getSize(),i=this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();this._bounds=new J(i,i.add(e.multiplyBy(1+t*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),An=zt.extend({options:{tolerance:0},getEvents:function(){var t=zt.prototype.getEvents.call(this);return t.viewprereset=this._onViewPreReset,t},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){zt.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var t=this._container=document.createElement("canvas");N(t,"mousemove",this._onMouseMove,this),N(t,"click dblclick mousedown mouseup contextmenu",this._onClick,this),N(t,"mouseout",this._handleMouseOut,this),t._leaflet_disable_events=!0,this._ctx=t.getContext("2d")},_destroyContainer:function(){it(this._redrawRequest),delete this._ctx,tt(this._container),X(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var t;this._redrawBounds=null;for(var e in this._layers)t=this._layers[e],t._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){zt.prototype._update.call(this);var t=this._bounds,e=this._container,i=t.getSize(),n=I.retina?2:1;st(e,t.min),e.width=n*i.x,e.height=n*i.y,e.style.width=i.x+"px",e.style.height=i.y+"px",I.retina&&this._ctx.scale(2,2),this._ctx.translate(-t.min.x,-t.min.y),this.fire("update")}},_reset:function(){zt.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(t){this._updateDashArray(t),this._layers[d(t)]=t;var e=t._order={layer:t,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=e),this._drawLast=e,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(t){this._requestRedraw(t)},_removePath:function(t){var e=t._order,i=e.next,n=e.prev;i?i.prev=n:this._drawLast=n,n?n.next=i:this._drawFirst=i,delete t._order,delete this._layers[d(t)],this._requestRedraw(t)},_updatePath:function(t){this._extendRedrawBounds(t),t._project(),t._update(),this._requestRedraw(t)},_updateStyle:function(t){this._updateDashArray(t),this._requestRedraw(t)},_updateDashArray:function(t){if(typeof t.options.dashArray=="string"){var e=t.options.dashArray.split(/[, ]+/),i=[],n,s;for(s=0;s<e.length;s++){if(n=Number(e[s]),isNaN(n))return;i.push(n)}t.options._dashArray=i}else t.options._dashArray=t.options.dashArray},_requestRedraw:function(t){this._map&&(this._extendRedrawBounds(t),this._redrawRequest=this._redrawRequest||Y(this._redraw,this))},_extendRedrawBounds:function(t){if(t._pxBounds){var e=(t.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new J,this._redrawBounds.extend(t._pxBounds.min.subtract([e,e])),this._redrawBounds.extend(t._pxBounds.max.add([e,e]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var t=this._redrawBounds;if(t){var e=t.getSize();this._ctx.clearRect(t.min.x,t.min.y,e.x,e.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var t,e=this._redrawBounds;if(this._ctx.save(),e){var i=e.getSize();this._ctx.beginPath(),this._ctx.rect(e.min.x,e.min.y,i.x,i.y),this._ctx.clip()}this._drawing=!0;for(var n=this._drawFirst;n;n=n.next)t=n.layer,(!e||t._pxBounds&&t._pxBounds.intersects(e))&&t._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(t,e){if(this._drawing){var i,n,s,l,m=t._parts,v=m.length,w=this._ctx;if(v){for(w.beginPath(),i=0;i<v;i++){for(n=0,s=m[i].length;n<s;n++)l=m[i][n],w[n?"lineTo":"moveTo"](l.x,l.y);e&&w.closePath()}this._fillStroke(w,t)}}},_updateCircle:function(t){if(!(!this._drawing||t._empty())){var e=t._point,i=this._ctx,n=Math.max(Math.round(t._radius),1),s=(Math.max(Math.round(t._radiusY),1)||n)/n;s!==1&&(i.save(),i.scale(1,s)),i.beginPath(),i.arc(e.x,e.y/s,n,0,Math.PI*2,!1),s!==1&&i.restore(),this._fillStroke(i,t)}},_fillStroke:function(t,e){var i=e.options;i.fill&&(t.globalAlpha=i.fillOpacity,t.fillStyle=i.fillColor||i.color,t.fill(i.fillRule||"evenodd")),i.stroke&&i.weight!==0&&(t.setLineDash&&t.setLineDash(e.options&&e.options._dashArray||[]),t.globalAlpha=i.opacity,t.lineWidth=i.weight,t.strokeStyle=i.color,t.lineCap=i.lineCap,t.lineJoin=i.lineJoin,t.stroke())},_onClick:function(t){for(var e=this._map.mouseEventToLayerPoint(t),i,n,s=this._drawFirst;s;s=s.next)i=s.layer,i.options.interactive&&i._containsPoint(e)&&(!(t.type==="click"||t.type==="preclick")||!this._map._draggableMoved(i))&&(n=i);this._fireEvent(n?[n]:!1,t)},_onMouseMove:function(t){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var e=this._map.mouseEventToLayerPoint(t);this._handleMouseHover(t,e)}},_handleMouseOut:function(t){var e=this._hoveredLayer;e&&(nt(this._container,"leaflet-interactive"),this._fireEvent([e],t,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(t,e){if(!this._mouseHoverThrottled){for(var i,n,s=this._drawFirst;s;s=s.next)i=s.layer,i.options.interactive&&i._containsPoint(e)&&(n=i);n!==this._hoveredLayer&&(this._handleMouseOut(t),n&&(F(this._container,"leaflet-interactive"),this._fireEvent([n],t,"mouseover"),this._hoveredLayer=n)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,t),this._mouseHoverThrottled=!0,setTimeout(r(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(t,e,i){this._map._fireDOMEvent(e,i||e.type,t)},_bringToFront:function(t){var e=t._order;if(e){var i=e.next,n=e.prev;if(i)i.prev=n;else return;n?n.next=i:i&&(this._drawFirst=i),e.prev=this._drawLast,this._drawLast.next=e,e.next=null,this._drawLast=e,this._requestRedraw(t)}},_bringToBack:function(t){var e=t._order;if(e){var i=e.next,n=e.prev;if(n)n.next=i;else return;i?i.prev=n:n&&(this._drawLast=n),e.prev=null,e.next=this._drawFirst,this._drawFirst.prev=e,this._drawFirst=e,this._requestRedraw(t)}}});function On(t){return I.canvas?new An(t):null}var ge=(function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(t){return document.createElement("<lvml:"+t+' class="lvml">')}}catch{}return function(t){return document.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}})(),As={_initContainer:function(){this._container=q("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(zt.prototype._update.call(this),this.fire("update"))},_initPath:function(t){var e=t._container=ge("shape");F(e,"leaflet-vml-shape "+(this.options.className||"")),e.coordsize="1 1",t._path=ge("path"),e.appendChild(t._path),this._updateStyle(t),this._layers[d(t)]=t},_addPath:function(t){var e=t._container;this._container.appendChild(e),t.options.interactive&&t.addInteractiveTarget(e)},_removePath:function(t){var e=t._container;tt(e),t.removeInteractiveTarget(e),delete this._layers[d(t)]},_updateStyle:function(t){var e=t._stroke,i=t._fill,n=t.options,s=t._container;s.stroked=!!n.stroke,s.filled=!!n.fill,n.stroke?(e||(e=t._stroke=ge("stroke")),s.appendChild(e),e.weight=n.weight+"px",e.color=n.color,e.opacity=n.opacity,n.dashArray?e.dashStyle=Z(n.dashArray)?n.dashArray.join(" "):n.dashArray.replace(/( *, *)/g," "):e.dashStyle="",e.endcap=n.lineCap.replace("butt","flat"),e.joinstyle=n.lineJoin):e&&(s.removeChild(e),t._stroke=null),n.fill?(i||(i=t._fill=ge("fill")),s.appendChild(i),i.color=n.fillColor||n.color,i.opacity=n.fillOpacity):i&&(s.removeChild(i),t._fill=null)},_updateCircle:function(t){var e=t._point.round(),i=Math.round(t._radius),n=Math.round(t._radiusY||i);this._setPath(t,t._empty()?"M0 0":"AL "+e.x+","+e.y+" "+i+","+n+" 0,"+65535*360)},_setPath:function(t,e){t._path.v=e},_bringToFront:function(t){qt(t._container)},_bringToBack:function(t){Vt(t._container)}},He=I.vml?ge:Ni,ve=zt.extend({_initContainer:function(){this._container=He("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=He("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){tt(this._container),X(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){zt.prototype._update.call(this);var t=this._bounds,e=t.getSize(),i=this._container;(!this._svgSize||!this._svgSize.equals(e))&&(this._svgSize=e,i.setAttribute("width",e.x),i.setAttribute("height",e.y)),st(i,t.min),i.setAttribute("viewBox",[t.min.x,t.min.y,e.x,e.y].join(" ")),this.fire("update")}},_initPath:function(t){var e=t._path=He("path");t.options.className&&F(e,t.options.className),t.options.interactive&&F(e,"leaflet-interactive"),this._updateStyle(t),this._layers[d(t)]=t},_addPath:function(t){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(t._path),t.addInteractiveTarget(t._path)},_removePath:function(t){tt(t._path),t.removeInteractiveTarget(t._path),delete this._layers[d(t)]},_updatePath:function(t){t._project(),t._update()},_updateStyle:function(t){var e=t._path,i=t.options;e&&(i.stroke?(e.setAttribute("stroke",i.color),e.setAttribute("stroke-opacity",i.opacity),e.setAttribute("stroke-width",i.weight),e.setAttribute("stroke-linecap",i.lineCap),e.setAttribute("stroke-linejoin",i.lineJoin),i.dashArray?e.setAttribute("stroke-dasharray",i.dashArray):e.removeAttribute("stroke-dasharray"),i.dashOffset?e.setAttribute("stroke-dashoffset",i.dashOffset):e.removeAttribute("stroke-dashoffset")):e.setAttribute("stroke","none"),i.fill?(e.setAttribute("fill",i.fillColor||i.color),e.setAttribute("fill-opacity",i.fillOpacity),e.setAttribute("fill-rule",i.fillRule||"evenodd")):e.setAttribute("fill","none"))},_updatePoly:function(t,e){this._setPath(t,Di(t._parts,e))},_updateCircle:function(t){var e=t._point,i=Math.max(Math.round(t._radius),1),n=Math.max(Math.round(t._radiusY),1)||i,s="a"+i+","+n+" 0 1,0 ",l=t._empty()?"M0 0":"M"+(e.x-i)+","+e.y+s+i*2+",0 "+s+-i*2+",0 ";this._setPath(t,l)},_setPath:function(t,e){t._path.setAttribute("d",e)},_bringToFront:function(t){qt(t._path)},_bringToBack:function(t){Vt(t._path)}});I.vml&&ve.include(As);function Zn(t){return I.svg||I.vml?new ve(t):null}$.include({getRenderer:function(t){var e=t.options.renderer||this._getPaneRenderer(t.options.pane)||this.options.renderer||this._renderer;return e||(e=this._renderer=this._createRenderer()),this.hasLayer(e)||this.addLayer(e),e},_getPaneRenderer:function(t){if(t==="overlayPane"||t===void 0)return!1;var e=this._paneRenderers[t];return e===void 0&&(e=this._createRenderer({pane:t}),this._paneRenderers[t]=e),e},_createRenderer:function(t){return this.options.preferCanvas&&On(t)||Zn(t)}});var Rn=Jt.extend({initialize:function(t,e){Jt.prototype.initialize.call(this,this._boundsToLatLngs(t),e)},setBounds:function(t){return this.setLatLngs(this._boundsToLatLngs(t))},_boundsToLatLngs:function(t){return t=ot(t),[t.getSouthWest(),t.getNorthWest(),t.getNorthEast(),t.getSouthEast()]}});function Os(t,e){return new Rn(t,e)}ve.create=He,ve.pointsToPath=Di,Bt.geometryToLayer=Oe,Bt.coordsToLatLng=Si,Bt.coordsToLatLngs=Ze,Bt.latLngToCoords=Ti,Bt.latLngsToCoords=Re,Bt.getFeature=Xt,Bt.asFeature=Ne,$.mergeOptions({boxZoom:!0});var Nn=Mt.extend({initialize:function(t){this._map=t,this._container=t._container,this._pane=t._panes.overlayPane,this._resetStateTimeout=0,t.on("unload",this._destroy,this)},addHooks:function(){N(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){X(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){tt(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(t){if(!t.shiftKey||t.which!==1&&t.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),ce(),hi(),this._startPoint=this._map.mouseEventToContainerPoint(t),N(document,{contextmenu:jt,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(t){this._moved||(this._moved=!0,this._box=q("div","leaflet-zoom-box",this._container),F(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(t);var e=new J(this._point,this._startPoint),i=e.getSize();st(this._box,e.min),this._box.style.width=i.x+"px",this._box.style.height=i.y+"px"},_finish:function(){this._moved&&(tt(this._box),nt(this._container,"leaflet-crosshair")),de(),ui(),X(document,{contextmenu:jt,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(t){if(!(t.which!==1&&t.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(r(this._resetState,this),0);var e=new mt(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(e).fire("boxzoomend",{boxZoomBounds:e})}},_onKeyDown:function(t){t.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});$.addInitHook("addHandler","boxZoom",Nn),$.mergeOptions({doubleClickZoom:!0});var Dn=Mt.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(t){var e=this._map,i=e.getZoom(),n=e.options.zoomDelta,s=t.originalEvent.shiftKey?i-n:i+n;e.options.doubleClickZoom==="center"?e.setZoom(s):e.setZoomAround(t.containerPoint,s)}});$.addInitHook("addHandler","doubleClickZoom",Dn),$.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var Fn=Mt.extend({addHooks:function(){if(!this._draggable){var t=this._map;this._draggable=new Ot(t._mapPane,t._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),t.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),t.on("zoomend",this._onZoomEnd,this),t.whenReady(this._onZoomEnd,this))}F(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){nt(this._map._container,"leaflet-grab"),nt(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var t=this._map;if(t._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var e=ot(this._map.options.maxBounds);this._offsetLimit=ft(this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(e.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;t.fire("movestart").fire("dragstart"),t.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(t){if(this._map.options.inertia){var e=this._lastTime=+new Date,i=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(i),this._times.push(e),this._prunePositions(e)}this._map.fire("move",t).fire("drag",t)},_prunePositions:function(t){for(;this._positions.length>1&&t-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var t=this._map.getSize().divideBy(2),e=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=e.subtract(t).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(t,e){return t-(t-e)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var t=this._draggable._newPos.subtract(this._draggable._startPos),e=this._offsetLimit;t.x<e.min.x&&(t.x=this._viscousLimit(t.x,e.min.x)),t.y<e.min.y&&(t.y=this._viscousLimit(t.y,e.min.y)),t.x>e.max.x&&(t.x=this._viscousLimit(t.x,e.max.x)),t.y>e.max.y&&(t.y=this._viscousLimit(t.y,e.max.y)),this._draggable._newPos=this._draggable._startPos.add(t)}},_onPreDragWrap:function(){var t=this._worldWidth,e=Math.round(t/2),i=this._initialWorldOffset,n=this._draggable._newPos.x,s=(n-e+i)%t+e-i,l=(n+e+i)%t-e-i,m=Math.abs(s+i)<Math.abs(l+i)?s:l;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=m},_onDragEnd:function(t){var e=this._map,i=e.options,n=!i.inertia||t.noInertia||this._times.length<2;if(e.fire("dragend",t),n)e.fire("moveend");else{this._prunePositions(+new Date);var s=this._lastPos.subtract(this._positions[0]),l=(this._lastTime-this._times[0])/1e3,m=i.easeLinearity,v=s.multiplyBy(m/l),w=v.distanceTo([0,0]),C=Math.min(i.inertiaMaxSpeed,w),T=v.multiplyBy(C/w),O=C/(i.inertiaDeceleration*m),H=T.multiplyBy(-O/2).round();!H.x&&!H.y?e.fire("moveend"):(H=e._limitOffset(H,e.options.maxBounds),Y(function(){e.panBy(H,{duration:O,easeLinearity:m,noMoveStart:!0,animate:!0})}))}}});$.addInitHook("addHandler","dragging",Fn),$.mergeOptions({keyboard:!0,keyboardPanDelta:80});var Gn=Mt.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(t){this._map=t,this._setPanDelta(t.options.keyboardPanDelta),this._setZoomDelta(t.options.zoomDelta)},addHooks:function(){var t=this._map._container;t.tabIndex<=0&&(t.tabIndex="0"),N(t,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),X(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var t=document.body,e=document.documentElement,i=t.scrollTop||e.scrollTop,n=t.scrollLeft||e.scrollLeft;this._map._container.focus(),window.scrollTo(n,i)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(t){var e=this._panKeys={},i=this.keyCodes,n,s;for(n=0,s=i.left.length;n<s;n++)e[i.left[n]]=[-1*t,0];for(n=0,s=i.right.length;n<s;n++)e[i.right[n]]=[t,0];for(n=0,s=i.down.length;n<s;n++)e[i.down[n]]=[0,t];for(n=0,s=i.up.length;n<s;n++)e[i.up[n]]=[0,-1*t]},_setZoomDelta:function(t){var e=this._zoomKeys={},i=this.keyCodes,n,s;for(n=0,s=i.zoomIn.length;n<s;n++)e[i.zoomIn[n]]=t;for(n=0,s=i.zoomOut.length;n<s;n++)e[i.zoomOut[n]]=-t},_addHooks:function(){N(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){X(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(t){if(!(t.altKey||t.ctrlKey||t.metaKey)){var e=t.keyCode,i=this._map,n;if(e in this._panKeys){if(!i._panAnim||!i._panAnim._inProgress)if(n=this._panKeys[e],t.shiftKey&&(n=A(n).multiplyBy(3)),i.options.maxBounds&&(n=i._limitOffset(A(n),i.options.maxBounds)),i.options.worldCopyJump){var s=i.wrapLatLng(i.unproject(i.project(i.getCenter()).add(n)));i.panTo(s)}else i.panBy(n)}else if(e in this._zoomKeys)i.setZoom(i.getZoom()+(t.shiftKey?3:1)*this._zoomKeys[e]);else if(e===27&&i._popup&&i._popup.options.closeOnEscapeKey)i.closePopup();else return;jt(t)}}});$.addInitHook("addHandler","keyboard",Gn),$.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var Hn=Mt.extend({addHooks:function(){N(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){X(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(t){var e=un(t),i=this._map.options.wheelDebounceTime;this._delta+=e,this._lastMousePos=this._map.mouseEventToContainerPoint(t),this._startTime||(this._startTime=+new Date);var n=Math.max(i-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(r(this._performZoom,this),n),jt(t)},_performZoom:function(){var t=this._map,e=t.getZoom(),i=this._map.options.zoomSnap||0;t._stop();var n=this._delta/(this._map.options.wheelPxPerZoomLevel*4),s=4*Math.log(2/(1+Math.exp(-Math.abs(n))))/Math.LN2,l=i?Math.ceil(s/i)*i:s,m=t._limitZoom(e+(this._delta>0?l:-l))-e;this._delta=0,this._startTime=null,m&&(t.options.scrollWheelZoom==="center"?t.setZoom(e+m):t.setZoomAround(this._lastMousePos,e+m))}});$.addInitHook("addHandler","scrollWheelZoom",Hn);var Zs=600;$.mergeOptions({tapHold:I.touchNative&&I.safari&&I.mobile,tapTolerance:15});var jn=Mt.extend({addHooks:function(){N(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){X(this._map._container,"touchstart",this._onDown,this)},_onDown:function(t){if(clearTimeout(this._holdTimeout),t.touches.length===1){var e=t.touches[0];this._startPos=this._newPos=new R(e.clientX,e.clientY),this._holdTimeout=setTimeout(r(function(){this._cancel(),this._isTapValid()&&(N(document,"touchend",ct),N(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",e))},this),Zs),N(document,"touchend touchcancel contextmenu",this._cancel,this),N(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function t(){X(document,"touchend",ct),X(document,"touchend touchcancel",t)},_cancel:function(){clearTimeout(this._holdTimeout),X(document,"touchend touchcancel contextmenu",this._cancel,this),X(document,"touchmove",this._onMove,this)},_onMove:function(t){var e=t.touches[0];this._newPos=new R(e.clientX,e.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(t,e){var i=new MouseEvent(t,{bubbles:!0,cancelable:!0,view:window,screenX:e.screenX,screenY:e.screenY,clientX:e.clientX,clientY:e.clientY});i._simulated=!0,e.target.dispatchEvent(i)}});$.addInitHook("addHandler","tapHold",jn),$.mergeOptions({touchZoom:I.touch,bounceAtZoomLimits:!0});var Un=Mt.extend({addHooks:function(){F(this._map._container,"leaflet-touch-zoom"),N(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){nt(this._map._container,"leaflet-touch-zoom"),X(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(t){var e=this._map;if(!(!t.touches||t.touches.length!==2||e._animatingZoom||this._zooming)){var i=e.mouseEventToContainerPoint(t.touches[0]),n=e.mouseEventToContainerPoint(t.touches[1]);this._centerPoint=e.getSize()._divideBy(2),this._startLatLng=e.containerPointToLatLng(this._centerPoint),e.options.touchZoom!=="center"&&(this._pinchStartLatLng=e.containerPointToLatLng(i.add(n)._divideBy(2))),this._startDist=i.distanceTo(n),this._startZoom=e.getZoom(),this._moved=!1,this._zooming=!0,e._stop(),N(document,"touchmove",this._onTouchMove,this),N(document,"touchend touchcancel",this._onTouchEnd,this),ct(t)}},_onTouchMove:function(t){if(!(!t.touches||t.touches.length!==2||!this._zooming)){var e=this._map,i=e.mouseEventToContainerPoint(t.touches[0]),n=e.mouseEventToContainerPoint(t.touches[1]),s=i.distanceTo(n)/this._startDist;if(this._zoom=e.getScaleZoom(s,this._startZoom),!e.options.bounceAtZoomLimits&&(this._zoom<e.getMinZoom()&&s<1||this._zoom>e.getMaxZoom()&&s>1)&&(this._zoom=e._limitZoom(this._zoom)),e.options.touchZoom==="center"){if(this._center=this._startLatLng,s===1)return}else{var l=i._add(n)._divideBy(2)._subtract(this._centerPoint);if(s===1&&l.x===0&&l.y===0)return;this._center=e.unproject(e.project(this._pinchStartLatLng,this._zoom).subtract(l),this._zoom)}this._moved||(e._moveStart(!0,!1),this._moved=!0),it(this._animRequest);var m=r(e._move,e,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=Y(m,this,!0),ct(t)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,it(this._animRequest),X(document,"touchmove",this._onTouchMove,this),X(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});$.addInitHook("addHandler","touchZoom",Un),$.BoxZoom=Nn,$.DoubleClickZoom=Dn,$.Drag=Fn,$.Keyboard=Gn,$.ScrollWheelZoom=Hn,$.TapHold=jn,$.TouchZoom=Un,a.Bounds=J,a.Browser=I,a.CRS=Tt,a.Canvas=An,a.Circle=Mi,a.CircleMarker=Ae,a.Class=Q,a.Control=Lt,a.DivIcon=In,a.DivOverlay=St,a.DomEvent=ts,a.DomUtil=Xo,a.Draggable=Ot,a.Evented=wt,a.FeatureGroup=Et,a.GeoJSON=Bt,a.GridLayer=_e,a.Handler=Mt,a.Icon=Kt,a.ImageOverlay=De,a.LatLng=K,a.LatLngBounds=mt,a.Layer=kt,a.LayerGroup=Yt,a.LineUtil=ps,a.Map=$,a.Marker=ze,a.Mixin=as,a.Path=Zt,a.Point=R,a.PolyUtil=ls,a.Polygon=Jt,a.Polyline=It,a.Popup=Fe,a.PosAnimation=pn,a.Projection=fs,a.Rectangle=Rn,a.Renderer=zt,a.SVG=ve,a.SVGOverlay=En,a.TileLayer=Qt,a.Tooltip=Ge,a.Transformation=Qe,a.Util=ht,a.VideoOverlay=Tn,a.bind=r,a.bounds=ft,a.canvas=On,a.circle=ws,a.circleMarker=xs,a.control=pe,a.divIcon=Is,a.extend=_,a.featureGroup=vs,a.geoJSON=Sn,a.geoJson=Ps,a.gridLayer=Bs,a.icon=ys,a.imageOverlay=Cs,a.latLng=W,a.latLngBounds=ot,a.layerGroup=gs,a.map=es,a.marker=bs,a.point=A,a.polygon=ks,a.polyline=Ls,a.popup=Ts,a.rectangle=Os,a.setOptions=k,a.stamp=d,a.svg=Zn,a.svgOverlay=Ss,a.tileLayer=Bn,a.tooltip=Es,a.transformation=se,a.version=p,a.videoOverlay=Ms;var Rs=window.L;a.noConflict=function(){return window.L=Rs,this},window.L=a}))})(ye,ye.exports)),ye.exports}var Ys=Vs();const lt=$s(Ys);var be={exports:{}},Ks=be.exports,Yn;function Js(){return Yn||(Yn=1,(function(u,h){(function(a,p){p(h)})(Ks,function(a){var p=L.MarkerClusterGroup=L.FeatureGroup.extend({options:{maxClusterRadius:80,iconCreateFunction:null,clusterPane:L.Marker.prototype.options.pane,spiderfyOnEveryZoom:!1,spiderfyOnMaxZoom:!0,showCoverageOnHover:!0,zoomToBoundsOnClick:!0,singleMarkerMode:!1,disableClusteringAtZoom:null,removeOutsideVisibleBounds:!0,animate:!0,animateAddingMarkers:!1,spiderfyShapePositions:null,spiderfyDistanceMultiplier:1,spiderLegPolylineOptions:{weight:1.5,color:"#222",opacity:.5},chunkedLoading:!1,chunkInterval:200,chunkDelay:50,chunkProgress:null,polygonOptions:{}},initialize:function(o){L.Util.setOptions(this,o),this.options.iconCreateFunction||(this.options.iconCreateFunction=this._defaultIconCreateFunction),this._featureGroup=L.featureGroup(),this._featureGroup.addEventParent(this),this._nonPointGroup=L.featureGroup(),this._nonPointGroup.addEventParent(this),this._inZoomAnimation=0,this._needsClustering=[],this._needsRemoving=[],this._currentShownBounds=null,this._queue=[],this._childMarkerEventHandlers={dragstart:this._childMarkerDragStart,move:this._childMarkerMoved,dragend:this._childMarkerDragEnd};var r=L.DomUtil.TRANSITION&&this.options.animate;L.extend(this,r?this._withAnimation:this._noAnimation),this._markerCluster=r?L.MarkerCluster:L.MarkerClusterNonAnimated},addLayer:function(o){if(o instanceof L.LayerGroup)return this.addLayers([o]);if(!o.getLatLng)return this._nonPointGroup.addLayer(o),this.fire("layeradd",{layer:o}),this;if(!this._map)return this._needsClustering.push(o),this.fire("layeradd",{layer:o}),this;if(this.hasLayer(o))return this;this._unspiderfy&&this._unspiderfy(),this._addLayer(o,this._maxZoom),this.fire("layeradd",{layer:o}),this._topClusterLevel._recalculateBounds(),this._refreshClustersIcons();var r=o,c=this._zoom;if(o.__parent)for(;r.__parent._zoom>=c;)r=r.__parent;return this._currentShownBounds.contains(r.getLatLng())&&(this.options.animateAddingMarkers?this._animationAddLayer(o,r):this._animationAddLayerNonAnimated(o,r)),this},removeLayer:function(o){return o instanceof L.LayerGroup?this.removeLayers([o]):o.getLatLng?this._map?o.__parent?(this._unspiderfy&&(this._unspiderfy(),this._unspiderfyLayer(o)),this._removeLayer(o,!0),this.fire("layerremove",{layer:o}),this._topClusterLevel._recalculateBounds(),this._refreshClustersIcons(),o.off(this._childMarkerEventHandlers,this),this._featureGroup.hasLayer(o)&&(this._featureGroup.removeLayer(o),o.clusterShow&&o.clusterShow()),this):this:(!this._arraySplice(this._needsClustering,o)&&this.hasLayer(o)&&this._needsRemoving.push({layer:o,latlng:o._latlng}),this.fire("layerremove",{layer:o}),this):(this._nonPointGroup.removeLayer(o),this.fire("layerremove",{layer:o}),this)},addLayers:function(o,r){if(!L.Util.isArray(o))return this.addLayer(o);var c=this._featureGroup,d=this._nonPointGroup,f=this.options.chunkedLoading,y=this.options.chunkInterval,g=this.options.chunkProgress,x=o.length,b=0,P=!0,k;if(this._map){var B=new Date().getTime(),S=L.bind(function(){var Z=new Date().getTime();for(this._map&&this._unspiderfy&&this._unspiderfy();b<x;b++){if(f&&b%200===0){var G=new Date().getTime()-Z;if(G>y)break}if(k=o[b],k instanceof L.LayerGroup){P&&(o=o.slice(),P=!1),this._extractNonGroupLayers(k,o),x=o.length;continue}if(!k.getLatLng){d.addLayer(k),r||this.fire("layeradd",{layer:k});continue}if(!this.hasLayer(k)&&(this._addLayer(k,this._maxZoom),r||this.fire("layeradd",{layer:k}),k.__parent&&k.__parent.getChildCount()===2)){var j=k.__parent.getAllChildMarkers(),et=j[0]===k?j[1]:j[0];c.removeLayer(et)}}g&&g(b,x,new Date().getTime()-B),b===x?(this._topClusterLevel._recalculateBounds(),this._refreshClustersIcons(),this._topClusterLevel._recursivelyAddChildrenToMap(null,this._zoom,this._currentShownBounds)):setTimeout(S,this.options.chunkDelay)},this);S()}else for(var E=this._needsClustering;b<x;b++){if(k=o[b],k instanceof L.LayerGroup){P&&(o=o.slice(),P=!1),this._extractNonGroupLayers(k,o),x=o.length;continue}if(!k.getLatLng){d.addLayer(k);continue}this.hasLayer(k)||E.push(k)}return this},removeLayers:function(o){var r,c,d=o.length,f=this._featureGroup,y=this._nonPointGroup,g=!0;if(!this._map){for(r=0;r<d;r++){if(c=o[r],c instanceof L.LayerGroup){g&&(o=o.slice(),g=!1),this._extractNonGroupLayers(c,o),d=o.length;continue}this._arraySplice(this._needsClustering,c),y.removeLayer(c),this.hasLayer(c)&&this._needsRemoving.push({layer:c,latlng:c._latlng}),this.fire("layerremove",{layer:c})}return this}if(this._unspiderfy){this._unspiderfy();var x=o.slice(),b=d;for(r=0;r<b;r++){if(c=x[r],c instanceof L.LayerGroup){this._extractNonGroupLayers(c,x),b=x.length;continue}this._unspiderfyLayer(c)}}for(r=0;r<d;r++){if(c=o[r],c instanceof L.LayerGroup){g&&(o=o.slice(),g=!1),this._extractNonGroupLayers(c,o),d=o.length;continue}if(!c.__parent){y.removeLayer(c),this.fire("layerremove",{layer:c});continue}this._removeLayer(c,!0,!0),this.fire("layerremove",{layer:c}),f.hasLayer(c)&&(f.removeLayer(c),c.clusterShow&&c.clusterShow())}return this._topClusterLevel._recalculateBounds(),this._refreshClustersIcons(),this._topClusterLevel._recursivelyAddChildrenToMap(null,this._zoom,this._currentShownBounds),this},clearLayers:function(){return this._map||(this._needsClustering=[],this._needsRemoving=[],delete this._gridClusters,delete this._gridUnclustered),this._noanimationUnspiderfy&&this._noanimationUnspiderfy(),this._featureGroup.clearLayers(),this._nonPointGroup.clearLayers(),this.eachLayer(function(o){o.off(this._childMarkerEventHandlers,this),delete o.__parent},this),this._map&&this._generateInitialClusters(),this},getBounds:function(){var o=new L.LatLngBounds;this._topClusterLevel&&o.extend(this._topClusterLevel._bounds);for(var r=this._needsClustering.length-1;r>=0;r--)o.extend(this._needsClustering[r].getLatLng());return o.extend(this._nonPointGroup.getBounds()),o},eachLayer:function(o,r){var c=this._needsClustering.slice(),d=this._needsRemoving,f,y,g;for(this._topClusterLevel&&this._topClusterLevel.getAllChildMarkers(c),y=c.length-1;y>=0;y--){for(f=!0,g=d.length-1;g>=0;g--)if(d[g].layer===c[y]){f=!1;break}f&&o.call(r,c[y])}this._nonPointGroup.eachLayer(o,r)},getLayers:function(){var o=[];return this.eachLayer(function(r){o.push(r)}),o},getLayer:function(o){var r=null;return o=parseInt(o,10),this.eachLayer(function(c){L.stamp(c)===o&&(r=c)}),r},hasLayer:function(o){if(!o)return!1;var r,c=this._needsClustering;for(r=c.length-1;r>=0;r--)if(c[r]===o)return!0;for(c=this._needsRemoving,r=c.length-1;r>=0;r--)if(c[r].layer===o)return!1;return!!(o.__parent&&o.__parent._group===this)||this._nonPointGroup.hasLayer(o)},zoomToShowLayer:function(o,r){var c=this._map;typeof r!="function"&&(r=function(){});var d=function(){(c.hasLayer(o)||c.hasLayer(o.__parent))&&!this._inZoomAnimation&&(this._map.off("moveend",d,this),this.off("animationend",d,this),c.hasLayer(o)?r():o.__parent._icon&&(this.once("spiderfied",r,this),o.__parent.spiderfy()))};o._icon&&this._map.getBounds().contains(o.getLatLng())?r():o.__parent._zoom<Math.round(this._map._zoom)?(this._map.on("moveend",d,this),this._map.panTo(o.getLatLng())):(this._map.on("moveend",d,this),this.on("animationend",d,this),o.__parent.zoomToBounds())},onAdd:function(o){this._map=o;var r,c,d;if(!isFinite(this._map.getMaxZoom()))throw"Map has no maxZoom specified";for(this._featureGroup.addTo(o),this._nonPointGroup.addTo(o),this._gridClusters||this._generateInitialClusters(),this._maxLat=o.options.crs.projection.MAX_LATITUDE,r=0,c=this._needsRemoving.length;r<c;r++)d=this._needsRemoving[r],d.newlatlng=d.layer._latlng,d.layer._latlng=d.latlng;for(r=0,c=this._needsRemoving.length;r<c;r++)d=this._needsRemoving[r],this._removeLayer(d.layer,!0),d.layer._latlng=d.newlatlng;this._needsRemoving=[],this._zoom=Math.round(this._map._zoom),this._currentShownBounds=this._getExpandedVisibleBounds(),this._map.on("zoomend",this._zoomEnd,this),this._map.on("moveend",this._moveEnd,this),this._spiderfierOnAdd&&this._spiderfierOnAdd(),this._bindEvents(),c=this._needsClustering,this._needsClustering=[],this.addLayers(c,!0)},onRemove:function(o){o.off("zoomend",this._zoomEnd,this),o.off("moveend",this._moveEnd,this),this._unbindEvents(),this._map._mapPane.className=this._map._mapPane.className.replace(" leaflet-cluster-anim",""),this._spiderfierOnRemove&&this._spiderfierOnRemove(),delete this._maxLat,this._hideCoverage(),this._featureGroup.remove(),this._nonPointGroup.remove(),this._featureGroup.clearLayers(),this._map=null},getVisibleParent:function(o){for(var r=o;r&&!r._icon;)r=r.__parent;return r||null},_arraySplice:function(o,r){for(var c=o.length-1;c>=0;c--)if(o[c]===r)return o.splice(c,1),!0},_removeFromGridUnclustered:function(o,r){for(var c=this._map,d=this._gridUnclustered,f=Math.floor(this._map.getMinZoom());r>=f&&d[r].removeObject(o,c.project(o.getLatLng(),r));r--);},_childMarkerDragStart:function(o){o.target.__dragStart=o.target._latlng},_childMarkerMoved:function(o){if(!this._ignoreMove&&!o.target.__dragStart){var r=o.target._popup&&o.target._popup.isOpen();this._moveChild(o.target,o.oldLatLng,o.latlng),r&&o.target.openPopup()}},_moveChild:function(o,r,c){o._latlng=r,this.removeLayer(o),o._latlng=c,this.addLayer(o)},_childMarkerDragEnd:function(o){var r=o.target.__dragStart;delete o.target.__dragStart,r&&this._moveChild(o.target,r,o.target._latlng)},_removeLayer:function(o,r,c){var d=this._gridClusters,f=this._gridUnclustered,y=this._featureGroup,g=this._map,x=Math.floor(this._map.getMinZoom());r&&this._removeFromGridUnclustered(o,this._maxZoom);var b=o.__parent,P=b._markers,k;for(this._arraySplice(P,o);b&&(b._childCount--,b._boundsNeedUpdate=!0,!(b._zoom<x));)r&&b._childCount<=1?(k=b._markers[0]===o?b._markers[1]:b._markers[0],d[b._zoom].removeObject(b,g.project(b._cLatLng,b._zoom)),f[b._zoom].addObject(k,g.project(k.getLatLng(),b._zoom)),this._arraySplice(b.__parent._childClusters,b),b.__parent._markers.push(k),k.__parent=b.__parent,b._icon&&(y.removeLayer(b),c||y.addLayer(k))):b._iconNeedsUpdate=!0,b=b.__parent;delete o.__parent},_isOrIsParent:function(o,r){for(;r;){if(o===r)return!0;r=r.parentNode}return!1},fire:function(o,r,c){if(r&&r.layer instanceof L.MarkerCluster){if(r.originalEvent&&this._isOrIsParent(r.layer._icon,r.originalEvent.relatedTarget))return;o="cluster"+o}L.FeatureGroup.prototype.fire.call(this,o,r,c)},listens:function(o,r){return L.FeatureGroup.prototype.listens.call(this,o,r)||L.FeatureGroup.prototype.listens.call(this,"cluster"+o,r)},_defaultIconCreateFunction:function(o){var r=o.getChildCount(),c=" marker-cluster-";return r<10?c+="small":r<100?c+="medium":c+="large",new L.DivIcon({html:"<div><span>"+r+"</span></div>",className:"marker-cluster"+c,iconSize:new L.Point(40,40)})},_bindEvents:function(){var o=this._map,r=this.options.spiderfyOnMaxZoom,c=this.options.showCoverageOnHover,d=this.options.zoomToBoundsOnClick,f=this.options.spiderfyOnEveryZoom;(r||d||f)&&this.on("clusterclick clusterkeypress",this._zoomOrSpiderfy,this),c&&(this.on("clustermouseover",this._showCoverage,this),this.on("clustermouseout",this._hideCoverage,this),o.on("zoomend",this._hideCoverage,this))},_zoomOrSpiderfy:function(o){var r=o.layer,c=r;if(!(o.type==="clusterkeypress"&&o.originalEvent&&o.originalEvent.keyCode!==13)){for(;c._childClusters.length===1;)c=c._childClusters[0];c._zoom===this._maxZoom&&c._childCount===r._childCount&&this.options.spiderfyOnMaxZoom?r.spiderfy():this.options.zoomToBoundsOnClick&&r.zoomToBounds(),this.options.spiderfyOnEveryZoom&&r.spiderfy(),o.originalEvent&&o.originalEvent.keyCode===13&&this._map._container.focus()}},_showCoverage:function(o){var r=this._map;this._inZoomAnimation||(this._shownPolygon&&r.removeLayer(this._shownPolygon),o.layer.getChildCount()>2&&o.layer!==this._spiderfied&&(this._shownPolygon=new L.Polygon(o.layer.getConvexHull(),this.options.polygonOptions),r.addLayer(this._shownPolygon)))},_hideCoverage:function(){this._shownPolygon&&(this._map.removeLayer(this._shownPolygon),this._shownPolygon=null)},_unbindEvents:function(){var o=this.options.spiderfyOnMaxZoom,r=this.options.showCoverageOnHover,c=this.options.zoomToBoundsOnClick,d=this.options.spiderfyOnEveryZoom,f=this._map;(o||c||d)&&this.off("clusterclick clusterkeypress",this._zoomOrSpiderfy,this),r&&(this.off("clustermouseover",this._showCoverage,this),this.off("clustermouseout",this._hideCoverage,this),f.off("zoomend",this._hideCoverage,this))},_zoomEnd:function(){this._map&&(this._mergeSplitClusters(),this._zoom=Math.round(this._map._zoom),this._currentShownBounds=this._getExpandedVisibleBounds())},_moveEnd:function(){if(!this._inZoomAnimation){var o=this._getExpandedVisibleBounds();this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,Math.floor(this._map.getMinZoom()),this._zoom,o),this._topClusterLevel._recursivelyAddChildrenToMap(null,Math.round(this._map._zoom),o),this._currentShownBounds=o}},_generateInitialClusters:function(){var o=Math.ceil(this._map.getMaxZoom()),r=Math.floor(this._map.getMinZoom()),c=this.options.maxClusterRadius,d=c;typeof c!="function"&&(d=function(){return c}),this.options.disableClusteringAtZoom!==null&&(o=this.options.disableClusteringAtZoom-1),this._maxZoom=o,this._gridClusters={},this._gridUnclustered={};for(var f=o;f>=r;f--)this._gridClusters[f]=new L.DistanceGrid(d(f)),this._gridUnclustered[f]=new L.DistanceGrid(d(f));this._topClusterLevel=new this._markerCluster(this,r-1)},_addLayer:function(o,r){var c=this._gridClusters,d=this._gridUnclustered,f=Math.floor(this._map.getMinZoom()),y,g;for(this.options.singleMarkerMode&&this._overrideMarkerIcon(o),o.on(this._childMarkerEventHandlers,this);r>=f;r--){y=this._map.project(o.getLatLng(),r);var x=c[r].getNearObject(y);if(x){x._addChild(o),o.__parent=x;return}if(x=d[r].getNearObject(y),x){var b=x.__parent;b&&this._removeLayer(x,!1);var P=new this._markerCluster(this,r,x,o);c[r].addObject(P,this._map.project(P._cLatLng,r)),x.__parent=P,o.__parent=P;var k=P;for(g=r-1;g>b._zoom;g--)k=new this._markerCluster(this,g,k),c[g].addObject(k,this._map.project(x.getLatLng(),g));b._addChild(k),this._removeFromGridUnclustered(x,r);return}d[r].addObject(o,y)}this._topClusterLevel._addChild(o),o.__parent=this._topClusterLevel},_refreshClustersIcons:function(){this._featureGroup.eachLayer(function(o){o instanceof L.MarkerCluster&&o._iconNeedsUpdate&&o._updateIcon()})},_enqueue:function(o){this._queue.push(o),this._queueTimeout||(this._queueTimeout=setTimeout(L.bind(this._processQueue,this),300))},_processQueue:function(){for(var o=0;o<this._queue.length;o++)this._queue[o].call(this);this._queue.length=0,clearTimeout(this._queueTimeout),this._queueTimeout=null},_mergeSplitClusters:function(){var o=Math.round(this._map._zoom);this._processQueue(),this._zoom<o&&this._currentShownBounds.intersects(this._getExpandedVisibleBounds())?(this._animationStart(),this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,Math.floor(this._map.getMinZoom()),this._zoom,this._getExpandedVisibleBounds()),this._animationZoomIn(this._zoom,o)):this._zoom>o?(this._animationStart(),this._animationZoomOut(this._zoom,o)):this._moveEnd()},_getExpandedVisibleBounds:function(){if(this.options.removeOutsideVisibleBounds){if(L.Browser.mobile)return this._checkBoundsMaxLat(this._map.getBounds())}else return this._mapBoundsInfinite;return this._checkBoundsMaxLat(this._map.getBounds().pad(1))},_checkBoundsMaxLat:function(o){var r=this._maxLat;return r!==void 0&&(o.getNorth()>=r&&(o._northEast.lat=1/0),o.getSouth()<=-r&&(o._southWest.lat=-1/0)),o},_animationAddLayerNonAnimated:function(o,r){if(r===o)this._featureGroup.addLayer(o);else if(r._childCount===2){r._addToMap();var c=r.getAllChildMarkers();this._featureGroup.removeLayer(c[0]),this._featureGroup.removeLayer(c[1])}else r._updateIcon()},_extractNonGroupLayers:function(o,r){var c=o.getLayers(),d=0,f;for(r=r||[];d<c.length;d++){if(f=c[d],f instanceof L.LayerGroup){this._extractNonGroupLayers(f,r);continue}r.push(f)}return r},_overrideMarkerIcon:function(o){var r=o.options.icon=this.options.iconCreateFunction({getChildCount:function(){return 1},getAllChildMarkers:function(){return[o]}});return r}});L.MarkerClusterGroup.include({_mapBoundsInfinite:new L.LatLngBounds(new L.LatLng(-1/0,-1/0),new L.LatLng(1/0,1/0))}),L.MarkerClusterGroup.include({_noAnimation:{_animationStart:function(){},_animationZoomIn:function(o,r){this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,Math.floor(this._map.getMinZoom()),o),this._topClusterLevel._recursivelyAddChildrenToMap(null,r,this._getExpandedVisibleBounds()),this.fire("animationend")},_animationZoomOut:function(o,r){this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,Math.floor(this._map.getMinZoom()),o),this._topClusterLevel._recursivelyAddChildrenToMap(null,r,this._getExpandedVisibleBounds()),this.fire("animationend")},_animationAddLayer:function(o,r){this._animationAddLayerNonAnimated(o,r)}},_withAnimation:{_animationStart:function(){this._map._mapPane.className+=" leaflet-cluster-anim",this._inZoomAnimation++},_animationZoomIn:function(o,r){var c=this._getExpandedVisibleBounds(),d=this._featureGroup,f=Math.floor(this._map.getMinZoom()),y;this._ignoreMove=!0,this._topClusterLevel._recursively(c,o,f,function(g){var x=g._latlng,b=g._markers,P;for(c.contains(x)||(x=null),g._isSingleParent()&&o+1===r?(d.removeLayer(g),g._recursivelyAddChildrenToMap(null,r,c)):(g.clusterHide(),g._recursivelyAddChildrenToMap(x,r,c)),y=b.length-1;y>=0;y--)P=b[y],c.contains(P._latlng)||d.removeLayer(P)}),this._forceLayout(),this._topClusterLevel._recursivelyBecomeVisible(c,r),d.eachLayer(function(g){!(g instanceof L.MarkerCluster)&&g._icon&&g.clusterShow()}),this._topClusterLevel._recursively(c,o,r,function(g){g._recursivelyRestoreChildPositions(r)}),this._ignoreMove=!1,this._enqueue(function(){this._topClusterLevel._recursively(c,o,f,function(g){d.removeLayer(g),g.clusterShow()}),this._animationEnd()})},_animationZoomOut:function(o,r){this._animationZoomOutSingle(this._topClusterLevel,o-1,r),this._topClusterLevel._recursivelyAddChildrenToMap(null,r,this._getExpandedVisibleBounds()),this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,Math.floor(this._map.getMinZoom()),o,this._getExpandedVisibleBounds())},_animationAddLayer:function(o,r){var c=this,d=this._featureGroup;d.addLayer(o),r!==o&&(r._childCount>2?(r._updateIcon(),this._forceLayout(),this._animationStart(),o._setPos(this._map.latLngToLayerPoint(r.getLatLng())),o.clusterHide(),this._enqueue(function(){d.removeLayer(o),o.clusterShow(),c._animationEnd()})):(this._forceLayout(),c._animationStart(),c._animationZoomOutSingle(r,this._map.getMaxZoom(),this._zoom)))}},_animationZoomOutSingle:function(o,r,c){var d=this._getExpandedVisibleBounds(),f=Math.floor(this._map.getMinZoom());o._recursivelyAnimateChildrenInAndAddSelfToMap(d,f,r+1,c);var y=this;this._forceLayout(),o._recursivelyBecomeVisible(d,c),this._enqueue(function(){if(o._childCount===1){var g=o._markers[0];this._ignoreMove=!0,g.setLatLng(g.getLatLng()),this._ignoreMove=!1,g.clusterShow&&g.clusterShow()}else o._recursively(d,c,f,function(x){x._recursivelyRemoveChildrenFromMap(d,f,r+1)});y._animationEnd()})},_animationEnd:function(){this._map&&(this._map._mapPane.className=this._map._mapPane.className.replace(" leaflet-cluster-anim","")),this._inZoomAnimation--,this.fire("animationend")},_forceLayout:function(){L.Util.falseFn(document.body.offsetWidth)}}),L.markerClusterGroup=function(o){return new L.MarkerClusterGroup(o)};var _=L.MarkerCluster=L.Marker.extend({options:L.Icon.prototype.options,initialize:function(o,r,c,d){L.Marker.prototype.initialize.call(this,c?c._cLatLng||c.getLatLng():new L.LatLng(0,0),{icon:this,pane:o.options.clusterPane}),this._group=o,this._zoom=r,this._markers=[],this._childClusters=[],this._childCount=0,this._iconNeedsUpdate=!0,this._boundsNeedUpdate=!0,this._bounds=new L.LatLngBounds,c&&this._addChild(c),d&&this._addChild(d)},getAllChildMarkers:function(o,r){o=o||[];for(var c=this._childClusters.length-1;c>=0;c--)this._childClusters[c].getAllChildMarkers(o,r);for(var d=this._markers.length-1;d>=0;d--)r&&this._markers[d].__dragStart||o.push(this._markers[d]);return o},getChildCount:function(){return this._childCount},zoomToBounds:function(o){for(var r=this._childClusters.slice(),c=this._group._map,d=c.getBoundsZoom(this._bounds),f=this._zoom+1,y=c.getZoom(),g;r.length>0&&d>f;){f++;var x=[];for(g=0;g<r.length;g++)x=x.concat(r[g]._childClusters);r=x}d>f?this._group._map.setView(this._latlng,f):d<=y?this._group._map.setView(this._latlng,y+1):this._group._map.fitBounds(this._bounds,o)},getBounds:function(){var o=new L.LatLngBounds;return o.extend(this._bounds),o},_updateIcon:function(){this._iconNeedsUpdate=!0,this._icon&&this.setIcon(this)},createIcon:function(){return this._iconNeedsUpdate&&(this._iconObj=this._group.options.iconCreateFunction(this),this._iconNeedsUpdate=!1),this._iconObj.createIcon()},createShadow:function(){return this._iconObj.createShadow()},_addChild:function(o,r){this._iconNeedsUpdate=!0,this._boundsNeedUpdate=!0,this._setClusterCenter(o),o instanceof L.MarkerCluster?(r||(this._childClusters.push(o),o.__parent=this),this._childCount+=o._childCount):(r||this._markers.push(o),this._childCount++),this.__parent&&this.__parent._addChild(o,!0)},_setClusterCenter:function(o){this._cLatLng||(this._cLatLng=o._cLatLng||o._latlng)},_resetBounds:function(){var o=this._bounds;o._southWest&&(o._southWest.lat=1/0,o._southWest.lng=1/0),o._northEast&&(o._northEast.lat=-1/0,o._northEast.lng=-1/0)},_recalculateBounds:function(){var o=this._markers,r=this._childClusters,c=0,d=0,f=this._childCount,y,g,x,b;if(f!==0){for(this._resetBounds(),y=0;y<o.length;y++)x=o[y]._latlng,this._bounds.extend(x),c+=x.lat,d+=x.lng;for(y=0;y<r.length;y++)g=r[y],g._boundsNeedUpdate&&g._recalculateBounds(),this._bounds.extend(g._bounds),x=g._wLatLng,b=g._childCount,c+=x.lat*b,d+=x.lng*b;this._latlng=this._wLatLng=new L.LatLng(c/f,d/f),this._boundsNeedUpdate=!1}},_addToMap:function(o){o&&(this._backupLatlng=this._latlng,this.setLatLng(o)),this._group._featureGroup.addLayer(this)},_recursivelyAnimateChildrenIn:function(o,r,c){this._recursively(o,this._group._map.getMinZoom(),c-1,function(d){var f=d._markers,y,g;for(y=f.length-1;y>=0;y--)g=f[y],g._icon&&(g._setPos(r),g.clusterHide())},function(d){var f=d._childClusters,y,g;for(y=f.length-1;y>=0;y--)g=f[y],g._icon&&(g._setPos(r),g.clusterHide())})},_recursivelyAnimateChildrenInAndAddSelfToMap:function(o,r,c,d){this._recursively(o,d,r,function(f){f._recursivelyAnimateChildrenIn(o,f._group._map.latLngToLayerPoint(f.getLatLng()).round(),c),f._isSingleParent()&&c-1===d?(f.clusterShow(),f._recursivelyRemoveChildrenFromMap(o,r,c)):f.clusterHide(),f._addToMap()})},_recursivelyBecomeVisible:function(o,r){this._recursively(o,this._group._map.getMinZoom(),r,null,function(c){c.clusterShow()})},_recursivelyAddChildrenToMap:function(o,r,c){this._recursively(c,this._group._map.getMinZoom()-1,r,function(d){if(r!==d._zoom)for(var f=d._markers.length-1;f>=0;f--){var y=d._markers[f];c.contains(y._latlng)&&(o&&(y._backupLatlng=y.getLatLng(),y.setLatLng(o),y.clusterHide&&y.clusterHide()),d._group._featureGroup.addLayer(y))}},function(d){d._addToMap(o)})},_recursivelyRestoreChildPositions:function(o){for(var r=this._markers.length-1;r>=0;r--){var c=this._markers[r];c._backupLatlng&&(c.setLatLng(c._backupLatlng),delete c._backupLatlng)}if(o-1===this._zoom)for(var d=this._childClusters.length-1;d>=0;d--)this._childClusters[d]._restorePosition();else for(var f=this._childClusters.length-1;f>=0;f--)this._childClusters[f]._recursivelyRestoreChildPositions(o)},_restorePosition:function(){this._backupLatlng&&(this.setLatLng(this._backupLatlng),delete this._backupLatlng)},_recursivelyRemoveChildrenFromMap:function(o,r,c,d){var f,y;this._recursively(o,r-1,c-1,function(g){for(y=g._markers.length-1;y>=0;y--)f=g._markers[y],(!d||!d.contains(f._latlng))&&(g._group._featureGroup.removeLayer(f),f.clusterShow&&f.clusterShow())},function(g){for(y=g._childClusters.length-1;y>=0;y--)f=g._childClusters[y],(!d||!d.contains(f._latlng))&&(g._group._featureGroup.removeLayer(f),f.clusterShow&&f.clusterShow())})},_recursively:function(o,r,c,d,f){var y=this._childClusters,g=this._zoom,x,b;if(r<=g&&(d&&d(this),f&&g===c&&f(this)),g<r||g<c)for(x=y.length-1;x>=0;x--)b=y[x],b._boundsNeedUpdate&&b._recalculateBounds(),o.intersects(b._bounds)&&b._recursively(o,r,c,d,f)},_isSingleParent:function(){return this._childClusters.length>0&&this._childClusters[0]._childCount===this._childCount}});L.Marker.include({clusterHide:function(){var o=this.options.opacity;return this.setOpacity(0),this.options.opacity=o,this},clusterShow:function(){return this.setOpacity(this.options.opacity)}}),L.DistanceGrid=function(o){this._cellSize=o,this._sqCellSize=o*o,this._grid={},this._objectPoint={}},L.DistanceGrid.prototype={addObject:function(o,r){var c=this._getCoord(r.x),d=this._getCoord(r.y),f=this._grid,y=f[d]=f[d]||{},g=y[c]=y[c]||[],x=L.Util.stamp(o);this._objectPoint[x]=r,g.push(o)},updateObject:function(o,r){this.removeObject(o),this.addObject(o,r)},removeObject:function(o,r){var c=this._getCoord(r.x),d=this._getCoord(r.y),f=this._grid,y=f[d]=f[d]||{},g=y[c]=y[c]||[],x,b;for(delete this._objectPoint[L.Util.stamp(o)],x=0,b=g.length;x<b;x++)if(g[x]===o)return g.splice(x,1),b===1&&delete y[c],!0},eachObject:function(o,r){var c,d,f,y,g,x,b,P=this._grid;for(c in P){g=P[c];for(d in g)for(x=g[d],f=0,y=x.length;f<y;f++)b=o.call(r,x[f]),b&&(f--,y--)}},getNearObject:function(o){var r=this._getCoord(o.x),c=this._getCoord(o.y),d,f,y,g,x,b,P,k,B=this._objectPoint,S=this._sqCellSize,E=null;for(d=c-1;d<=c+1;d++)if(g=this._grid[d],g){for(f=r-1;f<=r+1;f++)if(x=g[f],x)for(y=0,b=x.length;y<b;y++)P=x[y],k=this._sqDist(B[L.Util.stamp(P)],o),(k<S||k<=S&&E===null)&&(S=k,E=P)}return E},_getCoord:function(o){var r=Math.floor(o/this._cellSize);return isFinite(r)?r:o},_sqDist:function(o,r){var c=r.x-o.x,d=r.y-o.y;return c*c+d*d}},(function(){L.QuickHull={getDistant:function(o,r){var c=r[1].lat-r[0].lat,d=r[0].lng-r[1].lng;return d*(o.lat-r[0].lat)+c*(o.lng-r[0].lng)},findMostDistantPointFromBaseLine:function(o,r){var c=0,d=null,f=[],y,g,x;for(y=r.length-1;y>=0;y--){if(g=r[y],x=this.getDistant(g,o),x>0)f.push(g);else continue;x>c&&(c=x,d=g)}return{maxPoint:d,newPoints:f}},buildConvexHull:function(o,r){var c=[],d=this.findMostDistantPointFromBaseLine(o,r);return d.maxPoint?(c=c.concat(this.buildConvexHull([o[0],d.maxPoint],d.newPoints)),c=c.concat(this.buildConvexHull([d.maxPoint,o[1]],d.newPoints)),c):[o[0]]},getConvexHull:function(o){var r=!1,c=!1,d=!1,f=!1,y=null,g=null,x=null,b=null,P=null,k=null,B;for(B=o.length-1;B>=0;B--){var S=o[B];(r===!1||S.lat>r)&&(y=S,r=S.lat),(c===!1||S.lat<c)&&(g=S,c=S.lat),(d===!1||S.lng>d)&&(x=S,d=S.lng),(f===!1||S.lng<f)&&(b=S,f=S.lng)}c!==r?(k=g,P=y):(k=b,P=x);var E=[].concat(this.buildConvexHull([k,P],o),this.buildConvexHull([P,k],o));return E}}})(),L.MarkerCluster.include({getConvexHull:function(){var o=this.getAllChildMarkers(),r=[],c,d;for(d=o.length-1;d>=0;d--)c=o[d].getLatLng(),r.push(c);return L.QuickHull.getConvexHull(r)}}),L.MarkerCluster.include({_2PI:Math.PI*2,_circleFootSeparation:25,_circleStartAngle:0,_spiralFootSeparation:28,_spiralLengthStart:11,_spiralLengthFactor:5,_circleSpiralSwitchover:9,spiderfy:function(){if(!(this._group._spiderfied===this||this._group._inZoomAnimation)){var o=this.getAllChildMarkers(null,!0),r=this._group,c=r._map,d=c.latLngToLayerPoint(this._latlng),f;this._group._unspiderfy(),this._group._spiderfied=this,this._group.options.spiderfyShapePositions?f=this._group.options.spiderfyShapePositions(o.length,d):o.length>=this._circleSpiralSwitchover?f=this._generatePointsSpiral(o.length,d):(d.y+=10,f=this._generatePointsCircle(o.length,d)),this._animationSpiderfy(o,f)}},unspiderfy:function(o){this._group._inZoomAnimation||(this._animationUnspiderfy(o),this._group._spiderfied=null)},_generatePointsCircle:function(o,r){var c=this._group.options.spiderfyDistanceMultiplier*this._circleFootSeparation*(2+o),d=c/this._2PI,f=this._2PI/o,y=[],g,x;for(d=Math.max(d,35),y.length=o,g=0;g<o;g++)x=this._circleStartAngle+g*f,y[g]=new L.Point(r.x+d*Math.cos(x),r.y+d*Math.sin(x))._round();return y},_generatePointsSpiral:function(o,r){var c=this._group.options.spiderfyDistanceMultiplier,d=c*this._spiralLengthStart,f=c*this._spiralFootSeparation,y=c*this._spiralLengthFactor*this._2PI,g=0,x=[],b;for(x.length=o,b=o;b>=0;b--)b<o&&(x[b]=new L.Point(r.x+d*Math.cos(g),r.y+d*Math.sin(g))._round()),g+=f/d+b*5e-4,d+=y/g;return x},_noanimationUnspiderfy:function(){var o=this._group,r=o._map,c=o._featureGroup,d=this.getAllChildMarkers(null,!0),f,y;for(o._ignoreMove=!0,this.setOpacity(1),y=d.length-1;y>=0;y--)f=d[y],c.removeLayer(f),f._preSpiderfyLatlng&&(f.setLatLng(f._preSpiderfyLatlng),delete f._preSpiderfyLatlng),f.setZIndexOffset&&f.setZIndexOffset(0),f._spiderLeg&&(r.removeLayer(f._spiderLeg),delete f._spiderLeg);o.fire("unspiderfied",{cluster:this,markers:d}),o._ignoreMove=!1,o._spiderfied=null}}),L.MarkerClusterNonAnimated=L.MarkerCluster.extend({_animationSpiderfy:function(o,r){var c=this._group,d=c._map,f=c._featureGroup,y=this._group.options.spiderLegPolylineOptions,g,x,b,P;for(c._ignoreMove=!0,g=0;g<o.length;g++)P=d.layerPointToLatLng(r[g]),x=o[g],b=new L.Polyline([this._latlng,P],y),d.addLayer(b),x._spiderLeg=b,x._preSpiderfyLatlng=x._latlng,x.setLatLng(P),x.setZIndexOffset&&x.setZIndexOffset(1e6),f.addLayer(x);this.setOpacity(.3),c._ignoreMove=!1,c.fire("spiderfied",{cluster:this,markers:o})},_animationUnspiderfy:function(){this._noanimationUnspiderfy()}}),L.MarkerCluster.include({_animationSpiderfy:function(o,r){var c=this,d=this._group,f=d._map,y=d._featureGroup,g=this._latlng,x=f.latLngToLayerPoint(g),b=L.Path.SVG,P=L.extend({},this._group.options.spiderLegPolylineOptions),k=P.opacity,B,S,E,Z,G,j;for(k===void 0&&(k=L.MarkerClusterGroup.prototype.options.spiderLegPolylineOptions.opacity),b?(P.opacity=0,P.className=(P.className||"")+" leaflet-cluster-spider-leg"):P.opacity=k,d._ignoreMove=!0,B=0;B<o.length;B++)S=o[B],j=f.layerPointToLatLng(r[B]),E=new L.Polyline([g,j],P),f.addLayer(E),S._spiderLeg=E,b&&(Z=E._path,G=Z.getTotalLength()+.1,Z.style.strokeDasharray=G,Z.style.strokeDashoffset=G),S.setZIndexOffset&&S.setZIndexOffset(1e6),S.clusterHide&&S.clusterHide(),y.addLayer(S),S._setPos&&S._setPos(x);for(d._forceLayout(),d._animationStart(),B=o.length-1;B>=0;B--)j=f.layerPointToLatLng(r[B]),S=o[B],S._preSpiderfyLatlng=S._latlng,S.setLatLng(j),S.clusterShow&&S.clusterShow(),b&&(E=S._spiderLeg,Z=E._path,Z.style.strokeDashoffset=0,E.setStyle({opacity:k}));this.setOpacity(.3),d._ignoreMove=!1,setTimeout(function(){d._animationEnd(),d.fire("spiderfied",{cluster:c,markers:o})},200)},_animationUnspiderfy:function(o){var r=this,c=this._group,d=c._map,f=c._featureGroup,y=o?d._latLngToNewLayerPoint(this._latlng,o.zoom,o.center):d.latLngToLayerPoint(this._latlng),g=this.getAllChildMarkers(null,!0),x=L.Path.SVG,b,P,k,B,S,E;for(c._ignoreMove=!0,c._animationStart(),this.setOpacity(1),P=g.length-1;P>=0;P--)b=g[P],b._preSpiderfyLatlng&&(b.closePopup(),b.setLatLng(b._preSpiderfyLatlng),delete b._preSpiderfyLatlng,E=!0,b._setPos&&(b._setPos(y),E=!1),b.clusterHide&&(b.clusterHide(),E=!1),E&&f.removeLayer(b),x&&(k=b._spiderLeg,B=k._path,S=B.getTotalLength()+.1,B.style.strokeDashoffset=S,k.setStyle({opacity:0})));c._ignoreMove=!1,setTimeout(function(){var Z=0;for(P=g.length-1;P>=0;P--)b=g[P],b._spiderLeg&&Z++;for(P=g.length-1;P>=0;P--)b=g[P],b._spiderLeg&&(b.clusterShow&&b.clusterShow(),b.setZIndexOffset&&b.setZIndexOffset(0),Z>1&&f.removeLayer(b),d.removeLayer(b._spiderLeg),delete b._spiderLeg);c._animationEnd(),c.fire("unspiderfied",{cluster:r,markers:g})},200)}}),L.MarkerClusterGroup.include({_spiderfied:null,unspiderfy:function(){this._unspiderfy.apply(this,arguments)},_spiderfierOnAdd:function(){this._map.on("click",this._unspiderfyWrapper,this),this._map.options.zoomAnimation&&this._map.on("zoomstart",this._unspiderfyZoomStart,this),this._map.on("zoomend",this._noanimationUnspiderfy,this),L.Browser.touch||this._map.getRenderer(this)},_spiderfierOnRemove:function(){this._map.off("click",this._unspiderfyWrapper,this),this._map.off("zoomstart",this._unspiderfyZoomStart,this),this._map.off("zoomanim",this._unspiderfyZoomAnim,this),this._map.off("zoomend",this._noanimationUnspiderfy,this),this._noanimationUnspiderfy()},_unspiderfyZoomStart:function(){this._map&&this._map.on("zoomanim",this._unspiderfyZoomAnim,this)},_unspiderfyZoomAnim:function(o){L.DomUtil.hasClass(this._map._mapPane,"leaflet-touching")||(this._map.off("zoomanim",this._unspiderfyZoomAnim,this),this._unspiderfy(o))},_unspiderfyWrapper:function(){this._unspiderfy()},_unspiderfy:function(o){this._spiderfied&&this._spiderfied.unspiderfy(o)},_noanimationUnspiderfy:function(){this._spiderfied&&this._spiderfied._noanimationUnspiderfy()},_unspiderfyLayer:function(o){o._spiderLeg&&(this._featureGroup.removeLayer(o),o.clusterShow&&o.clusterShow(),o.setZIndexOffset&&o.setZIndexOffset(0),this._map.removeLayer(o._spiderLeg),delete o._spiderLeg)}}),L.MarkerClusterGroup.include({refreshClusters:function(o){return o?o instanceof L.MarkerClusterGroup?o=o._topClusterLevel.getAllChildMarkers():o instanceof L.LayerGroup?o=o._layers:o instanceof L.MarkerCluster?o=o.getAllChildMarkers():o instanceof L.Marker&&(o=[o]):o=this._topClusterLevel.getAllChildMarkers(),this._flagParentsIconsNeedUpdate(o),this._refreshClustersIcons(),this.options.singleMarkerMode&&this._refreshSingleMarkerModeMarkers(o),this},_flagParentsIconsNeedUpdate:function(o){var r,c;for(r in o)for(c=o[r].__parent;c;)c._iconNeedsUpdate=!0,c=c.__parent},_refreshSingleMarkerModeMarkers:function(o){var r,c;for(r in o)c=o[r],this.hasLayer(c)&&c.setIcon(this._overrideMarkerIcon(c))}}),L.Marker.include({refreshIconOptions:function(o,r){var c=this.options.icon;return L.setOptions(c,o),this.setIcon(c),r&&this.__parent&&this.__parent._group.refreshClusters(this),this}}),a.MarkerClusterGroup=p,a.MarkerCluster=_,Object.defineProperty(a,"__esModule",{value:!0})})})(be,be.exports)),be.exports}Js();function Ue(u,h){const a=document.getElementById(u);if(a){if(h==="—"||h===void 0||h===null){a.textContent="—";return}a.textContent=Number(h).toLocaleString("id-ID")}}function ee(u,h){const a=document.getElementById(u);if(!a)return;const p={loading:"#f5a623",done:"#00c9a7",error:"#ff4d4d"};a.style.background=p[h]??"#4d6a94"}function Kn(u){const h=parseInt(u);return isNaN(h)?"#ffffff":`hsl(${Math.max(0,Math.min(280,(h-1984)*7))}, 100%, 55%)`}function Jn(u){return Number(u).toFixed(2)}const Bi="./tiles",Xn={good:{dashArray:null,weight:1,opacity:.9},"insufficient data":{dashArray:"8 5",weight:.5,opacity:.7},"unstable data":{dashArray:"2 5",weight:.5,opacity:.55}},zi=u=>Xn[u]??Xn.good;class Xs{constructor(h,a={}){this.map=h,this.opts={yearMin:a.yearMin??1985,yearMax:a.yearMax??2025},this._ensurePanes(),this._canvas=lt.canvas({padding:.5,tolerance:2}),this.shorelinesGroup=lt.layerGroup().addTo(h),this.clusterGroup=this._buildClusterGroup(),this.ratesGroup=this.clusterGroup,this._manifest=null,this._loadedTiles=new Set,this._pendingTiles=new Set,this._shorelineLayers=[],this._rateLayers=[],this._filter={yearMin:a.yearMin??1985,yearMax:a.yearMax??2025,showAbrasi:!0,showAkresi:!0,showStabil:!0,minRate:0,certGood:!0,certInsufficient:!0,certUnstable:!0},this._isFlexZoomActive=!1}async init(){this._manifest=await this._fetchManifest(),this._manifest&&(this.map.on("moveend",()=>{clearTimeout(this._moveTimer),this._moveTimer=setTimeout(()=>{this._updateVisibleTiles(),this._calculateViewportStats()},150)}),this.map.on("zoomend",()=>{clearTimeout(this._zoomTimer),this._zoomTimer=setTimeout(()=>{this._applyFilterToLoaded(),this._calculateViewportStats()},100)}),await this._updateVisibleTiles(),this._calculateViewportStats())}applyFilter(h){this._filter={...this._filter,...h},this._scheduleApplyFilter()}_scheduleApplyFilter(){clearTimeout(this._applyFilterTimer),this._applyFilterTimer=setTimeout(()=>this._applyFilterToLoaded(),40)}setShorelinesOpacity(h){this._shorelineLayers.forEach(({layer:a})=>{a.setStyle?.({opacity:h})})}setShorelinesOpacity(h){this._shorelineLayers.forEach(({layer:a})=>{a.setStyle?.({opacity:h})})}setFlexZoom(h){this._isFlexZoomActive=h,this._applyFilterToLoaded()}async _updateVisibleTiles(){if(!this._manifest||this.map.getZoom()<6)return;const h=this.map.getBounds(),a=this._manifest.tiles.filter(_=>{if(this._loadedTiles.has(_)||this._pendingTiles.has(_))return!1;const o=this._manifest.tile_bounds[String(_)];if(!o)return!1;const[r,c,d,f]=o;return h.getWest()<=d&&h.getEast()>=r&&h.getSouth()<=f&&h.getNorth()>=c});if(!a.length)return;ee("status-shorelines","loading"),ee("status-rates","loading"),a.forEach(_=>this._pendingTiles.add(_));const p=[];for(let _=0;_<a.length;_+=2)p.push(a.slice(_,_+2));for(const _ of p)await Promise.allSettled(_.map(o=>this._loadOneTile(o)))}async _loadOneTile(h){const a=String(h);try{const[p,_]=await Promise.allSettled([fetch(`${Bi}/shorelines/shorelines_tile_${a}.geojson`),fetch(`${Bi}/rates/rates_tile_${a}.geojson`)]);let o=null,r=null;p.status==="fulfilled"&&p.value.ok&&(o=await p.value.json(),this._renderShorelines(o)),_.status==="fulfilled"&&_.value.ok&&(r=await _.value.json(),this._renderRates(r)),this.onTileLoaded&&this.onTileLoaded(o,r),this._loadedTiles.add(h),ee("status-shorelines","done"),ee("status-rates","done"),this._calculateViewportStats()}catch(p){console.error(`Tile ${h} gagal:`,p),ee("status-shorelines","error")}finally{this._pendingTiles.delete(h)}}async _fetchManifest(){try{const h=await fetch(`${Bi}/shorelines/shorelines_manifest.json`);if(!h.ok)throw new Error(`HTTP ${h.status}`);const a=await h.json();a.tiles=a.tiles.map(String);const p={};return Object.entries(a.tile_bounds??{}).forEach(([_,o])=>{p[String(_)]=o}),a.tile_bounds=p,a}catch(h){return console.error("Manifest gagal:",h),ee("status-shorelines","error"),null}}_renderShorelines(h){const a=this.map.getZoom();lt.geoJSON(h,{pane:"lapisGaris",renderer:this._canvas,style:p=>{const _=p.properties?.year??null,o=p.properties?.certainty??"good",r=zi(o),c=a>=16,d=parseInt(_)===parseInt(this._filter.yearMax),f=this._visibleYear(_)&&(this._isFlexZoomActive||c||d);return{color:Kn(_),weight:r.weight,opacity:f?r.opacity:0,dashArray:r.dashArray}},onEachFeature:(p,_)=>{const o=p.properties?.year??"-",r=p.properties?.certainty??"good",c=Kn(o),d=zi(r),f={good:"✔ Good","insufficient data":"⚠ Insufficient Data","unstable data":"✘ Unstable Data"}[r]??r;this._shorelineLayers.push({layer:_,year:o,certainty:r}),this._visibleYear(o)&&(this._isFlexZoomActive||this.map.getZoom()>=16||parseInt(o)===parseInt(this._filter.yearMax))&&_.bindTooltip(`<div class="gis-tooltip">
             <span class="tooltip-label">Tahun · ${f}</span>
             <span class="tooltip-value">${o}</span>
           </div>`,{sticky:!0,direction:"auto",className:"gis-tooltip-wrap"}),_.on("mouseover",function(){this.options.opacity!==0&&(this.setStyle({weight:d.weight+2,color:"#ffffff"}),this.bringToFront())}),_.on("mouseout",function(){this.setStyle({weight:d.weight,color:c})}),_.bindPopup(`<div class="gis-popup">
             <div class="popup-header" style="border-color:${c}">
               <span class="popup-icon">🌊</span>
               <span class="popup-title">Garis Pantai</span>
             </div>
             <table class="popup-table">
               <tr><td class="pt-label">Tahun</td>
                   <td class="pt-val">${o}</td></tr>
               <tr><td class="pt-label">Kualitas</td>
                   <td class="pt-val">${f}</td></tr>
             </table>
           </div>`)}}).addTo(this.shorelinesGroup)}_renderRates(h){const a=[];lt.geoJSON(h,{pointToLayer:(p,_)=>{const o=p.properties?.rate_time??0,r=o<0,c=Math.abs(o)<.1;let d="#8ba3c7";c||(d=r?"#ff4d4d":"#00c9a7");const f=lt.circleMarker(_,{radius:3,fillColor:d,color:"rgba(255,255,255,0.7)",weight:.5,opacity:1,fillOpacity:1,_isErosi:r&&!c,_isAkresi:!r&&!c,_isStabil:c,_rate:o});return this._rateLayers.push({layer:f,rate:o,isErosi:r&&!c,isAkresi:!r&&!c,isStabil:c}),this._visibleRate(o,r&&!c,!r&&!c,c)||f.setStyle({opacity:0,fillOpacity:0}),a.push(f),f},onEachFeature:(p,_)=>{const o=p.properties?.rate_time??0,r=o<0,c=r?"#ff4d4d":"#00c9a7",d=r?"Abrasi":"Akresi";_.bindTooltip(`<div class="gis-tooltip">
             <span class="tooltip-label">${d}</span>
             <span class="tooltip-value" style="color:${c}">${Jn(o)} m/th</span>
           </div>`,{sticky:!0,direction:"auto",className:"gis-tooltip-wrap"}),_.bindPopup(`<div class="gis-popup">
             <div class="popup-header" style="border-color:${c}">
               <span class="popup-icon">${r?"⚠️":"✅"}</span>
               <span class="popup-title">Titik Perubahan</span>
               <span class="popup-badge ${r?"badge-erosi":"badge-akresi"}">${d}</span>
             </div>
             <table class="popup-table">
               <tr><td class="pt-label">Status</td><td class="pt-val">${d}</td></tr>
               <tr><td class="pt-label">Laju</td><td class="pt-val" style="color:${c};font-weight:600;">${Jn(o)} m/th</td></tr>
             </table>
           </div>`)}}),this.clusterGroup.addLayers(a)}_buildClusterGroup(){const h=lt.markerClusterGroup({maxClusterRadius:a=>a<=5?100:a<=7?80:a<=9?60:a<=11?45:a<=15?35:10,disableClusteringAtZoom:16,spiderfyOnMaxZoom:!0,showCoverageOnHover:!1,chunkedLoading:!0,animate:!0,iconCreateFunction:a=>{const p=a.getAllChildMarkers(),_=p.length,o=p.filter(y=>y.options._isErosi).length/_;let r,c;o>.6?(r="#ff4d4d",c="#cc2222"):o<.4?(r="#00c9a7",c="#009980"):(r="#f5a623",c="#c47a00");const d=_<10?20:_<50?24:_<200?28:32,f=d<30?10:11;return lt.divIcon({html:`<div style="
            width:${d}px;
            height:${d}px;
            border-radius:50%;
            background:${r};
            border: 1.5px solid ${c}; /* Border ditipiskan */
            display:flex;
            align-items:center;
            justify-content:center;
            font-size:${f}px;
            font-weight:700;
            color:#fff;
            font-family:'DM Sans',sans-serif;
            box-shadow:0 2px 5px rgba(0,0,0,0.3);
            opacity: 0.85; /* 3. TRANSPARANSI ditambahkan agar garis bawah terlihat */
            ">${_}</div>`,className:"",iconSize:[d,d],iconAnchor:[d/2,d/2]})}});return h.addTo(this.map),h}_visibleYear(h){const a=parseInt(h);return isNaN(a)?!0:a>=this._filter.yearMin&&a<=this._filter.yearMax}_visibleRate(h,a,p,_){return!(a&&!this._filter.showAbrasi||p&&!this._filter.showAkresi||_&&!this._filter.showStabil||Math.abs(h)<(this._filter.minRate??0))}_visibleCertainty(h){const a=(h??"good").toLowerCase();return!(a==="good"&&!this._filter.certGood||a==="insufficient data"&&!this._filter.certInsufficient||a==="unstable data"&&!this._filter.certUnstable)}_applyFilterToLoaded(){const a=this.map.getZoom()>=16;this._shorelineLayers.forEach(({layer:p,year:_,certainty:o})=>{if(!p.setStyle)return;const r=zi(o),c=parseInt(_)===parseInt(this._filter.yearMax),d=this._visibleYear(_)&&this._visibleCertainty(o)&&(this._isFlexZoomActive||a||c);if(p._lastVisible!==d){if(p._lastVisible=d,p.options.interactive=d,!d)p.closeTooltip(),p.unbindTooltip();else if(!p.getTooltip()){const f={good:"✔ Good","insufficient data":"⚠ Insufficient Data","unstable data":"✘ Unstable Data"}[o]??o;p.bindTooltip(`<div class="gis-tooltip">
             <span class="tooltip-label">Tahun · ${f}</span>
             <span class="tooltip-value">${_}</span>
           </div>`,{sticky:!0,direction:"auto",className:"gis-tooltip-wrap"})}p.setStyle({opacity:d?r.opacity:0,dashArray:r.dashArray,weight:r.weight})}}),this._rateLayers.forEach(({layer:p,rate:_,isErosi:o,isAkresi:r,isStabil:c})=>{const d=this._visibleRate(_,o,r,c),f=this.clusterGroup.hasLayer(p);d&&!f?this.clusterGroup.addLayer(p):!d&&f&&this.clusterGroup.removeLayer(p)}),this._calculateViewportStats()}_calculateViewportStats(){clearTimeout(this._statsTimer),this._statsTimer=setTimeout(()=>this._doCalculateStats(),200)}_doCalculateStats(){const h=this.map.getZoom();if(h<14){Ue("stat-erosi-count","—"),Ue("stat-akresi-count","—");const f=document.getElementById("stat-avg-rate");f&&(f.textContent="—",f.style.color="inherit");return}const a=this.map.getBounds();let p=0,_=0,o=0,r=0;this._shorelineLayers.forEach(({layer:f,year:y})=>{const g=parseInt(y)===parseInt(this._filter.yearMax);if(this._visibleYear(y)&&(this._isFlexZoomActive||h>=16||g)&&f.getBounds&&a.intersects(f.getBounds())){const b=f.getLatLngs();Array.isArray(b[0])}}),this._rateLayers.forEach(({layer:f,rate:y,isErosi:g,isAkresi:x,isStabil:b})=>{this._visibleRate(y,g,x,b)&&a.contains(f.getLatLng())&&(p+=y,_++,g&&o++,x&&r++)}),Ue("stat-erosi-count",o),Ue("stat-akresi-count",r);const c=_>0?(p/_).toFixed(2):"—",d=document.getElementById("stat-avg-rate");d&&(d.textContent=c,d.style.color=c!=="—"?parseFloat(c)<0?"#ff4d4d":"#00c9a7":"inherit")}_ensurePanes(){this.map.getPane("lapisGaris")||(this.map.createPane("lapisGaris"),this.map.getPane("lapisGaris").style.zIndex=400),this.map.getPane("lapisTitik")||(this.map.createPane("lapisTitik"),this.map.getPane("lapisTitik").style.zIndex=600)}}function Ye(u,h="#1a1a2e"){const a=document.createElement("div");a.textContent=u,a.style.cssText=`
    position:fixed;bottom:20px;right:20px;
    background:${h};color:#fff;
    padding:8px 14px;border-radius:8px;
    font-size:13px;z-index:9999;
    font-family:'DM Sans',sans-serif;
    opacity:0;transition:opacity .2s;
  `,document.body.appendChild(a),setTimeout(()=>a.style.opacity="1",10),setTimeout(()=>{a.style.opacity="0",setTimeout(()=>a.remove(),200)},2500)}const Ke=[];function Qs(){return"upload_"+Date.now()+"_"+Math.random().toString(36).slice(2,8)}function tr(u,h){const a=Ke.findIndex(_=>_.id===u);if(a===-1)return;const p=Ke[a];h.removeLayer(p.layer),p.controlRow?.remove(),Ke.splice(a,1),Ye(`🗑 ${p.filename} dihapus`,"#ff6b6b")}function er(u,h,a,p){const o=document.getElementById("panel-layer-data")?.querySelector(".panel-body");if(!o)return;const r=document.createElement("div");r.className="layer-row",r.setAttribute("data-layer-id",u),r.innerHTML=`
    <div style="display:flex;align-items:center;gap:9px;flex:1;">
      <div class="layer-status" style="background:#00c9a7;"></div>
      <div class="layer-swatch" style="background:#ffaa33;"></div>
      <span class="layer-name" title="${h}">${h}</span>
    </div>
    <div style="display:flex;align-items:center;gap:8px;">
      <label class="tog">
        <input type="checkbox" checked>
        <span class="tog-track"></span>
      </label>
      <button class="btn-delete-upload" title="Hapus layer"
        style="background:none;border:none;cursor:pointer;color:var(--text-3);padding:4px;border-radius:4px;">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="3 6 5 6 21 6"/>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
        </svg>
      </button>
    </div>`,r.querySelector("input").addEventListener("change",c=>{c.target.checked?p.addLayer(a):p.removeLayer(a)}),r.querySelector(".btn-delete-upload").addEventListener("click",()=>tr(u,p)),o.appendChild(r),Ke.push({id:u,layer:a,controlRow:r,filename:h})}function ir(u,h){return new Promise((a,p)=>{const _=new FileReader;_.onload=o=>{try{const r=JSON.parse(o.target.result);if(!["FeatureCollection","Feature"].includes(r.type))throw new Error("Bukan FeatureCollection atau Feature");const c=lt.geoJSON(r,{style:{color:"#ffaa33",weight:3,opacity:.8},onEachFeature:(f,y)=>{const g=f.properties??{},x=Object.entries(g),b=x.length===0?"Tidak ada atribut":`<div style="font-family:sans-serif;padding:5px;color:#fff;">
                   <h4 style="margin:0 0 5px;color:#ffaa33;border-bottom:1px solid #444;padding-bottom:3px;">
                     Informasi Data
                   </h4>
                   ${x.map(([P,k])=>`<strong style="color:#fff;">${P}:</strong> ${k}`).join("<br>")}
                 </div>`;y.bindPopup(b),y.on({mouseover(P){this.setStyle({weight:5,color:"#fff",fillOpacity:.5}),this.bringToFront()},mouseout(P){this.setStyle({weight:3,color:"#ffaa33",fillOpacity:.2})}})}}).addTo(h);let d=u.name.replace(/\.(geojson|json)$/i,"");d.length>25&&(d=d.slice(0,22)+"..."),er(Qs(),d,c,h),a(d)}catch(r){p(r)}},_.onerror=()=>p(new Error("Gagal membaca file")),_.readAsText(u)})}function nr(u){const h=document.getElementById("file-upload"),a=[...document.querySelectorAll(".btn-solid")].find(p=>p.textContent.includes("Buka Data"));h&&(h.setAttribute("multiple","multiple"),a?.addEventListener("click",()=>h.click()),h.addEventListener("change",async p=>{const _=[...p.target.files];if(!_.length)return;let o=0;for(const r of _)if(/\.(geojson|json)$/i.test(r.name))try{await ir(r,u),o++}catch(c){Ye(`❌ ${r.name}: ${c.message}`,"#ff4d4d")}else Ye(`⚠️ ${r.name} bukan .geojson/.json`,"#f5a623");o>0&&Ye(`✅ ${o} file berhasil dimuat`,"#00c9a7"),h.value=""}))}const Wt={satellite:{label:"Esri Satellite",layer:lt.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{maxZoom:19,maxNativeZoom:17,attribution:"© Esri World Imagery"})},google_sat:{label:"Google Satellite",layer:lt.tileLayer("https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",{maxZoom:20,attribution:"© Google Maps"})},google_hybrid:{label:"Google Hybrid",layer:lt.tileLayer("https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}",{maxZoom:20,attribution:"© Google Maps"})},osm:{label:"OpenStreetMap",layer:lt.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:"© OpenStreetMap contributors"})}},xe=lt.tileLayer("https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}{r}.png",{maxZoom:20,attribution:"© CartoDB",opacity:.55});let oe="google_sat",ao=null,We=0;function or(u){ao=u,Wt[oe].layer.addTo(u),xe.addTo(u),Wt.satellite.layer.on("tileerror",()=>{We++,We>=3&&oe==="satellite"&&(console.warn("Esri tile error — switching to Google Satellite"),lo(u,"google_sat"),sr("google_sat"),We=0)}),Wt.satellite.layer.on("tileload",()=>{We=0}),rr(),co(oe)}function lo(u,h){Object.values(Wt).forEach(p=>{u.hasLayer(p.layer)&&u.removeLayer(p.layer)}),Wt[h].layer.addTo(u),oe=h;const a=["satellite","google_sat","google_hybrid"].includes(h);a&&!u.hasLayer(xe)&&u.addLayer(xe),!a&&u.hasLayer(xe)&&u.removeLayer(xe),co(h)}function sr(u){const h=document.querySelector(`input[name="basemap"][value="${u}"]`);h&&(h.checked=!0)}function co(u){const h=document.getElementById("chip-basemap");h&&(h.textContent=`Basemap: ${Wt[u]?.label??u}`)}function rr(){const h=document.querySelector('input[name="basemap"]')?.closest(".panel-body");h&&(h.innerHTML=Object.entries(Wt).map(([a,{label:p}])=>`
    <label class="basemap-row">
      <input class="basemap-radio" type="radio" name="basemap" value="${a}"
             ${a===oe?"checked":""}>
      <span class="basemap-label">${p}</span>
    </label>
  `).join(""),h.querySelectorAll('input[name="basemap"]').forEach(a=>{a.addEventListener("change",()=>{a.value!==oe&&lo(ao,a.value)})}))}function ar(u,h={}){const a=lt.map(u,{zoomControl:!1,attributionControl:!1,center:h.center??[-2.5,118],zoom:h.zoom??5,minZoom:4,maxZoom:18,maxBounds:lt.latLngBounds(lt.latLng(-15,90),lt.latLng(12,145)),maxBoundsViscosity:.55});return lt.control.attribution({position:"bottomright",prefix:!1}).addTo(a),Qn(a,"lapisGaris",400),Qn(a,"lapisTitik",600),a.on("zoomend",()=>{a.getContainer().classList.toggle("show-labels",a.getZoom()>=8),to(a)}),to(a),a.getContainer().classList.toggle("show-labels",a.getZoom()>=8),a}function Qn(u,h,a){u.getPane(h)||(u.createPane(h),u.getPane(h).style.zIndex=String(a))}function to(u){const h=document.getElementById("zoom-level");h&&(h.textContent=`zoom ${u.getZoom()}`)}const ho="webgis_disclaimer_accepted";function uo(u=!1){if(!u&&localStorage.getItem(ho)==="true")return;cr();const h=document.getElementById("disclaimer-overlay");h&&h.remove(),lr()}function lr(){const u=document.createElement("div");u.id="disclaimer-overlay",u.innerHTML=`
    <div class="disc-modal" role="dialog" aria-modal="true"
         aria-labelledby="disc-title">

      <!-- Header -->
      <div class="disc-header">
        <div class="disc-header-left">
          <div class="disc-icon-wrap">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                 stroke-width="2" width="18" height="18">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
              <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
          </div>
          <div>
            <div class="disc-title" id="disc-title">Informasi Data &amp; Metode</div>
            <div class="disc-subtitle">Baca sebelum menggunakan platform ini</div>
          </div>
        </div>
      </div>

      <!-- Body -->
      <div class="disc-body">

        <div class="disc-section">
          <div class="disc-section-label">Sumber Data</div>
          <p class="disc-text">
            Data garis pantai dan laju perubahan pada platform ini diekstraksi dari
            citra satelit <strong>Landsat 5, 7, 8, dan 9</strong> (USGS/NASA) menggunakan
            metode <em>sub-pixel waterline extraction</em> yang diadaptasi dari
            <strong>Digital Earth Australia (DEA) Coastlines — Geoscience Australia.</strong>
          </p>
          <p class="disc-text" style="margin-top:8px;">
            Data mencakup wilayah Indonesia untuk periode
            <strong>1985–2025</strong> dengan resolusi spasial 30 meter.
          </p>
        </div>

        <div class="disc-divider"></div>

        <div class="disc-section">
          <div class="disc-section-label">Keterbatasan Data</div>
          <p class="disc-text">
            Hasil ekstraksi garis pantai dipengaruhi oleh kondisi atmosfer, tutupan awan, dan
            variasi pasang surut saat akuisisi citra. Data bersifat
            <strong>indikatif untuk keperluan riset dan monitoring</strong> dan tidak menggantikan
            data survey resmi seperti survei hidrografi, survei topografi terestris, pemetaan 
            menggunakan Unmanned Aerial Vehicle (UAV) / Drone, Light Detection and Ranging (LiDAR), Synthetic Aperture Radar (SAR), 
            serta survei lapangan langsung lainya.
          </p>
        </div>

        <div class="disc-divider"></div>

        <div class="disc-section">
          <div class="disc-section-label">Referensi</div>
          <div class="disc-ref-box">
            <div class="disc-ref-row">
              <span class="disc-ref-label">Citation</span>
              <span class="disc-ref-val">
                Bishop-Taylor, R., Nanson, R., Sagar, S., Lymburner, L. (2021).
                <em>Mapping Australia’s dynamic coastline at mean sea level using three decades of Landsat imagery</em>
                Geoscience Australia.
                <a href="https://doi.org/10.1016/j.rse.2021.112734"
                   target="_blank" rel="noopener"
                   class="disc-link">Publications</a>
              </span>
            </div>
            <div class="disc-ref-row">
              <span class="disc-ref-label">Method</span>
              <span class="disc-ref-val">
                Bishop-Taylor, R., Sagar, S., Lymburner, L., Alam, I., & Sixsmith, J. (2019).
                <em>Sub-pixel waterline extraction: Characterising accuracy and sensitivity to indices and spectra</em>
                Geoscience Australia.
                <a href="https://www.mdpi.com/2072-4292/11/24/2984"
                   target="_blank" rel="noopener"
                   class="disc-link">Publications</a>
              </span>
            </div>
          </div>
        </div>

      </div>

      <!-- Footer -->
      <div class="disc-footer">
        <label class="disc-remember">
          <input type="checkbox" id="disc-no-show" class="disc-checkbox">
          <span class="disc-checkmark"></span>
          <span class="disc-remember-text">Jangan tampilkan lagi</span>
        </label>
        <button class="disc-btn" id="disc-accept">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
               stroke-width="2.5" width="14" height="14">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
          Saya Mengerti
        </button>
      </div>

    </div>`,document.body.appendChild(u),requestAnimationFrame(()=>{u.classList.add("visible")}),document.getElementById("disc-accept").addEventListener("click",()=>{document.getElementById("disc-no-show").checked&&localStorage.setItem(ho,"true"),eo(u)}),setTimeout(()=>{document.addEventListener("keydown",function h(a){a.key==="Escape"&&(eo(u),document.removeEventListener("keydown",h))})},3e3)}function eo(u){u.classList.remove("visible"),u.classList.add("hiding"),setTimeout(()=>u.remove(),350)}function cr(){if(document.getElementById("disc-styles"))return;const u=document.createElement("style");u.id="disc-styles",u.textContent=`
    /* ── Overlay ── */
    #disclaimer-overlay {
      position: fixed;
      inset: 0;
      z-index: 99999;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(5, 12, 28, 0.75);
      backdrop-filter: blur(4px);
      padding: 20px;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    #disclaimer-overlay.visible  { opacity: 1; }
    #disclaimer-overlay.hiding   { opacity: 0; pointer-events: none; }

    /* ── Modal ── */
    .disc-modal {
      background: var(--navy-mid, #0f2040);
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 14px;
      width: 100%;
      max-width: 560px;
      max-height: 88vh;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      transform: translateY(20px) scale(0.97);
      transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
      box-shadow: 0 24px 60px rgba(0,0,0,0.5);
    }
    #disclaimer-overlay.visible .disc-modal {
      transform: translateY(0) scale(1);
    }

    /* ── Header ── */
    .disc-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 18px 22px 16px;
      border-bottom: 1px solid rgba(255,255,255,0.08);
      flex-shrink: 0;
    }
    .disc-header-left {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .disc-icon-wrap {
      width: 38px;
      height: 38px;
      border-radius: 10px;
      background: rgba(26,122,255,0.15);
      border: 1px solid rgba(26,122,255,0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #1a7aff;
      flex-shrink: 0;
    }
    .disc-title {
      font-size: 15px;
      font-weight: 600;
      color: #eef2ff;
      font-family: 'DM Sans', sans-serif;
    }
    .disc-subtitle {
      font-size: 11px;
      color: #4d6a94;
      margin-top: 2px;
      font-family: 'DM Sans', sans-serif;
    }

    /* ── Body (scrollable) ── */
    .disc-body {
      flex: 1;
      overflow-y: auto;
      padding: 20px 22px;
      display: flex;
      flex-direction: column;
      gap: 0;
    }
    .disc-body::-webkit-scrollbar { width: 4px; }
    .disc-body::-webkit-scrollbar-thumb {
      background: rgba(255,255,255,0.1);
      border-radius: 2px;
    }

    .disc-section { padding: 4px 0 12px; }
    .disc-section-label {
      font-size: 10px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: #1a7aff;
      margin-bottom: 8px;
      font-family: 'DM Sans', sans-serif;
    }
    .disc-text {
      font-size: 13px;
      color: #8ba3c7;
      line-height: 1.75;
      font-family: 'DM Sans', sans-serif;
    }
    .disc-text strong { color: #c8d8f0; font-weight: 600; }
    .disc-text em     { color: #a0b8d8; font-style: italic; }

    .disc-divider {
      height: 1px;
      background: rgba(255,255,255,0.07);
      margin: 4px 0 16px;
    }

    /* ── Referensi box ── */
    .disc-ref-box {
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 8px;
      overflow: hidden;
    }
    .disc-ref-row {
      display: flex;
      gap: 12px;
      padding: 10px 14px;
      font-size: 12px;
      font-family: 'DM Sans', sans-serif;
    }
    .disc-ref-row:not(:last-child) {
      border-bottom: 1px solid rgba(255,255,255,0.06);
    }
    .disc-ref-label {
      font-size: 10px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: #4d6a94;
      flex-shrink: 0;
      width: 48px;
      padding-top: 2px;
    }
    .disc-ref-val {
      color: #8ba3c7;
      line-height: 1.65;
      font-size: 12px;
    }
    .disc-ref-val em { color: #a0b8d8; font-style: italic; }
    .disc-link {
      color: #1a7aff;
      text-decoration: none;
      border-bottom: 1px solid rgba(26,122,255,0.3);
      transition: border-color 0.15s;
    }
    .disc-link:hover { border-color: #1a7aff; }

    /* ── Footer ── */
    .disc-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 14px 22px 18px;
      border-top: 1px solid rgba(255,255,255,0.08);
      flex-shrink: 0;
      gap: 12px;
    }

    /* Checkbox custom */
    .disc-remember {
      display: flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;
      user-select: none;
    }
    .disc-checkbox { display: none; }
    .disc-checkmark {
      width: 16px;
      height: 16px;
      border-radius: 4px;
      border: 1.5px solid rgba(255,255,255,0.2);
      background: transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      transition: all 0.15s;
    }
    .disc-checkbox:checked + .disc-checkmark {
      background: #1a7aff;
      border-color: #1a7aff;
    }
    .disc-checkbox:checked + .disc-checkmark::after {
      content: '';
      display: block;
      width: 8px;
      height: 5px;
      border-left: 2px solid #fff;
      border-bottom: 2px solid #fff;
      transform: rotate(-45deg) translateY(-1px);
    }
    .disc-remember-text {
      font-size: 12px;
      color: #4d6a94;
      font-family: 'DM Sans', sans-serif;
    }

    /* Tombol accept */
    .disc-btn {
      display: flex;
      align-items: center;
      gap: 7px;
      padding: 9px 20px;
      background: #1a7aff;
      border: none;
      border-radius: 8px;
      color: #fff;
      font-size: 13px;
      font-weight: 600;
      font-family: 'DM Sans', sans-serif;
      cursor: pointer;
      transition: background 0.15s, transform 0.1s;
      flex-shrink: 0;
    }
    .disc-btn:hover  { background: #1a5ec4; }
    .disc-btn:active { transform: scale(0.97); }
  `,document.head.appendChild(u)}class dr{constructor({container:h,yearMin:a=1985,yearMax:p=2025,onFilterChange:_}){this.container=h,this.yearMin=a,this.yearMax=p,this.currentMin=a,this.currentMax=p,this.singleYear=p,this.mode="range",this.onFilterChange=_,this.activeTypes=new Set(["abrasi","akresi","stabil"]),this.activeCerts=new Set(["good","insufficient","unstable"]),this._animTimer=null,this._animYear=a,this._build()}getFilter(){const h=this.mode==="single"?this.singleYear:this.currentMin,a=this.mode==="single"?this.singleYear:this.currentMax;return{yearMin:h,yearMax:a,showAbrasi:this.activeTypes.has("abrasi"),showAkresi:this.activeTypes.has("akresi"),showStabil:this.activeTypes.has("stabil"),minRate:parseInt(document.getElementById("fp-rate")?.value??0),certGood:this.activeCerts.has("good"),certInsufficient:this.activeCerts.has("insufficient"),certUnstable:this.activeCerts.has("unstable")}}_build(){this.container&&(this.container.innerHTML=`
      <div class="panel" id="panel-filter">
        <div class="panel-header">
          <div class="ph-left">
            <div class="ph-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
              </svg>
            </div>
            <span class="ph-title">Filter Tampilan</span>
          </div>
          <svg class="ph-chev open" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </div>

        <div class="panel-body" style="gap:12px;">

          <!-- ── MODE TOGGLE: Range vs Tunggal ── -->
          <div class="filter-section">
            <div class="mode-toggle-wrap">
              <button class="mode-btn active" id="fp-btn-range" data-mode="range">
                Rentang Tahun
              </button>
              <button class="mode-btn" id="fp-btn-single" data-mode="single">
                Tahun Tunggal
              </button>
            </div>
          </div>

          <!-- ── MODE RANGE ── -->
          <div class="filter-section" id="fp-section-range">
            <div class="filter-label-row">
              <span class="filter-label">Rentang Tahun</span>
              <span class="filter-year-display">
                <span id="fp-y1">${this.yearMin}</span>
                <span style="color:var(--text-3);margin:0 3px;">–</span>
                <span id="fp-y2">${this.yearMax}</span>
              </span>
            </div>
            <div class="dual-range-wrap">
              <div class="range-track">
                <div class="range-fill" id="fp-fill"></div>
              </div>
              <input type="range" class="range-input range-min" id="fp-min"
                     min="${this.yearMin}" max="${this.yearMax}"
                     value="${this.yearMin}" step="1">
              <input type="range" class="range-input range-max" id="fp-max"
                     min="${this.yearMin}" max="${this.yearMax}"
                     value="${this.yearMax}" step="1">
            </div>
            <div class="preset-row">
              <button class="preset-btn" data-min="${this.yearMin}" data-max="${this.yearMax}">
                Semua
              </button>
              <button class="preset-btn"
                      data-min="${Math.max(this.yearMin,this.yearMax-9)}"
                      data-max="${this.yearMax}">
                10 Tahun Terakhir
              </button>
            </div>
          </div>

          <!-- ── MODE TUNGGAL ── -->
          <div class="filter-section" id="fp-section-single" style="display:none;">
            <div class="filter-label-row">
              <span class="filter-label">Pilih Tahun</span>
              <span class="filter-year-display">
                <span id="fp-single-display">${this.yearMax}</span>
              </span>
            </div>
            <!-- Slider tunggal -->
            <input type="range" class="gis-slider" id="fp-single-slider"
                   min="${this.yearMin}" max="${this.yearMax}"
                   value="${this.yearMax}" step="1">
            <div style="display:flex;justify-content:space-between;margin-top:3px;">
              <span style="font-size:10px;color:var(--text-3);">${this.yearMin}</span>
              <span style="font-size:10px;color:var(--text-3);">${this.yearMax}</span>
            </div>
            <!-- Quick jump: pilih tahun via select -->
            <div style="display:flex;align-items:center;gap:8px;margin-top:4px;">
              <span style="font-size:11px;color:var(--text-3);">Pilih Tahun:</span>
              <select id="fp-single-select" class="speed-select" style="flex:1;">
                ${Array.from({length:this.yearMax-this.yearMin+1},(h,a)=>this.yearMax-a).map(h=>`<option value="${h}"${h===this.yearMax?" selected":""}>${h}</option>`).join("")}
              </select>
            </div>
          </div>

          <div class="filter-divider"></div>

          <!-- ── ANIMASI ── -->
          <div class="filter-section">
            <div class="filter-label-row">
              <span class="filter-label">Animasi Perubahan</span>
              <span class="filter-anim-year" id="fp-anim-year" style="display:none;">
                <span id="fp-anim-val">${this.yearMin}</span>
              </span>
            </div>
            <div class="anim-controls">
              <button class="anim-btn" id="fp-play">
                <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
                Play
              </button>
              <button class="anim-btn" id="fp-pause" style="display:none;">
                <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13">
                  <rect x="6" y="4" width="4" height="16"/>
                  <rect x="14" y="4" width="4" height="16"/>
                </svg>
                Pause
              </button>
              <button class="anim-btn" id="fp-reset">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                     stroke-width="2" width="13" height="13">
                  <polyline points="1 4 1 10 7 10"/>
                  <path d="M3.51 15a9 9 0 1 0 .49-3.18"/>
                </svg>
                Reset
              </button>
              <div class="anim-speed">
                <span style="font-size:10px;color:var(--text-3);">Kecepatan</span>
                <select id="fp-speed" class="speed-select">
                  <option value="1200">Lambat</option>
                  <option value="700" selected>Normal</option>
                  <option value="300">Cepat</option>
                </select>
              </div>
            </div>
            <div class="anim-progress" id="fp-anim-bar" style="display:none;">
              <div class="anim-progress-fill" id="fp-anim-fill"></div>
            </div>
          </div>

          <div class="filter-divider"></div>



          <!-- ── KUALITAS DATA ── -->
          <div class="filter-section">
            <div class="filter-label-row">
              <span class="filter-label">Kualitas Data Garis Pantai</span>
            </div>
            <div class="cert-chips">
              <button class="cert-chip active" data-cert="good">
                <span class="cert-icon cert-good">
                  <svg viewBox="0 0 10 10" width="10" height="10" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="2,5 4,7 8,3"/>
                  </svg>
                </span>
                <span class="cert-info">
                  <span class="cert-name">Good</span>
                  <span class="cert-line cert-line-good"></span>
                </span>
              </button>
              <button class="cert-chip active" data-cert="insufficient">
                <span class="cert-icon cert-insuf">
                  <svg viewBox="0 0 10 10" width="10" height="10" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 2v3M5 7v1"/>
                  </svg>
                </span>
                <span class="cert-info">
                  <span class="cert-name">Insufficient</span>
                  <span class="cert-line cert-line-insuf"></span>
                </span>
              </button>
              <button class="cert-chip active" data-cert="unstable">
                <span class="cert-icon cert-unstab">
                  <svg viewBox="0 0 10 10" width="10" height="10" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M2 5h1M4 5h1M6 5h1M8 5h1"/>
                  </svg>
                </span>
                <span class="cert-info">
                  <span class="cert-name">Unstable</span>
                  <span class="cert-line cert-line-unstab"></span>
                </span>
              </button>
            </div>
          </div>

          <div class="filter-divider"></div>

          <!-- ── LAJU MINIMUM ── -->
          <div class="filter-section">
            <div class="filter-label-row">
              <span class="filter-label">Min. Laju Perubahan</span>
              <span style="font-size:11px;font-family:var(--mono);color:var(--accent);">
                |rate| ≥ <span id="fp-rate-val">0</span> m/th
              </span>
            </div>
            <input type="range" class="gis-slider" id="fp-rate"
                   min="0" max="50" value="0" step="1">
            <div style="display:flex;justify-content:space-between;margin-top:3px;">
              <span style="font-size:10px;color:var(--text-3);">0 (semua)</span>
              <span style="font-size:10px;color:var(--text-3);">50 m/th</span>
            </div>
          </div>

        </div>
      </div>`,this._injectStyles(),this._bindEvents(),this._syncRangeUI())}_bindEvents(){this.container.querySelectorAll(".mode-btn").forEach(o=>{o.addEventListener("click",()=>{this.mode=o.dataset.mode,this.container.querySelectorAll(".mode-btn").forEach(r=>r.classList.remove("active")),o.classList.add("active"),document.getElementById("fp-section-range").style.display=this.mode==="range"?"":"none",document.getElementById("fp-section-single").style.display=this.mode==="single"?"":"none",this._stopAnim(),document.getElementById("fp-play").style.display="",document.getElementById("fp-pause").style.display="none",document.getElementById("fp-anim-year").style.display="none",document.getElementById("fp-anim-bar").style.display="none",this._emitChange()})});const h=document.getElementById("fp-min"),a=document.getElementById("fp-max");[h,a].forEach(o=>{o?.addEventListener("input",()=>{let r=parseInt(h.value),c=parseInt(a.value);r>c-1&&(r=c-1,h.value=r),c<r+1&&(c=r+1,a.value=c),this.currentMin=r,this.currentMax=c,this._syncRangeUI(),this._emitChange()})}),this.container.querySelectorAll(".preset-btn").forEach(o=>{o.addEventListener("click",()=>{const r=parseInt(o.dataset.min),c=parseInt(o.dataset.max);document.getElementById("fp-min").value=r,document.getElementById("fp-max").value=c,this.currentMin=r,this.currentMax=c,this._syncRangeUI(),this._emitChange()})});const p=document.getElementById("fp-single-slider"),_=document.getElementById("fp-single-select");p?.addEventListener("input",()=>{this.singleYear=parseInt(p.value);const o=document.getElementById("fp-single-display");o&&(o.textContent=this.singleYear),_&&(_.value=this.singleYear),this._emitChange()}),_?.addEventListener("change",()=>{this.singleYear=parseInt(_.value);const o=document.getElementById("fp-single-display");o&&(o.textContent=this.singleYear),p&&(p.value=this.singleYear),this._emitChange()}),this.container.querySelectorAll(".type-chip").forEach(o=>{o.addEventListener("click",()=>{const r=o.dataset.type;this.activeTypes.has(r)?this.activeTypes.size>1&&(this.activeTypes.delete(r),o.classList.remove("active")):(this.activeTypes.add(r),o.classList.add("active")),this._emitChange()})}),this.container.querySelectorAll(".cert-chip").forEach(o=>{o.addEventListener("click",()=>{const r=o.dataset.cert;this.activeCerts.has(r)?this.activeCerts.size>1&&(this.activeCerts.delete(r),o.classList.remove("active")):(this.activeCerts.add(r),o.classList.add("active")),this._emitChange()})}),document.getElementById("fp-rate")?.addEventListener("input",o=>{const r=document.getElementById("fp-rate-val");r&&(r.textContent=o.target.value),this._emitChange()}),document.getElementById("fp-play")?.addEventListener("click",()=>this._startAnim()),document.getElementById("fp-pause")?.addEventListener("click",()=>this._pauseAnim()),document.getElementById("fp-reset")?.addEventListener("click",()=>this._resetAnim())}_syncRangeUI(){const h=document.getElementById("fp-min"),a=document.getElementById("fp-max"),p=document.getElementById("fp-fill"),_=document.getElementById("fp-y1"),o=document.getElementById("fp-y2");if(!p)return;h&&(h.value=this.currentMin),a&&(a.value=this.currentMax),_&&(_.textContent=this.currentMin),o&&(o.textContent=this.currentMax);const r=this.yearMax-this.yearMin;p.style.left=(this.currentMin-this.yearMin)/r*100+"%",p.style.right=(this.yearMax-this.currentMax)/r*100+"%"}_startAnim(){this._stopAnim();const h=this.mode==="range"?this.currentMin:this.yearMin,a=this.mode==="range"?this.currentMax:this.yearMax;this._animYear=h,document.getElementById("fp-play").style.display="none",document.getElementById("fp-pause").style.display="",document.getElementById("fp-anim-year").style.display="",document.getElementById("fp-anim-bar").style.display="";const p=parseInt(document.getElementById("fp-speed")?.value??700),_=()=>{if(this._animYear>a){this._stopAnim(),this._resetAnim();return}const o=document.getElementById("fp-anim-val");o&&(o.textContent=this._animYear);const r=(this._animYear-h)/(a-h||1)*100,c=document.getElementById("fp-anim-fill");c&&(c.style.width=r+"%"),this.onFilterChange?.({yearMin:this._animYear,yearMax:this._animYear,showAbrasi:this.activeTypes.has("abrasi"),showAkresi:this.activeTypes.has("akresi"),showStabil:this.activeTypes.has("stabil"),minRate:parseInt(document.getElementById("fp-rate")?.value??0),certGood:this.activeCerts.has("good"),certInsufficient:this.activeCerts.has("insufficient"),certUnstable:this.activeCerts.has("unstable"),animMode:!0}),this._animYear++,this._animTimer=setTimeout(_,p)};_()}_pauseAnim(){this._stopAnim(),document.getElementById("fp-play").style.display="",document.getElementById("fp-pause").style.display="none"}_resetAnim(){this._stopAnim(),document.getElementById("fp-play").style.display="",document.getElementById("fp-pause").style.display="none",document.getElementById("fp-anim-year").style.display="none",document.getElementById("fp-anim-bar").style.display="none",this._emitChange()}_stopAnim(){this._animTimer&&(clearTimeout(this._animTimer),this._animTimer=null)}_emitChange(){this.onFilterChange?.(this.getFilter())}_injectStyles(){if(document.getElementById("fp-styles"))return;const h=document.createElement("style");h.id="fp-styles",h.textContent=`
      .filter-section { display:flex; flex-direction:column; gap:7px; }
      .filter-divider { height:1px; background:var(--border); margin:2px 0; }
      .filter-label-row { display:flex; align-items:center; justify-content:space-between; }
      .filter-label { font-size:11px; font-weight:600; color:var(--text-2);
                      text-transform:uppercase; letter-spacing:.06em; }
      .filter-year-display { font-size:12px; font-family:var(--mono);
                             color:var(--accent); font-weight:500; }

      /* Mode toggle */
      .mode-toggle-wrap { display:flex; background:var(--surface-2);
                          border:1px solid var(--border); border-radius:var(--r-sm);
                          padding:2px; gap:2px; }
      .mode-btn { flex:1; padding:5px 8px; border-radius:4px; font-size:11px;
                  font-weight:500; cursor:pointer; border:none; background:transparent;
                  color:var(--text-3); font-family:var(--font); transition:all .15s; }
      .mode-btn.active { background:var(--accent); color:#fff; }

      /* Dual range */
      .dual-range-wrap { position:relative; height:28px; display:flex; align-items:center; }
      .range-track { position:absolute; left:0; right:0; height:4px;
                     background:var(--surface-2); border-radius:2px;
                     border:1px solid var(--border); }
      .range-fill  { position:absolute; top:0; bottom:0;
                     background:var(--accent); border-radius:2px; }
      .range-input { position:absolute; width:100%; pointer-events:none;
                     -webkit-appearance:none; appearance:none;
                     background:transparent; height:4px; }
      .range-input::-webkit-slider-thumb {
        -webkit-appearance:none; width:16px; height:16px; border-radius:50%;
        background:var(--accent); border:2px solid var(--navy-mid);
        box-shadow:0 0 0 1px var(--accent); cursor:pointer; pointer-events:all; }
      .range-input::-moz-range-thumb {
        width:16px; height:16px; border-radius:50%;
        background:var(--accent); border:2px solid var(--navy-mid);
        cursor:pointer; pointer-events:all; }

      /* Presets */
      .preset-row { display:flex; gap:5px; flex-wrap:wrap; }
      .preset-btn { padding:3px 9px; border-radius:4px; font-size:11px; cursor:pointer;
                    border:1px solid var(--border); background:transparent;
                    color:var(--text-2); font-family:var(--font); transition:all .12s; }
      .preset-btn:hover { background:var(--surface-2); color:var(--text-1); }

      /* Type chips */
      .type-chips { display:flex; gap:6px; flex-wrap:wrap; }
      .type-chip { display:flex; align-items:center; gap:5px; padding:4px 10px;
                   border-radius:20px; font-size:11px; font-weight:500; cursor:pointer;
                   border:1px solid var(--border); background:transparent;
                   color:var(--text-3); font-family:var(--font); transition:all .15s; }
      .type-chip.active { color:var(--text-1); border-color:var(--border-md);
                          background:var(--surface-2); }
      .chip-dot { width:7px; height:7px; border-radius:50%; flex-shrink:0; }

      /* Animasi */
      .anim-controls { display:flex; align-items:center; gap:6px; flex-wrap:wrap; }
      .anim-btn { display:flex; align-items:center; gap:5px; padding:5px 11px;
                  border-radius:var(--r-sm); font-size:11px; font-weight:500;
                  cursor:pointer; border:1px solid var(--border); background:transparent;
                  color:var(--text-2); font-family:var(--font); transition:all .12s; }
      .anim-btn:hover { background:var(--surface-2); color:var(--text-1); }
      .anim-speed { display:flex; align-items:center; gap:5px; margin-left:auto; }
      .speed-select { background:var(--surface); border:1px solid var(--border);
                      color:var(--text-2); font-size:11px; border-radius:4px;
                      padding:2px 6px; font-family:var(--font); cursor:pointer; }
      .filter-anim-year { font-size:12px; font-family:var(--mono);
                          color:var(--amber); font-weight:600; }
      .anim-progress { height:3px; background:var(--surface-2); border-radius:2px;
                       overflow:hidden; margin-top:4px; }
      .anim-progress-fill { height:100%; background:var(--amber);
                            border-radius:2px; transition:width .25s; width:0%; }

      /* Cert chips — kualitas data */
      .cert-chips { display:flex; flex-direction:column; gap:5px; }
      .cert-chip {
        display:flex; align-items:center; gap:8px; padding:6px 10px;
        border-radius:6px; font-size:11px; cursor:pointer;
        border:1px solid var(--border); background:transparent;
        color:var(--text-3); font-family:var(--font); transition:all .15s;
        width:100%; text-align:left;
      }
      .cert-chip.active { color:var(--text-1); background:var(--surface-2); border-color:var(--border-md); }
      .cert-chip:hover:not(.active) { background:color-mix(in srgb, var(--surface-2) 50%, transparent); }

      .cert-icon {
        width:20px; height:20px; border-radius:4px; display:flex;
        align-items:center; justify-content:center; flex-shrink:0;
      }
      .cert-good   { background:color-mix(in srgb,#4ade80 15%,transparent); color:#4ade80; }
      .cert-insuf  { background:color-mix(in srgb,#fbbf24 15%,transparent); color:#fbbf24; }
      .cert-unstab { background:color-mix(in srgb,#f87171 15%,transparent); color:#f87171; }

      .cert-chip:not(.active) .cert-icon { opacity:0.35; }

      .cert-info { display:flex; flex-direction:column; gap:3px; flex:1; }
      .cert-name { font-weight:600; font-size:11px; line-height:1; }

      /* Miniatur garis sebagai preview style */
      .cert-line { display:block; height:2px; border-radius:1px; width:100%; opacity:0.6; }
      .cert-line-good   { background:#a0b4c8; }
      .cert-line-insuf  {
        background:repeating-linear-gradient(90deg,#a0b4c8 0,#a0b4c8 8px,transparent 8px,transparent 13px);
        height:1px;
      }
      .cert-line-unstab {
        background:repeating-linear-gradient(90deg,#a0b4c8 0,#a0b4c8 2px,transparent 2px,transparent 7px);
        height:1px;
      }
      .cert-chip:not(.active) .cert-line { opacity:0.2; }
    `,document.head.appendChild(h)}}function hr(u){fr(),ur(u)}let Rt=!1;function ur(u){const h=document.querySelector(".map-toolbar");if(!h||document.getElementById("btn-flex-zoom"))return;const a=document.createElement("div");a.className="tool-group",a.id="flex-zoom-group",a.innerHTML=`
    <button class="map-tool" id="btn-flex-zoom"
            title="Tampilkan Garis Pantai Semua Tahun">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="2" width="15" height="15">
        <circle cx="11" cy="11" r="8"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        <line x1="11" y1="8" x2="11" y2="14"/>
        <line x1="8" y1="11" x2="14" y2="11"/>
      </svg>
    </button>`;const p=h.querySelectorAll(".tool-group"),_=p[p.length-1];h.insertBefore(a,_);const o=document.getElementById("btn-flex-zoom");o.addEventListener("click",()=>pr(o,u))}function pr(u,h){Rt=!Rt,u.classList.toggle("flex-zoom-active",Rt),u.title=Rt?"Tampilkan Garis Pantai Semua Tahun — klik untuk nonaktifkan":"Tampilkan Semua Tahun";const a=document.getElementById("flex-zoom-tooltip");a&&(a.textContent=Rt?"✓ Semua Tahun Ditampilkan":"Tampilkan Semua Tahun",a.classList.toggle("active",Rt)),h?.setFlexZoom&&h.setFlexZoom(Rt),window.dispatchEvent(new CustomEvent("flexzoomchange",{detail:{active:Rt}}))}function fr(){if(document.getElementById("flex-zoom-styles"))return;const u=document.createElement("style");u.id="flex-zoom-styles",u.textContent=`
    /* Tombol aktif — glow biru */
    #btn-flex-zoom.flex-zoom-active {
      background: rgba(59,130,246,0.2) !important;
      color: #3b82f6 !important;
      box-shadow: inset 0 0 0 1px rgba(59,130,246,0.4);
    }

    /* Pulse ring saat aktif */
    #btn-flex-zoom.flex-zoom-active::after {
      content: '';
      position: absolute;
      inset: 2px;
      border-radius: 4px;
      border: 1.5px solid rgba(59,130,246,0.5);
      animation: flex-pulse 2s ease-in-out infinite;
      pointer-events: none;
    }
    @keyframes flex-pulse {
      0%,100% { opacity: 1; }
      50%      { opacity: 0.3; }
    }

    /* Badge kecil di pojok tombol saat aktif */
    #flex-zoom-group { position: relative; }
    #btn-flex-zoom.flex-zoom-active::before {
      content: '●';
      position: absolute;
      top: 4px; right: 4px;
      font-size: 6px;
      color: #3b82f6;
      line-height: 1;
    }

    /* Chip status di bottom bar (ditambahkan saat aktif) */
    #flex-zoom-chip {
      display: flex; align-items: center; gap: 6px;
      padding: 5px 12px;
      background: rgba(59,130,246,0.15);
      border: 1px solid rgba(59,130,246,0.35);
      border-radius: 20px;
      font-size: 11px;
      color: #3b82f6;
      font-family: 'Inter', sans-serif;
      font-weight: 500;
      pointer-events: none;
      animation: fadeIn .2s ease;
    }
    #flex-zoom-chip .chip-dot { background: #3b82f6; animation: pulse 2s infinite; }
    @keyframes fadeIn { from { opacity:0; transform:translateY(4px); } to { opacity:1; transform:none; } }

    /* Custom tooltip */
    #flex-zoom-tooltip {
      position: fixed;
      background: rgba(8,15,30,0.9);
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 6px;
      padding: 5px 10px;
      font-size: 11px;
      color: #94afc8;
      font-family: 'Inter', sans-serif;
      pointer-events: none;
      z-index: 9999;
      opacity: 0;
      transform: translateX(-50%) translateY(4px);
      transition: opacity .15s, transform .15s;
      white-space: nowrap;
    }
    #flex-zoom-tooltip.active { color: #3b82f6; border-color: rgba(59,130,246,0.3); }
  `,document.head.appendChild(u)}class mr{constructor(h){this.map=h,this._shorelineFeatures=[],this._rateFeatures=[],this._shorelineLabelsOn=!1,this._rateLabelsOn=!1,this._flexZoomActive=!1,this._filterYearMax=2025,this._svg=this._createSVGOverlay(),this._slGroup=this._createGroup("sl-labels"),this._rtGroup=this._createGroup("rt-labels"),this.map.on("moveend",()=>this._render()),this.map.on("zoomend",()=>this._render()),this._injectStyles(),this._buildButtons()}addShorelineFeatures(h){this._shorelineFeatures.push(...h??[]),this._shorelineLabelsOn&&this._render()}addRateFeatures(h){this._rateFeatures.push(...h??[]),this._rateLabelsOn&&this._render()}clear(){this._shorelineFeatures=[],this._rateFeatures=[],this._slGroup.innerHTML="",this._rtGroup.innerHTML=""}setFlexZoom(h,a){this._flexZoomActive=h,a!==void 0&&(this._filterYearMax=parseInt(a)),this._shorelineLabelsOn&&this._renderShorelineLabels()}setYearMax(h){this._filterYearMax=parseInt(h),this._shorelineLabelsOn&&this._renderShorelineLabels()}_buildButtons(){const h=document.getElementById("toggle-label-sl"),a=document.getElementById("toggle-label-rt");h&&h.addEventListener("change",p=>{this._shorelineLabelsOn=p.target.checked,this._slGroup.style.display=this._shorelineLabelsOn?"":"none",this._shorelineLabelsOn&&this._render()}),a&&a.addEventListener("change",p=>{this._rateLabelsOn=p.target.checked,this._rtGroup.style.display=this._rateLabelsOn?"":"none",this._rateLabelsOn&&this._render()})}_createSVGOverlay(){const h=document.getElementById("label-svg-overlay");if(h)return h;const a=document.getElementById("map"),p=document.createElementNS("http://www.w3.org/2000/svg","svg");return p.id="label-svg-overlay",p.style.cssText=`
      position:absolute; inset:0; width:100%; height:100%;
      pointer-events:none; z-index:450; overflow:visible;`,a?.appendChild(p),p}_createGroup(h){const a=document.createElementNS("http://www.w3.org/2000/svg","g");return a.id=h,a.style.display="none",this._svg.appendChild(a),a}_render(){this._shorelineLabelsOn&&this._renderShorelineLabels(),this._rateLabelsOn&&this._renderRateLabels()}_renderShorelineLabels(){if(this._slGroup.innerHTML="",!this._shorelineFeatures.length)return;const h=this.map.getZoom(),a=h>=14?120:h>=12?180:h>=10?240:300,p=a*.6,_=[],o=new Map;this._shorelineFeatures.forEach(r=>{const c=r.properties?.year??"-";o.has(c)||o.set(c,[]),o.get(c).push(r)}),o.forEach((r,c)=>{const d=parseInt(c),f=d===this._filterYearMax,y=h>=16;if(!(this._flexZoomActive||y||f))return;const x=Math.max(0,Math.min(280,(d-1984)*7)),b=isNaN(d)?"#fff":`hsl(${x},100%,65%)`;r.forEach(P=>{const k=P.geometry;if(!k)return;(k.type==="LineString"?[k.coordinates]:k.type==="MultiLineString"?k.coordinates:[]).forEach(S=>{if(S.length<2)return;const E=S.map(([M,z])=>{const V=this.map.latLngToContainerPoint([z,M]);return{x:V.x,y:V.y}});let Z=0;const G=[];for(let M=1;M<E.length;M++){const z=E[M].x-E[M-1].x,V=E[M].y-E[M-1].y,U=Math.sqrt(z*z+V*V);G.push(U),Z+=U}if(Z<p)return;const j=Math.max(1,Math.floor(Z/a)),et=Z/(j+1);for(let M=1;M<=j;M++){const z=et*M;let V=0;for(let U=1;U<E.length;U++){const Y=G[U-1];if(V+Y>=z){const it=(z-V)/Y,ht=E[U-1].x+it*(E[U].x-E[U-1].x),Q=E[U-1].y+it*(E[U].y-E[U-1].y),xt=E[U].x-E[U-1].x,ut=E[U].y-E[U-1].y;let wt=Math.atan2(ut,xt)*180/Math.PI;if(wt>90&&(wt-=180),wt<-90&&(wt+=180),!_.some(Dt=>{const A=Dt.x-ht,J=Dt.y-Q;return Math.sqrt(A*A+J*J)<a*.85})){const Dt=this._svg.clientWidth,A=this._svg.clientHeight;ht>-40&&ht<Dt+40&&Q>-20&&Q<A+20&&(this._placeSLLabel(ht,Q,wt,String(c),b),_.push({x:ht,y:Q}))}break}V+=Y}}})})})}_placeSLLabel(h,a,p,_,o){const r=document.createElementNS("http://www.w3.org/2000/svg","g");r.setAttribute("transform",`translate(${h},${a}) rotate(${p})`);const c=document.createElementNS("http://www.w3.org/2000/svg","text");c.setAttribute("text-anchor","middle"),c.setAttribute("dominant-baseline","central"),c.setAttribute("fill",o),c.setAttribute("stroke","rgba(0,0,0,0.9)"),c.setAttribute("stroke-width","3"),c.setAttribute("stroke-linejoin","round"),c.setAttribute("paint-order","stroke fill"),c.setAttribute("font-size","11"),c.setAttribute("font-family","'Inter', 'DM Sans', sans-serif"),c.setAttribute("font-weight","700"),c.setAttribute("letter-spacing","0.05em"),c.setAttribute("filter","drop-shadow(0px 1px 2px rgba(0,0,0,0.6))"),c.textContent=_,r.appendChild(c),this._slGroup.appendChild(r)}_renderRateLabels(){if(this._rtGroup.innerHTML="",!this._rateFeatures.length)return;if(this.map.getZoom()<10){this._rtGroup.innerHTML=`
        <text x="50%" y="50%"
          font-size="12" fill="rgba(255,255,255,0.3)"
          font-family="'Inter',sans-serif"
          text-anchor="middle" dominant-baseline="middle">
          Zoom in ke level 10+ untuk label laju
        </text>`;return}const a=this._svg.clientWidth,p=this._svg.clientHeight,_=100,o=24,r=Math.ceil(a/_),c=Math.ceil(p/o),d=new Uint8Array(r*c),f=(x,b,P,k)=>{const B=Math.max(0,Math.floor((x-P/2)/_)),S=Math.min(r-1,Math.ceil((x+P/2)/_)),E=Math.max(0,Math.floor((b-k/2)/o)),Z=Math.min(c-1,Math.ceil((b+k/2)/o));for(let G=E;G<=Z;G++)for(let j=B;j<=S;j++)d[G*r+j]=1},y=(x,b,P,k)=>{const B=Math.max(0,Math.floor((x-P/2)/_)),S=Math.min(r-1,Math.ceil((x+P/2)/_)),E=Math.max(0,Math.floor((b-k/2)/o)),Z=Math.min(c-1,Math.ceil((b+k/2)/o));for(let G=E;G<=Z;G++)for(let j=B;j<=S;j++)if(d[G*r+j])return!0;return!1};[...this._rateFeatures].filter(x=>{const b=x.geometry?.coordinates;if(!b)return!1;const P=this.map.latLngToContainerPoint([b[1],b[0]]);return P.x>-20&&P.x<a+20&&P.y>-20&&P.y<p+20}).sort((x,b)=>Math.abs(b.properties?.rate_time??0)-Math.abs(x.properties?.rate_time??0)).forEach(x=>{const b=x.geometry?.coordinates;if(!b)return;const P=parseFloat(x.properties?.rate_time??0),k=parseFloat(x.properties?.uncertainty??x.properties?.rate_time_unc??x.properties?.unc??0);if(Math.abs(P)<.05)return;const B=this.map.latLngToContainerPoint([b[1],b[0]]),S=B.x,E=B.y,Z=P<0,G="#ffffff",j=Z?"rgba(220,38,38,0.85)":"rgba(5,150,105,0.85)",et=Z?"#fca5a5":"#6ee7b7",M=P.toFixed(1)+" m",z=k>0?` (±${k.toFixed(1)})`:"",V=M+z,U=V.length*5.8+12,Y=16,it=[{dx:14,dy:0,anchor:"start"},{dx:-14,dy:0,anchor:"end"},{dx:0,dy:-12,anchor:"middle"},{dx:0,dy:16,anchor:"middle"}];for(const ht of it){const Q=S+ht.dx+(ht.anchor==="start"?U/2:ht.anchor==="end"?-U/2:0),xt=E+ht.dy;if(!(Q<0||Q>a||xt<-10||xt>p+10)&&!y(Q,xt,U+6,Y+4)){f(Q,xt,U+6,Y+4),this._placeRateLabel(S,E,Q,xt,V,G,j,et,ht.anchor);break}}})}_placeRateLabel(h,a,p,_,o,r,c,d,f){const y=document.createElementNS("http://www.w3.org/2000/svg","g"),g=p-h,x=_-a;if(Math.abs(g)>8||Math.abs(x)>8){const E=document.createElementNS("http://www.w3.org/2000/svg","line");E.setAttribute("x1",h),E.setAttribute("y1",a),E.setAttribute("x2",p),E.setAttribute("y2",_),E.setAttribute("stroke",r),E.setAttribute("stroke-width","0.8"),E.setAttribute("stroke-opacity","0.5"),E.setAttribute("stroke-dasharray","3 2"),y.appendChild(E)}const b=o.length*5.8+12,P=16,k=f==="start"?p-2:f==="end"?p-b+2:p-b/2,B=document.createElementNS("http://www.w3.org/2000/svg","rect");B.setAttribute("x",k),B.setAttribute("y",_-P/2),B.setAttribute("width",b),B.setAttribute("height",P),B.setAttribute("rx","4"),B.setAttribute("fill",c),B.setAttribute("stroke",d),B.setAttribute("stroke-width","0.8"),y.appendChild(B);const S=document.createElementNS("http://www.w3.org/2000/svg","text");S.setAttribute("x",f==="start"?k+6:f==="end"?p-6:p),S.setAttribute("y",_+1),S.setAttribute("text-anchor",f==="start"?"start":f==="end"?"end":"middle"),S.setAttribute("dominant-baseline","middle"),S.setAttribute("fill",r),S.setAttribute("font-size","9"),S.setAttribute("font-family","'Inter','DM Sans',sans-serif"),S.setAttribute("font-weight","600"),S.textContent=o,y.appendChild(S),this._rtGroup.appendChild(y)}_injectStyles(){if(document.getElementById("label-mgr-styles"))return;const h=document.createElement("style");h.id="label-mgr-styles",h.textContent=`
      #btn-label-shoreline.label-btn-active,
      #btn-label-rates.label-btn-active {
        background: rgba(59,130,246,0.2) !important;
        color: #3b82f6 !important;
        box-shadow: inset 0 0 0 1px rgba(59,130,246,0.4);
      }
      #label-svg-overlay { user-select: none; }
    `,document.head.appendChild(h)}}const po="https://cdnjs.cloudflare.com/ajax/libs/gif.js/0.2.0/gif.js";function _r(){if(HTMLCanvasElement.prototype.__gifPatched)return;const u=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=function(h,a={}){return h==="2d"&&(a={willReadFrequently:!0,...a}),u.call(this,h,a)},HTMLCanvasElement.prototype.__gifPatched=!0}async function gr(u){if(!document.querySelector(`script[src="${u}"]`)?.dataset.loaded)return new Promise((h,a)=>{const p=document.createElement("script");p.src=u,p.onload=()=>{p.dataset.loaded="1",h()},p.onerror=()=>a(new Error(`Gagal memuat: ${u}`)),document.head.appendChild(p)})}let $e=null;async function vr(){if($e)return $e;const u=await fetch(po);if(!u.ok)throw new Error("Gagal fetch gif.js dari CDN");const h=await u.text(),a=new Blob([h],{type:"application/javascript"});return $e=URL.createObjectURL(a),$e}function yr(u,h){if(!u||!h)return;kr();const a=document.querySelector(".mlm-actions");if(!a||document.getElementById("gif-section"))return;const p=document.createElement("div");p.id="gif-section",p.className="gif-section",p.innerHTML=`
    <div class="gif-header">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12">
        <polygon points="5 3 19 12 5 21 5 3"/>
      </svg>
      Export Animasi GIF
    </div>
    <div class="gif-row">
      <div>
        <div class="mlm-sublabel">Tahun Mulai</div>
        <input class="mlm-input gif-input" id="gif-year-start" type="number"
               min="1984" max="2024" value="1984" step="1"/>
      </div>
      <div>
        <div class="mlm-sublabel">Tahun Akhir</div>
        <input class="mlm-input gif-input" id="gif-year-end" type="number"
               min="1985" max="2025" value="2025" step="1"/>
      </div>
    </div>
    <div class="gif-row">
      <div>
        <div class="mlm-sublabel">Interval (tahun)</div>
        <select class="mlm-select gif-input" id="gif-interval">
          <option value="1" selected>Tiap 1 tahun</option>
          <option value="2">Tiap 2 tahun</option>
          <option value="3">Tiap 3 tahun</option>
          <option value="5">Tiap 5 tahun</option>
        </select>
      </div>
      <div>
        <div class="mlm-sublabel">Delay per frame</div>
        <select class="mlm-select gif-input" id="gif-delay">
          <option value="300">0.3 dtk</option>
          <option value="500" selected>0.5 dtk</option>
          <option value="800">0.8 dtk</option>
          <option value="1200">1.2 dtk</option>
          <option value="2000">2.0 dtk</option>
        </select>
      </div>
    </div>
    <div class="gif-row" style="grid-template-columns:1fr;">
      <div>
        <div class="mlm-sublabel">Resolusi GIF</div>
        <select class="mlm-select gif-input" id="gif-resolution">
          <option value="0.5">Kecil — cepat (~480px)</option>
          <option value="0.75" selected>Sedang (~720px)</option>
          <option value="1">Penuh (~1080px) — lambat</option>
        </select>
      </div>
    </div>
    <div class="gif-progress-wrap" id="gif-progress-wrap" style="display:none;">
      <div class="gif-progress-bar">
        <div class="gif-progress-fill" id="gif-progress-fill"></div>
      </div>
      <div class="gif-progress-label" id="gif-progress-label">Menyiapkan...</div>
    </div>
    <button class="mlm-btn mlm-btn-gif" id="btn-export-gif">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13">
        <circle cx="12" cy="12" r="10"/>
        <polygon points="10 8 16 12 10 16 10 8"/>
      </svg>
      Buat Animasi GIF
    </button>
  `,a.parentNode.insertBefore(p,a),document.getElementById("btn-export-gif").addEventListener("click",()=>br(u,h))}async function br(u,h){const a=document.getElementById("btn-export-gif"),p=document.getElementById("gif-progress-wrap"),_=document.getElementById("gif-progress-fill"),o=document.getElementById("gif-progress-label"),r=parseInt(document.getElementById("gif-year-start")?.value??1984),c=parseInt(document.getElementById("gif-year-end")?.value??2025),d=parseInt(document.getElementById("gif-interval")?.value??1),f=parseInt(document.getElementById("gif-delay")?.value??500),y=parseFloat(document.getElementById("gif-resolution")?.value??.75);if(r>=c){alert("Tahun mulai harus lebih kecil dari tahun akhir.");return}const g=[];for(let P=r;P<=c;P+=d)g.push(P);a.disabled=!0,p.style.display="";const x=(P,k)=>{_.style.width=Math.min(100,P)+"%",o.textContent=k};let b=null;try{x(1,"Memuat library..."),_r(),await gr(po);const P=await vr(),k=document.getElementById("map"),B=Math.round(k.offsetWidth*y),S=Math.round(k.offsetHeight*y),E={...h._filter},Z=new window.GIF({workers:2,quality:10,width:B,height:S,workerScript:P,repeat:0});x(5,`Menyiapkan ${g.length} frame...`);for(let G=0;G<g.length;G++){const j=g[G];x(Math.round(G/g.length*72)+5,`Frame ${G+1}/${g.length} — ${j}`),h.applyFilter({...E,yearMax:j}),await Lr(100);const et=await xr(k,B,S,y);wr(et,j,r,c),Z.addFrame(et,{delay:f,copy:!0}),b=et}b&&Z.addFrame(b,{delay:f*4,copy:!0}),h.applyFilter(E),x(79,"Encoding GIF (harap tunggu)..."),await new Promise((G,j)=>{Z.on("progress",et=>x(79+Math.round(et*19),`Encoding: ${Math.round(et*100)}%`)),Z.on("finished",et=>{x(100,"✓ Selesai! Mengunduh...");const M=URL.createObjectURL(et),z=document.createElement("a");z.href=M,z.download=`animasi-garis-pantai_${r}-${c}.gif`,document.body.appendChild(z),z.click(),document.body.removeChild(z),setTimeout(()=>URL.revokeObjectURL(M),15e3),G()}),Z.on("error",j),Z.render()})}catch(P){console.error("[GIF]",P),x(0,"⚠ Gagal: "+(P?.message??String(P)));try{h.applyFilter({...h._filter})}catch{}}finally{a.disabled=!1,a.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg> Buat Animasi GIF',setTimeout(()=>{p.style.display="none"},5e3)}}async function xr(u,h,a,p){const _=document.createElement("canvas");_.width=h,_.height=a;const o=_.getContext("2d",{willReadFrequently:!0});o.fillStyle="#080f1e",o.fillRect(0,0,h,a);const r=u.getBoundingClientRect();for(const d of u.querySelectorAll("canvas")){if(!d.width||!d.height)continue;const f=d.getBoundingClientRect(),y=(f.left-r.left)*p,g=(f.top-r.top)*p;try{d.toDataURL(),o.drawImage(d,y,g,d.width*p,d.height*p)}catch{}}const c=u.querySelector(".leaflet-overlay-pane");if(c)for(const d of c.querySelectorAll("svg"))try{const f=d.getBoundingClientRect(),y=d.cloneNode(!0);y.setAttribute("width",f.width),y.setAttribute("height",f.height);const g=new Blob([new XMLSerializer().serializeToString(y)],{type:"image/svg+xml;charset=utf-8"}),x=URL.createObjectURL(g);await new Promise(b=>{const P=new Image;P.onload=()=>{const k=(f.left-r.left)*p,B=(f.top-r.top)*p;o.drawImage(P,k,B,f.width*p,f.height*p),URL.revokeObjectURL(x),b()},P.onerror=()=>{URL.revokeObjectURL(x),b()},P.src=x})}catch(f){console.warn("[GIF] SVG skip:",f.message)}return _}function wr(u,h,a,p){const _=u.getContext("2d",{willReadFrequently:!0}),o=u.width,r=u.height,c=(h-a)/Math.max(p-a,1);_.fillStyle="rgba(0,0,0,0.5)",_.fillRect(0,r-30,o,30),_.fillStyle="rgba(59,130,246,0.35)",_.fillRect(0,r-3,o,3),_.fillStyle="#3b82f6",_.fillRect(0,r-3,Math.round(o*c),3);const d=Math.max(14,Math.round(o*.036));_.font=`bold ${d}px Arial, sans-serif`,_.textBaseline="middle",_.fillStyle="rgba(0,0,0,0.85)",_.fillText(String(h),16,r-15),_.fillStyle="#ffffff",_.fillText(String(h),15,r-16)}function Lr(u=80){return new Promise(h=>setTimeout(()=>requestAnimationFrame(()=>requestAnimationFrame(h)),u))}function kr(){if(document.getElementById("gif-export-styles"))return;const u=document.createElement("style");u.id="gif-export-styles",u.textContent=`
    .gif-section { padding:10px 14px 12px; border-top:1px solid rgba(255,255,255,0.05); border-bottom:1px solid rgba(255,255,255,0.05); }
    .gif-header { display:flex; align-items:center; gap:6px; font-size:9.5px; font-weight:600; text-transform:uppercase; letter-spacing:.08em; color:#a78bfa; margin-bottom:9px; font-family:'Inter',sans-serif; }
    .gif-row { display:grid; grid-template-columns:1fr 1fr; gap:6px; margin-bottom:6px; }
    .gif-input { font-size:11px !important; padding:5px 8px !important; margin-bottom:0 !important; }
    .gif-progress-wrap { margin:8px 0 6px; }
    .gif-progress-bar { height:4px; background:rgba(255,255,255,0.08); border-radius:2px; overflow:hidden; margin-bottom:5px; }
    .gif-progress-fill { height:100%; width:0%; background:linear-gradient(90deg,#7c3aed,#a78bfa); border-radius:2px; transition:width .25s ease; }
    .gif-progress-label { font-size:10px; color:#6b7a99; font-family:'Inter',sans-serif; text-align:center; }
    .mlm-btn-gif { display:flex; align-items:center; justify-content:center; gap:6px; width:100%; padding:8px 12px; border-radius:7px; font-size:12px; font-weight:500; font-family:'Inter',sans-serif; cursor:pointer; transition:all .15s; margin-top:4px; background:rgba(167,139,250,0.15); color:#a78bfa; border:1px solid rgba(167,139,250,0.3); }
    .mlm-btn-gif:hover:not(:disabled) { background:rgba(167,139,250,0.28); }
    .mlm-btn-gif:disabled { opacity:.45; cursor:not-allowed; }
  `,document.head.appendChild(u)}const Pr="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js";let Ai=!1;async function Oi(){if(Ai||window.html2canvas){Ai=!0;return}return new Promise((u,h)=>{const a=document.createElement("script");a.src=Pr,a.onload=()=>{Ai=!0,u()},a.onerror=h,document.head.appendChild(a)})}let qe=null;async function Cr(){if(qe)return qe;const u=["public/logo/logo.png","public/logo/logo1.png","./logo.png"];for(const h of u)try{const a=await fetch(h);if(!a.ok)continue;const p=await a.blob();return qe=await new Promise(_=>{const o=new FileReader;o.onload=r=>_(r.target.result),o.readAsDataURL(p)}),qe}catch{}return null}function fo(u,h=100){if(!u)return{meters:0,label:"—",barWidthPx:h};const a=u.getCenter(),p=Math.cos(a.lat*Math.PI/180)*111320/Math.pow(2,u.getZoom()+8)*256,_=p*h,o=[1,2,5,10,20,50,100,200,500,1e3,2e3,5e3,1e4,2e4,5e4,1e5,2e5,5e5,1e6];let r=o[0];for(const f of o)if(f<=_)r=f;else break;const c=r>=1e3?`${(r/1e3).toLocaleString("id-ID")} km`:`${r.toLocaleString("id-ID")} m`,d=Math.round(r/p);return{meters:r,label:c,barWidthPx:d}}function Mr(u,h,a){Nr(),Er(u),Tr(u),Sr(u);const p=new MutationObserver(()=>{document.querySelector(".mlm-actions")&&(yr(u,a),p.disconnect())});p.observe(document.body,{childList:!0,subtree:!0})}function Sr(u){if(!u)return;function h(){const{label:a,barWidthPx:p}=fo(u,44),_=document.querySelector(".scale-line"),o=document.querySelector(".scale-box span");_&&(_.style.width=p+"px"),o&&(o.textContent=a)}u.on("zoomend moveend",h),h()}function Tr(u,h){const a=document.querySelector(".map-toolbar");if(!a)return;const p=document.createElement("div");p.className="tool-group",p.innerHTML=`
    <button class="map-tool" id="btn-map-layout" title="Layout - Ekspor Peta">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18M9 3v18"/>
        <circle cx="15" cy="15" r="2" fill="currentColor" stroke="none" opacity=".5"/>
      </svg>
    </button>`,a.appendChild(p),document.getElementById("btn-map-layout")?.addEventListener("click",()=>Br(u))}function Er(u,h){if(document.getElementById("map-layout-modal"))return;const a=document.createElement("div");a.id="map-layout-modal",a.innerHTML=`
    <div class="mlm-backdrop" id="mlm-backdrop"></div>
    <div class="mlm-panel">

      <!-- Sidebar kiri -->
      <div class="mlm-sidebar">
        <div class="mlm-sidebar-header">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
            <rect x="3" y="3" width="18" height="18" rx="2"/>
            <path d="M3 9h18M9 3v18"/>
          </svg>
          Layout Peta
        </div>

        <!-- Judul & subjudul -->
        <div class="mlm-section">
          <div class="mlm-section-label">Judul Peta</div>
          <input class="mlm-input" id="layout-title"
                 placeholder="Dinamika Garis Pantai..."
                 value="Peta Dinamika Garis Pantai Indonesia"/>
          <input class="mlm-input" id="layout-subtitle"
                 placeholder="Subjudul (opsional)"
                 value="Analisis Perubahan Garis Pantai 1985–2025"/>
        </div>

        <!-- Nama pembuat & lokasi -->
        <div class="mlm-section">
          <div class="mlm-section-label">Informasi Pembuat</div>
          <input class="mlm-input" id="layout-author" placeholder="Nama pembuat peta"/>
          <input class="mlm-input" id="layout-area"   placeholder="Nama area/wilayah yang dipetakan"/>
        </div>

        <!-- Toggle elemen kartografi -->
        <div class="mlm-section">
          <div class="mlm-section-label" style="display:flex;align-items:center;justify-content:space-between;">
            Elemen Kartografi
            <button class="mlm-toggle-all" id="btn-toggle-all-off" title="Nonaktifkan semua elemen">Peta Saja</button>
          </div>
          <div class="mlm-toggles">
            <label class="mlm-chk"><input type="checkbox" id="lyt-legend"     checked> Legenda</label>
            <label class="mlm-chk"><input type="checkbox" id="lyt-north"      checked> North Arrow</label>
            <label class="mlm-chk"><input type="checkbox" id="lyt-scale"      checked> Skala Bar</label>
            <label class="mlm-chk"><input type="checkbox" id="lyt-source"     checked> Sumber Data</label>
            <label class="mlm-chk"><input type="checkbox" id="lyt-disclaimer" checked> Disclaimer</label>
            <label class="mlm-chk"><input type="checkbox" id="lyt-date"       checked> Tanggal</label>
          </div>
        </div>

        <!-- Ukuran kertas & DPI -->
        <div class="mlm-section">
          <div class="mlm-section-label">Format & Resolusi</div>
          <div class="mlm-row2">
            <div>
              <div class="mlm-sublabel">Orientasi</div>
              <select class="mlm-select" id="layout-paper">
                <option value="a4l">Landscape</option>
                <option value="a4p">Portrait</option>
              </select>
            </div>
            <div>
              <div class="mlm-sublabel">DPI Export</div>
              <select class="mlm-select" id="layout-dpi">
                <option value="72">72 dpi (screen)</option>
                <option value="150">150 dpi</option>
                <option value="200" selected>200 dpi</option>
                <option value="300">300 dpi (print)</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Tema -->
        <div class="mlm-section">
          <div class="mlm-section-label">Tema Layout</div>
          <div class="mlm-theme-row">
            <button class="mlm-theme active" data-theme="dark"  title="Dark">
              <div style="background:#080f1e;"></div> Dark
            </button>
            <button class="mlm-theme" data-theme="light" title="Light">
              <div style="background:#f8fafc;border:1px solid #e2e8f0;"></div> Light
            </button>
          </div>
        </div>

        <!-- Actions -->
        <div class="mlm-actions">
          <button class="mlm-btn mlm-btn-secondary" id="btn-lyt-refresh">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13">
              <polyline points="1 4 1 10 7 10"/>
              <path d="M3.51 15a9 9 0 1 0 .49-3.18"/>
            </svg>
            Refresh Preview
          </button>
          <button class="mlm-btn mlm-btn-primary" id="btn-lyt-png">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Export PNG
          </button>
          <button class="mlm-btn mlm-btn-accent" id="btn-lyt-clipboard">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13">
              <rect x="9" y="9" width="13" height="13" rx="2"/>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
            </svg>
            Copy to Clipboard
          </button>
          <button class="mlm-btn mlm-btn-ghost" id="btn-lyt-print">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13">
              <polyline points="6 9 6 2 18 2 18 9"/>
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
              <rect x="6" y="14" width="12" height="8"/>
            </svg>
            Export PDF
          </button>
          <button class="mlm-btn mlm-btn-close" id="btn-lyt-close">Tutup</button>
        </div>
      </div>

      <!-- Preview area -->
      <div class="mlm-preview-wrap">
        <div class="mlm-preview-topbar">
          <span class="mlm-preview-label" id="mlm-preview-label">Preview — A4 Landscape</span>
          <span class="mlm-preview-hint">Klik gambar peta untuk zoom</span>
        </div>
        <div class="mlm-preview-scroll">
          <div class="mlm-canvas" id="mlm-canvas"></div>
        </div>
      </div>

    </div>`,document.body.appendChild(a),document.getElementById("mlm-backdrop").addEventListener("click",no),document.getElementById("btn-lyt-close").addEventListener("click",no),document.getElementById("btn-lyt-refresh").addEventListener("click",()=>Nt(u)),document.getElementById("btn-lyt-png").addEventListener("click",()=>Or()),document.getElementById("btn-lyt-print").addEventListener("click",()=>Rr(u)),document.getElementById("btn-lyt-clipboard").addEventListener("click",()=>Zr());const p=document.getElementById("btn-toggle-all-off");let _=!1;const o=["lyt-legend","lyt-north","lyt-scale","lyt-source","lyt-disclaimer","lyt-date","lyt-inset"];p.addEventListener("click",()=>{_=!_,o.forEach(r=>{const c=document.getElementById(r);c&&(c.checked=!_)}),p.textContent=_?"Tampilkan Semua":"Peta Saja",p.style.background=_?"rgba(59,130,246,0.2)":"",p.style.color=_?"#3b82f6":"",Nt(u)}),document.querySelectorAll(".mlm-theme").forEach(r=>{r.addEventListener("click",()=>{document.querySelectorAll(".mlm-theme").forEach(c=>c.classList.remove("active")),r.classList.add("active"),Nt(u)})}),["layout-title","layout-subtitle","layout-author","layout-area"].forEach(r=>{document.getElementById(r)?.addEventListener("input",()=>{clearTimeout(window._lytDebounce),window._lytDebounce=setTimeout(()=>Nt(u),400)})}),o.forEach(r=>{document.getElementById(r)?.addEventListener("change",()=>Nt(u))}),document.getElementById("layout-paper")?.addEventListener("change",()=>{mo(),Nt(u)})}const io={a4l:{w:864,h:612,label:"A4 Landscape",mmW:297,mmH:210},a4p:{w:612,h:864,label:"A4 Portrait",mmW:210,mmH:297},a3l:{w:1122,h:794,label:"A3 Landscape",mmW:420,mmH:297}};function we(){const u=document.getElementById("layout-paper")?.value??"a4l";return io[u]??io.a4l}function Ir(){return parseInt(document.getElementById("layout-dpi")?.value??"200")}function mo(){const u=we(),h=document.getElementById("mlm-canvas"),a=document.getElementById("mlm-preview-label");h&&(h.style.width=u.w+"px",h.style.height=u.h+"px"),a&&(a.textContent=`Preview — ${u.label}`)}function Br(u){document.getElementById("map-layout-modal").classList.add("open"),document.body.style.overflow="hidden";const a=document.getElementById("btn-flex-zoom");a&&!a.classList.contains("active")&&a.click(),mo(),setTimeout(()=>Nt(u),150)}function no(){document.getElementById("map-layout-modal").classList.remove("open"),document.body.style.overflow=""}function zr(){const u=document.querySelector(".mlm-theme.active")?.dataset.theme??"dark";return{dark:{bg:"#080f1e",text:"#f0f6ff",textSub:"#94afc8",border:"rgba(255,255,255,0.12)",accent:"#3b82f6",cardBg:"#0c1526",cardBorder:"rgba(255,255,255,0.08)",gridLine:"rgba(255,255,255,0.04)"},light:{bg:"#f1f5f9",text:"#1e293b",textSub:"#64748b",border:"#cbd5e1",accent:"#2563eb",cardBg:"#ffffff",cardBorder:"#e2e8f0",gridLine:"rgba(0,0,0,0.04)"}}[u]}function Ve(u){return document.getElementById(u)?.value?.trim()??""}function ie(u){return document.getElementById(u)?.checked??!0}async function Ar(u=1.5){const h=document.getElementById("map");return h?(await Oi(),await window.html2canvas(h,{useCORS:!0,allowTaint:!0,scale:u,backgroundColor:"#080f1e",logging:!1})):null}async function Nt(u){const h=document.getElementById("mlm-canvas");if(!h)return;h.innerHTML=`
    <div style="display:flex;align-items:center;justify-content:center;
                height:100%;color:rgba(255,255,255,0.4);font-size:13px;
                font-family:'Inter',sans-serif;gap:8px;">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
           width="16" height="16" style="animation:spin 1s linear infinite;">
        <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
      </svg>
      Memuat snapshot peta...
    </div>`;const[a,p]=await Promise.all([Ar(1.5),Cr()]),_=a?(document.getElementById("map"),we(),a.toDataURL("image/jpeg",.93)):null,o=zr(),r=Ve("layout-title")||"Peta Dinamika Garis Pantai",c=Ve("layout-subtitle")||"",d=Ve("layout-author")||"",f=Ve("layout-area")||"",y=we(),g=ie("lyt-legend"),x=ie("lyt-north"),b=ie("lyt-scale"),P=ie("lyt-source"),k=ie("lyt-disclaimer"),B=ie("lyt-date"),S=new Date().toLocaleDateString("id-ID",{day:"numeric",month:"long",year:"numeric"}),{label:E,barWidthPx:Z}=fo(u,80),G=Math.min(Z,120),j=!g&&!x&&!b&&!P&&!k;h.innerHTML=`
    <div class="lyt-page" style="background:${o.bg};color:${o.text};width:${y.w}px;height:${y.h}px;">

      <!-- Garis grid dekoratif latar -->
      <div class="lyt-grid-bg" style="background-image:
        linear-gradient(${o.gridLine} 1px, transparent 1px),
        linear-gradient(90deg, ${o.gridLine} 1px, transparent 1px);
        background-size:24px 24px;"></div>

      <!-- Header strip -->
      <div class="lyt-header" style="border-bottom:2px solid ${o.accent};">
        <div class="lyt-accent-rule" style="background:${o.accent};"></div>
        <div class="lyt-title-block">
          <div class="lyt-eyebrow" style="color:${o.accent};">
            MONITORING DINAMIKA PESISIR NASIONAL · INDONESIA COASTLINES & RATES OF CHANGE
          </div>
          <div class="lyt-title" style="color:${o.text};">${r}</div>
          ${c?`<div class="lyt-subtitle" style="color:${o.textSub};">${c}</div>`:""}
          ${f?`<div class="lyt-area-tag" style="background:${o.accent}20;border:1px solid ${o.accent}40;color:${o.accent};">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="9" height="9"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            ${f}
          </div>`:""}
        </div>
        <div class="lyt-logo-area" style="color:${o.textSub};">
          ${p?`<div class="lyt-logo-box" style="border-color:${o.border};">
                 <img src="${p}" alt="Logo" style="width:100%;height:100%;object-fit:contain;display:block;"/>
               </div>
               <div style="font-size:7px;text-align:center;margin-top:3px;opacity:.6;letter-spacing:.05em;">DPRWLP BIG</div>`:`<div class="lyt-logo-box lyt-logo-fallback" style="border-color:${o.border};background:${o.cardBg};">
                 <svg viewBox="0 0 24 24" fill="none" stroke="${o.accent}" stroke-width="1.5" width="18" height="18">
                   <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                 </svg>
               </div>
               <div style="font-size:7px;text-align:center;margin-top:3px;opacity:.6;">DPRWLP BIG</div>`}
        </div>
      </div>

      <!-- Body: peta + panel kanan -->
      <div class="lyt-body">

        <!-- Kontainer peta -->
        <div class="lyt-map-container" style="border:1px solid ${o.cardBorder};">
          ${_?`<img src="${_}"
                    style="position:absolute;inset:0;width:100%;height:100%;
                           object-fit:cover;object-position:center;display:block;"/>`:`<div style="position:absolute;inset:0;display:flex;align-items:center;
                           justify-content:center;background:#07111f;
                           color:rgba(255,255,255,0.2);font-size:11px;">Snapshot peta</div>`}

          <!-- Overlay gradient bawah untuk legibilitas elemen -->
          <div style="position:absolute;bottom:0;left:0;right:0;height:60px;
                      background:linear-gradient(transparent,rgba(0,0,0,0.45));
                      pointer-events:none;"></div>

          ${x?`
          <!-- North Arrow — pojok kanan atas peta -->
          <div style="position:absolute;top:10px;right:10px;
                      background:${o.cardBg}cc;border:1px solid ${o.cardBorder};
                      border-radius:8px;padding:6px 5px;
                      display:flex;flex-direction:column;align-items:center;">
            <svg viewBox="0 0 32 52" fill="none" width="22" height="34">
              <!-- Panah utara (biru) -->
              <polygon points="16,2 23,32 16,26 9,32" fill="${o.accent}"/>
              <!-- Panah selatan (abu) -->
              <polygon points="16,50 9,20 16,26 23,20" fill="${o.cardBorder}" stroke="${o.border}" stroke-width=".5"/>
              <!-- Sumbu -->
              <line x1="16" y1="2" x2="16" y2="50" stroke="${o.border}" stroke-width=".5"/>
              <!-- Lingkaran tengah -->
              <circle cx="16" cy="26" r="3" fill="${o.bg}" stroke="${o.border}" stroke-width=".5"/>
            </svg>
            <div style="font-size:7px;font-weight:800;color:${o.text};margin-top:2px;
                        letter-spacing:.1em;text-align:center;">N</div>
          </div>`:""}

          ${b?`
          <!-- Scale bar — pojok kiri bawah peta -->
          <div style="position:absolute;bottom:10px;left:10px;
                      background:${o.cardBg}cc;border:1px solid ${o.cardBorder};
                      border-radius:6px;padding:4px 8px;">
            <!-- Bar bergaris-garis hitam putih -->
            <div style="display:flex;margin-bottom:2px;">
              <div style="width:${G/2}px;height:5px;background:${o.text};border-radius:1px 0 0 1px;"></div>
              <div style="width:${G/2}px;height:5px;background:${o.cardBorder};border-radius:0 1px 1px 0;"></div>
            </div>
            <!-- Tick + label -->
            <div style="display:flex;justify-content:space-between;
                        width:${G}px;font-size:6.5px;color:${o.textSub};
                        font-family:'DM Mono',monospace;">
              <span>0</span>
              <span style="flex:1;text-align:right;">${E}</span>
            </div>
            <div style="font-size:5.5px;color:${o.textSub};margin-top:1px;opacity:.7;">
              WGS 84 / EPSG:4326
            </div>
          </div>`:""}

          
        </div>

        <!-- Panel kanan — hanya tampil jika ada elemen aktif -->
        ${j?"":`
        <div class="lyt-right-panel" style="width:${y.h<700?210:230}px;">

          ${g?`
          <!-- Legenda -->
          <div class="lyt-card" style="background:${o.cardBg};border:1px solid ${o.cardBorder};">
            <div class="lyt-card-header" style="color:${o.accent};border-bottom:1px solid ${o.cardBorder};">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="9" height="9"><circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/></svg>
              LEGENDA
            </div>
            <div class="lyt-legend-body" style="color:${o.text};">

              <div class="lyt-legend-section" style="color:${o.textSub};">Laju Perubahan Pantai</div>
              <div class="lyt-legend-row">
                <div style="width:9px;height:9px;border-radius:50%;background:#ef4444;flex-shrink:0;"></div>
                <span>Abrasi &nbsp;<span style="color:${o.textSub};font-size:6.5px;">(erosi pantai)</span></span>
              </div>
              <div class="lyt-legend-row">
                <div style="width:9px;height:9px;border-radius:50%;background:#10d9a8;flex-shrink:0;"></div>
                <span>Akresi &nbsp;<span style="color:${o.textSub};font-size:6.5px;">(sedimentasi)</span></span>
              </div>
              <div class="lyt-legend-row">
                <div style="width:9px;height:9px;border-radius:50%;background:#8ba3c7;flex-shrink:0;"></div>
                <span>Stabil</span>
              </div>

              <div class="lyt-legend-section" style="color:${o.textSub};margin-top:7px;">Garis Pantai (per Tahun)</div>
              <div style="height:5px;width:100%;border-radius:2px;margin-bottom:3px;
                          background:linear-gradient(to right,hsl(0,100%,55%),hsl(60,100%,55%),hsl(140,100%,55%),hsl(220,100%,65%),hsl(280,100%,65%));"></div>
              <div style="display:flex;justify-content:space-between;font-size:6.5px;color:${o.textSub};">
                <span>1985</span><span>2000</span><span>2025</span>
              </div>

              <div class="lyt-legend-section" style="color:${o.textSub};margin-top:7px;">Kualitas Data</div>
              <div class="lyt-legend-row">
                <svg width="24" height="5" style="flex-shrink:0;">
                  <line x1="0" y1="2.5" x2="24" y2="2.5" stroke="${o.textSub}" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
                <span>Good</span>
              </div>
              <div class="lyt-legend-row">
                <svg width="24" height="5" style="flex-shrink:0;">
                  <line x1="0" y1="2.5" x2="24" y2="2.5" stroke="${o.textSub}" stroke-width="1.5" stroke-dasharray="5 3" stroke-linecap="round"/>
                </svg>
                <span>Insufficient Data</span>
              </div>
              <div class="lyt-legend-row">
                <svg width="24" height="5" style="flex-shrink:0;">
                  <line x1="0" y1="2.5" x2="24" y2="2.5" stroke="${o.textSub}" stroke-width="1.5" stroke-dasharray="2 3" stroke-linecap="round"/>
                </svg>
                <span>Unstable Data</span>
              </div>

              <!-- Cluster -->
              <div class="lyt-legend-section" style="color:${o.textSub};margin-top:7px;">Cluster Titik</div>
              <div class="lyt-legend-row">
                <div style="width:9px;height:9px;border-radius:50%;background:#ff4d4d;flex-shrink:0;"></div>
                <span>Mayoritas Abrasi</span>
              </div>
              <div class="lyt-legend-row">
                <div style="width:9px;height:9px;border-radius:50%;background:#00c9a7;flex-shrink:0;"></div>
                <span>Mayoritas Akresi</span>
              </div>
              <div class="lyt-legend-row">
                <div style="width:9px;height:9px;border-radius:50%;background:#f5a623;flex-shrink:0;"></div>
                <span>Campuran</span>
              </div>

            </div>
          </div>`:""}

          <!-- Informasi (selalu tampil jika panel kanan ada) -->
          <div class="lyt-card" style="background:${o.cardBg};border:1px solid ${o.cardBorder};">
            <div class="lyt-card-header" style="color:${o.accent};border-bottom:1px solid ${o.cardBorder};">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="9" height="9"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/></svg>
              INFORMASI PETA
            </div>
            <div style="font-size:7.5px;line-height:1.75;color:${o.textSub};padding:6px 8px;">
              ${d?`<div><strong style="color:${o.text};">Dibuat oleh</strong><br>${d}</div>`:""}
              ${B?`<div style="margin-top:3px;"><strong style="color:${o.text};">Tanggal</strong><br>${S}</div>`:""}
              <div style="margin-top:3px;"><strong style="color:${o.text};">Sistem Koordinat</strong><br>WGS 84 / EPSG:4326</div>
              <div style="margin-top:3px;"><strong style="color:${o.text};">Periode Data</strong><br>1985 – 2025</div>
              <div style="margin-top:3px;"><strong style="color:${o.text};">Resolusi Citra</strong><br>30 m (Landsat)</div>
            </div>
          </div>

          ${P?`
          <!-- Sumber data -->
          <div class="lyt-card" style="background:${o.cardBg};border:1px solid ${o.cardBorder};">
            <div class="lyt-card-header" style="color:${o.accent};border-bottom:1px solid ${o.cardBorder};">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="9" height="9"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
              SUMBER DATA
            </div>
            <div style="font-size:7px;line-height:1.7;color:${o.textSub};padding:6px 8px;">
              <div style="margin-bottom:2px;">• Landsat 5, 7, 8, 9 (USGS/NASA)</div>
              <div style="margin-bottom:2px;">• Sub-pixel waterline extraction</div>
              <div>• Diadaptasi dari DEA Coastlines</div>
              <div style="margin-top:3px;opacity:.7;">Geoscience Australia</div>
            </div>
          </div>`:""}

          ${k?`
          <!-- Disclaimer -->
          <div class="lyt-card" style="background:${o.cardBg};border:1px solid rgba(245,158,11,0.35);">
            <div class="lyt-card-header" style="color:#f59e0b;border-bottom:1px solid rgba(245,158,11,0.2);">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="9" height="9"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              DISCLAIMER
            </div>
            <div style="font-size:6.5px;line-height:1.65;color:${o.textSub};text-align:justify;padding:6px 8px;">
              Hasil analisis dipengaruhi oleh kondisi atmosfer, tutupan awan, dan variasi pasang surut saat akuisisi citra. Data bersifat indikatif untuk keperluan riset dan monitoring, tidak menggantikan survei resmi (hidrografi, topografi, UAV, LiDAR, SAR).
            </div>
          </div>`:""}

        </div>
        `}

      </div>

      <!-- Footer -->
      <div class="lyt-footer" style="border-top:1px solid ${o.border};color:${o.textSub};">
        <div class="lyt-footer-left">
          <span style="color:${o.accent};font-weight:600;letter-spacing:.04em;">© 2026 PIKSEL INA</span>
          <span style="opacity:.4;">|</span>
          <span>Direktorat Pemetaan Rupabumi Wilayah Laut dan Pantai</span>
          <span style="opacity:.4;">|</span>
          <span>Badan Informasi Geospasial</span>
        </div>
        ${B?`<div class="lyt-footer-right" style="color:${o.textSub};">${S}</div>`:""}
      </div>

    </div>`}async function Or(u){const h=document.getElementById("btn-lyt-png");h&&(h.disabled=!0,h.textContent="Memproses...");try{await Oi();const a=document.querySelector(".lyt-page");if(!a)throw new Error("Layout tidak ditemukan");const p=Ir(),_=p/96,o=await window.html2canvas(a,{useCORS:!0,scale:_,logging:!1,backgroundColor:null,width:a.offsetWidth,height:a.offsetHeight,windowWidth:a.offsetWidth,windowHeight:a.offsetHeight}),r=document.createElement("a"),d=(document.getElementById("layout-title")?.value?.trim()||"peta-garis-pantai").toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,""),f=we();r.download=`${d}_${f.label.replace(" ","-").toLowerCase()}_${p}dpi_${new Date().toISOString().slice(0,10)}.png`,r.href=o.toDataURL("image/png"),r.click()}catch(a){console.error("Export PNG gagal:",a),alert("Gagal export PNG. Pastikan koneksi internet aktif.")}finally{h&&(h.disabled=!1,h.innerHTML=`
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="7 10 12 15 17 10"/>
          <line x1="12" y1="15" x2="12" y2="3"/>
        </svg> Export PNG`)}}async function Zr(u){const h=document.getElementById("btn-lyt-clipboard");h&&(h.disabled=!0,h.textContent="Menyalin...");try{await Oi();const a=document.querySelector(".lyt-page");if(!a)throw new Error("Layout tidak ditemukan");(await window.html2canvas(a,{useCORS:!0,scale:1.5,logging:!1,backgroundColor:null,width:a.offsetWidth,height:a.offsetHeight,windowWidth:a.offsetWidth,windowHeight:a.offsetHeight})).toBlob(async _=>{try{await navigator.clipboard.write([new ClipboardItem({"image/png":_})]),h&&(h.textContent="✓ Tersalin!"),setTimeout(()=>{h&&(h.disabled=!1,h.innerHTML=`
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13">
                <rect x="9" y="9" width="13" height="13" rx="2"/>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
              </svg> Copy to Clipboard`)},2e3)}catch{alert("Browser tidak mendukung clipboard API. Gunakan Export PNG."),h&&(h.disabled=!1,h.textContent="Copy to Clipboard")}},"image/png")}catch(a){console.error("Copy clipboard gagal:",a),h&&(h.disabled=!1,h.textContent="Copy to Clipboard")}}async function Rr(u){await Nt(u),await new Promise(_=>setTimeout(_,500));const h=document.querySelector(".lyt-page")?.outerHTML;if(!h)return;const a=we(),p=window.open("","_blank");p.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Cetak PDF</title>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
      <style>
        * { margin:0; padding:0; box-sizing:border-box; }
        body { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
        @page { size: ${a.mmW}mm ${a.mmH}mm; margin: 0; }
        ${_o()}
        @media print {
          body { background: white; }
          .lyt-page {
            width: ${a.mmW}mm !important;
            height: ${a.mmH}mm !important;
            padding: 8mm !important;
            page-break-after: avoid;
          }
        }
      </style>
    </head>
    <body>
      ${h}
      <script>
        window.onload = () => setTimeout(() => { window.print(); window.close(); }, 800);
      <\/script>
    </body>
    </html>`),p.document.close()}function _o(){return`
    .lyt-page {
      position: relative;
      display: flex; flex-direction: column;
      overflow: hidden;
      padding: 16px 18px 12px;
      font-family: 'Inter', 'DM Sans', sans-serif;
    }
    .lyt-grid-bg {
      position: absolute; inset: 0;
      pointer-events: none; z-index: 0; opacity: .5;
    }
    .lyt-header {
      position: relative; z-index: 1;
      display: flex; align-items: flex-start;
      justify-content: space-between;
      padding-bottom: 8px; margin-bottom: 8px; gap: 12px;
    }
    .lyt-accent-rule {
      position: absolute; left: 0; top: 0; bottom: 8px;
      width: 3px; border-radius: 2px;
    }
    .lyt-title-block { flex: 1; padding-left: 10px; }
    .lyt-eyebrow {
      font-size: 6.5px; font-weight: 700; letter-spacing: .12em;
      text-transform: uppercase; margin-bottom: 3px; opacity: .8;
    }
    .lyt-title { font-size: 15px; font-weight: 700; line-height: 1.2; letter-spacing: -.02em; }
    .lyt-subtitle { font-size: 8.5px; margin-top: 2px; opacity: .8; }
    .lyt-area-tag {
      display: inline-flex; align-items: center; gap: 4px;
      font-size: 7.5px; font-weight: 500;
      padding: 2px 7px; border-radius: 10px; margin-top: 4px;
    }
    .lyt-logo-area { display: flex; flex-direction: column; align-items: center; flex-shrink: 0; }
    .lyt-logo-box {
      width: 38px; height: 38px; border-radius: 10px; border: 1px solid;
      display: flex; align-items: center; justify-content: center; overflow: hidden;
    }
    .lyt-logo-fallback { opacity: .7; }
    .lyt-body {
      position: relative; z-index: 1;
      flex: 1; display: flex; gap: 8px; min-height: 0;
    }
    .lyt-map-container {
      flex: 1; position: relative; border-radius: 6px;
      overflow: hidden; min-height: 0;
    }
    .lyt-right-panel {
      flex-shrink: 0;
      display: flex; flex-direction: column; gap: 5px;
      overflow: hidden;
    }
    .lyt-card { border-radius: 7px; overflow: hidden; flex-shrink: 0; }
    .lyt-card-header {
      font-size: 7px; font-weight: 700; letter-spacing: .1em;
      padding: 5px 8px; text-transform: uppercase;
      display: flex; align-items: center; gap: 5px;
    }
    .lyt-legend-body { padding: 6px 8px; }
    .lyt-legend-section {
      font-size: 7px; font-weight: 600; letter-spacing: .06em;
      text-transform: uppercase; margin-bottom: 3px; padding-top: 2px;
    }
    .lyt-legend-row {
      display: flex; align-items: center; gap: 6px;
      font-size: 7.5px; padding: 1.5px 0;
    }
    .lyt-footer {
      position: relative; z-index: 1;
      display: flex; align-items: center; justify-content: space-between;
      padding-top: 6px; margin-top: 6px;
      font-size: 7px; letter-spacing: .03em;
    }
    .lyt-footer-left { display: flex; align-items: center; gap: 7px; }
    .lyt-footer-right { font-size: 7px; opacity: .8; }
  `}function Nr(){if(document.getElementById("map-layout-styles"))return;const u=document.createElement("style");u.id="map-layout-styles",u.textContent=`
    #map-layout-modal {
      display: none; position: fixed; inset: 0;
      z-index: 99998; align-items: center; justify-content: center;
    }
    #map-layout-modal.open { display: flex; }

    .mlm-backdrop {
      position: absolute; inset: 0;
      background: rgba(4,8,18,0.78);
      backdrop-filter: blur(6px);
    }

    .mlm-panel {
      position: relative; z-index: 1;
      display: flex; gap: 0;
      width: min(1240px, 96vw);
      height: min(840px, 93vh);
      background: #0c1526;
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 14px;
      overflow: hidden;
      box-shadow: 0 24px 80px rgba(0,0,0,0.65);
    }

    .mlm-sidebar {
      width: 248px; flex-shrink: 0;
      background: #080f1e;
      border-right: 1px solid rgba(255,255,255,0.07);
      display: flex; flex-direction: column;
      overflow-y: auto; padding-bottom: 12px;
    }
    .mlm-sidebar::-webkit-scrollbar { width: 3px; }
    .mlm-sidebar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 2px; }

    .mlm-sidebar-header {
      display: flex; align-items: center; gap: 8px;
      padding: 14px 16px 12px;
      font-size: 12px; font-weight: 600; color: #f0f6ff;
      border-bottom: 1px solid rgba(255,255,255,0.07);
      flex-shrink: 0; font-family: 'Inter', sans-serif;
    }

    .mlm-section {
      padding: 12px 14px 8px;
      border-bottom: 1px solid rgba(255,255,255,0.05);
    }
    .mlm-section-label {
      font-size: 9.5px; font-weight: 600; text-transform: uppercase;
      letter-spacing: .08em; color: #4a6480; margin-bottom: 7px;
      font-family: 'Inter', sans-serif;
    }
    .mlm-sublabel {
      font-size: 9px; color: #4a6480; margin-bottom: 3px;
      font-family: 'Inter', sans-serif;
    }
    .mlm-row2 { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; }

    .mlm-input, .mlm-select {
      width: 100%; padding: 6px 10px; margin-bottom: 6px;
      background: #101d30; border: 1px solid rgba(255,255,255,0.1);
      border-radius: 6px; font-size: 12px;
      color: #f0f6ff; font-family: 'Inter', sans-serif;
      outline: none; transition: border-color .15s; appearance: none;
    }
    .mlm-select { margin-bottom: 0; cursor: pointer; }
    .mlm-input:focus, .mlm-select:focus { border-color: #3b82f6; }
    .mlm-input::placeholder { color: #2a3d54; }

    .mlm-toggles { display: flex; flex-direction: column; gap: 5px; }
    .mlm-chk {
      display: flex; align-items: center; gap: 8px;
      font-size: 12px; color: #94afc8; font-family: 'Inter', sans-serif;
      cursor: pointer; padding: 2px 0;
    }
    .mlm-chk input { accent-color: #3b82f6; cursor: pointer; }

    .mlm-toggle-all {
      font-size: 9px; font-weight: 600;
      padding: 2px 8px; border-radius: 4px;
      background: transparent; border: 1px solid rgba(255,255,255,0.12);
      color: #4a6480; font-family: 'Inter', sans-serif;
      cursor: pointer; transition: all .15s;
    }
    .mlm-toggle-all:hover { border-color: #3b82f6; color: #3b82f6; }

    .mlm-theme-row { display: flex; gap: 6px; }
    .mlm-theme {
      flex: 1; display: flex; flex-direction: column;
      align-items: center; gap: 4px;
      background: transparent; border: 1px solid rgba(255,255,255,0.1);
      border-radius: 6px; padding: 6px 4px; cursor: pointer;
      font-size: 10px; color: #4a6480; font-family: 'Inter', sans-serif;
      transition: all .15s;
    }
    .mlm-theme div { width: 24px; height: 16px; border-radius: 3px; }
    .mlm-theme.active { border-color: #3b82f6; color: #3b82f6; background: rgba(59,130,246,0.1); }

    .mlm-actions {
      padding: 12px 14px; display: flex; flex-direction: column; gap: 7px;
      margin-top: auto;
    }
    .mlm-btn {
      display: flex; align-items: center; justify-content: center; gap: 6px;
      padding: 8px 12px; border-radius: 7px; border: none;
      font-size: 12px; font-weight: 500; font-family: 'Inter', sans-serif;
      cursor: pointer; transition: all .15s; width: 100%;
    }
    .mlm-btn:disabled { opacity: .45; cursor: not-allowed; }
    .mlm-btn-primary   { background: #3b82f6; color: #fff; }
    .mlm-btn-primary:hover   { background: #2563eb; }
    .mlm-btn-accent    { background: rgba(16,185,129,0.15); color: #10b981; border: 1px solid rgba(16,185,129,0.3); }
    .mlm-btn-accent:hover    { background: rgba(16,185,129,0.25); }
    .mlm-btn-secondary { background: rgba(255,255,255,0.06); color: #94afc8; border: 1px solid rgba(255,255,255,0.1); }
    .mlm-btn-secondary:hover { background: rgba(255,255,255,0.1); color: #f0f6ff; }
    .mlm-btn-ghost     { background: transparent; color: #94afc8; border: 1px solid rgba(255,255,255,0.1); }
    .mlm-btn-ghost:hover     { border-color: rgba(255,255,255,0.25); color: #f0f6ff; }
    .mlm-btn-close     { background: transparent; color: #4a6480; font-size: 11px; border: none; }
    .mlm-btn-close:hover     { color: #94afc8; }

    /* Preview */
    .mlm-preview-wrap {
      flex: 1; display: flex; flex-direction: column; min-width: 0; overflow: hidden;
    }
    .mlm-preview-topbar {
      display: flex; align-items: center; justify-content: space-between;
      padding: 10px 16px 8px;
      border-bottom: 1px solid rgba(255,255,255,0.07); flex-shrink: 0;
    }
    .mlm-preview-label {
      font-size: 11px; font-weight: 500; color: #4a6480; font-family: 'Inter', sans-serif;
    }
    .mlm-preview-hint {
      font-size: 10px; color: #2a3d54; font-family: 'Inter', sans-serif;
    }
    .mlm-preview-scroll {
      flex: 1; overflow: auto; padding: 20px;
      background: #060c18;
      display: flex; align-items: flex-start; justify-content: center;
    }
    .mlm-preview-scroll::-webkit-scrollbar { width: 5px; height: 5px; }
    .mlm-preview-scroll::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 2px; }

    /* Canvas preview — ukuran diatur via JS sesuai paper size */
    .mlm-canvas {
      /* default A4 landscape */
      width: 864px; height: 612px;
      flex-shrink: 0;
      border-radius: 5px;
      overflow: hidden;
      box-shadow: 0 8px 40px rgba(0,0,0,0.55);
      cursor: pointer;
      transition: transform .2s;
    }
    .mlm-canvas:hover { transform: scale(1.01); }

    /* Layout page */
    ${_o()}

    @keyframes spin { to { transform: rotate(360deg); } }
  `,document.head.appendChild(u)}function Dr(u){let h=!1,a="distance",p=[],_=null,o=null,r=[],c=null;const d=document.getElementById("btn-measure");if(!d)return;if(!document.getElementById("measure-styles")){const M=document.createElement("style");M.id="measure-styles",M.textContent=`
      #btn-measure.active { background: rgba(26,122,255,0.18); color: var(--accent); }

      .measure-panel {
        position: absolute; bottom: 52px; left: 14px; z-index: 600;
        background: var(--surface); border: 1px solid var(--border-md);
        border-radius: var(--r-md); padding: 10px 13px;
        font-family: var(--font); font-size: 12px; color: var(--text-2);
        backdrop-filter: blur(6px);
        display: none; flex-direction: column; gap: 8px;
        min-width: 220px;
        box-shadow: 0 8px 24px rgba(0,0,0,0.4);
      }
      .measure-panel.visible { display: flex; }

      .mp-header { display:flex; align-items:center; justify-content:space-between; }
      .mp-title  { font-size:11px; font-weight:600; text-transform:uppercase;
                   letter-spacing:.07em; color:var(--accent); }
      .mp-close  { background:none; border:none; color:var(--text-3); cursor:pointer;
                   font-size:15px; line-height:1; padding:0 2px; }
      .mp-close:hover { color:var(--text-1); }

      .mp-mode { display:flex; gap:5px; }
      .mp-mode-btn { flex:1; padding:4px 8px; border-radius:4px; font-size:11px;
                     font-weight:500; cursor:pointer; border:1px solid var(--border);
                     background:transparent; color:var(--text-3); font-family:var(--font);
                     transition:all .15s; }
      .mp-mode-btn.active { background:var(--accent); color:#fff; border-color:var(--accent); }

      .mp-result { font-family:var(--mono); font-size:14px; font-weight:500;
                   color:var(--text-1); padding:6px 8px; background:var(--surface-2);
                   border-radius:var(--r-sm); border:1px solid var(--border); }
      .mp-result span { font-size:10px; color:var(--text-3); display:block;
                        font-family:var(--font); margin-bottom:2px; }

      .mp-hint { font-size:10px; color:var(--text-3); line-height:1.5; }
      .mp-actions { display:flex; gap:5px; }
      .mp-btn { flex:1; padding:5px 8px; border-radius:4px; font-size:11px;
                cursor:pointer; border:1px solid var(--border); background:transparent;
                color:var(--text-2); font-family:var(--font); transition:all .12s; }
      .mp-btn:hover { background:var(--surface-2); color:var(--text-1); }
      .mp-btn.primary { background:var(--accent); color:#fff; border-color:var(--accent); }
      .mp-btn.primary:hover { background:var(--accent-dim); }

      /* Dot marker pengukuran */
      .measure-dot {
        width:10px; height:10px; border-radius:50%;
        background:var(--accent); border:2px solid white;
        box-shadow:0 0 0 1px var(--accent);
      }
      .measure-label {
        background: rgba(10,22,40,0.88); border:1px solid var(--border-md);
        border-radius:4px; padding:3px 8px; font-family:var(--mono);
        font-size:11px; color:#fff; white-space:nowrap;
        box-shadow:0 2px 8px rgba(0,0,0,0.4);
      }
    `,document.head.appendChild(M)}const f=document.createElement("div");f.id="measure-panel",f.className="measure-panel",f.innerHTML=`
    <div class="mp-header">
      <span class="mp-title">📐 Ukur</span>
      <button class="mp-close" id="mp-close">✕</button>
    </div>
    <div class="mp-mode">
      <button class="mp-mode-btn active" data-mode="distance">Jarak</button>
      <button class="mp-mode-btn" data-mode="area">Luas</button>
    </div>
    <div class="mp-result" id="mp-result">
      <span>Hasil</span>—
    </div>
    <div class="mp-hint" id="mp-hint">Klik peta untuk mulai mengukur</div>
    <div class="mp-actions">
      <button class="mp-btn" id="mp-undo">↩ Undo</button>
      <button class="mp-btn primary" id="mp-clear">Hapus</button>
    </div>
  `,document.getElementById("map").appendChild(f);function y(M,z){const U=(z.lat-M.lat)*Math.PI/180,Y=(z.lng-M.lng)*Math.PI/180,it=Math.sin(U/2)**2+Math.cos(M.lat*Math.PI/180)*Math.cos(z.lat*Math.PI/180)*Math.sin(Y/2)**2;return 6371e3*2*Math.asin(Math.sqrt(it))}function g(){let M=0;for(let z=1;z<p.length;z++)M+=y(p[z-1],p[z]);return M}function x(){const M=p.length;if(M<3)return 0;const z=6371e3;let V=0;for(let U=0;U<M;U++){const Y=(U+1)%M,it=p[U].lng*Math.PI/180,ht=Math.log(Math.tan(Math.PI/4+p[U].lat*Math.PI/360)),Q=p[Y].lng*Math.PI/180,xt=Math.log(Math.tan(Math.PI/4+p[Y].lat*Math.PI/360));V+=(Q-it)*(xt+ht)}return Math.abs(V/2)*z*z}function b(M){return M<1e3?`${M.toFixed(1)} m`:`${(M/1e3).toFixed(3)} km`}function P(M){return M<1e4?`${M.toFixed(1)} m²`:M<1e6?`${(M/1e4).toFixed(3)} ha`:`${(M/1e6).toFixed(4)} km²`}function k(){const M=document.getElementById("mp-result");if(M){if(p.length<2){M.innerHTML="<span>Hasil</span>—";return}a==="distance"?M.innerHTML=`<span>Total Jarak</span>${b(g())}`:M.innerHTML=p.length>=3?`<span>Luas Area</span>${P(x())}`:"<span>Luas Area</span>— (min. 3 titik)"}}function B(){const M=document.getElementById("mp-hint");M&&(p.length===0?M.textContent="Klik peta untuk mulai mengukur":a==="distance"?M.textContent=`${p.length} titik · klik lanjutkan, Undo/Hapus untuk edit`:M.textContent=`${p.length} titik · min 3 untuk luas · klik lanjutkan`)}function S(){if(_?.remove(),o?.remove(),p.length>=2){const M={color:"#1a7aff",weight:2.5,dashArray:"6,4",opacity:.9};_=L.polyline(p.map(z=>[z.lat,z.lng]),M).addTo(u),a==="area"&&p.length>=3&&(o=L.polygon(p.map(z=>[z.lat,z.lng]),{color:"#1a7aff",weight:1.5,fillColor:"#1a7aff",fillOpacity:.12,dashArray:"5,4"}).addTo(u))}if(c?.remove(),p.length>=2){const M=p[p.length-1],z=p[p.length-2],V=(M.lat+z.lat)/2,U=(M.lng+z.lng)/2,Y=a==="distance"?b(y(z,M)):p.length>=3?P(x()):"";Y&&(c=L.marker([V,U],{icon:L.divIcon({className:"measure-label",html:Y,iconAnchor:[0,0]}),interactive:!1}).addTo(u))}k(),B()}function E(M,z){const V=L.marker(M,{icon:L.divIcon({className:"measure-dot",iconSize:[10,10],iconAnchor:[5,5]}),draggable:!0,autoPan:!0}).addTo(u);return V.on("drag",U=>{p[z]=U.target.getLatLng(),S()}),V.on("dragend",()=>S()),V.on("mouseover",()=>{u.getContainer().style.cursor="grab"}),V.on("mouseout",()=>{u.getContainer().style.cursor="crosshair"}),r.push(V),V}function Z(M){if(!h)return;const z=p.length;p.push(M.latlng),E(M.latlng,z),S()}function G(){p=[],_?.remove(),_=null,o?.remove(),o=null,c?.remove(),c=null,r.forEach(M=>M.remove()),r=[],k(),B()}function j(){h=!0,d.classList.add("active"),f.classList.add("visible"),u.getContainer().style.cursor="crosshair",u.on("click",Z)}function et(){h=!1,d.classList.remove("active"),f.classList.remove("visible"),u.getContainer().style.cursor="",u.off("click",Z),G()}d.addEventListener("click",M=>{M.stopPropagation(),h?et():j()}),L.DomEvent.disableClickPropagation(f),document.getElementById("mp-close")?.addEventListener("click",M=>{M.stopPropagation(),et()}),document.getElementById("mp-clear")?.addEventListener("click",M=>{M.stopPropagation(),G()}),document.getElementById("mp-undo")?.addEventListener("click",M=>{if(M.stopPropagation(),p.length===0)return;p.pop();const z=r.pop();z?.off(),z?.remove(),c?.remove(),c=null,S()}),f.querySelectorAll(".mp-mode-btn").forEach(M=>{M.addEventListener("click",z=>{z.stopPropagation(),a=M.dataset.mode,f.querySelectorAll(".mp-mode-btn").forEach(V=>V.classList.remove("active")),M.classList.add("active"),G()})}),document.addEventListener("keydown",M=>{M.key==="Escape"&&h&&et()})}const go={ssp126:{label:"SSP1-2.6",short:"SSP1-2.6",color:"#22c55e",curve:[[2025,.08],[2030,.1],[2040,.14],[2050,.18],[2060,.23],[2070,.28],[2080,.33],[2090,.38],[2100,.44]]},ssp245:{label:"SSP2-4.5",short:"SSP2-4.5",color:"#f59e0b",curve:[[2025,.09],[2030,.12],[2040,.17],[2050,.24],[2060,.31],[2070,.39],[2080,.47],[2090,.56],[2100,.65]]},ssp585:{label:"SSP5-8",short:"SSP5-8.5",color:"#ef4444",curve:[[2025,.1],[2030,.14],[2040,.21],[2050,.32],[2060,.44],[2070,.57],[2080,.71],[2090,.86],[2100,1.01]]}};function vo(u,h){const a=go[u].curve;if(h<=a[0][0])return a[0][1];if(h>=a[a.length-1][0])return a[a.length-1][1];for(let p=0;p<a.length-1;p++){const[_,o]=a[p],[r,c]=a[p+1];if(h>=_&&h<=r)return o+(c-o)*((h-_)/(r-_))}return 0}const D={active:!1,scenario:"ssp245",fcYear:2025,fcPlaying:!1,fcTimer:null,fcSpeed:800,ratesFeatures:[],overlayLayer:null,mapInstance:null,tileLoader:null,_moveDebounce:null};function Fr(u,h){!u||!h||(D.mapInstance=u,D.tileLoader=h,Wr(),Hr(),jr(),D.overlayLayer=window.L.layerGroup().addTo(u),u.on("moveend zoomend",()=>{D.active&&(clearTimeout(D._moveDebounce),D._moveDebounce=setTimeout(Le,300))}))}function Gr(u){if(!Array.isArray(u))return;const h=new Set(u.map(a=>a.geometry.coordinates.join(",")));D.ratesFeatures=[...D.ratesFeatures.filter(a=>!h.has(a.geometry.coordinates.join(","))),...u],D.active&&Le()}function Hr(){const u=document.getElementById("tab-forecast");u&&(u.innerHTML=`

    <!-- Header label -->
    <div class="slr-header-label">PROYEKSI SEA LEVEL RISE</div>

    <!-- Tahun besar -->
    <div class="slr-year-hero">
      <span class="slr-year-num" id="slr-fc-year">2025</span>
      <span class="slr-year-badge">PROYEKSI</span>
    </div>

    <!-- Slider tahun -->
    <input type="range" class="slr-slider" id="slr-fc-slider"
           min="2025" max="2100" value="2025" step="1"/>
    <div class="slr-slider-labels">
      <span>2025</span><span>2100</span>
    </div>

    <!-- Skenario -->
    <div class="slr-section-gap">
      <div class="slr-section-label">SKENARIO IPCC AR6</div>
      <div class="slr-scen-row">
        <button class="slr-scen-btn" data-scen="ssp126" style="--sc:#22c55e">
          <span class="slr-scen-dot"></span>SSP1-2.6
        </button>
        <button class="slr-scen-btn active" data-scen="ssp245" style="--sc:#f59e0b">
          <span class="slr-scen-dot"></span>SSP2-4.5
        </button>
        <button class="slr-scen-btn" data-scen="ssp585" style="--sc:#ef4444">
          <span class="slr-scen-dot"></span>SSP5-8.5
        </button>
      </div>
    </div>

    <!-- Play controls -->
    <div class="slr-controls">
      <button class="slr-ctrl-btn" id="slr-fc-prev" title="Mundur 1 tahun">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="12" height="12">
          <polyline points="15 18 9 12 15 6"/>
        </svg>
      </button>
      <button class="slr-ctrl-btn slr-play-btn" id="slr-fc-play" title="Play / Pause">
        <svg id="slr-fc-icon" viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
          <polygon points="5 3 19 12 5 21 5 3"/>
        </svg>
      </button>
      <button class="slr-ctrl-btn" id="slr-fc-next" title="Maju 1 tahun">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="12" height="12">
          <polyline points="9 18 15 12 9 6"/>
        </svg>
      </button>
      <select class="slr-speed-sel" id="slr-fc-speed">
        <option value="1500">Lambat</option>
        <option value="800" selected>Normal</option>
        <option value="400">Cepat</option>
        <option value="120">Sangat cepat</option>
      </select>
    </div>

    <!-- Metrik -->
    <div class="slr-info-box">
      <div class="slr-info-row">
        <span class="slr-info-lbl">Skenario</span>
        <span class="slr-info-val" id="slr-m-scen">–</span>
      </div>
      <div class="slr-info-row">
        <span class="slr-info-lbl">
          Kenaikan muka air
          <span class="slr-hint" title="Nilai median global IPCC AR6 WGI Table 9.9, baseline 2005. Bukan nilai lokal — subsidence tanah tidak diperhitungkan.">ⓘ</span>
        </span>
        <span class="slr-info-val" id="slr-m-slr" style="color:#f59e0b">–</span>
      </div>
      <div class="slr-info-row">
        <span class="slr-info-lbl">Delta dari sekarang</span>
        <span class="slr-info-val" id="slr-m-delta">–</span>
      </div>
      <div class="slr-divider-thin"></div>
      <div class="slr-info-row">
        <span class="slr-info-lbl slr-lbl-high">● Risiko Tinggi</span>
        <span class="slr-info-val slr-val-high" id="slr-m-high">–</span>
      </div>
      <div class="slr-info-row">
        <span class="slr-info-lbl slr-lbl-mid">● Risiko Sedang</span>
        <span class="slr-info-val slr-val-mid" id="slr-m-mid">–</span>
      </div>
      <div class="slr-info-row">
        <span class="slr-info-lbl slr-lbl-low">● Relatif Aman</span>
        <span class="slr-info-val slr-val-low" id="slr-m-low">–</span>
      </div>
    </div>

    <!-- Legenda -->
    <div class="slr-section-gap">
      <div class="slr-section-label">LEGENDA ZONA RISIKO</div>
      <div class="slr-legend">
        <div class="slr-leg-item">
          <div class="slr-leg-dot slr-dot-high"></div>
          <div>
            <div class="slr-leg-name">Risiko Tinggi</div>
            <div class="slr-leg-desc">Abrasi &gt; 2 m/thn atau efek SLR kumulatif &gt; 50 m</div>
          </div>
        </div>
        <div class="slr-leg-item">
          <div class="slr-leg-dot slr-dot-mid"></div>
          <div>
            <div class="slr-leg-name">Risiko Sedang</div>
            <div class="slr-leg-desc">Abrasi ringan atau SLR kumulatif 20–50 m</div>
          </div>
        </div>
        <div class="slr-leg-item">
          <div class="slr-leg-dot slr-dot-low"></div>
          <div>
            <div class="slr-leg-name">Relatif Aman</div>
            <div class="slr-leg-desc">Laju akresi aktif — garis pantai bergerak maju</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Disclaimer / Metodologi -->
    <div class="slr-section-gap">
      <div class="slr-section-label">TENTANG MODEL INI</div>
      <div class="slr-disclaimer">

        <div class="slr-disc-block">
          <div class="slr-disc-title">Apa itu IPCC AR6 &amp; Skenario SSP?</div>
          <div class="slr-disc-text">
            <a href="https://www.ipcc.ch/report/ar6/wg1/" target="_blank" rel="noopener" style="color: var(--accent); text-decoration: none; border-bottom: 1px dashed var(--accent); padding-bottom: 1px;"><b>IPCC AR6</b></a> 
            (Sixth Assessment Report, 2021) adalah laporan ilmiah
            perubahan iklim global terkini. Proyeksi kenaikan muka air laut
            menggunakan skenario <a href="https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-1/#1.6" target="_blank" rel="noopener" style="color: var(--accent); text-decoration: none; border-bottom: 1px dashed var(--accent); padding-bottom: 1px;"><b>SSP</b></a> (Shared Socioeconomic Pathways) —
            jalur emisi gas rumah kaca yang berbeda hingga tahun 2100.
          </div>
        </div>

        <div class="slr-disc-block">
          <div class="slr-disc-scen-list">
            <div class="slr-disc-scen-item">
              <span class="slr-disc-dot" style="background:#22c55e"></span>
              <div class="slr-disc-text">
                <b>SSP1-2.6 — Optimis</b><br>
                Emisi turun drastis sesuai Paris Agreement (&lt;2°C).
                Kenaikan ~44 cm di 2100. Skenario terbaik yang masih realistis.
              </div>
            </div>
            <div class="slr-disc-scen-item">
              <span class="slr-disc-dot" style="background:#f59e0b"></span>
              <div class="slr-disc-text">
                <b>SSP2-4.5 — Moderat</b><br>
                Kebijakan iklim parsial, emisi memuncak sekitar 2040.
                Kenaikan ~65 cm di 2100. Skenario referensi umum.
              </div>
            </div>
            <div class="slr-disc-scen-item">
              <span class="slr-disc-dot" style="background:#ef4444"></span>
              <div class="slr-disc-text">
                <b>SSP5-8.5 — Pesimis</b><br>
                Emisi terus meningkat tanpa mitigasi berarti.
                Kenaikan ~101 cm di 2100. Digunakan sebagai batas atas perencanaan.
              </div>
            </div>
          </div>
        </div>

        <div class="slr-disc-block">
          <div class="slr-disc-title">Asal nilai kenaikan muka air</div>
          <div class="slr-disc-text">
            Nilai SLR diinterpolasi dari tabel median 
            <a href="https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-9/" target="_blank" rel="noopener" style="color: var(--accent); text-decoration: none; border-bottom: 1px dashed var(--accent); padding-bottom: 1px;"><b>IPCC AR6 WG1 (Table 9.1)</b></a>,
            global mean sea level, baseline 2005. Khusus skenario SSP5-8.5 tahun 2100, permodelan menggunakan nilai ambang atas (1.01 m) untuk mencakup proyeksi risiko maksimal. Nilai ini <b>tidak memperhitungkan
            subsidence tanah lokal</b> — di beberapa wilayah pesisir Indonesia,
            penurunan tanah bisa 2–4× memperbesar dampak nyata di lapangan.
          </div>
        </div>

        <div class="slr-disc-block">
          <div class="slr-disc-title">Bagaimana zona risiko dihitung?</div>
          <div class="slr-disc-text">
            Model menggunakan <b>rates of change</b> (laju perubahan garis pantai,
            m/tahun per titik) sebagai input utama. Estimasi pergeseran horizontal:
          </div>
          <div class="slr-disc-formula">
            displacement = |abrasi/akresi| × ΔTahun + SLR × 20
          </div>
          <div class="slr-disc-text">
            Faktor ×20 = asumsi slope pantai 1:20 (1 m SLR ≈ 20 m mundur secara
            horizontal).
          </div>
        </div>

        <div class="slr-disc-warn">
          <strong style="display:block; margin-bottom:6px; color:var(--text-2);">⚠ Peringatan & Keterbatasan Model</strong>
          Model ini bersifat indikatif, disusun dari analisis <i>rates of change</i> hasil ekstraksi garis pantai multi-temporal (diadaptasi dari metode <b>Digital Earth Australia Coastlines</b> oleh Geoscience Australia).
          
          <div style="margin-top: 8px; font-weight: 600;">Akurasi hasil sangat dipengaruhi oleh:</div>
          <ul style="margin: 4px 0 8px 18px; padding: 0; line-height: 1.5;">
            <li>Kualitas & resolusi spasial-temporal citra satelit.</li>
            <li>Dinamika pasang surut laut dan tutupan awan.</li>
            <li>Performa algoritma proses ekstraksi garis pantai.</li>
          </ul>

          <span style="font-style: italic; opacity: 0.9;">
            Hasil pemodelan bukan representasi absolut posisi garis pantai. Tetap diperlukan validasi lapangan dan data referensi tambahan untuk pengambilan keputusan teknis.
          </span>
        </div>

      </div>
    </div>
  `)}function jr(){document.getElementById("slr-fc-slider")?.addEventListener("input",u=>{ne(),Je(parseInt(u.target.value))}),document.getElementById("slr-fc-prev")?.addEventListener("click",()=>{ne(),Je(Math.max(2025,D.fcYear-1))}),document.getElementById("slr-fc-next")?.addEventListener("click",()=>{ne(),Je(Math.min(2100,D.fcYear+1))}),document.getElementById("slr-fc-play")?.addEventListener("click",()=>{D.fcPlaying?ne():oo()}),document.getElementById("slr-fc-speed")?.addEventListener("change",u=>{D.fcSpeed=parseInt(u.target.value),D.fcPlaying&&(ne(),oo())}),document.querySelectorAll(".slr-scen-btn").forEach(u=>{u.addEventListener("click",()=>{document.querySelectorAll(".slr-scen-btn").forEach(h=>h.classList.remove("active")),u.classList.add("active"),D.scenario=u.dataset.scen,Zi(),Le()})}),document.querySelectorAll(".sb-tab").forEach(u=>{u.addEventListener("click",h=>{const a=h.target.closest(".sb-tab");if(!a)return;const _=a.getAttribute("data-tab")==="forecast";D.active!==_&&(D.active=_,_?Le():(ne(),D.overlayLayer?.clearLayers()))})})}function oo(){D.fcPlaying=!0,yo(!0);const u=()=>{if(!D.fcPlaying)return;const h=D.fcYear>=2100?2025:D.fcYear+1;Je(h),D.fcTimer=setTimeout(u,D.fcSpeed)};D.fcTimer=setTimeout(u,D.fcSpeed)}function ne(){D.fcPlaying=!1,clearTimeout(D.fcTimer),yo(!1)}function yo(u){const h=document.getElementById("slr-fc-icon");h&&(h.innerHTML=u?'<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>':'<polygon points="5 3 19 12 5 21 5 3"/>')}function Je(u){D.fcYear=u;const h=document.getElementById("slr-fc-year");h&&(h.textContent=u);const a=document.getElementById("slr-fc-slider");a&&(a.value=u),Zi(),Le()}function Zi(){const u=D.fcYear,h=D.scenario,a=vo(h,u),p=u-2025,_=go[h],o=y=>document.getElementById(y);o("slr-m-scen")&&(o("slr-m-scen").textContent=_.label,o("slr-m-scen").style.color=_.color),o("slr-m-slr")&&(o("slr-m-slr").textContent=`+${a.toFixed(2)} m`),o("slr-m-delta")&&(o("slr-m-delta").textContent=`+${p} tahun`);const r=bo(),{high:c,mid:d,low:f}=Ur(r,a,p);o("slr-m-high")&&(o("slr-m-high").textContent=`${c.toLocaleString("id-ID")} titik`),o("slr-m-mid")&&(o("slr-m-mid").textContent=`${d.toLocaleString("id-ID")} titik`),o("slr-m-low")&&(o("slr-m-low").textContent=`${f.toLocaleString("id-ID")} titik`)}function bo(){if(!D.mapInstance)return D.ratesFeatures;const h=D.mapInstance.getBounds().pad(.05);return D.ratesFeatures.filter(a=>{const[p,_]=a.geometry.coordinates;return h.contains(window.L.latLng(_,p))})}function xo(u,h,a){const p=Math.abs(Math.min(0,u))*a,_=h*20,o=p+_,r=Math.min(1200,50+o*1.5);return u<-2||o>50?{cat:"high",color:"#ef4444",fill:"rgba(239,68,68,0.35)",radius:r}:u<0||o>20?{cat:"mid",color:"#f59e0b",fill:"rgba(245,158,11,0.35)",radius:r}:{cat:"low",color:"#22c55e",fill:"rgba(34,197,94,0.30)",radius:Math.min(500,50+u*a*.8)}}function Ur(u,h,a){let p=0,_=0,o=0;return u.forEach(r=>{const c=r.properties?.rate_time??0,d=xo(c,h,a);d.cat==="high"?p++:d.cat==="mid"?_++:o++}),{high:p,mid:_,low:o}}function Le(){if(D.overlayLayer?.clearLayers(),!D.active)return;const u=vo(D.scenario,D.fcYear),h=D.fcYear-2025,a=window.L,p=bo();if(!p.length)return;const _=50,o=p.length>_?Math.ceil(p.length/_):1;p.forEach((r,c)=>{if(c%o!==0)return;const[d,f]=r.geometry.coordinates,y=r.properties?.rate_time??0,g=xo(y,u,h),b=(Math.abs(Math.min(0,y))*h+u*20).toFixed(0);a.circle([f,d],{radius:g.radius,color:g.color,fillColor:g.fill,weight:.8,opacity:.8,fillOpacity:1}).bindTooltip(`<b>Rate:</b> ${y>=0?"+":""}${y.toFixed(2)} m/thn<br><b>SLR ${D.fcYear}:</b> +${u.toFixed(2)} m<br><b>Est. mundur:</b> ~${b} m`,{sticky:!0,className:"slr-tip"}).addTo(D.overlayLayer)}),Zi()}function Wr(){if(document.getElementById("slr-styles"))return;const u=document.createElement("style");u.id="slr-styles",u.textContent=`

    /* ── Struktur tab ──────────────────────────────────── */
    #tab-forecast {
      padding: 16px 14px 24px;
      display: flex;
      flex-direction: column;
      gap: 0;
      overflow-y: auto;
    }

    /* Header label */
    .slr-header-label {
      font-size: 9px; font-weight: 700; letter-spacing: .12em;
      text-transform: uppercase; color: var(--text-3);
      margin-bottom: 8px;
    }

    /* Tahun besar */
    .slr-year-hero {
      display: flex; align-items: baseline; gap: 10px;
      margin-bottom: 14px;
    }
    .slr-year-num {
      font-size: 46px; font-weight: 800; line-height: 1;
      letter-spacing: -.02em;
      color: var(--text-1); font-family: var(--mono, monospace);
    }
    .slr-year-badge {
      font-size: 9px; font-weight: 700; letter-spacing: .1em;
      text-transform: uppercase;
      color: #f59e0b;
      padding: 3px 7px; border-radius: 4px;
      background: rgba(245,158,11,0.10);
      border: 1px solid rgba(245,158,11,0.22);
    }

    /* Slider */
    .slr-slider {
      display: block; width: 100%; height: 4px;
      accent-color: #f59e0b;
      margin-bottom: 5px; cursor: pointer;
    }
    .slr-slider-labels {
      display: flex; justify-content: space-between;
      font-size: 9px; color: var(--text-3);
    }

    /* Section gap */
    .slr-section-gap { margin-top: 18px; }
    .slr-section-label {
      font-size: 9px; font-weight: 700; letter-spacing: .12em;
      text-transform: uppercase; color: var(--text-3);
      margin-bottom: 9px;
    }

    /* Skenario */
    .slr-scen-row {
      display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px;
    }
    .slr-scen-btn {
      display: flex; align-items: center; justify-content: center; gap: 5px;
      padding: 7px 4px; border-radius: 7px; font-size: 10px; font-weight: 600;
      border: 1px solid var(--border); background: transparent;
      color: var(--text-3); cursor: pointer; transition: all .15s;
      font-family: var(--font); white-space: nowrap;
    }
    .slr-scen-btn:hover:not(.active) {
      background: var(--surface); color: var(--text-2);
    }
    .slr-scen-btn.active {
      background: color-mix(in srgb, var(--sc) 16%, transparent);
      border-color: color-mix(in srgb, var(--sc) 48%, transparent);
      color: var(--sc);
    }
    .slr-scen-dot {
      width: 7px; height: 7px; border-radius: 50%;
      background: var(--sc); flex-shrink: 0;
    }

    /* Controls */
    .slr-controls {
      display: flex; align-items: center; gap: 8px;
      margin-top: 14px; margin-bottom: 14px;
    }
    .slr-ctrl-btn {
      display: flex; align-items: center; justify-content: center;
      width: 32px; height: 32px; border-radius: 7px; flex-shrink: 0;
      border: 1px solid var(--border); background: var(--surface);
      color: var(--text-2); cursor: pointer; transition: all .12s;
    }
    .slr-ctrl-btn:hover { background: var(--surface-2); color: var(--text-1); }
    .slr-play-btn {
      background: rgba(245,158,11,0.14);
      color: #f59e0b;
      border-color: rgba(245,158,11,0.35);
    }
    .slr-play-btn:hover { background: rgba(245,158,11,0.26); }
    .slr-speed-sel {
      flex: 1; padding: 7px 8px;
      background: var(--surface); border: 1px solid var(--border);
      border-radius: 7px; color: var(--text-2);
      font-size: 11px; font-family: var(--font);
      cursor: pointer; outline: none;
    }

    /* Info box */
    .slr-info-box {
      background: var(--surface); border: 1px solid var(--border);
      border-radius: 9px; padding: 12px 13px;
      display: flex; flex-direction: column; gap: 8px;
    }
    .slr-info-row {
      display: flex; justify-content: space-between;
      align-items: center; gap: 8px;
    }
    .slr-info-lbl {
      font-size: 10px; color: var(--text-3);
      display: flex; align-items: center; gap: 4px;
      line-height: 1.4;
    }
    .slr-info-val {
      font-size: 11px; color: var(--text-1); font-weight: 600;
      white-space: nowrap;
    }
    .slr-hint {
      font-size: 9px; color: var(--text-3);
      cursor: help; opacity: .7;
    }
    .slr-divider-thin {
      height: 1px; background: var(--border); margin: 2px 0;
    }
    .slr-lbl-high { color: #ef4444 !important; }
    .slr-lbl-mid  { color: #f59e0b !important; }
    .slr-lbl-low  { color: #22c55e !important; }
    .slr-val-high { color: #ef4444 !important; }
    .slr-val-mid  { color: #f59e0b !important; }
    .slr-val-low  { color: #22c55e !important; }

    /* Legenda */
    .slr-legend { display: flex; flex-direction: column; gap: 10px; }
    .slr-leg-item { display: flex; align-items: flex-start; gap: 10px; }
    .slr-leg-dot {
      width: 14px; height: 14px; border-radius: 50%;
      flex-shrink: 0; margin-top: 2px;
    }
    .slr-dot-high { background:#ef4444; box-shadow: 0 0 8px rgba(239,68,68,0.7); }
    .slr-dot-mid  { background:#f59e0b; box-shadow: 0 0 8px rgba(245,158,11,0.7); }
    .slr-dot-low  { background:#22c55e; box-shadow: 0 0 8px rgba(34,197,94,0.7); }
    .slr-leg-name {
      font-size: 11px; font-weight: 600; color: var(--text-1);
      margin-bottom: 3px;
    }
    .slr-leg-desc { font-size: 9px; color: var(--text-3); line-height: 1.5; }

    /* Disclaimer */
    .slr-disclaimer {
      background: var(--surface); border: 1px solid var(--border);
      border-radius: 9px; padding: 13px 13px;
      display: flex; flex-direction: column; gap: 14px;
    }
    .slr-disc-block { display: flex; flex-direction: column; gap: 6px; }
    .slr-disc-title {
      font-size: 10px; font-weight: 700; color: var(--text-2);
      text-transform: uppercase; letter-spacing: .04em;
    }
    .slr-disc-text {
      font-size: 10px; color: var(--text-3); line-height: 1.7;
    }
    .slr-disc-scen-list { display: flex; flex-direction: column; gap: 10px; }
    .slr-disc-scen-item {
      display: flex; gap: 8px; align-items: flex-start;
    }
    .slr-disc-dot {
      width: 8px; height: 8px; border-radius: 50%;
      flex-shrink: 0; margin-top: 4px;
    }
    .slr-disc-formula {
      padding: 7px 10px; border-radius: 6px;
      background: rgba(255,255,255,0.04);
      border: 1px solid var(--border);
      font-family: var(--mono, monospace);
      font-size: 10px; color: var(--text-2);
      margin: 4px 0;
    }
    .slr-disc-warn {
      font-size: 9px; color: var(--text-3); line-height: 1.6;
      padding: 8px 10px; border-radius: 6px;
      background: rgba(245,158,11,0.06);
      border: 1px solid rgba(245,158,11,0.18);
    }

    /* Leaflet tooltip */
    .slr-tip {
      background: #0c1526 !important;
      border: 1px solid rgba(255,255,255,0.14) !important;
      color: #eef2ff !important;
      font-size: 11px !important; line-height: 1.7 !important;
      border-radius: 7px !important; padding: 7px 10px !important;
      box-shadow: 0 4px 16px rgba(0,0,0,0.5) !important;
    }
    .slr-tip::before { display: none !important; }
  `,document.head.appendChild(u)}function $r({onOpacityChange:u,onToggleShorelines:h,onToggleRates:a}={}){function p(){const r=document.getElementById("app"),d=document.getElementById("sidebar").classList.toggle("collapsed");r.classList.toggle("sidebar-collapsed",d)}document.getElementById("btn-sidebar-toggle")?.addEventListener("click",p),document.getElementById("btn-topbar-sidebar")?.addEventListener("click",p),document.querySelectorAll(".sb-tab").forEach(r=>{r.addEventListener("click",()=>{const c=r.dataset.tab;document.querySelectorAll(".sb-tab").forEach(d=>d.classList.toggle("active",d.dataset.tab===c)),document.querySelectorAll(".sb-panel").forEach(d=>d.classList.toggle("active",d.id===`tab-${c}`))})}),document.querySelectorAll(".panel-header").forEach(r=>{r.addEventListener("click",()=>{const c=r.nextElementSibling,d=r.querySelector(".ph-chev");if(!c)return;const f=c.style.display==="none";c.style.display=f?"":"none",d?.classList.toggle("open",f)})});const _=document.getElementById("opacity-slider"),o=document.getElementById("opacity-val");_?.addEventListener("input",()=>{const r=parseInt(_.value)/100;o&&(o.textContent=_.value+"%"),u?.(r)}),document.getElementById("toggle-shorelines")?.addEventListener("change",r=>h?.(r.target.checked)),document.getElementById("toggle-rates")?.addEventListener("change",r=>a?.(r.target.checked))}function qr(u){document.getElementById("btn-zoom-in")?.addEventListener("click",()=>u.zoomIn()),document.getElementById("btn-zoom-out")?.addEventListener("click",()=>u.zoomOut()),document.getElementById("btn-fitbounds")?.addEventListener("click",()=>u.setView([-2.5,118],5)),document.getElementById("btn-locate")?.addEventListener("click",()=>u.locate({setView:!0,maxZoom:12})),document.getElementById("btn-fullscreen")?.addEventListener("click",()=>{const h=document.getElementById("map");document.fullscreenElement?document.exitFullscreen():h.requestFullscreen?.()})}const dt=ar("map",{center:[-2.5,118],zoom:5});or(dt);const gt=new Xs(dt,{yearMin:1984,yearMax:2025});await gt.init();const ke=new mr(dt);gt.onTileLoaded=(u,h)=>{u?.features&&ke.addShorelineFeatures(u.features),h?.features&&ke.addRateFeatures(h.features),h?.features&&Gr(h.features)};gt.onClearTiles=()=>{ke.clear()};Mr(dt,null,gt);Fr(dt,gt);const{shorelinesGroup:so,ratesGroup:ro}=gt,Vr=document.getElementById("filter-panel-wrap");new dr({container:Vr,yearMin:1985,yearMax:2025,onFilterChange:u=>{gt.applyFilter({yearMin:u.yearMin,yearMax:u.yearMax,showAbrasi:u.showAbrasi,showAkresi:u.showAkresi,showStabil:u.showStabil,minRate:parseInt(document.getElementById("fp-rate")?.value??0),certGood:u.certGood,certInsufficient:u.certInsufficient,certUnstable:u.certUnstable})}});$r({onOpacityChange:u=>gt.setShorelinesOpacity(u),onToggleShorelines:u=>u?dt.addLayer(so):dt.removeLayer(so),onToggleRates:u=>u?dt.addLayer(ro):dt.removeLayer(ro)});qr(dt);Dr(dt);hr(gt);gt.setFlexZoom=u=>{gt._isFlexZoomActive=u,gt._applyFilterToLoaded(),ke.setFlexZoom(u),ke.setYearMax(gt._filter.yearMax)};nr(dt);dt.on("mousemove",({latlng:{lat:u,lng:h}})=>{const a=(o,r,c)=>{const d=Math.abs(o),f=Math.floor(d),y=Math.floor((d-f)*60),g=Math.floor(((d-f)*60-y)*60);return`${f}°${y}'${g}" ${o>=0?r:c}`},p=document.getElementById("coord-lat"),_=document.getElementById("coord-lng");p&&(p.textContent=a(u,"LU","LS")),_&&(_.textContent=a(h,"BT","BB"))});dt.on("zoomend",()=>{const u=document.getElementById("zoom-level");u&&(u.textContent=`zoom ${dt.getZoom()}`),dt.getContainer().classList.toggle("show-labels",dt.getZoom()>=8)});uo();document.getElementById("btn-reopen-disclaimer")?.addEventListener("click",()=>{localStorage.removeItem("webgis_disclaimer_accepted"),uo();const u=document.getElementById("disclaimer-modal");u&&(u.style.display="flex",u.classList.remove("hidden"))});
