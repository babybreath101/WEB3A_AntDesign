(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{121:function(e,t,a){e.exports=a(216)},126:function(e,t,a){},194:function(e,t,a){},205:function(e,t,a){e.exports=a.p+"static/media/kaki.29d106f8.jpg"},206:function(e,t,a){e.exports=a.p+"static/media/profil1.2802dead.jpg"},207:function(e,t,a){e.exports=a.p+"static/media/tangan.490d776c.jpg"},208:function(e,t,a){e.exports=a.p+"static/media/profil2.1eaed372.jpg"},209:function(e,t,a){e.exports=a.p+"static/media/kakii.eb9723ae.jpg"},210:function(e,t,a){e.exports=a.p+"static/media/profil3.414bdcb8.jpg"},211:function(e,t){},212:function(e,t,a){},213:function(e,t,a){e.exports=a.p+"static/media/kopi.f061b40d.jpg"},214:function(e,t,a){e.exports=a.p+"static/media/buku.260fd0f8.jpg"},215:function(e,t,a){e.exports=a.p+"static/media/radio.94193d67.jpg"},216:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(9),c=a.n(r),l=(a(126),a(15)),o=a(16),s=a(17),m=a(18),u=(a(54),a(50)),p=a(20),d=a(219),k=a(218),f=a(221),h=a(222),g=d.a.Meta,E=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleplus=function(){n.setState({like:n.state.like+1})},n.handleDislike=function(){n.state.like>0&&n.setState({like:n.state.like-1})},n.state={like:0},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.caption,a=e.name,n=e.img,r=e.ava,c=e.link;return i.a.createElement("div",null,i.a.createElement(d.a,{style:{width:250},cover:i.a.createElement("img",{alt:"example",src:n}),actions:[i.a.createElement("a",{href:c},i.a.createElement(f.a,{key:"setting"})),i.a.createElement(h.a,{key:"like",twoToneColor:"#eb2f96",onClick:this.handleplus}),i.a.createElement(h.a,{key:"like",twoToneColor:"#000",onClick:this.handleDislike}),i.a.createElement("a",{disable:!0},this.state.like)]},i.a.createElement(g,{avatar:i.a.createElement(k.a,{src:r}),title:t,description:a})))}}]),a}(i.a.Component),b=a(220),y=(a(194),a(223)),v=a(224),w=a(46),j=(b.a.SubMenu,function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={current:"mail"},e.handleClick=function(t){console.log("click ",t),e.setState({current:t.key})},e}return Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement("nav",{className:"menuBar"},i.a.createElement(b.a,{onClick:this.handleClick,selectedKeys:[this.state.current],mode:"horizontal"},i.a.createElement(b.a.Item,{key:"mail"},i.a.createElement(y.a,null),i.a.createElement(w.b,{to:"/"},"Home")),i.a.createElement(b.a.Item,{key:"app"},i.a.createElement(v.a,null),i.a.createElement(w.b,{to:"/galeri"},"My Gallery")),i.a.createElement(b.a.Item,{key:"alipay"},i.a.createElement("a",{href:"https://github.com/babybreath101",target:"_blank",rel:"noopener noreferrer"},"Github"))))}}]),a}(n.Component)),O=function(e){Object(m.a)(n,e);var t=Object(s.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).state={cardData:[{id:1,caption:"One Day",name:"Rachel Azzalea",img:a(205),ava:a(206),link:"https://www.instagram.com/annastsy_far/"},{id:2,caption:"Hold My Hand",name:"Annastasya Fitri A R",img:a(207),ava:a(208),link:"https://www.instagram.com/annastsy_far/"},{id:3,caption:"Don't You Run",name:"Baby Breath",img:a(209),ava:a(210),link:"https://www.instagram.com/annastsy_far/"}]},i}return Object(o.a)(n,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"site-card-wrapper",style:{textAlign:"center"}},i.a.createElement(u.a,{gutter:[16,16]},this.state.cardData.map((function(e,t){return i.a.createElement(p.a,{key:t,xs:{span:5,offset:1},lg:{span:6,offset:2}},i.a.createElement(E,{caption:e.caption,name:e.name,img:e.img,ava:e.ava,link:e.link}))})))))}}]),n}(i.a.Component),x=(a(211),a(212),a(31)),C=d.a.Meta,D=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleplus=function(){n.setState({like:n.state.like+1})},n.handleDislike=function(){n.state.like>0&&n.setState({like:n.state.like-1})},n.state={like:0},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.caption,a=e.date,n=e.img,r=e.link;return i.a.createElement("div",null,i.a.createElement(d.a,{style:{width:250},cover:i.a.createElement("img",{alt:"example",src:n}),actions:[i.a.createElement("a",{href:r},i.a.createElement(f.a,{key:"setting"})),i.a.createElement(h.a,{key:"like",twoToneColor:"#eb2f96",onClick:this.handleplus}),i.a.createElement(h.a,{key:"like",twoToneColor:"#000",onClick:this.handleDislike}),i.a.createElement("a",{disable:!0},this.state.like)]},i.a.createElement(C,{title:t,description:a})))}}]),a}(i.a.Component),A=function(e){Object(m.a)(n,e);var t=Object(s.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).state={cardData:[{id:1,caption:"Ngupi-ngupi skuyy",date:"29 March 2020",img:a(213),link:"https://www.instagram.com/annastsy_far/"},{id:2,caption:"Jangan lupa untuk kembali",date:"21 March 2020",img:a(214),link:"https://www.instagram.com/annastsy_far/"},{id:3,caption:"Cerita Klasik",date:"25 March 2020",img:a(215),link:"https://www.instagram.com/annastsy_far/"}]},i}return Object(o.a)(n,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"site-card-wrapper",style:{textAlign:"center"}},i.a.createElement(u.a,{gutter:[16,16]},this.state.cardData.map((function(e,t){return i.a.createElement(p.a,{key:t,xs:{span:5,offset:1},lg:{span:6,offset:2}},i.a.createElement(D,{caption:e.caption,date:e.date,img:e.img,link:e.link}))})))))}}]),n}(i.a.Component),_=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement(x.c,null,i.a.createElement(x.a,{exact:!0,path:"/",component:O}),i.a.createElement(x.a,{exact:!0,path:"/galeri",component:A}))}}]),a}(n.Component);var M=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(j,null),i.a.createElement(_,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(w.a,{basename:"/WEB3A_15098_AntDesign"},i.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},54:function(e,t,a){}},[[121,1,2]]]);
//# sourceMappingURL=main.1e5283b8.chunk.js.map