(this["webpackJsonptodo-react-ts"]=this["webpackJsonptodo-react-ts"]||[]).push([[0],{23:function(t,e,o){},24:function(t,e,o){},26:function(t,e,o){},27:function(t,e,o){},28:function(t,e,o){"use strict";o.r(e);var c=o(0),n=o.n(c),a=o(5),s=o.n(a),r=o(2),d=o(7),i=o(3),l=o(11),b=Object(d.b)({name:"todos",initialState:{todos:[]},reducers:{addTodo:function(t,e){t.todos=[].concat(Object(l.a)(t.todos),[{id:Date.now(),completed:!1,text:e.payload}])},removeTodo:function(t,e){t.todos=t.todos.filter((function(t){return t.id!==e.payload}))},toggleTodo:function(t,e){t.todos=t.todos.map((function(t){return t.id!==e.payload?t:Object(i.a)(Object(i.a)({},t),{},{completed:!t.completed})}))}}}),j=b.actions,u=j.addTodo,m=j.removeTodo,O=j.toggleTodo,f=b.reducer,x=Object(d.a)({reducer:{todos:f}}),h=function(t){return t.todos.todos},p=(o(23),o(24),o(1)),N=function(t){var e=Object(r.b)(),o="todo__label ".concat(t.completed?"todo__label_done":""),c="btn ".concat(t.completed?" btn-danger":"btn-outline-danger disabled");return Object(p.jsxs)("li",{className:"todo",children:[Object(p.jsxs)("div",{className:"todo__check",onChange:function(){e(O(t.id))},children:[Object(p.jsx)("input",{className:"todo__input",type:"checkbox",id:t.text}),Object(p.jsx)("label",{className:o,htmlFor:t.text,children:t.text})]}),Object(p.jsx)("button",{type:"button",className:c,onClick:function(){e(m(t.id))},children:"Remove"})]})},_=(o(26),function(){var t=Object(r.c)(h);return Object(p.jsxs)("ul",{className:"todos",children:[Object(p.jsx)("h3",{className:"form__title",children:"List of Todos"}),t.map((function(t){return Object(p.jsx)(N,Object(i.a)({},t),t.id)}))]})}),v=o(12),y=(o(27),function(){var t=Object(r.b)(),e=Object(c.useState)(""),o=Object(v.a)(e,2),n=o[0],a=o[1],s="btn ".concat(""!==n?" btn-primary":"btn-outline-primary disabled");return Object(p.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),""!==n?t(u(n)):alert("Enter the task"),a("")},children:[Object(p.jsx)("h2",{className:"form__title",children:"ToDo application (React+Rredux+TS)"}),Object(p.jsxs)("div",{className:"mb-3",children:[Object(p.jsx)("label",{className:"form-label",children:"Enter new todo"}),Object(p.jsxs)("div",{className:"form__container",children:[Object(p.jsx)("input",{type:"text",className:"form-control form__input",name:"todo",value:n,onChange:function(t){a(t.currentTarget.value)},placeholder:"Enter new todo",autoFocus:!0}),Object(p.jsx)("button",{type:"submit",className:s,onKeyDown:function(e){"Enter"===e.key&&t(u(n)),a("")},children:"Create"})]})]})]})});var g=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("header",{className:"header"}),Object(p.jsxs)("main",{className:"main",children:[Object(p.jsx)(y,{}),Object(p.jsx)(_,{})]}),Object(p.jsx)("footer",{className:"footer"})]})};s.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(r.a,{store:x,children:Object(p.jsx)(g,{})})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.db3f9d0a.chunk.js.map