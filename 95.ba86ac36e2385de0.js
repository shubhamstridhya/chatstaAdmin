"use strict";(self.webpackChunkChatsta=self.webpackChunkChatsta||[]).push([[95],{8095:(G,v,l)=>{l.r(v),l.d(v,{AuthModule:()=>V});var g=l(9808),d=l(5425),o=l(1223);let x=(()=>{class t{constructor(){this.title="Chatsta"}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-auth"]],decls:6,vars:0,consts:[[1,"login-page","d-flex","justify-content-center","align-items-center",2,"background-image","url('assets/login-bg.jpg')"],[1,"login-wrap","d-block"],["src","assets/logo.svg",1,"logo-img","mx-auto","d-flex"],[1,"logo-title","text-center"]],template:function(n,e){1&n&&(o.TgZ(0,"div",0)(1,"div",1),o._UZ(2,"img",2),o.TgZ(3,"h1",3),o._uU(4,"Chatsta"),o.qZA(),o._UZ(5,"router-outlet"),o.qZA()())},directives:[d.lC],styles:[".login-page[_ngcontent-%COMP%]{height:100vh;width:100vw;overflow:hidden;background-repeat:no-repeat;background-position:center;background-size:cover}.login-wrap[_ngcontent-%COMP%]{background:#fff;padding:35px;border-radius:17px;width:90%;max-width:410px;box-shadow:0 0 6px #00000070}.logo-img[_ngcontent-%COMP%]{height:126px;width:126px;margin-bottom:37px}h1.logo-title[_ngcontent-%COMP%]{font-size:45px;font-weight:700;color:#000;margin:0}@media (max-width: 767.98px){.login-wrap[_ngcontent-%COMP%]{background:#fff;padding:35px;height:100%;border-radius:0;width:100%;max-width:100%;box-shadow:none;justify-content:center;display:flex!important;flex-direction:column}}"]}),t})();var r=l(2382),u=l(6518),c=l(9790),f=l(72),h=l(8639);function b(t,i){1&t&&(o.TgZ(0,"div"),o._uU(1,"Email is required"),o.qZA())}function C(t,i){1&t&&(o.TgZ(0,"div"),o._uU(1,"Invalid Email"),o.qZA())}function Z(t,i){if(1&t&&(o.TgZ(0,"div",13),o.YNc(1,b,2,0,"div",14),o.YNc(2,C,2,0,"div",14),o.qZA()),2&t){const n=o.oxw();o.xp6(1),o.Q6J("ngIf",null==n.f.email.errors?null:n.f.email.errors.required),o.xp6(1),o.Q6J("ngIf",null==n.f.email.errors?null:n.f.email.errors.email)}}function T(t,i){1&t&&(o.TgZ(0,"div",15),o._uU(1,"Email sent successfully!"),o.qZA())}function q(t,i){1&t&&(o.TgZ(0,"div",16),o._uU(1,"Email not registered"),o.qZA())}const A=function(t){return{"is-invalid":t}},F=function(){return["/auth/login"]};let I=(()=>{class t{constructor(n,e,s,a,p,m){this.router=n,this.builder=e,this.auth=s,this.loginservice=a,this.spinner=p,this.toastr=m,this.sent=!1,this.errorforgot=!1}ngOnInit(){this.buildloginform()}get f(){return this.forgotForm.controls}buildloginform(){this.forgotForm=this.builder.group({email:new r.NI("",[r.kI.required,r.kI.email])})}forgot(){this.spinner.show(),this.loginservice.forgot(this.forgotForm.value).subscribe(n=>{this.spinner.hide(),!1===n.success?this.toastr.showError("Email not registered",""):(this.sent=!0,this.errorforgot=!1)})}}return t.\u0275fac=function(n){return new(n||t)(o.Y36(d.F0),o.Y36(r.qu),o.Y36(u.e),o.Y36(c.r),o.Y36(f.t2),o.Y36(h.e))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-forgot-password"]],decls:20,vars:10,consts:[[1,"login-form","w-100",3,"formGroup","ngSubmit"],[1,"login-title"],[1,"login-detail-forgot"],[1,"forgot-password-text","text-center"],[1,"form-group"],[1,"form-floating"],["type","email","id","email","placeholder"," ","formControlName","email",1,"form-control",3,"ngClass"],["for","email"],["class","validation-error",4,"ngIf"],["class","success-msg",4,"ngIf"],["class","not-register-error",4,"ngIf"],[1,"login-btn","d-flex","mx-auto","justify-content-center",3,"disabled"],["routerLinkActive","router-link-active",1,"back-to-login",3,"routerLink"],[1,"validation-error"],[4,"ngIf"],[1,"success-msg"],[1,"not-register-error"]],template:function(n,e){if(1&n&&(o.TgZ(0,"form",0),o.NdJ("ngSubmit",function(){return e.forgot()}),o.TgZ(1,"h3",1),o._uU(2,"Forgot Password"),o.qZA(),o.TgZ(3,"div",2)(4,"p",3),o._uU(5,"Enter your registered Email below to receive the verification code. "),o.qZA(),o.TgZ(6,"div",4)(7,"div",5),o._UZ(8,"input",6),o.TgZ(9,"label",7),o._uU(10,"Email"),o.qZA()(),o.YNc(11,Z,3,2,"div",8),o.qZA(),o.YNc(12,T,2,0,"div",9),o.YNc(13,q,2,0,"div",10),o.TgZ(14,"button",11),o._uU(15," Send "),o.qZA(),o.TgZ(16,"p",12),o._uU(17,"Back to "),o.TgZ(18,"a"),o._uU(19,"Login Page"),o.qZA()()()()),2&n){let s;o.Q6J("formGroup",e.forgotForm),o.xp6(8),o.Q6J("ngClass",o.VKq(7,A,(null==(s=e.forgotForm.get("email"))?null:s.touched)&&(null==(s=e.forgotForm.get("email"))?null:s.invalid))),o.xp6(3),o.Q6J("ngIf",e.f.email.touched&&!e.f.email.valid),o.xp6(1),o.Q6J("ngIf",e.sent),o.xp6(1),o.Q6J("ngIf",e.errorforgot),o.xp6(1),o.Q6J("disabled",e.forgotForm.invalid),o.xp6(2),o.Q6J("routerLink",o.DdM(9,F))}},directives:[r._Y,r.JL,r.sg,r.Fj,r.JJ,r.u,g.mk,g.O5,d.Od,d.rH],styles:["h3.login-title[_ngcontent-%COMP%]{font-size:35px;font-weight:600;color:#000;margin-top:5px;text-align:center;margin-bottom:10px}p.forgot-password-text[_ngcontent-%COMP%]{margin-bottom:35px;margin-top:0;color:#8a97c1;font-size:15px}button.login-btn[_ngcontent-%COMP%]{font-size:18px;color:#000;background-color:#f9ec0f;border-radius:100px;box-shadow:none;border:none;margin:80px auto 0;min-width:200px;padding:10px 30px;font-weight:600}.back-to-login[_ngcontent-%COMP%]{text-align:center;margin-top:20px;font-weight:600}.back-to-login[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#7d7eff;cursor:pointer}.not-register-error[_ngcontent-%COMP%]{text-align:center;color:#dc3545;font-weight:500}@media (max-width: 1399.98px){button.login-btn[_ngcontent-%COMP%]{margin-top:30px}}"]}),t})();function P(t,i){1&t&&(o.TgZ(0,"div"),o._uU(1,"Email is required"),o.qZA())}function J(t,i){1&t&&(o.TgZ(0,"div"),o._uU(1,"Invalid Email"),o.qZA())}function Y(t,i){if(1&t&&(o.TgZ(0,"div",12),o.YNc(1,P,2,0,"div",13),o.YNc(2,J,2,0,"div",13),o.qZA()),2&t){const n=o.oxw();o.xp6(1),o.Q6J("ngIf",null==n.f.email.errors?null:n.f.email.errors.required),o.xp6(1),o.Q6J("ngIf",null==n.f.email.errors?null:n.f.email.errors.email)}}function U(t,i){1&t&&(o.TgZ(0,"div"),o._uU(1,"Password is required"),o.qZA())}function M(t,i){if(1&t&&(o.TgZ(0,"div",12),o.YNc(1,U,2,0,"div",13),o.qZA()),2&t){const n=o.oxw();o.xp6(1),o.Q6J("ngIf",null==n.f.password.errors?null:n.f.password.errors.required)}}const w=function(t){return{"is-invalid":t}};function N(t,i){return n=>{const s=n.controls[i];s.errors&&!s.errors.confirmedValidator||s.setErrors(n.controls[t].value!==s.value?{confirmedValidator:!0}:null)}}function O(t,i){1&t&&(o.TgZ(0,"div"),o._uU(1,"Minimum length is 8 character"),o.qZA())}function Q(t,i){1&t&&(o.TgZ(0,"div"),o._uU(1,"Password is required."),o.qZA())}function k(t,i){if(1&t&&(o.TgZ(0,"div",11),o.YNc(1,O,2,0,"div",12),o.YNc(2,Q,2,0,"div",12),o.qZA()),2&t){const n=o.oxw();o.xp6(1),o.Q6J("ngIf",null==n.f.password.errors?null:n.f.password.errors.minlength),o.xp6(1),o.Q6J("ngIf",n.f.password.errors.required)}}function L(t,i){1&t&&(o.TgZ(0,"div"),o._uU(1,"Confirm password is required."),o.qZA())}function R(t,i){1&t&&(o.TgZ(0,"div"),o._uU(1,"Password and Confirm Password must match."),o.qZA())}function E(t,i){if(1&t&&(o.TgZ(0,"div",11),o.YNc(1,L,2,0,"div",12),o.YNc(2,R,2,0,"div",12),o.qZA()),2&t){const n=o.oxw();o.xp6(1),o.Q6J("ngIf",n.f.confirmpassword.errors.required),o.xp6(1),o.Q6J("ngIf",n.f.confirmpassword.errors.confirmedValidator)}}const _=function(t){return{"is-invalid":t}},z=[{path:"",component:x,children:[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:(()=>{class t{constructor(n,e,s,a,p,m){this.router=n,this.builder=e,this.auth=s,this.loginservice=a,this.toastr=p,this.spinner=m,this.loginpassed=!1}ngOnInit(){this.buildloginform()}get f(){return this.loginForm.controls}buildloginform(){this.loginForm=this.builder.group({email:new r.NI("",[r.kI.required,r.kI.email]),password:new r.NI("",[r.kI.required])})}login(){this.spinner.show(),this.loginservice.adminlogin(this.loginForm.value).subscribe(n=>{this.spinner.hide(),n.success||this.toastr.showError(n.message,""),this.auth.setRoles(n.data.role),this.auth.setToken(n.data.token),"admin"===n.data.role&&(this.toastr.showSuccess(n.message,""),this.router.navigate(["/admin/dashboard"]))})}}return t.\u0275fac=function(n){return new(n||t)(o.Y36(d.F0),o.Y36(r.qu),o.Y36(u.e),o.Y36(c.r),o.Y36(h.e),o.Y36(f.t2))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-login"]],decls:20,vars:10,consts:[[1,"login-form","w-100",3,"formGroup","ngSubmit"],[1,"login-title"],[1,"form-group"],[1,"form-floating"],["type","email","id","email","placeholder"," ","formControlName","email","required","",1,"form-control",3,"ngClass"],["for","email"],["class","validation-error",4,"ngIf"],["type","password","id","password","placeholder"," ","required","","formControlName","password",1,"form-control"],["f","","or","password",3,"ngClass"],["routerLink","/auth/forgot"],[1,"forgot-password-text","text-center"],[1,"login-btn","d-flex","mx-auto","justify-content-center",3,"disabled"],[1,"validation-error"],[4,"ngIf"]],template:function(n,e){if(1&n&&(o.TgZ(0,"form",0),o.NdJ("ngSubmit",function(){return e.login()}),o.TgZ(1,"h3",1),o._uU(2,"Log In"),o.qZA(),o.TgZ(3,"div",2)(4,"div",3),o._UZ(5,"input",4),o.TgZ(6,"label",5),o._uU(7,"Email"),o.qZA()(),o.YNc(8,Y,3,2,"div",6),o.qZA(),o.TgZ(9,"div",2)(10,"div",3),o._UZ(11,"input",7),o.TgZ(12,"label",8),o._uU(13,"Password"),o.qZA()(),o.YNc(14,M,2,1,"div",6),o.qZA(),o.TgZ(15,"a",9)(16,"p",10),o._uU(17,"Forgot Password?"),o.qZA()(),o.TgZ(18,"button",11),o._uU(19," Log In "),o.qZA()()),2&n){let s,a;o.Q6J("formGroup",e.loginForm),o.xp6(5),o.Q6J("ngClass",o.VKq(6,w,(null==(s=e.loginForm.get("email"))?null:s.touched)&&(null==(s=e.loginForm.get("email"))?null:s.invalid))),o.xp6(3),o.Q6J("ngIf",e.f.email.touched&&!e.f.email.valid),o.xp6(4),o.Q6J("ngClass",o.VKq(8,w,(null==(a=e.loginForm.get("password"))?null:a.touched)&&(null==(a=e.loginForm.get("password"))?null:a.invalid))),o.xp6(2),o.Q6J("ngIf",e.f.password.touched&&!e.f.password.valid),o.xp6(4),o.Q6J("disabled",e.loginForm.invalid)}},directives:[r._Y,r.JL,r.sg,r.Fj,r.JJ,r.u,r.Q7,g.mk,g.O5,d.yS],styles:["h3.login-title[_ngcontent-%COMP%]{font-size:35px;font-weight:600;color:#000;margin-top:5px;text-align:center;margin-bottom:35px}p.forgot-password-text[_ngcontent-%COMP%]{margin-bottom:80px;margin-top:-5px;color:#8a97c1;font-size:15px}button.login-btn[_ngcontent-%COMP%]{font-size:18px;color:#000;background-color:#f9ec0f;border-radius:100px;box-shadow:none;border:none;margin:0 auto;min-width:200px;padding:10px 30px;font-weight:600}.not-register-error[_ngcontent-%COMP%]{text-align:center;color:#dc3545;font-weight:500;margin-bottom:10px}@media (max-width: 1399.98px){p.forgot-password-text[_ngcontent-%COMP%]{margin-bottom:30px}}"]}),t})()},{path:"forgot",component:I},{path:"password/UserResetPassword/:id",component:(()=>{class t{constructor(n,e,s,a,p,m,B){this.router=n,this.builder=e,this.auth=s,this.activatedRoute=a,this.loginservice=p,this.spinner=m,this.toastr=B,this.submitted=!1}ngOnInit(){this.activatedRoute.params.subscribe(n=>{this.token=n.id}),this.buildresetform()}get f(){return this.resetForm.controls}buildresetform(){this.resetForm=this.builder.group({password:new r.NI("",[r.kI.required,r.kI.minLength(8)]),confirmpassword:new r.NI("",[r.kI.required])},{validator:N("password","confirmpassword")})}reset(){this.spinner.show(),this.loginservice.resetpas(this.token,this.resetForm.value).subscribe(n=>{n.success?this.toastr.showSuccess(n.message,""):this.toastr.showError(n.message,""),this.spinner.hide()}),this.router.navigate(["/auth/login"])}}return t.\u0275fac=function(n){return new(n||t)(o.Y36(d.F0),o.Y36(r.qu),o.Y36(u.e),o.Y36(d.gz),o.Y36(c.r),o.Y36(f.t2),o.Y36(h.e))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-resetpassword"]],decls:18,vars:10,consts:[[1,"login-form","w-100",3,"formGroup","ngSubmit"],[1,"login-title"],[1,"new-password-wrap","mt-5"],[1,"form-group"],[1,"form-floating"],["type","password","id","password","placeholder"," ","formControlName","password",1,"form-control",3,"ngClass"],["for","password"],["class","validation-error",4,"ngIf"],["type","password","id","confirmpassword","placeholder"," ","formControlName","confirmpassword",1,"form-control",3,"ngClass"],["for","confirmpassword"],[1,"login-btn","d-flex","mx-auto","justify-content-center",3,"disabled"],[1,"validation-error"],[4,"ngIf"]],template:function(n,e){if(1&n&&(o.TgZ(0,"form",0),o.NdJ("ngSubmit",function(){return e.reset()}),o.TgZ(1,"h3",1),o._uU(2,"Forgot Password"),o.qZA(),o.TgZ(3,"div",2)(4,"div",3)(5,"div",4),o._UZ(6,"input",5),o.TgZ(7,"label",6),o._uU(8,"New Password"),o.qZA()(),o.YNc(9,k,3,2,"div",7),o.qZA(),o.TgZ(10,"div",3)(11,"div",4),o._UZ(12,"input",8),o.TgZ(13,"label",9),o._uU(14,"Confirm Password"),o.qZA()(),o.YNc(15,E,3,2,"div",7),o.qZA(),o.TgZ(16,"button",10),o._uU(17," Change Password "),o.qZA()()()),2&n){let s,a;o.Q6J("formGroup",e.resetForm),o.xp6(6),o.Q6J("ngClass",o.VKq(6,_,(null==(s=e.resetForm.get("password"))?null:s.touched)&&(null==(s=e.resetForm.get("password"))?null:s.invalid))),o.xp6(3),o.Q6J("ngIf",e.f.password.touched&&e.f.password.invalid),o.xp6(3),o.Q6J("ngClass",o.VKq(8,_,(null==(a=e.resetForm.get("confirmpassword"))?null:a.touched)&&(null==(a=e.resetForm.get("confirmpassword"))?null:a.invalid))),o.xp6(3),o.Q6J("ngIf",e.f.confirmpassword.touched&&e.f.confirmpassword.invalid),o.xp6(1),o.Q6J("disabled",e.resetForm.invalid)}},directives:[r._Y,r.JL,r.sg,r.Fj,r.JJ,r.u,g.mk,g.O5],styles:["h3.login-title[_ngcontent-%COMP%]{font-size:35px;font-weight:600;color:#000;margin-top:5px;text-align:center;margin-bottom:10px}p.forgot-password-text[_ngcontent-%COMP%]{margin-bottom:35px;margin-top:0;color:#8a97c1;font-size:15px}button.login-btn[_ngcontent-%COMP%]{font-size:18px;color:#000;background-color:#f9ec0f;border-radius:100px;box-shadow:none;border:none;margin:80px auto 0;min-width:200px;padding:10px 30px;font-weight:600}@media (max-width: 1399.98px){button.login-btn[_ngcontent-%COMP%]{margin-top:30px}}"]}),t})()}]}];let S=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[d.Bz.forChild(z)],d.Bz]}),t})();var j=l(520);let V=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[g.ez,S,j.JF,r.UX]]}),t})()}}]);