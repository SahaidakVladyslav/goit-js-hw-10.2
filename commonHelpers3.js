import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as n}from"./assets/vendor-77e16229.js";const f=document.querySelector('[name="delay"]'),v=document.querySelector('[name="step"]'),g=document.querySelector('[name="amount"]'),p=document.querySelector(".form"),c=document.querySelector('button[type="submit"]');let a=null,o=0,t=0;n.settings({timeout:2e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"});const y=()=>{c.style.opacity=.5,c.style.pointerEvents="none"},E=()=>{c.style.pointerEvents="auto",c.style.opacity=1};function S(l,e,r){return new Promise((u,s)=>{t=e;function i(){o!==0&&(a=setInterval(()=>{const m=Math.random()>.3;t=+t+ +r,m?(n.success({title:"Success",message:`виклик зробився за такий час ${t} ms`}),console.log(`виклик зробився за такий час ${t}`)):(n.error({title:"Error",message:`виклик зробився за такий час ${t} ms`}),console.log(`виклик зробився за такий час ${t}`)),o+=1,o>=l&&(o=0,p.reset(),E(),clearInterval(a))},r))}function d(){o===0&&setTimeout(()=>{const m=Math.random()>.3;console.log(1),o+=1,m?(n.success({title:"Success",message:`виклик зробився за такий час ${e} ms`}),console.log(`виклик зробився за такий час ${e} ms`),u(i())):(n.error({title:"Error",message:`виклик зробився за такий час ${e} ms`}),console.log(`виклик зробився за такий час ${e} ms`),s(i()))},e)}d()})}p.addEventListener("submit",l=>{l.preventDefault(),y();const e=g.value,r=f.value,u=v.value;S(e,r,u).then(s=>{console.log("Promise resolved:",s)}).catch(s=>{console.log("Promise rejected:",s)})});
//# sourceMappingURL=commonHelpers3.js.map
