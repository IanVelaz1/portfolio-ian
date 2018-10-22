webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes_routing_module__ = __webpack_require__("./src/app/routes-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_mails_service__ = __webpack_require__("./src/app/services/mails.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_footer_footer_component__ = __webpack_require__("./src/app/components/footer/footer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__routes_routing_module__["a" /* routesComponents */],
                __WEBPACK_IMPORTED_MODULE_7__components_footer_footer_component__["a" /* FooterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__routes_routing_module__["b" /* routing */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__services_mails_service__["a" /* MailsService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.css":
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Muli|Song+Myung');\r\n\r\n.body-container{\r\n  height: 100vh;\r\n  width: 100%;\r\n}\r\n\r\n.titulo{\r\n\r\n  margin: 0px auto;\r\n  position: relative;\r\n  top: 40%;\r\n  -webkit-transform: translateY(-60%);\r\n          transform: translateY(-60%);\r\n  color: white;\r\n  font-family: 'Song Myung', serif;\r\n  font-size: 350%;\r\n}\r\n\r\n.texto-desc{\r\n  position: relative;\r\n  top: 45%;\r\n  -webkit-transform: translateY(-55%);\r\n          transform: translateY(-55%);\r\n  color: white;\r\n  \r\nfont-family: 'Muli', sans-serif;\r\n font-size: 115%;\r\n}\r\n\r\n.col-left{\r\n  background-image: url('https://scontent.fmex6-1.fna.fbcdn.net/v/t1.0-9/29793830_2168442186500988_1581723892613906432_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeG9MXHfcTXpWEdOY_9CwCKDyqH7aaW_5YfHkg2R94e4YpGDRC6zxyga_fUz3UChHRj2vscjyYKrBTBRjwDzNFlKDdSpjI4It7sP151O3wvr-Q&oh=4fc99c16dfe377543f8c003c8ba7c0d8&oe=5B29E254');\r\n  background-position: center;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n@media only screen and (max-width:770px){\r\n  .col-left{\r\n    background-image: url('https://scontent.fmex6-1.fna.fbcdn.net/v/t1.0-9/29793830_2168442186500988_1581723892613906432_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeG9MXHfcTXpWEdOY_9CwCKDyqH7aaW_5YfHkg2R94e4YpGDRC6zxyga_fUz3UChHRj2vscjyYKrBTBRjwDzNFlKDdSpjI4It7sP151O3wvr-Q&oh=4fc99c16dfe377543f8c003c8ba7c0d8&oe=5B29E254');\r\n    background-position: center;\r\n    background-size: 100% 100%;\r\n    background-repeat: no-repeat;\r\n  }\r\n\r\n  .titulo{\r\n\r\n    margin: 0px auto;\r\n    position: relative;\r\n    top: 40%;\r\n    -webkit-transform: translateY(-60%);\r\n            transform: translateY(-60%);\r\n    color: white;\r\n    font-family: 'Song Myung', serif;\r\n    font-size: 350%;\r\n  }\r\n  .texto-desc{\r\n    position: relative;\r\n    top: 50%;\r\n    -webkit-transform: translateY(-45%);\r\n            transform: translateY(-45%);\r\n    color: white;\r\n    \r\n  font-family: 'Muli', sans-serif;\r\n   font-size: 115%;\r\n  }\r\n\r\n\r\n}"

/***/ }),

/***/ "./src/app/components/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"body-container\" [ngClass]=\"{'animated':animationLoad==true,'fadeInDownBig':animationLoad==true}\">\n    <app-navbar></app-navbar>\n  <div class=\"container-fluid\" style=\"height:100%\">\n    <div class=\"row\" style=\" height:100%;border: 1px solid black\">\n       <div class=\"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 col-left\" style=\" height:100%;\">\n          \n       </div>\n       <div class=\"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12\" style=\" height:100%; width: 100%; text-align: center; background-color:#3f51b4; \">\n        <p class=\"titulo\">Ian Velazquez</p>\n        <p class=\"texto-desc\">Hola Soy un estudiante de Ing en Sistemas Computacionales y un Full Stack Web Developer, he realizado y he participado en una variedad de proyectos que van desde páginas de Reserva, Sistemas de punto de venta, Páginas de Ecommerce, Progressive Web Apps y Aplicaciones nativas con el Framework de Ionic, todo mi trabajo lo hago utilizando el MEAN Stack.</p>\n        </div>\n    </div>\n  </div>\n  <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.animationLoad = true;
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/components/about/about.component.html"),
            styles: [__webpack_require__("./src/app/components/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/contacto/contacto.component.css":
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Oswald');\r\n\r\n.container-body{\r\n  width: 100%;\r\n  height: 100vh;\r\n  background:-webkit-gradient(linear,left top, left bottom,from(rgba(0,0,0,.5)),to(rgba(0,0,0,.5))), url('http://lakodosajta.info/wp-content/uploads/5000x2500-quality-cool-world-map-best-of-world-map.jpg');\r\n  background:linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)), url('http://lakodosajta.info/wp-content/uploads/5000x2500-quality-cool-world-map-best-of-world-map.jpg');\r\n  background-position: center;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n#container-contact{\r\n  height: 100vh;\r\n}\r\n\r\n.contact{\r\n  position: relative;\r\n  top: 50%;\r\n  -webkit-transform: translateY(-50%);\r\n          transform: translateY(-50%);\r\n  height: 65%;\r\n  border-radius: 25px;\r\n  -webkit-box-shadow: 0px 0px 34px -7px rgba(0,0,0,0.75);\r\nbox-shadow: 0px 0px 34px -7px rgba(0,0,0,0.75);\r\n background-color: white;\r\n}\r\n\r\n.form-control{\r\n  border: none;\r\n  border-bottom: 1px solid gray;\r\n  outline: none;\r\n  -webkit-box-shadow: none !important;\r\n  box-shadow: none !important;\r\n  border-radius: none!important;\r\n}\r\n\r\n.form-contact{\r\n  position: relative;\r\n  top: 50%;\r\n  -webkit-transform: translateY(-50%);\r\n          transform: translateY(-50%);\r\n}\r\n\r\n.titulo{\r\n  text-align: center;\r\n  font-size: 250%;\r\n  font-family: 'Oswald', sans-serif;\r\nwidth: 100%;\r\n}\r\n\r\n.btn-enviar{\r\n  height: 50px;\r\n  width: 100%;\r\n  text-align: center;\r\n background: #ff5c5c;\r\nborder: none;\r\nborder-radius: 15px;\r\noutline: none;\r\ncolor: white;\r\nfont-family: 'Oswald', sans-serif;\r\nfont-size: 125%;\r\n-webkit-box-shadow: 0px 10px 39px -7px rgba(30,105,222,1);\r\nbox-shadow: 0px 10px 39px -7px rgba(30,105,222,1);\r\ncursor: pointer;\r\n\r\n}\r\n\r\n.btn-enviar:hover,\r\n.btn-enviar:focus {\r\n  -webkit-transition: .55s;\r\n  transition: .55s;\r\n  background: grey;\r\n  \r\n}\r\n\r\n.btn-enviar:not(:hover) {\r\n  -webkit-transition: .55s;\r\n  transition: .55s;\r\n  background: #ff5c5c;\r\n  \r\n}\r\n\r\n::-webkit-input-placeholder{\r\n  font-weight: bolder!important;\r\n}\r\n\r\n:-ms-input-placeholder{\r\n  font-weight: bolder!important;\r\n}\r\n\r\n::-ms-input-placeholder{\r\n  font-weight: bolder!important;\r\n}\r\n\r\n::placeholder{\r\n  font-weight: bolder!important;\r\n}\r\n\r\n.form-control:hover,\r\n.form-control:focus {\r\n  -webkit-transition: .25s;\r\n  transition: .25s;\r\n  border-bottom: .25em solid  rgba(202, 33, 84, 0.521) !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/contacto/contacto.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-body\">\n  <app-navbar></app-navbar>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12\" id=\"container-contact\">\n        \n        <div class=\"contact\" >\n           <div class=\"container\">\n             <div class=\"row\">\n               <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12\" style=\"text-align: left;\">\n                <p class=\"titulo\">Contacto</p>\n               </div>\n             </div>\n             <div class=\"row\" >\n               <div class=\"col\" >\n                      <div class=\"form-group\">\n                        <label for=\"exampleInputEmail1\">Nombre</label>\n                        <input type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" [(ngModel)]=\"mailContact.nombre\" #nombre=\"ngModel\" required minlength=\"3\" name=\"nombre\" aria-describedby=\"emailHelp\" placeholder=\"Nombre\">\n                        <div class=\"alert alert-danger\" *ngIf=\"nombre.errors?.required && nombre.touched\" [ngClass]=\"{'animated':nombre.errors?.required,'rotateInDownLeft':nombre.errors?.required}\">Nombre requerido</div>\n                        <div class=\"alert alert-danger\" *ngIf=\"nombre.errors?.minlength && nombre.touched\" [ngClass]=\"{'animated':nombre.errors?.required,'rotateInDownLeft':nombre.errors?.required}\">Nombre debe de tener al menos 3 caracteres de largo</div>\n                      </div>\n               </div>\n                <div class=\"col\">\n                    <div class=\"form-group\">\n                        <label for=\"exampleInputPassword1\">Email:</label>\n                        <input type=\"email\" class=\"form-control\" id=\"exampleInputPassword1\" [(ngModel)]=\"mailContact.mail\" #mail=\"ngModel\" name=\"mail\" required minlength=\"4\" placeholder=\"email@ejemplo.com\">\n                        <div class=\"alert alert-danger\" *ngIf=\"mail.errors?.required && mail.touched\" [ngClass]=\"{'animated':mail.errors?.required,'rotateInDownLeft':mail.errors?.required}\">Mail requerido</div>\n                        <div class=\"alert alert-danger\" *ngIf=\"mail.errors?.minlength && mail.touched\" [ngClass]=\"{'animated':mail.errors?.required,'rotateInDownLeft':mail.errors?.required}\">Mail debe de tener al menos 4 caracteres de largo</div>\n                      </div>\n                </div>\n             </div>\n             <div class=\"row\">\n               <div class=\"col-12\">\n                  <div class=\"form-group\">\n                      <label for=\"exampleFormControlTextarea1\">Mensaje:</label>\n                      <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" [(ngModel)]=\"mailContact.mensaje\" #mensaje=\"ngModel\" name=\"mensaje\" required minlength=\"10\" rows=\"8\" style=\"width:100%\"></textarea>\n                      <div class=\"alert alert-danger\" *ngIf=\"mensaje.errors?.required && mensaje.touched\" [ngClass]=\"{'animated':mensaje.errors?.required,'rotateInDownLeft':mensaje.errors?.required}\">Mensaje requerido</div>\n                        <div class=\"alert alert-danger\" *ngIf=\"mensaje.errors?.minlength && mensaje.touched\" [ngClass]=\"{'animated':mensaje.errors?.required,'rotateInDownLeft':mensaje.errors?.required}\">mensaje debe de tener al menos 8 caracteres de largo</div>\n                    </div>\n               </div>\n                \n             </div>\n             <div class=\"row\">\n              <div class=\"col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12\">\n                <button class=\"btn-enviar\">Enviar</button>\n              </div>\n             </div>\n           </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n  <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "./src/app/components/contacto/contacto.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactoComponent = /** @class */ (function () {
    function ContactoComponent() {
        this.mailContact = {
            nombre: "",
            mail: "",
            mensaje: ""
        };
    }
    ContactoComponent.prototype.ngOnInit = function () {
    };
    ContactoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contacto',
            template: __webpack_require__("./src/app/components/contacto/contacto.component.html"),
            styles: [__webpack_require__("./src/app/components/contacto/contacto.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactoComponent);
    return ContactoComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ".container-body{\r\n  background-color: black;\r\n  width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-body\">\n  <div class=\"container-fluid\">\n      <div class=\"col-6\" style=\"text-align: center; color: white;\">\n        © 2018 Ian Velázquez\n      </div>\n      <div class=\"col-6\" style=\"text-align: center; color: white;\">\n        \n      </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/inicio/inicio.component.css":
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Concert+One');\r\n@import url('https://fonts.googleapis.com/css?family=Noto+Serif');\r\n@import url('https://fonts.googleapis.com/css?family=Oswald');\r\n@import url('https://fonts.googleapis.com/css?family=Anton');\r\n@import url('https://fonts.googleapis.com/css?family=PT+Sans');\r\n.container-pagina{\r\n  width: 100%;\r\n  height: 100vh;\r\n  \r\n}\r\n.container-1{\r\n  background:-webkit-gradient(linear,left top, left bottom,from(rgba(0,0,0,.9)),to(rgba(0,0,0,.9))), url('https://camo.githubusercontent.com/972aec276bc719ef159a837f270a5545de2ca5f9/68747470733a2f2f7261772e6769746875622e636f6d2f766f69642d6d61696e2f61746f6d2d323034382f6d61737465722f323034382d696e2d61746f6d2e676966');\r\n  background:linear-gradient(rgba(0,0,0,.9),rgba(0,0,0,.9)), url('https://camo.githubusercontent.com/972aec276bc719ef159a837f270a5545de2ca5f9/68747470733a2f2f7261772e6769746875622e636f6d2f766f69642d6d61696e2f61746f6d2d323034382f6d61737465722f323034382d696e2d61746f6d2e676966');\r\n  height: 100vh;\r\n    /* Center and scale the image nicely */\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    opacity: .93;\r\n    \r\n}\r\n.texto{\r\n  color:white;\r\n  position: relative;\r\n  top: 35%;\r\n  -webkit-transform: translateY(-50%);\r\n          transform: translateY(-50%);\r\n  font-family: 'Noto Serif', serif;\r\n  font-size:330%;\r\n  width: 100%;\r\n}\r\n.columna{ \r\n  text-align: center;\r\n}\r\n.sub-titulo{\r\n  color: white;\r\n  font-size:125%;\r\n  position: relative;\r\n  top: 20%;\r\n  -webkit-transform: translateY(-50%);\r\n          transform: translateY(-50%);\r\n  font-family: 'Noto Serif', serif;\r\n}\r\n.inivisibleSecondary{\r\n  visibility: hidden;\r\n}\r\n.visibleSecondary{\r\n  visibility: visible;\r\n  height: 100vh;\r\n}\r\n#contenido-2{\r\n  background-color: rgba(35, 185, 255, 1);\r\n}\r\n.primer-linea{\r\n  position: relative;\r\n    top: 40%;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n    \r\n}\r\n.iconos{position: relative;\r\n  top:120%;\r\n  -webkit-transform: translateY(120%);\r\n          transform: translateY(120%);\r\n  color: white;\r\n  margin-bottom: 0;\r\n\r\n}\r\n#container-desc{\r\n  height: 100%;\r\n}\r\n.texto-showcase{\r\n  color: white;\r\n  position: relative;\r\n  top: 50%;\r\n  -webkit-transform: translateY(-50%);\r\n          transform: translateY(-50%);\r\n  margin-top: 0;\r\n \r\n  font-family: 'Oswald', sans-serif;\r\n\r\n}\r\n.cont-desc-ian{\r\n  margin-top: 20px;\r\n}\r\n#descripcionIan1{\r\n  font-family: 'Anton', sans-serif;\r\n  font-size: 250%;\r\n  color: white;\r\n}\r\n#descripcionIan2{\r\n  color: white;\r\n  font-family: 'PT Sans', sans-serif;\r\n  font-size: 125%;\r\n}\r\n#contenido-3{\r\n\r\n}\r\n@media only screen and (max-width: 1100px) {\r\n  .container-fluid{\r\n    width: 100% !important;\r\n    \r\n  }\r\n  .sub-titulo{\r\n    color: white;\r\n    font-size:100%;\r\n    position: relative;\r\n    top: 5%;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n    font-family: 'Noto Serif', serif;\r\n  }\r\n  .texto{\r\n    \r\n    font-family: 'Noto Serif', serif;\r\n    font-size:300%;\r\n    width: 100%;\r\n  }\r\n  .texto-showcase{\r\n    color: white;\r\n    position: relative;\r\n    top: 50%;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n    margin-top: 0;\r\n    font-size: 200%;\r\n    font-family: 'Oswald', sans-serif;\r\n  \r\n  }\r\n\r\n  #descripcionIan1{\r\nfont-size:230%;\r\n  }\r\n  \r\n  #descripcionIan2{\r\n   font-size: 200%;\r\n  \r\n  }\r\n  \r\n}\r\n@media only screen and (max-width:800px){\r\n  .texto-showcase{\r\n    color: white;\r\n    position: relative;\r\n    top: 50%;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n    margin-top: 30px;\r\n    font-family: 'Oswald', sans-serif;\r\n    font-size: 180%;\r\n  }\r\n  .texto{\r\n    font-size: 220%;\r\n  }\r\n  .sub-titulo{\r\n    position: relative;\r\n    top:25%;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n    \r\n  }\r\n  #row-first-about{\r\ndisplay: none  }\r\n\r\n#descripcionIan1{\r\n  margin-top: 30px;\r\n\r\n}\r\n\r\n#descripcionIan2{\r\n  margin-top: 30px;\r\n\r\n}\r\n  \r\n  \r\n}\r\n@media only screen and (max-width:500px){\r\n  #descripcionIan1{\r\n    margin-top: 30px;\r\n    font-family: 'Anton', sans-serif;\r\n    font-size: 150%;\r\n    color: white;\r\n  }\r\n\r\n  .texto-showcase{\r\n    \r\n    font-size: 120%;\r\n  }\r\n  \r\n  #descripcionIan2{\r\n    margin-top: 30px;\r\n\r\n    color: white;\r\n    font-family: 'PT Sans', sans-serif;\r\n    font-size: 100%;\r\n  }\r\n}\r\n@media only screen and (max-width:400px){\r\n  #descripcionIan1{\r\n    margin-top: 50px;\r\n    font-family: 'Anton', sans-serif;\r\n    font-size: 130%;\r\n    color: white;\r\n  }\r\n  .texto-showcase{\r\n    \r\n    font-size: 80%;\r\n  }\r\n  #descripcionIan2{\r\n    margin-top: 50px;\r\n\r\n    color: white;\r\n    font-family: 'PT Sans', sans-serif;\r\n    font-size: 80%;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/inicio/inicio.component.html":
/***/ (function(module, exports) {

module.exports = "<div (window:wheel)=\"scroll($event)\" class=\"container-pagina\">\n  <app-navbar></app-navbar>\n  <div class=\"container-fluid\">\n    <div class=\"row container-1\">\n      <div class=\"col-lat col-xl-4 col-lg-4 col-md-4 col-sm-4\">\n\n      </div>\n      <div class=\"columna col-xl-4 col-lg-4 col-md-4 col-sm-4\">\n        <p class=\"texto\" [ngClass]='{\"animated\":textoVisible==true,\"zoomInDown\":textoVisible==true}'>¿Buscando a un programador fuera de lo ordinario?</p>\n        <p class=\"sub-titulo\" [ngClass]='{\"animated\":textoVisible==true,\"rollIn\":textoVisible==true}'>Prepárate para convertir tus\n          <span style=\"font-weight: bold; font-family: 'Concert One', cursive;\n        \">ideas</span> en\n          <span style=\"font-weight: bold; font-family: 'Concert One', cursive;\">realidad</span>\n        </p>\n      </div>\n      <div class=\"col-lat col-xl-4 col-lg-4 col-md-4 col-sm-4\">\n\n      </div>\n    </div>\n  </div>\n  <div class=\"container-fluid\" id=\"contenido-2\" [ngClass]=\"{'invisibleSecondary':scrolled==false,'visibleSecondary':scrolled==true,'animated':scrolled==true,'bounceInDown':scrolled==true}\">\n    <div class=\"container\" id=\"container-desc\">\n        <div class=\"row\" style=\"height:25%\" id=\"row-first-about\"></div>\n        <div class=\"row\" id=\"icons-row-about\" style=\" height: 25%;\" *ngIf=\"scrolled==true\">\n           <div class=\"col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4\" style=\"text-align: center\">\n             <i class=\"fas fa-check fa-4x iconos\"></i>\n             <p class=\"texto-showcase\">Aplicaciones íncreibles</p>\n           </div>\n           <div class=\"col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4\" style=\"text-align: center\">\n              <i class=\"fas fa-paint-brush fa-4x iconos\"></i>\n              <p class=\"texto-showcase\">Hecho a la medida</p>\n            </div>\n            <div class=\"col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4\" style=\"text-align: center\">\n                <i class=\"fas fa-file-code fa-4x iconos\"></i>\n                <p class=\"texto-showcase\">Codigo perfecto y eficiente</p>\n              </div>\n        </div>\n        <div class=\"row cont-desc-ian\" style=\"height: 25%;\" *ngIf=\"scrolled==true\">\n          <div class=\"col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6\" style=\"text-align: right;\"><p id=\"descripcionIan1\">Hola, soy Ian, un Full stack web developer de la Ciudad de México</p></div>\n          <div class=\"col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6\" style=\"text-align: left;\"><p id=\"descripcionIan2\">Soy un estudiante de ingenieria en sistemas que siente una infinita pasión por el desarrollo web y por el código limpio, he realizado proyectos que van desde Tiendas en línea, Páginas de reservas, Blogs y Landing Pages. <br>Para individuos, empresas pequeñas y empresas medianas.</p></div>\n        </div>\n        <div class=\"row\" style=\"height: 22%\"></div>\n    </div>\n    \n  </div>\n  <div class=\"container-fluid\" id=\"contenido-3\">\n    <app-trabajo></app-trabajo>\n    \n  </div>\n  <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "./src/app/components/inicio/inicio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InicioComponent = /** @class */ (function () {
    function InicioComponent() {
        this.textoVisible = true;
        this.scrolled = false;
    }
    InicioComponent.prototype.ngOnInit = function () {
    };
    InicioComponent.prototype.scroll = function (e) {
        console.log(e.offsetY);
        this.scrolled = true;
    };
    InicioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-inicio',
            template: __webpack_require__("./src/app/components/inicio/inicio.component.html"),
            styles: [__webpack_require__("./src/app/components/inicio/inicio.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InicioComponent);
    return InicioComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Yantramanav');\r\n@import url('https://fonts.googleapis.com/css?family=Archivo+Black');\r\n.navbar-default {\r\n  background-color: rgba(0, 0, 0, 0)!important;\r\n  color: white!important;\r\n}\r\n.nav-link{\r\n  color: white;\r\n  font-size: 200%;\r\n  font-family: 'Archivo Black', sans-serif;\r\n  opacity: .60;\r\n}\r\n.nav-link:hover,.nav-link:focus{\r\n  -webkit-transition: .45s;\r\n  transition: .45s;\r\n opacity: 1;\r\n}\r\n.nav-link:not(:hover){\r\n  -webkit-transition: .45s;\r\n  transition: .45s;\r\n opacity: .60;\r\n}\r\n.navbar-collapse{\r\n  -webkit-transition: 0.1!important;\r\n  transition: 0.1!important;\r\n  text-align: center;\r\n}\r\n.navbar-openMenu{\r\n  background-color: rgba(35, 185, 255, 1);\r\n  color: white!important;\r\n  -webkit-transition: 0.2s;\r\n  transition: 0.2s;\r\n}\r\n.nabvar-brand{\r\n  font-family: 'Yantramanav', sans-serif !important;\r\n  color: white!important;\r\n}\r\n#nombre-nav{\r\n  font-family: 'Yantramanav', sans-serif !important;\r\n  color: white!important;\r\n}\r\n.navbar-toggler{\r\n  border: none!important;\r\n  -webkit-box-shadow: none!important;\r\n          box-shadow: none!important;\r\n  outline: none!important;\r\n}"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top \" [ngClass]=\"{'navbar-openMenu':clickIcono==true,'navbar-default':clickIcono==false,'animated':clickIcono==true,'fadeInDown':clickIcono==true}\">\n    <a class=\"navbar-brand\" id=\"nombre-nav\"  routerLink=\"\">Ian Velázquez</a>\n    <button  [ngClass]=\"{'animated':clickIcono==false,'flipInY':clickIcono==false}\" *ngIf=\"!clickIcono\" (click)='clickIcono=true'  class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <i class=\"fas fa-bars fa-2x\" style=\"color: white;\"></i>\n    </button>\n\n    <button [ngClass]=\"{'animated':clickIcono==true,'flip':clickIcono==true}\" *ngIf=\"clickIcono==true\" (click)='clickIcono=false'  class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <i class=\"far fa-window-close fa-2x\"  style=\"color: white;\"></i>\n\n\n  </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\" [ngClass]=\"{'animated':clickIcono==true,'fadeInDown':clickIcono==true}\">\n      <div class=\"navbar-nav\">\n        <a class=\"nav-item nav-link active\" routerLink=\"\">Inicio <span class=\"sr-only\">(current)</span></a>\n        <a class=\"nav-item nav-link\" routerLink=\"/about\">About</a>\n        <a class=\"nav-item nav-link\" href=\"https://drive.google.com/open?id=1hn_hlSweSalB0tHgjJQnHGHrOJxSGQLx\">Curriculum</a>\n        <a class=\"nav-item nav-link\" routerLink=\"/contacto\">Contacto</a>\n        \n      </div>\n    </div>\n  </nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.clickIcono = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/trabajo/trabajo.component.css":
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Fjalla+One');\r\n@import url('https://fonts.googleapis.com/css?family=Roboto+Slab');\r\n@import url('https://fonts.googleapis.com/css?family=Ubuntu');\r\n.container-body{\r\n  height: 100vh;\r\n  width: 100%;\r\n}\r\n.titulo-trabajo{\r\n  font-family: 'Fjalla One', sans-serif;\r\n  font-size: 290%;\r\n  position: relative;\r\n  top: 50%;\r\n  -webkit-transform: translateY(-50%);\r\n          transform: translateY(-50%);\r\n}\r\n.trabajo1{\r\nbackground-image: url(\"https://scontent.fmex6-1.fna.fbcdn.net/v/t31.0-8/14207774_865337766901087_7979552810256548574_o.jpg?_nc_cat=0&oh=6195ff0beb6e6c32f14ba12ed91668f5&oe=5B641605\");\r\nbackground-position: center;\r\nbackground-size: 110%;\r\nbackground-repeat: no-repeat;\r\nheight: 100%;\r\nwidth: 100%;\r\n\r\n}\r\n.trabajo2{\r\n  background-image: url(\"https://scontent.fmex6-1.fna.fbcdn.net/v/t1.0-9/26166207_635996826791159_5108023885721003075_n.jpg?_nc_cat=0&oh=ced3a8dafae90a34d02e55ad49959492&oe=5B676744\");\r\n  background-position: center;\r\n  background-size: 110%;\r\n  background-repeat: no-repeat;\r\n}\r\n.trabajo3{\r\n  background-image: url(\"https://scontent.fmex6-1.fna.fbcdn.net/v/t1.0-9/13006590_482859741899007_6142779223509024644_n.jpg?_nc_cat=0&oh=5b371a40d1fb4539c07ced1ee2b99da4&oe=5B72B5D4\");\r\n  background-position: center;\r\n  background-size: 110%;\r\n  background-repeat: no-repeat;\r\n}\r\n.trabajo1:hover,.trabajo2:hover,.trabajo3:hover{\r\n  -webkit-transition: all 0.4s ease-in-out;\r\n  transition: all 0.4s ease-in-out;\r\n background-size: 100%;\r\n\r\n  }\r\n.trabajo1:not(:hover),.trabajo2:not(:hover),.trabajo3:not(:hover){\r\n    -webkit-transition: all 0.4s ease-in-out;\r\n    transition: all 0.4s ease-in-out;\r\n   background-size: 110%;\r\n  \r\n    }\r\n#row-trabajos{\r\n  height: 30%;\r\n  \r\n }\r\n#row-trabajos-2{\r\n  height:50%;\r\n }\r\n.titulo-trabajos{\r\n  width: 100%;\r\n  font-family: 'Fjalla One', sans-serif;\r\n  font-size: 160%;\r\n  margin-top:2%;\r\n  color: white;\r\n}\r\n.texto-trabajos{\r\n  width: 100%;\r\n  font-family: 'Roboto Slab', serif;\r\n  font-size: 110%;\r\n  color: white;\r\n}\r\n.row-tit-trabajos{\r\n  border: 1px solid black;\r\n  margin-top: 2%;\r\n  text-align: center;\r\n  background-color: black;\r\n  width: 80%;\r\n  margin-left: 10%;\r\n}\r\n.row-tex-trabajos{\r\n  border: 1px solid black;\r\n  text-align: center;\r\n  width: 80%;\r\n  margin-left: 10%;\r\n  background-color: black;\r\n}\r\n.cont-contacto{\r\n\r\n height: 100%;\r\n}\r\n.cont-about{\r\n  \r\n  height: 100%;\r\n  background-color: #3f51b4;\r\n}\r\n.circulo{\r\n  \r\n  width: 300px;\r\n  margin: 0 auto;\r\n  position: relative;\r\n  top: 50%;\r\n  -webkit-transform: translateY(-50%);\r\n          transform: translateY(-50%);\r\n  height: 300px;\r\n  border-radius: 50%;\r\n  text-align: center\r\n  \r\n}\r\n.circulo:hover,.circulo:focus{\r\n  -webkit-transition: 0.3s;\r\n  transition: 0.3s;\r\n  border-radius: 0;\r\n  height: 150px;\r\n  width: 400px;\r\n  cursor: pointer;\r\n}\r\n.cont-about:hover{\r\n  \r\n  -webkit-transition: 0.3s;\r\n  \r\n  transition: 0.3s;\r\n  background-color: #505fb8;\r\n}\r\n.cont-about:not(:hover){\r\n  -webkit-transition: 0.3s;\r\n  transition: 0.3s;\r\n}\r\n.circulo:not(:hover),.circulo:not(:focus){\r\n  -webkit-transition: 0.3s;\r\n  transition: 0.3s;\r\n\r\n}\r\n#circulo-izquierda{\r\n  border: 10px solid #3f51b4;\r\n}\r\n.titulo-circulo{\r\n  position: relative;\r\n  top:30%;\r\n  -webkit-transform: translateY(-50%);\r\n          transform: translateY(-50%);\r\n  font-family: 'Ubuntu', sans-serif;\r\n   font-weight: bolder;\r\n   color: #3f51b4;\r\n}\r\n.texto-circulo{\r\n  position: relative;\r\n  top:40%;\r\n  -webkit-transform: translateY(-50%);\r\n          transform: translateY(-50%);\r\n  font-family: 'Fjalla One', sans-serif;\r\n  font-size: 270%;\r\n  color: #3f51b4;\r\n}\r\n#circulo-derecha{\r\n  border: 10px solid white;\r\n}\r\n.titulo-circulo2{\r\n  position: relative;\r\n  top:30%;\r\n  -webkit-transform: translateY(-50%);\r\n          transform: translateY(-50%);\r\n  font-family: 'Ubuntu', sans-serif;\r\n   font-weight: bolder;\r\n   color: white;\r\n}\r\n.texto-circulo2{\r\n  position: relative;\r\n  top:40%;\r\n  -webkit-transform: translateY(-50%);\r\n          transform: translateY(-50%);\r\n  font-family: 'Fjalla One', sans-serif;\r\n  font-size: 270%;\r\n  color: white;\r\n}\r\n@media only screen and (max-width:780px){\r\n  .circulo:hover,.circulo:focus{\r\n    -webkit-transition: 0.3s;\r\n    transition: 0.3s;\r\n    border-radius: 0;\r\n    height: 150px;\r\n    width: 300px;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .circulo:not(:hover),.circulo:not(:focus){\r\n    -webkit-transition: 0.3s;\r\n    transition: 0.3s;\r\n  \r\n  }\r\n}\r\n@media only screen and (max-width:1000px){\r\n  .titulo-trabajos{\r\n    width: 100%;\r\n    font-family: 'Fjalla One', sans-serif;\r\n    font-size: 110%;\r\n    margin-top:2%;\r\n    color: white;\r\n  }\r\n  \r\n  .texto-trabajos{\r\n    width: 70%;\r\n    font-family: 'Roboto Slab', serif;\r\n    font-size: 70%;\r\n    color: white;\r\n  }\r\n }\r\n@media only screen and (max-width:600px){\r\n  #row-trabajos-2{\r\n    margin-top: 100px;\r\n   }\r\n   #row-trabajos{\r\n     overflow-y: auto;\r\n   }\r\n }\r\n@media only screen and (max-width:375px){\r\n  .circulo{\r\n    width: 200px;\r\n    height: 200px;\r\n  \r\n    \r\n  }\r\n\r\n  .titulo-circulo{\r\n    font-size: 90%;\r\n     }\r\n     \r\n     .texto-circulo{\r\n       font-size: 200%; \r\n     }\r\n\r\n  .titulo-circulo2{\r\n font-size: 90%;\r\n  }\r\n  \r\n  .texto-circulo2{\r\n    font-size: 200%; \r\n  }\r\n\r\n  .circulo:hover,.circulo:focus{\r\n    -webkit-transition: 0.3s;\r\n    transition: 0.3s;\r\n    border-radius: 0;\r\n    height: 150px;\r\n    width: 200px;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .circulo:not(:hover),.circulo:not(:focus){\r\n    -webkit-transition: 0.3s;\r\n    transition: 0.3s;\r\n  \r\n  }\r\n\r\n\r\n\r\n }"

/***/ }),

/***/ "./src/app/components/trabajo/trabajo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-body\" id=\"container-f\">\n  <div class=\"row\" style=\" height: 20%; \">\n    <div class=\"col-12\" style=\"text-align: center;\">\n      <p class=\"titulo-trabajo\">Mis Trabajos:</p>\n    </div>\n  </div>\n  <div class=\"row\" id=\"row-trabajos\" style=\"  \">\n    <div class=\"col-xl-4 col-lg-4 col-md-4 col-sm-12 trabajo1\">\n      <div class=\"row row-tit-trabajos\">\n        <p class=\"titulo-trabajos\">SUP Quintana Roo</p>\n      </div>\n      <br>\n      <div class=\"row row-tex-trabajos\">\n        <p class=\"texto-trabajos\">Aplicación web que cuenta con sistema de reserva para clases.\n          <br>-Mobile first\n          <br>-Sistema de gestión de contenidos</p>\n      </div>\n    </div>\n    <div class=\"col-xl-4 col-lg-4 col-md-4 col-sm-12 trabajo2\">\n      <div class=\"row row-tit-trabajos\">\n        <p class=\"titulo-trabajos\">The Vape Zone</p>\n      </div>\n      <br>\n      <div class=\"row row-tex-trabajos\">\n        <p class=\"texto-trabajos\">Pagina E-commerce\n          <br>-Mobile first\n          <br>-Sistema de gestion de contenidos\n          <br>-Control de usuarios\n          <br>-control de inventarios</p>\n      </div>\n    </div>\n    <div class=\"col-xl-4 col-lg-4 col-md-4 col-sm-12 trabajo3\">\n      <div class=\"row row-tit-trabajos\">\n        <p class=\"titulo-trabajos\">Colorete Cosmetique</p>\n      </div>\n      <br>\n      <div class=\"row row-tex-trabajos\">\n        <p class=\"texto-trabajos\">Pagina de E-commerce\n          <br>-Mobile first\n          <br>-Sistema de gestion de contenidos\n          <br>-Control de usuarios\n          <br>-control de inventarios</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\" id=\"row-trabajos-2\" style=\"\">\n      <div class=\"col-xl-6 col-lg-6 col-md-6 col-sm-6 cont-contacto\">\n         <div class=\"circulo\" id=\"circulo-izquierda\" (click)=\"navegarAbout()\">\n            <p class=\"titulo-circulo\">¿Continuar explorando?</p>\n            <p class=\"texto-circulo\">Acerca de Mi</p>\n         </div>\n      </div>\n      <div class=\"col-xl-6 col-lg-6 col-md-6 col-sm-6 cont-about\">\n          <div class=\"circulo\" id=\"circulo-derecha\" (click)=\"navegarContacto()\">\n              <p class=\"titulo-circulo2\">¿Tienes algo en mente?</p>\n              <p class=\"texto-circulo2\" >Contacto</p>\n           </div>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/trabajo/trabajo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrabajoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TrabajoComponent = /** @class */ (function () {
    function TrabajoComponent(router) {
        this.router = router;
        this.hoverCirculo = false;
    }
    TrabajoComponent.prototype.ngOnInit = function () {
    };
    TrabajoComponent.prototype.navegarAbout = function () {
        this.router.navigate(['/about']);
    };
    TrabajoComponent.prototype.navegarContacto = function () {
        this.router.navigate(['/contacto']);
    };
    TrabajoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-trabajo',
            template: __webpack_require__("./src/app/components/trabajo/trabajo.component.html"),
            styles: [__webpack_require__("./src/app/components/trabajo/trabajo.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], TrabajoComponent);
    return TrabajoComponent;
}());



/***/ }),

/***/ "./src/app/routes-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routesComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_inicio_inicio_component__ = __webpack_require__("./src/app/components/inicio/inicio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_trabajo_trabajo_component__ = __webpack_require__("./src/app/components/trabajo/trabajo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_about_about_component__ = __webpack_require__("./src/app/components/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_contacto_contacto_component__ = __webpack_require__("./src/app/components/contacto/contacto.component.ts");






var routes = [
    { path: "", component: __WEBPACK_IMPORTED_MODULE_1__components_inicio_inicio_component__["a" /* InicioComponent */] },
    { path: "about", component: __WEBPACK_IMPORTED_MODULE_4__components_about_about_component__["a" /* AboutComponent */] },
    { path: "contacto", component: __WEBPACK_IMPORTED_MODULE_5__components_contacto_contacto_component__["a" /* ContactoComponent */] }
];
var routesComponents = [
    __WEBPACK_IMPORTED_MODULE_1__components_inicio_inicio_component__["a" /* InicioComponent */],
    __WEBPACK_IMPORTED_MODULE_2__components_navbar_navbar_component__["a" /* NavbarComponent */],
    __WEBPACK_IMPORTED_MODULE_3__components_trabajo_trabajo_component__["a" /* TrabajoComponent */],
    __WEBPACK_IMPORTED_MODULE_4__components_about_about_component__["a" /* AboutComponent */],
    __WEBPACK_IMPORTED_MODULE_5__components_contacto_contacto_component__["a" /* ContactoComponent */]
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(routes);


/***/ }),

/***/ "./src/app/services/mails.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MailsService = /** @class */ (function () {
    function MailsService(http) {
        this.http = http;
    }
    MailsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], MailsService);
    return MailsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map