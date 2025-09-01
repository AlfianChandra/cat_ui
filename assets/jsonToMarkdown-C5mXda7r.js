const O={maxDepth:6,collapseNested:!1,indentSize:2};function f(r){return r.replace(/\|/g,"\\|")}function S(r){return r==null?"":f(String(r))}function w(r,e){return r.split(`
`).map(n=>" ".repeat(e)+n).join(`
`)}function m(r){return typeof r=="object"&&r!==null&&!Array.isArray(r)}function p(r,e,n){const y=Object.keys(r);if(y.length===0)return"_empty object_";const o=`| ${y.map(i=>f(i)).join(" | ")} |`,t=`| ${y.map(()=>"---").join(" | ")} |`,A=`| ${y.map(i=>{const s=r[i];return m(s)||Array.isArray(s)?"[...]":k(s,e,n+1)}).join(" | ")} |`;let j=[o,t,A].join(`
`);for(const i of y){const s=r[i];if(m(s)){const a=$(s,e,n+1),c=`

${"#".repeat(Math.min(6,n+2))} ${f(i)} (object)

`;j+=c+b(a,e,`object:${i}`)}else if(Array.isArray(s)){const a=$(s,e,n+1),c=`

${"#".repeat(Math.min(6,n+2))} ${f(i)} (array)

`;j+=c+b(a,e,`array:${i}`)}}return j}function k(r,e,n){if(r==null)return"";if(typeof r=="string"||typeof r=="number"||typeof r=="boolean")return f(String(r));if(Array.isArray(r))return n>e.maxDepth?"`[Array…]`":r.every(t=>typeof t=="string"||typeof t=="number"||typeof t=="boolean"||t===null)?`[${r.map(u=>u===null?"":f(String(u))).join(", ")}]`:r.map((t,u)=>{if(m(t)||Array.isArray(t)){const A=$(t,e,n+1);return`**Item ${u+1}**

`+b(A,e,`array-item:${u}`)}return`- ${k(t,e,n+1)}`}).join(`

`);if(m(r)){if(n>e.maxDepth)return"`{Object…}`";const y=p(r,e,n);return b(y,e,"object-inline")}return""}function b(r,e,n){return e.collapseNested?`<details>
<summary>${f(n)}</summary>

${w(r,e.indentSize)}

</details>`:r}function $(r,e,n){if(n>e.maxDepth)return"`...max depth reached...`";if(Array.isArray(r)){if(r.length===0)return"_empty array_";if(r.every(o=>m(o))){const o=new Set;r.forEach(s=>Object.keys(s).forEach(a=>o.add(a)));const t=Array.from(o),u=`| ${t.map(s=>f(s)).join(" | ")} |`,A=`| ${t.map(()=>"---").join(" | ")} |`,j=r.map(s=>`| ${t.map(c=>{const l=s[c];return l===void 0?"":m(l)||Array.isArray(l)?"[...]":k(l,e,n+1)}).join(" | ")} |`).join(`
`);let i=[u,A,j].join(`
`);return r.forEach((s,a)=>{for(const c of Object.keys(s)){const l=s[c];if(m(l)){const g=$(l,e,n+1),M=`

${"#".repeat(Math.min(6,n+2))} [${a+1}]. ${f(c)} (object)

`;i+=M+b(g,e,`obj${a}-${c}`)}else if(Array.isArray(l)){const g=$(l,e,n+1),M=`

${"#".repeat(Math.min(6,n+2))} [${a+1}]. ${f(c)} (array)

`;i+=M+b(g,e,`arr${a}-${c}`)}}}),i}else return r.map((o,t)=>{if(m(o)||Array.isArray(o)){const u=$(o,e,n+1);return`### Item ${t+1}

${u}`}return`- ${k(o,e,n+1)}`}).join(`

`)}else return m(r)?p(r,e,n):S(r)}function D(r,e){const n={...O};return $(r,n,0)}export{D as j};
