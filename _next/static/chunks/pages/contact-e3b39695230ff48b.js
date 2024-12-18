(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[364],{9260:(e,t,s)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return s(3395)}])},3395:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>y});var a=s(4848),r=s(6540),l=s(5325),n=s(9748);let i=r.forwardRef((e,t)=>{let{className:s,type:r,...l}=e;return(0,a.jsx)("input",{type:r,className:function(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return t.filter(Boolean).join(" ")}("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",s),ref:t,...l})});i.displayName="Input";let o=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("textarea",{className:function(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return t.filter(Boolean).join(" ")}("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",s),ref:t,...r})});o.displayName="Textarea";let d=0,c=new Map,u=e=>{if(c.has(e))return;let t=setTimeout(()=>{c.delete(e),h({type:"REMOVE_TOAST",toastId:e})},1e6);c.set(e,t)},m=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:s}=t;return s?u(s):e.toasts.forEach(e=>{u(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},f=[],p={toasts:[]};function h(e){p=m(p,e),f.forEach(e=>{e(p)})}function g(e){let{...t}=e,s=(d=(d+1)%Number.MAX_VALUE).toString(),a=()=>h({type:"DISMISS_TOAST",toastId:s});return h({type:"ADD_TOAST",toast:{...t,id:s,open:!0,onOpenChange:e=>{e||a()}}}),{id:s,dismiss:a,update:e=>h({type:"UPDATE_TOAST",toast:{...e,id:s}})}}let x=(0,s(30).A)("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);function y(){let{toast:e}=function(){let[e,t]=r.useState(p);return r.useEffect(()=>(f.push(t),()=>{let e=f.indexOf(t);e>-1&&f.splice(e,1)}),[e]),{...e,toast:g,dismiss:e=>h({type:"DISMISS_TOAST",toastId:e})}}(),[t,s]=(0,r.useState)(!1),[d,c]=(0,r.useState)({name:"",email:"",message:""}),u=async t=>{t.preventDefault(),s(!0);try{if((await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...d,subject:"New Metaswap Dev Lead"})})).ok)e({title:"Success!",description:"Your message has been sent successfully.",variant:"default"}),c({name:"",email:"",message:""});else throw Error("Failed to send message")}catch(t){e({title:"Error",description:"Failed to send message. Please try again.",variant:"default"})}finally{s(!1)}};return(0,a.jsx)(l.A,{title:"Contact - Metaswap",children:(0,a.jsxs)("div",{className:"mt-40 flex w-full flex-col items-center space-y-8",children:[(0,a.jsxs)("h1",{className:"text-4xl font-semibold tracking-tight xl:text-6xl",children:["Get in ",(0,a.jsx)("span",{className:"text-gradient clash-grotesk",children:"Touch"})]}),(0,a.jsx)("p",{className:"max-w-lg text-center text-muted-foreground",children:"We are a full-stack development agency ready to bring your projects to life. Let's build something amazing together."}),(0,a.jsxs)("form",{onSubmit:u,className:"w-full max-w-lg space-y-6",children:[(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)("label",{htmlFor:"name",className:"text-sm font-medium",children:"Name"}),(0,a.jsx)(i,{id:"name",required:!0,value:d.name,onChange:e=>c({...d,name:e.target.value})})]}),(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)("label",{htmlFor:"email",className:"text-sm font-medium",children:"Email"}),(0,a.jsx)(i,{id:"email",type:"email",required:!0,value:d.email,onChange:e=>c({...d,email:e.target.value})})]}),(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)("label",{htmlFor:"message",className:"text-sm font-medium",children:"Message"}),(0,a.jsx)(o,{id:"message",required:!0,rows:6,value:d.message,onChange:e=>c({...d,message:e.target.value})})]}),(0,a.jsx)(n.$,{type:"submit",className:"w-full",disabled:t,children:t?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(x,{className:"mr-2 h-4 w-4 animate-spin"}),"Sending..."]}):"Send Message"})]})]})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[49,325,636,593,792],()=>t(9260)),_N_E=e.O()}]);