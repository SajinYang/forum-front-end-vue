(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d228901"],{da5c:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container py-5"},[s("form",{on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"user.name"}},[t._v("Name")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{id:"name",type:"text",name:"name",placeholder:"Enter Name",required:""},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"user.image"}},[t._v("Image")]),t.image?s("img",{staticClass:"d-block img-thumbnail mb-3",attrs:{src:t.image,width:"200",height:"200"}}):t._e(),s("input",{staticClass:"form-control-file",attrs:{id:"image",type:"file",name:"image",accept:"image/*"},on:{change:t.handleFileChange}})]),s("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:t.isProcessing}},[t._v(" "+t._s(t.isProcessing?"更新中..":"Submit")+" ")])])])},a=[],r=s("4cce"),n=s("2f62"),o=s("2fa3"),c={data(){return{id:-1,name:"",image:"",email:"",isProcessing:!1}},computed:{...Object(n["b"])(["currentUser"])},watch:{currentUser(){this.setUser()}},created(){const{id:t}=this.$route.params;t.toString()===this.currentUser.id.toString()?this.setUser():this.$router.push({name:"not-found"})},beforeRouteUpdate(t){const{id:e}=t.params;e.toString()===this.currentUser.id.toString()?this.setUser():this.$router.push({name:"not-found"})},methods:{setUser(){this.id=this.currentUser.id,this.name=this.currentUser.name,this.email=this.currentUser.email,this.image=this.currentUser.image},handleFileChange(t){const{files:e}=t.target;if(0===e.length)this.image="";else{const t=window.URL.createObjectURL(e[0]);this.image=t}},async handleSubmit(t){if(!this.name)return void o["a"].fire({icon:"warning",title:"請填寫姓名欄位"});const e=t.target,s=new FormData(e);for(let[a,r]of s.entries())console.log(a+": "+r);try{this.isProcessing=!0;const{data:t}=await r["a"].update({userId:this.id,formData:s});if("success"!==t.status)throw new Error(t.message);this.$router.push({name:"user",params:{id:this.id}})}catch(i){this.isProcessing=!1,o["a"].fire({icon:"error",title:"無法更新使用者資訊，請稍後再試"})}}}},m=c,u=s("2877"),l=Object(u["a"])(m,i,a,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d228901.f29747d2.js.map