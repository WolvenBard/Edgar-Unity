(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{197:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return m}));var a=r(2),o=r(6),n=(r(0),r(228)),i=r(231),l=r(235),c={title:"Example 2"},s={id:"examples/example-2",title:"Example 2",description:"In this tutorial, we will use this tileset by 0x72. Be sure to check their work out if you like the tileset. We will not care about room decorations - we will use just basic walls, floor and  door tiles.",source:"@site/docs\\examples\\example-2.md",permalink:"/ProceduralLevelGenerator-Unity/docs/next/examples/example-2",editUrl:"https://github.com/OndrejNepozitek/ProceduralLevelGenerator-Unity/tree/docusaurus/docs/examples/example-2.md",version:"next",sidebar:"docs",previous:{title:"Example 1",permalink:"/ProceduralLevelGenerator-Unity/docs/next/examples/example-1"},next:{title:"(PRO) Platformer 1",permalink:"/ProceduralLevelGenerator-Unity/docs/next/examples/platformer-1"}},p=[{value:"Simple example",id:"simple-example",children:[{value:"Basic rooms romplates",id:"basic-rooms-romplates",children:[]},{value:"Vertical corridors",id:"vertical-corridors",children:[]},{value:"Horizontal corridors",id:"horizontal-corridors",children:[]},{value:"Level graph",id:"level-graph",children:[]},{value:"Results",id:"results",children:[]}]},{value:"Real-life example",id:"real-life-example",children:[{value:"Spawn and boss rooms",id:"spawn-and-boss-rooms",children:[]},{value:"Additional room template",id:"additional-room-template",children:[]},{value:"Wider corridors",id:"wider-corridors",children:[]},{value:"Level graph",id:"level-graph-1",children:[]},{value:"Results",id:"results-1",children:[]}]}],u={rightToc:p};function m(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"In this tutorial, we will use ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://0x72.itch.io/dungeontileset-ii"}),"this tileset")," by ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://0x72.itch.io/"}),"0x72"),". Be sure to check their work out if you like the tileset. We will not care about room decorations - we will use just basic walls, floor and  door tiles."),Object(n.b)(i.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(n.b)(i.b,{src:"img/original/example2_result1.png",caption:"Simple example",mdxType:"GalleryImage"}),Object(n.b)(i.b,{src:"img/v2/examples/example2/result_reallife1.png",caption:"Real-life example",mdxType:"GalleryImage"})),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"Note:")," I recommend reading ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"example1.md"}),"Example 1")," first as this is a little bit harder to setup and I will not repeat the basics here.")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"Note:")," All files from this example can be found at ",Object(n.b)("em",{parentName:"p"},"ProceduralLevelGenerator/Examples/Example2"),".")),Object(n.b)(l.a,{id:"example-2",mdxType:"ExampleFeatures"}),Object(n.b)("h2",{id:"simple-example"},"Simple example"),Object(n.b)("p",null,"The goal is to create two basic rectangular room remplates of different sizes and a room template for both horizontal and vertical corridors."),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"Note:")," This tileset is trickier than the one used in ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"example1.md"}),"Example 1")," because there is an additional row of ligther tiles above all horizontal wall tiles. It will cause us problems when working with corridors.")),Object(n.b)("h3",{id:"basic-rooms-romplates"},"Basic rooms romplates"),Object(n.b)("p",null,"For this example, I am using doors with two different lengths (1 and 2). That means that we have to use the ",Object(n.b)("em",{parentName:"p"},"Specific positions mode")," mode because the ",Object(n.b)("em",{parentName:"p"},"Simple mode")," can only handle doors with the same length. As you can see below, the door positions look quite messy because they overlap. However, this is only to showcase that it is possible and you can use doors with the same length."),Object(n.b)(i.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(n.b)(i.b,{src:"img/original/example2_room1.png",caption:"Smaller room",mdxType:"GalleryImage"}),Object(n.b)(i.b,{src:"img/original/example2_room2.png",caption:"Bigger room",mdxType:"GalleryImage"})),Object(n.b)("h3",{id:"vertical-corridors"},"Vertical corridors"),Object(n.b)("p",null,"As I said before, there is a problem with corridors when working with this tileset. To be more precise, there is a problem with vertical corridors because of the additional roow of tiles above wall tiles. If we were to design our vertical corridors as in Example 1, we would end up with something like this:"),Object(n.b)(i.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(n.b)(i.b,{src:"img/original/example2_wrong_corridor.png",caption:"Incorrent vertical corridor",mdxType:"GalleryImage"}),Object(n.b)(i.b,{src:"img/original/example2_wrong_corridor2.png",caption:"Incorrent connection",mdxType:"GalleryImage"})),Object(n.b)("p",null,"We can solve this by using the ",Object(n.b)("strong",{parentName:"p"},"Outline override")," feature. It allows us to tell the algorithm that instead of automatically computing the outline of the room template, we want to draw it manually. You can see the result below. By doing so, we easily fix the problem with walls being one tile taller and the level is drawn correctly."),Object(n.b)(i.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(n.b)(i.b,{src:"img/v2/examples/example2/corridor_vertical_before.png",caption:"Incorrect - Without outline override",mdxType:"GalleryImage"}),Object(n.b)(i.b,{src:"img/v2/examples/example2/corridor_vertical_after.png",caption:"Correct - With outline override",mdxType:"GalleryImage"})),Object(n.b)("p",null,"To enable the ",Object(n.b)("strong",{parentName:"p"},"Outline override"),", we have to click the ",Object(n.b)("strong",{parentName:"p"},"Add outline override")," button. This button adds another tilemap layer called ",Object(n.b)("em",{parentName:"p"},"Outline Override"),". "),Object(n.b)(i.c,{src:"img/v2/examples/example2/corridor_vertical_before_gui.png",caption:"Add outline override button",mdxType:"Image"}),Object(n.b)("p",null,"When computing the outline of this room template, the generator will now ignore all the other layers and use only the ",Object(n.b)("em",{parentName:"p"},"Outline Override")," layer. Moreover, the generator will ignore this layer while copying individual tiles to the shared tilemap so we can use any tiles to draw on this layer. And where we are done with drawing the outline, we can make that tilemap layer inactive so we can see how the room template normally looks."),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"Note:")," We must not forget to make sure that all our doors are contained on the new outline.")),Object(n.b)(i.c,{src:"img/v2/examples/example2/corridor_vertical_with_outline_shown.png",caption:"We can use any tiles to draw on the Outline Override layer as they are not used in the output.",mdxType:"Image"}),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"Note:")," In the previous version of the algorithm, we had to manually implement some additional logic to fix these situations. The goal of the current version is to make it possible without writing any code.")),Object(n.b)("h3",{id:"horizontal-corridors"},"Horizontal corridors"),Object(n.b)("p",null,"There is also a slight problem with horizontal corridors. It is currently not possible to have doors with length 1 to be at the corners of the room template outline. We fix this by adding ",Object(n.b)("strong",{parentName:"p"},"Outline override")," and using a rectangular outline where the doors are not at the corners."),Object(n.b)(i.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(n.b)(i.b,{src:"img/v2/examples/example2/corridor_horizontal_before.png",caption:"Incorrect - Without outline override. There must not be doors of length 1 at the corners of the outline.",mdxType:"GalleryImage"}),Object(n.b)(i.b,{src:"img/v2/examples/example2/corridor_horizontal_after.png",caption:"Correct - With outline override. Doors are no longer at the corners of the outline.",mdxType:"GalleryImage"})),Object(n.b)("h3",{id:"level-graph"},"Level graph"),Object(n.b)(i.c,{src:"img/v2/examples/example2/level_graph1.png",caption:"Level graph",mdxType:"Image"}),Object(n.b)("h3",{id:"results"},"Results"),Object(n.b)(i.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(n.b)(i.b,{src:"img/original/example2_result2.png",caption:"Example result",mdxType:"GalleryImage"}),Object(n.b)(i.b,{src:"img/original/example2_result3.png",caption:"Example result",mdxType:"GalleryImage"})),Object(n.b)("h2",{id:"real-life-example"},"Real-life example"),Object(n.b)("p",null,"To create something that is closer to a real-life example, we will add more rooms to the level graph, add special room templates for spawn and boss rooms and also two more corridor room templates."),Object(n.b)("h3",{id:"spawn-and-boss-rooms"},"Spawn and boss rooms"),Object(n.b)("p",null,"These rooms will contain:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"our player prefab with basic movement"),Object(n.b)("li",{parentName:"ul"},"interactable chest that changes appearance after interaction (no loot is implemented)"),Object(n.b)("li",{parentName:"ul"},"ladder that causes the game manager to generated a new level after interaction"),Object(n.b)("li",{parentName:"ul"},"an ogre in the boss room (no AI implemented)")),Object(n.b)(i.c,{src:"img/v2/examples/example2/spawn.png",caption:"Spawn room with our player prefab, chest and exit",mdxType:"Image"}),Object(n.b)(i.c,{src:"img/v2/examples/example2/boss.png",caption:"Boss room with our enemy prefab, chest and exit",mdxType:"Image"}),Object(n.b)("h3",{id:"additional-room-template"},"Additional room template"),Object(n.b)("p",null,"We can make generated dungeons more interesting by adding smaller room templates to our dead-end rooms."),Object(n.b)(i.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(n.b)(i.b,{src:"img/original/example2_room3.png",caption:"Additional room tempalte",mdxType:"GalleryImage"})),Object(n.b)("h3",{id:"wider-corridors"},"Wider corridors"),Object(n.b)(i.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(n.b)(i.b,{src:"img/original/example2_corridor_horizontal2.png",caption:"Wider horizontal corridor",mdxType:"GalleryImage"}),Object(n.b)(i.b,{src:"img/original/example2_corridor_vertical2.png",caption:"Wider vertical corridor",mdxType:"GalleryImage"})),Object(n.b)("h3",{id:"level-graph-1"},"Level graph"),Object(n.b)("p",null,"So the goal is to have more rooms than in the simple example and also a spawn room and a boss room. You can see one such level graph below."),Object(n.b)(i.c,{src:"img/v2/examples/example2/level_graph2.png",caption:"Level graph",mdxType:"Image"}),Object(n.b)("h3",{id:"results-1"},"Results"),Object(n.b)(i.c,{src:"img/v2/examples/example2/result_reallife2.png",caption:"Example result",mdxType:"Image"}),Object(n.b)(i.c,{src:"img/v2/examples/example2/result_reallife3.png",caption:"Example result",mdxType:"Image"}))}m.isMDXComponent=!0},228:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var a=r(0),o=r.n(a);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,b=u["".concat(i,".").concat(d)]||u[d]||m[d]||n;return r?o.a.createElement(b,l(l({ref:t},s),{},{components:r})):o.a.createElement(b,l({ref:t},s))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<n;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},229:function(e,t,r){"use strict";var a=r(0),o=r(34);t.a=function(){return Object(a.useContext)(o.a)}},230:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var a=r(229);function o(e){const{siteConfig:t}=Object(a.a)(),{baseUrl:r="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?r+e.slice(1):r+e}},231:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return u}));var a=r(2),o=r(0),n=r.n(o),i=r(230);const l=e=>n.a.createElement("div",{style:{display:"inline-block",margin:2,overflow:"hidden",position:"relative",width:`calc(${100/e.cols}% - 4px)`,verticalAlign:"top"}},e.children),c=e=>n.a.createElement("div",{style:{fontSize:"0px",margin:"20px 0"}},n.a.Children.map(e.children,t=>n.a.cloneElement(t,{cols:e.cols||4,fixedHeight:e.fixedHeight}))),s=e=>n.a.createElement(l,{cols:e.cols},n.a.createElement("a",{href:Object(i.a)(e.src),target:"_blank"},n.a.createElement("img",{src:Object(i.a)(e.src),alt:"result",style:{height:!0===e.fixedHeight?800/e.cols+"px":"auto",objectFit:!0===e.fixedHeight?"cover":"initial"}})),void 0!==e.caption&&n.a.createElement(p,null,e.caption)),p=e=>n.a.createElement("div",{style:{fontSize:16,fontStyle:"italic",textAlign:"center",margin:"10px 0px 15px"}},e.children),u=e=>{const{src:t,caption:r,...o}=e;return n.a.createElement("div",{style:{textAlign:"center"}},n.a.createElement("img",Object(a.a)({src:Object(i.a)(e.src)},o)),void 0!==e.caption&&n.a.createElement(p,null,e.caption))}},232:function(e,t,r){"use strict";var a=r(0),o=r.n(a),n=r(18),i=r(233),l=r(36),c=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(r[a[o]]=e[a[o]])}return r};t.a=function(e){var{isNavLink:t}=e,r=c(e,["isNavLink"]);const{to:s,href:p}=r,u=s||p,m=Object(i.a)(u),d=Object(a.useRef)(!1),b=t?n.c:n.b,h=l.a.canUseIntersectionObserver;let f;return Object(a.useEffect)(()=>(!h&&m&&window.docusaurus.prefetch(u),()=>{h&&f&&f.disconnect()}),[u,h,m]),u&&m&&!u.startsWith("#")?o.a.createElement(b,Object.assign({},r,{onMouseEnter:()=>{d.current||(window.docusaurus.preload(u),d.current=!0)},innerRef:e=>{var t,r;h&&e&&m&&(t=e,r=()=>{window.docusaurus.prefetch(u)},f=new window.IntersectionObserver(e=>{e.forEach(e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(t),f.disconnect(),r())})}),f.observe(t))},to:u})):o.a.createElement("a",Object.assign({href:u},!m&&{target:"_blank",rel:"noopener noreferrer"},r))}},233:function(e,t,r){"use strict";function a(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}r.d(t,"a",(function(){return a}))},235:function(e,t,r){"use strict";r.d(t,"b",(function(){return c})),r.d(t,"a",(function(){return s}));r(236),r(237),r(239),r(243);var a=r(0),o=r.n(a),n=r(232),i=[{id:"outline-override",url:"../basics/room-templates#outline-override",name:"Outline override",usages:[{id:"corridors",description:"Outline override is used to properly handle corridors"}]},{id:"custom-rooms-and-connections",url:"../basics/level-graphs#pro-custom-rooms-and-connections",name:"Custom rooms",usages:[{id:"room-type",description:"The definition of rooms is enhanced with a custom type"}]},{id:"custom-post-processing",url:"../generators/post-process#custom-post-processing",name:"Custom post-processing",usages:[{id:"enemies",description:"A custom post-processing task is used to spawn enemies after a level is generated"},{id:"player-spawn",description:"Move the player to the spawn position of the level"}]}],l=[{id:"example-1",name:"Example 1",url:"../examples/example-1",features:[{id:"custom-post-processing",usage:"enemies",anchor:"enemies"}]},{id:"example-2",name:"Example 2",url:"../examples/example-2",features:[{id:"outline-override",usage:"corridors",anchor:"vertical-corridors"}]},{id:"dead-cells",name:"Dead Cells",url:"../examples/dead-cells",features:[{id:"custom-post-processing",usage:"enemies",anchor:"enemies"},{id:"custom-post-processing",usage:"player-spawn",anchor:"spawn-position"},{id:"custom-rooms-and-connections",usage:"room-type",anchor:"custom-room-and-connection-types"}]}];var c=function(e){var t=i.find((function(t){return t.id===e.id})).usages.map((function(e){return Object.assign({},e,{examples:[]})}));return l.forEach((function(r){r.features.forEach((function(a){a.id===e.id&&t.find((function(e){return e.id===a.usage})).examples.push({example:r,feature:a})}))})),console.log(t),o.a.createElement("div",{className:"featureUsage"},o.a.createElement("div",{className:"featureUsage__title"},"Where is this feature used?"),o.a.createElement("div",{className:"featureUsage__description"},"Below is the list of examples/tutorials where we use this feature. Feel free to check them out if you're not sure how something works or if you just want to see this feature used in action."),o.a.createElement("table",null,o.a.createElement("tbody",null,t.map((function(e,t){return o.a.createElement("tr",{key:t},o.a.createElement("td",null,e.examples.map((function(e,t){return o.a.createElement("span",null,t?", ":"",o.a.createElement(n.a,{to:e.example.url+"#"+e.feature.anchor},"**Test**",e.example.name))}))),o.a.createElement("td",null,e.description))})))))},s=function(e){var t=l.find((function(t){return t.id===e.id})),r=[];return t.features.forEach((function(e){var t=i.find((function(t){return t.id===e.id})),a=t.usages.find((function(t){return t.id===e.usage}));r.push(Object.assign({},e,{feature:t,featureUsage:a}))})),o.a.createElement("div",{className:"featureUsage"},o.a.createElement("div",{className:"featureUsage__title"},"List of used features"),o.a.createElement("div",{className:"featureUsage__description"},"Below is a list of features that are used in this example."),o.a.createElement("table",null,o.a.createElement("tbody",null,r.map((function(e,t){return o.a.createElement("tr",{key:t},o.a.createElement("td",null,o.a.createElement(n.a,{to:e.feature.url},e.feature.name)),o.a.createElement("td",null,e.featureUsage.description))})))))}},236:function(e,t,r){var a=r(19).f,o=Function.prototype,n=/^\s*function ([^ (]*)/;"name"in o||r(12)&&a(o,"name",{configurable:!0,get:function(){try{return(""+this).match(n)[1]}catch(e){return""}}})},237:function(e,t,r){"use strict";r(238)("anchor",(function(e){return function(t){return e(this,"a","name",t)}}))},238:function(e,t,r){var a=r(52),o=r(35),n=r(37),i=/"/g,l=function(e,t,r,a){var o=String(n(e)),l="<"+t;return""!==r&&(l+=" "+r+'="'+String(a).replace(i,"&quot;")+'"'),l+">"+o+"</"+t+">"};e.exports=function(e,t){var r={};r[e]=t(l),a(a.P+a.F*o((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",r)}},239:function(e,t,r){var a=r(52);a(a.S+a.F,"Object",{assign:r(240)})},240:function(e,t,r){"use strict";var a=r(12),o=r(38),n=r(241),i=r(242),l=r(54),c=r(53),s=Object.assign;e.exports=!s||r(35)((function(){var e={},t={},r=Symbol(),a="abcdefghijklmnopqrst";return e[r]=7,a.split("").forEach((function(e){t[e]=e})),7!=s({},e)[r]||Object.keys(s({},t)).join("")!=a}))?function(e,t){for(var r=l(e),s=arguments.length,p=1,u=n.f,m=i.f;s>p;)for(var d,b=c(arguments[p++]),h=u?o(b).concat(u(b)):o(b),f=h.length,g=0;f>g;)d=h[g++],a&&!m.call(b,d)||(r[d]=b[d]);return r}:s},241:function(e,t){t.f=Object.getOwnPropertySymbols},242:function(e,t){t.f={}.propertyIsEnumerable},243:function(e,t,r){"use strict";var a=r(52),o=r(244)(5),n=!0;"find"in[]&&Array(1).find((function(){n=!1})),a(a.P+a.F*n,"Array",{find:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),r(55)("find")},244:function(e,t,r){var a=r(57),o=r(53),n=r(54),i=r(58),l=r(245);e.exports=function(e,t){var r=1==e,c=2==e,s=3==e,p=4==e,u=6==e,m=5==e||u,d=t||l;return function(t,l,b){for(var h,f,g=n(t),v=o(g),x=a(l,b,3),y=i(v.length),O=0,w=r?d(t,y):c?d(t,0):void 0;y>O;O++)if((m||O in v)&&(f=x(h=v[O],O,g),e))if(r)w[O]=f;else if(f)switch(e){case 3:return!0;case 5:return h;case 6:return O;case 2:w.push(h)}else if(p)return!1;return u?-1:s||p?p:w}}},245:function(e,t,r){var a=r(246);e.exports=function(e,t){return new(a(e))(t)}},246:function(e,t,r){var a=r(20),o=r(247),n=r(11)("species");e.exports=function(e){var t;return o(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!o(t.prototype)||(t=void 0),a(t)&&null===(t=t[n])&&(t=void 0)),void 0===t?Array:t}},247:function(e,t,r){var a=r(56);e.exports=Array.isArray||function(e){return"Array"==a(e)}}}]);