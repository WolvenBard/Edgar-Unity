(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{281:function(e,t,a){"use strict";a.r(t);var r=a(3),o=a(0),l=a.n(o),n=a(342),s=a.n(n),c=a(325),i=a(313),m=a(321),u=a(22),d=a(310),v=a(282),h=a.n(v);const p=[{title:l.a.createElement(l.a.Fragment,null,"Easy to use"),description:l.a.createElement(l.a.Fragment,null,"Well, it's not a one-click setup, but after you read about the basic concepts of the generator, you should be ready to easily generate your first level.")},{title:l.a.createElement(l.a.Fragment,null,"Packed with features"),description:l.a.createElement(l.a.Fragment,null,"The generator gives you complete control over the structure of levels and look of individual rooms. Generate dungeons, platformers or even isometric levels.")},{title:l.a.createElement(l.a.Fragment,null,"Easy to customize"),description:l.a.createElement(l.a.Fragment,null,"It's easy to customize generated levels. Add enemies, treasures, secret rooms. Almost anything is possible!")}];function E({imageUrl:e,title:t,description:a}){const r=Object(d.a)(e);return l.a.createElement("div",{className:s()("col col--4",h.a.feature)},r&&l.a.createElement("div",{className:"text--center"},l.a.createElement("img",{className:h.a.featureImage,src:r,alt:t})),l.a.createElement("h3",null,t),l.a.createElement("p",{className:"text--justify"},a))}t.default=function(){const e=Object(u.default)(),{siteConfig:t={}}=e;return l.a.createElement(c.a,{title:`${t.title}`,description:`${t.tagline}`},l.a.createElement("header",{className:s()("hero hero--primary",h.a.heroBanner)},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"hero__title"},t.title),l.a.createElement("p",{className:"hero__subtitle"},t.tagline),l.a.createElement("div",{className:h.a.buttons},l.a.createElement(i.a,{className:s()("button button--outline button--secondary button--lg",h.a.getStarted),to:Object(d.a)("docs/introduction")},"Get Started")))),l.a.createElement("main",null,p&&p.length&&l.a.createElement("section",{className:s()("features",h.a.features)},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},p.map(((e,t)=>l.a.createElement(E,Object(r.a)({key:t},e))))))),l.a.createElement("div",{className:"quickOverview__outter"},l.a.createElement("div",{className:"container quickOverview"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--5 quickOverview__description"},l.a.createElement("h2",null,"1. Create room templates"),l.a.createElement("p",null,"The first step is to create so-called room templates which describe how individual rooms look and how they can be connected to each other. The basic visuals are created with Unity Tilemaps but it is also possible to include game objects like enemies, loot, etc.")),l.a.createElement("div",{className:"col col--6 col--offset-1"},l.a.createElement(m.a,{src:"videos/room_template.mp4",timeout:5e3}))))),l.a.createElement("div",{className:"quickOverview__outter"},l.a.createElement("div",{className:"container quickOverview"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--6"},l.a.createElement(m.a,{src:"videos/level_graph.mp4",timeout:5e3})),l.a.createElement("div",{className:"col col--5 col--offset-1 quickOverview__description"},l.a.createElement("h2",null,"2. Describe level structure"),l.a.createElement("p",null,"The second step is to create a so-called level graph. The generator comes with a graph editor where you can specify how many rooms you want and how they are connected. You can also choose that some rooms will have different room templates than other rooms - e.g. a spawn room will look different than a boss room. Just make sure that the graph is not too big/complex."))))),l.a.createElement("div",{className:"quickOverview__outter"},l.a.createElement("div",{className:"container quickOverview"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--5 quickOverview__description"},l.a.createElement("h2",null,"3. Generate levels"),l.a.createElement("p",null,"The last step is to add the generator component to a game object, assign the level graph from the previous step and you are ready to generate levels.")),l.a.createElement("div",{className:"col col--6 col--offset-1"},l.a.createElement(m.a,{src:"videos/levels.mp4",timeout:5e3})))))))}},321:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(3),o=a(0),l=a.n(o),n=a(310);const s=e=>l.a.createElement(l.a.Fragment,null,l.a.createElement("source",{src:Object(n.a)(e.src),type:"video/mp4"}));class c extends l.a.Component{constructor(e){super(e),this.video=l.a.createRef()}componentDidMount(){this.video.current.play()}onEnded(e){const t=this.video;this.props.timeout?setTimeout((function(){t.current.play()}),this.props.timeout):t.current.play()}render(){const{src:e,...t}=this.props;return l.a.createElement("video",Object(r.a)({ref:this.video,width:"100%",onEnded:this.onEnded.bind(this),muted:!0},t),l.a.createElement(s,{src:e}),"Your browser does not support the video tag.")}}}}]);