import M from"./DWjheED1.js";import{d as L,a7 as z,ag as P,a8 as D,aG as k,r as F,B as K,o as N,bi as U,G as w,be as j,H as f,w as m,n as u,W as t,i as c,f as g,c as G,K as S,F as B,af as E,g as H,t as O,bf as W}from"./CKwEYCqY.js";import{_ as q,a as A,b as J,c as Q,d as R}from"./T6_fwr0E.js";import"./mSJSmdT2.js";const T={slots:{root:"relative group *:not-first:!my-0 *:not-first:!static my-5",list:"relative flex items-center gap-1 border border-(--ui-border-muted) bg-(--ui-bg) border-b-0 rounded-t-[calc(var(--ui-radius)*1.5)] overflow-x-auto p-2",indicator:"absolute left-0 inset-y-2 w-(--reka-tabs-indicator-size) translate-x-(--reka-tabs-indicator-position) transition-[translate,width] duration-200 bg-(--ui-bg-elevated) rounded-[calc(var(--ui-radius)*1.5)] shadow-xs",trigger:["relative inline-flex items-center gap-1.5 text-(--ui-text) data-[state=active]:text-(--ui-text-highlighted) hover:bg-(--ui-bg-elevated)/50 px-2 py-1.5 text-sm rounded-[calc(var(--ui-radius)*1.5)] disabled:cursor-not-allowed disabled:opacity-75 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-primary) focus:outline-none","transition-colors"],triggerIcon:"size-4 shrink-0",triggerLabel:"truncate"}},X=E;var $,I;const Y=k({extend:k(T),...((I=($=X.uiPro)==null?void 0:$.prose)==null?void 0:I.codeGroup)||{}}),Z=L({__name:"CodeGroup",props:z({defaultValue:{default:"0"},sync:{},class:{},ui:{}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(v){const s=v,p=P(),r=D(v,"modelValue"),n=Y(),b=F(1),y=K(()=>{var e,a;return b.value,((a=(e=p.default)==null?void 0:e.call(p))==null?void 0:a.flatMap(_).filter(Boolean))||[]});function _(e,a){var d,l,i,o;return typeof e.type=="symbol"?(d=e.children)==null?void 0:d.map(_):{label:((l=e.props)==null?void 0:l.filename)||((i=e.props)==null?void 0:i.label)||`${a}`,icon:(o=e.props)==null?void 0:o.icon,component:e}}return N(()=>{if(s.sync){const e=`code-group-${s.sync}`,a=U(e,()=>localStorage.getItem(e));w(a,()=>{a.value&&(r.value=a.value)},{immediate:!0}),w(r,()=>{r.value&&(a.value=r.value,localStorage.setItem(e,r.value))})}}),j(()=>b.value++),(e,a)=>{var d;return c(),f(t(J),{modelValue:r.value,"onUpdate:modelValue":a[0]||(a[0]=l=>r.value=l),"default-value":e.defaultValue,"unmount-on-hide":!1,class:u(t(n).root({class:[s.class,(d=s.ui)==null?void 0:d.root]}))},{default:m(()=>{var l;return[g(t(A),{class:u(t(n).list({class:(l=s.ui)==null?void 0:l.list}))},{default:m(()=>{var i;return[g(t(q),{class:u(t(n).indicator({class:(i=s.ui)==null?void 0:i.indicator}))},null,8,["class"]),(c(!0),G(B,null,S(y.value,(o,h)=>{var x;return c(),f(t(Q),{key:h,value:String(h),class:u(t(n).trigger({class:(x=s.ui)==null?void 0:x.trigger}))},{default:m(()=>{var C,V;return[g(M,{icon:o.icon,filename:o.label,class:u(t(n).triggerIcon({class:(C=s.ui)==null?void 0:C.triggerIcon}))},null,8,["icon","filename","class"]),H("span",{class:u(t(n).triggerLabel({class:(V=s.ui)==null?void 0:V.triggerLabel}))},O(o.label),3)]}),_:2},1032,["value","class"])}),128))]}),_:1},8,["class"]),(c(!0),G(B,null,S(y.value,(i,o)=>(c(),f(t(R),{key:o,value:String(o),"as-child":""},{default:m(()=>[(c(),f(W(i.component),{"hide-header":"",tabindex:"-1"}))]),_:2},1032,["value"]))),128))]}),_:1},8,["modelValue","default-value","class"])}}}),oe=Object.assign(Z,{__name:"ProseCodeGroup"});export{oe as default};
