(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{18:function(e,t,a){},30:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(20),r=a.n(c),l=(a(30),a(4)),o=(a(18),a(10)),i=a(2),d=Object(n.createContext)(),b=a(0);var m=function(){var e=Object(i.e)(),t=Object(i.f)(),a=Object(n.useContext)(d).resetNotes;return Object(n.useEffect)((function(){}),[e]),Object(b.jsx)("div",{children:Object(b.jsx)("div",{children:Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)(o.b,{className:"navbar-brand",to:"/home",children:"TIJORI"}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(b.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(o.b,{className:"nav-link ".concat("/about"===(null===e||void 0===e?void 0:e.pathname)?"":"active"),to:"/about",role:"button",children:"About"})})}),localStorage.getItem("token")?Object(b.jsxs)("form",{className:"d-flex",role:"search",children:[Object(b.jsx)("button",{className:"btn btn-primary mx-2",role:"button",disabled:!0,children:localStorage.getItem("name")}),Object(b.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){a(),localStorage.removeItem("token"),localStorage.removeItem("name"),t("/home")},role:"button",children:"Log out"})]}):Object(b.jsxs)("form",{className:"d-flex",role:"search",children:[Object(b.jsx)(o.b,{className:"btn btn-primary mx-2",to:"/login",role:"button",children:"Login"}),Object(b.jsx)(o.b,{className:"btn btn-primary mx-2",to:"/signup",role:"button",children:"SignUp"})]})]})]})})})})},j=(a(32),a(13)),u=a.p+"static/media/title_image1.c249bf42.jpg",h=a.p+"static/media/title_image2.6c4d7b82.jpg",p=a.p+"static/media/title_image3.238888ef.jpg";function x(){return Object(b.jsx)("div",{children:Object(b.jsxs)(j.a,{children:[Object(b.jsxs)(j.a.Item,{interval:3e3,children:[Object(b.jsx)("img",{className:"d-block w-100",style:{height:"500px",width:"475px"},src:u,alt:"One"}),Object(b.jsxs)(j.a.Caption,{children:[Object(b.jsx)("h3",{children:"Label for first slide"}),Object(b.jsx)("p",{children:"Sample Text for Image One"})]})]}),Object(b.jsxs)(j.a.Item,{interval:3e3,children:[Object(b.jsx)("img",{className:"d-block w-100",style:{height:"500px",width:"475px"},src:h,alt:"Two"}),Object(b.jsxs)(j.a.Caption,{children:[Object(b.jsx)("h3",{children:"Label for second slide"}),Object(b.jsx)("p",{children:"Sample Text for Image Two"})]})]}),Object(b.jsxs)(j.a.Item,{interval:3e3,children:[Object(b.jsx)("img",{className:"d-block w-100",style:{height:"500px",width:"115px"},src:p,alt:"Three"}),Object(b.jsxs)(j.a.Caption,{children:[Object(b.jsx)("h3",{children:"Label for Third slide"}),Object(b.jsx)("p",{children:"Sample Text for Image Third"})]})]})]})})}var O=a.p+"static/media/logo_design.ec5be317.jpg";function f(){return Object(b.jsxs)("div",{className:"about-container",children:[Object(b.jsx)("h1",{className:"about-heading",children:"About Us"}),Object(b.jsxs)("div",{className:"about-content",children:[Object(b.jsx)("img",{src:O,alt:"About Us",className:"about-image"}),Object(b.jsx)("div",{className:"about-text",children:Object(b.jsx)("p",{children:"Welcome to our About page! We are a passionate team dedicated to building amazing web applications. Our mission is to provide the best user experience and deliver high-quality products that meet our customers' needs. Feel free to explore our website and learn more about what we do! Welcome to our About page! We are a passionate team dedicated to building amazing web applications. Our mission is to provide the best user experience and deliver high-quality products that meet our customers' needs. Feel free to explore our website and learn more about what we do! Welcome to our About page! We are a passionate team dedicated to building amazing web applications. Our mission is to provide the best user experience and deliver high-quality products that meet our customers' needs. Feel free to explore our website and learn more about what we do!"})})]})]})}var g=a(5),v=a(9),N=a(8),y=a(3),w=a.p+"static/media/priyanshu-removebg-preview.c601be09.png";function C(){var e=Object(n.useState)({name:"",email:"",message:""}),t=Object(l.a)(e,2),a=t[0],s=t[1],c=function(e){s(Object(y.a)(Object(y.a)({},a),{},Object(N.a)({},e.target.name,e.target.value)))},r=function(){var e=Object(v.a)(Object(g.a)().mark((function e(){return Object(g.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://tijori.onrender.com/email/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a.name,email:a.email,message:a.message})});case 2:e.sent;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=Object(v.a)(Object(g.a)().mark((function e(t){return Object(g.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,r();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"about-container",children:[Object(b.jsx)("h1",{className:"about-heading",children:"Contact Us"}),Object(b.jsxs)("div",{className:"about-content",children:[Object(b.jsx)("img",{src:w,alt:"About Us",className:"about-image"}),Object(b.jsx)("div",{className:"about-text",children:Object(b.jsxs)("form",{onSubmit:o,children:[Object(b.jsxs)("div",{className:"form-group mt-2",children:[Object(b.jsx)("label",{htmlFor:"exampleFormControlInput1 mb-4",children:Object(b.jsx)("b",{children:"Name"})}),Object(b.jsx)("input",{type:"name",className:"form-control",id:"exampleFormControlInput1",placeholder:"Your Name",name:"name",value:a.name,onChange:c})]}),Object(b.jsxs)("div",{className:"form-group mt-2",children:[Object(b.jsx)("label",{htmlFor:"exampleFormControlInput1 mb-4",children:Object(b.jsx)("b",{children:"Email address"})}),Object(b.jsx)("input",{type:"email",className:"form-control",id:"exampleFormControlInput1",placeholder:"name@example.com",name:"email",value:a.email,onChange:c})]}),Object(b.jsxs)("div",{className:"form-group mt-2",children:[Object(b.jsx)("label",{htmlFor:"exampleFormControlTextarea1",children:Object(b.jsx)("b",{children:"Feedback"})}),Object(b.jsx)("textarea",{className:"form-control mt-2",id:"exampleFormControlTextarea1",name:"message",value:a.message,onChange:c,rows:"3"})]}),Object(b.jsx)("button",{type:"submit",className:"btn btn-primary mt-3",children:"Submit"})]})})]})]})}var k=function(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)(x,{}),Object(b.jsx)(f,{}),Object(b.jsx)(C,{})]})},S=a(22),I=function(e){var t="https://tijori.onrender.com",a=Object(n.useState)([]),s=Object(l.a)(a,2),c=s[0],r=s[1],o=function(){var e=Object(v.a)(Object(g.a)().mark((function e(){var a,n;return Object(g.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t,"/notes/fetchAllNotes"),{method:"GET",headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("token")}});case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,console.log(n),r(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=Object(v.a)(Object(g.a)().mark((function e(a){var n,s,c,l,o;return Object(g.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.title,s=a.description,c=a.tag,e.next=3,fetch("".concat(t,"/notes/addNote"),{method:"POST",headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("token")},body:JSON.stringify({title:n,description:s,tag:c})});case 3:return l=e.sent,e.next=6,l.json();case 6:o=e.sent,r((function(e){return[].concat(Object(S.a)(e),[o])}));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(v.a)(Object(g.a)().mark((function e(a){var n,s;return Object(g.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t,"/notes/deletenote/").concat(a),{method:"DELETE",headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("token")}});case 2:return n=e.sent,e.next=5,n.json();case 5:e.sent,s=c.filter((function(e){return e._id!==a})),r(s);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(v.a)(Object(g.a)().mark((function e(a,n,s,l){var o,i,d;return Object(g.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t,"/notes/updatenote/").concat(a),{method:"PUT",headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("token")},body:JSON.stringify({title:n,description:s,tag:l})});case 2:return o=e.sent,e.next=5,o.json();case 5:e.sent,i=JSON.parse(JSON.stringify(c)),d=0;case 8:if(!(d<i.length)){e.next=17;break}if(i[d]._id!==a){e.next=14;break}return i[d].title=n,i[d].description=s,i[d].tag=l,e.abrupt("break",17);case 14:d++,e.next=8;break;case 17:r(i);case 18:case"end":return e.stop()}}),e)})));return function(t,a,n,s){return e.apply(this,arguments)}}();return Object(b.jsx)(d.Provider,{value:{Notes:c,addNote:i,deleteNote:m,editNote:j,setNotes:r,getNotes:o,resetNotes:function(){r([])}},children:e.children})};var T=function(e){return Object(b.jsx)("div",{children:e.alert&&Object(b.jsx)("div",{className:"alert alert-".concat(e.alert.color),role:"alert",children:e.alert.message})})};function F(e){var t=e.showAlert,a=Object(n.useState)({email:"",name:"",password:"",cPassword:""}),s=Object(l.a)(a,2),c=s[0],r=s[1],o=Object(i.f)(),d=function(){var e=Object(v.a)(Object(g.a)().mark((function e(a){var n,s,r,l,i;return Object(g.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n=c.name,s=c.email,r=c.password,e.next=4,fetch("https://tijori.onrender.com/auth/createUser",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n,email:s,password:r})});case 4:return l=e.sent,e.next=7,l.json();case 7:(i=e.sent).success?(localStorage.setItem("token",i.authToken),localStorage.setItem("name",i.name),o("/notes"),t("Congrats you own an online TIJORI now","success")):t("Invalid","danger");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(e){r(Object(y.a)(Object(y.a)({},c),{},Object(N.a)({},e.target.name,e.target.value)))};return Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("form",{children:[Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"email",className:"form-label",children:"Email address"}),Object(b.jsx)("input",{type:"email",className:"form-control",id:"email",name:"email",onChange:m,"aria-describedby":"emailHelp"}),Object(b.jsx)("div",{id:"emailHelp",className:"form-text",children:"We'll never share your email with anyone else."})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"name",className:"form-label",children:"Name"}),Object(b.jsx)("input",{type:"text",className:"form-control",id:"name",onChange:m,name:"name","aria-describedby":"emailHelp"})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"Password",className:"form-label",children:"Password"}),Object(b.jsx)("input",{type:"password",className:"form-control",onChange:m,name:"password",id:"Password",minLength:5,required:!0})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"confirmPassword",className:"form-label",children:"Confirm Password"}),Object(b.jsx)("input",{type:"password",className:"form-control",onChange:m,name:"cPassword",id:"cPassword",minLength:5,required:!0})]}),Object(b.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:d,children:"Submit"})]})})}var P=a.p+"static/media/login.7d7df093.jpg";function A(e){var t=e.showAlert,a=Object(i.f)(),s=Object(n.useState)({email:"",password:""}),c=Object(l.a)(s,2),r=c[0],o=c[1],d=function(){var e=Object(v.a)(Object(g.a)().mark((function e(n){var s,c;return Object(g.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,fetch("https://tijori.onrender.com/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:r.email,password:r.password})});case 3:return s=e.sent,e.next=6,s.json();case 6:(c=e.sent).success?(localStorage.setItem("token",c.authToken),localStorage.setItem("name",c.name),a("/notes"),t("Logged in successfully","success")):t("Internal server error","danger");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(e){o(Object(y.a)(Object(y.a)({},r),{},Object(N.a)({},e.target.name,e.target.value)))};return Object(b.jsxs)("div",{style:{backgroundImage:P},children:[Object(b.jsx)(T,{alert:alert}),Object(b.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:Object(b.jsxs)("form",{style:{width:"80vw"},children:[Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:"Email address"}),Object(b.jsx)("input",{type:"email",className:"form-control",id:"exampleInputEmail1",value:r.email,name:"email",onChange:m,"aria-describedby":"emailHelp"}),Object(b.jsx)("div",{id:"emailHelp",className:"form-text",children:"We'll never share your email with anyone else."})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"exampleInputPassword1",className:"form-label",children:"Password"}),Object(b.jsx)("input",{type:"password",className:"form-control",id:"exampleInputPassword1",name:"password",value:r.password,onChange:m})]}),Object(b.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:d,children:"log me IN"})]})})]})}function L(){var e=Object(n.useContext)(d).addNote,t=Object(n.useState)({title:"",description:"",tag:"default"}),a=Object(l.a)(t,2),s=a[0],c=a[1],r=function(e){c(Object(y.a)(Object(y.a)({},s),{},Object(N.a)({},e.target.name,e.target.value)))};return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"container my-3",children:[Object(b.jsx)("h2",{children:"Add a note"}),Object(b.jsx)("div",{className:"container my-3",children:Object(b.jsxs)("form",{children:[Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"title",className:"form-label",children:"Title"}),Object(b.jsx)("input",{type:"text",className:"form-control",id:"title",name:"title",onChange:r})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"description",className:"form-label",children:"Description"}),Object(b.jsx)("input",{type:"text",className:"form-control",id:"description",name:"description",onChange:r})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"tag",className:"form-label",children:"tag"}),Object(b.jsx)("input",{type:"text",className:"form-control",id:"tag",name:"tag",onChange:r})]}),Object(b.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:function(t){t.preventDefault(),e(s)},children:"Submit"})]})})]})})}var E=function(e){var t=Object(n.useContext)(d).deleteNote;return Object(b.jsx)("div",{children:Object(b.jsx)("div",{className:"col-md-3 ",children:Object(b.jsx)("div",{className:"card my-3 text-bg-light",style:{width:"18rem"},children:Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("h5",{className:"card-title",children:e.title}),Object(b.jsx)("p",{className:"card-text",children:e.description}),Object(b.jsx)("i",{className:"fa-solid fa-trash mx-3",onClick:function(){t(e.note._id)}}),Object(b.jsx)("i",{className:"fa-solid fa-pen-to-square",onClick:function(){e.updateNote(e.note)}})]})})})})};var J=function(){var e=Object(n.useContext)(d),t=e.Notes,a=e.getNotes,s=e.editNote,c=Object(n.useState)({id:"",etitle:"",edescription:"",etag:"default"}),r=Object(l.a)(c,2),o=r[0],m=r[1],j=Object(i.f)(),u=Object(n.useRef)(null),h=Object(n.useRef)(null);Object(n.useEffect)((function(){localStorage.getItem("token")?a():j("/login")}),[]);var p=function(e){u.current.click(),m({id:e._id,etitle:e.title,edescription:e.description,etag:e.tag})},x=function(e){m(Object(y.a)(Object(y.a)({},o),{},Object(N.a)({},e.target.name,e.target.value)))};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(L,{}),Object(b.jsx)("button",{type:"button",ref:u,className:"btn btn-primary d-none","data-bs-toggle":"modal","data-bs-target":"#exampleModal",children:"Launch demo modal"}),Object(b.jsx)("div",{className:"modal fade ",id:"exampleModal",tabIndex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(b.jsx)("div",{className:"modal-dialog",children:Object(b.jsxs)("div",{className:"modal-content",children:[Object(b.jsxs)("div",{className:"modal-header",children:[Object(b.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Modal title"}),Object(b.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(b.jsx)("div",{className:"modal-body",children:Object(b.jsx)("div",{className:"container my-3",children:Object(b.jsxs)("form",{children:[Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"etitle",className:"form-label",children:"Title"}),Object(b.jsx)("input",{type:"text",className:"form-control",id:"etitle",name:"etitle",value:o.etitle,onChange:x})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"edescription",className:"form-label",children:"Description"}),Object(b.jsx)("input",{type:"text",className:"form-control",id:"edescription",name:"edescription",value:o.edescription,onChange:x})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"etag",className:"form-label",children:"tag"}),Object(b.jsx)("input",{type:"text",className:"form-control",id:"etag",name:"etag",value:o.etag,onChange:x})]})]})})}),Object(b.jsxs)("div",{className:"modal-footer",children:[Object(b.jsx)("button",{type:"button",className:"btn btn-secondary",ref:h,"data-bs-dismiss":"modal",children:"Close"}),Object(b.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(e){e.preventDefault(),s(o.id,o.etitle,o.edescription,o.etag),h.current.click()},children:"Save changes"})]})]})})}),Object(b.jsxs)("div",{style:{margin:"auto",maxWidth:"90vw"},children:[Object(b.jsx)("h1",{children:"Your Notes"}),t.length?Object(b.jsx)("div",{className:"row row-cols-1 row-cols-md-3 g-4",children:t.map((function(e){return Object(b.jsx)(E,{updateNote:p,title:e.title,description:e.description,note:e},e._id)}))}):Object(b.jsx)("div",{children:Object(b.jsx)("h2",{children:"No notes to display. Please add some Notes"})})]})]})};var D=function(){var e=Object(n.useState)(null),t=Object(l.a)(e,2),a=t[0],s=t[1],c=function(e,t){s({message:e,color:t}),setTimeout((function(){s(null)}),1500)};return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(I,{children:Object(b.jsxs)(o.a,{children:[Object(b.jsx)(m,{}),Object(b.jsx)(T,{alert:a}),Object(b.jsx)("div",{className:"containerFirst",children:Object(b.jsxs)(i.c,{children:[Object(b.jsx)(i.a,{exact:!0,path:"/",element:Object(b.jsx)(k,{showAlert:c})}),Object(b.jsx)(i.a,{exact:!0,path:"/home",element:Object(b.jsx)(k,{showAlert:c})}),Object(b.jsx)(i.a,{exact:!0,path:"/login",element:Object(b.jsx)(A,{showAlert:c})}),Object(b.jsx)(i.a,{exact:!0,path:"/about",element:Object(b.jsx)(f,{})}),Object(b.jsx)(i.a,{exact:!0,path:"/notes",element:Object(b.jsx)(J,{})}),Object(b.jsx)(i.a,{exact:!0,path:"/contact",element:Object(b.jsx)(C,{})}),Object(b.jsx)(i.a,{exact:!0,path:"/signup",element:Object(b.jsx)(F,{showAlert:c})})]})})]})})})},W=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,36)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))};r.a.createRoot(document.getElementById("root")).render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(D,{})})),W()}},[[33,1,2]]]);
//# sourceMappingURL=main.6b546099.chunk.js.map