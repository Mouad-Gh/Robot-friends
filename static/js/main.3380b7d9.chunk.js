(this.webpackJsonprobofreinds=this.webpackJsonprobofreinds||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),c=n.n(o),s=(n(12),n(1)),l=n(2),i=n(4),h=n(3),u=function(e){Object(i.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={hasError:!1},a}return Object(l.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Oooops you have an error"):this.props.children}}]),n}(r.a.Component);var m=function(e){var t=e.nom,n=e.src,a=e.comm;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa2 ma2 grow bw2 chadow-5"},r.a.createElement("img",{src:"https://robohash.org/".concat(n,"?200x200"),alt:""}),r.a.createElement("h2",null,t),r.a.createElement("p",null,a))},d=function(e){var t=e.robots;return r.a.createElement("div",null,t.map((function(e){return r.a.createElement(m,{key:e.id,src:e.id,nom:e.name,comm:e.email})})))},f=(n(13),function(e){return r.a.createElement("div",{style:{overflowY:"scroll",height:"500px"}},e.children)}),b=function(e){var t=e.searchchange;return r.a.createElement("div",null,r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",onChange:t,placeholder:"Search robots"}))},v=function(e){Object(i.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).Onsearchchange=function(t){e.setState({search:t.target.value})},e.state={robots:[],search:""},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.search.toLowerCase())}));return this.state.robots.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"tc f1"},"Robot friends"),r.a.createElement(b,{searchchange:this.Onsearchchange}),r.a.createElement("hr",null),r.a.createElement(f,null,r.a.createElement(u,null,r.a.createElement(d,{robots:t})))):r.a.createElement("h1",null,"Loading...")}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(14);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.3380b7d9.chunk.js.map