import{d as en,h as mn,a2 as rn,l as k,p as hn,U as gn,a3 as wn,a4 as K,u as ln,o as Mn,A as $n,B as yn,b as q,z as sn,t as nn,K as tn,a5 as zn,k as bn,a6 as Sn,a7 as _n,a8 as Dn,a9 as Ln,aa as Yn,ab as Hn,ac as xn,ad as Cn,ae as Tn,af as On,ag as kn,ah as Vn,ai as Fn}from"./chunks/framework.63cf34e1.js";import{t as vn}from"./chunks/theme.4634865e.js";const An={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;","&":"&amp;"};let Xn=0;var Rn=n=>n.replace(/[<>"&]/g,i=>An[i]||i),jn=n=>n+Xn++;const N={},Pn=n=>{const{name:i,paths:l=[],d:c,polygons:v=[],points:m}=n;c&&l.push({d:c}),m&&v.push({points:m}),N[i]=Object.assign({},n,{paths:l,polygons:v}),N[i].minX||(N[i].minX=0),N[i].minY||(N[i].minY=0)},En=(...n)=>{for(const i of n)Pn(i)},Nn=en({name:"OhVueIcon",props:{name:{type:String,validator:n=>!n||n in N||(console.warn(`Invalid prop: prop "name" is referring to an unregistered icon "${n}".
Please make sure you have imported this icon before using it.`),!1)},title:String,fill:String,scale:{type:[Number,String],default:1},animation:{validator:n=>["spin","spin-pulse","wrench","ring","pulse","flash","float"].includes(n)},hover:Boolean,flip:{validator:n=>["horizontal","vertical","both"].includes(n)},speed:{validator:n=>n==="fast"||n==="slow"},label:String,inverse:Boolean},setup(n){const i=mn([]),l=rn({outerScale:1.2,x:null,y:null}),c=rn({width:0,height:0}),v=k(()=>{const g=Number(n.scale);return isNaN(g)||g<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.'),l.outerScale):g*l.outerScale}),m=k(()=>({"ov-icon":!0,"ov-inverse":n.inverse,"ov-flip-horizontal":n.flip==="horizontal","ov-flip-vertical":n.flip==="vertical","ov-flip-both":n.flip==="both","ov-spin":n.animation==="spin","ov-spin-pulse":n.animation==="spin-pulse","ov-wrench":n.animation==="wrench","ov-ring":n.animation==="ring","ov-pulse":n.animation==="pulse","ov-flash":n.animation==="flash","ov-float":n.animation==="float","ov-hover":n.hover,"ov-fast":n.speed==="fast","ov-slow":n.speed==="slow"})),u=k(()=>n.name?N[n.name]:null),Y=k(()=>u.value?`${u.value.minX} ${u.value.minY} ${u.value.width} ${u.value.height}`:`0 0 ${d.value} ${S.value}`),L=k(()=>{if(!u.value)return 1;const{width:g,height:y}=u.value;return Math.max(g,y)/16}),d=k(()=>c.width||u.value&&u.value.width/L.value*v.value||0),S=k(()=>c.height||u.value&&u.value.height/L.value*v.value||0),$=k(()=>v.value!==1&&{fontSize:v.value+"em"}),F=k(()=>{if(!u.value||!u.value.raw)return null;const g={};let y=u.value.raw;return y=y.replace(/\s(?:xml:)?id=(["']?)([^"')\s]+)\1/g,(_,A,X)=>{const O=jn("vat-");return g[X]=O,` id="${O}"`}),y=y.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,(_,A,X,O)=>{const z=A||O;return z&&g[z]?`#${g[z]}`:_}),y}),C=k(()=>u.value&&u.value.attr?u.value.attr:{}),T=()=>{if(!n.name&&n.name!==null&&i.value.length===0)return void console.warn('Invalid prop: prop "name" is required.');if(u.value)return;let g=0,y=0;i.value.forEach(_=>{_.outerScale=v.value,g=Math.max(g,_.width),y=Math.max(y,_.height)}),c.width=g,c.height=y,i.value.forEach(_=>{_.x=(g-_.width)/2,_.y=(y-_.height)/2})};return hn(()=>{T()}),gn(()=>{T()}),{...wn(l),children:i,icon:u,klass:m,style:$,width:d,height:S,box:Y,attribs:C,raw:F}},created(){const n=this.$parent;n&&n.children&&n.children.push(this)},render(){const n=Object.assign({role:this.$attrs.role||(this.label||this.title?"img":null),"aria-label":this.label||null,"aria-hidden":!(this.label||this.title),width:this.width,height:this.height,viewBox:this.box},this.attribs);this.attribs.stroke?n.stroke=this.fill?this.fill:"currentColor":n.fill=this.fill?this.fill:"currentColor",this.x&&(n.x=this.x.toString()),this.y&&(n.y=this.y.toString());let i={class:this.klass,style:this.style};if(i=Object.assign(i,n),this.raw){const v=this.title?`<title>${Rn(this.title)}</title>${this.raw}`:this.raw;i.innerHTML=v}const l=this.title?[K("title",this.title)]:[],c=(v,m,u)=>K(v,{...m,key:`${v}-${u}`});return K("svg",i,this.raw?void 0:l.concat([this.$slots.default?this.$slots.default():this.icon?[...this.icon.paths.map((v,m)=>c("path",v,m)),...this.icon.polygons.map((v,m)=>c("polygon",v,m))]:[]]))}});function on(n,i){i===void 0&&(i={});var l=i.insertAt;if(n&&typeof document<"u"){var c=document.head||document.getElementsByTagName("head")[0],v=document.createElement("style");v.type="text/css",l==="top"&&c.firstChild?c.insertBefore(v,c.firstChild):c.appendChild(v),v.styleSheet?v.styleSheet.cssText=n:v.appendChild(document.createTextNode(n))}}on(`.ov-icon {
  display: inline-block;
  overflow: visible;
  vertical-align: -0.2em;
}
`);on(`/* ---------------- spin ---------------- */
.ov-spin:not(.ov-hover),
.ov-spin.ov-hover:hover,
.ov-parent.ov-hover:hover > .ov-spin {
  animation: ov-spin 1s linear infinite;
}

.ov-spin:not(.ov-hover).ov-fast,
.ov-spin.ov-hover.ov-fast:hover,
.ov-parent.ov-hover:hover > .ov-spin.ov-fast {
  animation: ov-spin 0.7s linear infinite;
}

.ov-spin:not(.ov-hover).ov-slow,
.ov-spin.ov-hover.ov-slow:hover,
.ov-parent.ov-hover:hover > .ov-spin.ov-slow {
  animation: ov-spin 2s linear infinite;
}

/* ---------------- spin-pulse ---------------- */

.ov-spin-pulse:not(.ov-hover),
.ov-spin-pulse.ov-hover:hover,
.ov-parent.ov-hover:hover > .ov-spin-pulse {
  animation: ov-spin 1s infinite steps(8);
}

.ov-spin-pulse:not(.ov-hover).ov-fast,
.ov-spin-pulse.ov-hover.ov-fast:hover,
.ov-parent.ov-hover:hover > .ov-spin-pulse.ov-fast {
  animation: ov-spin 0.7s infinite steps(8);
}

.ov-spin-pulse:not(.ov-hover).ov-slow,
.ov-spin-pulse.ov-hover.ov-slow:hover,
.ov-parent.ov-hover:hover > .ov-spin-pulse.ov-slow {
  animation: ov-spin 2s infinite steps(8);
}

@keyframes ov-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* ---------------- wrench ---------------- */
.ov-wrench:not(.ov-hover),
.ov-wrench.ov-hover:hover,
.ov-parent.ov-hover:hover > .ov-wrench {
  animation: ov-wrench 2.5s ease infinite;
}

.ov-wrench:not(.ov-hover).ov-fast,
.ov-wrench.ov-hover.ov-fast:hover,
.ov-parent.ov-hover:hover > .ov-wrench.ov-fast {
  animation: ov-wrench 1.2s ease infinite;
}

.ov-wrench:not(.ov-hover).ov-slow,
.ov-wrench.ov-hover.ov-slow:hover,
.ov-parent.ov-hover:hover > .ov-wrench.ov-slow {
  animation: ov-wrench 3.7s ease infinite;
}

@keyframes ov-wrench {
  0% {
    transform: rotate(-12deg);
  }

  8% {
    transform: rotate(12deg);
  }

  10%, 28%, 30%, 48%, 50%, 68% {
    transform: rotate(24deg);
  }

  18%, 20%, 38%, 40%, 58%, 60% {
    transform: rotate(-24deg);
  }

  75%, 100% {
    transform: rotate(0deg);
  }
}

/* ---------------- ring ---------------- */
.ov-ring:not(.ov-hover),
.ov-ring.ov-hover:hover,
.ov-parent.ov-hover:hover > .ov-ring {
  animation: ov-ring 2s ease infinite;
}

.ov-ring:not(.ov-hover).ov-fast,
.ov-ring.ov-hover.ov-fast:hover,
.ov-parent.ov-hover:hover > .ov-ring.ov-fast {
  animation: ov-ring 1s ease infinite;
}

.ov-ring:not(.ov-hover).ov-slow,
.ov-ring.ov-hover.ov-slow:hover,
.ov-parent.ov-hover:hover > .ov-ring.ov-slow {
  animation: ov-ring 3s ease infinite;
}

@keyframes ov-ring {
  0% {
    transform: rotate(-15deg);
  }

  2% {
    transform: rotate(15deg);
  }

  4%, 12% {
    transform: rotate(-18deg);
  }

  6% {
    transform: rotate(18deg);
  }

  8% {
    transform: rotate(-22deg);
  }

  10% {
    transform: rotate(22deg);
  }

  12% {
    transform: rotate(-18deg);
  }

  14% {
    transform: rotate(18deg);
  }

  16% {
    transform: rotate(-12deg);
  }

  18% {
    transform: rotate(12deg);
  }

  20%, 100% {
    transform: rotate(0deg);
  }
}

/* ---------------- pulse ---------------- */
.ov-pulse:not(.ov-hover),
.ov-pulse.ov-hover:hover,
.ov-parent.ov-hover:hover > .ov-pulse {
  animation: ov-pulse 2s linear infinite;
}

.ov-pulse:not(.ov-hover).ov-fast,
.ov-pulse.ov-hover.ov-fast:hover,
.ov-parent.ov-hover:hover > .ov-pulse.ov-fast {
  animation: ov-pulse 1s linear infinite;
}

.ov-pulse:not(.ov-hover).ov-slow,
.ov-pulse.ov-hover.ov-slow:hover,
.ov-parent.ov-hover:hover > .ov-pulse.ov-slow {
  animation: ov-pulse 3s linear infinite;
}

@keyframes ov-pulse {
  0% {
    transform: scale(1.1);
  }

  50% {
    transform: scale(0.8);
  }

  100% {
    transform: scale(1.1);
  }
}

/* ---------------- flash ---------------- */
.ov-flash:not(.ov-hover),
.ov-flash.ov-hover:hover,
.ov-parent.ov-hover:hover > .ov-flash {
  animation: ov-flash 2s ease infinite;
}

.ov-flash:not(.ov-hover).ov-fast,
.ov-flash.ov-hover.ov-fast:hover,
.ov-parent.ov-hover:hover > .ov-flash.ov-fast {
  animation: ov-flash 1s ease infinite;
}

.ov-flash:not(.ov-hover).ov-slow,
.ov-flash.ov-hover.ov-slow:hover,
.ov-parent.ov-hover:hover > .ov-flash.ov-slow {
  animation: ov-flash 3s ease infinite;
}

@keyframes ov-flash {
  0%, 100%, 50%{
    opacity: 1;
  }
  25%, 75%{
    opacity: 0;
  }
}

/* ---------------- float ---------------- */
.ov-float:not(.ov-hover),
.ov-float.ov-hover:hover,
.ov-parent.ov-hover:hover > .ov-float {
  animation: ov-float 2s linear infinite;
}

.ov-float:not(.ov-hover).ov-fast,
.ov-float.ov-hover.ov-fast:hover,
.ov-parent.ov-hover:hover > .ov-float.ov-fast {
  animation: ov-float 1s linear infinite;
}

.ov-float:not(.ov-hover).ov-slow,
.ov-float.ov-hover.ov-slow:hover,
.ov-parent.ov-hover:hover > .ov-float.ov-slow {
  animation: ov-float 3s linear infinite;
}

@keyframes ov-float {
  0%, 100% {
    transform: translateY(-3px);
  }
  50% {
    transform: translateY(3px);
  }
}
`);on(`.ov-flip-horizontal {
  transform: scale(-1, 1);
}

.ov-flip-vertical {
  transform: scale(1, -1);
}

.ov-flip-both {
  transform: scale(-1, -1);
}

.ov-inverse {
  color: #fff;
}
`);const In={name:"fa-chevron-down",minX:-75.52,minY:-43.52,width:599.04,height:599.04,raw:'<path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"/>'},Bn={name:"fa-chevron-left",minX:-139.52,minY:-43.52,width:599.04,height:599.04,raw:'<path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"/>'},Un={name:"fa-chevron-right",minX:-139.52,minY:-43.52,width:599.04,height:599.04,raw:'<path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/>'},Wn={name:"fa-chevron-up",minX:-75.52,minY:-43.52,width:599.04,height:599.04,raw:'<path d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"/>'},Zn={name:"fa-circle",minX:-43.52,minY:-43.52,width:599.04,height:599.04,raw:'<path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"/>'},Jn={name:"fa-envelope",minX:-43.52,minY:-43.52,width:599.04,height:599.04,raw:'<path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"/>'},qn={name:"fa-facebook-f",minX:-139.52,minY:-43.52,width:599.04,height:599.04,raw:'<path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>'},Gn={name:"fa-github-alt",minX:-59.52,minY:-43.52,width:599.04,height:599.04,raw:'<path d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"/>'},Kn={name:"fa-linkedin-in",minX:-75.52,minY:-43.52,width:599.04,height:599.04,raw:'<path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 01107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>'},Qn={name:"fa-list-ul",minX:-43.52,minY:-43.52,width:599.04,height:599.04,raw:'<path d="M48 48a48 48 0 1048 48 48 48 0 00-48-48zm0 160a48 48 0 1048 48 48 48 0 00-48-48zm0 160a48 48 0 1048 48 48 48 0 00-48-48zm448 16H176a16 16 0 00-16 16v32a16 16 0 0016 16h320a16 16 0 0016-16v-32a16 16 0 00-16-16zm0-320H176a16 16 0 00-16 16v32a16 16 0 0016 16h320a16 16 0 0016-16V80a16 16 0 00-16-16zm0 160H176a16 16 0 00-16 16v32a16 16 0 0016 16h320a16 16 0 0016-16v-32a16 16 0 00-16-16z"/>'},nt={name:"fa-magic",minX:-43.52,minY:-43.52,width:599.04,height:599.04,raw:'<path d="M224 96l16-32 32-16-32-16-16-32-16 32-32 16 32 16 16 32zM80 160l26.66-53.33L160 80l-53.34-26.67L80 0 53.34 53.33 0 80l53.34 26.67L80 160zm352 128l-26.66 53.33L352 368l53.34 26.67L432 448l26.66-53.33L512 368l-53.34-26.67L432 288zm70.62-193.77L417.77 9.38C411.53 3.12 403.34 0 395.15 0c-8.19 0-16.38 3.12-22.63 9.38L9.38 372.52c-12.5 12.5-12.5 32.76 0 45.25l84.85 84.85c6.25 6.25 14.44 9.37 22.62 9.37 8.19 0 16.38-3.12 22.63-9.37l363.14-363.15c12.5-12.48 12.5-32.75 0-45.24zM359.45 203.46l-50.91-50.91 86.6-86.6 50.91 50.91-86.6 86.6z"/>'},tt={name:"fa-moon",minX:-43.52,minY:-43.52,width:599.04,height:599.04,raw:'<path d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 00283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"/>'},et={name:"fa-pencil-alt",minX:-43.52,minY:-43.52,width:599.04,height:599.04,raw:'<path d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"/>'},ot={name:"fa-sun",minX:-43.52,minY:-43.52,width:599.04,height:599.04,raw:'<path d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"/>'},it={name:"fa-twitter",minX:-43.52,minY:-43.52,width:599.04,height:599.04,raw:'<path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>'},at={name:"fa-regular-calendar",minX:-75.52,minY:-43.52,width:599.04,height:599.04,raw:'<path d="M400 64h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V160h352v298c0 3.3-2.7 6-6 6z"/>'},rt={name:"fa-regular-user",minX:-75.52,minY:-43.52,width:599.04,height:599.04,raw:'<path d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"/>'},st={name:"hi-translate",minX:0,minY:0,width:24,height:24,raw:'<path stroke-linecap="round" stroke-linejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"/>',attr:{fill:"none",stroke:"currentColor","stroke-width":"2","aria-hidden":"true"}},ht={name:"ri-rss-fill",minX:0,minY:0,width:24,height:24,raw:'<path fill="none" d="M0 0h24v24H0z"/><path d="M3 3c9.941 0 18 8.059 18 18h-3c0-8.284-6.716-15-15-15V3zm0 7c6.075 0 11 4.925 11 11h-3a8 8 0 00-8-8v-3zm0 7a4 4 0 014 4H3v-4z"/>'},lt={name:"ri-search-2-line",minX:0,minY:0,width:24,height:24,raw:'<path fill="none" d="M0 0h24v24H0z"/><path d="M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9-9-4.032-9-9 4.032-9 9-9zm0 16c3.867 0 7-3.133 7-7 0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7zm8.485.071l2.829 2.828-1.415 1.415-2.828-2.829 1.414-1.414z"/>'},vt={name:"ri-timer-line",minX:0,minY:0,width:24,height:24,raw:'<path fill="none" d="M0 0h24v24H0z"/><path d="M17.618 5.968l1.453-1.453 1.414 1.414-1.453 1.453a9 9 0 11-1.414-1.414zM12 20a7 7 0 100-14 7 7 0 000 14zM11 8h2v6h-2V8zM8 1h8v2H8V1z"/>'},ct={name:"ri-weibo-fill",minX:0,minY:0,width:24,height:24,raw:'<path fill="none" d="M0 0h24v24H0z"/><path d="M17.525 11.378c1.263.392 2.669 1.336 2.669 3.004 0 2.763-3.98 6.239-9.964 6.239-4.565 0-9.23-2.213-9.23-5.852 0-1.902 1.204-4.102 3.277-6.177 2.773-2.77 6.004-4.033 7.219-2.816.537.537.588 1.464.244 2.572-.178.557.525.25.525.25 2.24-.938 4.196-.994 4.909.027.38.543.343 1.306-.008 2.19-.163.407.048.471.36.563zm-7.282 7.939c3.641-.362 6.401-2.592 6.167-4.983-.237-2.391-3.382-4.038-7.023-3.677-3.64.36-6.403 2.59-6.167 4.98.237 2.394 3.382 4.039 7.023 3.68zM6.16 14.438c.754-1.527 2.712-2.39 4.446-1.94 1.793.463 2.707 2.154 1.976 3.8-.744 1.682-2.882 2.578-4.695 1.993-1.752-.566-2.493-2.294-1.727-3.853zm1.446 2.587c.568.257 1.325.013 1.676-.55.346-.568.163-1.217-.407-1.459-.563-.237-1.291.008-1.64.553-.354.547-.189 1.202.371 1.456zm2.206-1.808c.219.092.501-.012.628-.231.123-.22.044-.466-.178-.548-.216-.084-.486.018-.613.232-.123.214-.054.458.163.547zM19.873 9.5a.725.725 0 11-1.378-.451 1.38 1.38 0 00-.288-1.357 1.395 1.395 0 00-1.321-.425.723.723 0 11-.303-1.416 2.836 2.836 0 013.29 3.649zm-3.916-6.575A5.831 5.831 0 0121.5 4.72a5.836 5.836 0 011.22 5.704.838.838 0 01-1.06.54.844.844 0 01-.542-1.062 4.143 4.143 0 00-4.807-5.327.845.845 0 01-.354-1.65z"/>'},ut={name:"ri-zhihu-line",minX:0,minY:0,width:24,height:24,raw:'<path fill="none" d="M0 0h24v24H0z"/><path d="M12.344 17.963l-1.688 1.074-2.131-3.35c-.44 1.402-1.172 2.665-2.139 3.825-.402.483-.82.918-1.301 1.375-.155.147-.775.717-.878.82l-1.414-1.414c.139-.139.787-.735.915-.856.43-.408.795-.79 1.142-1.206 1.266-1.518 2.03-3.21 2.137-5.231H3v-2h4V7h-.868c-.689 1.266-1.558 2.222-2.618 2.857L2.486 8.143c1.395-.838 2.425-2.604 3.038-5.36l1.952.434c-.14.633-.303 1.227-.489 1.783H11.5v2H9v4h2.5v2H9.185l3.159 4.963zm3.838-.07L17.298 17H19V7h-4v10h.736l.446.893zM13 5h8v14h-3l-2.5 2-1-2H13V5z"/>'};var cn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function un(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var fn={exports:{}};(function(n,i){(function(l,c){n.exports=c()})(cn,function(){var l=1e3,c=6e4,v=36e5,m="millisecond",u="second",Y="minute",L="hour",d="day",S="week",$="month",F="quarter",C="year",T="date",g="Invalid Date",y=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,_=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,A={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(a){var o=["th","st","nd","rd"],t=a%100;return"["+a+(o[(t-20)%10]||o[t]||o[0])+"]"}},X=function(a,o,t){var r=String(a);return!r||r.length>=o?a:""+Array(o+1-r.length).join(t)+a},O={s:X,z:function(a){var o=-a.utcOffset(),t=Math.abs(o),r=Math.floor(t/60),e=t%60;return(o<=0?"+":"-")+X(r,2,"0")+":"+X(e,2,"0")},m:function a(o,t){if(o.date()<t.date())return-a(t,o);var r=12*(t.year()-o.year())+(t.month()-o.month()),e=o.clone().add(r,$),h=t-e<0,s=o.clone().add(r+(h?-1:1),$);return+(-(r+(t-e)/(h?e-s:s-e))||0)},a:function(a){return a<0?Math.ceil(a)||0:Math.floor(a)},p:function(a){return{M:$,y:C,w:S,d,D:T,h:L,m:Y,s:u,ms:m,Q:F}[a]||String(a||"").toLowerCase().replace(/s$/,"")},u:function(a){return a===void 0}},z="en",H={};H[z]=A;var E=function(a){return a instanceof Z},R=function a(o,t,r){var e;if(!o)return z;if(typeof o=="string"){var h=o.toLowerCase();H[h]&&(e=h),t&&(H[h]=t,e=h);var s=o.split("-");if(!e&&s.length>1)return a(s[0])}else{var f=o.name;H[f]=o,e=f}return!r&&e&&(z=e),e||!r&&z},b=function(a,o){if(E(a))return a.clone();var t=typeof o=="object"?o:{};return t.date=a,t.args=arguments,new Z(t)},p=O;p.l=R,p.i=E,p.w=function(a,o){return b(a,{locale:o.$L,utc:o.$u,x:o.$x,$offset:o.$offset})};var Z=function(){function a(t){this.$L=R(t.locale,null,!0),this.parse(t)}var o=a.prototype;return o.parse=function(t){this.$d=function(r){var e=r.date,h=r.utc;if(e===null)return new Date(NaN);if(p.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var s=e.match(y);if(s){var f=s[2]-1||0,M=(s[7]||"0").substring(0,3);return h?new Date(Date.UTC(s[1],f,s[3]||1,s[4]||0,s[5]||0,s[6]||0,M)):new Date(s[1],f,s[3]||1,s[4]||0,s[5]||0,s[6]||0,M)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},o.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},o.$utils=function(){return p},o.isValid=function(){return this.$d.toString()!==g},o.isSame=function(t,r){var e=b(t);return this.startOf(r)<=e&&e<=this.endOf(r)},o.isAfter=function(t,r){return b(t)<this.startOf(r)},o.isBefore=function(t,r){return this.endOf(r)<b(t)},o.$g=function(t,r,e){return p.u(t)?this[r]:this.set(e,t)},o.unix=function(){return Math.floor(this.valueOf()/1e3)},o.valueOf=function(){return this.$d.getTime()},o.startOf=function(t,r){var e=this,h=!!p.u(r)||r,s=p.p(t),f=function(I,x){var P=p.w(e.$u?Date.UTC(e.$y,x,I):new Date(e.$y,x,I),e);return h?P:P.endOf(d)},M=function(I,x){return p.w(e.toDate()[I].apply(e.toDate("s"),(h?[0,0,0,0]:[23,59,59,999]).slice(x)),e)},w=this.$W,D=this.$M,j=this.$D,V="set"+(this.$u?"UTC":"");switch(s){case C:return h?f(1,0):f(31,11);case $:return h?f(1,D):f(0,D+1);case S:var U=this.$locale().weekStart||0,W=(w<U?w+7:w)-U;return f(h?j-W:j+(6-W),D);case d:case T:return M(V+"Hours",0);case L:return M(V+"Minutes",1);case Y:return M(V+"Seconds",2);case u:return M(V+"Milliseconds",3);default:return this.clone()}},o.endOf=function(t){return this.startOf(t,!1)},o.$set=function(t,r){var e,h=p.p(t),s="set"+(this.$u?"UTC":""),f=(e={},e[d]=s+"Date",e[T]=s+"Date",e[$]=s+"Month",e[C]=s+"FullYear",e[L]=s+"Hours",e[Y]=s+"Minutes",e[u]=s+"Seconds",e[m]=s+"Milliseconds",e)[h],M=h===d?this.$D+(r-this.$W):r;if(h===$||h===C){var w=this.clone().set(T,1);w.$d[f](M),w.init(),this.$d=w.set(T,Math.min(this.$D,w.daysInMonth())).$d}else f&&this.$d[f](M);return this.init(),this},o.set=function(t,r){return this.clone().$set(t,r)},o.get=function(t){return this[p.p(t)]()},o.add=function(t,r){var e,h=this;t=Number(t);var s=p.p(r),f=function(D){var j=b(h);return p.w(j.date(j.date()+Math.round(D*t)),h)};if(s===$)return this.set($,this.$M+t);if(s===C)return this.set(C,this.$y+t);if(s===d)return f(1);if(s===S)return f(7);var M=(e={},e[Y]=c,e[L]=v,e[u]=l,e)[s]||1,w=this.$d.getTime()+t*M;return p.w(w,this)},o.subtract=function(t,r){return this.add(-1*t,r)},o.format=function(t){var r=this,e=this.$locale();if(!this.isValid())return e.invalidDate||g;var h=t||"YYYY-MM-DDTHH:mm:ssZ",s=p.z(this),f=this.$H,M=this.$m,w=this.$M,D=e.weekdays,j=e.months,V=function(x,P,Q,J){return x&&(x[P]||x(r,h))||Q[P].slice(0,J)},U=function(x){return p.s(f%12||12,x,"0")},W=e.meridiem||function(x,P,Q){var J=x<12?"AM":"PM";return Q?J.toLowerCase():J},I={YY:String(this.$y).slice(-2),YYYY:this.$y,M:w+1,MM:p.s(w+1,2,"0"),MMM:V(e.monthsShort,w,j,3),MMMM:V(j,w),D:this.$D,DD:p.s(this.$D,2,"0"),d:String(this.$W),dd:V(e.weekdaysMin,this.$W,D,2),ddd:V(e.weekdaysShort,this.$W,D,3),dddd:D[this.$W],H:String(f),HH:p.s(f,2,"0"),h:U(1),hh:U(2),a:W(f,M,!0),A:W(f,M,!1),m:String(M),mm:p.s(M,2,"0"),s:String(this.$s),ss:p.s(this.$s,2,"0"),SSS:p.s(this.$ms,3,"0"),Z:s};return h.replace(_,function(x,P){return P||I[x]||s.replace(":","")})},o.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},o.diff=function(t,r,e){var h,s=p.p(r),f=b(t),M=(f.utcOffset()-this.utcOffset())*c,w=this-f,D=p.m(this,f);return D=(h={},h[C]=D/12,h[$]=D,h[F]=D/3,h[S]=(w-M)/6048e5,h[d]=(w-M)/864e5,h[L]=w/v,h[Y]=w/c,h[u]=w/l,h)[s]||w,e?D:p.a(D)},o.daysInMonth=function(){return this.endOf($).$D},o.$locale=function(){return H[this.$L]},o.locale=function(t,r){if(!t)return this.$L;var e=this.clone(),h=R(t,r,!0);return h&&(e.$L=h),e},o.clone=function(){return p.w(this.$d,this)},o.toDate=function(){return new Date(this.valueOf())},o.toJSON=function(){return this.isValid()?this.toISOString():null},o.toISOString=function(){return this.$d.toISOString()},o.toString=function(){return this.$d.toUTCString()},a}(),an=Z.prototype;return b.prototype=an,[["$ms",m],["$s",u],["$m",Y],["$H",L],["$W",d],["$M",$],["$y",C],["$D",T]].forEach(function(a){an[a[1]]=function(o){return this.$g(o,a[0],a[1])}}),b.extend=function(a,o){return a.$i||(a(o,Z,b),a.$i=!0),b},b.locale=R,b.isDayjs=E,b.unix=function(a){return b(1e3*a)},b.en=H[z],b.Ls=H,b.p={},b})})(fn);var ft=fn.exports;const G=un(ft);var dn={exports:{}};(function(n,i){(function(l,c){n.exports=c()})(cn,function(){return function(l,c,v){l=l||{};var m=c.prototype,u={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function Y(d,S,$,F){return m.fromToBase(d,S,$,F)}v.en.relativeTime=u,m.fromToBase=function(d,S,$,F,C){for(var T,g,y,_=$.$locale().relativeTime||u,A=l.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],X=A.length,O=0;O<X;O+=1){var z=A[O];z.d&&(T=F?v(d).diff($,z.d,!0):$.diff(d,z.d,!0));var H=(l.rounding||Math.round)(Math.abs(T));if(y=T>0,H<=z.r||!z.r){H<=1&&O>0&&(z=A[O-1]);var E=_[z.l];C&&(H=C(""+H)),g=typeof E=="string"?E.replace("%d",H):E(H,S,z.l,y);break}}if(S)return g;var R=y?_.future:_.past;return typeof R=="function"?R(g):R.replace("%s",g)},m.to=function(d,S){return Y(d,S,this,!0)},m.from=function(d,S){return Y(d,S,this)};var L=function(d){return d.$u?v.utc():v()};m.toNow=function(d){return this.to(L(this),d)},m.fromNow=function(d){return this.from(L(this),d)}}})})(dn);var dt=dn.exports;const pt=un(dt),mt={class:"title"},gt={class:"date"},wt=en({__name:"Layout",setup(n){var Y,L;G.extend(pt);const{Layout:i}=vn,{page:l,theme:c}=ln(),v=G(l.value.lastUpdated).format("YYYY-MM-DD HH:mm:ss")||"";console.log(l.value.filePath,c.value.pageList);const m=G().to(G(v||Date.now())),u=(L=(Y=l.value)==null?void 0:Y.filePath)==null?void 0:L.split("/").pop().split(".")[0];return console.log(l),(d,S)=>(Mn(),$n(q(i),null,{"doc-before":yn(()=>[sn("h1",mt,nn(q(u)),1),sn("div",gt,"🕒 更新日期: "+nn(q(v))+"("+nn(q(m))+")",1)]),_:1}))}});En(In,Wn,Bn,Un,nt,ot,tt,Gn,Kn,qn,it,ut,ct,Jn,ht,Zn,et,rt,at,vt,Qn,st,lt);const Mt={...vn,Layout:wt,enhanceApp({app:n,router:i,siteData:l}){n.component("VIcon",Nn)}};function pn(n){if(n.extends){const i=pn(n.extends);return{...i,...n,async enhanceApp(l){i.enhanceApp&&await i.enhanceApp(l),n.enhanceApp&&await n.enhanceApp(l)}}}return n}const B=pn(Mt),$t=en({name:"VitePressApp",setup(){const{site:n}=ln();return hn(()=>{bn(()=>{document.documentElement.lang=n.value.lang,document.documentElement.dir=n.value.dir})}),Sn(),_n(),Dn(),B.setup&&B.setup(),()=>K(B.Layout)}});async function yt(){const n=bt(),i=zt();i.provide(Ln,n);const l=Yn(n.route);return i.provide(Hn,l),i.component("Content",xn),i.component("ClientOnly",Cn),Object.defineProperties(i.config.globalProperties,{$frontmatter:{get(){return l.frontmatter.value}},$params:{get(){return l.page.value.params}}}),B.enhanceApp&&await B.enhanceApp({app:i,router:n,siteData:Tn}),{app:i,router:n,data:l}}function zt(){return On($t)}function bt(){let n=tn,i;return kn(l=>{let c=Vn(l);return n&&(i=c),(n||i===c)&&(c=c.replace(/\.js$/,".lean.js")),tn&&(n=!1),Fn(()=>import(c),[])},B.NotFound)}tn&&yt().then(({app:n,router:i,data:l})=>{i.go().then(()=>{zn(i.route,l.site),n.mount("#app")})});export{yt as createApp};
