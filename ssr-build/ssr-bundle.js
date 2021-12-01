module.exports=function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="/advent-of-code-2021/",t(t.s="qVkA")}({HteQ:function(n,e){n.exports=require("preact")},RoC8:function(n,e){n.exports=function(n){return n.webpackPolyfill||(n.deprecate=function(){},n.paths=[],n.children||(n.children=[]),Object.defineProperty(n,"loaded",{enumerable:!0,get:function(){return n.l}}),Object.defineProperty(n,"id",{enumerable:!0,get:function(){return n.i}}),n.webpackPolyfill=1),n}},Y3FI:function(n,e,t){"use strict";t.r(e),t.d(e,"subscribers",(function(){return d})),t.d(e,"getCurrentUrl",(function(){return f})),t.d(e,"route",(function(){return x})),t.d(e,"Router",(function(){return w})),t.d(e,"Route",(function(){return k})),t.d(e,"Link",(function(){return M})),t.d(e,"exec",(function(){return l}));var r=t("HteQ"),o={};function i(n,e){for(var t in e)n[t]=e[t];return n}function l(n,e,t){var r,i=/(?:\?([^#]*))?(#.*)?$/,l=n.match(i),a={};if(l&&l[1])for(var c=l[1].split("&"),u=0;u<c.length;u++){var p=c[u].split("=");a[decodeURIComponent(p[0])]=decodeURIComponent(p.slice(1).join("="))}n=s(n.replace(i,"")),e=s(e||"");for(var y=Math.max(n.length,e.length),d=0;d<y;d++)if(e[d]&&":"===e[d].charAt(0)){var h=e[d].replace(/(^:|[+*?]+$)/g,""),f=(e[d].match(/[+*?]+$/)||o)[0]||"",x=~f.indexOf("+"),m=~f.indexOf("*"),j=n[d]||"";if(!j&&!m&&(f.indexOf("?")<0||x)){r=!1;break}if(a[h]=decodeURIComponent(j),x||m){a[h]=n.slice(d).map(decodeURIComponent).join("/");break}}else if(e[d]!==n[d]){r=!1;break}return(!0===t.default||!1!==r)&&a}function a(n,e){return n.rank<e.rank?1:n.rank>e.rank?-1:n.index-e.index}function c(n,e){return n.index=e,n.rank=function(n){return n.props.default?0:(e=n.props.path,s(e).map(u).join(""));var e}(n),n.props}function s(n){return n.replace(/(^\/+|\/+$)/g,"").split("/")}function u(n){return":"==n.charAt(0)?1+"*+?".indexOf(n.charAt(n.length-1))||4:5}var p=null,y=[],d=[],h={};function f(){var n;return""+((n=p&&p.location?p.location:p&&p.getCurrentLocation?p.getCurrentLocation():"undefined"!=typeof location?location:h).pathname||"")+(n.search||"")}function x(n,e){return void 0===e&&(e=!1),"string"!=typeof n&&n.url&&(e=n.replace,n=n.url),function(n){for(var e=y.length;e--;)if(y[e].canRoute(n))return!0;return!1}(n)&&function(n,e){void 0===e&&(e="push"),p&&p[e]?p[e](n):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,n)}(n,e?"replace":"push"),m(n)}function m(n){for(var e=!1,t=0;t<y.length;t++)!0===y[t].routeTo(n)&&(e=!0);for(var r=d.length;r--;)d[r](n);return e}function j(n){if(n&&n.getAttribute){var e=n.getAttribute("href"),t=n.getAttribute("target");if(e&&e.match(/^\//g)&&(!t||t.match(/^_?self$/i)))return x(e)}}function v(n){if(!(n.ctrlKey||n.metaKey||n.altKey||n.shiftKey||0!==n.button))return j(n.currentTarget||n.target||this),g(n)}function g(n){return n&&(n.stopImmediatePropagation&&n.stopImmediatePropagation(),n.stopPropagation&&n.stopPropagation(),n.preventDefault()),!1}function _(n){if(!(n.ctrlKey||n.metaKey||n.altKey||n.shiftKey||0!==n.button)){var e=n.target;do{if("A"===String(e.nodeName).toUpperCase()&&e.getAttribute("href")){if(e.hasAttribute("native"))return;if(j(e))return g(n)}}while(e=e.parentNode)}}var b=!1;var w=function(n){function e(e){n.call(this,e),e.history&&(p=e.history),this.state={url:e.url||f()},b||("function"==typeof addEventListener&&(p||addEventListener("popstate",(function(){m(f())})),addEventListener("click",_)),b=!0)}return n&&(e.__proto__=n),e.prototype=Object.create(n&&n.prototype),e.prototype.constructor=e,e.prototype.shouldComponentUpdate=function(n){return!0!==n.static||(n.url!==this.props.url||n.onChange!==this.props.onChange)},e.prototype.canRoute=function(n){var e=Object(r.toChildArray)(this.props.children);return this.getMatchingChildren(e,n,!1).length>0},e.prototype.routeTo=function(n){this.setState({url:n});var e=this.canRoute(n);return this.updating||this.forceUpdate(),e},e.prototype.componentWillMount=function(){y.push(this),this.updating=!0},e.prototype.componentDidMount=function(){var n=this;p&&(this.unlisten=p.listen((function(e){n.routeTo(""+(e.pathname||"")+(e.search||""))}))),this.updating=!1},e.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),y.splice(y.indexOf(this),1)},e.prototype.componentWillUpdate=function(){this.updating=!0},e.prototype.componentDidUpdate=function(){this.updating=!1},e.prototype.getMatchingChildren=function(n,e,t){return n.filter(c).sort(a).map((function(n){var o=l(e,n.props.path,n.props);if(o){if(!1!==t){var a={url:e,matches:o};return i(a,o),delete a.ref,delete a.key,Object(r.cloneElement)(n,a)}return n}})).filter(Boolean)},e.prototype.render=function(n,e){var t=n.children,o=n.onChange,i=e.url,l=this.getMatchingChildren(Object(r.toChildArray)(t),i,!0),a=l[0]||null,c=this.previousUrl;return i!==c&&(this.previousUrl=i,"function"==typeof o&&o({router:this,url:i,previous:c,active:l,current:a})),a},e}(r.Component),M=function(n){return Object(r.createElement)("a",i({onClick:v},n))},k=function(n){return Object(r.createElement)(n.component,n)};w.subscribers=d,w.getCurrentUrl=f,w.route=x,w.Router=w,w.Route=k,w.Link=M,w.exec=l,e.default=w},kNYS:function(n,e,t){(function(n){var t,r,o,i;function l(n){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}"undefined"!=typeof self&&self,i=function(){return function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:r})},t.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}({"./dist/icons.json":
/*!*************************!*\
        !*** ./dist/icons.json ***!
        \*************************/
/*! exports provided: activity, airplay, alert-circle, alert-octagon, alert-triangle, align-center, align-justify, align-left, align-right, anchor, aperture, archive, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, award, bar-chart-2, bar-chart, battery-charging, battery, bell-off, bell, bluetooth, bold, book-open, book, bookmark, box, briefcase, calendar, camera-off, camera, cast, check-circle, check-square, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, chrome, circle, clipboard, clock, cloud-drizzle, cloud-lightning, cloud-off, cloud-rain, cloud-snow, cloud, code, codepen, codesandbox, coffee, columns, command, compass, copy, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, cpu, credit-card, crop, crosshair, database, delete, disc, divide-circle, divide-square, divide, dollar-sign, download-cloud, download, dribbble, droplet, edit-2, edit-3, edit, external-link, eye-off, eye, facebook, fast-forward, feather, figma, file-minus, file-plus, file-text, file, film, filter, flag, folder-minus, folder-plus, folder, framer, frown, gift, git-branch, git-commit, git-merge, git-pull-request, github, gitlab, globe, grid, hard-drive, hash, headphones, heart, help-circle, hexagon, home, image, inbox, info, instagram, italic, key, layers, layout, life-buoy, link-2, link, linkedin, list, loader, lock, log-in, log-out, mail, map-pin, map, maximize-2, maximize, meh, menu, message-circle, message-square, mic-off, mic, minimize-2, minimize, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, mouse-pointer, move, music, navigation-2, navigation, octagon, package, paperclip, pause-circle, pause, pen-tool, percent, phone-call, phone-forwarded, phone-incoming, phone-missed, phone-off, phone-outgoing, phone, pie-chart, play-circle, play, plus-circle, plus-square, plus, pocket, power, printer, radio, refresh-ccw, refresh-cw, repeat, rewind, rotate-ccw, rotate-cw, rss, save, scissors, search, send, server, settings, share-2, share, shield-off, shield, shopping-bag, shopping-cart, shuffle, sidebar, skip-back, skip-forward, slack, slash, sliders, smartphone, smile, speaker, square, star, stop-circle, sun, sunrise, sunset, tablet, tag, target, terminal, thermometer, thumbs-down, thumbs-up, toggle-left, toggle-right, tool, trash-2, trash, trello, trending-down, trending-up, triangle, truck, tv, twitch, twitter, type, umbrella, underline, unlock, upload-cloud, upload, user-check, user-minus, user-plus, user-x, user, users, video-off, video, voicemail, volume-1, volume-2, volume-x, volume, watch, wifi-off, wifi, wind, x-circle, x-octagon, x-square, x, youtube, zap-off, zap, zoom-in, zoom-out, default */
function(n){n.exports={activity:'<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>',airplay:'<path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon>',"alert-circle":'<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',"alert-octagon":'<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',"alert-triangle":'<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>',"align-center":'<line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line>',"align-justify":'<line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line>',"align-left":'<line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line>',"align-right":'<line x1="21" y1="10" x2="7" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="7" y2="18"></line>',anchor:'<circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>',aperture:'<circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>',archive:'<polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line>',"arrow-down-circle":'<circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line>',"arrow-down-left":'<line x1="17" y1="7" x2="7" y2="17"></line><polyline points="17 17 7 17 7 7"></polyline>',"arrow-down-right":'<line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline>',"arrow-down":'<line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline>',"arrow-left-circle":'<circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line>',"arrow-left":'<line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>',"arrow-right-circle":'<circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line>',"arrow-right":'<line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>',"arrow-up-circle":'<circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line>',"arrow-up-left":'<line x1="17" y1="17" x2="7" y2="7"></line><polyline points="7 17 7 7 17 7"></polyline>',"arrow-up-right":'<line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>',"arrow-up":'<line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline>',"at-sign":'<circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>',award:'<circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>',"bar-chart-2":'<line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>',"bar-chart":'<line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line>',"battery-charging":'<path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"></path><line x1="23" y1="13" x2="23" y2="11"></line><polyline points="11 6 7 12 13 12 9 18"></polyline>',battery:'<rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect><line x1="23" y1="13" x2="23" y2="11"></line>',"bell-off":'<path d="M13.73 21a2 2 0 0 1-3.46 0"></path><path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path><path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path><path d="M18 8a6 6 0 0 0-9.33-5"></path><line x1="1" y1="1" x2="23" y2="23"></line>',bell:'<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>',bluetooth:'<polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"></polyline>',bold:'<path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>',"book-open":'<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>',book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>',bookmark:'<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>',box:'<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',briefcase:'<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>',calendar:'<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>',"camera-off":'<line x1="1" y1="1" x2="23" y2="23"></line><path d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"></path>',camera:'<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle>',cast:'<path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2.01" y2="20"></line>',"check-circle":'<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>',"check-square":'<polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>',check:'<polyline points="20 6 9 17 4 12"></polyline>',"chevron-down":'<polyline points="6 9 12 15 18 9"></polyline>',"chevron-left":'<polyline points="15 18 9 12 15 6"></polyline>',"chevron-right":'<polyline points="9 18 15 12 9 6"></polyline>',"chevron-up":'<polyline points="18 15 12 9 6 15"></polyline>',"chevrons-down":'<polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline>',"chevrons-left":'<polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline>',"chevrons-right":'<polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline>',"chevrons-up":'<polyline points="17 11 12 6 7 11"></polyline><polyline points="17 18 12 13 7 18"></polyline>',chrome:'<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>',circle:'<circle cx="12" cy="12" r="10"></circle>',clipboard:'<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>',clock:'<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>',"cloud-drizzle":'<line x1="8" y1="19" x2="8" y2="21"></line><line x1="8" y1="13" x2="8" y2="15"></line><line x1="16" y1="19" x2="16" y2="21"></line><line x1="16" y1="13" x2="16" y2="15"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="12" y1="15" x2="12" y2="17"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',"cloud-lightning":'<path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path><polyline points="13 11 9 17 15 17 11 23"></polyline>',"cloud-off":'<path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"></path><line x1="1" y1="1" x2="23" y2="23"></line>',"cloud-rain":'<line x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',"cloud-snow":'<path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path><line x1="8" y1="16" x2="8.01" y2="16"></line><line x1="8" y1="20" x2="8.01" y2="20"></line><line x1="12" y1="18" x2="12.01" y2="18"></line><line x1="12" y1="22" x2="12.01" y2="22"></line><line x1="16" y1="16" x2="16.01" y2="16"></line><line x1="16" y1="20" x2="16.01" y2="20"></line>',cloud:'<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>',code:'<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>',codepen:'<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line>',codesandbox:'<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',coffee:'<path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line>',columns:'<path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>',command:'<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>',compass:'<circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>',copy:'<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>',"corner-down-left":'<polyline points="9 10 4 15 9 20"></polyline><path d="M20 4v7a4 4 0 0 1-4 4H4"></path>',"corner-down-right":'<polyline points="15 10 20 15 15 20"></polyline><path d="M4 4v7a4 4 0 0 0 4 4h12"></path>',"corner-left-down":'<polyline points="14 15 9 20 4 15"></polyline><path d="M20 4h-7a4 4 0 0 0-4 4v12"></path>',"corner-left-up":'<polyline points="14 9 9 4 4 9"></polyline><path d="M20 20h-7a4 4 0 0 1-4-4V4"></path>',"corner-right-down":'<polyline points="10 15 15 20 20 15"></polyline><path d="M4 4h7a4 4 0 0 1 4 4v12"></path>',"corner-right-up":'<polyline points="10 9 15 4 20 9"></polyline><path d="M4 20h7a4 4 0 0 0 4-4V4"></path>',"corner-up-left":'<polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>',"corner-up-right":'<polyline points="15 14 20 9 15 4"></polyline><path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>',cpu:'<rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line>',"credit-card":'<rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line>',crop:'<path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"></path><path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"></path>',crosshair:'<circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line>',database:'<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>',delete:'<path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line>',disc:'<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle>',"divide-circle":'<line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line><circle cx="12" cy="12" r="10"></circle>',"divide-square":'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line>',divide:'<circle cx="12" cy="6" r="2"></circle><line x1="5" y1="12" x2="19" y2="12"></line><circle cx="12" cy="18" r="2"></circle>',"dollar-sign":'<line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>',"download-cloud":'<polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>',download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>',dribbble:'<circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>',droplet:'<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>',"edit-2":'<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>',"edit-3":'<path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>',edit:'<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>',"external-link":'<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>',"eye-off":'<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>',eye:'<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>',facebook:'<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>',"fast-forward":'<polygon points="13 19 22 12 13 5 13 19"></polygon><polygon points="2 19 11 12 2 5 2 19"></polygon>',feather:'<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line>',figma:'<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>',"file-minus":'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" y1="15" x2="15" y2="15"></line>',"file-plus":'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line>',"file-text":'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>',file:'<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline>',film:'<rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line>',filter:'<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>',flag:'<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line>',"folder-minus":'<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="9" y1="14" x2="15" y2="14"></line>',"folder-plus":'<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line>',folder:'<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>',framer:'<path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"></path>',frown:'<circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',gift:'<polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>',"git-branch":'<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>',"git-commit":'<circle cx="12" cy="12" r="4"></circle><line x1="1.05" y1="12" x2="7" y2="12"></line><line x1="17.01" y1="12" x2="22.96" y2="12"></line>',"git-merge":'<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path>',"git-pull-request":'<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line>',github:'<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>',gitlab:'<path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>',globe:'<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>',grid:'<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>',"hard-drive":'<line x1="22" y1="12" x2="2" y2="12"></line><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" y1="16" x2="6.01" y2="16"></line><line x1="10" y1="16" x2="10.01" y2="16"></line>',hash:'<line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line>',headphones:'<path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>',heart:'<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>',"help-circle":'<circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line>',hexagon:'<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>',home:'<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>',image:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline>',inbox:'<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>',info:'<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>',instagram:'<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>',italic:'<line x1="19" y1="4" x2="10" y2="4"></line><line x1="14" y1="20" x2="5" y2="20"></line><line x1="15" y1="4" x2="9" y2="20"></line>',key:'<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>',layers:'<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>',layout:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>',"life-buoy":'<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>',"link-2":'<path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line>',link:'<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>',linkedin:'<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>',list:'<line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>',loader:'<line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>',lock:'<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>',"log-in":'<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line>',"log-out":'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line>',mail:'<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>',"map-pin":'<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>',map:'<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line>',"maximize-2":'<polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line>',maximize:'<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>',meh:'<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="15" x2="16" y2="15"></line><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',menu:'<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>',"message-circle":'<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>',"message-square":'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>',"mic-off":'<line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',mic:'<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',"minimize-2":'<polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line>',minimize:'<path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>',"minus-circle":'<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line>',"minus-square":'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line>',minus:'<line x1="5" y1="12" x2="19" y2="12"></line>',monitor:'<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>',moon:'<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>',"more-horizontal":'<circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>',"more-vertical":'<circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle>',"mouse-pointer":'<path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path><path d="M13 13l6 6"></path>',move:'<polyline points="5 9 2 12 5 15"></polyline><polyline points="9 5 12 2 15 5"></polyline><polyline points="15 19 12 22 9 19"></polyline><polyline points="19 9 22 12 19 15"></polyline><line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line>',music:'<path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle>',"navigation-2":'<polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>',navigation:'<polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>',octagon:'<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>',package:'<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',paperclip:'<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>',"pause-circle":'<circle cx="12" cy="12" r="10"></circle><line x1="10" y1="15" x2="10" y2="9"></line><line x1="14" y1="15" x2="14" y2="9"></line>',pause:'<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>',"pen-tool":'<path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle>',percent:'<line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle>',"phone-call":'<path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',"phone-forwarded":'<polyline points="19 1 23 5 19 9"></polyline><line x1="15" y1="5" x2="23" y2="5"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',"phone-incoming":'<polyline points="16 2 16 8 22 8"></polyline><line x1="23" y1="1" x2="16" y2="8"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',"phone-missed":'<line x1="23" y1="1" x2="17" y2="7"></line><line x1="17" y1="1" x2="23" y2="7"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',"phone-off":'<path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path><line x1="23" y1="1" x2="1" y2="23"></line>',"phone-outgoing":'<polyline points="23 7 23 1 17 1"></polyline><line x1="16" y1="8" x2="23" y2="1"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',phone:'<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',"pie-chart":'<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path>',"play-circle":'<circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon>',play:'<polygon points="5 3 19 12 5 21 5 3"></polygon>',"plus-circle":'<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',"plus-square":'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',plus:'<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>',pocket:'<path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"></path><polyline points="8 10 12 14 16 10"></polyline>',power:'<path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line>',printer:'<polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect>',radio:'<circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>',"refresh-ccw":'<polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>',"refresh-cw":'<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>',repeat:'<polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path>',rewind:'<polygon points="11 19 2 12 11 5 11 19"></polygon><polygon points="22 19 13 12 22 5 22 19"></polygon>',"rotate-ccw":'<polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>',"rotate-cw":'<polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>',rss:'<path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle>',save:'<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline>',scissors:'<circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line>',search:'<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>',send:'<line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>',server:'<rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line>',settings:'<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>',"share-2":'<circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>',share:'<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line>',"shield-off":'<path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"></path><path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"></path><line x1="1" y1="1" x2="23" y2="23"></line>',shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>',"shopping-bag":'<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>',"shopping-cart":'<circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>',shuffle:'<polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line>',sidebar:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line>',"skip-back":'<polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line>',"skip-forward":'<polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line>',slack:'<path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"></path><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"></path><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"></path><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"></path><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"></path><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"></path>',slash:'<circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>',sliders:'<line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line>',smartphone:'<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',smile:'<circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',speaker:'<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><circle cx="12" cy="14" r="4"></circle><line x1="12" y1="6" x2="12.01" y2="6"></line>',square:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>',star:'<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>',"stop-circle":'<circle cx="12" cy="12" r="10"></circle><rect x="9" y="9" width="6" height="6"></rect>',sun:'<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>',sunrise:'<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline>',sunset:'<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="9" x2="12" y2="2"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="16 5 12 9 8 5"></polyline>',tablet:'<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',tag:'<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line>',target:'<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>',terminal:'<polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>',thermometer:'<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>',"thumbs-down":'<path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>',"thumbs-up":'<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>',"toggle-left":'<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="8" cy="12" r="3"></circle>',"toggle-right":'<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="16" cy="12" r="3"></circle>',tool:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>',"trash-2":'<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>',trash:'<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>',trello:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="7" y="7" width="3" height="9"></rect><rect x="14" y="7" width="3" height="5"></rect>',"trending-down":'<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline>',"trending-up":'<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>',triangle:'<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>',truck:'<rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle>',tv:'<rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline>',twitch:'<path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>',twitter:'<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>',type:'<polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line>',umbrella:'<path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"></path>',underline:'<path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path><line x1="4" y1="21" x2="20" y2="21"></line>',unlock:'<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path>',"upload-cloud":'<polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline>',upload:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line>',"user-check":'<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline>',"user-minus":'<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="23" y1="11" x2="17" y2="11"></line>',"user-plus":'<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line>',"user-x":'<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="18" y1="8" x2="23" y2="13"></line><line x1="23" y1="8" x2="18" y2="13"></line>',user:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>',users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',"video-off":'<path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path><line x1="1" y1="1" x2="23" y2="23"></line>',video:'<polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>',voicemail:'<circle cx="5.5" cy="11.5" r="4.5"></circle><circle cx="18.5" cy="11.5" r="4.5"></circle><line x1="5.5" y1="16" x2="18.5" y2="16"></line>',"volume-1":'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>',"volume-2":'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>',"volume-x":'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>',volume:'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>',watch:'<circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path>',"wifi-off":'<line x1="1" y1="1" x2="23" y2="23"></line><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path><path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',wifi:'<path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',wind:'<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>',"x-circle":'<circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',"x-octagon":'<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',"x-square":'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line>',x:'<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>',youtube:'<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>',"zap-off":'<polyline points="12.41 6.75 13 2 10.57 4.92"></polyline><polyline points="18.57 12.91 21 10 15.66 10"></polyline><polyline points="8 8 3 14 12 14 11 22 16 16"></polyline><line x1="1" y1="1" x2="23" y2="23"></line>',zap:'<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>',"zoom-in":'<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line>',"zoom-out":'<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line>'}},"./node_modules/classnames/dedupe.js":
/*!*******************************************!*\
        !*** ./node_modules/classnames/dedupe.js ***!
        \*******************************************/
/*! no static exports found */
function(n,e,t){var r;
/*!
        Copyright (c) 2016 Jed Watson.
        Licensed under the MIT License (MIT), see
        http://jedwatson.github.io/classnames
        */!function(){"use strict";var t=function(){function n(){}function e(n,e){for(var t=e.length,r=0;r<t;++r)o(n,e[r])}n.prototype=Object.create(null);var t={}.hasOwnProperty,r=/\s+/;function o(n,o){if(o){var i=l(o);"string"===i?function(n,e){for(var t=e.split(r),o=t.length,i=0;i<o;++i)n[t[i]]=!0}(n,o):Array.isArray(o)?e(n,o):"object"===i?function(n,e){for(var r in e)t.call(e,r)&&(n[r]=!!e[r])}(n,o):"number"===i&&function(n,e){n[e]=!0}(n,o)}}return function(){for(var t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];var i=new n;e(i,r);var l=[];for(var a in i)i[a]&&l.push(a);return l.join(" ")}}();void 0!==n&&n.exports?n.exports=t:void 0===(r=function(){return t}.apply(e,[]))||(n.exports=r)}()},"./node_modules/core-js/es/array/from.js":
/*!***********************************************!*\
        !*** ./node_modules/core-js/es/array/from.js ***!
        \***********************************************/
/*! no static exports found */
function(n,e,t){t(
/*! ../../modules/es.string.iterator */
"./node_modules/core-js/modules/es.string.iterator.js"),t(
/*! ../../modules/es.array.from */
"./node_modules/core-js/modules/es.array.from.js");var r=t(
/*! ../../internals/path */
"./node_modules/core-js/internals/path.js");n.exports=r.Array.from},"./node_modules/core-js/internals/a-function.js":
/*!******************************************************!*\
        !*** ./node_modules/core-js/internals/a-function.js ***!
        \******************************************************/
/*! no static exports found */
function(n,e){n.exports=function(n){if("function"!=typeof n)throw TypeError(String(n)+" is not a function");return n}},"./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
        !*** ./node_modules/core-js/internals/an-object.js ***!
        \*****************************************************/
/*! no static exports found */
function(n,e,t){var r=t(
/*! ../internals/is-object */
"./node_modules/core-js/internals/is-object.js");n.exports=function(n){if(!r(n))throw TypeError(String(n)+" is not an object");return n}},"./node_modules/core-js/internals/array-from.js":
/*!******************************************************!*\
        !*** ./node_modules/core-js/internals/array-from.js ***!
        \******************************************************/
/*! no static exports found */
function(n,e,t){"use strict";var r=t(
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
"./node_modules/core-js/internals/get-iterator-method.js");n.exports=function(n){var e,t,u,p,y=o(n),d="function"==typeof this?this:Array,h=arguments.length,f=h>1?arguments[1]:void 0,x=void 0!==f,m=0,j=s(y);if(x&&(f=r(f,h>2?arguments[2]:void 0,2)),null==j||d==Array&&l(j))for(t=new d(e=a(y.length));e>m;m++)c(t,m,x?f(y[m],m):y[m]);else for(p=j.call(y),t=new d;!(u=p.next()).done;m++)c(t,m,x?i(p,f,[u.value,m],!0):u.value);return t.length=m,t}},"./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*\
        !*** ./node_modules/core-js/internals/array-includes.js ***!
        \**********************************************************/
/*! no static exports found */
function(n,e,t){var r=t(
/*! ../internals/to-indexed-object */
"./node_modules/core-js/internals/to-indexed-object.js"),o=t(
/*! ../internals/to-length */
"./node_modules/core-js/internals/to-length.js"),i=t(
/*! ../internals/to-absolute-index */
"./node_modules/core-js/internals/to-absolute-index.js");n.exports=function(n){return function(e,t,l){var a,c=r(e),s=o(c.length),u=i(l,s);if(n&&t!=t){for(;s>u;)if((a=c[u++])!=a)return!0}else for(;s>u;u++)if((n||u in c)&&c[u]===t)return n||u||0;return!n&&-1}}},"./node_modules/core-js/internals/bind-context.js":
/*!********************************************************!*\
        !*** ./node_modules/core-js/internals/bind-context.js ***!
        \********************************************************/
/*! no static exports found */
function(n,e,t){var r=t(
/*! ../internals/a-function */
"./node_modules/core-js/internals/a-function.js");n.exports=function(n,e,t){if(r(n),void 0===e)return n;switch(t){case 0:return function(){return n.call(e)};case 1:return function(t){return n.call(e,t)};case 2:return function(t,r){return n.call(e,t,r)};case 3:return function(t,r,o){return n.call(e,t,r,o)}}return function(){return n.apply(e,arguments)}}},"./node_modules/core-js/internals/call-with-safe-iteration-closing.js":
/*!****************************************************************************!*\
        !*** ./node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
        \****************************************************************************/
/*! no static exports found */
function(n,e,t){var r=t(
/*! ../internals/an-object */
"./node_modules/core-js/internals/an-object.js");n.exports=function(n,e,t,o){try{return o?e(r(t)[0],t[1]):e(t)}catch(e){var i=n.return;throw void 0!==i&&r(i.call(n)),e}}},"./node_modules/core-js/internals/check-correctness-of-iteration.js":
/*!**************************************************************************!*\
        !*** ./node_modules/core-js/internals/check-correctness-of-iteration.js ***!
        \**************************************************************************/
/*! no static exports found */
function(n,e,t){var r=t(
/*! ../internals/well-known-symbol */
"./node_modules/core-js/internals/well-known-symbol.js")("iterator"),o=!1;try{var i=0,l={next:function(){return{done:!!i++}},return:function(){o=!0}};l[r]=function(){return this},Array.from(l,(function(){throw 2}))}catch(n){}n.exports=function(n,e){if(!e&&!o)return!1;var t=!1;try{var i={};i[r]=function(){return{next:function(){return{done:t=!0}}}},n(i)}catch(n){}return t}},"./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
        !*** ./node_modules/core-js/internals/classof-raw.js ***!
        \*******************************************************/
/*! no static exports found */
function(n,e){var t={}.toString;n.exports=function(n){return t.call(n).slice(8,-1)}},"./node_modules/core-js/internals/classof.js":
/*!***************************************************!*\
        !*** ./node_modules/core-js/internals/classof.js ***!
        \***************************************************/
/*! no static exports found */
function(n,e,t){var r=t(
/*! ../internals/classof-raw */
"./node_modules/core-js/internals/classof-raw.js"),o=t(
/*! ../internals/well-known-symbol */
"./node_modules/core-js/internals/well-known-symbol.js")("toStringTag"),i="Arguments"==r(function(){return arguments}());n.exports=function(n){var e,t,l;return void 0===n?"Undefined":null===n?"Null":"string"==typeof(t=function(n,e){try{return n[e]}catch(n){}}(e=Object(n),o))?t:i?r(e):"Object"==(l=r(e))&&"function"==typeof e.callee?"Arguments":l}},"./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
        !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
        \***********************************************************************/
/*! no static exports found */
function(n,e,t){var r=t(
/*! ../internals/has */
"./node_modules/core-js/internals/has.js"),o=t(
/*! ../internals/own-keys */
"./node_modules/core-js/internals/own-keys.js"),i=t(
/*! ../internals/object-get-own-property-descriptor */
"./node_modules/core-js/internals/object-get-own-property-descriptor.js"),l=t(
/*! ../internals/object-define-property */
"./node_modules/core-js/internals/object-define-property.js");n.exports=function(n,e){for(var t=o(e),a=l.f,c=i.f,s=0;s<t.length;s++){var u=t[s];r(n,u)||a(n,u,c(e,u))}}},"./node_modules/core-js/internals/correct-prototype-getter.js":
/*!********************************************************************!*\
        !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
        \********************************************************************/
/*! no static exports found */
function(n,e,t){var r=t(
/*! ../internals/fails */
"./node_modules/core-js/internals/fails.js");n.exports=!r((function(){function n(){}return n.prototype.constructor=null,Object.getPrototypeOf(new n)!==n.prototype}))},"./node_modules/core-js/internals/create-iterator-constructor.js":
/*!***********************************************************************!*\
        !*** ./node_modules/core-js/internals/create-iterator-constructor.js ***!
        \***********************************************************************/
/*! no static exports found */
function(n,e,t){"use strict";var r=t(
/*! ../internals/iterators-core */
"./node_modules/core-js/internals/iterators-core.js").IteratorPrototype,o=t(
/*! ../internals/object-create */
"./node_modules/core-js/internals/object-create.js"),i=t(
/*! ../internals/create-property-descriptor */
"./node_modules/core-js/internals/create-property-descriptor.js"),l=t(
/*! ../internals/set-to-string-tag */
"./node_modules/core-js/internals/set-to-string-tag.js"),a=t(
/*! ../internals/iterators */
"./node_modules/core-js/internals/iterators.js"),c=function(){return this};n.exports=function(n,e,t){var s=e+" Iterator";return n.prototype=o(r,{next:i(1,t)}),l(n,s,!1,!0),a[s]=c,n}},"./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
        !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
        \**********************************************************************/
/*! no static exports found */
function(n,e){n.exports=function(n,e){return{enumerable:!(1&n),configurable:!(2&n),writable:!(4&n),value:e}}},"./node_modules/core-js/internals/create-property.js":
/*!***********************************************************!*\
        !*** ./node_modules/core-js/internals/create-property.js ***!
        \***********************************************************/
/*! no static exports found */
function(n,e,t){"use strict";var r=t(
/*! ../internals/to-primitive */
"./node_modules/core-js/internals/to-primitive.js"),o=t(
/*! ../internals/object-define-property */
"./node_modules/core-js/internals/object-define-property.js"),i=t(
/*! ../internals/create-property-descriptor */
"./node_modules/core-js/internals/create-property-descriptor.js");n.exports=function(n,e,t){var l=r(e);l in n?o.f(n,l,i(0,t)):n[l]=t}},"./node_modules/core-js/internals/define-iterator.js":
/*!***********************************************************!*\
        !*** ./node_modules/core-js/internals/define-iterator.js ***!
        \***********************************************************/
/*! no static exports found */
function(n,e,t){"use strict";var r=t(
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
"./node_modules/core-js/internals/redefine.js"),u=t(
/*! ../internals/well-known-symbol */
"./node_modules/core-js/internals/well-known-symbol.js"),p=t(
/*! ../internals/is-pure */
"./node_modules/core-js/internals/is-pure.js"),y=t(
/*! ../internals/iterators */
"./node_modules/core-js/internals/iterators.js"),d=t(
/*! ../internals/iterators-core */
"./node_modules/core-js/internals/iterators-core.js"),h=d.IteratorPrototype,f=d.BUGGY_SAFARI_ITERATORS,x=u("iterator"),m=function(){return this};n.exports=function(n,e,t,u,d,j,v){o(t,e,u);var g,_,b,w=function(n){if(n===d&&z)return z;if(!f&&n in O)return O[n];switch(n){case"keys":case"values":case"entries":return function(){return new t(this,n)}}return function(){return new t(this)}},M=e+" Iterator",k=!1,O=n.prototype,A=O[x]||O["@@iterator"]||d&&O[d],z=!f&&A||w(d),H="Array"==e&&O.entries||A;if(H&&(g=i(H.call(new n)),h!==Object.prototype&&g.next&&(p||i(g)===h||(l?l(g,h):"function"!=typeof g[x]&&c(g,x,m)),a(g,M,!0,!0),p&&(y[M]=m))),"values"==d&&A&&"values"!==A.name&&(k=!0,z=function(){return A.call(this)}),p&&!v||O[x]===z||c(O,x,z),y[e]=z,d)if(_={values:w("values"),keys:j?z:w("keys"),entries:w("entries")},v)for(b in _)(f||k||!(b in O))&&s(O,b,_[b]);else r({target:e,proto:!0,forced:f||k},_);return _}},"./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
        !*** ./node_modules/core-js/internals/descriptors.js ***!
        \*******************************************************/
/*! no static exports found */
function(n,e,t){var r=t(
/*! ../internals/fails */
"./node_modules/core-js/internals/fails.js");n.exports=!r((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},"./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
        !*** ./node_modules/core-js/internals/document-create-element.js ***!
        \*******************************************************************/
/*! no static exports found */
function(n,e,t){var r=t(
/*! ../internals/global */
"./node_modules/core-js/internals/global.js"),o=t(
/*! ../internals/is-object */
"./node_modules/core-js/internals/is-object.js"),i=r.document,l=o(i)&&o(i.createElement);n.exports=function(n){return l?i.createElement(n):{}}},"./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*\
        !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
        \*********************************************************/
/*! no static exports found */
function(n,e){n.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"./node_modules/core-js/internals/export.js":
/*!**************************************************!*\
        !*** ./node_modules/core-js/internals/export.js ***!
        \**************************************************/
/*! no static exports found */
function(n,e,t){var r=t(
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
"./node_modules/core-js/internals/copy-constructor-properties.js"),u=t(
/*! ../internals/is-forced */
"./node_modules/core-js/internals/is-forced.js");n.exports=function(n,e){var t,p,y,d,h,f=n.target,x=n.global,m=n.stat;if(t=x?r:m?r[f]||c(f,{}):(r[f]||{}).prototype)for(p in e){if(d=e[p],y=n.noTargetGet?(h=o(t,p))&&h.value:t[p],!u(x?p:f+(m?".":"#")+p,n.forced)&&void 0!==y){if(l(d)===l(y))continue;s(d,y)}(n.sham||y&&y.sham)&&i(d,"sham",!0),a(t,p,d,n)}}},"./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
        !*** ./node_modules/core-js/internals/fails.js ***!
        \*************************************************/
/*! no static exports found */
function(n,e){n.exports=function(n){try{return!!n()}catch(n){return!0}}},"./node_modules/core-js/internals/function-to-string.js":
/*!**************************************************************!*\
        !*** ./node_modules/core-js/internals/function-to-string.js ***!
        \**************************************************************/
/*! no static exports found */
function(n,e,t){var r=t(
/*! ../internals/shared */
"./node_modules/core-js/internals/shared.js");n.exports=r("native-function-to-string",Function.toString)},"./node_modules/core-js/internals/get-iterator-method.js":
/*!***************************************************************!*\
        !*** ./node_modules/core-js/internals/get-iterator-method.js ***!
        \***************************************************************/
/*! no static exports found */
function(n,e,t){var r=t(
/*! ../internals/classof */
"./node_modules/core-js/internals/classof.js"),o=t(
/*! ../internals/iterators */
"./node_modules/core-js/internals/iterators.js"),i=t(
/*! ../internals/well-known-symbol */
"./node_modules/core-js/internals/well-known-symbol.js")("iterator");n.exports=function(n){if(null!=n)return n[i]||n["@@iterator"]||o[r(n)]}},"./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
        !*** ./node_modules/core-js/internals/global.js ***!
        \**************************************************/
/*! no static exports found */
function(n,e,t){(function(e){var t="object",r=function(n){return n&&n.Math==Math&&n};n.exports=r(("undefined"==typeof globalThis?"undefined":l(globalThis))==t&&globalThis)||r(("undefined"==typeof window?"undefined":l(window))==t&&window)||r(("undefined"==typeof self?"undefined":l(self))==t&&self)||r(l(e)==t&&e)||Function("return this")()}).call(this,t(
/*! ./../../webpack/buildin/global.js */
"./node_modules/webpack/buildin/global.js"))},"./node_modules/core-js/internals/has.js":
/*!***********************************************!*\
        !*** ./node_modules/core-js/internals/has.js ***!
        \***********************************************/
/*! no static exports found */
function(n,e){var t={}.hasOwnProperty;n.exports=function(n,e){return t.call(n,e)}},"./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
        !*** ./node_modules/core-js/internals/hidden-keys.js ***!
        \*******************************************************/
/*! no static exports found */
function(n,e){n.exports={}},"./node_modules/core-js/internals/hide.js":
/*!************************************************!*\
        !*** ./node_modules/core-js/internals/hide.js ***!
        \************************************************/
/*! no static exports found */
function(n,e,t){var r=t(
/*! ../internals/descriptors */
"./node_modules/core-js/internals/descriptors.js"),o=t(
/*! ../internals/object-define-property */
"./node_modules/core-js/internals/object-define-property.js"),i=t(
/*! ../internals/create-property-descriptor */
"./node_modules/core-js/internals/create-property-descriptor.js");n.exports=r?function(n,e,t){return o.f(n,e,i(1,t))}:function(n,e,t){return n[e]=t,n}},"./node_modules/core-js/internals/html.js":
/*!************************************************!*\
        !*** ./node_modules/core-js/internals/html.js ***!
        \************************************************/
/*! no static exports found */
function(n,e,t){var r=t(
/*! ../internals/global */
"./node_modules/core-js/internals/global.js").document;n.exports=r&&r.documentElement},"./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
        !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
        \**********************************************************/
/*! no static exports found */
function(n,e,t){var r=t(
/*! ../internals/descriptors */
"./node_modules/core-js/internals/descriptors.js"),o=t(
/*! ../internals/fails */
"./node_modules/core-js/internals/fails.js"),i=t(
/*! ../internals/document-create-element */
"./node_modules/core-js/internals/document-create-element.js");n.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},"./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
        !*** ./node_modules/core-js/internals/indexed-object.js ***!
        \**********************************************************/
/*! no static exports found */
function(n,e,t){var r=t(
/*! ../internals/fails */
"./node_modules/core-js/internals/fails.js"),o=t(
/*! ../internals/classof-raw */
"./node_modules/core-js/internals/classof-raw.js"),i="".split;n.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(n){return"String"==o(n)?i.call(n,""):Object(n)}:Object},"./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
        !*** ./node_modules/core-js/internals/internal-state.js ***!
        \**********************************************************/
/*! no static exports found */
function(n,e,t){var r,o,i,l=t(
/*! ../internals/native-weak-map */
"./node_modules/core-js/internals/native-weak-map.js"),a=t(
/*! ../internals/global */
"./node_modules/core-js/internals/global.js"),c=t(
/*! ../internals/is-object */
"./node_modules/core-js/internals/is-object.js"),s=t(
/*! ../internals/hide */
"./node_modules/core-js/internals/hide.js"),u=t(
/*! ../internals/has */
"./node_modules/core-js/internals/has.js"),p=t(
/*! ../internals/shared-key */
"./node_modules/core-js/internals/shared-key.js"),y=t(
/*! ../internals/hidden-keys */
"./node_modules/core-js/internals/hidden-keys.js"),d=a.WeakMap;if(l){var h=new d,f=h.get,x=h.has,m=h.set;r=function(n,e){return m.call(h,n,e),e},o=function(n){return f.call(h,n)||{}},i=function(n){return x.call(h,n)}}else{var j=p("state");y[j]=!0,r=function(n,e){return s(n,j,e),e},o=function(n){return u(n,j)?n[j]:{}},i=function(n){return u(n,j)}}n.exports={set:r,get:o,has:i,enforce:function(n){return i(n)?o(n):r(n,{})},getterFor:function(n){return function(e){var t;if(!c(e)||(t=o(e)).type!==n)throw TypeError("Incompatible receiver, "+n+" required");return t}}}},"./node_modules/core-js/internals/is-array-iterator-method.js":
/*!********************************************************************!*\
        !*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
        \********************************************************************/
/*! no static exports found */
function(n,e,t){var r=t(
/*! ../internals/well-known-symbol */
"./node_modules/core-js/internals/well-known-symbol.js"),o=t(
/*! ../internals/iterators */
"./node_modules/core-js/internals/iterators.js"),i=r("iterator"),l=Array.prototype;n.exports=function(n){return void 0!==n&&(o.Array===n||l[i]===n)}},"./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*\
        !*** ./node_modules/core-js/internals/is-forced.js ***!
        \*****************************************************/
/*! no static exports found */
function(n,e,t){var r=t(
/*! ../internals/fails */
"./node_modules/core-js/internals/fails.js"),o=/#|\.prototype\./,i=function(n,e){var t=a[l(n)];return t==s||t!=c&&("function"==typeof e?r(e):!!e)},l=i.normalize=function(n){return String(n).replace(o,".").toLowerCase()},a=i.data={},c=i.NATIVE="N",s=i.POLYFILL="P";n.exports=i},"./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
        !*** ./node_modules/core-js/internals/is-object.js ***!
        \*****************************************************/
/*! no static exports found */
function(n,e){n.exports=function(n){return"object"===l(n)?null!==n:"function"==typeof n}},"./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
        !*** ./node_modules/core-js/internals/is-pure.js ***!
        \***************************************************/
/*! no static exports found */
function(n,e){n.exports=!1},"./node_modules/core-js/internals/iterators-core.js":
/*!**********************************************************!*\
        !*** ./node_modules/core-js/internals/iterators-core.js ***!
        \**********************************************************/
/*! no static exports found */
function(n,e,t){"use strict";var r,o,i,l=t(
/*! ../internals/object-get-prototype-of */
"./node_modules/core-js/internals/object-get-prototype-of.js"),a=t(
/*! ../internals/hide */
"./node_modules/core-js/internals/hide.js"),c=t(
/*! ../internals/has */
"./node_modules/core-js/internals/has.js"),s=t(
/*! ../internals/well-known-symbol */
"./node_modules/core-js/internals/well-known-symbol.js"),u=t(
/*! ../internals/is-pure */
"./node_modules/core-js/internals/is-pure.js"),p=s("iterator"),y=!1;[].keys&&("next"in(i=[].keys())?(o=l(l(i)))!==Object.prototype&&(r=o):y=!0),null==r&&(r={}),u||c(r,p)||a(r,p,(function(){return this})),n.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:y}},"./node_modules/core-js/internals/iterators.js":
/*!*****************************************************!*\
        !*** ./node_modules/core-js/internals/iterators.js ***!
        \*****************************************************/
/*! no static exports found */
function(n,e){n.exports={}},"./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
        !*** ./node_modules/core-js/internals/native-symbol.js ***!
        \*********************************************************/
/*! no static exports found */
function(n,e,t){var r=t(
/*! ../internals/fails */
"./node_modules/core-js/internals/fails.js");n.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},"./node_modules/core-js/internals/native-weak-map.js":
/*!***********************************************************!*\
        !*** ./node_modules/core-js/internals/native-weak-map.js ***!
        \***********************************************************/
/*! no static exports found */
function(n,e,t){var r=t(
/*! ../internals/global */
"./node_modules/core-js/internals/global.js"),o=t(
/*! ../internals/function-to-string */
"./node_modules/core-js/internals/function-to-string.js"),i=r.WeakMap;n.exports="function"==typeof i&&/native code/.test(o.call(i))},"./node_modules/core-js/internals/object-create.js":
/*!*********************************************************!*\
        !*** ./node_modules/core-js/internals/object-create.js ***!
        \*********************************************************/
/*! no static exports found */
function(n,e,t){var r=t(
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
"./node_modules/core-js/internals/shared-key.js")("IE_PROTO"),u=function(){},p=function(){var n,e=c("iframe"),t=i.length;for(e.style.display="none",a.appendChild(e),e.src=String("javascript:"),(n=e.contentWindow.document).open(),n.write("<script>document.F=Object<\/script>"),n.close(),p=n.F;t--;)delete p.prototype[i[t]];return p()};n.exports=Object.create||function(n,e){var t;return null!==n?(u.prototype=r(n),t=new u,u.prototype=null,t[s]=n):t=p(),void 0===e?t:o(t,e)},l[s]=!0},"./node_modules/core-js/internals/object-define-properties.js":
/*!********************************************************************!*\
        !*** ./node_modules/core-js/internals/object-define-properties.js ***!
        \********************************************************************/
/*! no static exports found */
function(n,e,t){var r=t(
/*! ../internals/descriptors */
"./node_modules/core-js/internals/descriptors.js"),o=t(
/*! ../internals/object-define-property */
"./node_modules/core-js/internals/object-define-property.js"),i=t(
/*! ../internals/an-object */
"./node_modules/core-js/internals/an-object.js"),l=t(
/*! ../internals/object-keys */
"./node_modules/core-js/internals/object-keys.js");n.exports=r?Object.defineProperties:function(n,e){i(n);for(var t,r=l(e),a=r.length,c=0;a>c;)o.f(n,t=r[c++],e[t]);return n}},"./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
        !*** ./node_modules/core-js/internals/object-define-property.js ***!
        \******************************************************************/
/*! no static exports found */
function(n,e,t){var r=t(
/*! ../internals/descriptors */
"./node_modules/core-js/internals/descriptors.js"),o=t(
/*! ../internals/ie8-dom-define */
"./node_modules/core-js/internals/ie8-dom-define.js"),i=t(
/*! ../internals/an-object */
"./node_modules/core-js/internals/an-object.js"),l=t(
/*! ../internals/to-primitive */
"./node_modules/core-js/internals/to-primitive.js"),a=Object.defineProperty;e.f=r?a:function(n,e,t){if(i(n),e=l(e,!0),i(t),o)try{return a(n,e,t)}catch(n){}if("get"in t||"set"in t)throw TypeError("Accessors not supported");return"value"in t&&(n[e]=t.value),n}},"./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*\
        !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
        \******************************************************************************/
/*! no static exports found */
function(n,e,t){var r=t(
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
"./node_modules/core-js/internals/ie8-dom-define.js"),u=Object.getOwnPropertyDescriptor;e.f=r?u:function(n,e){if(n=l(n),e=a(e,!0),s)try{return u(n,e)}catch(n){}if(c(n,e))return i(!o.f.call(n,e),n[e])}},"./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*\
        !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
        \*************************************************************************/
/*! no static exports found */
function(n,e,t){var r=t(
/*! ../internals/object-keys-internal */
"./node_modules/core-js/internals/object-keys-internal.js"),o=t(
/*! ../internals/enum-bug-keys */
"./node_modules/core-js/internals/enum-bug-keys.js").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(n){return r(n,o)}},"./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*\
        !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
        \***************************************************************************/
/*! no static exports found */
function(n,e){e.f=Object.getOwnPropertySymbols},"./node_modules/core-js/internals/object-get-prototype-of.js":
/*!*******************************************************************!*\
        !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
        \*******************************************************************/
/*! no static exports found */
function(n,e,t){var r=t(
/*! ../internals/has */
"./node_modules/core-js/internals/has.js"),o=t(
/*! ../internals/to-object */
"./node_modules/core-js/internals/to-object.js"),i=t(
/*! ../internals/shared-key */
"./node_modules/core-js/internals/shared-key.js"),l=t(
/*! ../internals/correct-prototype-getter */
"./node_modules/core-js/internals/correct-prototype-getter.js"),a=i("IE_PROTO"),c=Object.prototype;n.exports=l?Object.getPrototypeOf:function(n){return n=o(n),r(n,a)?n[a]:"function"==typeof n.constructor&&n instanceof n.constructor?n.constructor.prototype:n instanceof Object?c:null}},"./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*\
        !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
        \****************************************************************/
/*! no static exports found */
function(n,e,t){var r=t(
/*! ../internals/has */
"./node_modules/core-js/internals/has.js"),o=t(
/*! ../internals/to-indexed-object */
"./node_modules/core-js/internals/to-indexed-object.js"),i=t(
/*! ../internals/array-includes */
"./node_modules/core-js/internals/array-includes.js"),l=t(
/*! ../internals/hidden-keys */
"./node_modules/core-js/internals/hidden-keys.js"),a=i(!1);n.exports=function(n,e){var t,i=o(n),c=0,s=[];for(t in i)!r(l,t)&&r(i,t)&&s.push(t);for(;e.length>c;)r(i,t=e[c++])&&(~a(s,t)||s.push(t));return s}},"./node_modules/core-js/internals/object-keys.js":
/*!*******************************************************!*\
        !*** ./node_modules/core-js/internals/object-keys.js ***!
        \*******************************************************/
/*! no static exports found */
function(n,e,t){var r=t(
/*! ../internals/object-keys-internal */
"./node_modules/core-js/internals/object-keys-internal.js"),o=t(
/*! ../internals/enum-bug-keys */
"./node_modules/core-js/internals/enum-bug-keys.js");n.exports=Object.keys||function(n){return r(n,o)}},"./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*\
        !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
        \*************************************************************************/
/*! no static exports found */
function(n,e,t){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);e.f=i?function(n){var e=o(this,n);return!!e&&e.enumerable}:r},"./node_modules/core-js/internals/object-set-prototype-of.js":
/*!*******************************************************************!*\
        !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
        \*******************************************************************/
/*! no static exports found */
function(n,e,t){var r=t(
/*! ../internals/validate-set-prototype-of-arguments */
"./node_modules/core-js/internals/validate-set-prototype-of-arguments.js");n.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var n,e=!1,t={};try{(n=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(t,[]),e=t instanceof Array}catch(n){}return function(t,o){return r(t,o),e?n.call(t,o):t.__proto__=o,t}}():void 0)},"./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*\
        !*** ./node_modules/core-js/internals/own-keys.js ***!
        \****************************************************/
/*! no static exports found */
function(n,e,t){var r=t(
/*! ../internals/global */
"./node_modules/core-js/internals/global.js"),o=t(
/*! ../internals/object-get-own-property-names */
"./node_modules/core-js/internals/object-get-own-property-names.js"),i=t(
/*! ../internals/object-get-own-property-symbols */
"./node_modules/core-js/internals/object-get-own-property-symbols.js"),l=t(
/*! ../internals/an-object */
"./node_modules/core-js/internals/an-object.js"),a=r.Reflect;n.exports=a&&a.ownKeys||function(n){var e=o.f(l(n)),t=i.f;return t?e.concat(t(n)):e}},"./node_modules/core-js/internals/path.js":
/*!************************************************!*\
        !*** ./node_modules/core-js/internals/path.js ***!
        \************************************************/
/*! no static exports found */
function(n,e,t){n.exports=t(
/*! ../internals/global */
"./node_modules/core-js/internals/global.js")},"./node_modules/core-js/internals/redefine.js":
/*!****************************************************!*\
        !*** ./node_modules/core-js/internals/redefine.js ***!
        \****************************************************/
/*! no static exports found */
function(n,e,t){var r=t(
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
"./node_modules/core-js/internals/internal-state.js"),u=s.get,p=s.enforce,y=String(c).split("toString");o("inspectSource",(function(n){return c.call(n)})),(n.exports=function(n,e,t,o){var c=!!o&&!!o.unsafe,s=!!o&&!!o.enumerable,u=!!o&&!!o.noTargetGet;"function"==typeof t&&("string"!=typeof e||l(t,"name")||i(t,"name",e),p(t).source=y.join("string"==typeof e?e:"")),n!==r?(c?!u&&n[e]&&(s=!0):delete n[e],s?n[e]=t:i(n,e,t)):s?n[e]=t:a(e,t)})(Function.prototype,"toString",(function(){return"function"==typeof this&&u(this).source||c.call(this)}))},"./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
        !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
        \********************************************************************/
/*! no static exports found */
function(n,e){n.exports=function(n){if(null==n)throw TypeError("Can't call method on "+n);return n}},"./node_modules/core-js/internals/set-global.js":
/*!******************************************************!*\
        !*** ./node_modules/core-js/internals/set-global.js ***!
        \******************************************************/
/*! no static exports found */
function(n,e,t){var r=t(
/*! ../internals/global */
"./node_modules/core-js/internals/global.js"),o=t(
/*! ../internals/hide */
"./node_modules/core-js/internals/hide.js");n.exports=function(n,e){try{o(r,n,e)}catch(t){r[n]=e}return e}},"./node_modules/core-js/internals/set-to-string-tag.js":
/*!*************************************************************!*\
        !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
        \*************************************************************/
/*! no static exports found */
function(n,e,t){var r=t(
/*! ../internals/object-define-property */
"./node_modules/core-js/internals/object-define-property.js").f,o=t(
/*! ../internals/has */
"./node_modules/core-js/internals/has.js"),i=t(
/*! ../internals/well-known-symbol */
"./node_modules/core-js/internals/well-known-symbol.js")("toStringTag");n.exports=function(n,e,t){n&&!o(n=t?n:n.prototype,i)&&r(n,i,{configurable:!0,value:e})}},"./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
        !*** ./node_modules/core-js/internals/shared-key.js ***!
        \******************************************************/
/*! no static exports found */
function(n,e,t){var r=t(
/*! ../internals/shared */
"./node_modules/core-js/internals/shared.js"),o=t(
/*! ../internals/uid */
"./node_modules/core-js/internals/uid.js"),i=r("keys");n.exports=function(n){return i[n]||(i[n]=o(n))}},"./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
        !*** ./node_modules/core-js/internals/shared.js ***!
        \**************************************************/
/*! no static exports found */
function(n,e,t){var r=t(
/*! ../internals/global */
"./node_modules/core-js/internals/global.js"),o=t(
/*! ../internals/set-global */
"./node_modules/core-js/internals/set-global.js"),i=t(
/*! ../internals/is-pure */
"./node_modules/core-js/internals/is-pure.js"),l=r["__core-js_shared__"]||o("__core-js_shared__",{});(n.exports=function(n,e){return l[n]||(l[n]=void 0!==e?e:{})})("versions",[]).push({version:"3.1.3",mode:i?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},"./node_modules/core-js/internals/string-at.js":
/*!*****************************************************!*\
        !*** ./node_modules/core-js/internals/string-at.js ***!
        \*****************************************************/
/*! no static exports found */
function(n,e,t){var r=t(
/*! ../internals/to-integer */
"./node_modules/core-js/internals/to-integer.js"),o=t(
/*! ../internals/require-object-coercible */
"./node_modules/core-js/internals/require-object-coercible.js");n.exports=function(n,e,t){var i,l,a=String(o(n)),c=r(e),s=a.length;return c<0||c>=s?t?"":void 0:(i=a.charCodeAt(c))<55296||i>56319||c+1===s||(l=a.charCodeAt(c+1))<56320||l>57343?t?a.charAt(c):i:t?a.slice(c,c+2):l-56320+(i-55296<<10)+65536}},"./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*\
        !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
        \*************************************************************/
/*! no static exports found */
function(n,e,t){var r=t(
/*! ../internals/to-integer */
"./node_modules/core-js/internals/to-integer.js"),o=Math.max,i=Math.min;n.exports=function(n,e){var t=r(n);return t<0?o(t+e,0):i(t,e)}},"./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*\
        !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
        \*************************************************************/
/*! no static exports found */
function(n,e,t){var r=t(
/*! ../internals/indexed-object */
"./node_modules/core-js/internals/indexed-object.js"),o=t(
/*! ../internals/require-object-coercible */
"./node_modules/core-js/internals/require-object-coercible.js");n.exports=function(n){return r(o(n))}},"./node_modules/core-js/internals/to-integer.js":
/*!******************************************************!*\
        !*** ./node_modules/core-js/internals/to-integer.js ***!
        \******************************************************/
/*! no static exports found */
function(n,e){var t=Math.ceil,r=Math.floor;n.exports=function(n){return isNaN(n=+n)?0:(n>0?r:t)(n)}},"./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
        !*** ./node_modules/core-js/internals/to-length.js ***!
        \*****************************************************/
/*! no static exports found */
function(n,e,t){var r=t(
/*! ../internals/to-integer */
"./node_modules/core-js/internals/to-integer.js"),o=Math.min;n.exports=function(n){return n>0?o(r(n),9007199254740991):0}},"./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
        !*** ./node_modules/core-js/internals/to-object.js ***!
        \*****************************************************/
/*! no static exports found */
function(n,e,t){var r=t(
/*! ../internals/require-object-coercible */
"./node_modules/core-js/internals/require-object-coercible.js");n.exports=function(n){return Object(r(n))}},"./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
        !*** ./node_modules/core-js/internals/to-primitive.js ***!
        \********************************************************/
/*! no static exports found */
function(n,e,t){var r=t(
/*! ../internals/is-object */
"./node_modules/core-js/internals/is-object.js");n.exports=function(n,e){if(!r(n))return n;var t,o;if(e&&"function"==typeof(t=n.toString)&&!r(o=t.call(n)))return o;if("function"==typeof(t=n.valueOf)&&!r(o=t.call(n)))return o;if(!e&&"function"==typeof(t=n.toString)&&!r(o=t.call(n)))return o;throw TypeError("Can't convert object to primitive value")}},"./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
        !*** ./node_modules/core-js/internals/uid.js ***!
        \***********************************************/
/*! no static exports found */
function(n,e){var t=0,r=Math.random();n.exports=function(n){return"Symbol(".concat(void 0===n?"":n,")_",(++t+r).toString(36))}},"./node_modules/core-js/internals/validate-set-prototype-of-arguments.js":
/*!*******************************************************************************!*\
        !*** ./node_modules/core-js/internals/validate-set-prototype-of-arguments.js ***!
        \*******************************************************************************/
/*! no static exports found */
function(n,e,t){var r=t(
/*! ../internals/is-object */
"./node_modules/core-js/internals/is-object.js"),o=t(
/*! ../internals/an-object */
"./node_modules/core-js/internals/an-object.js");n.exports=function(n,e){if(o(n),!r(e)&&null!==e)throw TypeError("Can't set "+String(e)+" as a prototype")}},"./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
        !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
        \*************************************************************/
/*! no static exports found */
function(n,e,t){var r=t(
/*! ../internals/global */
"./node_modules/core-js/internals/global.js"),o=t(
/*! ../internals/shared */
"./node_modules/core-js/internals/shared.js"),i=t(
/*! ../internals/uid */
"./node_modules/core-js/internals/uid.js"),l=t(
/*! ../internals/native-symbol */
"./node_modules/core-js/internals/native-symbol.js"),a=r.Symbol,c=o("wks");n.exports=function(n){return c[n]||(c[n]=l&&a[n]||(l?a:i)("Symbol."+n))}},"./node_modules/core-js/modules/es.array.from.js":
/*!*******************************************************!*\
        !*** ./node_modules/core-js/modules/es.array.from.js ***!
        \*******************************************************/
/*! no static exports found */
function(n,e,t){var r=t(
/*! ../internals/export */
"./node_modules/core-js/internals/export.js"),o=t(
/*! ../internals/array-from */
"./node_modules/core-js/internals/array-from.js");r({target:"Array",stat:!0,forced:!t(
/*! ../internals/check-correctness-of-iteration */
"./node_modules/core-js/internals/check-correctness-of-iteration.js")((function(n){Array.from(n)}))},{from:o})},"./node_modules/core-js/modules/es.string.iterator.js":
/*!************************************************************!*\
        !*** ./node_modules/core-js/modules/es.string.iterator.js ***!
        \************************************************************/
/*! no static exports found */
function(n,e,t){"use strict";var r=t(
/*! ../internals/string-at */
"./node_modules/core-js/internals/string-at.js"),o=t(
/*! ../internals/internal-state */
"./node_modules/core-js/internals/internal-state.js"),i=t(
/*! ../internals/define-iterator */
"./node_modules/core-js/internals/define-iterator.js"),l=o.set,a=o.getterFor("String Iterator");i(String,"String",(function(n){l(this,{type:"String Iterator",string:String(n),index:0})}),(function(){var n,e=a(this),t=e.string,o=e.index;return o>=t.length?{value:void 0,done:!0}:(n=r(t,o,!0),e.index+=n.length,{value:n,done:!1})}))},"./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
        !*** (webpack)/buildin/global.js ***!
        \***********************************/
/*! no static exports found */
function(n,e){var t;t=function(){return this}();try{t=t||Function("return this")()||(0,eval)("this")}catch(n){"object"===("undefined"==typeof window?"undefined":l(window))&&(t=window)}n.exports=t},"./src/default-attrs.json":
/*!********************************!*\
        !*** ./src/default-attrs.json ***!
        \********************************/
/*! exports provided: xmlns, width, height, viewBox, fill, stroke, stroke-width, stroke-linecap, stroke-linejoin, default */
function(n){n.exports={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"}},"./src/icon.js":
/*!*********************!*\
        !*** ./src/icon.js ***!
        \*********************/
/*! no static exports found */
function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},o=function(){function n(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}(),i=a(t(
/*! classnames/dedupe */
"./node_modules/classnames/dedupe.js")),l=a(t(
/*! ./default-attrs.json */
"./src/default-attrs.json"));function a(n){return n&&n.__esModule?n:{default:n}}function c(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}var s=function(){function n(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];c(this,n),this.name=e,this.contents=t,this.tags=o,this.attrs=r({},l.default,{class:"feather feather-"+e})}return o(n,[{key:"toSvg",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=r({},this.attrs,n,{class:(0,i.default)(this.attrs.class,n.class)});return"<svg "+u(e)+">"+this.contents+"</svg>"}},{key:"toString",value:function(){return this.contents}}]),n}();function u(n){return Object.keys(n).map((function(e){return e+'="'+n[e]+'"'})).join(" ")}e.default=s},"./src/icons.js":
/*!**********************!*\
        !*** ./src/icons.js ***!
        \**********************/
/*! no static exports found */
function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=l(t(
/*! ./icon */
"./src/icon.js")),o=l(t(
/*! ../dist/icons.json */
"./dist/icons.json")),i=l(t(
/*! ./tags.json */
"./src/tags.json"));function l(n){return n&&n.__esModule?n:{default:n}}e.default=Object.keys(o.default).map((function(n){return new r.default(n,o.default[n],i.default[n])})).reduce((function(n,e){return n[e.name]=e,n}),{})},"./src/index.js":
/*!**********************!*\
        !*** ./src/index.js ***!
        \**********************/
/*! no static exports found */
function(n,e,t){"use strict";var r=l(t(
/*! ./icons */
"./src/icons.js")),o=l(t(
/*! ./to-svg */
"./src/to-svg.js")),i=l(t(
/*! ./replace */
"./src/replace.js"));function l(n){return n&&n.__esModule?n:{default:n}}n.exports={icons:r.default,toSvg:o.default,replace:i.default}},"./src/replace.js":
/*!************************!*\
        !*** ./src/replace.js ***!
        \************************/
/*! no static exports found */
function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},o=l(t(
/*! classnames/dedupe */
"./node_modules/classnames/dedupe.js")),i=l(t(
/*! ./icons */
"./src/icons.js"));function l(n){return n&&n.__esModule?n:{default:n}}function a(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=c(n),l=t["data-feather"];delete t["data-feather"];var a=i.default[l].toSvg(r({},e,t,{class:(0,o.default)(e.class,t.class)})),s=(new DOMParser).parseFromString(a,"image/svg+xml"),u=s.querySelector("svg");n.parentNode.replaceChild(u,n)}function c(n){return Array.from(n.attributes).reduce((function(n,e){return n[e.name]=e.value,n}),{})}e.default=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if("undefined"==typeof document)throw new Error("`feather.replace()` only works in a browser environment.");var e=document.querySelectorAll("[data-feather]");Array.from(e).forEach((function(e){return a(e,n)}))}},"./src/tags.json":
/*!***********************!*\
        !*** ./src/tags.json ***!
        \***********************/
/*! exports provided: activity, airplay, alert-circle, alert-octagon, alert-triangle, align-center, align-justify, align-left, align-right, anchor, archive, at-sign, award, aperture, bar-chart, bar-chart-2, battery, battery-charging, bell, bell-off, bluetooth, book-open, book, bookmark, box, briefcase, calendar, camera, cast, circle, clipboard, clock, cloud-drizzle, cloud-lightning, cloud-rain, cloud-snow, cloud, codepen, codesandbox, code, coffee, columns, command, compass, copy, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, cpu, credit-card, crop, crosshair, database, delete, disc, dollar-sign, droplet, edit, edit-2, edit-3, eye, eye-off, external-link, facebook, fast-forward, figma, file-minus, file-plus, file-text, film, filter, flag, folder-minus, folder-plus, folder, framer, frown, gift, git-branch, git-commit, git-merge, git-pull-request, github, gitlab, globe, hard-drive, hash, headphones, heart, help-circle, hexagon, home, image, inbox, instagram, key, layers, layout, life-bouy, link, link-2, linkedin, list, lock, log-in, log-out, mail, map-pin, map, maximize, maximize-2, meh, menu, message-circle, message-square, mic-off, mic, minimize, minimize-2, minus, monitor, moon, more-horizontal, more-vertical, mouse-pointer, move, music, navigation, navigation-2, octagon, package, paperclip, pause, pause-circle, pen-tool, percent, phone-call, phone-forwarded, phone-incoming, phone-missed, phone-off, phone-outgoing, phone, play, pie-chart, play-circle, plus, plus-circle, plus-square, pocket, power, printer, radio, refresh-cw, refresh-ccw, repeat, rewind, rotate-ccw, rotate-cw, rss, save, scissors, search, send, settings, share-2, shield, shield-off, shopping-bag, shopping-cart, shuffle, skip-back, skip-forward, slack, slash, sliders, smartphone, smile, speaker, star, stop-circle, sun, sunrise, sunset, tablet, tag, target, terminal, thermometer, thumbs-down, thumbs-up, toggle-left, toggle-right, tool, trash, trash-2, triangle, truck, tv, twitch, twitter, type, umbrella, unlock, user-check, user-minus, user-plus, user-x, user, users, video-off, video, voicemail, volume, volume-1, volume-2, volume-x, watch, wifi-off, wifi, wind, x-circle, x-octagon, x-square, x, youtube, zap-off, zap, zoom-in, zoom-out, default */
function(n){n.exports={activity:["pulse","health","action","motion"],airplay:["stream","cast","mirroring"],"alert-circle":["warning","alert","danger"],"alert-octagon":["warning","alert","danger"],"alert-triangle":["warning","alert","danger"],"align-center":["text alignment","center"],"align-justify":["text alignment","justified"],"align-left":["text alignment","left"],"align-right":["text alignment","right"],anchor:[],archive:["index","box"],"at-sign":["mention","at","email","message"],award:["achievement","badge"],aperture:["camera","photo"],"bar-chart":["statistics","diagram","graph"],"bar-chart-2":["statistics","diagram","graph"],battery:["power","electricity"],"battery-charging":["power","electricity"],bell:["alarm","notification","sound"],"bell-off":["alarm","notification","silent"],bluetooth:["wireless"],"book-open":["read","library"],book:["read","dictionary","booklet","magazine","library"],bookmark:["read","clip","marker","tag"],box:["cube"],briefcase:["work","bag","baggage","folder"],calendar:["date"],camera:["photo"],cast:["chromecast","airplay"],circle:["off","zero","record"],clipboard:["copy"],clock:["time","watch","alarm"],"cloud-drizzle":["weather","shower"],"cloud-lightning":["weather","bolt"],"cloud-rain":["weather"],"cloud-snow":["weather","blizzard"],cloud:["weather"],codepen:["logo"],codesandbox:["logo"],code:["source","programming"],coffee:["drink","cup","mug","tea","cafe","hot","beverage"],columns:["layout"],command:["keyboard","cmd","terminal","prompt"],compass:["navigation","safari","travel","direction"],copy:["clone","duplicate"],"corner-down-left":["arrow","return"],"corner-down-right":["arrow"],"corner-left-down":["arrow"],"corner-left-up":["arrow"],"corner-right-down":["arrow"],"corner-right-up":["arrow"],"corner-up-left":["arrow"],"corner-up-right":["arrow"],cpu:["processor","technology"],"credit-card":["purchase","payment","cc"],crop:["photo","image"],crosshair:["aim","target"],database:["storage","memory"],delete:["remove"],disc:["album","cd","dvd","music"],"dollar-sign":["currency","money","payment"],droplet:["water"],edit:["pencil","change"],"edit-2":["pencil","change"],"edit-3":["pencil","change"],eye:["view","watch"],"eye-off":["view","watch","hide","hidden"],"external-link":["outbound"],facebook:["logo","social"],"fast-forward":["music"],figma:["logo","design","tool"],"file-minus":["delete","remove","erase"],"file-plus":["add","create","new"],"file-text":["data","txt","pdf"],film:["movie","video"],filter:["funnel","hopper"],flag:["report"],"folder-minus":["directory"],"folder-plus":["directory"],folder:["directory"],framer:["logo","design","tool"],frown:["emoji","face","bad","sad","emotion"],gift:["present","box","birthday","party"],"git-branch":["code","version control"],"git-commit":["code","version control"],"git-merge":["code","version control"],"git-pull-request":["code","version control"],github:["logo","version control"],gitlab:["logo","version control"],globe:["world","browser","language","translate"],"hard-drive":["computer","server","memory","data"],hash:["hashtag","number","pound"],headphones:["music","audio","sound"],heart:["like","love","emotion"],"help-circle":["question mark"],hexagon:["shape","node.js","logo"],home:["house","living"],image:["picture"],inbox:["email"],instagram:["logo","camera"],key:["password","login","authentication","secure"],layers:["stack"],layout:["window","webpage"],"life-bouy":["help","life ring","support"],link:["chain","url"],"link-2":["chain","url"],linkedin:["logo","social media"],list:["options"],lock:["security","password","secure"],"log-in":["sign in","arrow","enter"],"log-out":["sign out","arrow","exit"],mail:["email","message"],"map-pin":["location","navigation","travel","marker"],map:["location","navigation","travel"],maximize:["fullscreen"],"maximize-2":["fullscreen","arrows","expand"],meh:["emoji","face","neutral","emotion"],menu:["bars","navigation","hamburger"],"message-circle":["comment","chat"],"message-square":["comment","chat"],"mic-off":["record","sound","mute"],mic:["record","sound","listen"],minimize:["exit fullscreen","close"],"minimize-2":["exit fullscreen","arrows","close"],minus:["subtract"],monitor:["tv","screen","display"],moon:["dark","night"],"more-horizontal":["ellipsis"],"more-vertical":["ellipsis"],"mouse-pointer":["arrow","cursor"],move:["arrows"],music:["note"],navigation:["location","travel"],"navigation-2":["location","travel"],octagon:["stop"],package:["box","container"],paperclip:["attachment"],pause:["music","stop"],"pause-circle":["music","audio","stop"],"pen-tool":["vector","drawing"],percent:["discount"],"phone-call":["ring"],"phone-forwarded":["call"],"phone-incoming":["call"],"phone-missed":["call"],"phone-off":["call","mute"],"phone-outgoing":["call"],phone:["call"],play:["music","start"],"pie-chart":["statistics","diagram"],"play-circle":["music","start"],plus:["add","new"],"plus-circle":["add","new"],"plus-square":["add","new"],pocket:["logo","save"],power:["on","off"],printer:["fax","office","device"],radio:["signal"],"refresh-cw":["synchronise","arrows"],"refresh-ccw":["arrows"],repeat:["loop","arrows"],rewind:["music"],"rotate-ccw":["arrow"],"rotate-cw":["arrow"],rss:["feed","subscribe"],save:["floppy disk"],scissors:["cut"],search:["find","magnifier","magnifying glass"],send:["message","mail","email","paper airplane","paper aeroplane"],settings:["cog","edit","gear","preferences"],"share-2":["network","connections"],shield:["security","secure"],"shield-off":["security","insecure"],"shopping-bag":["ecommerce","cart","purchase","store"],"shopping-cart":["ecommerce","cart","purchase","store"],shuffle:["music"],"skip-back":["music"],"skip-forward":["music"],slack:["logo"],slash:["ban","no"],sliders:["settings","controls"],smartphone:["cellphone","device"],smile:["emoji","face","happy","good","emotion"],speaker:["audio","music"],star:["bookmark","favorite","like"],"stop-circle":["media","music"],sun:["brightness","weather","light"],sunrise:["weather","time","morning","day"],sunset:["weather","time","evening","night"],tablet:["device"],tag:["label"],target:["logo","bullseye"],terminal:["code","command line","prompt"],thermometer:["temperature","celsius","fahrenheit","weather"],"thumbs-down":["dislike","bad","emotion"],"thumbs-up":["like","good","emotion"],"toggle-left":["on","off","switch"],"toggle-right":["on","off","switch"],tool:["settings","spanner"],trash:["garbage","delete","remove","bin"],"trash-2":["garbage","delete","remove","bin"],triangle:["delta"],truck:["delivery","van","shipping","transport","lorry"],tv:["television","stream"],twitch:["logo"],twitter:["logo","social"],type:["text"],umbrella:["rain","weather"],unlock:["security"],"user-check":["followed","subscribed"],"user-minus":["delete","remove","unfollow","unsubscribe"],"user-plus":["new","add","create","follow","subscribe"],"user-x":["delete","remove","unfollow","unsubscribe","unavailable"],user:["person","account"],users:["group"],"video-off":["camera","movie","film"],video:["camera","movie","film"],voicemail:["phone"],volume:["music","sound","mute"],"volume-1":["music","sound"],"volume-2":["music","sound"],"volume-x":["music","sound","mute"],watch:["clock","time"],"wifi-off":["disabled"],wifi:["connection","signal","wireless"],wind:["weather","air"],"x-circle":["cancel","close","delete","remove","times","clear"],"x-octagon":["delete","stop","alert","warning","times","clear"],"x-square":["cancel","close","delete","remove","times","clear"],x:["cancel","close","delete","remove","times","clear"],youtube:["logo","video","play"],"zap-off":["flash","camera","lightning"],zap:["flash","camera","lightning"],"zoom-in":["magnifying glass"],"zoom-out":["magnifying glass"]}},"./src/to-svg.js":
/*!***********************!*\
        !*** ./src/to-svg.js ***!
        \***********************/
/*! no static exports found */
function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=t(
/*! ./icons */
"./src/icons.js"),i=(r=o)&&r.__esModule?r:{default:r};e.default=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(console.warn("feather.toSvg() is deprecated. Please use feather.icons[name].toSvg() instead."),!n)throw new Error("The required `key` (icon name) parameter is missing.");if(!i.default[n])throw new Error("No icon matching '"+n+"'. See the complete list of icons at https://feathericons.com");return i.default[n].toSvg(e)}},0:
/*!**************************************************!*\
        !*** multi core-js/es/array/from ./src/index.js ***!
        \**************************************************/
/*! no static exports found */
function(n,e,t){t(
/*! core-js/es/array/from */
"./node_modules/core-js/es/array/from.js"),n.exports=t(
/*! /home/travis/build/feathericons/feather/src/index.js */
"./src/index.js")}})},"object"===l(e)&&"object"===l(n)?n.exports=i():(r=[],void 0===(o="function"==typeof(t=i)?t.apply(e,r):t)||(n.exports=o))}).call(this,t("RoC8")(n))},"ox/y":function(n,e,t){"use strict";function r(n){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}Object.defineProperty(e,"__esModule",{value:!0}),e.Link=e.Match=void 0;var o=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},i=t("HteQ"),l=t("Y3FI");function a(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function c(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==r(e)&&"function"!=typeof e?n:e}var s=e.Match=function(n){function e(){var t,r;a(this,e);for(var o=arguments.length,i=Array(o),l=0;l<o;l++)i[l]=arguments[l];return t=r=c(this,n.call.apply(n,[this].concat(i))),r.update=function(n){r.nextUrl=n,r.setState({})},c(r,t)}return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+r(e));n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}(e,n),e.prototype.componentDidMount=function(){l.subscribers.push(this.update)},e.prototype.componentWillUnmount=function(){l.subscribers.splice(l.subscribers.indexOf(this.update)>>>0,1)},e.prototype.render=function(n){var e=this.nextUrl||(0,l.getCurrentUrl)(),t=e.replace(/\?.+$/,"");return this.nextUrl=null,n.children({url:e,path:t,matches:!1!==(0,l.exec)(t,n.path,{})})},e}(i.Component),u=function(n){var e=n.activeClassName,t=n.path,r=function(n,e){var t={};for(var r in n)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t}(n,["activeClassName","path"]);return(0,i.h)(s,{path:t||r.href},(function(n){var t=n.matches;return(0,i.h)(l.Link,o({},r,{class:[r.class||r.className,t&&e].filter(Boolean).join(" ")}))}))};e.Link=u,e.default=s,s.Link=u},qVkA:function(n,e,t){"use strict";t.r(e);var r={};t.r(r),t.d(r,"Part1",(function(){return S})),t.d(r,"Part2",(function(){return V}));var o={};t.r(o),t.d(o,"useState",(function(){return en})),t.d(o,"useReducer",(function(){return tn})),t.d(o,"useEffect",(function(){return rn})),t.d(o,"useLayoutEffect",(function(){return on})),t.d(o,"useRef",(function(){return ln})),t.d(o,"useImperativeHandle",(function(){return an})),t.d(o,"useMemo",(function(){return cn})),t.d(o,"useCallback",(function(){return sn})),t.d(o,"useContext",(function(){return un})),t.d(o,"useDebugValue",(function(){return pn})),t.d(o,"useErrorBoundary",(function(){return yn}));var i=t("HteQ"),l=t("Y3FI"),a="/".concat("advent-of-code-2021"),c=t("ox/y"),s=function(){return Object(i.h)("div",null,Object(i.h)("h1",null,"Error 404"),Object(i.h)("p",null,"That page doesn't exist."),Object(i.h)(c.Link,{href:"".concat(a,"/")},"Back to Home"))},u=function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return e.filter(Boolean).join(" ")},p="button__TEQZf",y="primary__xD89D",d="plain__R5uOs",h="compact__2ZT-3",f=function(n){var e=n.primary,t=n.plain,r=n.compact,o=n.ariaLabel,l=n.onClick,a=n.children;return Object(i.h)("button",{class:u(p,e&&y,t&&d,r&&h),onClick:l,"aria-label":o},a)},x="container__aePOz",m=function(n){var e=n.part,t=n.solution,r=1===e?t.Part1:t.Part2;return r?Object(i.h)("div",{class:x},Object(i.h)("h2",null,"Part ",e),Object(i.h)(r,null)):null},j=t("kNYS"),v=t.n(j),g="container__HPXMh",_=["name"];function b(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var w=function(n){var e=n.name,t=b(n,_);return Object(i.h)("span",{class:g,dangerouslySetInnerHTML:{__html:v.a.icons[e].toSvg(t)}})},M="container__8jtjS",k=function(n){var e=n.children;return Object(i.h)("span",{class:M},Object(i.h)("strong",null,e),Object(i.h)(f,{onClick:function(){var n;return null===(n=navigator.clipboard)||void 0===n?void 0:n.writeText(e.toString())},plain:!0,compact:!0,ariaLabel:"copy answer to clipboard"},Object(i.h)(w,{name:"clipboard"})))},O=function(n,e){for(var t=[],r=n;r<=e;r++)t.push(r);return t},A="\n191\n192\n201\n205\n206\n203\n188\n189\n199\n206\n224\n230\n233\n232\n260\n257\n258\n259\n251\n233\n236\n237\n238\n241\n242\n243\n250\n259\n251\n255\n263\n265\n266\n259\n265\n260\n267\n270\n271\n284\n286\n301\n302\n304\n309\n333\n335\n342\n350\n349\n342\n343\n345\n346\n331\n332\n317\n324\n328\n327\n332\n320\n340\n341\n344\n353\n361\n372\n376\n387\n397\n433\n431\n432\n436\n435\n449\n460\n474\n476\n483\n490\n487\n488\n495\n500\n511\n531\n537\n525\n503\n506\n515\n517\n518\n517\n514\n516\n521\n515\n516\n517\n526\n514\n490\n487\n484\n482\n474\n476\n480\n479\n474\n482\n480\n481\n483\n484\n482\n481\n477\n478\n482\n483\n494\n517\n520\n517\n510\n497\n481\n519\n522\n524\n528\n530\n543\n542\n543\n531\n529\n528\n526\n499\n521\n526\n518\n533\n535\n538\n542\n572\n573\n574\n548\n550\n559\n567\n569\n570\n571\n570\n587\n592\n600\n620\n630\n627\n652\n659\n656\n663\n661\n666\n681\n687\n702\n714\n715\n711\n714\n722\n719\n723\n721\n720\n731\n724\n726\n732\n735\n736\n739\n745\n739\n747\n745\n758\n755\n754\n755\n756\n757\n758\n759\n760\n763\n799\n800\n810\n825\n826\n829\n841\n848\n852\n855\n858\n856\n874\n894\n897\n892\n925\n932\n935\n931\n953\n971\n967\n953\n957\n941\n950\n952\n923\n922\n933\n938\n943\n944\n964\n952\n935\n913\n901\n902\n903\n904\n901\n909\n910\n909\n929\n930\n929\n924\n916\n904\n897\n905\n908\n899\n898\n903\n907\n924\n915\n919\n911\n915\n916\n926\n931\n933\n965\n967\n968\n979\n981\n997\n1009\n1012\n1010\n1011\n1036\n1035\n1049\n1050\n1048\n1053\n1054\n1055\n1053\n1046\n1055\n1069\n1067\n1062\n1081\n1079\n1091\n1093\n1095\n1093\n1100\n1091\n1093\n1107\n1109\n1105\n1111\n1121\n1140\n1141\n1148\n1149\n1162\n1166\n1165\n1163\n1164\n1165\n1169\n1182\n1188\n1186\n1185\n1165\n1169\n1176\n1177\n1179\n1183\n1182\n1188\n1191\n1181\n1183\n1204\n1203\n1204\n1206\n1201\n1215\n1232\n1234\n1239\n1243\n1235\n1239\n1242\n1238\n1240\n1241\n1263\n1259\n1267\n1257\n1261\n1265\n1264\n1261\n1260\n1262\n1265\n1263\n1266\n1262\n1263\n1268\n1271\n1282\n1286\n1287\n1284\n1280\n1279\n1280\n1288\n1289\n1292\n1287\n1293\n1301\n1329\n1343\n1350\n1347\n1348\n1354\n1356\n1359\n1360\n1363\n1369\n1366\n1369\n1370\n1368\n1373\n1376\n1385\n1391\n1400\n1411\n1415\n1396\n1398\n1428\n1433\n1442\n1444\n1436\n1467\n1469\n1470\n1484\n1485\n1489\n1498\n1468\n1469\n1468\n1465\n1459\n1460\n1458\n1459\n1460\n1462\n1467\n1479\n1499\n1501\n1512\n1515\n1516\n1519\n1524\n1538\n1547\n1558\n1563\n1573\n1584\n1592\n1606\n1632\n1630\n1637\n1640\n1633\n1662\n1677\n1681\n1679\n1681\n1683\n1684\n1704\n1709\n1705\n1702\n1701\n1700\n1707\n1708\n1717\n1709\n1718\n1721\n1738\n1740\n1746\n1748\n1750\n1751\n1757\n1758\n1765\n1767\n1749\n1730\n1732\n1745\n1751\n1752\n1750\n1747\n1746\n1751\n1756\n1766\n1767\n1769\n1767\n1775\n1806\n1812\n1808\n1809\n1845\n1846\n1848\n1860\n1864\n1866\n1868\n1874\n1853\n1852\n1848\n1835\n1851\n1850\n1843\n1842\n1835\n1862\n1865\n1859\n1886\n1887\n1888\n1900\n1926\n1942\n1944\n1945\n1946\n1945\n1939\n1946\n1951\n1946\n1951\n1957\n1971\n1985\n1986\n1987\n1990\n1991\n1992\n1991\n1986\n1989\n1991\n1998\n1996\n2002\n2003\n2007\n2009\n2010\n1989\n1991\n1990\n1991\n2001\n2016\n2017\n2026\n2028\n2039\n2038\n2053\n2047\n2052\n2049\n2050\n2052\n2057\n2055\n2053\n2051\n2042\n2027\n2036\n2026\n2040\n2042\n2046\n2045\n2050\n2051\n2072\n2073\n2075\n2072\n2078\n2077\n2082\n2087\n2074\n2079\n2074\n2070\n2071\n2070\n2074\n2076\n2077\n2084\n2086\n2089\n2102\n2100\n2102\n2104\n2110\n2112\n2093\n2104\n2107\n2104\n2130\n2101\n2103\n2102\n2103\n2111\n2116\n2117\n2122\n2119\n2126\n2127\n2128\n2148\n2159\n2160\n2157\n2165\n2173\n2169\n2170\n2175\n2161\n2151\n2163\n2172\n2209\n2211\n2209\n2223\n2222\n2221\n2220\n2226\n2228\n2229\n2226\n2234\n2214\n2212\n2216\n2215\n2220\n2223\n2228\n2234\n2233\n2235\n2233\n2235\n2264\n2263\n2262\n2285\n2287\n2303\n2286\n2287\n2279\n2280\n2285\n2279\n2281\n2291\n2295\n2322\n2323\n2332\n2337\n2340\n2343\n2344\n2370\n2371\n2370\n2377\n2385\n2390\n2389\n2396\n2401\n2407\n2410\n2411\n2412\n2413\n2415\n2422\n2419\n2431\n2439\n2444\n2447\n2457\n2443\n2455\n2466\n2483\n2471\n2472\n2481\n2486\n2490\n2470\n2471\n2483\n2481\n2480\n2490\n2529\n2541\n2546\n2547\n2570\n2574\n2560\n2558\n2562\n2561\n2566\n2565\n2563\n2569\n2571\n2582\n2596\n2594\n2593\n2594\n2585\n2566\n2567\n2550\n2559\n2551\n2561\n2542\n2544\n2553\n2557\n2561\n2574\n2577\n2593\n2601\n2613\n2621\n2623\n2628\n2627\n2648\n2640\n2639\n2664\n2649\n2659\n2663\n2662\n2664\n2659\n2660\n2659\n2675\n2654\n2655\n2657\n2656\n2662\n2669\n2663\n2652\n2645\n2656\n2664\n2660\n2680\n2684\n2673\n2678\n2675\n2662\n2663\n2666\n2668\n2681\n2676\n2687\n2688\n2689\n2688\n2689\n2692\n2693\n2704\n2703\n2702\n2701\n2707\n2710\n2711\n2713\n2712\n2687\n2697\n2698\n2699\n2733\n2731\n2738\n2739\n2740\n2746\n2741\n2744\n2741\n2746\n2744\n2731\n2733\n2740\n2741\n2745\n2747\n2748\n2765\n2774\n2787\n2789\n2790\n2794\n2797\n2778\n2788\n2790\n2789\n2784\n2788\n2789\n2807\n2826\n2842\n2835\n2834\n2837\n2846\n2847\n2849\n2866\n2868\n2880\n2881\n2885\n2892\n2893\n2895\n2896\n2905\n2907\n2914\n2917\n2915\n2910\n2914\n2916\n2917\n2926\n2927\n2946\n2961\n2962\n2952\n2954\n2960\n2972\n2976\n2978\n2999\n3007\n3009\n2998\n3001\n3021\n3017\n3011\n3013\n3010\n3007\n3019\n3020\n3037\n3038\n3037\n3041\n3046\n3060\n3064\n3066\n3056\n3059\n3058\n3049\n3056\n3063\n3065\n3055\n3056\n3055\n3054\n3067\n3066\n3071\n3075\n3057\n3056\n3057\n3070\n3082\n3107\n3109\n3107\n3102\n3101\n3103\n3098\n3096\n3097\n3093\n3095\n3097\n3106\n3124\n3125\n3128\n3137\n3145\n3143\n3146\n3120\n3122\n3135\n3129\n3158\n3159\n3176\n3212\n3216\n3220\n3222\n3225\n3229\n3235\n3252\n3247\n3252\n3256\n3259\n3270\n3277\n3286\n3296\n3311\n3322\n3324\n3331\n3363\n3364\n3376\n3372\n3373\n3384\n3392\n3397\n3393\n3395\n3407\n3408\n3409\n3404\n3409\n3414\n3422\n3427\n3426\n3428\n3410\n3418\n3416\n3408\n3406\n3411\n3412\n3418\n3427\n3425\n3413\n3400\n3399\n3400\n3393\n3394\n3395\n3394\n3393\n3392\n3389\n3390\n3394\n3395\n3402\n3394\n3395\n3415\n3405\n3407\n3432\n3439\n3437\n3439\n3458\n3461\n3469\n3464\n3463\n3464\n3453\n3458\n3452\n3455\n3456\n3459\n3464\n3468\n3471\n3474\n3476\n3475\n3477\n3479\n3481\n3482\n3492\n3501\n3506\n3501\n3497\n3498\n3501\n3502\n3496\n3510\n3513\n3515\n3533\n3534\n3545\n3552\n3561\n3554\n3561\n3562\n3563\n3564\n3553\n3554\n3558\n3546\n3547\n3561\n3563\n3547\n3570\n3572\n3579\n3590\n3604\n3634\n3627\n3630\n3629\n3632\n3598\n3599\n3619\n3617\n3630\n3624\n3625\n3627\n3636\n3632\n3633\n3638\n3642\n3640\n3621\n3623\n3620\n3627\n3625\n3624\n3616\n3648\n3630\n3625\n3628\n3634\n3629\n3649\n3651\n3652\n3653\n3660\n3672\n3674\n3684\n3706\n3707\n3713\n3708\n3707\n3697\n3674\n3670\n3671\n3670\n3674\n3676\n3677\n3674\n3693\n3691\n3693\n3694\n3698\n3662\n3671\n3664\n3665\n3666\n3667\n3665\n3666\n3667\n3666\n3667\n3663\n3662\n3665\n3659\n3651\n3657\n3656\n3663\n3659\n3669\n3666\n3652\n3643\n3635\n3665\n3673\n3682\n3681\n3674\n3673\n3677\n3674\n3672\n3674\n3677\n3685\n3697\n3696\n3708\n3704\n3702\n3705\n3709\n3740\n3741\n3740\n3734\n3738\n3741\n3743\n3741\n3723\n3693\n3703\n3702\n3712\n3713\n3705\n3706\n3703\n3718\n3749\n3761\n3760\n3763\n3765\n3757\n3733\n3740\n3736\n3762\n3761\n3771\n3764\n3761\n3763\n3762\n3756\n3771\n3753\n3759\n3789\n3791\n3792\n3780\n3787\n3788\n3786\n3792\n3793\n3790\n3794\n3795\n3794\n3791\n3801\n3802\n3811\n3813\n3815\n3818\n3824\n3835\n3837\n3836\n3838\n3840\n3841\n3842\n3840\n3841\n3843\n3872\n3879\n3884\n3871\n3878\n3896\n3897\n3896\n3895\n3893\n3887\n3882\n3885\n3887\n3875\n3876\n3856\n3859\n3853\n3831\n3832\n3831\n3830\n3814\n3815\n3799\n3814\n3811\n3834\n3845\n3842\n3847\n3853\n3854\n3853\n3851\n3870\n3869\n3870\n3868\n3876\n3874\n3875\n3872\n3866\n3874\n3873\n3857\n3858\n3857\n3865\n3874\n3865\n3876\n3878\n3881\n3883\n3884\n3885\n3887\n3863\n3862\n3864\n3867\n3872\n3875\n3876\n3884\n3880\n3891\n3897\n3898\n3894\n3891\n3895\n3893\n3912\n3913\n3910\n3916\n3912\n3917\n3925\n3937\n3942\n3941\n3947\n3952\n3955\n3952\n3944\n3945\n3946\n3960\n3985\n4012\n4013\n4014\n4012\n4032\n4045\n4029\n4030\n4048\n4055\n4054\n4072\n4073\n4083\n4085\n4086\n4091\n4094\n4097\n4112\n4090\n4102\n4108\n4134\n4147\n4148\n4149\n4172\n4175\n4182\n4176\n4154\n4170\n4180\n4179\n4186\n4187\n4182\n4170\n4172\n4178\n4181\n4193\n4188\n4193\n4192\n4202\n4205\n4207\n4185\n4183\n4187\n4189\n4204\n4207\n4202\n4204\n4201\n4214\n4219\n4216\n4211\n4199\n4196\n4195\n4199\n4200\n4201\n4192\n4191\n4195\n4217\n4205\n4210\n4218\n4204\n4207\n4213\n4214\n4215\n4233\n4240\n4253\n4251\n4253\n4262\n4266\n4257\n4261\n4262\n4271\n4263\n4262\n4284\n4288\n4267\n4276\n4283\n4284\n4283\n4284\n4281\n4278\n4266\n4261\n4260\n4276\n4281\n4283\n4272\n4297\n4302\n4301\n4312\n4311\n4329\n4346\n4336\n4347\n4365\n4364\n4366\n4370\n4372\n4365\n4364\n4367\n4365\n4366\n4368\n4369\n4372\n4379\n4373\n4391\n4390\n4393\n4389\n4370\n4372\n4375\n4376\n4378\n4387\n4388\n4408\n4419\n4421\n4414\n4415\n4413\n4415\n4419\n4420\n4405\n4422\n4421\n4423\n4435\n4434\n4439\n4441\n4443\n4450\n4446\n4450\n4452\n4453\n4454\n4458\n4462\n4475\n4492\n4489\n4494\n4498\n4497\n4498\n4499\n4511\n4515\n4516\n4529\n4534\n4538\n4540\n4537\n4544\n4561\n4562\n4563\n4565\n4569\n4564\n4569\n4576\n4580\n4619\n4618\n4620\n4633\n4634\n4613\n4611\n4614\n4632\n4618\n4629\n4631\n4643\n4640\n4644\n4628\n4630\n4632\n4631\n4648\n4652\n4651\n4640\n4637\n4638\n4641\n4649\n4654\n4650\n4648\n4651\n4650\n4630\n4631\n4632\n4628\n4634\n4633\n4635\n4641\n4633\n4632\n4634\n4646\n4658\n4654\n4639\n4658\n4659\n4664\n4673\n4679\n4681\n4687\n4685\n4719\n4720\n4721\n4731\n4741\n4744\n4727\n4729\n4735\n4738\n4748\n4749\n4750\n4746\n4753\n4754\n4762\n4773\n4774\n4777\n4783\n4782\n4793\n4799\n4805\n4810\n4813\n4812\n4824\n4817\n4815\n4817\n4816\n4804\n4809\n4827\n4820\n4819\n4849\n4850\n4851\n4850\n4862\n4861\n4873\n4875\n4878\n4879\n4882\n4883\n4878\n4880\n4893\n4890\n4891\n4886\n4889\n4890\n4904\n4902\n4925\n4927\n4923\n4920\n4915\n4924\n4896\n4898\n4891\n4894\n4898\n4900\n4901\n4902\n4912\n4913\n4911\n4908\n4917\n4905\n4908\n4931\n4934\n4969\n4973\n4972\n4982\n4983\n5001\n5000\n5004\n5009\n5007\n5002\n5000\n4999\n5000\n5002\n4991\n4993\n4997\n4998\n5000\n5003\n4998\n4999\n4996\n5005\n5004\n4993\n4994\n4995\n4996\n5000\n5004\n5011\n5013\n5012\n5002\n4999\n4979\n4989\n4992\n5002\n5004\n5005\n5004\n5027\n5026\n5027\n5031\n5035\n5037\n5044\n5050\n5057\n5062\n5065\n5062\n5056\n5058\n5065\n5073\n5093\n5092\n5109\n5110\n5130\n5137\n5159\n5172\n5164\n5194\n5196\n5197\n5234\n5233\n5222\n5225\n5227\n5231\n5248\n5249\n5261\n5254\n5255\n5256\n5257\n5254\n5252\n5253\n5261\n5279\n5266\n5267\n5259\n5283\n5309\n5332\n5335\n5336\n5337\n5336\n5344\n5349\n5356\n5386\n5396\n5403\n5409\n5410\n5413\n5415\n5417\n5431\n5433\n5436\n5434\n5436\n5440\n5450\n5449\n5461\n5480\n5482\n5479\n5481\n5482\n5494\n5495\n5494\n5495\n5498\n5497\n5510\n5512\n5508\n5499\n5509\n5520\n5540\n5553\n5554\n5555\n5568\n5550\n5540\n5535\n5564\n5567\n5575\n5574\n5586\n5579\n5580\n5579\n5577\n5588\n5592\n5562\n5568\n5589\n5595\n5606\n5607\n5596\n5608\n5627\n5635\n5632\n5631\n5630\n5629\n5628\n5626\n5625\n5629\n5630\n5629\n5630\n5633\n5634\n5639\n5640\n5660\n5666\n5660\n5663\n5662\n5672\n5671\n5652\n5650\n5667\n5666\n5642\n5643\n5642\n5640\n5642\n5644\n5649\n5650\n5647\n5648\n5647\n5651\n5650\n5651\n5653\n5646\n5627\n5636\n5635\n5623\n5624\n5625\n5624\n5633\n5630\n5622\n5619\n5616\n5634\n5635\n5630\n5664\n5671\n5673\n5671\n5683\n5693\n5699\n5700\n5701\n5697\n5693\n5664\n5665\n5677\n5670\n5684\n5653\n5648\n5646\n5648\n5645\n5651\n5650\n5651\n5652\n5653\n5654\n5639\n5648\n5640\n5657\n5667\n5685\n5706\n5697\n5698\n5702\n5709\n5705\n5720\n5723\n5716\n5712\n5708\n5707\n5668\n5665\n5666\n5667\n5666\n5670\n5669\n5670\n5671\n5675\n5676\n5682\n5683\n5673\n5675\n5666\n5675\n5677\n5686\n5693\n5694\n5676\n5677\n5678\n5680\n5689\n5712\n5714\n5730\n5729\n5740\n5743\n5776\n5777\n5788\n5787\n5783\n5791\n".trim(),z=function(){return A.split("\n").map(Number)},H=function(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3;return O(0,t-1).reduce((function(t,r){return t+n[e-r]}),0)},S=function(){var n=z(),e=n.filter((function(e,t){return t>0&&e>n[t-1]})).length;return Object(i.h)("p",null,Object(i.h)(k,null,e)," measurements are larger than the previous measurement.")},V=function(){var n=z(),e=n.filter((function(e,t){return t>2&&H(n,t)>H(n,t-1)})).length;return Object(i.h)("p",null,Object(i.h)(k,null,e)," sums are larger than the previous sum.")},P=[r];function C(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var r,o,i=[],l=!0,a=!1;try{for(t=t.call(n);!(l=(r=t.next()).done)&&(i.push(r.value),!e||i.length!==e);l=!0);}catch(n){a=!0,o=n}finally{try{l||null==t.return||t.return()}finally{if(a)throw o}}return i}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return L(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return L(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}var E=function(n,e){return n===e||n.length===e.length&&n.every((function(n,t){return n===e[t]}))},I=function(n){return n};function T(n,e){var t="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=function(n,e){if(!n)return;if("string"==typeof n)return R(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return R(n,e)}(n))||e&&n&&"number"==typeof n.length){t&&(n=t);var r=0,o=function(){};return{s:o,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,a=!1;return{s:function(){t=t.call(n)},n:function(){var n=t.next();return l=n.done,n},e:function(n){a=!0,i=n},f:function(){try{l||null==t.return||t.return()}finally{if(a)throw i}}}}function R(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function q(n){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}var U,D,N,F=Object.assign||function(n,e){return e&&Object.keys(e).forEach((function(t){return n[t]=e[t]})),n},K=function n(e,t,r){var o=q(r);if(r&&"object"===o)if(Array.isArray(r)){var i,l=T(r);try{for(l.s();!(i=l.n()).done;){t=n(e,t,i.value)}}catch(n){l.e(n)}finally{l.f()}}else for(var a=0,c=Object.keys(r);a<c.length;a++){var s=c[a],u=r[s];"function"==typeof u?t[s]=u(t[s],Y):void 0===u?e&&!isNaN(s)?t.splice(s,1):delete t[s]:null===u||"object"!=q(u)||Array.isArray(u)?t[s]=u:"object"==q(t[s])?t[s]=u===t[s]?u:Y(t[s],u):t[s]=n(!1,{},u)}else"function"===o&&(t=r(t,Y));return t},Y=function(n){for(var e=Array.isArray(n),t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];return K(e,e?n.slice():F({},n),r)},B=Y,$=0,Q=[],W=i.options.__b,G=i.options.__r,Z=i.options.diffed,J=i.options.__c,X=i.options.unmount;function nn(n,e){i.options.__h&&i.options.__h(D,n,$||e),$=0;var t=D.__H||(D.__H={__:[],__h:[]});return n>=t.__.length&&t.__.push({}),t.__[n]}function en(n){return $=1,tn(jn,n)}function tn(n,e,t){var r=nn(U++,2);return r.t=n,r.__c||(r.__=[t?t(e):jn(void 0,e),function(n){var e=r.t(r.__[0],n);r.__[0]!==e&&(r.__=[e,r.__[1]],r.__c.setState({}))}],r.__c=D),r.__}function rn(n,e){var t=nn(U++,3);!i.options.__s&&mn(t.__H,e)&&(t.__=n,t.__H=e,D.__H.__h.push(t))}function on(n,e){var t=nn(U++,4);!i.options.__s&&mn(t.__H,e)&&(t.__=n,t.__H=e,D.__h.push(t))}function ln(n){return $=5,cn((function(){return{current:n}}),[])}function an(n,e,t){$=6,on((function(){"function"==typeof n?n(e()):n&&(n.current=e())}),null==t?t:t.concat(n))}function cn(n,e){var t=nn(U++,7);return mn(t.__H,e)&&(t.__=n(),t.__H=e,t.__h=n),t.__}function sn(n,e){return $=8,cn((function(){return n}),e)}function un(n){var e=D.context[n.__c],t=nn(U++,9);return t.c=n,e?(null==t.__&&(t.__=!0,e.sub(D)),e.props.value):n.__}function pn(n,e){i.options.useDebugValue&&i.options.useDebugValue(e?e(n):n)}function yn(n){var e=nn(U++,10),t=en();return e.__=n,D.componentDidCatch||(D.componentDidCatch=function(n){e.__&&e.__(n),t[1](n)}),[t[0],function(){t[1](void 0)}]}function dn(){Q.forEach((function(n){if(n.__P)try{n.__H.__h.forEach(fn),n.__H.__h.forEach(xn),n.__H.__h=[]}catch(e){n.__H.__h=[],i.options.__e(e,n.__v)}})),Q=[]}i.options.__b=function(n){D=null,W&&W(n)},i.options.__r=function(n){G&&G(n),U=0;var e=(D=n.__c).__H;e&&(e.__h.forEach(fn),e.__h.forEach(xn),e.__h=[])},i.options.diffed=function(n){Z&&Z(n);var e=n.__c;e&&e.__H&&e.__H.__h.length&&(1!==Q.push(e)&&N===i.options.requestAnimationFrame||((N=i.options.requestAnimationFrame)||function(n){var e,t=function(){clearTimeout(r),hn&&cancelAnimationFrame(e),setTimeout(n)},r=setTimeout(t,100);hn&&(e=requestAnimationFrame(t))})(dn)),D=null},i.options.__c=function(n,e){e.some((function(n){try{n.__h.forEach(fn),n.__h=n.__h.filter((function(n){return!n.__||xn(n)}))}catch(t){e.some((function(n){n.__h&&(n.__h=[])})),e=[],i.options.__e(t,n.__v)}})),J&&J(n,e)},i.options.unmount=function(n){X&&X(n);var e,t=n.__c;t&&t.__H&&(t.__H.__.forEach((function(n){try{fn(n)}catch(n){e=n}})),e&&i.options.__e(e,t.__v))};var hn="function"==typeof requestAnimationFrame;function fn(n){var e=D,t=n.__c;"function"==typeof t&&(n.__c=void 0,t()),D=e}function xn(n){var e=D;n.__c=n.__(),D=e}function mn(n,e){return!n||n.length!==e.length||e.some((function(e,t){return e!==n[t]}))}function jn(n,e){return"function"==typeof e?e(n):e}var vn={part:null,showCode:!1,code:""},gn=function(n){var e=n.merge,t=n.hooks,r=t.useReducer,o=t.useLayoutEffect,i=n.state,l=void 0===i?{}:i,a=function(n){return"string"==typeof n?(e=l,n.split(".").reduce((function(n,e){return n?n[e]:void 0}),e)):n(l);var e},c=function(n){return Array.isArray(n)?[n.map(a),!0]:[a(n),!1]},s=function(n){var e=C(c(n.t),2),t=e[0],r=e[1];(r?E(t,n.o):t===n.o)||("function"==typeof n.s&&n.s(),n.s=function(n,e,t){return n[t?"apply":"call"](null,e)}(n.l,n.o=t,r))},u=new Set,p=function(n){return u.add(n),s(n),function(){return u.delete(n)}},y=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,e=r((function(n){return n+1}),0),t=C(e,2),i=t[1],l=r(I,{l:i}),a=C(l,1),s=a[0];return s.t&&(Array.isArray(n)?E(n,s.t):n===s.t)||(s.o=c(n)[0],s.t=n),o((function(){return p(s)}),[]),s.o};return y.get=function(){return l},y.set=function(n){l=e(l,n),u.forEach(s)},y.subscribe=function(n,e){var t;return e||(n=(t=[I,n])[0],e=t[1]),p({l:e,t:n,o:[]})},y}({merge:B,hooks:o,state:vn}),_n=gn.set,bn=(gn.get,function(n){return _n({part:n})}),wn="container__PVQVi",Mn="buttons__wCOvv",kn=function(n){var e=n.day;e=e||1;var t=gn((function(n){return n.part})),r=P[e-1];return Object(i.h)("div",null,Object(i.h)("h1",null,"Day ",e),null!=r&&r.Part1||null!=r&&r.Part2?Object(i.h)("div",{class:wn},Object(i.h)("div",{class:Mn},(null==r?void 0:r.Part1)&&Object(i.h)(f,{onClick:function(){return bn(1)}},"Part 1"),(null==r?void 0:r.Part2)&&Object(i.h)(f,{onClick:function(){return bn(2)}},"Part 2")),r&&t?Object(i.h)(m,{solution:r,part:t}):null):Object(i.h)("p",null,"Day ",e," is not yet implemented"))},On=function(n){var e=n.children,t=ln();return rn((function(){var n=document.createElement("div");return document.body.appendChild(n),t.current=n,function(){Object(i.render)(null,n),n.remove()}}),[]),rn((function(){t.current&&Object(i.render)(e,t.current)}),[e]),null},An="header__3YKgi",zn="logo__Q3ZIu",Hn="navBtn__QwRts",Sn="active__Yg9yU",Vn="sideNav__Ap8Dk";function Pn(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var r,o,i=[],l=!0,a=!1;try{for(t=t.call(n);!(l=(r=t.next()).done)&&(i.push(r.value),!e||i.length!==e);l=!0);}catch(n){a=!0,o=n}finally{try{l||null==t.return||t.return()}finally{if(a)throw o}}return i}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return Cn(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Cn(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Cn(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}var Ln=function(){var n=Pn(en(!1),2),e=n[0],t=n[1],r=function(){return t(!1)};return Object(i.h)("header",{onClick:r,class:An},Object(i.h)(c.Link,{onClick:r,class:zn,href:"".concat(a,"/")},"advent of code 2021"),Object(i.h)("nav",null,Object(i.h)("button",{class:Hn,onClick:function(n){t(!e),n.stopImmediatePropagation()},"aria-label":"open navigation menu"},Object(i.h)(w,{name:"menu"}))),Object(i.h)(On,null,Object(i.h)("div",{class:u(Vn,e&&Sn),onClick:r},Object(i.h)("nav",{onClick:function(n){n.stopImmediatePropagation()}},Object(i.h)("ul",null,Object(i.h)("li",null,Object(i.h)(c.Link,{onClick:r,activeClassName:Sn,href:"".concat(a,"/"),tabIndex:e?void 0:-1},"Day 1")),Object(i.h)("li",null,Object(i.h)(c.Link,{onClick:r,activeClassName:Sn,href:"".concat(a,"/2"),tabIndex:e?void 0:-1},"Day 2")),Object(i.h)("li",null,Object(i.h)(c.Link,{onClick:r,activeClassName:Sn,href:"".concat(a,"/3"),tabIndex:e?void 0:-1},"Day 3")))))))},En="container__5J6y7";e.default=function(){return Object(i.h)("div",{id:"preact_root"},Object(i.h)(Ln,null),Object(i.h)("div",{class:En},Object(i.h)(l.Router,null,Object(i.h)(l.Route,{path:"".concat(a,"/:day?"),component:kn}),Object(i.h)(s,{default:!0}))))}}});
//# sourceMappingURL=ssr-bundle.js.map