(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(2),s=a(6),o=a(7),c=(a(14),a(1)),d=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],u=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}],l=a(9),m=a.n(l),j=a(0),b=function(e){var t=e.user,a=t.email,n=t.name;return Object(j.jsx)("a",{className:"UserInfo",href:"mailto:".concat(a),children:n})},h=function(e){var t=e.todo,a=t.id,n=t.title,i=t.completed,r=t.user;return Object(j.jsxs)("article",{"data-id":a,className:m()("TodoInfo",{"TodoInfo--completed":i}),children:[Object(j.jsx)("h2",{className:"TodoInfo__title",children:n}),r&&Object(j.jsx)(b,{user:r})]})},f=function(e){var t=e.todos;return Object(j.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(j.jsx)(h,{"data-id":e.id,todo:e},e.id)}))})},O=function(e){var t=e.onAdd,a=e.users,n=Object(c.useState)(0),i=Object(r.a)(n,2),s=i[0],o=i[1],d=Object(c.useState)(""),u=Object(r.a)(d,2),l=u[0],m=u[1],b=Object(c.useState)(!1),h=Object(r.a)(b,2),f=h[0],O=h[1],p=Object(c.useState)(!1),x=Object(r.a)(p,2),v=x[0],y=x[1];return Object(j.jsxs)("form",{action:"/api/todos",method:"POST",onSubmit:function(e){if(e.preventDefault(),!s||!l)return O(!s),void y(!l);t(s,l),O(!1),y(!1),m(""),o(0)},children:[Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("input",{type:"text","data-cy":"titleInput",value:l,onChange:function(e){return m(e.target.value)}}),Boolean(v)&&Object(j.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(j.jsxs)("div",{className:"field",children:[Object(j.jsxs)("select",{"data-cy":"userSelect",value:s,onChange:function(e){return o(+e.target.value)},children:[Object(j.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),a.map((function(e){return Object(j.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),Boolean(f)&&Object(j.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(j.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]})};function p(e){return d.find((function(t){return t.id===e}))||null}var x=function(e){return Math.max.apply(Math,Object(s.a)(e.map((function(e){return e.id}))))+1},v=function(){var e=Object(c.useState)(u.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{user:p(e.userId)})}))),t=Object(r.a)(e,2),a=t[0],n=t[1];return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Add todo form"}),Object(j.jsx)(O,{onAdd:function(e,t){var i=p(e),r={id:x(a),title:t,completed:!1,userId:e,user:i};null!==i&&n((function(e){return[].concat(Object(s.a)(e),[r])}))},users:d}),Object(j.jsx)(f,{todos:a})]})};i.a.render(Object(j.jsx)(v,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.1912bde0.chunk.js.map