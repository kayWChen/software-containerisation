(function(e){function t(t){for(var n,a,u=t[0],i=t[1],s=t[2],m=0,d=[];m<u.length;m++)a=u[m],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);c&&c(t);while(d.length)d.shift()();return l.push.apply(l,s||[]),r()}function r(){for(var e,t=0;t<l.length;t++){for(var r=l[t],n=!0,u=1;u<r.length;u++){var i=r[u];0!==o[i]&&(n=!1)}n&&(l.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},o={app:0},l=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var c=i;l.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=(r("d3b7"),r("bc3a")),l=r.n(o),a={},u=l.a.create(a);u.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),u.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),Plugin.install=function(e,t){e.axios=u,window.axios=u,Object.defineProperties(e.prototype,{axios:{get:function(){return u}},$axios:{get:function(){return u}}})},n["default"].use(Plugin);Plugin;var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},s=[],c=(r("cb29"),{data:function(){var e={date:"2024-03-02",name:"kay",address:"Amsterdam"};return{tableData:Array(20).fill(e)}}}),m=c,d=(r("034f"),r("2877")),f=Object(d["a"])(m,i,s,!1,null,null,null),p=f.exports,b=r("8c4f"),h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-container",{staticStyle:{height:"1000px",border:"1px solid #eee"}},[r("el-aside",{staticStyle:{"background-color":"rgb(238, 241, 246)"},attrs:{width:"200px"}},[r("el-menu",{attrs:{router:"","default-openeds":["0","1"]}},e._l(e.$router.options.routes,(function(t,n){return t.show?r("el-submenu",{attrs:{index:n+""}},[r("template",{slot:"title"},[r("i",{staticClass:"el-icon-setting"}),e._v(e._s(t.name))]),e._l(t.children,(function(t,n){return r("el-menu-item",{class:e.$route.path==t.path?"is-active":"",attrs:{index:t.path}},[r("template",{slot:"title"},[e._v(e._s(t.name))])],2)}))],2):e._e()})),1)],1),r("el-main",[r("router-view")],1)],1)],1)},g=[],v={name:"Index"},y=v,F=Object(d["a"])(y,h,g,!1,null,"9df9ae4e",null),x=F.exports,j=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",staticStyle:{width:"60%"},attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"subject name",prop:"name"}},[r("el-input",{model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),r("el-form-item",{attrs:{label:"score",prop:"score"}},[r("el-input",{model:{value:e.ruleForm.score,callback:function(t){e.$set(e.ruleForm,"score",t)},expression:"ruleForm.score"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("upload")]),r("el-button",{on:{click:function(t){return e.resetForm("ruleForm")}}},[e._v("reset")])],1)],1)],1)},_=[],w=(r("b0c0"),{data:function(){return{ruleForm:{name:"",score:""},rules:{name:[{required:!0,message:"The subject name is required.",trigger:"blur"}],score:[{required:!0,message:"The score is required.",trigger:"blur"}]}}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;t.$alert(t.ruleForm.name+" has been successfully added into the system!","Congratulation!",{confirmButtonText:"Confirm",callback:function(e){t.$router.push("/Subject_Manager")}}),axios.post("http://192.168.91.102:30002/subject/save",t.ruleForm).then((function(e){console.log(e)}))}))},resetForm:function(e){this.$refs[e].resetFields()},test:function(){console.log(this.ruleForm)}}}),$=w,S=Object(d["a"])($,j,_,!1,null,"38ed62ef",null),k=S.exports,O=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[r("el-table-column",{attrs:{fixed:"",prop:"id",label:"id",width:"150"}}),r("el-table-column",{attrs:{prop:"name",label:"subject name",width:"120"}}),r("el-table-column",{attrs:{prop:"score",label:"score",width:"120"}}),r("el-table-column",{scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.edit(t.row)}}},[e._v("edit")]),r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.deleteSubject(t.row)}}},[e._v("delete")])]}}])},[e._v(' fixed="left" label="Operations" width="100"> ')])],1),r("el-pagination",{attrs:{background:"",layout:"prev, pager, next","page-size":"6",total:e.total},on:{"current-change":e.page}})],1)},P=[],q={methods:{edit:function(e){this.$router.push({path:"/Update",query:{id:e.id}})},deleteSubject:function(e){var t=this;axios.delete("http://192.168.91.102:30002/subject/deleteById/"+e.id).then((function(r){console.log(r),t.$alert("The subject "+e.name+" has been successfully deleted in the system!","Congratulation!",{confirmButtonText:"Confirm",callback:function(e){window.location.reload()}})}))},page:function(e){var t=this;axios.get("http://192.168.91.102:30002/subject/findAll/"+e+"/6").then((function(e){t.tableData=e.data.content,t.total=e.data.totalElements}))}},created:function(){var e=this;axios.get("http://192.168.91.102:30002/subject/findAll/1/6").then((function(t){e.tableData=t.data.content,e.total=t.data.totalElements}))},data:function(){return{total:null,tableData:[]}}},T=q,C=Object(d["a"])(T,O,P,!1,null,null,null),M=C.exports,E=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",staticStyle:{width:"60%"},attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"subject id"}},[r("el-input",{attrs:{readonly:""},model:{value:e.ruleForm.id,callback:function(t){e.$set(e.ruleForm,"id",t)},expression:"ruleForm.id"}})],1),r("el-form-item",{attrs:{label:"subject name",prop:"name"}},[r("el-input",{model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),r("el-form-item",{attrs:{label:"score",prop:"score"}},[r("el-input",{model:{value:e.ruleForm.score,callback:function(t){e.$set(e.ruleForm,"score",t)},expression:"ruleForm.score"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("edit")]),r("el-button",{on:{click:function(t){return e.resetForm("ruleForm")}}},[e._v("reset")])],1)],1)],1)},A=[],B={data:function(){return{ruleForm:{id:"",name:"",score:""},rules:{name:[{required:!0,message:"The subject name is required.",trigger:"blur"}],score:[{required:!0,message:"The score is required.",trigger:"blur"}]}}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return console.log("wrong submission"),!1;t.$alert(t.ruleForm.name+" has been successfully edited in the system!","Congratulation!",{confirmButtonText:"Confirm",callback:function(e){t.$router.push("/Subject_Manager")}}),axios.put("http://192.168.91.102:30002/subject/update",t.ruleForm).then((function(e){console.log(e)}))}))},resetForm:function(e){this.$refs[e].resetFields()}},created:function(){var e=this;axios.get("http://192.168.91.102:30002/subject/findById/"+this.$route.query.id).then((function(t){e.ruleForm=t.data}))}},D=B,z=Object(d["a"])(D,E,A,!1,null,null,null),I=z.exports;n["default"].use(b["a"]);var J=[{path:"/",name:"Manage Subject",show:!0,component:x,redirect:"/Subject_Manager",children:[{path:"/Subject_Manager",name:"Search Subject",component:M},{path:"/Subject_Adder",name:"Add Subject",component:k}]},{path:"/Update",component:I,show:!1}],U=new b["a"]({mode:"history",base:"/",routes:J}),G=U,H=r("2f62");n["default"].use(H["a"]);var K=new H["a"].Store({state:{},mutations:{},actions:{},modules:{}}),L=r("5c96"),N=r.n(L);r("0fae");n["default"].use(N.a),n["default"].config.productionTip=!1,new n["default"]({router:G,store:K,render:function(e){return e(p)}}).$mount("#app")},"85ec":function(e,t,r){}});
//# sourceMappingURL=app.a18e529f.js.map