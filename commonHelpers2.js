import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{f as D}from"./assets/vendor-14625883.js";const M=document.querySelector("#datetime-picker"),o=document.querySelector("[data-start]"),l=document.querySelector("[data-days]"),d=document.querySelector("[data-hours]"),p=document.querySelector("[data-minutes]"),m=document.querySelector("[data-seconds]");let c=null,r,t,n;const y=()=>{o.style.opacity=.5,o.style.pointerEvents="none"},T=()=>{o.style.pointerEvents="auto",o.style.opacity=1},$=()=>{l.textContent="00",d.textContent="00",p.textContent="00",m.textContent="00"};function x(e){const a=Math.floor(e/864e5),s=Math.floor(e%864e5/36e5),i=Math.floor(e%864e5%36e5/6e4),v=Math.floor(e%864e5%36e5%6e4/1e3);return{days:a,hours:s,minutes:i,seconds:v}}const h=({days:e,hours:f,minutes:S,seconds:C})=>{const g=e.toString().padStart(2,0),a=f.toString().padStart(2,0),s=S.toString().padStart(2,0),i=C.toString().padStart(2,0);return{proDays:g,proHours:a,proMinutes:s,proSeconds:i}};function b(){c=setInterval(()=>{n-=1e3,n<1e3&&clearInterval(c),r=x(n),t=h(r),l.textContent=`${t.proDays}`,d.textContent=`${t.proHours}`,p.textContent=`${t.proMinutes}`,m.textContent=`${t.proSeconds}`},1e3)}y();document.addEventListener("DOMContentLoaded",function(){iziToast.settings({timeout:1e4,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",onOpening:function(){console.log("callback abriu!")},onClosing:function(){console.log("callback fechou!")}})});const u={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){clearInterval(c),e[0].getTime()<=u.defaultDate.getTime()?(document.addEventListener("DOMContentLoaded",function(){iziToast.error({title:"Error",message:"Illegal operation"})}),$(),y()):(T(),n=+e[0].getTime()-+u.defaultDate.getTime(),r=x(n),t=h(r),l.textContent=`${t.proDays}`,d.textContent=`${t.proHours}`,p.textContent=`${t.proMinutes}`,m.textContent=`${t.proSeconds}`)}};D(M,u);o.addEventListener("click",()=>{y(),b()});
//# sourceMappingURL=commonHelpers2.js.map