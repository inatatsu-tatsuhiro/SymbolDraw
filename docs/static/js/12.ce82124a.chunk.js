(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[12],{1733:function(t,e,n){"use strict";n.r(e);var c,i,r,a,s,l=n(0),o=n(14),j=n(9),u=n(287),b=n(1698),h=n(18),d=n(1678),p=n(22),O=n(1727),f=n(53),x=n(2),g=function(t){var e=t.file,n=t.setFile,c=Object(l.useState)(!1),i=Object(j.a)(c,2),r=i[0],a=i[1],s=Object(f.a)().getI18nText,o=Object(l.useCallback)((function(t){console.log("file",t),n(t[0])}),[n]),h=Object(b.a)({onDrop:o}),p=h.getRootProps,g=h.getInputProps;return null!==e?Object(x.jsxs)(m,{onMouseEnter:function(){return a(!0)},onMouseLeave:function(){return a(!1)},children:[r&&Object(x.jsx)(A,{onClick:function(){return n(null)},children:Object(x.jsx)(O.a,{title:"Delete",placement:"top",children:Object(x.jsx)(d.a,{})})}),Object(x.jsx)(y,{src:URL.createObjectURL(e),alt:e.name})]}):Object(x.jsxs)(m,Object(u.a)(Object(u.a)({},p()),{},{children:[Object(x.jsx)("input",Object(u.a)({},g())),Object(x.jsx)(v,{children:s("component_dropzone")})]}))},m=Object(h.a)("div")(c||(c=Object(o.a)(["\n  width: 100%;\n  height: 100%;\n  position: relative;\n  background: ",";\n\n  border: solid "," 1px;\n  border-radius: 32px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  text-align: center;\n"])),p.b.default,p.b.grayscale),v=Object(h.a)("div")(i||(i=Object(o.a)(["\n  font-size: 24px;\n  color: ",";\n"])),p.b.grayscale),y=Object(h.a)("img")(r||(r=Object(o.a)(["\n  object-fit: contain;\n  width: 100%;\n  height: 100%;\n"]))),A=Object(h.a)("div")(a||(a=Object(o.a)(["\n  background: ",";\n  position: absolute;\n  width: 32px;\n  height: 32px;\n  top: 16px;\n  right: 16px;\n\n  display: flex;\n  border-radius: 100px;\n  justify-content: center;\n  align-items: center;\n"])),p.b.default),w=n(299),S=n(140),k=n.n(S),R=(n(1728),n(1679)),J=n(1680),T=(n(194),"https://sym-test-01.opening-line.jp:3001"),E=function(t){var e=t.match(/--\sApostille\sTX\s(\w+)\s--/);return null===e||e.length<1?(console.log("not match"),""):(console.log("match"),e[1])},F=function(t){if(t.isValid){if(0===t.type)return 0;if(1===t.type)return 1}return-1},L=function(){var t=Object(w.a)(k.a.mark((function t(e){var n,c;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,R.readAsArrayBuffer(e);case 2:return n=t.sent,c=E(e.name),t.abrupt("return",new Promise((function(t,e){J.AuditService.audit(n,c,T).then((function(n){if(n.signer&&n.apostilleAccount){var i=F(n),r=JSON.parse(JSON.stringify(n)).timestamp.split(".")[0]||"";t({signer:n.signer,apostilleAcount:n.apostilleAccount,hash:c,status:i,timestamp:r})}else e()})).catch((function(t){console.error("ERROR"),console.error(t),e()}))})));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),P=n(27),z=n(1741),C=n(115),D=n(1742),I=n(1743),M=n(1744),N=n(1745),U=function(){var t=Object(l.useState)(null),e=Object(j.a)(t,2),n=e[0],c=e[1],i=Object(l.useState)(null),r=Object(j.a)(i,2),a=r[0],s=r[1];return Object(l.useEffect)((function(){null!==n&&L(n).then((function(t){console.log("r",t),s(t)}))}),[n]),null===n||null===a?Object(x.jsx)("div",{children:Object(x.jsxs)(B,{children:[Object(x.jsx)(g,{file:n,setFile:c}),Object(x.jsx)(P.a,{margin:"8px"})]})}):Object(x.jsx)("div",{children:Object(x.jsxs)(B,{children:[Object(x.jsx)(g,{file:n,setFile:c}),Object(x.jsx)(P.a,{margin:"16px",children:Object(x.jsx)(z.a,{component:C.a,children:Object(x.jsx)(D.a,{sx:{minWidth:650},"aria-label":"simple table",children:Object(x.jsxs)(I.a,{children:[Object(x.jsxs)(M.a,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(x.jsx)(N.a,{align:"right",children:"ApostilleAccount"}),Object(x.jsx)(N.a,{align:"right",children:a.apostilleAcount.plain()})]}),Object(x.jsxs)(M.a,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(x.jsx)(N.a,{align:"right",children:"SignerAccount"}),Object(x.jsx)(N.a,{align:"right",children:a.signer.plain()})]}),Object(x.jsxs)(M.a,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(x.jsx)(N.a,{align:"right",children:"TransactionHash"}),Object(x.jsx)(N.a,{align:"right",children:a.hash})]}),Object(x.jsxs)(M.a,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(x.jsx)(N.a,{align:"right",children:"TimeStamp"}),Object(x.jsx)(N.a,{align:"right",children:a.timestamp})]})]})})})})]})})},B=Object(h.a)("div")(s||(s=Object(o.a)(["\n  height: 400px;\n"])));e.default=function(){return Object(x.jsx)(U,{})}},300:function(t,e){},301:function(t,e){},303:function(t,e){},304:function(t,e){},307:function(t,e){},308:function(t,e){},309:function(t,e){},310:function(t,e){},311:function(t,e){},313:function(t,e){},315:function(t,e){},317:function(t,e){}}]);
//# sourceMappingURL=12.ce82124a.chunk.js.map