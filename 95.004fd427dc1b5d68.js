"use strict";(self.webpackChunkChatsta=self.webpackChunkChatsta||[]).push([[95],{8095:(B,w,a)=>{a.r(w),a.d(w,{AuthModule:()=>j});var g=a(9808),d=a(5425),o=a(4893);let x=(()=>{class t{constructor(){this.title="Chatsta"}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-auth"]],decls:6,vars:0,consts:[[1,"login-page","d-flex","justify-content-center","align-items-center",2,"background-image","url('assets/login-bg.jpg')"],[1,"login-wrap","d-block"],["src","assets/logo.svg",1,"logo-img","mx-auto","d-flex"],[1,"logo-title","text-center"]],template:function(e,n){1&e&&(o.TgZ(0,"div",0)(1,"div",1),o._UZ(2,"img",2),o.TgZ(3,"h1",3),o._uU(4,"Chatsta"),o.qZA(),o._UZ(5,"router-outlet"),o.qZA()())},directives:[d.lC],styles:[".login-page[_ngcontent-%COMP%]{height:100vh;width:100vw;overflow:hidden;background-repeat:no-repeat;background-position:center;background-size:cover}.login-wrap[_ngcontent-%COMP%]{background:#fff;padding:35px;border-radius:17px;width:90%;max-width:410px;box-shadow:0 0 6px #00000070}.logo-img[_ngcontent-%COMP%]{height:126px;width:126px;margin-bottom:37px}h1.logo-title[_ngcontent-%COMP%]{font-size:45px;font-weight:700;color:#000;margin:0}@media (max-width: 767.98px){.login-wrap[_ngcontent-%COMP%]{background:#fff;padding:35px;height:100%;border-radius:0;width:100%;max-width:100%;box-shadow:none;justify-content:center;display:flex!important;flex-direction:column}}"]}),t})();var r=a(2382),u=a(6518),c=a(9790),f=a(72),h=a(8639);function C(t,i){1&t&&(o.TgZ(0,"div"),o._uU(1,"Email is required"),o.qZA())}function b(t,i){1&t&&(o.TgZ(0,"div"),o._uU(1,"Invalid Email"),o.qZA())}function Z(t,i){if(1&t&&(o.TgZ(0,"div",12),o.YNc(1,C,2,0,"div",13),o.YNc(2,b,2,0,"div",13),o.qZA()),2&t){const e=o.oxw();o.xp6(1),o.Q6J("ngIf",null==e.f.email.errors?null:e.f.email.errors.required),o.xp6(1),o.Q6J("ngIf",null==e.f.email.errors?null:e.f.email.errors.email)}}function T(t,i){1&t&&(o.TgZ(0,"div",14),o._uU(1,"Email sent successfully!"),o.qZA())}const q=function(t){return{"is-invalid":t}},F=function(){return["/auth/login"]};let A=(()=>{class t{constructor(e,n,s,l,p,m){this.router=e,this.builder=n,this.auth=s,this.loginservice=l,this.spinner=p,this.toastr=m,this.sent=!1,this.errorforgot=!1}ngOnInit(){this.buildloginform()}get f(){return this.forgotForm.controls}buildloginform(){this.forgotForm=this.builder.group({email:new r.NI("",[r.kI.required,r.kI.email])})}forgot(){console.log(this.forgotForm.value.email),""==this.forgotForm.value.email?this.errorforgot=!0:(this.spinner.show(),this.loginservice.forgot(this.forgotForm.value).subscribe({next:e=>{this.spinner.hide(),!1===e.success?this.toastr.showError("Invalid Email or Email not Registered ",""):(this.sent=!0,this.errorforgot=!1)},error:e=>{this.spinner.hide(),this.toastr.showError("Something went wrong","")}}))}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(d.F0),o.Y36(r.qu),o.Y36(u.e),o.Y36(c.r),o.Y36(f.t2),o.Y36(h.e))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-forgot-password"]],decls:19,vars:8,consts:[[1,"login-form","w-100",3,"formGroup"],[1,"login-title"],[1,"login-detail-forgot"],[1,"forgot-password-text","text-center"],[1,"form-group"],[1,"form-floating"],["type","email","id","email","placeholder"," ","formControlName","email",1,"form-control",3,"ngClass"],["for","email"],["class","validation-error",4,"ngIf"],["class","success-msg",4,"ngIf"],["type","submit",1,"login-btn","d-flex","mx-auto","justify-content-center",3,"click"],["routerLinkActive","router-link-active",1,"back-to-login",3,"routerLink"],[1,"validation-error"],[4,"ngIf"],[1,"success-msg"]],template:function(e,n){if(1&e&&(o.TgZ(0,"form",0)(1,"h3",1),o._uU(2,"Forgot Password"),o.qZA(),o.TgZ(3,"div",2)(4,"p",3),o._uU(5,"Enter your registered Email below to receive the verification code. "),o.qZA(),o.TgZ(6,"div",4)(7,"div",5),o._UZ(8,"input",6),o.TgZ(9,"label",7),o._uU(10,"Email"),o.qZA()(),o.YNc(11,Z,3,2,"div",8),o.qZA(),o.YNc(12,T,2,0,"div",9),o.TgZ(13,"button",10),o.NdJ("click",function(){return n.forgot()}),o._uU(14," Send "),o.qZA(),o.TgZ(15,"p",11),o._uU(16,"Back to "),o.TgZ(17,"a"),o._uU(18,"Login Page"),o.qZA()()()()),2&e){let s;o.Q6J("formGroup",n.forgotForm),o.xp6(8),o.Q6J("ngClass",o.VKq(5,q,(null==(s=n.forgotForm.get("email"))?null:s.touched)&&(null==(s=n.forgotForm.get("email"))?null:s.invalid))),o.xp6(3),o.Q6J("ngIf",n.f.email.touched&&!n.f.email.valid||n.errorforgot),o.xp6(1),o.Q6J("ngIf",n.sent),o.xp6(3),o.Q6J("routerLink",o.DdM(7,F))}},directives:[r._Y,r.JL,r.sg,r.Fj,r.JJ,r.u,g.mk,g.O5,d.Od,d.rH],styles:["h3.login-title[_ngcontent-%COMP%]{font-size:35px;font-weight:600;color:#000;margin-top:5px;text-align:center;margin-bottom:10px}p.forgot-password-text[_ngcontent-%COMP%]{margin-bottom:35px;margin-top:0;color:#8a97c1;font-size:15px}button.login-btn[_ngcontent-%COMP%]{font-size:18px;color:#000;background-color:#f9ec0f;border-radius:100px;box-shadow:none;border:none;margin:80px auto 0;min-width:200px;padding:10px 30px;font-weight:600}.back-to-login[_ngcontent-%COMP%]{text-align:center;margin-top:20px;font-weight:600}.back-to-login[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#7d7eff;cursor:pointer}.not-register-error[_ngcontent-%COMP%]{text-align:center;color:#dc3545;font-weight:500}@media (max-width: 1399.98px){button.login-btn[_ngcontent-%COMP%]{margin-top:30px}}"]}),t})();function I(t,i){1&t&&(o.TgZ(0,"div"),o._uU(1,"Email is required"),o.qZA())}function P(t,i){1&t&&(o.TgZ(0,"div"),o._uU(1,"Invalid Email"),o.qZA())}function J(t,i){if(1&t&&(o.TgZ(0,"div",12),o.YNc(1,I,2,0,"div",13),o.YNc(2,P,2,0,"div",13),o.qZA()),2&t){const e=o.oxw();o.xp6(1),o.Q6J("ngIf",null==e.f.email.errors?null:e.f.email.errors.required),o.xp6(1),o.Q6J("ngIf",null==e.f.email.errors?null:e.f.email.errors.email)}}function Y(t,i){1&t&&(o.TgZ(0,"div"),o._uU(1,"Password is required"),o.qZA())}function U(t,i){if(1&t&&(o.TgZ(0,"div",12),o.YNc(1,Y,2,0,"div",13),o.qZA()),2&t){const e=o.oxw();o.xp6(1),o.Q6J("ngIf",null==e.f.password.errors?null:e.f.password.errors.required)}}const v=function(t){return{"is-invalid":t}};function k(t,i){return e=>{const s=e.controls[i];s.errors&&!s.errors.confirmedValidator||s.setErrors(e.controls[t].value!==s.value?{confirmedValidator:!0}:null)}}function y(t,i){1&t&&(o.TgZ(0,"div"),o._uU(1,"Minimum length is 8 character"),o.qZA())}function O(t,i){1&t&&(o.TgZ(0,"div"),o._uU(1,"Password is required."),o.qZA())}function N(t,i){if(1&t&&(o.TgZ(0,"div",11),o.YNc(1,y,2,0,"div",12),o.YNc(2,O,2,0,"div",12),o.qZA()),2&t){const e=o.oxw();o.xp6(1),o.Q6J("ngIf",null==e.f.password.errors?null:e.f.password.errors.minlength),o.xp6(1),o.Q6J("ngIf",e.f.password.errors.required)}}function Q(t,i){1&t&&(o.TgZ(0,"div"),o._uU(1,"Confirm password is required."),o.qZA())}function L(t,i){1&t&&(o.TgZ(0,"div"),o._uU(1,"Password and Confirm Password must match."),o.qZA())}function R(t,i){if(1&t&&(o.TgZ(0,"div",11),o.YNc(1,Q,2,0,"div",12),o.YNc(2,L,2,0,"div",12),o.qZA()),2&t){const e=o.oxw();o.xp6(1),o.Q6J("ngIf",e.f.confirmpassword.errors.required),o.xp6(1),o.Q6J("ngIf",e.f.confirmpassword.errors.confirmedValidator)}}const _=function(t){return{"is-invalid":t}},E=[{path:"",component:x,children:[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:(()=>{class t{constructor(e,n,s,l,p,m){this.router=e,this.builder=n,this.auth=s,this.loginservice=l,this.toastr=p,this.spinner=m,this.loginpassed=!1}ngOnInit(){this.buildloginform()}get f(){return this.loginForm.controls}buildloginform(){this.loginForm=this.builder.group({email:new r.NI("",[r.kI.required,r.kI.email]),password:new r.NI("",[r.kI.required])})}login(){this.spinner.show(),this.loginservice.adminlogin(this.loginForm.value).subscribe({next:e=>{this.spinner.hide(),e.success?"admin"===e.data.role?(this.auth.setRoles(e.data.role),this.auth.setToken(e.data.token),this.toastr.showSuccess(e.message,""),this.router.navigate(["/admin/dashboard"])):this.router.navigate(["/auth/login"]):this.toastr.showError(e.message,"")},error:e=>{this.spinner.hide(),this.toastr.showError("Something went wrong","")}})}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(d.F0),o.Y36(r.qu),o.Y36(u.e),o.Y36(c.r),o.Y36(h.e),o.Y36(f.t2))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-login"]],decls:20,vars:10,consts:[[1,"login-form","w-100",3,"formGroup","ngSubmit"],[1,"login-title"],[1,"form-group"],[1,"form-floating"],["type","email","id","email","placeholder"," ","formControlName","email","required","",1,"form-control",3,"ngClass"],["for","email"],["class","validation-error",4,"ngIf"],["type","password","id","password","placeholder"," ","required","","formControlName","password",1,"form-control"],["f","","or","password",3,"ngClass"],["routerLink","/auth/forgot"],[1,"forgot-password-text","text-center"],[1,"login-btn","d-flex","mx-auto","justify-content-center",3,"disabled"],[1,"validation-error"],[4,"ngIf"]],template:function(e,n){if(1&e&&(o.TgZ(0,"form",0),o.NdJ("ngSubmit",function(){return n.login()}),o.TgZ(1,"h3",1),o._uU(2,"Log In"),o.qZA(),o.TgZ(3,"div",2)(4,"div",3),o._UZ(5,"input",4),o.TgZ(6,"label",5),o._uU(7,"Email"),o.qZA()(),o.YNc(8,J,3,2,"div",6),o.qZA(),o.TgZ(9,"div",2)(10,"div",3),o._UZ(11,"input",7),o.TgZ(12,"label",8),o._uU(13,"Password"),o.qZA()(),o.YNc(14,U,2,1,"div",6),o.qZA(),o.TgZ(15,"a",9)(16,"p",10),o._uU(17,"Forgot Password?"),o.qZA()(),o.TgZ(18,"button",11),o._uU(19," Log In "),o.qZA()()),2&e){let s,l;o.Q6J("formGroup",n.loginForm),o.xp6(5),o.Q6J("ngClass",o.VKq(6,v,(null==(s=n.loginForm.get("email"))?null:s.touched)&&(null==(s=n.loginForm.get("email"))?null:s.invalid))),o.xp6(3),o.Q6J("ngIf",n.f.email.touched&&!n.f.email.valid),o.xp6(4),o.Q6J("ngClass",o.VKq(8,v,(null==(l=n.loginForm.get("password"))?null:l.touched)&&(null==(l=n.loginForm.get("password"))?null:l.invalid))),o.xp6(2),o.Q6J("ngIf",n.f.password.touched&&!n.f.password.valid),o.xp6(4),o.Q6J("disabled",n.loginForm.invalid)}},directives:[r._Y,r.JL,r.sg,r.Fj,r.JJ,r.u,r.Q7,g.mk,g.O5,d.yS],styles:["h3.login-title[_ngcontent-%COMP%]{font-size:35px;font-weight:600;color:#000;margin-top:5px;text-align:center;margin-bottom:35px}p.forgot-password-text[_ngcontent-%COMP%]{margin-bottom:80px;margin-top:-5px;color:#8a97c1;font-size:15px}button.login-btn[_ngcontent-%COMP%]{font-size:18px;color:#000;background-color:#f9ec0f;border-radius:100px;box-shadow:none;border:none;margin:0 auto;min-width:200px;padding:10px 30px;font-weight:600}.not-register-error[_ngcontent-%COMP%]{text-align:center;color:#dc3545;font-weight:500;margin-bottom:10px}@media (max-width: 1399.98px){p.forgot-password-text[_ngcontent-%COMP%]{margin-bottom:30px}}"]}),t})()},{path:"forgot",component:A},{path:"password/UserResetPassword/:id",component:(()=>{class t{constructor(e,n,s,l,p,m,V){this.router=e,this.builder=n,this.auth=s,this.activatedRoute=l,this.loginservice=p,this.spinner=m,this.toastr=V,this.submitted=!1}ngOnInit(){this.activatedRoute.params.subscribe(e=>{this.token=e.id}),this.buildresetform()}get f(){return this.resetForm.controls}buildresetform(){this.resetForm=this.builder.group({password:new r.NI("",[r.kI.required,r.kI.minLength(8)]),confirmpassword:new r.NI("",[r.kI.required])},{validator:k("password","confirmpassword")})}reset(){this.spinner.show(),this.loginservice.resetpas(this.token,this.resetForm.value).subscribe({next:e=>{this.spinner.hide(),e.success?(this.toastr.showSuccess(e.message,""),this.router.navigate(["/auth/login"])):this.toastr.showError(e.message,"")},error:e=>{this.toastr.showError("Something went wrong","")}})}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(d.F0),o.Y36(r.qu),o.Y36(u.e),o.Y36(d.gz),o.Y36(c.r),o.Y36(f.t2),o.Y36(h.e))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-resetpassword"]],decls:18,vars:10,consts:[[1,"login-form","w-100",3,"formGroup","ngSubmit"],[1,"login-title"],[1,"new-password-wrap","mt-5"],[1,"form-group"],[1,"form-floating"],["type","password","id","password","placeholder"," ","formControlName","password",1,"form-control",3,"ngClass"],["for","password"],["class","validation-error",4,"ngIf"],["type","password","id","confirmpassword","placeholder"," ","formControlName","confirmpassword",1,"form-control",3,"ngClass"],["for","confirmpassword"],[1,"login-btn","d-flex","mx-auto","justify-content-center",3,"disabled"],[1,"validation-error"],[4,"ngIf"]],template:function(e,n){if(1&e&&(o.TgZ(0,"form",0),o.NdJ("ngSubmit",function(){return n.reset()}),o.TgZ(1,"h3",1),o._uU(2,"Forgot Password"),o.qZA(),o.TgZ(3,"div",2)(4,"div",3)(5,"div",4),o._UZ(6,"input",5),o.TgZ(7,"label",6),o._uU(8,"New Password"),o.qZA()(),o.YNc(9,N,3,2,"div",7),o.qZA(),o.TgZ(10,"div",3)(11,"div",4),o._UZ(12,"input",8),o.TgZ(13,"label",9),o._uU(14,"Confirm Password"),o.qZA()(),o.YNc(15,R,3,2,"div",7),o.qZA(),o.TgZ(16,"button",10),o._uU(17," Change Password "),o.qZA()()()),2&e){let s,l;o.Q6J("formGroup",n.resetForm),o.xp6(6),o.Q6J("ngClass",o.VKq(6,_,(null==(s=n.resetForm.get("password"))?null:s.touched)&&(null==(s=n.resetForm.get("password"))?null:s.invalid))),o.xp6(3),o.Q6J("ngIf",n.f.password.touched&&n.f.password.invalid),o.xp6(3),o.Q6J("ngClass",o.VKq(8,_,(null==(l=n.resetForm.get("confirmpassword"))?null:l.touched)&&(null==(l=n.resetForm.get("confirmpassword"))?null:l.invalid))),o.xp6(3),o.Q6J("ngIf",n.f.confirmpassword.touched&&n.f.confirmpassword.invalid),o.xp6(1),o.Q6J("disabled",n.resetForm.invalid)}},directives:[r._Y,r.JL,r.sg,r.Fj,r.JJ,r.u,g.mk,g.O5],styles:["h3.login-title[_ngcontent-%COMP%]{font-size:35px;font-weight:600;color:#000;margin-top:5px;text-align:center;margin-bottom:10px}p.forgot-password-text[_ngcontent-%COMP%]{margin-bottom:35px;margin-top:0;color:#8a97c1;font-size:15px}button.login-btn[_ngcontent-%COMP%]{font-size:18px;color:#000;background-color:#f9ec0f;border-radius:100px;box-shadow:none;border:none;margin:80px auto 0;min-width:200px;padding:10px 30px;font-weight:600}@media (max-width: 1399.98px){button.login-btn[_ngcontent-%COMP%]{margin-top:30px}}"]}),t})()}]}];let z=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[d.Bz.forChild(E)],d.Bz]}),t})();var S=a(520);let j=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[g.ez,z,S.JF,r.UX]]}),t})()}}]);