webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var aboutRoutes = [
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_2__about_component__["a" /* AboutComponent */] },
];
var AboutRoutingModule = (function () {
    function AboutRoutingModule() {
    }
    return AboutRoutingModule;
}());
AboutRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(aboutRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
        ]
    })
], AboutRoutingModule);

//# sourceMappingURL=about-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".aboutDiv{\n width: 100%;\n}\n.aboutBox{\n  width:90%;\n  margin: 0 auto;\n}\n\n/* h2 {\n  padding-left:5%;\n  color:rgba(255, 128, 0, 0.8);\n  margin-top:2%;\n  margin-bottom:2%;\n} */\n\n/* @media only screen and (max-width : 580px){\n  h2{\n    font-size:1.1em;\n  }\n\n} */\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>About me</h3>\n<div class=\"aboutDiv clearfix\">\n  <div class=\"aboutBox clearfix\">\n      <p> Name : Wan Lee</p>\n      <p> Main interest : Web Development (HTML5, CSS3, Javascript, jQuery, Angular4)</p>\n      <p> family : Husband and three children</p>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    return AboutComponent;
}());
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
    })
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/about/about.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_routing_module__ = __webpack_require__("../../../../../src/app/about/about-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AboutModule = (function () {
    function AboutModule() {
    }
    return AboutModule;
}());
AboutModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__about_routing_module__["a" /* AboutRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__about_component__["a" /* AboutComponent */]
        ]
    })
], AboutModule);

//# sourceMappingURL=about.module.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var appRoutes = [
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
        ],
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nh1 {\n  text-align: center;\n  font-family: Georgia,serif;\n  color:#585858;\n}\n.appNav{\n  text-align:center;\n}\n.appNav ul{\n  text-align:center;\n  width:40%;\n  margin:auto;\n  padding:0;\n}\n.appNav li{\n  text-align:center;\n}\n.appNav li:nth-child(2){\n  margin-left:10%;\n  margin-right:10%;\n}\n.appNav a{\n  color:#BDBDBD;\n}\n.title a{\n  color: #EE891D;\n}\n.active {\n  text-shadow:1px 1px 4px #A4A4A4;\n}\n\n/* icon css */\n\n.icon{\n  display:none;\n}\n.iconModal{\n  display:none;\n\n\n}\n\n/*\nMedia Query*/\n\n@media only screen and (max-width : 580px){\n\n    h1{\n      font-size:1.5em;\n    }\n    .appNav {\n     display:none;\n     }\n    .icon{\n      display:inline-block;\n      cursor:pointer;\n      position:absolute;\n      top:2.5%;\n      right:10%;\n      /*z-index:10;*/\n      /*border: solid 0.5px #D8D8D8;\n      border-radius:3px;*/\n    }\n    .bar1, .bar2, .bar3 {\n      width:25px;\n      height:3px;\n      background-color:#D8D8D8;\n      margin:3px 2px;\n  }\n\n  /*Icon Modal*/\n    .iconModal {\n      position:absolute;\n      display:block;\n      z-index:1;\n      right:0;\n      top:0;\n      width:150px;\n      height:100%;\n      overflow:hidden;\n      background-color:rgba(255, 255, 255, 0.95);\n      border-left:solid 1px #E6E6E6;\n      /*-webkit-animation-name:openMove;\n      -webkit-animation-name:closeMove;\n      animation-duration:0.8s;*/\n    }\n    /*@-webkit-keyframes openMove {\n      0%   {right:-150px; top:0px;}\n      100% {right:0px; top:0px;}\n    }\n    @-webkit-keyframes closeMove {\n      100%   {right:0px; top:0px;}\n      0%    {right:-150px; top:0px;}\n    }*/\n\n    .closeX {\n      cursor:pointer;\n      margin: 5px 5px;\n      font: bold 20px arial, sans-serif;\n      color:#E6E6E6;\n    }\n\n    .iconMenu{\n      margin:5px 5px;\n    }\n   .iconMenu ul{\n     list-style:none;\n     margin:0 15px;\n     padding:0;\n   }\n   .iconMenu ul li{\n     border-bottom:solid 1px #E6E6E6;\n     margin-top:10px;\n     padding-bottom:0;\n\n   }\n    .iconMenu a{\n      text-decoration:none;\n      text-align: left;\n      display:block;\n      color:#A4A4A4;\n       padding-bottom:0;\n    }\n  }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<h1 class=\"title\">\n  <a routerLink=\"/home\">Gallery.click</a>\n</h1>\n<!-- three bar -->\n<div class=\"icon\" (click)=toggleIcon()>\n  <div class=\"bar1\"></div>\n  <div class=\"bar2\"></div>\n  <div class=\"bar3\"></div>\n</div>\n<!--icon modal -->\n<div [@slideInOut]=\"menuState\"  class=\"iconModal\" >\n        <!-- <div *menuIcon=\"condition\" class=\"iconModal\" > -->\n<nav class=\"clearfix iconMenu\">\n  <ul>\n<li><a routerLink=\"/home\" routerLinkActive=\"active\" (click)=closeModule()>Gallery</a></li>\n<li><a routerLink=\"/about\" routerLinkActive=\"active\" (click)=closeModule()>About Me</a></li>\n<li><a routerLink=\"/contact\" routerLinkActive=\"active\" (click)=closeModule()>Contact</a></li>\n  </ul>\n</nav>\n</div>\n  <!-- menu -->\n<nav class=\"appNav clearfix\">\n  <ul>\n    <li><a routerLink=\"/home\" routerLinkActive=\"active\">Gallery</a></li>\n    <li><a routerLink=\"/about\" routerLinkActive=\"active\">About</a></li>\n    <li><a routerLink=\"/contact\" routerLinkActive=\"active\">Contact</a></li>\n  </ul>\n</nav>\n<router-outlet></router-outlet>\n<footer></footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        this.menuState = 'out';
    }
    AppComponent.prototype.toggleIcon = function () {
        this.menuState = this.menuState === 'out' ? 'in' : 'out';
    };
    AppComponent.prototype.closeModule = function () {
        this.menuState = 'out';
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('slideInOut', [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                    transform: 'translate3d(0, 0, 0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                    transform: 'translate3d(100%, 0, 0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('in => out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('400ms ease-in-out')),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('out => in', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('400ms ease-in-out'))
            ]),
        ]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_module__ = __webpack_require__("../../../../../src/app/home/home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__about_about_module__ = __webpack_require__("../../../../../src/app/about/about.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contact_contact_module__ = __webpack_require__("../../../../../src/app/contact/contact.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_footer_component__ = __webpack_require__("../../../../../src/app/home/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__home_footer_component__["a" /* FooterComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__home_home_module__["a" /* HomeModule */],
            __WEBPACK_IMPORTED_MODULE_6__about_about_module__["a" /* AboutModule */],
            __WEBPACK_IMPORTED_MODULE_7__contact_contact_module__["a" /* ContactModule */],
            __WEBPACK_IMPORTED_MODULE_10__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/contact/contact-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var contactRoutes = [
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_2__contact_component__["a" /* ContactComponent */] },
];
var ContactRoutingModule = (function () {
    function ContactRoutingModule() {
    }
    return ContactRoutingModule;
}());
ContactRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(contactRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
        ]
    })
], ContactRoutingModule);

//# sourceMappingURL=contact-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n/* h2 {\n  padding-left:5%;\n  color:rgba(255, 128, 0, 0.8);\n  margin-top:2%;\n  margin-bottom:2%;\n} */\n.contactDiv{\n  width:100%;\n  height:550px;\n  margin:0;\n\n}\n.innerContainer{\n  width:80%;\n  margin:auto;\n}\n.mainForm{\n  width:50%;\n  border:1px solid #BEBEBE;\n  background-color:#f4f7f8;\n  margin: 5% auto;\n  padding:10px;\n  border-radius: 2px;\n}\nlabel{\n  padding-right: 20px;\n  margin-left:10px;\n}\n.errors {\nwidth: auto;\ndisplay:inline-block;\ncolor:#FF8000;\nfont-size: 0.8em;\n\n}\ninput {\n    display:block;\n    width:90%;\n    height:2em;\n    border:1px solid #BEBEBE;\n    padding:3px;\n    margin:0 10px 20px 10px;\n    border-radius: 3px;\n\n}\nbutton {\n  margin:20px 10px;\n  border:1px solid #BEBEBE;\n  padding:5px;\n  border-radius: 3px;\n  font-size: 0.8em;\n}\n.labelBox {\n    padding:8px 0 5px 0;\n}\nselect {\n  border:1px solid #BEBEBE;\n  padding:5px;\n  margin:0 0 20px 0;\n  border-radius: 3px;\n  font-size: 0.8em;\n\n}\n.submitted{\n  font-size: 0.9em;\n}\napp-submitted {\n\n}\n@media only screen and (max-width : 580px){\n  h3{\n    font-size:1.1em;\n  }\n.mainForm {\n  width:100%;\n}\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Contact</h3>\n<div class=\"contactDiv clearfix\">\n<p>This form is not connected to the database yet.</p>\n  <div [hidden]=\"submitted\" class=\"innerContainer clearfix\">\n\n\n  <form [formGroup]= \"userForm\" class=\"mainForm boxStyle clearfix\" (ngSubmit)=\"onSubmit(users)\" >\n   <div class=\"labelBox\">\n      <label> <span>Full name</span> </label>\n      <div *ngIf = \"formErrors.name\" class=\"errors\">\n        {{formErrors.name}}\n      </div>\n    </div>\n    <div class=\"clearfix\">\n      <input typr=\"text\" placeholder=\"name\" formControlName=\"name\" required>\n   </div>\n\n\n\n  <div formGroupName= \"account\">\n   <div class=\"labelBox\">\n    <label> <span>Gender</span></label>\n      <select formControlName=\"genders\" >\n         <option *ngFor = \"let gender of genders\" [value]=\"gender\">{{gender}}</option>\n      </select>\n  </div>\n\n   <div class= \"labelBox\">\n     <label> <span>E-mail</span></label>\n      <div *ngIf = \"formErrors.email\" class=\"errors\" >\n        {{formErrors.email}}\n      </div>\n   </div>\n      <input type=\"text\" placeholder=\"email\" formControlName=\"email\" required>\n\n  <div class= \"labelBox\">\n    <label><span>Message</span></label>\n      <div *ngIf = \"formErrors.message\" class=\"errors\" >\n        {{formErrors.message}}\n      </div>\n  </div>\n      <input type=\"text\" placeholder=\"Message...\" row=\"60\" col=\"30\"  formControlName=\"message\" required>\n\n\n  </div>\n   <button type=\"submit\" [disabled]=\"!userForm.valid\"> Submit </button>\n\n\n  </form>\n\n  <!-- <div *ngIf=\"users\">\n      {{users.name}}<br>\n      {{users.account.genders}}\n\n  </div> -->\n\n\n </div>\n</div>\n  <app-submitted  [users]=\"users\" [(submitted)]=\"submitted\" class=\"clearfix\"></app-submitted>\n\n<!--\n  // <div>{{users.account.genders}}</div>\n  // <div>{{users.account.email}}</div>\n  // <div>{{users.account.message}}</div> -->\n"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = (function () {
    function ContactComponent(fb) {
        this.fb = fb;
        this.genders = ['Male', 'Female'];
        this.formErrors = {
            'name': '',
            'email': '',
            'message': ''
        };
        this.validationMessages = {
            'name': {
                'required': 'Name is required.',
                'minlength': 'Name must be at least 4 characters long.',
                'maxlength': 'Name cannot be more than 24 characters long.'
            },
            'email': {
                'required': 'email is required.',
                'pattern': 'Invalid email'
            },
            'message': {
                'required': 'message is required.'
            }
        };
        this.submitted = false;
    }
    ContactComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.users = this.userForm.value;
    };
    ContactComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    ContactComponent.prototype.createForm = function () {
        var _this = this;
        var emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
        this.userForm = this.fb.group({
            'name': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(4),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(24)]
            ],
            'account': this.fb.group({
                'genders': this.genders[0],
                'email': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].pattern(emailRegex)]],
                'message': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]
            })
        });
        this.userForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
    };
    ContactComponent.prototype.onValueChanged = function (data) {
        if (!this.userForm) {
            return;
        }
        var form = this.userForm;
        // e-mail value
        //  console.log(this.userForm.get('account.email').value);
        for (var _i = 0, _a = Object.keys(this.formErrors); _i < _a.length; _i++) {
            var field = _a[_i];
            this.formErrors[field] = '';
            var control = form.get(field);
            var email = form.get('account.email');
            var message = form.get('account.message');
            // console.log(email);
            // var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var _b = 0, _c = Object.keys(control.errors); _b < _c.length; _b++) {
                    var key = _c[_b];
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
            if (email && email.dirty && !email.valid) {
                this.formErrors['email'] = '';
                var messages = this.validationMessages['email'];
                for (var _d = 0, _e = Object.keys(email.errors); _d < _e.length; _d++) {
                    var key = _e[_d];
                    this.formErrors['email'] += messages[key] + ' ';
                }
                // if(email.value != (email.value.length >= 5 && EMAIL_REGEXP.test(email.value))){
                //   this.formErrors['email'] = 'invalid Email';
                // }
            }
            //
            // if(email && email.match
            // (/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@
            // (?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)){
            //     return null;}else {
            //
            //       return  this.formErrors.email ='invalid email';
            //
            //       }
            if (message && message.dirty && !message.valid) {
                this.formErrors['message'] = '';
                var messages = this.validationMessages['message'];
                for (var _f = 0, _g = Object.keys(email.errors); _f < _g.length; _f++) {
                    var key = _g[_f];
                    this.formErrors['message'] += messages[key] + ' ';
                }
            }
        }
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contact/contact.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object])
], ContactComponent);

var _a;
//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/contact/contact.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__submitted_component__ = __webpack_require__("../../../../../src/app/contact/submitted.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_routing_module__ = __webpack_require__("../../../../../src/app/contact/contact-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ContactModule = (function () {
    function ContactModule() {
    }
    return ContactModule;
}());
ContactModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__contact_routing_module__["a" /* ContactRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* ReactiveFormsModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_3__submitted_component__["a" /* SubmittedComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_3__submitted_component__["a" /* SubmittedComponent */]
        ]
    })
], ContactModule);

//# sourceMappingURL=contact.module.js.map

/***/ }),

/***/ "../../../../../src/app/contact/formdata-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* unused harmony export Account */
var User = (function () {
    function User() {
    }
    return User;
}());

var Account = (function () {
    function Account() {
    }
    return Account;
}());

// export class Formerror {
//   'name': string;
//   'email': string;
//   'message': string;
// }
// export class Validationmessage {
//   'name': {
//     'required': string,
//     'minlength': string,
//     'maxlength': string
//   },
//   'email': {
//     'required': string,
//     'pattern': string
//   },
// 'message': {
//     'required': string
//   }
// }
//# sourceMappingURL=formdata-model.js.map

/***/ }),

/***/ "../../../../../src/app/contact/submitted.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubmittedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__formdata_model__ = __webpack_require__("../../../../../src/app/contact/formdata-model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SubmittedComponent = (function () {
    function SubmittedComponent() {
        this.genders = ['Male', 'Female'];
        this.submitted = false;
        this.submittedChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    SubmittedComponent.prototype.onClick = function () { this.submittedChange.emit(false); };
    return SubmittedComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__formdata_model__["a" /* User */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__formdata_model__["a" /* User */]) === "function" && _a || Object)
], SubmittedComponent.prototype, "users", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array)
], SubmittedComponent.prototype, "Account", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], SubmittedComponent.prototype, "genders", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], SubmittedComponent.prototype, "submitted", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], SubmittedComponent.prototype, "submittedChange", void 0);
SubmittedComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-submitted',
        template: "\n          <div class=\"innerContainer clearfix\">\n          <div *ngIf=\"submitted\" class=\"mainForm clearfix submitted\">\n            <h3>You submitted the following:</h3>\n            <div>{{users.name}}</div>\n            <div> {{users.account.genders}}</div>\n             <div>{{users.account.email}}</div>\n             <div>{{users.account.message}}</div>\n          <button (click)=\"onClick()\">Edit</button>\n            </div>\n            </div>\n      ",
        styles: [__webpack_require__("../../../../../src/app/contact/contact.component.css")]
    })
], SubmittedComponent);

var _a;
//# sourceMappingURL=submitted.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'footer',
        template: "\n     <div class=\"footerBox clearfix\">\n      <div class=\"footer clearfix\"></div>\n      <div class=\"copyright\">Copyright &copy; 2017 Design Wan</div>\n     </div>\n  ",
        styles: ["\n      .footerBox{\n        width:100%;\n        height:20px;\n        margin:auto;\n      }\n      .footer{\n        height:1px;\n        background-color: #BDBDBD;\n      }\n      .copyright{\n        font-size:0.8em;\n      }\n\n    "]
    })
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/gallery-data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IMAGES; });
var IMAGES = [
    {
        id: 1,
        name: 'landscape',
        description: 'Beautiful Garden',
        homeImage: 'assets/images/landscape3.jpg',
        contents: [
            { 'url': 'assets/images/landscape/landscape1.jpg',
                'thumb': 'assets/images/landscape/thumb/landT1.jpg' },
            { 'url': 'assets/images/landscape/landscape2.jpg',
                'thumb': 'assets/images/landscape/thumb/landT2.jpg' },
            { 'url': 'assets/images/landscape/landscape3.jpg',
                'thumb': 'assets/images/landscape/thumb/landT3.jpg' },
            { 'url': 'assets/images/landscape/landscape4.jpg',
                'thumb': 'assets/images/landscape/thumb/landT4.jpg' },
            { 'url': 'assets/images/landscape/landscape5.jpg',
                'thumb': 'assets/images/landscape/thumb/landT5.jpg' },
            { 'url': 'assets/images/landscape/landscape6.jpg',
                'thumb': 'assets/images/landscape/thumb/landT6.jpg' },
            { 'url': 'assets/images/landscape/landscape7.jpg',
                'thumb': 'assets/images/landscape/thumb/landT7.jpg' },
            { 'url': 'assets/images/landscape/landscape8.jpg',
                'thumb': 'assets/images/landscape/thumb/landT8.jpg' }
        ]
    },
    {
        id: 2,
        name: 'portrait',
        description: 'Superman Summer',
        homeImage: 'assets/images/portrait_3.jpg',
        contents: [
            { 'url': 'assets/images/portrait/portrait_1.jpg',
                'thumb': 'assets/images/portrait/thumb/portraitT1.jpg' },
            { 'url': 'assets/images/portrait/portrait_3.jpg',
                'thumb': 'assets/images/portrait/thumb/portraitT3.jpg' },
            { 'url': 'assets/images/portrait/portrait_5.jpg',
                'thumb': 'assets/images/portrait/thumb/portraitT5.jpg' },
            { 'url': 'assets/images/portrait/self_4.jpg',
                'thumb': 'assets/images/portrait/thumb/selfT4.jpg' },
            { 'url': 'assets/images/portrait/self_5.jpg',
                'thumb': 'assets/images/portrait/thumb/selfT5.jpg' }
        ]
    },
    {
        id: 3,
        name: 'still-life',
        description: 'R2D2 :)',
        homeImage: 'assets/images/stilllife3.jpg',
        contents: [
            { 'url': 'assets/images/stillLife/abstract_1.jpg',
                'thumb': 'assets/images/stillLife/thumb/abstractT1.jpg' },
            { 'url': 'assets/images/stillLife/abstract_2.jpg',
                'thumb': 'assets/images/stillLife/thumb/abstractT2.jpg' },
            { 'url': 'assets/images/stillLife/abstract_3.jpg',
                'thumb': 'assets/images/stillLife/thumb/abstractT3.jpg' },
            { 'url': 'assets/images/stillLife/abstract_4.jpg',
                'thumb': 'assets/images/stillLife/thumb/abstractT4.jpg' },
            { 'url': 'assets/images/stillLife/abstract_5.jpg',
                'thumb': 'assets/images/stillLife/thumb/abstractT5.jpg' },
            { 'url': 'assets/images/stillLife/stilllife3.jpg',
                'thumb': 'assets/images/stillLife/thumb/stilllifeT3.jpg' },
            { 'url': 'assets/images/stillLife/stilllife4.jpg',
                'thumb': 'assets/images/stillLife/thumb/stilllifeT4.jpg' },
            { 'url': 'assets/images/stillLife/stilllife5.jpg',
                'thumb': 'assets/images/stillLife/thumb/stilllifeT5.jpg' },
            { 'url': 'assets/images/stillLife/macro1.jpg',
                'thumb': 'assets/images/stillLife/thumb/macroT1.jpg' },
            { 'url': 'assets/images/stillLife/macro2.jpg',
                'thumb': 'assets/images/stillLife/thumb/macroT2.jpg' },
            { 'url': 'assets/images/stillLife/macro3.jpg',
                'thumb': 'assets/images/stillLife/thumb/macroT3.jpg' },
            { 'url': 'assets/images/stillLife/macro4.jpg',
                'thumb': 'assets/images/stillLife/thumb/macroT4.jpg' },
            { 'url': 'assets/images/stillLife/macro5.jpg',
                'thumb': 'assets/images/stillLife/thumb/macroT5.jpg' },
            { 'url': 'assets/images/stillLife/macro6.jpg',
                'thumb': 'assets/images/stillLife/thumb/macroT6.jpg' }
        ]
    },
    {
        id: 4,
        name: 'architecture',
        description: 'Do you see what I see?',
        homeImage: 'assets/images/archit_1.jpg',
        contents: [
            { 'url': 'assets/images/architecture/archit_1.jpg',
                'thumb': 'assets/images/architecture/thumb/architT6.jpg' },
            { 'url': 'assets/images/architecture/archit_2.jpg',
                'thumb': 'assets/images/architecture/thumb/architT2.jpg' },
            { 'url': 'assets/images/architecture/archit_3.jpg',
                'thumb': 'assets/images/architecture/thumb/architT3.jpg' },
            { 'url': 'assets/images/architecture/archit_4.jpg',
                'thumb': 'assets/images/architecture/thumb/architT4.jpg' },
            { 'url': 'assets/images/architecture/archit_5.jpg',
                'thumb': 'assets/images/architecture/thumb/architT5.jpg' },
            { 'url': 'assets/images/architecture/archit_6.jpg',
                'thumb': 'assets/images/architecture/thumb/architT6.jpg' },
            { 'url': 'assets/images/architecture/archit_7.jpg',
                'thumb': 'assets/images/architecture/thumb/architT7.jpg' }
        ]
    }
];
//# sourceMappingURL=gallery-data.js.map

/***/ }),

/***/ "../../../../../src/app/home/gallery.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".galleryDiv{\n  width:100%;\n  height:550px;\n}\n.galleryDiv ul{\n  padding: 0;\n}\n.galleryDiv ul li{\n  height:auto;\n  padding:0;\n}\n.imgList{\n  border: 2px solid #727070;\n}\n.modal {\n  position:fixed;\n  z-index:1;\n  left:0;\n  top:0;\n  width:100%;\n  height:100%;\n  overflow:hidden;\n  background-color:rgba(0,0,0,0.85);\n}\n.popupBox{\n  width:50%;\n  height:500px;\n  margin:200px auto 0 auto;\n  background-color:transparent;\n  padding:0;\n  position:relative;\n}\n.popupImg{\n   width:auto;\n   height:700px;\n   margin:0;\n   float:left;\n\n}\n.photoBox{\n  width:auto;\n  height :400px;\n\n  overflow:hidden;\n\n}\n.modalImg {\n  width :auto;\n  height:400px;\n  display:block;\n  margin:0 auto;\n\n}\n\n.close{\n   width:100%;\n   margin:auto;\n   color:white;\n   cursor:pointer;\n   padding:2px;\n   text-align: center;\n }\n\n.arrow{\n  width:8%;\n\n  float:left;\n  padding-top: 170px;\n}\n\n.arrow-right {\n width:0;\n height:0;\n border-top: 20px solid transparent;\n border-bottom: 20px solid transparent;\n border-left: 20px solid white;\n float:right;\n\n cursor:pointer;\n\n\n}\n.arrow-left {\n width:0;\n height:0;\n border-top: 20px solid transparent;\n border-bottom: 20px solid transparent;\n border-right: 20px solid white;\n float:left;\n margin:auto;\n cursor:pointer;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/gallery.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Gallery</h3>\n\n<div *ngIf=\"image\" class=\"galleryDiv clearfix\">\n  <h3>{{image.name}}</h3>\n  <ul>\n    <li *ngFor=\"let img of image.contents; let index = index\" class=\"imgList\">\n\n        <img src=\"{{img.thumb}}\" (click)=openModal(index)>\n\n\n    </li>\n  </ul>\n</div>\n<button (click)=\"gotoImages()\">back</button>\n\n\n<div *appModal=\"condition\" class=\"modal\">\n\n\n  <div class=\"popupBox clearfix\">\n\n    <div class=\"arrow clearfix\">\n      <div class=\"arrow-left\" *ngIf=\"image.contents.length >1\" (click)=\"prevImage()\"></div>\n    </div>\n\n    <div class=\"clearfix popupImg\">\n      <div class=\"clearfix photoBox\"><img src=\"{{imgSrc}}\" class=\"modalImg\"></div>\n      <div class=\"close clearfix\" (click)=close()>close</div>\n    </div>\n\n    <div class=\"arrow clearfix\">\n      <div class=\"arrow-right\" *ngIf=\"image.contents.length >1\" (click)=\"nextImage()\"></div>\n    </div>\n\n\n\n  </div>\n\n\n\n\n\n\n\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/gallery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gallery_service__ = __webpack_require__("../../../../../src/app/home/gallery.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GalleryComponent = (function () {
    function GalleryComponent(router, service, route) {
        this.router = router;
        this.service = service;
        this.route = route;
        this.condition = true;
    }
    GalleryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) {
            return _this.service.getImage(params.get('id'));
        })
            .subscribe(function (image) { return _this.image = image; });
    };
    GalleryComponent.prototype.gotoImages = function () {
        var imageId = this.image ? this.image.id : null;
        this.router.navigate(['/home', { id: imageId }]);
    };
    GalleryComponent.prototype.openModal = function (index) {
        if (!index) {
            this.currentImageIndex = 1;
        }
        this.currentImageIndex = index;
        this.condition = false;
        for (var i = 0; i < this.image.contents.length; i++) {
            if (i === this.currentImageIndex) {
                this.imgSrc = this.image.contents[i].url;
            }
        }
    };
    GalleryComponent.prototype.close = function () {
        this.condition = true;
    };
    GalleryComponent.prototype.prevImage = function () {
        this.condition = true;
        this.currentImageIndex--;
        if (this.currentImageIndex < 0) {
            this.currentImageIndex = this.image.contents.length - 1;
        }
        this.openModal(this.currentImageIndex);
    };
    GalleryComponent.prototype.nextImage = function () {
        this.condition = true;
        this.currentImageIndex++;
        if (this.currentImageIndex === this.image.contents.length) {
            this.currentImageIndex = 0;
        }
        this.openModal(this.currentImageIndex);
    };
    return GalleryComponent;
}());
GalleryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/home/gallery.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/gallery.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__gallery_service__["a" /* GalleryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__gallery_service__["a" /* GalleryService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], GalleryComponent);

var _a, _b, _c;
//# sourceMappingURL=gallery.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/gallery.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gallery_data__ = __webpack_require__("../../../../../src/app/home/gallery-data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var imagesPromise = Promise.resolve(__WEBPACK_IMPORTED_MODULE_0__gallery_data__["a" /* IMAGES */]);
var GalleryService = (function () {
    function GalleryService() {
    }
    GalleryService.prototype.getImages = function () { return imagesPromise; };
    GalleryService.prototype.getImage = function (id) {
        return imagesPromise
            .then(function (images) { return images.find(function (image) { return image.id === +id; }); });
    };
    return GalleryService;
}());
GalleryService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])()
], GalleryService);

//# sourceMappingURL=gallery.service.js.map

/***/ }),

/***/ "../../../../../src/app/home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gallery_component__ = __webpack_require__("../../../../../src/app/home/gallery.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var homeRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */] },
    { path: 'home/:id', component: __WEBPACK_IMPORTED_MODULE_3__gallery_component__["a" /* GalleryComponent */] }
];
var HomeRoutingModule = (function () {
    function HomeRoutingModule() {
    }
    return HomeRoutingModule;
}());
HomeRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(homeRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
        ]
    })
], HomeRoutingModule);

//# sourceMappingURL=home-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".homeDiv{\n  width:100%;\n  height:550px;\n  position: relative;\n  margin:5px auto;\n}\n.homeDiv ul{\n  padding:0;\n}\n\n.homeDiv ul li{\n  width:22%;\n  float:left;\n\n}\n.imgDiv{\n width:100%;\n\n}\nimg {\n  width:100%;\n}\n\n.homeDiv li:nth-child(2){\n  margin-right:4%;\n  margin-left:4%;\n}\n.homeDiv li:nth-child(3){\n  margin-right:4%;\n}\n\n.selected{\n  box-shadow:1px 5px 10px rgba(0,0,0,0.6);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Gallery</h3>\n\n<div class=\"homeDiv clearfix\">\n\n  <ul>\n    <li *ngFor=\"let image of images | async\"\n        (click)=\"onSelect(image)\">\n       <p>{{image.name}}</p>\n        <div class=\"imgDiv clearfix\">\n        <img src=\"{{image.homeImage}}\"\n        [class.selected]=\"isSelected(image)\">\n        </div>\n\n    </li>\n\n\n  </ul>\n\n\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gallery_service__ = __webpack_require__("../../../../../src/app/home/gallery.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(router, service, route) {
        this.router = router;
        this.service = service;
        this.route = route;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.images = this.route.paramMap
            .switchMap(function (params) {
            _this.selectedId = +params.get('id');
            return _this.service.getImages();
        });
    };
    HomeComponent.prototype.onSelect = function (image) {
        this.router.navigate(['/home', image.id]);
    };
    HomeComponent.prototype.isSelected = function (image) {
        return image.id === this.selectedId;
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__gallery_service__["a" /* GalleryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__gallery_service__["a" /* GalleryService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], HomeComponent);

var _a, _b, _c;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gallery_component__ = __webpack_require__("../../../../../src/app/home/gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_routing_module__ = __webpack_require__("../../../../../src/app/home/home-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modal_directive__ = __webpack_require__("../../../../../src/app/home/modal.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__gallery_service__ = __webpack_require__("../../../../../src/app/home/gallery.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__home_routing_module__["a" /* HomeRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_3__gallery_component__["a" /* GalleryComponent */],
            __WEBPACK_IMPORTED_MODULE_5__modal_directive__["a" /* ModalDirective */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__gallery_service__["a" /* GalleryService */]]
    })
], HomeModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/modal.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalDirective = (function () {
    function ModalDirective(templateRef, viewContainer) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.hasView = false;
    }
    Object.defineProperty(ModalDirective.prototype, "appModal", {
        set: function (condition) {
            if (!condition && !this.hasView) {
                this.viewContainer.createEmbeddedView(this.templateRef);
                this.hasView = true;
            }
            else if (condition && this.hasView) {
                this.viewContainer.clear();
                this.hasView = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    return ModalDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], ModalDirective.prototype, "appModal", null);
ModalDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({ selector: '[appModal]' }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* TemplateRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* TemplateRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ViewContainerRef */]) === "function" && _b || Object])
], ModalDirective);

var _a, _b;
//# sourceMappingURL=modal.directive.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map