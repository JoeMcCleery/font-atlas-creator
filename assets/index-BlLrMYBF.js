(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function i(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(a){if(a.ep)return;a.ep=!0;const n=i(a);fetch(a.href,n)}})();function ge(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var me=Y,$=1e20;function Y(t,e,i,r,a){this.fontSize=t||24,this.buffer=e===void 0?3:e,this.cutoff=r||.25,this.fontFamily=a||"sans-serif",this.radius=i||8;var n=this.size=this.fontSize+this.buffer*2;this.canvas=document.createElement("canvas"),this.canvas.width=this.canvas.height=n,this.ctx=this.canvas.getContext("2d"),this.ctx.font=t+"px "+this.fontFamily,this.ctx.textBaseline="middle",this.ctx.fillStyle="black",this.gridOuter=new Float64Array(n*n),this.gridInner=new Float64Array(n*n),this.f=new Float64Array(n),this.d=new Float64Array(n),this.z=new Float64Array(n+1),this.v=new Int16Array(n),this.middle=Math.round(n/2*(navigator.userAgent.indexOf("Gecko/")>=0?1.2:1))}Y.prototype.draw=function(t){this.ctx.clearRect(0,0,this.size,this.size),this.ctx.fillText(t,this.buffer,this.middle);for(var e=this.ctx.getImageData(0,0,this.size,this.size),i=e.data,r=0;r<this.size*this.size;r++){var a=i[r*4+3]/255;this.gridOuter[r]=a===1?0:a===0?$:Math.pow(Math.max(0,.5-a),2),this.gridInner[r]=a===1?$:a===0?0:Math.pow(Math.max(0,a-.5),2)}for(W(this.gridOuter,this.size,this.size,this.f,this.d,this.v,this.z),W(this.gridInner,this.size,this.size,this.f,this.d,this.v,this.z),r=0;r<this.size*this.size;r++){var n=this.gridOuter[r]-this.gridInner[r],s=Math.max(0,Math.min(255,Math.round(255-255*(n/this.radius+this.cutoff))));i[4*r+0]=s,i[4*r+1]=s,i[4*r+2]=s,i[4*r+3]=255}return e};function W(t,e,i,r,a,n,s){for(var l=0;l<e;l++){for(var f=0;f<i;f++)r[f]=t[f*e+l];for(G(r,a,n,s,i),f=0;f<i;f++)t[f*e+l]=a[f]}for(f=0;f<i;f++){for(l=0;l<e;l++)r[l]=t[f*e+l];for(G(r,a,n,s,e),l=0;l<e;l++)t[f*e+l]=Math.sqrt(a[l])}}function G(t,e,i,r,a){i[0]=0,r[0]=-$,r[1]=+$;for(var n=1,s=0;n<a;n++){for(var l=(t[n]+n*n-(t[i[s]]+i[s]*i[s]))/(2*n-2*i[s]);l<=r[s];)s--,l=(t[n]+n*n-(t[i[s]]+i[s]*i[s]))/(2*n-2*i[s]);s++,i[s]=n,r[s]=l,r[s+1]=+$}for(n=0,s=0;n<a;n++){for(;r[s+1]<n;)s++;e[n]=(n-i[s])*(n-i[s])+t[i[s]]}}var ve=Z,z=document.createElement("canvas"),x=z.getContext("2d");z.width=200,z.height=200;Z.canvas=z;function Z(t,e){var i,r,a,n;return typeof t=="string"?(i=ye(t,e),r=i.width,a=i.height):t instanceof HTMLCanvasElement?(r=t.width,a=t.height,t=t.getContext("2d"),i=t.getImageData(0,0,r,a)):t instanceof ImageData&&(r=t.width,a=t.height,i=t),n=we(i),n}function ye(t,e){e||(e={});var i=e.family||"sans-serif",r=z.width,a=z.height,n=e.width||e.height||e.size;n&&n!=r&&(r=a=z.width=z.height=n);var s=e.fontSize||r/2;return x.fillStyle="#000",x.fillRect(0,0,r,a),x.font=s+"px "+i,x.textBaseline="middle",x.textAlign="center",x.fillStyle="white",x.fillText(t,r/2,a/2),x.getImageData(0,0,r,a)}function we(t){var e=t.data,i=t.width,r=t.height,a,n,s,l,f,u,o,c,h=Array(r),d=Array(r),y,m,g,w,v=0,b=0,A=i,M=0,S=0,C=Array(r),E;for(n=0;n<r;n++)if(u=0,o=0,f=n*4*i,g=pe(e.subarray(f,f+4*i),4),g[0]!==g[1]){for(v||(v=n),b=n,a=g[0];a<g[1];a++)l=a*4,s=e[f+l],u+=s,o+=a*s;h[n]=u===0?0:u/i,d[n]=u===0?0:o/u,g[0]<A&&(A=g[0]),g[1]>M&&(M=g[1]),C[n]=g}for(u=0,c=0,o=0,n=0;n<r;n++)w=h[n],w&&(c+=w*n,u+=w,o+=d[n]*w);for(m=c/u,y=o/u,S=0,E=0,n=0;n<r;n++)g=C[n],g&&(E=Math.max(V(y-g[0],m-n),V(y-g[1],m-n)),E>S&&(S=E));return{center:[y,m],bounds:[A,v,M,b+1],radius:Math.sqrt(S)}}function pe(t,e){var i=0,r=t.length,a=0;for(e||(e=4);!t[a]&&a<r;)a+=e;for(i=a,a=t.length;!t[a]&&a>i;)a-=e;return r=a,[i/e,r/e]}function V(t,e){return t*t+e*e}var X=/[\'\"]/,xe=function(e){return e?(X.test(e.charAt(0))&&(e=e.substr(1)),X.test(e.charAt(e.length-1))&&(e=e.substr(0,e.length-1)),e):""};const k=["inherit","initial","unset"],ee=["caption","icon","menu","message-box","small-caption","status-bar"],te=["normal","bold","bolder","lighter","100","200","300","400","500","600","700","800","900"],re=["normal","italic","oblique"],ie=["normal","condensed","semi-condensed","extra-condensed","ultra-condensed","expanded","semi-expanded","extra-expanded","ultra-expanded"];function ne(t,e){if(typeof t!="string")return[t];var i=[t];typeof e=="string"||Array.isArray(e)?e={brackets:e}:e||(e={});var r=e.brackets?Array.isArray(e.brackets)?e.brackets:[e.brackets]:["{}","[]","()"],a=e.escape||"___",n=!!e.flat;r.forEach(function(f){var u=new RegExp(["\\",f[0],"[^\\",f[0],"\\",f[1],"]*\\",f[1]].join("")),o=[];function c(h,d,y){var m=i.push(h.slice(f[0].length,-f[1].length))-1;return o.push(m),a+m+a}i.forEach(function(h,d){for(var y,m=0;h!=y;)if(y=h,h=h.replace(u,c),m++>1e4)throw Error("References have circular dependency. Please, check them.");i[d]=h}),o=o.reverse(),i=i.map(function(h){return o.forEach(function(d){h=h.replace(new RegExp("(\\"+a+d+"\\"+a+")","g"),f[0]+"$1"+f[1])}),h})});var s=new RegExp("\\"+a+"([0-9]+)\\"+a);function l(f,u,o){for(var c=[],h,d=0;h=s.exec(f);){if(d++>1e4)throw Error("Circular references in parenthesis");c.push(f.slice(0,h.index)),c.push(l(u[h[1]],u)),f=f.slice(h.index+h[0].length)}return c.push(f),c}return n?i:l(i[0],i)}function ae(t,e){if(e&&e.flat){var i=e&&e.escape||"___",r=t[0],a;if(!r)return"";for(var n=new RegExp("\\"+i+"([0-9]+)\\"+i),s=0;r!=a;){if(s++>1e4)throw Error("Circular references in "+t);a=r,r=r.replace(n,l)}return r}return t.reduce(function f(u,o){return Array.isArray(o)&&(o=o.reduce(f,"")),u+o},"");function l(f,u){if(t[u]==null)throw Error("Reference "+u+"is undefined");return t[u]}}function T(t,e){return Array.isArray(t)?ae(t,e):ne(t,e)}T.parse=ne;T.stringify=ae;var ze=T,q=ze,be=function(e,i,r){if(e==null)throw Error("First argument should be a string");if(i==null)throw Error("Separator should be a string or a RegExp");r?(typeof r=="string"||Array.isArray(r))&&(r={ignore:r}):r={},r.escape==null&&(r.escape=!0),r.ignore==null?r.ignore=["[]","()","{}","<>",'""',"''","``","“”","«»"]:(typeof r.ignore=="string"&&(r.ignore=[r.ignore]),r.ignore=r.ignore.map(function(c){return c.length===1&&(c=c+c),c}));var a=q.parse(e,{flat:!0,brackets:r.ignore}),n=a[0],s=n.split(i);if(r.escape){for(var l=[],f=0;f<s.length;f++){var u=s[f],o=s[f+1];u[u.length-1]==="\\"&&u[u.length-2]!=="\\"?(l.push(u+i+o),f++):l.push(u)}s=l}for(var f=0;f<s.length;f++)a[0]=s[f],s[f]=q.stringify(a,{flat:!0});return s};const Ae=["xx-small","x-small","small","medium","large","x-large","xx-large","larger","smaller"];var Se=Ae,se={isSize:function(e){return/^[\d\.]/.test(e)||e.indexOf("/")!==-1||Se.indexOf(e)!==-1}},Ee=xe,Fe=k,Me=ee,Oe=te,Ie=re,$e=ie,_=be,Be=se.isSize,Ce=fe,O=fe.cache={};function fe(t){if(typeof t!="string")throw new Error("Font argument must be a string.");if(O[t])return O[t];if(t==="")throw new Error("Cannot parse an empty string.");if(Me.indexOf(t)!==-1)return O[t]={system:t};for(var e={style:"normal",variant:"normal",weight:"normal",stretch:"normal",lineHeight:"normal",size:"1rem",family:["serif"]},i=_(t,/\s+/),r;r=i.shift();){if(Fe.indexOf(r)!==-1)return["style","variant","weight","stretch"].forEach(function(n){e[n]=r}),O[t]=e;if(Ie.indexOf(r)!==-1){e.style=r;continue}if(r==="normal"||r==="small-caps"){e.variant=r;continue}if($e.indexOf(r)!==-1){e.stretch=r;continue}if(Oe.indexOf(r)!==-1){e.weight=r;continue}if(Be(r)){var a=_(r,"/");if(e.size=a[0],a[1]!=null?e.lineHeight=J(a[1]):i[0]==="/"&&(i.shift(),e.lineHeight=J(i.shift())),!i.length)throw new Error("Missing required font-family.");return e.family=_(i.join(" "),/\s*,\s*/).map(Ee),O[t]=e}throw new Error("Unknown or unsupported font token: "+r)}throw new Error("Missing required font-size.")}function J(t){var e=parseFloat(t);return e.toString()===t?e:t}var De=function(e,i,r){var a={},n,s;if(typeof i=="string"&&(i=Q(i)),Array.isArray(i)){var l={};for(s=0;s<i.length;s++)l[i[s]]=!0;i=l}for(n in i)i[n]=Q(i[n]);var f={};for(n in i){var u=i[n];if(Array.isArray(u))for(s=0;s<u.length;s++){var o=u[s];if(r&&(f[o]=!0),o in e){if(a[n]=e[o],r)for(var c=s;c<u.length;c++)f[u[c]]=!0;break}}else n in e&&(i[n]&&(a[n]=e[n]),r&&(f[n]=!0))}if(r)for(n in e)f[n]||(a[n]=e[n]);return a},P={};function Q(t){return P[t]?P[t]:(typeof t=="string"&&(t=P[t]=t.split(/\s*,\s*|\s+/)),t)}var He=De,Le=se.isSize,Re=B(k),_e=B(ee),Pe=B(te),je=B(re),Ke=B(ie),Te={normal:1,"small-caps":1},Ne={serif:1,"sans-serif":1,monospace:1,cursive:1,fantasy:1,"system-ui":1},j={style:"normal",variant:"normal",weight:"normal",stretch:"normal",size:"1rem",lineHeight:"normal",family:"serif"},Ue=function(e){if(e=He(e,{style:"style fontstyle fontStyle font-style slope distinction",variant:"variant font-variant fontVariant fontvariant var capitalization",weight:"weight w font-weight fontWeight fontweight",stretch:"stretch font-stretch fontStretch fontstretch width",size:"size s font-size fontSize fontsize height em emSize",lineHeight:"lh line-height lineHeight lineheight leading",family:"font family fontFamily font-family fontfamily type typeface face",system:"system reserved default global"}),e.system)return e.system&&I(e.system,_e),e.system;if(I(e.style,je),I(e.variant,Te),I(e.weight,Pe),I(e.stretch,Ke),e.size==null&&(e.size=j.size),typeof e.size=="number"&&(e.size+="px"),!Le)throw Error("Bad size value `"+e.size+"`");e.family||(e.family=j.family),Array.isArray(e.family)&&(e.family.length||(e.family=[j.family]),e.family=e.family.map(function(r){return Ne[r]?r:'"'+r+'"'}).join(", "));var i=[];return i.push(e.style),e.variant!==e.style&&i.push(e.variant),e.weight!==e.variant&&e.weight!==e.style&&i.push(e.weight),e.stretch!==e.weight&&e.stretch!==e.variant&&e.stretch!==e.style&&i.push(e.stretch),i.push(e.size+(e.lineHeight==null||e.lineHeight==="normal"||e.lineHeight+""=="1"?"":"/"+e.lineHeight)),i.push(e.family),i.filter(Boolean).join(" ")};function I(t,e){if(t&&!e[t]&&!Re[t])throw Error("Unknown keyword `"+t+"`");return t}function B(t){for(var e={},i=0;i<t.length;i++)e[t[i]]=1;return e}var We={parse:Ce,stringify:Ue},Ge=me,Ve=ve,Xe=We,qe=Je;function Je(t){t=t||{};var e=t.canvas||document.createElement("canvas"),i=t.shape||[512,512],r=t.step||[32,32],a=t.font?typeof t.font=="string"?Xe.parse(t.font):t.font:{},n=parseFloat(a.size)||16,s=a.family||"sans-serif",l=t.chars||[32,126],f=Math.floor((r[0]-n)/2),u=t.radius||f*1.5,o=new Ge(n,f,u,0,s),c=t.align==null?"optical":t.align,h=t.fit==null||t.fit==!0?.5:t.fit,d,y;if(!Array.isArray(l))l=String(l).split("");else if(l.length===2&&typeof l[0]=="number"&&typeof l[1]=="number"){var m=[];for(d=l[0],y=0;d<=l[1];d++)m[y++]=String.fromCharCode(d);l=m}i=i.slice(),e.width=i[0],e.height=i[1];var g=e.getContext("2d");g.fillStyle="#000",g.fillRect(0,0,e.width,e.height),g.textBaseline="middle";var w=r[0],v=r[1],b=0,A=0,M=n/v,S=Math.min(l.length,Math.floor(i[0]/w)*Math.ceil(i[1]/v)),C=o.ctx.textAlign,E=o.buffer,N=o.middle;for(o.ctx.textAlign="center",o.buffer=o.size/2,d=0;d<S;d++)if(l[d]){var p=Qe(l[d],s,M),D=1,H=[0,0];if(h){var U=h;Array.isArray(h)&&(U=h[d]);var L=(p.bounds[3]-p.bounds[1])*.5,R=(p.bounds[2]-p.bounds[0])*.5,ue=Math.max(L,R),he=Math.sqrt(L*L+R*R),ce=p.radius*.333+ue*.333+he*.333;D=v*U/(ce*v*2),o.ctx.font=n*D+"px "+s}else o.ctx.font=n+"px "+s;c&&(c==="optical"||c===!0?H=[w*.5-w*p.center[0],v*.5-v*p.center[1]]:H=[w*.5-w*(p.bounds[2]+p.bounds[0])*.5,v*.5-v*(p.bounds[3]+p.bounds[1])*.5],o.middle=N+H[1]*D);var de=o.draw(l[d]);g.putImageData(de,b+H[0]*D,A),b+=r[0],b>i[0]-r[0]&&(b=0,A+=r[1])}return o.ctx.textAlign=C,o.buffer=E,o.middle=N,e}var F={};function Qe(t,e,i){if(F[e]&&F[e][t])return F[e][t];var r=200,a=r*i,n=Ve(t,{size:r,fontSize:a,fontFamily:e});F[e]||(F[e]={});var s={center:[n.center[0]/r,n.center[1]/r],bounds:n.bounds.map(function(l){return l/r}),radius:n.radius/r};return F[e][t]=s,s}const Ye=ge(qe),Ze=document.getElementById("container");let K;const le={font:{family:"sans-serif"},cellSize:32,chars:["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"],align:"bounds",fit:.5};function oe(t){t.step=[t.cellSize,t.cellSize],t.font.size=t.cellSize/2,t.shape=ke(t.chars.length,t.cellSize),K=Ye(t),Ze.replaceChildren(K)}function ke(t,e){let i=Math.floor(Math.sqrt(t));for(;t%i!=0;)i--;return[t/i*e,i*e]}oe(le);const et=document.getElementById("form");et.addEventListener("submit",t=>{t.preventDefault();let e=document.getElementById("cellSize"),i=document.getElementById("fontFamily"),r=document.getElementById("characters"),a={...le};a.cellSize=parseFloat(e.value)||a.cellSize,a.font.family=i.value||a.font.family,a.chars=r.value.replace(/ /g,"").split(",")||a.chars,oe(a)});const tt=document.getElementById("download");tt.addEventListener("click",t=>{t.preventDefault();var e=document.createElement("a");e.download="font-atlas.png",e.href=K.toDataURL(),e.click(),e.remove()});