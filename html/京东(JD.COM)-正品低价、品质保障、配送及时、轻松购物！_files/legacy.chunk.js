webpackJsonp([14],{78:function(t,n,r){var o,s,u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(n,u){function c(e){return function(t){return{}.toString.call(t)=="[object "+e+"]"}}function d(){return S++}function e(e){return e.match(T)[0]}function f(e){for(e=e.replace(A,"/");e.match(D);)e=e.replace(D,"/");return e=e.replace(C,"$1/")}function g(e){var t=e.length-1,n=e.charAt(t);return"#"===n?e.substring(0,t):".js"===e.substring(t-2)||e.indexOf("?")>0||".css"===e.substring(t-3)||"/"===n?e:e+".js"}function h(e){var t=b.alias;return t&&w(t[e])?t[e]:e}function i(e){var t,n=b.paths;return n&&(t=e.match(O))&&w(n[t[1]])&&(e=n[t[1]]+t[2]),e}function j(e){var t=b.vars;return t&&e.indexOf("{")>-1&&(e=e.replace(U,function(e,n){return w(t[n])?t[n]:e})),e}function k(e){var t=b.map,n=e;if(t)for(var r=0,i=t.length;i>r;r++){var o=t[r];if((n=x(o)?o(e)||e:e.replace(o[0],o[1]))!==e)break}return n}function l(t,n){var r,i=t.charAt(0);if(H.test(t))r=t;else if("."===i)r=f((n?e(n):b.cwd)+t);else if("/"===i){var o=b.cwd.match(L);r=o?o[0]+t.substring(1):t}else r=b.base+t;return 0===r.indexOf("//")&&(r=("https:"==location.protocol?"https:":"http:")+r),r}function m(e,t){if(!e)return"";e=h(e),e=i(e),e=j(e),e=g(e);var n=l(e,t);return n=k(n)}function o(e,t,n){var r=W.test(e),i=F.createElement(r?"link":"script");if(n){var o=x(n)?n(e):n;o&&(i.charset=o)}p(i,t,r,e),r?(i.rel="stylesheet",i.href=e):(i.async=!0,i.src=e),P=i,K?G.insertBefore(i,K):G.appendChild(i),P=null}function p(e,t,n,r){function f(){e.onload=e.onerror=e.onreadystatechange=null,n||b.debug||G.removeChild(e),e=null,t()}var i="onload"in e;return!n||!Y&&i?(i?(e.onload=f,e.onerror=function(){_("error",{uri:r,node:e}),f()}):e.onreadystatechange=function(){/loaded|complete/.test(e.readyState)&&f()},u):(setTimeout(function(){q(e,t)},1),u)}function q(t,n){var r,i=t.sheet;if(Y)i&&(r=!0);else if(i)try{i.cssRules&&(r=!0)}catch(e){"NS_ERROR_DOM_SECURITY_ERR"===e.name&&(r=!0)}setTimeout(function(){r?n():q(t,n)},20)}function r(){if(P)return P;if(V&&"interactive"===V.readyState)return V;for(var e=G.getElementsByTagName("script"),t=e.length-1;t>=0;t--){var n=e[t];if("interactive"===n.readyState)return V=n}}function s(e){var t=[];return e.replace(B,"").replace(J,function(e,n,r){r&&t.push(r)}),t}function t(e,t){this.uri=e,this.dependencies=t||[],this.exports=null,this.status=0,this._waitings={},this._remain=0}if(!n.seajs){var v=n.seajs={version:"2.2.0"},b=v.data={},y=c("Object"),w=c("String"),E=Array.isArray||c("Array"),x=c("Function"),S=0,I=b.events={};v.on=function(e,t){return(I[e]||(I[e]=[])).push(t),v},v.off=function(e,t){if(!e&&!t)return I=b.events={},v;var n=I[e];if(n)if(t)for(var r=n.length-1;r>=0;r--)n[r]===t&&n.splice(r,1);else delete I[e];return v};var _=v.emit=function(e,t){var n,r=I[e];if(r)for(r=r.slice();n=r.shift();)n(t);return v},T=/[^?#]*\//,A=/\/\.\//g,D=/\/[^\/]+\/\.\.\//,C=/([^:\/])\/\//g,O=/^([^\/:]+)(\/.+)$/,U=/{([^{]+)}/g,H=/^\/\/.|:\//,L=/^.*?\/\/.*?\//,F=document,N=e(F.URL),$=F.scripts,R=F.getElementById("seajsnode")||$[$.length-1],M=e(function(e){return e.hasAttribute?e.src:e.getAttribute("src",4)}(R)||N);v.resolve=m;var P,V,G=F.getElementsByTagName("head")[0]||F.documentElement,K=G.getElementsByTagName("base")[0],W=/\.css(?:\?|$)/i,Y=+navigator.userAgent.replace(/.*AppleWebKit\/(\d+)\..*/,"$1")<536;v.request=o;var X,J=/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|\/\*[\S\s]*?\*\/|\/(?:\\\/|[^\/\r\n])+\/(?=[^\/])|\/\/.*|\.\s*require|(?:^|[^$])\brequire\s*\(\s*(["'])(.+?)\1\s*\)/g,B=/\\\\/g,Q=v.cache={},z={},Z={},ee={},te=t.STATUS={FETCHING:1,SAVED:2,LOADING:3,LOADED:4,EXECUTING:5,EXECUTED:6};t.prototype.resolve=function(){for(var e=this,n=e.dependencies,r=[],i=0,o=n.length;o>i;i++)r[i]=t.resolve(n[i],e.uri);return r},t.prototype.load=function(){var e=this;if(!(e.status>=te.LOADING)){e.status=te.LOADING;var n=e.resolve();_("load",n);for(var r,i=e._remain=n.length,o=0;i>o;o++)r=t.get(n[o]),r.status<te.LOADED?r._waitings[e.uri]=(r._waitings[e.uri]||0)+1:e._remain--;if(0===e._remain)return e.onload(),u;var a={};for(o=0;i>o;o++)r=Q[n[o]],r.status<te.FETCHING?r.fetch(a):r.status===te.SAVED&&r.load();for(var s in a)a.hasOwnProperty(s)&&a[s]()}},t.prototype.onload=function(){var e=this;e.status=te.LOADED,e.callback&&e.callback();var t,n,r=e._waitings;for(t in r)r.hasOwnProperty(t)&&(n=Q[t],n._remain-=r[t],0===n._remain&&n.onload());delete e._waitings,delete e._remain},t.prototype.fetch=function(e){function c(){v.request(i.requestUri,i.onRequest,i.charset)}function d(){delete z[o],Z[o]=!0,X&&(t.save(r,X),X=null);var e,n=ee[o];for(delete ee[o];e=n.shift();)e.load()}var n=this,r=n.uri;n.status=te.FETCHING;var i={uri:r};_("fetch",i);var o=i.requestUri||r;return!o||Z[o]?(n.load(),u):z[o]?(ee[o].push(n),u):(z[o]=!0,ee[o]=[n],_("request",i={uri:r,requestUri:o,onRequest:d,charset:b.charset}),i.requested||(e?e[i.requestUri]=c:c()),u)},t.prototype.exec=function(){function a(e){return t.get(a.resolve(e)).exec()}var e=this;if(e.status>=te.EXECUTING)return e.exports;e.status=te.EXECUTING;var n=e.uri;a.resolve=function(e){return t.resolve(e,n)},a.async=function(e,r){return t.use(e,r,n+"_async_"+d()),a};var r=e.factory,i=x(r)?r(a,e.exports={},e):r;return i===u&&(i=e.exports),delete e.factory,e.exports=i,e.status=te.EXECUTED,_("exec",e),i},t.resolve=function(e,t){var n={id:e,refUri:t};return _("resolve",n),n.uri||v.resolve(n.id,t)},t.define=function(e,n,i){var o=arguments.length;1===o?(i=e,e=u):2===o&&(i=n,E(e)?(n=e,e=u):n=u),!E(n)&&x(i)&&(n=s(""+i));var a={id:e,uri:t.resolve(e),deps:n,factory:i};if(!a.uri&&F.attachEvent){var c=r();c&&(a.uri=c.src)}_("define",a),a.uri?t.save(a.uri,a):X=a},t.save=function(e,n){var r=t.get(e);r.status<te.SAVED&&(r.id=n.id||e,r.dependencies=n.deps||[],r.factory=n.factory,r.status=te.SAVED)},t.get=function(e,n){return Q[e]||(Q[e]=new t(e,n))},t.use=function(e,r,i){var o=t.get(i,E(e)?e:[e]);o.callback=function(){for(var e=[],t=o.resolve(),i=0,a=t.length;a>i;i++)e[i]=Q[t[i]].exec();r&&r.apply(n,e),delete o.callback},o.load()},t.preload=function(e){var n=b.preload,r=n.length;r?t.use(n,function(){n.splice(0,r),t.preload(e)},b.cwd+"_preload_"+d()):e()},v.use=function(e,n){return t.preload(function(){t.use(e,n,b.cwd+"_use_"+d())}),v},t.define.cmd={},n.define=t.define,v.Module=t,b.fetchedList=Z,b.cid=d,v.require=function(e){var n=t.get(t.resolve(e));return n.status<te.EXECUTING&&n.exec(),n.exports};var ne=/^(.+?\/)(\?\?)?(seajs\/)+/;b.base=(M.match(ne)||["",M])[1],b.dir=M,b.cwd=N,b.charset="utf-8",b.preload=function(){var e=[],t=location.search.replace(/(seajs-\w+)(&|$)/g,"$1=1$2");return t+=" "+F.cookie,t.replace(/(seajs-\w+)=1/g,function(t,n){e.push(n)}),e}(),v.config=function(e){for(var t in e){var n=e[t],r=b[t];if(r&&y(r))for(var i in n)r[i]=n[i];else E(r)?n=r.concat(n):"base"===t&&("/"!==n.slice(-1)&&(n+="/"),n=l(n)),b[t]=n}return _("config",e),v}}}(window),function(){function a(e){var t=e.length;if(!(t<2)){s.comboSyntax&&(p=s.comboSyntax),s.comboMaxLength&&(v=s.comboMaxLength),n=s.comboExcludes;for(var i=[],a=0;t>a;a++){var f=e[a];if(!u[f]){r.get(f).status<o&&!l(f)&&!m(f)&&i.push(f)}}i.length>1&&g(c(i))}}function b(e){e.requestUri=u[e.uri]||e.uri}function c(t){return e(d(t))}function d(e){for(var t={__KEYS:[]},n=0,r=e.length;r>n;n++)for(var i=e[n].replace("://","__").split("/"),o=t,a=0,s=i.length;s>a;a++){var c=i[a];o[c]||(o[c]={__KEYS:[]},o.__KEYS.push(c)),o=o[c]}return t}function e(e){for(var t=[],n=e.__KEYS,r=0,i=n.length;i>r;r++){for(var o=n[r],a=o,s=e[o],c=s.__KEYS;1===c.length;)a+="/"+c[0],s=s[c[0]],c=s.__KEYS;c.length&&t.push([a.replace("__","://"),f(s)])}return t}function f(e){for(var t=[],n=e.__KEYS,r=0,i=n.length;i>r;r++){var o=n[r],a=f(e[o]),s=a.length;if(s)for(var c=0;s>c;c++)t.push(o+"/"+a[c]);else t.push(o)}return t}function g(e){for(var t=0,n=e.length;n>t;t++)for(var r=e[t],i=r[0]+"/",o=j(r[1]),a=0,s=o.length;s>a;a++)h(i,o[a]);return u}function h(e,t){var n=e+p[0]+t.join(p[1]),r=n.length>v;if(t.length>1&&r){var o=i(t,v-(e+p[0]).length);h(e,o[0]),h(e,o[1])}else{if(r)throw new Error("The combo url is too long: "+n);for(var a=0,s=t.length;s>a;a++)u[e+t[a]]=n}}function i(e,t){for(var n=p[1],r=e[0],i=1,o=e.length;o>i;i++)if(r+=n+e[i],r.length>t)return[e.splice(0,i),e]}function j(e){for(var t=[],n={},r=0,i=e.length;i>r;r++){var o=e[r],a=k(o);a&&(n[a]||(n[a]=[])).push(o)}for(var s in n)n.hasOwnProperty(s)&&t.push(n[s]);return t}function k(e){var t=e.lastIndexOf(".");return t>=0?e.substring(t):""}function l(e){return n?n.test?n.test(e):n(e):void 0}function m(e){var t=s.comboSyntax||["??",","],n=t[0],r=t[1];return n&&e.indexOf(n)>0||r&&e.indexOf(r)>0}var n,r=seajs.Module,o=r.STATUS.FETCHING,s=seajs.data,u=s.comboHash={},p=["??",","],v=2e3;if(seajs.on("load",a),seajs.on("fetch",b),s.test){var y=seajs.test||(seajs.test={});y.uris2paths=c,y.paths2hash=g}t.exports={}}(),function(e,t){!function(){var e=navigator.userAgent.toLowerCase();"undefined"==typeof t.browser?t.browser={version:(e.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[])[1],safari:/webkit/.test(e),opera:/opera/.test(e),msie:/msie/.test(e)&&!/opera/.test(e)||/trident/.test(e),mozilla:/mozilla/.test(e)&&!/(compatible|webkit)/.test(e)}:(t.browser.webkit||(t.browser.webkit=/webkit/.test(e)),t.browser.mozilla&&(t.browser.msie=/trident/.test(e))),t.extend(t.browser,function(){var e=navigator.userAgent;return navigator.appVersion,{mobile:!!e.match(/AppleWebKit.*Mobile.*/),ios:!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:e.indexOf("Android")>-1||e.indexOf("Linux")>-1,iPhone:e.indexOf("iPhone")>-1,iPad:e.indexOf("iPad")>-1,webApp:-1==e.indexOf("Safari")}}()),t.browser.isMobile=function(e){return function(){return e}}(t.browser.mobile||t.browser.ios||t.browser.android),t.each([6,7,8,9,10,11,12],function(e,n){t.browser["isIE"+n]=function(e){return function(){return e}}(!(!t.browser.msie||t.browser.version!=n))})}(),t.page=t.extend(t.page||{},{document:"BackCompat"==document.compatMode?document.body:document.documentElement,doc:function(){function doc(){return this.document}return doc}(),clientWidth:function(){function clientWidth(){return this.document.clientWidth}return clientWidth}(),clientHeight:function(){function clientHeight(){return this.document.clientHeight}return clientHeight}(),docWidth:function(){function docWidth(){return Math.max(this.document.clientWidth,this.document.scrollWidth)}return docWidth}(),docHeight:function(){function docHeight(){return Math.max(this.document.clientHeight,this.document.scrollHeight)}return docHeight}()}),"undefined"==typeof t.contains&&(t.contains=function(e,t){return e.compareDocumentPosition?!!(16&e.compareDocumentPosition(t)):e!==t&&e.contains(t)}),t.T={throttle:function(){function throttle(e,n,r){var i=-1;return n<1?function(){t.T.call(null,r,-1);try{e.apply(this,arguments)}catch(n){console.error(n)}}:function(){var o=arguments,a=this;clearTimeout(i),i=setTimeout(function(){clearTimeout(i);try{e.apply(a,o)}catch(t){console.error(t)}},n),t.T.call(null,r,i)}}return throttle}(),call:function(){function call(e,n){var r=1,i=this,o=e;t.isFunction(e)||(i=e,o=n,r=2),t.isFunction(o)&&o.apply(i,[].slice.call(arguments,r))}return call}(),apply:function(){function apply(e,n,r){var i=e,o=n,a=r;t.isFunction(e)&&(i=this,o=e,a=n),t.isFunction(o)&&o.apply(i,[].concat(a))}return apply}(),tpl:function(){var e={};return function(t,n,r){var i="string"==typeof r?r:t,o="boolean"!=typeof r||r,a=e[i]||new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+t.replace(/[\r\t\n]/g," ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');");return o&&(e[i]=a),n?a(n):a}}(),isBlank:function(){function isBlank(e){var n=arguments;if(n.length>1){for(var r=0,i=n.length;i>r;r++)if(arguments.callee(n[r]))return!0;return!1}return"undefined"===String(e)||"null"===String(e)||"string"==typeof e&&""===t.trim(e)||t.isEmptyObject(e)}return isBlank}(),search:function(){var e={},n="_@separating@_";return t.each(location.search.substring(1).split("&"),function(r,i){if(i=i.replace(/\%20/g,"").replace("=",n).split(n),i[0])if("isdebug"==i[0]&&i[1]){var o={};t.each(i[1].replace(/^\-/,"").split("-"),function(e,t){t&&(o[t]=!0)}),e[i[0]]=o}else e[i[0]]=i[1]}),function(n,r){if(!n)return e;if(!t.isPlainObject(n)&&null==r)return e[n];if("isdebug"==n)return!(!e[n]||!e[n][r]);var i=arguments.callee;if(t.isPlainObject(n)){var o=!0,a=0==r;return t.each(n,function(e,t){var n=i(e,t);return a&&n?(o=!0,!1):a||n?void 0:o=!1}),o}return!(!e[n]||e[n]!=r)}}(),getAllUI:function(){function getAllUI(e){var n=[];return t.each(JDFUI.classes(),function(t){n=n.concat(JDFUI[t].get(e))}),n}return getAllUI}()},t.tpl=t.T.tpl,t.T.defer=t.T.throttle}(window,jQuery),function(e){if(e.browser.isMobile()){var t,n,r=function(e){return"tagName"in e?e:e.parentNode},i=function(e,t,n,r){return Math.abs(e-t)>=Math.abs(n-r)?e-t>0?"Left":"Right":n-r>0?"Up":"Down"},o=function(){n=null,s.last&&(s.el.trigger("longTap"),s={})},a=function(){n&&clearTimeout(n),n=null},s={};e(document).ready(function(){var c,u;e(document.body).bind("touchstart",function(i){c=Date.now(),u=c-(s.last||c),s.el=e(r(i.target)),t&&clearTimeout(t),s.x1=i.pageX,s.y1=i.pageY,u>0&&u<=250&&(s.isDoubleTap=!0),s.last=c,n=setTimeout(o,750)}).bind("touchmove",function(e){a(),s.x2=e.pageX,s.y2=e.pageY}).bind("touchend",function(){a(),s.isDoubleTap?(s.el.trigger("doubleTap"),s={}):s.x2&&Math.abs(s.x1-s.x2)>30||s.y2&&Math.abs(s.y1-s.y2)>30?(s.el.trigger("swipe")&&s.el.trigger("swipe"+i(s.x1,s.x2,s.y1,s.y2)),s={}):"last"in s&&(s.el.trigger("tap"),t=setTimeout(function(){t=null,s.el.trigger("singleTap"),s={}},250))}).bind("touchcancel",function(){t&&clearTimeout(t),n&&clearTimeout(n),n=t=null,s={}})}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(t){e.fn[t]=function(e){return this.bind(t,e)}})}}($),function(r,i,a){if(!i)return!1;var c=r.JDFUI;if(c&&"2.0.0"==c.version&&"JDF"==c.author||(c=function(){function d(){}function G(e,t){this.name=e,this.ui=t}function H(e){var t=this;t.data={},t.event={},t.eventIDs={},t.instance=e}function I(e,t){return t.toString=function(){return e+" { [native code] }"},t}function J(e){var t=e.uuid,n=q[t],r=n.length;i.each(n,function(t,r){return r.id==e.id?(n.splice(t,1),!1):void 0}),W(t,r)}function K(e){var t=e.options;if(t.hasCssLink&&"undefined"!=typeof seajs&&t.cssLinkVersion&&t.baseVersion)seajs.use(("https:"==document.location.protocol?"https:":"http:")+"//misc.360buyimg.com/jdf/"+t.baseVersion+"/ui/"+e.name+"/"+t.cssLinkVersion+"/"+e.name+".css",function(){t.isAutoInit&&e.init()});else if(t.isAutoInit){var n=e.init();!1!==n||e.isAdvanced||J(e)}}function L(e,t){if(!i.isPlainObject(e))return"";if(!i.isArray(t))return"";var n=[],r="";return i.each(t,function(t,o){r=e[o],f.test(o)&&r instanceof i&&(r=r.selector),n.push(o+":"+String(r))}),n.join(",")}function M(e,t,n){var r=n.SSCode;if(r>0){var o=ee[e].get(t);if(o.length){if(n.SSKeys){var a=L(n,n.SSKeys),s=[];if(a&&i.each(o,function(e,t){L(t.cache("options"),n.SSKeys)==a&&s.push(t)}),!s.length)return!0;o=s}switch(r%2!=0&&console.warn(t,t.selector+" has been bind "+e+" component!",o),r){case 1:break;case 2:return o[0];case 3:return!1}}}return!0}function N(e){e.cache("options",i.extend({},e.options,!0)),Q(e),T(e),U(e)}function O(e){e.cache("options",i.extend({},e.options,!0)),i.each(e.options,function(t,n){D.test(t.toLowerCase())&&i.isFunction(e.options[t])&&(e.options[t]=function(e){var t=[e],n=function(){var e=this,n=arguments;i.each(t,function(t,r){r.apply(e,n)})};return n.callbacks=t,n.add=function(e){n.callbacks.push(e)},n}(n))})}function P(){var e,t=this,n=t.options,r=t.cache("options"),o={};i.each([].slice.call(arguments,0),function(a,s){e?(n[e]=o[e]=r[e]=s,e=null):i.isPlainObject(s)?(o=s,i.extend(r,o),i.extend(t.options,o)):e=String(s).replace(C,"")}),t.cache("options",r),t.cache("origin_options",i.extend(t.cache("origin_options"),o)),i.each(o,function(e,n){R(t,e,n)})}function Q(e){i.each(e.options,function(t,n){R(e,t,n)})}function R(e,t,n){if((p.test(t)||"evt"==t)&&n)e.options[t]=S(e,n);else if(g.test(t)){var r=t.substring(2);e.on(r+"#__id_"+e.id,n),e.options[t]=I(t,function(){var t=[].slice.call(arguments);t.unshift(r),e.trigger.apply(null,t)})}}function S(e,t){return t+e.eventNamespace}function T(e){var t={};i.each(c,function(n,r){t[r]=S(e,r)}),e.event=t}function U(e){var t=e.init;e.init=I("init",function(){var n={};return e.unbindEvent(),e.initCount++,arguments.length&&P.apply(e,arguments),e.loadAllEls(),$(e),i.isFunction(t)&&!1===(n=t.apply(e,arguments))?void 0:(i.T.call(e,e.options.onReady,n),e)})}function V(e,t){var n,o=t.attr(E),a=null,s=t[0].attributes;if(o&&o.length>2)try{a=r.eval("("+o+")")}catch(l){}return a||(a={}),s&&s.length&&i.each(s,function(t,r){0==r.name.indexOf(j)&&r.name.length>9&&(n=r.name.substring(9).toLocaleLowerCase(),i.each(e,function(e){e.toLocaleLowerCase()==n&&(a[e]=r.value)}))}),a}function W(e,t){t=Math.max(t||0,q[e].length);for(var n=0;t>n;n++)delete ee[e][n];i.each(q[e],function(t,n){ee[e][t]=n})}function X(e){return i.fn[e]?(i.T.search("isdebug",1)&&console.warn('$.fn["'+e+'"] is exist!'),!1):void(i.fn[e]=function(t,n){return ee[e].create(this,t,n)})}function Y(e){var t="get"+e.replace(l,function(e){return e.toUpperCase()});return i.fn[t]?(i.T.search("isdebug",1)&&console.warn("$.fn["+t+"] is exist!"),!1):void(i.fn[t]=function(){return ee[e].get(this)})}function Z(t,n){function e(e){return e?(e.el instanceof i||(e.el=i(e.el?e.el:"body")),ee[r].create(e.el,e)):t}var r=t.uuid;return G.createClass(r,e),i.each(t,function(t,n){i.isFunction(n)&&!F.test(t)&&(e.all[t]=function(){var n=arguments;return e.forEach(function(){this[t].apply(this,n)}),e.all})}),i.each(n||[],function(t,n){e[t]=n}),e}function $(e){i.T.search("isdebug",1)&&ee.helper(function(){var t=this;t&&i.T.call(t.test,e)})}function _(e,t){i.each(s,function(n,r){t[r]!==a&&console.error("SyntaxError: "+e+"."+r+"  is a reserved identifier")})}"undefined"==typeof console&&(r.console={info:d,log:d,warn:d,error:d});var t=-1,n={id:-1,uuid:null,guid:-1,name:null,version:"2.0.0",el:null,selector:null,eventNamespace:null,options:{isAutoInit:!0,hasCssLink:!1,baseVersion:"1.0.0",cssLinkVersion:"1.0.0"},constructor:function(){function constructor(){}return constructor}(),init:d,cache:function(){function cache(){}return cache}(),show:function(){function show(){this.el.show()}return show}(),hide:function(){function hide(){this.el.hide()}return hide}()},o={isAdvanced:!0,initCount:0,_:{},event:{},isAlive:!0,options:{SSCode:0,SSKeys:null,hasCssLink:!1,onReady:d,onDestroy:d},on:function(){function on(){}return on}(),one:function(){function one(){}return one}(),off:function(){function off(){}return off}(),trigger:function(){function trigger(){}return trigger}(),eventHandler:function(){function eventHandler(){}return eventHandler}(),delegate:function(){function delegate(){}return delegate}(),call:function(){function call(e){if(i.isFunction(e)){var t=[].slice.call(arguments,1);e.apply(this,t)}}return call}(),unbindEvent:d,loadAllEls:d,destroy:d},s=["id","guid","name","eventNamespace","selector","cache"],c="abort,blur,change,click,dblclick,drag,dragend,dragenter,dragleave,dragover,dragstart,drop,durationchange,focus,input,keydown,keypress,keyup,mousedown,mouseenter,mouseleave,mousemove,mouseout,mouseover,mouseup,mousewheel,scroll,select,submit,wheel".split(","),l=/\b(\w)/g,f=/El$/,p=/Evt$/,h=/\btimer\b|Timer$/,v=/\binterval\b|Interval$/,g=/^on[A-Z]/,m=/\w\#\w/,b=/^(author|version|define|all|classes|helper|loadRootUI|gc)$/,y=/\w+#$/,w=/#\w*/,E="data-options",j="data-opt-",x="ui-on-event",A=/^(el|selector|hover)$/,D=/^on|callback|complete$/,C=/\s+/g,k=/^static_/,F=/^(create|get|all|forEach)$/,q={},B={},z={create:function(){function create(e,n,r){var o=B[n],a=i(e);if(!o)return null;var s=V(o.options||{},a),c=i.extend(!0,{},o,{options:s},{options:r,guid:t+1,id:o.id+1});c.el=a,c.selector=a.selector=e.selector,c.eventNamespace=".ui-"+n+"-"+c.id;var u=c.options;if("1.0.0"==u.baseVersion)O(c);else{var l=M(n,a,u);if(!l)return!1;if(!0!==l)return l.selector=e.selector,l.init(r),l.cache("origin_options",i.extend(c.cache("origin_options"),r)),l;H.createClass(c),c.cache("origin_options",r),N(c)}return q[n].push(c),W(n),B[n].id++,t++,K(c),c}return create}(),register:function(){function register(e,t){var r=B[t.uuid];if(r)return!1;var a=this.getClasses(t.extend),s={};return t.isAdvanced&&(s=o),a.length?r=i.extend.apply(i,[!0,{},n,s].concat(a).concat([t])):(_(t.uuid,t),r=i.extend(!0,{},n,s,t)),B[t.uuid]=r,r.name=e,q[t.uuid]=[],!0}return register}(),getClasses:function(){function getClasses(e){var t=[],n=null,r=[];return e?(i.isArray(e)?r=e:r.push(e),i.each(r,function(e,r){if(!(n=B[r]))throw new Error(r+" is not exist!");t.push(n)}),t):t}return getClasses}()},ee={author:"JDF",version:"2.0.0",define:I("define",function(e,t){if(!e||!t||"string"!=typeof e||b.test(e)||!i.isPlainObject(t))return!1;t.options=t.options||{},t.options.baseVersion=t.options.baseVersion||"1.0.0";var n={};return i.each(t,function(e,r){if(k.test(e)){var i=e.substring(7);t[i]&&console.warn('static method "'+e+'" will be overwrite "'+i+'" method! '),t[i]=n[i]=r,delete t[e]}}),y.test(e)?(e=e.replace(w,""),t.isAdvanced=!0,t.options.baseVersion="2.0.0"):t.isAdvanced=!1,t.uuid=e+(t.isAdvanced?2:1),ee[t.uuid]?ee[t.uuid]:!!z.register(e,t)&&(ee[t.uuid]=Z(B[t.uuid],n),ee[e]||(ee[e]=ee[t.uuid]),X(e),Y(e),ee[t.uuid])}),all:I("all",function(){return i.extend(!0,{},q)}),classes:I("classes",function(){return i.extend(!0,{},B)}),helper:I("helper",function(e){if("object"!==("undefined"==typeof seajs?"undefined":u(seajs)))return console.warn("require seajs.js!"),!1;var t=["jdf/2.0.0/ui/helper/1.0.0/helper.js"];i.each(B,function(e,n){n.isAdvanced&&t.push("jdf/"+n.options.baseVersion+"/ui/"+n.name+"/"+n.options.cssLinkVersion+"/helper.js")}),t.length&&seajs.use(t,function(t){i.T.call(t,e,q)})}),loadRootUI:I("loadRootUI",function(){var e="data-root-ui",t="data-root-ui-url",n="data-root-install",r=[],o=i("["+e+"]["+n+'!="done"]');return o.each(function(){var n=i(this),o=n.attr(e),a=n.attr(t);return!(a||!b.test(o))||void r.push(a||"jdf/2.0.0/ui/"+o+"/1.0.0/"+o+".js")}),!!r.length&&void seajs.use(r,function(){o.each(function(){var r=i(this),o=r.attr(e),a=ee[o+"2"];if(!a||!r.attr(t)&&b.test(o))return!0;var s=a({el:r,isAutoInit:!1});return!s||(s.on("ready",function(){r.attr(n,"done")}),void s.init())})})}),gc:I("gc",function(){var e=te.list;return!!e.length&&(i.each(e,function(e,t){delete t.data,delete t.event,delete t.eventIDs,i.each(t.instance,function(e){delete t.instance[e]}),delete t.instance}),te.list=[],!0)})},te={list:[],push:function(){function push(e){this.list.push(e),this.clear()}return push}(),clear:i.T.throttle(function(){ee.gc()},3e3)};return G.createClass=function(e,t){var n=new G(e,t);i.each(["create","get","forEach"],function(e,r){t[r]=I(r,function(){return n[r].apply(n,arguments)})}),t.all=q[e]},G.prototype.create=function(e,t,n){var r=this.name,o=[],a=e.selector;return i.each(e,function(e,n){n.selector=a+":eq("+e+")",o.push(z.create(n,r,t))}),1==n?this:1==o.length?o.pop():o},G.prototype.get=function(e){var t=this.name,n=[];return e instanceof i&&i.each(e,function(e,r){r=i(r).get(0),i.each(q[t],function(e,t){r==t.el.get(0)&&n.push(t)})}),n.length&&i.each(n[0],function(e,t){i.isFunction(t)&&!F.test(e)&&(n[e]=function(){var t=arguments;return i.each(n,function(){this[e].apply(this,t)}),n})}),n},G.prototype.forEach=function(e){if(i.isFunction(e))for(var t=q[this.name],n=t.length-1;n>=0;n--)e.call(t[n],n,t[n]);return this.ui},H.createClass=function(e){var t=new H(e);i.each(["on","one","off","trigger","eventHandler","delegate"],function(n,r){e[r]=I(r,function(){return t[r].apply(t,arguments),e})}),e.cache=I("cache",function(){return t.cache.apply(t,arguments)});var n=i.isFunction(e.unbindEvent)?e.unbindEvent:d;e.unbindEvent=I("unbindEvent",function(){return t.unbindEvent.apply(t,arguments),n.apply(e,arguments),e});var r=i.isFunction(e.loadAllEls)?e.loadAllEls:d;e.loadAllEls=I("loadAllEls",function(){return t.loadAllEls.apply(t,arguments),r.apply(e,arguments),e});var o=i.isFunction(e.destroy)?e.destroy:d;e.destroy=I("destroy",function(){return o.apply(e,arguments),i.T.call(e,e.options.onDestroy),t.destroy.apply(t,arguments),e})},H.prototype.cache=function(e,t){var n=this;if(e)return t===a?n.data[e]:null!==t?n.data[e]=t:void delete n.data[e]},H.prototype.on=function(e,t){if(e&&i.isFunction(t)){var n=this;if(e=e.toLowerCase(),m.test(e)){var r=e.split("#");if(n.eventIDs[e])return n.off(e,n.eventIDs[e]),n.on(e,t),!1;n.eventIDs[e]=t,e=r[0]}n.event[e]=(n.event[e]||[]).concat([t])}},H.prototype.one=function(e,t){if(e&&i.isFunction(t)){var n=this;e=e.toLowerCase(),n.on(e,function(){return t.apply(this,arguments),n.off(e,arguments.callee),x})}},H.prototype.off=function(e,t){if(e||i.isFunction(t)){var n=this;if(e=e.toLowerCase(),m.test(e)){var r=e.split("#");if(!n.eventIDs[e])return!1;t=n.eventIDs[e],delete n.eventIDs[e],e=r[0]}else i.each(n.eventIDs,function(t){0==t.indexOf(e+"#")&&delete n.eventIDs[t]});var o=n.event[e]||[];if(i.isFunction(t)){for(var a=o.length-1;a>=0;a--)if(o[a],o[a]==t){o.splice(a,1);break}}else o=[];n.event[e]=o}},H.prototype.trigger=function(e,t){if(e){var n=this,r=n.instance;if(e=e.toLowerCase(),n.event[e]){t=[].slice.call(arguments,1);for(var o=0;o<n.event[e].length;o++){var a=n.event[e][o];i.isFunction(a)&&(o-=a.apply(r,t)==x?1:0)}}}},H.prototype.eventHandler=function(e){var t=this,n=t.instance;if(!e)return n;if(e.el=e.el||n.el,i.each(e,function(t,r){A.test(t)||(e.selector?e.el.delegate(e.selector,S(n,t),r):e.el.bind(S(n,t),r))}),e.hover){var r=e.hover;i.isArray(r)?1==r.length&&r.push(r[0]):r=[r,r],arguments.callee.call(t,{el:e.el,selector:e.selector,mouseenter:r[0],mouseleave:r[1]})}return n},H.prototype.delegate=function(e,t,n){var r=this.instance;e instanceof i?e.bind(t,n):"string"==typeof e&&r.el.delegate(e,t,n)},H.prototype.unbindEvent=function(){var e=this,t=e.instance;t.el.unbind(t.eventNamespace),i.each(t.options,function(e,n){f.test(e)&&n instanceof i&&n.unbind(t.eventNamespace)}),!i.isEmptyObject(t._)&&i.isPlainObject(t._)&&i.each(t._,function(e,n){f.test(e)&&n instanceof i?n.unbind(t.eventNamespace):h.test(e)?clearTimeout(n):v.test(e)&&clearInterval(n)})},H.prototype.loadAllEls=function(){var e=this,t=e.instance,n=t.cache("options"),r=null;i.each(n,function(e,n){!f.test(e)||n instanceof i||(n?(t.options[e]=i(n,t.el),t.options[e.replace(f,"")+"Selector"]=n):(n='[data-root="'+e.substring(0,e.length-2)+'"]',r=i(n,t.el),r.length&&(t.options[e]=r,t.options[e.replace(f,"")+"Selector"]=n)))})},H.prototype.destroy=function(){var e=this,t=e.instance;t.unbindEvent(),t.isAlive=!1,J(t),te.push(e)},r.JDFUI=ee,i(function(){ee.loadRootUI()}),ee}()),o=[],(s=function(){return c}.apply(n,o))!==undefined&&(t.exports=s),!i.ui&&(i.ui=c,r.seajs&&i.isPlainObject(seajs.data)&&i.isArray(seajs.data.preload))){for(var l=seajs.data.preload,f=l.length-1;f>=0;f--)-1!=l[f].indexOf("//misc.360buyimg.com/jdf/1.0.0/ui/ui/1.0.0/ui.js")&&l.splice(f,1);seajs.data.preload=l}}(window,jQuery),seajs.config({base:("https:"==document.location.protocol?"https://":"http://")+"misc.360buyimg.com/"})}});