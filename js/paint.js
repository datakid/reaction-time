'use strict';
(()=>{
const A=document.getElementById('app'),D=Object.getOwnPropertyDescriptor(Element.prototype,'innerHTML'),L=EventTarget.prototype.addEventListener;
EventTarget.prototype.addEventListener=function(...a){const o=this===undefined?window:this;if(o.nodeType==1)o.__l=1;return L.apply(o,a)};
const kf=n=>n.nodeType==1?(n.id||n.getAttribute('data-j')||null):null;
const sync=(a,b)=>{for(const n of [...a.attributes])if(!b.hasAttribute(n.name))a.removeAttribute(n.name);for(const n of b.attributes)if(a.getAttribute(n.name)!==n.value)a.setAttribute(n.name,n.value)};
const morph=(a,b)=>{
const yk=[...b.childNodes];
yk.forEach((q,i)=>{
let p=a.childNodes[i];const k=kf(q);
if(k!=null){const m=[...a.childNodes].slice(i).find(n=>kf(n)===k);if(m){if(m!==p)a.insertBefore(m,p||null);p=m}else{a.insertBefore(q,p||null);return}}
if(!p){a.appendChild(q);return}
if(p.nodeType!=q.nodeType||(p.nodeType==1&&(p.tagName!=q.tagName||p.__l||kf(p)!==kf(q)))){a.replaceChild(q,p);return}
if(p.nodeType!=1){if(p.nodeValue!==q.nodeValue)p.nodeValue=q.nodeValue;return}
sync(p,q);
if(p.tagName=='TEXTAREA'){if(document.activeElement!==p&&p.value!==q.textContent)p.value=q.textContent}else morph(p,q)
});
while(a.childNodes.length>yk.length)a.removeChild(a.lastChild)
};
const kk=f=>{const w=f.firstElementChild,h=f.querySelector('.hd,h1');return(h?h.textContent:'')+'|'+(w?[...w.children].slice(0,3).map(e=>e.tagName+'.'+e.className).join(','):'')};
Object.defineProperty(A,'innerHTML',{configurable:true,get(){return D.get.call(A)},set(h){
const t=document.createElement('template');t.innerHTML=h;const f=t.content,k=kk(f);
if(A._k===k&&A.firstElementChild)morph(A,f);else{A._k=k;D.set.call(A,h)}
}});
})();
