import{S as pe,i as ue,s as ce,ai as ne,e as $,f as H,g as L,q as c,n as V,h as S,aj as $e,k as z,j as N,ab as se,L as be,c as F,a as O,t as w,b as y,d as j,o as he,H as we,y as K,z as ee,u as Y,B as te,v as _e,w as me,M as ye,A as R,_ as ke,a2 as ve,a6 as J,a7 as le,D as Ce,l as Q,p as Le,r as oe,x as Se,ak as x,a3 as Fe,ah as Oe,af as je,ag as D,a5 as Be,aa as Ee}from"./Layout-af65b6e0.js";import{L as Me,C as Ne,O as Pe,_ as qe,J as Te,a as Ae,G as Je,P as De}from"./index-4b67ecab.js";function ae(o,t,n){const e=o.slice();return e[1]=t[n][0],e[2]=t[n][1],e}function re(o){let t,n,e=o[1]+"",l,s,r,a=o[2]+"",i,u;return{c(){t=$("tr"),n=$("td"),l=z(e),s=N(),r=$("td"),i=z(a),u=N()},m(_,m){L(_,t,m),c(t,n),c(n,l),c(t,s),c(t,r),c(r,i),c(t,u)},p(_,m){m&1&&e!==(e=_[1]+"")&&se(l,e),m&1&&a!==(a=_[2]+"")&&se(i,a)},d(_){_&&S(t)}}}function He(o){let t,n,e=ne(Object.entries(o[0])),l=[];for(let s=0;s<e.length;s+=1)l[s]=re(ae(o,e,s));return{c(){t=$("table"),n=$("tbody");for(let s=0;s<l.length;s+=1)l[s].c();H(t,"class","svelte-lh2o9l")},m(s,r){L(s,t,r),c(t,n);for(let a=0;a<l.length;a+=1)l[a]&&l[a].m(n,null)},p(s,[r]){if(r&1){e=ne(Object.entries(s[0]));let a;for(a=0;a<e.length;a+=1){const i=ae(s,e,a);l[a]?l[a].p(i,r):(l[a]=re(i),l[a].c(),l[a].m(n,null))}for(;a<l.length;a+=1)l[a].d(1);l.length=e.length}},i:V,o:V,d(s){s&&S(t),$e(l,s)}}}function Ge(o,t,n){let{properties:e}=t;return o.$$set=l=>{"properties"in l&&n(0,e=l.properties)},[e]}class Ie extends pe{constructor(t){super(),ue(this,t,Ge,He,ce,{properties:0})}}function Re(o){let t,n,e;return n=new we({props:{app:"costs"}}),{c(){t=$("div"),F(n.$$.fragment),H(t,"slot","top")},m(l,s){L(l,t,s),O(n,t,null),e=!0},p:V,i(l){e||(w(n.$$.fragment,l),e=!0)},o(l){y(n.$$.fragment,l),e=!1},d(l){l&&S(t),j(n)}}}function ie(o){let t,n,e,l,s,r,a,i,u,_,m,v,P,b,C,q,E,T,G;const X=[ze,Xe],B=[];function d(p,h){return p[5]=="lts"?0:1}i=d(o),u=B[i]=X[i](o);function g(p){o[23](p)}let M={};return o[1]!==void 0&&(M.cost=o[1]),C=new Ae({props:M}),K.push(()=>ee(C,"cost",g)),{c(){t=$("label"),n=z(`Color edges by:
        `),e=$("select"),l=$("option"),l.textContent="LTS",s=$("option"),s.textContent="Edge cost (relative to length)",r=$("option"),r.textContent="Nearby amenities",a=N(),u.c(),_=N(),m=$("label"),v=$("input"),P=z(`
        Show cyclists not allowed`),b=N(),F(C.$$.fragment),l.__value="lts",Q(l,l.__value),s.__value="cost",Q(s,s.__value),r.__value="nearby_amenities",Q(r,r.__value),o[5]===void 0&&Le(()=>o[21].call(e)),H(v,"type","checkbox"),R(m,"color",J.lts_not_allowed)},m(p,h){L(p,t,h),c(t,n),c(t,e),c(e,l),c(e,s),c(e,r),oe(e,o[5],!0),L(p,a,h),B[i].m(p,h),L(p,_,h),L(p,m,h),c(m,v),v.checked=o[6],c(m,P),L(p,b,h),O(C,p,h),E=!0,T||(G=[Y(e,"change",o[21]),Y(v,"change",o[22])],T=!0)},p(p,h){h&32&&oe(e,p[5]);let U=i;i=d(p),i===U?B[i].p(p,h):(_e(),y(B[U],1,1,()=>{B[U]=null}),me(),u=B[i],u?u.p(p,h):(u=B[i]=X[i](p),u.c()),w(u,1),u.m(_.parentNode,_)),h&64&&(v.checked=p[6]);const W={};!q&&h&2&&(q=!0,W.cost=p[1],te(()=>q=!1)),C.$set(W)},i(p){E||(w(u),w(C.$$.fragment,p),E=!0)},o(p){y(u),y(C.$$.fragment,p),E=!1},d(p){p&&(S(t),S(a),S(_),S(m),S(b)),B[i].d(p),j(C,p),T=!1,Se(G)}}}function Xe(o){let t,n;return t=new Oe({props:{colorScale:x,limits:Z(o[5],o[9],o[10]),decimalPlaces:1}}),{c(){F(t.$$.fragment)},m(e,l){O(t,e,l),n=!0},p(e,l){const s={};l&1568&&(s.limits=Z(e[5],e[9],e[10])),t.$set(s)},i(e){n||(w(t.$$.fragment,e),n=!0)},o(e){y(t.$$.fragment,e),n=!1},d(e){j(t,e)}}}function ze(o){let t,n,e,l;return t=new je({props:{rows:[[`${D.lts1}: ${o[8][1].toFixed(0)}% of roads by distance`,J.lts1],[`${D.lts2}: ${o[8][2].toFixed(0)}%`,J.lts2],[`${D.lts3}: ${o[8][3].toFixed(0)}%`,J.lts3],[`${D.lts4}: ${o[8][4].toFixed(0)}%`,J.lts4]]}}),{c(){F(t.$$.fragment),n=N(),e=$("p"),e.innerHTML='Note: LTS model from <a href="https://github.com/BikeOttawa/stressmodel/blob/master/stressmodel.js" target="_blank">BikeOttawa</a>'},m(s,r){O(t,s,r),L(s,n,r),L(s,e,r),l=!0},p(s,r){const a={};r&256&&(a.rows=[[`${D.lts1}: ${s[8][1].toFixed(0)}% of roads by distance`,J.lts1],[`${D.lts2}: ${s[8][2].toFixed(0)}%`,J.lts2],[`${D.lts3}: ${s[8][3].toFixed(0)}%`,J.lts3],[`${D.lts4}: ${s[8][4].toFixed(0)}%`,J.lts4]]),t.$set(a)},i(s){l||(w(t.$$.fragment,s),l=!0)},o(s){y(t.$$.fragment,s),l=!1},d(s){s&&(S(n),S(e)),j(t,s)}}}function Ue(o){let t,n,e,l,s,r,a,i,u,_,m,v,P,b,C,q,E,T,G;function X(g){o[18](g)}let B={};o[0]!==void 0&&(B.example=o[0]),m=new Ne({props:B}),K.push(()=>ee(m,"example",X)),b=new Pe({props:{map:o[2]}}),b.$on("gotXml",o[15]),b.$on("loading",o[19]),b.$on("error",o[20]);let d=o[3]&&ie(o);return{c(){t=$("div"),n=$("details"),e=$("summary"),e.textContent="Change areas",l=N(),s=$("label"),r=z("Open an "),a=$("i"),a.textContent=".osm.pbf",i=z(`
        file
        `),u=$("input"),_=N(),F(m.$$.fragment),P=N(),F(b.$$.fragment),q=N(),d&&d.c(),H(e,"role","button"),H(e,"class","secondary"),H(u,"type","file"),n.open=C=!o[3],H(t,"slot","left")},m(g,M){L(g,t,M),c(t,n),c(n,e),c(n,l),c(n,s),c(s,r),c(s,a),c(s,i),c(s,u),o[17](u),c(n,_),O(m,n,null),c(n,P),O(b,n,null),c(t,q),d&&d.m(t,null),E=!0,T||(G=Y(u,"change",o[12]),T=!0)},p(g,M){const p={};!v&&M&1&&(v=!0,p.example=g[0],te(()=>v=!1)),m.$set(p);const h={};M&4&&(h.map=g[2]),b.$set(h),(!E||M&8&&C!==(C=!g[3]))&&(n.open=C),g[3]?d?(d.p(g,M),M&8&&w(d,1)):(d=ie(g),d.c(),w(d,1),d.m(t,null)):d&&(_e(),y(d,1,1,()=>{d=null}),me())},i(g){E||(w(m.$$.fragment,g),w(b.$$.fragment,g),w(d),E=!0)},o(g){y(m.$$.fragment,g),y(b.$$.fragment,g),y(d),E=!1},d(g){g&&S(t),o[17](null),j(m),j(b),d&&d.d(),T=!1,G()}}}function We(o){let t,n,e;return n=new Ie({props:{properties:o[28]}}),{c(){t=$("div"),F(n.$$.fragment),R(t,"max-width","30vw"),R(t,"max-height","60vh"),R(t,"overflow","auto")},m(l,s){L(l,t,s),O(n,t,null),e=!0},p(l,s){const r={};s&268435456&&(r.properties=l[28]),n.$set(r)},i(l){e||(w(n.$$.fragment,l),e=!0)},o(l){y(n.$$.fragment,l),e=!1},d(l){l&&S(t),j(n)}}}function Ze(o){let t,n;return t=new Ee({props:{$$slots:{default:[We,({props:e})=>({28:e}),({props:e})=>e?268435456:0]},$$scope:{ctx:o}}}),{c(){F(t.$$.fragment)},m(e,l){O(t,e,l),n=!0},p(e,l){const s={};l&805306368&&(s.$$scope={dirty:l,ctx:e}),t.$set(s)},i(e){n||(w(t.$$.fragment,e),n=!0)},o(e){y(t.$$.fragment,e),n=!1},d(e){j(t,e)}}}function Ke(o){let t,n;return t=new Be({props:{manageHoverState:!0,hoverCursor:"pointer",paint:{"line-width":5,"line-color":o[13](o[5],o[9],o[10]),"line-opacity":o[14](o[5],o[6])},beforeId:"Road labels",$$slots:{default:[Ze]},$$scope:{ctx:o}}}),t.$on("click",xe),{c(){F(t.$$.fragment)},m(e,l){O(t,e,l),n=!0},p(e,l){const s={};l&1632&&(s.paint={"line-width":5,"line-color":e[13](e[5],e[9],e[10]),"line-opacity":e[14](e[5],e[6])}),l&536870912&&(s.$$scope={dirty:l,ctx:e}),t.$set(s)},i(e){n||(w(t.$$.fragment,e),n=!0)},o(e){y(t.$$.fragment,e),n=!1},d(e){j(t,e)}}}function Qe(o){let t,n,e,l;return t=new Je({props:{data:o[4],$$slots:{default:[Ke]},$$scope:{ctx:o}}}),e=new De({}),{c(){F(t.$$.fragment),n=N(),F(e.$$.fragment)},m(s,r){O(t,s,r),L(s,n,r),O(e,s,r),l=!0},p(s,r){const a={};r&16&&(a.data=s[4]),r&536872544&&(a.$$scope={dirty:r,ctx:s}),t.$set(a)},i(s){l||(w(t.$$.fragment,s),w(e.$$.fragment,s),l=!0)},o(s){y(t.$$.fragment,s),y(e.$$.fragment,s),l=!1},d(s){s&&S(n),j(t,s),j(e,s)}}}function Ve(o){let t,n,e,l;function s(a){o[16](a)}let r={style:"https://api.maptiler.com/maps/dataviz/style.json?key=MZEJTanw3WpxRvt7qDfo",standardControls:!0,hash:!0,$$slots:{default:[Qe]},$$scope:{ctx:o}};return o[2]!==void 0&&(r.map=o[2]),n=new ye({props:r}),K.push(()=>ee(n,"map",s)),{c(){t=$("div"),F(n.$$.fragment),H(t,"slot","main"),R(t,"position","relative"),R(t,"width","100%"),R(t,"height","100vh")},m(a,i){L(a,t,i),O(n,t,null),l=!0},p(a,i){const u={};i&536872560&&(u.$$scope={dirty:i,ctx:a}),!e&&i&4&&(e=!0,u.map=a[2],te(()=>e=!1)),n.$set(u)},i(a){l||(w(n.$$.fragment,a),l=!0)},o(a){y(n.$$.fragment,a),l=!1},d(a){a&&S(t),j(n)}}}function Ye(o){let t,n,e,l;return t=new be({props:{$$slots:{main:[Ve],left:[Ue],top:[Re]},$$scope:{ctx:o}}}),e=new Me({props:{loading:o[7]}}),{c(){F(t.$$.fragment),n=N(),F(e.$$.fragment)},m(s,r){O(t,s,r),L(s,n,r),O(e,s,r),l=!0},p(s,[r]){const a={};r&536875007&&(a.$$scope={dirty:r,ctx:s}),t.$set(a);const i={};r&128&&(i.loading=s[7]),e.$set(i)},i(s){l||(w(t.$$.fragment,s),w(e.$$.fragment,s),l=!0)},o(s){y(t.$$.fragment,s),y(e.$$.fragment,s),l=!1},d(s){s&&S(n),j(t,s),j(e,s)}}}function xe(o){let t=o.detail.features[0].properties.way;window.open(`http://openstreetmap.org/way/${t}`,"_blank")}function Z(o,t,n){if(o=="lts")return[];if(o=="cost")return fe(0,t);if(o=="nearby_amenities")return fe(0,n);throw new Error("unreachable")}function fe(o,t){let n=[],e=(t-o)/5;for(let l=0;l<6;l++)n.push(o+l*e);return n}function et(o,t,n){he(async()=>{await qe(),await ke()});let e,l,s="",r={type:"FeatureCollection",features:[]},a="Distance",i="cost",u=!1,_="",m=[0,0,0,0,0],v=1,P=1,b;async function C(f){n(0,s=""),n(7,_="Loading file"),q(await b.files[0].arrayBuffer())}function q(f){try{n(3,l=new Te(new Uint8Array(f))),n(1,a="Distance");let k=l.getBounds();e.fitBounds([[k[0],k[1]],[k[2],k[3]]],{padding:20,animate:!1}),T()}catch(k){window.alert(`Problem importing osm.pbf file: ${k}`)}n(7,_="")}async function E(f){if(f!=""){n(7,_=`Loading ${f}`);let k=await fetch(`https://assets.od2net.org/pbf_clips/${f}.osm.pbf`);q(await k.arrayBuffer())}}function T(){n(4,r=JSON.parse(l.debugNetwork()));let f=0,k=[0,0,0,0,0];n(9,v=0),n(10,P=0);for(let A of r.features){let I=A.properties;n(10,P=Math.max(P,I.nearby_amenities)),I.length&&(n(9,v=Math.max(v,I.forward_cost/I.length)),f+=I.length,k[I.lts]+=I.length)}n(8,m=k.map(A=>A/f*100))}function G(f,k,A){if(f=="lts")return ve;if(f=="cost")return["case",["==",0,["get","lts"]],J.lts_not_allowed,le(["/",["get","forward_cost"],["get","length"]],Z(f,k,A),x)];if(f=="nearby_amenities")return le(["get","nearby_amenities"],Z(f,k,A),x);throw new Error("unreachable")}function X(f,k){let A=Fe(1,.5);return f=="nearby_amenities"?["case",["==",0,["get","nearby_amenities"]],0,A]:k?A:["case",["==",0,["get","lts"]],0,A]}function B(f){n(7,_="Parsing XML"),q(new TextEncoder().encode(f.detail)),n(7,_="")}function d(f){l&&(l.updateCostFunction(f),T())}function g(f){e=f,n(2,e)}function M(f){K[f?"unshift":"push"](()=>{b=f,n(11,b)})}function p(f){s=f,n(0,s)}const h=f=>n(7,_=f.detail),U=f=>n(7,_=f.detail);function W(){i=Ce(this),n(5,i)}function de(){u=this.checked,n(6,u)}function ge(f){a=f,n(1,a)}return o.$$.update=()=>{o.$$.dirty&1&&E(s),o.$$.dirty&2&&d(a)},[s,a,e,l,r,i,u,_,m,v,P,b,C,G,X,B,g,M,p,h,U,W,de,ge]}class tt extends pe{constructor(t){super(),ue(this,t,et,Ye,ce,{})}}new tt({target:document.getElementById("app")});
