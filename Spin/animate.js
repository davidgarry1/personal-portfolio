var animate=function(){var h=function(a){var b=a.length;return function d(){for(var e=arguments.length,f=Array(e),g=0;g<e;g++)f[g]=arguments[g];return f.length<b?function(){for(var a=arguments.length,b=Array(a),e=0;e<a;e++)b[e]=arguments[e];return d.apply(void 0,f.concat(b))}:a.apply(void 0,f)}},p=function(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];return function(a){return b.reduce(function(a,b){return b(a)},a)}},q=function(a){return function(){return!a.apply(void 0,arguments)}},
E={linear:function(a,b,c,d){return b+a/d*c},easeInQuad:function(a,b,c,d){return c*(a/=d)*a+b},easeInCubic:function(a,b,c,d){return c*(a/=d)*a*a+b},easeInQuart:function(a,b,c,d){return c*(a/=d)*a*a*a+b},easeInQuint:function(a,b,c,d){return c*(a/=d)*a*a*a*a+b},easeInSine:function(a,b,c,d){return-c*Math.cos(a/d*(Math.PI/2))+c+b},easeInExpo:function(a,b,c,d){return 0==a?b:c*Math.pow(2,10*(a/d-1))+b},easeInCirc:function(a,b,c,d){return-c*(Math.sqrt(1-(a/=d)*a)-1)+b},easeInElastic:function(a,b,c,d){var e=
4>=arguments.length||void 0===arguments[4]?500:arguments[4];if(0==a)return b;if(1==(a/=d))return b+c;var e=d*(1-Math.min(e,999)/1E3),f=c<Math.abs(c)?e/4:e/(2*Math.PI)*Math.asin(c/c);return-(c*Math.pow(2,10*--a)*Math.sin(2*(a*d-f)*Math.PI/e))+b},easeInBack:function(a,b,c,d){return c*(a/=d)*a*(2.70158*a-1.70158)+b},easeOutQuad:function(a,b,c,d){return-c*(a/=d)*(a-2)+b},easeOutCubic:function(a,b,c,d){return c*((a=a/d-1)*a*a+1)+b},easeOutQuart:function(a,b,c,d){return-c*((a=a/d-1)*a*a*a-1)+b},easeOutQuint:function(a,
b,c,d){return c*((a=a/d-1)*a*a*a*a+1)+b},easeOutSine:function(a,b,c,d){return c*Math.sin(a/d*(Math.PI/2))+b},easeOutExpo:function(a,b,c,d){return a==d?b+c:c*(-Math.pow(2,-10*a/d)+1)+b},easeOutCirc:function(a,b,c,d){return c*Math.sqrt(1-(a=a/d-1)*a)+b},easeOutElastic:function(a,b,c,d){var e=4>=arguments.length||void 0===arguments[4]?500:arguments[4];if(0==a)return b;if(1==(a/=d))return b+c;e=d*(1-Math.min(e,999)/1E3);return c*Math.pow(2,-10*a)*Math.sin(2*(a*d-(c<Math.abs(c)?e/4:e/(2*Math.PI)*Math.asin(c/
c)))*Math.PI/e)+c+b},easeOutBack:function(a,b,c,d){return c*((a=a/d-1)*a*(2.70158*a+1.70158)+1)+b},easeOutBounce:function(a,b,c,d){return(a/=d)<1/2.75?7.5625*c*a*a+b:a<2/2.75?c*(7.5625*(a-=1.5/2.75)*a+.75)+b:a<2.5/2.75?c*(7.5625*(a-=2.25/2.75)*a+.9375)+b:c*(7.5625*(a-=2.625/2.75)*a+.984375)+b},easeInOutQuad:function(a,b,c,d){return 1>(a/=d/2)?c/2*a*a+b:-c/2*(--a*(a-2)-1)+b},easeInOutCubic:function(a,b,c,d){return 1>(a/=d/2)?c/2*a*a*a+b:c/2*((a-=2)*a*a+2)+b},easeInOutQuart:function(a,b,c,d){return 1>
(a/=d/2)?c/2*a*a*a*a+b:-c/2*((a-=2)*a*a*a-2)+b},easeInOutQuint:function(a,b,c,d){return 1>(a/=d/2)?c/2*a*a*a*a*a+b:c/2*((a-=2)*a*a*a*a+2)+b},easeInOutSine:function(a,b,c,d){return-c/2*(Math.cos(Math.PI*a/d)-1)+b},easeInOutExpo:function(a,b,c,d){return 0==a?b:a==d?b+c:1>(a/=d/2)?c/2*Math.pow(2,10*(a-1))+b:c/2*(-Math.pow(2,-10*--a)+2)+b},easeInOutCirc:function(a,b,c,d){return 1>(a/=d/2)?-c/2*(Math.sqrt(1-a*a)-1)+b:c/2*(Math.sqrt(1-(a-=2)*a)+1)+b},easeInOutElastic:function(a,b,c,d){var e=4>=arguments.length||
void 0===arguments[4]?500:arguments[4];if(0==a)return b;if(2==(a/=d/2))return b+c;var e=d*(1-Math.min(e,999)/1E3)*1.5,f=c<Math.abs(c)?e/4:e/(2*Math.PI)*Math.asin(c/c);return 1>a?-.5*c*Math.pow(2,10*--a)*Math.sin(2*(a*d-f)*Math.PI/e)+b:c*Math.pow(2,-10*--a)*Math.sin(2*(a*d-f)*Math.PI/e)*.5+c+b},easeInOutBack:function(a,b,c,d){var e=1.70158;return 1>(a/=d/2)?c/2*a*a*(((e*=1.525)+1)*a-e)+b:c/2*((a-=2)*a*(((e*=1.525)+1)*a+e)+2)+b}},w=function(a){return a[0]},F=function(a){return a.reduce(function(a,c){return a.concat(c)})},
m=function(){return Array.prototype.includes?function(a,b){return a.includes(b)}:function(a,b){return a.some(function(a){return a===b})}}(),x=function(a){for(var b=arguments.length,c=Array(1<b?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];var e=F(c);return a.filter(function(a){return q(m)(e,a)})},G=function(){var a=function(a){var c=new Map;Object.keys(a).forEach(function(d){return c.set(d,a[d])});return c};return function(b){return b instanceof Map?b:a(b)}}(),H=function(a){return/^#/.test(a)},y=function(a){return/^rgb/.test(a)},
I=function(){var a=function(a){return 7>a.length?a.split("").reduce(function(a,b){return a+b+b}):a},b=function(a){return a.match(/[\d\w]{2}/g).map(function(a){return parseInt(a,16)})};return function(c){if(y(c))return c;c=p(a,b)(c);return"rgb("+c[0]+", "+c[1]+", "+c[2]+")"}}(),z=function(a){return J("string"==typeof a?document.querySelectorAll(a):a)},J=function(){var a=[NodeList,HTMLCollection,Set];return function(b){return Array.isArray(b)?b:a.some(function(a){return b instanceof a})?Array.from(b):
b.nodeType?[b]:b.get()}}(),l=new Map;"el delay begin complete loop direction".split(" ").forEach(function(a){return l.set(a,null)});l.set("duration",1E3);l.set("easing","easeOutElastic");var K=function(){var a=Array.from(l.keys()).filter(function(a){return l.get(a)}),b=function(b){return a.every(function(a){return b.has(a)})},c=function(b){var c=new Map(b);a.forEach(function(a){c.has(a)||c.set(a,l.get(a))});return c};return function(a){return b(a)?a:c(a)}}(),L=function(){var a=h(function(a,b){return Array.isArray(a.get(b))}),
b=function(b){return n(b).every(a(b))},c=function(b){return n(b).filter(q(a(b)))};return function(a){if(b(a))return a;var e=new Map(a);c(e).forEach(function(a){return e.set(a,[A.get(a),e.get(a)])});return e}}(),M=function(){var a=function(a){return/\D$/.test(a)},b=h(function(b,c){return a(c)||/scale/.test(b)?c:/rotate|skew/.test(b)?c+"deg":c+"px"}),c=function(b,c){return c.every(function(c){return b.get(c).every(a)})};return function(a){var e=n(a).filter(r);if(c(a,e))return a;var f=new Map(a);e.forEach(function(c){return f.set(c,
a.get(c).map(b(c)))});return f}}(),N=function(){var a=h(function(a,b){return a.get(b).some(H)}),b=function(b){return!B(b).some(a(b))},c=function(b){return B(b).filter(a(b))};return function(a){if(b(a))return a;var e=new Map(a);c(a).forEach(function(a){return e.set(a,e.get(a).map(I))});return e}}(),C=function(a){var b=new Map(a);t(a).forEach(function(a){return b.set(a,b.get(a).slice().reverse())});return b},O=p(G,K,L,M,N,function(a){return(new Map(a)).set("el",z(a.get("el")))},function(a){return"reverse"==
a.get("direction")?C(a):a}),t=function(){var a=Array.from(l.keys()),b=function(b){return q(m)(a,b)};return function(a){return Array.from(a.keys()).filter(b)}}(),Q=function(){var a=p(w,y),b=h(function(b,d){var e=b.get(d).map(P),f=e[0],g=e[1],e=new Map;e.set("prop",d);e.set("from",f);e.set("to",g);e.set("isTransformFunction",r(d));e.set("isColor",a(b.get(d)));/\d$/.test(b.get("easing"))?(f=b.get("easing").split(" "),g=f[1],e.set("easing",f[0]),e.set("frequency",g)):e.set("easing",b.get("easing"));return e});
return function(a,d){return t(a).map(b(a))}}(),n=function(){var a=function(a){return m(u,a)};return function(b){return Array.from(b.keys()).filter(a)}}(),B=function(a){return x(t(a),n(a))},u="opacity translateX translateY scale rotate scaleX scaleY rotateX rotateY perspective skewX skewY translateZ rotateZ scaleZ".split(" "),A=new Map;(function(){var a=["opacity","scale","scaleX","scaleY"];u.forEach(function(b){return A.set(b,m(a,b)?1:0)})})();var r=function(){var a=u.filter(function(a){return"opacity"!=
a});return function(b){return m(a,b)}}(),R=function(a){var b=n(a);if(b.length){var c=[];b.some(r)&&c.push("transform");m(b,"opacity")&&c.push("opacity");var d=c.join();a.get("el").forEach(function(a){a.style.willChange||(a.style.willChange=d)})}},S=function(a,b){return b.reduce(function(b,d,e){return b+a[e-1]+d})},P=function(){var a=/-?\d*\.?\d+/g;return function(b){var c=new Map;c.set("digits",("string"==typeof b?b:String(b)).match(a).map(Number));c.set("others",("string"==typeof b?b:String(b)).split(a));
return c}}(),T=h(function(a,b,c){var d=c.get("to").get("digits").map(function(d,f){var g=c.get("from").get("digits")[f];if(g==d)return g;var D=d-g,g=E[c.get("easing")](b,g,D,a.get("duration"),c.get("frequency"));return c.get("isColor")?Math.round(g):g});return S(d,c.get("to").get("others"))}),U=h(function(a,b){var c=a.get(b.get("prop"));return w(c.slice(-1))}),V=h(function(a,b,c){var d=void 0;a.forEach(function(a,f){a.get("isTransformFunction")?(d||(d=[]),d.push(a.get("prop")+"("+b[f]+")")):"opacity"==
a.get("prop")?c.style.opacity=b[f]:c.setAttribute(a.get("prop"),b[f])});d&&(c.style.transform=d.join(" "))}),W=function(){var a=function(a,c){c.get("begin")&&c.get("begin")(c.get("el"));requestAnimationFrame(a)};return function(b,c){return c.get("delay")?setTimeout(function(){return a(b,c)},c.get("delay")):a(b,c)}}(),X=function(a){return v(function(){if("alternate"==a.get("direction"))return C(a);if("reverse"==a.get("direction")){var b=new Map(a);b["delete"]("direction");return b}return a}())},k=
new Map,Y=function(){var a=0;return function(b){var c=a++;k=(new Map(k)).set(c,b);return c}}(),v=function(a){var b=O(a),c=Q(b),d=Y(b.get("el")),e=new Map;R(b);W(function g(a){if(k.has(d)){e.has("start")||e.set("start",a);e.set("elapsed",a-e.get("start"));a=e.get("elapsed")<b.get("duration");var h=c.map(a?T(b,e.get("elapsed")):U(b));k.get(d).forEach(V(c,h));a?requestAnimationFrame(g):(a=new Map(k),a["delete"](d),k=a,b.get("complete")&&b.get("complete")(b.get("el")),b.get("loop")&&X(b))}},b)};v.stop=
function(a){var b=z(a),c=new Map(k);c.forEach(function(a,e){var f=x(a,b);f.length?c.set(e,f):c["delete"](e)});k=c};return v}();"undefined"!=typeof module&&module.exports&&(module.exports=animate);