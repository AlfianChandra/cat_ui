import{B as J}from"./BaseWrapper-BDxEFMH5.js";import{u as R,e as q}from"./emitter-D_JGkQCq.js";import{u as x}from"./http-C4w9pt9T.js";import{B as Q,A as X,c as P,o as g,P as Z,x as ee,d as ae,r as d,g as le,f as te,i as ne,k as t,w as f,u as l,F as oe,a as o,e as G,m as ie,t as m,b as w,p as K}from"./index-BB40m8p3.js";import{h as C}from"./moment-C5S46NFB.js";import{s as b}from"./index-DgklKSqE.js";import{s as O}from"./index-CMCaXNaK.js";import{s as y}from"./index-DHeBkDoB.js";import{_ as se}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-t--hEgTQ.js";import"./index-slpOkfL7.js";var re=({dt:i})=>`
.p-floatlabel {
    display: block;
    position: relative;
}

.p-floatlabel label {
    position: absolute;
    pointer-events: none;
    top: 50%;
    transform: translateY(-50%);
    transition-property: all;
    transition-timing-function: ease;
    line-height: 1;
    font-weight: ${i("floatlabel.font.weight")};
    inset-inline-start: ${i("floatlabel.position.x")};
    color: ${i("floatlabel.color")};
    transition-duration: ${i("floatlabel.transition.duration")};
}

.p-floatlabel:has(.p-textarea) label {
    top: ${i("floatlabel.position.y")};
    transform: translateY(0);
}

.p-floatlabel:has(.p-inputicon:first-child) label {
    inset-inline-start: calc((${i("form.field.padding.x")} * 2) + ${i("icon.size")});
}

.p-floatlabel:has(.p-invalid) label {
    color: ${i("floatlabel.invalid.color")};
}

.p-floatlabel:has(input:focus) label,
.p-floatlabel:has(input.p-filled) label,
.p-floatlabel:has(input:-webkit-autofill) label,
.p-floatlabel:has(textarea:focus) label,
.p-floatlabel:has(textarea.p-filled) label,
.p-floatlabel:has(.p-inputwrapper-focus) label,
.p-floatlabel:has(.p-inputwrapper-filled) label {
    top: ${i("floatlabel.over.active.top")};
    transform: translateY(0);
    font-size: ${i("floatlabel.active.font.size")};
    font-weight: ${i("floatlabel.active.font.weight")};
}

.p-floatlabel:has(input.p-filled) label,
.p-floatlabel:has(textarea.p-filled) label,
.p-floatlabel:has(.p-inputwrapper-filled) label {
    color: ${i("floatlabel.active.color")};
}

.p-floatlabel:has(input:focus) label,
.p-floatlabel:has(input:-webkit-autofill) label,
.p-floatlabel:has(textarea:focus) label,
.p-floatlabel:has(.p-inputwrapper-focus) label {
    color: ${i("floatlabel.focus.color")};
}

.p-floatlabel-in .p-inputtext,
.p-floatlabel-in .p-textarea,
.p-floatlabel-in .p-select-label,
.p-floatlabel-in .p-multiselect-label,
.p-floatlabel-in .p-autocomplete-input-multiple,
.p-floatlabel-in .p-cascadeselect-label,
.p-floatlabel-in .p-treeselect-label {
    padding-block-start: ${i("floatlabel.in.input.padding.top")};
    padding-block-end: ${i("floatlabel.in.input.padding.bottom")};
}

.p-floatlabel-in:has(input:focus) label,
.p-floatlabel-in:has(input.p-filled) label,
.p-floatlabel-in:has(input:-webkit-autofill) label,
.p-floatlabel-in:has(textarea:focus) label,
.p-floatlabel-in:has(textarea.p-filled) label,
.p-floatlabel-in:has(.p-inputwrapper-focus) label,
.p-floatlabel-in:has(.p-inputwrapper-filled) label {
    top: ${i("floatlabel.in.active.top")};
}

.p-floatlabel-on:has(input:focus) label,
.p-floatlabel-on:has(input.p-filled) label,
.p-floatlabel-on:has(input:-webkit-autofill) label,
.p-floatlabel-on:has(textarea:focus) label,
.p-floatlabel-on:has(textarea.p-filled) label,
.p-floatlabel-on:has(.p-inputwrapper-focus) label,
.p-floatlabel-on:has(.p-inputwrapper-filled) label {
    top: 0;
    transform: translateY(-50%);
    border-radius: ${i("floatlabel.on.border.radius")};
    background: ${i("floatlabel.on.active.background")};
    padding: ${i("floatlabel.on.active.padding")};
}
`,pe={root:function(h){var k=h.props;return["p-floatlabel",{"p-floatlabel-over":k.variant==="over","p-floatlabel-on":k.variant==="on","p-floatlabel-in":k.variant==="in"}]}},de=Q.extend({name:"floatlabel",style:re,classes:pe}),ue={name:"BaseFloatLabel",extends:X,props:{variant:{type:String,default:"over"}},style:de,provide:function(){return{$pcFloatLabel:this,$parentInstance:this}}},v={name:"FloatLabel",extends:ue,inheritAttrs:!1};function fe(i,h,k,B,p,z){return g(),P("span",ee({class:i.cx("root")},i.ptmi("root")),[Z(i.$slots,"default")],16)}v.render=fe;const me={class:"prof-container"},be={class:"avatar-wrapper"},ve=["src"],ce={style:{padding:"0",margin:"0","font-size":"30px"}},ye={style:{padding:"0",margin:"0","font-size":"15px","text-align":"center"}},ge={style:{padding:"0",margin:"0",display:"flex","flex-flow":"row wrap","align-items":"center","justify-content":"center"}},he={style:{padding:"0",margin:"0","font-size":"11px"}},ke={style:{display:"flex","justify-content":"center",gap:"0.5rem"}},we={key:0,style:{display:"flex","flex-flow":"column",gap:"0.5rem"}},xe={style:{"font-size":"12px",margin:"0",padding:"0"}},Pe={key:1,style:{"font-size":"12px",margin:"0",padding:"0"}},$e={key:1,style:{"font-size":"12px",margin:"0",padding:"0"}},Ve={style:{display:"flex",gap:"0.5rem","margin-top":"1rem"}},_e={style:{display:"flex","flex-flow":"column",gap:"0.5rem"}},Ue={style:{display:"flex",gap:"0.5rem","margin-top":"1rem"}},Se={style:{display:"flex","flex-flow":"column",gap:"0.5rem"}},Be={style:{display:"flex",gap:"0.5rem","margin-top":"1rem"}},Ce=ae({__name:"ClientProfile",setup(i){const h=d(59),k=d(null),B=R(),p=d({name:"",email:"",dob:"",phone:""}),z=le(()=>C().diff(C(p.value.dob),"years")),s=te(),M=d(""),$=d(!1),V=d(!1),W=d(!1),r=d({oldPass:"",newPass:"",confirmPass:""});ne(async()=>{Y(),N()});const Y=async()=>{await x().httpGet("/users/profile").then(a=>{p.value.name=a.profile.name,p.value.email=a.profile.email,p.value.dob=a.profile.dob,p.value.phone=a.profile.phone,M.value=a.profile.createdAt}).catch(a=>{console.log(a)})},j=()=>{const a=document.createElement("input");a.type="file",a.accept="image/jpeg, image/png",a.click(),a.onchange=e=>{setTimeout(async()=>{s.add({severity:"info",summary:"Mohon tunggu",detail:"Mengunggah foto profil...",life:3e3});const c=new FormData;c.append("image",e.target.files[0]),await x().httpPost("/users/profile/avatar/upload",c).then(n=>{setTimeout(()=>{B.setAvatar(n.fileUrl),s.add({severity:"success",summary:"Berhasil!",detail:"Foto profil diperbarui!",life:3e3})},2e3)}).catch(n=>{console.log(n),s.add({severity:"error",summary:"Gagal!",detail:"Terjadi kesalahan",life:3e3})})},1e3)}},u=d(),D=async()=>{if(u.value.name===""||u.value.dob===""){s.add({severity:"error",summary:"Opss",detail:"Mohon isi semua bidang",life:3e3});return}await x().httpPost("/users/profile/update",u.value).then(a=>{a.status==200&&(s.add({severity:"success",summary:"Berhasil!",detail:a.message,life:3e3}),$.value=!1,Y(),q.emit("profileUpdated"))}).catch(a=>{console.log(a),s.add({severity:"error",summary:"Gagal!",detail:a.response.data.message,life:3e3})})},N=async()=>{await x().httpGet("/users/profile/phone/getstate").then(a=>{a.status==200&&(W.value=a.state)}).catch(a=>{console.log(a)}).catch(a=>{console.log(a),s.add({severity:"error",summary:"Gagal!",detail:a.response.data.message,life:3e3})})},E=()=>{$.value=!0,u.value={...p.value}},I=async()=>{if(r.value.oldPass===""||r.value.newPass===""||r.value.confirmPass===""){s.add({severity:"error",summary:"Opss",detail:"Mohon isi semua bidang",life:3e3});return}if(r.value.newPass.length<8){s.add({severity:"error",summary:"Opss",detail:"Sandi baru minimal 8 karakter",life:3e3});return}if(r.value.newPass==r.value.oldPass){s.add({severity:"error",summary:"Opss",detail:"Sandi baru tidak boleh sama dengan sandi lama",life:3e3});return}if(r.value.newPass!==r.value.confirmPass){s.add({severity:"error",summary:"Opss",detail:"Sandi baru tidak sama",life:3e3});return}await x().httpPost("/users/profile/password/update",r.value).then(a=>{s.add({severity:"success",summary:"Berhasil!",detail:a.message,life:3e3}),V.value=!1}).catch(a=>{console.log(a),s.add({severity:"error",summary:"Gagal!",detail:a.response.data.message,life:3e3})})},_=d(!1),U=d(!1),S=d(!1),A=d(),T=d(!1),L=async()=>{F(),!S.value&&(S.value=!0,k.value=setInterval(()=>{h.value>0?h.value--:(clearInterval(k.value),S.value=!1,h.value=59)},1e3))},H=()=>{T.value=!1,_.value=!1,A.value=""},F=async()=>{if(S.value){_.value=!0,U.value=!1;return}U.value=!0,await x().httpGet("/users/profile/phone/verify/otp/send").then(a=>{a.status==200&&(_.value=!0,s.add({severity:"success",summary:"Berhasil!",detail:a.message,life:3e3}),U.value=!1)}).catch(a=>{console.log(a),s.add({severity:"error",summary:"Gagal!",detail:a.response.data.message,life:3e3}),U.value=!1})};return(a,e)=>{const c=ie("fasicon");return g(),P(oe,null,[t(J,null,{default:f(()=>[o("div",me,[o("div",be,[o("img",{src:l(B).getAvatar!=null?l(G).baseUserContent+l(B).getAvatar:l(G).defaultAvatar,alt:"User Avatar"},null,8,ve),o("span",{onClick:j,class:"change-avatar"},[t(c,{icon:"image"})])]),o("h2",ce,m(p.value.name),1),o("p",ye,[o("span",null,m(p.value.phone!=null?p.value.phone:"-"),1)]),o("p",ge,[t(c,{icon:"at"}),w("   "+m(p.value.email)+"     ",1),t(c,{icon:"cake-candles"}),w("   "+m(l(C)(p.value.dob).format("DD MMMM YYYY"))+" ("+m(z.value)+" tahun)",1)]),o("p",he,[t(c,{icon:"door-open"}),w(" bergabung sejak "+m(l(C)(M.value).format("DD MMM YYYY")),1)]),o("div",ke,[t(l(b),{onClick:E,label:"Edit Profil",icon:"pi pi-pencil",style:{width:"150px"}}),t(l(b),{onClick:e[0]||(e[0]=n=>V.value=!0),label:"Ubah Sandi",icon:"pi pi-lock",style:{width:"150px"}})])])]),_:1}),t(l(O),{draggable:!1,closable:!1,visible:T.value,"onUpdate:visible":e[2]||(e[2]=n=>T.value=n),modal:"",header:"Verifikasi No. WhatsApp",style:{width:"30rem"},"close-on-escape":!1,maximizable:!0},{default:f(()=>[_.value?(g(),P("div",we,[t(l(v),{variant:"in"},{default:f(()=>[t(l(y),{id:"over_label",modelValue:A.value,"onUpdate:modelValue":e[1]||(e[1]=n=>A.value=n),style:{width:"100%"}},null,8,["modelValue"]),e[14]||(e[14]=o("label",{for:"over_label"},"Kode OTP (6 digit)",-1))]),_:1}),o("p",xe,"Kode OTP telah dikirim ke WhatsApp kamu, "+m(p.value.name.split(" ")[0])+". Silahkan masukkan kode OTP untuk memverifikasi. Jika kamu tidak menerima kode OTP, silahkan klik tombol kirim ulang.",1),S.value?(g(),P("p",Pe,[e[16]||(e[16]=w("Kode OTP dapat dikirim ulang dalam ")),o("b",null,m(h.value)+" detik",1)])):(g(),P("a",{key:0,onClick:L,href:"javascript:;",style:{color:"orange","text-decoration":"none","font-weight":"bold","font-size":"13px"}},[t(c,{icon:"refresh"}),e[15]||(e[15]=w(" Kirim Ulang OTP "))]))])):(g(),P("p",$e,[w(m(p.value.name.split(" ")[0])+", Kami akan mengirimkan kode OTP ke WhatsApp Kamu. Pastikan Nomor WhatsApp kamu sudah sesuai ya! Kalo kamu ingin ganti atau memperbaiki nomor WhatsApp, klik Edit Profil.",1),e[17]||(e[17]=o("br",null,null,-1)),e[18]||(e[18]=o("br",null,null,-1)),e[19]||(e[19]=w("Silahkan klik tombol kirim untuk mengirimkan kode OTP."))])),o("div",Ve,[t(l(b),{type:"button",label:"Batal",severity:"secondary",onClick:H}),_.value?(g(),K(l(b),{key:0,type:"button",label:"Verifikasi",onClick:D})):(g(),K(l(b),{key:1,disabled:U.value,type:"button",label:"Kirim OTP",onClick:F},null,8,["disabled"]))])]),_:1},8,["visible"]),t(l(O),{visible:$.value,"onUpdate:visible":e[8]||(e[8]=n=>$.value=n),modal:"",header:"Perbarui Profil",style:{width:"30rem"},"close-on-escape":!0,maximizable:!0},{default:f(()=>[o("div",_e,[t(l(v),{variant:"in"},{default:f(()=>[t(l(y),{id:"over_label",modelValue:u.value.name,"onUpdate:modelValue":e[3]||(e[3]=n=>u.value.name=n),style:{width:"100%"}},null,8,["modelValue"]),e[20]||(e[20]=o("label",{for:"over_label"},"Nama",-1))]),_:1}),t(l(v),{variant:"in"},{default:f(()=>[t(l(y),{disabled:"",id:"over_label",modelValue:u.value.email,"onUpdate:modelValue":e[4]||(e[4]=n=>u.value.email=n),style:{width:"100%"}},null,8,["modelValue"]),e[21]||(e[21]=o("label",{for:"over_label"},"E-Mail",-1))]),_:1}),t(l(v),{variant:"in"},{default:f(()=>[t(l(y),{id:"over_label",type:"date",modelValue:u.value.dob,"onUpdate:modelValue":e[5]||(e[5]=n=>u.value.dob=n),style:{width:"100%"}},null,8,["modelValue"]),e[22]||(e[22]=o("label",{for:"over_label"},"Tanggal Lahir",-1))]),_:1}),t(l(v),{variant:"in"},{default:f(()=>[t(l(y),{id:"over_label",type:"text",modelValue:u.value.phone,"onUpdate:modelValue":e[6]||(e[6]=n=>u.value.phone=n),style:{width:"100%"}},null,8,["modelValue"]),e[23]||(e[23]=o("label",{for:"over_label"},"No. WhatsApp",-1))]),_:1})]),o("div",Ue,[t(l(b),{type:"button",label:"Batal",severity:"secondary",onClick:e[7]||(e[7]=n=>$.value=!1)}),t(l(b),{type:"button",label:"Perbarui",onClick:D})])]),_:1},8,["visible"]),t(l(O),{visible:V.value,"onUpdate:visible":e[13]||(e[13]=n=>V.value=n),modal:"",header:"Ubah Sandi",style:{width:"30rem"},"close-on-escape":!0,maximizable:!0},{default:f(()=>[o("div",Se,[t(l(v),{variant:"in"},{default:f(()=>[t(l(y),{id:"over_label",modelValue:r.value.oldPass,"onUpdate:modelValue":e[9]||(e[9]=n=>r.value.oldPass=n),style:{width:"100%"},type:"password"},null,8,["modelValue"]),e[24]||(e[24]=o("label",{for:"over_label"},"Sandi Lama",-1))]),_:1}),t(l(v),{variant:"in"},{default:f(()=>[t(l(y),{id:"over_label",modelValue:r.value.newPass,"onUpdate:modelValue":e[10]||(e[10]=n=>r.value.newPass=n),style:{width:"100%"},type:"password",min:"8"},null,8,["modelValue"]),e[25]||(e[25]=o("label",{for:"over_label"},"Sandi Baru",-1))]),_:1}),t(l(v),{variant:"in"},{default:f(()=>[t(l(y),{id:"over_label",modelValue:r.value.confirmPass,"onUpdate:modelValue":e[11]||(e[11]=n=>r.value.confirmPass=n),style:{width:"100%"},type:"password"},null,8,["modelValue"]),e[26]||(e[26]=o("label",{for:"over_label"},"Ulangi Sandi Baru",-1))]),_:1})]),o("div",Be,[t(l(b),{type:"button",label:"Batal",severity:"secondary",onClick:e[12]||(e[12]=n=>V.value=!1)}),t(l(b),{type:"button",label:"Perbarui",onClick:I})])]),_:1},8,["visible"])],64)}}}),je=se(Ce,[["__scopeId","data-v-6495817f"]]);export{je as default};
