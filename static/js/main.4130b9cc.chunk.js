(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{133:function(e,a,t){e.exports=t.p+"static/media/homePic.5d7f6abc.png"},134:function(e,a,t){e.exports=t.p+"static/media/learning.97da3977.jpg"},135:function(e,a,t){e.exports=t.p+"static/media/teamPic.1268a4e1.jpg"},155:function(e,a,t){e.exports=t(301)},160:function(e,a,t){},161:function(e,a,t){},202:function(e,a,t){},203:function(e,a,t){},282:function(e,a,t){},283:function(e,a,t){},284:function(e,a,t){},285:function(e,a,t){},301:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(36),i=t.n(l),c=t(18),m=t(19),o=t(21),s=t(20),u=t(17),d=t(14),E=t(310),h=t(88),p=t.n(h),g=(t(160),t(312)),f=t(46),b=(t(161),t(89)),y=function(){return r.a.createElement("div",null,r.a.createElement(g.a,{minWidth:1024},r.a.createElement("div",{id:"jumboWrapper",onMouseEnter:function(){document.getElementById("abilities").style.fontSize="2em",document.getElementById("logoWrapper").style.width="1400px",document.getElementById("needs").style.fontSize="0",document.getElementById("crossLine").style.width="0"}},r.a.createElement("div",{id:"logoWrapper"},r.a.createElement("h1",{id:"t1"},"My Speical ",r.a.createElement("span",{id:"abilities"},"Abilities")),r.a.createElement("h1",{id:"needs"},"Needs"),r.a.createElement("div",{id:"crossLine"})),r.a.createElement(b.a,{sequence:["Just be who you are!",1e9,""],speed:1,wrapper:"h1",repeat:1/0}))),r.a.createElement(g.a,{maxWidth:1023},r.a.createElement("div",{id:"jumboWrapper",onMouseEnter:function(){document.getElementById("abilities").style.fontSize="1.4em",document.getElementById("needs").style.fontSize="0",document.getElementById("crossLine").style.width="0"}},r.a.createElement("div",{id:"logoWrapper"},r.a.createElement("h1",{id:"t1"},"My Speical ",r.a.createElement("span",{id:"abilities"},"Abilities")),r.a.createElement("h1",{id:"needs"},"Needs"),r.a.createElement("div",{id:"crossLine"})),r.a.createElement(b.a,{sequence:["Just be who you are!",1e9,""],speed:1,wrapper:"h1",repeat:1/0}))))},v=(t(202),t(133)),C=t.n(v),w=t(134),j=t.n(w),x=t(135),I=t.n(x),O={home:[{title:"Home",img:C.a,route:"/",teaser:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis imperdiet felis in semper. Sed eu purus ut nisi rutrum aliquet. Donec aliquet nec magna sit amet congue. "}],WhyJoinUs:[{title:"Learning",img:j.a,route:"/Learning",teaser:"Our courses have helped countless individuals discover and amplify their talents to the world"},{title:"Mentorship",img:I.a,route:"/Mentorship",teaser:"Network and build connections with highly successful neurodivergent members"}]},S=t(311),N=t(147),k=t(309),L=(t(203),function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).handleName=function(e){return e.toUpperCase().split("").map((function(e){return"_"===e?(console.log("found")," "):e})).join("")},n.makeCards=function(e){var a=1;return e.map((function(e){return(a+=1)%2===0?r.a.createElement(S.a,{className:"homePageHugeSession"},r.a.createElement(S.a.Row,null,r.a.createElement(S.a.Column,{width:8},r.a.createElement(N.a,{src:e.img,style:{width:"800px"}})),r.a.createElement(S.a.Column,{width:8},r.a.createElement("div",{className:"wordWrapper"},r.a.createElement("h1",null,e.title),r.a.createElement("p",null,e.teaser),r.a.createElement(k.a,{as:u.b,name:"learnAbout",className:"reasonButton",to:"/Learning"},"Start Learning"))))):r.a.createElement(S.a,{className:"homePageHugeSession"},r.a.createElement(S.a.Row,null,r.a.createElement(S.a.Column,{width:8},r.a.createElement("div",{className:"wordWrapper"},r.a.createElement("h1",null,e.title),r.a.createElement("p",null,e.teaser),r.a.createElement(k.a,{as:u.b,name:"team",className:"reasonButton",to:"/Mentorship"},"Start Connecting"))),r.a.createElement(S.a.Column,{width:8},r.a.createElement(N.a,{src:e.img,style:{width:"800px"}}))))}))},n.makeCardsMobile=function(e){return e.map((function(e){return 1,r.a.createElement(S.a,{className:"homePageHugeSession"},r.a.createElement(S.a.Column,null,r.a.createElement(S.a.Column,{width:8},r.a.createElement(N.a,{src:e.img,style:{width:"800px"}})),r.a.createElement(S.a.Column,{width:8},r.a.createElement("div",{className:"wordWrapper"},r.a.createElement("h1",null,e.title),r.a.createElement("p",null,e.teaser),r.a.createElement(k.a,{as:u.b,name:"learnAbout",className:"reasonButton",to:"/Learning"},"Start Learning")))))}))},n}return Object(m.a)(t,[{key:"render",value:function(){var e=this.props.forCards,a=this.props.name;this.handleName(a);return r.a.createElement("div",null,r.a.createElement(g.a,{minWidth:1024},this.makeCards(e)),r.a.createElement(g.a,{maxWidth:1023},this.makeCardsMobile(e)))}}]),t}(r.a.Component)),R=function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=a.call.apply(a,[this].concat(l))).createHomePageSection=function(e,a){return r.a.createElement(L,{forCards:e,name:a})},e.createHomePageSections=function(){return Object.keys(O).map((function(a){if("home"!==a)return e.createHomePageSection(O[a],a)}))},e}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"homePageSections"},this.createHomePageSections())}}]),t}(r.a.Component),H=t(308),M=t(313),W=(t(282),function(){return r.a.createElement("div",null,r.a.createElement(g.a,{minWidth:1024},r.a.createElement(S.a,{id:"ratingGrid"},r.a.createElement(S.a.Row,null,r.a.createElement(S.a.Column,{width:4},r.a.createElement(H.a,{className:"ratingCard"},r.a.createElement(H.a.Content,null,r.a.createElement(H.a.Header,null,"Steve Sanders"),r.a.createElement(H.a.Description,null,"I really enjoyed the mentorship and courses this site offers. I have learned a lot and I am very grateful for the opportunity.")),r.a.createElement(H.a.Content,{extra:!0},r.a.createElement(M.a,{icon:"star",defaultRating:5,maxRating:5,size:"massive",disabled:!0})))),r.a.createElement(S.a.Column,{width:4},r.a.createElement(H.a,{className:"ratingCard"},r.a.createElement(H.a.Content,null,r.a.createElement(H.a.Header,null,"Molly Thomas"),r.a.createElement(H.a.Description,null,"The hours, minutes and seconds stand as visible reminders that your effort put them all there.",r.a.createElement("br",null),"Preserve until your next run, when the watch lets you see how Impermanent your efforts are.")),r.a.createElement(H.a.Content,{extra:!0},r.a.createElement(M.a,{icon:"star",defaultRating:5,maxRating:5,size:"massive",disabled:!0})))),r.a.createElement(S.a.Column,{width:4},r.a.createElement(H.a,{className:"ratingCard"},r.a.createElement(H.a.Content,null,r.a.createElement(H.a.Header,null,"Jenny Lawrence"),r.a.createElement(H.a.Description,null,"Dude, this is awesome. Thanks so much! I can't wait to show my friends.")),r.a.createElement(H.a.Content,{extra:!0},r.a.createElement(M.a,{icon:"star",defaultRating:5,maxRating:5,size:"massive",disabled:!0})))),r.a.createElement(S.a.Column,{width:4},r.a.createElement(H.a,{className:"ratingCard"},r.a.createElement(H.a.Content,null,r.a.createElement(H.a.Header,null,"Gio Marco"),r.a.createElement(H.a.Description,null,"This REALLY helps me out. Thanks so much! I can't wait to show my friends.")),r.a.createElement(H.a.Content,{extra:!0},r.a.createElement(M.a,{icon:"star",defaultRating:5,maxRating:5,size:"massive",disabled:!0}))))))),r.a.createElement(g.a,{maxWidth:1023},r.a.createElement(S.a,{id:"ratingGrid"},r.a.createElement(S.a.Column,null,r.a.createElement(S.a.Column,{width:4},r.a.createElement(H.a,{className:"ratingCard"},r.a.createElement(H.a.Content,null,r.a.createElement(H.a.Header,null,"Steve Sanders"),r.a.createElement(H.a.Description,null,"I really enjoyed the mentorship and courses this site offers. I have learned a lot and I am very grateful for the opportunity.")),r.a.createElement(H.a.Content,{extra:!0},r.a.createElement(M.a,{icon:"star",defaultRating:5,maxRating:5,size:"massive",disabled:!0})))),r.a.createElement(S.a.Column,{width:4},r.a.createElement(H.a,{className:"ratingCard"},r.a.createElement(H.a.Content,null,r.a.createElement(H.a.Header,null,"Molly Thomas"),r.a.createElement(H.a.Description,null,"The hours, minutes and seconds stand as visible reminders that your effort put them all there.",r.a.createElement("br",null),"Preserve until your next run, when the watch lets you see how Impermanent your efforts are.")),r.a.createElement(H.a.Content,{extra:!0},r.a.createElement(M.a,{icon:"star",defaultRating:5,maxRating:5,size:"massive",disabled:!0})))),r.a.createElement(S.a.Column,{width:4},r.a.createElement(H.a,{className:"ratingCard"},r.a.createElement(H.a.Content,null,r.a.createElement(H.a.Header,null,"Jenny Lawrence"),r.a.createElement(H.a.Description,null,"Dude, this is awesome. Thanks so much! I can't wait to show my friends.")),r.a.createElement(H.a.Content,{extra:!0},r.a.createElement(M.a,{icon:"star",defaultRating:5,maxRating:5,size:"massive",disabled:!0})))),r.a.createElement(S.a.Column,{width:4},r.a.createElement(H.a,{className:"ratingCard"},r.a.createElement(H.a.Content,null,r.a.createElement(H.a.Header,null,"Gio Marco"),r.a.createElement(H.a.Description,null,"This REALLY helps me out. Thanks so much! I can't wait to show my friends.")),r.a.createElement(H.a.Content,{extra:!0},r.a.createElement(M.a,{icon:"star",defaultRating:5,maxRating:5,size:"massive",disabled:!0}))))))))}),z=(t(283),function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(y,null),r.a.createElement(W,null),r.a.createElement("div",{style:{textAlign:"center",margin:"10rem"}},r.a.createElement("h1",{style:{fontSize:"4.5rem"}},"We are a community built by neurodiverse minds for empowering neurodivergent talent!")),r.a.createElement("div",{id:"wrapper1"},r.a.createElement(R,null)))}}]),t}(r.a.Component)),P=function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("h1",null,"Hello, this is CollaborationsPage")}}]),t}(r.a.Component),B=(t(284),function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"mentorshipJumboWrapper"},r.a.createElement("h1",{id:"mentorshipjumboHead"},"Mentorship"))}}]),t}(r.a.Component)),D=(t(285),function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"learningJumboWrapper"},r.a.createElement("h1",{id:"jumboHead"},"Learning"))}}]),t}(r.a.Component)),T=function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(u.a,null,r.a.createElement(g.a,{minWidth:1024,as:E.a,stackable:!0,borderless:!0,id:"topNav"},r.a.createElement(E.a.Item,{to:"/",as:u.b},r.a.createElement("img",{src:p.a})),r.a.createElement(E.a.Item,{name:"features",to:"/",as:u.b},"Home"),r.a.createElement(E.a.Item,{name:"description",to:"/Learning",as:u.b},"Learning"),r.a.createElement(E.a.Item,{name:"team",to:"/Mentorship",as:u.b},"Mentorship"),r.a.createElement(E.a.Item,{name:"collaborations",position:"right",to:"/Collaborations",as:u.b},r.a.createElement(f.a,{name:"handshake",size:"large"}),"Register / Sign In")),r.a.createElement(g.a,{maxWidth:1023,as:E.a,stackable:!0,borderless:!0,id:"topNav"},r.a.createElement(E.a.Item,{to:"/",as:u.b},r.a.createElement("img",{src:p.a})),r.a.createElement(E.a.Item,{name:"features",to:"/",as:u.b},"Home"),r.a.createElement(E.a.Item,{name:"description",to:"/Learning",as:u.b},"Learning"),r.a.createElement(E.a.Item,{name:"team",to:"/Mentorship",as:u.b},"Mentorship"),r.a.createElement(E.a.Item,{name:"collaborations",position:"right",to:"/Collaborations",as:u.b},r.a.createElement(f.a,{name:"handshake",size:"large"}),"Register / Sign In")),r.a.createElement(d.a,{path:"/",exact:!0,component:z}),r.a.createElement(d.a,{path:"/Learning",exact:!0,component:D}),r.a.createElement(d.a,{path:"/Mentorship",exact:!0,component:B}),r.a.createElement(d.a,{path:"/Collaborations",exact:!0,component:P}))}}]),t}(r.a.Component);var J=function(){return r.a.createElement(T,null)};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J,null)),document.getElementById("root"))},88:function(e,a,t){e.exports=t.p+"static/media/logo.c6856f3c.png"}},[[155,1,2]]]);
//# sourceMappingURL=main.4130b9cc.chunk.js.map