/*! jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */
jQuery.migrateMute===void 0&&(jQuery.migrateMute=!0),function(e,t,n){function r(n){var r=t.console;i[n]||(i[n]=!0,e.migrateWarnings.push(n),r&&r.warn&&!e.migrateMute&&(r.warn("JQMIGRATE: "+n),e.migrateTrace&&r.trace&&r.trace()))}function a(t,a,i,o){if(Object.defineProperty)try{return Object.defineProperty(t,a,{configurable:!0,enumerable:!0,get:function(){return r(o),i},set:function(e){r(o),i=e}}),n}catch(s){}e._definePropertyBroken=!0,t[a]=i}var i={};e.migrateWarnings=[],!e.migrateMute&&t.console&&t.console.log&&t.console.log("JQMIGRATE: Logging is active"),e.migrateTrace===n&&(e.migrateTrace=!0),e.migrateReset=function(){i={},e.migrateWarnings.length=0},"BackCompat"===document.compatMode&&r("jQuery is not compatible with Quirks Mode");var o=e("<input/>",{size:1}).attr("size")&&e.attrFn,s=e.attr,u=e.attrHooks.value&&e.attrHooks.value.get||function(){return null},c=e.attrHooks.value&&e.attrHooks.value.set||function(){return n},l=/^(?:input|button)$/i,d=/^[238]$/,p=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,f=/^(?:checked|selected)$/i;a(e,"attrFn",o||{},"jQuery.attrFn is deprecated"),e.attr=function(t,a,i,u){var c=a.toLowerCase(),g=t&&t.nodeType;return u&&(4>s.length&&r("jQuery.fn.attr( props, pass ) is deprecated"),t&&!d.test(g)&&(o?a in o:e.isFunction(e.fn[a])))?e(t)[a](i):("type"===a&&i!==n&&l.test(t.nodeName)&&t.parentNode&&r("Can't change the 'type' of an input or button in IE 6/7/8"),!e.attrHooks[c]&&p.test(c)&&(e.attrHooks[c]={get:function(t,r){var a,i=e.prop(t,r);return i===!0||"boolean"!=typeof i&&(a=t.getAttributeNode(r))&&a.nodeValue!==!1?r.toLowerCase():n},set:function(t,n,r){var a;return n===!1?e.removeAttr(t,r):(a=e.propFix[r]||r,a in t&&(t[a]=!0),t.setAttribute(r,r.toLowerCase())),r}},f.test(c)&&r("jQuery.fn.attr('"+c+"') may use property instead of attribute")),s.call(e,t,a,i))},e.attrHooks.value={get:function(e,t){var n=(e.nodeName||"").toLowerCase();return"button"===n?u.apply(this,arguments):("input"!==n&&"option"!==n&&r("jQuery.fn.attr('value') no longer gets properties"),t in e?e.value:null)},set:function(e,t){var a=(e.nodeName||"").toLowerCase();return"button"===a?c.apply(this,arguments):("input"!==a&&"option"!==a&&r("jQuery.fn.attr('value', val) no longer sets properties"),e.value=t,n)}};var g,h,v=e.fn.init,m=e.parseJSON,y=/^([^<]*)(<[\w\W]+>)([^>]*)$/;e.fn.init=function(t,n,a){var i;return t&&"string"==typeof t&&!e.isPlainObject(n)&&(i=y.exec(e.trim(t)))&&i[0]&&("<"!==t.charAt(0)&&r("$(html) HTML strings must start with '<' character"),i[3]&&r("$(html) HTML text after last tag is ignored"),"#"===i[0].charAt(0)&&(r("HTML string cannot start with a '#' character"),e.error("JQMIGRATE: Invalid selector string (XSS)")),n&&n.context&&(n=n.context),e.parseHTML)?v.call(this,e.parseHTML(i[2],n,!0),n,a):v.apply(this,arguments)},e.fn.init.prototype=e.fn,e.parseJSON=function(e){return e||null===e?m.apply(this,arguments):(r("jQuery.parseJSON requires a valid JSON string"),null)},e.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||0>e.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e.browser||(g=e.uaMatch(navigator.userAgent),h={},g.browser&&(h[g.browser]=!0,h.version=g.version),h.chrome?h.webkit=!0:h.webkit&&(h.safari=!0),e.browser=h),a(e,"browser",e.browser,"jQuery.browser is deprecated"),e.sub=function(){function t(e,n){return new t.fn.init(e,n)}e.extend(!0,t,this),t.superclass=this,t.fn=t.prototype=this(),t.fn.constructor=t,t.sub=this.sub,t.fn.init=function(r,a){return a&&a instanceof e&&!(a instanceof t)&&(a=t(a)),e.fn.init.call(this,r,a,n)},t.fn.init.prototype=t.fn;var n=t(document);return r("jQuery.sub() is deprecated"),t},e.ajaxSetup({converters:{"text json":e.parseJSON}});var b=e.fn.data;e.fn.data=function(t){var a,i,o=this[0];return!o||"events"!==t||1!==arguments.length||(a=e.data(o,t),i=e._data(o,t),a!==n&&a!==i||i===n)?b.apply(this,arguments):(r("Use of jQuery.fn.data('events') is deprecated"),i)};var j=/\/(java|ecma)script/i,w=e.fn.andSelf||e.fn.addBack;e.fn.andSelf=function(){return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),w.apply(this,arguments)},e.clean||(e.clean=function(t,a,i,o){a=a||document,a=!a.nodeType&&a[0]||a,a=a.ownerDocument||a,r("jQuery.clean() is deprecated");var s,u,c,l,d=[];if(e.merge(d,e.buildFragment(t,a).childNodes),i)for(c=function(e){return!e.type||j.test(e.type)?o?o.push(e.parentNode?e.parentNode.removeChild(e):e):i.appendChild(e):n},s=0;null!=(u=d[s]);s++)e.nodeName(u,"script")&&c(u)||(i.appendChild(u),u.getElementsByTagName!==n&&(l=e.grep(e.merge([],u.getElementsByTagName("script")),c),d.splice.apply(d,[s+1,0].concat(l)),s+=l.length));return d});var Q=e.event.add,x=e.event.remove,k=e.event.trigger,N=e.fn.toggle,T=e.fn.live,M=e.fn.die,S="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",C=RegExp("\\b(?:"+S+")\\b"),H=/(?:^|\s)hover(\.\S+|)\b/,A=function(t){return"string"!=typeof t||e.event.special.hover?t:(H.test(t)&&r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),t&&t.replace(H,"mouseenter$1 mouseleave$1"))};e.event.props&&"attrChange"!==e.event.props[0]&&e.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),e.event.dispatch&&a(e.event,"handle",e.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),e.event.add=function(e,t,n,a,i){e!==document&&C.test(t)&&r("AJAX events should be attached to document: "+t),Q.call(this,e,A(t||""),n,a,i)},e.event.remove=function(e,t,n,r,a){x.call(this,e,A(t)||"",n,r,a)},e.fn.error=function(){var e=Array.prototype.slice.call(arguments,0);return r("jQuery.fn.error() is deprecated"),e.splice(0,0,"error"),arguments.length?this.bind.apply(this,e):(this.triggerHandler.apply(this,e),this)},e.fn.toggle=function(t,n){if(!e.isFunction(t)||!e.isFunction(n))return N.apply(this,arguments);r("jQuery.fn.toggle(handler, handler...) is deprecated");var a=arguments,i=t.guid||e.guid++,o=0,s=function(n){var r=(e._data(this,"lastToggle"+t.guid)||0)%o;return e._data(this,"lastToggle"+t.guid,r+1),n.preventDefault(),a[r].apply(this,arguments)||!1};for(s.guid=i;a.length>o;)a[o++].guid=i;return this.click(s)},e.fn.live=function(t,n,a){return r("jQuery.fn.live() is deprecated"),T?T.apply(this,arguments):(e(this.context).on(t,this.selector,n,a),this)},e.fn.die=function(t,n){return r("jQuery.fn.die() is deprecated"),M?M.apply(this,arguments):(e(this.context).off(t,this.selector||"**",n),this)},e.event.trigger=function(e,t,n,a){return n||C.test(e)||r("Global events are undocumented and deprecated"),k.call(this,e,t,n||document,a)},e.each(S.split("|"),function(t,n){e.event.special[n]={setup:function(){var t=this;return t!==document&&(e.event.add(document,n+"."+e.guid,function(){e.event.trigger(n,null,t,!0)}),e._data(this,n,e.guid++)),!1},teardown:function(){return this!==document&&e.event.remove(document,n+"."+e._data(this,n)),!1}}})}(jQuery,window);
var stacks = {};
stacks.jQuery = jQuery.noConflict(true);
stacks.com_bigwhiteduck_stacks_typer = {};
stacks.com_bigwhiteduck_stacks_typer = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;
(function($){$.fn.onImpression=function(options){var settings=$.extend({offset:0,callback:null,attribute:"",alwayscallback:false,scrollable:""},options)
var $window=$(window),$scrollable=$(settings.scrollable),onImpressionElements=this,loaded;this.one("onImpression",function(){if(typeof settings.callback==="function")settings.callback.call(this,this.getAttribute(settings.attribute));});this.on("alwaysOnImpression",function(){if(typeof settings.callback==="function")settings.callback.call(this,this.getAttribute(settings.attribute));});function onImpression(){var inview=onImpressionElements.filter(function(){var $e=$(this);if($e.is(":hidden"))return;var wt=$window.scrollTop(),wb=wt+$window.height(),et=$e.offset().top,eb=et+$e.height();var inScrollable=false;if($scrollable.length){var scrollTop=$scrollable.scrollTop(),scrollBottom=scrollTop+$scrollable.height();inScrollable=(eb>=scrollTop-settings.offset&&et<=scrollBottom+settings.offset);}
return(eb>=wt-settings.offset&&et<=wb+settings.offset)||inScrollable;});if(settings.alwayscallback){loaded=inview.trigger("alwaysOnImpression");}
else{loaded=inview.trigger("onImpression");onImpressionElements=onImpressionElements.not(loaded);}}
if(typeof settings.callback==="function"){if($scrollable.length){$scrollable.on("scroll.onImpression resize.onImpression lookup.onImpression",onImpression);}else{$window.on("scroll.onImpression resize.onImpression lookup.onImpression",onImpression);}
onImpression();}
return this;};})(jQuery);

(function($){var spanWithColor=function(color,backgroundColor){if(color==='rgba(0, 0, 0, 0)'){color='rgb(255, 255, 255)';}
if(backgroundColor==='rgb(255, 255, 255)'){color='rgb(0, 0, 0)';}
if(backgroundColor==='rgb(0, 0, 0)'){color='rgb(255, 255, 255)';}
return $('<span></span>').css('color',color).css('background-color',backgroundColor);};var isNumber=function(n){return!isNaN(parseFloat(n))&&isFinite(n);};var clearData=function($e){$e.removeData(['typePosition','highlightPosition','leftStop','rightStop','primaryColor','backgroundColor','text','typing',]);};var type=function($e){var
text=$e.data('text'),oldLeft=$e.data('oldLeft'),oldRight=$e.data('oldRight');if(!text||text.length===0){clearData($e);return;}
$e.text(oldLeft+
text.charAt(0)+
oldRight).data({oldLeft:oldLeft+text.charAt(0),text:text.substring(1)});setTimeout(function(){type($e);},$e.data('typerOptions').typeSpeed);};var clearText=function($e){$e.find('span').remove();setTimeout(function(){type($e);},$e.data('typerOptions').typeDelay);};var highlight=function($e){var
position=$e.data('highlightPosition'),leftText,highlightedText,rightText;if(!isNumber(position)){position=$e.data('rightStop')+1;}
if(position<=$e.data('leftStop')){setTimeout(function(){clearText($e);},$e.data('typerOptions').clearDelay);return;}
leftText=$e.text().substring(0,position-1);highlightedText=$e.text().substring(position-1,$e.data('rightStop')+1);rightText=$e.text().substring($e.data('rightStop')+1);$e.html(leftText).append(spanWithColor($e.data('backgroundColor'),$e.data('primaryColor')).append(highlightedText)).append(rightText);$e.data('highlightPosition',position-1);setTimeout(function(){return highlight($e);},$e.data('typerOptions').highlightInterval);};var typeWithAttribute=function($e){var targets;if($e.data('typing')){return;}
try{targets=JSON.parse($e.attr($e.data('typerOptions').typerDataAttr)).targets;}catch(e){}
if(typeof targets==="undefined"){targets=$.map($e.attr($e.data('typerOptions').typerDataAttr).split($e.data('typerOptions').breakChar),function(e){return $.trim(e);});}
if($e.data('typerOptions').random){$e.typeTo(targets[Math.floor(Math.random()*targets.length)]);}else{if(typeof($e.data('currentIndex'))==="undefined"){$e.data('currentIndex',0);}else{$e.data('currentIndex',$e.data('currentIndex')+1);}
if(typeof(targets[$e.data('currentIndex')])==="undefined"){$e.data('currentIndex',0);}
if(targets.length==($e.data('currentIndex')+1)){$e.data('typerOptions').cycleDone=true;}
$e.typeTo(targets[$e.data('currentIndex')],$e.data('typerOptions'));}};$.fn.typer=function(options){var $elements=$(this),interval=null;var opts=$.extend({},$.fn.typer.defaults,options);return $elements.each(function(){var $e=$(this);if(typeof $e.attr(opts.typerDataAttr)==="undefined"){return;}
$e.data('typerOptions',opts);typeWithAttribute($e);interval=setInterval(function(){if($e.data('typerOptions').onlyOnce&&$e.data('typerOptions').cycleDone){clearInterval(interval);}else{typeWithAttribute($e);}},$e.data('typerOptions').typerInterval);});};$.fn.typeTo=function(newString,options){var $e=$(this),currentText=$e.text(),opts=$.extend({},$.fn.typer.defaults,options),i=0,j=0;if(currentText===newString){console.log("Our strings are equal, nothing to type");return $e;}
if(currentText!==$e.html()){console.log("Typer does not work on elements with child elements.");return $e;}
$e.data('typing',true);$e.data('typerOptions',opts);if($e.data('typerOptions').clearEverything!==true){while(currentText.charAt(i)===newString.charAt(i)){i++;}
while(currentText.rightChars(j)===newString.rightChars(j)){j++;}}
newString=newString.substring(i,newString.length-j+1);$e.data({oldLeft:currentText.substring(0,i),oldRight:currentText.rightChars(j-1),leftStop:i,rightStop:currentText.length-j,primaryColor:$e.data('typerOptions').highlightColor||$e.css('color'),backgroundColor:$e.data('typerOptions').textColor||$e.css('background-color'),text:newString});highlight($e);return $e;};$.fn.typer.defaults={highlightSpeed:20,highlightInterval:50,typeSpeed:100,clearDelay:500,typeDelay:200,clearEverything:true,typerDataAttr:'data-typer-targets',typerInterval:2000,random:false,highlightColor:null,textColor:null,onlyOnce:false,cycleDone:false,breakChar:','};String.prototype.rightChars=function(n){if(n<=0){return"";}
else if(n>this.length){return this;}
else{return this.substring(this.length,this.length-n);}};})(jQuery);

return stack;})(stacks.com_bigwhiteduck_stacks_typer);
stacks.com_bigwhiteduck_stacks_billboard = {};
stacks.com_bigwhiteduck_stacks_billboard = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;/*! jQuery slabtext plugin v2.3.1 MIT/GPL2 @freqdec */
(function($){$.fn.slabText=function(options){var settings={fontRatio:0.78,forceNewCharCount:true,wrapAmpersand:true,headerBreakpoint:null,viewportBreakpoint:null,noResizeEvent:false,resizeThrottleTime:300,maxFontSize:999,postTweak:true,precision:3,minCharsPerLine:0};$("body").addClass("slabtexted");return this.each(function(){if(options){$.extend(settings,options)}var $this=$(this),keepSpans=$("span.slabtext",$this).length,words=keepSpans?[]:String($.trim($this.text())).replace(/\s{2,}/g," ").split(" "),origFontSize=null,idealCharPerLine=null,fontRatio=settings.fontRatio,forceNewCharCount=settings.forceNewCharCount,headerBreakpoint=settings.headerBreakpoint,viewportBreakpoint=settings.viewportBreakpoint,postTweak=settings.postTweak,precision=settings.precision,resizeThrottleTime=settings.resizeThrottleTime,minCharsPerLine=settings.minCharsPerLine,resizeThrottle=null,viewportWidth=$(window).width(),headLink=$this.find("a:first").attr("href")||$this.attr("href"),linkTitle=headLink?$this.find("a:first").attr("title"):"";if(!keepSpans&&minCharsPerLine&&words.join(" ").length<minCharsPerLine){return}var grabPixelFontSize=function(){var dummy=jQuery('<div style="display:none;font-size:1em;margin:0;padding:0;height:auto;line-height:1;border:0;">&nbsp;</div>').appendTo($this),emH=dummy.height();dummy.remove();return emH};var resizeSlabs=function resizeSlabs(){var parentWidth=$this.width(),fs;if(parentWidth===0){return}$this.removeClass("slabtextdone slabtextinactive");if(viewportBreakpoint&&viewportBreakpoint>viewportWidth||headerBreakpoint&&headerBreakpoint>parentWidth){$this.addClass("slabtextinactive");return}fs=grabPixelFontSize();if(!keepSpans&&(forceNewCharCount||fs!=origFontSize)){origFontSize=fs;var newCharPerLine=Math.min(60,Math.floor(parentWidth/(origFontSize*fontRatio))),wordIndex=0,lineText=[],counter=0,preText="",postText="",finalText="",slice,preDiff,postDiff;if(newCharPerLine!=0&&newCharPerLine!=idealCharPerLine){idealCharPerLine=newCharPerLine;while(wordIndex<words.length){postText="";while(postText.length<idealCharPerLine){preText=postText;postText+=words[wordIndex]+" ";if(++wordIndex>=words.length){break}}if(minCharsPerLine){slice=words.slice(wordIndex).join(" ");if(slice.length<minCharsPerLine){postText+=slice;preText=postText;wordIndex=words.length+2}}preDiff=idealCharPerLine-preText.length;postDiff=postText.length-idealCharPerLine;if((preDiff<postDiff)&&(preText.length>=(minCharsPerLine||2))){finalText=preText;wordIndex--}else{finalText=postText}finalText=$("<div/>").text(finalText).html();if(settings.wrapAmpersand){finalText=finalText.replace(/&amp;/g,'<span class="amp">&amp;</span>')}finalText=$.trim(finalText);lineText.push('<span class="slabtext">'+finalText+"</span>")}$this.html(lineText.join(" "));if(headLink){$this.wrapInner('<a href="'+headLink+'" '+(linkTitle?'title="'+linkTitle+'" ':"")+"/>")}}}else{origFontSize=fs}$("span.slabtext",$this).each(function(){var $span=$(this),innerText=$span.text(),wordSpacing=innerText.split(" ").length>1,diff,ratio,fontSize;if(postTweak){$span.css({"word-spacing":0,"letter-spacing":0})}ratio=parentWidth/$span.width();fontSize=parseFloat(this.style.fontSize)||origFontSize;$span.css("font-size",Math.min((fontSize*ratio).toFixed(precision),settings.maxFontSize)+"px");diff=!!postTweak?parentWidth-$span.width():false;if(diff){$span.css((wordSpacing?"word":"letter")+"-spacing",(diff/(wordSpacing?innerText.split(" ").length-1:innerText.length)).toFixed(precision)+"px")}});$this.addClass("slabtextdone")};resizeSlabs();if(!settings.noResizeEvent){$(window).resize(function(){if($(window).width()==viewportWidth){return}viewportWidth=$(window).width();clearTimeout(resizeThrottle);resizeThrottle=setTimeout(resizeSlabs,resizeThrottleTime)})}})}})(jQuery);

return stack;})(stacks.com_bigwhiteduck_stacks_billboard);
stacks.com_joeworkman_stacks_foundation_styles_s3 = {};
stacks.com_joeworkman_stacks_foundation_styles_s3 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery; jQuery.fn.exists=function(){return jQuery(this).length>0;}
jQuery.debug=function(msg,obj){if(window.debug===true&&window.console&&console.log){console.log('[jwstacks] '+msg);if(obj)console.log(obj);}};jQuery.isMobile=function(){return"ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch;};var triggerWindowResize=function(){$(window).trigger('resize')};if(typeof(orientationEvent)==undefined){var orientationEvent=0;}
$(window).bind(orientationEvent,triggerWindowResize).load(triggerWindowResize);jQuery.clearBrowserCache=function(){$(window).bind("pageshow",function(event){if(event.originalEvent.persisted){window.location.reload()}});};jQuery.preloadImages=function(){for(var i=0;i<arguments.length;i++){$("<img />").attr("src",arguments[i]);}};
!function(a,b){"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(a,b):this[a]=b()}("vein",function(){var a=function(){},b=function(a){a=a||{};for(var b=1;b<arguments.length;b++)if(arguments[b])for(var c in arguments[b])arguments[b].hasOwnProperty(c)&&(a[c]=arguments[b][c]);return a},c=function(a,b,c){var d,e,f=[],g=b[document.all?"rules":"cssRules"],h=a.replace(/\s/g,"");for(d=0,e=g.length;e>d;d++)(g[d].selectorText===a||4===g[d].type&&g[d].cssText.replace(/\s/g,"").substring(0,h.length)==h)&&(null===c?b.deleteRule(d):f.push(g[d]));return f},d=function(a){cssArray=[];for(property in a)a.hasOwnProperty(property)&&cssArray.push(property+": "+a[property]+";");return cssText=cssArray.join(""),cssText};a.getStylesheet=function(){var a,b=this;if(!b.element)for(b.element=document.createElement("style"),b.element.setAttribute("type","text/css"),b.element.setAttribute("id","vein"),document.getElementsByTagName("head")[0].appendChild(b.element),a=document.styleSheets.length-1;a>=0;a--)if(document.styleSheets[a].ownerNode===b.element){b.stylesheet=document.styleSheets[a];break}return b.stylesheet};var e=function(a){return a[document.all?"rules":"cssRules"]},f=function(a,b,c){var d=e(c);if(c.insertRule)try{c.insertRule(a+"{"+b+"}",d.length)}catch(f){"IndexSizeError"===f.message&&c.insertRule(a+"{"+b+"}",0)}else c.addRule(a,b,d.length)};return a.inject=function(a,g,h){h=b({},h);{var i,j,k,l,m,n,o,p,q,r,s=this,t=h.stylesheet||s.getStylesheet();e(t)}for("string"==typeof a&&(a=[a]),i=0,j=a.length;j>i;i++)if("object"==typeof a[i]&&t.insertRule)for(k in a[i])if(l=c(k,t,g),0===l.length)for(m=d(g),q=0,r=a[i][k].length;r>q;q++)f(k,a[i][k][q]+"{"+m+"}",t);else for(o=0,p=l.length;p>o;o++)s.inject(a[i][k],g,{stylesheet:l[o]});else{if(l=c(a[i],t,g),null===g)return;if(0===l.length)m=d(g),f(a[i],m,t);else for(o=0,p=l.length;p>o;o++)for(n in g)g.hasOwnProperty(n)&&l[o].style.setProperty(n,g[n],"")}return s},a}),!function(a,b){var c=function(a){for(var c=[];a&&a.tagName!==b;a=a.parentNode){if(a.className){var d=a.className.split(" ");for(var e in d)d.hasOwnProperty(e)&&d[e]&&(c.unshift(d[e]),c.unshift("."))}a.id&&!/\s/.test(a.id)&&(c.unshift(a.id),c.unshift("#")),c.unshift(a.tagName),c.unshift(" > ")}return c.slice(1).join("")};a.fn.getSelector=function(b){return!0===b?c(this[0]):a.map(this,function(a){return c(a)})}}(jQuery),function(a){"use strict";var b=function(a){var b=a.replace(/\s/g,"").match(/^rgb\((\d+)\,(\d+)\,(\d+)\)/);if(b)return{r:parseInt(b[1]),g:parseInt(b[2]),b:parseInt(b[3])};var c=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;a=a.replace(c,function(a,b,c,d){return b+b+c+c+d+d});var d=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);return d?{r:parseInt(d[1],16),g:parseInt(d[2],16),b:parseInt(d[3],16)}:null},c=function(a,b,c){return c="undefined"!=typeof c?c:0,b="undefined"!=typeof b?b:1,b=b>1?b/100:b,"rgba("+(a.r+c)+","+(a.g+c)+","+(a.b+c)+","+b+")"},d=function(a,b,c,d){var e=a.selector,f={};return f[c]=d,e||(e=b.getSelector(),a.hover&&(e+=":hover")),vein.inject(e,f)},e=function(a,b){for(var c=[],d=0;d<a.length;d++){var e=b[d]===parseInt(b[d],10)?a[d]+" "+b[d]+"%":a[d];c.push(e)}return c.join(",")},f=function(a,b){var f,g,h,i=[],j=0;if(0===a.stops.length)for(j=0;j<a.colors.length;j++)f=a.offsets[j]||0,g=a.opacity[j]||a.opacity[a.opacity.length-1],i.push(c(h[j],g,f));else for(j=0;j<a.stops.length;j++)f=a.offsets[j]||0,g=a.opacity[j]||a.opacity[a.opacity.length-1],h=a.colors[j]||a.colors[a.colors.length-1],i.push(c(h,g,f));var k=e(i,a.stops),l="linear-gradient(to "+a.linear+","+k+")";"radial-circle"===a.gradient?l="radial-gradient(circle at "+a.radial.x+"% "+a.radial.y+"%,"+k+")":"radial-ellipse"===a.gradient&&(l="radial-gradient(ellipse at "+a.radial.x+"% "+a.radial.y+"%,"+k+")"),d(a,b,"background",l)};a.glass=function(c){for(var d=a.extend(!0,{},a.fn.glass.defaults,c||{}),e=0;e<d.colors.length;e++)d.colors[e]=b(d.colors[e]);if(d.selector){var f=a.fn.glass[d.preset];if("function"==typeof f)return f(d,a(d.selector))}return!1},a.fn.glass=function(c){for(var d=a.extend(!0,{},a.fn.glass.defaults,c||{}),e=0;e<d.colors.length;e++)d.colors[e]=b(d.colors[e]);return this.each(function(){var b=a(this),c=a.fn.glass[d.preset];"function"==typeof c&&c(d,b)})},a.fn.glass.border=function(a,b){var e=c(a.colors[0],a.opacity[0]);d(a,b,"border-color",e)},a.fn.glass.solid=function(a,b){var e=c(a.colors[0],a.opacity[0]);d(a,b,"background",e)},a.fn.glass.custom=function(a,b){return f(a,b)},a.fn.glass.faded=function(a,b){return 0===a.stops.length&&(a.stops=[0,95]),2!==a.opacity.length&&(a.opacity=[100,80]),a.colors=a.colors.slice(0,1),f(a,b)},a.fn.glass.twocolor=function(a,b){return 0===a.stops.length&&(a.stops=[20,100]),a.colors=a.colors.slice(0,2),a.opacity=a.opacity.slice(0,1),f(a,b)},a.fn.glass.twotone=function(a,b){return 0===a.stops.length&&(a.stops=[0,45,50,50,100]),0===a.offsets.length&&(a.offsets=[20,10,5,0,-10]),a.offsets[3]=0,a.colors=a.colors.slice(0,1),a.opacity=a.opacity.slice(0,1),f(a,b)},a.fn.glass.onecolor=function(a,b){return 0===a.stops.length&&(a.stops=[0,85]),0===a.offsets.length&&(a.offsets=[40,0]),a.colors=a.colors.slice(0,1),a.opacity=a.opacity.slice(0,1),f(a,b)},a.fn.glass.defaults={preset:"solid",gradient:"linear",linear:"bottom",radial:{x:50,y:50},colors:["#ffffff","#777777"],offsets:[],stops:[],opacity:[100,80],selector:!1,hover:!1}}(jQuery);
!function(a,b){"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(a,b):this[a]=b()}("vein",function(){var a=function(){},b=function(a){a=a||{};for(var b=1;b<arguments.length;b++)if(arguments[b])for(var c in arguments[b])arguments[b].hasOwnProperty(c)&&(a[c]=arguments[b][c]);return a},c=function(a,b,c){var d,e,f=[],g=b[document.all?"rules":"cssRules"],h=a.replace(/\s/g,"");for(d=0,e=g.length;e>d;d++)(g[d].selectorText===a||4===g[d].type&&g[d].cssText.replace(/\s/g,"").substring(0,h.length)==h)&&(null===c?b.deleteRule(d):f.push(g[d]));return f},d=function(a){cssArray=[];for(property in a)a.hasOwnProperty(property)&&cssArray.push(property+": "+a[property]+";");return cssText=cssArray.join(""),cssText};a.getStylesheet=function(){var a,b=this;if(!b.element||!document.getElementById("vein"))for(b.element=document.createElement("style"),b.element.setAttribute("type","text/css"),b.element.setAttribute("id","vein"),document.getElementsByTagName("head")[0].appendChild(b.element),a=document.styleSheets.length-1;a>=0;a--)if(document.styleSheets[a].ownerNode===b.element){b.stylesheet=document.styleSheets[a];break}return b.stylesheet};var e=function(a){return a[document.all?"rules":"cssRules"]},f=function(a,b,c){var d=e(c);if(c.insertRule)try{c.insertRule(a+"{"+b+"}",d.length)}catch(f){"IndexSizeError"===f.message&&c.insertRule(a+"{"+b+"}",0)}else c.addRule(a,b,d.length)};return a.inject=function(a,g,h){h=b({},h);var i,j,k,l,m,n,o,p,q,r,s=this,t=h.stylesheet||s.getStylesheet();e(t);for("string"==typeof a&&(a=[a]),i=0,j=a.length;j>i;i++)if("object"==typeof a[i]&&t.insertRule)for(k in a[i])if(l=c(k,t,g),0===l.length)for(m=d(g),q=0,r=a[i][k].length;r>q;q++)f(k,a[i][k][q]+"{"+m+"}",t);else for(o=0,p=l.length;p>o;o++)s.inject(a[i][k],g,{stylesheet:l[o]});else{if(l=c(a[i],t,g),null===g)return;if(0===l.length)m=d(g),f(a[i],m,t);else for(o=0,p=l.length;p>o;o++)for(n in g)g.hasOwnProperty(n)&&l[o].style.setProperty(n,g[n],"")}return s},a});

return stack;})(stacks.com_joeworkman_stacks_foundation_styles_s3);
stacks.stacks_in_69853_page0 = {};
stacks.stacks_in_69853_page0 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;
document.documentElement.lang='de';window.wowjsmobile=true;window.revealAnimation='fadeAndPop';$(document).ready(function(){if($.isMobile())
$('.show-for-touch').fadeIn('fast');});var useCustomSelector='False',stacksTrue='True',headerFamily='Open Sans'==='custom'?'':"Open Sans",headerFamilyFallback='sans-serif',headerSelector='h1'+',.font-family-h1',headerStyle='normal',headerGoogle=headerFamily==='Open Sans'?stacksTrue:'Open Sans'==='custom'?'False':'false',headerWeight=headerStyle==='italic'?'300italic':'300',headerWeight=headerWeight+',400'.replace(/\s/g,''),header2Family='Open Sans'==='custom'?'':'Open Sans',header2FamilyFallback='sans-serif',header2Selector='h2, h3, h4, h5, h6'+',.font-family-h2',header2Style='normal',header2Google=header2Family==='Open Sans'?stacksTrue:'Open Sans'==='custom'?'False':'false',header2Weight=header2Style==='italic'?'600italic':'600',header2Weight=header2Weight+',400'.replace(/\s/g,''),fontFamily='\'Helvetica Neue\', Helvetica, Arial, sans-serif'==='custom'?'':'\'Helvetica Neue\', Helvetica, Arial, sans-serif',fontFamilyFallback='sans-serif',fontSelector='p'+',.font-family-text',fontGoogle=fontFamily==='Open Sans'?stacksTrue:'\'Helvetica Neue\', Helvetica, Arial, sans-serif'==='custom'?'False':'false',fontWeight='400,400'.replace(/\s/g,''),getGoogleUrls=function(fontStore){var googleFonts=[];for(var family in fontStore){var weights=fontStore[family].join().replace(/,,/g,',').replace(/,$/,'');googleFonts.push('https://fonts.googleapis.com/css?family='+family+':'+weights);}
return googleFonts;},isGFont=function(family,google){if(google===stacksTrue)return family;return false;},getGoogleFonts=function(data){var fonts=data.fonts,weights=data.weights,google=data.google,fontStore=new Object();for(var i=0;i<fonts.length;i++){if(isGFont(fonts[i],google[i])===false)continue;(fontStore[fonts[i]]=fontStore[fonts[i]]||[]).push(weights[i]);}
return getGoogleUrls(fontStore);};var cssFontFiles=getGoogleFonts({fonts:[headerFamily,header2Family,fontFamily],weights:[headerWeight,header2Weight,fontWeight],google:[headerGoogle,header2Google,fontGoogle]});for(var i=0;i<cssFontFiles.length;i++){loadCSS(decodeURIComponent(cssFontFiles[i]));}
if(useCustomSelector===stacksTrue){var customFontStyles={'font-family':[fontFamily,fontFamilyFallback].join()+'!important','font-weight':fontWeight.split(',')[0]+'!important'},customHeaderSyles={'font-family':[headerFamily,headerFamilyFallback].join()+'!important','font-weight':headerWeight.split(',')[0]+'!important','font-style':headerStyle+'!important'},customHeader2Syles={'font-family':[header2Family,header2FamilyFallback].join()+'!important','font-weight':header2Weight.split(',')[0]+'!important','font-style':header2Style+'!important'};$.debug('Custom Font Selectors:'+fontSelector,customFontStyles);vein.inject(fontSelector,customFontStyles);$.debug('Custom Header Selectors:'+headerSelector,customHeaderSyles);vein.inject(headerSelector,customHeaderSyles);$.debug('Custom Header2 Selectors:'+header2Selector,customHeader2Syles);vein.inject(header2Selector,customHeader2Syles);}

return stack;})(stacks.stacks_in_69853_page0);
stacks.stacks_in_88811_page0 = {};
stacks.stacks_in_88811_page0 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;
jQuery.easing['jswing']=jQuery.easing['swing'];jQuery.extend(jQuery.easing,{def:'easeOutQuad',easeOutQuart:function(x,t,b,c,d){return-c*((t=t/d-1)*t*t*t-1)+b;}});(function($){$.fn.scrollToTop=function(options){var defaults={text:'To Top',min:200,inDelay:600,outDelay:400,containerID:'toTop',scrollSpeed:1200,easingType:'linear'},settings=$.extend(defaults,options),containerIDhash='#'+settings.containerID;$('body').append('<a href="#" id="'+settings.containerID+'">'+settings.text+'</a>');$(containerIDhash).hide().on('click.UItoTop',function(){$('html, body').animate({scrollTop:0},settings.scrollSpeed,settings.easingType);return false;});$(window).scroll(function(){var sd=$(window).scrollTop();if(typeof document.body.style.maxHeight==="undefined"){$(containerIDhash).css({'position':'absolute','top':sd+$(window).height()-50});}
if(sd>settings.min)
$(containerIDhash).fadeIn(settings.inDelay);else
$(containerIDhash).fadeOut(settings.Outdelay);});};})(jQuery);$(document).ready(function(){$().scrollToTop({easingType:'easeOutQuart',scrollSpeed:1200,min:500});});

return stack;})(stacks.stacks_in_88811_page0);
stacks.stacks_in_88797_page0 = {};
stacks.stacks_in_88797_page0 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;
$(document).ready(function(){var stack=$('#stacks_in_88797_page0'),container=$('#stacks_in_88797_page0>.bwd-shear-container'),wrapper=$('#stacks_in_88797_page0>.bwd-shear-container>.shear-wrapper'),inner=$('#stacks_in_88797_page0>.bwd-shear-container>.shear-wrapper>.shear-inner'),content=$('#stacks_in_88797_page0>.bwd-shear-container>.shear-wrapper>.shear-inner>.inner-content'),contentWrapper=$('#stacks_in_88797_page0>.bwd-shear-container>.shear-wrapper>.shear-inner>.inner-content>.content-wrapper'),flexProportion=(100/100),bpHeight=768,bpWidth=768,win=$(window);if(content.find('.impact-wrapper').length>0){contentWrapper.addClass('fill-content');}var checkOverflow=function(){if(inner.hasClass('flex-height')){var content_height=content.outerHeight(),win_height=win.height()*flexProportion,transform_string='translateY('+(win_height/2)+'px)';if(win.width()>=bpWidth&&win.height()>=bpHeight){if(win_height<=content_height){inner.removeClass('full-height');inner.css('height','');content.removeClass('v-center');content.css('transform','');}else{inner.addClass('full-height');inner.css('height',win_height);content.addClass('v-center');content.css('transform',transform_string);}}else{inner.removeClass('full-height');inner.css('height','');content.removeClass('v-center');content.css('transform','');}}}
win.on("resize",checkOverflow);});

return stack;})(stacks.stacks_in_88797_page0);
stacks.stacks_in_89012_page0 = {};
stacks.stacks_in_89012_page0 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;$(document).ready(function(){var stack=$('#stacks_in_89012_page0'),lineBreaks=false,minChars=20,fontRatio=0.78,maxFont=999,breakPoint=0,fadeTime=1,showDelay=50;$('.bb-text',stack).css('opacity',0);if($('.bb-text',stack).find('br').length){$('.bb-text',stack).wrapInner("<span class='slabtext'></span>");$('.bb-text',stack).html($('.bb-text',stack).html().replace(/\<br>/g,"</span><span class='slabtext'>"));lineBreaks=true;breakPoint=null;}else{breakPoint=0;minChars=2;}
$(window).load(function(){setTimeout(function(){slabIt();$('.bb-text',stack).animate({opacity:1},fadeTime);},showDelay);});function slabIt(){$('.bb-text',stack).slabText({"fontRatio":fontRatio,"viewportBreakpoint":breakPoint,"resizeThrottleTime":30,"maxFontSize":maxFont,"minCharsPerLine":minChars});}});

return stack;})(stacks.stacks_in_89012_page0);
stacks.stacks_in_88918_page0 = {};
stacks.stacks_in_88918_page0 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;
$(window).load(function(){var stack=$('#stacks_in_88918_page0'),styleHighlight='null',tColor=styleHighlight=='custom'?'rgba(255, 255, 255, 0.96)':null,hColor=styleHighlight=='custom'?'rgba(51, 51, 51, 0.90)':null,loopProps='once-to-end',onceOnly=false,isDone=false,trigDone=false,delimiter=(loopProps!='type-only')?';':'    ';if(loopProps==='once-to-end'){onceOnly=true;}else if(loopProps==='type-only'){onceOnly=true;isDone=true;stopWhen=1;}
function typeit(){$('[data-typer-targets]',stack).typer({highlightSpeed:20,highlightInterval:20,typeSpeed:100,clearDelay:500,typeDelay:0,clearEverything:false,typerDataAttr:'data-typer-targets',typerInterval:3000,random:false,highlightColor:hColor,textColor:tColor,onlyOnce:onceOnly,cycleDone:isDone,breakChar:delimiter});}$("#stacks_in_88918_page0").onImpression({offset:50,callback:triggerAnimation,});function triggerAnimation(){setTimeout(function(){if(!trigDone)typeit();},0);}});

return stack;})(stacks.stacks_in_88918_page0);