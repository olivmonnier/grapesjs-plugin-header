/*! grapesjs-plugin-header - 1.0.2 */
!function(e,a){'object'==typeof exports&&'object'==typeof module?module.exports=a():'function'==typeof define&&define.amd?define([],a):'object'==typeof exports?exports["grapesjs-plugin-header"]=a():e["grapesjs-plugin-header"]=a()}('undefined'!=typeof globalThis?globalThis:'undefined'!=typeof window?window:this,(()=>(()=>{"use strict";var e={d:(a,t)=>{for(var l in t)e.o(t,l)&&!e.o(a,l)&&Object.defineProperty(a,l,{enumerable:!0,get:t[l]})},o:(e,a)=>Object.prototype.hasOwnProperty.call(e,a),r:e=>{'undefined'!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:'Module'}),Object.defineProperty(e,'__esModule',{value:!0})}},a={};e.r(a),e.d(a,{default:()=>t});const t=function(e){const a={category:"Basic",defaultTagName:"h1",labelN1:"One (largest)",labelN2:"Two",labelN3:"Three",labelN4:"Four",labelN5:"Five",labelN6:"Six (smallest)",labelBlock:"Header",labelTrait:"Size",placeholder:"Insert your header text here",...arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}};!function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.DomComponents.addType("header",{isComponent:e=>e&&e.tagName&&["h1","h2","h3","h4","h5","h6"].includes(e.tagName.toLowerCase()),extend:"text",model:{defaults:{"custom-name":"Header",tagName:a.defaultTagName,traits:[{type:"select",options:[{value:"h1",name:a.labelN1},{value:"h2",name:a.labelN2},{value:"h3",name:a.labelN3},{value:"h4",name:a.labelN4},{value:"h5",name:a.labelN5},{value:"h6",name:a.labelN6}],label:a.labelTrait,name:"tagName",changeProp:1}]}}})}(e,a),function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.BlockManager.add("header",{label:a.labelBlock,category:a.category,attributes:{class:"fa fa-header"},content:{type:"header",content:a.placeholder,activeOnRender:1}})}(e,a)};return a})()));
//# sourceMappingURL=index.js.map