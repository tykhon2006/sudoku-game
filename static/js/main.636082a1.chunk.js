(this.webpackJsonpsudoku=this.webpackJsonpsudoku||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(14),c=n.n(a),i=(n(29),n(3)),s=(n(30),n(9)),o=n(1),u=function(){return Object(o.jsx)("div",{children:Object(o.jsxs)("ul",{className:"mainMenu",children:[Object(o.jsx)("li",{children:Object(o.jsx)(s.b,{className:"mainMenu__link",to:"/easy",children:"Easy"})}),Object(o.jsx)("li",{children:Object(o.jsx)(s.b,{className:"mainMenu__link",to:"/middle",children:"Medium"})}),Object(o.jsx)("li",{children:Object(o.jsx)(s.b,{className:"mainMenu__link",to:"/pro",children:"Hard"})})]})})},l=n(16),j=n(24),b=n(22),d=Object(i.e)((function(e){Object(r.useEffect)((function(){!function(){var t,n=Object(b.a)(e.matrix);try{for(n.s();!(t=n.n()).done;)if(t.value.some((function(e){return 0===e})))return}catch(r){n.e(r)}finally{n.f()}e.startGame(),e.history.push("/win")}()}),[e.matrix]);var t=Object(r.useState)([0,0]),n=Object(j.a)(t,2),a=n[0],c=n[1],i=function(t){return e.setValue(t.target.dataset.value,a)},s=e.values.map((function(e){return Object(o.jsx)("span",{onClick:i,"data-value":e,children:e},e)})),u=e.matrix.map((function(e,t){return Object(o.jsx)("tr",{children:e.map((function(e,n){return Object(o.jsxs)("td",{onClick:function(){c([t,n])},children:[Object(o.jsx)("input",{id:"_".concat(t,"_").concat(n),type:"radio",name:"easy",value:e,className:"check"}),Object(o.jsx)("label",{htmlFor:"_".concat(t,"_").concat(n),className:"wrap ceil",children:e||""})]},"_".concat(t,"_").concat(n))}))},"_".concat(t))}));return Object(o.jsxs)("div",{className:"easy",children:[Object(o.jsx)("table",{className:"table",children:Object(o.jsx)("tbody",{children:u})}),Object(o.jsx)("div",{className:"wrap variants",children:s}),Object(o.jsxs)("div",{className:"wrap error",children:["Errors: ",e.errors,"/3"]})]})})),x=n(23),O=n(8),m="SET-VALUE",h="START-GAME",f={chooseMatrix:function(){return Math.floor(Math.random()*this.optionMatrix.length)},optionMatrix:[[[[1,2,3,5,4,6],[6,5,4,3,1,2],[2,6,1,4,5,3],[4,3,5,6,2,1],[3,4,2,1,6,5],[5,1,6,2,3,4]],[[1,2,3,5,4,6],[6,5,4,3,1,2],[2,6,1,4,5,3],[4,3,5,6,2,1],[3,4,2,1,6,5],[5,1,6,2,3,0]]]]},v={matrix:{},values:[1,2,3,4,5,6],errors:0},p=function(e,t){var n=t.chooseMatrix(),r=JSON.stringify(t.optionMatrix[n][1]);r=JSON.parse(r);var a=JSON.stringify(t.optionMatrix[n][0]);return a=JSON.parse(a),Object(O.a)(Object(O.a)({},e),{},{matrix:Object(O.a)(Object(O.a)({},e.matrix),{},{start:r,end:a}),errors:0})},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:var n=Object(O.a)(Object(O.a)({},e),{},{matrix:Object(O.a)(Object(O.a)({},e.matrix),{},{start:Object(x.a)(e.matrix.start)})});return e.matrix.end[t.indexArr[0]][t.indexArr[1]]===+t.value?n.matrix.start[t.indexArr[0]][t.indexArr[1]]=+t.value:n.errors++,n;case h:return p(e,f)}return p(e,f)},N=Object(l.b)((function(e){return{matrix:e.level1.matrix.start,values:e.level1.values,errors:e.level1.errors}}),{setValue:function(e,t){return{type:m,value:e,indexArr:t}},startGame:function(){return{type:h}}})(d),M=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"You win!"}),Object(o.jsx)(s.b,{className:"mainMenu__link",to:"/menu",children:"Play again"})]})};var _=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(i.a,{path:["/","/menu"],exact:!0,render:function(){return Object(o.jsx)(u,{})}}),Object(o.jsx)(i.a,{path:"/easy",render:function(){return Object(o.jsx)(N,{})}}),Object(o.jsx)(i.a,{path:"/win",render:function(){return Object(o.jsx)(M,{})}})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))},k=n(21),w=Object(k.a)({level1:y}),A=Object(k.b)(w);window.store=A;var S=A;c.a.render(Object(o.jsx)(s.a,{basename:"/sudoku-game",children:Object(o.jsx)(l.a,{store:S,children:Object(o.jsx)(_,{})})}),document.getElementById("root")),g()}},[[37,1,2]]]);
//# sourceMappingURL=main.636082a1.chunk.js.map