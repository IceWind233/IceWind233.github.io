var er=Object.defineProperty;var rr=(a,t,n)=>t in a?er(a,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[t]=n;var tr=(a,t)=>()=>(t||a((t={exports:{}}).exports,t),t.exports);var O=(a,t,n)=>rr(a,typeof t!="symbol"?t+"":t,n);var Pr=tr((Rr,Z)=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const m of c)if(m.type==="childList")for(const M of m.addedNodes)M.tagName==="LINK"&&M.rel==="modulepreload"&&s(M)}).observe(document,{childList:!0,subtree:!0});function n(c){const m={};return c.integrity&&(m.integrity=c.integrity),c.referrerPolicy&&(m.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?m.credentials="include":c.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function s(c){if(c.ep)return;c.ep=!0;const m=n(c);fetch(c.href,m)}})();let R=Object.getPrototypeOf,U,$,T,N,we={isConnected:1},ar=1e3,K,oe={},nr=R(we),Me=R(R),j,Ce=(a,t,n,s)=>(a??(setTimeout(n,s),new Set)).add(t),_e=(a,t,n)=>{let s=T;T=t;try{return a(n)}catch(c){return console.error(c),n}finally{T=s}},ee=a=>a.filter(t=>{var n;return(n=t._dom)==null?void 0:n.isConnected}),Te=a=>K=Ce(K,a,()=>{for(let t of K)t._bindings=ee(t._bindings),t._listeners=ee(t._listeners);K=j},ar),re={get val(){var a;return(a=T==null?void 0:T._getters)==null||a.add(this),this.rawVal},get oldVal(){var a;return(a=T==null?void 0:T._getters)==null||a.add(this),this._oldVal},set val(a){var t;(t=T==null?void 0:T._setters)==null||t.add(this),a!==this.rawVal&&(this.rawVal=a,this._bindings.length+this._listeners.length?($==null||$.add(this),U=Ce(U,this,or)):this._oldVal=a)}},Pe=a=>({__proto__:re,rawVal:a,_oldVal:a,_bindings:[],_listeners:[]}),H=(a,t)=>{let n={_getters:new Set,_setters:new Set},s={f:a},c=N;N=[];let m=_e(a,n,t);m=(m??document).nodeType?m:new Text(m);for(let M of n._getters)n._setters.has(M)||(Te(M),M._bindings.push(s));for(let M of N)M._dom=m;return N=c,s._dom=m},ce=(a,t=Pe(),n)=>{let s={_getters:new Set,_setters:new Set},c={f:a,s:t};c._dom=n??(N==null?void 0:N.push(c))??we,t.val=_e(a,s,t.rawVal);for(let m of s._getters)s._setters.has(m)||(Te(m),m._listeners.push(c));return t},Ie=(a,...t)=>{for(let n of t.flat(1/0)){let s=R(n??0),c=s===re?H(()=>n.val):s===Me?H(n):n;c!=j&&a.append(c)}return a},xe=(a,t,...n)=>{var q;let[{is:s,...c},...m]=R(n[0]??0)===nr?n:[{},...n],M=a?document.createElementNS(a,t,{is:s}):document.createElement(t,{is:s});for(let[S,E]of Object.entries(c)){let D=k=>k?Object.getOwnPropertyDescriptor(k,S)??D(R(k)):j,B=t+","+S,G=oe[B]??(oe[B]=((q=D(R(M)))==null?void 0:q.set)??0),X=S.startsWith("on")?(k,b)=>{let J=S.slice(2);M.removeEventListener(J,b),M.addEventListener(J,k)}:G?G.bind(M):M.setAttribute.bind(M,S),W=R(E??0);S.startsWith("on")||W===Me&&(E=ce(E),W=re),W===re?H(()=>(X(E.val,E._oldVal),M)):X(E)}return Ie(M,m)},ve=a=>({get:(t,n)=>xe.bind(j,a,n)}),Ee=(a,t)=>t?t!==a&&a.replaceWith(t):a.remove(),or=()=>{let a=0,t=[...U].filter(s=>s.rawVal!==s._oldVal);do{$=new Set;for(let s of new Set(t.flatMap(c=>c._listeners=ee(c._listeners))))ce(s.f,s.s,s._dom),s._dom=j}while(++a<100&&(t=[...$]).length);let n=[...U].filter(s=>s.rawVal!==s._oldVal);U=j;for(let s of new Set(n.flatMap(c=>c._bindings=ee(c._bindings))))Ee(s._dom,H(s.f,s._dom)),s._dom=j;for(let s of n)s._oldVal=s.rawVal};const x={tags:new Proxy(a=>new Proxy(xe,ve(a)),ve()),hydrate:(a,t)=>Ee(a,H(t,a)),add:Ie,state:Pe,derive:ce};var Z={};(function a(t,n,s,c){var m=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),M=typeof Path2D=="function"&&typeof DOMMatrix=="function",q=function(){if(!t.OffscreenCanvas)return!1;var r=new OffscreenCanvas(1,1),e=r.getContext("2d");e.fillRect(0,0,1,1);var o=r.transferToImageBitmap();try{e.createPattern(o,"no-repeat")}catch{return!1}return!0}();function S(){}function E(r){var e=n.exports.Promise,o=e!==void 0?e:t.Promise;return typeof o=="function"?new o(r):(r(S,S),null)}var D=function(r,e){return{transform:function(o){if(r)return o;if(e.has(o))return e.get(o);var l=new OffscreenCanvas(o.width,o.height),h=l.getContext("2d");return h.drawImage(o,0,0),e.set(o,l),l},clear:function(){e.clear()}}}(q,new Map),B=function(){var r=Math.floor(16.666666666666668),e,o,l={},h=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(e=function(d){var u=Math.random();return l[u]=requestAnimationFrame(function i(f){h===f||h+r-1<f?(h=f,delete l[u],d()):l[u]=requestAnimationFrame(i)}),u},o=function(d){l[d]&&cancelAnimationFrame(l[d])}):(e=function(d){return setTimeout(d,r)},o=function(d){return clearTimeout(d)}),{frame:e,cancel:o}}(),G=function(){var r,e,o={};function l(h){function d(u,i){h.postMessage({options:u||{},callback:i})}h.init=function(i){var f=i.transferControlToOffscreen();h.postMessage({canvas:f},[f])},h.fire=function(i,f,v){if(e)return d(i,null),e;var y=Math.random().toString(36).slice(2);return e=E(function(p){function w(C){C.data.callback===y&&(delete o[y],h.removeEventListener("message",w),e=null,D.clear(),v(),p())}h.addEventListener("message",w),d(i,y),o[y]=w.bind(null,{data:{callback:y}})}),e},h.reset=function(){h.postMessage({reset:!0});for(var i in o)o[i](),delete o[i]}}return function(){if(r)return r;if(!s&&m){var h=["var CONFETTI, SIZE = {}, module = {};","("+a.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{r=new Worker(URL.createObjectURL(new Blob([h])))}catch(d){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",d),null}l(r)}return r}}(),X={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function W(r,e){return e?e(r):r}function k(r){return r!=null}function b(r,e,o){return W(r&&k(r[e])?r[e]:X[e],o)}function J(r){return r<0?0:Math.floor(r)}function Oe(r,e){return Math.floor(Math.random()*(e-r))+r}function te(r){return parseInt(r,16)}function Ae(r){return r.map(Re)}function Re(r){var e=String(r).replace(/[^0-9a-f]/gi,"");return e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),{r:te(e.substring(0,2)),g:te(e.substring(2,4)),b:te(e.substring(4,6))}}function Be(r){var e=b(r,"origin",Object);return e.x=b(e,"x",Number),e.y=b(e,"y",Number),e}function ke(r){r.width=document.documentElement.clientWidth,r.height=document.documentElement.clientHeight}function Ve(r){var e=r.getBoundingClientRect();r.width=e.width,r.height=e.height}function Ne(r){var e=document.createElement("canvas");return e.style.position="fixed",e.style.top="0px",e.style.left="0px",e.style.pointerEvents="none",e.style.zIndex=r,e}function je(r,e,o,l,h,d,u,i,f){r.save(),r.translate(e,o),r.rotate(d),r.scale(l,h),r.arc(0,0,1,u,i,f),r.restore()}function De(r){var e=r.angle*(Math.PI/180),o=r.spread*(Math.PI/180);return{x:r.x,y:r.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:r.startVelocity*.5+Math.random()*r.startVelocity,angle2D:-e+(.5*o-Math.random()*o),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:r.color,shape:r.shape,tick:0,totalTicks:r.ticks,decay:r.decay,drift:r.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:r.gravity*3,ovalScalar:.6,scalar:r.scalar,flat:r.flat}}function We(r,e){e.x+=Math.cos(e.angle2D)*e.velocity+e.drift,e.y+=Math.sin(e.angle2D)*e.velocity+e.gravity,e.velocity*=e.decay,e.flat?(e.wobble=0,e.wobbleX=e.x+10*e.scalar,e.wobbleY=e.y+10*e.scalar,e.tiltSin=0,e.tiltCos=0,e.random=1):(e.wobble+=e.wobbleSpeed,e.wobbleX=e.x+10*e.scalar*Math.cos(e.wobble),e.wobbleY=e.y+10*e.scalar*Math.sin(e.wobble),e.tiltAngle+=.1,e.tiltSin=Math.sin(e.tiltAngle),e.tiltCos=Math.cos(e.tiltAngle),e.random=Math.random()+2);var o=e.tick++/e.totalTicks,l=e.x+e.random*e.tiltCos,h=e.y+e.random*e.tiltSin,d=e.wobbleX+e.random*e.tiltCos,u=e.wobbleY+e.random*e.tiltSin;if(r.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-o)+")",r.beginPath(),M&&e.shape.type==="path"&&typeof e.shape.path=="string"&&Array.isArray(e.shape.matrix))r.fill(Ue(e.shape.path,e.shape.matrix,e.x,e.y,Math.abs(d-l)*.1,Math.abs(u-h)*.1,Math.PI/10*e.wobble));else if(e.shape.type==="bitmap"){var i=Math.PI/10*e.wobble,f=Math.abs(d-l)*.1,v=Math.abs(u-h)*.1,y=e.shape.bitmap.width*e.scalar,p=e.shape.bitmap.height*e.scalar,w=new DOMMatrix([Math.cos(i)*f,Math.sin(i)*f,-Math.sin(i)*v,Math.cos(i)*v,e.x,e.y]);w.multiplySelf(new DOMMatrix(e.shape.matrix));var C=r.createPattern(D.transform(e.shape.bitmap),"no-repeat");C.setTransform(w),r.globalAlpha=1-o,r.fillStyle=C,r.fillRect(e.x-y/2,e.y-p/2,y,p),r.globalAlpha=1}else if(e.shape==="circle")r.ellipse?r.ellipse(e.x,e.y,Math.abs(d-l)*e.ovalScalar,Math.abs(u-h)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):je(r,e.x,e.y,Math.abs(d-l)*e.ovalScalar,Math.abs(u-h)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI);else if(e.shape==="star")for(var g=Math.PI/2*3,_=4*e.scalar,P=8*e.scalar,I=e.x,F=e.y,V=5,L=Math.PI/V;V--;)I=e.x+Math.cos(g)*P,F=e.y+Math.sin(g)*P,r.lineTo(I,F),g+=L,I=e.x+Math.cos(g)*_,F=e.y+Math.sin(g)*_,r.lineTo(I,F),g+=L;else r.moveTo(Math.floor(e.x),Math.floor(e.y)),r.lineTo(Math.floor(e.wobbleX),Math.floor(h)),r.lineTo(Math.floor(d),Math.floor(u)),r.lineTo(Math.floor(l),Math.floor(e.wobbleY));return r.closePath(),r.fill(),e.tick<e.totalTicks}function ze(r,e,o,l,h){var d=e.slice(),u=r.getContext("2d"),i,f,v=E(function(y){function p(){i=f=null,u.clearRect(0,0,l.width,l.height),D.clear(),h(),y()}function w(){s&&!(l.width===c.width&&l.height===c.height)&&(l.width=r.width=c.width,l.height=r.height=c.height),!l.width&&!l.height&&(o(r),l.width=r.width,l.height=r.height),u.clearRect(0,0,l.width,l.height),d=d.filter(function(C){return We(u,C)}),d.length?i=B.frame(w):p()}i=B.frame(w),f=p});return{addFettis:function(y){return d=d.concat(y),v},canvas:r,promise:v,reset:function(){i&&B.cancel(i),f&&f()}}}function he(r,e){var o=!r,l=!!b(e||{},"resize"),h=!1,d=b(e,"disableForReducedMotion",Boolean),u=m&&!!b(e||{},"useWorker"),i=u?G():null,f=o?ke:Ve,v=r&&i?!!r.__confetti_initialized:!1,y=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,p;function w(g,_,P){for(var I=b(g,"particleCount",J),F=b(g,"angle",Number),V=b(g,"spread",Number),L=b(g,"startVelocity",Number),Ze=b(g,"decay",Number),qe=b(g,"gravity",Number),Ge=b(g,"drift",Number),ue=b(g,"colors",Ae),Xe=b(g,"ticks",Number),fe=b(g,"shapes"),Je=b(g,"scalar"),Ke=!!b(g,"flat"),ge=Be(g),me=I,ne=[],Qe=r.width*ge.x,Ye=r.height*ge.y;me--;)ne.push(De({x:Qe,y:Ye,angle:F,spread:V,startVelocity:L,color:ue[me%ue.length],shape:fe[Oe(0,fe.length)],ticks:Xe,decay:Ze,gravity:qe,drift:Ge,scalar:Je,flat:Ke}));return p?p.addFettis(ne):(p=ze(r,ne,f,_,P),p.promise)}function C(g){var _=d||b(g,"disableForReducedMotion",Boolean),P=b(g,"zIndex",Number);if(_&&y)return E(function(L){L()});o&&p?r=p.canvas:o&&!r&&(r=Ne(P),document.body.appendChild(r)),l&&!v&&f(r);var I={width:r.width,height:r.height};i&&!v&&i.init(r),v=!0,i&&(r.__confetti_initialized=!0);function F(){if(i){var L={getBoundingClientRect:function(){if(!o)return r.getBoundingClientRect()}};f(L),i.postMessage({resize:{width:L.width,height:L.height}});return}I.width=I.height=null}function V(){p=null,l&&(h=!1,t.removeEventListener("resize",F)),o&&r&&(document.body.contains(r)&&document.body.removeChild(r),r=null,v=!1)}return l&&!h&&(h=!0,t.addEventListener("resize",F,!1)),i?i.fire(g,I,V):w(g,I,V)}return C.reset=function(){i&&i.reset(),p&&p.reset()},C}var ae;function de(){return ae||(ae=he(null,{useWorker:!0,resize:!0})),ae}function Ue(r,e,o,l,h,d,u){var i=new Path2D(r),f=new Path2D;f.addPath(i,new DOMMatrix(e));var v=new Path2D;return v.addPath(f,new DOMMatrix([Math.cos(u)*h,Math.sin(u)*h,-Math.sin(u)*d,Math.cos(u)*d,o,l])),v}function $e(r){if(!M)throw new Error("path confetti are not supported in this browser");var e,o;typeof r=="string"?e=r:(e=r.path,o=r.matrix);var l=new Path2D(e),h=document.createElement("canvas"),d=h.getContext("2d");if(!o){for(var u=1e3,i=u,f=u,v=0,y=0,p,w,C=0;C<u;C+=2)for(var g=0;g<u;g+=2)d.isPointInPath(l,C,g,"nonzero")&&(i=Math.min(i,C),f=Math.min(f,g),v=Math.max(v,C),y=Math.max(y,g));p=v-i,w=y-f;var _=10,P=Math.min(_/p,_/w);o=[P,0,0,P,-Math.round(p/2+i)*P,-Math.round(w/2+f)*P]}return{type:"path",path:e,matrix:o}}function He(r){var e,o=1,l="#000000",h='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof r=="string"?e=r:(e=r.text,o="scalar"in r?r.scalar:o,h="fontFamily"in r?r.fontFamily:h,l="color"in r?r.color:l);var d=10*o,u=""+d+"px "+h,i=new OffscreenCanvas(d,d),f=i.getContext("2d");f.font=u;var v=f.measureText(e),y=Math.ceil(v.actualBoundingBoxRight+v.actualBoundingBoxLeft),p=Math.ceil(v.actualBoundingBoxAscent+v.actualBoundingBoxDescent),w=2,C=v.actualBoundingBoxLeft+w,g=v.actualBoundingBoxAscent+w;y+=w+w,p+=w+w,i=new OffscreenCanvas(y,p),f=i.getContext("2d"),f.font=u,f.fillStyle=l,f.fillText(e,C,g);var _=1/o;return{type:"bitmap",bitmap:i.transferToImageBitmap(),matrix:[_,0,0,_,-y*_/2,-p*_/2]}}n.exports=function(){return de().apply(this,arguments)},n.exports.reset=function(){de().reset()},n.exports.create=he,n.exports.shapeFromPath=$e,n.exports.shapeFromText=He})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),Z,!1);const ie=Z.exports;Z.exports.create;const Le=()=>location.hash?location.hash.slice(2):"home",z=x.state(Le());window.addEventListener("hashchange",()=>{z.val=Le()});class ir{constructor(t){O(this,"rule");O(this,"args",[]);O(this,"Loader");O(this,"delayed",!1);O(this,"onFirst");O(this,"onLoad");O(this,"element");O(this,"isFirstLoad",!0);if(!t)throw new Error("config 不能为空");if(!t.rule)throw new Error("rule 不能为空");if(!t.Loader)throw new Error("Loader 不能为空");this.rule=t.rule,this.Loader=t.Loader,this.delayed=t.delayed||!1,this.onFirst=t.onFirst||(async()=>{}),this.onLoad=t.onLoad||(async()=>{}),this.element=this.Loader(),this.element.hidden=!0;const n=async()=>{const s=this.matchHash();s?(this.args.splice(0),this.args.push(...s.args),this.isFirstLoad&&(this.isFirstLoad=!1,await this.onFirst()),await this.onLoad(),this.delayed||this.show()):this.hide()};window.addEventListener("hashchange",n),n()}matchHash(){if(this.rule instanceof RegExp){const n=z.val.match(this.rule);return n?{hash:z.val,args:[...n].slice(1)}:!1}const t=z.val.split("/").filter(n=>n.length>0);return t.length<1&&t.push("home"),t[0]==this.rule?{hash:z.val,args:t.slice(1)}:!1}show(){this.element.hidden=!1}hide(){this.element.hidden=!0}}const Se=a=>new ir(a).element,Fe=(a,...t)=>{location.hash=a=="home"&&t.length==0?"":`/${[a,...t].join("/")}`},{div:pe,header:sr,section:xr,h1:lr,img:se,a:be}=x.tags,cr=()=>sr(pe({class:"title router",onclick:()=>{Fe("home")}},se({src:"/avatar.jpg",class:"avatar icon"}),lr("IceWind233")),pe({class:"icons"},be({href:"https://github.com/IceWind233"},se({src:"/github_icon.svg",class:"icon"})),be({href:"https://space.bilibili.com/85515549"},se({src:"/bilibili_icon.svg",class:"icon"})))),{a:hr,br:A,h1:dr,h2:ur,p:ye}=x.tags,fr=()=>x.tags.section(x.tags.div({class:"content-title"},x.tags.a({class:"router",onclick:()=>{Fe("AutoTriple")}},x.tags.h2("AutoTriple")))),gr=()=>x.tags.main({class:"blog"},x.tags.div(dr("AutoTriple"),ye("由于看视频不想三联，临时起意写了个小脚本，帮我自动三联虽然现在写的还不是很完善，好像还有bug而且设计依托答辩，至少能用不是吗()",A(),hr({href:"https://github.com/IceWind233/AutoTriple"},"Link"),"。",A()),ur("2025-02-14"),ye("春节写的这个脚本，但是一直没有把博客推上来，主要还是自己写的blog不是很健全，这段时间工作没啥事就把博客的基础功能建设了一下。",A(),`
先说说遇到什么问题吧。好久没有碰js了而且写脚本用的也是原生js甚是不习惯。写了这小玩意不能说完全回忆起js怎么写，只能说还是不咋会。`,A(),"其次就是我的经典async问题，这个异步始终是不太明白，最近也在写dart，也用到了异步函数，但是始终不明白，但是你要问我哪不明白，我也说不上来，感觉就是用的太少，再加上天天问神奇海螺(GPT, DeepSeek...)。肉眼可见的感受到自己代码能力和阅读能力有所退步，想摆脱想合理使用，感觉上是不太可能。但是话又说回来了，确实通过大模型学到好多平时不会注意到或者不知道的东西(突然想起我的学长xhe说过: 多想一步，多搜一点)。",A(),`
还是那句话Coding while Learning。多学多写总比不写不看的我要强一点的，强一点也是强。`,A(),`
然后就是要说一下这个b插件了，首先我知道这个edge的插件和chrome插件基本是兼容的，但是没想到插微软doc里面函数接口或者属性什么的，会直接跳转到Google那边，有点搞笑(有点懒了只能说)。`,A(),`
本来以为写个小脚本能有啥问题，md写了之后才发现，这不是这么简单啊！！一直以为chrome就是刷新一下或者打开页面就加载一下你的脚本，写完发现，有popup，有background-service，甚至还有通信机制(虽然不知道具体是哪种，但是会用就完事了)。`,A(),`
脚本逻辑很简单其实，主要是就是从popup.html里面设置一下仅点赞还是三联(仅投币功能还没做，投币会弹窗感觉不是很好搞，不如不做)，设置阈值，然后点开视频以后结合播放进度和打开页面的时间，都到达阈值的时候就点赞或三联，逻辑反正挺简单的，所以感觉有点不太合理，但是暂时没想到什么改进方法(在想要不要加一个排除短视频这种功能)。
本来是想把这个插件交到edge extension上的但是没过审核，说我脚本目的不明确，好像是还有bug所以没给我过，不如就不上架，在仓库里呆着吃灰。看有没有大怨种用我的插件，然后遇到问题还会好心给我提issue吧XDD。`))),mr=()=>Se({rule:"AutoTriple",Loader:()=>gr()}),{body:Er,br:Lr,div:Y,h2:le,h3:Sr,hr:vr,img:pr,main:br,nav:Fr,p:yr,section:Or,s:Ar}=x.tags,wr=`	一个平平无奇的小人物的个人博客，不是很好看但已经是直男审美的极限了。
写这个博客的意义感觉也就是在GitHub倒闭之前能在互联网上留下一点自己的痕迹罢了，直到这个博客的第一次提交之前我还是没有想好要传点什么上来，可能会传平时学的比较有意思的小玩意，或者自己写什么抽象的东西，或者是自己弹琴的经验感受啥的(没准哪天就把谱子也传上来了)。这个博客的意义也就是随便说说随便传点东西，当然我希望能一直把这个博客维护下去。
平时也想写点有的没的的小玩意但是总是咕咕咕🕊️，只能说热爱计算机但是不完全热爱，毕竟上班了回家第一件事就是躺床上开摸，最近也有一两个想写的小玩意，尽量在春节放假的时候写写(新建文件夹)，写完或者新建新建项目时候会第一时间更新博客的()，当然我确实希望这个博客的存在能督促我多学习一点计算机的小玩意吧XD。
最后欢迎你陌生人也可能是朋友，希望你喜欢。`,Mr=()=>br({class:"main"},Y({class:"intro"},le("简介"),yr(`${wr}`)),le("下面有点东西但不多"),vr(),fr()),Q={spring:["🌷","🌸"],summer:["☀️","🍉"],autumn:["🍁","🍂"],winter:["❄️","☃️"]},Cr=()=>{const a=new Date().getMonth();return a>=2&&a<=4?Q.spring:a>=5&&a<=7?Q.summer:a>=8&&a<=10?Q.autumn:Q.winter},_r=()=>{const a=[{angle:60,origin:{x:0}},{angle:120,origin:{x:1}}],t={particleCount:100,angle:60,scalar:2,spread:70};let n=Cr();new Date().getDay()===4&&(n=n.concat(["🍟","🍗"])),console.log(n);let c=n.map(m=>ie.shapeFromText(m));ie({...t,shapes:[...c],...a[0]}),ie({...t,shapes:[...c],...a[1]})},Tr=()=>(_r(),[cr(),Se({rule:"home",Loader:()=>Y(Y({id:"contrib"},Y(le("耻辱墙()")),pr({src:"https://ghchart.rshah.org/EC473B/icewind233",loading:"lazy"})),Mr())}),mr()]);x.add(document.body,Tr())});export default Pr();
