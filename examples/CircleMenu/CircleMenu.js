webpackJsonp([9],{24:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=o(0),n=o(25),a=function(e){var t,o=e||{};t=void 0!==o.attributions?o.attributions:[a.ATTRIBUTION];var i=void 0!==o.crossOrigin?o.crossOrigin:"anonymous",r=void 0!==o.url?o.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";n.a.call(this,{attributions:t,cacheSize:o.cacheSize,crossOrigin:i,opaque:void 0===o.opaque||o.opaque,maxZoom:void 0!==o.maxZoom?o.maxZoom:19,reprojectionErrorThreshold:o.reprojectionErrorThreshold,tileLoadFunction:o.tileLoadFunction,url:r,wrapX:o.wrapX})};i.a.inherits(a,n.a),a.ATTRIBUTION='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.',t.default=a},25:function(e,t,o){"use strict";var i=o(0),n=o(41),a=o(35),r=function(e){var t=e||{},o=void 0!==t.projection?t.projection:"EPSG:3857",i=void 0!==t.tileGrid?t.tileGrid:a.a.createXYZ({extent:a.a.extentFromProjection(o),maxZoom:t.maxZoom,minZoom:t.minZoom,tileSize:t.tileSize});n.a.call(this,{attributions:t.attributions,cacheSize:t.cacheSize,crossOrigin:t.crossOrigin,logo:t.logo,opaque:t.opaque,projection:o,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileGrid:i,tileLoadFunction:t.tileLoadFunction,tilePixelRatio:t.tilePixelRatio,tileUrlFunction:t.tileUrlFunction,url:t.url,urls:t.urls,wrapX:void 0===t.wrapX||t.wrapX,transition:t.transition})};i.a.inherits(r,n.a),t.a=r},952:function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var n=o(1),a=i(n),r=o(24),l=i(r),c=o(82),u=i(c),s=o(34),d=i(s),m=o(81),p=i(m),f=o(84),h=i(f),g=o(66),E=i(g),v=o(39),w=i(v),x=o(26),y=i(x),S=o(56),b=i(S),B=o(126),P=i(B),T=o(103),j=i(T),C=o(9),F=o(22),M=!1,O=!1,k=[130,130],z=void 0,Z=new Promise(function(e){var t=new d.default({source:new l.default}),o=new p.default({source:new u.default({features:[new h.default({geometry:new E.default([135.1691495,34.6565482])})]}),style:new b.default({image:new P.default({radius:10,fill:new j.default({color:"#C62148"})})})}),i=new y.default({view:new w.default({center:[135.1691495,34.6565482],projection:"EPSG:4326",zoom:16}),layers:[t,o],interactions:[]});i.on("singleclick",function(e){var t=document.getElementById("map"),o=i.getPixelFromCoordinate([135.1691495,34.6565482]),n=i.getPixelFromCoordinate(e.coordinate);i.hasFeatureAtPixel(n)?(O=!0,z=[o[0]+t.offsetLeft,o[1]+t.offsetTop]):O=!1,X()}),e(i)}),I=(0,F.mappify)(F.MapComponent),X=function e(){(0,C.render)(a.default.createElement("div",null,a.default.createElement("div",{className:"example-block",style:{width:500,height:200}},a.default.createElement("div",null,"CircleMenu with segment as submenu:"),a.default.createElement(F.SimpleButton,{id:"segmentButton",shape:"circle",icon:"plus",style:{position:"absolute",top:k[0]+"px",left:k[1]+"px"},onClick:function(){var t=document.getElementById("segmentButton");M=!M,t.style.transform=M?"rotate(45deg)":"rotate(0deg)",e()}}),M?a.default.createElement(F.CircleMenu,{style:{position:"absolute",background:"none",border:"none"},position:[k[0]+14,k[1]+14],diameter:100,animationDuration:500,segmentAngles:[0,90]},a.default.createElement(F.SimpleButton,{icon:"floppy-o",shape:"circle"}),a.default.createElement(F.SimpleButton,{icon:"trash-o",shape:"circle"}),a.default.createElement(F.SimpleButton,{icon:"pencil",shape:"circle"})):null),a.default.createElement("div",{className:"example-block"},a.default.createElement("span",null,"CircleMenu in a Map (click the red feature)"),a.default.createElement(F.MapProvider,{map:Z},a.default.createElement(I,{style:{height:"512px"}})),O?a.default.createElement(F.CircleMenu,{position:z,diameter:80,animationDuration:500},a.default.createElement(F.SimpleButton,{icon:"pencil",shape:"circle"}),a.default.createElement(F.SimpleButton,{icon:"line-chart",shape:"circle"}),a.default.createElement(F.SimpleButton,{icon:"link",shape:"circle"}),a.default.createElement(F.SimpleButton,{icon:"thumbs-o-up",shape:"circle"}),a.default.createElement(F.SimpleButton,{icon:"bullhorn",shape:"circle"})):null)),document.getElementById("exampleContainer"))};X()}},[952]);