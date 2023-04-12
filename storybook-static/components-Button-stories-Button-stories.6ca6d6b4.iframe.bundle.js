/*! For license information please see components-Button-stories-Button-stories.6ca6d6b4.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_cra01=self.webpackChunkreact_cra01||[]).push([[535],{"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.jsx=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/components/Button/stories/Button.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BlueBtn:function(){return BlueBtn},LgBtn:function(){return LgBtn},MainBtn:function(){return MainBtn},MainssBtn:function(){return MainssBtn},RedBtn:function(){return RedBtn},SmBtn:function(){return SmBtn},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Button_stories}});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Button(_ref){var label=_ref.label,backgroundColor=_ref.backgroundColor,size=_ref.size,color=_ref.color,handleClick=_ref.handleClick,scale=1;"sm"===size&&(scale=.75),"lg"===size&&(scale=1.5);var style={backgroundColor:backgroundColor,padding:"".concat(.5*scale,"rem ").concat(1*scale,"rem"),border:"none",color:color};return(0,jsx_runtime.jsx)("button",{onClick:handleClick,style:style,children:label})}try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},handleClick:{defaultValue:null,description:"",name:"handleClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}var Button_stories={title:"Button",component:Button,argTypes:{handleClick:{action:"clicked"}}},Template=function Template(args){return(0,jsx_runtime.jsx)(Button,function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},args))},RedBtn=Template.bind({});RedBtn.args={label:"Red",backgroundColor:"red",size:"md",color:"white"};var BlueBtn=Template.bind({});BlueBtn.args={label:"Blue",backgroundColor:"blue",size:"md",color:"white"};var SmBtn=Template.bind({});SmBtn.args={label:"Sm Btn",backgroundColor:"gray",size:"sm",color:"white"};var LgBtn=Template.bind({});LgBtn.args={label:"Lg Btn",backgroundColor:"gray",size:"lg",color:"white"};var MainBtn=Template.bind({});MainBtn.args={label:"Main Btn",backgroundColor:"brown",size:"md"};var MainssBtn=Template.bind({});MainBtn.args={label:"Mains Btn",backgroundColor:"gray",size:"md"};var __namedExportsOrder=["RedBtn","BlueBtn","SmBtn","LgBtn","MainBtn","MainssBtn"];RedBtn.parameters={...RedBtn.parameters,docs:{...RedBtn.parameters?.docs,source:{originalSource:"function Template(args) {\n  return /*#__PURE__*/_jsx(Button, _objectSpread({}, args));\n}",...RedBtn.parameters?.docs?.source}}},BlueBtn.parameters={...BlueBtn.parameters,docs:{...BlueBtn.parameters?.docs,source:{originalSource:"function Template(args) {\n  return /*#__PURE__*/_jsx(Button, _objectSpread({}, args));\n}",...BlueBtn.parameters?.docs?.source}}},SmBtn.parameters={...SmBtn.parameters,docs:{...SmBtn.parameters?.docs,source:{originalSource:"function Template(args) {\n  return /*#__PURE__*/_jsx(Button, _objectSpread({}, args));\n}",...SmBtn.parameters?.docs?.source}}},LgBtn.parameters={...LgBtn.parameters,docs:{...LgBtn.parameters?.docs,source:{originalSource:"function Template(args) {\n  return /*#__PURE__*/_jsx(Button, _objectSpread({}, args));\n}",...LgBtn.parameters?.docs?.source}}},MainBtn.parameters={...MainBtn.parameters,docs:{...MainBtn.parameters?.docs,source:{originalSource:"function Template(args) {\n  return /*#__PURE__*/_jsx(Button, _objectSpread({}, args));\n}",...MainBtn.parameters?.docs?.source}}},MainssBtn.parameters={...MainssBtn.parameters,docs:{...MainssBtn.parameters?.docs,source:{originalSource:"function Template(args) {\n  return /*#__PURE__*/_jsx(Button, _objectSpread({}, args));\n}",...MainssBtn.parameters?.docs?.source}}}}}]);