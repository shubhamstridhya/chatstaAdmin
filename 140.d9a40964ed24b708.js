"use strict";(self.webpackChunkChatsta=self.webpackChunkChatsta||[]).push([[140],{1140:(Y,u,p)=>{p.r(u),p.d(u,{AdminModule:()=>M});var h=p(9808),c=p(8118),n=p(1223),m=p(2340),f=p(520);const d="api/v1/updateAdminProfile/",l="api/v1/getAllInformative?keyword=";let a=(()=>{class e{constructor(t){this.http=t}Addregisterdetail(t,s){return this.http.post(d+t,s)}getdetails(t){return this.http.get(t)}getusers(){return this.http.get(m.N.api_url+"/admin/getUsers")}updateuser(t,s){return this.http.put(m.N.api_url+"/admin/updateuser/"+t,s)}deleteuser(t){return this.http.delete("api/v1/deleteusers"+t)}blockuser(t){return this.http.put(m.N.api_url+"/admin/blockusers",t)}getpcp(){return this.http.get("api/v1/getAllP.C.P")}getsponsors(){return this.http.get("api/v1/getAllSponsoredClock")}deletepcp(t){return this.http.delete("api/v1/deletePCPById"+t)}updatepcp(t,s){return this.http.put("api/v1/updatePCPById"+t,s)}sendcontactus(t,s){return this.http.post(d+t,s)}terms(t){return this.http.post(l+"/termsandconditions",t)}abouts(t){return this.http.post(l+"/aboutus",t)}contactusadmin(t){return this.http.post(l+"/contactus",t)}privacypol(t){return this.http.post(l+"/privacy",t)}blockpcp(){}}return e.\u0275fac=function(t){return new(t||e)(n.LFG(f.eN))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),v=(()=>{class e{constructor(t){this.admin=t,this.usersdata=[]}ngOnInit(){this.loadusers()}loadusers(){this.admin.getusers().subscribe(t=>{this.usersdata=t})}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(a))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-users"]],decls:0,vars:0,template:function(t,s){},styles:["table[_ngcontent-%COMP%]{width:100%}"]}),e})(),I=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-media"]],decls:0,vars:0,template:function(t,s){},styles:[""]}),e})(),T=(()=>{class e{constructor(t){this.admin=t,this.displayedColumns=["position","name","weight","symbol","edit"],this.pcpdata=[]}ngOnInit(){this.loadpcp()}loadpcp(){this.admin.getpcp().subscribe(t=>{this.pcpdata=t})}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(a))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-paid-c-p"]],decls:0,vars:0,template:function(t,s){},styles:[""]}),e})(),A=(()=>{class e{constructor(t){this.admin=t,this.displayedColumns=["companyname","scheduledate","status","edit"],this.sponsordata=[]}ngOnInit(){this.sponsors()}sponsors(){this.admin.getsponsors().subscribe(t=>{this.sponsordata=t})}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(a))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-sponsored-clock"]],decls:0,vars:0,template:function(t,s){},styles:[""]}),e})(),x=(()=>{class e{constructor(){this.displayedColumns=["position","name","weight","symbol","edit"],this.transactiondata=[]}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-transactions"]],decls:0,vars:0,template:function(t,s){},styles:[""]}),e})(),P=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-dashboard"]],decls:2,vars:0,template:function(t,s){1&t&&(n.TgZ(0,"p"),n._uU(1,"dashboard works!"),n.qZA())},styles:[""]}),e})(),F=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-infopage"]],decls:13,vars:0,consts:[["routerLink","/admin/about"],["routerLink","/admin/contactus"],["routerLink","/admin/terms"],["routerLink","/admin/privacy"]],template:function(t,s){1&t&&(n.TgZ(0,"div"),n._uU(1," Informative page "),n.qZA(),n.TgZ(2,"a",0),n._uU(3,"about us"),n.qZA(),n._UZ(4,"br"),n.TgZ(5,"a",1),n._uU(6,"contact us"),n.qZA(),n._UZ(7,"br"),n.TgZ(8,"a",2),n._uU(9,"terms and conditions"),n.qZA(),n._UZ(10,"br"),n.TgZ(11,"a",3),n._uU(12,"privacy policy"),n.qZA())},directives:[c.yS],styles:[""]}),e})();var r=p(2382);const N=[{path:"users",component:v},{path:"user/:id",component:(()=>{class e{constructor(t,s){this.builder=t,this.admin=s,this.forusers=[]}ngOnInit(){this.buildloginform()}buildloginform(){this.particularuser=this.builder.group({username:new r.NI,firstname:new r.NI,lastname:new r.NI,email:new r.NI,password:new r.NI})}deleteuser(){this.admin.deleteuser(this.forusers).subscribe(t=>{console.log(t)})}update(){this.admin.updateuser(this.forusers,this.particularuser.value).subscribe(t=>{console.log(t)})}blockuser(){this.admin.blockuser(this.forusers).subscribe(t=>{console.log(t)})}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(r.qu),n.Y36(a))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-user"]],decls:0,vars:0,template:function(t,s){},styles:[""]}),e})()},{path:"media",component:I},{path:"paidcp",component:T},{path:"sponsor",component:A},{path:"viewsponsor",component:(()=>{class e{constructor(){const t=new Date,s=t.getMonth(),i=t.getFullYear();this.campaignOne=new r.cw({start:new r.NI(new Date(i,s,13)),end:new r.NI(new Date(i,s,16))}),this.campaignTwo=new r.cw({start:new r.NI(new Date(i,s,15)),end:new r.NI(new Date(i,s,19))})}ngOnInit(){}deletesponsor(){}savesponsor(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-viewsponsor"]],decls:0,vars:0,template:function(t,s){},styles:[".example-form-field[_ngcontent-%COMP%]{margin:0 8px 16px 0}"]}),e})()},{path:"addsponsor",component:(()=>{class e{constructor(){this.longText="The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog\n  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was\n  originally bred for hunting.";const t=new Date,s=t.getMonth(),i=t.getFullYear();this.campaignOne=new r.cw({start:new r.NI(new Date(i,s,13)),end:new r.NI(new Date(i,s,16))}),this.campaignTwo=new r.cw({start:new r.NI(new Date(i,s,15)),end:new r.NI(new Date(i,s,19))})}ngOnInit(){}savesponsor(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-addsponsor"]],decls:0,vars:0,template:function(t,s){},styles:[".example-card[_ngcontent-%COMP%]{max-width:400px;margin-bottom:8px}"]}),e})()},{path:"transactions",component:x},{path:"dashboard",component:P},{path:"infopages",component:F},{path:"profile",component:(()=>{class e{constructor(t,s,i,U){this.router=t,this.builder=s,this.activatedRoute=i,this.admin=U}ngOnInit(){this.buildprofileform(),this.activatedRoute.params.subscribe(t=>{this.adminid=t.id,console.log(this.adminid),this.admin.getdetails(this.adminid).subscribe(s=>{this.admindetail=s,console.log(this.admindetail)})})}buildprofileform(){this.Myprofile=this.builder.group({name:new r.NI,email:new r.NI,password:new r.NI})}update(){console.log(this.Myprofile.value),this.admin.Addregisterdetail(this.adminid,this.Myprofile.value).subscribe(t=>{console.log(t)})}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(c.F0),n.Y36(r.qu),n.Y36(c.gz),n.Y36(a))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-profile"]],decls:0,vars:0,template:function(t,s){},styles:[""]}),e})()},{path:"notifications",component:(()=>{class e{constructor(t){this.admin=t,this.usersdata=[]}ngOnInit(){this.loadusers()}loadusers(){this.admin.getusers().subscribe(t=>{this.usersdata=t})}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(a))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-notifications"]],decls:0,vars:0,template:function(t,s){},styles:[""]}),e})()},{path:"about",component:(()=>{class e{constructor(){this.longText="The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog\n  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was\n  originally bred for hunting."}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-aboutus"]],decls:0,vars:0,template:function(t,s){},styles:[".example-card[_ngcontent-%COMP%]{max-width:400px;margin-bottom:8px}"]}),e})()},{path:"terms",component:(()=>{class e{constructor(t,s){this.builder=t,this.admin=s}ngOnInit(){this.buildloginform()}buildloginform(){this.termsForm=this.builder.group({terms:new r.NI})}termsfunc(){this.admin.terms(this.termsForm.value).subscribe(t=>{console.log(t)})}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(r.qu),n.Y36(a))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-terms"]],decls:0,vars:0,template:function(t,s){},styles:[""]}),e})()},{path:"privacy",component:(()=>{class e{constructor(t,s){this.builder=t,this.admin=s}ngOnInit(){this.buildloginform()}buildloginform(){this.privacyForm=this.builder.group({terms:new r.NI})}termsfunc(){this.admin.terms(this.privacyForm.value).subscribe(t=>{console.log(t)})}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(r.qu),n.Y36(a))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-privacypolicy"]],decls:0,vars:0,template:function(t,s){},styles:[""]}),e})()},{path:"contactus",component:(()=>{class e{constructor(t,s){this.builder=t,this.admin=s,this.emailFormControl=new r.NI("",[r.kI.required,r.kI.email]),this.inputType="number",this.disabled=!1}ngOnInit(){this.buildloginform()}buildloginform(){this.contactForm=this.builder.group({message:new r.NI,email:new r.NI,website:new r.NI})}send(){console.log(this.contactForm.value),this.admin.sendcontactus(this.adminid,this.contactForm.value).subscribe(t=>{console.log(t)})}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(r.qu),n.Y36(a))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-contactus"]],decls:0,vars:0,template:function(t,s){},styles:[".example-form[_ngcontent-%COMP%]{min-width:150px;max-width:500px;width:100%}.example-full-width[_ngcontent-%COMP%]{width:100%}"]}),e})()}];let O=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[c.Bz.forChild(N)],c.Bz]}),e})(),M=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[h.ez,O,r.UX]]}),e})()}}]);