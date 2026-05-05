(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const _ of document.querySelectorAll('link[rel="modulepreload"]'))m(_);new MutationObserver(_=>{for(const o of _)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&m(r)}).observe(document,{childList:!0,subtree:!0});function h(_){const o={};return _.integrity&&(o.integrity=_.integrity),_.referrerPolicy&&(o.referrerPolicy=_.referrerPolicy),_.crossOrigin==="use-credentials"?o.credentials="include":_.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function m(_){if(_.ep)return;_.ep=!0;const o=h(_);fetch(_.href,o)}})();function As(p){return p&&p.__esModule&&Object.prototype.hasOwnProperty.call(p,"default")?p.default:p}var ge={exports:{}};var Os=ge.exports,Hn;function Zs(){return Hn||(Hn=1,(function(p,d){(function(h,m){m(d)})(Os,(function(h){var m="1.9.4";function _(t){var e,i,n,s;for(i=1,n=arguments.length;i<n;i++){s=arguments[i];for(e in s)t[e]=s[e]}return t}var o=Object.create||(function(){function t(){}return function(e){return t.prototype=e,new t}})();function r(t,e){var i=Array.prototype.slice;if(t.bind)return t.bind.apply(t,i.call(arguments,1));var n=i.call(arguments,2);return function(){return t.apply(e,n.length?n.concat(i.call(arguments)):arguments)}}var l=0;function c(t){return"_leaflet_id"in t||(t._leaflet_id=++l),t._leaflet_id}function f(t,e,i){var n,s,a,u;return u=function(){n=!1,s&&(a.apply(i,s),s=!1)},a=function(){n?s=arguments:(t.apply(i,arguments),setTimeout(u,e),n=!0)},a}function x(t,e,i){var n=e[1],s=e[0],a=n-s;return t===n&&i?t:((t-s)%a+a)%a+s}function g(){return!1}function b(t,e){if(e===!1)return t;var i=Math.pow(10,e===void 0?6:e);return Math.round(t*i)/i}function y(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function M(t){return y(t).split(/\s+/)}function k(t,e){Object.prototype.hasOwnProperty.call(t,"options")||(t.options=t.options?o(t.options):{});for(var i in e)t.options[i]=e[i];return t.options}function B(t,e,i){var n=[];for(var s in t)n.push(encodeURIComponent(i?s.toUpperCase():s)+"="+encodeURIComponent(t[s]));return(!e||e.indexOf("?")===-1?"?":"&")+n.join("&")}var C=/\{ *([\w_ -]+) *\}/g;function E(t,e){return t.replace(C,function(i,n){var s=e[n];if(s===void 0)throw new Error("No value provided for variable "+i);return typeof s=="function"&&(s=s(e)),s})}var O=Array.isArray||function(t){return Object.prototype.toString.call(t)==="[object Array]"};function G(t,e){for(var i=0;i<t.length;i++)if(t[i]===e)return i;return-1}var H="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function at(t){return window["webkit"+t]||window["moz"+t]||window["ms"+t]}var T=0;function Z(t){var e=+new Date,i=Math.max(0,16-(e-T));return T=e+i,window.setTimeout(t,i)}var q=window.requestAnimationFrame||at("RequestAnimationFrame")||Z,j=window.cancelAnimationFrame||at("CancelAnimationFrame")||at("CancelRequestAnimationFrame")||function(t){window.clearTimeout(t)};function V(t,e,i){if(i&&q===Z)t.call(e);else return q.call(window,r(t,e))}function tt(t){t&&j.call(window,t)}var ct={__proto__:null,extend:_,create:o,bind:r,get lastId(){return l},stamp:c,throttle:f,wrapNum:x,falseFn:g,formatNum:b,trim:y,splitWords:M,setOptions:k,getParamString:B,template:E,isArray:O,indexOf:G,emptyImageUrl:H,requestFn:q,cancelFn:j,requestAnimFrame:V,cancelAnimFrame:tt};function X(){}X.extend=function(t){var e=function(){k(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},i=e.__super__=this.prototype,n=o(i);n.constructor=e,e.prototype=n;for(var s in this)Object.prototype.hasOwnProperty.call(this,s)&&s!=="prototype"&&s!=="__super__"&&(e[s]=this[s]);return t.statics&&_(e,t.statics),t.includes&&(xt(t.includes),_.apply(null,[n].concat(t.includes))),_(n,t),delete n.statics,delete n.includes,n.options&&(n.options=i.options?o(i.options):{},_(n.options,t.options)),n._initHooks=[],n.callInitHooks=function(){if(!this._initHooksCalled){i.callInitHooks&&i.callInitHooks.call(this),this._initHooksCalled=!0;for(var a=0,u=n._initHooks.length;a<u;a++)n._initHooks[a].call(this)}},e},X.include=function(t){var e=this.prototype.options;return _(this.prototype,t),t.options&&(this.prototype.options=e,this.mergeOptions(t.options)),this},X.mergeOptions=function(t){return _(this.prototype.options,t),this},X.addInitHook=function(t){var e=Array.prototype.slice.call(arguments,1),i=typeof t=="function"?t:function(){this[t].apply(this,e)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(i),this};function xt(t){if(!(typeof L>"u"||!L||!L.Mixin)){t=O(t)?t:[t];for(var e=0;e<t.length;e++)t[e]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var dt={on:function(t,e,i){if(typeof t=="object")for(var n in t)this._on(n,t[n],e);else{t=M(t);for(var s=0,a=t.length;s<a;s++)this._on(t[s],e,i)}return this},off:function(t,e,i){if(!arguments.length)delete this._events;else if(typeof t=="object")for(var n in t)this._off(n,t[n],e);else{t=M(t);for(var s=arguments.length===1,a=0,u=t.length;a<u;a++)s?this._off(t[a]):this._off(t[a],e,i)}return this},_on:function(t,e,i,n){if(typeof e!="function"){console.warn("wrong listener type: "+typeof e);return}if(this._listens(t,e,i)===!1){i===this&&(i=void 0);var s={fn:e,ctx:i};n&&(s.once=!0),this._events=this._events||{},this._events[t]=this._events[t]||[],this._events[t].push(s)}},_off:function(t,e,i){var n,s,a;if(this._events&&(n=this._events[t],!!n)){if(arguments.length===1){if(this._firingCount)for(s=0,a=n.length;s<a;s++)n[s].fn=g;delete this._events[t];return}if(typeof e!="function"){console.warn("wrong listener type: "+typeof e);return}var u=this._listens(t,e,i);if(u!==!1){var v=n[u];this._firingCount&&(v.fn=g,this._events[t]=n=n.slice()),n.splice(u,1)}}},fire:function(t,e,i){if(!this.listens(t,i))return this;var n=_({},e,{type:t,target:this,sourceTarget:e&&e.sourceTarget||this});if(this._events){var s=this._events[t];if(s){this._firingCount=this._firingCount+1||1;for(var a=0,u=s.length;a<u;a++){var v=s[a],w=v.fn;v.once&&this.off(t,w,v.ctx),w.call(v.ctx||this,n)}this._firingCount--}}return i&&this._propagateEvent(n),this},listens:function(t,e,i,n){typeof t!="string"&&console.warn('"string" type argument expected');var s=e;typeof e!="function"&&(n=!!e,s=void 0,i=void 0);var a=this._events&&this._events[t];if(a&&a.length&&this._listens(t,s,i)!==!1)return!0;if(n){for(var u in this._eventParents)if(this._eventParents[u].listens(t,e,i,n))return!0}return!1},_listens:function(t,e,i){if(!this._events)return!1;var n=this._events[t]||[];if(!e)return!!n.length;i===this&&(i=void 0);for(var s=0,a=n.length;s<a;s++)if(n[s].fn===e&&n[s].ctx===i)return s;return!1},once:function(t,e,i){if(typeof t=="object")for(var n in t)this._on(n,t[n],e,!0);else{t=M(t);for(var s=0,a=t.length;s<a;s++)this._on(t[s],e,i,!0)}return this},addEventParent:function(t){return this._eventParents=this._eventParents||{},this._eventParents[c(t)]=t,this},removeEventParent:function(t){return this._eventParents&&delete this._eventParents[c(t)],this},_propagateEvent:function(t){for(var e in this._eventParents)this._eventParents[e].fire(t.type,_({layer:t.target,propagatedFrom:t.target},t),!0)}};dt.addEventListener=dt.on,dt.removeEventListener=dt.clearAllEventListeners=dt.off,dt.addOneTimeEventListener=dt.once,dt.fireEvent=dt.fire,dt.hasEventListeners=dt.listens;var bt=X.extend(dt);function N(t,e,i){this.x=i?Math.round(t):t,this.y=i?Math.round(e):e}var Rt=Math.trunc||function(t){return t>0?Math.floor(t):Math.ceil(t)};N.prototype={clone:function(){return new N(this.x,this.y)},add:function(t){return this.clone()._add(z(t))},_add:function(t){return this.x+=t.x,this.y+=t.y,this},subtract:function(t){return this.clone()._subtract(z(t))},_subtract:function(t){return this.x-=t.x,this.y-=t.y,this},divideBy:function(t){return this.clone()._divideBy(t)},_divideBy:function(t){return this.x/=t,this.y/=t,this},multiplyBy:function(t){return this.clone()._multiplyBy(t)},_multiplyBy:function(t){return this.x*=t,this.y*=t,this},scaleBy:function(t){return new N(this.x*t.x,this.y*t.y)},unscaleBy:function(t){return new N(this.x/t.x,this.y/t.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=Rt(this.x),this.y=Rt(this.y),this},distanceTo:function(t){t=z(t);var e=t.x-this.x,i=t.y-this.y;return Math.sqrt(e*e+i*i)},equals:function(t){return t=z(t),t.x===this.x&&t.y===this.y},contains:function(t){return t=z(t),Math.abs(t.x)<=Math.abs(this.x)&&Math.abs(t.y)<=Math.abs(this.y)},toString:function(){return"Point("+b(this.x)+", "+b(this.y)+")"}};function z(t,e,i){return t instanceof N?t:O(t)?new N(t[0],t[1]):t==null?t:typeof t=="object"&&"x"in t&&"y"in t?new N(t.x,t.y):new N(t,e,i)}function K(t,e){if(t)for(var i=e?[t,e]:t,n=0,s=i.length;n<s;n++)this.extend(i[n])}K.prototype={extend:function(t){var e,i;if(!t)return this;if(t instanceof N||typeof t[0]=="number"||"x"in t)e=i=z(t);else if(t=ft(t),e=t.min,i=t.max,!e||!i)return this;return!this.min&&!this.max?(this.min=e.clone(),this.max=i.clone()):(this.min.x=Math.min(e.x,this.min.x),this.max.x=Math.max(i.x,this.max.x),this.min.y=Math.min(e.y,this.min.y),this.max.y=Math.max(i.y,this.max.y)),this},getCenter:function(t){return z((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,t)},getBottomLeft:function(){return z(this.min.x,this.max.y)},getTopRight:function(){return z(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(t){var e,i;return typeof t[0]=="number"||t instanceof N?t=z(t):t=ft(t),t instanceof K?(e=t.min,i=t.max):e=i=t,e.x>=this.min.x&&i.x<=this.max.x&&e.y>=this.min.y&&i.y<=this.max.y},intersects:function(t){t=ft(t);var e=this.min,i=this.max,n=t.min,s=t.max,a=s.x>=e.x&&n.x<=i.x,u=s.y>=e.y&&n.y<=i.y;return a&&u},overlaps:function(t){t=ft(t);var e=this.min,i=this.max,n=t.min,s=t.max,a=s.x>e.x&&n.x<i.x,u=s.y>e.y&&n.y<i.y;return a&&u},isValid:function(){return!!(this.min&&this.max)},pad:function(t){var e=this.min,i=this.max,n=Math.abs(e.x-i.x)*t,s=Math.abs(e.y-i.y)*t;return ft(z(e.x-n,e.y-s),z(i.x+n,i.y+s))},equals:function(t){return t?(t=ft(t),this.min.equals(t.getTopLeft())&&this.max.equals(t.getBottomRight())):!1}};function ft(t,e){return!t||t instanceof K?t:new K(t,e)}function pt(t,e){if(t)for(var i=e?[t,e]:t,n=0,s=i.length;n<s;n++)this.extend(i[n])}pt.prototype={extend:function(t){var e=this._southWest,i=this._northEast,n,s;if(t instanceof Y)n=t,s=t;else if(t instanceof pt){if(n=t._southWest,s=t._northEast,!n||!s)return this}else return t?this.extend(U(t)||it(t)):this;return!e&&!i?(this._southWest=new Y(n.lat,n.lng),this._northEast=new Y(s.lat,s.lng)):(e.lat=Math.min(n.lat,e.lat),e.lng=Math.min(n.lng,e.lng),i.lat=Math.max(s.lat,i.lat),i.lng=Math.max(s.lng,i.lng)),this},pad:function(t){var e=this._southWest,i=this._northEast,n=Math.abs(e.lat-i.lat)*t,s=Math.abs(e.lng-i.lng)*t;return new pt(new Y(e.lat-n,e.lng-s),new Y(i.lat+n,i.lng+s))},getCenter:function(){return new Y((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new Y(this.getNorth(),this.getWest())},getSouthEast:function(){return new Y(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(t){typeof t[0]=="number"||t instanceof Y||"lat"in t?t=U(t):t=it(t);var e=this._southWest,i=this._northEast,n,s;return t instanceof pt?(n=t.getSouthWest(),s=t.getNorthEast()):n=s=t,n.lat>=e.lat&&s.lat<=i.lat&&n.lng>=e.lng&&s.lng<=i.lng},intersects:function(t){t=it(t);var e=this._southWest,i=this._northEast,n=t.getSouthWest(),s=t.getNorthEast(),a=s.lat>=e.lat&&n.lat<=i.lat,u=s.lng>=e.lng&&n.lng<=i.lng;return a&&u},overlaps:function(t){t=it(t);var e=this._southWest,i=this._northEast,n=t.getSouthWest(),s=t.getNorthEast(),a=s.lat>e.lat&&n.lat<i.lat,u=s.lng>e.lng&&n.lng<i.lng;return a&&u},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(t,e){return t?(t=it(t),this._southWest.equals(t.getSouthWest(),e)&&this._northEast.equals(t.getNorthEast(),e)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function it(t,e){return t instanceof pt?t:new pt(t,e)}function Y(t,e,i){if(isNaN(t)||isNaN(e))throw new Error("Invalid LatLng object: ("+t+", "+e+")");this.lat=+t,this.lng=+e,i!==void 0&&(this.alt=+i)}Y.prototype={equals:function(t,e){if(!t)return!1;t=U(t);var i=Math.max(Math.abs(this.lat-t.lat),Math.abs(this.lng-t.lng));return i<=(e===void 0?1e-9:e)},toString:function(t){return"LatLng("+b(this.lat,t)+", "+b(this.lng,t)+")"},distanceTo:function(t){return zt.distance(this,U(t))},wrap:function(){return zt.wrapLatLng(this)},toBounds:function(t){var e=180*t/40075017,i=e/Math.cos(Math.PI/180*this.lat);return it([this.lat-e,this.lng-i],[this.lat+e,this.lng+i])},clone:function(){return new Y(this.lat,this.lng,this.alt)}};function U(t,e,i){return t instanceof Y?t:O(t)&&typeof t[0]!="object"?t.length===3?new Y(t[0],t[1],t[2]):t.length===2?new Y(t[0],t[1]):null:t==null?t:typeof t=="object"&&"lat"in t?new Y(t.lat,"lng"in t?t.lng:t.lon,t.alt):e===void 0?null:new Y(t,e,i)}var Tt={latLngToPoint:function(t,e){var i=this.projection.project(t),n=this.scale(e);return this.transformation._transform(i,n)},pointToLatLng:function(t,e){var i=this.scale(e),n=this.transformation.untransform(t,i);return this.projection.unproject(n)},project:function(t){return this.projection.project(t)},unproject:function(t){return this.projection.unproject(t)},scale:function(t){return 256*Math.pow(2,t)},zoom:function(t){return Math.log(t/256)/Math.LN2},getProjectedBounds:function(t){if(this.infinite)return null;var e=this.projection.bounds,i=this.scale(t),n=this.transformation.transform(e.min,i),s=this.transformation.transform(e.max,i);return new K(n,s)},infinite:!1,wrapLatLng:function(t){var e=this.wrapLng?x(t.lng,this.wrapLng,!0):t.lng,i=this.wrapLat?x(t.lat,this.wrapLat,!0):t.lat,n=t.alt;return new Y(i,e,n)},wrapLatLngBounds:function(t){var e=t.getCenter(),i=this.wrapLatLng(e),n=e.lat-i.lat,s=e.lng-i.lng;if(n===0&&s===0)return t;var a=t.getSouthWest(),u=t.getNorthEast(),v=new Y(a.lat-n,a.lng-s),w=new Y(u.lat-n,u.lng-s);return new pt(v,w)}},zt=_({},Tt,{wrapLng:[-180,180],R:6371e3,distance:function(t,e){var i=Math.PI/180,n=t.lat*i,s=e.lat*i,a=Math.sin((e.lat-t.lat)*i/2),u=Math.sin((e.lng-t.lng)*i/2),v=a*a+Math.cos(n)*Math.cos(s)*u*u,w=2*Math.atan2(Math.sqrt(v),Math.sqrt(1-v));return this.R*w}}),Ii=6378137,qe={R:Ii,MAX_LATITUDE:85.0511287798,project:function(t){var e=Math.PI/180,i=this.MAX_LATITUDE,n=Math.max(Math.min(i,t.lat),-i),s=Math.sin(n*e);return new N(this.R*t.lng*e,this.R*Math.log((1+s)/(1-s))/2)},unproject:function(t){var e=180/Math.PI;return new Y((2*Math.atan(Math.exp(t.y/this.R))-Math.PI/2)*e,t.x*e/this.R)},bounds:(function(){var t=Ii*Math.PI;return new K([-t,-t],[t,t])})()};function Ve(t,e,i,n){if(O(t)){this._a=t[0],this._b=t[1],this._c=t[2],this._d=t[3];return}this._a=t,this._b=e,this._c=i,this._d=n}Ve.prototype={transform:function(t,e){return this._transform(t.clone(),e)},_transform:function(t,e){return e=e||1,t.x=e*(this._a*t.x+this._b),t.y=e*(this._c*t.y+this._d),t},untransform:function(t,e){return e=e||1,new N((t.x/e-this._b)/this._a,(t.y/e-this._d)/this._c)}};function ne(t,e,i,n){return new Ve(t,e,i,n)}var Ye=_({},zt,{code:"EPSG:3857",projection:qe,transformation:(function(){var t=.5/(Math.PI*qe.R);return ne(t,.5,-t,.5)})()}),ho=_({},Ye,{code:"EPSG:900913"});function Bi(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function zi(t,e){var i="",n,s,a,u,v,w;for(n=0,a=t.length;n<a;n++){for(v=t[n],s=0,u=v.length;s<u;s++)w=v[s],i+=(s?"L":"M")+w.x+" "+w.y;i+=e?I.svg?"z":"x":""}return i||"M0 0"}var Ke=document.documentElement.style,we="ActiveXObject"in window,co=we&&!document.addEventListener,Ai="msLaunchUri"in navigator&&!("documentMode"in document),Je=kt("webkit"),Oi=kt("android"),Zi=kt("android 2")||kt("android 3"),uo=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),fo=Oi&&kt("Google")&&uo<537&&!("AudioNode"in window),Xe=!!window.opera,Ni=!Ai&&kt("chrome"),Ri=kt("gecko")&&!Je&&!Xe&&!we,po=!Ni&&kt("safari"),Di=kt("phantom"),Fi="OTransition"in Ke,mo=navigator.platform.indexOf("Win")===0,Gi=we&&"transition"in Ke,Qe="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!Zi,Hi="MozPerspective"in Ke,_o=!window.L_DISABLE_3D&&(Gi||Qe||Hi)&&!Fi&&!Di,oe=typeof orientation<"u"||kt("mobile"),go=oe&&Je,vo=oe&&Qe,ji=!window.PointerEvent&&window.MSPointerEvent,Ui=!!(window.PointerEvent||ji),Wi="ontouchstart"in window||!!window.TouchEvent,yo=!window.L_NO_TOUCH&&(Wi||Ui),xo=oe&&Xe,bo=oe&&Ri,wo=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,Lo=(function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("testPassiveEventSupport",g,e),window.removeEventListener("testPassiveEventSupport",g,e)}catch{}return t})(),ko=(function(){return!!document.createElement("canvas").getContext})(),ti=!!(document.createElementNS&&Bi("svg").createSVGRect),Po=!!ti&&(function(){var t=document.createElement("div");return t.innerHTML="<svg/>",(t.firstChild&&t.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"})(),Mo=!ti&&(function(){try{var t=document.createElement("div");t.innerHTML='<v:shape adj="1"/>';var e=t.firstChild;return e.style.behavior="url(#default#VML)",e&&typeof e.adj=="object"}catch{return!1}})(),Co=navigator.platform.indexOf("Mac")===0,To=navigator.platform.indexOf("Linux")===0;function kt(t){return navigator.userAgent.toLowerCase().indexOf(t)>=0}var I={ie:we,ielt9:co,edge:Ai,webkit:Je,android:Oi,android23:Zi,androidStock:fo,opera:Xe,chrome:Ni,gecko:Ri,safari:po,phantom:Di,opera12:Fi,win:mo,ie3d:Gi,webkit3d:Qe,gecko3d:Hi,any3d:_o,mobile:oe,mobileWebkit:go,mobileWebkit3d:vo,msPointer:ji,pointer:Ui,touch:yo,touchNative:Wi,mobileOpera:xo,mobileGecko:bo,retina:wo,passiveEvents:Lo,canvas:ko,svg:ti,vml:Mo,inlineSvg:Po,mac:Co,linux:To},$i=I.msPointer?"MSPointerDown":"pointerdown",qi=I.msPointer?"MSPointerMove":"pointermove",Vi=I.msPointer?"MSPointerUp":"pointerup",Yi=I.msPointer?"MSPointerCancel":"pointercancel",ei={touchstart:$i,touchmove:qi,touchend:Vi,touchcancel:Yi},Ki={touchstart:Ao,touchmove:Le,touchend:Le,touchcancel:Le},Wt={},Ji=!1;function So(t,e,i){return e==="touchstart"&&zo(),Ki[e]?(i=Ki[e].bind(this,i),t.addEventListener(ei[e],i,!1),i):(console.warn("wrong event specified:",e),g)}function Eo(t,e,i){if(!ei[e]){console.warn("wrong event specified:",e);return}t.removeEventListener(ei[e],i,!1)}function Io(t){Wt[t.pointerId]=t}function Bo(t){Wt[t.pointerId]&&(Wt[t.pointerId]=t)}function Xi(t){delete Wt[t.pointerId]}function zo(){Ji||(document.addEventListener($i,Io,!0),document.addEventListener(qi,Bo,!0),document.addEventListener(Vi,Xi,!0),document.addEventListener(Yi,Xi,!0),Ji=!0)}function Le(t,e){if(e.pointerType!==(e.MSPOINTER_TYPE_MOUSE||"mouse")){e.touches=[];for(var i in Wt)e.touches.push(Wt[i]);e.changedTouches=[e],t(e)}}function Ao(t,e){e.MSPOINTER_TYPE_TOUCH&&e.pointerType===e.MSPOINTER_TYPE_TOUCH&&lt(e),Le(t,e)}function Oo(t){var e={},i,n;for(n in t)i=t[n],e[n]=i&&i.bind?i.bind(t):i;return t=e,e.type="dblclick",e.detail=2,e.isTrusted=!1,e._simulated=!0,e}var Zo=200;function No(t,e){t.addEventListener("dblclick",e);var i=0,n;function s(a){if(a.detail!==1){n=a.detail;return}if(!(a.pointerType==="mouse"||a.sourceCapabilities&&!a.sourceCapabilities.firesTouchEvents)){var u=on(a);if(!(u.some(function(w){return w instanceof HTMLLabelElement&&w.attributes.for})&&!u.some(function(w){return w instanceof HTMLInputElement||w instanceof HTMLSelectElement}))){var v=Date.now();v-i<=Zo?(n++,n===2&&e(Oo(a))):n=1,i=v}}}return t.addEventListener("click",s),{dblclick:e,simDblclick:s}}function Ro(t,e){t.removeEventListener("dblclick",e.dblclick),t.removeEventListener("click",e.simDblclick)}var ii=Me(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),se=Me(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),Qi=se==="webkitTransition"||se==="OTransition"?se+"End":"transitionend";function tn(t){return typeof t=="string"?document.getElementById(t):t}function re(t,e){var i=t.style[e]||t.currentStyle&&t.currentStyle[e];if((!i||i==="auto")&&document.defaultView){var n=document.defaultView.getComputedStyle(t,null);i=n?n[e]:null}return i==="auto"?null:i}function $(t,e,i){var n=document.createElement(t);return n.className=e||"",i&&i.appendChild(n),n}function Q(t){var e=t.parentNode;e&&e.removeChild(t)}function ke(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function $t(t){var e=t.parentNode;e&&e.lastChild!==t&&e.appendChild(t)}function qt(t){var e=t.parentNode;e&&e.firstChild!==t&&e.insertBefore(t,e.firstChild)}function ni(t,e){if(t.classList!==void 0)return t.classList.contains(e);var i=Pe(t);return i.length>0&&new RegExp("(^|\\s)"+e+"(\\s|$)").test(i)}function D(t,e){if(t.classList!==void 0)for(var i=M(e),n=0,s=i.length;n<s;n++)t.classList.add(i[n]);else if(!ni(t,e)){var a=Pe(t);oi(t,(a?a+" ":"")+e)}}function et(t,e){t.classList!==void 0?t.classList.remove(e):oi(t,y((" "+Pe(t)+" ").replace(" "+e+" "," ")))}function oi(t,e){t.className.baseVal===void 0?t.className=e:t.className.baseVal=e}function Pe(t){return t.correspondingElement&&(t=t.correspondingElement),t.className.baseVal===void 0?t.className:t.className.baseVal}function _t(t,e){"opacity"in t.style?t.style.opacity=e:"filter"in t.style&&Do(t,e)}function Do(t,e){var i=!1,n="DXImageTransform.Microsoft.Alpha";try{i=t.filters.item(n)}catch{if(e===1)return}e=Math.round(e*100),i?(i.Enabled=e!==100,i.Opacity=e):t.style.filter+=" progid:"+n+"(opacity="+e+")"}function Me(t){for(var e=document.documentElement.style,i=0;i<t.length;i++)if(t[i]in e)return t[i];return!1}function Dt(t,e,i){var n=e||new N(0,0);t.style[ii]=(I.ie3d?"translate("+n.x+"px,"+n.y+"px)":"translate3d("+n.x+"px,"+n.y+"px,0)")+(i?" scale("+i+")":"")}function nt(t,e){t._leaflet_pos=e,I.any3d?Dt(t,e):(t.style.left=e.x+"px",t.style.top=e.y+"px")}function Ft(t){return t._leaflet_pos||new N(0,0)}var ae,le,si;if("onselectstart"in document)ae=function(){R(window,"selectstart",lt)},le=function(){J(window,"selectstart",lt)};else{var he=Me(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);ae=function(){if(he){var t=document.documentElement.style;si=t[he],t[he]="none"}},le=function(){he&&(document.documentElement.style[he]=si,si=void 0)}}function ri(){R(window,"dragstart",lt)}function ai(){J(window,"dragstart",lt)}var Ce,li;function hi(t){for(;t.tabIndex===-1;)t=t.parentNode;t.style&&(Te(),Ce=t,li=t.style.outlineStyle,t.style.outlineStyle="none",R(window,"keydown",Te))}function Te(){Ce&&(Ce.style.outlineStyle=li,Ce=void 0,li=void 0,J(window,"keydown",Te))}function en(t){do t=t.parentNode;while((!t.offsetWidth||!t.offsetHeight)&&t!==document.body);return t}function ci(t){var e=t.getBoundingClientRect();return{x:e.width/t.offsetWidth||1,y:e.height/t.offsetHeight||1,boundingClientRect:e}}var Fo={__proto__:null,TRANSFORM:ii,TRANSITION:se,TRANSITION_END:Qi,get:tn,getStyle:re,create:$,remove:Q,empty:ke,toFront:$t,toBack:qt,hasClass:ni,addClass:D,removeClass:et,setClass:oi,getClass:Pe,setOpacity:_t,testProp:Me,setTransform:Dt,setPosition:nt,getPosition:Ft,get disableTextSelection(){return ae},get enableTextSelection(){return le},disableImageDrag:ri,enableImageDrag:ai,preventOutline:hi,restoreOutline:Te,getSizedParentNode:en,getScale:ci};function R(t,e,i,n){if(e&&typeof e=="object")for(var s in e)ui(t,s,e[s],i);else{e=M(e);for(var a=0,u=e.length;a<u;a++)ui(t,e[a],i,n)}return this}var Pt="_leaflet_events";function J(t,e,i,n){if(arguments.length===1)nn(t),delete t[Pt];else if(e&&typeof e=="object")for(var s in e)fi(t,s,e[s],i);else if(e=M(e),arguments.length===2)nn(t,function(v){return G(e,v)!==-1});else for(var a=0,u=e.length;a<u;a++)fi(t,e[a],i,n);return this}function nn(t,e){for(var i in t[Pt]){var n=i.split(/\d/)[0];(!e||e(n))&&fi(t,n,null,null,i)}}var di={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function ui(t,e,i,n){var s=e+c(i)+(n?"_"+c(n):"");if(t[Pt]&&t[Pt][s])return this;var a=function(v){return i.call(n||t,v||window.event)},u=a;!I.touchNative&&I.pointer&&e.indexOf("touch")===0?a=So(t,e,a):I.touch&&e==="dblclick"?a=No(t,a):"addEventListener"in t?e==="touchstart"||e==="touchmove"||e==="wheel"||e==="mousewheel"?t.addEventListener(di[e]||e,a,I.passiveEvents?{passive:!1}:!1):e==="mouseenter"||e==="mouseleave"?(a=function(v){v=v||window.event,mi(t,v)&&u(v)},t.addEventListener(di[e],a,!1)):t.addEventListener(e,u,!1):t.attachEvent("on"+e,a),t[Pt]=t[Pt]||{},t[Pt][s]=a}function fi(t,e,i,n,s){s=s||e+c(i)+(n?"_"+c(n):"");var a=t[Pt]&&t[Pt][s];if(!a)return this;!I.touchNative&&I.pointer&&e.indexOf("touch")===0?Eo(t,e,a):I.touch&&e==="dblclick"?Ro(t,a):"removeEventListener"in t?t.removeEventListener(di[e]||e,a,!1):t.detachEvent("on"+e,a),t[Pt][s]=null}function Gt(t){return t.stopPropagation?t.stopPropagation():t.originalEvent?t.originalEvent._stopped=!0:t.cancelBubble=!0,this}function pi(t){return ui(t,"wheel",Gt),this}function ce(t){return R(t,"mousedown touchstart dblclick contextmenu",Gt),t._leaflet_disable_click=!0,this}function lt(t){return t.preventDefault?t.preventDefault():t.returnValue=!1,this}function Ht(t){return lt(t),Gt(t),this}function on(t){if(t.composedPath)return t.composedPath();for(var e=[],i=t.target;i;)e.push(i),i=i.parentNode;return e}function sn(t,e){if(!e)return new N(t.clientX,t.clientY);var i=ci(e),n=i.boundingClientRect;return new N((t.clientX-n.left)/i.x-e.clientLeft,(t.clientY-n.top)/i.y-e.clientTop)}var Go=I.linux&&I.chrome?window.devicePixelRatio:I.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function rn(t){return I.edge?t.wheelDeltaY/2:t.deltaY&&t.deltaMode===0?-t.deltaY/Go:t.deltaY&&t.deltaMode===1?-t.deltaY*20:t.deltaY&&t.deltaMode===2?-t.deltaY*60:t.deltaX||t.deltaZ?0:t.wheelDelta?(t.wheelDeltaY||t.wheelDelta)/2:t.detail&&Math.abs(t.detail)<32765?-t.detail*20:t.detail?t.detail/-32765*60:0}function mi(t,e){var i=e.relatedTarget;if(!i)return!0;try{for(;i&&i!==t;)i=i.parentNode}catch{return!1}return i!==t}var Ho={__proto__:null,on:R,off:J,stopPropagation:Gt,disableScrollPropagation:pi,disableClickPropagation:ce,preventDefault:lt,stop:Ht,getPropagationPath:on,getMousePosition:sn,getWheelDelta:rn,isExternalTarget:mi,addListener:R,removeListener:J},an=bt.extend({run:function(t,e,i,n){this.stop(),this._el=t,this._inProgress=!0,this._duration=i||.25,this._easeOutPower=1/Math.max(n||.5,.2),this._startPos=Ft(t),this._offset=e.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=V(this._animate,this),this._step()},_step:function(t){var e=+new Date-this._startTime,i=this._duration*1e3;e<i?this._runFrame(this._easeOut(e/i),t):(this._runFrame(1),this._complete())},_runFrame:function(t,e){var i=this._startPos.add(this._offset.multiplyBy(t));e&&i._round(),nt(this._el,i),this.fire("step")},_complete:function(){tt(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(t){return 1-Math.pow(1-t,this._easeOutPower)}}),W=bt.extend({options:{crs:Ye,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(t,e){e=k(this,e),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(t),this._initLayout(),this._onResize=r(this._onResize,this),this._initEvents(),e.maxBounds&&this.setMaxBounds(e.maxBounds),e.zoom!==void 0&&(this._zoom=this._limitZoom(e.zoom)),e.center&&e.zoom!==void 0&&this.setView(U(e.center),e.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=se&&I.any3d&&!I.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),R(this._proxy,Qi,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(t,e,i){if(e=e===void 0?this._zoom:this._limitZoom(e),t=this._limitCenter(U(t),e,this.options.maxBounds),i=i||{},this._stop(),this._loaded&&!i.reset&&i!==!0){i.animate!==void 0&&(i.zoom=_({animate:i.animate},i.zoom),i.pan=_({animate:i.animate,duration:i.duration},i.pan));var n=this._zoom!==e?this._tryAnimatedZoom&&this._tryAnimatedZoom(t,e,i.zoom):this._tryAnimatedPan(t,i.pan);if(n)return clearTimeout(this._sizeTimer),this}return this._resetView(t,e,i.pan&&i.pan.noMoveStart),this},setZoom:function(t,e){return this._loaded?this.setView(this.getCenter(),t,{zoom:e}):(this._zoom=t,this)},zoomIn:function(t,e){return t=t||(I.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+t,e)},zoomOut:function(t,e){return t=t||(I.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-t,e)},setZoomAround:function(t,e,i){var n=this.getZoomScale(e),s=this.getSize().divideBy(2),a=t instanceof N?t:this.latLngToContainerPoint(t),u=a.subtract(s).multiplyBy(1-1/n),v=this.containerPointToLatLng(s.add(u));return this.setView(v,e,{zoom:i})},_getBoundsCenterZoom:function(t,e){e=e||{},t=t.getBounds?t.getBounds():it(t);var i=z(e.paddingTopLeft||e.padding||[0,0]),n=z(e.paddingBottomRight||e.padding||[0,0]),s=this.getBoundsZoom(t,!1,i.add(n));if(s=typeof e.maxZoom=="number"?Math.min(e.maxZoom,s):s,s===1/0)return{center:t.getCenter(),zoom:s};var a=n.subtract(i).divideBy(2),u=this.project(t.getSouthWest(),s),v=this.project(t.getNorthEast(),s),w=this.unproject(u.add(v).divideBy(2).add(a),s);return{center:w,zoom:s}},fitBounds:function(t,e){if(t=it(t),!t.isValid())throw new Error("Bounds are not valid.");var i=this._getBoundsCenterZoom(t,e);return this.setView(i.center,i.zoom,e)},fitWorld:function(t){return this.fitBounds([[-90,-180],[90,180]],t)},panTo:function(t,e){return this.setView(t,this._zoom,{pan:e})},panBy:function(t,e){if(t=z(t).round(),e=e||{},!t.x&&!t.y)return this.fire("moveend");if(e.animate!==!0&&!this.getSize().contains(t))return this._resetView(this.unproject(this.project(this.getCenter()).add(t)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new an,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),e.noMoveStart||this.fire("movestart"),e.animate!==!1){D(this._mapPane,"leaflet-pan-anim");var i=this._getMapPanePos().subtract(t).round();this._panAnim.run(this._mapPane,i,e.duration||.25,e.easeLinearity)}else this._rawPanBy(t),this.fire("move").fire("moveend");return this},flyTo:function(t,e,i){if(i=i||{},i.animate===!1||!I.any3d)return this.setView(t,e,i);this._stop();var n=this.project(this.getCenter()),s=this.project(t),a=this.getSize(),u=this._zoom;t=U(t),e=e===void 0?u:e;var v=Math.max(a.x,a.y),w=v*this.getZoomScale(u,e),P=s.distanceTo(n)||1,S=1.42,A=S*S;function F(ot){var Fe=ot?-1:1,Es=ot?w:v,Is=w*w-v*v+Fe*A*A*P*P,Bs=2*Es*A*P,Mi=Is/Bs,Gn=Math.sqrt(Mi*Mi+1)-Mi,zs=Gn<1e-9?-18:Math.log(Gn);return zs}function ut(ot){return(Math.exp(ot)-Math.exp(-ot))/2}function st(ot){return(Math.exp(ot)+Math.exp(-ot))/2}function vt(ot){return ut(ot)/st(ot)}var mt=F(0);function Qt(ot){return v*(st(mt)/st(mt+S*ot))}function Ms(ot){return v*(st(mt)*vt(mt+S*ot)-ut(mt))/A}function Cs(ot){return 1-Math.pow(1-ot,1.5)}var Ts=Date.now(),Dn=(F(1)-mt)/S,Ss=i.duration?1e3*i.duration:1e3*Dn*.8;function Fn(){var ot=(Date.now()-Ts)/Ss,Fe=Cs(ot)*Dn;ot<=1?(this._flyToFrame=V(Fn,this),this._move(this.unproject(n.add(s.subtract(n).multiplyBy(Ms(Fe)/P)),u),this.getScaleZoom(v/Qt(Fe),u),{flyTo:!0})):this._move(t,e)._moveEnd(!0)}return this._moveStart(!0,i.noMoveStart),Fn.call(this),this},flyToBounds:function(t,e){var i=this._getBoundsCenterZoom(t,e);return this.flyTo(i.center,i.zoom,e)},setMaxBounds:function(t){return t=it(t),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),t.isValid()?(this.options.maxBounds=t,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(t){var e=this.options.minZoom;return this.options.minZoom=t,this._loaded&&e!==t&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(t):this},setMaxZoom:function(t){var e=this.options.maxZoom;return this.options.maxZoom=t,this._loaded&&e!==t&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(t):this},panInsideBounds:function(t,e){this._enforcingBounds=!0;var i=this.getCenter(),n=this._limitCenter(i,this._zoom,it(t));return i.equals(n)||this.panTo(n,e),this._enforcingBounds=!1,this},panInside:function(t,e){e=e||{};var i=z(e.paddingTopLeft||e.padding||[0,0]),n=z(e.paddingBottomRight||e.padding||[0,0]),s=this.project(this.getCenter()),a=this.project(t),u=this.getPixelBounds(),v=ft([u.min.add(i),u.max.subtract(n)]),w=v.getSize();if(!v.contains(a)){this._enforcingBounds=!0;var P=a.subtract(v.getCenter()),S=v.extend(a).getSize().subtract(w);s.x+=P.x<0?-S.x:S.x,s.y+=P.y<0?-S.y:S.y,this.panTo(this.unproject(s),e),this._enforcingBounds=!1}return this},invalidateSize:function(t){if(!this._loaded)return this;t=_({animate:!1,pan:!0},t===!0?{animate:!0}:t);var e=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var i=this.getSize(),n=e.divideBy(2).round(),s=i.divideBy(2).round(),a=n.subtract(s);return!a.x&&!a.y?this:(t.animate&&t.pan?this.panBy(a):(t.pan&&this._rawPanBy(a),this.fire("move"),t.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(r(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:e,newSize:i}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(t){if(t=this._locateOptions=_({timeout:1e4,watch:!1},t),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var e=r(this._handleGeolocationResponse,this),i=r(this._handleGeolocationError,this);return t.watch?this._locationWatchId=navigator.geolocation.watchPosition(e,i,t):navigator.geolocation.getCurrentPosition(e,i,t),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(t){if(this._container._leaflet_id){var e=t.code,i=t.message||(e===1?"permission denied":e===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:e,message:"Geolocation error: "+i+"."})}},_handleGeolocationResponse:function(t){if(this._container._leaflet_id){var e=t.coords.latitude,i=t.coords.longitude,n=new Y(e,i),s=n.toBounds(t.coords.accuracy*2),a=this._locateOptions;if(a.setView){var u=this.getBoundsZoom(s);this.setView(n,a.maxZoom?Math.min(u,a.maxZoom):u)}var v={latlng:n,bounds:s,timestamp:t.timestamp};for(var w in t.coords)typeof t.coords[w]=="number"&&(v[w]=t.coords[w]);this.fire("locationfound",v)}},addHandler:function(t,e){if(!e)return this;var i=this[t]=new e(this);return this._handlers.push(i),this.options[t]&&i.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),Q(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(tt(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var t;for(t in this._layers)this._layers[t].remove();for(t in this._panes)Q(this._panes[t]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(t,e){var i="leaflet-pane"+(t?" leaflet-"+t.replace("Pane","")+"-pane":""),n=$("div",i,e||this._mapPane);return t&&(this._panes[t]=n),n},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var t=this.getPixelBounds(),e=this.unproject(t.getBottomLeft()),i=this.unproject(t.getTopRight());return new pt(e,i)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(t,e,i){t=it(t),i=z(i||[0,0]);var n=this.getZoom()||0,s=this.getMinZoom(),a=this.getMaxZoom(),u=t.getNorthWest(),v=t.getSouthEast(),w=this.getSize().subtract(i),P=ft(this.project(v,n),this.project(u,n)).getSize(),S=I.any3d?this.options.zoomSnap:1,A=w.x/P.x,F=w.y/P.y,ut=e?Math.max(A,F):Math.min(A,F);return n=this.getScaleZoom(ut,n),S&&(n=Math.round(n/(S/100))*(S/100),n=e?Math.ceil(n/S)*S:Math.floor(n/S)*S),Math.max(s,Math.min(a,n))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new N(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(t,e){var i=this._getTopLeftPoint(t,e);return new K(i,i.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(t){return this.options.crs.getProjectedBounds(t===void 0?this.getZoom():t)},getPane:function(t){return typeof t=="string"?this._panes[t]:t},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(t,e){var i=this.options.crs;return e=e===void 0?this._zoom:e,i.scale(t)/i.scale(e)},getScaleZoom:function(t,e){var i=this.options.crs;e=e===void 0?this._zoom:e;var n=i.zoom(t*i.scale(e));return isNaN(n)?1/0:n},project:function(t,e){return e=e===void 0?this._zoom:e,this.options.crs.latLngToPoint(U(t),e)},unproject:function(t,e){return e=e===void 0?this._zoom:e,this.options.crs.pointToLatLng(z(t),e)},layerPointToLatLng:function(t){var e=z(t).add(this.getPixelOrigin());return this.unproject(e)},latLngToLayerPoint:function(t){var e=this.project(U(t))._round();return e._subtract(this.getPixelOrigin())},wrapLatLng:function(t){return this.options.crs.wrapLatLng(U(t))},wrapLatLngBounds:function(t){return this.options.crs.wrapLatLngBounds(it(t))},distance:function(t,e){return this.options.crs.distance(U(t),U(e))},containerPointToLayerPoint:function(t){return z(t).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(t){return z(t).add(this._getMapPanePos())},containerPointToLatLng:function(t){var e=this.containerPointToLayerPoint(z(t));return this.layerPointToLatLng(e)},latLngToContainerPoint:function(t){return this.layerPointToContainerPoint(this.latLngToLayerPoint(U(t)))},mouseEventToContainerPoint:function(t){return sn(t,this._container)},mouseEventToLayerPoint:function(t){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))},mouseEventToLatLng:function(t){return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))},_initContainer:function(t){var e=this._container=tn(t);if(e){if(e._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");R(e,"scroll",this._onScroll,this),this._containerId=c(e)},_initLayout:function(){var t=this._container;this._fadeAnimated=this.options.fadeAnimation&&I.any3d,D(t,"leaflet-container"+(I.touch?" leaflet-touch":"")+(I.retina?" leaflet-retina":"")+(I.ielt9?" leaflet-oldie":"")+(I.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var e=re(t,"position");e!=="absolute"&&e!=="relative"&&e!=="fixed"&&e!=="sticky"&&(t.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var t=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),nt(this._mapPane,new N(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(D(t.markerPane,"leaflet-zoom-hide"),D(t.shadowPane,"leaflet-zoom-hide"))},_resetView:function(t,e,i){nt(this._mapPane,new N(0,0));var n=!this._loaded;this._loaded=!0,e=this._limitZoom(e),this.fire("viewprereset");var s=this._zoom!==e;this._moveStart(s,i)._move(t,e)._moveEnd(s),this.fire("viewreset"),n&&this.fire("load")},_moveStart:function(t,e){return t&&this.fire("zoomstart"),e||this.fire("movestart"),this},_move:function(t,e,i,n){e===void 0&&(e=this._zoom);var s=this._zoom!==e;return this._zoom=e,this._lastCenter=t,this._pixelOrigin=this._getNewPixelOrigin(t),n?i&&i.pinch&&this.fire("zoom",i):((s||i&&i.pinch)&&this.fire("zoom",i),this.fire("move",i)),this},_moveEnd:function(t){return t&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return tt(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(t){nt(this._mapPane,this._getMapPanePos().subtract(t))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(t){this._targets={},this._targets[c(this._container)]=this;var e=t?J:R;e(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&e(window,"resize",this._onResize,this),I.any3d&&this.options.transform3DLimit&&(t?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){tt(this._resizeRequest),this._resizeRequest=V(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var t=this._getMapPanePos();Math.max(Math.abs(t.x),Math.abs(t.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(t,e){for(var i=[],n,s=e==="mouseout"||e==="mouseover",a=t.target||t.srcElement,u=!1;a;){if(n=this._targets[c(a)],n&&(e==="click"||e==="preclick")&&this._draggableMoved(n)){u=!0;break}if(n&&n.listens(e,!0)&&(s&&!mi(a,t)||(i.push(n),s))||a===this._container)break;a=a.parentNode}return!i.length&&!u&&!s&&this.listens(e,!0)&&(i=[this]),i},_isClickDisabled:function(t){for(;t&&t!==this._container;){if(t._leaflet_disable_click)return!0;t=t.parentNode}},_handleDOMEvent:function(t){var e=t.target||t.srcElement;if(!(!this._loaded||e._leaflet_disable_events||t.type==="click"&&this._isClickDisabled(e))){var i=t.type;i==="mousedown"&&hi(e),this._fireDOMEvent(t,i)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(t,e,i){if(t.type==="click"){var n=_({},t);n.type="preclick",this._fireDOMEvent(n,n.type,i)}var s=this._findEventTargets(t,e);if(i){for(var a=[],u=0;u<i.length;u++)i[u].listens(e,!0)&&a.push(i[u]);s=a.concat(s)}if(s.length){e==="contextmenu"&&lt(t);var v=s[0],w={originalEvent:t};if(t.type!=="keypress"&&t.type!=="keydown"&&t.type!=="keyup"){var P=v.getLatLng&&(!v._radius||v._radius<=10);w.containerPoint=P?this.latLngToContainerPoint(v.getLatLng()):this.mouseEventToContainerPoint(t),w.layerPoint=this.containerPointToLayerPoint(w.containerPoint),w.latlng=P?v.getLatLng():this.layerPointToLatLng(w.layerPoint)}for(u=0;u<s.length;u++)if(s[u].fire(e,w,!0),w.originalEvent._stopped||s[u].options.bubblingMouseEvents===!1&&G(this._mouseEvents,e)!==-1)return}},_draggableMoved:function(t){return t=t.dragging&&t.dragging.enabled()?t:this,t.dragging&&t.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var t=0,e=this._handlers.length;t<e;t++)this._handlers[t].disable()},whenReady:function(t,e){return this._loaded?t.call(e||this,{target:this}):this.on("load",t,e),this},_getMapPanePos:function(){return Ft(this._mapPane)||new N(0,0)},_moved:function(){var t=this._getMapPanePos();return t&&!t.equals([0,0])},_getTopLeftPoint:function(t,e){var i=t&&e!==void 0?this._getNewPixelOrigin(t,e):this.getPixelOrigin();return i.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(t,e){var i=this.getSize()._divideBy(2);return this.project(t,e)._subtract(i)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(t,e,i){var n=this._getNewPixelOrigin(i,e);return this.project(t,e)._subtract(n)},_latLngBoundsToNewLayerBounds:function(t,e,i){var n=this._getNewPixelOrigin(i,e);return ft([this.project(t.getSouthWest(),e)._subtract(n),this.project(t.getNorthWest(),e)._subtract(n),this.project(t.getSouthEast(),e)._subtract(n),this.project(t.getNorthEast(),e)._subtract(n)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(t){return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())},_limitCenter:function(t,e,i){if(!i)return t;var n=this.project(t,e),s=this.getSize().divideBy(2),a=new K(n.subtract(s),n.add(s)),u=this._getBoundsOffset(a,i,e);return Math.abs(u.x)<=1&&Math.abs(u.y)<=1?t:this.unproject(n.add(u),e)},_limitOffset:function(t,e){if(!e)return t;var i=this.getPixelBounds(),n=new K(i.min.add(t),i.max.add(t));return t.add(this._getBoundsOffset(n,e))},_getBoundsOffset:function(t,e,i){var n=ft(this.project(e.getNorthEast(),i),this.project(e.getSouthWest(),i)),s=n.min.subtract(t.min),a=n.max.subtract(t.max),u=this._rebound(s.x,-a.x),v=this._rebound(s.y,-a.y);return new N(u,v)},_rebound:function(t,e){return t+e>0?Math.round(t-e)/2:Math.max(0,Math.ceil(t))-Math.max(0,Math.floor(e))},_limitZoom:function(t){var e=this.getMinZoom(),i=this.getMaxZoom(),n=I.any3d?this.options.zoomSnap:1;return n&&(t=Math.round(t/n)*n),Math.max(e,Math.min(i,t))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){et(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(t,e){var i=this._getCenterOffset(t)._trunc();return(e&&e.animate)!==!0&&!this.getSize().contains(i)?!1:(this.panBy(i,e),!0)},_createAnimProxy:function(){var t=this._proxy=$("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(t),this.on("zoomanim",function(e){var i=ii,n=this._proxy.style[i];Dt(this._proxy,this.project(e.center,e.zoom),this.getZoomScale(e.zoom,1)),n===this._proxy.style[i]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){Q(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var t=this.getCenter(),e=this.getZoom();Dt(this._proxy,this.project(t,e),this.getZoomScale(e,1))},_catchTransitionEnd:function(t){this._animatingZoom&&t.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(t,e,i){if(this._animatingZoom)return!0;if(i=i||{},!this._zoomAnimated||i.animate===!1||this._nothingToAnimate()||Math.abs(e-this._zoom)>this.options.zoomAnimationThreshold)return!1;var n=this.getZoomScale(e),s=this._getCenterOffset(t)._divideBy(1-1/n);return i.animate!==!0&&!this.getSize().contains(s)?!1:(V(function(){this._moveStart(!0,i.noMoveStart||!1)._animateZoom(t,e,!0)},this),!0)},_animateZoom:function(t,e,i,n){this._mapPane&&(i&&(this._animatingZoom=!0,this._animateToCenter=t,this._animateToZoom=e,D(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:t,zoom:e,noUpdate:n}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(r(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&et(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function jo(t,e){return new W(t,e)}var wt=X.extend({options:{position:"topright"},initialize:function(t){k(this,t)},getPosition:function(){return this.options.position},setPosition:function(t){var e=this._map;return e&&e.removeControl(this),this.options.position=t,e&&e.addControl(this),this},getContainer:function(){return this._container},addTo:function(t){this.remove(),this._map=t;var e=this._container=this.onAdd(t),i=this.getPosition(),n=t._controlCorners[i];return D(e,"leaflet-control"),i.indexOf("bottom")!==-1?n.insertBefore(e,n.firstChild):n.appendChild(e),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(Q(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(t){this._map&&t&&t.screenX>0&&t.screenY>0&&this._map.getContainer().focus()}}),de=function(t){return new wt(t)};W.include({addControl:function(t){return t.addTo(this),this},removeControl:function(t){return t.remove(),this},_initControlPos:function(){var t=this._controlCorners={},e="leaflet-",i=this._controlContainer=$("div",e+"control-container",this._container);function n(s,a){var u=e+s+" "+e+a;t[s+a]=$("div",u,i)}n("top","left"),n("top","right"),n("bottom","left"),n("bottom","right")},_clearControlPos:function(){for(var t in this._controlCorners)Q(this._controlCorners[t]);Q(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var ln=wt.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(t,e,i,n){return i<n?-1:n<i?1:0}},initialize:function(t,e,i){k(this,i),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var n in t)this._addLayer(t[n],n);for(n in e)this._addLayer(e[n],n,!0)},onAdd:function(t){this._initLayout(),this._update(),this._map=t,t.on("zoomend",this._checkDisabledLayers,this);for(var e=0;e<this._layers.length;e++)this._layers[e].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(t){return wt.prototype.addTo.call(this,t),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var t=0;t<this._layers.length;t++)this._layers[t].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(t,e){return this._addLayer(t,e),this._map?this._update():this},addOverlay:function(t,e){return this._addLayer(t,e,!0),this._map?this._update():this},removeLayer:function(t){t.off("add remove",this._onLayerChange,this);var e=this._getLayer(c(t));return e&&this._layers.splice(this._layers.indexOf(e),1),this._map?this._update():this},expand:function(){D(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var t=this._map.getSize().y-(this._container.offsetTop+50);return t<this._section.clientHeight?(D(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=t+"px"):et(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return et(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var t="leaflet-control-layers",e=this._container=$("div",t),i=this.options.collapsed;e.setAttribute("aria-haspopup",!0),ce(e),pi(e);var n=this._section=$("section",t+"-list");i&&(this._map.on("click",this.collapse,this),R(e,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var s=this._layersLink=$("a",t+"-toggle",e);s.href="#",s.title="Layers",s.setAttribute("role","button"),R(s,{keydown:function(a){a.keyCode===13&&this._expandSafely()},click:function(a){lt(a),this._expandSafely()}},this),i||this.expand(),this._baseLayersList=$("div",t+"-base",n),this._separator=$("div",t+"-separator",n),this._overlaysList=$("div",t+"-overlays",n),e.appendChild(n)},_getLayer:function(t){for(var e=0;e<this._layers.length;e++)if(this._layers[e]&&c(this._layers[e].layer)===t)return this._layers[e]},_addLayer:function(t,e,i){this._map&&t.on("add remove",this._onLayerChange,this),this._layers.push({layer:t,name:e,overlay:i}),this.options.sortLayers&&this._layers.sort(r(function(n,s){return this.options.sortFunction(n.layer,s.layer,n.name,s.name)},this)),this.options.autoZIndex&&t.setZIndex&&(this._lastZIndex++,t.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;ke(this._baseLayersList),ke(this._overlaysList),this._layerControlInputs=[];var t,e,i,n,s=0;for(i=0;i<this._layers.length;i++)n=this._layers[i],this._addItem(n),e=e||n.overlay,t=t||!n.overlay,s+=n.overlay?0:1;return this.options.hideSingleBase&&(t=t&&s>1,this._baseLayersList.style.display=t?"":"none"),this._separator.style.display=e&&t?"":"none",this},_onLayerChange:function(t){this._handlingClick||this._update();var e=this._getLayer(c(t.target)),i=e.overlay?t.type==="add"?"overlayadd":"overlayremove":t.type==="add"?"baselayerchange":null;i&&this._map.fire(i,e)},_createRadioElement:function(t,e){var i='<input type="radio" class="leaflet-control-layers-selector" name="'+t+'"'+(e?' checked="checked"':"")+"/>",n=document.createElement("div");return n.innerHTML=i,n.firstChild},_addItem:function(t){var e=document.createElement("label"),i=this._map.hasLayer(t.layer),n;t.overlay?(n=document.createElement("input"),n.type="checkbox",n.className="leaflet-control-layers-selector",n.defaultChecked=i):n=this._createRadioElement("leaflet-base-layers_"+c(this),i),this._layerControlInputs.push(n),n.layerId=c(t.layer),R(n,"click",this._onInputClick,this);var s=document.createElement("span");s.innerHTML=" "+t.name;var a=document.createElement("span");e.appendChild(a),a.appendChild(n),a.appendChild(s);var u=t.overlay?this._overlaysList:this._baseLayersList;return u.appendChild(e),this._checkDisabledLayers(),e},_onInputClick:function(){if(!this._preventClick){var t=this._layerControlInputs,e,i,n=[],s=[];this._handlingClick=!0;for(var a=t.length-1;a>=0;a--)e=t[a],i=this._getLayer(e.layerId).layer,e.checked?n.push(i):e.checked||s.push(i);for(a=0;a<s.length;a++)this._map.hasLayer(s[a])&&this._map.removeLayer(s[a]);for(a=0;a<n.length;a++)this._map.hasLayer(n[a])||this._map.addLayer(n[a]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var t=this._layerControlInputs,e,i,n=this._map.getZoom(),s=t.length-1;s>=0;s--)e=t[s],i=this._getLayer(e.layerId).layer,e.disabled=i.options.minZoom!==void 0&&n<i.options.minZoom||i.options.maxZoom!==void 0&&n>i.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var t=this._section;this._preventClick=!0,R(t,"click",lt),this.expand();var e=this;setTimeout(function(){J(t,"click",lt),e._preventClick=!1})}}),Uo=function(t,e,i){return new ln(t,e,i)},_i=wt.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(t){var e="leaflet-control-zoom",i=$("div",e+" leaflet-bar"),n=this.options;return this._zoomInButton=this._createButton(n.zoomInText,n.zoomInTitle,e+"-in",i,this._zoomIn),this._zoomOutButton=this._createButton(n.zoomOutText,n.zoomOutTitle,e+"-out",i,this._zoomOut),this._updateDisabled(),t.on("zoomend zoomlevelschange",this._updateDisabled,this),i},onRemove:function(t){t.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(t){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(t.shiftKey?3:1))},_zoomOut:function(t){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(t.shiftKey?3:1))},_createButton:function(t,e,i,n,s){var a=$("a",i,n);return a.innerHTML=t,a.href="#",a.title=e,a.setAttribute("role","button"),a.setAttribute("aria-label",e),ce(a),R(a,"click",Ht),R(a,"click",s,this),R(a,"click",this._refocusOnMap,this),a},_updateDisabled:function(){var t=this._map,e="leaflet-disabled";et(this._zoomInButton,e),et(this._zoomOutButton,e),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||t._zoom===t.getMinZoom())&&(D(this._zoomOutButton,e),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||t._zoom===t.getMaxZoom())&&(D(this._zoomInButton,e),this._zoomInButton.setAttribute("aria-disabled","true"))}});W.mergeOptions({zoomControl:!0}),W.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new _i,this.addControl(this.zoomControl))});var Wo=function(t){return new _i(t)},hn=wt.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(t){var e="leaflet-control-scale",i=$("div",e),n=this.options;return this._addScales(n,e+"-line",i),t.on(n.updateWhenIdle?"moveend":"move",this._update,this),t.whenReady(this._update,this),i},onRemove:function(t){t.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(t,e,i){t.metric&&(this._mScale=$("div",e,i)),t.imperial&&(this._iScale=$("div",e,i))},_update:function(){var t=this._map,e=t.getSize().y/2,i=t.distance(t.containerPointToLatLng([0,e]),t.containerPointToLatLng([this.options.maxWidth,e]));this._updateScales(i)},_updateScales:function(t){this.options.metric&&t&&this._updateMetric(t),this.options.imperial&&t&&this._updateImperial(t)},_updateMetric:function(t){var e=this._getRoundNum(t),i=e<1e3?e+" m":e/1e3+" km";this._updateScale(this._mScale,i,e/t)},_updateImperial:function(t){var e=t*3.2808399,i,n,s;e>5280?(i=e/5280,n=this._getRoundNum(i),this._updateScale(this._iScale,n+" mi",n/i)):(s=this._getRoundNum(e),this._updateScale(this._iScale,s+" ft",s/e))},_updateScale:function(t,e,i){t.style.width=Math.round(this.options.maxWidth*i)+"px",t.innerHTML=e},_getRoundNum:function(t){var e=Math.pow(10,(Math.floor(t)+"").length-1),i=t/e;return i=i>=10?10:i>=5?5:i>=3?3:i>=2?2:1,e*i}}),$o=function(t){return new hn(t)},qo='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',gi=wt.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(I.inlineSvg?qo+" ":"")+"Leaflet</a>"},initialize:function(t){k(this,t),this._attributions={}},onAdd:function(t){t.attributionControl=this,this._container=$("div","leaflet-control-attribution"),ce(this._container);for(var e in t._layers)t._layers[e].getAttribution&&this.addAttribution(t._layers[e].getAttribution());return this._update(),t.on("layeradd",this._addAttribution,this),this._container},onRemove:function(t){t.off("layeradd",this._addAttribution,this)},_addAttribution:function(t){t.layer.getAttribution&&(this.addAttribution(t.layer.getAttribution()),t.layer.once("remove",function(){this.removeAttribution(t.layer.getAttribution())},this))},setPrefix:function(t){return this.options.prefix=t,this._update(),this},addAttribution:function(t){return t?(this._attributions[t]||(this._attributions[t]=0),this._attributions[t]++,this._update(),this):this},removeAttribution:function(t){return t?(this._attributions[t]&&(this._attributions[t]--,this._update()),this):this},_update:function(){if(this._map){var t=[];for(var e in this._attributions)this._attributions[e]&&t.push(e);var i=[];this.options.prefix&&i.push(this.options.prefix),t.length&&i.push(t.join(", ")),this._container.innerHTML=i.join(' <span aria-hidden="true">|</span> ')}}});W.mergeOptions({attributionControl:!0}),W.addInitHook(function(){this.options.attributionControl&&new gi().addTo(this)});var Vo=function(t){return new gi(t)};wt.Layers=ln,wt.Zoom=_i,wt.Scale=hn,wt.Attribution=gi,de.layers=Uo,de.zoom=Wo,de.scale=$o,de.attribution=Vo;var Mt=X.extend({initialize:function(t){this._map=t},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});Mt.addTo=function(t,e){return t.addHandler(e,this),this};var Yo={Events:dt},cn=I.touch?"touchstart mousedown":"mousedown",At=bt.extend({options:{clickTolerance:3},initialize:function(t,e,i,n){k(this,n),this._element=t,this._dragStartTarget=e||t,this._preventOutline=i},enable:function(){this._enabled||(R(this._dragStartTarget,cn,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(At._dragging===this&&this.finishDrag(!0),J(this._dragStartTarget,cn,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(t){if(this._enabled&&(this._moved=!1,!ni(this._element,"leaflet-zoom-anim"))){if(t.touches&&t.touches.length!==1){At._dragging===this&&this.finishDrag();return}if(!(At._dragging||t.shiftKey||t.which!==1&&t.button!==1&&!t.touches)&&(At._dragging=this,this._preventOutline&&hi(this._element),ri(),ae(),!this._moving)){this.fire("down");var e=t.touches?t.touches[0]:t,i=en(this._element);this._startPoint=new N(e.clientX,e.clientY),this._startPos=Ft(this._element),this._parentScale=ci(i);var n=t.type==="mousedown";R(document,n?"mousemove":"touchmove",this._onMove,this),R(document,n?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(t){if(this._enabled){if(t.touches&&t.touches.length>1){this._moved=!0;return}var e=t.touches&&t.touches.length===1?t.touches[0]:t,i=new N(e.clientX,e.clientY)._subtract(this._startPoint);!i.x&&!i.y||Math.abs(i.x)+Math.abs(i.y)<this.options.clickTolerance||(i.x/=this._parentScale.x,i.y/=this._parentScale.y,lt(t),this._moved||(this.fire("dragstart"),this._moved=!0,D(document.body,"leaflet-dragging"),this._lastTarget=t.target||t.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),D(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(i),this._moving=!0,this._lastEvent=t,this._updatePosition())}},_updatePosition:function(){var t={originalEvent:this._lastEvent};this.fire("predrag",t),nt(this._element,this._newPos),this.fire("drag",t)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(t){et(document.body,"leaflet-dragging"),this._lastTarget&&(et(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),J(document,"mousemove touchmove",this._onMove,this),J(document,"mouseup touchend touchcancel",this._onUp,this),ai(),le();var e=this._moved&&this._moving;this._moving=!1,At._dragging=!1,e&&this.fire("dragend",{noInertia:t,distance:this._newPos.distanceTo(this._startPos)})}});function dn(t,e,i){var n,s=[1,4,2,8],a,u,v,w,P,S,A,F;for(a=0,S=t.length;a<S;a++)t[a]._code=jt(t[a],e);for(v=0;v<4;v++){for(A=s[v],n=[],a=0,S=t.length,u=S-1;a<S;u=a++)w=t[a],P=t[u],w._code&A?P._code&A||(F=Se(P,w,A,e,i),F._code=jt(F,e),n.push(F)):(P._code&A&&(F=Se(P,w,A,e,i),F._code=jt(F,e),n.push(F)),n.push(w));t=n}return t}function un(t,e){var i,n,s,a,u,v,w,P,S;if(!t||t.length===0)throw new Error("latlngs not passed");gt(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);var A=U([0,0]),F=it(t),ut=F.getNorthWest().distanceTo(F.getSouthWest())*F.getNorthEast().distanceTo(F.getNorthWest());ut<1700&&(A=vi(t));var st=t.length,vt=[];for(i=0;i<st;i++){var mt=U(t[i]);vt.push(e.project(U([mt.lat-A.lat,mt.lng-A.lng])))}for(v=w=P=0,i=0,n=st-1;i<st;n=i++)s=vt[i],a=vt[n],u=s.y*a.x-a.y*s.x,w+=(s.x+a.x)*u,P+=(s.y+a.y)*u,v+=u*3;v===0?S=vt[0]:S=[w/v,P/v];var Qt=e.unproject(z(S));return U([Qt.lat+A.lat,Qt.lng+A.lng])}function vi(t){for(var e=0,i=0,n=0,s=0;s<t.length;s++){var a=U(t[s]);e+=a.lat,i+=a.lng,n++}return U([e/n,i/n])}var Ko={__proto__:null,clipPolygon:dn,polygonCenter:un,centroid:vi};function fn(t,e){if(!e||!t.length)return t.slice();var i=e*e;return t=Qo(t,i),t=Xo(t,i),t}function pn(t,e,i){return Math.sqrt(ue(t,e,i,!0))}function Jo(t,e,i){return ue(t,e,i)}function Xo(t,e){var i=t.length,n=typeof Uint8Array<"u"?Uint8Array:Array,s=new n(i);s[0]=s[i-1]=1,yi(t,s,e,0,i-1);var a,u=[];for(a=0;a<i;a++)s[a]&&u.push(t[a]);return u}function yi(t,e,i,n,s){var a=0,u,v,w;for(v=n+1;v<=s-1;v++)w=ue(t[v],t[n],t[s],!0),w>a&&(u=v,a=w);a>i&&(e[u]=1,yi(t,e,i,n,u),yi(t,e,i,u,s))}function Qo(t,e){for(var i=[t[0]],n=1,s=0,a=t.length;n<a;n++)ts(t[n],t[s])>e&&(i.push(t[n]),s=n);return s<a-1&&i.push(t[a-1]),i}var mn;function _n(t,e,i,n,s){var a=n?mn:jt(t,i),u=jt(e,i),v,w,P;for(mn=u;;){if(!(a|u))return[t,e];if(a&u)return!1;v=a||u,w=Se(t,e,v,i,s),P=jt(w,i),v===a?(t=w,a=P):(e=w,u=P)}}function Se(t,e,i,n,s){var a=e.x-t.x,u=e.y-t.y,v=n.min,w=n.max,P,S;return i&8?(P=t.x+a*(w.y-t.y)/u,S=w.y):i&4?(P=t.x+a*(v.y-t.y)/u,S=v.y):i&2?(P=w.x,S=t.y+u*(w.x-t.x)/a):i&1&&(P=v.x,S=t.y+u*(v.x-t.x)/a),new N(P,S,s)}function jt(t,e){var i=0;return t.x<e.min.x?i|=1:t.x>e.max.x&&(i|=2),t.y<e.min.y?i|=4:t.y>e.max.y&&(i|=8),i}function ts(t,e){var i=e.x-t.x,n=e.y-t.y;return i*i+n*n}function ue(t,e,i,n){var s=e.x,a=e.y,u=i.x-s,v=i.y-a,w=u*u+v*v,P;return w>0&&(P=((t.x-s)*u+(t.y-a)*v)/w,P>1?(s=i.x,a=i.y):P>0&&(s+=u*P,a+=v*P)),u=t.x-s,v=t.y-a,n?u*u+v*v:new N(s,a)}function gt(t){return!O(t[0])||typeof t[0][0]!="object"&&typeof t[0][0]<"u"}function gn(t){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),gt(t)}function vn(t,e){var i,n,s,a,u,v,w,P;if(!t||t.length===0)throw new Error("latlngs not passed");gt(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);var S=U([0,0]),A=it(t),F=A.getNorthWest().distanceTo(A.getSouthWest())*A.getNorthEast().distanceTo(A.getNorthWest());F<1700&&(S=vi(t));var ut=t.length,st=[];for(i=0;i<ut;i++){var vt=U(t[i]);st.push(e.project(U([vt.lat-S.lat,vt.lng-S.lng])))}for(i=0,n=0;i<ut-1;i++)n+=st[i].distanceTo(st[i+1])/2;if(n===0)P=st[0];else for(i=0,a=0;i<ut-1;i++)if(u=st[i],v=st[i+1],s=u.distanceTo(v),a+=s,a>n){w=(a-n)/s,P=[v.x-w*(v.x-u.x),v.y-w*(v.y-u.y)];break}var mt=e.unproject(z(P));return U([mt.lat+S.lat,mt.lng+S.lng])}var es={__proto__:null,simplify:fn,pointToSegmentDistance:pn,closestPointOnSegment:Jo,clipSegment:_n,_getEdgeIntersection:Se,_getBitCode:jt,_sqClosestPointOnSegment:ue,isFlat:gt,_flat:gn,polylineCenter:vn},xi={project:function(t){return new N(t.lng,t.lat)},unproject:function(t){return new Y(t.y,t.x)},bounds:new K([-180,-90],[180,90])},bi={R:6378137,R_MINOR:6356752314245179e-9,bounds:new K([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(t){var e=Math.PI/180,i=this.R,n=t.lat*e,s=this.R_MINOR/i,a=Math.sqrt(1-s*s),u=a*Math.sin(n),v=Math.tan(Math.PI/4-n/2)/Math.pow((1-u)/(1+u),a/2);return n=-i*Math.log(Math.max(v,1e-10)),new N(t.lng*e*i,n)},unproject:function(t){for(var e=180/Math.PI,i=this.R,n=this.R_MINOR/i,s=Math.sqrt(1-n*n),a=Math.exp(-t.y/i),u=Math.PI/2-2*Math.atan(a),v=0,w=.1,P;v<15&&Math.abs(w)>1e-7;v++)P=s*Math.sin(u),P=Math.pow((1-P)/(1+P),s/2),w=Math.PI/2-2*Math.atan(a*P)-u,u+=w;return new Y(u*e,t.x*e/i)}},is={__proto__:null,LonLat:xi,Mercator:bi,SphericalMercator:qe},ns=_({},zt,{code:"EPSG:3395",projection:bi,transformation:(function(){var t=.5/(Math.PI*bi.R);return ne(t,.5,-t,.5)})()}),yn=_({},zt,{code:"EPSG:4326",projection:xi,transformation:ne(1/180,1,-1/180,.5)}),os=_({},Tt,{projection:xi,transformation:ne(1,0,-1,0),scale:function(t){return Math.pow(2,t)},zoom:function(t){return Math.log(t)/Math.LN2},distance:function(t,e){var i=e.lng-t.lng,n=e.lat-t.lat;return Math.sqrt(i*i+n*n)},infinite:!0});Tt.Earth=zt,Tt.EPSG3395=ns,Tt.EPSG3857=Ye,Tt.EPSG900913=ho,Tt.EPSG4326=yn,Tt.Simple=os;var Lt=bt.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(t){return t.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(t){return t&&t.removeLayer(this),this},getPane:function(t){return this._map.getPane(t?this.options[t]||t:this.options.pane)},addInteractiveTarget:function(t){return this._map._targets[c(t)]=this,this},removeInteractiveTarget:function(t){return delete this._map._targets[c(t)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(t){var e=t.target;if(e.hasLayer(this)){if(this._map=e,this._zoomAnimated=e._zoomAnimated,this.getEvents){var i=this.getEvents();e.on(i,this),this.once("remove",function(){e.off(i,this)},this)}this.onAdd(e),this.fire("add"),e.fire("layeradd",{layer:this})}}});W.include({addLayer:function(t){if(!t._layerAdd)throw new Error("The provided object is not a Layer.");var e=c(t);return this._layers[e]?this:(this._layers[e]=t,t._mapToAdd=this,t.beforeAdd&&t.beforeAdd(this),this.whenReady(t._layerAdd,t),this)},removeLayer:function(t){var e=c(t);return this._layers[e]?(this._loaded&&t.onRemove(this),delete this._layers[e],this._loaded&&(this.fire("layerremove",{layer:t}),t.fire("remove")),t._map=t._mapToAdd=null,this):this},hasLayer:function(t){return c(t)in this._layers},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},_addLayers:function(t){t=t?O(t)?t:[t]:[];for(var e=0,i=t.length;e<i;e++)this.addLayer(t[e])},_addZoomLimit:function(t){(!isNaN(t.options.maxZoom)||!isNaN(t.options.minZoom))&&(this._zoomBoundLayers[c(t)]=t,this._updateZoomLevels())},_removeZoomLimit:function(t){var e=c(t);this._zoomBoundLayers[e]&&(delete this._zoomBoundLayers[e],this._updateZoomLevels())},_updateZoomLevels:function(){var t=1/0,e=-1/0,i=this._getZoomSpan();for(var n in this._zoomBoundLayers){var s=this._zoomBoundLayers[n].options;t=s.minZoom===void 0?t:Math.min(t,s.minZoom),e=s.maxZoom===void 0?e:Math.max(e,s.maxZoom)}this._layersMaxZoom=e===-1/0?void 0:e,this._layersMinZoom=t===1/0?void 0:t,i!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var Vt=Lt.extend({initialize:function(t,e){k(this,e),this._layers={};var i,n;if(t)for(i=0,n=t.length;i<n;i++)this.addLayer(t[i])},addLayer:function(t){var e=this.getLayerId(t);return this._layers[e]=t,this._map&&this._map.addLayer(t),this},removeLayer:function(t){var e=t in this._layers?t:this.getLayerId(t);return this._map&&this._layers[e]&&this._map.removeLayer(this._layers[e]),delete this._layers[e],this},hasLayer:function(t){var e=typeof t=="number"?t:this.getLayerId(t);return e in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(t){var e=Array.prototype.slice.call(arguments,1),i,n;for(i in this._layers)n=this._layers[i],n[t]&&n[t].apply(n,e);return this},onAdd:function(t){this.eachLayer(t.addLayer,t)},onRemove:function(t){this.eachLayer(t.removeLayer,t)},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},getLayer:function(t){return this._layers[t]},getLayers:function(){var t=[];return this.eachLayer(t.push,t),t},setZIndex:function(t){return this.invoke("setZIndex",t)},getLayerId:function(t){return c(t)}}),ss=function(t,e){return new Vt(t,e)},St=Vt.extend({addLayer:function(t){return this.hasLayer(t)?this:(t.addEventParent(this),Vt.prototype.addLayer.call(this,t),this.fire("layeradd",{layer:t}))},removeLayer:function(t){return this.hasLayer(t)?(t in this._layers&&(t=this._layers[t]),t.removeEventParent(this),Vt.prototype.removeLayer.call(this,t),this.fire("layerremove",{layer:t})):this},setStyle:function(t){return this.invoke("setStyle",t)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var t=new pt;for(var e in this._layers){var i=this._layers[e];t.extend(i.getBounds?i.getBounds():i.getLatLng())}return t}}),rs=function(t,e){return new St(t,e)},Yt=X.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(t){k(this,t)},createIcon:function(t){return this._createIcon("icon",t)},createShadow:function(t){return this._createIcon("shadow",t)},_createIcon:function(t,e){var i=this._getIconUrl(t);if(!i){if(t==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var n=this._createImg(i,e&&e.tagName==="IMG"?e:null);return this._setIconStyles(n,t),(this.options.crossOrigin||this.options.crossOrigin==="")&&(n.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),n},_setIconStyles:function(t,e){var i=this.options,n=i[e+"Size"];typeof n=="number"&&(n=[n,n]);var s=z(n),a=z(e==="shadow"&&i.shadowAnchor||i.iconAnchor||s&&s.divideBy(2,!0));t.className="leaflet-marker-"+e+" "+(i.className||""),a&&(t.style.marginLeft=-a.x+"px",t.style.marginTop=-a.y+"px"),s&&(t.style.width=s.x+"px",t.style.height=s.y+"px")},_createImg:function(t,e){return e=e||document.createElement("img"),e.src=t,e},_getIconUrl:function(t){return I.retina&&this.options[t+"RetinaUrl"]||this.options[t+"Url"]}});function as(t){return new Yt(t)}var fe=Yt.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(t){return typeof fe.imagePath!="string"&&(fe.imagePath=this._detectIconPath()),(this.options.imagePath||fe.imagePath)+Yt.prototype._getIconUrl.call(this,t)},_stripUrl:function(t){var e=function(i,n,s){var a=n.exec(i);return a&&a[s]};return t=e(t,/^url\((['"])?(.+)\1\)$/,2),t&&e(t,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var t=$("div","leaflet-default-icon-path",document.body),e=re(t,"background-image")||re(t,"backgroundImage");if(document.body.removeChild(t),e=this._stripUrl(e),e)return e;var i=document.querySelector('link[href$="leaflet.css"]');return i?i.href.substring(0,i.href.length-11-1):""}}),xn=Mt.extend({initialize:function(t){this._marker=t},addHooks:function(){var t=this._marker._icon;this._draggable||(this._draggable=new At(t,t,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),D(t,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&et(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(t){var e=this._marker,i=e._map,n=this._marker.options.autoPanSpeed,s=this._marker.options.autoPanPadding,a=Ft(e._icon),u=i.getPixelBounds(),v=i.getPixelOrigin(),w=ft(u.min._subtract(v).add(s),u.max._subtract(v).subtract(s));if(!w.contains(a)){var P=z((Math.max(w.max.x,a.x)-w.max.x)/(u.max.x-w.max.x)-(Math.min(w.min.x,a.x)-w.min.x)/(u.min.x-w.min.x),(Math.max(w.max.y,a.y)-w.max.y)/(u.max.y-w.max.y)-(Math.min(w.min.y,a.y)-w.min.y)/(u.min.y-w.min.y)).multiplyBy(n);i.panBy(P,{animate:!1}),this._draggable._newPos._add(P),this._draggable._startPos._add(P),nt(e._icon,this._draggable._newPos),this._onDrag(t),this._panRequest=V(this._adjustPan.bind(this,t))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(t){this._marker.options.autoPan&&(tt(this._panRequest),this._panRequest=V(this._adjustPan.bind(this,t)))},_onDrag:function(t){var e=this._marker,i=e._shadow,n=Ft(e._icon),s=e._map.layerPointToLatLng(n);i&&nt(i,n),e._latlng=s,t.latlng=s,t.oldLatLng=this._oldLatLng,e.fire("move",t).fire("drag",t)},_onDragEnd:function(t){tt(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",t)}}),Ee=Lt.extend({options:{icon:new fe,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(t,e){k(this,e),this._latlng=U(t)},onAdd:function(t){this._zoomAnimated=this._zoomAnimated&&t.options.markerZoomAnimation,this._zoomAnimated&&t.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(t){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&t.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(t){var e=this._latlng;return this._latlng=U(t),this.update(),this.fire("move",{oldLatLng:e,latlng:this._latlng})},setZIndexOffset:function(t){return this.options.zIndexOffset=t,this.update()},getIcon:function(){return this.options.icon},setIcon:function(t){return this.options.icon=t,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var t=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(t)}return this},_initIcon:function(){var t=this.options,e="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),i=t.icon.createIcon(this._icon),n=!1;i!==this._icon&&(this._icon&&this._removeIcon(),n=!0,t.title&&(i.title=t.title),i.tagName==="IMG"&&(i.alt=t.alt||"")),D(i,e),t.keyboard&&(i.tabIndex="0",i.setAttribute("role","button")),this._icon=i,t.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&R(i,"focus",this._panOnFocus,this);var s=t.icon.createShadow(this._shadow),a=!1;s!==this._shadow&&(this._removeShadow(),a=!0),s&&(D(s,e),s.alt=""),this._shadow=s,t.opacity<1&&this._updateOpacity(),n&&this.getPane().appendChild(this._icon),this._initInteraction(),s&&a&&this.getPane(t.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&J(this._icon,"focus",this._panOnFocus,this),Q(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&Q(this._shadow),this._shadow=null},_setPos:function(t){this._icon&&nt(this._icon,t),this._shadow&&nt(this._shadow,t),this._zIndex=t.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(t){this._icon&&(this._icon.style.zIndex=this._zIndex+t)},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center).round();this._setPos(e)},_initInteraction:function(){if(this.options.interactive&&(D(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),xn)){var t=this.options.draggable;this.dragging&&(t=this.dragging.enabled(),this.dragging.disable()),this.dragging=new xn(this),t&&this.dragging.enable()}},setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var t=this.options.opacity;this._icon&&_t(this._icon,t),this._shadow&&_t(this._shadow,t)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var t=this._map;if(t){var e=this.options.icon.options,i=e.iconSize?z(e.iconSize):z(0,0),n=e.iconAnchor?z(e.iconAnchor):z(0,0);t.panInside(this._latlng,{paddingTopLeft:n,paddingBottomRight:i.subtract(n)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function ls(t,e){return new Ee(t,e)}var Ot=Lt.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(t){this._renderer=t.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(t){return k(this,t),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&t&&Object.prototype.hasOwnProperty.call(t,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),Ie=Ot.extend({options:{fill:!0,radius:10},initialize:function(t,e){k(this,e),this._latlng=U(t),this._radius=this.options.radius},setLatLng:function(t){var e=this._latlng;return this._latlng=U(t),this.redraw(),this.fire("move",{oldLatLng:e,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(t){return this.options.radius=this._radius=t,this.redraw()},getRadius:function(){return this._radius},setStyle:function(t){var e=t&&t.radius||this._radius;return Ot.prototype.setStyle.call(this,t),this.setRadius(e),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var t=this._radius,e=this._radiusY||t,i=this._clickTolerance(),n=[t+i,e+i];this._pxBounds=new K(this._point.subtract(n),this._point.add(n))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(t){return t.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function hs(t,e){return new Ie(t,e)}var wi=Ie.extend({initialize:function(t,e,i){if(typeof e=="number"&&(e=_({},i,{radius:e})),k(this,e),this._latlng=U(t),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(t){return this._mRadius=t,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var t=[this._radius,this._radiusY||this._radius];return new pt(this._map.layerPointToLatLng(this._point.subtract(t)),this._map.layerPointToLatLng(this._point.add(t)))},setStyle:Ot.prototype.setStyle,_project:function(){var t=this._latlng.lng,e=this._latlng.lat,i=this._map,n=i.options.crs;if(n.distance===zt.distance){var s=Math.PI/180,a=this._mRadius/zt.R/s,u=i.project([e+a,t]),v=i.project([e-a,t]),w=u.add(v).divideBy(2),P=i.unproject(w).lat,S=Math.acos((Math.cos(a*s)-Math.sin(e*s)*Math.sin(P*s))/(Math.cos(e*s)*Math.cos(P*s)))/s;(isNaN(S)||S===0)&&(S=a/Math.cos(Math.PI/180*e)),this._point=w.subtract(i.getPixelOrigin()),this._radius=isNaN(S)?0:w.x-i.project([P,t-S]).x,this._radiusY=w.y-u.y}else{var A=n.unproject(n.project(this._latlng).subtract([this._mRadius,0]));this._point=i.latLngToLayerPoint(this._latlng),this._radius=this._point.x-i.latLngToLayerPoint(A).x}this._updateBounds()}});function cs(t,e,i){return new wi(t,e,i)}var Et=Ot.extend({options:{smoothFactor:1,noClip:!1},initialize:function(t,e){k(this,e),this._setLatLngs(t)},getLatLngs:function(){return this._latlngs},setLatLngs:function(t){return this._setLatLngs(t),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(t){for(var e=1/0,i=null,n=ue,s,a,u=0,v=this._parts.length;u<v;u++)for(var w=this._parts[u],P=1,S=w.length;P<S;P++){s=w[P-1],a=w[P];var A=n(t,s,a,!0);A<e&&(e=A,i=n(t,s,a))}return i&&(i.distance=Math.sqrt(e)),i},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return vn(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(t,e){return e=e||this._defaultShape(),t=U(t),e.push(t),this._bounds.extend(t),this.redraw()},_setLatLngs:function(t){this._bounds=new pt,this._latlngs=this._convertLatLngs(t)},_defaultShape:function(){return gt(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(t){for(var e=[],i=gt(t),n=0,s=t.length;n<s;n++)i?(e[n]=U(t[n]),this._bounds.extend(e[n])):e[n]=this._convertLatLngs(t[n]);return e},_project:function(){var t=new K;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,t),this._bounds.isValid()&&t.isValid()&&(this._rawPxBounds=t,this._updateBounds())},_updateBounds:function(){var t=this._clickTolerance(),e=new N(t,t);this._rawPxBounds&&(this._pxBounds=new K([this._rawPxBounds.min.subtract(e),this._rawPxBounds.max.add(e)]))},_projectLatlngs:function(t,e,i){var n=t[0]instanceof Y,s=t.length,a,u;if(n){for(u=[],a=0;a<s;a++)u[a]=this._map.latLngToLayerPoint(t[a]),i.extend(u[a]);e.push(u)}else for(a=0;a<s;a++)this._projectLatlngs(t[a],e,i)},_clipPoints:function(){var t=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(t))){if(this.options.noClip){this._parts=this._rings;return}var e=this._parts,i,n,s,a,u,v,w;for(i=0,s=0,a=this._rings.length;i<a;i++)for(w=this._rings[i],n=0,u=w.length;n<u-1;n++)v=_n(w[n],w[n+1],t,n,!0),v&&(e[s]=e[s]||[],e[s].push(v[0]),(v[1]!==w[n+1]||n===u-2)&&(e[s].push(v[1]),s++))}},_simplifyPoints:function(){for(var t=this._parts,e=this.options.smoothFactor,i=0,n=t.length;i<n;i++)t[i]=fn(t[i],e)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(t,e){var i,n,s,a,u,v,w=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(i=0,a=this._parts.length;i<a;i++)for(v=this._parts[i],n=0,u=v.length,s=u-1;n<u;s=n++)if(!(!e&&n===0)&&pn(t,v[s],v[n])<=w)return!0;return!1}});function ds(t,e){return new Et(t,e)}Et._flat=gn;var Kt=Et.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return un(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(t){var e=Et.prototype._convertLatLngs.call(this,t),i=e.length;return i>=2&&e[0]instanceof Y&&e[0].equals(e[i-1])&&e.pop(),e},_setLatLngs:function(t){Et.prototype._setLatLngs.call(this,t),gt(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return gt(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var t=this._renderer._bounds,e=this.options.weight,i=new N(e,e);if(t=new K(t.min.subtract(i),t.max.add(i)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(t))){if(this.options.noClip){this._parts=this._rings;return}for(var n=0,s=this._rings.length,a;n<s;n++)a=dn(this._rings[n],t,!0),a.length&&this._parts.push(a)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(t){var e=!1,i,n,s,a,u,v,w,P;if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(a=0,w=this._parts.length;a<w;a++)for(i=this._parts[a],u=0,P=i.length,v=P-1;u<P;v=u++)n=i[u],s=i[v],n.y>t.y!=s.y>t.y&&t.x<(s.x-n.x)*(t.y-n.y)/(s.y-n.y)+n.x&&(e=!e);return e||Et.prototype._containsPoint.call(this,t,!0)}});function us(t,e){return new Kt(t,e)}var It=St.extend({initialize:function(t,e){k(this,e),this._layers={},t&&this.addData(t)},addData:function(t){var e=O(t)?t:t.features,i,n,s;if(e){for(i=0,n=e.length;i<n;i++)s=e[i],(s.geometries||s.geometry||s.features||s.coordinates)&&this.addData(s);return this}var a=this.options;if(a.filter&&!a.filter(t))return this;var u=Be(t,a);return u?(u.feature=Oe(t),u.defaultOptions=u.options,this.resetStyle(u),a.onEachFeature&&a.onEachFeature(t,u),this.addLayer(u)):this},resetStyle:function(t){return t===void 0?this.eachLayer(this.resetStyle,this):(t.options=_({},t.defaultOptions),this._setLayerStyle(t,this.options.style),this)},setStyle:function(t){return this.eachLayer(function(e){this._setLayerStyle(e,t)},this)},_setLayerStyle:function(t,e){t.setStyle&&(typeof e=="function"&&(e=e(t.feature)),t.setStyle(e))}});function Be(t,e){var i=t.type==="Feature"?t.geometry:t,n=i?i.coordinates:null,s=[],a=e&&e.pointToLayer,u=e&&e.coordsToLatLng||Li,v,w,P,S;if(!n&&!i)return null;switch(i.type){case"Point":return v=u(n),bn(a,t,v,e);case"MultiPoint":for(P=0,S=n.length;P<S;P++)v=u(n[P]),s.push(bn(a,t,v,e));return new St(s);case"LineString":case"MultiLineString":return w=ze(n,i.type==="LineString"?0:1,u),new Et(w,e);case"Polygon":case"MultiPolygon":return w=ze(n,i.type==="Polygon"?1:2,u),new Kt(w,e);case"GeometryCollection":for(P=0,S=i.geometries.length;P<S;P++){var A=Be({geometry:i.geometries[P],type:"Feature",properties:t.properties},e);A&&s.push(A)}return new St(s);case"FeatureCollection":for(P=0,S=i.features.length;P<S;P++){var F=Be(i.features[P],e);F&&s.push(F)}return new St(s);default:throw new Error("Invalid GeoJSON object.")}}function bn(t,e,i,n){return t?t(e,i):new Ee(i,n&&n.markersInheritOptions&&n)}function Li(t){return new Y(t[1],t[0],t[2])}function ze(t,e,i){for(var n=[],s=0,a=t.length,u;s<a;s++)u=e?ze(t[s],e-1,i):(i||Li)(t[s]),n.push(u);return n}function ki(t,e){return t=U(t),t.alt!==void 0?[b(t.lng,e),b(t.lat,e),b(t.alt,e)]:[b(t.lng,e),b(t.lat,e)]}function Ae(t,e,i,n){for(var s=[],a=0,u=t.length;a<u;a++)s.push(e?Ae(t[a],gt(t[a])?0:e-1,i,n):ki(t[a],n));return!e&&i&&s.length>0&&s.push(s[0].slice()),s}function Jt(t,e){return t.feature?_({},t.feature,{geometry:e}):Oe(e)}function Oe(t){return t.type==="Feature"||t.type==="FeatureCollection"?t:{type:"Feature",properties:{},geometry:t}}var Pi={toGeoJSON:function(t){return Jt(this,{type:"Point",coordinates:ki(this.getLatLng(),t)})}};Ee.include(Pi),wi.include(Pi),Ie.include(Pi),Et.include({toGeoJSON:function(t){var e=!gt(this._latlngs),i=Ae(this._latlngs,e?1:0,!1,t);return Jt(this,{type:(e?"Multi":"")+"LineString",coordinates:i})}}),Kt.include({toGeoJSON:function(t){var e=!gt(this._latlngs),i=e&&!gt(this._latlngs[0]),n=Ae(this._latlngs,i?2:e?1:0,!0,t);return e||(n=[n]),Jt(this,{type:(i?"Multi":"")+"Polygon",coordinates:n})}}),Vt.include({toMultiPoint:function(t){var e=[];return this.eachLayer(function(i){e.push(i.toGeoJSON(t).geometry.coordinates)}),Jt(this,{type:"MultiPoint",coordinates:e})},toGeoJSON:function(t){var e=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(e==="MultiPoint")return this.toMultiPoint(t);var i=e==="GeometryCollection",n=[];return this.eachLayer(function(s){if(s.toGeoJSON){var a=s.toGeoJSON(t);if(i)n.push(a.geometry);else{var u=Oe(a);u.type==="FeatureCollection"?n.push.apply(n,u.features):n.push(u)}}}),i?Jt(this,{geometries:n,type:"GeometryCollection"}):{type:"FeatureCollection",features:n}}});function wn(t,e){return new It(t,e)}var fs=wn,Ze=Lt.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(t,e,i){this._url=t,this._bounds=it(e),k(this,i)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(D(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){Q(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(t){return this.options.opacity=t,this._image&&this._updateOpacity(),this},setStyle:function(t){return t.opacity&&this.setOpacity(t.opacity),this},bringToFront:function(){return this._map&&$t(this._image),this},bringToBack:function(){return this._map&&qt(this._image),this},setUrl:function(t){return this._url=t,this._image&&(this._image.src=t),this},setBounds:function(t){return this._bounds=it(t),this._map&&this._reset(),this},getEvents:function(){var t={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var t=this._url.tagName==="IMG",e=this._image=t?this._url:$("img");if(D(e,"leaflet-image-layer"),this._zoomAnimated&&D(e,"leaflet-zoom-animated"),this.options.className&&D(e,this.options.className),e.onselectstart=g,e.onmousemove=g,e.onload=r(this.fire,this,"load"),e.onerror=r(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(e.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),t){this._url=e.src;return}e.src=this._url,e.alt=this.options.alt},_animateZoom:function(t){var e=this._map.getZoomScale(t.zoom),i=this._map._latLngBoundsToNewLayerBounds(this._bounds,t.zoom,t.center).min;Dt(this._image,i,e)},_reset:function(){var t=this._image,e=new K(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),i=e.getSize();nt(t,e.min),t.style.width=i.x+"px",t.style.height=i.y+"px"},_updateOpacity:function(){_t(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var t=this.options.errorOverlayUrl;t&&this._url!==t&&(this._url=t,this._image.src=t)},getCenter:function(){return this._bounds.getCenter()}}),ps=function(t,e,i){return new Ze(t,e,i)},Ln=Ze.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var t=this._url.tagName==="VIDEO",e=this._image=t?this._url:$("video");if(D(e,"leaflet-image-layer"),this._zoomAnimated&&D(e,"leaflet-zoom-animated"),this.options.className&&D(e,this.options.className),e.onselectstart=g,e.onmousemove=g,e.onloadeddata=r(this.fire,this,"load"),t){for(var i=e.getElementsByTagName("source"),n=[],s=0;s<i.length;s++)n.push(i[s].src);this._url=i.length>0?n:[e.src];return}O(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(e.style,"objectFit")&&(e.style.objectFit="fill"),e.autoplay=!!this.options.autoplay,e.loop=!!this.options.loop,e.muted=!!this.options.muted,e.playsInline=!!this.options.playsInline;for(var a=0;a<this._url.length;a++){var u=$("source");u.src=this._url[a],e.appendChild(u)}}});function ms(t,e,i){return new Ln(t,e,i)}var kn=Ze.extend({_initImage:function(){var t=this._image=this._url;D(t,"leaflet-image-layer"),this._zoomAnimated&&D(t,"leaflet-zoom-animated"),this.options.className&&D(t,this.options.className),t.onselectstart=g,t.onmousemove=g}});function _s(t,e,i){return new kn(t,e,i)}var Ct=Lt.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(t,e){t&&(t instanceof Y||O(t))?(this._latlng=U(t),k(this,e)):(k(this,t),this._source=e),this.options.content&&(this._content=this.options.content)},openOn:function(t){return t=arguments.length?t:this._source._map,t.hasLayer(this)||t.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(t){return this._map?this.close():(arguments.length?this._source=t:t=this._source,this._prepareOpen(),this.openOn(t._map)),this},onAdd:function(t){this._zoomAnimated=t._zoomAnimated,this._container||this._initLayout(),t._fadeAnimated&&_t(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),t._fadeAnimated&&_t(this._container,1),this.bringToFront(),this.options.interactive&&(D(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(t){t._fadeAnimated?(_t(this._container,0),this._removeTimeout=setTimeout(r(Q,void 0,this._container),200)):Q(this._container),this.options.interactive&&(et(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(t){return this._latlng=U(t),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(t){return this._content=t,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var t={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&$t(this._container),this},bringToBack:function(){return this._map&&qt(this._container),this},_prepareOpen:function(t){var e=this._source;if(!e._map)return!1;if(e instanceof St){e=null;var i=this._source._layers;for(var n in i)if(i[n]._map){e=i[n];break}if(!e)return!1;this._source=e}if(!t)if(e.getCenter)t=e.getCenter();else if(e.getLatLng)t=e.getLatLng();else if(e.getBounds)t=e.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(t),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var t=this._contentNode,e=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof e=="string")t.innerHTML=e;else{for(;t.hasChildNodes();)t.removeChild(t.firstChild);t.appendChild(e)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var t=this._map.latLngToLayerPoint(this._latlng),e=z(this.options.offset),i=this._getAnchor();this._zoomAnimated?nt(this._container,t.add(i)):e=e.add(t).add(i);var n=this._containerBottom=-e.y,s=this._containerLeft=-Math.round(this._containerWidth/2)+e.x;this._container.style.bottom=n+"px",this._container.style.left=s+"px"}},_getAnchor:function(){return[0,0]}});W.include({_initOverlay:function(t,e,i,n){var s=e;return s instanceof t||(s=new t(n).setContent(e)),i&&s.setLatLng(i),s}}),Lt.include({_initOverlay:function(t,e,i,n){var s=i;return s instanceof t?(k(s,n),s._source=this):(s=e&&!n?e:new t(n,this),s.setContent(i)),s}});var Ne=Ct.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(t){return t=arguments.length?t:this._source._map,!t.hasLayer(this)&&t._popup&&t._popup.options.autoClose&&t.removeLayer(t._popup),t._popup=this,Ct.prototype.openOn.call(this,t)},onAdd:function(t){Ct.prototype.onAdd.call(this,t),t.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof Ot||this._source.on("preclick",Gt))},onRemove:function(t){Ct.prototype.onRemove.call(this,t),t.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof Ot||this._source.off("preclick",Gt))},getEvents:function(){var t=Ct.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(t.preclick=this.close),this.options.keepInView&&(t.moveend=this._adjustPan),t},_initLayout:function(){var t="leaflet-popup",e=this._container=$("div",t+" "+(this.options.className||"")+" leaflet-zoom-animated"),i=this._wrapper=$("div",t+"-content-wrapper",e);if(this._contentNode=$("div",t+"-content",i),ce(e),pi(this._contentNode),R(e,"contextmenu",Gt),this._tipContainer=$("div",t+"-tip-container",e),this._tip=$("div",t+"-tip",this._tipContainer),this.options.closeButton){var n=this._closeButton=$("a",t+"-close-button",e);n.setAttribute("role","button"),n.setAttribute("aria-label","Close popup"),n.href="#close",n.innerHTML='<span aria-hidden="true">&#215;</span>',R(n,"click",function(s){lt(s),this.close()},this)}},_updateLayout:function(){var t=this._contentNode,e=t.style;e.width="",e.whiteSpace="nowrap";var i=t.offsetWidth;i=Math.min(i,this.options.maxWidth),i=Math.max(i,this.options.minWidth),e.width=i+1+"px",e.whiteSpace="",e.height="";var n=t.offsetHeight,s=this.options.maxHeight,a="leaflet-popup-scrolled";s&&n>s?(e.height=s+"px",D(t,a)):et(t,a),this._containerWidth=this._container.offsetWidth},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center),i=this._getAnchor();nt(this._container,e.add(i))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var t=this._map,e=parseInt(re(this._container,"marginBottom"),10)||0,i=this._container.offsetHeight+e,n=this._containerWidth,s=new N(this._containerLeft,-i-this._containerBottom);s._add(Ft(this._container));var a=t.layerPointToContainerPoint(s),u=z(this.options.autoPanPadding),v=z(this.options.autoPanPaddingTopLeft||u),w=z(this.options.autoPanPaddingBottomRight||u),P=t.getSize(),S=0,A=0;a.x+n+w.x>P.x&&(S=a.x+n-P.x+w.x),a.x-S-v.x<0&&(S=a.x-v.x),a.y+i+w.y>P.y&&(A=a.y+i-P.y+w.y),a.y-A-v.y<0&&(A=a.y-v.y),(S||A)&&(this.options.keepInView&&(this._autopanning=!0),t.fire("autopanstart").panBy([S,A]))}},_getAnchor:function(){return z(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),gs=function(t,e){return new Ne(t,e)};W.mergeOptions({closePopupOnClick:!0}),W.include({openPopup:function(t,e,i){return this._initOverlay(Ne,t,e,i).openOn(this),this},closePopup:function(t){return t=arguments.length?t:this._popup,t&&t.close(),this}}),Lt.include({bindPopup:function(t,e){return this._popup=this._initOverlay(Ne,this._popup,t,e),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(t){return this._popup&&(this instanceof St||(this._popup._source=this),this._popup._prepareOpen(t||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(t){return this._popup&&this._popup.setContent(t),this},getPopup:function(){return this._popup},_openPopup:function(t){if(!(!this._popup||!this._map)){Ht(t);var e=t.layer||t.target;if(this._popup._source===e&&!(e instanceof Ot)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(t.latlng);return}this._popup._source=e,this.openPopup(t.latlng)}},_movePopup:function(t){this._popup.setLatLng(t.latlng)},_onKeyPress:function(t){t.originalEvent.keyCode===13&&this._openPopup(t)}});var Re=Ct.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(t){Ct.prototype.onAdd.call(this,t),this.setOpacity(this.options.opacity),t.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(t){Ct.prototype.onRemove.call(this,t),t.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var t=Ct.prototype.getEvents.call(this);return this.options.permanent||(t.preclick=this.close),t},_initLayout:function(){var t="leaflet-tooltip",e=t+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=$("div",e),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+c(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(t){var e,i,n=this._map,s=this._container,a=n.latLngToContainerPoint(n.getCenter()),u=n.layerPointToContainerPoint(t),v=this.options.direction,w=s.offsetWidth,P=s.offsetHeight,S=z(this.options.offset),A=this._getAnchor();v==="top"?(e=w/2,i=P):v==="bottom"?(e=w/2,i=0):v==="center"?(e=w/2,i=P/2):v==="right"?(e=0,i=P/2):v==="left"?(e=w,i=P/2):u.x<a.x?(v="right",e=0,i=P/2):(v="left",e=w+(S.x+A.x)*2,i=P/2),t=t.subtract(z(e,i,!0)).add(S).add(A),et(s,"leaflet-tooltip-right"),et(s,"leaflet-tooltip-left"),et(s,"leaflet-tooltip-top"),et(s,"leaflet-tooltip-bottom"),D(s,"leaflet-tooltip-"+v),nt(s,t)},_updatePosition:function(){var t=this._map.latLngToLayerPoint(this._latlng);this._setPosition(t)},setOpacity:function(t){this.options.opacity=t,this._container&&_t(this._container,t)},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center);this._setPosition(e)},_getAnchor:function(){return z(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),vs=function(t,e){return new Re(t,e)};W.include({openTooltip:function(t,e,i){return this._initOverlay(Re,t,e,i).openOn(this),this},closeTooltip:function(t){return t.close(),this}}),Lt.include({bindTooltip:function(t,e){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(Re,this._tooltip,t,e),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(t){if(!(!t&&this._tooltipHandlersAdded)){var e=t?"off":"on",i={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?i.add=this._openTooltip:(i.mouseover=this._openTooltip,i.mouseout=this.closeTooltip,i.click=this._openTooltip,this._map?this._addFocusListeners():i.add=this._addFocusListeners),this._tooltip.options.sticky&&(i.mousemove=this._moveTooltip),this[e](i),this._tooltipHandlersAdded=!t}},openTooltip:function(t){return this._tooltip&&(this instanceof St||(this._tooltip._source=this),this._tooltip._prepareOpen(t)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(t){return this._tooltip&&this._tooltip.setContent(t),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(t){var e=typeof t.getElement=="function"&&t.getElement();e&&(R(e,"focus",function(){this._tooltip._source=t,this.openTooltip()},this),R(e,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(t){var e=typeof t.getElement=="function"&&t.getElement();e&&e.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(t){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var e=this;this._map.once("moveend",function(){e._openOnceFlag=!1,e._openTooltip(t)});return}this._tooltip._source=t.layer||t.target,this.openTooltip(this._tooltip.options.sticky?t.latlng:void 0)}},_moveTooltip:function(t){var e=t.latlng,i,n;this._tooltip.options.sticky&&t.originalEvent&&(i=this._map.mouseEventToContainerPoint(t.originalEvent),n=this._map.containerPointToLayerPoint(i),e=this._map.layerPointToLatLng(n)),this._tooltip.setLatLng(e)}});var Pn=Yt.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(t){var e=t&&t.tagName==="DIV"?t:document.createElement("div"),i=this.options;if(i.html instanceof Element?(ke(e),e.appendChild(i.html)):e.innerHTML=i.html!==!1?i.html:"",i.bgPos){var n=z(i.bgPos);e.style.backgroundPosition=-n.x+"px "+-n.y+"px"}return this._setIconStyles(e,"icon"),e},createShadow:function(){return null}});function ys(t){return new Pn(t)}Yt.Default=fe;var pe=Lt.extend({options:{tileSize:256,opacity:1,updateWhenIdle:I.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(t){k(this,t)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(t){t._addZoomLimit(this)},onRemove:function(t){this._removeAllTiles(),Q(this._container),t._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&($t(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(qt(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(t){return this.options.opacity=t,this._updateOpacity(),this},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var t=this._clampZoom(this._map.getZoom());t!==this._tileZoom&&(this._tileZoom=t,this._updateLevels()),this._update()}return this},getEvents:function(){var t={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=f(this._onMoveEnd,this.options.updateInterval,this)),t.move=this._onMove),this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},createTile:function(){return document.createElement("div")},getTileSize:function(){var t=this.options.tileSize;return t instanceof N?t:new N(t,t)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(t){for(var e=this.getPane().children,i=-t(-1/0,1/0),n=0,s=e.length,a;n<s;n++)a=e[n].style.zIndex,e[n]!==this._container&&a&&(i=t(i,+a));isFinite(i)&&(this.options.zIndex=i+t(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!I.ielt9){_t(this._container,this.options.opacity);var t=+new Date,e=!1,i=!1;for(var n in this._tiles){var s=this._tiles[n];if(!(!s.current||!s.loaded)){var a=Math.min(1,(t-s.loaded)/200);_t(s.el,a),a<1?e=!0:(s.active?i=!0:this._onOpaqueTile(s),s.active=!0)}}i&&!this._noPrune&&this._pruneTiles(),e&&(tt(this._fadeFrame),this._fadeFrame=V(this._updateOpacity,this))}},_onOpaqueTile:g,_initContainer:function(){this._container||(this._container=$("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var t=this._tileZoom,e=this.options.maxZoom;if(t!==void 0){for(var i in this._levels)i=Number(i),this._levels[i].el.children.length||i===t?(this._levels[i].el.style.zIndex=e-Math.abs(t-i),this._onUpdateLevel(i)):(Q(this._levels[i].el),this._removeTilesAtZoom(i),this._onRemoveLevel(i),delete this._levels[i]);var n=this._levels[t],s=this._map;return n||(n=this._levels[t]={},n.el=$("div","leaflet-tile-container leaflet-zoom-animated",this._container),n.el.style.zIndex=e,n.origin=s.project(s.unproject(s.getPixelOrigin()),t).round(),n.zoom=t,this._setZoomTransform(n,s.getCenter(),s.getZoom()),g(n.el.offsetWidth),this._onCreateLevel(n)),this._level=n,n}},_onUpdateLevel:g,_onRemoveLevel:g,_onCreateLevel:g,_pruneTiles:function(){if(this._map){var t,e,i=this._map.getZoom();if(i>this.options.maxZoom||i<this.options.minZoom){this._removeAllTiles();return}for(t in this._tiles)e=this._tiles[t],e.retain=e.current;for(t in this._tiles)if(e=this._tiles[t],e.current&&!e.active){var n=e.coords;this._retainParent(n.x,n.y,n.z,n.z-5)||this._retainChildren(n.x,n.y,n.z,n.z+2)}for(t in this._tiles)this._tiles[t].retain||this._removeTile(t)}},_removeTilesAtZoom:function(t){for(var e in this._tiles)this._tiles[e].coords.z===t&&this._removeTile(e)},_removeAllTiles:function(){for(var t in this._tiles)this._removeTile(t)},_invalidateAll:function(){for(var t in this._levels)Q(this._levels[t].el),this._onRemoveLevel(Number(t)),delete this._levels[t];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(t,e,i,n){var s=Math.floor(t/2),a=Math.floor(e/2),u=i-1,v=new N(+s,+a);v.z=+u;var w=this._tileCoordsToKey(v),P=this._tiles[w];return P&&P.active?(P.retain=!0,!0):(P&&P.loaded&&(P.retain=!0),u>n?this._retainParent(s,a,u,n):!1)},_retainChildren:function(t,e,i,n){for(var s=2*t;s<2*t+2;s++)for(var a=2*e;a<2*e+2;a++){var u=new N(s,a);u.z=i+1;var v=this._tileCoordsToKey(u),w=this._tiles[v];if(w&&w.active){w.retain=!0;continue}else w&&w.loaded&&(w.retain=!0);i+1<n&&this._retainChildren(s,a,i+1,n)}},_resetView:function(t){var e=t&&(t.pinch||t.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),e,e)},_animateZoom:function(t){this._setView(t.center,t.zoom,!0,t.noUpdate)},_clampZoom:function(t){var e=this.options;return e.minNativeZoom!==void 0&&t<e.minNativeZoom?e.minNativeZoom:e.maxNativeZoom!==void 0&&e.maxNativeZoom<t?e.maxNativeZoom:t},_setView:function(t,e,i,n){var s=Math.round(e);this.options.maxZoom!==void 0&&s>this.options.maxZoom||this.options.minZoom!==void 0&&s<this.options.minZoom?s=void 0:s=this._clampZoom(s);var a=this.options.updateWhenZooming&&s!==this._tileZoom;(!n||a)&&(this._tileZoom=s,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),s!==void 0&&this._update(t),i||this._pruneTiles(),this._noPrune=!!i),this._setZoomTransforms(t,e)},_setZoomTransforms:function(t,e){for(var i in this._levels)this._setZoomTransform(this._levels[i],t,e)},_setZoomTransform:function(t,e,i){var n=this._map.getZoomScale(i,t.zoom),s=t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(e,i)).round();I.any3d?Dt(t.el,s,n):nt(t.el,s)},_resetGrid:function(){var t=this._map,e=t.options.crs,i=this._tileSize=this.getTileSize(),n=this._tileZoom,s=this._map.getPixelWorldBounds(this._tileZoom);s&&(this._globalTileRange=this._pxBoundsToTileRange(s)),this._wrapX=e.wrapLng&&!this.options.noWrap&&[Math.floor(t.project([0,e.wrapLng[0]],n).x/i.x),Math.ceil(t.project([0,e.wrapLng[1]],n).x/i.y)],this._wrapY=e.wrapLat&&!this.options.noWrap&&[Math.floor(t.project([e.wrapLat[0],0],n).y/i.x),Math.ceil(t.project([e.wrapLat[1],0],n).y/i.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(t){var e=this._map,i=e._animatingZoom?Math.max(e._animateToZoom,e.getZoom()):e.getZoom(),n=e.getZoomScale(i,this._tileZoom),s=e.project(t,this._tileZoom).floor(),a=e.getSize().divideBy(n*2);return new K(s.subtract(a),s.add(a))},_update:function(t){var e=this._map;if(e){var i=this._clampZoom(e.getZoom());if(t===void 0&&(t=e.getCenter()),this._tileZoom!==void 0){var n=this._getTiledPixelBounds(t),s=this._pxBoundsToTileRange(n),a=s.getCenter(),u=[],v=this.options.keepBuffer,w=new K(s.getBottomLeft().subtract([v,-v]),s.getTopRight().add([v,-v]));if(!(isFinite(s.min.x)&&isFinite(s.min.y)&&isFinite(s.max.x)&&isFinite(s.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var P in this._tiles){var S=this._tiles[P].coords;(S.z!==this._tileZoom||!w.contains(new N(S.x,S.y)))&&(this._tiles[P].current=!1)}if(Math.abs(i-this._tileZoom)>1){this._setView(t,i);return}for(var A=s.min.y;A<=s.max.y;A++)for(var F=s.min.x;F<=s.max.x;F++){var ut=new N(F,A);if(ut.z=this._tileZoom,!!this._isValidTile(ut)){var st=this._tiles[this._tileCoordsToKey(ut)];st?st.current=!0:u.push(ut)}}if(u.sort(function(mt,Qt){return mt.distanceTo(a)-Qt.distanceTo(a)}),u.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var vt=document.createDocumentFragment();for(F=0;F<u.length;F++)this._addTile(u[F],vt);this._level.el.appendChild(vt)}}}},_isValidTile:function(t){var e=this._map.options.crs;if(!e.infinite){var i=this._globalTileRange;if(!e.wrapLng&&(t.x<i.min.x||t.x>i.max.x)||!e.wrapLat&&(t.y<i.min.y||t.y>i.max.y))return!1}if(!this.options.bounds)return!0;var n=this._tileCoordsToBounds(t);return it(this.options.bounds).overlaps(n)},_keyToBounds:function(t){return this._tileCoordsToBounds(this._keyToTileCoords(t))},_tileCoordsToNwSe:function(t){var e=this._map,i=this.getTileSize(),n=t.scaleBy(i),s=n.add(i),a=e.unproject(n,t.z),u=e.unproject(s,t.z);return[a,u]},_tileCoordsToBounds:function(t){var e=this._tileCoordsToNwSe(t),i=new pt(e[0],e[1]);return this.options.noWrap||(i=this._map.wrapLatLngBounds(i)),i},_tileCoordsToKey:function(t){return t.x+":"+t.y+":"+t.z},_keyToTileCoords:function(t){var e=t.split(":"),i=new N(+e[0],+e[1]);return i.z=+e[2],i},_removeTile:function(t){var e=this._tiles[t];e&&(Q(e.el),delete this._tiles[t],this.fire("tileunload",{tile:e.el,coords:this._keyToTileCoords(t)}))},_initTile:function(t){D(t,"leaflet-tile");var e=this.getTileSize();t.style.width=e.x+"px",t.style.height=e.y+"px",t.onselectstart=g,t.onmousemove=g,I.ielt9&&this.options.opacity<1&&_t(t,this.options.opacity)},_addTile:function(t,e){var i=this._getTilePos(t),n=this._tileCoordsToKey(t),s=this.createTile(this._wrapCoords(t),r(this._tileReady,this,t));this._initTile(s),this.createTile.length<2&&V(r(this._tileReady,this,t,null,s)),nt(s,i),this._tiles[n]={el:s,coords:t,current:!0},e.appendChild(s),this.fire("tileloadstart",{tile:s,coords:t})},_tileReady:function(t,e,i){e&&this.fire("tileerror",{error:e,tile:i,coords:t});var n=this._tileCoordsToKey(t);i=this._tiles[n],i&&(i.loaded=+new Date,this._map._fadeAnimated?(_t(i.el,0),tt(this._fadeFrame),this._fadeFrame=V(this._updateOpacity,this)):(i.active=!0,this._pruneTiles()),e||(D(i.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:i.el,coords:t})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),I.ielt9||!this._map._fadeAnimated?V(this._pruneTiles,this):setTimeout(r(this._pruneTiles,this),250)))},_getTilePos:function(t){return t.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(t){var e=new N(this._wrapX?x(t.x,this._wrapX):t.x,this._wrapY?x(t.y,this._wrapY):t.y);return e.z=t.z,e},_pxBoundsToTileRange:function(t){var e=this.getTileSize();return new K(t.min.unscaleBy(e).floor(),t.max.unscaleBy(e).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var t in this._tiles)if(!this._tiles[t].loaded)return!1;return!0}});function xs(t){return new pe(t)}var Xt=pe.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(t,e){this._url=t,e=k(this,e),e.detectRetina&&I.retina&&e.maxZoom>0?(e.tileSize=Math.floor(e.tileSize/2),e.zoomReverse?(e.zoomOffset--,e.minZoom=Math.min(e.maxZoom,e.minZoom+1)):(e.zoomOffset++,e.maxZoom=Math.max(e.minZoom,e.maxZoom-1)),e.minZoom=Math.max(0,e.minZoom)):e.zoomReverse?e.minZoom=Math.min(e.maxZoom,e.minZoom):e.maxZoom=Math.max(e.minZoom,e.maxZoom),typeof e.subdomains=="string"&&(e.subdomains=e.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(t,e){return this._url===t&&e===void 0&&(e=!0),this._url=t,e||this.redraw(),this},createTile:function(t,e){var i=document.createElement("img");return R(i,"load",r(this._tileOnLoad,this,e,i)),R(i,"error",r(this._tileOnError,this,e,i)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(i.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(i.referrerPolicy=this.options.referrerPolicy),i.alt="",i.src=this.getTileUrl(t),i},getTileUrl:function(t){var e={r:I.retina?"@2x":"",s:this._getSubdomain(t),x:t.x,y:t.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var i=this._globalTileRange.max.y-t.y;this.options.tms&&(e.y=i),e["-y"]=i}return E(this._url,_(e,this.options))},_tileOnLoad:function(t,e){I.ielt9?setTimeout(r(t,this,null,e),0):t(null,e)},_tileOnError:function(t,e,i){var n=this.options.errorTileUrl;n&&e.getAttribute("src")!==n&&(e.src=n),t(i,e)},_onTileRemove:function(t){t.tile.onload=null},_getZoomForUrl:function(){var t=this._tileZoom,e=this.options.maxZoom,i=this.options.zoomReverse,n=this.options.zoomOffset;return i&&(t=e-t),t+n},_getSubdomain:function(t){var e=Math.abs(t.x+t.y)%this.options.subdomains.length;return this.options.subdomains[e]},_abortLoading:function(){var t,e;for(t in this._tiles)if(this._tiles[t].coords.z!==this._tileZoom&&(e=this._tiles[t].el,e.onload=g,e.onerror=g,!e.complete)){e.src=H;var i=this._tiles[t].coords;Q(e),delete this._tiles[t],this.fire("tileabort",{tile:e,coords:i})}},_removeTile:function(t){var e=this._tiles[t];if(e)return e.el.setAttribute("src",H),pe.prototype._removeTile.call(this,t)},_tileReady:function(t,e,i){if(!(!this._map||i&&i.getAttribute("src")===H))return pe.prototype._tileReady.call(this,t,e,i)}});function Mn(t,e){return new Xt(t,e)}var Cn=Xt.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(t,e){this._url=t;var i=_({},this.defaultWmsParams);for(var n in e)n in this.options||(i[n]=e[n]);e=k(this,e);var s=e.detectRetina&&I.retina?2:1,a=this.getTileSize();i.width=a.x*s,i.height=a.y*s,this.wmsParams=i},onAdd:function(t){this._crs=this.options.crs||t.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var e=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[e]=this._crs.code,Xt.prototype.onAdd.call(this,t)},getTileUrl:function(t){var e=this._tileCoordsToNwSe(t),i=this._crs,n=ft(i.project(e[0]),i.project(e[1])),s=n.min,a=n.max,u=(this._wmsVersion>=1.3&&this._crs===yn?[s.y,s.x,a.y,a.x]:[s.x,s.y,a.x,a.y]).join(","),v=Xt.prototype.getTileUrl.call(this,t);return v+B(this.wmsParams,v,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+u},setParams:function(t,e){return _(this.wmsParams,t),e||this.redraw(),this}});function bs(t,e){return new Cn(t,e)}Xt.WMS=Cn,Mn.wms=bs;var Bt=Lt.extend({options:{padding:.1},initialize:function(t){k(this,t),c(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),D(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var t={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(t.zoomanim=this._onAnimZoom),t},_onAnimZoom:function(t){this._updateTransform(t.center,t.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(t,e){var i=this._map.getZoomScale(e,this._zoom),n=this._map.getSize().multiplyBy(.5+this.options.padding),s=this._map.project(this._center,e),a=n.multiplyBy(-i).add(s).subtract(this._map._getNewPixelOrigin(t,e));I.any3d?Dt(this._container,a,i):nt(this._container,a)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var t in this._layers)this._layers[t]._reset()},_onZoomEnd:function(){for(var t in this._layers)this._layers[t]._project()},_updatePaths:function(){for(var t in this._layers)this._layers[t]._update()},_update:function(){var t=this.options.padding,e=this._map.getSize(),i=this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();this._bounds=new K(i,i.add(e.multiplyBy(1+t*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),Tn=Bt.extend({options:{tolerance:0},getEvents:function(){var t=Bt.prototype.getEvents.call(this);return t.viewprereset=this._onViewPreReset,t},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){Bt.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var t=this._container=document.createElement("canvas");R(t,"mousemove",this._onMouseMove,this),R(t,"click dblclick mousedown mouseup contextmenu",this._onClick,this),R(t,"mouseout",this._handleMouseOut,this),t._leaflet_disable_events=!0,this._ctx=t.getContext("2d")},_destroyContainer:function(){tt(this._redrawRequest),delete this._ctx,Q(this._container),J(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var t;this._redrawBounds=null;for(var e in this._layers)t=this._layers[e],t._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Bt.prototype._update.call(this);var t=this._bounds,e=this._container,i=t.getSize(),n=I.retina?2:1;nt(e,t.min),e.width=n*i.x,e.height=n*i.y,e.style.width=i.x+"px",e.style.height=i.y+"px",I.retina&&this._ctx.scale(2,2),this._ctx.translate(-t.min.x,-t.min.y),this.fire("update")}},_reset:function(){Bt.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(t){this._updateDashArray(t),this._layers[c(t)]=t;var e=t._order={layer:t,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=e),this._drawLast=e,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(t){this._requestRedraw(t)},_removePath:function(t){var e=t._order,i=e.next,n=e.prev;i?i.prev=n:this._drawLast=n,n?n.next=i:this._drawFirst=i,delete t._order,delete this._layers[c(t)],this._requestRedraw(t)},_updatePath:function(t){this._extendRedrawBounds(t),t._project(),t._update(),this._requestRedraw(t)},_updateStyle:function(t){this._updateDashArray(t),this._requestRedraw(t)},_updateDashArray:function(t){if(typeof t.options.dashArray=="string"){var e=t.options.dashArray.split(/[, ]+/),i=[],n,s;for(s=0;s<e.length;s++){if(n=Number(e[s]),isNaN(n))return;i.push(n)}t.options._dashArray=i}else t.options._dashArray=t.options.dashArray},_requestRedraw:function(t){this._map&&(this._extendRedrawBounds(t),this._redrawRequest=this._redrawRequest||V(this._redraw,this))},_extendRedrawBounds:function(t){if(t._pxBounds){var e=(t.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new K,this._redrawBounds.extend(t._pxBounds.min.subtract([e,e])),this._redrawBounds.extend(t._pxBounds.max.add([e,e]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var t=this._redrawBounds;if(t){var e=t.getSize();this._ctx.clearRect(t.min.x,t.min.y,e.x,e.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var t,e=this._redrawBounds;if(this._ctx.save(),e){var i=e.getSize();this._ctx.beginPath(),this._ctx.rect(e.min.x,e.min.y,i.x,i.y),this._ctx.clip()}this._drawing=!0;for(var n=this._drawFirst;n;n=n.next)t=n.layer,(!e||t._pxBounds&&t._pxBounds.intersects(e))&&t._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(t,e){if(this._drawing){var i,n,s,a,u=t._parts,v=u.length,w=this._ctx;if(v){for(w.beginPath(),i=0;i<v;i++){for(n=0,s=u[i].length;n<s;n++)a=u[i][n],w[n?"lineTo":"moveTo"](a.x,a.y);e&&w.closePath()}this._fillStroke(w,t)}}},_updateCircle:function(t){if(!(!this._drawing||t._empty())){var e=t._point,i=this._ctx,n=Math.max(Math.round(t._radius),1),s=(Math.max(Math.round(t._radiusY),1)||n)/n;s!==1&&(i.save(),i.scale(1,s)),i.beginPath(),i.arc(e.x,e.y/s,n,0,Math.PI*2,!1),s!==1&&i.restore(),this._fillStroke(i,t)}},_fillStroke:function(t,e){var i=e.options;i.fill&&(t.globalAlpha=i.fillOpacity,t.fillStyle=i.fillColor||i.color,t.fill(i.fillRule||"evenodd")),i.stroke&&i.weight!==0&&(t.setLineDash&&t.setLineDash(e.options&&e.options._dashArray||[]),t.globalAlpha=i.opacity,t.lineWidth=i.weight,t.strokeStyle=i.color,t.lineCap=i.lineCap,t.lineJoin=i.lineJoin,t.stroke())},_onClick:function(t){for(var e=this._map.mouseEventToLayerPoint(t),i,n,s=this._drawFirst;s;s=s.next)i=s.layer,i.options.interactive&&i._containsPoint(e)&&(!(t.type==="click"||t.type==="preclick")||!this._map._draggableMoved(i))&&(n=i);this._fireEvent(n?[n]:!1,t)},_onMouseMove:function(t){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var e=this._map.mouseEventToLayerPoint(t);this._handleMouseHover(t,e)}},_handleMouseOut:function(t){var e=this._hoveredLayer;e&&(et(this._container,"leaflet-interactive"),this._fireEvent([e],t,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(t,e){if(!this._mouseHoverThrottled){for(var i,n,s=this._drawFirst;s;s=s.next)i=s.layer,i.options.interactive&&i._containsPoint(e)&&(n=i);n!==this._hoveredLayer&&(this._handleMouseOut(t),n&&(D(this._container,"leaflet-interactive"),this._fireEvent([n],t,"mouseover"),this._hoveredLayer=n)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,t),this._mouseHoverThrottled=!0,setTimeout(r(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(t,e,i){this._map._fireDOMEvent(e,i||e.type,t)},_bringToFront:function(t){var e=t._order;if(e){var i=e.next,n=e.prev;if(i)i.prev=n;else return;n?n.next=i:i&&(this._drawFirst=i),e.prev=this._drawLast,this._drawLast.next=e,e.next=null,this._drawLast=e,this._requestRedraw(t)}},_bringToBack:function(t){var e=t._order;if(e){var i=e.next,n=e.prev;if(n)n.next=i;else return;i?i.prev=n:n&&(this._drawLast=n),e.prev=null,e.next=this._drawFirst,this._drawFirst.prev=e,this._drawFirst=e,this._requestRedraw(t)}}});function Sn(t){return I.canvas?new Tn(t):null}var me=(function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(t){return document.createElement("<lvml:"+t+' class="lvml">')}}catch{}return function(t){return document.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}})(),ws={_initContainer:function(){this._container=$("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(Bt.prototype._update.call(this),this.fire("update"))},_initPath:function(t){var e=t._container=me("shape");D(e,"leaflet-vml-shape "+(this.options.className||"")),e.coordsize="1 1",t._path=me("path"),e.appendChild(t._path),this._updateStyle(t),this._layers[c(t)]=t},_addPath:function(t){var e=t._container;this._container.appendChild(e),t.options.interactive&&t.addInteractiveTarget(e)},_removePath:function(t){var e=t._container;Q(e),t.removeInteractiveTarget(e),delete this._layers[c(t)]},_updateStyle:function(t){var e=t._stroke,i=t._fill,n=t.options,s=t._container;s.stroked=!!n.stroke,s.filled=!!n.fill,n.stroke?(e||(e=t._stroke=me("stroke")),s.appendChild(e),e.weight=n.weight+"px",e.color=n.color,e.opacity=n.opacity,n.dashArray?e.dashStyle=O(n.dashArray)?n.dashArray.join(" "):n.dashArray.replace(/( *, *)/g," "):e.dashStyle="",e.endcap=n.lineCap.replace("butt","flat"),e.joinstyle=n.lineJoin):e&&(s.removeChild(e),t._stroke=null),n.fill?(i||(i=t._fill=me("fill")),s.appendChild(i),i.color=n.fillColor||n.color,i.opacity=n.fillOpacity):i&&(s.removeChild(i),t._fill=null)},_updateCircle:function(t){var e=t._point.round(),i=Math.round(t._radius),n=Math.round(t._radiusY||i);this._setPath(t,t._empty()?"M0 0":"AL "+e.x+","+e.y+" "+i+","+n+" 0,"+65535*360)},_setPath:function(t,e){t._path.v=e},_bringToFront:function(t){$t(t._container)},_bringToBack:function(t){qt(t._container)}},De=I.vml?me:Bi,_e=Bt.extend({_initContainer:function(){this._container=De("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=De("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){Q(this._container),J(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Bt.prototype._update.call(this);var t=this._bounds,e=t.getSize(),i=this._container;(!this._svgSize||!this._svgSize.equals(e))&&(this._svgSize=e,i.setAttribute("width",e.x),i.setAttribute("height",e.y)),nt(i,t.min),i.setAttribute("viewBox",[t.min.x,t.min.y,e.x,e.y].join(" ")),this.fire("update")}},_initPath:function(t){var e=t._path=De("path");t.options.className&&D(e,t.options.className),t.options.interactive&&D(e,"leaflet-interactive"),this._updateStyle(t),this._layers[c(t)]=t},_addPath:function(t){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(t._path),t.addInteractiveTarget(t._path)},_removePath:function(t){Q(t._path),t.removeInteractiveTarget(t._path),delete this._layers[c(t)]},_updatePath:function(t){t._project(),t._update()},_updateStyle:function(t){var e=t._path,i=t.options;e&&(i.stroke?(e.setAttribute("stroke",i.color),e.setAttribute("stroke-opacity",i.opacity),e.setAttribute("stroke-width",i.weight),e.setAttribute("stroke-linecap",i.lineCap),e.setAttribute("stroke-linejoin",i.lineJoin),i.dashArray?e.setAttribute("stroke-dasharray",i.dashArray):e.removeAttribute("stroke-dasharray"),i.dashOffset?e.setAttribute("stroke-dashoffset",i.dashOffset):e.removeAttribute("stroke-dashoffset")):e.setAttribute("stroke","none"),i.fill?(e.setAttribute("fill",i.fillColor||i.color),e.setAttribute("fill-opacity",i.fillOpacity),e.setAttribute("fill-rule",i.fillRule||"evenodd")):e.setAttribute("fill","none"))},_updatePoly:function(t,e){this._setPath(t,zi(t._parts,e))},_updateCircle:function(t){var e=t._point,i=Math.max(Math.round(t._radius),1),n=Math.max(Math.round(t._radiusY),1)||i,s="a"+i+","+n+" 0 1,0 ",a=t._empty()?"M0 0":"M"+(e.x-i)+","+e.y+s+i*2+",0 "+s+-i*2+",0 ";this._setPath(t,a)},_setPath:function(t,e){t._path.setAttribute("d",e)},_bringToFront:function(t){$t(t._path)},_bringToBack:function(t){qt(t._path)}});I.vml&&_e.include(ws);function En(t){return I.svg||I.vml?new _e(t):null}W.include({getRenderer:function(t){var e=t.options.renderer||this._getPaneRenderer(t.options.pane)||this.options.renderer||this._renderer;return e||(e=this._renderer=this._createRenderer()),this.hasLayer(e)||this.addLayer(e),e},_getPaneRenderer:function(t){if(t==="overlayPane"||t===void 0)return!1;var e=this._paneRenderers[t];return e===void 0&&(e=this._createRenderer({pane:t}),this._paneRenderers[t]=e),e},_createRenderer:function(t){return this.options.preferCanvas&&Sn(t)||En(t)}});var In=Kt.extend({initialize:function(t,e){Kt.prototype.initialize.call(this,this._boundsToLatLngs(t),e)},setBounds:function(t){return this.setLatLngs(this._boundsToLatLngs(t))},_boundsToLatLngs:function(t){return t=it(t),[t.getSouthWest(),t.getNorthWest(),t.getNorthEast(),t.getSouthEast()]}});function Ls(t,e){return new In(t,e)}_e.create=De,_e.pointsToPath=zi,It.geometryToLayer=Be,It.coordsToLatLng=Li,It.coordsToLatLngs=ze,It.latLngToCoords=ki,It.latLngsToCoords=Ae,It.getFeature=Jt,It.asFeature=Oe,W.mergeOptions({boxZoom:!0});var Bn=Mt.extend({initialize:function(t){this._map=t,this._container=t._container,this._pane=t._panes.overlayPane,this._resetStateTimeout=0,t.on("unload",this._destroy,this)},addHooks:function(){R(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){J(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){Q(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(t){if(!t.shiftKey||t.which!==1&&t.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),ae(),ri(),this._startPoint=this._map.mouseEventToContainerPoint(t),R(document,{contextmenu:Ht,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(t){this._moved||(this._moved=!0,this._box=$("div","leaflet-zoom-box",this._container),D(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(t);var e=new K(this._point,this._startPoint),i=e.getSize();nt(this._box,e.min),this._box.style.width=i.x+"px",this._box.style.height=i.y+"px"},_finish:function(){this._moved&&(Q(this._box),et(this._container,"leaflet-crosshair")),le(),ai(),J(document,{contextmenu:Ht,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(t){if(!(t.which!==1&&t.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(r(this._resetState,this),0);var e=new pt(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(e).fire("boxzoomend",{boxZoomBounds:e})}},_onKeyDown:function(t){t.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});W.addInitHook("addHandler","boxZoom",Bn),W.mergeOptions({doubleClickZoom:!0});var zn=Mt.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(t){var e=this._map,i=e.getZoom(),n=e.options.zoomDelta,s=t.originalEvent.shiftKey?i-n:i+n;e.options.doubleClickZoom==="center"?e.setZoom(s):e.setZoomAround(t.containerPoint,s)}});W.addInitHook("addHandler","doubleClickZoom",zn),W.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var An=Mt.extend({addHooks:function(){if(!this._draggable){var t=this._map;this._draggable=new At(t._mapPane,t._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),t.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),t.on("zoomend",this._onZoomEnd,this),t.whenReady(this._onZoomEnd,this))}D(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){et(this._map._container,"leaflet-grab"),et(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var t=this._map;if(t._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var e=it(this._map.options.maxBounds);this._offsetLimit=ft(this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(e.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;t.fire("movestart").fire("dragstart"),t.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(t){if(this._map.options.inertia){var e=this._lastTime=+new Date,i=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(i),this._times.push(e),this._prunePositions(e)}this._map.fire("move",t).fire("drag",t)},_prunePositions:function(t){for(;this._positions.length>1&&t-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var t=this._map.getSize().divideBy(2),e=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=e.subtract(t).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(t,e){return t-(t-e)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var t=this._draggable._newPos.subtract(this._draggable._startPos),e=this._offsetLimit;t.x<e.min.x&&(t.x=this._viscousLimit(t.x,e.min.x)),t.y<e.min.y&&(t.y=this._viscousLimit(t.y,e.min.y)),t.x>e.max.x&&(t.x=this._viscousLimit(t.x,e.max.x)),t.y>e.max.y&&(t.y=this._viscousLimit(t.y,e.max.y)),this._draggable._newPos=this._draggable._startPos.add(t)}},_onPreDragWrap:function(){var t=this._worldWidth,e=Math.round(t/2),i=this._initialWorldOffset,n=this._draggable._newPos.x,s=(n-e+i)%t+e-i,a=(n+e+i)%t-e-i,u=Math.abs(s+i)<Math.abs(a+i)?s:a;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=u},_onDragEnd:function(t){var e=this._map,i=e.options,n=!i.inertia||t.noInertia||this._times.length<2;if(e.fire("dragend",t),n)e.fire("moveend");else{this._prunePositions(+new Date);var s=this._lastPos.subtract(this._positions[0]),a=(this._lastTime-this._times[0])/1e3,u=i.easeLinearity,v=s.multiplyBy(u/a),w=v.distanceTo([0,0]),P=Math.min(i.inertiaMaxSpeed,w),S=v.multiplyBy(P/w),A=P/(i.inertiaDeceleration*u),F=S.multiplyBy(-A/2).round();!F.x&&!F.y?e.fire("moveend"):(F=e._limitOffset(F,e.options.maxBounds),V(function(){e.panBy(F,{duration:A,easeLinearity:u,noMoveStart:!0,animate:!0})}))}}});W.addInitHook("addHandler","dragging",An),W.mergeOptions({keyboard:!0,keyboardPanDelta:80});var On=Mt.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(t){this._map=t,this._setPanDelta(t.options.keyboardPanDelta),this._setZoomDelta(t.options.zoomDelta)},addHooks:function(){var t=this._map._container;t.tabIndex<=0&&(t.tabIndex="0"),R(t,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),J(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var t=document.body,e=document.documentElement,i=t.scrollTop||e.scrollTop,n=t.scrollLeft||e.scrollLeft;this._map._container.focus(),window.scrollTo(n,i)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(t){var e=this._panKeys={},i=this.keyCodes,n,s;for(n=0,s=i.left.length;n<s;n++)e[i.left[n]]=[-1*t,0];for(n=0,s=i.right.length;n<s;n++)e[i.right[n]]=[t,0];for(n=0,s=i.down.length;n<s;n++)e[i.down[n]]=[0,t];for(n=0,s=i.up.length;n<s;n++)e[i.up[n]]=[0,-1*t]},_setZoomDelta:function(t){var e=this._zoomKeys={},i=this.keyCodes,n,s;for(n=0,s=i.zoomIn.length;n<s;n++)e[i.zoomIn[n]]=t;for(n=0,s=i.zoomOut.length;n<s;n++)e[i.zoomOut[n]]=-t},_addHooks:function(){R(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){J(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(t){if(!(t.altKey||t.ctrlKey||t.metaKey)){var e=t.keyCode,i=this._map,n;if(e in this._panKeys){if(!i._panAnim||!i._panAnim._inProgress)if(n=this._panKeys[e],t.shiftKey&&(n=z(n).multiplyBy(3)),i.options.maxBounds&&(n=i._limitOffset(z(n),i.options.maxBounds)),i.options.worldCopyJump){var s=i.wrapLatLng(i.unproject(i.project(i.getCenter()).add(n)));i.panTo(s)}else i.panBy(n)}else if(e in this._zoomKeys)i.setZoom(i.getZoom()+(t.shiftKey?3:1)*this._zoomKeys[e]);else if(e===27&&i._popup&&i._popup.options.closeOnEscapeKey)i.closePopup();else return;Ht(t)}}});W.addInitHook("addHandler","keyboard",On),W.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var Zn=Mt.extend({addHooks:function(){R(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){J(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(t){var e=rn(t),i=this._map.options.wheelDebounceTime;this._delta+=e,this._lastMousePos=this._map.mouseEventToContainerPoint(t),this._startTime||(this._startTime=+new Date);var n=Math.max(i-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(r(this._performZoom,this),n),Ht(t)},_performZoom:function(){var t=this._map,e=t.getZoom(),i=this._map.options.zoomSnap||0;t._stop();var n=this._delta/(this._map.options.wheelPxPerZoomLevel*4),s=4*Math.log(2/(1+Math.exp(-Math.abs(n))))/Math.LN2,a=i?Math.ceil(s/i)*i:s,u=t._limitZoom(e+(this._delta>0?a:-a))-e;this._delta=0,this._startTime=null,u&&(t.options.scrollWheelZoom==="center"?t.setZoom(e+u):t.setZoomAround(this._lastMousePos,e+u))}});W.addInitHook("addHandler","scrollWheelZoom",Zn);var ks=600;W.mergeOptions({tapHold:I.touchNative&&I.safari&&I.mobile,tapTolerance:15});var Nn=Mt.extend({addHooks:function(){R(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){J(this._map._container,"touchstart",this._onDown,this)},_onDown:function(t){if(clearTimeout(this._holdTimeout),t.touches.length===1){var e=t.touches[0];this._startPos=this._newPos=new N(e.clientX,e.clientY),this._holdTimeout=setTimeout(r(function(){this._cancel(),this._isTapValid()&&(R(document,"touchend",lt),R(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",e))},this),ks),R(document,"touchend touchcancel contextmenu",this._cancel,this),R(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function t(){J(document,"touchend",lt),J(document,"touchend touchcancel",t)},_cancel:function(){clearTimeout(this._holdTimeout),J(document,"touchend touchcancel contextmenu",this._cancel,this),J(document,"touchmove",this._onMove,this)},_onMove:function(t){var e=t.touches[0];this._newPos=new N(e.clientX,e.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(t,e){var i=new MouseEvent(t,{bubbles:!0,cancelable:!0,view:window,screenX:e.screenX,screenY:e.screenY,clientX:e.clientX,clientY:e.clientY});i._simulated=!0,e.target.dispatchEvent(i)}});W.addInitHook("addHandler","tapHold",Nn),W.mergeOptions({touchZoom:I.touch,bounceAtZoomLimits:!0});var Rn=Mt.extend({addHooks:function(){D(this._map._container,"leaflet-touch-zoom"),R(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){et(this._map._container,"leaflet-touch-zoom"),J(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(t){var e=this._map;if(!(!t.touches||t.touches.length!==2||e._animatingZoom||this._zooming)){var i=e.mouseEventToContainerPoint(t.touches[0]),n=e.mouseEventToContainerPoint(t.touches[1]);this._centerPoint=e.getSize()._divideBy(2),this._startLatLng=e.containerPointToLatLng(this._centerPoint),e.options.touchZoom!=="center"&&(this._pinchStartLatLng=e.containerPointToLatLng(i.add(n)._divideBy(2))),this._startDist=i.distanceTo(n),this._startZoom=e.getZoom(),this._moved=!1,this._zooming=!0,e._stop(),R(document,"touchmove",this._onTouchMove,this),R(document,"touchend touchcancel",this._onTouchEnd,this),lt(t)}},_onTouchMove:function(t){if(!(!t.touches||t.touches.length!==2||!this._zooming)){var e=this._map,i=e.mouseEventToContainerPoint(t.touches[0]),n=e.mouseEventToContainerPoint(t.touches[1]),s=i.distanceTo(n)/this._startDist;if(this._zoom=e.getScaleZoom(s,this._startZoom),!e.options.bounceAtZoomLimits&&(this._zoom<e.getMinZoom()&&s<1||this._zoom>e.getMaxZoom()&&s>1)&&(this._zoom=e._limitZoom(this._zoom)),e.options.touchZoom==="center"){if(this._center=this._startLatLng,s===1)return}else{var a=i._add(n)._divideBy(2)._subtract(this._centerPoint);if(s===1&&a.x===0&&a.y===0)return;this._center=e.unproject(e.project(this._pinchStartLatLng,this._zoom).subtract(a),this._zoom)}this._moved||(e._moveStart(!0,!1),this._moved=!0),tt(this._animRequest);var u=r(e._move,e,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=V(u,this,!0),lt(t)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,tt(this._animRequest),J(document,"touchmove",this._onTouchMove,this),J(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});W.addInitHook("addHandler","touchZoom",Rn),W.BoxZoom=Bn,W.DoubleClickZoom=zn,W.Drag=An,W.Keyboard=On,W.ScrollWheelZoom=Zn,W.TapHold=Nn,W.TouchZoom=Rn,h.Bounds=K,h.Browser=I,h.CRS=Tt,h.Canvas=Tn,h.Circle=wi,h.CircleMarker=Ie,h.Class=X,h.Control=wt,h.DivIcon=Pn,h.DivOverlay=Ct,h.DomEvent=Ho,h.DomUtil=Fo,h.Draggable=At,h.Evented=bt,h.FeatureGroup=St,h.GeoJSON=It,h.GridLayer=pe,h.Handler=Mt,h.Icon=Yt,h.ImageOverlay=Ze,h.LatLng=Y,h.LatLngBounds=pt,h.Layer=Lt,h.LayerGroup=Vt,h.LineUtil=es,h.Map=W,h.Marker=Ee,h.Mixin=Yo,h.Path=Ot,h.Point=N,h.PolyUtil=Ko,h.Polygon=Kt,h.Polyline=Et,h.Popup=Ne,h.PosAnimation=an,h.Projection=is,h.Rectangle=In,h.Renderer=Bt,h.SVG=_e,h.SVGOverlay=kn,h.TileLayer=Xt,h.Tooltip=Re,h.Transformation=Ve,h.Util=ct,h.VideoOverlay=Ln,h.bind=r,h.bounds=ft,h.canvas=Sn,h.circle=cs,h.circleMarker=hs,h.control=de,h.divIcon=ys,h.extend=_,h.featureGroup=rs,h.geoJSON=wn,h.geoJson=fs,h.gridLayer=xs,h.icon=as,h.imageOverlay=ps,h.latLng=U,h.latLngBounds=it,h.layerGroup=ss,h.map=jo,h.marker=ls,h.point=z,h.polygon=us,h.polyline=ds,h.popup=gs,h.rectangle=Ls,h.setOptions=k,h.stamp=c,h.svg=En,h.svgOverlay=_s,h.tileLayer=Mn,h.tooltip=vs,h.transformation=ne,h.version=m,h.videoOverlay=ms;var Ps=window.L;h.noConflict=function(){return window.L=Ps,this},window.L=h}))})(ge,ge.exports)),ge.exports}var Ns=Zs();const rt=As(Ns);var ve={exports:{}},Rs=ve.exports,jn;function Ds(){return jn||(jn=1,(function(p,d){(function(h,m){m(d)})(Rs,function(h){var m=L.MarkerClusterGroup=L.FeatureGroup.extend({options:{maxClusterRadius:80,iconCreateFunction:null,clusterPane:L.Marker.prototype.options.pane,spiderfyOnEveryZoom:!1,spiderfyOnMaxZoom:!0,showCoverageOnHover:!0,zoomToBoundsOnClick:!0,singleMarkerMode:!1,disableClusteringAtZoom:null,removeOutsideVisibleBounds:!0,animate:!0,animateAddingMarkers:!1,spiderfyShapePositions:null,spiderfyDistanceMultiplier:1,spiderLegPolylineOptions:{weight:1.5,color:"#222",opacity:.5},chunkedLoading:!1,chunkInterval:200,chunkDelay:50,chunkProgress:null,polygonOptions:{}},initialize:function(o){L.Util.setOptions(this,o),this.options.iconCreateFunction||(this.options.iconCreateFunction=this._defaultIconCreateFunction),this._featureGroup=L.featureGroup(),this._featureGroup.addEventParent(this),this._nonPointGroup=L.featureGroup(),this._nonPointGroup.addEventParent(this),this._inZoomAnimation=0,this._needsClustering=[],this._needsRemoving=[],this._currentShownBounds=null,this._queue=[],this._childMarkerEventHandlers={dragstart:this._childMarkerDragStart,move:this._childMarkerMoved,dragend:this._childMarkerDragEnd};var r=L.DomUtil.TRANSITION&&this.options.animate;L.extend(this,r?this._withAnimation:this._noAnimation),this._markerCluster=r?L.MarkerCluster:L.MarkerClusterNonAnimated},addLayer:function(o){if(o instanceof L.LayerGroup)return this.addLayers([o]);if(!o.getLatLng)return this._nonPointGroup.addLayer(o),this.fire("layeradd",{layer:o}),this;if(!this._map)return this._needsClustering.push(o),this.fire("layeradd",{layer:o}),this;if(this.hasLayer(o))return this;this._unspiderfy&&this._unspiderfy(),this._addLayer(o,this._maxZoom),this.fire("layeradd",{layer:o}),this._topClusterLevel._recalculateBounds(),this._refreshClustersIcons();var r=o,l=this._zoom;if(o.__parent)for(;r.__parent._zoom>=l;)r=r.__parent;return this._currentShownBounds.contains(r.getLatLng())&&(this.options.animateAddingMarkers?this._animationAddLayer(o,r):this._animationAddLayerNonAnimated(o,r)),this},removeLayer:function(o){return o instanceof L.LayerGroup?this.removeLayers([o]):o.getLatLng?this._map?o.__parent?(this._unspiderfy&&(this._unspiderfy(),this._unspiderfyLayer(o)),this._removeLayer(o,!0),this.fire("layerremove",{layer:o}),this._topClusterLevel._recalculateBounds(),this._refreshClustersIcons(),o.off(this._childMarkerEventHandlers,this),this._featureGroup.hasLayer(o)&&(this._featureGroup.removeLayer(o),o.clusterShow&&o.clusterShow()),this):this:(!this._arraySplice(this._needsClustering,o)&&this.hasLayer(o)&&this._needsRemoving.push({layer:o,latlng:o._latlng}),this.fire("layerremove",{layer:o}),this):(this._nonPointGroup.removeLayer(o),this.fire("layerremove",{layer:o}),this)},addLayers:function(o,r){if(!L.Util.isArray(o))return this.addLayer(o);var l=this._featureGroup,c=this._nonPointGroup,f=this.options.chunkedLoading,x=this.options.chunkInterval,g=this.options.chunkProgress,b=o.length,y=0,M=!0,k;if(this._map){var B=new Date().getTime(),C=L.bind(function(){var O=new Date().getTime();for(this._map&&this._unspiderfy&&this._unspiderfy();y<b;y++){if(f&&y%200===0){var G=new Date().getTime()-O;if(G>x)break}if(k=o[y],k instanceof L.LayerGroup){M&&(o=o.slice(),M=!1),this._extractNonGroupLayers(k,o),b=o.length;continue}if(!k.getLatLng){c.addLayer(k),r||this.fire("layeradd",{layer:k});continue}if(!this.hasLayer(k)&&(this._addLayer(k,this._maxZoom),r||this.fire("layeradd",{layer:k}),k.__parent&&k.__parent.getChildCount()===2)){var H=k.__parent.getAllChildMarkers(),at=H[0]===k?H[1]:H[0];l.removeLayer(at)}}g&&g(y,b,new Date().getTime()-B),y===b?(this._topClusterLevel._recalculateBounds(),this._refreshClustersIcons(),this._topClusterLevel._recursivelyAddChildrenToMap(null,this._zoom,this._currentShownBounds)):setTimeout(C,this.options.chunkDelay)},this);C()}else for(var E=this._needsClustering;y<b;y++){if(k=o[y],k instanceof L.LayerGroup){M&&(o=o.slice(),M=!1),this._extractNonGroupLayers(k,o),b=o.length;continue}if(!k.getLatLng){c.addLayer(k);continue}this.hasLayer(k)||E.push(k)}return this},removeLayers:function(o){var r,l,c=o.length,f=this._featureGroup,x=this._nonPointGroup,g=!0;if(!this._map){for(r=0;r<c;r++){if(l=o[r],l instanceof L.LayerGroup){g&&(o=o.slice(),g=!1),this._extractNonGroupLayers(l,o),c=o.length;continue}this._arraySplice(this._needsClustering,l),x.removeLayer(l),this.hasLayer(l)&&this._needsRemoving.push({layer:l,latlng:l._latlng}),this.fire("layerremove",{layer:l})}return this}if(this._unspiderfy){this._unspiderfy();var b=o.slice(),y=c;for(r=0;r<y;r++){if(l=b[r],l instanceof L.LayerGroup){this._extractNonGroupLayers(l,b),y=b.length;continue}this._unspiderfyLayer(l)}}for(r=0;r<c;r++){if(l=o[r],l instanceof L.LayerGroup){g&&(o=o.slice(),g=!1),this._extractNonGroupLayers(l,o),c=o.length;continue}if(!l.__parent){x.removeLayer(l),this.fire("layerremove",{layer:l});continue}this._removeLayer(l,!0,!0),this.fire("layerremove",{layer:l}),f.hasLayer(l)&&(f.removeLayer(l),l.clusterShow&&l.clusterShow())}return this._topClusterLevel._recalculateBounds(),this._refreshClustersIcons(),this._topClusterLevel._recursivelyAddChildrenToMap(null,this._zoom,this._currentShownBounds),this},clearLayers:function(){return this._map||(this._needsClustering=[],this._needsRemoving=[],delete this._gridClusters,delete this._gridUnclustered),this._noanimationUnspiderfy&&this._noanimationUnspiderfy(),this._featureGroup.clearLayers(),this._nonPointGroup.clearLayers(),this.eachLayer(function(o){o.off(this._childMarkerEventHandlers,this),delete o.__parent},this),this._map&&this._generateInitialClusters(),this},getBounds:function(){var o=new L.LatLngBounds;this._topClusterLevel&&o.extend(this._topClusterLevel._bounds);for(var r=this._needsClustering.length-1;r>=0;r--)o.extend(this._needsClustering[r].getLatLng());return o.extend(this._nonPointGroup.getBounds()),o},eachLayer:function(o,r){var l=this._needsClustering.slice(),c=this._needsRemoving,f,x,g;for(this._topClusterLevel&&this._topClusterLevel.getAllChildMarkers(l),x=l.length-1;x>=0;x--){for(f=!0,g=c.length-1;g>=0;g--)if(c[g].layer===l[x]){f=!1;break}f&&o.call(r,l[x])}this._nonPointGroup.eachLayer(o,r)},getLayers:function(){var o=[];return this.eachLayer(function(r){o.push(r)}),o},getLayer:function(o){var r=null;return o=parseInt(o,10),this.eachLayer(function(l){L.stamp(l)===o&&(r=l)}),r},hasLayer:function(o){if(!o)return!1;var r,l=this._needsClustering;for(r=l.length-1;r>=0;r--)if(l[r]===o)return!0;for(l=this._needsRemoving,r=l.length-1;r>=0;r--)if(l[r].layer===o)return!1;return!!(o.__parent&&o.__parent._group===this)||this._nonPointGroup.hasLayer(o)},zoomToShowLayer:function(o,r){var l=this._map;typeof r!="function"&&(r=function(){});var c=function(){(l.hasLayer(o)||l.hasLayer(o.__parent))&&!this._inZoomAnimation&&(this._map.off("moveend",c,this),this.off("animationend",c,this),l.hasLayer(o)?r():o.__parent._icon&&(this.once("spiderfied",r,this),o.__parent.spiderfy()))};o._icon&&this._map.getBounds().contains(o.getLatLng())?r():o.__parent._zoom<Math.round(this._map._zoom)?(this._map.on("moveend",c,this),this._map.panTo(o.getLatLng())):(this._map.on("moveend",c,this),this.on("animationend",c,this),o.__parent.zoomToBounds())},onAdd:function(o){this._map=o;var r,l,c;if(!isFinite(this._map.getMaxZoom()))throw"Map has no maxZoom specified";for(this._featureGroup.addTo(o),this._nonPointGroup.addTo(o),this._gridClusters||this._generateInitialClusters(),this._maxLat=o.options.crs.projection.MAX_LATITUDE,r=0,l=this._needsRemoving.length;r<l;r++)c=this._needsRemoving[r],c.newlatlng=c.layer._latlng,c.layer._latlng=c.latlng;for(r=0,l=this._needsRemoving.length;r<l;r++)c=this._needsRemoving[r],this._removeLayer(c.layer,!0),c.layer._latlng=c.newlatlng;this._needsRemoving=[],this._zoom=Math.round(this._map._zoom),this._currentShownBounds=this._getExpandedVisibleBounds(),this._map.on("zoomend",this._zoomEnd,this),this._map.on("moveend",this._moveEnd,this),this._spiderfierOnAdd&&this._spiderfierOnAdd(),this._bindEvents(),l=this._needsClustering,this._needsClustering=[],this.addLayers(l,!0)},onRemove:function(o){o.off("zoomend",this._zoomEnd,this),o.off("moveend",this._moveEnd,this),this._unbindEvents(),this._map._mapPane.className=this._map._mapPane.className.replace(" leaflet-cluster-anim",""),this._spiderfierOnRemove&&this._spiderfierOnRemove(),delete this._maxLat,this._hideCoverage(),this._featureGroup.remove(),this._nonPointGroup.remove(),this._featureGroup.clearLayers(),this._map=null},getVisibleParent:function(o){for(var r=o;r&&!r._icon;)r=r.__parent;return r||null},_arraySplice:function(o,r){for(var l=o.length-1;l>=0;l--)if(o[l]===r)return o.splice(l,1),!0},_removeFromGridUnclustered:function(o,r){for(var l=this._map,c=this._gridUnclustered,f=Math.floor(this._map.getMinZoom());r>=f&&c[r].removeObject(o,l.project(o.getLatLng(),r));r--);},_childMarkerDragStart:function(o){o.target.__dragStart=o.target._latlng},_childMarkerMoved:function(o){if(!this._ignoreMove&&!o.target.__dragStart){var r=o.target._popup&&o.target._popup.isOpen();this._moveChild(o.target,o.oldLatLng,o.latlng),r&&o.target.openPopup()}},_moveChild:function(o,r,l){o._latlng=r,this.removeLayer(o),o._latlng=l,this.addLayer(o)},_childMarkerDragEnd:function(o){var r=o.target.__dragStart;delete o.target.__dragStart,r&&this._moveChild(o.target,r,o.target._latlng)},_removeLayer:function(o,r,l){var c=this._gridClusters,f=this._gridUnclustered,x=this._featureGroup,g=this._map,b=Math.floor(this._map.getMinZoom());r&&this._removeFromGridUnclustered(o,this._maxZoom);var y=o.__parent,M=y._markers,k;for(this._arraySplice(M,o);y&&(y._childCount--,y._boundsNeedUpdate=!0,!(y._zoom<b));)r&&y._childCount<=1?(k=y._markers[0]===o?y._markers[1]:y._markers[0],c[y._zoom].removeObject(y,g.project(y._cLatLng,y._zoom)),f[y._zoom].addObject(k,g.project(k.getLatLng(),y._zoom)),this._arraySplice(y.__parent._childClusters,y),y.__parent._markers.push(k),k.__parent=y.__parent,y._icon&&(x.removeLayer(y),l||x.addLayer(k))):y._iconNeedsUpdate=!0,y=y.__parent;delete o.__parent},_isOrIsParent:function(o,r){for(;r;){if(o===r)return!0;r=r.parentNode}return!1},fire:function(o,r,l){if(r&&r.layer instanceof L.MarkerCluster){if(r.originalEvent&&this._isOrIsParent(r.layer._icon,r.originalEvent.relatedTarget))return;o="cluster"+o}L.FeatureGroup.prototype.fire.call(this,o,r,l)},listens:function(o,r){return L.FeatureGroup.prototype.listens.call(this,o,r)||L.FeatureGroup.prototype.listens.call(this,"cluster"+o,r)},_defaultIconCreateFunction:function(o){var r=o.getChildCount(),l=" marker-cluster-";return r<10?l+="small":r<100?l+="medium":l+="large",new L.DivIcon({html:"<div><span>"+r+"</span></div>",className:"marker-cluster"+l,iconSize:new L.Point(40,40)})},_bindEvents:function(){var o=this._map,r=this.options.spiderfyOnMaxZoom,l=this.options.showCoverageOnHover,c=this.options.zoomToBoundsOnClick,f=this.options.spiderfyOnEveryZoom;(r||c||f)&&this.on("clusterclick clusterkeypress",this._zoomOrSpiderfy,this),l&&(this.on("clustermouseover",this._showCoverage,this),this.on("clustermouseout",this._hideCoverage,this),o.on("zoomend",this._hideCoverage,this))},_zoomOrSpiderfy:function(o){var r=o.layer,l=r;if(!(o.type==="clusterkeypress"&&o.originalEvent&&o.originalEvent.keyCode!==13)){for(;l._childClusters.length===1;)l=l._childClusters[0];l._zoom===this._maxZoom&&l._childCount===r._childCount&&this.options.spiderfyOnMaxZoom?r.spiderfy():this.options.zoomToBoundsOnClick&&r.zoomToBounds(),this.options.spiderfyOnEveryZoom&&r.spiderfy(),o.originalEvent&&o.originalEvent.keyCode===13&&this._map._container.focus()}},_showCoverage:function(o){var r=this._map;this._inZoomAnimation||(this._shownPolygon&&r.removeLayer(this._shownPolygon),o.layer.getChildCount()>2&&o.layer!==this._spiderfied&&(this._shownPolygon=new L.Polygon(o.layer.getConvexHull(),this.options.polygonOptions),r.addLayer(this._shownPolygon)))},_hideCoverage:function(){this._shownPolygon&&(this._map.removeLayer(this._shownPolygon),this._shownPolygon=null)},_unbindEvents:function(){var o=this.options.spiderfyOnMaxZoom,r=this.options.showCoverageOnHover,l=this.options.zoomToBoundsOnClick,c=this.options.spiderfyOnEveryZoom,f=this._map;(o||l||c)&&this.off("clusterclick clusterkeypress",this._zoomOrSpiderfy,this),r&&(this.off("clustermouseover",this._showCoverage,this),this.off("clustermouseout",this._hideCoverage,this),f.off("zoomend",this._hideCoverage,this))},_zoomEnd:function(){this._map&&(this._mergeSplitClusters(),this._zoom=Math.round(this._map._zoom),this._currentShownBounds=this._getExpandedVisibleBounds())},_moveEnd:function(){if(!this._inZoomAnimation){var o=this._getExpandedVisibleBounds();this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,Math.floor(this._map.getMinZoom()),this._zoom,o),this._topClusterLevel._recursivelyAddChildrenToMap(null,Math.round(this._map._zoom),o),this._currentShownBounds=o}},_generateInitialClusters:function(){var o=Math.ceil(this._map.getMaxZoom()),r=Math.floor(this._map.getMinZoom()),l=this.options.maxClusterRadius,c=l;typeof l!="function"&&(c=function(){return l}),this.options.disableClusteringAtZoom!==null&&(o=this.options.disableClusteringAtZoom-1),this._maxZoom=o,this._gridClusters={},this._gridUnclustered={};for(var f=o;f>=r;f--)this._gridClusters[f]=new L.DistanceGrid(c(f)),this._gridUnclustered[f]=new L.DistanceGrid(c(f));this._topClusterLevel=new this._markerCluster(this,r-1)},_addLayer:function(o,r){var l=this._gridClusters,c=this._gridUnclustered,f=Math.floor(this._map.getMinZoom()),x,g;for(this.options.singleMarkerMode&&this._overrideMarkerIcon(o),o.on(this._childMarkerEventHandlers,this);r>=f;r--){x=this._map.project(o.getLatLng(),r);var b=l[r].getNearObject(x);if(b){b._addChild(o),o.__parent=b;return}if(b=c[r].getNearObject(x),b){var y=b.__parent;y&&this._removeLayer(b,!1);var M=new this._markerCluster(this,r,b,o);l[r].addObject(M,this._map.project(M._cLatLng,r)),b.__parent=M,o.__parent=M;var k=M;for(g=r-1;g>y._zoom;g--)k=new this._markerCluster(this,g,k),l[g].addObject(k,this._map.project(b.getLatLng(),g));y._addChild(k),this._removeFromGridUnclustered(b,r);return}c[r].addObject(o,x)}this._topClusterLevel._addChild(o),o.__parent=this._topClusterLevel},_refreshClustersIcons:function(){this._featureGroup.eachLayer(function(o){o instanceof L.MarkerCluster&&o._iconNeedsUpdate&&o._updateIcon()})},_enqueue:function(o){this._queue.push(o),this._queueTimeout||(this._queueTimeout=setTimeout(L.bind(this._processQueue,this),300))},_processQueue:function(){for(var o=0;o<this._queue.length;o++)this._queue[o].call(this);this._queue.length=0,clearTimeout(this._queueTimeout),this._queueTimeout=null},_mergeSplitClusters:function(){var o=Math.round(this._map._zoom);this._processQueue(),this._zoom<o&&this._currentShownBounds.intersects(this._getExpandedVisibleBounds())?(this._animationStart(),this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,Math.floor(this._map.getMinZoom()),this._zoom,this._getExpandedVisibleBounds()),this._animationZoomIn(this._zoom,o)):this._zoom>o?(this._animationStart(),this._animationZoomOut(this._zoom,o)):this._moveEnd()},_getExpandedVisibleBounds:function(){if(this.options.removeOutsideVisibleBounds){if(L.Browser.mobile)return this._checkBoundsMaxLat(this._map.getBounds())}else return this._mapBoundsInfinite;return this._checkBoundsMaxLat(this._map.getBounds().pad(1))},_checkBoundsMaxLat:function(o){var r=this._maxLat;return r!==void 0&&(o.getNorth()>=r&&(o._northEast.lat=1/0),o.getSouth()<=-r&&(o._southWest.lat=-1/0)),o},_animationAddLayerNonAnimated:function(o,r){if(r===o)this._featureGroup.addLayer(o);else if(r._childCount===2){r._addToMap();var l=r.getAllChildMarkers();this._featureGroup.removeLayer(l[0]),this._featureGroup.removeLayer(l[1])}else r._updateIcon()},_extractNonGroupLayers:function(o,r){var l=o.getLayers(),c=0,f;for(r=r||[];c<l.length;c++){if(f=l[c],f instanceof L.LayerGroup){this._extractNonGroupLayers(f,r);continue}r.push(f)}return r},_overrideMarkerIcon:function(o){var r=o.options.icon=this.options.iconCreateFunction({getChildCount:function(){return 1},getAllChildMarkers:function(){return[o]}});return r}});L.MarkerClusterGroup.include({_mapBoundsInfinite:new L.LatLngBounds(new L.LatLng(-1/0,-1/0),new L.LatLng(1/0,1/0))}),L.MarkerClusterGroup.include({_noAnimation:{_animationStart:function(){},_animationZoomIn:function(o,r){this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,Math.floor(this._map.getMinZoom()),o),this._topClusterLevel._recursivelyAddChildrenToMap(null,r,this._getExpandedVisibleBounds()),this.fire("animationend")},_animationZoomOut:function(o,r){this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,Math.floor(this._map.getMinZoom()),o),this._topClusterLevel._recursivelyAddChildrenToMap(null,r,this._getExpandedVisibleBounds()),this.fire("animationend")},_animationAddLayer:function(o,r){this._animationAddLayerNonAnimated(o,r)}},_withAnimation:{_animationStart:function(){this._map._mapPane.className+=" leaflet-cluster-anim",this._inZoomAnimation++},_animationZoomIn:function(o,r){var l=this._getExpandedVisibleBounds(),c=this._featureGroup,f=Math.floor(this._map.getMinZoom()),x;this._ignoreMove=!0,this._topClusterLevel._recursively(l,o,f,function(g){var b=g._latlng,y=g._markers,M;for(l.contains(b)||(b=null),g._isSingleParent()&&o+1===r?(c.removeLayer(g),g._recursivelyAddChildrenToMap(null,r,l)):(g.clusterHide(),g._recursivelyAddChildrenToMap(b,r,l)),x=y.length-1;x>=0;x--)M=y[x],l.contains(M._latlng)||c.removeLayer(M)}),this._forceLayout(),this._topClusterLevel._recursivelyBecomeVisible(l,r),c.eachLayer(function(g){!(g instanceof L.MarkerCluster)&&g._icon&&g.clusterShow()}),this._topClusterLevel._recursively(l,o,r,function(g){g._recursivelyRestoreChildPositions(r)}),this._ignoreMove=!1,this._enqueue(function(){this._topClusterLevel._recursively(l,o,f,function(g){c.removeLayer(g),g.clusterShow()}),this._animationEnd()})},_animationZoomOut:function(o,r){this._animationZoomOutSingle(this._topClusterLevel,o-1,r),this._topClusterLevel._recursivelyAddChildrenToMap(null,r,this._getExpandedVisibleBounds()),this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,Math.floor(this._map.getMinZoom()),o,this._getExpandedVisibleBounds())},_animationAddLayer:function(o,r){var l=this,c=this._featureGroup;c.addLayer(o),r!==o&&(r._childCount>2?(r._updateIcon(),this._forceLayout(),this._animationStart(),o._setPos(this._map.latLngToLayerPoint(r.getLatLng())),o.clusterHide(),this._enqueue(function(){c.removeLayer(o),o.clusterShow(),l._animationEnd()})):(this._forceLayout(),l._animationStart(),l._animationZoomOutSingle(r,this._map.getMaxZoom(),this._zoom)))}},_animationZoomOutSingle:function(o,r,l){var c=this._getExpandedVisibleBounds(),f=Math.floor(this._map.getMinZoom());o._recursivelyAnimateChildrenInAndAddSelfToMap(c,f,r+1,l);var x=this;this._forceLayout(),o._recursivelyBecomeVisible(c,l),this._enqueue(function(){if(o._childCount===1){var g=o._markers[0];this._ignoreMove=!0,g.setLatLng(g.getLatLng()),this._ignoreMove=!1,g.clusterShow&&g.clusterShow()}else o._recursively(c,l,f,function(b){b._recursivelyRemoveChildrenFromMap(c,f,r+1)});x._animationEnd()})},_animationEnd:function(){this._map&&(this._map._mapPane.className=this._map._mapPane.className.replace(" leaflet-cluster-anim","")),this._inZoomAnimation--,this.fire("animationend")},_forceLayout:function(){L.Util.falseFn(document.body.offsetWidth)}}),L.markerClusterGroup=function(o){return new L.MarkerClusterGroup(o)};var _=L.MarkerCluster=L.Marker.extend({options:L.Icon.prototype.options,initialize:function(o,r,l,c){L.Marker.prototype.initialize.call(this,l?l._cLatLng||l.getLatLng():new L.LatLng(0,0),{icon:this,pane:o.options.clusterPane}),this._group=o,this._zoom=r,this._markers=[],this._childClusters=[],this._childCount=0,this._iconNeedsUpdate=!0,this._boundsNeedUpdate=!0,this._bounds=new L.LatLngBounds,l&&this._addChild(l),c&&this._addChild(c)},getAllChildMarkers:function(o,r){o=o||[];for(var l=this._childClusters.length-1;l>=0;l--)this._childClusters[l].getAllChildMarkers(o,r);for(var c=this._markers.length-1;c>=0;c--)r&&this._markers[c].__dragStart||o.push(this._markers[c]);return o},getChildCount:function(){return this._childCount},zoomToBounds:function(o){for(var r=this._childClusters.slice(),l=this._group._map,c=l.getBoundsZoom(this._bounds),f=this._zoom+1,x=l.getZoom(),g;r.length>0&&c>f;){f++;var b=[];for(g=0;g<r.length;g++)b=b.concat(r[g]._childClusters);r=b}c>f?this._group._map.setView(this._latlng,f):c<=x?this._group._map.setView(this._latlng,x+1):this._group._map.fitBounds(this._bounds,o)},getBounds:function(){var o=new L.LatLngBounds;return o.extend(this._bounds),o},_updateIcon:function(){this._iconNeedsUpdate=!0,this._icon&&this.setIcon(this)},createIcon:function(){return this._iconNeedsUpdate&&(this._iconObj=this._group.options.iconCreateFunction(this),this._iconNeedsUpdate=!1),this._iconObj.createIcon()},createShadow:function(){return this._iconObj.createShadow()},_addChild:function(o,r){this._iconNeedsUpdate=!0,this._boundsNeedUpdate=!0,this._setClusterCenter(o),o instanceof L.MarkerCluster?(r||(this._childClusters.push(o),o.__parent=this),this._childCount+=o._childCount):(r||this._markers.push(o),this._childCount++),this.__parent&&this.__parent._addChild(o,!0)},_setClusterCenter:function(o){this._cLatLng||(this._cLatLng=o._cLatLng||o._latlng)},_resetBounds:function(){var o=this._bounds;o._southWest&&(o._southWest.lat=1/0,o._southWest.lng=1/0),o._northEast&&(o._northEast.lat=-1/0,o._northEast.lng=-1/0)},_recalculateBounds:function(){var o=this._markers,r=this._childClusters,l=0,c=0,f=this._childCount,x,g,b,y;if(f!==0){for(this._resetBounds(),x=0;x<o.length;x++)b=o[x]._latlng,this._bounds.extend(b),l+=b.lat,c+=b.lng;for(x=0;x<r.length;x++)g=r[x],g._boundsNeedUpdate&&g._recalculateBounds(),this._bounds.extend(g._bounds),b=g._wLatLng,y=g._childCount,l+=b.lat*y,c+=b.lng*y;this._latlng=this._wLatLng=new L.LatLng(l/f,c/f),this._boundsNeedUpdate=!1}},_addToMap:function(o){o&&(this._backupLatlng=this._latlng,this.setLatLng(o)),this._group._featureGroup.addLayer(this)},_recursivelyAnimateChildrenIn:function(o,r,l){this._recursively(o,this._group._map.getMinZoom(),l-1,function(c){var f=c._markers,x,g;for(x=f.length-1;x>=0;x--)g=f[x],g._icon&&(g._setPos(r),g.clusterHide())},function(c){var f=c._childClusters,x,g;for(x=f.length-1;x>=0;x--)g=f[x],g._icon&&(g._setPos(r),g.clusterHide())})},_recursivelyAnimateChildrenInAndAddSelfToMap:function(o,r,l,c){this._recursively(o,c,r,function(f){f._recursivelyAnimateChildrenIn(o,f._group._map.latLngToLayerPoint(f.getLatLng()).round(),l),f._isSingleParent()&&l-1===c?(f.clusterShow(),f._recursivelyRemoveChildrenFromMap(o,r,l)):f.clusterHide(),f._addToMap()})},_recursivelyBecomeVisible:function(o,r){this._recursively(o,this._group._map.getMinZoom(),r,null,function(l){l.clusterShow()})},_recursivelyAddChildrenToMap:function(o,r,l){this._recursively(l,this._group._map.getMinZoom()-1,r,function(c){if(r!==c._zoom)for(var f=c._markers.length-1;f>=0;f--){var x=c._markers[f];l.contains(x._latlng)&&(o&&(x._backupLatlng=x.getLatLng(),x.setLatLng(o),x.clusterHide&&x.clusterHide()),c._group._featureGroup.addLayer(x))}},function(c){c._addToMap(o)})},_recursivelyRestoreChildPositions:function(o){for(var r=this._markers.length-1;r>=0;r--){var l=this._markers[r];l._backupLatlng&&(l.setLatLng(l._backupLatlng),delete l._backupLatlng)}if(o-1===this._zoom)for(var c=this._childClusters.length-1;c>=0;c--)this._childClusters[c]._restorePosition();else for(var f=this._childClusters.length-1;f>=0;f--)this._childClusters[f]._recursivelyRestoreChildPositions(o)},_restorePosition:function(){this._backupLatlng&&(this.setLatLng(this._backupLatlng),delete this._backupLatlng)},_recursivelyRemoveChildrenFromMap:function(o,r,l,c){var f,x;this._recursively(o,r-1,l-1,function(g){for(x=g._markers.length-1;x>=0;x--)f=g._markers[x],(!c||!c.contains(f._latlng))&&(g._group._featureGroup.removeLayer(f),f.clusterShow&&f.clusterShow())},function(g){for(x=g._childClusters.length-1;x>=0;x--)f=g._childClusters[x],(!c||!c.contains(f._latlng))&&(g._group._featureGroup.removeLayer(f),f.clusterShow&&f.clusterShow())})},_recursively:function(o,r,l,c,f){var x=this._childClusters,g=this._zoom,b,y;if(r<=g&&(c&&c(this),f&&g===l&&f(this)),g<r||g<l)for(b=x.length-1;b>=0;b--)y=x[b],y._boundsNeedUpdate&&y._recalculateBounds(),o.intersects(y._bounds)&&y._recursively(o,r,l,c,f)},_isSingleParent:function(){return this._childClusters.length>0&&this._childClusters[0]._childCount===this._childCount}});L.Marker.include({clusterHide:function(){var o=this.options.opacity;return this.setOpacity(0),this.options.opacity=o,this},clusterShow:function(){return this.setOpacity(this.options.opacity)}}),L.DistanceGrid=function(o){this._cellSize=o,this._sqCellSize=o*o,this._grid={},this._objectPoint={}},L.DistanceGrid.prototype={addObject:function(o,r){var l=this._getCoord(r.x),c=this._getCoord(r.y),f=this._grid,x=f[c]=f[c]||{},g=x[l]=x[l]||[],b=L.Util.stamp(o);this._objectPoint[b]=r,g.push(o)},updateObject:function(o,r){this.removeObject(o),this.addObject(o,r)},removeObject:function(o,r){var l=this._getCoord(r.x),c=this._getCoord(r.y),f=this._grid,x=f[c]=f[c]||{},g=x[l]=x[l]||[],b,y;for(delete this._objectPoint[L.Util.stamp(o)],b=0,y=g.length;b<y;b++)if(g[b]===o)return g.splice(b,1),y===1&&delete x[l],!0},eachObject:function(o,r){var l,c,f,x,g,b,y,M=this._grid;for(l in M){g=M[l];for(c in g)for(b=g[c],f=0,x=b.length;f<x;f++)y=o.call(r,b[f]),y&&(f--,x--)}},getNearObject:function(o){var r=this._getCoord(o.x),l=this._getCoord(o.y),c,f,x,g,b,y,M,k,B=this._objectPoint,C=this._sqCellSize,E=null;for(c=l-1;c<=l+1;c++)if(g=this._grid[c],g){for(f=r-1;f<=r+1;f++)if(b=g[f],b)for(x=0,y=b.length;x<y;x++)M=b[x],k=this._sqDist(B[L.Util.stamp(M)],o),(k<C||k<=C&&E===null)&&(C=k,E=M)}return E},_getCoord:function(o){var r=Math.floor(o/this._cellSize);return isFinite(r)?r:o},_sqDist:function(o,r){var l=r.x-o.x,c=r.y-o.y;return l*l+c*c}},(function(){L.QuickHull={getDistant:function(o,r){var l=r[1].lat-r[0].lat,c=r[0].lng-r[1].lng;return c*(o.lat-r[0].lat)+l*(o.lng-r[0].lng)},findMostDistantPointFromBaseLine:function(o,r){var l=0,c=null,f=[],x,g,b;for(x=r.length-1;x>=0;x--){if(g=r[x],b=this.getDistant(g,o),b>0)f.push(g);else continue;b>l&&(l=b,c=g)}return{maxPoint:c,newPoints:f}},buildConvexHull:function(o,r){var l=[],c=this.findMostDistantPointFromBaseLine(o,r);return c.maxPoint?(l=l.concat(this.buildConvexHull([o[0],c.maxPoint],c.newPoints)),l=l.concat(this.buildConvexHull([c.maxPoint,o[1]],c.newPoints)),l):[o[0]]},getConvexHull:function(o){var r=!1,l=!1,c=!1,f=!1,x=null,g=null,b=null,y=null,M=null,k=null,B;for(B=o.length-1;B>=0;B--){var C=o[B];(r===!1||C.lat>r)&&(x=C,r=C.lat),(l===!1||C.lat<l)&&(g=C,l=C.lat),(c===!1||C.lng>c)&&(b=C,c=C.lng),(f===!1||C.lng<f)&&(y=C,f=C.lng)}l!==r?(k=g,M=x):(k=y,M=b);var E=[].concat(this.buildConvexHull([k,M],o),this.buildConvexHull([M,k],o));return E}}})(),L.MarkerCluster.include({getConvexHull:function(){var o=this.getAllChildMarkers(),r=[],l,c;for(c=o.length-1;c>=0;c--)l=o[c].getLatLng(),r.push(l);return L.QuickHull.getConvexHull(r)}}),L.MarkerCluster.include({_2PI:Math.PI*2,_circleFootSeparation:25,_circleStartAngle:0,_spiralFootSeparation:28,_spiralLengthStart:11,_spiralLengthFactor:5,_circleSpiralSwitchover:9,spiderfy:function(){if(!(this._group._spiderfied===this||this._group._inZoomAnimation)){var o=this.getAllChildMarkers(null,!0),r=this._group,l=r._map,c=l.latLngToLayerPoint(this._latlng),f;this._group._unspiderfy(),this._group._spiderfied=this,this._group.options.spiderfyShapePositions?f=this._group.options.spiderfyShapePositions(o.length,c):o.length>=this._circleSpiralSwitchover?f=this._generatePointsSpiral(o.length,c):(c.y+=10,f=this._generatePointsCircle(o.length,c)),this._animationSpiderfy(o,f)}},unspiderfy:function(o){this._group._inZoomAnimation||(this._animationUnspiderfy(o),this._group._spiderfied=null)},_generatePointsCircle:function(o,r){var l=this._group.options.spiderfyDistanceMultiplier*this._circleFootSeparation*(2+o),c=l/this._2PI,f=this._2PI/o,x=[],g,b;for(c=Math.max(c,35),x.length=o,g=0;g<o;g++)b=this._circleStartAngle+g*f,x[g]=new L.Point(r.x+c*Math.cos(b),r.y+c*Math.sin(b))._round();return x},_generatePointsSpiral:function(o,r){var l=this._group.options.spiderfyDistanceMultiplier,c=l*this._spiralLengthStart,f=l*this._spiralFootSeparation,x=l*this._spiralLengthFactor*this._2PI,g=0,b=[],y;for(b.length=o,y=o;y>=0;y--)y<o&&(b[y]=new L.Point(r.x+c*Math.cos(g),r.y+c*Math.sin(g))._round()),g+=f/c+y*5e-4,c+=x/g;return b},_noanimationUnspiderfy:function(){var o=this._group,r=o._map,l=o._featureGroup,c=this.getAllChildMarkers(null,!0),f,x;for(o._ignoreMove=!0,this.setOpacity(1),x=c.length-1;x>=0;x--)f=c[x],l.removeLayer(f),f._preSpiderfyLatlng&&(f.setLatLng(f._preSpiderfyLatlng),delete f._preSpiderfyLatlng),f.setZIndexOffset&&f.setZIndexOffset(0),f._spiderLeg&&(r.removeLayer(f._spiderLeg),delete f._spiderLeg);o.fire("unspiderfied",{cluster:this,markers:c}),o._ignoreMove=!1,o._spiderfied=null}}),L.MarkerClusterNonAnimated=L.MarkerCluster.extend({_animationSpiderfy:function(o,r){var l=this._group,c=l._map,f=l._featureGroup,x=this._group.options.spiderLegPolylineOptions,g,b,y,M;for(l._ignoreMove=!0,g=0;g<o.length;g++)M=c.layerPointToLatLng(r[g]),b=o[g],y=new L.Polyline([this._latlng,M],x),c.addLayer(y),b._spiderLeg=y,b._preSpiderfyLatlng=b._latlng,b.setLatLng(M),b.setZIndexOffset&&b.setZIndexOffset(1e6),f.addLayer(b);this.setOpacity(.3),l._ignoreMove=!1,l.fire("spiderfied",{cluster:this,markers:o})},_animationUnspiderfy:function(){this._noanimationUnspiderfy()}}),L.MarkerCluster.include({_animationSpiderfy:function(o,r){var l=this,c=this._group,f=c._map,x=c._featureGroup,g=this._latlng,b=f.latLngToLayerPoint(g),y=L.Path.SVG,M=L.extend({},this._group.options.spiderLegPolylineOptions),k=M.opacity,B,C,E,O,G,H;for(k===void 0&&(k=L.MarkerClusterGroup.prototype.options.spiderLegPolylineOptions.opacity),y?(M.opacity=0,M.className=(M.className||"")+" leaflet-cluster-spider-leg"):M.opacity=k,c._ignoreMove=!0,B=0;B<o.length;B++)C=o[B],H=f.layerPointToLatLng(r[B]),E=new L.Polyline([g,H],M),f.addLayer(E),C._spiderLeg=E,y&&(O=E._path,G=O.getTotalLength()+.1,O.style.strokeDasharray=G,O.style.strokeDashoffset=G),C.setZIndexOffset&&C.setZIndexOffset(1e6),C.clusterHide&&C.clusterHide(),x.addLayer(C),C._setPos&&C._setPos(b);for(c._forceLayout(),c._animationStart(),B=o.length-1;B>=0;B--)H=f.layerPointToLatLng(r[B]),C=o[B],C._preSpiderfyLatlng=C._latlng,C.setLatLng(H),C.clusterShow&&C.clusterShow(),y&&(E=C._spiderLeg,O=E._path,O.style.strokeDashoffset=0,E.setStyle({opacity:k}));this.setOpacity(.3),c._ignoreMove=!1,setTimeout(function(){c._animationEnd(),c.fire("spiderfied",{cluster:l,markers:o})},200)},_animationUnspiderfy:function(o){var r=this,l=this._group,c=l._map,f=l._featureGroup,x=o?c._latLngToNewLayerPoint(this._latlng,o.zoom,o.center):c.latLngToLayerPoint(this._latlng),g=this.getAllChildMarkers(null,!0),b=L.Path.SVG,y,M,k,B,C,E;for(l._ignoreMove=!0,l._animationStart(),this.setOpacity(1),M=g.length-1;M>=0;M--)y=g[M],y._preSpiderfyLatlng&&(y.closePopup(),y.setLatLng(y._preSpiderfyLatlng),delete y._preSpiderfyLatlng,E=!0,y._setPos&&(y._setPos(x),E=!1),y.clusterHide&&(y.clusterHide(),E=!1),E&&f.removeLayer(y),b&&(k=y._spiderLeg,B=k._path,C=B.getTotalLength()+.1,B.style.strokeDashoffset=C,k.setStyle({opacity:0})));l._ignoreMove=!1,setTimeout(function(){var O=0;for(M=g.length-1;M>=0;M--)y=g[M],y._spiderLeg&&O++;for(M=g.length-1;M>=0;M--)y=g[M],y._spiderLeg&&(y.clusterShow&&y.clusterShow(),y.setZIndexOffset&&y.setZIndexOffset(0),O>1&&f.removeLayer(y),c.removeLayer(y._spiderLeg),delete y._spiderLeg);l._animationEnd(),l.fire("unspiderfied",{cluster:r,markers:g})},200)}}),L.MarkerClusterGroup.include({_spiderfied:null,unspiderfy:function(){this._unspiderfy.apply(this,arguments)},_spiderfierOnAdd:function(){this._map.on("click",this._unspiderfyWrapper,this),this._map.options.zoomAnimation&&this._map.on("zoomstart",this._unspiderfyZoomStart,this),this._map.on("zoomend",this._noanimationUnspiderfy,this),L.Browser.touch||this._map.getRenderer(this)},_spiderfierOnRemove:function(){this._map.off("click",this._unspiderfyWrapper,this),this._map.off("zoomstart",this._unspiderfyZoomStart,this),this._map.off("zoomanim",this._unspiderfyZoomAnim,this),this._map.off("zoomend",this._noanimationUnspiderfy,this),this._noanimationUnspiderfy()},_unspiderfyZoomStart:function(){this._map&&this._map.on("zoomanim",this._unspiderfyZoomAnim,this)},_unspiderfyZoomAnim:function(o){L.DomUtil.hasClass(this._map._mapPane,"leaflet-touching")||(this._map.off("zoomanim",this._unspiderfyZoomAnim,this),this._unspiderfy(o))},_unspiderfyWrapper:function(){this._unspiderfy()},_unspiderfy:function(o){this._spiderfied&&this._spiderfied.unspiderfy(o)},_noanimationUnspiderfy:function(){this._spiderfied&&this._spiderfied._noanimationUnspiderfy()},_unspiderfyLayer:function(o){o._spiderLeg&&(this._featureGroup.removeLayer(o),o.clusterShow&&o.clusterShow(),o.setZIndexOffset&&o.setZIndexOffset(0),this._map.removeLayer(o._spiderLeg),delete o._spiderLeg)}}),L.MarkerClusterGroup.include({refreshClusters:function(o){return o?o instanceof L.MarkerClusterGroup?o=o._topClusterLevel.getAllChildMarkers():o instanceof L.LayerGroup?o=o._layers:o instanceof L.MarkerCluster?o=o.getAllChildMarkers():o instanceof L.Marker&&(o=[o]):o=this._topClusterLevel.getAllChildMarkers(),this._flagParentsIconsNeedUpdate(o),this._refreshClustersIcons(),this.options.singleMarkerMode&&this._refreshSingleMarkerModeMarkers(o),this},_flagParentsIconsNeedUpdate:function(o){var r,l;for(r in o)for(l=o[r].__parent;l;)l._iconNeedsUpdate=!0,l=l.__parent},_refreshSingleMarkerModeMarkers:function(o){var r,l;for(r in o)l=o[r],this.hasLayer(l)&&l.setIcon(this._overrideMarkerIcon(l))}}),L.Marker.include({refreshIconOptions:function(o,r){var l=this.options.icon;return L.setOptions(l,o),this.setIcon(l),r&&this.__parent&&this.__parent._group.refreshClusters(this),this}}),h.MarkerClusterGroup=m,h.MarkerCluster=_,Object.defineProperty(h,"__esModule",{value:!0})})})(ve,ve.exports)),ve.exports}Ds();function Ge(p,d){const h=document.getElementById(p);if(h){if(d==="—"||d===void 0||d===null){h.textContent="—";return}h.textContent=Number(d).toLocaleString("id-ID")}}function te(p,d){const h=document.getElementById(p);if(!h)return;const m={loading:"#f5a623",done:"#00c9a7",error:"#ff4d4d"};h.style.background=m[d]??"#4d6a94"}function Un(p){const d=parseInt(p);return isNaN(d)?"#ffffff":`hsl(${Math.max(0,Math.min(280,(d-1984)*7))}, 100%, 55%)`}function Wn(p){return Number(p).toFixed(2)}const Ci="./tiles",$n={good:{dashArray:null,weight:1,opacity:.9},"insufficient data":{dashArray:"8 5",weight:.5,opacity:.7},"unstable data":{dashArray:"2 5",weight:.5,opacity:.55}},Ti=p=>$n[p]??$n.good;class Fs{constructor(d,h={}){this.map=d,this.opts={yearMin:h.yearMin??1985,yearMax:h.yearMax??2025},this._ensurePanes(),this._canvas=rt.canvas({padding:.5,tolerance:2}),this.shorelinesGroup=rt.layerGroup().addTo(d),this.clusterGroup=this._buildClusterGroup(),this.ratesGroup=this.clusterGroup,this._manifest=null,this._loadedTiles=new Set,this._pendingTiles=new Set,this._shorelineLayers=[],this._rateLayers=[],this._filter={yearMin:h.yearMin??1985,yearMax:h.yearMax??2025,showAbrasi:!0,showAkresi:!0,showStabil:!0,minRate:0,certGood:!0,certInsufficient:!0,certUnstable:!0},this._isFlexZoomActive=!1}async init(){this._manifest=await this._fetchManifest(),this._manifest&&(this.map.on("moveend",()=>{clearTimeout(this._moveTimer),this._moveTimer=setTimeout(()=>{this._updateVisibleTiles(),this._calculateViewportStats()},150)}),this.map.on("zoomend",()=>{clearTimeout(this._zoomTimer),this._zoomTimer=setTimeout(()=>{this._applyFilterToLoaded(),this._calculateViewportStats()},100)}),await this._updateVisibleTiles(),this._calculateViewportStats())}applyFilter(d){this._filter={...this._filter,...d},this._scheduleApplyFilter()}_scheduleApplyFilter(){clearTimeout(this._applyFilterTimer),this._applyFilterTimer=setTimeout(()=>this._applyFilterToLoaded(),40)}setShorelinesOpacity(d){this._shorelineLayers.forEach(({layer:h})=>{h.setStyle?.({opacity:d})})}setShorelinesOpacity(d){this._shorelineLayers.forEach(({layer:h})=>{h.setStyle?.({opacity:d})})}setFlexZoom(d){this._isFlexZoomActive=d,this._applyFilterToLoaded()}async _updateVisibleTiles(){if(!this._manifest||this.map.getZoom()<6)return;const d=this.map.getBounds(),h=this._manifest.tiles.filter(_=>{if(this._loadedTiles.has(_)||this._pendingTiles.has(_))return!1;const o=this._manifest.tile_bounds[String(_)];if(!o)return!1;const[r,l,c,f]=o;return d.getWest()<=c&&d.getEast()>=r&&d.getSouth()<=f&&d.getNorth()>=l});if(!h.length)return;te("status-shorelines","loading"),te("status-rates","loading"),h.forEach(_=>this._pendingTiles.add(_));const m=[];for(let _=0;_<h.length;_+=2)m.push(h.slice(_,_+2));for(const _ of m)await Promise.allSettled(_.map(o=>this._loadOneTile(o)))}async _loadOneTile(d){const h=String(d);try{const[m,_]=await Promise.allSettled([fetch(`${Ci}/shorelines/shorelines_tile_${h}.geojson`),fetch(`${Ci}/rates/rates_tile_${h}.geojson`)]);let o=null,r=null;m.status==="fulfilled"&&m.value.ok&&(o=await m.value.json(),this._renderShorelines(o)),_.status==="fulfilled"&&_.value.ok&&(r=await _.value.json(),this._renderRates(r)),this.onTileLoaded&&this.onTileLoaded(o,r),this._loadedTiles.add(d),te("status-shorelines","done"),te("status-rates","done"),this._calculateViewportStats()}catch(m){console.error(`Tile ${d} gagal:`,m),te("status-shorelines","error")}finally{this._pendingTiles.delete(d)}}async _fetchManifest(){try{const d=await fetch(`${Ci}/shorelines/shorelines_manifest.json`);if(!d.ok)throw new Error(`HTTP ${d.status}`);const h=await d.json();h.tiles=h.tiles.map(String);const m={};return Object.entries(h.tile_bounds??{}).forEach(([_,o])=>{m[String(_)]=o}),h.tile_bounds=m,h}catch(d){return console.error("Manifest gagal:",d),te("status-shorelines","error"),null}}_renderShorelines(d){const h=this.map.getZoom();rt.geoJSON(d,{pane:"lapisGaris",renderer:this._canvas,style:m=>{const _=m.properties?.year??null,o=m.properties?.certainty??"good",r=Ti(o),l=h>=16,c=parseInt(_)===parseInt(this._filter.yearMax),f=this._visibleYear(_)&&(this._isFlexZoomActive||l||c);return{color:Un(_),weight:r.weight,opacity:f?r.opacity:0,dashArray:r.dashArray}},onEachFeature:(m,_)=>{const o=m.properties?.year??"-",r=m.properties?.certainty??"good",l=Un(o),c=Ti(r),f={good:"✔ Good","insufficient data":"⚠ Insufficient Data","unstable data":"✘ Unstable Data"}[r]??r;this._shorelineLayers.push({layer:_,year:o,certainty:r}),this._visibleYear(o)&&(this._isFlexZoomActive||this.map.getZoom()>=16||parseInt(o)===parseInt(this._filter.yearMax))&&_.bindTooltip(`<div class="gis-tooltip">
             <span class="tooltip-label">Tahun · ${f}</span>
             <span class="tooltip-value">${o}</span>
           </div>`,{sticky:!0,direction:"auto",className:"gis-tooltip-wrap"}),_.on("mouseover",function(){this.options.opacity!==0&&(this.setStyle({weight:c.weight+2,color:"#ffffff"}),this.bringToFront())}),_.on("mouseout",function(){this.setStyle({weight:c.weight,color:l})}),_.bindPopup(`<div class="gis-popup">
             <div class="popup-header" style="border-color:${l}">
               <span class="popup-icon">🌊</span>
               <span class="popup-title">Garis Pantai</span>
             </div>
             <table class="popup-table">
               <tr><td class="pt-label">Tahun</td>
                   <td class="pt-val">${o}</td></tr>
               <tr><td class="pt-label">Kualitas</td>
                   <td class="pt-val">${f}</td></tr>
             </table>
           </div>`)}}).addTo(this.shorelinesGroup)}_renderRates(d){const h=[];rt.geoJSON(d,{pointToLayer:(m,_)=>{const o=m.properties?.rate_time??0,r=o<0,l=Math.abs(o)<.1;let c="#8ba3c7";l||(c=r?"#ff4d4d":"#00c9a7");const f=rt.circleMarker(_,{radius:3,fillColor:c,color:"rgba(255,255,255,0.7)",weight:.5,opacity:1,fillOpacity:1,_isErosi:r&&!l,_isAkresi:!r&&!l,_isStabil:l,_rate:o});return this._rateLayers.push({layer:f,rate:o,isErosi:r&&!l,isAkresi:!r&&!l,isStabil:l}),this._visibleRate(o,r&&!l,!r&&!l,l)||f.setStyle({opacity:0,fillOpacity:0}),h.push(f),f},onEachFeature:(m,_)=>{const o=m.properties?.rate_time??0,r=o<0,l=r?"#ff4d4d":"#00c9a7",c=r?"Abrasi":"Akresi";_.bindTooltip(`<div class="gis-tooltip">
             <span class="tooltip-label">${c}</span>
             <span class="tooltip-value" style="color:${l}">${Wn(o)} m/th</span>
           </div>`,{sticky:!0,direction:"auto",className:"gis-tooltip-wrap"}),_.bindPopup(`<div class="gis-popup">
             <div class="popup-header" style="border-color:${l}">
               <span class="popup-icon">${r?"⚠️":"✅"}</span>
               <span class="popup-title">Titik Perubahan</span>
               <span class="popup-badge ${r?"badge-erosi":"badge-akresi"}">${c}</span>
             </div>
             <table class="popup-table">
               <tr><td class="pt-label">Status</td><td class="pt-val">${c}</td></tr>
               <tr><td class="pt-label">Laju</td><td class="pt-val" style="color:${l};font-weight:600;">${Wn(o)} m/th</td></tr>
             </table>
           </div>`)}}),this.clusterGroup.addLayers(h)}_buildClusterGroup(){const d=rt.markerClusterGroup({maxClusterRadius:h=>h<=5?100:h<=7?80:h<=9?60:h<=11?45:h<=15?35:10,disableClusteringAtZoom:16,spiderfyOnMaxZoom:!0,showCoverageOnHover:!1,chunkedLoading:!0,animate:!0,iconCreateFunction:h=>{const m=h.getAllChildMarkers(),_=m.length,o=m.filter(x=>x.options._isErosi).length/_;let r,l;o>.6?(r="#ff4d4d",l="#cc2222"):o<.4?(r="#00c9a7",l="#009980"):(r="#f5a623",l="#c47a00");const c=_<10?20:_<50?24:_<200?28:32,f=c<30?10:11;return rt.divIcon({html:`<div style="
            width:${c}px;
            height:${c}px;
            border-radius:50%;
            background:${r};
            border: 1.5px solid ${l}; /* Border ditipiskan */
            display:flex;
            align-items:center;
            justify-content:center;
            font-size:${f}px;
            font-weight:700;
            color:#fff;
            font-family:'DM Sans',sans-serif;
            box-shadow:0 2px 5px rgba(0,0,0,0.3);
            opacity: 0.85; /* 3. TRANSPARANSI ditambahkan agar garis bawah terlihat */
            ">${_}</div>`,className:"",iconSize:[c,c],iconAnchor:[c/2,c/2]})}});return d.addTo(this.map),d}_visibleYear(d){const h=parseInt(d);return isNaN(h)?!0:h>=this._filter.yearMin&&h<=this._filter.yearMax}_visibleRate(d,h,m,_){return!(h&&!this._filter.showAbrasi||m&&!this._filter.showAkresi||_&&!this._filter.showStabil||Math.abs(d)<(this._filter.minRate??0))}_visibleCertainty(d){const h=(d??"good").toLowerCase();return!(h==="good"&&!this._filter.certGood||h==="insufficient data"&&!this._filter.certInsufficient||h==="unstable data"&&!this._filter.certUnstable)}_applyFilterToLoaded(){const h=this.map.getZoom()>=16;this._shorelineLayers.forEach(({layer:m,year:_,certainty:o})=>{if(!m.setStyle)return;const r=Ti(o),l=parseInt(_)===parseInt(this._filter.yearMax),c=this._visibleYear(_)&&this._visibleCertainty(o)&&(this._isFlexZoomActive||h||l);if(m._lastVisible!==c){if(m._lastVisible=c,m.options.interactive=c,!c)m.closeTooltip(),m.unbindTooltip();else if(!m.getTooltip()){const f={good:"✔ Good","insufficient data":"⚠ Insufficient Data","unstable data":"✘ Unstable Data"}[o]??o;m.bindTooltip(`<div class="gis-tooltip">
             <span class="tooltip-label">Tahun · ${f}</span>
             <span class="tooltip-value">${_}</span>
           </div>`,{sticky:!0,direction:"auto",className:"gis-tooltip-wrap"})}m.setStyle({opacity:c?r.opacity:0,dashArray:r.dashArray,weight:r.weight})}}),this._rateLayers.forEach(({layer:m,rate:_,isErosi:o,isAkresi:r,isStabil:l})=>{const c=this._visibleRate(_,o,r,l),f=this.clusterGroup.hasLayer(m);c&&!f?this.clusterGroup.addLayer(m):!c&&f&&this.clusterGroup.removeLayer(m)}),this._calculateViewportStats()}_calculateViewportStats(){clearTimeout(this._statsTimer),this._statsTimer=setTimeout(()=>this._doCalculateStats(),200)}_doCalculateStats(){const d=this.map.getZoom();if(d<14){Ge("stat-erosi-count","—"),Ge("stat-akresi-count","—");const f=document.getElementById("stat-avg-rate");f&&(f.textContent="—",f.style.color="inherit");return}const h=this.map.getBounds();let m=0,_=0,o=0,r=0;this._shorelineLayers.forEach(({layer:f,year:x})=>{const g=parseInt(x)===parseInt(this._filter.yearMax);if(this._visibleYear(x)&&(this._isFlexZoomActive||d>=16||g)&&f.getBounds&&h.intersects(f.getBounds())){const y=f.getLatLngs();Array.isArray(y[0])}}),this._rateLayers.forEach(({layer:f,rate:x,isErosi:g,isAkresi:b,isStabil:y})=>{this._visibleRate(x,g,b,y)&&h.contains(f.getLatLng())&&(m+=x,_++,g&&o++,b&&r++)}),Ge("stat-erosi-count",o),Ge("stat-akresi-count",r);const l=_>0?(m/_).toFixed(2):"—",c=document.getElementById("stat-avg-rate");c&&(c.textContent=l,c.style.color=l!=="—"?parseFloat(l)<0?"#ff4d4d":"#00c9a7":"inherit")}_ensurePanes(){this.map.getPane("lapisGaris")||(this.map.createPane("lapisGaris"),this.map.getPane("lapisGaris").style.zIndex=400),this.map.getPane("lapisTitik")||(this.map.createPane("lapisTitik"),this.map.getPane("lapisTitik").style.zIndex=600)}}function We(p,d="#1a1a2e"){const h=document.createElement("div");h.textContent=p,h.style.cssText=`
    position:fixed;bottom:20px;right:20px;
    background:${d};color:#fff;
    padding:8px 14px;border-radius:8px;
    font-size:13px;z-index:9999;
    font-family:'DM Sans',sans-serif;
    opacity:0;transition:opacity .2s;
  `,document.body.appendChild(h),setTimeout(()=>h.style.opacity="1",10),setTimeout(()=>{h.style.opacity="0",setTimeout(()=>h.remove(),200)},2500)}const $e=[];function Gs(){return"upload_"+Date.now()+"_"+Math.random().toString(36).slice(2,8)}function Hs(p,d){const h=$e.findIndex(_=>_.id===p);if(h===-1)return;const m=$e[h];d.removeLayer(m.layer),m.controlRow?.remove(),$e.splice(h,1),We(`🗑 ${m.filename} dihapus`,"#ff6b6b")}function js(p,d,h,m){const o=document.getElementById("panel-layer-data")?.querySelector(".panel-body");if(!o)return;const r=document.createElement("div");r.className="layer-row",r.setAttribute("data-layer-id",p),r.innerHTML=`
    <div style="display:flex;align-items:center;gap:9px;flex:1;">
      <div class="layer-status" style="background:#00c9a7;"></div>
      <div class="layer-swatch" style="background:#ffaa33;"></div>
      <span class="layer-name" title="${d}">${d}</span>
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
    </div>`,r.querySelector("input").addEventListener("change",l=>{l.target.checked?m.addLayer(h):m.removeLayer(h)}),r.querySelector(".btn-delete-upload").addEventListener("click",()=>Hs(p,m)),o.appendChild(r),$e.push({id:p,layer:h,controlRow:r,filename:d})}function Us(p,d){return new Promise((h,m)=>{const _=new FileReader;_.onload=o=>{try{const r=JSON.parse(o.target.result);if(!["FeatureCollection","Feature"].includes(r.type))throw new Error("Bukan FeatureCollection atau Feature");const l=rt.geoJSON(r,{style:{color:"#ffaa33",weight:3,opacity:.8},onEachFeature:(f,x)=>{const g=f.properties??{},b=Object.entries(g),y=b.length===0?"Tidak ada atribut":`<div style="font-family:sans-serif;padding:5px;color:#fff;">
                   <h4 style="margin:0 0 5px;color:#ffaa33;border-bottom:1px solid #444;padding-bottom:3px;">
                     Informasi Data
                   </h4>
                   ${b.map(([M,k])=>`<strong style="color:#fff;">${M}:</strong> ${k}`).join("<br>")}
                 </div>`;x.bindPopup(y),x.on({mouseover(M){this.setStyle({weight:5,color:"#fff",fillOpacity:.5}),this.bringToFront()},mouseout(M){this.setStyle({weight:3,color:"#ffaa33",fillOpacity:.2})}})}}).addTo(d);let c=p.name.replace(/\.(geojson|json)$/i,"");c.length>25&&(c=c.slice(0,22)+"..."),js(Gs(),c,l,d),h(c)}catch(r){m(r)}},_.onerror=()=>m(new Error("Gagal membaca file")),_.readAsText(p)})}function Ws(p){const d=document.getElementById("file-upload"),h=[...document.querySelectorAll(".btn-solid")].find(m=>m.textContent.includes("Buka Data"));d&&(d.setAttribute("multiple","multiple"),h?.addEventListener("click",()=>d.click()),d.addEventListener("change",async m=>{const _=[...m.target.files];if(!_.length)return;let o=0;for(const r of _)if(/\.(geojson|json)$/i.test(r.name))try{await Us(r,p),o++}catch(l){We(`❌ ${r.name}: ${l.message}`,"#ff4d4d")}else We(`⚠️ ${r.name} bukan .geojson/.json`,"#f5a623");o>0&&We(`✅ ${o} file berhasil dimuat`,"#00c9a7"),d.value=""}))}const Ut={satellite:{label:"Esri Satellite",layer:rt.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{maxZoom:19,maxNativeZoom:17,attribution:"© Esri World Imagery"})},google_sat:{label:"Google Satellite",layer:rt.tileLayer("https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",{maxZoom:20,attribution:"© Google Maps"})},google_hybrid:{label:"Google Hybrid",layer:rt.tileLayer("https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}",{maxZoom:20,attribution:"© Google Maps"})},osm:{label:"OpenStreetMap",layer:rt.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:"© OpenStreetMap contributors"})}},ye=rt.tileLayer("https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}{r}.png",{maxZoom:20,attribution:"© CartoDB",opacity:.55});let ie="google_sat",eo=null,He=0;function $s(p){eo=p,Ut[ie].layer.addTo(p),ye.addTo(p),Ut.satellite.layer.on("tileerror",()=>{He++,He>=3&&ie==="satellite"&&(console.warn("Esri tile error — switching to Google Satellite"),io(p,"google_sat"),qs("google_sat"),He=0)}),Ut.satellite.layer.on("tileload",()=>{He=0}),Vs(),no(ie)}function io(p,d){Object.values(Ut).forEach(m=>{p.hasLayer(m.layer)&&p.removeLayer(m.layer)}),Ut[d].layer.addTo(p),ie=d;const h=["satellite","google_sat","google_hybrid"].includes(d);h&&!p.hasLayer(ye)&&p.addLayer(ye),!h&&p.hasLayer(ye)&&p.removeLayer(ye),no(d)}function qs(p){const d=document.querySelector(`input[name="basemap"][value="${p}"]`);d&&(d.checked=!0)}function no(p){const d=document.getElementById("chip-basemap");d&&(d.textContent=`Basemap: ${Ut[p]?.label??p}`)}function Vs(){const d=document.querySelector('input[name="basemap"]')?.closest(".panel-body");d&&(d.innerHTML=Object.entries(Ut).map(([h,{label:m}])=>`
    <label class="basemap-row">
      <input class="basemap-radio" type="radio" name="basemap" value="${h}"
             ${h===ie?"checked":""}>
      <span class="basemap-label">${m}</span>
    </label>
  `).join(""),d.querySelectorAll('input[name="basemap"]').forEach(h=>{h.addEventListener("change",()=>{h.value!==ie&&io(eo,h.value)})}))}function Ys(p,d={}){const h=rt.map(p,{zoomControl:!1,attributionControl:!1,center:d.center??[-2.5,118],zoom:d.zoom??5,minZoom:4,maxZoom:18,maxBounds:rt.latLngBounds(rt.latLng(-15,90),rt.latLng(12,145)),maxBoundsViscosity:.55});return rt.control.attribution({position:"bottomright",prefix:!1}).addTo(h),qn(h,"lapisGaris",400),qn(h,"lapisTitik",600),h.on("zoomend",()=>{h.getContainer().classList.toggle("show-labels",h.getZoom()>=8),Vn(h)}),Vn(h),h.getContainer().classList.toggle("show-labels",h.getZoom()>=8),h}function qn(p,d,h){p.getPane(d)||(p.createPane(d),p.getPane(d).style.zIndex=String(h))}function Vn(p){const d=document.getElementById("zoom-level");d&&(d.textContent=`zoom ${p.getZoom()}`)}const oo="webgis_disclaimer_accepted";function so(p=!1){if(!p&&localStorage.getItem(oo)==="true")return;Js();const d=document.getElementById("disclaimer-overlay");d&&d.remove(),Ks()}function Ks(){const p=document.createElement("div");p.id="disclaimer-overlay",p.innerHTML=`
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

    </div>`,document.body.appendChild(p),requestAnimationFrame(()=>{p.classList.add("visible")}),document.getElementById("disc-accept").addEventListener("click",()=>{document.getElementById("disc-no-show").checked&&localStorage.setItem(oo,"true"),Yn(p)}),setTimeout(()=>{document.addEventListener("keydown",function d(h){h.key==="Escape"&&(Yn(p),document.removeEventListener("keydown",d))})},3e3)}function Yn(p){p.classList.remove("visible"),p.classList.add("hiding"),setTimeout(()=>p.remove(),350)}function Js(){if(document.getElementById("disc-styles"))return;const p=document.createElement("style");p.id="disc-styles",p.textContent=`
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
  `,document.head.appendChild(p)}class Xs{constructor({container:d,yearMin:h=1985,yearMax:m=2025,onFilterChange:_}){this.container=d,this.yearMin=h,this.yearMax=m,this.currentMin=h,this.currentMax=m,this.singleYear=m,this.mode="range",this.onFilterChange=_,this.activeTypes=new Set(["abrasi","akresi","stabil"]),this.activeCerts=new Set(["good","insufficient","unstable"]),this._animTimer=null,this._animYear=h,this._build()}getFilter(){const d=this.mode==="single"?this.singleYear:this.currentMin,h=this.mode==="single"?this.singleYear:this.currentMax;return{yearMin:d,yearMax:h,showAbrasi:this.activeTypes.has("abrasi"),showAkresi:this.activeTypes.has("akresi"),showStabil:this.activeTypes.has("stabil"),minRate:parseInt(document.getElementById("fp-rate")?.value??0),certGood:this.activeCerts.has("good"),certInsufficient:this.activeCerts.has("insufficient"),certUnstable:this.activeCerts.has("unstable")}}_build(){this.container&&(this.container.innerHTML=`
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
                ${Array.from({length:this.yearMax-this.yearMin+1},(d,h)=>this.yearMax-h).map(d=>`<option value="${d}"${d===this.yearMax?" selected":""}>${d}</option>`).join("")}
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
      </div>`,this._injectStyles(),this._bindEvents(),this._syncRangeUI())}_bindEvents(){this.container.querySelectorAll(".mode-btn").forEach(o=>{o.addEventListener("click",()=>{this.mode=o.dataset.mode,this.container.querySelectorAll(".mode-btn").forEach(r=>r.classList.remove("active")),o.classList.add("active"),document.getElementById("fp-section-range").style.display=this.mode==="range"?"":"none",document.getElementById("fp-section-single").style.display=this.mode==="single"?"":"none",this._stopAnim(),document.getElementById("fp-play").style.display="",document.getElementById("fp-pause").style.display="none",document.getElementById("fp-anim-year").style.display="none",document.getElementById("fp-anim-bar").style.display="none",this._emitChange()})});const d=document.getElementById("fp-min"),h=document.getElementById("fp-max");[d,h].forEach(o=>{o?.addEventListener("input",()=>{let r=parseInt(d.value),l=parseInt(h.value);r>l-1&&(r=l-1,d.value=r),l<r+1&&(l=r+1,h.value=l),this.currentMin=r,this.currentMax=l,this._syncRangeUI(),this._emitChange()})}),this.container.querySelectorAll(".preset-btn").forEach(o=>{o.addEventListener("click",()=>{const r=parseInt(o.dataset.min),l=parseInt(o.dataset.max);document.getElementById("fp-min").value=r,document.getElementById("fp-max").value=l,this.currentMin=r,this.currentMax=l,this._syncRangeUI(),this._emitChange()})});const m=document.getElementById("fp-single-slider"),_=document.getElementById("fp-single-select");m?.addEventListener("input",()=>{this.singleYear=parseInt(m.value);const o=document.getElementById("fp-single-display");o&&(o.textContent=this.singleYear),_&&(_.value=this.singleYear),this._emitChange()}),_?.addEventListener("change",()=>{this.singleYear=parseInt(_.value);const o=document.getElementById("fp-single-display");o&&(o.textContent=this.singleYear),m&&(m.value=this.singleYear),this._emitChange()}),this.container.querySelectorAll(".type-chip").forEach(o=>{o.addEventListener("click",()=>{const r=o.dataset.type;this.activeTypes.has(r)?this.activeTypes.size>1&&(this.activeTypes.delete(r),o.classList.remove("active")):(this.activeTypes.add(r),o.classList.add("active")),this._emitChange()})}),this.container.querySelectorAll(".cert-chip").forEach(o=>{o.addEventListener("click",()=>{const r=o.dataset.cert;this.activeCerts.has(r)?this.activeCerts.size>1&&(this.activeCerts.delete(r),o.classList.remove("active")):(this.activeCerts.add(r),o.classList.add("active")),this._emitChange()})}),document.getElementById("fp-rate")?.addEventListener("input",o=>{const r=document.getElementById("fp-rate-val");r&&(r.textContent=o.target.value),this._emitChange()}),document.getElementById("fp-play")?.addEventListener("click",()=>this._startAnim()),document.getElementById("fp-pause")?.addEventListener("click",()=>this._pauseAnim()),document.getElementById("fp-reset")?.addEventListener("click",()=>this._resetAnim())}_syncRangeUI(){const d=document.getElementById("fp-min"),h=document.getElementById("fp-max"),m=document.getElementById("fp-fill"),_=document.getElementById("fp-y1"),o=document.getElementById("fp-y2");if(!m)return;d&&(d.value=this.currentMin),h&&(h.value=this.currentMax),_&&(_.textContent=this.currentMin),o&&(o.textContent=this.currentMax);const r=this.yearMax-this.yearMin;m.style.left=(this.currentMin-this.yearMin)/r*100+"%",m.style.right=(this.yearMax-this.currentMax)/r*100+"%"}_startAnim(){this._stopAnim();const d=this.mode==="range"?this.currentMin:this.yearMin,h=this.mode==="range"?this.currentMax:this.yearMax;this._animYear=d,document.getElementById("fp-play").style.display="none",document.getElementById("fp-pause").style.display="",document.getElementById("fp-anim-year").style.display="",document.getElementById("fp-anim-bar").style.display="";const m=parseInt(document.getElementById("fp-speed")?.value??700),_=()=>{if(this._animYear>h){this._stopAnim(),this._resetAnim();return}const o=document.getElementById("fp-anim-val");o&&(o.textContent=this._animYear);const r=(this._animYear-d)/(h-d||1)*100,l=document.getElementById("fp-anim-fill");l&&(l.style.width=r+"%"),this.onFilterChange?.({yearMin:this._animYear,yearMax:this._animYear,showAbrasi:this.activeTypes.has("abrasi"),showAkresi:this.activeTypes.has("akresi"),showStabil:this.activeTypes.has("stabil"),minRate:parseInt(document.getElementById("fp-rate")?.value??0),certGood:this.activeCerts.has("good"),certInsufficient:this.activeCerts.has("insufficient"),certUnstable:this.activeCerts.has("unstable"),animMode:!0}),this._animYear++,this._animTimer=setTimeout(_,m)};_()}_pauseAnim(){this._stopAnim(),document.getElementById("fp-play").style.display="",document.getElementById("fp-pause").style.display="none"}_resetAnim(){this._stopAnim(),document.getElementById("fp-play").style.display="",document.getElementById("fp-pause").style.display="none",document.getElementById("fp-anim-year").style.display="none",document.getElementById("fp-anim-bar").style.display="none",this._emitChange()}_stopAnim(){this._animTimer&&(clearTimeout(this._animTimer),this._animTimer=null)}_emitChange(){this.onFilterChange?.(this.getFilter())}_injectStyles(){if(document.getElementById("fp-styles"))return;const d=document.createElement("style");d.id="fp-styles",d.textContent=`
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
    `,document.head.appendChild(d)}}function Qs(p){ir(),tr(p)}let Zt=!1;function tr(p){const d=document.querySelector(".map-toolbar");if(!d||document.getElementById("btn-flex-zoom"))return;const h=document.createElement("div");h.className="tool-group",h.id="flex-zoom-group",h.innerHTML=`
    <button class="map-tool" id="btn-flex-zoom"
            title="Tampilkan Garis Pantai Semua Tahun">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="2" width="15" height="15">
        <circle cx="11" cy="11" r="8"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        <line x1="11" y1="8" x2="11" y2="14"/>
        <line x1="8" y1="11" x2="14" y2="11"/>
      </svg>
    </button>`;const m=d.querySelectorAll(".tool-group"),_=m[m.length-1];d.insertBefore(h,_);const o=document.getElementById("btn-flex-zoom");o.addEventListener("click",()=>er(o,p))}function er(p,d){Zt=!Zt,p.classList.toggle("flex-zoom-active",Zt),p.title=Zt?"Tampilkan Garis Pantai Semua Tahun — klik untuk nonaktifkan":"Tampilkan Semua Tahun";const h=document.getElementById("flex-zoom-tooltip");h&&(h.textContent=Zt?"✓ Semua Tahun Ditampilkan":"Tampilkan Semua Tahun",h.classList.toggle("active",Zt)),d?.setFlexZoom&&d.setFlexZoom(Zt),window.dispatchEvent(new CustomEvent("flexzoomchange",{detail:{active:Zt}}))}function ir(){if(document.getElementById("flex-zoom-styles"))return;const p=document.createElement("style");p.id="flex-zoom-styles",p.textContent=`
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
  `,document.head.appendChild(p)}class nr{constructor(d){this.map=d,this._shorelineFeatures=[],this._rateFeatures=[],this._shorelineLabelsOn=!1,this._rateLabelsOn=!1,this._flexZoomActive=!1,this._filterYearMax=2025,this._svg=this._createSVGOverlay(),this._slGroup=this._createGroup("sl-labels"),this._rtGroup=this._createGroup("rt-labels"),this.map.on("moveend",()=>this._render()),this.map.on("zoomend",()=>this._render()),this._injectStyles(),this._buildButtons()}addShorelineFeatures(d){this._shorelineFeatures.push(...d??[]),this._shorelineLabelsOn&&this._render()}addRateFeatures(d){this._rateFeatures.push(...d??[]),this._rateLabelsOn&&this._render()}clear(){this._shorelineFeatures=[],this._rateFeatures=[],this._slGroup.innerHTML="",this._rtGroup.innerHTML=""}setFlexZoom(d,h){this._flexZoomActive=d,h!==void 0&&(this._filterYearMax=parseInt(h)),this._shorelineLabelsOn&&this._renderShorelineLabels()}setYearMax(d){this._filterYearMax=parseInt(d),this._shorelineLabelsOn&&this._renderShorelineLabels()}_buildButtons(){const d=document.getElementById("toggle-label-sl"),h=document.getElementById("toggle-label-rt");d&&d.addEventListener("change",m=>{this._shorelineLabelsOn=m.target.checked,this._slGroup.style.display=this._shorelineLabelsOn?"":"none",this._shorelineLabelsOn&&this._render()}),h&&h.addEventListener("change",m=>{this._rateLabelsOn=m.target.checked,this._rtGroup.style.display=this._rateLabelsOn?"":"none",this._rateLabelsOn&&this._render()})}_createSVGOverlay(){const d=document.getElementById("label-svg-overlay");if(d)return d;const h=document.getElementById("map"),m=document.createElementNS("http://www.w3.org/2000/svg","svg");return m.id="label-svg-overlay",m.style.cssText=`
      position:absolute; inset:0; width:100%; height:100%;
      pointer-events:none; z-index:450; overflow:visible;`,h?.appendChild(m),m}_createGroup(d){const h=document.createElementNS("http://www.w3.org/2000/svg","g");return h.id=d,h.style.display="none",this._svg.appendChild(h),h}_render(){this._shorelineLabelsOn&&this._renderShorelineLabels(),this._rateLabelsOn&&this._renderRateLabels()}_renderShorelineLabels(){if(this._slGroup.innerHTML="",!this._shorelineFeatures.length)return;const d=this.map.getZoom(),h=d>=14?120:d>=12?180:d>=10?240:300,m=h*.6,_=[],o=new Map;this._shorelineFeatures.forEach(r=>{const l=r.properties?.year??"-";o.has(l)||o.set(l,[]),o.get(l).push(r)}),o.forEach((r,l)=>{const c=parseInt(l),f=c===this._filterYearMax,x=d>=16;if(!(this._flexZoomActive||x||f))return;const b=Math.max(0,Math.min(280,(c-1984)*7)),y=isNaN(c)?"#fff":`hsl(${b},100%,65%)`;r.forEach(M=>{const k=M.geometry;if(!k)return;(k.type==="LineString"?[k.coordinates]:k.type==="MultiLineString"?k.coordinates:[]).forEach(C=>{if(C.length<2)return;const E=C.map(([T,Z])=>{const q=this.map.latLngToContainerPoint([Z,T]);return{x:q.x,y:q.y}});let O=0;const G=[];for(let T=1;T<E.length;T++){const Z=E[T].x-E[T-1].x,q=E[T].y-E[T-1].y,j=Math.sqrt(Z*Z+q*q);G.push(j),O+=j}if(O<m)return;const H=Math.max(1,Math.floor(O/h)),at=O/(H+1);for(let T=1;T<=H;T++){const Z=at*T;let q=0;for(let j=1;j<E.length;j++){const V=G[j-1];if(q+V>=Z){const tt=(Z-q)/V,ct=E[j-1].x+tt*(E[j].x-E[j-1].x),X=E[j-1].y+tt*(E[j].y-E[j-1].y),xt=E[j].x-E[j-1].x,dt=E[j].y-E[j-1].y;let bt=Math.atan2(dt,xt)*180/Math.PI;if(bt>90&&(bt-=180),bt<-90&&(bt+=180),!_.some(Rt=>{const z=Rt.x-ct,K=Rt.y-X;return Math.sqrt(z*z+K*K)<h*.85})){const Rt=this._svg.clientWidth,z=this._svg.clientHeight;ct>-40&&ct<Rt+40&&X>-20&&X<z+20&&(this._placeSLLabel(ct,X,bt,String(l),y),_.push({x:ct,y:X}))}break}q+=V}}})})})}_placeSLLabel(d,h,m,_,o){const r=document.createElementNS("http://www.w3.org/2000/svg","g");r.setAttribute("transform",`translate(${d},${h}) rotate(${m})`);const l=document.createElementNS("http://www.w3.org/2000/svg","text");l.setAttribute("text-anchor","middle"),l.setAttribute("dominant-baseline","central"),l.setAttribute("fill",o),l.setAttribute("stroke","rgba(0,0,0,0.9)"),l.setAttribute("stroke-width","3"),l.setAttribute("stroke-linejoin","round"),l.setAttribute("paint-order","stroke fill"),l.setAttribute("font-size","11"),l.setAttribute("font-family","'Inter', 'DM Sans', sans-serif"),l.setAttribute("font-weight","700"),l.setAttribute("letter-spacing","0.05em"),l.setAttribute("filter","drop-shadow(0px 1px 2px rgba(0,0,0,0.6))"),l.textContent=_,r.appendChild(l),this._slGroup.appendChild(r)}_renderRateLabels(){if(this._rtGroup.innerHTML="",!this._rateFeatures.length)return;if(this.map.getZoom()<10){this._rtGroup.innerHTML=`
        <text x="50%" y="50%"
          font-size="12" fill="rgba(255,255,255,0.3)"
          font-family="'Inter',sans-serif"
          text-anchor="middle" dominant-baseline="middle">
          Zoom in ke level 10+ untuk label laju
        </text>`;return}const h=this._svg.clientWidth,m=this._svg.clientHeight,_=100,o=24,r=Math.ceil(h/_),l=Math.ceil(m/o),c=new Uint8Array(r*l),f=(b,y,M,k)=>{const B=Math.max(0,Math.floor((b-M/2)/_)),C=Math.min(r-1,Math.ceil((b+M/2)/_)),E=Math.max(0,Math.floor((y-k/2)/o)),O=Math.min(l-1,Math.ceil((y+k/2)/o));for(let G=E;G<=O;G++)for(let H=B;H<=C;H++)c[G*r+H]=1},x=(b,y,M,k)=>{const B=Math.max(0,Math.floor((b-M/2)/_)),C=Math.min(r-1,Math.ceil((b+M/2)/_)),E=Math.max(0,Math.floor((y-k/2)/o)),O=Math.min(l-1,Math.ceil((y+k/2)/o));for(let G=E;G<=O;G++)for(let H=B;H<=C;H++)if(c[G*r+H])return!0;return!1};[...this._rateFeatures].filter(b=>{const y=b.geometry?.coordinates;if(!y)return!1;const M=this.map.latLngToContainerPoint([y[1],y[0]]);return M.x>-20&&M.x<h+20&&M.y>-20&&M.y<m+20}).sort((b,y)=>Math.abs(y.properties?.rate_time??0)-Math.abs(b.properties?.rate_time??0)).forEach(b=>{const y=b.geometry?.coordinates;if(!y)return;const M=parseFloat(b.properties?.rate_time??0),k=parseFloat(b.properties?.uncertainty??b.properties?.rate_time_unc??b.properties?.unc??0);if(Math.abs(M)<.05)return;const B=this.map.latLngToContainerPoint([y[1],y[0]]),C=B.x,E=B.y,O=M<0,G="#ffffff",H=O?"rgba(220,38,38,0.85)":"rgba(5,150,105,0.85)",at=O?"#fca5a5":"#6ee7b7",T=M.toFixed(1)+" m",Z=k>0?` (±${k.toFixed(1)})`:"",q=T+Z,j=q.length*5.8+12,V=16,tt=[{dx:14,dy:0,anchor:"start"},{dx:-14,dy:0,anchor:"end"},{dx:0,dy:-12,anchor:"middle"},{dx:0,dy:16,anchor:"middle"}];for(const ct of tt){const X=C+ct.dx+(ct.anchor==="start"?j/2:ct.anchor==="end"?-j/2:0),xt=E+ct.dy;if(!(X<0||X>h||xt<-10||xt>m+10)&&!x(X,xt,j+6,V+4)){f(X,xt,j+6,V+4),this._placeRateLabel(C,E,X,xt,q,G,H,at,ct.anchor);break}}})}_placeRateLabel(d,h,m,_,o,r,l,c,f){const x=document.createElementNS("http://www.w3.org/2000/svg","g"),g=m-d,b=_-h;if(Math.abs(g)>8||Math.abs(b)>8){const E=document.createElementNS("http://www.w3.org/2000/svg","line");E.setAttribute("x1",d),E.setAttribute("y1",h),E.setAttribute("x2",m),E.setAttribute("y2",_),E.setAttribute("stroke",r),E.setAttribute("stroke-width","0.8"),E.setAttribute("stroke-opacity","0.5"),E.setAttribute("stroke-dasharray","3 2"),x.appendChild(E)}const y=o.length*5.8+12,M=16,k=f==="start"?m-2:f==="end"?m-y+2:m-y/2,B=document.createElementNS("http://www.w3.org/2000/svg","rect");B.setAttribute("x",k),B.setAttribute("y",_-M/2),B.setAttribute("width",y),B.setAttribute("height",M),B.setAttribute("rx","4"),B.setAttribute("fill",l),B.setAttribute("stroke",c),B.setAttribute("stroke-width","0.8"),x.appendChild(B);const C=document.createElementNS("http://www.w3.org/2000/svg","text");C.setAttribute("x",f==="start"?k+6:f==="end"?m-6:m),C.setAttribute("y",_+1),C.setAttribute("text-anchor",f==="start"?"start":f==="end"?"end":"middle"),C.setAttribute("dominant-baseline","middle"),C.setAttribute("fill",r),C.setAttribute("font-size","9"),C.setAttribute("font-family","'Inter','DM Sans',sans-serif"),C.setAttribute("font-weight","600"),C.textContent=o,x.appendChild(C),this._rtGroup.appendChild(x)}_injectStyles(){if(document.getElementById("label-mgr-styles"))return;const d=document.createElement("style");d.id="label-mgr-styles",d.textContent=`
      #btn-label-shoreline.label-btn-active,
      #btn-label-rates.label-btn-active {
        background: rgba(59,130,246,0.2) !important;
        color: #3b82f6 !important;
        box-shadow: inset 0 0 0 1px rgba(59,130,246,0.4);
      }
      #label-svg-overlay { user-select: none; }
    `,document.head.appendChild(d)}}const or="https://cdnjs.cloudflare.com/ajax/libs/gif.js/0.2.0/gif.js",sr="https://cdnjs.cloudflare.com/ajax/libs/gif.js/0.2.0/gif.worker.js",rr="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js";async function Kn(p){if(!document.querySelector(`script[src="${p}"]`)?.dataset.loaded)return new Promise((d,h)=>{const m=document.createElement("script");m.src=p,m.onload=()=>{m.dataset.loaded="1",d()},m.onerror=h,document.head.appendChild(m)})}function ar(p,d){if(!p||!d)return;dr();const h=document.querySelector(".mlm-actions");if(!h||document.getElementById("gif-section"))return;const m=document.createElement("div");m.id="gif-section",m.className="gif-section",m.innerHTML=`
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
  `,h.parentNode.insertBefore(m,h),document.getElementById("btn-export-gif").addEventListener("click",()=>lr(p,d))}async function lr(p,d){const h=document.getElementById("btn-export-gif"),m=document.getElementById("gif-progress-wrap"),_=document.getElementById("gif-progress-fill"),o=document.getElementById("gif-progress-label"),r=parseInt(document.getElementById("gif-year-start")?.value??1984),l=parseInt(document.getElementById("gif-year-end")?.value??2025),c=parseInt(document.getElementById("gif-interval")?.value??1),f=parseInt(document.getElementById("gif-delay")?.value??500),x=parseFloat(document.getElementById("gif-resolution")?.value??.75);if(r>=l){alert("Tahun mulai harus lebih kecil dari tahun akhir.");return}const g=[];for(let y=r;y<=l;y+=c)g.push(y);h.disabled=!0,h.textContent="Sedang proses...",m.style.display="";const b=(y,M)=>{_.style.width=y+"%",o.textContent=M};try{await Kn(rr),await Kn(or);const y=document.getElementById("map"),M=Math.round(y.offsetWidth*x),k=Math.round(y.offsetHeight*x),B={...d._filter},C=new window.GIF({workers:2,quality:8,width:M,height:k,workerScript:sr,repeat:0});b(2,`Menyiapkan ${g.length} frame...`);for(let E=0;E<g.length;E++){const O=g[E],G=Math.round(E/g.length*75)+2;b(G,`Frame ${E+1}/${g.length} — tahun ${O}`),d.applyFilter({...B,yearMin:B.yearMin,yearMax:O}),await cr(80);const H=await window.html2canvas(y,{useCORS:!0,allowTaint:!0,scale:x,backgroundColor:"#080f1e",logging:!1});hr(H,O,r,l),C.addFrame(H,{delay:f,copy:!0})}C.addFrame(C.frames[C.frames.length-1]?.data??C.frames[0]?.data,{delay:f*4,copy:!0}),d.applyFilter(B),b(80,"Mengompres & encoding GIF..."),await new Promise((E,O)=>{C.on("progress",G=>{b(80+Math.round(G*18),`Encoding GIF: ${Math.round(G*100)}%`)}),C.on("finished",G=>{b(100,"Selesai! Mengunduh...");const H=URL.createObjectURL(G),at=document.createElement("a");at.href=H,at.download=`animasi-garis-pantai_${r}-${l}.gif`,at.click(),setTimeout(()=>URL.revokeObjectURL(H),5e3),E()}),C.on("error",O),C.render()})}catch(y){console.error("GIF export error:",y),b(0,"⚠ Gagal: "+y.message),d.applyFilter({...d._filter})}finally{h.disabled=!1,h.textContent="Buat Animasi GIF",setTimeout(()=>{m.style.display="none"},3e3)}}function hr(p,d,h,m){const _=p.getContext("2d"),o=p.width,r=p.height,l=(d-h)/Math.max(m-h,1);_.fillStyle="rgba(0,0,0,0.35)",_.fillRect(0,r-22,o,22),_.fillStyle="#3b82f6",_.fillRect(0,r-3,Math.round(o*l),3),_.font=`bold ${Math.round(o*.038)}px 'Inter', 'Arial', sans-serif`,_.textBaseline="middle",_.fillStyle="rgba(0,0,0,0.7)",_.fillText(String(d),15,r-11+1),_.fillStyle="#ffffff",_.fillText(String(d),14,r-11)}function cr(p=60){return new Promise(d=>{setTimeout(()=>requestAnimationFrame(d),p)})}function dr(){if(document.getElementById("gif-export-styles"))return;const p=document.createElement("style");p.id="gif-export-styles",p.textContent=`
    .gif-section {
      padding: 10px 14px 12px;
      border-top: 1px solid rgba(255,255,255,0.05);
      border-bottom: 1px solid rgba(255,255,255,0.05);
    }
    .gif-header {
      display: flex; align-items: center; gap: 6px;
      font-size: 9.5px; font-weight: 600; text-transform: uppercase;
      letter-spacing: .08em; color: #a78bfa; margin-bottom: 9px;
      font-family: 'Inter', sans-serif;
    }
    .gif-row {
      display: grid; grid-template-columns: 1fr 1fr;
      gap: 6px; margin-bottom: 6px;
    }
    .gif-input { font-size: 11px !important; padding: 5px 8px !important; margin-bottom: 0 !important; }

    .gif-progress-wrap { margin: 8px 0 6px; }
    .gif-progress-bar {
      height: 4px; background: rgba(255,255,255,0.08);
      border-radius: 2px; overflow: hidden; margin-bottom: 5px;
    }
    .gif-progress-fill {
      height: 100%; width: 0%; background: #a78bfa;
      border-radius: 2px; transition: width .3s ease;
    }
    .gif-progress-label {
      font-size: 10px; color: #6b7a99; font-family: 'Inter', sans-serif;
      text-align: center;
    }

    .mlm-btn-gif {
      display: flex; align-items: center; justify-content: center; gap: 6px;
      width: 100%; padding: 8px 12px; border-radius: 7px; border: none;
      font-size: 12px; font-weight: 500; font-family: 'Inter', sans-serif;
      cursor: pointer; transition: all .15s; margin-top: 4px;
      background: rgba(167,139,250,0.15);
      color: #a78bfa;
      border: 1px solid rgba(167,139,250,0.3);
    }
    .mlm-btn-gif:hover { background: rgba(167,139,250,0.25); }
    .mlm-btn-gif:disabled { opacity: .4; cursor: not-allowed; }
  `,document.head.appendChild(p)}const ur="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js";let Si=!1;async function Ei(){if(Si||window.html2canvas){Si=!0;return}return new Promise((p,d)=>{const h=document.createElement("script");h.src=ur,h.onload=()=>{Si=!0,p()},h.onerror=d,document.head.appendChild(h)})}let je=null;async function fr(){if(je)return je;const p=["public/logo/logo.png","public/logo/logo1.png","./logo.png"];for(const d of p)try{const h=await fetch(d);if(!h.ok)continue;const m=await h.blob();return je=await new Promise(_=>{const o=new FileReader;o.onload=r=>_(r.target.result),o.readAsDataURL(m)}),je}catch{}return null}function ro(p,d=100){if(!p)return{meters:0,label:"—",barWidthPx:d};const h=p.getCenter(),m=Math.cos(h.lat*Math.PI/180)*111320/Math.pow(2,p.getZoom()+8)*256,_=m*d,o=[1,2,5,10,20,50,100,200,500,1e3,2e3,5e3,1e4,2e4,5e4,1e5,2e5,5e5,1e6];let r=o[0];for(const f of o)if(f<=_)r=f;else break;const l=r>=1e3?`${(r/1e3).toLocaleString("id-ID")} km`:`${r.toLocaleString("id-ID")} m`,c=Math.round(r/m);return{meters:r,label:l,barWidthPx:c}}function pr(p,d,h){Pr(),gr(p),_r(p),mr(p);const m=new MutationObserver(()=>{document.querySelector(".mlm-actions")&&(ar(p,h),m.disconnect())});m.observe(document.body,{childList:!0,subtree:!0})}function mr(p){if(!p)return;function d(){const{label:h,barWidthPx:m}=ro(p,44),_=document.querySelector(".scale-line"),o=document.querySelector(".scale-box span");_&&(_.style.width=m+"px"),o&&(o.textContent=h)}p.on("zoomend moveend",d),d()}function _r(p,d){const h=document.querySelector(".map-toolbar");if(!h)return;const m=document.createElement("div");m.className="tool-group",m.innerHTML=`
    <button class="map-tool" id="btn-map-layout" title="Layout - Ekspor Peta">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18M9 3v18"/>
        <circle cx="15" cy="15" r="2" fill="currentColor" stroke="none" opacity=".5"/>
      </svg>
    </button>`,h.appendChild(m),document.getElementById("btn-map-layout")?.addEventListener("click",()=>yr(p))}function gr(p,d){if(document.getElementById("map-layout-modal"))return;const h=document.createElement("div");h.id="map-layout-modal",h.innerHTML=`
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

    </div>`,document.body.appendChild(h),document.getElementById("mlm-backdrop").addEventListener("click",Xn),document.getElementById("btn-lyt-close").addEventListener("click",Xn),document.getElementById("btn-lyt-refresh").addEventListener("click",()=>Nt(p)),document.getElementById("btn-lyt-png").addEventListener("click",()=>wr()),document.getElementById("btn-lyt-print").addEventListener("click",()=>kr(p)),document.getElementById("btn-lyt-clipboard").addEventListener("click",()=>Lr());const m=document.getElementById("btn-toggle-all-off");let _=!1;const o=["lyt-legend","lyt-north","lyt-scale","lyt-source","lyt-disclaimer","lyt-date","lyt-inset"];m.addEventListener("click",()=>{_=!_,o.forEach(r=>{const l=document.getElementById(r);l&&(l.checked=!_)}),m.textContent=_?"Tampilkan Semua":"Peta Saja",m.style.background=_?"rgba(59,130,246,0.2)":"",m.style.color=_?"#3b82f6":"",Nt(p)}),document.querySelectorAll(".mlm-theme").forEach(r=>{r.addEventListener("click",()=>{document.querySelectorAll(".mlm-theme").forEach(l=>l.classList.remove("active")),r.classList.add("active"),Nt(p)})}),["layout-title","layout-subtitle","layout-author","layout-area"].forEach(r=>{document.getElementById(r)?.addEventListener("input",()=>{clearTimeout(window._lytDebounce),window._lytDebounce=setTimeout(()=>Nt(p),400)})}),o.forEach(r=>{document.getElementById(r)?.addEventListener("change",()=>Nt(p))}),document.getElementById("layout-paper")?.addEventListener("change",()=>{ao(),Nt(p)})}const Jn={a4l:{w:864,h:612,label:"A4 Landscape",mmW:297,mmH:210},a4p:{w:612,h:864,label:"A4 Portrait",mmW:210,mmH:297},a3l:{w:1122,h:794,label:"A3 Landscape",mmW:420,mmH:297}};function xe(){const p=document.getElementById("layout-paper")?.value??"a4l";return Jn[p]??Jn.a4l}function vr(){return parseInt(document.getElementById("layout-dpi")?.value??"200")}function ao(){const p=xe(),d=document.getElementById("mlm-canvas"),h=document.getElementById("mlm-preview-label");d&&(d.style.width=p.w+"px",d.style.height=p.h+"px"),h&&(h.textContent=`Preview — ${p.label}`)}function yr(p){document.getElementById("map-layout-modal").classList.add("open"),document.body.style.overflow="hidden";const h=document.getElementById("btn-flex-zoom");h&&!h.classList.contains("active")&&h.click(),ao(),setTimeout(()=>Nt(p),150)}function Xn(){document.getElementById("map-layout-modal").classList.remove("open"),document.body.style.overflow=""}function xr(){const p=document.querySelector(".mlm-theme.active")?.dataset.theme??"dark";return{dark:{bg:"#080f1e",text:"#f0f6ff",textSub:"#94afc8",border:"rgba(255,255,255,0.12)",accent:"#3b82f6",cardBg:"#0c1526",cardBorder:"rgba(255,255,255,0.08)",gridLine:"rgba(255,255,255,0.04)"},light:{bg:"#f1f5f9",text:"#1e293b",textSub:"#64748b",border:"#cbd5e1",accent:"#2563eb",cardBg:"#ffffff",cardBorder:"#e2e8f0",gridLine:"rgba(0,0,0,0.04)"}}[p]}function Ue(p){return document.getElementById(p)?.value?.trim()??""}function ee(p){return document.getElementById(p)?.checked??!0}async function br(p=1.5){const d=document.getElementById("map");return d?(await Ei(),await window.html2canvas(d,{useCORS:!0,allowTaint:!0,scale:p,backgroundColor:"#080f1e",logging:!1})):null}async function Nt(p){const d=document.getElementById("mlm-canvas");if(!d)return;d.innerHTML=`
    <div style="display:flex;align-items:center;justify-content:center;
                height:100%;color:rgba(255,255,255,0.4);font-size:13px;
                font-family:'Inter',sans-serif;gap:8px;">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
           width="16" height="16" style="animation:spin 1s linear infinite;">
        <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
      </svg>
      Memuat snapshot peta...
    </div>`;const[h,m]=await Promise.all([br(1.5),fr()]),_=h?(document.getElementById("map"),xe(),h.toDataURL("image/jpeg",.93)):null,o=xr(),r=Ue("layout-title")||"Peta Dinamika Garis Pantai",l=Ue("layout-subtitle")||"",c=Ue("layout-author")||"",f=Ue("layout-area")||"",x=xe(),g=ee("lyt-legend"),b=ee("lyt-north"),y=ee("lyt-scale"),M=ee("lyt-source"),k=ee("lyt-disclaimer"),B=ee("lyt-date"),C=new Date().toLocaleDateString("id-ID",{day:"numeric",month:"long",year:"numeric"}),{label:E,barWidthPx:O}=ro(p,80),G=Math.min(O,120),H=!g&&!b&&!y&&!M&&!k;d.innerHTML=`
    <div class="lyt-page" style="background:${o.bg};color:${o.text};width:${x.w}px;height:${x.h}px;">

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
          ${l?`<div class="lyt-subtitle" style="color:${o.textSub};">${l}</div>`:""}
          ${f?`<div class="lyt-area-tag" style="background:${o.accent}20;border:1px solid ${o.accent}40;color:${o.accent};">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="9" height="9"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            ${f}
          </div>`:""}
        </div>
        <div class="lyt-logo-area" style="color:${o.textSub};">
          ${m?`<div class="lyt-logo-box" style="border-color:${o.border};">
                 <img src="${m}" alt="Logo" style="width:100%;height:100%;object-fit:contain;display:block;"/>
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

          ${b?`
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

          ${y?`
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
        ${H?"":`
        <div class="lyt-right-panel" style="width:${x.h<700?210:230}px;">

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
              ${c?`<div><strong style="color:${o.text};">Dibuat oleh</strong><br>${c}</div>`:""}
              ${B?`<div style="margin-top:3px;"><strong style="color:${o.text};">Tanggal</strong><br>${C}</div>`:""}
              <div style="margin-top:3px;"><strong style="color:${o.text};">Sistem Koordinat</strong><br>WGS 84 / EPSG:4326</div>
              <div style="margin-top:3px;"><strong style="color:${o.text};">Periode Data</strong><br>1985 – 2025</div>
              <div style="margin-top:3px;"><strong style="color:${o.text};">Resolusi Citra</strong><br>30 m (Landsat)</div>
            </div>
          </div>

          ${M?`
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
        ${B?`<div class="lyt-footer-right" style="color:${o.textSub};">${C}</div>`:""}
      </div>

    </div>`}async function wr(p){const d=document.getElementById("btn-lyt-png");d&&(d.disabled=!0,d.textContent="Memproses...");try{await Ei();const h=document.querySelector(".lyt-page");if(!h)throw new Error("Layout tidak ditemukan");const m=vr(),_=m/96,o=await window.html2canvas(h,{useCORS:!0,scale:_,logging:!1,backgroundColor:null,width:h.offsetWidth,height:h.offsetHeight,windowWidth:h.offsetWidth,windowHeight:h.offsetHeight}),r=document.createElement("a"),c=(document.getElementById("layout-title")?.value?.trim()||"peta-garis-pantai").toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,""),f=xe();r.download=`${c}_${f.label.replace(" ","-").toLowerCase()}_${m}dpi_${new Date().toISOString().slice(0,10)}.png`,r.href=o.toDataURL("image/png"),r.click()}catch(h){console.error("Export PNG gagal:",h),alert("Gagal export PNG. Pastikan koneksi internet aktif.")}finally{d&&(d.disabled=!1,d.innerHTML=`
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="7 10 12 15 17 10"/>
          <line x1="12" y1="15" x2="12" y2="3"/>
        </svg> Export PNG`)}}async function Lr(p){const d=document.getElementById("btn-lyt-clipboard");d&&(d.disabled=!0,d.textContent="Menyalin...");try{await Ei();const h=document.querySelector(".lyt-page");if(!h)throw new Error("Layout tidak ditemukan");(await window.html2canvas(h,{useCORS:!0,scale:1.5,logging:!1,backgroundColor:null,width:h.offsetWidth,height:h.offsetHeight,windowWidth:h.offsetWidth,windowHeight:h.offsetHeight})).toBlob(async _=>{try{await navigator.clipboard.write([new ClipboardItem({"image/png":_})]),d&&(d.textContent="✓ Tersalin!"),setTimeout(()=>{d&&(d.disabled=!1,d.innerHTML=`
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13">
                <rect x="9" y="9" width="13" height="13" rx="2"/>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
              </svg> Copy to Clipboard`)},2e3)}catch{alert("Browser tidak mendukung clipboard API. Gunakan Export PNG."),d&&(d.disabled=!1,d.textContent="Copy to Clipboard")}},"image/png")}catch(h){console.error("Copy clipboard gagal:",h),d&&(d.disabled=!1,d.textContent="Copy to Clipboard")}}async function kr(p){await Nt(p),await new Promise(_=>setTimeout(_,500));const d=document.querySelector(".lyt-page")?.outerHTML;if(!d)return;const h=xe(),m=window.open("","_blank");m.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Cetak PDF</title>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
      <style>
        * { margin:0; padding:0; box-sizing:border-box; }
        body { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
        @page { size: ${h.mmW}mm ${h.mmH}mm; margin: 0; }
        ${lo()}
        @media print {
          body { background: white; }
          .lyt-page {
            width: ${h.mmW}mm !important;
            height: ${h.mmH}mm !important;
            padding: 8mm !important;
            page-break-after: avoid;
          }
        }
      </style>
    </head>
    <body>
      ${d}
      <script>
        window.onload = () => setTimeout(() => { window.print(); window.close(); }, 800);
      <\/script>
    </body>
    </html>`),m.document.close()}function lo(){return`
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
  `}function Pr(){if(document.getElementById("map-layout-styles"))return;const p=document.createElement("style");p.id="map-layout-styles",p.textContent=`
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
    ${lo()}

    @keyframes spin { to { transform: rotate(360deg); } }
  `,document.head.appendChild(p)}function Mr(p){let d=!1,h="distance",m=[],_=null,o=null,r=[],l=null;const c=document.getElementById("btn-measure");if(!c)return;if(!document.getElementById("measure-styles")){const T=document.createElement("style");T.id="measure-styles",T.textContent=`
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
    `,document.head.appendChild(T)}const f=document.createElement("div");f.id="measure-panel",f.className="measure-panel",f.innerHTML=`
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
  `,document.getElementById("map").appendChild(f);function x(T,Z){const j=(Z.lat-T.lat)*Math.PI/180,V=(Z.lng-T.lng)*Math.PI/180,tt=Math.sin(j/2)**2+Math.cos(T.lat*Math.PI/180)*Math.cos(Z.lat*Math.PI/180)*Math.sin(V/2)**2;return 6371e3*2*Math.asin(Math.sqrt(tt))}function g(){let T=0;for(let Z=1;Z<m.length;Z++)T+=x(m[Z-1],m[Z]);return T}function b(){const T=m.length;if(T<3)return 0;const Z=6371e3;let q=0;for(let j=0;j<T;j++){const V=(j+1)%T,tt=m[j].lng*Math.PI/180,ct=Math.log(Math.tan(Math.PI/4+m[j].lat*Math.PI/360)),X=m[V].lng*Math.PI/180,xt=Math.log(Math.tan(Math.PI/4+m[V].lat*Math.PI/360));q+=(X-tt)*(xt+ct)}return Math.abs(q/2)*Z*Z}function y(T){return T<1e3?`${T.toFixed(1)} m`:`${(T/1e3).toFixed(3)} km`}function M(T){return T<1e4?`${T.toFixed(1)} m²`:T<1e6?`${(T/1e4).toFixed(3)} ha`:`${(T/1e6).toFixed(4)} km²`}function k(){const T=document.getElementById("mp-result");if(T){if(m.length<2){T.innerHTML="<span>Hasil</span>—";return}h==="distance"?T.innerHTML=`<span>Total Jarak</span>${y(g())}`:T.innerHTML=m.length>=3?`<span>Luas Area</span>${M(b())}`:"<span>Luas Area</span>— (min. 3 titik)"}}function B(){const T=document.getElementById("mp-hint");T&&(m.length===0?T.textContent="Klik peta untuk mulai mengukur":h==="distance"?T.textContent=`${m.length} titik · klik lanjutkan, Undo/Hapus untuk edit`:T.textContent=`${m.length} titik · min 3 untuk luas · klik lanjutkan`)}function C(){if(_?.remove(),o?.remove(),m.length>=2){const T={color:"#1a7aff",weight:2.5,dashArray:"6,4",opacity:.9};_=L.polyline(m.map(Z=>[Z.lat,Z.lng]),T).addTo(p),h==="area"&&m.length>=3&&(o=L.polygon(m.map(Z=>[Z.lat,Z.lng]),{color:"#1a7aff",weight:1.5,fillColor:"#1a7aff",fillOpacity:.12,dashArray:"5,4"}).addTo(p))}if(l?.remove(),m.length>=2){const T=m[m.length-1],Z=m[m.length-2],q=(T.lat+Z.lat)/2,j=(T.lng+Z.lng)/2,V=h==="distance"?y(x(Z,T)):m.length>=3?M(b()):"";V&&(l=L.marker([q,j],{icon:L.divIcon({className:"measure-label",html:V,iconAnchor:[0,0]}),interactive:!1}).addTo(p))}k(),B()}function E(T,Z){const q=L.marker(T,{icon:L.divIcon({className:"measure-dot",iconSize:[10,10],iconAnchor:[5,5]}),draggable:!0,autoPan:!0}).addTo(p);return q.on("drag",j=>{m[Z]=j.target.getLatLng(),C()}),q.on("dragend",()=>C()),q.on("mouseover",()=>{p.getContainer().style.cursor="grab"}),q.on("mouseout",()=>{p.getContainer().style.cursor="crosshair"}),r.push(q),q}function O(T){if(!d)return;const Z=m.length;m.push(T.latlng),E(T.latlng,Z),C()}function G(){m=[],_?.remove(),_=null,o?.remove(),o=null,l?.remove(),l=null,r.forEach(T=>T.remove()),r=[],k(),B()}function H(){d=!0,c.classList.add("active"),f.classList.add("visible"),p.getContainer().style.cursor="crosshair",p.on("click",O)}function at(){d=!1,c.classList.remove("active"),f.classList.remove("visible"),p.getContainer().style.cursor="",p.off("click",O),G()}c.addEventListener("click",T=>{T.stopPropagation(),d?at():H()}),L.DomEvent.disableClickPropagation(f),document.getElementById("mp-close")?.addEventListener("click",T=>{T.stopPropagation(),at()}),document.getElementById("mp-clear")?.addEventListener("click",T=>{T.stopPropagation(),G()}),document.getElementById("mp-undo")?.addEventListener("click",T=>{if(T.stopPropagation(),m.length===0)return;m.pop();const Z=r.pop();Z?.off(),Z?.remove(),l?.remove(),l=null,C()}),f.querySelectorAll(".mp-mode-btn").forEach(T=>{T.addEventListener("click",Z=>{Z.stopPropagation(),h=T.dataset.mode,f.querySelectorAll(".mp-mode-btn").forEach(q=>q.classList.remove("active")),T.classList.add("active"),G()})}),document.addEventListener("keydown",T=>{T.key==="Escape"&&d&&at()})}function Cr({onOpacityChange:p,onToggleShorelines:d,onToggleRates:h}={}){function m(){const r=document.getElementById("app"),c=document.getElementById("sidebar").classList.toggle("collapsed");r.classList.toggle("sidebar-collapsed",c)}document.getElementById("btn-sidebar-toggle")?.addEventListener("click",m),document.getElementById("btn-topbar-sidebar")?.addEventListener("click",m),document.querySelectorAll(".sb-tab").forEach(r=>{r.addEventListener("click",()=>{const l=r.dataset.tab;document.querySelectorAll(".sb-tab").forEach(c=>c.classList.toggle("active",c.dataset.tab===l)),document.querySelectorAll(".sb-panel").forEach(c=>c.classList.toggle("active",c.id===`tab-${l}`))})}),document.querySelectorAll(".panel-header").forEach(r=>{r.addEventListener("click",()=>{const l=r.nextElementSibling,c=r.querySelector(".ph-chev");if(!l)return;const f=l.style.display==="none";l.style.display=f?"":"none",c?.classList.toggle("open",f)})});const _=document.getElementById("opacity-slider"),o=document.getElementById("opacity-val");_?.addEventListener("input",()=>{const r=parseInt(_.value)/100;o&&(o.textContent=_.value+"%"),p?.(r)}),document.getElementById("toggle-shorelines")?.addEventListener("change",r=>d?.(r.target.checked)),document.getElementById("toggle-rates")?.addEventListener("change",r=>h?.(r.target.checked))}function Tr(p){document.getElementById("btn-zoom-in")?.addEventListener("click",()=>p.zoomIn()),document.getElementById("btn-zoom-out")?.addEventListener("click",()=>p.zoomOut()),document.getElementById("btn-fitbounds")?.addEventListener("click",()=>p.setView([-2.5,118],5)),document.getElementById("btn-locate")?.addEventListener("click",()=>p.locate({setView:!0,maxZoom:12})),document.getElementById("btn-fullscreen")?.addEventListener("click",()=>{const d=document.getElementById("map");document.fullscreenElement?document.exitFullscreen():d.requestFullscreen?.()})}const ht=Ys("map",{center:[-2.5,118],zoom:5});$s(ht);const yt=new Fs(ht,{yearMin:1984,yearMax:2025});await yt.init();const be=new nr(ht);yt.onTileLoaded=(p,d)=>{p?.features&&be.addShorelineFeatures(p.features),d?.features&&be.addRateFeatures(d.features)};yt.onClearTiles=()=>{be.clear()};pr(ht,null,yt);const{shorelinesGroup:Qn,ratesGroup:to}=yt,Sr=document.getElementById("filter-panel-wrap");new Xs({container:Sr,yearMin:1985,yearMax:2025,onFilterChange:p=>{yt.applyFilter({yearMin:p.yearMin,yearMax:p.yearMax,showAbrasi:p.showAbrasi,showAkresi:p.showAkresi,showStabil:p.showStabil,minRate:parseInt(document.getElementById("fp-rate")?.value??0),certGood:p.certGood,certInsufficient:p.certInsufficient,certUnstable:p.certUnstable})}});Cr({onOpacityChange:p=>yt.setShorelinesOpacity(p),onToggleShorelines:p=>p?ht.addLayer(Qn):ht.removeLayer(Qn),onToggleRates:p=>p?ht.addLayer(to):ht.removeLayer(to)});Tr(ht);Mr(ht);Qs(yt);yt.setFlexZoom=p=>{yt._isFlexZoomActive=p,yt._applyFilterToLoaded(),be.setFlexZoom(p),be.setYearMax(yt._filter.yearMax)};Ws(ht);ht.on("mousemove",({latlng:{lat:p,lng:d}})=>{const h=(o,r,l)=>{const c=Math.abs(o),f=Math.floor(c),x=Math.floor((c-f)*60),g=Math.floor(((c-f)*60-x)*60);return`${f}°${x}'${g}" ${o>=0?r:l}`},m=document.getElementById("coord-lat"),_=document.getElementById("coord-lng");m&&(m.textContent=h(p,"LU","LS")),_&&(_.textContent=h(d,"BT","BB"))});ht.on("zoomend",()=>{const p=document.getElementById("zoom-level");p&&(p.textContent=`zoom ${ht.getZoom()}`),ht.getContainer().classList.toggle("show-labels",ht.getZoom()>=8)});so();document.getElementById("btn-reopen-disclaimer")?.addEventListener("click",()=>{localStorage.removeItem("webgis_disclaimer_accepted"),so();const p=document.getElementById("disclaimer-modal");p&&(p.style.display="flex",p.classList.remove("hidden"))});
