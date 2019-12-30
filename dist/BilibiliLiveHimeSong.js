(function () {
  'use strict';

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css = ".bilibili-song-hime{position:fixed;z-index:9999;left:0;top:0;right:0;bottom:47px;width:100%;overflow:hidden}.bilibili-song-hime *,.bilibili-song-hime :after,.bilibili-song-hime :before{box-sizing:border-box}.bilibili-song-hime ::-webkit-scrollbar{width:0!important}.bilibili-song-hime .bsh-top{position:absolute;z-index:2;left:0;top:0;right:0;width:100%;padding:5px 0;font-size:30px;overflow:hidden;color:#fff}.bilibili-song-hime .bsh-top .bsh-top-inner{display:inline-block;white-space:nowrap;line-height:1;text-shadow:0 1px 0 rgba(0,0,0,.8)}.bilibili-song-hime .bsh-lyrics,.bilibili-song-hime .bsh-top .bsh-top-inner{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.bilibili-song-hime .bsh-lyrics{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;position:absolute;z-index:3;width:100%;height:100%;left:0;top:0;right:0;bottom:0;padding:100px;pointer-events:none}.bilibili-song-hime .bsh-lyrics .bsh-lyrics-outer{width:100%;height:100%;overflow:hidden;scroll-behavior:smooth}.bilibili-song-hime .bsh-lyrics .bsh-lyrics-outer .bsh-lyrics-inner .bsh-lyrics-item{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;font-size:30px;white-space:nowrap;text-align:center;padding:15px 0;color:hsla(0,0%,100%,.8)}.bilibili-song-hime .bsh-lyrics .bsh-lyrics-outer .bsh-lyrics-inner .bsh-lyrics-item.bsh-lyrics-playing{-webkit-transition:all .3s ease;transition:all .3s ease;color:#ffc107;text-shadow:0 1px 10px rgba(255,229,0,.5)}.bilibili-song-hime .bsh-playlist{position:absolute;z-index:4;left:20px;top:0;width:400px;height:100%;padding:100px 0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}.bilibili-song-hime .bsh-playlist .bsh-playlist-outer{width:100%;height:100%;overflow-y:auto;overflow-x:hidden;scroll-behavior:smooth;pointer-events:all}.bilibili-song-hime .bsh-playlist .bsh-playlist-outer .bsh-playlist-inner .bsh-playlist-item{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;padding:5px 10px;font-size:18px;white-space:nowrap}.bilibili-song-hime .bsh-playlist .bsh-playlist-outer .bsh-playlist-inner .bsh-playlist-item.bsh-playlist-playing{background-image:-webkit-gradient(linear,left top,right top,from(hsla(0,0%,100%,.25)),to(hsla(0,0%,100%,0)));background-image:linear-gradient(90deg,hsla(0,0%,100%,.25),hsla(0,0%,100%,0))}.bilibili-song-hime .bsh-playlist .bsh-playlist-outer .bsh-playlist-inner .bsh-playlist-item.bsh-playlist-playing .bsh-playlist-song{color:#ffc107;text-shadow:0 1px 10px rgba(255,229,0,.5)}.bilibili-song-hime .bsh-playlist .bsh-playlist-outer .bsh-playlist-inner .bsh-playlist-item .bsh-playlist-index{color:#fff}.bilibili-song-hime .bsh-playlist .bsh-playlist-outer .bsh-playlist-inner .bsh-playlist-item .bsh-playlist-song{color:#03a9f4;margin-left:5px}.bilibili-song-hime .bsh-playlist .bsh-playlist-outer .bsh-playlist-inner .bsh-playlist-item .bsh-playlist-singer{color:hsla(0,0%,100%,.5);margin-left:10px}";
  styleInject(css);

  var css$1 = ".vidage:after,.vidage:before{position:absolute;top:0;right:0;bottom:0;left:0}.vidage-ready .vidage:before{display:none}.vidage-ready .vidage-video{display:block}.vidage{position:fixed;top:0;right:0;bottom:47px;left:0;min-width:100%;z-index:-1}.vidage:before{content:\"\";background-position:50%;background-repeat:no-repeat;background-size:cover}.vidage:after{content:\"\"}.vidage-video{position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover;display:none;pointer-events:none}@supports not ((-o-object-fit:cover) or (object-fit:cover)){.vidage-video{top:50%;left:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}}";
  styleInject(css$1);

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var vidage = createCommonjsModule(function (module, exports) {
  !function(t,e){module.exports=e();}(commonjsGlobal,function(){function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n);}}function m(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}var t="object"==typeof commonjsGlobal&&commonjsGlobal&&commonjsGlobal.Object===Object&&commonjsGlobal,e="object"==typeof self&&self&&self.Object===Object&&self,r=t||e||Function("return this")(),j=function(){return r.Date.now()},n=r.Symbol,i=Object.prototype,a=i.hasOwnProperty,c=i.toString,u=n?n.toStringTag:void 0;var l=Object.prototype.toString;var f="[object Null]",s="[object Undefined]",v=n?n.toStringTag:void 0;function p(t){return null==t?void 0===t?s:f:v&&v in Object(t)?function(t){var e=a.call(t,u),r=t[u];try{t[u]=void 0;}catch(t){}var n=c.call(t);return e?t[u]=r:delete t[u],n}(t):(e=t,l.call(e));var e;}function d(t){return null!=t&&"object"==typeof t}var y="[object Symbol]";var b=NaN,h=/^\s+|\s+$/g,g=/^[-+]0x[0-9a-f]+$/i,w=/^0b[01]+$/i,O=/^0o[0-7]+$/i,A=parseInt;function x(t){if("number"==typeof t)return t;if("symbol"==typeof(e=t)||d(e)&&p(e)==y)return b;var e;if(m(t)){var r="function"==typeof t.valueOf?t.valueOf():t;t=m(r)?r+"":r;}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(h,"");var n=w.test(t);return n||O.test(t)?A(t.slice(2),n?2:8):g.test(t)?b:+t}var T=Math.max,E=Math.min;function S(n,o,t){var i,a,c,u,l,f,s=0,v=!1,p=!1,e=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function d(t){var e=i,r=a;return i=a=void 0,s=t,u=n.apply(r,e)}function y(t){var e=t-f;return void 0===f||o<=e||e<0||p&&c<=t-s}function b(){var t,e,r=j();if(y(r))return h(r);l=setTimeout(b,(e=o-((t=r)-f),p?E(e,c-(t-s)):e));}function h(t){return l=void 0,e&&i?d(t):(i=a=void 0,u)}function r(){var t,e=j(),r=y(e);if(i=arguments,a=this,f=e,r){if(void 0===l)return s=t=f,l=setTimeout(b,o),v?d(t):u;if(p)return l=setTimeout(b,o),d(f)}return void 0===l&&(l=setTimeout(b,o)),u}return o=x(o)||0,m(t)&&(v=!!t.leading,c=(p="maxWait"in t)?T(x(t.maxWait)||0,o):c,e="trailing"in t?!!t.trailing:e),r.cancel=function(){void 0!==l&&clearTimeout(l),i=f=a=l=void(s=0);},r.flush=function(){return void 0===l?u:h(j())},r}var _="[object AsyncFunction]",P="[object Function]",$="[object GeneratorFunction]",F="[object Proxy]";function C(t){if(!m(t))return !1;var e=p(t);return e==P||e==$||e==_||e==F}var M,k=r["__core-js_shared__"],D=(M=/[^.]+$/.exec(k&&k.keys&&k.keys.IE_PROTO||""))?"Symbol(src)_1."+M:"";var I=Function.prototype.toString;var N=/^\[object .+?Constructor\]$/,R=Function.prototype,U=Object.prototype,L=R.toString,q=U.hasOwnProperty,B=RegExp("^"+L.call(q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function V(t){return !(!m(t)||(e=t,D&&D in e))&&(C(t)?B:N).test(function(t){if(null!=t){try{return I.call(t)}catch(t){}try{return t+""}catch(t){}}return ""}(t));var e;}var W=function(){try{var t=(e=Object,n="defineProperty",V(o=null==(r=e)?void 0:r[n])?o:void 0);return t({},"",{}),t}catch(t){}var e,r,n,o;}();function G(t,e,r){"__proto__"==e&&W?W(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r;}function z(t,e){return t===e||t!=t&&e!=e}var H=Object.prototype.hasOwnProperty;function Y(t,e,r){var n=t[e];H.call(t,e)&&z(n,r)&&(void 0!==r||e in t)||G(t,e,r);}function J(t){return t}var K=Math.max;var Q=W?function(t,e){return W(t,"toString",{configurable:!0,enumerable:!1,value:(r=e,function(){return r}),writable:!0});var r;}:J,X=Date.now;var Z,tt,et,rt=(Z=Q,et=tt=0,function(){var t=X(),e=16-(t-et);if(et=t,0<e){if(800<=++tt)return arguments[0]}else tt=0;return Z.apply(void 0,arguments)});function nt(t,e){return rt((i=t,c=J,a=K(void 0===(a=e)?i.length-1:a,0),function(){for(var t=arguments,e=-1,r=K(t.length-a,0),n=Array(r);++e<r;)n[e]=t[a+e];e=-1;for(var o=Array(a+1);++e<a;)o[e]=t[e];return o[a]=c(n),function(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}(i,this,o)}),t+"");var i,a,c;}var ot=9007199254740991;function it(t){return "number"==typeof t&&-1<t&&t%1==0&&t<=ot}function at(t){return null!=t&&it(t.length)&&!C(t)}var ct=9007199254740991,ut=/^(?:0|[1-9]\d*)$/;function lt(t,e){var r=typeof t;return !!(e=null==e?ct:e)&&("number"==r||"symbol"!=r&&ut.test(t))&&-1<t&&t%1==0&&t<e}var ft=Object.prototype;function st(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||ft)}function vt(t){return d(t)&&"[object Arguments]"==p(t)}var pt=Object.prototype,dt=pt.hasOwnProperty,yt=pt.propertyIsEnumerable,bt=vt(function(){return arguments}())?vt:function(t){return d(t)&&dt.call(t,"callee")&&!yt.call(t,"callee")},ht=Array.isArray;var mt=exports&&!exports.nodeType&&exports,jt=mt&&"object"=='object'&&module&&!module.nodeType&&module,gt=jt&&jt.exports===mt?r.Buffer:void 0,wt=(gt?gt.isBuffer:void 0)||function(){return !1},Ot={};Ot["[object Float32Array]"]=Ot["[object Float64Array]"]=Ot["[object Int8Array]"]=Ot["[object Int16Array]"]=Ot["[object Int32Array]"]=Ot["[object Uint8Array]"]=Ot["[object Uint8ClampedArray]"]=Ot["[object Uint16Array]"]=Ot["[object Uint32Array]"]=!0,Ot["[object Arguments]"]=Ot["[object Array]"]=Ot["[object ArrayBuffer]"]=Ot["[object Boolean]"]=Ot["[object DataView]"]=Ot["[object Date]"]=Ot["[object Error]"]=Ot["[object Function]"]=Ot["[object Map]"]=Ot["[object Number]"]=Ot["[object Object]"]=Ot["[object RegExp]"]=Ot["[object Set]"]=Ot["[object String]"]=Ot["[object WeakMap]"]=!1;var At,xt=exports&&!exports.nodeType&&exports,Tt=xt&&"object"=='object'&&module&&!module.nodeType&&module,Et=Tt&&Tt.exports===xt&&t.process,St=function(){try{var t=Tt&&Tt.require&&Tt.require("util").types;return t||Et&&Et.binding&&Et.binding("util")}catch(t){}}(),_t=St&&St.isTypedArray,Pt=_t?(At=_t,function(t){return At(t)}):function(t){return d(t)&&it(t.length)&&!!Ot[p(t)]},$t=Object.prototype.hasOwnProperty;function Ft(t,e){var r=ht(t),n=!r&&bt(t),o=!r&&!n&&wt(t),i=!r&&!n&&!o&&Pt(t),a=r||n||o||i,c=a?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],u=c.length;for(var l in t)!e&&!$t.call(t,l)||a&&("length"==l||o&&("offset"==l||"parent"==l)||i&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||lt(l,u))||c.push(l);return c}var Ct,Mt,kt=(Ct=Object.keys,Mt=Object,function(t){return Ct(Mt(t))}),Dt=Object.prototype.hasOwnProperty;function It(t){return at(t)?Ft(t):function(t){if(!st(t))return kt(t);var e=[];for(var r in Object(t))Dt.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}var Nt,Rt=Object.prototype.hasOwnProperty,Ut=(Nt=function(t,e){if(st(e)||at(e))!function(t,e,r,n){var o=!r;r||(r={});for(var i=-1,a=e.length;++i<a;){var c=e[i],u=n?n(r[c],t[c],c,r,t):void 0;void 0===u&&(u=t[c]),o?G(r,c,u):Y(r,c,u);}}(e,It(e),t);else for(var r in e)Rt.call(e,r)&&Y(t,r,e[r]);},nt(function(t,e){var r=-1,n=e.length,o=1<n?e[n-1]:void 0,i=2<n?e[2]:void 0;for(o=3<Nt.length&&"function"==typeof o?(n--,o):void 0,i&&function(t,e,r){if(!m(r))return !1;var n=typeof e;return !!("number"==n?at(r)&&lt(e,r.length):"string"==n&&e in r)&&z(r[e],t)}(e[0],e[1],i)&&(o=n<3?void 0:o,n=1),t=Object(t);++r<n;){var a=e[r];a&&Nt(t,a,r,o);}return t}));var Lt=null,qt={helperClass:"vidage-ready",videoRemoval:!1};return function(){function r(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),this.options=Ut(qt,e),this._name=this.constructor.name,this.element=function(t,e){if(void 0===t)throw new Error("".concat(e," requires a video selector as first argument."));if("video"!==(t="string"==typeof t?document.querySelector(t):t).nodeName.toLowerCase())throw new Error("".concat(e," requires a valid video selector. You passed a <").concat(t.nodeName,">"));return t}(t,this._name),this.init();}var t,e;return t=r,(e=[{key:"init",value:function(){var t=this;this.element.readyState>=this.element.HAVE_FUTURE_DATA?this.handler():this.element.addEventListener("canplay",function(){t.handler();}),window.addEventListener("resize",S(function(){t.handler();}));}},{key:"handler",value:function(){var t,e,r,n=document.body;(r={touch:!!("ontouchstart"in window||window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture||window.DocumentTouch&&document instanceof DocumentTouch),ie:0<window.navigator.userAgent.indexOf("MSIE")||!!window.navigator.userAgent.match(/Trident.*rv\:11\./),small:window.matchMedia("(max-width: 34em)").matches}).touch&&!r.ie||r.small?(this.element.pause(),this.options.videoRemoval&&(e=this.element,null===Lt&&(Lt=e.parentNode),document.body.contains(e)&&Lt.removeChild(e)),n.classList.remove(this.options.helperClass)):(this.options.videoRemoval&&(t=this.element,document.body.contains(t)||Lt.insertAdjacentElement("afterbegin",t)),this.element.play(),n.classList.add(this.options.helperClass));}}])&&o(t.prototype,e),r}()});
  });

  function topbar (target, text) {
    target.innerText = text;
    var translateX = 0;
    var topWidth = target.clientWidth;
    var length = Math.ceil(document.body.clientWidth / topWidth) + 2;
    target.innerText = Array(length).fill(text).join('');
    setInterval(function () {
      translateX += 1;

      if (translateX >= topWidth) {
        translateX = 0;
        target.style.transform = "translate(0, 0)";
      } else {
        target.style.transform = "translate(-".concat(translateX, "px, 0)");
      }
    }, 1000 / 24);
  }

  function dequal(foo, bar) {
  	var ctor, len;
  	if (foo === bar) return true;
  	if (foo && bar && (ctor=foo.constructor) === bar.constructor) {
  		if (ctor === Date) return foo.getTime() === bar.getTime();
  		if (ctor === RegExp) return foo.toString() === bar.toString();
  		if (ctor === Array && (len=foo.length) === bar.length) {
  			while (len-- && dequal(foo[len], bar[len]));
  			return len === -1;
  		}
  		if (ctor === Object) {
  			if (Object.keys(foo).length !== Object.keys(bar).length) return false;
  			for (len in foo) if (!(len in bar) || !dequal(foo[len], bar[len])) return false;
  			return true;
  		}
  	}
  	return foo !== foo && bar !== bar;
  }

  var lastId = -1;
  var lastLyrics = [];
  function lyrics (outer, inner, lyrics, id) {
    if (!dequal(id, lastId)) {
      lastId = id;
      inner.innerHTML = lyrics.map(function (item) {
        return "<div data-time=\"".concat(item.time, "\" class=\"bsh-lyrics-item ").concat(item.playing ? 'bsh-lyrics-playing' : '', "\">").concat(item.text, "</div>");
      }).join('');
      outer.scrollTo(0, 0);
    }

    if (!dequal(lyrics, lastLyrics)) {
      lastLyrics = lyrics;
      var $oldPlaying = inner.querySelector('.bsh-lyrics-playing');

      if ($oldPlaying) {
        $oldPlaying.classList.remove('bsh-lyrics-playing');
      }

      var playing = lyrics.find(function (item) {
        return item.playing;
      }) || {};
      var $newPlaying = inner.querySelector("[data-time=\"".concat(playing.time, "\"]"));

      if (playing && $newPlaying) {
        $newPlaying.classList.add('bsh-lyrics-playing');
        outer.scrollTo(0, $newPlaying ? $newPlaying.offsetTop - 100 - outer.clientHeight / 2 : 0);
      }
    }
  }

  var lastId$1 = -1;
  var lastPlaylist = [];
  function playlist (outer, inner, playlist, id) {
    if (!dequal(id, lastId$1)) {
      lastId$1 = id;
      inner.innerHTML = playlist.map(function (item, index) {
        return "<div data-id=\"".concat(item.id, "\" class=\"bsh-playlist-item ").concat(item.playing ? 'bsh-playlist-playing' : '', "\">\n                        <span class=\"bsh-playlist-index\">").concat(index + 1, ".</span>\n                        <span class=\"bsh-playlist-song\">").concat(item.song, "</span>\n                        <span class=\"bsh-playlist-singer\">").concat(item.singer, "</span>\n                    </div>");
      }).join('');
    }

    if (!dequal(playlist, lastPlaylist)) {
      lastPlaylist = playlist;
      var $oldPlaying = inner.querySelector('.bsh-playlist-playing');

      if ($oldPlaying) {
        $oldPlaying.classList.remove('bsh-playlist-playing');
      }

      var playing = playlist.find(function (item) {
        return item.playing;
      }) || {};
      var $newPlaying = inner.querySelector("[data-id=\"".concat(playing.id, "\"]"));

      if (playing && $newPlaying) {
        $newPlaying.classList.add('bsh-playlist-playing');
        outer.scrollTo(0, $newPlaying ? $newPlaying.offsetTop - 100 : 0);
      }
    }
  }

  var config = {
    topbar: '本直播间使用本人开发的 Chrome 扩展 <Bilibili 直播姬> 进行直播，简介有下载地址。24小时无人值守，欢迎随意点歌和切歌，送个礼物什么的那就最好啦。',
    videoBg: 'https://zhw2590582.github.io/assets-cdn/video/shinobu-kocho.mp4'
  };

  function getPlaylist() {
    var $list = document.querySelector('#g_playlist');
    if (!$list) return [];
    var $list_ul = $list.querySelector('.f-cb');
    return Array.from($list_ul.children).map(function (item) {
      return {
        id: Number(item.dataset.id),
        playing: item.classList.contains('z-sel'),
        song: item.children[1].innerText.trim(),
        singer: item.children[3].innerText,
        duration: item.children[4].innerText
      };
    });
  }
  function getLyrics() {
    var $list = document.querySelector('#g_playlist');
    if (!$list) return [];
    var $lyrics = $list.querySelector('.listlyric');
    return Array.from($lyrics.children).map(function (item) {
      return {
        playing: item.classList.contains('z-sel'),
        time: item.dataset.time,
        text: item.innerText.trim()
      };
    });
  }
  function getSongId() {
    var $list = document.querySelector('#g_playlist');
    if (!$list) return -1;
    var $sel = $list.querySelector('.f-cb .z-sel');
    return $sel ? Number($sel.dataset.id) : -1;
  }

  var music163 = 'https://music.163.com/#/search/m/?s=';

  if (window.location.href.startsWith(music163)) {
    window.addEventListener('load', function () {
      var $container = document.createElement('div');
      $container.classList.add('bilibili-song-hime');
      document.body.appendChild($container);
      $container.innerHTML = "\n            <div class=\"vidage\">\n                <video id=\"vidage\" class=\"vidage-video\" preload=\"metadata\" loop autoplay muted>\n                    <source src=\"".concat(config.videoBg, "\" type=\"video/mp4\" />\n                </video>\n            </div>\n            <div class=\"bsh-top\">\n                <div class=\"bsh-top-inner\"></div>\n            </div>\n            <div class=\"bsh-lyrics\">\n                <div class=\"bsh-lyrics-outer\">\n                    <div class=\"bsh-lyrics-inner\"></div>\n                </div>\n            </div>\n            <div class=\"bsh-playlist\">\n                <div class=\"bsh-playlist-outer\">\n                    <div class=\"bsh-playlist-inner\"></div>\n                </div>\n            </div>\n        ");
      var $topbar = $container.querySelector('.bsh-top-inner');
      var $vidage = $container.querySelector('.vidage');
      var $video = $container.querySelector('#vidage');
      var $lyricsOuter = $container.querySelector('.bsh-lyrics-outer');
      var $lyricsInner = $container.querySelector('.bsh-lyrics-inner');
      var $playlistOuter = $container.querySelector('.bsh-playlist-outer');
      var $playlistInner = $container.querySelector('.bsh-playlist-inner');
      new vidage('#vidage');
      topbar($topbar, config.topbar);
      $vidage.addEventListener('dragover', function (event) {
        return event.preventDefault();
      });
      $vidage.addEventListener('drop', function (event) {
        event.preventDefault();
        var file = event.dataTransfer.files[0];

        if (file) {
          var canPlayType = $video.canPlayType(file.type);

          if (canPlayType === 'maybe' || canPlayType === 'probably') {
            $video.src = URL.createObjectURL(file);
          }
        }
      });
      setInterval(function () {
        var $listBtn = document.querySelector('[title="播放列表"]');
        var $list = document.querySelector('#g_playlist');

        if (!$list && $listBtn) {
          $listBtn.click();
        } else {
          playlist($playlistOuter, $playlistInner, getPlaylist(), getSongId());
          lyrics($lyricsOuter, $lyricsInner, getLyrics(), getSongId());
        }
      }, 500);
    });
  }

}());
//# sourceMappingURL=BilibiliLiveHimeSong.js.map
