(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},34:function(e,t,a){e.exports=a(48)},39:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(16),l=a.n(s),c=(a(39),a(1)),i=a.n(c),u=a(4),o=a(8),m=a(9),p=a(12),d=a(11),f=a(13),h="http://142.93.172.247:8080/Exam/";var E=new(function(){function e(){var t=this;Object(o.a)(this,e),this.login=function(){var e=Object(u.a)(i.a.mark(function e(a,n){var r,s,l;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.makeOptions("POST",!1,{username:a,password:n}),e.next=3,fetch(h+"api/login",r);case 3:return s=e.sent,e.next=6,s.json();case 6:if(l=e.sent,s.ok){e.next=9;break}throw{status:s.status,fullError:l};case 9:return t.setToken(s.token),sessionStorage.setItem("user",JSON.stringify({Username:l.username,Role:l.role})),e.abrupt("return",l);case 12:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),this.register=function(){var e=Object(u.a)(i.a.mark(function e(a,n,r){var s,l,c;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.makeOptions("POST",!1,{username:a,password:n,userRole:r}),e.next=3,fetch(h+"api/register",s);case 3:return l=e.sent,e.next=6,l.json();case 6:if(c=e.sent,l.ok){e.next=9;break}throw{status:l.status,fullError:c};case 9:return t.setToken(l.token),sessionStorage.setItem("user",JSON.stringify({Username:c.username,Role:c.role})),e.abrupt("return",c);case 12:case"end":return e.stop()}},e)}));return function(t,a,n){return e.apply(this,arguments)}}(),this.getFoodPlans=Object(u.a)(i.a.mark(function e(){var t,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(h+"api/MealPlanner");case 2:return t=e.sent,e.next=5,t.json();case 5:if(a=e.sent,t.ok){e.next=8;break}throw{status:t.status,fullError:a};case 8:return e.abrupt("return",a);case 9:case"end":return e.stop()}},e)})),this.getMyFoodPlans=Object(u.a)(i.a.mark(function e(){var a,n,r,s,l,c;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=sessionStorage.getItem("user"),n=JSON.parse(a),r={user:n.Username},s=t.makeOptions("POST",!0,r),e.next=6,fetch(h+"api/MealPlanner/My",s);case 6:return l=e.sent,e.next=9,l.json();case 9:if(c=e.sent,l.ok){e.next=12;break}throw{status:l.status,fullError:c};case 12:return e.abrupt("return",c);case 13:case"end":return e.stop()}},e)})),this.getRecipe=function(){var e=Object(u.a)(i.a.mark(function e(t){var a,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(h+"api/recepies/"+t);case 2:return a=e.sent,e.next=5,a.json();case 5:if(n=e.sent,a.ok){e.next=8;break}throw{status:a.status,fullError:n};case 8:return e.abrupt("return",n);case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),this.getAllRecipe=function(){var e=Object(u.a)(i.a.mark(function e(t){var a,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(h+"api/recepies");case 2:return a=e.sent,e.next=5,a.json();case 5:if(n=e.sent,a.ok){e.next=8;break}throw{status:a.status,fullError:n};case 8:return e.abrupt("return",n);case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),this.newPlan=function(){var e=Object(u.a)(i.a.mark(function e(a,n){var r,s,l,c;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=sessionStorage.getItem("user"),s=JSON.parse(r),l={week:n,user:s.Username,dayPlans:a},c=t.makeOptions("POST",!0,l),fetch(h+"api/MealPlanner/New",c);case 5:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),this.newPlan2=function(){var e=Object(u.a)(i.a.mark(function e(a,n){var r,s,l,c;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=(r=sessionStorage.getItem("user"))){e.next=3;break}return e.abrupt("return",0);case 3:s=JSON.parse(r),l={week:n,user:s.Username,dayPlans:a},c=t.makeOptions("POST",!0,l),fetch(h+"api/MealPlanner/New",c);case 8:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),this.getShopingList=function(){var e=Object(u.a)(i.a.mark(function e(t){var a,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(h+"api/MealPlanner/"+t);case 2:return a=e.sent,e.next=5,a.text();case 5:if(n=e.sent,a.ok){e.next=8;break}throw{status:a.status,fullError:n};case 8:return e.abrupt("return",n);case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),this.setToken=function(e){localStorage.setItem("jwtToken",e)},this.getToken=function(){return localStorage.getItem("jwtToken")},this.loggedIn=function(){return null!=t.getToken()},this.logout=function(){localStorage.removeItem("jwtToken"),sessionStorage.clear()}}return Object(m.a)(e,[{key:"makeOptions",value:function(e,t,a){var n={method:e,headers:{"Content-type":"application/json",Accept:"application/json"}};return t&&this.loggedIn()&&(n.headers["x-access-token"]=this.getToken()),a&&(n.body=JSON.stringify(a)),n}},{key:"CheckIfUser",value:function(e){return fetch(h+"api/Example/user").then(function(e){return e.json()}).then(function(t){e.unshift(t)})}},{key:"CheckIfAdmin",value:function(e){return fetch(h+"api/Example/admin").then(function(e){return e.json()}).then(function(t){e.unshift(t)})}},{key:"TryGet",value:function(){return fetch(h+"api/products/all").then(function(e){return e.json()})}}]),e}()),g=a(3),b=(a(27),a(5)),v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={description:"",ingredients:""},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.obj,t=e.week,a=e.plans,n=(e.description,e.url,function(){var e=Object(u.a)(i.a.mark(function e(){var n,r,s;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=[],r=[{weekday:(n=["Mandag","Tirsdag","Onsdag","Torsdag","Fredag","L\xf8rdag","S\xf8ndag"])[0],recipe:a[0].recipe.id}],s=0;case 4:if(!(1<a.length)){e.next=16;break}e.prev=5,console.log(s),r.push({weekday:n[s],recipe:a[s].recipe.id}),e.next=13;break;case 10:return e.prev=10,e.t0=e.catch(5),e.abrupt("break",16);case 13:s++,e.next=4;break;case 16:E.newPlan2(r,t);case 17:case"end":return e.stop()}},e,null,[[5,10]])}));return function(){return e.apply(this,arguments)}}());return r.a.createElement("div",{className:"DescriptionBox"},r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{width:"10%"},"Ugedag"),r.a.createElement("th",{width:"15%"},"Opskrift"),r.a.createElement("th",{width:"15%"},"Prep time"),r.a.createElement("th",{width:"40%"},"Beskrivelse"),r.a.createElement("th",{width:"10%"},"link"))),r.a.createElement("tbody",null,a.map(function(e,t){return r.a.createElement("tr",{key:t,className:"ResultRow__normalRow"},r.a.createElement("td",{className:"price"},e.id),r.a.createElement("td",{className:"price"},e.recipe.id),r.a.createElement("td",{className:"title"},e.recipe.prep_time),r.a.createElement("td",{className:"title"},e.recipe.description),r.a.createElement("td",null,r.a.createElement(b.b,{className:"link",to:"/recepie/"+e.recipe.id,exact:!0},r.a.createElement("span",null,"mere info"))))}))),r.a.createElement("div",{className:"container-middle"},r.a.createElement("p",{className:"title"}),r.a.createElement("hr",{className:"custom-hr"}),r.a.createElement("p",{className:"description"},this.state.description)),r.a.createElement("div",{className:"container-right"}),r.a.createElement("button",{onClick:n},"Tilf\xf8j Til mine planer"))}}]),t}(r.a.Component),k=function(e){var t=e.obj,a=(e.index,Object(n.useState)(!1)),s=Object(g.a)(a,2),l=s[0],c=s[1],i=t.week,u=t.owner,o=t.plans,m=(t.location,t.lastupdate,t.productId);return r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",{key:m,onClick:function(){return c(function(e){return!e})},className:"ResultRow__normalRow"},r.a.createElement("td",{className:"title"},i),r.a.createElement("td",{className:"price"},u),r.a.createElement("td",{className:"origin"},o.length)),r.a.createElement("tr",{className:"ResultRow__expandedRow".concat(l?"":"hide")},r.a.createElement("td",{colSpan:"6"},r.a.createElement(v,{obj:t}))))},w=function(e){var t=e.reslist;return r.a.createElement("table",{className:"ResultTable"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{width:"30%"},"Plan for uge"),r.a.createElement("th",{width:"11%"},"Lavet af"),r.a.createElement("th",{width:"12%"},"Dage d\xe6kket "))),r.a.createElement("tbody",null,t.map(function(e,t){return r.a.createElement(k,{key:"ResultRow-".concat(t),index:t,obj:e})})))},O=function(){return r.a.createElement("div",{class:"loader"})},j=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={reslist:[],loading:!0},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.state.reslist,this.state.loading;E.getFoodPlans().then(function(t){return e.setState({reslist:t})}).then(this.setState({loading:!1}))}},{key:"getDescription",value:function(){}},{key:"exampleAdd",value:function(e){e.preventDefault();this.state.reslist;var t=this.state.key,a=this.state.reslist,n=this.newItem.value;a.unshift({key:this.state.key,title:n,origin:"button",lastupdate:"ligeNU!",price:9999,imgurl:"https://i.ebayimg.com/images/g/WSgAAOSwJeVd4OJd/s-l200.jpg",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed ullamcorper nulla. Pellentesque quis sapien justo. Etiam pellentesque ornare eros, ullamcorper mattis libero facilisis eget. Aenean et ante ut sapien."}),this.setState({reslist:a,key:t+1})}},{key:"getAll",value:function(e){var t=this;e.preventDefault();this.state.reslist,this.state.reslist;E.TryGet().then(function(e){return t.setState({reslist:e})})}},{key:"somefunction",value:function(e){var t=this;e.preventDefault();this.state.msgs;var a=this.state.msgs,n=this.newItem.value;E.TryGet(n,a).then(function(e){return t.setState({msgs:a})})}},{key:"render",value:function(){this.state.msgs;return this.state.loading?r.a.createElement(O,null):r.a.createElement("div",{className:"ResultList"},r.a.createElement("div",{className:"ResultTableContainer"},r.a.createElement(w,{reslist:this.state.reslist})))}}]),t}(r.a.Component),y=(a(29),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={description:"",ingredients:""},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.obj,t=e.id,a=e.plans;e.description,e.url;return r.a.createElement("div",{className:"DescriptionBox"},r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{width:"10%"},"Ugedag"),r.a.createElement("th",{width:"15%"},"Opskrift"),r.a.createElement("th",{width:"15%"},"Prep time"),r.a.createElement("th",{width:"40%"},"Beskrivelse"),r.a.createElement("th",{width:"10%"},"link"))),r.a.createElement("tbody",null,a.map(function(e,t){return r.a.createElement("tr",{key:t,className:"ResultRow__normalRow"},r.a.createElement("td",{className:"price"},e.id),r.a.createElement("td",{className:"price"},e.recipe.id),r.a.createElement("td",{className:"title"},e.recipe.prep_time),r.a.createElement("td",{className:"title"},e.recipe.description),r.a.createElement("td",null,r.a.createElement(b.b,{className:"link",to:"/recepie/"+e.recipe.id,exact:!0},r.a.createElement("span",null,"mere info"))))}))),r.a.createElement(b.b,{className:"link",to:"/shoppinglist/"+t,exact:!0},r.a.createElement("span",null,"Indk\xf8bsliste for planen")),r.a.createElement("div",{className:"container-middle"},r.a.createElement("p",{className:"title"}),r.a.createElement("hr",{className:"custom-hr"}),r.a.createElement("p",{className:"description"},this.state.description)),r.a.createElement("div",{className:"container-right"}))}}]),t}(r.a.Component)),S=function(e){var t=e.obj,a=(e.index,Object(n.useState)(!1)),s=Object(g.a)(a,2),l=s[0],c=s[1],i=t.week,u=t.owner,o=t.plans,m=(t.location,t.lastupdate,t.productId);return r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",{key:m,onClick:function(){return c(function(e){return!e})},className:"ResultRow__normalRow"},r.a.createElement("td",{className:"title"},i),r.a.createElement("td",{className:"price"},u),r.a.createElement("td",{className:"origin"},o.length)),r.a.createElement("tr",{className:"ResultRow__expandedRow".concat(l?"":"hide")},r.a.createElement("td",{colSpan:"6"},r.a.createElement(y,{obj:t}))))},N=function(e){var t=e.reslist;return r.a.createElement("table",{className:"ResultTable"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{width:"30%"},"Plan for uge"),r.a.createElement("th",{width:"11%"},"Lavet af"),r.a.createElement("th",{width:"12%"},"Dage d\xe6kket "))),r.a.createElement("tbody",null,t.map(function(e,t){return r.a.createElement(S,{key:"ResultRow-".concat(t),index:t,obj:e})})))},x=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={reslist:[],loading:!0},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.state.reslist,this.state.loading;E.getMyFoodPlans().then(function(t){return e.setState({reslist:t})}).then(this.setState({loading:!1}))}},{key:"getDescription",value:function(){}},{key:"exampleAdd",value:function(e){e.preventDefault();this.state.reslist;var t=this.state.key,a=this.state.reslist,n=this.newItem.value;a.unshift({key:this.state.key,title:n,origin:"button",lastupdate:"ligeNU!",price:9999,imgurl:"https://i.ebayimg.com/images/g/WSgAAOSwJeVd4OJd/s-l200.jpg",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed ullamcorper nulla. Pellentesque quis sapien justo. Etiam pellentesque ornare eros, ullamcorper mattis libero facilisis eget. Aenean et ante ut sapien."}),this.setState({reslist:a,key:t+1})}},{key:"getAll",value:function(e){var t=this;e.preventDefault();this.state.reslist,this.state.reslist;E.TryGet().then(function(e){return t.setState({reslist:e})})}},{key:"somefunction",value:function(e){var t=this;e.preventDefault();this.state.msgs;var a=this.state.msgs,n=this.newItem.value;E.TryGet(n,a).then(function(e){return t.setState({msgs:a})})}},{key:"render",value:function(){this.state.msgs;return this.state.loading?r.a.createElement(O,null):r.a.createElement("div",{className:"ResultList"},r.a.createElement("div",{className:"ResultTableContainer"},r.a.createElement(N,{reslist:this.state.reslist})))}}]),t}(r.a.Component),R=a(17),P=function(){var e=Object(R.f)().id;return r.a.createElement("div",null,r.a.createElement("h3",null,e))},T=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Velkommen til Matheradical's middags planl\xe6gger."),r.a.createElement("h2",null,"En Verden af opskrifter"),r.a.createElement("p",null,"ER du tr\xe6t af at skulle t\xe6nke over opskrifter og indk\xf8bs lister heletiden? Det er vi, derfor kan du anvende vores fantastiske side til at finde sp\xe6ndene opskrifte."),r.a.createElement("h2",null,"Planl\xe6g din uge!"),r.a.createElement("p",null,"Planl\xe6g hele din uge, allerede idag. Der er ingen grund til at k\xf8be ind flere gange, med vores smarte system samles hele ugens indk\xf8bs sedel et sted."),r.a.createElement("h2",null,"F\xe5 hj\xe6lp af andre og del dine bedste planer"),r.a.createElement("p",null,"Er madhjernen p\xe5 ferie kan vi hj\xe6lpe. Eller, de kan de andre brugere, g\xe5 p\xe5 opdagelse i andres madplaner og brug dem du bedst kan li. Eller tilpas dem s\xe5 de passer dig."))},C=function(){var e=Object(R.f)().id,t=Object(n.useState)(!0),a=Object(g.a)(t,2),s=a[0],l=a[1],c=Object(n.useState)(),o=Object(g.a)(c,2),m=o[0],p=o[1];return function(){var e=Object(u.a)(i.a.mark(function e(t){var a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.getRecipe(t);case 2:a=e.sent,p(a),l(!1);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()(e),r.a.createElement("div",null,s?r.a.createElement(O,null):r.a.createElement("div",null,r.a.createElement("h1",null,m.id),r.a.createElement("h2",null,m.prep_time),r.a.createElement("h3",null,m.description),r.a.createElement("ul",null,m.preparaion_steps.map(function(e){return r.a.createElement("li",null,e)})),r.a.createElement("ul",null,m.ingredients.map(function(e){return r.a.createElement("li",null,e)}))))},I=a(18),L=a(20),M=function(){var e=Object(n.useState)({week:"",recipe:"Slow cooker spicy chicken and bean soup",weekday:"Mandag",Description:""}),t=Object(g.a)(e,2),a=t[0],s=t[1],l=Object(n.useState)(!0),c=Object(g.a)(l,2),o=c[0],m=c[1],p=Object(n.useState)(),d=Object(g.a)(p,2),f=d[0],h=d[1],v=Object(n.useState)(""),k=Object(g.a)(v,2),w=k[0],j=k[1],y=Object(n.useState)(!1),S=Object(g.a)(y,2),N=S[0],x=S[1],R=Object(n.useState)(["Mandag","Tirsdag","Onsdag","Torsdag","Fredag","L\xf8rdag","S\xf8ndag"]),P=Object(g.a)(R,2),T=P[0],C=(P[1],Object(n.useState)(["Mandag","Tirsdag","Onsdag","Torsdag","Fredag","L\xf8rdag","S\xf8ndag"])),M=Object(g.a)(C,2),D=(M[0],M[1],Object(n.useState)([])),_=Object(g.a)(D,2),A=_[0],U=(_[1],Object(n.useState)([])),B=Object(g.a)(U,2),F=B[0],J=(B[1],Object(n.useState)("")),q=Object(g.a)(J,2),G=(q[0],q[1],function(){var e=Object(u.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.getAllRecipe();case 2:t=e.sent,h(t),m(!1);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()),W=function(){var e=Object(u.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return x(!1),e.next=3,E.getRecipe(a.recipe);case 3:if(t=e.sent,""==a.recipe){e.next=7;break}return e.next=7,j(t);case 7:null!=w&&x(!0);case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();G();var H=function(){var e=Object(u.a)(i.a.mark(function e(t){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.persist(),s(function(e){return Object(L.a)({},e,Object(I.a)({},t.target.id,t.target.value))}),W();case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(u.a)(i.a.mark(function e(){var t,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(t=[{weekday:F[0],recipe:A[0]}],n=1;n<F.length;n++)t.push({weekday:F[n],recipe:A[n]});E.newPlan(t,a.week);case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,o?r.a.createElement(O,null):r.a.createElement("div",null,r.a.createElement("h1",null,"Lav en ny Madplan"),r.a.createElement("button",{className:"register",onClick:V},"Opret Madlplan"),r.a.createElement("form",{onSubmit:function(e){if(T.length>=1){e.preventDefault(),A.push(a.recipe),F.push(a.weekday);for(var t=0;t<T.length;t++)T[t]==a.weekday&&T.splice(t,1);a.weekday=T[0]}},onChange:H},r.a.createElement("input",{placeholder:"Uge nummer",id:"week"}),r.a.createElement("input",{placeholder:"Beskrivelse",id:"Description"}),r.a.createElement("select",{id:"weekday"},T.map(function(e){return r.a.createElement("option",null,e)})),r.a.createElement("select",{id:"recipe"},f.map(function(e){return r.a.createElement("option",null,e)})),r.a.createElement("button",{type:"submit",className:"register"},"Tilf\xf8j Madplan")),A.map(function(e,t){return r.a.createElement("div",null,r.a.createElement("h3",null,F[t]),r.a.createElement("form",null,r.a.createElement("select",{id:"recipe"},f.map(function(e){return A[t]==e?r.a.createElement("option",{selected:!0},e):r.a.createElement("option",null,e)}))))}),N?r.a.createElement("div",null,r.a.createElement("h1",null,w.id),r.a.createElement("h2",null,w.prep_time),r.a.createElement("h3",null,w.description),r.a.createElement(b.b,{className:"link",to:"/recepie/"+w.id,exact:!0},r.a.createElement("span",null,"mere info"))):r.a.createElement("div",null)))},D=function(){var e=Object(R.f)().id,t=Object(n.useState)(),a=Object(g.a)(t,2),s=a[0],l=a[1],c=Object(n.useState)(!0),o=Object(g.a)(c,2),m=o[0],p=o[1];return function(){var e=Object(u.a)(i.a.mark(function e(t){var a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.getShopingList(t);case 2:a=e.sent,l(a.split(",")),p(!1);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()(e),r.a.createElement("div",null,m?r.a.createElement(O,null):r.a.createElement("div",null,r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{width:"30%"},"Ink\xf8bsList"))),r.a.createElement("tbody",null,s.map(function(e,t){return r.a.createElement("tr",{key:t,className:"ResultRow__normalRow"},r.a.createElement("td",{className:"title"},e))})))))},_=a(21),A=(a(30),a(22)),U=function(e){var t=e.login,a=Object(n.useState)({username:"",password:""}),s=Object(g.a)(a,2),l=s[0],c=s[1],i=Object(n.useState)({formtype:"Login"}),u=Object(g.a)(i,2);u[0],u[1];return r.a.createElement("div",{className:"LoginForm"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(l.username,l.password)},onChange:function(e){e.persist(),c(function(t){return Object(L.a)({},t,Object(I.a)({},e.target.id,e.target.value))})}},r.a.createElement("input",{placeholder:"Brugernavn",id:"username"}),r.a.createElement("input",{placeholder:"Kodeord",type:"password",id:"password"}),r.a.createElement("button",{type:"submit",className:"login"},"Login")))},B=function(e){var t=e.register,a=Object(n.useState)({username:"",password:"",repeatPwd:"",type:"User"}),s=Object(g.a)(a,2),l=s[0],c=s[1];return r.a.createElement("div",{className:"LoginForm"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),l.password==l.repeatPwd?t(l.username,l.password,l.type):alert("Passwords matchede ikke.")},onChange:function(e){e.persist(),c(function(t){return Object(L.a)({},t,Object(I.a)({},e.target.id,e.target.value))})}},r.a.createElement("input",{placeholder:"Brugernavn",id:"username"}),r.a.createElement("input",{placeholder:"Kodeord",type:"password",id:"password"}),r.a.createElement("input",{placeholder:"Gentag kodeord",type:"password",id:"repeatPwd"}),r.a.createElement("select",{id:"type"},r.a.createElement("option",{value:"User"},"User"),r.a.createElement("option",{value:"Admin"},"Admin")),r.a.createElement("button",{type:"submit",className:"login"},"Opret bruger")))},F=function(e){var t=e.username,a=(e.role,e.logout);return r.a.createElement("div",{className:"UserInfo"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(b.b,{className:"link",to:"/user/newplan"},r.a.createElement("span",null,"Ny Madplan"))),r.a.createElement("li",null,r.a.createElement(b.b,{className:"link",to:"/user/foodplans"},r.a.createElement("span",null,"Mine Madplaner"))),r.a.createElement("li",null,r.a.createElement(b.b,{className:"link",to:"/user/"+{username:t}},r.a.createElement("span",null,"Profil ",t))),r.a.createElement("li",null,r.a.createElement("button",{onClick:function(e){e.preventDefault(),a()},className:"login"},r.a.createElement("span",null,"Logud")))))},J=function(e){var t=Object(n.useState)(!1),a=Object(g.a)(t,2),s=a[0],l=a[1],c=Object(n.useState)(""),o=Object(g.a)(c,2),m=o[0],p=o[1],d=Object(n.useState)(""),f=Object(g.a)(d,2),h=f[0],b=f[1],v=Object(n.useState)(!1),k=Object(g.a)(v,2),w=k[0],j=k[1],y=Object(n.useState)("Login"),S=Object(g.a)(y,2),N=S[0],x=S[1],R=Object(n.useState)(!1),P=Object(g.a)(R,2),T=P[0],C=P[1],I=function(){var e=Object(u.a)(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:b(!1),console.log(h),E.logout();case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(u.a)(i.a.mark(function e(t,a){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,C(!0),e.next=4,E.login(t,a);case 4:n=e.sent,C(!1),b(!0),p(n.role),l(n.username),j(!1),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),alert("username eller password forkert"),C(!1);case 16:case"end":return e.stop()}},e,null,[[0,12]])}));return function(t,a){return e.apply(this,arguments)}}(),M=function(){var e=Object(u.a)(i.a.mark(function e(t,a,n){var r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,C(!0),e.next=4,E.register(t,a,n);case 4:r=e.sent,C(!1),b(!0),p(r.role),l(r.username),j(!1),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),alert("username allerede i brug."),C(!1);case 16:case"end":return e.stop()}},e,null,[[0,12]])}));return function(t,a,n){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"loginform"},h?r.a.createElement(F,{username:s,role:m,logout:I}):r.a.createElement("button",{className:"login",onClick:function(){j(!0),x("Login")}},r.a.createElement(_.b,{className:"icon"}),r.a.createElement("span",null,"Login")),r.a.createElement(A.a,{show:w,size:"md",centered:!0,onHide:function(){j(!1)}},r.a.createElement(A.a.Header,{closeButton:!0},r.a.createElement(A.a.Title,{id:"contained-modal-title-vcenter"},r.a.createElement(_.b,{className:"modal-icon"}),N)),r.a.createElement(A.a.Body,null,T?r.a.createElement("div",{className:"LoginForm"},r.a.createElement(O,null)):"Login"==N?r.a.createElement("div",null,r.a.createElement(U,{login:L}),r.a.createElement("button",{className:"register",onClick:function(){return x("Opret Ny Bruger")}},r.a.createElement("span",null,"Ny Bruger"))):r.a.createElement(B,{register:M}))))},q=["Slow cooker spicy chicken and bean soup","slow cooker beef stew","Smoked paprika goulash for the slow cooker","Pistachio chicken with pomegranate sauce","Cheesy leek and mustard soup","Christmas Stollen","Polly's eccles cakes","Braised beef in red wine","Moist garlic roasted chicken","Cheese and bacon stuffed pasta shells","Tofu vindaloo"],G=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).search=function(e){e.persist();var t=e.target.value.trim();if(0!=t.trim().length){var n=q.filter(function(e){return e.startsWith(t)});a.setState({suggestions:n})}else a.setState({suggestions:[]})},a.clickOutside=function(e){null==a.searchSuggestionsRef.current||a.searchSuggestionsRef.current.contains(e.target)||a.setState({suggestions:[]})},a.pressedEscape=function(e){27===e.keyCode&&a.setState({suggestions:[]})},a.clickSuggestionItem=function(e){},a.state={suggestions:[]},a.searchSuggestionsRef=r.a.createRef(),a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.pressedEscape,!1),document.addEventListener("mousedown",this.clickOutside)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.pressedEscape,!1),document.removeEventListener("mousedown",this.clickOutside)}},{key:"exampleAdd",value:function(e){e.preventDefault()}},{key:"render",value:function(){var e=this,t=this.state.suggestions;return r.a.createElement("div",null,r.a.createElement("div",{className:"Header"},r.a.createElement("div",{className:"container-buttons"},r.a.createElement(b.b,{className:"link",to:"/",exact:!0},r.a.createElement("span",null,"HOME")),r.a.createElement(b.b,{className:"link",to:"/madplaner"},r.a.createElement("span",null,"Madplaner"))),r.a.createElement("div",{className:"container-search"},r.a.createElement("form",{className:"form",onSubmit:function(t){e.exampleAdd(t)}},r.a.createElement(_.a,{className:"search-icon"}),r.a.createElement("input",{ref:function(t){return e.newItem=t},placeholder:"Search here...",id:"addButton",className:"search",onChange:this.search}),t.length>0&&r.a.createElement("div",{className:"search-suggestion",ref:this.searchSuggestionsRef},t.map(function(t){return r.a.createElement("div",{className:"search-suggestion-item",onClick:function(){return e.clickSuggestionItem(t)}},t)})))),r.a.createElement("div",{className:"container-login"},r.a.createElement(J,null))))}}]),t}(r.a.Component),W=(a(47),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).logout=function(){E.logout(),a.setState({loggedIn:!1})},a.login=function(){var e=Object(u.a)(i.a.mark(function e(t,n){var r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.login(t,n);case 2:r=e.sent,a.setState({loggedIn:!0,username:t,role:r.role});case 4:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),a.state={loggedIn:!1,username:"",role:""},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b.a,null,r.a.createElement(G,null),r.a.createElement(R.c,null,r.a.createElement(R.a,{path:"/user/foodplans"},r.a.createElement(x,null)),r.a.createElement(R.a,{path:"/user/newplan"},r.a.createElement(M,null)),r.a.createElement(R.a,{path:"/user/:id"},r.a.createElement(P,null)),r.a.createElement(R.a,{path:"/shoppinglist/:id"},r.a.createElement(D,null)),r.a.createElement(R.a,{path:"/recepie/:id"},r.a.createElement(C,null)),r.a.createElement(R.a,{path:"/madplaner"},r.a.createElement(j,null)),r.a.createElement(R.a,{path:"/loader"},r.a.createElement(O,null)),r.a.createElement(R.a,{path:"/"},r.a.createElement(T,null)))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.b677e930.chunk.js.map