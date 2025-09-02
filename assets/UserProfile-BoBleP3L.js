import{B as F,y as Y,R as J,A as N,D as Q,a5 as W,ab as _,X as ee,ac as te,ad as R,ae as ne,C as oe,Z as B,af as ie,m as E,L as re,p as C,o as s,w as f,k as u,T as se,x as y,M as ae,l as D,c as m,U as w,ag as j,ah as z,a as l,F as P,N as H,n as $,t as O,d as le,P as ce,r as L,ai as ue,f as de,i as pe,u as i,e as b,b as K,q as fe}from"./index-BQBBGVP6.js";import{O as S,C as me}from"./index-Bm-U0k4B.js";import{F as ve}from"./index-B7oFWkkv.js";import{u as he}from"./http-AThVvp92.js";import{s as A}from"./index-B9FTO_uF.js";import{u as be}from"./auth-00alonDe.js";import{s as ye}from"./index-dmjvKU_d.js";import{u as ge,e as ke}from"./emitter-CMG-AkMO.js";import{s as Le}from"./index-VUYHbI9n.js";import{_ as we}from"./_plugin-vue_export-helper-DlAUqK2U.js";var Ce=({dt:e})=>`
.p-popover {
    margin-block-start: ${e("popover.gutter")};
    background: ${e("popover.background")};
    color: ${e("popover.color")};
    border: 1px solid ${e("popover.border.color")};
    border-radius: ${e("popover.border.radius")};
    box-shadow: ${e("popover.shadow")};
}

.p-popover-content {
    padding: ${e("popover.content.padding")};
}

.p-popover-flipped {
    margin-block-start: calc(${e("popover.gutter")} * -1);
    margin-block-end: ${e("popover.gutter")};
}

.p-popover-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-popover-leave-to {
    opacity: 0;
}

.p-popover-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-popover-leave-active {
    transition: opacity 0.1s linear;
}

.p-popover:after,
.p-popover:before {
    bottom: 100%;
    left: calc(${e("popover.arrow.offset")} + ${e("popover.arrow.left")});
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
}

.p-popover:after {
    border-width: calc(${e("popover.gutter")} - 2px);
    margin-left: calc(-1 * (${e("popover.gutter")} - 2px));
    border-style: solid;
    border-color: transparent;
    border-bottom-color: ${e("popover.background")};
}

.p-popover:before {
    border-width: ${e("popover.gutter")};
    margin-left: calc(-1 * ${e("popover.gutter")});
    border-style: solid;
    border-color: transparent;
    border-bottom-color: ${e("popover.border.color")};
}

.p-popover-flipped:after,
.p-popover-flipped:before {
    bottom: auto;
    top: 100%;
}

.p-popover.p-popover-flipped:after {
    border-bottom-color: transparent;
    border-top-color: ${e("popover.background")};
}

.p-popover.p-popover-flipped:before {
    border-bottom-color: transparent;
    border-top-color: ${e("popover.border.color")};
}
`,Ee={root:"p-popover p-component",content:"p-popover-content"},je=F.extend({name:"popover",style:Ce,classes:Ee}),Se={name:"BasePopover",extends:N,props:{dismissable:{type:Boolean,default:!0},appendTo:{type:[String,Object],default:"body"},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},breakpoints:{type:Object,default:null},closeOnEscape:{type:Boolean,default:!0}},style:je,provide:function(){return{$pcPopover:this,$parentInstance:this}}},Z={name:"Popover",extends:Se,inheritAttrs:!1,emits:["show","hide"],data:function(){return{visible:!1}},watch:{dismissable:{immediate:!0,handler:function(t){t?this.bindOutsideClickListener():this.unbindOutsideClickListener()}}},selfClick:!1,target:null,eventTarget:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,styleElement:null,overlayEventListener:null,documentKeydownListener:null,beforeUnmount:function(){this.dismissable&&this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.destroyStyle(),this.unbindResizeListener(),this.target=null,this.container&&this.autoZIndex&&B.clear(this.container),this.overlayEventListener&&(S.off("overlay-click",this.overlayEventListener),this.overlayEventListener=null),this.container=null},mounted:function(){this.breakpoints&&this.createStyle()},methods:{toggle:function(t,o){this.visible?this.hide():this.show(t,o)},show:function(t,o){this.visible=!0,this.eventTarget=t.currentTarget,this.target=o||t.currentTarget},hide:function(){this.visible=!1},onContentClick:function(){this.selfClick=!0},onEnter:function(t){var o=this;ie(t,{position:"absolute",top:"0",left:"0"}),this.alignOverlay(),this.dismissable&&this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.autoZIndex&&B.set("overlay",t,this.baseZIndex+this.$primevue.config.zIndex.overlay),this.overlayEventListener=function(d){o.container.contains(d.target)&&(o.selfClick=!0)},this.focus(),S.on("overlay-click",this.overlayEventListener),this.$emit("show"),this.closeOnEscape&&this.bindDocumentKeyDownListener()},onLeave:function(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.unbindDocumentKeyDownListener(),S.off("overlay-click",this.overlayEventListener),this.overlayEventListener=null,this.$emit("hide")},onAfterLeave:function(t){this.autoZIndex&&B.clear(t)},alignOverlay:function(){te(this.container,this.target,!1);var t=R(this.container),o=R(this.target),d=0;t.left<o.left&&(d=o.left-t.left),this.container.style.setProperty(ne("popover.arrow.left").name,"".concat(d,"px")),t.top<o.top&&(this.container.setAttribute("data-p-popover-flipped","true"),!this.isUnstyled&&oe(this.container,"p-popover-flipped"))},onContentKeydown:function(t){t.code==="Escape"&&this.closeOnEscape&&(this.hide(),ee(this.target))},onButtonKeydown:function(t){switch(t.code){case"ArrowDown":case"ArrowUp":case"ArrowLeft":case"ArrowRight":t.preventDefault()}},focus:function(){var t=this.container.querySelector("[autofocus]");t&&t.focus()},onKeyDown:function(t){t.code==="Escape"&&this.closeOnEscape&&(this.visible=!1)},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},bindOutsideClickListener:function(){var t=this;!this.outsideClickListener&&_()&&(this.outsideClickListener=function(o){t.visible&&!t.selfClick&&!t.isTargetClicked(o)&&(t.visible=!1),t.selfClick=!1},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null,this.selfClick=!1)},bindScrollListener:function(){var t=this;this.scrollHandler||(this.scrollHandler=new me(this.target,function(){t.visible&&(t.visible=!1)})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var t=this;this.resizeListener||(this.resizeListener=function(){t.visible&&!W()&&(t.visible=!1)},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isTargetClicked:function(t){return this.eventTarget&&(this.eventTarget===t.target||this.eventTarget.contains(t.target))},containerRef:function(t){this.container=t},createStyle:function(){if(!this.styleElement&&!this.isUnstyled){var t;this.styleElement=document.createElement("style"),this.styleElement.type="text/css",Q(this.styleElement,"nonce",(t=this.$primevue)===null||t===void 0||(t=t.config)===null||t===void 0||(t=t.csp)===null||t===void 0?void 0:t.nonce),document.head.appendChild(this.styleElement);var o="";for(var d in this.breakpoints)o+=`
                        @media screen and (max-width: `.concat(d,`) {
                            .p-popover[`).concat(this.$attrSelector,`] {
                                width: `).concat(this.breakpoints[d],` !important;
                            }
                        }
                    `);this.styleElement.innerHTML=o}},destroyStyle:function(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},onOverlayClick:function(t){S.emit("overlay-click",{originalEvent:t,target:this.target})}},directives:{focustrap:ve,ripple:J},components:{Portal:Y}},Oe=["aria-modal"];function Ae(e,t,o,d,r,n){var v=E("Portal"),k=re("focustrap");return s(),C(v,{appendTo:e.appendTo},{default:f(function(){return[u(se,y({name:"p-popover",onEnter:n.onEnter,onLeave:n.onLeave,onAfterLeave:n.onAfterLeave},e.ptm("transition")),{default:f(function(){return[r.visible?ae((s(),m("div",y({key:0,ref:n.containerRef,role:"dialog","aria-modal":r.visible,onClick:t[3]||(t[3]=function(){return n.onOverlayClick&&n.onOverlayClick.apply(n,arguments)}),class:e.cx("root")},e.ptmi("root")),[e.$slots.container?w(e.$slots,"container",{key:0,closeCallback:n.hide,keydownCallback:function(h){return n.onButtonKeydown(h)}}):(s(),m("div",y({key:1,class:e.cx("content"),onClick:t[0]||(t[0]=function(){return n.onContentClick&&n.onContentClick.apply(n,arguments)}),onMousedown:t[1]||(t[1]=function(){return n.onContentClick&&n.onContentClick.apply(n,arguments)}),onKeydown:t[2]||(t[2]=function(){return n.onContentKeydown&&n.onContentKeydown.apply(n,arguments)})},e.ptm("content")),[w(e.$slots,"default")],16))],16,Oe)),[[k]]):D("",!0)]}),_:3},16,["onEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo"])}Z.render=Ae;var De=({dt:e})=>`
.p-confirmdialog .p-dialog-content {
    display: flex;
    align-items: center;
    gap:  ${e("confirmdialog.content.gap")};
}

.p-confirmdialog-icon {
    color: ${e("confirmdialog.icon.color")};
    font-size: ${e("confirmdialog.icon.size")};
    width: ${e("confirmdialog.icon.size")};
    height: ${e("confirmdialog.icon.size")};
}
`,Te={root:"p-confirmdialog",icon:"p-confirmdialog-icon",message:"p-confirmdialog-message",pcRejectButton:"p-confirmdialog-reject-button",pcAcceptButton:"p-confirmdialog-accept-button"},xe=F.extend({name:"confirmdialog",style:De,classes:Te}),Be={name:"BaseConfirmDialog",extends:N,props:{group:String,breakpoints:{type:Object,default:null},draggable:{type:Boolean,default:!0}},style:xe,provide:function(){return{$pcConfirmDialog:this,$parentInstance:this}}},V={name:"ConfirmDialog",extends:Be,confirmListener:null,closeListener:null,data:function(){return{visible:!1,confirmation:null}},mounted:function(){var t=this;this.confirmListener=function(o){o&&o.group===t.group&&(t.confirmation=o,t.confirmation.onShow&&t.confirmation.onShow(),t.visible=!0)},this.closeListener=function(){t.visible=!1,t.confirmation=null},j.on("confirm",this.confirmListener),j.on("close",this.closeListener)},beforeUnmount:function(){j.off("confirm",this.confirmListener),j.off("close",this.closeListener)},methods:{accept:function(){this.confirmation.accept&&this.confirmation.accept(),this.visible=!1},reject:function(){this.confirmation.reject&&this.confirmation.reject(),this.visible=!1},onHide:function(){this.confirmation.onHide&&this.confirmation.onHide(),this.visible=!1}},computed:{appendTo:function(){return this.confirmation?this.confirmation.appendTo:"body"},target:function(){return this.confirmation?this.confirmation.target:null},modal:function(){return this.confirmation?this.confirmation.modal==null?!0:this.confirmation.modal:!0},header:function(){return this.confirmation?this.confirmation.header:null},message:function(){return this.confirmation?this.confirmation.message:null},blockScroll:function(){return this.confirmation?this.confirmation.blockScroll:!0},position:function(){return this.confirmation?this.confirmation.position:null},acceptLabel:function(){if(this.confirmation){var t,o=this.confirmation;return o.acceptLabel||((t=o.acceptProps)===null||t===void 0?void 0:t.label)||this.$primevue.config.locale.accept}return this.$primevue.config.locale.accept},rejectLabel:function(){if(this.confirmation){var t,o=this.confirmation;return o.rejectLabel||((t=o.rejectProps)===null||t===void 0?void 0:t.label)||this.$primevue.config.locale.reject}return this.$primevue.config.locale.reject},acceptIcon:function(){var t;return this.confirmation?this.confirmation.acceptIcon:(t=this.confirmation)!==null&&t!==void 0&&t.acceptProps?this.confirmation.acceptProps.icon:null},rejectIcon:function(){var t;return this.confirmation?this.confirmation.rejectIcon:(t=this.confirmation)!==null&&t!==void 0&&t.rejectProps?this.confirmation.rejectProps.icon:null},autoFocusAccept:function(){return this.confirmation.defaultFocus===void 0||this.confirmation.defaultFocus==="accept"},autoFocusReject:function(){return this.confirmation.defaultFocus==="reject"},closeOnEscape:function(){return this.confirmation?this.confirmation.closeOnEscape:!0}},components:{Dialog:ye,Button:A}};function ze(e,t,o,d,r,n){var v=E("Button"),k=E("Dialog");return s(),C(k,{visible:r.visible,"onUpdate:visible":[t[2]||(t[2]=function(c){return r.visible=c}),n.onHide],role:"alertdialog",class:$(e.cx("root")),modal:n.modal,header:n.header,blockScroll:n.blockScroll,appendTo:n.appendTo,position:n.position,breakpoints:e.breakpoints,closeOnEscape:n.closeOnEscape,draggable:e.draggable,pt:e.pt,unstyled:e.unstyled},z({default:f(function(){return[e.$slots.container?D("",!0):(s(),m(P,{key:0},[e.$slots.message?(s(),C(H(e.$slots.message),{key:1,message:r.confirmation},null,8,["message"])):(s(),m(P,{key:0},[w(e.$slots,"icon",{},function(){return[e.$slots.icon?(s(),C(H(e.$slots.icon),{key:0,class:$(e.cx("icon"))},null,8,["class"])):r.confirmation.icon?(s(),m("span",y({key:1,class:[r.confirmation.icon,e.cx("icon")]},e.ptm("icon")),null,16)):D("",!0)]}),l("span",y({class:e.cx("message")},e.ptm("message")),O(n.message),17)],64))],64))]}),_:2},[e.$slots.container?{name:"container",fn:f(function(c){return[w(e.$slots,"container",{message:r.confirmation,closeCallback:c.onclose,acceptCallback:n.accept,rejectCallback:n.reject})]}),key:"0"}:void 0,e.$slots.container?void 0:{name:"footer",fn:f(function(){var c;return[u(v,y({class:[e.cx("pcRejectButton"),r.confirmation.rejectClass],autofocus:n.autoFocusReject,unstyled:e.unstyled,text:((c=r.confirmation.rejectProps)===null||c===void 0?void 0:c.text)||!1,onClick:t[0]||(t[0]=function(h){return n.reject()})},r.confirmation.rejectProps,{label:n.rejectLabel,pt:e.ptm("pcRejectButton")}),z({_:2},[n.rejectIcon||e.$slots.rejecticon?{name:"icon",fn:f(function(h){return[w(e.$slots,"rejecticon",{},function(){return[l("span",y({class:[n.rejectIcon,h.class]},e.ptm("pcRejectButton").icon,{"data-pc-section":"rejectbuttonicon"}),null,16)]})]}),key:"0"}:void 0]),1040,["class","autofocus","unstyled","text","label","pt"]),u(v,y({label:n.acceptLabel,class:[e.cx("pcAcceptButton"),r.confirmation.acceptClass],autofocus:n.autoFocusAccept,unstyled:e.unstyled,onClick:t[1]||(t[1]=function(h){return n.accept()})},r.confirmation.acceptProps,{pt:e.ptm("pcAcceptButton")}),z({_:2},[n.acceptIcon||e.$slots.accepticon?{name:"icon",fn:f(function(h){return[w(e.$slots,"accepticon",{},function(){return[l("span",y({class:[n.acceptIcon,h.class]},e.ptm("pcAcceptButton").icon,{"data-pc-section":"acceptbuttonicon"}),null,16)]})]}),key:"0"}:void 0]),1040,["label","class","autofocus","unstyled","pt"])]}),key:"1"}]),1032,["visible","class","modal","header","blockScroll","appendTo","position","breakpoints","closeOnEscape","draggable","onUpdate:visible","pt","unstyled"])}V.render=ze;const Ke={class:"user-profile"},Pe=["src"],Ie=["src"],Ue={style:{"font-size":"12px"}},Re={class:"popover-content"},He={style:{display:"flex","align-items":"center","justify-content":"center"}},$e=["src"],Fe=["src"],Ne={style:{margin:"0",padding:"0","font-size":"20px","text-align":"center"}},Ze={style:{margin:"0",padding:"0","text-align":"center"}},Ve={style:{display:"flex","flex-flow":"row nowrap","justify-content":"center"}},qe={style:{display:"flex","flex-flow":"row nowrap","justify-content":"center",gap:"0.4rem"}},Me=le({__name:"UserProfile",setup(e){const t=ce(),o=L(localStorage.getItem("authToken")),d=L(o.value?ue(o.value):null),r=be(),n=L(!1),v=L(""),k=L(""),c=L(null),h=de(),I=fe(),g=ge(),U=async()=>{localStorage.getItem("userId"),await he().httpGet("/users/profile").then(p=>{p.status==200&&(v.value=p.profile.name,k.value=p.profile.email,g.setAvatar(p.profile.avatar))}).catch(p=>{console.log(p)})};pe(async()=>{o&&(U(),ke.on("profileUpdated",()=>{U()}))});const q=p=>{c.value.toggle(p)},M=()=>{t.require({message:`${v.value.split(" ")[0]}, kamu yakin ingin keluar?`,header:`${b.appName}`,icon:"pi pi-exclamation-triangle",rejectProps:{label:"Batal",severity:"secondary",outlined:!0},acceptProps:{label:"Keluar"},accept:async()=>{await r.clearAuth(),h.add({severity:"info",summary:"Keluar",detail:"Berhasil keluar!",life:3e3}),window.location.href="/"},reject:()=>{}})},G=p=>{I.push("/profile"),c.value.toggle(p)};return(p,a)=>{const T=E("fasicon"),X=E("Toast");return s(),m(P,null,[l("div",null,[l("div",Ke,[l("div",{style:{cursor:"pointer",display:"flex","flex-flow":"row nowrap","align-items":"center",gap:"0.4rem","border-radius":"100px","padding-right":"1rem"},onClick:q},[i(g).getAvatar!=null?(s(),m("img",{key:0,style:{width:"30px",height:"30px","border-radius":"100px","object-fit":"cover"},src:i(b).baseUserContent+i(g).getAvatar?i(b).baseUserContent+i(g).getAvatar:i(b).defaultAvatar,alt:"User Profile",class:"user-image",onClick:a[0]||(a[0]=x=>n.value=!n.value)},null,8,Pe)):(s(),m("img",{key:1,style:{width:"30px",height:"30px","border-radius":"100px"},src:i(b).defaultAvatar,alt:"User Profile",class:"user-image",onClick:a[1]||(a[1]=x=>n.value=!n.value)},null,8,Ie)),l("span",Ue,[l("b",null,O(v.value),1)])]),u(i(Z),{ref_key:"op",ref:c},{default:f(()=>[l("div",Re,[l("div",He,[i(g).getAvatar!=null?(s(),m("img",{key:0,src:i(b).baseUserContent+i(g).getAvatar?i(b).baseUserContent+i(g).getAvatar:i(b).defaultAvatar,alt:"User Profile",style:{width:"60px",height:"60px","border-radius":"100px"}},null,8,$e)):(s(),m("img",{key:1,src:i(b).defaultAvatar,alt:"User Profile",style:{width:"60px",height:"60px","border-radius":"100px"}},null,8,Fe))]),l("h3",Ne,"Halo, "+O(v.value)+"!",1),l("p",Ze,O(k.value),1),l("div",Ve,[d.value.role=="webmaster"?(s(),C(i(A),{key:0,style:{width:"fit-content","font-size":"12px"},onClick:a[2]||(a[2]=x=>i(I).push("/sysadmin/home"))},{default:f(()=>[u(T,{icon:"dashboard"}),a[4]||(a[4]=K(" Dasbor Admin"))]),_:1})):D("",!0)]),u(i(Le),{style:{margin:"0",padding:"5px"}}),l("div",qe,[u(i(A),{style:{"font-size":"12px"},onClick:G},{default:f(()=>[u(T,{icon:"user"}),a[5]||(a[5]=K(" Profil"))]),_:1}),u(i(A),{style:{"font-size":"12px"},onClick:a[3]||(a[3]=x=>M()),class:"p-button-outlined"},{default:f(()=>[u(T,{icon:"sign-out"}),a[6]||(a[6]=K(" Keluar"))]),_:1})])])]),_:1},512)])]),u(X),u(i(V))],64)}}}),ot=we(Me,[["__scopeId","data-v-4de96666"]]);export{ot as U};
