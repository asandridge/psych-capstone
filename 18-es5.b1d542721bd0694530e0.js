function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function _createClass(n,t,e){return t&&_defineProperties(n.prototype,t),e&&_defineProperties(n,e),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{cx2K:function(n,t,e){"use strict";e.r(t),e.d(t,"UserSettingsPageModule",(function(){return k}));var i=e("ofXK"),s=e("3Pt+"),o=e("c7TG"),r=e("tyNb"),a=e("mrSG"),l=e("fXoL");function c(n,t){1&n&&l.Xb(0,"ion-spinner",9)}function d(n,t){if(1&n){var e=l.ac();l.Zb(0,"ion-icon",10),l.hc("click",(function(){l.tc(e);var n=l.jc();return n.boundEmail=n.userEmail})),l.Yb()}}function u(n,t){if(1&n){var e=l.ac();l.Zb(0,"ion-icon",10),l.hc("click",(function(){return l.tc(e),l.jc().resetPasswordForm()})),l.Yb()}}function f(n,t){if(1&n){var e=l.ac();l.Zb(0,"ion-input",11),l.hc("click",(function(){l.tc(e);var n=l.jc();return n.editingPassword=!n.editingPassword})),l.Yb()}if(2&n){var i=l.jc();l.nc("value",i.placeholderPassword)}}var b=function(n){return{valid:n}},w=function(n,t){return{valid:n,invalid:t}};function h(n,t){if(1&n){var e=l.ac();l.Zb(0,"div"),l.Zb(1,"ion-label",12),l.xc(2,"Old Password:"),l.Yb(),l.Zb(3,"ion-input",13),l.hc("ngModelChange",(function(n){return l.tc(e),l.jc().oldPassword=n})),l.Yb(),l.Zb(4,"ion-label",12),l.xc(5,"New Password:"),l.Yb(),l.Zb(6,"ion-input",14),l.hc("ngModelChange",(function(n){return l.tc(e),l.jc().newPasswordFirst=n})),l.Yb(),l.Zb(7,"ion-label",12),l.xc(8,"Retype New:"),l.Yb(),l.Zb(9,"ion-input",14),l.hc("ngModelChange",(function(n){return l.tc(e),l.jc().newPasswordSecond=n})),l.Yb(),l.Yb()}if(2&n){var i=l.jc();l.Mb(3),l.mc("ngModel",i.oldPassword),l.Mb(3),l.mc("ngModel",i.newPasswordFirst)("ngClass",l.pc(5,b,""!=i.newPasswordFirst)),l.Mb(3),l.mc("ngModel",i.newPasswordSecond)("ngClass",l.qc(7,w,i.newPasswordFirst==i.newPasswordSecond&&""!=i.newPasswordFirst,i.newPasswordFirst!=i.newPasswordSecond))}}function g(n,t){if(1&n){var e=l.ac();l.Zb(0,"ion-button",15),l.hc("click",(function(){return l.tc(e),l.jc().saveForm()})),l.xc(1,"Save"),l.Yb()}}var p,m,P,v=function(n,t){return{"edited-valid":n,invalid:t}},C=[{path:"",component:(p=function(){function n(t){_classCallCheck(this,n),this.toastController=t,this.userEmail="placeholder@email.com",this.userPassword="12345678",this.placeholderPassword="12345678",this.oldPassword="",this.newPasswordFirst="",this.newPasswordSecond="",this.emailPattern=/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/,this.editingPassword=!1,this.waitingForResponse=!1}return _createClass(n,[{key:"ngOnInit",value:function(){this.boundEmail=this.userEmail}},{key:"validateEmail",value:function(){return this.boundEmail!=this.userEmail?this.emailPattern.test(this.boundEmail):null}},{key:"validatePassword",value:function(){return this.editingPassword?this.newPasswordFirst==this.newPasswordSecond&&""!=this.oldPassword&&""!=this.newPasswordFirst:null}},{key:"formTouched",value:function(){return this.boundEmail!=this.userEmail||this.editingPassword}},{key:"validateForm",value:function(){return(this.validateEmail()||null==this.validateEmail())&&(this.validatePassword()||null==this.validatePassword())&&this.formTouched()}},{key:"saveForm",value:function(){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return this.waitingForResponse=!0,this.waitingForResponse=!1,this.userEmail=this.boundEmail,this.userPassword=this.newPasswordFirst,this.resetPasswordForm(),n.next=7,this.toastController.create({message:"Your settings have been saved.",duration:2e3,color:"success"});case 7:n.sent.present(),this.oldPassword="",this.newPasswordFirst="",this.newPasswordSecond="";case 11:case"end":return n.stop()}}),n,this)})))}},{key:"resetPasswordForm",value:function(){this.editingPassword=!1,this.oldPassword="",this.newPasswordFirst="",this.newPasswordSecond=""}}]),n}(),p.\u0275fac=function(n){return new(n||p)(l.Wb(o.H))},p.\u0275cmp=l.Qb({type:p,selectors:[["app-user-settings"]],decls:19,vars:11,consts:[["slot","start"],["autoHide","false"],["slot","end","name","dots","style","size: 50%",4,"ngIf"],[2,"--background","gray"],["style","float: right; font-size: 150%; margin-right: 20px; margin-top: 2px","name","close-circle-outline",3,"click",4,"ngIf"],["type","email","clearInput","",3,"ngModel","ngClass","ngModelChange"],["type","password","button","",3,"value","click",4,"ngIf"],[4,"ngIf"],["style","float: right; margin-right: 20px; width: 130px",3,"click",4,"ngIf"],["slot","end","name","dots",2,"size","50%"],["name","close-circle-outline",2,"float","right","font-size","150%","margin-right","20px","margin-top","2px",3,"click"],["type","password","button","",3,"value","click"],[1,"little-label"],["type","password","clearInput","",1,"little-input",3,"ngModel","ngModelChange"],["type","password","clearInput","",1,"little-input",3,"ngModel","ngClass","ngModelChange"],[2,"float","right","margin-right","20px","width","130px",3,"click"]],template:function(n,t){1&n&&(l.Zb(0,"ion-header"),l.Zb(1,"ion-toolbar"),l.Zb(2,"ion-title"),l.xc(3,"Settings"),l.Yb(),l.Zb(4,"ion-buttons",0),l.Xb(5,"ion-menu-button",1),l.Yb(),l.wc(6,c,1,0,"ion-spinner",2),l.Yb(),l.Yb(),l.Zb(7,"ion-content",3),l.Xb(8,"br"),l.Zb(9,"ion-label"),l.xc(10,"Email Address:"),l.Yb(),l.wc(11,d,1,0,"ion-icon",4),l.Zb(12,"ion-input",5),l.hc("ngModelChange",(function(n){return t.boundEmail=n})),l.Yb(),l.Zb(13,"ion-label"),l.xc(14,"Password:"),l.Yb(),l.wc(15,u,1,0,"ion-icon",4),l.wc(16,f,1,1,"ion-input",6),l.wc(17,h,10,10,"div",7),l.wc(18,g,2,0,"ion-button",8),l.Yb()),2&n&&(l.Mb(6),l.mc("ngIf",t.waitingForResponse),l.Mb(5),l.mc("ngIf",t.boundEmail!=t.userEmail),l.Mb(1),l.mc("ngModel",t.boundEmail)("ngClass",l.qc(8,v,t.validateEmail(),t.boundEmail!=t.userEmail&&!t.validateEmail())),l.Mb(3),l.mc("ngIf",t.editingPassword),l.Mb(1),l.mc("ngIf",!t.editingPassword),l.Mb(1),l.mc("ngIf",t.editingPassword),l.Mb(1),l.mc("ngIf",t.validateForm()))},directives:[o.k,o.z,o.x,o.f,o.r,i.j,o.i,o.o,o.m,o.G,s.f,s.h,i.h,o.w,o.l,o.e],styles:["ion-label[_ngcontent-%COMP%]{color:#fff;margin-left:10px}ion-input[_ngcontent-%COMP%]{margin:20px;width:85%;border-radius:10px;background-color:#fff;--padding-start:10px;border-left:10px solid #fff;cursor:pointer}.little-label[_ngcontent-%COMP%]{margin-left:20px;font-size:70%}.little-input[_ngcontent-%COMP%]{margin-top:0;margin-bottom:0}.edited-valid[_ngcontent-%COMP%]{border-left:10px solid #1e90ff}.valid[_ngcontent-%COMP%]{border-left:10px solid #01df74}.invalid[_ngcontent-%COMP%]{border-left:10px solid #fe2e2e}"]}),p)}],M=((P=function n(){_classCallCheck(this,n)}).\u0275mod=l.Ub({type:P}),P.\u0275inj=l.Tb({factory:function(n){return new(n||P)},imports:[[r.i.forChild(C)],r.i]}),P),k=((m=function n(){_classCallCheck(this,n)}).\u0275mod=l.Ub({type:m}),m.\u0275inj=l.Tb({factory:function(n){return new(n||m)},imports:[[i.b,s.d,o.A,M]]}),m)}}]);