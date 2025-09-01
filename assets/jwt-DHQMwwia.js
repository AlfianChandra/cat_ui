const t=e=>{try{const o=e.split(".")[1],r=atob(o);return JSON.parse(r)}catch(o){return console.error("[decodeJWT] Invalid token format or corrupted:",o),null}};export{t as d};
