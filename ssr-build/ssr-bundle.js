module.exports=function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/advent-of-code-2021/",t(t.s="qVkA")}({HteQ:function(e,n){e.exports=require("preact")},RoC8:function(e,n){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},Y3FI:function(e,n,t){"use strict";t.r(n),t.d(n,"subscribers",(function(){return d})),t.d(n,"getCurrentUrl",(function(){return f})),t.d(n,"route",(function(){return x})),t.d(n,"Router",(function(){return w})),t.d(n,"Route",(function(){return k})),t.d(n,"Link",(function(){return M})),t.d(n,"exec",(function(){return l}));var r=t("HteQ"),o={};function i(e,n){for(var t in n)e[t]=n[t];return e}function l(e,n,t){var r,i=/(?:\?([^#]*))?(#.*)?$/,l=e.match(i),a={};if(l&&l[1])for(var c=l[1].split("&"),p=0;p<c.length;p++){var u=c[p].split("=");a[decodeURIComponent(u[0])]=decodeURIComponent(u.slice(1).join("="))}e=s(e.replace(i,"")),n=s(n||"");for(var y=Math.max(e.length,n.length),d=0;d<y;d++)if(n[d]&&":"===n[d].charAt(0)){var h=n[d].replace(/(^:|[+*?]+$)/g,""),f=(n[d].match(/[+*?]+$/)||o)[0]||"",x=~f.indexOf("+"),m=~f.indexOf("*"),j=e[d]||"";if(!j&&!m&&(f.indexOf("?")<0||x)){r=!1;break}if(a[h]=decodeURIComponent(j),x||m){a[h]=e.slice(d).map(decodeURIComponent).join("/");break}}else if(n[d]!==e[d]){r=!1;break}return(!0===t.default||!1!==r)&&a}function a(e,n){return e.rank<n.rank?1:e.rank>n.rank?-1:e.index-n.index}function c(e,n){return e.index=n,e.rank=function(e){return e.props.default?0:(n=e.props.path,s(n).map(p).join(""));var n}(e),e.props}function s(e){return e.replace(/(^\/+|\/+$)/g,"").split("/")}function p(e){return":"==e.charAt(0)?1+"*+?".indexOf(e.charAt(e.length-1))||4:5}var u=null,y=[],d=[],h={};function f(){var e;return""+((e=u&&u.location?u.location:u&&u.getCurrentLocation?u.getCurrentLocation():"undefined"!=typeof location?location:h).pathname||"")+(e.search||"")}function x(e,n){return void 0===n&&(n=!1),"string"!=typeof e&&e.url&&(n=e.replace,e=e.url),function(e){for(var n=y.length;n--;)if(y[n].canRoute(e))return!0;return!1}(e)&&function(e,n){void 0===n&&(n="push"),u&&u[n]?u[n](e):"undefined"!=typeof history&&history[n+"State"]&&history[n+"State"](null,null,e)}(e,n?"replace":"push"),m(e)}function m(e){for(var n=!1,t=0;t<y.length;t++)!0===y[t].routeTo(e)&&(n=!0);for(var r=d.length;r--;)d[r](e);return n}function j(e){if(e&&e.getAttribute){var n=e.getAttribute("href"),t=e.getAttribute("target");if(n&&n.match(/^\//g)&&(!t||t.match(/^_?self$/i)))return x(n)}}function g(e){if(!(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||0!==e.button))return j(e.currentTarget||e.target||this),v(e)}function v(e){return e&&(e.stopImmediatePropagation&&e.stopImmediatePropagation(),e.stopPropagation&&e.stopPropagation(),e.preventDefault()),!1}function _(e){if(!(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||0!==e.button)){var n=e.target;do{if("A"===String(n.nodeName).toUpperCase()&&n.getAttribute("href")){if(n.hasAttribute("native"))return;if(j(n))return v(e)}}while(n=n.parentNode)}}var b=!1;var w=function(e){function n(n){e.call(this,n),n.history&&(u=n.history),this.state={url:n.url||f()},b||("function"==typeof addEventListener&&(u||addEventListener("popstate",(function(){m(f())})),addEventListener("click",_)),b=!0)}return e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n,n.prototype.shouldComponentUpdate=function(e){return!0!==e.static||(e.url!==this.props.url||e.onChange!==this.props.onChange)},n.prototype.canRoute=function(e){var n=Object(r.toChildArray)(this.props.children);return this.getMatchingChildren(n,e,!1).length>0},n.prototype.routeTo=function(e){this.setState({url:e});var n=this.canRoute(e);return this.updating||this.forceUpdate(),n},n.prototype.componentWillMount=function(){y.push(this),this.updating=!0},n.prototype.componentDidMount=function(){var e=this;u&&(this.unlisten=u.listen((function(n){e.routeTo(""+(n.pathname||"")+(n.search||""))}))),this.updating=!1},n.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),y.splice(y.indexOf(this),1)},n.prototype.componentWillUpdate=function(){this.updating=!0},n.prototype.componentDidUpdate=function(){this.updating=!1},n.prototype.getMatchingChildren=function(e,n,t){return e.filter(c).sort(a).map((function(e){var o=l(n,e.props.path,e.props);if(o){if(!1!==t){var a={url:n,matches:o};return i(a,o),delete a.ref,delete a.key,Object(r.cloneElement)(e,a)}return e}})).filter(Boolean)},n.prototype.render=function(e,n){var t=e.children,o=e.onChange,i=n.url,l=this.getMatchingChildren(Object(r.toChildArray)(t),i,!0),a=l[0]||null,c=this.previousUrl;return i!==c&&(this.previousUrl=i,"function"==typeof o&&o({router:this,url:i,previous:c,active:l,current:a})),a},n}(r.Component),M=function(e){return Object(r.createElement)("a",i({onClick:g},e))},k=function(e){return Object(r.createElement)(e.component,e)};w.subscribers=d,w.getCurrentUrl=f,w.route=x,w.Router=w,w.Route=k,w.Link=M,w.exec=l,n.default=w},kNYS:function(e,n,t){(function(e){var t,r,o,i;function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}"undefined"!=typeof self&&self,i=function(){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}({"./dist/icons.json":
/*!*************************!*\
        !*** ./dist/icons.json ***!
        \*************************/
/*! exports provided: activity, airplay, alert-circle, alert-octagon, alert-triangle, align-center, align-justify, align-left, align-right, anchor, aperture, archive, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, award, bar-chart-2, bar-chart, battery-charging, battery, bell-off, bell, bluetooth, bold, book-open, book, bookmark, box, briefcase, calendar, camera-off, camera, cast, check-circle, check-square, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, chrome, circle, clipboard, clock, cloud-drizzle, cloud-lightning, cloud-off, cloud-rain, cloud-snow, cloud, code, codepen, codesandbox, coffee, columns, command, compass, copy, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, cpu, credit-card, crop, crosshair, database, delete, disc, divide-circle, divide-square, divide, dollar-sign, download-cloud, download, dribbble, droplet, edit-2, edit-3, edit, external-link, eye-off, eye, facebook, fast-forward, feather, figma, file-minus, file-plus, file-text, file, film, filter, flag, folder-minus, folder-plus, folder, framer, frown, gift, git-branch, git-commit, git-merge, git-pull-request, github, gitlab, globe, grid, hard-drive, hash, headphones, heart, help-circle, hexagon, home, image, inbox, info, instagram, italic, key, layers, layout, life-buoy, link-2, link, linkedin, list, loader, lock, log-in, log-out, mail, map-pin, map, maximize-2, maximize, meh, menu, message-circle, message-square, mic-off, mic, minimize-2, minimize, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, mouse-pointer, move, music, navigation-2, navigation, octagon, package, paperclip, pause-circle, pause, pen-tool, percent, phone-call, phone-forwarded, phone-incoming, phone-missed, phone-off, phone-outgoing, phone, pie-chart, play-circle, play, plus-circle, plus-square, plus, pocket, power, printer, radio, refresh-ccw, refresh-cw, repeat, rewind, rotate-ccw, rotate-cw, rss, save, scissors, search, send, server, settings, share-2, share, shield-off, shield, shopping-bag, shopping-cart, shuffle, sidebar, skip-back, skip-forward, slack, slash, sliders, smartphone, smile, speaker, square, star, stop-circle, sun, sunrise, sunset, tablet, tag, target, terminal, thermometer, thumbs-down, thumbs-up, toggle-left, toggle-right, tool, trash-2, trash, trello, trending-down, trending-up, triangle, truck, tv, twitch, twitter, type, umbrella, underline, unlock, upload-cloud, upload, user-check, user-minus, user-plus, user-x, user, users, video-off, video, voicemail, volume-1, volume-2, volume-x, volume, watch, wifi-off, wifi, wind, x-circle, x-octagon, x-square, x, youtube, zap-off, zap, zoom-in, zoom-out, default */
function(e){e.exports={activity:'<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>',airplay:'<path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon>',"alert-circle":'<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',"alert-octagon":'<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',"alert-triangle":'<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>',"align-center":'<line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line>',"align-justify":'<line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line>',"align-left":'<line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line>',"align-right":'<line x1="21" y1="10" x2="7" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="7" y2="18"></line>',anchor:'<circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>',aperture:'<circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>',archive:'<polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line>',"arrow-down-circle":'<circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line>',"arrow-down-left":'<line x1="17" y1="7" x2="7" y2="17"></line><polyline points="17 17 7 17 7 7"></polyline>',"arrow-down-right":'<line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline>',"arrow-down":'<line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline>',"arrow-left-circle":'<circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line>',"arrow-left":'<line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>',"arrow-right-circle":'<circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line>',"arrow-right":'<line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>',"arrow-up-circle":'<circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line>',"arrow-up-left":'<line x1="17" y1="17" x2="7" y2="7"></line><polyline points="7 17 7 7 17 7"></polyline>',"arrow-up-right":'<line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>',"arrow-up":'<line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline>',"at-sign":'<circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>',award:'<circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>',"bar-chart-2":'<line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>',"bar-chart":'<line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line>',"battery-charging":'<path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"></path><line x1="23" y1="13" x2="23" y2="11"></line><polyline points="11 6 7 12 13 12 9 18"></polyline>',battery:'<rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect><line x1="23" y1="13" x2="23" y2="11"></line>',"bell-off":'<path d="M13.73 21a2 2 0 0 1-3.46 0"></path><path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path><path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path><path d="M18 8a6 6 0 0 0-9.33-5"></path><line x1="1" y1="1" x2="23" y2="23"></line>',bell:'<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>',bluetooth:'<polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"></polyline>',bold:'<path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>',"book-open":'<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>',book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>',bookmark:'<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>',box:'<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',briefcase:'<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>',calendar:'<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>',"camera-off":'<line x1="1" y1="1" x2="23" y2="23"></line><path d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"></path>',camera:'<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle>',cast:'<path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2.01" y2="20"></line>',"check-circle":'<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>',"check-square":'<polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>',check:'<polyline points="20 6 9 17 4 12"></polyline>',"chevron-down":'<polyline points="6 9 12 15 18 9"></polyline>',"chevron-left":'<polyline points="15 18 9 12 15 6"></polyline>',"chevron-right":'<polyline points="9 18 15 12 9 6"></polyline>',"chevron-up":'<polyline points="18 15 12 9 6 15"></polyline>',"chevrons-down":'<polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline>',"chevrons-left":'<polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline>',"chevrons-right":'<polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline>',"chevrons-up":'<polyline points="17 11 12 6 7 11"></polyline><polyline points="17 18 12 13 7 18"></polyline>',chrome:'<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>',circle:'<circle cx="12" cy="12" r="10"></circle>',clipboard:'<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>',clock:'<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>',"cloud-drizzle":'<line x1="8" y1="19" x2="8" y2="21"></line><line x1="8" y1="13" x2="8" y2="15"></line><line x1="16" y1="19" x2="16" y2="21"></line><line x1="16" y1="13" x2="16" y2="15"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="12" y1="15" x2="12" y2="17"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',"cloud-lightning":'<path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path><polyline points="13 11 9 17 15 17 11 23"></polyline>',"cloud-off":'<path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"></path><line x1="1" y1="1" x2="23" y2="23"></line>',"cloud-rain":'<line x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',"cloud-snow":'<path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path><line x1="8" y1="16" x2="8.01" y2="16"></line><line x1="8" y1="20" x2="8.01" y2="20"></line><line x1="12" y1="18" x2="12.01" y2="18"></line><line x1="12" y1="22" x2="12.01" y2="22"></line><line x1="16" y1="16" x2="16.01" y2="16"></line><line x1="16" y1="20" x2="16.01" y2="20"></line>',cloud:'<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>',code:'<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>',codepen:'<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line>',codesandbox:'<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',coffee:'<path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line>',columns:'<path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>',command:'<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>',compass:'<circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>',copy:'<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>',"corner-down-left":'<polyline points="9 10 4 15 9 20"></polyline><path d="M20 4v7a4 4 0 0 1-4 4H4"></path>',"corner-down-right":'<polyline points="15 10 20 15 15 20"></polyline><path d="M4 4v7a4 4 0 0 0 4 4h12"></path>',"corner-left-down":'<polyline points="14 15 9 20 4 15"></polyline><path d="M20 4h-7a4 4 0 0 0-4 4v12"></path>',"corner-left-up":'<polyline points="14 9 9 4 4 9"></polyline><path d="M20 20h-7a4 4 0 0 1-4-4V4"></path>',"corner-right-down":'<polyline points="10 15 15 20 20 15"></polyline><path d="M4 4h7a4 4 0 0 1 4 4v12"></path>',"corner-right-up":'<polyline points="10 9 15 4 20 9"></polyline><path d="M4 20h7a4 4 0 0 0 4-4V4"></path>',"corner-up-left":'<polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>',"corner-up-right":'<polyline points="15 14 20 9 15 4"></polyline><path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>',cpu:'<rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line>',"credit-card":'<rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line>',crop:'<path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"></path><path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"></path>',crosshair:'<circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line>',database:'<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>',delete:'<path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line>',disc:'<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle>',"divide-circle":'<line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line><circle cx="12" cy="12" r="10"></circle>',"divide-square":'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line>',divide:'<circle cx="12" cy="6" r="2"></circle><line x1="5" y1="12" x2="19" y2="12"></line><circle cx="12" cy="18" r="2"></circle>',"dollar-sign":'<line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>',"download-cloud":'<polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>',download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>',dribbble:'<circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>',droplet:'<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>',"edit-2":'<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>',"edit-3":'<path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>',edit:'<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>',"external-link":'<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>',"eye-off":'<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>',eye:'<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>',facebook:'<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>',"fast-forward":'<polygon points="13 19 22 12 13 5 13 19"></polygon><polygon points="2 19 11 12 2 5 2 19"></polygon>',feather:'<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line>',figma:'<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>',"file-minus":'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" y1="15" x2="15" y2="15"></line>',"file-plus":'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line>',"file-text":'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>',file:'<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline>',film:'<rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line>',filter:'<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>',flag:'<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line>',"folder-minus":'<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="9" y1="14" x2="15" y2="14"></line>',"folder-plus":'<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line>',folder:'<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>',framer:'<path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"></path>',frown:'<circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',gift:'<polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>',"git-branch":'<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>',"git-commit":'<circle cx="12" cy="12" r="4"></circle><line x1="1.05" y1="12" x2="7" y2="12"></line><line x1="17.01" y1="12" x2="22.96" y2="12"></line>',"git-merge":'<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path>',"git-pull-request":'<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line>',github:'<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>',gitlab:'<path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>',globe:'<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>',grid:'<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>',"hard-drive":'<line x1="22" y1="12" x2="2" y2="12"></line><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" y1="16" x2="6.01" y2="16"></line><line x1="10" y1="16" x2="10.01" y2="16"></line>',hash:'<line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line>',headphones:'<path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>',heart:'<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>',"help-circle":'<circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line>',hexagon:'<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>',home:'<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>',image:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline>',inbox:'<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>',info:'<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>',instagram:'<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>',italic:'<line x1="19" y1="4" x2="10" y2="4"></line><line x1="14" y1="20" x2="5" y2="20"></line><line x1="15" y1="4" x2="9" y2="20"></line>',key:'<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>',layers:'<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>',layout:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>',"life-buoy":'<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>',"link-2":'<path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line>',link:'<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>',linkedin:'<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>',list:'<line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>',loader:'<line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>',lock:'<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>',"log-in":'<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line>',"log-out":'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line>',mail:'<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>',"map-pin":'<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>',map:'<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line>',"maximize-2":'<polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line>',maximize:'<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>',meh:'<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="15" x2="16" y2="15"></line><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',menu:'<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>',"message-circle":'<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>',"message-square":'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>',"mic-off":'<line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',mic:'<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',"minimize-2":'<polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line>',minimize:'<path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>',"minus-circle":'<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line>',"minus-square":'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line>',minus:'<line x1="5" y1="12" x2="19" y2="12"></line>',monitor:'<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>',moon:'<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>',"more-horizontal":'<circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>',"more-vertical":'<circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle>',"mouse-pointer":'<path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path><path d="M13 13l6 6"></path>',move:'<polyline points="5 9 2 12 5 15"></polyline><polyline points="9 5 12 2 15 5"></polyline><polyline points="15 19 12 22 9 19"></polyline><polyline points="19 9 22 12 19 15"></polyline><line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line>',music:'<path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle>',"navigation-2":'<polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>',navigation:'<polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>',octagon:'<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>',package:'<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',paperclip:'<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>',"pause-circle":'<circle cx="12" cy="12" r="10"></circle><line x1="10" y1="15" x2="10" y2="9"></line><line x1="14" y1="15" x2="14" y2="9"></line>',pause:'<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>',"pen-tool":'<path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle>',percent:'<line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle>',"phone-call":'<path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',"phone-forwarded":'<polyline points="19 1 23 5 19 9"></polyline><line x1="15" y1="5" x2="23" y2="5"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',"phone-incoming":'<polyline points="16 2 16 8 22 8"></polyline><line x1="23" y1="1" x2="16" y2="8"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',"phone-missed":'<line x1="23" y1="1" x2="17" y2="7"></line><line x1="17" y1="1" x2="23" y2="7"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',"phone-off":'<path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path><line x1="23" y1="1" x2="1" y2="23"></line>',"phone-outgoing":'<polyline points="23 7 23 1 17 1"></polyline><line x1="16" y1="8" x2="23" y2="1"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',phone:'<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',"pie-chart":'<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path>',"play-circle":'<circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon>',play:'<polygon points="5 3 19 12 5 21 5 3"></polygon>',"plus-circle":'<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',"plus-square":'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',plus:'<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>',pocket:'<path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"></path><polyline points="8 10 12 14 16 10"></polyline>',power:'<path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line>',printer:'<polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect>',radio:'<circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>',"refresh-ccw":'<polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>',"refresh-cw":'<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>',repeat:'<polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path>',rewind:'<polygon points="11 19 2 12 11 5 11 19"></polygon><polygon points="22 19 13 12 22 5 22 19"></polygon>',"rotate-ccw":'<polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>',"rotate-cw":'<polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>',rss:'<path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle>',save:'<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline>',scissors:'<circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line>',search:'<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>',send:'<line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>',server:'<rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line>',settings:'<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>',"share-2":'<circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>',share:'<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line>',"shield-off":'<path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"></path><path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"></path><line x1="1" y1="1" x2="23" y2="23"></line>',shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>',"shopping-bag":'<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>',"shopping-cart":'<circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>',shuffle:'<polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line>',sidebar:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line>',"skip-back":'<polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line>',"skip-forward":'<polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line>',slack:'<path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"></path><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"></path><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"></path><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"></path><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"></path><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"></path>',slash:'<circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>',sliders:'<line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line>',smartphone:'<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',smile:'<circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',speaker:'<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><circle cx="12" cy="14" r="4"></circle><line x1="12" y1="6" x2="12.01" y2="6"></line>',square:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>',star:'<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>',"stop-circle":'<circle cx="12" cy="12" r="10"></circle><rect x="9" y="9" width="6" height="6"></rect>',sun:'<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>',sunrise:'<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline>',sunset:'<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="9" x2="12" y2="2"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="16 5 12 9 8 5"></polyline>',tablet:'<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',tag:'<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line>',target:'<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>',terminal:'<polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>',thermometer:'<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>',"thumbs-down":'<path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>',"thumbs-up":'<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>',"toggle-left":'<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="8" cy="12" r="3"></circle>',"toggle-right":'<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="16" cy="12" r="3"></circle>',tool:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>',"trash-2":'<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>',trash:'<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>',trello:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="7" y="7" width="3" height="9"></rect><rect x="14" y="7" width="3" height="5"></rect>',"trending-down":'<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline>',"trending-up":'<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>',triangle:'<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>',truck:'<rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle>',tv:'<rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline>',twitch:'<path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>',twitter:'<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>',type:'<polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line>',umbrella:'<path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"></path>',underline:'<path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path><line x1="4" y1="21" x2="20" y2="21"></line>',unlock:'<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path>',"upload-cloud":'<polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline>',upload:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line>',"user-check":'<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline>',"user-minus":'<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="23" y1="11" x2="17" y2="11"></line>',"user-plus":'<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line>',"user-x":'<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="18" y1="8" x2="23" y2="13"></line><line x1="23" y1="8" x2="18" y2="13"></line>',user:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>',users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',"video-off":'<path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path><line x1="1" y1="1" x2="23" y2="23"></line>',video:'<polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>',voicemail:'<circle cx="5.5" cy="11.5" r="4.5"></circle><circle cx="18.5" cy="11.5" r="4.5"></circle><line x1="5.5" y1="16" x2="18.5" y2="16"></line>',"volume-1":'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>',"volume-2":'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>',"volume-x":'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>',volume:'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>',watch:'<circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path>',"wifi-off":'<line x1="1" y1="1" x2="23" y2="23"></line><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path><path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',wifi:'<path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',wind:'<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>',"x-circle":'<circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',"x-octagon":'<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',"x-square":'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line>',x:'<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>',youtube:'<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>',"zap-off":'<polyline points="12.41 6.75 13 2 10.57 4.92"></polyline><polyline points="18.57 12.91 21 10 15.66 10"></polyline><polyline points="8 8 3 14 12 14 11 22 16 16"></polyline><line x1="1" y1="1" x2="23" y2="23"></line>',zap:'<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>',"zoom-in":'<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line>',"zoom-out":'<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line>'}},"./node_modules/classnames/dedupe.js":
/*!*******************************************!*\
        !*** ./node_modules/classnames/dedupe.js ***!
        \*******************************************/
/*! no static exports found */
function(e,n,t){var r;
/*!
        Copyright (c) 2016 Jed Watson.
        Licensed under the MIT License (MIT), see
        http://jedwatson.github.io/classnames
        */!function(){"use strict";var t=function(){function e(){}function n(e,n){for(var t=n.length,r=0;r<t;++r)o(e,n[r])}e.prototype=Object.create(null);var t={}.hasOwnProperty,r=/\s+/;function o(e,o){if(o){var i=l(o);"string"===i?function(e,n){for(var t=n.split(r),o=t.length,i=0;i<o;++i)e[t[i]]=!0}(e,o):Array.isArray(o)?n(e,o):"object"===i?function(e,n){for(var r in n)t.call(n,r)&&(e[r]=!!n[r])}(e,o):"number"===i&&function(e,n){e[n]=!0}(e,o)}}return function(){for(var t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];var i=new e;n(i,r);var l=[];for(var a in i)i[a]&&l.push(a);return l.join(" ")}}();void 0!==e&&e.exports?e.exports=t:void 0===(r=function(){return t}.apply(n,[]))||(e.exports=r)}()},"./node_modules/core-js/es/array/from.js":
/*!***********************************************!*\
        !*** ./node_modules/core-js/es/array/from.js ***!
        \***********************************************/
/*! no static exports found */
function(e,n,t){t(
/*! ../../modules/es.string.iterator */
"./node_modules/core-js/modules/es.string.iterator.js"),t(
/*! ../../modules/es.array.from */
"./node_modules/core-js/modules/es.array.from.js");var r=t(
/*! ../../internals/path */
"./node_modules/core-js/internals/path.js");e.exports=r.Array.from},"./node_modules/core-js/internals/a-function.js":
/*!******************************************************!*\
        !*** ./node_modules/core-js/internals/a-function.js ***!
        \******************************************************/
/*! no static exports found */
function(e,n){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},"./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
        !*** ./node_modules/core-js/internals/an-object.js ***!
        \*****************************************************/
/*! no static exports found */
function(e,n,t){var r=t(
/*! ../internals/is-object */
"./node_modules/core-js/internals/is-object.js");e.exports=function(e){if(!r(e))throw TypeError(String(e)+" is not an object");return e}},"./node_modules/core-js/internals/array-from.js":
/*!******************************************************!*\
        !*** ./node_modules/core-js/internals/array-from.js ***!
        \******************************************************/
/*! no static exports found */
function(e,n,t){"use strict";var r=t(
/*! ../internals/bind-context */
"./node_modules/core-js/internals/bind-context.js"),o=t(
/*! ../internals/to-object */
"./node_modules/core-js/internals/to-object.js"),i=t(
/*! ../internals/call-with-safe-iteration-closing */
"./node_modules/core-js/internals/call-with-safe-iteration-closing.js"),l=t(
/*! ../internals/is-array-iterator-method */
"./node_modules/core-js/internals/is-array-iterator-method.js"),a=t(
/*! ../internals/to-length */
"./node_modules/core-js/internals/to-length.js"),c=t(
/*! ../internals/create-property */
"./node_modules/core-js/internals/create-property.js"),s=t(
/*! ../internals/get-iterator-method */
"./node_modules/core-js/internals/get-iterator-method.js");e.exports=function(e){var n,t,p,u,y=o(e),d="function"==typeof this?this:Array,h=arguments.length,f=h>1?arguments[1]:void 0,x=void 0!==f,m=0,j=s(y);if(x&&(f=r(f,h>2?arguments[2]:void 0,2)),null==j||d==Array&&l(j))for(t=new d(n=a(y.length));n>m;m++)c(t,m,x?f(y[m],m):y[m]);else for(u=j.call(y),t=new d;!(p=u.next()).done;m++)c(t,m,x?i(u,f,[p.value,m],!0):p.value);return t.length=m,t}},"./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*\
        !*** ./node_modules/core-js/internals/array-includes.js ***!
        \**********************************************************/
/*! no static exports found */
function(e,n,t){var r=t(
/*! ../internals/to-indexed-object */
"./node_modules/core-js/internals/to-indexed-object.js"),o=t(
/*! ../internals/to-length */
"./node_modules/core-js/internals/to-length.js"),i=t(
/*! ../internals/to-absolute-index */
"./node_modules/core-js/internals/to-absolute-index.js");e.exports=function(e){return function(n,t,l){var a,c=r(n),s=o(c.length),p=i(l,s);if(e&&t!=t){for(;s>p;)if((a=c[p++])!=a)return!0}else for(;s>p;p++)if((e||p in c)&&c[p]===t)return e||p||0;return!e&&-1}}},"./node_modules/core-js/internals/bind-context.js":
/*!********************************************************!*\
        !*** ./node_modules/core-js/internals/bind-context.js ***!
        \********************************************************/
/*! no static exports found */
function(e,n,t){var r=t(
/*! ../internals/a-function */
"./node_modules/core-js/internals/a-function.js");e.exports=function(e,n,t){if(r(e),void 0===n)return e;switch(t){case 0:return function(){return e.call(n)};case 1:return function(t){return e.call(n,t)};case 2:return function(t,r){return e.call(n,t,r)};case 3:return function(t,r,o){return e.call(n,t,r,o)}}return function(){return e.apply(n,arguments)}}},"./node_modules/core-js/internals/call-with-safe-iteration-closing.js":
/*!****************************************************************************!*\
        !*** ./node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
        \****************************************************************************/
/*! no static exports found */
function(e,n,t){var r=t(
/*! ../internals/an-object */
"./node_modules/core-js/internals/an-object.js");e.exports=function(e,n,t,o){try{return o?n(r(t)[0],t[1]):n(t)}catch(n){var i=e.return;throw void 0!==i&&r(i.call(e)),n}}},"./node_modules/core-js/internals/check-correctness-of-iteration.js":
/*!**************************************************************************!*\
        !*** ./node_modules/core-js/internals/check-correctness-of-iteration.js ***!
        \**************************************************************************/
/*! no static exports found */
function(e,n,t){var r=t(
/*! ../internals/well-known-symbol */
"./node_modules/core-js/internals/well-known-symbol.js")("iterator"),o=!1;try{var i=0,l={next:function(){return{done:!!i++}},return:function(){o=!0}};l[r]=function(){return this},Array.from(l,(function(){throw 2}))}catch(e){}e.exports=function(e,n){if(!n&&!o)return!1;var t=!1;try{var i={};i[r]=function(){return{next:function(){return{done:t=!0}}}},e(i)}catch(e){}return t}},"./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
        !*** ./node_modules/core-js/internals/classof-raw.js ***!
        \*******************************************************/
/*! no static exports found */
function(e,n){var t={}.toString;e.exports=function(e){return t.call(e).slice(8,-1)}},"./node_modules/core-js/internals/classof.js":
/*!***************************************************!*\
        !*** ./node_modules/core-js/internals/classof.js ***!
        \***************************************************/
/*! no static exports found */
function(e,n,t){var r=t(
/*! ../internals/classof-raw */
"./node_modules/core-js/internals/classof-raw.js"),o=t(
/*! ../internals/well-known-symbol */
"./node_modules/core-js/internals/well-known-symbol.js")("toStringTag"),i="Arguments"==r(function(){return arguments}());e.exports=function(e){var n,t,l;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(t=function(e,n){try{return e[n]}catch(e){}}(n=Object(e),o))?t:i?r(n):"Object"==(l=r(n))&&"function"==typeof n.callee?"Arguments":l}},"./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
        !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
        \***********************************************************************/
/*! no static exports found */
function(e,n,t){var r=t(
/*! ../internals/has */
"./node_modules/core-js/internals/has.js"),o=t(
/*! ../internals/own-keys */
"./node_modules/core-js/internals/own-keys.js"),i=t(
/*! ../internals/object-get-own-property-descriptor */
"./node_modules/core-js/internals/object-get-own-property-descriptor.js"),l=t(
/*! ../internals/object-define-property */
"./node_modules/core-js/internals/object-define-property.js");e.exports=function(e,n){for(var t=o(n),a=l.f,c=i.f,s=0;s<t.length;s++){var p=t[s];r(e,p)||a(e,p,c(n,p))}}},"./node_modules/core-js/internals/correct-prototype-getter.js":
/*!********************************************************************!*\
        !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
        \********************************************************************/
/*! no static exports found */
function(e,n,t){var r=t(
/*! ../internals/fails */
"./node_modules/core-js/internals/fails.js");e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},"./node_modules/core-js/internals/create-iterator-constructor.js":
/*!***********************************************************************!*\
        !*** ./node_modules/core-js/internals/create-iterator-constructor.js ***!
        \***********************************************************************/
/*! no static exports found */
function(e,n,t){"use strict";var r=t(
/*! ../internals/iterators-core */
"./node_modules/core-js/internals/iterators-core.js").IteratorPrototype,o=t(
/*! ../internals/object-create */
"./node_modules/core-js/internals/object-create.js"),i=t(
/*! ../internals/create-property-descriptor */
"./node_modules/core-js/internals/create-property-descriptor.js"),l=t(
/*! ../internals/set-to-string-tag */
"./node_modules/core-js/internals/set-to-string-tag.js"),a=t(
/*! ../internals/iterators */
"./node_modules/core-js/internals/iterators.js"),c=function(){return this};e.exports=function(e,n,t){var s=n+" Iterator";return e.prototype=o(r,{next:i(1,t)}),l(e,s,!1,!0),a[s]=c,e}},"./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
        !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
        \**********************************************************************/
/*! no static exports found */
function(e,n){e.exports=function(e,n){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:n}}},"./node_modules/core-js/internals/create-property.js":
/*!***********************************************************!*\
        !*** ./node_modules/core-js/internals/create-property.js ***!
        \***********************************************************/
/*! no static exports found */
function(e,n,t){"use strict";var r=t(
/*! ../internals/to-primitive */
"./node_modules/core-js/internals/to-primitive.js"),o=t(
/*! ../internals/object-define-property */
"./node_modules/core-js/internals/object-define-property.js"),i=t(
/*! ../internals/create-property-descriptor */
"./node_modules/core-js/internals/create-property-descriptor.js");e.exports=function(e,n,t){var l=r(n);l in e?o.f(e,l,i(0,t)):e[l]=t}},"./node_modules/core-js/internals/define-iterator.js":
/*!***********************************************************!*\
        !*** ./node_modules/core-js/internals/define-iterator.js ***!
        \***********************************************************/
/*! no static exports found */
function(e,n,t){"use strict";var r=t(
/*! ../internals/export */
"./node_modules/core-js/internals/export.js"),o=t(
/*! ../internals/create-iterator-constructor */
"./node_modules/core-js/internals/create-iterator-constructor.js"),i=t(
/*! ../internals/object-get-prototype-of */
"./node_modules/core-js/internals/object-get-prototype-of.js"),l=t(
/*! ../internals/object-set-prototype-of */
"./node_modules/core-js/internals/object-set-prototype-of.js"),a=t(
/*! ../internals/set-to-string-tag */
"./node_modules/core-js/internals/set-to-string-tag.js"),c=t(
/*! ../internals/hide */
"./node_modules/core-js/internals/hide.js"),s=t(
/*! ../internals/redefine */
"./node_modules/core-js/internals/redefine.js"),p=t(
/*! ../internals/well-known-symbol */
"./node_modules/core-js/internals/well-known-symbol.js"),u=t(
/*! ../internals/is-pure */
"./node_modules/core-js/internals/is-pure.js"),y=t(
/*! ../internals/iterators */
"./node_modules/core-js/internals/iterators.js"),d=t(
/*! ../internals/iterators-core */
"./node_modules/core-js/internals/iterators-core.js"),h=d.IteratorPrototype,f=d.BUGGY_SAFARI_ITERATORS,x=p("iterator"),m=function(){return this};e.exports=function(e,n,t,p,d,j,g){o(t,n,p);var v,_,b,w=function(e){if(e===d&&z)return z;if(!f&&e in O)return O[e];switch(e){case"keys":case"values":case"entries":return function(){return new t(this,e)}}return function(){return new t(this)}},M=n+" Iterator",k=!1,O=e.prototype,A=O[x]||O["@@iterator"]||d&&O[d],z=!f&&A||w(d),H="Array"==n&&O.entries||A;if(H&&(v=i(H.call(new e)),h!==Object.prototype&&v.next&&(u||i(v)===h||(l?l(v,h):"function"!=typeof v[x]&&c(v,x,m)),a(v,M,!0,!0),u&&(y[M]=m))),"values"==d&&A&&"values"!==A.name&&(k=!0,z=function(){return A.call(this)}),u&&!g||O[x]===z||c(O,x,z),y[n]=z,d)if(_={values:w("values"),keys:j?z:w("keys"),entries:w("entries")},g)for(b in _)(f||k||!(b in O))&&s(O,b,_[b]);else r({target:n,proto:!0,forced:f||k},_);return _}},"./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
        !*** ./node_modules/core-js/internals/descriptors.js ***!
        \*******************************************************/
/*! no static exports found */
function(e,n,t){var r=t(
/*! ../internals/fails */
"./node_modules/core-js/internals/fails.js");e.exports=!r((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},"./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
        !*** ./node_modules/core-js/internals/document-create-element.js ***!
        \*******************************************************************/
/*! no static exports found */
function(e,n,t){var r=t(
/*! ../internals/global */
"./node_modules/core-js/internals/global.js"),o=t(
/*! ../internals/is-object */
"./node_modules/core-js/internals/is-object.js"),i=r.document,l=o(i)&&o(i.createElement);e.exports=function(e){return l?i.createElement(e):{}}},"./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*\
        !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
        \*********************************************************/
/*! no static exports found */
function(e,n){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"./node_modules/core-js/internals/export.js":
/*!**************************************************!*\
        !*** ./node_modules/core-js/internals/export.js ***!
        \**************************************************/
/*! no static exports found */
function(e,n,t){var r=t(
/*! ../internals/global */
"./node_modules/core-js/internals/global.js"),o=t(
/*! ../internals/object-get-own-property-descriptor */
"./node_modules/core-js/internals/object-get-own-property-descriptor.js").f,i=t(
/*! ../internals/hide */
"./node_modules/core-js/internals/hide.js"),a=t(
/*! ../internals/redefine */
"./node_modules/core-js/internals/redefine.js"),c=t(
/*! ../internals/set-global */
"./node_modules/core-js/internals/set-global.js"),s=t(
/*! ../internals/copy-constructor-properties */
"./node_modules/core-js/internals/copy-constructor-properties.js"),p=t(
/*! ../internals/is-forced */
"./node_modules/core-js/internals/is-forced.js");e.exports=function(e,n){var t,u,y,d,h,f=e.target,x=e.global,m=e.stat;if(t=x?r:m?r[f]||c(f,{}):(r[f]||{}).prototype)for(u in n){if(d=n[u],y=e.noTargetGet?(h=o(t,u))&&h.value:t[u],!p(x?u:f+(m?".":"#")+u,e.forced)&&void 0!==y){if(l(d)===l(y))continue;s(d,y)}(e.sham||y&&y.sham)&&i(d,"sham",!0),a(t,u,d,e)}}},"./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
        !*** ./node_modules/core-js/internals/fails.js ***!
        \*************************************************/
/*! no static exports found */
function(e,n){e.exports=function(e){try{return!!e()}catch(e){return!0}}},"./node_modules/core-js/internals/function-to-string.js":
/*!**************************************************************!*\
        !*** ./node_modules/core-js/internals/function-to-string.js ***!
        \**************************************************************/
/*! no static exports found */
function(e,n,t){var r=t(
/*! ../internals/shared */
"./node_modules/core-js/internals/shared.js");e.exports=r("native-function-to-string",Function.toString)},"./node_modules/core-js/internals/get-iterator-method.js":
/*!***************************************************************!*\
        !*** ./node_modules/core-js/internals/get-iterator-method.js ***!
        \***************************************************************/
/*! no static exports found */
function(e,n,t){var r=t(
/*! ../internals/classof */
"./node_modules/core-js/internals/classof.js"),o=t(
/*! ../internals/iterators */
"./node_modules/core-js/internals/iterators.js"),i=t(
/*! ../internals/well-known-symbol */
"./node_modules/core-js/internals/well-known-symbol.js")("iterator");e.exports=function(e){if(null!=e)return e[i]||e["@@iterator"]||o[r(e)]}},"./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
        !*** ./node_modules/core-js/internals/global.js ***!
        \**************************************************/
/*! no static exports found */
function(e,n,t){(function(n){var t="object",r=function(e){return e&&e.Math==Math&&e};e.exports=r(("undefined"==typeof globalThis?"undefined":l(globalThis))==t&&globalThis)||r(("undefined"==typeof window?"undefined":l(window))==t&&window)||r(("undefined"==typeof self?"undefined":l(self))==t&&self)||r(l(n)==t&&n)||Function("return this")()}).call(this,t(
/*! ./../../webpack/buildin/global.js */
"./node_modules/webpack/buildin/global.js"))},"./node_modules/core-js/internals/has.js":
/*!***********************************************!*\
        !*** ./node_modules/core-js/internals/has.js ***!
        \***********************************************/
/*! no static exports found */
function(e,n){var t={}.hasOwnProperty;e.exports=function(e,n){return t.call(e,n)}},"./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
        !*** ./node_modules/core-js/internals/hidden-keys.js ***!
        \*******************************************************/
/*! no static exports found */
function(e,n){e.exports={}},"./node_modules/core-js/internals/hide.js":
/*!************************************************!*\
        !*** ./node_modules/core-js/internals/hide.js ***!
        \************************************************/
/*! no static exports found */
function(e,n,t){var r=t(
/*! ../internals/descriptors */
"./node_modules/core-js/internals/descriptors.js"),o=t(
/*! ../internals/object-define-property */
"./node_modules/core-js/internals/object-define-property.js"),i=t(
/*! ../internals/create-property-descriptor */
"./node_modules/core-js/internals/create-property-descriptor.js");e.exports=r?function(e,n,t){return o.f(e,n,i(1,t))}:function(e,n,t){return e[n]=t,e}},"./node_modules/core-js/internals/html.js":
/*!************************************************!*\
        !*** ./node_modules/core-js/internals/html.js ***!
        \************************************************/
/*! no static exports found */
function(e,n,t){var r=t(
/*! ../internals/global */
"./node_modules/core-js/internals/global.js").document;e.exports=r&&r.documentElement},"./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
        !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
        \**********************************************************/
/*! no static exports found */
function(e,n,t){var r=t(
/*! ../internals/descriptors */
"./node_modules/core-js/internals/descriptors.js"),o=t(
/*! ../internals/fails */
"./node_modules/core-js/internals/fails.js"),i=t(
/*! ../internals/document-create-element */
"./node_modules/core-js/internals/document-create-element.js");e.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},"./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
        !*** ./node_modules/core-js/internals/indexed-object.js ***!
        \**********************************************************/
/*! no static exports found */
function(e,n,t){var r=t(
/*! ../internals/fails */
"./node_modules/core-js/internals/fails.js"),o=t(
/*! ../internals/classof-raw */
"./node_modules/core-js/internals/classof-raw.js"),i="".split;e.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==o(e)?i.call(e,""):Object(e)}:Object},"./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
        !*** ./node_modules/core-js/internals/internal-state.js ***!
        \**********************************************************/
/*! no static exports found */
function(e,n,t){var r,o,i,l=t(
/*! ../internals/native-weak-map */
"./node_modules/core-js/internals/native-weak-map.js"),a=t(
/*! ../internals/global */
"./node_modules/core-js/internals/global.js"),c=t(
/*! ../internals/is-object */
"./node_modules/core-js/internals/is-object.js"),s=t(
/*! ../internals/hide */
"./node_modules/core-js/internals/hide.js"),p=t(
/*! ../internals/has */
"./node_modules/core-js/internals/has.js"),u=t(
/*! ../internals/shared-key */
"./node_modules/core-js/internals/shared-key.js"),y=t(
/*! ../internals/hidden-keys */
"./node_modules/core-js/internals/hidden-keys.js"),d=a.WeakMap;if(l){var h=new d,f=h.get,x=h.has,m=h.set;r=function(e,n){return m.call(h,e,n),n},o=function(e){return f.call(h,e)||{}},i=function(e){return x.call(h,e)}}else{var j=u("state");y[j]=!0,r=function(e,n){return s(e,j,n),n},o=function(e){return p(e,j)?e[j]:{}},i=function(e){return p(e,j)}}e.exports={set:r,get:o,has:i,enforce:function(e){return i(e)?o(e):r(e,{})},getterFor:function(e){return function(n){var t;if(!c(n)||(t=o(n)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return t}}}},"./node_modules/core-js/internals/is-array-iterator-method.js":
/*!********************************************************************!*\
        !*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
        \********************************************************************/
/*! no static exports found */
function(e,n,t){var r=t(
/*! ../internals/well-known-symbol */
"./node_modules/core-js/internals/well-known-symbol.js"),o=t(
/*! ../internals/iterators */
"./node_modules/core-js/internals/iterators.js"),i=r("iterator"),l=Array.prototype;e.exports=function(e){return void 0!==e&&(o.Array===e||l[i]===e)}},"./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*\
        !*** ./node_modules/core-js/internals/is-forced.js ***!
        \*****************************************************/
/*! no static exports found */
function(e,n,t){var r=t(
/*! ../internals/fails */
"./node_modules/core-js/internals/fails.js"),o=/#|\.prototype\./,i=function(e,n){var t=a[l(e)];return t==s||t!=c&&("function"==typeof n?r(n):!!n)},l=i.normalize=function(e){return String(e).replace(o,".").toLowerCase()},a=i.data={},c=i.NATIVE="N",s=i.POLYFILL="P";e.exports=i},"./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
        !*** ./node_modules/core-js/internals/is-object.js ***!
        \*****************************************************/
/*! no static exports found */
function(e,n){e.exports=function(e){return"object"===l(e)?null!==e:"function"==typeof e}},"./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
        !*** ./node_modules/core-js/internals/is-pure.js ***!
        \***************************************************/
/*! no static exports found */
function(e,n){e.exports=!1},"./node_modules/core-js/internals/iterators-core.js":
/*!**********************************************************!*\
        !*** ./node_modules/core-js/internals/iterators-core.js ***!
        \**********************************************************/
/*! no static exports found */
function(e,n,t){"use strict";var r,o,i,l=t(
/*! ../internals/object-get-prototype-of */
"./node_modules/core-js/internals/object-get-prototype-of.js"),a=t(
/*! ../internals/hide */
"./node_modules/core-js/internals/hide.js"),c=t(
/*! ../internals/has */
"./node_modules/core-js/internals/has.js"),s=t(
/*! ../internals/well-known-symbol */
"./node_modules/core-js/internals/well-known-symbol.js"),p=t(
/*! ../internals/is-pure */
"./node_modules/core-js/internals/is-pure.js"),u=s("iterator"),y=!1;[].keys&&("next"in(i=[].keys())?(o=l(l(i)))!==Object.prototype&&(r=o):y=!0),null==r&&(r={}),p||c(r,u)||a(r,u,(function(){return this})),e.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:y}},"./node_modules/core-js/internals/iterators.js":
/*!*****************************************************!*\
        !*** ./node_modules/core-js/internals/iterators.js ***!
        \*****************************************************/
/*! no static exports found */
function(e,n){e.exports={}},"./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
        !*** ./node_modules/core-js/internals/native-symbol.js ***!
        \*********************************************************/
/*! no static exports found */
function(e,n,t){var r=t(
/*! ../internals/fails */
"./node_modules/core-js/internals/fails.js");e.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},"./node_modules/core-js/internals/native-weak-map.js":
/*!***********************************************************!*\
        !*** ./node_modules/core-js/internals/native-weak-map.js ***!
        \***********************************************************/
/*! no static exports found */
function(e,n,t){var r=t(
/*! ../internals/global */
"./node_modules/core-js/internals/global.js"),o=t(
/*! ../internals/function-to-string */
"./node_modules/core-js/internals/function-to-string.js"),i=r.WeakMap;e.exports="function"==typeof i&&/native code/.test(o.call(i))},"./node_modules/core-js/internals/object-create.js":
/*!*********************************************************!*\
        !*** ./node_modules/core-js/internals/object-create.js ***!
        \*********************************************************/
/*! no static exports found */
function(e,n,t){var r=t(
/*! ../internals/an-object */
"./node_modules/core-js/internals/an-object.js"),o=t(
/*! ../internals/object-define-properties */
"./node_modules/core-js/internals/object-define-properties.js"),i=t(
/*! ../internals/enum-bug-keys */
"./node_modules/core-js/internals/enum-bug-keys.js"),l=t(
/*! ../internals/hidden-keys */
"./node_modules/core-js/internals/hidden-keys.js"),a=t(
/*! ../internals/html */
"./node_modules/core-js/internals/html.js"),c=t(
/*! ../internals/document-create-element */
"./node_modules/core-js/internals/document-create-element.js"),s=t(
/*! ../internals/shared-key */
"./node_modules/core-js/internals/shared-key.js")("IE_PROTO"),p=function(){},u=function(){var e,n=c("iframe"),t=i.length;for(n.style.display="none",a.appendChild(n),n.src=String("javascript:"),(e=n.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),u=e.F;t--;)delete u.prototype[i[t]];return u()};e.exports=Object.create||function(e,n){var t;return null!==e?(p.prototype=r(e),t=new p,p.prototype=null,t[s]=e):t=u(),void 0===n?t:o(t,n)},l[s]=!0},"./node_modules/core-js/internals/object-define-properties.js":
/*!********************************************************************!*\
        !*** ./node_modules/core-js/internals/object-define-properties.js ***!
        \********************************************************************/
/*! no static exports found */
function(e,n,t){var r=t(
/*! ../internals/descriptors */
"./node_modules/core-js/internals/descriptors.js"),o=t(
/*! ../internals/object-define-property */
"./node_modules/core-js/internals/object-define-property.js"),i=t(
/*! ../internals/an-object */
"./node_modules/core-js/internals/an-object.js"),l=t(
/*! ../internals/object-keys */
"./node_modules/core-js/internals/object-keys.js");e.exports=r?Object.defineProperties:function(e,n){i(e);for(var t,r=l(n),a=r.length,c=0;a>c;)o.f(e,t=r[c++],n[t]);return e}},"./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
        !*** ./node_modules/core-js/internals/object-define-property.js ***!
        \******************************************************************/
/*! no static exports found */
function(e,n,t){var r=t(
/*! ../internals/descriptors */
"./node_modules/core-js/internals/descriptors.js"),o=t(
/*! ../internals/ie8-dom-define */
"./node_modules/core-js/internals/ie8-dom-define.js"),i=t(
/*! ../internals/an-object */
"./node_modules/core-js/internals/an-object.js"),l=t(
/*! ../internals/to-primitive */
"./node_modules/core-js/internals/to-primitive.js"),a=Object.defineProperty;n.f=r?a:function(e,n,t){if(i(e),n=l(n,!0),i(t),o)try{return a(e,n,t)}catch(e){}if("get"in t||"set"in t)throw TypeError("Accessors not supported");return"value"in t&&(e[n]=t.value),e}},"./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*\
        !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
        \******************************************************************************/
/*! no static exports found */
function(e,n,t){var r=t(
/*! ../internals/descriptors */
"./node_modules/core-js/internals/descriptors.js"),o=t(
/*! ../internals/object-property-is-enumerable */
"./node_modules/core-js/internals/object-property-is-enumerable.js"),i=t(
/*! ../internals/create-property-descriptor */
"./node_modules/core-js/internals/create-property-descriptor.js"),l=t(
/*! ../internals/to-indexed-object */
"./node_modules/core-js/internals/to-indexed-object.js"),a=t(
/*! ../internals/to-primitive */
"./node_modules/core-js/internals/to-primitive.js"),c=t(
/*! ../internals/has */
"./node_modules/core-js/internals/has.js"),s=t(
/*! ../internals/ie8-dom-define */
"./node_modules/core-js/internals/ie8-dom-define.js"),p=Object.getOwnPropertyDescriptor;n.f=r?p:function(e,n){if(e=l(e),n=a(n,!0),s)try{return p(e,n)}catch(e){}if(c(e,n))return i(!o.f.call(e,n),e[n])}},"./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*\
        !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
        \*************************************************************************/
/*! no static exports found */
function(e,n,t){var r=t(
/*! ../internals/object-keys-internal */
"./node_modules/core-js/internals/object-keys-internal.js"),o=t(
/*! ../internals/enum-bug-keys */
"./node_modules/core-js/internals/enum-bug-keys.js").concat("length","prototype");n.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},"./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*\
        !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
        \***************************************************************************/
/*! no static exports found */
function(e,n){n.f=Object.getOwnPropertySymbols},"./node_modules/core-js/internals/object-get-prototype-of.js":
/*!*******************************************************************!*\
        !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
        \*******************************************************************/
/*! no static exports found */
function(e,n,t){var r=t(
/*! ../internals/has */
"./node_modules/core-js/internals/has.js"),o=t(
/*! ../internals/to-object */
"./node_modules/core-js/internals/to-object.js"),i=t(
/*! ../internals/shared-key */
"./node_modules/core-js/internals/shared-key.js"),l=t(
/*! ../internals/correct-prototype-getter */
"./node_modules/core-js/internals/correct-prototype-getter.js"),a=i("IE_PROTO"),c=Object.prototype;e.exports=l?Object.getPrototypeOf:function(e){return e=o(e),r(e,a)?e[a]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?c:null}},"./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*\
        !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
        \****************************************************************/
/*! no static exports found */
function(e,n,t){var r=t(
/*! ../internals/has */
"./node_modules/core-js/internals/has.js"),o=t(
/*! ../internals/to-indexed-object */
"./node_modules/core-js/internals/to-indexed-object.js"),i=t(
/*! ../internals/array-includes */
"./node_modules/core-js/internals/array-includes.js"),l=t(
/*! ../internals/hidden-keys */
"./node_modules/core-js/internals/hidden-keys.js"),a=i(!1);e.exports=function(e,n){var t,i=o(e),c=0,s=[];for(t in i)!r(l,t)&&r(i,t)&&s.push(t);for(;n.length>c;)r(i,t=n[c++])&&(~a(s,t)||s.push(t));return s}},"./node_modules/core-js/internals/object-keys.js":
/*!*******************************************************!*\
        !*** ./node_modules/core-js/internals/object-keys.js ***!
        \*******************************************************/
/*! no static exports found */
function(e,n,t){var r=t(
/*! ../internals/object-keys-internal */
"./node_modules/core-js/internals/object-keys-internal.js"),o=t(
/*! ../internals/enum-bug-keys */
"./node_modules/core-js/internals/enum-bug-keys.js");e.exports=Object.keys||function(e){return r(e,o)}},"./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*\
        !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
        \*************************************************************************/
/*! no static exports found */
function(e,n,t){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);n.f=i?function(e){var n=o(this,e);return!!n&&n.enumerable}:r},"./node_modules/core-js/internals/object-set-prototype-of.js":
/*!*******************************************************************!*\
        !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
        \*******************************************************************/
/*! no static exports found */
function(e,n,t){var r=t(
/*! ../internals/validate-set-prototype-of-arguments */
"./node_modules/core-js/internals/validate-set-prototype-of-arguments.js");e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,n=!1,t={};try{(e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(t,[]),n=t instanceof Array}catch(e){}return function(t,o){return r(t,o),n?e.call(t,o):t.__proto__=o,t}}():void 0)},"./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*\
        !*** ./node_modules/core-js/internals/own-keys.js ***!
        \****************************************************/
/*! no static exports found */
function(e,n,t){var r=t(
/*! ../internals/global */
"./node_modules/core-js/internals/global.js"),o=t(
/*! ../internals/object-get-own-property-names */
"./node_modules/core-js/internals/object-get-own-property-names.js"),i=t(
/*! ../internals/object-get-own-property-symbols */
"./node_modules/core-js/internals/object-get-own-property-symbols.js"),l=t(
/*! ../internals/an-object */
"./node_modules/core-js/internals/an-object.js"),a=r.Reflect;e.exports=a&&a.ownKeys||function(e){var n=o.f(l(e)),t=i.f;return t?n.concat(t(e)):n}},"./node_modules/core-js/internals/path.js":
/*!************************************************!*\
        !*** ./node_modules/core-js/internals/path.js ***!
        \************************************************/
/*! no static exports found */
function(e,n,t){e.exports=t(
/*! ../internals/global */
"./node_modules/core-js/internals/global.js")},"./node_modules/core-js/internals/redefine.js":
/*!****************************************************!*\
        !*** ./node_modules/core-js/internals/redefine.js ***!
        \****************************************************/
/*! no static exports found */
function(e,n,t){var r=t(
/*! ../internals/global */
"./node_modules/core-js/internals/global.js"),o=t(
/*! ../internals/shared */
"./node_modules/core-js/internals/shared.js"),i=t(
/*! ../internals/hide */
"./node_modules/core-js/internals/hide.js"),l=t(
/*! ../internals/has */
"./node_modules/core-js/internals/has.js"),a=t(
/*! ../internals/set-global */
"./node_modules/core-js/internals/set-global.js"),c=t(
/*! ../internals/function-to-string */
"./node_modules/core-js/internals/function-to-string.js"),s=t(
/*! ../internals/internal-state */
"./node_modules/core-js/internals/internal-state.js"),p=s.get,u=s.enforce,y=String(c).split("toString");o("inspectSource",(function(e){return c.call(e)})),(e.exports=function(e,n,t,o){var c=!!o&&!!o.unsafe,s=!!o&&!!o.enumerable,p=!!o&&!!o.noTargetGet;"function"==typeof t&&("string"!=typeof n||l(t,"name")||i(t,"name",n),u(t).source=y.join("string"==typeof n?n:"")),e!==r?(c?!p&&e[n]&&(s=!0):delete e[n],s?e[n]=t:i(e,n,t)):s?e[n]=t:a(n,t)})(Function.prototype,"toString",(function(){return"function"==typeof this&&p(this).source||c.call(this)}))},"./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
        !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
        \********************************************************************/
/*! no static exports found */
function(e,n){e.exports=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}},"./node_modules/core-js/internals/set-global.js":
/*!******************************************************!*\
        !*** ./node_modules/core-js/internals/set-global.js ***!
        \******************************************************/
/*! no static exports found */
function(e,n,t){var r=t(
/*! ../internals/global */
"./node_modules/core-js/internals/global.js"),o=t(
/*! ../internals/hide */
"./node_modules/core-js/internals/hide.js");e.exports=function(e,n){try{o(r,e,n)}catch(t){r[e]=n}return n}},"./node_modules/core-js/internals/set-to-string-tag.js":
/*!*************************************************************!*\
        !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
        \*************************************************************/
/*! no static exports found */
function(e,n,t){var r=t(
/*! ../internals/object-define-property */
"./node_modules/core-js/internals/object-define-property.js").f,o=t(
/*! ../internals/has */
"./node_modules/core-js/internals/has.js"),i=t(
/*! ../internals/well-known-symbol */
"./node_modules/core-js/internals/well-known-symbol.js")("toStringTag");e.exports=function(e,n,t){e&&!o(e=t?e:e.prototype,i)&&r(e,i,{configurable:!0,value:n})}},"./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
        !*** ./node_modules/core-js/internals/shared-key.js ***!
        \******************************************************/
/*! no static exports found */
function(e,n,t){var r=t(
/*! ../internals/shared */
"./node_modules/core-js/internals/shared.js"),o=t(
/*! ../internals/uid */
"./node_modules/core-js/internals/uid.js"),i=r("keys");e.exports=function(e){return i[e]||(i[e]=o(e))}},"./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
        !*** ./node_modules/core-js/internals/shared.js ***!
        \**************************************************/
/*! no static exports found */
function(e,n,t){var r=t(
/*! ../internals/global */
"./node_modules/core-js/internals/global.js"),o=t(
/*! ../internals/set-global */
"./node_modules/core-js/internals/set-global.js"),i=t(
/*! ../internals/is-pure */
"./node_modules/core-js/internals/is-pure.js"),l=r["__core-js_shared__"]||o("__core-js_shared__",{});(e.exports=function(e,n){return l[e]||(l[e]=void 0!==n?n:{})})("versions",[]).push({version:"3.1.3",mode:i?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},"./node_modules/core-js/internals/string-at.js":
/*!*****************************************************!*\
        !*** ./node_modules/core-js/internals/string-at.js ***!
        \*****************************************************/
/*! no static exports found */
function(e,n,t){var r=t(
/*! ../internals/to-integer */
"./node_modules/core-js/internals/to-integer.js"),o=t(
/*! ../internals/require-object-coercible */
"./node_modules/core-js/internals/require-object-coercible.js");e.exports=function(e,n,t){var i,l,a=String(o(e)),c=r(n),s=a.length;return c<0||c>=s?t?"":void 0:(i=a.charCodeAt(c))<55296||i>56319||c+1===s||(l=a.charCodeAt(c+1))<56320||l>57343?t?a.charAt(c):i:t?a.slice(c,c+2):l-56320+(i-55296<<10)+65536}},"./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*\
        !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
        \*************************************************************/
/*! no static exports found */
function(e,n,t){var r=t(
/*! ../internals/to-integer */
"./node_modules/core-js/internals/to-integer.js"),o=Math.max,i=Math.min;e.exports=function(e,n){var t=r(e);return t<0?o(t+n,0):i(t,n)}},"./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*\
        !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
        \*************************************************************/
/*! no static exports found */
function(e,n,t){var r=t(
/*! ../internals/indexed-object */
"./node_modules/core-js/internals/indexed-object.js"),o=t(
/*! ../internals/require-object-coercible */
"./node_modules/core-js/internals/require-object-coercible.js");e.exports=function(e){return r(o(e))}},"./node_modules/core-js/internals/to-integer.js":
/*!******************************************************!*\
        !*** ./node_modules/core-js/internals/to-integer.js ***!
        \******************************************************/
/*! no static exports found */
function(e,n){var t=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:t)(e)}},"./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
        !*** ./node_modules/core-js/internals/to-length.js ***!
        \*****************************************************/
/*! no static exports found */
function(e,n,t){var r=t(
/*! ../internals/to-integer */
"./node_modules/core-js/internals/to-integer.js"),o=Math.min;e.exports=function(e){return e>0?o(r(e),9007199254740991):0}},"./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
        !*** ./node_modules/core-js/internals/to-object.js ***!
        \*****************************************************/
/*! no static exports found */
function(e,n,t){var r=t(
/*! ../internals/require-object-coercible */
"./node_modules/core-js/internals/require-object-coercible.js");e.exports=function(e){return Object(r(e))}},"./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
        !*** ./node_modules/core-js/internals/to-primitive.js ***!
        \********************************************************/
/*! no static exports found */
function(e,n,t){var r=t(
/*! ../internals/is-object */
"./node_modules/core-js/internals/is-object.js");e.exports=function(e,n){if(!r(e))return e;var t,o;if(n&&"function"==typeof(t=e.toString)&&!r(o=t.call(e)))return o;if("function"==typeof(t=e.valueOf)&&!r(o=t.call(e)))return o;if(!n&&"function"==typeof(t=e.toString)&&!r(o=t.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},"./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
        !*** ./node_modules/core-js/internals/uid.js ***!
        \***********************************************/
/*! no static exports found */
function(e,n){var t=0,r=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++t+r).toString(36))}},"./node_modules/core-js/internals/validate-set-prototype-of-arguments.js":
/*!*******************************************************************************!*\
        !*** ./node_modules/core-js/internals/validate-set-prototype-of-arguments.js ***!
        \*******************************************************************************/
/*! no static exports found */
function(e,n,t){var r=t(
/*! ../internals/is-object */
"./node_modules/core-js/internals/is-object.js"),o=t(
/*! ../internals/an-object */
"./node_modules/core-js/internals/an-object.js");e.exports=function(e,n){if(o(e),!r(n)&&null!==n)throw TypeError("Can't set "+String(n)+" as a prototype")}},"./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
        !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
        \*************************************************************/
/*! no static exports found */
function(e,n,t){var r=t(
/*! ../internals/global */
"./node_modules/core-js/internals/global.js"),o=t(
/*! ../internals/shared */
"./node_modules/core-js/internals/shared.js"),i=t(
/*! ../internals/uid */
"./node_modules/core-js/internals/uid.js"),l=t(
/*! ../internals/native-symbol */
"./node_modules/core-js/internals/native-symbol.js"),a=r.Symbol,c=o("wks");e.exports=function(e){return c[e]||(c[e]=l&&a[e]||(l?a:i)("Symbol."+e))}},"./node_modules/core-js/modules/es.array.from.js":
/*!*******************************************************!*\
        !*** ./node_modules/core-js/modules/es.array.from.js ***!
        \*******************************************************/
/*! no static exports found */
function(e,n,t){var r=t(
/*! ../internals/export */
"./node_modules/core-js/internals/export.js"),o=t(
/*! ../internals/array-from */
"./node_modules/core-js/internals/array-from.js");r({target:"Array",stat:!0,forced:!t(
/*! ../internals/check-correctness-of-iteration */
"./node_modules/core-js/internals/check-correctness-of-iteration.js")((function(e){Array.from(e)}))},{from:o})},"./node_modules/core-js/modules/es.string.iterator.js":
/*!************************************************************!*\
        !*** ./node_modules/core-js/modules/es.string.iterator.js ***!
        \************************************************************/
/*! no static exports found */
function(e,n,t){"use strict";var r=t(
/*! ../internals/string-at */
"./node_modules/core-js/internals/string-at.js"),o=t(
/*! ../internals/internal-state */
"./node_modules/core-js/internals/internal-state.js"),i=t(
/*! ../internals/define-iterator */
"./node_modules/core-js/internals/define-iterator.js"),l=o.set,a=o.getterFor("String Iterator");i(String,"String",(function(e){l(this,{type:"String Iterator",string:String(e),index:0})}),(function(){var e,n=a(this),t=n.string,o=n.index;return o>=t.length?{value:void 0,done:!0}:(e=r(t,o,!0),n.index+=e.length,{value:e,done:!1})}))},"./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
        !*** (webpack)/buildin/global.js ***!
        \***********************************/
/*! no static exports found */
function(e,n){var t;t=function(){return this}();try{t=t||Function("return this")()||(0,eval)("this")}catch(e){"object"===("undefined"==typeof window?"undefined":l(window))&&(t=window)}e.exports=t},"./src/default-attrs.json":
/*!********************************!*\
        !*** ./src/default-attrs.json ***!
        \********************************/
/*! exports provided: xmlns, width, height, viewBox, fill, stroke, stroke-width, stroke-linecap, stroke-linejoin, default */
function(e){e.exports={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"}},"./src/icon.js":
/*!*********************!*\
        !*** ./src/icon.js ***!
        \*********************/
/*! no static exports found */
function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),i=a(t(
/*! classnames/dedupe */
"./node_modules/classnames/dedupe.js")),l=a(t(
/*! ./default-attrs.json */
"./src/default-attrs.json"));function a(e){return e&&e.__esModule?e:{default:e}}function c(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var s=function(){function e(n,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];c(this,e),this.name=n,this.contents=t,this.tags=o,this.attrs=r({},l.default,{class:"feather feather-"+n})}return o(e,[{key:"toSvg",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=r({},this.attrs,e,{class:(0,i.default)(this.attrs.class,e.class)});return"<svg "+p(n)+">"+this.contents+"</svg>"}},{key:"toString",value:function(){return this.contents}}]),e}();function p(e){return Object.keys(e).map((function(n){return n+'="'+e[n]+'"'})).join(" ")}n.default=s},"./src/icons.js":
/*!**********************!*\
        !*** ./src/icons.js ***!
        \**********************/
/*! no static exports found */
function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=l(t(
/*! ./icon */
"./src/icon.js")),o=l(t(
/*! ../dist/icons.json */
"./dist/icons.json")),i=l(t(
/*! ./tags.json */
"./src/tags.json"));function l(e){return e&&e.__esModule?e:{default:e}}n.default=Object.keys(o.default).map((function(e){return new r.default(e,o.default[e],i.default[e])})).reduce((function(e,n){return e[n.name]=n,e}),{})},"./src/index.js":
/*!**********************!*\
        !*** ./src/index.js ***!
        \**********************/
/*! no static exports found */
function(e,n,t){"use strict";var r=l(t(
/*! ./icons */
"./src/icons.js")),o=l(t(
/*! ./to-svg */
"./src/to-svg.js")),i=l(t(
/*! ./replace */
"./src/replace.js"));function l(e){return e&&e.__esModule?e:{default:e}}e.exports={icons:r.default,toSvg:o.default,replace:i.default}},"./src/replace.js":
/*!************************!*\
        !*** ./src/replace.js ***!
        \************************/
/*! no static exports found */
function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o=l(t(
/*! classnames/dedupe */
"./node_modules/classnames/dedupe.js")),i=l(t(
/*! ./icons */
"./src/icons.js"));function l(e){return e&&e.__esModule?e:{default:e}}function a(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=c(e),l=t["data-feather"];delete t["data-feather"];var a=i.default[l].toSvg(r({},n,t,{class:(0,o.default)(n.class,t.class)})),s=(new DOMParser).parseFromString(a,"image/svg+xml"),p=s.querySelector("svg");e.parentNode.replaceChild(p,e)}function c(e){return Array.from(e.attributes).reduce((function(e,n){return e[n.name]=n.value,e}),{})}n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if("undefined"==typeof document)throw new Error("`feather.replace()` only works in a browser environment.");var n=document.querySelectorAll("[data-feather]");Array.from(n).forEach((function(n){return a(n,e)}))}},"./src/tags.json":
/*!***********************!*\
        !*** ./src/tags.json ***!
        \***********************/
/*! exports provided: activity, airplay, alert-circle, alert-octagon, alert-triangle, align-center, align-justify, align-left, align-right, anchor, archive, at-sign, award, aperture, bar-chart, bar-chart-2, battery, battery-charging, bell, bell-off, bluetooth, book-open, book, bookmark, box, briefcase, calendar, camera, cast, circle, clipboard, clock, cloud-drizzle, cloud-lightning, cloud-rain, cloud-snow, cloud, codepen, codesandbox, code, coffee, columns, command, compass, copy, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, cpu, credit-card, crop, crosshair, database, delete, disc, dollar-sign, droplet, edit, edit-2, edit-3, eye, eye-off, external-link, facebook, fast-forward, figma, file-minus, file-plus, file-text, film, filter, flag, folder-minus, folder-plus, folder, framer, frown, gift, git-branch, git-commit, git-merge, git-pull-request, github, gitlab, globe, hard-drive, hash, headphones, heart, help-circle, hexagon, home, image, inbox, instagram, key, layers, layout, life-bouy, link, link-2, linkedin, list, lock, log-in, log-out, mail, map-pin, map, maximize, maximize-2, meh, menu, message-circle, message-square, mic-off, mic, minimize, minimize-2, minus, monitor, moon, more-horizontal, more-vertical, mouse-pointer, move, music, navigation, navigation-2, octagon, package, paperclip, pause, pause-circle, pen-tool, percent, phone-call, phone-forwarded, phone-incoming, phone-missed, phone-off, phone-outgoing, phone, play, pie-chart, play-circle, plus, plus-circle, plus-square, pocket, power, printer, radio, refresh-cw, refresh-ccw, repeat, rewind, rotate-ccw, rotate-cw, rss, save, scissors, search, send, settings, share-2, shield, shield-off, shopping-bag, shopping-cart, shuffle, skip-back, skip-forward, slack, slash, sliders, smartphone, smile, speaker, star, stop-circle, sun, sunrise, sunset, tablet, tag, target, terminal, thermometer, thumbs-down, thumbs-up, toggle-left, toggle-right, tool, trash, trash-2, triangle, truck, tv, twitch, twitter, type, umbrella, unlock, user-check, user-minus, user-plus, user-x, user, users, video-off, video, voicemail, volume, volume-1, volume-2, volume-x, watch, wifi-off, wifi, wind, x-circle, x-octagon, x-square, x, youtube, zap-off, zap, zoom-in, zoom-out, default */
function(e){e.exports={activity:["pulse","health","action","motion"],airplay:["stream","cast","mirroring"],"alert-circle":["warning","alert","danger"],"alert-octagon":["warning","alert","danger"],"alert-triangle":["warning","alert","danger"],"align-center":["text alignment","center"],"align-justify":["text alignment","justified"],"align-left":["text alignment","left"],"align-right":["text alignment","right"],anchor:[],archive:["index","box"],"at-sign":["mention","at","email","message"],award:["achievement","badge"],aperture:["camera","photo"],"bar-chart":["statistics","diagram","graph"],"bar-chart-2":["statistics","diagram","graph"],battery:["power","electricity"],"battery-charging":["power","electricity"],bell:["alarm","notification","sound"],"bell-off":["alarm","notification","silent"],bluetooth:["wireless"],"book-open":["read","library"],book:["read","dictionary","booklet","magazine","library"],bookmark:["read","clip","marker","tag"],box:["cube"],briefcase:["work","bag","baggage","folder"],calendar:["date"],camera:["photo"],cast:["chromecast","airplay"],circle:["off","zero","record"],clipboard:["copy"],clock:["time","watch","alarm"],"cloud-drizzle":["weather","shower"],"cloud-lightning":["weather","bolt"],"cloud-rain":["weather"],"cloud-snow":["weather","blizzard"],cloud:["weather"],codepen:["logo"],codesandbox:["logo"],code:["source","programming"],coffee:["drink","cup","mug","tea","cafe","hot","beverage"],columns:["layout"],command:["keyboard","cmd","terminal","prompt"],compass:["navigation","safari","travel","direction"],copy:["clone","duplicate"],"corner-down-left":["arrow","return"],"corner-down-right":["arrow"],"corner-left-down":["arrow"],"corner-left-up":["arrow"],"corner-right-down":["arrow"],"corner-right-up":["arrow"],"corner-up-left":["arrow"],"corner-up-right":["arrow"],cpu:["processor","technology"],"credit-card":["purchase","payment","cc"],crop:["photo","image"],crosshair:["aim","target"],database:["storage","memory"],delete:["remove"],disc:["album","cd","dvd","music"],"dollar-sign":["currency","money","payment"],droplet:["water"],edit:["pencil","change"],"edit-2":["pencil","change"],"edit-3":["pencil","change"],eye:["view","watch"],"eye-off":["view","watch","hide","hidden"],"external-link":["outbound"],facebook:["logo","social"],"fast-forward":["music"],figma:["logo","design","tool"],"file-minus":["delete","remove","erase"],"file-plus":["add","create","new"],"file-text":["data","txt","pdf"],film:["movie","video"],filter:["funnel","hopper"],flag:["report"],"folder-minus":["directory"],"folder-plus":["directory"],folder:["directory"],framer:["logo","design","tool"],frown:["emoji","face","bad","sad","emotion"],gift:["present","box","birthday","party"],"git-branch":["code","version control"],"git-commit":["code","version control"],"git-merge":["code","version control"],"git-pull-request":["code","version control"],github:["logo","version control"],gitlab:["logo","version control"],globe:["world","browser","language","translate"],"hard-drive":["computer","server","memory","data"],hash:["hashtag","number","pound"],headphones:["music","audio","sound"],heart:["like","love","emotion"],"help-circle":["question mark"],hexagon:["shape","node.js","logo"],home:["house","living"],image:["picture"],inbox:["email"],instagram:["logo","camera"],key:["password","login","authentication","secure"],layers:["stack"],layout:["window","webpage"],"life-bouy":["help","life ring","support"],link:["chain","url"],"link-2":["chain","url"],linkedin:["logo","social media"],list:["options"],lock:["security","password","secure"],"log-in":["sign in","arrow","enter"],"log-out":["sign out","arrow","exit"],mail:["email","message"],"map-pin":["location","navigation","travel","marker"],map:["location","navigation","travel"],maximize:["fullscreen"],"maximize-2":["fullscreen","arrows","expand"],meh:["emoji","face","neutral","emotion"],menu:["bars","navigation","hamburger"],"message-circle":["comment","chat"],"message-square":["comment","chat"],"mic-off":["record","sound","mute"],mic:["record","sound","listen"],minimize:["exit fullscreen","close"],"minimize-2":["exit fullscreen","arrows","close"],minus:["subtract"],monitor:["tv","screen","display"],moon:["dark","night"],"more-horizontal":["ellipsis"],"more-vertical":["ellipsis"],"mouse-pointer":["arrow","cursor"],move:["arrows"],music:["note"],navigation:["location","travel"],"navigation-2":["location","travel"],octagon:["stop"],package:["box","container"],paperclip:["attachment"],pause:["music","stop"],"pause-circle":["music","audio","stop"],"pen-tool":["vector","drawing"],percent:["discount"],"phone-call":["ring"],"phone-forwarded":["call"],"phone-incoming":["call"],"phone-missed":["call"],"phone-off":["call","mute"],"phone-outgoing":["call"],phone:["call"],play:["music","start"],"pie-chart":["statistics","diagram"],"play-circle":["music","start"],plus:["add","new"],"plus-circle":["add","new"],"plus-square":["add","new"],pocket:["logo","save"],power:["on","off"],printer:["fax","office","device"],radio:["signal"],"refresh-cw":["synchronise","arrows"],"refresh-ccw":["arrows"],repeat:["loop","arrows"],rewind:["music"],"rotate-ccw":["arrow"],"rotate-cw":["arrow"],rss:["feed","subscribe"],save:["floppy disk"],scissors:["cut"],search:["find","magnifier","magnifying glass"],send:["message","mail","email","paper airplane","paper aeroplane"],settings:["cog","edit","gear","preferences"],"share-2":["network","connections"],shield:["security","secure"],"shield-off":["security","insecure"],"shopping-bag":["ecommerce","cart","purchase","store"],"shopping-cart":["ecommerce","cart","purchase","store"],shuffle:["music"],"skip-back":["music"],"skip-forward":["music"],slack:["logo"],slash:["ban","no"],sliders:["settings","controls"],smartphone:["cellphone","device"],smile:["emoji","face","happy","good","emotion"],speaker:["audio","music"],star:["bookmark","favorite","like"],"stop-circle":["media","music"],sun:["brightness","weather","light"],sunrise:["weather","time","morning","day"],sunset:["weather","time","evening","night"],tablet:["device"],tag:["label"],target:["logo","bullseye"],terminal:["code","command line","prompt"],thermometer:["temperature","celsius","fahrenheit","weather"],"thumbs-down":["dislike","bad","emotion"],"thumbs-up":["like","good","emotion"],"toggle-left":["on","off","switch"],"toggle-right":["on","off","switch"],tool:["settings","spanner"],trash:["garbage","delete","remove","bin"],"trash-2":["garbage","delete","remove","bin"],triangle:["delta"],truck:["delivery","van","shipping","transport","lorry"],tv:["television","stream"],twitch:["logo"],twitter:["logo","social"],type:["text"],umbrella:["rain","weather"],unlock:["security"],"user-check":["followed","subscribed"],"user-minus":["delete","remove","unfollow","unsubscribe"],"user-plus":["new","add","create","follow","subscribe"],"user-x":["delete","remove","unfollow","unsubscribe","unavailable"],user:["person","account"],users:["group"],"video-off":["camera","movie","film"],video:["camera","movie","film"],voicemail:["phone"],volume:["music","sound","mute"],"volume-1":["music","sound"],"volume-2":["music","sound"],"volume-x":["music","sound","mute"],watch:["clock","time"],"wifi-off":["disabled"],wifi:["connection","signal","wireless"],wind:["weather","air"],"x-circle":["cancel","close","delete","remove","times","clear"],"x-octagon":["delete","stop","alert","warning","times","clear"],"x-square":["cancel","close","delete","remove","times","clear"],x:["cancel","close","delete","remove","times","clear"],youtube:["logo","video","play"],"zap-off":["flash","camera","lightning"],zap:["flash","camera","lightning"],"zoom-in":["magnifying glass"],"zoom-out":["magnifying glass"]}},"./src/to-svg.js":
/*!***********************!*\
        !*** ./src/to-svg.js ***!
        \***********************/
/*! no static exports found */
function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r,o=t(
/*! ./icons */
"./src/icons.js"),i=(r=o)&&r.__esModule?r:{default:r};n.default=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(console.warn("feather.toSvg() is deprecated. Please use feather.icons[name].toSvg() instead."),!e)throw new Error("The required `key` (icon name) parameter is missing.");if(!i.default[e])throw new Error("No icon matching '"+e+"'. See the complete list of icons at https://feathericons.com");return i.default[e].toSvg(n)}},0:
/*!**************************************************!*\
        !*** multi core-js/es/array/from ./src/index.js ***!
        \**************************************************/
/*! no static exports found */
function(e,n,t){t(
/*! core-js/es/array/from */
"./node_modules/core-js/es/array/from.js"),e.exports=t(
/*! /home/travis/build/feathericons/feather/src/index.js */
"./src/index.js")}})},"object"===l(n)&&"object"===l(e)?e.exports=i():(r=[],void 0===(o="function"==typeof(t=i)?t.apply(n,r):t)||(e.exports=o))}).call(this,t("RoC8")(e))},"ox/y":function(e,n,t){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(n,"__esModule",{value:!0}),n.Link=n.Match=void 0;var o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i=t("HteQ"),l=t("Y3FI");function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function c(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==r(n)&&"function"!=typeof n?e:n}var s=n.Match=function(e){function n(){var t,r;a(this,n);for(var o=arguments.length,i=Array(o),l=0;l<o;l++)i[l]=arguments[l];return t=r=c(this,e.call.apply(e,[this].concat(i))),r.update=function(e){r.nextUrl=e,r.setState({})},c(r,t)}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+r(n));e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,e),n.prototype.componentDidMount=function(){l.subscribers.push(this.update)},n.prototype.componentWillUnmount=function(){l.subscribers.splice(l.subscribers.indexOf(this.update)>>>0,1)},n.prototype.render=function(e){var n=this.nextUrl||(0,l.getCurrentUrl)(),t=n.replace(/\?.+$/,"");return this.nextUrl=null,e.children({url:n,path:t,matches:!1!==(0,l.exec)(t,e.path,{})})},n}(i.Component),p=function(e){var n=e.activeClassName,t=e.path,r=function(e,n){var t={};for(var r in e)n.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}(e,["activeClassName","path"]);return(0,i.h)(s,{path:t||r.href},(function(e){var t=e.matches;return(0,i.h)(l.Link,o({},r,{class:[r.class||r.className,t&&n].filter(Boolean).join(" ")}))}))};n.Link=p,n.default=s,s.Link=p},qVkA:function(e,n,t){"use strict";t.r(n);var r={};t.r(r),t.d(r,"Part1",(function(){return j})),t.d(r,"Part2",(function(){return g}));var o={};t.r(o),t.d(o,"useState",(function(){return F})),t.d(o,"useReducer",(function(){return K})),t.d(o,"useEffect",(function(){return Y})),t.d(o,"useLayoutEffect",(function(){return B})),t.d(o,"useRef",(function(){return W})),t.d(o,"useImperativeHandle",(function(){return $})),t.d(o,"useMemo",(function(){return Q})),t.d(o,"useCallback",(function(){return G})),t.d(o,"useContext",(function(){return Z})),t.d(o,"useDebugValue",(function(){return J})),t.d(o,"useErrorBoundary",(function(){return X}));var i=t("HteQ"),l=t("Y3FI"),a="/".concat("advent-of-code-2021"),c=t("ox/y"),s=function(){return Object(i.h)("div",null,Object(i.h)("h1",null,"Error 404"),Object(i.h)("p",null,"That page doesn't exist."),Object(i.h)(c.Link,{href:"".concat(a,"/")},"Back to Home"))},p=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.filter(Boolean).join(" ")},u="button__TEQZf",y="primary__xD89D",d="plain__R5uOs",h="compact__2ZT-3",f=function(e){var n=e.primary,t=e.plain,r=e.compact,o=e.ariaLabel,l=e.onClick,a=e.children;return Object(i.h)("button",{class:p(u,n&&y,t&&d,r&&h),onClick:l,"aria-label":o},a)},x="container__aePOz",m=function(e){var n=e.part,t=e.solution,r=1===n?t.Part1:t.Part2;return r?Object(i.h)("div",{class:x},Object(i.h)("h2",null,"Part ",n),Object(i.h)(r,null)):null},j=function(){return Object(i.h)("p",null,"Hello World")},g=function(){return Object(i.h)("p",null,"Hello World")},v=[r];function _(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,o,i=[],l=!0,a=!1;try{for(t=t.call(e);!(l=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);l=!0);}catch(e){a=!0,o=e}finally{try{l||null==t.return||t.return()}finally{if(a)throw o}}return i}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return b(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return b(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var w=function(e,n){return e===n||e.length===n.length&&e.every((function(e,t){return e===n[t]}))},M=function(e){return e};function k(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"==typeof e)return O(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return O(e,n)}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,a=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return l=e.done,e},e:function(e){a=!0,i=e},f:function(){try{l||null==t.return||t.return()}finally{if(a)throw i}}}}function O(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function A(e){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var z,H,S,V=Object.assign||function(e,n){return n&&Object.keys(n).forEach((function(t){return e[t]=n[t]})),e},P=function e(n,t,r){var o=A(r);if(r&&"object"===o)if(Array.isArray(r)){var i,l=k(r);try{for(l.s();!(i=l.n()).done;){t=e(n,t,i.value)}}catch(e){l.e(e)}finally{l.f()}}else for(var a=0,c=Object.keys(r);a<c.length;a++){var s=c[a],p=r[s];"function"==typeof p?t[s]=p(t[s],C):void 0===p?n&&!isNaN(s)?t.splice(s,1):delete t[s]:null===p||"object"!=A(p)||Array.isArray(p)?t[s]=p:"object"==A(t[s])?t[s]=p===t[s]?p:C(t[s],p):t[s]=e(!1,{},p)}else"function"===o&&(t=r(t,C));return t},C=function(e){for(var n=Array.isArray(e),t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];return P(n,n?e.slice():V({},e),r)},L=C,E=0,I=[],T=i.options.__b,R=i.options.__r,q=i.options.diffed,U=i.options.__c,D=i.options.unmount;function N(e,n){i.options.__h&&i.options.__h(H,e,E||n),E=0;var t=H.__H||(H.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({}),t.__[e]}function F(e){return E=1,K(ie,e)}function K(e,n,t){var r=N(z++,2);return r.t=e,r.__c||(r.__=[t?t(n):ie(void 0,n),function(e){var n=r.t(r.__[0],e);r.__[0]!==n&&(r.__=[n,r.__[1]],r.__c.setState({}))}],r.__c=H),r.__}function Y(e,n){var t=N(z++,3);!i.options.__s&&oe(t.__H,n)&&(t.__=e,t.__H=n,H.__H.__h.push(t))}function B(e,n){var t=N(z++,4);!i.options.__s&&oe(t.__H,n)&&(t.__=e,t.__H=n,H.__h.push(t))}function W(e){return E=5,Q((function(){return{current:e}}),[])}function $(e,n,t){E=6,B((function(){"function"==typeof e?e(n()):e&&(e.current=n())}),null==t?t:t.concat(e))}function Q(e,n){var t=N(z++,7);return oe(t.__H,n)&&(t.__=e(),t.__H=n,t.__h=e),t.__}function G(e,n){return E=8,Q((function(){return e}),n)}function Z(e){var n=H.context[e.__c],t=N(z++,9);return t.c=e,n?(null==t.__&&(t.__=!0,n.sub(H)),n.props.value):e.__}function J(e,n){i.options.useDebugValue&&i.options.useDebugValue(n?n(e):e)}function X(e){var n=N(z++,10),t=F();return n.__=e,H.componentDidCatch||(H.componentDidCatch=function(e){n.__&&n.__(e),t[1](e)}),[t[0],function(){t[1](void 0)}]}function ee(){I.forEach((function(e){if(e.__P)try{e.__H.__h.forEach(te),e.__H.__h.forEach(re),e.__H.__h=[]}catch(n){e.__H.__h=[],i.options.__e(n,e.__v)}})),I=[]}i.options.__b=function(e){H=null,T&&T(e)},i.options.__r=function(e){R&&R(e),z=0;var n=(H=e.__c).__H;n&&(n.__h.forEach(te),n.__h.forEach(re),n.__h=[])},i.options.diffed=function(e){q&&q(e);var n=e.__c;n&&n.__H&&n.__H.__h.length&&(1!==I.push(n)&&S===i.options.requestAnimationFrame||((S=i.options.requestAnimationFrame)||function(e){var n,t=function(){clearTimeout(r),ne&&cancelAnimationFrame(n),setTimeout(e)},r=setTimeout(t,100);ne&&(n=requestAnimationFrame(t))})(ee)),H=null},i.options.__c=function(e,n){n.some((function(e){try{e.__h.forEach(te),e.__h=e.__h.filter((function(e){return!e.__||re(e)}))}catch(t){n.some((function(e){e.__h&&(e.__h=[])})),n=[],i.options.__e(t,e.__v)}})),U&&U(e,n)},i.options.unmount=function(e){D&&D(e);var n,t=e.__c;t&&t.__H&&(t.__H.__.forEach((function(e){try{te(e)}catch(e){n=e}})),n&&i.options.__e(n,t.__v))};var ne="function"==typeof requestAnimationFrame;function te(e){var n=H,t=e.__c;"function"==typeof t&&(e.__c=void 0,t()),H=n}function re(e){var n=H;e.__c=e.__(),H=n}function oe(e,n){return!e||e.length!==n.length||n.some((function(n,t){return n!==e[t]}))}function ie(e,n){return"function"==typeof n?n(e):n}var le={part:null,showCode:!1,code:""},ae=function(e){var n=e.merge,t=e.hooks,r=t.useReducer,o=t.useLayoutEffect,i=e.state,l=void 0===i?{}:i,a=function(e){return"string"==typeof e?(n=l,e.split(".").reduce((function(e,n){return e?e[n]:void 0}),n)):e(l);var n},c=function(e){return Array.isArray(e)?[e.map(a),!0]:[a(e),!1]},s=function(e){var n=_(c(e.t),2),t=n[0],r=n[1];(r?w(t,e.o):t===e.o)||("function"==typeof e.s&&e.s(),e.s=function(e,n,t){return e[t?"apply":"call"](null,n)}(e.l,e.o=t,r))},p=new Set,u=function(e){return p.add(e),s(e),function(){return p.delete(e)}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,n=r((function(e){return e+1}),0),t=_(n,2),i=t[1],l=r(M,{l:i}),a=_(l,1),s=a[0];return s.t&&(Array.isArray(e)?w(e,s.t):e===s.t)||(s.o=c(e)[0],s.t=e),o((function(){return u(s)}),[]),s.o};return y.get=function(){return l},y.set=function(e){l=n(l,e),p.forEach(s)},y.subscribe=function(e,n){var t;return n||(e=(t=[M,e])[0],n=t[1]),u({l:n,t:e,o:[]})},y}({merge:L,hooks:o,state:le}),ce=ae.set,se=(ae.get,function(e){return ce({part:e})}),pe="container__PVQVi",ue="buttons__wCOvv",ye=function(e){var n=e.day;n=n||1;var t=ae((function(e){return e.part})),r=v[n-1];return Object(i.h)("div",null,Object(i.h)("h1",null,"Day ",n),null!=r&&r.Part1||null!=r&&r.Part2?Object(i.h)("div",{class:pe},Object(i.h)("div",{class:ue},(null==r?void 0:r.Part1)&&Object(i.h)(f,{onClick:function(){return se(1)}},"Part 1"),(null==r?void 0:r.Part2)&&Object(i.h)(f,{onClick:function(){return se(2)}},"Part 2")),r&&t?Object(i.h)(m,{solution:r,part:t}):null):Object(i.h)("p",null,"Day ",n," is not yet implemented"))},de=t("kNYS"),he=t.n(de),fe="container__HPXMh",xe=["name"];function me(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var je=function(e){var n=e.name,t=me(e,xe);return Object(i.h)("span",{class:fe,dangerouslySetInnerHTML:{__html:he.a.icons[n].toSvg(t)}})},ge=function(e){var n=e.children,t=W();return Y((function(){var e=document.createElement("div");return document.body.appendChild(e),t.current=e,function(){Object(i.render)(null,e),e.remove()}}),[]),Y((function(){t.current&&Object(i.render)(n,t.current)}),[n]),null},ve="header__3YKgi",_e="logo__Q3ZIu",be="navBtn__QwRts",we="active__Yg9yU",Me="sideNav__Ap8Dk";function ke(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,o,i=[],l=!0,a=!1;try{for(t=t.call(e);!(l=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);l=!0);}catch(e){a=!0,o=e}finally{try{l||null==t.return||t.return()}finally{if(a)throw o}}return i}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return Oe(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Oe(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Oe(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var Ae=function(){var e=ke(F(!1),2),n=e[0],t=e[1],r=function(){return t(!1)};return Object(i.h)("header",{onClick:r,class:ve},Object(i.h)(c.Link,{onClick:r,class:_e,href:"".concat(a,"/")},"advent of code 2021"),Object(i.h)("nav",null,Object(i.h)("button",{class:be,onClick:function(e){t(!n),e.stopImmediatePropagation()},"aria-label":"open navigation menu"},Object(i.h)(je,{name:"menu"}))),Object(i.h)(ge,null,Object(i.h)("div",{class:p(Me,n&&we),onClick:r},Object(i.h)("nav",{onClick:function(e){e.stopImmediatePropagation()}},Object(i.h)("ul",null,Object(i.h)("li",null,Object(i.h)(c.Link,{onClick:r,activeClassName:we,href:"".concat(a,"/"),tabIndex:n?void 0:-1},"Day 1")),Object(i.h)("li",null,Object(i.h)(c.Link,{onClick:r,activeClassName:we,href:"".concat(a,"/2"),tabIndex:n?void 0:-1},"Day 2")),Object(i.h)("li",null,Object(i.h)(c.Link,{onClick:r,activeClassName:we,href:"".concat(a,"/3"),tabIndex:n?void 0:-1},"Day 3")))))))},ze="container__5J6y7";n.default=function(){return Object(i.h)("div",{id:"preact_root"},Object(i.h)(Ae,null),Object(i.h)("div",{class:ze},Object(i.h)(l.Router,null,Object(i.h)(l.Route,{path:"".concat(a,"/:day?"),component:ye}),Object(i.h)(s,{default:!0}))))}}});
//# sourceMappingURL=ssr-bundle.js.map