(this["webpackJsonpreact-form-builder-component-example"]=this["webpackJsonpreact-form-builder-component-example"]||[]).push([[0],[,,,function(e,t,a){e.exports=a(12)},function(e,t,a){},,,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);a(4);var n=a(0),r=a.n(n),l=a(1),c=a.n(l),i=a(2),o=a(14);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function u(e){var t=e.target;t.style.height="1px",t.style.height=25+t.scrollHeight+"px"}var m={formStub:{title:"Onboard New Employee",description:"FLowhart to onboard new employee to the organization",required:[],properties:{intro:{title:"Introduction",description:"This is a paragraph element. You can update me or add new form elements."}},ui:{intro:{widget:"paragraph"}},values:{}},propertyStub:{title:"Title",description:"",options:[]},uiStub:{widget:"input",autofocus:!1,className:""},widgets:["input","textarea","select","checkbox","radio","paragraph","header","hr"],inputClass:"form-control",checkboxClass:"form-check-input",checkboxWrapperClass:"form-check",inputWrapperClass:"form-group",btnClass:"btn"},p=function(e){var t=e.onSave,a=e.onChange,l=e.formState,c=Object(n.useState)(!1),i=c[0],p=c[1],f=Object(n.useState)(l||m.formStub),b=f[0],v=f[1],h=Object(n.useState)(!1),E=h[0],g=h[1],y=Object(n.useState)(),N=y[0],C=y[1];Object(n.useEffect)((function(){a&&a(b)}),[b]);var k=function(e){var t,a=e.target,n=a.name,r="checkbox"===a.type?a.checked:a.value;e.persist(),v(s({},b,((t={})[n]=r,t)))},x=function(e){var t=s({},b),a=e.name,n=e.title,r=e.description,l=e.widget,c=e.type,i=e.className,o=e.autofocus,u=e.required,m=e.options,p=w(m),d="hello";a&&(d=a),t.properties[d]={title:n,description:r,type:c,options:p},t.ui[d]={className:i,widget:l,autofocus:o},u&&!t.required.includes(d)&&t.required.push(d),v(t)},w=function(e){var t=e&&"string"===typeof e?e.split(/\r?\n/):[];return t.length>0?t.map((function(e){var t=e.includes(":",1)&&e.split(":");if(t){var a={};return a[t[0]]=t[1],a}return e})):t};return r.a.createElement(n.Fragment,null,r.a.createElement("h2",null,"Form Detail ",r.a.createElement("button",{className:m.btnClass+" btn"+(i?"":"-outline")+"-primary",onClick:function(){return p(!i)}},"{  }")," "),i&&r.a.createElement("textarea",{autoFocus:!0,onFocus:function(e){return u(e)},onKeyUp:function(e){return u(e)},className:"form-control",onChange:function(e){var t=e.target.value;v(JSON.parse(t))},value:JSON.stringify(b,void 0,4)}),!i&&r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Form Title"),r.a.createElement("input",{type:"text",className:m.inputClass,name:"title",onChange:k,value:b.title})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Description"),r.a.createElement("textarea",{className:m.inputClass,name:"description",onChange:k,value:b.description})),r.a.createElement("h3",{className:"mt-3"},"Properties"),r.a.createElement("button",{className:m.btnClass+" btn"+(E?"":"-outline")+"-primary btn-block",onClick:function(){return g(!E),void C(null)}},r.a.createElement("i",{className:"fa fa-plus-circle"})," Add Property"),E&&r.a.createElement("div",{className:"bg-primary rounded p-2"},r.a.createElement(d,{onPropertySubmit:x,name:Object(o.a)()})),r.a.createElement("ul",{className:"list-unstyled border-top"},Object.keys(b.properties).map((function(e,t){return r.a.createElement("li",{key:e+t,className:"border p-2 rounded my-1 "+(N===e?"bg-primary":"")},r.a.createElement("span",{onClick:function(){return function(e){C(N&&N===e?null:e),g(!1)}(e)},className:"font-weight-bold btn-link btn "+(N===e?"text-white":"text-dark")},b.properties[e].title," ",N===e?"- Edit":""),r.a.createElement("button",{onClick:function(){return function(e){if(window.confirm('Remove this property "'+b.properties[e].title+'" ?')){var t=s({},b);delete t.properties[e],v(t)}}(e)},className:m.btnClass+"  float-right "+(N===e?"btn-primary":"btn-link")},"X"),N===e&&r.a.createElement(d,{onPropertySubmit:x,name:e,property:b.properties[e],required:b.required,ui:b.ui[e]}))})))),r.a.createElement("button",{type:"button",className:m.btnClass+" btn-primary",onClick:function(e){return t(e)}},"Save Form"))},d=function(e){var t=e.name,a=e.property,l=e.ui,c=e.onPropertySubmit,i=e.required,o=s({},a||m.propertyStub);Object.assign(o,l||m.uiStub),o.name||(o.name=t),o.required=!!i&&i.includes(t);var u=Object(n.useState)(o),p=u[0],d=u[1],f=Object(n.useState)(o)[0],b=function(e){var t,a=e.target,n=a.name,r="checkbox"===a.type?a.checked:a.value;e.persist(),d(s({},p,((t={})[n]=r,t)))};Object(n.useEffect)((function(){c(p)}),[p]);var v;return r.a.createElement("div",{className:"border p-3 bg-white rounded"},r.a.createElement("div",{className:""+m.inputWrapperClass},r.a.createElement("label",null,"Widget"),r.a.createElement("select",{className:""+m.inputClass,value:null===p||void 0===p?void 0:p.widget,name:"widget",onChange:b},m.widgets.map((function(e,t){return r.a.createElement("option",{key:e+t,value:e},e)})))),r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:m.inputWrapperClass+" col"},r.a.createElement("label",null,"Title"),r.a.createElement("input",{type:"text",value:null===p||void 0===p?void 0:p.title,name:"title",onChange:b,className:""+m.inputClass})),r.a.createElement("div",{className:m.inputWrapperClass+" col"},r.a.createElement("label",null,"Type"),r.a.createElement("input",{type:"text",value:null===p||void 0===p?void 0:p.type,name:"type",onChange:b,className:""+m.inputClass}))),r.a.createElement("div",{className:"form-row "+m.inputWrapperClass},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:""+m.checkboxWrapperClass},r.a.createElement("input",{type:"checkbox",name:"required",checked:null===p||void 0===p?void 0:p.required,onChange:b,className:""+m.checkboxClass,id:"required"}),r.a.createElement("label",{className:"form-check-label",htmlFor:"required"},"Required"))),r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:""+m.checkboxWrapperClass},r.a.createElement("input",{type:"checkbox",name:"autofocus",checked:null===p||void 0===p?void 0:p.autofocus,onChange:b,className:""+m.checkboxClass,id:"autofocus"}),r.a.createElement("label",{className:"form-check-label",htmlFor:"autofocus"},"Autofocus")))),r.a.createElement("div",{className:""+m.inputWrapperClass},r.a.createElement("label",null,"Class Name"),r.a.createElement("input",{type:"text",value:null===p||void 0===p?void 0:p.className,onChange:b,name:"className",className:""+m.inputClass})),r.a.createElement("div",{className:""+m.inputWrapperClass},r.a.createElement("label",null,"Options ",r.a.createElement("small",null,"(Add options separated by new line)")),r.a.createElement("textarea",{className:""+m.inputClass,name:"options",onChange:b,value:p.options?(v=p.options,"string"===typeof v?v:v.length>0?v.map((function(e){return"object"===typeof e&&null!==e?Object.keys(e).map((function(t){return t+":"+e[t]})):"string"===typeof e||"number"===typeof e?e:void 0})).join("\n"):""):""})),r.a.createElement("div",{className:""+m.inputWrapperClass},r.a.createElement("label",null,"Description"),r.a.createElement("textarea",{className:""+m.inputClass,name:"description",onChange:b,value:p.description?p.description:""})),r.a.createElement("button",{type:"button",className:m.btnClass+" btn-outline-warning btn-sm",onClick:function(){d(f)}},r.a.createElement("i",{className:"fa fa-history"})," Discard Changes"))},f=function(e){var t=e.onChange,a=e.title,n=e.name,l=e.autofocus,c=e.type,i=e.className,o=e.value,s=e.required;return r.a.createElement("div",{className:""+m.inputWrapperClass},r.a.createElement("label",null,a),r.a.createElement("input",{type:c,required:s,autoFocus:!!l&&"autofocus",onChange:t?function(e){return t(e)}:"",name:n,value:o,className:m.inputClass+" "+i}))},b=function(e){var t=e.onChange,a=e.title,n=e.name,l=e.autofocus,c=e.className,i=e.options,o=e.required;return r.a.createElement("div",{className:""+m.inputWrapperClass},r.a.createElement("label",null,a),r.a.createElement("select",{autoFocus:!!l&&"autofocus",onChange:t?function(e){return t(e)}:"",name:n,required:o,className:m.iputWrapper+" "+c},i&&i.map((function(e,t){if("object"===typeof e&&null!==e){var a=Object.keys(e);return r.a.createElement("option",{key:t,value:a[0]},e[a[0]])}if("string"===typeof e||"number"===typeof e)return r.a.createElement("option",{key:t,value:e},e)}))))},v=function(e){var t=e.onChange,a=e.title,n=e.name,l=e.autofocus;return r.a.createElement("div",{className:m.checkboxWrapperClass+" mb-3"},r.a.createElement("input",{type:"checkbox",id:n,autoFocus:!!l&&"autofocus",onChange:t?function(e){return t(e)}:"",name:n,className:""+m.checkboxClass}),r.a.createElement("label",{className:"form-check-label",htmlFor:n},a))},h=function(e){var t=e.onChange,a=e.title,n=e.name,l=e.autofocus,c=e.className,i=e.required;return r.a.createElement("div",{className:""+m.inputWrapperClass},r.a.createElement("label",null,a),r.a.createElement("textarea",{autoFocus:!!l&&"autofocus",required:i,onChange:t?function(e){return t(e)}:"",name:n,className:m.inputClass+" "+c}))},E=function(e){var t=e.onChange,a=e.name,n=e.autofocus,l=e.options,c=e.required,i=function(e,l){return r.a.createElement("div",{className:"d-inline mr-3",key:l},r.a.createElement("input",{type:"radio",id:e.id,required:c,autoFocus:!!n&&"autofocus",onChange:t?function(e){return t(e)}:"",name:a,value:e.value}),r.a.createElement("label",{htmlFor:e.id,className:"pl-1"},e.label))};return r.a.createElement("div",{className:m.inputWrapperClass+" clearfix"},l&&l.map((function(e,t){if("object"===typeof e&&null!==e){var n=Object.keys(e),r={id:a+e[n[0]],label:e[n[0]],value:n[0]};return i(r,t)}if("string"===typeof e||"number"===typeof e)return i({id:a+e,label:e,value:e},t)})))},g=function(e){var t=e.title,a=e.description;return r.a.createElement("div",{className:""+m.inputWrapperClass},r.a.createElement("label",null,t),r.a.createElement("p",null,a))},y=function(e){var t=e.title,a=e.className,n=e.type,l=["h1","h2","h3","h4","h5","h6"].includes(n)?""+n:"h1";return r.a.createElement(l,{className:a},t)},N=function(e){var t=e.properties,a=e.required,l=e.ui,c=e.description,i=e.title,o=e.onsubmit,u=e.values,p=Object(n.useState)(a||[])[0],d=Object(n.useState)(u||{}),N=d[0],C=d[1],k=function(e){var t,a=e.target,n=a.name,r="checkbox"===a.type?a.checked:a.value;e.persist(),C(s({},N,((t={})[n]=r,t)))};return r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),o&&o(N)}(e)}},r.a.createElement("h2",{className:"my-3"},i),r.a.createElement("p",null,c),t&&Object.keys(t).map((function(e,a){return t[e]&&function(e,t,a){switch(e.name=t,l[t]&&l[t].widget?l[t].widget:"hr"===t?"hr":"input"){case"input":return r.a.createElement(f,s({key:t+a,value:null===N||void 0===N?void 0:N[t],required:p.includes(t)},e,l[t],{onChange:k}));case"select":return r.a.createElement(b,s({key:t+a},e,l[t],{required:p.includes(t),onChange:k}));case"radio":return r.a.createElement(E,s({key:t+a},e,l[t],{required:p.includes(t),onChange:k}));case"checkbox":return r.a.createElement(v,s({key:t+a},e,l[t],{required:p.includes(t),onChange:k}));case"textarea":return r.a.createElement(h,s({key:t+a},e,l[t],{required:p.includes(t),onChange:k}));case"paragraph":return r.a.createElement(g,s({key:t+a},e,l[t]));case"header":return r.a.createElement(y,s({key:t+a},e,l[t]));case"hr":return r.a.createElement("hr",{key:t+a})}}(t[e],e,a)})),r.a.createElement("button",{type:"submit",className:m.btnClass+" btn-primary"},"Submit"))},C=(a(11),{title:"Form Builder Demo",description:"Demo of form builder component for React JS",required:["fullname"],properties:{intro:{title:"Introduction",description:"This is a paragraph element. You can update me or add new form elements."},fullname:{title:"Full Name",description:"Enter Full Name"}},ui:{intro:{widget:"paragraph"},fullname:{className:"text-success"}},values:{}}),k=function(){var e=Object(n.useState)({}),t=Object(i.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-sm-4"},r.a.createElement(p,{onSave:function(e){e.preventDefault(),console.log(JSON.stringify(a))},formState:C,onChange:function(e){l(e)}})),r.a.createElement("div",{className:"col text-muted border-left "},r.a.createElement("h2",null,"Preview"),r.a.createElement("div",{className:"form-preview border"},r.a.createElement(N,Object.assign({},a,{onsubmit:function(e){console.log(e)}}))))))};c.a.render(r.a.createElement(k,null),document.getElementById("root"))}],[[3,1,2]]]);
//# sourceMappingURL=main.c4d0f41a.chunk.js.map