function _defineProperty(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function _classCallCheck(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,i){for(var t=0;t<i.length;t++){var r=i[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,i,t){return i&&_defineProperties(e.prototype,i),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{"0PGG":function(e,i,t){"use strict";t.r(i),t.d(i,"ion_progress_bar",(function(){return o}));var r=t("dSyh"),n=t("AfW+"),a=t("aiEM"),s=t("Dl6n"),o=function(){function e(i){_classCallCheck(this,e),Object(r.l)(this,i),this.type="determinate",this.reversed=!1,this.value=0,this.buffer=1}return _createClass(e,[{key:"render",value:function(){var e,i=this.color,t=this.type,a=this.reversed,o=this.value,m=this.buffer,f=n.b.getBoolean("_testing"),l=Object(r.e)(this);return Object(r.i)(r.a,{role:"progressbar","aria-valuenow":"determinate"===t?o:null,"aria-valuemin":"0","aria-valuemax":"1",class:Object.assign(Object.assign({},Object(s.a)(i)),(e={},_defineProperty(e,l,!0),_defineProperty(e,"progress-bar-".concat(t),!0),_defineProperty(e,"progress-paused",f),_defineProperty(e,"progress-bar-reversed","rtl"===document.dir?!a:a),e))},"indeterminate"===t?c():b(o,m))}}],[{key:"style",get:function(){return':host{--background:rgba(var(--ion-color-primary-rgb,56,128,255),0.2);--progress-background:var(--ion-color-primary,#3880ff);--buffer-background:var(--background);display:block;position:relative;width:100%;contain:strict;direction:ltr;overflow:hidden}:host(.ion-color){--progress-background:var(--ion-color-base);--buffer-background:rgba(var(--ion-color-base-rgb),0.2)}:host(.progress-bar-indeterminate){background:var(--buffer-background)}.buffer-circles,.indeterminate-bar-primary,.indeterminate-bar-secondary,.progress,.progress-buffer-bar,.progress-buffer-bar:before,.progress-indeterminate{left:0;right:0;top:0;bottom:0;position:absolute;width:100%;height:100%}.progress,.progress-buffer-bar{-webkit-transform-origin:left top;transform-origin:left top;-webkit-transition:-webkit-transform .15s linear;transition:-webkit-transform .15s linear;transition:transform .15s linear;transition:transform .15s linear,-webkit-transform .15s linear}.progress,.progress-indeterminate{background:var(--progress-background);z-index:2}.progress-buffer-bar{background:#fff;z-index:1}.progress-buffer-bar:before{background:var(--buffer-background);content:""}.indeterminate-bar-primary{top:0;right:0;bottom:0;left:-145.166611%;-webkit-animation:primary-indeterminate-translate 2s linear infinite;animation:primary-indeterminate-translate 2s linear infinite}.indeterminate-bar-primary .progress-indeterminate{-webkit-animation:primary-indeterminate-scale 2s linear infinite;animation:primary-indeterminate-scale 2s linear infinite;-webkit-animation-play-state:inherit;animation-play-state:inherit}.indeterminate-bar-secondary{top:0;right:0;bottom:0;left:-54.888891%;-webkit-animation:secondary-indeterminate-translate 2s linear infinite;animation:secondary-indeterminate-translate 2s linear infinite}.indeterminate-bar-secondary .progress-indeterminate{-webkit-animation:secondary-indeterminate-scale 2s linear infinite;animation:secondary-indeterminate-scale 2s linear infinite;-webkit-animation-play-state:inherit;animation-play-state:inherit}.buffer-circles{background:radial-gradient(ellipse at center,var(--buffer-background) 0,var(--buffer-background) 30%,transparent 0) repeat-x 5px;background-size:10px 10px;z-index:0;-webkit-animation:buffering .45s linear infinite;animation:buffering .45s linear infinite}:host(.progress-bar-reversed) .progress,:host(.progress-bar-reversed) .progress-buffer-bar{-webkit-transform-origin:right top;transform-origin:right top}:host(.progress-bar-reversed) .buffer-circles,:host(.progress-bar-reversed) .indeterminate-bar-primary,:host(.progress-bar-reversed) .indeterminate-bar-secondary,:host(.progress-bar-reversed) .progress-indeterminate{animation-direction:reverse}:host(.progress-paused) .buffer-circles,:host(.progress-paused) .indeterminate-bar-primary,:host(.progress-paused) .indeterminate-bar-secondary{-webkit-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes primary-indeterminate-translate{0%{-webkit-transform:translateX(0);transform:translateX(0)}20%{-webkit-animation-timing-function:cubic-bezier(.5,0,.701732,.495819);animation-timing-function:cubic-bezier(.5,0,.701732,.495819);-webkit-transform:translateX(0);transform:translateX(0)}59.15%{-webkit-animation-timing-function:cubic-bezier(.302435,.381352,.55,.956352);animation-timing-function:cubic-bezier(.302435,.381352,.55,.956352);-webkit-transform:translateX(83.67142%);transform:translateX(83.67142%)}to{-webkit-transform:translateX(200.611057%);transform:translateX(200.611057%)}}@keyframes primary-indeterminate-translate{0%{-webkit-transform:translateX(0);transform:translateX(0)}20%{-webkit-animation-timing-function:cubic-bezier(.5,0,.701732,.495819);animation-timing-function:cubic-bezier(.5,0,.701732,.495819);-webkit-transform:translateX(0);transform:translateX(0)}59.15%{-webkit-animation-timing-function:cubic-bezier(.302435,.381352,.55,.956352);animation-timing-function:cubic-bezier(.302435,.381352,.55,.956352);-webkit-transform:translateX(83.67142%);transform:translateX(83.67142%)}to{-webkit-transform:translateX(200.611057%);transform:translateX(200.611057%)}}@-webkit-keyframes primary-indeterminate-scale{0%{-webkit-transform:scaleX(.08);transform:scaleX(.08)}36.65%{-webkit-animation-timing-function:cubic-bezier(.334731,.12482,.785844,1);animation-timing-function:cubic-bezier(.334731,.12482,.785844,1);-webkit-transform:scaleX(.08);transform:scaleX(.08)}69.15%{-webkit-animation-timing-function:cubic-bezier(.06,.11,.6,1);animation-timing-function:cubic-bezier(.06,.11,.6,1);-webkit-transform:scaleX(.661479);transform:scaleX(.661479)}to{-webkit-transform:scaleX(.08);transform:scaleX(.08)}}@keyframes primary-indeterminate-scale{0%{-webkit-transform:scaleX(.08);transform:scaleX(.08)}36.65%{-webkit-animation-timing-function:cubic-bezier(.334731,.12482,.785844,1);animation-timing-function:cubic-bezier(.334731,.12482,.785844,1);-webkit-transform:scaleX(.08);transform:scaleX(.08)}69.15%{-webkit-animation-timing-function:cubic-bezier(.06,.11,.6,1);animation-timing-function:cubic-bezier(.06,.11,.6,1);-webkit-transform:scaleX(.661479);transform:scaleX(.661479)}to{-webkit-transform:scaleX(.08);transform:scaleX(.08)}}@-webkit-keyframes secondary-indeterminate-translate{0%{-webkit-animation-timing-function:cubic-bezier(.15,0,.515058,.409685);animation-timing-function:cubic-bezier(.15,0,.515058,.409685);-webkit-transform:translateX(0);transform:translateX(0)}25%{-webkit-animation-timing-function:cubic-bezier(.31033,.284058,.8,.733712);animation-timing-function:cubic-bezier(.31033,.284058,.8,.733712);-webkit-transform:translateX(37.651913%);transform:translateX(37.651913%)}48.35%{-webkit-animation-timing-function:cubic-bezier(.4,.627035,.6,.902026);animation-timing-function:cubic-bezier(.4,.627035,.6,.902026);-webkit-transform:translateX(84.386165%);transform:translateX(84.386165%)}to{-webkit-transform:translateX(160.277782%);transform:translateX(160.277782%)}}@keyframes secondary-indeterminate-translate{0%{-webkit-animation-timing-function:cubic-bezier(.15,0,.515058,.409685);animation-timing-function:cubic-bezier(.15,0,.515058,.409685);-webkit-transform:translateX(0);transform:translateX(0)}25%{-webkit-animation-timing-function:cubic-bezier(.31033,.284058,.8,.733712);animation-timing-function:cubic-bezier(.31033,.284058,.8,.733712);-webkit-transform:translateX(37.651913%);transform:translateX(37.651913%)}48.35%{-webkit-animation-timing-function:cubic-bezier(.4,.627035,.6,.902026);animation-timing-function:cubic-bezier(.4,.627035,.6,.902026);-webkit-transform:translateX(84.386165%);transform:translateX(84.386165%)}to{-webkit-transform:translateX(160.277782%);transform:translateX(160.277782%)}}@-webkit-keyframes secondary-indeterminate-scale{0%{-webkit-animation-timing-function:cubic-bezier(.205028,.057051,.57661,.453971);animation-timing-function:cubic-bezier(.205028,.057051,.57661,.453971);-webkit-transform:scaleX(.08);transform:scaleX(.08)}19.15%{-webkit-animation-timing-function:cubic-bezier(.152313,.196432,.648374,1.004315);animation-timing-function:cubic-bezier(.152313,.196432,.648374,1.004315);-webkit-transform:scaleX(.457104);transform:scaleX(.457104)}44.15%{-webkit-animation-timing-function:cubic-bezier(.257759,-.003163,.211762,1.38179);animation-timing-function:cubic-bezier(.257759,-.003163,.211762,1.38179);-webkit-transform:scaleX(.72796);transform:scaleX(.72796)}to{-webkit-transform:scaleX(.08);transform:scaleX(.08)}}@keyframes secondary-indeterminate-scale{0%{-webkit-animation-timing-function:cubic-bezier(.205028,.057051,.57661,.453971);animation-timing-function:cubic-bezier(.205028,.057051,.57661,.453971);-webkit-transform:scaleX(.08);transform:scaleX(.08)}19.15%{-webkit-animation-timing-function:cubic-bezier(.152313,.196432,.648374,1.004315);animation-timing-function:cubic-bezier(.152313,.196432,.648374,1.004315);-webkit-transform:scaleX(.457104);transform:scaleX(.457104)}44.15%{-webkit-animation-timing-function:cubic-bezier(.257759,-.003163,.211762,1.38179);animation-timing-function:cubic-bezier(.257759,-.003163,.211762,1.38179);-webkit-transform:scaleX(.72796);transform:scaleX(.72796)}to{-webkit-transform:scaleX(.08);transform:scaleX(.08)}}@-webkit-keyframes buffering{to{-webkit-transform:translateX(-10px);transform:translateX(-10px)}}@keyframes buffering{to{-webkit-transform:translateX(-10px);transform:translateX(-10px)}}:host{height:3px}'}}]),e}(),c=function(){return[Object(r.i)("div",{class:"indeterminate-bar-primary"},Object(r.i)("span",{class:"progress-indeterminate"})),Object(r.i)("div",{class:"indeterminate-bar-secondary"},Object(r.i)("span",{class:"progress-indeterminate"}))]},b=function(e,i){var t=Object(a.c)(0,e,1),n=Object(a.c)(0,i,1);return[Object(r.i)("div",{class:"progress",style:{transform:"scaleX(".concat(t,")")}}),1!==n&&Object(r.i)("div",{class:"buffer-circles"}),Object(r.i)("div",{class:"progress-buffer-bar",style:{transform:"scaleX(".concat(n,")")}})]}}}]);