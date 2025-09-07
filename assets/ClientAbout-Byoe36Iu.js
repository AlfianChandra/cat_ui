import{B as et,v as _,c,o,a as p,x as s,y as nt,R as V,z as it,A as C,Z as O,C as U,D as at,E as rt,G as ot,H as g,I as k,J as G,K,L as A,l as d,M as y,p as m,N as f,F as Z,O as q,m as P,k as j,w as T,T as lt,d as st,r as ut,u as ct,t as dt}from"./index-ejyJlZ5F.js";import{F as ht,u as E,b as mt}from"./index-BecHZODx.js";import{s as Y}from"./index-yr1VNxvS.js";import{s as pt}from"./index-6T4hCFA5.js";var bt=({dt:t})=>`
.p-galleria {
    overflow: hidden;
    border-style: solid;
    border-width: ${t("galleria.border.width")};
    border-color: ${t("galleria.border.color")};
    border-radius: ${t("galleria.border.radius")};
}

.p-galleria-content {
    display: flex;
    flex-direction: column;
}

.p-galleria-items-container {
    display: flex;
    flex-direction: column;
    position: relative;
}

.p-galleria-items {
    position: relative;
    display: flex;
    height: 100%;
}

.p-galleria-nav-button {
    position: absolute !important;
    top: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background: ${t("galleria.nav.button.background")};
    color: ${t("galleria.nav.button.color")};
    width: ${t("galleria.nav.button.size")};
    height: ${t("galleria.nav.button.size")};
    transition: background ${t("galleria.transition.duration")}, color ${t("galleria.transition.duration")}, outline-color ${t("galleria.transition.duration")}, box-shadow ${t("galleria.transition.duration")};
    margin: calc(-1 * calc(${t("galleria.nav.button.size")}) / 2) ${t("galleria.nav.button.gutter")} 0 ${t("galleria.nav.button.gutter")};
    padding: 0;
    user-select: none;
    border: 0 none;
    cursor: pointer;
    outline-color: transparent;
}

.p-galleria-nav-button:not(.p-disabled):hover {
    background: ${t("galleria.nav.button.hover.background")};
    color: ${t("galleria.nav.button.hover.color")};
}

.p-galleria-nav-button:not(.p-disabled):focus-visible {
    box-shadow: ${t("galleria.nav.button.focus.ring.shadow")};
    outline: ${t("galleria.nav.button.focus.ring.width")} ${t("galleria.nav.button.focus.ring.style")} ${t("galleria.nav.button.focus.ring.color")};
    outline-offset: ${t("galleria.nav.button.focus.ring.offset")};
}

.p-galleria-next-icon,
.p-galleria-prev-icon {
    font-size: ${t("galleria.nav.icon.size")};
    width: ${t("galleria.nav.icon.size")};
    height: ${t("galleria.nav.icon.size")};
}

.p-galleria-prev-button {
    border-radius: ${t("galleria.nav.button.prev.border.radius")};
    left: 0;
}

.p-galleria-next-button {
    border-radius: ${t("galleria.nav.button.next.border.radius")};
    right: 0;
}

.p-galleria-prev-button:dir(rtl) {
    left: auto;
    right: 0;
    transform: rotate(180deg);
}

.p-galleria-next-button:dir(rtl) {
    right: auto;
    left: 0;
    transform: rotate(180deg);
}

.p-galleria-item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}

.p-galleria-hover-navigators .p-galleria-nav-button {
    pointer-events: none;
    opacity: 0;
    transition: opacity ${t("galleria.transition.duration")} ease-in-out;
}

.p-galleria-hover-navigators .p-galleria-items-container:hover .p-galleria-nav-button {
    pointer-events: all;
    opacity: 1;
}

.p-galleria-hover-navigators .p-galleria-items-container:hover .p-galleria-nav-button.p-disabled {
    pointer-events: none;
}

.p-galleria-caption {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: ${t("galleria.caption.background")};
    color: ${t("galleria.caption.color")};
    padding: ${t("galleria.caption.padding")};
}

.p-galleria-thumbnails {
    display: flex;
    flex-direction: column;
    overflow: auto;
    flex-shrink: 0;
}

.p-galleria-thumbnail-nav-button {
    align-self: center;
    flex: 0 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    margin: 0 ${t("galleria.thumbnail.nav.button.gutter")};
    padding: 0;
    border: none;
    user-select: none;
    cursor: pointer;
    background: transparent;
    color: ${t("galleria.thumbnail.nav.button.color")};
    width: ${t("galleria.thumbnail.nav.button.size")};
    height: ${t("galleria.thumbnail.nav.button.size")};
    transition: background ${t("galleria.transition.duration")}, color ${t("galleria.transition.duration")}, outline-color ${t("galleria.transition.duration")};
    outline-color: transparent;
    border-radius: ${t("galleria.thumbnail.nav.button.border.radius")};
}

.p-galleria-thumbnail-nav-button:hover {
    background: ${t("galleria.thumbnail.nav.button.hover.background")};
    color: ${t("galleria.thumbnail.nav.button.hover.color")};
}

.p-galleria-thumbnail-nav-button:focus-visible {
    box-shadow: ${t("galleria.thumbnail.nav.button.focus.ring.shadow")};
    outline: ${t("galleria.thumbnail.nav.button.focus.ring.width")} ${t("galleria.thumbnail.nav.button.focus.ring.style")} ${t("galleria.thumbnail.nav.button.focus.ring.color")};
    outline-offset: ${t("galleria.thumbnail.nav.button.focus.ring.offset")};
}

.p-galleria-thumbnail-nav-button .p-galleria-thumbnail-next-icon,
.p-galleria-thumbnail-nav-button .p-galleria-thumbnail-prev-icon {
    font-size: ${t("galleria.thumbnail.nav.button.icon.size")};
    width: ${t("galleria.thumbnail.nav.button.icon.size")};
    height: ${t("galleria.thumbnail.nav.button.icon.size")};
}

.p-galleria-thumbnails-content {
    display: flex;
    flex-direction: row;
    background: ${t("galleria.thumbnails.content.background")};
    padding: ${t("galleria.thumbnails.content.padding")};
}

.p-galleria-thumbnails-viewport {
    overflow: hidden;
    width: 100%;
}

.p-galleria:not(.p-galleria-thumbnails-right):not(.p-galleria-thumbnails-left) .p-galleria-thumbnail-prev-button:dir(rtl),
.p-galleria:not(.p-galleria-thumbnails-right):not(.p-galleria-thumbnails-left) .p-galleria-thumbnail-next-button:dir(rtl) {
    transform: rotate(180deg);
}

.p-galleria-thumbnail-items {
    display: flex;
}

.p-galleria-thumbnail-item {
    overflow: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0.5;
}

.p-galleria-thumbnail {
    outline-color: transparent;
}

.p-galleria-thumbnail-item:hover {
    opacity: 1;
    transition: opacity 0.3s;
}

.p-galleria-thumbnail-item-current {
    opacity: 1;
}

.p-galleria-thumbnails-left .p-galleria-content,
.p-galleria-thumbnails-right .p-galleria-content {
    flex-direction: row;
}

.p-galleria-thumbnails-left .p-galleria-items-container,
.p-galleria-thumbnails-right .p-galleria-items-container {
    flex-direction: row;
}

.p-galleria-thumbnails-left .p-galleria-items-container,
.p-galleria-thumbnails-top .p-galleria-items-container {
    order: 2;
}

.p-galleria-thumbnails-left .p-galleria-thumbnails,
.p-galleria-thumbnails-top .p-galleria-thumbnails {
    order: 1;
}

.p-galleria-thumbnails-left .p-galleria-thumbnails-content,
.p-galleria-thumbnails-right .p-galleria-thumbnails-content {
    flex-direction: column;
    flex-grow: 1;
}

.p-galleria-thumbnails-left .p-galleria-thumbnail-items,
.p-galleria-thumbnails-right .p-galleria-thumbnail-items {
    flex-direction: column;
    height: 100%;
}

.p-galleria-indicator-list {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${t("galleria.indicator.list.padding")};
    gap: ${t("galleria.indicator.list.gap")};
    margin: 0;
    list-style: none;
}

.p-galleria-indicator-button {
    display: inline-flex;
    align-items: center;
    background: ${t("galleria.indicator.button.background")};
    width: ${t("galleria.indicator.button.width")};
    height: ${t("galleria.indicator.button.height")};
    transition: background ${t("galleria.transition.duration")}, color ${t("galleria.transition.duration")}, outline-color ${t("galleria.transition.duration")}, box-shadow ${t("galleria.transition.duration")};
    outline-color: transparent;
    border-radius: ${t("galleria.indicator.button.border.radius")};
    margin: 0;
    padding: 0;
    border: none;
    user-select: none;
    cursor: pointer;
}

.p-galleria-indicator-button:hover {
    background: ${t("galleria.indicator.button.hover.background")};
}

.p-galleria-indicator-button:focus-visible {
    box-shadow: ${t("galleria.indicator.button.focus.ring.shadow")};
    outline: ${t("galleria.indicator.button.focus.ring.width")} ${t("galleria.indicator.button.focus.ring.style")} ${t("galleria.indicator.button.focus.ring.color")};
    outline-offset: ${t("galleria.indicator.button.focus.ring.offset")};
}

.p-galleria-indicator-active .p-galleria-indicator-button {
    background: ${t("galleria.indicator.button.active.background")};
}

.p-galleria-indicators-left .p-galleria-items-container,
.p-galleria-indicators-right .p-galleria-items-container {
    flex-direction: row;
    align-items: center;
}

.p-galleria-indicators-left .p-galleria-items,
.p-galleria-indicators-top .p-galleria-items {
    order: 2;
}

.p-galleria-indicators-left .p-galleria-indicator-list,
.p-galleria-indicators-top .p-galleria-indicator-list {
    order: 1;
}

.p-galleria-indicators-left .p-galleria-indicator-list,
.p-galleria-indicators-right .p-galleria-indicator-list {
    flex-direction: column;
}

.p-galleria-inset-indicators .p-galleria-indicator-list {
    position: absolute;
    display: flex;
    z-index: 1;
    background: ${t("galleria.inset.indicator.list.background")};
}

.p-galleria-inset-indicators .p-galleria-indicator-button {
    background: ${t("galleria.inset.indicator.button.background")};
}

.p-galleria-inset-indicators .p-galleria-indicator-button:hover {
    background: ${t("galleria.inset.indicator.button.hover.background")};
}

.p-galleria-inset-indicators .p-galleria-indicator-active .p-galleria-indicator-button {
    background: ${t("galleria.inset.indicator.button.active.background")};
}

.p-galleria-inset-indicators.p-galleria-indicators-top .p-galleria-indicator-list {
    top: 0;
    left: 0;
    width: 100%;
    align-items: flex-start;
}

.p-galleria-inset-indicators.p-galleria-indicators-right .p-galleria-indicator-list {
    right: 0;
    top: 0;
    height: 100%;
    align-items: flex-end;
}

.p-galleria-inset-indicators.p-galleria-indicators-bottom .p-galleria-indicator-list {
    bottom: 0;
    left: 0;
    width: 100%;
    align-items: flex-end;
}

.p-galleria-inset-indicators.p-galleria-indicators-left .p-galleria-indicator-list {
    left: 0;
    top: 0;
    height: 100%;
    align-items: flex-start;
}

.p-galleria-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-galleria-close-button {
    position: absolute !important;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin: ${t("galleria.close.button.gutter")};
    background: ${t("galleria.close.button.background")};
    color: ${t("galleria.close.button.color")};
    width: ${t("galleria.close.button.size")};
    height: ${t("galleria.close.button.size")};
    padding: 0;
    border: none;
    user-select: none;
    cursor: pointer;
    border-radius: ${t("galleria.close.button.border.radius")};
    outline-color: transparent;
    transition: background ${t("galleria.transition.duration")}, color ${t("galleria.transition.duration")}, outline-color ${t("galleria.transition.duration")};
}

.p-galleria-close-icon {
    font-size: ${t("galleria.close.button.icon.size")};
    width: ${t("galleria.close.button.icon.size")};
    height: ${t("galleria.close.button.icon.size")};
}

.p-galleria-close-button:hover {
    background: ${t("galleria.close.button.hover.background")};
    color: ${t("galleria.close.button.hover.color")};
}

.p-galleria-close-button:focus-visible {
    box-shadow: ${t("galleria.close.button.focus.ring.shadow")};
    outline: ${t("galleria.close.button.focus.ring.width")} ${t("galleria.close.button.focus.ring.style")} ${t("galleria.close.button.focus.ring.color")};
    outline-offset: ${t("galleria.close.button.focus.ring.offset")};
}

.p-galleria-mask .p-galleria-nav-button {
    position: fixed;
    top: 50%;
}

.p-galleria-enter-active {
    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
}

.p-galleria-leave-active {
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.p-galleria-enter-from,
.p-galleria-leave-to {
    opacity: 0;
    transform: scale(0.7);
}

.p-galleria-enter-active .p-galleria-nav-button {
    opacity: 0;
}

.p-items-hidden .p-galleria-thumbnail-item {
    visibility: hidden;
}

.p-items-hidden .p-galleria-thumbnail-item.p-galleria-thumbnail-item-active {
    visibility: visible;
}
`,ft={mask:"p-galleria-mask p-overlay-mask p-overlay-mask-enter",root:function(e){var n=e.instance,i=n.$attrs.showThumbnails&&n.getPositionClass("p-galleria-thumbnails",n.$attrs.thumbnailsPosition),r=n.$attrs.showIndicators&&n.getPositionClass("p-galleria-indicators",n.$attrs.indicatorsPosition);return["p-galleria p-component",{"p-galleria-fullscreen":n.$attrs.fullScreen,"p-galleria-inset-indicators":n.$attrs.showIndicatorsOnItem,"p-galleria-hover-navigators":n.$attrs.showItemNavigatorsOnHover&&!n.$attrs.fullScreen},i,r]},closeButton:"p-galleria-close-button",closeIcon:"p-galleria-close-icon",header:"p-galleria-header",content:"p-galleria-content",footer:"p-galleria-footer",itemsContainer:"p-galleria-items-container",items:"p-galleria-items",prevButton:function(e){var n=e.instance;return["p-galleria-prev-button p-galleria-nav-button",{"p-disabled":n.isNavBackwardDisabled}]},prevIcon:"p-galleria-prev-icon",item:"p-galleria-item",nextButton:function(e){var n=e.instance;return["p-galleria-next-button p-galleria-nav-button",{"p-disabled":n.isNavForwardDisabled}]},nextIcon:"p-galleria-next-icon",caption:"p-galleria-caption",indicatorList:"p-galleria-indicator-list",indicator:function(e){var n=e.instance,i=e.index;return["p-galleria-indicator",{"p-galleria-indicator-active":n.isIndicatorItemActive(i)}]},indicatorButton:"p-galleria-indicator-button",thumbnails:"p-galleria-thumbnails",thumbnailContent:"p-galleria-thumbnails-content",thumbnailPrevButton:function(e){var n=e.instance;return["p-galleria-thumbnail-prev-button p-galleria-thumbnail-nav-button",{"p-disabled":n.isNavBackwardDisabled}]},thumbnailPrevIcon:"p-galleria-thumbnail-prev-icon",thumbnailsViewport:"p-galleria-thumbnails-viewport",thumbnailItems:"p-galleria-thumbnail-items",thumbnailItem:function(e){var n=e.instance,i=e.index,r=e.activeIndex;return["p-galleria-thumbnail-item",{"p-galleria-thumbnail-item-current":r===i,"p-galleria-thumbnail-item-active":n.isItemActive(i),"p-galleria-thumbnail-item-start":n.firstItemAciveIndex()===i,"p-galleria-thumbnail-item-end":n.lastItemActiveIndex()===i}]},thumbnail:"p-galleria-thumbnail",thumbnailNextButton:function(e){var n=e.instance;return["p-galleria-thumbnail-next-button p-galleria-thumbnail-nav-button",{"p-disabled":n.isNavForwardDisabled}]},thumbnailNextIcon:"p-galleria-thumbnail-next-icon"},gt=et.extend({name:"galleria",style:bt,classes:ft}),D={name:"ChevronLeftIcon",extends:_};function vt(t,e,n,i,r,a){return o(),c("svg",s({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),e[0]||(e[0]=[p("path",{d:"M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z",fill:"currentColor"},null,-1)]),16)}D.render=vt;var W={name:"ChevronUpIcon",extends:_};function yt(t,e,n,i,r,a){return o(),c("svg",s({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),e[0]||(e[0]=[p("path",{d:"M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z",fill:"currentColor"},null,-1)]),16)}W.render=yt;var It={name:"BaseGalleria",extends:C,props:{id:{type:String,default:null},value:{type:Array,default:null},activeIndex:{type:Number,default:0},fullScreen:{type:Boolean,default:!1},visible:{type:Boolean,default:!1},numVisible:{type:Number,default:3},responsiveOptions:{type:Array,default:null},showItemNavigators:{type:Boolean,default:!1},showThumbnailNavigators:{type:Boolean,default:!0},showItemNavigatorsOnHover:{type:Boolean,default:!1},changeItemOnIndicatorHover:{type:Boolean,default:!1},circular:{type:Boolean,default:!1},autoPlay:{type:Boolean,default:!1},transitionInterval:{type:Number,default:4e3},showThumbnails:{type:Boolean,default:!0},thumbnailsPosition:{type:String,default:"bottom"},verticalThumbnailViewPortHeight:{type:String,default:"300px"},showIndicators:{type:Boolean,default:!1},showIndicatorsOnItem:{type:Boolean,default:!1},indicatorsPosition:{type:String,default:"bottom"},baseZIndex:{type:Number,default:0},maskClass:{type:String,default:null},containerStyle:{type:null,default:null},containerClass:{type:null,default:null},containerProps:{type:null,default:null},prevButtonProps:{type:null,default:null},nextButtonProps:{type:null,default:null},ariaLabel:{type:String,default:null},ariaRoledescription:{type:String,default:null}},style:gt,provide:function(){return{$pcGalleria:this,$parentInstance:this}}};function I(t){return $t(t)||St(t)||xt(t)||wt()}function wt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xt(t,e){if(t){if(typeof t=="string")return L(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?L(t,e):void 0}}function St(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function $t(t){if(Array.isArray(t))return L(t)}function L(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=Array(e);n<e;n++)i[n]=t[n];return i}var X={name:"GalleriaItem",hostName:"Galleria",extends:C,emits:["start-slideshow","stop-slideshow","update:activeIndex"],props:{circular:{type:Boolean,default:!1},activeIndex:{type:Number,default:0},value:{type:Array,default:null},showItemNavigators:{type:Boolean,default:!0},showIndicators:{type:Boolean,default:!0},slideShowActive:{type:Boolean,default:!0},changeItemOnIndicatorHover:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!1},templates:{type:null,default:null},id:{type:String,default:null}},mounted:function(){this.autoPlay&&this.$emit("start-slideshow")},methods:{getIndicatorPTOptions:function(e){return{context:{highlighted:this.activeIndex===e}}},next:function(){var e=this.activeIndex+1,n=this.circular&&this.value.length-1===this.activeIndex?0:e;this.$emit("update:activeIndex",n)},prev:function(){var e=this.activeIndex!==0?this.activeIndex-1:0,n=this.circular&&this.activeIndex===0?this.value.length-1:e;this.$emit("update:activeIndex",n)},stopSlideShow:function(){this.slideShowActive&&this.stopSlideShow&&this.$emit("stop-slideshow")},navBackward:function(e){this.stopSlideShow(),this.prev(),e&&e.cancelable&&e.preventDefault()},navForward:function(e){this.stopSlideShow(),this.next(),e&&e.cancelable&&e.preventDefault()},onIndicatorClick:function(e){this.stopSlideShow(),this.$emit("update:activeIndex",e)},onIndicatorMouseEnter:function(e){this.changeItemOnIndicatorHover&&(this.stopSlideShow(),this.$emit("update:activeIndex",e))},onIndicatorKeyDown:function(e,n){switch(e.code){case"Enter":case"NumpadEnter":case"Space":this.stopSlideShow(),this.$emit("update:activeIndex",n),e.preventDefault();break;case"ArrowRight":this.onRightKey();break;case"ArrowLeft":this.onLeftKey();break;case"Home":this.onHomeKey(),e.preventDefault();break;case"End":this.onEndKey(),e.preventDefault();break;case"Tab":this.onTabKey();break;case"ArrowDown":case"ArrowUp":case"PageUp":case"PageDown":e.preventDefault();break}},onRightKey:function(){var e=I(g(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,n+1===e.length?e.length-1:n+1)},onLeftKey:function(){var e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,e-1<=0?0:e-1)},onHomeKey:function(){var e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,0)},onEndKey:function(){var e=I(g(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,e.length-1)},onTabKey:function(){var e=I(g(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=e.findIndex(function(a){return G(a,"data-p-active")===!0}),i=k(this.$refs.indicatorContent,'[data-pc-section="indicator"] > [tabindex="0"]'),r=e.findIndex(function(a){return a===i.parentElement});e[r].children[0].tabIndex="-1",e[n].children[0].tabIndex="0"},findFocusedIndicatorIndex:function(){var e=I(g(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=k(this.$refs.indicatorContent,'[data-pc-section="indicator"] > [tabindex="0"]');return e.findIndex(function(i){return i===n.parentElement})},changedFocusedIndicator:function(e,n){var i=I(g(this.$refs.indicatorContent,'[data-pc-section="indicator"]'));i[e].children[0].tabIndex="-1",i[n].children[0].tabIndex="0",i[n].children[0].focus()},isIndicatorItemActive:function(e){return this.activeIndex===e},ariaSlideNumber:function(e){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slideNumber.replace(/{slideNumber}/g,e):void 0},ariaPageLabel:function(e){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g,e):void 0}},computed:{activeItem:function(){return this.value[this.activeIndex]},ariaSlideLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slide:void 0},isNavBackwardDisabled:function(){return!this.circular&&this.activeIndex===0},isNavForwardDisabled:function(){return!this.circular&&this.activeIndex===this.value.length-1}},components:{ChevronLeftIcon:D,ChevronRightIcon:Y},directives:{ripple:V}},kt=["disabled"],Pt=["id","aria-label","aria-roledescription"],Ct=["disabled"],At=["aria-label","aria-selected","aria-controls","onClick","onMouseenter","onKeydown","data-p-active"],Ot=["tabindex"];function Bt(t,e,n,i,r,a){var b=A("ripple");return o(),c("div",s({class:t.cx("itemsContainer")},t.ptm("itemsContainer")),[p("div",s({class:t.cx("items")},t.ptm("items")),[n.showItemNavigators?y((o(),c("button",s({key:0,type:"button",class:t.cx("prevButton"),onClick:e[0]||(e[0]=function(u){return a.navBackward(u)}),disabled:a.isNavBackwardDisabled},t.ptm("prevButton"),{"data-pc-group-section":"itemnavigator"}),[(o(),m(f(n.templates.previousitemicon||"ChevronLeftIcon"),s({class:t.cx("prevIcon")},t.ptm("prevIcon")),null,16,["class"]))],16,kt)),[[b]]):d("",!0),p("div",s({id:n.id+"_item_"+n.activeIndex,class:t.cx("item"),role:"group","aria-label":a.ariaSlideNumber(n.activeIndex+1),"aria-roledescription":a.ariaSlideLabel},t.ptm("item")),[n.templates.item?(o(),m(f(n.templates.item),{key:0,item:a.activeItem},null,8,["item"])):d("",!0)],16,Pt),n.showItemNavigators?y((o(),c("button",s({key:1,type:"button",class:t.cx("nextButton"),onClick:e[1]||(e[1]=function(u){return a.navForward(u)}),disabled:a.isNavForwardDisabled},t.ptm("nextButton"),{"data-pc-group-section":"itemnavigator"}),[(o(),m(f(n.templates.nextitemicon||"ChevronRightIcon"),s({class:t.cx("nextIcon")},t.ptm("nextIcon")),null,16,["class"]))],16,Ct)),[[b]]):d("",!0),n.templates.caption?(o(),c("div",s({key:2,class:t.cx("caption")},t.ptm("caption")),[n.templates.caption?(o(),m(f(n.templates.caption),{key:0,item:a.activeItem},null,8,["item"])):d("",!0)],16)):d("",!0)],16),n.showIndicators?(o(),c("ul",s({key:0,ref:"indicatorContent",class:t.cx("indicatorList")},t.ptm("indicatorList")),[(o(!0),c(Z,null,q(n.value,function(u,l){return o(),c("li",s({key:"p-galleria-indicator-".concat(l),class:t.cx("indicator",{index:l}),"aria-label":a.ariaPageLabel(l+1),"aria-selected":n.activeIndex===l,"aria-controls":n.id+"_item_"+l,onClick:function(v){return a.onIndicatorClick(l)},onMouseenter:function(v){return a.onIndicatorMouseEnter(l)},onKeydown:function(v){return a.onIndicatorKeyDown(v,l)},ref_for:!0},t.ptm("indicator",a.getIndicatorPTOptions(l)),{"data-p-active":a.isIndicatorItemActive(l)}),[n.templates.indicator?d("",!0):(o(),c("button",s({key:0,type:"button",tabindex:n.activeIndex===l?"0":"-1",class:t.cx("indicatorButton"),ref_for:!0},t.ptm("indicatorButton",a.getIndicatorPTOptions(l))),null,16,Ot)),n.templates.indicator?(o(),m(f(n.templates.indicator),{key:1,index:l,activeIndex:n.activeIndex,tabindex:n.activeIndex===l?"0":"-1"},null,8,["index","activeIndex","tabindex"])):d("",!0)],16,At)}),128))],16)):d("",!0)],16)}X.render=Bt;function B(t){return Vt(t)||Nt(t)||Lt(t)||Tt()}function Tt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Lt(t,e){if(t){if(typeof t=="string")return N(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?N(t,e):void 0}}function Nt(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Vt(t){if(Array.isArray(t))return N(t)}function N(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=Array(e);n<e;n++)i[n]=t[n];return i}var J={name:"GalleriaThumbnails",hostName:"Galleria",extends:C,emits:["stop-slideshow","update:activeIndex"],props:{containerId:{type:String,default:null},value:{type:Array,default:null},numVisible:{type:Number,default:3},activeIndex:{type:Number,default:0},isVertical:{type:Boolean,default:!1},slideShowActive:{type:Boolean,default:!1},circular:{type:Boolean,default:!1},responsiveOptions:{type:Array,default:null},contentHeight:{type:String,default:"300px"},showThumbnailNavigators:{type:Boolean,default:!0},templates:{type:null,default:null},prevButtonProps:{type:null,default:null},nextButtonProps:{type:null,default:null}},startPos:null,thumbnailsStyle:null,sortedResponsiveOptions:null,data:function(){return{d_numVisible:this.numVisible,d_oldNumVisible:this.numVisible,d_activeIndex:this.activeIndex,d_oldActiveItemIndex:this.activeIndex,totalShiftedItems:0,page:0}},watch:{numVisible:function(e,n){this.d_numVisible=e,this.d_oldNumVisible=n},activeIndex:function(e,n){this.d_activeIndex=e,this.d_oldActiveItemIndex=n}},mounted:function(){this.createStyle(),this.calculatePosition(),this.responsiveOptions&&this.bindDocumentListeners()},updated:function(){var e=this.totalShiftedItems;(this.d_oldNumVisible!==this.d_numVisible||this.d_oldActiveItemIndex!==this.d_activeIndex)&&(this.d_activeIndex<=this.getMedianItemIndex()?e=0:this.value.length-this.d_numVisible+this.getMedianItemIndex()<this.d_activeIndex?e=this.d_numVisible-this.value.length:this.value.length-this.d_numVisible<this.d_activeIndex&&this.d_numVisible%2===0?e=this.d_activeIndex*-1+this.getMedianItemIndex()+1:e=this.d_activeIndex*-1+this.getMedianItemIndex(),e!==this.totalShiftedItems&&(this.totalShiftedItems=e),this.$refs.itemsContainer.style.transform=this.isVertical?"translate3d(0, ".concat(e*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(e*(100/this.d_numVisible),"%, 0, 0)"),this.d_oldActiveItemIndex!==this.d_activeIndex&&(document.body.setAttribute("data-p-items-hidden","false"),!this.isUnstyled&&K(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transition="transform 500ms ease 0s"),this.d_oldActiveItemIndex=this.d_activeIndex,this.d_oldNumVisible=this.d_numVisible)},beforeUnmount:function(){this.responsiveOptions&&this.unbindDocumentListeners(),this.thumbnailsStyle&&this.thumbnailsStyle.parentNode.removeChild(this.thumbnailsStyle)},methods:{step:function(e){var n=this.totalShiftedItems+e;e<0&&-1*n+this.d_numVisible>this.value.length-1?n=this.d_numVisible-this.value.length:e>0&&n>0&&(n=0),this.circular&&(e<0&&this.value.length-1===this.d_activeIndex?n=0:e>0&&this.d_activeIndex===0&&(n=this.d_numVisible-this.value.length)),this.$refs.itemsContainer&&(document.body.setAttribute("data-p-items-hidden","false"),!this.isUnstyled&&K(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transform=this.isVertical?"translate3d(0, ".concat(n*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(n*(100/this.d_numVisible),"%, 0, 0)"),this.$refs.itemsContainer.style.transition="transform 500ms ease 0s"),this.totalShiftedItems=n},stopSlideShow:function(){this.slideShowActive&&this.stopSlideShow&&this.$emit("stop-slideshow")},getMedianItemIndex:function(){var e=Math.floor(this.d_numVisible/2);return this.d_numVisible%2?e:e-1},navBackward:function(e){this.stopSlideShow();var n=this.d_activeIndex!==0?this.d_activeIndex-1:0,i=n+this.totalShiftedItems;this.d_numVisible-i-1>this.getMedianItemIndex()&&(-1*this.totalShiftedItems!==0||this.circular)&&this.step(1);var r=this.circular&&this.d_activeIndex===0?this.value.length-1:n;this.$emit("update:activeIndex",r),e.cancelable&&e.preventDefault()},navForward:function(e){this.stopSlideShow();var n=this.d_activeIndex===this.value.length-1?this.value.length-1:this.d_activeIndex+1;n+this.totalShiftedItems>this.getMedianItemIndex()&&(-1*this.totalShiftedItems<this.getTotalPageNumber()-1||this.circular)&&this.step(-1);var i=this.circular&&this.value.length-1===this.d_activeIndex?0:n;this.$emit("update:activeIndex",i),e.cancelable&&e.preventDefault()},onItemClick:function(e){this.stopSlideShow();var n=e;if(n!==this.d_activeIndex){var i=n+this.totalShiftedItems,r=0;n<this.d_activeIndex?(r=this.d_numVisible-i-1-this.getMedianItemIndex(),r>0&&-1*this.totalShiftedItems!==0&&this.step(r)):(r=this.getMedianItemIndex()-i,r<0&&-1*this.totalShiftedItems<this.getTotalPageNumber()-1&&this.step(r)),this.$emit("update:activeIndex",n)}},onThumbnailKeydown:function(e,n){switch((e.code==="Enter"||e.code==="NumpadEnter"||e.code==="Space")&&(this.onItemClick(n),e.preventDefault()),e.code){case"ArrowRight":this.onRightKey();break;case"ArrowLeft":this.onLeftKey();break;case"Home":this.onHomeKey(),e.preventDefault();break;case"End":this.onEndKey(),e.preventDefault();break;case"ArrowUp":case"ArrowDown":e.preventDefault();break;case"Tab":this.onTabKey();break}},onRightKey:function(){var e=g(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]'),n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,n+1===e.length?e.length-1:n+1)},onLeftKey:function(){var e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,e-1<=0?0:e-1)},onHomeKey:function(){var e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,0)},onEndKey:function(){var e=g(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]'),n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,e.length-1)},onTabKey:function(){var e=B(g(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]')),n=e.findIndex(function(a){return G(a,"data-p-active")===!0}),i=k(this.$refs.itemsContainer,'[tabindex="0"]'),r=e.findIndex(function(a){return a===i.parentElement});e[r].children[0].tabIndex="-1",e[n].children[0].tabIndex="0"},findFocusedIndicatorIndex:function(){var e=B(g(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]')),n=k(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"] > [tabindex="0"]');return e.findIndex(function(i){return i===n.parentElement})},changedFocusedIndicator:function(e,n){var i=g(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]');i[e].children[0].tabIndex="-1",i[n].children[0].tabIndex="0",i[n].children[0].focus()},onTransitionEnd:function(e){this.$refs.itemsContainer&&e.propertyName==="transform"&&(document.body.setAttribute("data-p-items-hidden","true"),!this.isUnstyled&&U(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transition="")},onTouchStart:function(e){var n=e.changedTouches[0];this.startPos={x:n.pageX,y:n.pageY}},onTouchMove:function(e){e.cancelable&&e.preventDefault()},onTouchEnd:function(e){var n=e.changedTouches[0];this.isVertical?this.changePageOnTouch(e,n.pageY-this.startPos.y):this.changePageOnTouch(e,n.pageX-this.startPos.x)},changePageOnTouch:function(e,n){var i=10;Math.abs(n)<i||(n<0?this.navForward(e):this.navBackward(e))},getTotalPageNumber:function(){return this.value.length>this.d_numVisible?this.value.length-this.d_numVisible+1:0},createStyle:function(){if(!this.thumbnailsStyle){var e;this.thumbnailsStyle=document.createElement("style"),this.thumbnailsStyle.type="text/css",at(this.thumbnailsStyle,"nonce",(e=this.$primevue)===null||e===void 0||(e=e.config)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce),document.body.appendChild(this.thumbnailsStyle)}var n=`
                #`.concat(this.containerId,` [data-pc-section="thumbnailitem"] {
                    flex: 1 0 `).concat(100/this.d_numVisible,`%
                }
            `);if(this.responsiveOptions&&!this.isUnstyled){this.sortedResponsiveOptions=B(this.responsiveOptions);var i=rt();this.sortedResponsiveOptions.sort(function(b,u){var l=b.breakpoint,h=u.breakpoint;return ot(l,h,-1,i)});for(var r=0;r<this.sortedResponsiveOptions.length;r++){var a=this.sortedResponsiveOptions[r];n+=`
                        @media screen and (max-width: `.concat(a.breakpoint,`) {
                            #`).concat(this.containerId,` .p-galleria-thumbnail-item {
                                flex: 1 0 `).concat(100/a.numVisible,`%
                            }
                        }
                    `)}}this.thumbnailsStyle.innerHTML=n},calculatePosition:function(){if(this.$refs.itemsContainer&&this.sortedResponsiveOptions){for(var e=window.innerWidth,n={numVisible:this.numVisible},i=0;i<this.sortedResponsiveOptions.length;i++){var r=this.sortedResponsiveOptions[i];parseInt(r.breakpoint,10)>=e&&(n=r)}this.d_numVisible!==n.numVisible&&(this.d_numVisible=n.numVisible)}},bindDocumentListeners:function(){var e=this;this.documentResizeListener||(this.documentResizeListener=function(){e.calculatePosition()},window.addEventListener("resize",this.documentResizeListener))},unbindDocumentListeners:function(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)},firstItemAciveIndex:function(){return this.totalShiftedItems*-1},lastItemActiveIndex:function(){return this.firstItemAciveIndex()+this.d_numVisible-1},isItemActive:function(e){return this.firstItemAciveIndex()<=e&&this.lastItemActiveIndex()>=e},ariaPageLabel:function(e){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g,e):void 0}},computed:{ariaPrevButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.prevPageLabel:void 0},ariaNextButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.nextPageLabel:void 0},isNavBackwardDisabled:function(){return!this.circular&&this.d_activeIndex===0||this.value.length<=this.d_numVisible},isNavForwardDisabled:function(){return!this.circular&&this.d_activeIndex===this.value.length-1||this.value.length<=this.d_numVisible}},components:{ChevronLeftIcon:D,ChevronRightIcon:Y,ChevronUpIcon:W,ChevronDownIcon:pt},directives:{ripple:V}};function w(t){"@babel/helpers - typeof";return w=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(t)}function F(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function $(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?F(Object(n),!0).forEach(function(i){jt(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function jt(t,e,n){return(e=Dt(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Dt(t){var e=Kt(t,"string");return w(e)=="symbol"?e:e+""}function Kt(t,e){if(w(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e);if(w(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Et=["disabled","aria-label"],Ft=["data-p-active","aria-selected","aria-controls","onKeydown","data-p-galleria-thumbnail-item-current","data-p-galleria-thumbnail-item-active","data-p-galleria-thumbnail-item-start","data-p-galleria-thumbnail-item-end"],zt=["tabindex","aria-label","aria-current","onClick"],Ht=["disabled","aria-label"];function Rt(t,e,n,i,r,a){var b=A("ripple");return o(),c("div",s({class:t.cx("thumbnails")},t.ptm("thumbnails")),[p("div",s({class:t.cx("thumbnailContent")},t.ptm("thumbnailContent")),[n.showThumbnailNavigators?y((o(),c("button",s({key:0,class:t.cx("thumbnailPrevButton"),disabled:a.isNavBackwardDisabled,type:"button","aria-label":a.ariaPrevButtonLabel,onClick:e[0]||(e[0]=function(u){return a.navBackward(u)})},$($({},n.prevButtonProps),t.ptm("thumbnailPrevButton")),{"data-pc-group-section":"thumbnailnavigator"}),[(o(),m(f(n.templates.previousthumbnailicon||(n.isVertical?"ChevronUpIcon":"ChevronLeftIcon")),s({class:t.cx("thumbnailPrevIcon")},t.ptm("thumbnailPrevIcon")),null,16,["class"]))],16,Et)),[[b]]):d("",!0),p("div",s({class:t.cx("thumbnailsViewport"),style:{height:n.isVertical?n.contentHeight:""}},t.ptm("thumbnailsViewport")),[p("div",s({ref:"itemsContainer",class:t.cx("thumbnailItems"),role:"tablist",onTransitionend:e[1]||(e[1]=function(u){return a.onTransitionEnd(u)}),onTouchstart:e[2]||(e[2]=function(u){return a.onTouchStart(u)}),onTouchmove:e[3]||(e[3]=function(u){return a.onTouchMove(u)}),onTouchend:e[4]||(e[4]=function(u){return a.onTouchEnd(u)})},t.ptm("thumbnailItems")),[(o(!0),c(Z,null,q(n.value,function(u,l){return o(),c("div",s({key:"p-galleria-thumbnail-item-".concat(l),class:t.cx("thumbnailItem",{index:l,activeIndex:n.activeIndex}),role:"tab","data-p-active":n.activeIndex===l,"aria-selected":n.activeIndex===l,"aria-controls":n.containerId+"_item_"+l,onKeydown:function(v){return a.onThumbnailKeydown(v,l)},ref_for:!0},t.ptm("thumbnailItem"),{"data-p-galleria-thumbnail-item-current":n.activeIndex===l,"data-p-galleria-thumbnail-item-active":a.isItemActive(l),"data-p-galleria-thumbnail-item-start":a.firstItemAciveIndex()===l,"data-p-galleria-thumbnail-item-end":a.lastItemActiveIndex()===l}),[p("div",s({class:t.cx("thumbnail"),tabindex:n.activeIndex===l?"0":"-1","aria-label":a.ariaPageLabel(l+1),"aria-current":n.activeIndex===l?"page":void 0,onClick:function(v){return a.onItemClick(l)},ref_for:!0},t.ptm("thumbnail")),[n.templates.thumbnail?(o(),m(f(n.templates.thumbnail),{key:0,item:u},null,8,["item"])):d("",!0)],16,zt)],16,Ft)}),128))],16)],16),n.showThumbnailNavigators?y((o(),c("button",s({key:1,class:t.cx("thumbnailNextButton"),disabled:a.isNavForwardDisabled,type:"button","aria-label":a.ariaNextButtonLabel,onClick:e[5]||(e[5]=function(u){return a.navForward(u)})},$($({},n.nextButtonProps),t.ptm("thumbnailNextButton")),{"data-pc-group-section":"thumbnailnavigator"}),[(o(),m(f(n.templates.nextthumbnailicon||(n.isVertical?"ChevronDownIcon":"ChevronRightIcon")),s({class:t.cx("thumbnailNextIcon")},t.ptm("thumbnailNextIcon")),null,16,["class"]))],16,Ht)),[[b]]):d("",!0)],16)],16)}J.render=Rt;function x(t){"@babel/helpers - typeof";return x=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(t)}function z(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function H(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?z(Object(n),!0).forEach(function(i){Mt(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Mt(t,e,n){return(e=_t(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _t(t){var e=Ut(t,"string");return x(e)=="symbol"?e:e+""}function Ut(t,e){if(x(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e);if(x(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Q={name:"GalleriaContent",hostName:"Galleria",extends:C,inheritAttrs:!1,interval:null,emits:["activeitem-change","mask-hide"],data:function(){return{activeIndex:this.$attrs.activeIndex,numVisible:this.$attrs.numVisible,slideShowActive:!1}},watch:{"$attrs.value":function(e){e&&e.length<this.numVisible&&(this.numVisible=e.length)},"$attrs.activeIndex":function(e){this.activeIndex=e},"$attrs.numVisible":function(e){this.numVisible=e},"$attrs.autoPlay":function(e){e?this.startSlideShow():this.stopSlideShow()}},updated:function(){this.$emit("activeitem-change",this.activeIndex)},beforeUnmount:function(){this.slideShowActive&&this.stopSlideShow()},methods:{getPTOptions:function(e){return this.ptm(e,{props:H(H({},this.$attrs),{},{pt:this.pt,unstyled:this.unstyled})})},isAutoPlayActive:function(){return this.slideShowActive},startSlideShow:function(){var e=this;this.interval=setInterval(function(){var n=e.$attrs.circular&&e.$attrs.value.length-1===e.activeIndex?0:e.activeIndex+1;e.activeIndex=n},this.$attrs.transitionInterval),this.slideShowActive=!0},stopSlideShow:function(){this.interval&&clearInterval(this.interval),this.slideShowActive=!1},getPositionClass:function(e,n){var i=["top","left","bottom","right"],r=i.find(function(a){return a===n});return r?"".concat(e,"-").concat(r):""},isVertical:function(){return this.$attrs.thumbnailsPosition==="left"||this.$attrs.thumbnailsPosition==="right"}},computed:{closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},components:{GalleriaItem:X,GalleriaThumbnails:J,TimesIcon:it},directives:{ripple:V}};function S(t){"@babel/helpers - typeof";return S=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(t)}function R(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function M(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?R(Object(n),!0).forEach(function(i){Gt(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Gt(t,e,n){return(e=Zt(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Zt(t){var e=qt(t,"string");return S(e)=="symbol"?e:e+""}function qt(t,e){if(S(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e);if(S(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Yt=["id","aria-label","aria-roledescription"],Wt=["aria-label"],Xt=["aria-live"];function Jt(t,e,n,i,r,a){var b=P("GalleriaItem"),u=P("GalleriaThumbnails"),l=A("ripple");return t.$attrs.value&&t.$attrs.value.length>0?(o(),c("div",s({key:0,id:t.$id,role:"region",class:[t.cx("root"),t.$attrs.containerClass],style:t.$attrs.containerStyle,"aria-label":t.$attrs.ariaLabel,"aria-roledescription":t.$attrs.ariaRoledescription},M(M({},t.$attrs.containerProps),a.getPTOptions("root"))),[t.$attrs.fullScreen?y((o(),c("button",s({key:0,autofocus:"",type:"button",class:t.cx("closeButton"),"aria-label":a.closeAriaLabel,onClick:e[0]||(e[0]=function(h){return t.$emit("mask-hide")})},a.getPTOptions("closeButton")),[(o(),m(f(t.$attrs.templates.closeicon||"TimesIcon"),s({class:t.cx("closeIcon")},a.getPTOptions("closeIcon")),null,16,["class"]))],16,Wt)),[[l]]):d("",!0),t.$attrs.templates&&t.$attrs.templates.header?(o(),c("div",s({key:1,class:t.cx("header")},a.getPTOptions("header")),[(o(),m(f(t.$attrs.templates.header)))],16)):d("",!0),p("div",s({class:t.cx("content"),"aria-live":t.$attrs.autoPlay?"polite":"off"},a.getPTOptions("content")),[j(b,{id:t.$id,activeIndex:r.activeIndex,"onUpdate:activeIndex":e[1]||(e[1]=function(h){return r.activeIndex=h}),slideShowActive:r.slideShowActive,"onUpdate:slideShowActive":e[2]||(e[2]=function(h){return r.slideShowActive=h}),value:t.$attrs.value,circular:t.$attrs.circular,templates:t.$attrs.templates,showIndicators:t.$attrs.showIndicators,changeItemOnIndicatorHover:t.$attrs.changeItemOnIndicatorHover,showItemNavigators:t.$attrs.showItemNavigators,autoPlay:t.$attrs.autoPlay,onStartSlideshow:a.startSlideShow,onStopSlideshow:a.stopSlideShow,pt:t.pt,unstyled:t.unstyled},null,8,["id","activeIndex","slideShowActive","value","circular","templates","showIndicators","changeItemOnIndicatorHover","showItemNavigators","autoPlay","onStartSlideshow","onStopSlideshow","pt","unstyled"]),t.$attrs.showThumbnails?(o(),m(u,{key:0,activeIndex:r.activeIndex,"onUpdate:activeIndex":e[3]||(e[3]=function(h){return r.activeIndex=h}),slideShowActive:r.slideShowActive,"onUpdate:slideShowActive":e[4]||(e[4]=function(h){return r.slideShowActive=h}),containerId:t.$id,value:t.$attrs.value,templates:t.$attrs.templates,numVisible:r.numVisible,responsiveOptions:t.$attrs.responsiveOptions,circular:t.$attrs.circular,isVertical:a.isVertical(),contentHeight:t.$attrs.verticalThumbnailViewPortHeight,showThumbnailNavigators:t.$attrs.showThumbnailNavigators,prevButtonProps:t.$attrs.prevButtonProps,nextButtonProps:t.$attrs.nextButtonProps,onStopSlideshow:a.stopSlideShow,pt:t.pt,unstyled:t.unstyled},null,8,["activeIndex","slideShowActive","containerId","value","templates","numVisible","responsiveOptions","circular","isVertical","contentHeight","showThumbnailNavigators","prevButtonProps","nextButtonProps","onStopSlideshow","pt","unstyled"])):d("",!0)],16,Xt),t.$attrs.templates&&t.$attrs.templates.footer?(o(),c("div",s({key:2,class:t.cx("footer")},a.getPTOptions("footer")),[(o(),m(f(t.$attrs.templates.footer)))],16)):d("",!0)],16,Yt)):d("",!0)}Q.render=Jt;var tt={name:"Galleria",extends:It,inheritAttrs:!1,emits:["update:activeIndex","update:visible"],container:null,mask:null,data:function(){return{containerVisible:this.visible}},updated:function(){this.fullScreen&&this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.fullScreen&&E(),this.mask=null,this.container&&(O.clear(this.container),this.container=null)},methods:{onBeforeEnter:function(e){O.set("modal",e,this.baseZIndex||this.$primevue.config.zIndex.modal)},onEnter:function(e){this.mask.style.zIndex=String(parseInt(e.style.zIndex,10)-1),mt(),this.focus()},onBeforeLeave:function(){!this.isUnstyled&&U(this.mask,"p-overlay-mask-leave")},onAfterLeave:function(e){O.clear(e),this.containerVisible=!1,E()},onActiveItemChange:function(e){this.activeIndex!==e&&this.$emit("update:activeIndex",e)},maskHide:function(){this.$emit("update:visible",!1)},containerRef:function(e){this.container=e},maskRef:function(e){this.mask=e},focus:function(){var e=this.container.$el.querySelector("[autofocus]");e&&e.focus()}},components:{GalleriaContent:Q,Portal:nt},directives:{focustrap:ht}},Qt=["aria-modal"];function te(t,e,n,i,r,a){var b=P("GalleriaContent"),u=P("Portal"),l=A("focustrap");return t.fullScreen?(o(),m(u,{key:0},{default:T(function(){return[r.containerVisible?(o(),c("div",s({key:0,ref:a.maskRef,class:[t.cx("mask"),t.maskClass],role:"dialog","aria-modal":t.fullScreen?"true":void 0},t.ptm("mask")),[j(lt,s({name:"p-galleria",onBeforeEnter:a.onBeforeEnter,onEnter:a.onEnter,onBeforeLeave:a.onBeforeLeave,onAfterLeave:a.onAfterLeave,appear:""},t.ptm("transition")),{default:T(function(){return[t.visible?y((o(),m(b,s({key:0,ref:a.containerRef,onMaskHide:a.maskHide,templates:t.$slots,onActiveitemChange:a.onActiveItemChange,pt:t.pt,unstyled:t.unstyled},t.$props),null,16,["onMaskHide","templates","onActiveitemChange","pt","unstyled"])),[[l]]):d("",!0)]}),_:1},16,["onBeforeEnter","onEnter","onBeforeLeave","onAfterLeave"])],16,Qt)):d("",!0)]}),_:1})):(o(),m(b,s({key:1,templates:t.$slots,onActiveitemChange:a.onActiveItemChange,pt:t.pt,unstyled:t.unstyled},t.$props),null,16,["templates","onActiveitemChange","pt","unstyled"]))}tt.render=te;const ee={class:"glria"},ne=["src"],ie={class:"glria-content"},ae={class:"text-2xl font-bold mb-2"},re=["innerHTML"],ce=st({__name:"ClientAbout",setup(t){const e=ut([{title:"Kenali Dirimu",text:"Semua perubahan besar dimulai dari satu langkah kecil: mengenal diri sendiri.<br>Yuk mulai perjalanan ini bareng LogikaTherapy!",image:"https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-fall-nature-scenery-free-image.jpeg?w=2210&quality=70"},{title:"Bukan Kamu Aja",text:"Kamu nggak sendirian. Banyak orang sedang berjuang, dan semua perjuangan itu valid.<br>Di sini tempat yang aman buat berbagi.",image:"https://wallpapers.com/images/featured/beautiful-scenery-wnxju2647uqrcccv.jpg"},{title:"Curhat ke AI Dulu",text:"Kadang lebih gampang cerita ke AI.<br>LogikaTherapy siap dengerin kamu dulu sebelum kamu siap ngobrol sama tim therapy kami.",image:"https://cdn.filtergrade.com/wp-content/uploads/2023/10/12182215/Painting-landscape-scenery-background-wall-copy-scaled.jpg"},{title:"Yuk Mulai Sesi Pertama",text:"Saatnya mulai sesi yang bisa bantu kamu lebih kuat, lebih tenang, dan lebih bahagia.<br>Kami di sini buat kamu.",image:"https://i0.wp.com/picjumbo.com/wp-content/uploads/sunny-colorful-mountain-scenery-free-photo.jpg?w=2210&quality=70"}]);return(n,i)=>(o(),c("div",null,[j(ct(tt),{value:e.value,"show-item-captions":!0,"show-item-navigators":!0,"show-indicators":!1,"show-thumbnails":!1,numVisible:4,circular:!0,autoPlay:!0,transitionInterval:3e3},{item:T(({item:r})=>[p("div",ee,[p("img",{src:r.image,alt:"Image",class:""},null,8,ne),p("div",ie,[p("h1",ae,dt(r.title),1),p("p",{innerHTML:r.text,class:"text-lg text-gray-700"},null,8,re)])])]),_:1},8,["value"])]))}});export{ce as default};
