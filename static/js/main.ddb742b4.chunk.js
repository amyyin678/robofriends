(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),c=n(7),s=n.n(c),a=(n(12),n(2)),i=n(3),h=n(5),u=n(4),l=n(0),b=function(e){e.robots;throw new Error("Nooooo")},j=function(e){var t=e.searchChange;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},d=function(e){return Object(l.jsx)("div",{style:{overflowY:"scroll",border:"2px solid black",height:"500px"},children:e.children})},f=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(i.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(l.jsx)("h1",{children:"Oooops. That is not good."}):this.props.children}}]),n}(r.Component),O=(n(14),function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchField,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"tc",children:[Object(l.jsx)("h1",{className:"f2",children:"Robofriends"}),Object(l.jsx)(j,{searchChange:this.onSearchChange}),Object(l.jsx)(d,{children:Object(l.jsx)(f,{children:Object(l.jsx)(b,{robots:r})})})]})}):Object(l.jsx)("h1",{children:"Loading..."})}}]),n}(r.Component)),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),o(e),c(e),s(e)}))};n(15);s.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root")),g()}},[[16,1,2]]]);
//# sourceMappingURL=main.ddb742b4.chunk.js.map