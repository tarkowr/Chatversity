(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Core/_guards/auth.guard.ts":
/*!********************************************!*\
  !*** ./src/app/Core/_guards/auth.guard.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/Core/_services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.authService.userLoggedIn()) {
            // User authorized so return true
            console.log('USER AUTHORIZED');
            return true;
        }
        console.log('USER NOT AUTHORIZED');
        // not logged in so redirect to login page via UrlTree
        var url = '/login';
        var tree = this.router.parseUrl(url);
        return tree;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/Core/_guards/route.guard.ts":
/*!*********************************************!*\
  !*** ./src/app/Core/_guards/route.guard.ts ***!
  \*********************************************/
/*! exports provided: RouteGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteGuard", function() { return RouteGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/Core/_services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RouteGuard = /** @class */ (function () {
    function RouteGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    RouteGuard.prototype.canActivate = function (next, state) {
        var currentUser = this.authService.userLoggedIn();
        // console.log(state.url);
        // console.log(currentUser);
        if (currentUser) {
            // User is authorized
            if (state.url === '/login') {
                this.returnUrl = '/home';
                this.tree = this.router.parseUrl(this.returnUrl);
                return this.tree;
            }
            return true;
        }
        // User is authorized
        if (state.url === '/login') {
            return true;
        }
        return false;
    };
    RouteGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], RouteGuard);
    return RouteGuard;
}());



/***/ }),

/***/ "./src/app/Core/_models/form-validation.ts":
/*!*************************************************!*\
  !*** ./src/app/Core/_models/form-validation.ts ***!
  \*************************************************/
/*! exports provided: CustomFormValidation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomFormValidation", function() { return CustomFormValidation; });
var CustomFormValidation = /** @class */ (function () {
    function CustomFormValidation() {
        this.eduEmailValidation = '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-.]+.[e]+[d]+[u]+$';
        this.regularEmailValidation = '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$';
        this.passwordValidation = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$';
    }
    return CustomFormValidation;
}());



/***/ }),

/***/ "./src/app/Core/_services/auth.service.ts":
/*!************************************************!*\
  !*** ./src/app/Core/_services/auth.service.ts ***!
  \************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _messaging_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messaging.service */ "./src/app/Core/_services/messaging.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = /** @class */ (function () {
    function AuthService(http, messageService, router) {
        this.http = http;
        this.messageService = messageService;
        this.router = router;
        this._currentUser = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
        this.initializeApp();
        console.log('Auth service constructed');
    }
    Object.defineProperty(AuthService.prototype, "currentUser", {
        get: function () {
            return this._currentUser.asObservable();
        },
        set: function (user) {
            console.log('setting current user');
            this._currentUser.next(user);
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.getCurrentUser = function () {
        return this._currentUser.asObservable();
    };
    AuthService.prototype.getUserId = function () {
        return localStorage.getItem('chatkitUserId');
    };
    AuthService.prototype.initializeApp = function () {
        var _this = this;
        this.messageService.initChatkit(localStorage.getItem('chatkitUserId'))
            .then(function (chatkitUser) {
            console.log('setting chatkit user');
            localStorage.setItem('chatkitUser', chatkitUser);
            _this._currentUser.next(chatkitUser);
        });
    };
    AuthService.prototype.userLoggedIn = function () {
        return localStorage.getItem('chatkitUserId') != null;
    };
    //
    // ─── SEND SIGN UP REQUEST TO SERVER ─────────────────────────────────────────────
    //
    AuthService.prototype.signup = function (fname, lname, university, username, password) {
        var _this = this;
        // Create Okta User
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/okta/signup", { fname: fname, lname: lname, username: username, password: password })
            .toPromise()
            .then(function (user) {
            // console.log(user);
            // Create chatkit user from Okta User ID
            return _this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/chatkit/createuser", {
                id: user.id,
                name: user.profile.firstName + ' ' + user.profile.lastName,
                custom_data: {
                    connections: [],
                    connectionRequests: [],
                    bio: '',
                    university: university,
                    graduationYear: '',
                    interests: '',
                    clubs: '',
                    major: '',
                    privateAccount: false,
                    showActivityStatus: true,
                }
            })
                .toPromise()
                .then(function (chatkitUser) {
                // Created Chatkit user
                // console.log('Created Chatkit user!');
                console.log(chatkitUser);
                return _this.login(username, password).then(function (loggedinUser) {
                    return loggedinUser;
                });
            });
        });
    };
    // ─────────────────────────────────────────────────────────────────
    //
    // ─── VALIDATE LOGIN THROUGH OKTA ────────────────────────────────────────────────
    //
    AuthService.prototype.login = function (username, password) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/okta/login", { username: username, password: password })
            .toPromise()
            .then(function (user) {
            console.log('LOGGED IN OKTA USER: ', user);
            localStorage.setItem('OktaUser', JSON.stringify(user));
            return user;
        });
    };
    // ─────────────────────────────────────────────────────────────────
    //
    // ─── HANDLE LOGOUT ──────────────────────────────────────────────────────────────
    //
    AuthService.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(['/login']);
        console.clear();
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _messaging_service__WEBPACK_IMPORTED_MODULE_4__["MessagingService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/Core/_services/messaging.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/Core/_services/messaging.service.ts ***!
  \*****************************************************/
/*! exports provided: MessagingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagingService", function() { return MessagingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pusher_chatkit_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pusher/chatkit-client */ "./node_modules/@pusher/chatkit-client/dist/web/chatkit.js");
/* harmony import */ var _pusher_chatkit_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pusher_chatkit_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessagingService = /** @class */ (function () {
    function MessagingService(http) {
        this.http = http;
        this.messages = [];
        console.log('Messaging service constructed');
    }
    //
    // ─── SET READ CURSOR ────────────────────────────────────────────────────────────
    //
    MessagingService.prototype.setLatestReadCursor = function (user, roomId) {
        var _this = this;
        // get position (ID) of latest room message
        this.fetchMessages(user, roomId, '', '', 1).then(function (messages) {
            console.log(messages);
            // set position of cursor to match
            user.setReadCursor({
                roomId: roomId,
                position: messages[0].id
            })
                .then(function () {
                user.rooms.forEach(function (room) {
                    if (room.id === messages[0].roomId) {
                        _this.latestRoom = room;
                    }
                });
                console.log("Set read cursor in room " + roomId + " with position " + messages[0].id);
            })
                .catch(function (err) {
                console.log("Error setting cursor: " + err);
            });
        });
    };
    // ────────────────────────────────────────────────────────────────────────────────
    //
    // ─── SET READ CURSOR ────────────────────────────────────────────────────────────
    //
    MessagingService.prototype.setReadCursor = function (user, roomId, position) {
        user.setReadCursor({
            roomId: roomId,
            position: position
        })
            .then(function () {
            console.log("Set read cursor in room " + roomId);
        })
            .catch(function (err) {
            console.log("Error setting cursor: " + err);
        });
    };
    // ────────────────────────────────────────────────────────────────────────────────
    //
    // ─── GET LATEST ROOM ────────────────────────────────────────────────────────────
    //
    MessagingService.prototype.getLatestRoom = function (user) {
        console.log('getting latest room');
        if (this.latestRoom) {
            return this.latestRoom;
        }
        var latestRoom;
        var latestReadCursor = this.getLatestReadCursor(user);
        console.log(latestReadCursor);
        user.rooms.forEach(function (room) {
            console.log(room.id);
            console.log(latestReadCursor.roomId);
            if (room.id === latestReadCursor.roomId) {
                latestRoom = room;
            }
        });
        return latestRoom;
        // return user.rooms.forEach(room => {
        //   console.log(room.id);
        //   console.log(latestReadCursor.roomId);
        //   while (room.id)
        //   if (room.id === latestReadCursor.roomId) { return room; }
        //   // if (latestRoom) { console.log('Got latest room'); return latestRoom; }/
        // });
    };
    // ─────────────────────────────────────────────────────────────────
    //
    // ─── GET LATEST CURSOR ──────────────────────────────────────────────────────────
    //
    MessagingService.prototype.getLatestReadCursor = function (user) {
        if (this.latestReadCursor) {
            return this.latestReadCursor;
        }
        var cursors = [];
        // first, get user cursor from each room
        user.rooms.forEach(function (room) {
            cursors.push(user.readCursor({ roomId: room.id }));
        });
        console.log(cursors);
        // then sort to find lowest
        var sorted = cursors.sort();
        console.log(sorted);
        var latestCursor = sorted[0];
        this.latestReadCursor = latestCursor;
        return latestCursor;
    };
    // ─────────────────────────────────────────────────────────────────
    MessagingService.prototype.fetchMessages = function (user, roomId, initialId, direction, limit) {
        if (direction === void 0) { direction = 'older'; }
        if (limit === void 0) { limit = 0; }
        return user.fetchMultipartMessages({
            roomId: roomId,
            initialId: initialId,
            direction: direction,
            limit: limit,
        })
            .then(function (messages) {
            return messages;
        })
            .catch(function (err) {
            console.log("Error fetching messages: " + err);
        });
    };
    //
    // ─── JOIN ROOM ───────────────────────────────────────────────────
    //
    MessagingService.prototype.joinRoom = function (user, roomId) {
        var _this = this;
        return user.joinRoom({ roomId: roomId })
            .then(function (room) {
            _this.setLatestReadCursor(user, roomId);
            return room;
        })
            .catch(function (err) {
            console.log("Error joining room " + roomId + ": " + err);
        });
    };
    // ─────────────────────────────────────────────────────────────────
    MessagingService.prototype.subscribeToAllRooms = function () {
        var _this = this;
        var currentUser = this.currentUser;
        if (!currentUser.rooms.length) {
            return;
        }
        currentUser.rooms.forEach(function (room) {
            currentUser.subscribeToRoomMultipart({
                roomId: room.id,
                hooks: {
                    onMessage: function (message) {
                        // console.log('Received message', message);
                        _this.messages.push(message);
                    }
                },
                messageLimit: 10
            });
        });
    };
    MessagingService.prototype.initChatkit = function (userId) {
        var _this = this;
        this.chatManager = new _pusher_chatkit_client__WEBPACK_IMPORTED_MODULE_1__["ChatManager"]({
            instanceLocator: 'v1:us1:a54bdf12-93d6-46f9-be3b-bfa837917fb5',
            userId: userId,
            tokenProvider: new _pusher_chatkit_client__WEBPACK_IMPORTED_MODULE_1__["TokenProvider"]({
                url: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/a54bdf12-93d6-46f9-be3b-bfa837917fb5/token'
            })
        });
        return this.chatManager.connect({
            onAddedToRoom: function (room) {
                console.log("Added to room " + room.name);
            },
            onRemovedFromRoom: function (room) {
                console.log("Removed from room " + room.name);
            },
            onRoomUpdated: function (room) {
                console.log("Updated room " + room.name);
            },
            onRoomDeleted: function (room) {
                console.log("Deleted room " + room.name);
            }
        })
            .then(function (user) {
            console.log("Connected as " + user.name + ". \n Setting up rooms...");
            _this.currentUser = user;
            localStorage.setItem('chatkitUserId', user.id);
            // If user has no rooms then return
            if (!user.rooms.length) {
                return;
            }
            // Subscribe to all user rooms to be notified of new messages
            _this.subscribeToAllRooms();
            // Join the latest room
            console.log(user);
            var latestRoom = _this.getLatestRoom(user);
            console.log(latestRoom);
            _this.joinRoom(user, latestRoom.id);
            // this.getLatestRoom(user).then((room) => {
            //   this.joinRoom(user, room.id);
            // });
            return user;
        });
    };
    MessagingService.prototype.getMessages = function () {
        return this.http.get('');
    };
    MessagingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MessagingService);
    return MessagingService;
}());



/***/ }),

/***/ "./src/app/Core/_services/user.service.ts":
/*!************************************************!*\
  !*** ./src/app/Core/_services/user.service.ts ***!
  \************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    //
    // ─── GET ALL CONNECTIONS FOR A GIVEN USER ───────────────────────────────────────────────────
    //
    UserService.prototype.getConnections = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/chatkit/connections/" + id);
    };
    // ────────────────────────────────────────────────────────────────────────────────
    //
    // ─── UPDATE ──────────────────────────────────────────────────────────────
    //
    UserService.prototype.update = function (userId, data) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        });
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/chatkit/user/" + userId, data, { headers: headers });
    };
    // ─────────────────────────────────────────────────────────────────
    UserService.prototype.getAll = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/users");
    };
    UserService.prototype.getById = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/okta/users/" + id);
    };
    UserService.prototype.register = function (user) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/users/register", user);
    };
    // update(user: any) {
    //     console.log(user);
    //     return this.http.put(`${environment.apiUrl}/updateUser/` + user.id, user);
    // }
    UserService.prototype.delete = function (id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/okta/users/" + id);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/Core/callback/callback.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/Core/callback/callback.component.ts ***!
  \*****************************************************/
/*! exports provided: CallbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallbackComponent", function() { return CallbackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @okta/okta-angular */ "./node_modules/@okta/okta-angular/dist/index.js");
/* harmony import */ var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_okta_okta_angular__WEBPACK_IMPORTED_MODULE_1__);
// callback.component.ts
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// tslint:disable-next-line:max-line-length
/* In order to handle the redirect back from Okta, we need to capture the token values from the URL. Use the /callback route to handle the logic of storing these tokens and redirecting back to the main page. */


var CallbackComponent = /** @class */ (function () {
    function CallbackComponent(okta) {
        this.okta = okta;
        // Handles the response from Okta and parses tokens
        okta.handleAuthentication();
    }
    CallbackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: "" }),
        __metadata("design:paramtypes", [_okta_okta_angular__WEBPACK_IMPORTED_MODULE_1__["OktaAuthService"]])
    ], CallbackComponent);
    return CallbackComponent;
}());



/***/ }),

/***/ "./src/app/Core/protected/protected.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/Core/protected/protected.component.ts ***!
  \*******************************************************/
/*! exports provided: ProtectedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProtectedComponent", function() { return ProtectedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
// protected.component.ts
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProtectedComponent = /** @class */ (function () {
    function ProtectedComponent() {
        console.log('Protected endpont!');
    }
    ProtectedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-secure',
            template: ""
        }),
        __metadata("design:paramtypes", [])
    ], ProtectedComponent);
    return ProtectedComponent;
}());



/***/ }),

/***/ "./src/app/Error-Views/error/error.component.css":
/*!*******************************************************!*\
  !*** ./src/app/Error-Views/error/error.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0Vycm9yLVZpZXdzL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/Error-Views/error/error.component.html":
/*!********************************************************!*\
  !*** ./src/app/Error-Views/error/error.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  error works!\n</p>\n"

/***/ }),

/***/ "./src/app/Error-Views/error/error.component.ts":
/*!******************************************************!*\
  !*** ./src/app/Error-Views/error/error.component.ts ***!
  \******************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/Error-Views/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.css */ "./src/app/Error-Views/error/error.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/Error-Views/page-not-found/page-not-found.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/Error-Views/page-not-found/page-not-found.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0Vycm9yLVZpZXdzL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/Error-Views/page-not-found/page-not-found.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/Error-Views/page-not-found/page-not-found.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Main Container Div -->\n<section class=\"py-5\" style=\"min-height:100vh;\">\n  <div class=\"container-fluid\">\n    <div class=\"text-center mt-5\">\n      <h1 class=\"display-1 text-secondary\">404 Error</h1>\n      <p class=\"h2 text-light text-light-weight mt-3 mb-5\">&mdash; Page Not Found &mdash;</p>\n      <div class=\"pt-5 pb-3\">\n        <a [routerLink]=\"['/home']\"><button class=\"btn btn-primary px-4 py-2\">Return Home</button></a>\n      </div>\n      <div>\n        <a [routerLink]=\"['/login']\">Login</a>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/Error-Views/page-not-found/page-not-found.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/Error-Views/page-not-found/page-not-found.component.ts ***!
  \************************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/Error-Views/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/Error-Views/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/Home/view-friends-home/view-friends-home.component.css":
/*!************************************************************************!*\
  !*** ./src/app/Home/view-friends-home/view-friends-home.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-card{\n    background-color: white;\n    border: 1px solid #DAE6ED;\n    border-radius: 5px;\n}\n.user-card:hover{\n    background-color: transparent;\n}\n.card-img{\n    max-width: 40px;\n    border-width: 2px !important;\n    border: 2px solid #96B7C9;\n}\n.border-online{\n    border: 2px solid #00e600;\n}\n#search{\n    border-radius: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSG9tZS92aWV3LWZyaWVuZHMtaG9tZS92aWV3LWZyaWVuZHMtaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksZUFBZTtJQUNmLDRCQUE0QjtJQUM1Qix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvSG9tZS92aWV3LWZyaWVuZHMtaG9tZS92aWV3LWZyaWVuZHMtaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXItY2FyZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjREFFNkVEO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi51c2VyLWNhcmQ6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4uY2FyZC1pbWd7XG4gICAgbWF4LXdpZHRoOiA0MHB4O1xuICAgIGJvcmRlci13aWR0aDogMnB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzk2QjdDOTtcbn1cbi5ib3JkZXItb25saW5le1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMGU2MDA7XG59XG4jc2VhcmNoe1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/Home/view-friends-home/view-friends-home.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/Home/view-friends-home/view-friends-home.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mt-4\">\n\n  <app-small id=\"profileModal\" *ngIf=\"connection\" [user]=\"connection\" [isConnection]=\"isConnection\"></app-small>\n\n  <div class=\"row\">\n    <div class=\"col\">\n  <!-- Actions -->\n  <ul class=\"nav nav-pills\" id=\"pills-connection-actions-tab\" role=\"tablist\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"#\" data-toggle=\"modal\" data-target=\"#addConnectionModal\">Add Connection</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link active\" href=\"#pills-all-connections\" id=\"pills-all-connections-tab\" data-toggle=\"pill\" role=\"tab\" aria-controls=\"pills-all-connections\" aria-selected=\"true\">All</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"#pills-online-connections\" id=\"pills-online-connections-tab\" data-toggle=\"pill\"  role=\"tab\" aria-controls=\"pills-online-connections\" aria-selected=\"false\">Online</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"#pills-pending-connections\" id=\"pills-pending-connections-tab\" data-toggle=\"pill\"  role=\"tab\" aria-controls=\"pills-pending-connections\" aria-selected=\"false\">Pending</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"#pills-search-connections\" id=\"pills-search-connections-tab\" data-toggle=\"pill\"  role=\"tab\" aria-controls=\"pills-search-connections\" aria-selected=\"false\">Search</a>\n    </li>\n  </ul>\n\n  <div class=\"tab-content\" id=\"pills-connection-actions-tabContent\">\n    <!-- All connections -->\n    <div class=\"tab-pane fade show active\" id=\"pills-all-connections\" role=\"tabpanel\" aria-labelledby=\"pills-all-connections\">\n      <div class=\"my-5\">\n        <span class=\"sr-only\">All Connections</span>\n        <ng-container *ngIf=\"connections\">\n          <div *ngFor=\"let c of connections\" class=\"my-2 user-card\">\n              <button class=\"btn btn-block text-left px-3 py-2\" data-toggle=\"modal\" data-target=\"#profileModal\"\n              (click)=\"connection = c\">\n                  <img src=\"\" onerror=\"this.src='../../assets/images/DefaultProfile.png'\"\n                  class=\"circle img-fluid rounded-circle card-img\" [ngClass]=\"{ 'border-online': c.active }\"/> \n      \n                  <span class=\"text-secondary font-weight-bold ml-3\">\n                    {{ c.name }}\n                    <small style=\"font-size:12px; color:#96b7c9;\">{{ appUser.presenceStore[c.id] }}</small>\n                  </span>\n              </button>\n            </div>\n        </ng-container>\n      </div>\n    </div>\n    <!-- End All connections -->\n    <!--Online connections-->\n    <div class=\"tab-pane fade\" id=\"pills-online-connections\" role=\"tabpanel\" aria-labelledby=\"pills-online-connections\">\n      <div class=\"my-5\">\n        <span class=\"sr-only\">Online Connections</span>\n        <div *ngFor=\"let c of connections\" class=\"my-2 user-card\">\n          <button class=\"btn btn-block text-left px-3 py-2\" data-toggle=\"modal\" data-target=\"#profileModal\"\n          (click)=\"connection = c\">\n              <img src=\"...\" onerror=\"this.src='../../assets/images/DefaultProfile.png'\"\n              class=\"circle img-fluid rounded-circle card-img\" [ngClass]=\"{ 'border-online': c.active }\"/> \n              <span class=\"text-secondary font-weight-bold ml-3\">\n                  {{ c.name }}\n                  <small style=\"font-size:12px; color:#96b7c9;\">{{ appUser.presenceStore[c.id] }}</small>\n                </span>\n          </button>\n        </div>\n      </div>\n    </div>\n    <!-- End online connections -->\n    <div class=\"tab-pane fade\" id=\"pills-pending-connections\" role=\"tabpanel\" aria-labelledby=\"pills-pending-connections\">\n      Pending\n    </div>\n\n    <div class=\"tab-pane fade\" id=\"pills-search-connections\" role=\"tabpanel\" aria-labelledby=\"pills-search-connections\">\n      <!--Search connections-->\n      <form [formGroup]=\"searchForm\" class=\"my-4\">\n          <!--Search Bar-->\n          <div class=\"form-group mb-3\">\n              <input type=\"search\" required class=\"form-control primary-border\" id=\"search\" name=\"search\" placeholder=\"Search\" \n              formControlName=\"search\" (input)=\"onSearch()\">\n          </div>\n      </form>\n\n      <!--Connection search results-->\n      <div class=\"my-2 search-results\" *ngIf=\"(submitted && !searchForm.invalid)\">\n        <div *ngIf=\"(results.length > 0)\">\n            <div *ngFor=\"let result of results\">\n                <button class=\"btn btn-block text-left px-3 py-2 my-2 user-card\" data-toggle=\"modal\" data-target=\"#profileModal\"\n                (click)=\"setUser(result.id)\">\n                    <img src=\"...\" onerror=\"this.src='../../assets/images/DefaultProfile.png'\"\n                    class=\"circle img-fluid rounded-circle card-img\" [ngClass]=\"{ 'border-online': result.active }\"/> \n        \n                    <span class=\"text-secondary ml-3\">{{ result.firstName }} {{ result.lastName }}</span>\n                </button>\n            </div>\n        </div>\n\n        <div *ngIf=\"loading\" class=\"spinner-border text-whiet\" role=\"status\">\n          <span class=\"sr-only\">Loading...</span>\n        </div>\n        \n        <div *ngIf=\"(results.length == 0)\" class=\"ml-2\">\n          <span class=\"text-light\">Sorry, we could not find any results.</span>\n        </div>\n\n        <hr *ngIf=\"(results.length > 0)\">\n      </div>\n      <!-- End connection search results -->\n      <!-- End Search connections -->\n    </div>\n  </div>\n</div>\n  <!-- End Actions -->\n</div> \n\n\n  <!-- Add connection modal -->\n  <div class=\"modal fade\" id=\"addConnectionModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addConnectionModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"addConnectionModalLabel\">Add connection</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <form (ngSubmit)=\"addConnection()\">\n            <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" [formControl]=\"connectionToAdd\" id=\"name\" required aria-describedby=\"addConnectionHelpBlock\">\n                <small id=\"addConnectionHelpBlock\" class=\"form-text text-muted\">\n                    Enter the email of the connection you wish to add:\n                </small>\n            </div>\n          <button type=\"submit\" class=\"btn btn-primary\">Send</button>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- End connection modal -->\n</div>\n"

/***/ }),

/***/ "./src/app/Home/view-friends-home/view-friends-home.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/Home/view-friends-home/view-friends-home.component.ts ***!
  \***********************************************************************/
/*! exports provided: ViewFriendsHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewFriendsHomeComponent", function() { return ViewFriendsHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _Core_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Core/_services/user.service */ "./src/app/Core/_services/user.service.ts");
/* harmony import */ var _Core_services_messaging_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Core/_services/messaging.service */ "./src/app/Core/_services/messaging.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _Core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Core/_services/auth.service */ "./src/app/Core/_services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ViewFriendsHomeComponent = /** @class */ (function () {
    //
    // ─── CONSTRUCTOR ────────────────────────────────────────────────────────────────
    //
    function ViewFriendsHomeComponent(http, formBuilder, _userService, _msgService, app, authService) {
        this.http = http;
        this.formBuilder = formBuilder;
        this._userService = _userService;
        this._msgService = _msgService;
        this.app = app;
        this.authService = authService;
        this.loading = false;
        this.submitted = false;
        this.isConnection = false;
        // Field for connection
        this.connectionToAdd = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.currentUser = authService.currentUser;
    }
    Object.defineProperty(ViewFriendsHomeComponent.prototype, "f", {
        // ────────────────────────────────────────────────────────────────────────────────
        //
        // ─── CONVENIENCE GETTER FOR EASY ACCESS TO FORM FIELDS ──────────────────────────
        //
        get: function () { return this.searchForm.controls; },
        enumerable: true,
        configurable: true
    });
    // ────────────────────────────────────────────────────────────────────────────────
    //
    // ─── ADD CONNECTION ─────────────────────────────────────────────────────────────
    //
    ViewFriendsHomeComponent.prototype.addConnection = function () {
        var _this = this;
        console.log(this.connectionToAdd.value);
        // Get okta user by login (email)
        this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/okta/GetUserByLogin/" + this.connectionToAdd.value)
            .toPromise()
            .then(function (oktaUser) {
            console.log(oktaUser);
            // Get the user from Chatkit by matching the IDs
            _this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/chatkit/GetUserById/" + oktaUser['id'])
                .toPromise()
                .then(function (currentUser) {
                // Found user => add 'connection request marker' to custom data field
                // TODO: Check if users are already connected
            })
                .catch(function (error) {
                console.log('Chatkit user not found!');
            });
        })
            .catch(function (error) {
            console.log('Okta user not found!');
        });
    };
    // ─────────────────────────────────────────────────────────────────
    //
    // ─── RETURN USER FROM FRIEND LIST ───────────────────────────────────────────────
    //
    ViewFriendsHomeComponent.prototype.getUser = function (_id) {
        return this.connections.find(function (c) { return c.id === _id; });
    };
    // ────────────────────────────────────────────────────────────────────────────────
    //
    // ─── SORT CONNECTIONS LIST ──────────────────────────────────────────────────────
    //
    ViewFriendsHomeComponent.prototype.sortList = function (users) {
        return users.sort(function (a, b) { return ((a.firstName.toLowerCase() + ' ' + a.lastName.toLowerCase())
            > (b.firstName.toLowerCase() + ' ' + b.lastName.toLowerCase()) ? 1 : -1); });
    };
    // ────────────────────────────────────────────────────────────────────────────────
    //
    // ─── FILTER LIST OF USERS BY NAME ───────────────────────────────────────────────
    //
    ViewFriendsHomeComponent.prototype.getUsersByName = function (_name) {
        _name = _name.toLowerCase();
        this.results = this.connections.filter(function (c) {
            return (c.firstName.toLowerCase() + ' ' + c.lastName.toLowerCase()).includes(_name);
        }).slice(0, 5);
    };
    // ────────────────────────────────────────────────────────────────────────────────
    //
    // ─── CHECK IF USERS ARE FRIENDS ─────────────────────────────────────────────────
    //
    ViewFriendsHomeComponent.prototype.isConnected = function (_id) {
        // Get current user data
        // Check if this user is on the other user's connections list
        // Toggle isConnection variable
        return;
    };
    // ─────────────────────────────────────────────────────────────────
    //
    // ─── HANDLE CLICK USER BUTTON ───────────────────────────────────────────────────
    //
    ViewFriendsHomeComponent.prototype.setUser = function (_id) {
        this.connection = this.getUser(_id);
        this.isConnected(_id);
    };
    // ─────────────────────────────────────────────────────────────────
    //
    // ─── HANDLE SIGN UP ─────────────────────────────────────────────────────────────
    //
    ViewFriendsHomeComponent.prototype.onSearch = function () {
        this.submitted = true;
        this.loading = true;
        if (this.searchForm.invalid) {
            this.submitted = false;
            this.loading = false;
            return;
        }
        var query = this.searchForm.get('search').value;
        this.getUsersByName(query);
        this.loading = false;
    };
    // ────────────────────────────────────────────────────────────────────────────────
    ViewFriendsHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.currentUser);
        //
        // ─── LOAD USER CONNECTIONS ───────────────────────────────────────
        //
        this._userService.getConnections(this.currentUser.id)
            .toPromise()
            .then(function (connections) {
            _this.connections = connections;
            console.log(connections);
        });
        // ────────────────────────────────────────────────────────────────────────────────
        //
        // ─── SETUP SEARCH BOX ────────────────────────────────────────────
        //
        this.searchForm = this.formBuilder.group({
            search: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        // ─────────────────────────────────────────────────────────────────
    };
    ViewFriendsHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-friends-home',
            template: __webpack_require__(/*! ./view-friends-home.component.html */ "./src/app/Home/view-friends-home/view-friends-home.component.html"),
            styles: [__webpack_require__(/*! ./view-friends-home.component.css */ "./src/app/Home/view-friends-home/view-friends-home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _Core_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _Core_services_messaging_service__WEBPACK_IMPORTED_MODULE_5__["MessagingService"],
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _Core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]])
    ], ViewFriendsHomeComponent);
    return ViewFriendsHomeComponent;
}());



/***/ }),

/***/ "./src/app/Home/view-latest-news/view-latest-news.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/Home/view-latest-news/view-latest-news.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-shadow{\n    box-shadow: 0 0px 2px #26B1FF;\n}\n.custom-shadow:hover{\n    box-shadow: 0 0px 4px #26B1FF;\n}\n.latest-news-container{\n    padding: 0;\n}\n.latest-news-card{\n    padding: 15px;\n}\n.news-header{\n    font-size: 1.5em;\n}\n@media (min-width: 768px){ /*Medium*/\n    .latest-news-container{\n        padding: 20px;\n    }\n    .latest-news-card{\n        padding: 25px;\n    }\n    .news-header{\n        font-size: 2.0em;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSG9tZS92aWV3LWxhdGVzdC1uZXdzL3ZpZXctbGF0ZXN0LW5ld3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBLDJCQUEyQixTQUFTO0lBQ2hDO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9Ib21lL3ZpZXctbGF0ZXN0LW5ld3Mvdmlldy1sYXRlc3QtbmV3cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbS1zaGFkb3d7XG4gICAgYm94LXNoYWRvdzogMCAwcHggMnB4ICMyNkIxRkY7XG59XG4uY3VzdG9tLXNoYWRvdzpob3ZlcntcbiAgICBib3gtc2hhZG93OiAwIDBweCA0cHggIzI2QjFGRjtcbn1cbi5sYXRlc3QtbmV3cy1jb250YWluZXJ7XG4gICAgcGFkZGluZzogMDtcbn1cbi5sYXRlc3QtbmV3cy1jYXJke1xuICAgIHBhZGRpbmc6IDE1cHg7XG59XG4ubmV3cy1oZWFkZXJ7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCl7IC8qTWVkaXVtKi9cbiAgICAubGF0ZXN0LW5ld3MtY29udGFpbmVye1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgIH1cbiAgICAubGF0ZXN0LW5ld3MtY2FyZHtcbiAgICAgICAgcGFkZGluZzogMjVweDtcbiAgICB9XG4gICAgLm5ld3MtaGVhZGVye1xuICAgICAgICBmb250LXNpemU6IDIuMGVtO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/Home/view-latest-news/view-latest-news.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/Home/view-latest-news/view-latest-news.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"latest-news-container\">\n  <div class=\"text-center border rounded my-4 mr-2 custom-shadow latest-news-card\" style=\"background-color: white;\">\n    <img src=\"/assets/images/logo-mark-64.png\" class=\"img-fluid img-responsive mx-auto mb-4\" width=\"64px\"\n      alt=\"Chatversity Logo Mark\">\n    <div class=\"text-secondary h2 text-light-weight news-header\">Introducing Chatversity</div>\n    <p class=\"text-light pt-3\">Connecting and collaborating with your fellow classmates has never been easier.</p>\n  </div>\n  <div class=\"text-left border rounded my-4 mr-2 custom-shadow latest-news-card\" style=\"background-color: white;\">\n    <div class=\"text-secondary h2 text-light-weight news-header\">Connect with your Peers</div>\n    <p class=\"text-light mb-4\">Chatversity is the newest platform for college and university students across the world. Ready to connect?</p>\n    <a [routerLink]=\"['/rooms']\" [queryParams]=\"{view:'friends'}\"><button type=\"submit\" class=\"btn btn-primary text-uppercase px-4\" style=\"padding-top: 10px; padding-bottom: 10px;\">Get Started!</button></a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/Home/view-latest-news/view-latest-news.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/Home/view-latest-news/view-latest-news.component.ts ***!
  \*********************************************************************/
/*! exports provided: ViewLatestNewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewLatestNewsComponent", function() { return ViewLatestNewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ViewLatestNewsComponent = /** @class */ (function () {
    function ViewLatestNewsComponent() {
    }
    ViewLatestNewsComponent.prototype.ngOnInit = function () {
    };
    ViewLatestNewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-latest-news',
            template: __webpack_require__(/*! ./view-latest-news.component.html */ "./src/app/Home/view-latest-news/view-latest-news.component.html"),
            styles: [__webpack_require__(/*! ./view-latest-news.component.css */ "./src/app/Home/view-latest-news/view-latest-news.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ViewLatestNewsComponent);
    return ViewLatestNewsComponent;
}());



/***/ }),

/***/ "./src/app/Home/view-navigation-home/view-navigation-home.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/Home/view-navigation-home/view-navigation-home.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-btn{\n    border-radius: 5px;\n    color: #96B7C9;\n    background-color: #F1F8FC;\n}\n.custom-btn:hover{\n    background-color: white;\n    color: #0E425F;\n    border: 1px solid #bddef1;\n}\n.active{\n    background-color: white !important;\n    color: #0E425F;\n    border: 1px solid #bddef1;\n}\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSG9tZS92aWV3LW5hdmlnYXRpb24taG9tZS92aWV3LW5hdmlnYXRpb24taG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsY0FBYztJQUNkLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL0hvbWUvdmlldy1uYXZpZ2F0aW9uLWhvbWUvdmlldy1uYXZpZ2F0aW9uLWhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b20tYnRue1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBjb2xvcjogIzk2QjdDOTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjFGOEZDO1xufVxuLmN1c3RvbS1idG46aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6ICMwRTQyNUY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2JkZGVmMTtcbn1cblxuLmFjdGl2ZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjMEU0MjVGO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZGRlZjE7XG59XG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/Home/view-navigation-home/view-navigation-home.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/Home/view-navigation-home/view-navigation-home.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"height:100vh;\">\n\n  <app-top-bar [viewName]=\"'Home'\" [headerText]=\"headerText\"></app-top-bar>\n\n  <div class=\"row page-content\">\n    <div class=\"col-12 col-lg-3\" style=\"background-color:#F1F8FC; border-bottom:1px solid #DAE6ED;\">\n      <div class=\"my-3 px-1\">\n        <button class=\"btn btn-block custom-btn text-left mr-4 my-2 p-3\" (click)=\"showHomeView()\"\n        [ngClass]=\"{ 'active': HomeView.current }\">Latest News</button>\n        <button class=\"btn btn-block custom-btn text-left my-2 p-3\" (click)=\"showFriendsView()\"\n        [ngClass]=\"{ 'active': FriendsView.current }\">Connections</button>\n        <button class=\"btn btn-block custom-btn text-left my-2 p-3\" (click)=\"showProfileView()\"\n        [ngClass]=\"{ 'active': ProfileView.current }\">My Profile</button>\n      </div>\n    </div>\n\n    <div class=\"col-12 col-lg-9\" style=\"background-color: #fafdff; border-left:1px solid #DAE6ED;\">\n      <div *ngIf=\"HomeView.current\">\n        <app-view-latest-news></app-view-latest-news>\n      </div>\n      <div *ngIf=\"FriendsView.current\">\n        <app-view-friends-home></app-view-friends-home>\n      </div>\n      <div *ngIf=\"ProfileView.current\">\n        <app-profile></app-profile>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Home/view-navigation-home/view-navigation-home.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/Home/view-navigation-home/view-navigation-home.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ViewNavigationHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewNavigationHomeComponent", function() { return ViewNavigationHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewNavigationHomeComponent = /** @class */ (function () {
    function ViewNavigationHomeComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.HomeView = { id: 1, name: 'Latest News', current: false };
        this.FriendsView = { id: 2, name: 'Connections', current: false };
        this.ProfileView = { id: 3, name: 'Profile', current: false };
        this.views = [this.HomeView, this.FriendsView, this.ProfileView];
    }
    ViewNavigationHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.HomeView.current = true;
        this.headerText = this.HomeView.name;
        // [routerLink]="['/home']" [queryParams]="{view:'param'}"
        this.activatedRoute.queryParams.subscribe(function (params) {
            var view = params['view'];
            _this.handleViewParam(view);
        });
    };
    // Display home view
    ViewNavigationHomeComponent.prototype.showHomeView = function () {
        this.showPage(this.HomeView.id);
    };
    // Display friends view
    ViewNavigationHomeComponent.prototype.showFriendsView = function () {
        this.showPage(this.FriendsView.id);
    };
    // Display profile view
    ViewNavigationHomeComponent.prototype.showProfileView = function () {
        this.showPage(this.ProfileView.id);
    };
    // Display view by id
    ViewNavigationHomeComponent.prototype.showPage = function (_id) {
        this.hideAllViews();
        switch (_id) {
            case 2:
                this.FriendsView.current = true;
                this.headerText = this.FriendsView.name;
                break;
            case 3:
                this.ProfileView.current = true;
                this.headerText = this.ProfileView.name;
                break;
            default:
                this.HomeView.current = true;
                this.headerText = this.HomeView.name;
                break;
        }
    };
    // Hide all home views
    ViewNavigationHomeComponent.prototype.hideAllViews = function () {
        this.views.forEach(function (view) {
            view.current = false;
        });
    };
    // Display views based on url param
    ViewNavigationHomeComponent.prototype.handleViewParam = function (param) {
        switch (param) {
            case 'profile':
                this.showProfileView();
                break;
            case 'connections':
                this.showFriendsView();
                break;
            default:
                this.showHomeView();
                break;
        }
    };
    ViewNavigationHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-navigation-home',
            template: __webpack_require__(/*! ./view-navigation-home.component.html */ "./src/app/Home/view-navigation-home/view-navigation-home.component.html"),
            styles: [__webpack_require__(/*! ./view-navigation-home.component.css */ "./src/app/Home/view-navigation-home/view-navigation-home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ViewNavigationHomeComponent);
    return ViewNavigationHomeComponent;
}());



/***/ }),

/***/ "./src/app/Onboarding/forgot/forgot.component.css":
/*!********************************************************!*\
  !*** ./src/app/Onboarding/forgot/forgot.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n    font-family: 'Poppins', sans-serif;\n}\n\n::-webkit-input-placeholder { \n    color: #96B7C9;\n    opacity: 1; \n  }\n\n:-ms-input-placeholder { \n    color: #96B7C9;\n    opacity: 1; \n  }\n\n::-ms-input-placeholder { \n    color: #96B7C9;\n    opacity: 1; \n  }\n\n::placeholder { \n    color: #96B7C9;\n    opacity: 1; \n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvT25ib2FyZGluZy9mb3Jnb3QvZm9yZ290LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsVUFBVTtFQUNaOztBQUhGO0lBQ0ksY0FBYztJQUNkLFVBQVU7RUFDWjs7QUFIRjtJQUNJLGNBQWM7SUFDZCxVQUFVO0VBQ1o7O0FBSEY7SUFDSSxjQUFjO0lBQ2QsVUFBVTtFQUNaIiwiZmlsZSI6InNyYy9hcHAvT25ib2FyZGluZy9mb3Jnb3QvZm9yZ290LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xufVxuXG46OnBsYWNlaG9sZGVyIHsgXG4gICAgY29sb3I6ICM5NkI3Qzk7XG4gICAgb3BhY2l0eTogMTsgXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/Onboarding/forgot/forgot.component.html":
/*!*********************************************************!*\
  !*** ./src/app/Onboarding/forgot/forgot.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n  <!-- Main Container Div -->\n  <section class=\"d-flex align-items-center\" style=\"margin-top: 40px; margin-bottom: 20px;\">\n      <div class=\"container-fluid\">\n        <div class=\"row text-center\">\n          <div class=\"col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-4 offset-lg-4\">\n            <div>\n              <img src=\"/assets/images/forgot_circle-lock.png\" alt=\"Circle Lock\">\n            </div>\n            <div class=\"px-5\">\n              <p class=\"text-secondary mt-5 text-strong\">Trouble logging in?</p>\n              <p class=\"text-light\">Enter Your Email And We'll Send You A Link To Get Back Into Your Account.</p>\n            </div>\n            <form [formGroup]=\"forgotForm\" (ngSubmit)=\"onSubmit()\">\n              <div class=\"justify-content-center px-4 py-3\">\n                <div class=\"form-group\">\n                  <input type=\"email\" class=\"form-control\" id=\"emailInput\"\n                    aria-describedby=\"emailHelp\" placeholder=\"Email\" formControlName=\"email\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\n                  <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback text-left\">\n                    <div *ngIf=\"f.email.errors.required\">Please provide your email.</div>\n                    <div *ngIf=\"f.email.errors.email || f.email.errors.pattern\">The email {{ f.email.value }} is invalid.</div>\n                  </div>\n\n                  <button type=\"submit\" class=\"btn btn-primary btn-block mt-3 py-3\" value=\"Send Email\">SEND LOGIN LINK</button>\n                </div>\n              </div>\n            </form>\n            <div>\n              <p class=\"mb-4\">OR</p>\n              <a [routerLink]=\"['/signup']\"><p class=\"text-primary\">CREATE NEW ACCOUNT</p></a>\n            </div>\n            <div class=\"mt-5\">\n              <a [routerLink]=\"['/login']\"><p class=\"mt-5\" style=\"color: #115073; font-weight: bold;\"><i class=\"fas fa-long-arrow-left\"></i> <span class=\"pl-3\">BACK TO LOGIN</span></p></a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n    <app-footer></app-footer>\n</body>"

/***/ }),

/***/ "./src/app/Onboarding/forgot/forgot.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/Onboarding/forgot/forgot.component.ts ***!
  \*******************************************************/
/*! exports provided: ForgotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotComponent", function() { return ForgotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Core_models_form_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Core/_models/form-validation */ "./src/app/Core/_models/form-validation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForgotComponent = /** @class */ (function () {
    function ForgotComponent(formBuilder, route, router) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.loading = false;
        this.submitted = false;
        this.appTitle = 'Forgot Password';
        this.formValidation = new _Core_models_form_validation__WEBPACK_IMPORTED_MODULE_3__["CustomFormValidation"]();
    }
    ForgotComponent.prototype.ngOnInit = function () {
        this.forgotForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.formValidation.regularEmailValidation)])]
        });
        this.returnUrl = '/';
    };
    Object.defineProperty(ForgotComponent.prototype, "f", {
        // Convenience getter for easy access to form fields
        get: function () { return this.forgotForm.controls; },
        enumerable: true,
        configurable: true
    });
    ForgotComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.loading = true;
        // http.post(`${environment.apiUrl}/recovery/forgot`);
        // stop here if form is invalid
        if (this.forgotForm.invalid) {
            this.loading = false;
            return;
        }
        // Create obj to hold formdata
        var formData = new FormData();
        // Append input to form data
        formData.append('password', this.forgotForm.get('email').value);
        this.loading = false;
    };
    ForgotComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot',
            template: __webpack_require__(/*! ./forgot.component.html */ "./src/app/Onboarding/forgot/forgot.component.html"),
            styles: [__webpack_require__(/*! ./forgot.component.css */ "./src/app/Onboarding/forgot/forgot.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ForgotComponent);
    return ForgotComponent;
}());



/***/ }),

/***/ "./src/app/Onboarding/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/Onboarding/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::-webkit-input-placeholder { \n    color: #96B7C9;\n    opacity: 1; \n  }\n:-ms-input-placeholder { \n    color: #96B7C9;\n    opacity: 1; \n  }\n::-ms-input-placeholder { \n    color: #96B7C9;\n    opacity: 1; \n  }\n::placeholder { \n    color: #96B7C9;\n    opacity: 1; \n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvT25ib2FyZGluZy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLFVBQVU7RUFDWjtBQUhGO0lBQ0ksY0FBYztJQUNkLFVBQVU7RUFDWjtBQUhGO0lBQ0ksY0FBYztJQUNkLFVBQVU7RUFDWjtBQUhGO0lBQ0ksY0FBYztJQUNkLFVBQVU7RUFDWiIsImZpbGUiOiJzcmMvYXBwL09uYm9hcmRpbmcvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6cGxhY2Vob2xkZXIgeyBcbiAgICBjb2xvcjogIzk2QjdDOTtcbiAgICBvcGFjaXR5OiAxOyBcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/Onboarding/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/Onboarding/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n    <div class=\"container my-4 pt-5 pb-3\">\n        <!-- Title header -->\n        <div class=\"row\">\n            <div class=\"col-12 col-lg-8 offset-lg-2 text-center\">\n                <img src=\"/assets/images/logo-mark-64.png\" class=\"img-fluid img-responsive mx-auto mb-4\" width=\"64px\"\n                    alt=\"Chatversity Logo Mark\">\n                <h1 class=\"text-center h4 text-secondary\">Login to Chatversity</h1>\n            </div>\n        </div>\n        <!-- Login Form -->\n        <div class=\"row mt-5\">\n            <div class=\"col-12 col-md-8 offset-md-2 col-lg-4 offset-lg-4\">\n                <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n                    <div *ngIf=\"submitted && f.username.errors\">\n                        <div *ngIf=\"f.username.errors.invalid\" class=\"alert alert-danger\" role=\"alert\">Incorrect\n                            username or password.</div>\n                    </div>\n\n                    <!-- Username -->\n                    <div class=\"form-group\">\n                        <label for=\"username\" class=\"text-secondary\">Username</label>\n                        <input type=\"text\" name=\"username\" formControlName=\"username\" placeholder=\"Enter your username\"\n                            class=\"form-control\" tabindex=1 [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n                        <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.username.errors.required\">Username is required.</div>\n                            <div *ngIf=\"f.username.errors.email || f.username.errors.pattern\">The username {{ f.username.value }} is invalid.</div>\n                        </div>\n                    </div>\n\n                    <!-- Password -->\n                    <div class=\"form-group\">\n                        <div class=\"row\">\n                            <div class=\"col-6\">\n                                <label for=\"password\" class=\"text-secondary\">Password</label>\n                            </div>\n                            <div class=\"col-6 text-right\">\n                                <a [routerLink]=\"['/forgot']\" class=\"small\"tabindex=7>Forgot Password?</a>\n                            </div>\n                        </div>\n                        <input type=\"password\" formControlName=\"password\" placeholder=\"Enter your password\"\n                            class=\"form-control\" tabindex=2 [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.password.errors.required\">Password is required.</div>\n                        </div>\n                        <button [disabled]=\"loading\" class=\"btn btn-login btn-primary btn-block mt-4 py-3\" tabindex=3><span *ngIf=\"!loading\">LOGIN</span>\n                            <div *ngIf=\"loading\" class=\"spinner-border text-whiet\" role=\"status\">\n                                <span class=\"sr-only\">Loading...</span>\n                            </div>\n                        </button>\n                        \n                    </div>\n                </form>\n            </div>\n            <!-- Signup link -->\n            <div class=\"col-12\">\n                <p class=\"text-center text-secondary\">New to Chatversity? &nbsp; <a [routerLink]=\"['/signup']\" tabindex=4>Sign up</a></p>\n            </div>\n        </div>\n        <!-- Google Play and Apple Store Badges -->\n        <div class=\"col-8 offset-2 mt-3\">\n            <div class=\"row\">\n                <div class=\"col-6 col-lg-3 offset-lg-3\">\n                    <a href=\"#\"tabindex=5>\n                        <img src=\"/assets/images/GooglePlayBadge.png\" class=\"img-fluid img-responsive mx-auto\"\n                            style=\"min-width: 75px; min-height: 30px;\">\n                    </a>\n                </div>\n                <div class=\"col-6 col-lg-3\"tabindex=6>\n                    <a href=\"#\">\n                        <img src=\"/assets/images/AppStoreBadge.png\" class=\"img-fluid img-responsive mx-auto\"\n                            style=\"min-width: 75px; min-height: 30px;\">\n                    </a>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <footer>\n        <!-- import footer -->\n        <app-footer></app-footer>\n    </footer>\n</body>"

/***/ }),

/***/ "./src/app/Onboarding/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/Onboarding/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Core/_services/auth.service */ "./src/app/Core/_services/auth.service.ts");
/* harmony import */ var _Core_models_form_validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Core/_models/form-validation */ "./src/app/Core/_models/form-validation.ts");
/* harmony import */ var _Core_services_messaging_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Core/_services/messaging.service */ "./src/app/Core/_services/messaging.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};
var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, router, authService, messageService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.messageService = messageService;
        this.loading = false;
        this.submitted = false;
        this.returnUrl = 'home';
        this.formValidation = new _Core_models_form_validation__WEBPACK_IMPORTED_MODULE_5__["CustomFormValidation"]();
    }
    LoginComponent.prototype.ngOnInit = function () {
        // TODO: Check if already logged in, redirect
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.formValidation.regularEmailValidation)
                ])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    //
    // ─── HANDLE LOGIN FORM ──────────────────────────────────────────────────────────
    //
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        this.loading = true;
        // Stop here if form is invalid
        if (this.loginForm.invalid) {
            this.loading = false;
            return;
        }
        // Create obj to hold formdata
        var formData = new FormData();
        // Append username and password to form data
        formData.append('username', this.loginForm.get('username').value);
        formData.append('password', this.loginForm.get('password').value);
        this.authService.login(this.f.username.value, this.f.password.value).then(function (oktaUser) {
            console.log("Logged in as " + oktaUser._embedded.user.profile.firstName);
            console.log('Connecting to ChatKit...');
            /*******************/
            /* Begin App setup */
            /*******************/
            // Initialize Chatkit
            _this.messageService.initChatkit(oktaUser._embedded.user.id)
                .then(function (chatkitUser) {
                _this.authService.currentUser = chatkitUser;
                console.log(_this.authService.currentUser);
                _this.router.navigate([_this.returnUrl]);
            });
        }, function (error) {
            console.log('LOGIN ERROR:', error);
            _this.loading = false;
            _this.f.username.setErrors({ invalid: true });
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/Onboarding/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/Onboarding/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _Core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _Core_services_messaging_service__WEBPACK_IMPORTED_MODULE_6__["MessagingService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/Onboarding/new-user/new-user.component.css":
/*!************************************************************!*\
  !*** ./src/app/Onboarding/new-user/new-user.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".styled-btn{\n    height: 50px;\n    width: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvT25ib2FyZGluZy9uZXctdXNlci9uZXctdXNlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9PbmJvYXJkaW5nL25ldy11c2VyL25ldy11c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3R5bGVkLWJ0bntcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDE1MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/Onboarding/new-user/new-user.component.html":
/*!*************************************************************!*\
  !*** ./src/app/Onboarding/new-user/new-user.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container w-100 h-100\" style=\"background-color: white;\">\n    <div class=\"row\">\n      <div class=\"col-12 text-center mt-5\">\n        <div class=\"mt-5\">\n            <p class=\"h1 text-secondary my-5 text-strong\">Thank you for signing up with <span class=\"text-primary\">Chatversity</span> \n              <img src=\"/assets/images/logo-mark-64.png\" class=\"img-fluid img-responsive mx-auto mb-3\" width=\"64px\" style=\"padding-left:10px;\"\n              alt=\"Chatversity Logo Mark\">\n            </p>\n\n            <div style=\"margin-top: 10%;\">\n                <p class=\"text-light\" style=\"font-size:1.2em;\">\n                  Would you like to set up your profile now?\n                </p>\n                <div class=\"mt-5\">\n                  <a [routerLink]=\"['/settings']\" [queryParams]=\"{view:'profile'}\"><button class=\"btn btn-primary mt-2 styled-btn\">Yes</button></a> &nbsp;\n                  <a [routerLink]=\"['/home']\"><button class=\"btn btn-outline-primary mt-2 styled-btn\">No</button></a>\n                </div>\n            </div>\n        </div>\n      </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Onboarding/new-user/new-user.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/Onboarding/new-user/new-user.component.ts ***!
  \***********************************************************/
/*! exports provided: NewUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewUserComponent", function() { return NewUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewUserComponent = /** @class */ (function () {
    function NewUserComponent() {
    }
    NewUserComponent.prototype.ngOnInit = function () {
    };
    NewUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-user',
            template: __webpack_require__(/*! ./new-user.component.html */ "./src/app/Onboarding/new-user/new-user.component.html"),
            styles: [__webpack_require__(/*! ./new-user.component.css */ "./src/app/Onboarding/new-user/new-user.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NewUserComponent);
    return NewUserComponent;
}());



/***/ }),

/***/ "./src/app/Onboarding/signup/signup.component.css":
/*!********************************************************!*\
  !*** ./src/app/Onboarding/signup/signup.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".signup-pic{\n  background: url('signup-pic-100.png'); \n  background-size: cover;\n  height: 100vh;\n  background-repeat: no-repeat;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n}\n.col-override{\n  padding: 0;\n  max-width: 100%;\n}\n.signup-text{\n  padding-left: 0%;\n  padding-top: 50%;\n  text-align: center;\n}\n.pic-title{\n  font-size: 2.5rem;\n  margin-bottom: 15px;\n}\n.pic-msg{\n  display: none;\n}\n.pic-msg-mobile{\n  display: block;\n}\n.signup-btn{\n  display: inline-block;\n}\n.offset-override{\n  max-width: 500px;\n  margin-right: 0%;\n  margin-left: 0%;\n  margin: 0 auto;\n}\n.primary-border{\n  border: 1px solid rgba(38, 177, 255, .35);\n}\n.danger-border{\n  border: 1px solid #ff4136;\n}\n::-webkit-input-placeholder { \n  color: #96B7C9;\n  opacity: 1; \n}\n:-ms-input-placeholder { \n  color: #96B7C9;\n  opacity: 1; \n}\n::-ms-input-placeholder { \n  color: #96B7C9;\n  opacity: 1; \n}\n::placeholder { \n  color: #96B7C9;\n  opacity: 1; \n}\ninput[readonly] {\n  background-color: white;\n}\n@media (min-width: 576px){ /*Small*/\n  .signup-text{\n    padding-top: 30%;\n  }\n}\n@media (min-width: 768px){ /*Medium*/\n  .col-override{\n    max-width: 570px;\n  }\n  .signup-text{\n    padding-left: 10%;\n    padding-top: 70%;\n    text-align: left;\n  }\n  .signup-btn{\n    display: none;\n  }\n  .pic-title{\n    font-size: 1.5rem;\n    margin-bottom: 5px;\n  }\n  .pic-msg{\n    display: block;\n  }\n  .pic-msg-mobile{\n    display: none;\n  }\n  .offset-override{\n    margin-right: 3%;\n    margin-left: 3%;\n  }\n  .mobile-fixed{\n    position: relative;\n  }\n}\n@media (min-width: 992px){ /*Large*/\n  .offset-override{\n    margin-right: 8%;\n    margin-left: 8%;\n  }\n}\n@media (min-width: 1200px){ /*Extra-Large*/\n  .offset-override{\n    margin-right: 10%;\n    margin-left: 10%;\n    margin: 0 auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvT25ib2FyZGluZy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQ0FBNEQ7RUFDNUQsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixNQUFNO0FBQ1I7QUFDQTtFQUNFLFVBQVU7RUFDVixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGNBQWM7QUFDaEI7QUFFQTtFQUNFLHlDQUF5QztBQUMzQztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsVUFBVTtBQUNaO0FBSEE7RUFDRSxjQUFjO0VBQ2QsVUFBVTtBQUNaO0FBSEE7RUFDRSxjQUFjO0VBQ2QsVUFBVTtBQUNaO0FBSEE7RUFDRSxjQUFjO0VBQ2QsVUFBVTtBQUNaO0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7QUFFQSwyQkFBMkIsUUFBUTtFQUNqQztJQUNFLGdCQUFnQjtFQUNsQjtBQUNGO0FBRUEsMkJBQTJCLFNBQVM7RUFDbEM7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGO0FBRUEsMkJBQTJCLFFBQVE7RUFDakM7SUFDRSxnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjtBQUNGO0FBRUEsNEJBQTRCLGNBQWM7RUFDeEM7SUFDRSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGNBQWM7RUFDaEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL09uYm9hcmRpbmcvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZ251cC1waWN7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zaWdudXAtcGljLTEwMC5wbmcnKTsgXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbn1cbi5jb2wtb3ZlcnJpZGV7XG4gIHBhZGRpbmc6IDA7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cbi5zaWdudXAtdGV4dHtcbiAgcGFkZGluZy1sZWZ0OiAwJTtcbiAgcGFkZGluZy10b3A6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnBpYy10aXRsZXtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4ucGljLW1zZ3tcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5waWMtbXNnLW1vYmlsZXtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uc2lnbnVwLWJ0bntcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ub2Zmc2V0LW92ZXJyaWRle1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDAlO1xuICBtYXJnaW4tbGVmdDogMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4ucHJpbWFyeS1ib3JkZXJ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMzgsIDE3NywgMjU1LCAuMzUpO1xufVxuXG4uZGFuZ2VyLWJvcmRlcntcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmNDEzNjtcbn1cblxuOjpwbGFjZWhvbGRlciB7IFxuICBjb2xvcjogIzk2QjdDOTtcbiAgb3BhY2l0eTogMTsgXG59XG5cbmlucHV0W3JlYWRvbmx5XSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpeyAvKlNtYWxsKi9cbiAgLnNpZ251cC10ZXh0e1xuICAgIHBhZGRpbmctdG9wOiAzMCU7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KXsgLypNZWRpdW0qL1xuICAuY29sLW92ZXJyaWRle1xuICAgIG1heC13aWR0aDogNTcwcHg7XG4gIH1cbiAgLnNpZ251cC10ZXh0e1xuICAgIHBhZGRpbmctbGVmdDogMTAlO1xuICAgIHBhZGRpbmctdG9wOiA3MCU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuICAuc2lnbnVwLWJ0bntcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5waWMtdGl0bGV7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG4gIC5waWMtbXNne1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5waWMtbXNnLW1vYmlsZXtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5vZmZzZXQtb3ZlcnJpZGV7XG4gICAgbWFyZ2luLXJpZ2h0OiAzJTtcbiAgICBtYXJnaW4tbGVmdDogMyU7XG4gIH1cbiAgLm1vYmlsZS1maXhlZHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KXsgLypMYXJnZSovXG4gIC5vZmZzZXQtb3ZlcnJpZGV7XG4gICAgbWFyZ2luLXJpZ2h0OiA4JTtcbiAgICBtYXJnaW4tbGVmdDogOCU7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCl7IC8qRXh0cmEtTGFyZ2UqL1xuICAub2Zmc2V0LW92ZXJyaWRle1xuICAgIG1hcmdpbi1yaWdodDogMTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/Onboarding/signup/signup.component.html":
/*!*********************************************************!*\
  !*** ./src/app/Onboarding/signup/signup.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n\n<head>\n  <link href=\"https://fonts.googleapis.com/css?family=Nunito|Poppins|Roboto\" rel=\"stylesheet\">\n</head>\n\n<body>\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <!--Sign Up Picture-->\n      <div class=\"col col-12 col-md col-lg col-override\" style=\"min-height: 100vh;\">\n        <div class=\"signup-pic\">\n          <div class=\"signup-text\">\n            <h4 class=\"text-white text-strong pb-2 pic-title\">Chatversity</h4>\n            <h5 class=\"text-secondary text-strong pic-msg-mobile\">Simplifying Communication</h5>\n            <h1 class=\"text-secondary text-strong pic-msg\">Simplifying <br/> Communication.</h1>\n\n            <div class=\"mt-5 signup-btn\">\n                <button id=\"signup-button\" class=\"btn btn-secondary mt-5 px-4 py-3\"\n                onclick=\"document.getElementById('signup-top').scrollIntoView();\">Sign Up Today!</button>\n            </div>\n          </div>\n        </div>\n      </div> \n\n      <!--Sign Up Form-->\n      <div class=\"col col-12 col-md col-lg offset-override\" style=\"min-height: 100vh;\">\n        <div class=\"w-100 mx-auto text-center mb-5 mt-4\">\n          <img src=\"../../../../assets/images/Logo-Name.png\" class=\"img-fluid img-responsive mx-auto w-75\" id=\"signup-top\"/>\n        </div>\n        <form [formGroup]=\"signupForm\" (ngSubmit)=\"onSubmit()\">\n\n            <!--Summary Error Alert-->\n          <div *ngIf=\"submitted && checkForFormErrors()\">\n              <!--<div *ngIf=\"f.username.errors.invalid\" class=\"alert alert-danger\" role=\"alert\">The username {{ f.username.value }} is invalid.</div>\n              <div *ngIf=\"f.password.errors.invalid\" class=\"alert alert-danger\" role=\"alert\">Your password is too weak.</div>-->\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-12 col-sm-6 col-md-6\">\n  \n              <!--First Name-->\n              <div class=\"form-group mb-3\">\n                <label for=\"firstname\" class=\"text-secondary\">First Name <span class=\"text-danger\">*</span></label>\n                <input type=\"text\" required class=\"form-control primary-border\" id=\"firstname\" name=\"firstname\" placeholder=\"John\" \n                formControlName=\"firstname\" maxlength=\"30\"\n                [ngClass]=\"{ 'is-invalid': submitted && f.firstname.errors, 'danger-border': submitted && f.firstname.errors }\">\n\n                <div *ngIf=\"submitted && f.firstname.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.firstname.errors.required\">Please provide your first name.</div>\n                </div>\n                </div>\n              </div>\n  \n              <!--Last Name-->\n              <div class=\"col-12 col-sm-6 col-md-6\">\n                <div class=\"form-group mb-3\">\n                  <label for=\"lastname\" class=\"text-secondary\">Last Name <span class=\"text-danger\">*</span></label>\n                  <input type=\"text\" required class=\"form-control primary-border\" id=\"lastname\" name=\"lastname\" placeholder=\"Doe\" \n                  formControlName=\"lastname\" maxlength=\"30\"\n                  [ngClass]=\"{ 'is-invalid': submitted && f.lastname.errors, 'danger-border': submitted && f.lastname.errors }\">\n\n                <div *ngIf=\"submitted && f.lastname.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.lastname.errors.required\">Please provide your last name.</div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n            <!--Username (Email) Textbox-->\n            <div class=\"form-group mb-3\">\n                <label for=\"username\" class=\"text-secondary\">Email <span class=\"text-danger\">*</span></label>\n                <input type=\"email\" required name=\"username\" formControlName=\"username\" placeholder=\"you@university.edu\" \n                    class=\"form-control primary-border\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.username.errors, 'danger-border': submitted && f.username.errors }\"\n                    (change)=\"getUniversity(f.username.value)\" />\n                  <div class=\"text-primary\" *ngIf=\"!submitted || !f.username.errors\">\n                    <small><span class=\"text-danger\">*</span> PLEASE ENTER YOUR SCHOOL EMAIL</small>\n                  </div>\n                    <!-- TODO: Add search university filter here -->\n                  \n                <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.username.errors.required\">Please provide your school email.</div>\n                    <div *ngIf=\"f.username.errors.email || f.username.errors.pattern\">The username {{ f.username.value }} is invalid.</div>\n                </div>\n            </div>\n\n            <!--University Select-->\n            <div class=\"form-group mb-3\">\n              <label for=\"university\" class=\"text-secondary\">University <span class=\"text-danger\">*</span></label>\n              <input type=\"text\" [readonly]=\"true\" name=\"university\" required formControlName=\"university\" class=\"form-control primary-border\"\n                  placeholder=\"University of Michigan\" (change)=\"userUpdateUniversity(f.university.value)\"\n                  [ngClass]=\"{ 'is-invalid': submitted && f.university.errors, 'danger-border': submitted && f.university.errors }\">\n\n              <div *ngIf=\"submitted && f.university.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.university.errors.required\">Please provide your university.</div>\n                  <div *ngIf=\"f.university.errors.invalid\">Invalid university.</div>\n              </div>\n          </div>\n\n            <!--Password-->\n            <div class=\"form-group\">\n                <label for=\"password\" class=\"text-secondary\">Password <span class=\"text-danger\">*</span></label>\n                <input type=\"password\" required formControlName=\"password\" placeholder=\"Create a password\"\n                    class=\"form-control primary-border\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors, 'danger-border': submitted && f.password.errors }\" />\n                \n                <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.password.errors.required\">Please choose a password.</div>\n                    <div *ngIf=\"f.password.errors.minlength || f.password.errors.pattern\">Your password must have atleast: <br>\n                      <div style=\"padding-left:20px\">▶&nbsp; 8 characters <br> ▶&nbsp; 1 uppercase letter <br> ▶&nbsp; 1 number</div>\n                    </div>\n                </div>\n\n                <button [disabled]=\"loading\" class=\"btn btn-login btn-primary btn-block mt-4 py-3\"><span *ngIf=\"!loading\">SIGN UP FOR CHATVERSITY</span>\n                  <div *ngIf=\"loading\" class=\"spinner-border text-whiet\" role=\"status\">\n                    <span class=\"sr-only\">Loading...</span>\n                  </div>\n                </button>\n\n            </div>\n\n            <div class=\"text-secondary text-center my-4\">\n                Already have an account? &nbsp; <a [routerLink]=\"['/login']\" class=\"text-primary\">Login</a>\n            </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</body>\n</html>"

/***/ }),

/***/ "./src/app/Onboarding/signup/signup.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/Onboarding/signup/signup.component.ts ***!
  \*******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Core/_services/auth.service */ "./src/app/Core/_services/auth.service.ts");
/* harmony import */ var _Core_models_form_validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Core/_models/form-validation */ "./src/app/Core/_models/form-validation.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};
var SignupComponent = /** @class */ (function () {
    function SignupComponent(formBuilder, router, auth, http) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.auth = auth;
        this.http = http;
        this.loading = false;
        this.submitted = false;
        this.searchingForSchool = false;
        this.wrongUniversity = false;
        this.formValidation = new _Core_models_form_validation__WEBPACK_IMPORTED_MODULE_5__["CustomFormValidation"]();
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.signupForm = this.formBuilder.group({
            firstname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            university: [this.guessUniversity, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.formValidation.eduEmailValidation)
                ])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.formValidation.passwordValidation)
                ])]
        });
        this.returnUrl = '/new-user';
    };
    //
    // ─── CHECK FOR USERNAME OR PASSWORD ERRORS ──────────────────────────────────────
    //
    SignupComponent.prototype.checkForFormErrors = function () {
        if (this.f.username.errors || this.f.password.errors) {
            return true;
        }
        return false;
    };
    Object.defineProperty(SignupComponent.prototype, "f", {
        //
        // ─── CONVENIENCE GETTER FOR EASY ACCESS TO FORM FIELDS ──────────────────────────
        //
        get: function () { return this.signupForm.controls; },
        enumerable: true,
        configurable: true
    });
    //
    // ─── VALIDATE UNIVERSITY WITH JSON STORE ──────────────────────────────────────
    //
    SignupComponent.prototype.validateUniversity = function (query) {
        var _this = this;
        this.searchingForSchool = true;
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + "/university/name/" + query)
            .toPromise()
            .then(function (university) {
            return university;
        })
            .catch(function (error) {
            _this.searchingForSchool = false;
            return null;
        });
    };
    //
    // ─── SEARCH FOR UNIVERSITY FROM JSON STORE ──────────────────────────────────────
    //
    SignupComponent.prototype.findUniversity = function (query) {
        var _this = this;
        this.searchingForSchool = true;
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + "/university/" + query)
            .toPromise()
            .then(function (university) {
            return university;
        })
            .catch(function (error) {
            _this.searchingForSchool = false;
            return null;
        });
    };
    //
    // ─── GET UNIVERSITY BY DOMAIN ──────────────────────────────────────
    //
    SignupComponent.prototype.getUniversity = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = new Object();
                        return [4 /*yield*/, this.findUniversity(query)];
                    case 1:
                        data = _a.sent();
                        if (data) {
                            this.guessUniversity = data['name'];
                            this.signupForm.get('university').setValue(this.guessUniversity);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    //
    // ─── UPDATE UNIVERSITY IF USER CHANGES INPUT ──────────────────────────────────────
    //
    SignupComponent.prototype.userUpdateUniversity = function (newUniversity) {
        var _this = this;
        this.guessUniversity = newUniversity;
        this.validateUniversity(this.guessUniversity)
            .then(function (result) {
            if (!result) {
                _this.f.university.setErrors({ 'invalid': true });
            }
        });
    };
    //
    // ─── HANDLE SIGN UP ─────────────────────────────────────────────────────────────
    //
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        this.loading = true;
        // stop here if form is invalid
        if (this.signupForm.invalid) {
            this.loading = false;
            return;
        }
        // Create obj to hold formdata
        var formData = new FormData();
        // Append input to form data
        formData.append('firstname', this.signupForm.get('firstname').value);
        formData.append('lastname', this.signupForm.get('lastname').value);
        formData.append('university', this.guessUniversity);
        formData.append('username', this.signupForm.get('username').value);
        formData.append('password', this.signupForm.get('password').value);
        this.auth.signup(this.f.firstname.value, this.f.lastname.value, this.guessUniversity, this.f.username.value, this.f.password.value)
            .then(function (data) {
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            console.log('SIGN UP ERROR:', error);
            _this.loading = false;
        });
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/Onboarding/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/Onboarding/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _Core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/Profile-Views/profile/profile.component.css":
/*!*************************************************************!*\
  !*** ./src/app/Profile-Views/profile/profile.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#user-image{\n    max-width: 200px;\n    max-height: 200px;\n    border: 1px solid #0E425F;\n}\n#profile-picture-container > img{\n    margin: left;\n}\n#profile-content{\n    margin-top: 20px;\n}\n@media (min-width: 992px){ /*Large*/\n    #profile-content{\n        margin-top: 0px;\n    }\n    #profile-picture-container > img{\n        margin: 0 auto;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUHJvZmlsZS1WaWV3cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQSwyQkFBMkIsUUFBUTtJQUMvQjtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL1Byb2ZpbGUtVmlld3MvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdXNlci1pbWFnZXtcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwRTQyNUY7XG59XG4jcHJvZmlsZS1waWN0dXJlLWNvbnRhaW5lciA+IGltZ3tcbiAgICBtYXJnaW46IGxlZnQ7XG59XG4jcHJvZmlsZS1jb250ZW50e1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpeyAvKkxhcmdlKi9cbiAgICAjcHJvZmlsZS1jb250ZW50e1xuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgfVxuICAgICNwcm9maWxlLXBpY3R1cmUtY29udGFpbmVyID4gaW1ne1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/Profile-Views/profile/profile.component.html":
/*!**************************************************************!*\
  !*** ./src/app/Profile-Views/profile/profile.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid py-3\">\n    <div class=\"text-center\">\n        <div class=\"row mt-5 mb-3\">\n            <div class=\"col-12 col-lg-4 mt-1 pr-2\" id=\"profile-picture-container\">\n                <!-- Profile Image -->\n                <img src=\"\" onerror=\"this.src='../../../assets/images/DefaultProfile.png'\" id=\"user-image\"\n                class=\"rounded img-fluid mb-1 d-block\" >\n            </div>\n\n            <div class=\"col-12 col-lg-7 text-left\" id=\"profile-content\">\n                <ng-container *ngIf=\"this.chatkitUser\">\n                    <!-- User Name -->\n                    <div class=\"h2 text-secondary text-light-weight\">{{ this.name }}</div>\n                    <!-- {{ this.user.avatarURL }} -->\n                    <!-- <ng-container *ngIf=\"this.user.presence.state\">\n                        User is online!\n                    </ng-container> -->\n\n                    <!-- User Major and Graduation Year -->\n                    <div>\n                        <span class=\"text-primary text-uppercase\" style=\"font-weight:100;\">{{ this.major }} &nbsp;|&nbsp; Class of {{ this.graduationYear }}</span><br>\n                    </div>\n    \n                    <!--User Bio-->\n                    <div class=\"text-left mt-3\">\n                        <p>{{this.bio}}</p> \n                    </div>\n    \n                    <!--User Clubs-->\n                    <div class=\"text-left\">\n                        <p><span class=\"text-secondary-light\">Clubs: &nbsp;</span> {{ this.clubs }}</p>\n                    </div>\n    \n                    <!--User Interests-->\n                    <div class=\"text-left\">\n                        <p><span class=\"text-secondary-light\">Interests: &nbsp;</span> {{ this.interests }}</p>\n                    </div>\n                </ng-container>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/Profile-Views/profile/profile.component.ts":
/*!************************************************************!*\
  !*** ./src/app/Profile-Views/profile/profile.component.ts ***!
  \************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Core/_services/auth.service */ "./src/app/Core/_services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService) {
        var _this = this;
        this.authService = authService;
        this.name = '';
        this.bio = '';
        this.major = '';
        this.graduationYear = '';
        this.interests = '';
        this.clubs = '';
        this.subscription = this.authService.currentUser.subscribe(function (user) {
            _this.currentUser = user;
            console.log('CHATKIT USER:', _this.currentUser);
            _this.initForm();
        });
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent.prototype.initForm = function () {
        try {
            this.name = this.currentUser.name;
        }
        catch (error) {
            this.name = '';
        }
        try {
            this.bio = this.currentUser.customData.bio;
        }
        catch (error) {
            this.bio = '';
        }
        try {
            this.major = this.currentUser.customData.major;
        }
        catch (error) {
            this.major = '';
        }
        try {
            this.graduationYear = this.currentUser.customData.graduationYear;
        }
        catch (error) {
            this.graduationYear = '';
        }
        try {
            this.interests = this.currentUser.customData.interests;
        }
        catch (error) {
            this.interests = '';
        }
        try {
            this.clubs = this.currentUser.customData.clubs;
        }
        catch (error) {
            this.clubs = '';
        }
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/Profile-Views/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/Profile-Views/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_Core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/Profile-Views/settings-profile/settings-profile.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/Profile-Views/settings-profile/settings-profile.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n\n      <!-- edit buttons -->\n      <div class=\"col-12 mt-4 mb-3\">\n\n        <!-- Button to show edit form -->\n        <button (click)=\"(editingForm == true ? onSubmit() : (editingForm = !editingForm))\" [ngClass]=\"{'btn-primary': editingForm, 'btn-outline-primary': !editingForm}\" class=\"btn px-3\">\n          <i class=\"fa fa-edit\" *ngIf=\"!editingForm\"></i> {{ editingForm == true ? 'Save Changes' : 'Edit Profile' }}\n        </button>\n  \n        <!-- Button to cancel form edit => only shown when form is displayed -->\n        <button (click)=\"editingForm = !editingForm\" *ngIf=\"editingForm\" class=\"btn btn-outline-primary ml-2 px-3\">\n          <i class=\"fa fa-times\"></i> Cancel\n        </button>\n\n      </div>\n      <!-- end edit buttons -->\n\n      <div class=\"col-12 col-sm-12 col-lg-8 my-3\">\n        <ng-container *ngIf=\"currentUser\">\n          <!-- BEGIN FORM -->\n          <form *ngIf=\"editingForm\" id=\"profileEditForm\" [formGroup]=\"profileForm\" (ngSubmit)=\"onSubmit()\">\n  \n            <div *ngIf=\"submitted && f.name.errors\">\n              <div class=\"alert alert-danger\" role=\"alert\">Unable to update profile.</div>\n            </div>\n            \n          <!--Name-->\n          <div class=\"form-group mb-3\">\n              <label for=\"name\" class=\"text-secondary\">Name \n                <span class=\"text-danger\" *ngIf=\"editMode\">*</span>\n              </label>\n              <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" placeholder=\"John Doe\" required\n              formControlName=\"name\" maxlength=\"60\"\n              [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\">\n  \n              <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.name.errors.required\">Please provide your name.</div>\n              </div>\n            </div>\n       \n            <!--Bio-->\n            <div class=\"form-group mb-3\">\n              <label for=\"bio\" class=\"text-secondary\">Bio</label>\n              <textarea class=\"form-control\" id=\"bio\" name=\"bio\" maxlength=\"200\" formControlName=\"bio\" data-gramm_editor=\"false\"></textarea>\n            </div>\n  \n            <div class=\"row\">\n              <div class=\"col-12 col-lg-8\">\n  \n                <!--Major-->\n                <div class=\"form-group mb-3\">\n                  <label for=\"major\" class=\"text-secondary\">Major</label>\n                  <input type=\"text\" class=\"form-control\" id=\"major\" name=\"major\" placeholder=\"Computer Science\" maxlength=\"100\"\n                  formControlName=\"major\">\n                </div>\n              </div>\n  \n              <!--Graduation Year-->\n              <div class=\"col-12 col-lg-4\">\n                <div class=\"form-group mb-3\">\n                  <label for=\"graduationYear\" class=\"text-secondary\">Graduation Year</label>\n                  <input type=\"number\" class=\"form-control\" id=\"graduationYear\" name=\"graduationYear\" placeholder=\"2025\"\n                  formControlName=\"graduationYear\">\n              </div>\n            </div>\n          </div>\n  \n            <!--Interests-->\n            <div class=\"form-group mb-3\">\n              <label for=\"major\" class=\"text-secondary\">Interests</label>\n              <input type=\"text\" class=\"form-control\" id=\"interests\" name=\"interests\" placeholder=\"What are your interests?\" maxlength=\"100\"\n              formControlName=\"interests\">\n            </div>\n  \n            <!--Clubs-->\n            <div class=\"form-group mb-3\">\n              <label for=\"clubs\" class=\"text-secondary\">Clubs</label>\n              <input type=\"text\" class=\"form-control\" id=\"clubs\" name=\"clubs\" placeholder=\"Which clubs are you involved in?\" maxlength=\"100\"\n              formControlName=\"clubs\">\n            </div>\n\n          </form>\n\n          <!-- BEGIN PROFILE DISPLAY -->\n          <div *ngIf=\"!editingForm\">\n\n            <!-- Profile Picture -->\n            <figure>\n              <img src=\"{{ currentUser.avatarURL }}\" alt=\"User Profile Picture\">\n              <input type=\"file\" name=\"filepond\" data-max-files=\"10\" required>\n              <!-- <file-pond #myPond \n                [options]=\"pondOptions\" \n                [files]=\"pondFiles\"\n                (oninit)=\"pondHandleInit()\"\n                (onaddfile)=\"pondHandleAddFile($event)\">\n              </file-pond> -->\n            </figure>\n\n            <!--Name-->\n            <div class=\"mb-3\">\n              <span class=\"no-edit-label text-uppercase\">Name</span> <br>\n              <span *ngIf=\"currentUser\">{{ currentUser.name }}</span>\n            </div>\n      \n            <!--Bio-->\n            <div class=\"mb-3\">\n              <span class=\"no-edit-label text-uppercase\">Bio</span> <br>\n              <span> {{ currentUser.customData.bio }}</span>\n            </div>\n            \n            <!--Major-->\n            <div class=\"mb-3\">\n              <span class=\"no-edit-label text-uppercase\">Major</span> <br>\n              <span> {{ currentUser.customData.major }}</span>\n            </div>\n\n            <!--Graduation Year-->\n            <div class=\"mb-3\">\n              <span class=\"no-edit-label text-uppercase\">Graduation Year</span> <br>\n              <span> {{ currentUser.customData.graduationYear }}</span>\n            </div>\n\n            <!--Interests-->\n            <div class=\"mb-3\">\n              <span class=\"no-edit-label text-uppercase\">Interests</span> <br>\n              <span> {{ currentUser.customData.interests }}</span>\n            </div>\n\n            <!--Clubs-->\n            <div class=\"mb-3\">\n              <span class=\"no-edit-label text-uppercase\">Clubs</span> <br>\n              <span> {{ this.currentUser.customData.clubs }}</span>\n            </div>\n\n          </div>\n        </ng-container>\n      </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Profile-Views/settings-profile/settings-profile.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/Profile-Views/settings-profile/settings-profile.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[disabled], textarea[disabled] {\n  background-color: #F1F8FC;\n  border: none;\n  border: 1px solid #DAE6ED;\n  resize: none; }\n\n.no-edit-label {\n  color: #186fa0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Db25ub3IvQ2hhdHZlcnNpdHlfQXBwL3NyYy9hcHAvUHJvZmlsZS1WaWV3cy9zZXR0aW5ncy1wcm9maWxlL3NldHRpbmdzLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLHlCQUF3QjtFQUN4QixZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvUHJvZmlsZS1WaWV3cy9zZXR0aW5ncy1wcm9maWxlL3NldHRpbmdzLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFtkaXNhYmxlZF0sIHRleHRhcmVhW2Rpc2FibGVkXSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YxRjhGQztcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjREFFNkVEO1xuICAgIHJlc2l6ZTogbm9uZTtcbn1cblxuLm5vLWVkaXQtbGFiZWx7XG4gICAgY29sb3I6ICMxODZmYTA7XG59Il19 */"

/***/ }),

/***/ "./src/app/Profile-Views/settings-profile/settings-profile.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/Profile-Views/settings-profile/settings-profile.component.ts ***!
  \******************************************************************************/
/*! exports provided: SettingsProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsProfileComponent", function() { return SettingsProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Core/_services/auth.service */ "./src/app/Core/_services/auth.service.ts");
/* harmony import */ var _Core_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Core/_services/user.service */ "./src/app/Core/_services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingsProfileComponent = /** @class */ (function () {
    function SettingsProfileComponent(formBuilder, authService, userService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.userService = userService;
        this.loading = false;
        this.submitted = false;
        this.editingForm = false;
        this.name = '';
        this.bio = '';
        this.major = '';
        this.graduationYear = '';
        this.interests = '';
        this.clubs = '';
        this.pondOptions = {
            class: 'my-filepond',
            multiple: true,
            labelIdle: 'Drop files here',
            acceptedFileTypes: 'image/jpeg, image/png'
        };
        this.pondFiles = [
            'index.html'
        ];
    }
    SettingsProfileComponent.prototype.pondHandleInit = function () {
        console.log('FilePond has initialised', this.myPond);
    };
    SettingsProfileComponent.prototype.pondHandleAddFile = function (event) {
        console.log('A file was added', event);
    };
    Object.defineProperty(SettingsProfileComponent.prototype, "f", {
        // Convenience getter for easy access to form fields
        get: function () { return this.profileForm.controls; },
        enumerable: true,
        configurable: true
    });
    // Validation and other actions upon form submission
    SettingsProfileComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        this.loading = true;
        // Stop here if form is invalid
        if (this.profileForm.invalid) {
            this.loading = false;
            console.log('ERROR: Form invalid');
            return;
        }
        // Get updated profile data from user
        var _name = this.profileForm.get('name').value;
        var _bio = this.profileForm.get('bio').value;
        var _major = this.profileForm.get('major').value;
        var _gradYr = this.profileForm.get('graduationYear').value;
        var _interests = this.profileForm.get('interests').value;
        var _clubs = this.profileForm.get('clubs').value;
        // Get current user custom data
        var currentUserData = this.currentUser.customData;
        console.log('CHATKIT USER CUSTOM DATA: ', currentUserData);
        // Add update data
        currentUserData['name'] = _name;
        currentUserData['bio'] = _bio;
        currentUserData['major'] = _major;
        currentUserData['graduationYear'] = _gradYr;
        currentUserData['interests'] = _interests;
        currentUserData['clubs'] = _clubs;
        // Send the updated data and update the user
        this.userService.update(this.currentUser.id, JSON.stringify(currentUserData))
            .toPromise()
            .then(function (data) {
            console.log('RESPONSE:', data);
            console.log('UPDATED CHATKIT USER:', _this.currentUser);
            _this.setUserProfile(data);
            _this.editingForm = false;
            _this.loading = false;
        });
    };
    // Build profile form
    SettingsProfileComponent.prototype.initForm = function () {
        this.getUserProfile();
        // Build Form
        this.profileForm = this.formBuilder.group({
            // Name
            name: [this.name, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            // Bio
            bio: [this.bio, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"]],
            // Major
            major: [this.major, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"]],
            // Graduation year
            graduationYear: [this.graduationYear, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"]],
            // Interests
            interests: [this.interests, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"]],
            // Clubs
            clubs: [this.clubs, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"]]
        });
    };
    // Set updated profile data
    SettingsProfileComponent.prototype.setUserProfile = function (userData) {
        this.currentUser.customData.avatarURL = userData.avatar_url;
        this.currentUser.customData.customData = userData.custom_data;
        this.currentUser.name = userData.name;
        this.currentUser.updatedAt = userData.updated_at;
    };
    // Bring in chatkit user data
    SettingsProfileComponent.prototype.getUserProfile = function () {
        try {
            this.name = this.currentUser.name;
        }
        catch (error) {
            this.name = '';
        }
        try {
            this.bio = this.currentUser.customData.bio;
        }
        catch (error) {
            this.bio = '';
        }
        try {
            this.major = this.currentUser.customData.major;
        }
        catch (error) {
            this.major = '';
        }
        try {
            this.graduationYear = this.currentUser.customData.graduationYear;
        }
        catch (error) {
            this.graduationYear = '';
        }
        try {
            this.interests = this.currentUser.customData.interests;
        }
        catch (error) {
            this.interests = '';
        }
        try {
            this.clubs = this.currentUser.customData.clubs;
        }
        catch (error) {
            this.clubs = '';
        }
    };
    SettingsProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getCurrentUser().subscribe(function (user) {
            _this.currentUser = user;
            _this.initForm();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('myPond'),
        __metadata("design:type", Object)
    ], SettingsProfileComponent.prototype, "myPond", void 0);
    SettingsProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings-profile',
            template: __webpack_require__(/*! ./settings-profile.component.html */ "./src/app/Profile-Views/settings-profile/settings-profile.component.html"),
            styles: [__webpack_require__(/*! ./settings-profile.component.scss */ "./src/app/Profile-Views/settings-profile/settings-profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _Core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _Core_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], SettingsProfileComponent);
    return SettingsProfileComponent;
}());



/***/ }),

/***/ "./src/app/Profile-Views/small/small.component.css":
/*!*********************************************************!*\
  !*** ./src/app/Profile-Views/small/small.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#user-image{\n    max-width: 100px;\n    max-height: 100px;\n    border: 1px solid #0E425F;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUHJvZmlsZS1WaWV3cy9zbWFsbC9zbWFsbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9Qcm9maWxlLVZpZXdzL3NtYWxsL3NtYWxsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdXNlci1pbWFnZXtcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xuICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwRTQyNUY7XG59Il19 */"

/***/ }),

/***/ "./src/app/Profile-Views/small/small.component.html":
/*!**********************************************************!*\
  !*** ./src/app/Profile-Views/small/small.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Modal -->\n<div *ngIf=\"user\" id=\"profileModal\" class=\"modal hide fade col-10 offset-1 col-md-6 offset-md-3\" tabindex=\"-1\"\n  role=\"dialog\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content text-center\">\n\n      <!--Header-->\n      <div class=\"modal-header\" style=\"border:none;\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\" style=\"font-size:1.75rem;\">&times;</span>\n        </button>\n      </div>\n\n      <!--Body-->\n      <div class=\"modal-body\">\n        <!-- Profile Image -->\n        <img src=\"\" onerror=\"this.src='../../assets/images/DefaultProfile.png'\" id=\"user-image\"\n        class=\"rounded img-fluid mx-auto mb-1 d-block\">\n\n        <!-- User's Name -->\n        <div class=\"h3 text-secondary text-light-weight mt-3\">{{ this.user.name }} </div>\n\n        <!-- User's Info -->\n        <p class=\"text-primary\" *ngIf=\"this.user.customData.graduationYear\">&mdash; Class of {{this.user.customData.graduationYear}} &mdash;</p>\n        <p class=\"text-secondary mt-2\" *ngIf=\"this.user.customData.graduationYear\">{{ this.user.customData.bio }}</p>\n      </div>\n\n      <!-- Footer -->\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary mx-auto py-2 px-3 text-uppercase\" (click)=\"addConnection()\"\n        *ngIf=\"!isConnection\">Add Connection</button>\n        <span class=\"text-light mx-auto py-2\" *ngIf=\"isConnection\">You are connected with this user!</span>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/Profile-Views/small/small.component.ts":
/*!********************************************************!*\
  !*** ./src/app/Profile-Views/small/small.component.ts ***!
  \********************************************************/
/*! exports provided: SmallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmallComponent", function() { return SmallComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SmallComponent = /** @class */ (function () {
    function SmallComponent() {
        this.isConnection = false;
    }
    SmallComponent.prototype.ngOnInit = function () {
    };
    // TODO: Implement actual add connection functionality
    SmallComponent.prototype.addConnection = function () {
        this.isConnection = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SmallComponent.prototype, "user", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SmallComponent.prototype, "isConnection", void 0);
    SmallComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-small',
            template: __webpack_require__(/*! ./small.component.html */ "./src/app/Profile-Views/small/small.component.html"),
            styles: [__webpack_require__(/*! ./small.component.css */ "./src/app/Profile-Views/small/small.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SmallComponent);
    return SmallComponent;
}());



/***/ }),

/***/ "./src/app/Settings-Views/connection-settings/connection-settings.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/Settings-Views/connection-settings/connection-settings.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".description{\n    color:#999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvU2V0dGluZ3MtVmlld3MvY29ubmVjdGlvbi1zZXR0aW5ncy9jb25uZWN0aW9uLXNldHRpbmdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9TZXR0aW5ncy1WaWV3cy9jb25uZWN0aW9uLXNldHRpbmdzL2Nvbm5lY3Rpb24tc2V0dGluZ3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXNjcmlwdGlvbntcbiAgICBjb2xvcjojOTk5O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/Settings-Views/connection-settings/connection-settings.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/Settings-Views/connection-settings/connection-settings.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"pt-4\">\n    <h3 class=\"text-secondary pb-3\">Notifications:</h3>\n    <p><input type=\"checkbox\" id=\"news\">&nbsp; News emails</p>\n    <p class=\"description\">Be the first to find out about Chatversity's latest updates.</p>\n    <hr />\n  </div>\n  <div class=\"pt-4\">\n      <p><input type=\"checkbox\" id=\"reminders\">&nbsp; Reminders emails</p>\n      <p class=\"description\">Stay up to date with everything that you missed out on.</p>\n    <hr />\n  </div>\n  <div class=\"pt-4\">\n      <p><input type=\"checkbox\" id=\"product\">&nbsp; Product emails</p>\n      <p class=\"description\">Get tips on using Chatversity and our others products.</p>\n    <hr />\n  </div>\n  <div class=\"pt-4\">\n      <p><input type=\"checkbox\" id=\"text\">&nbsp; Text (SMS) Messages</p>\n      <p class=\"description\">Get reminders delivered by text message.</p>\n    <hr />\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/Settings-Views/connection-settings/connection-settings.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/Settings-Views/connection-settings/connection-settings.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ConnectionSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionSettingsComponent", function() { return ConnectionSettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConnectionSettingsComponent = /** @class */ (function () {
    function ConnectionSettingsComponent() {
    }
    ConnectionSettingsComponent.prototype.ngOnInit = function () {
    };
    ConnectionSettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-connection-settings',
            template: __webpack_require__(/*! ./connection-settings.component.html */ "./src/app/Settings-Views/connection-settings/connection-settings.component.html"),
            styles: [__webpack_require__(/*! ./connection-settings.component.css */ "./src/app/Settings-Views/connection-settings/connection-settings.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ConnectionSettingsComponent);
    return ConnectionSettingsComponent;
}());



/***/ }),

/***/ "./src/app/Settings-Views/privacy-settings/privacy-settings.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/Settings-Views/privacy-settings/privacy-settings.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".description{\n    color:#999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvU2V0dGluZ3MtVmlld3MvcHJpdmFjeS1zZXR0aW5ncy9wcml2YWN5LXNldHRpbmdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9TZXR0aW5ncy1WaWV3cy9wcml2YWN5LXNldHRpbmdzL3ByaXZhY3ktc2V0dGluZ3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXNjcmlwdGlvbntcbiAgICBjb2xvcjojOTk5O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/Settings-Views/privacy-settings/privacy-settings.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/Settings-Views/privacy-settings/privacy-settings.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"pt-4\">\n    <h3 class=\"text-secondary pb-3\">Account Privacy</h3>\n    <p><input type=\"checkbox\" id=\"2FA\">&nbsp; Private Account</p>\n    <p class=\"description\">When your account is private, only your connections can see your profile and other information. Your existing followers won't be affected.\n      </p>\n    <hr />\n  </div>\n  <div class=\"pt-4\">\n      <h3 class=\"text-secondary pb-3\">Activity Status</h3>\n      <p><input type=\"checkbox\" id=\"2FA\">&nbsp; Show Activity Status</p>\n      <p class=\"description\">Allow accounts you follow and anyone you message to see when you were last active on Chatversity app. When this is turned off, you won't be able to see the activity status of other accounts.</p>\n    <hr />\n  </div>\n  <div class=\"pt-4\">\n      <h3 class=\"text-secondary pb-3\">Rooms Privacy Defaults</h3>\n      <p><input type=\"checkbox\" id=\"2FA\">&nbsp; Allow Direct Messages from Rooms Members</p>\n      <p class=\"description\">This settings is applied when you join a new room. It does not apply retroactively to your existing room.</p>\n    <hr />\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/Settings-Views/privacy-settings/privacy-settings.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/Settings-Views/privacy-settings/privacy-settings.component.ts ***!
  \*******************************************************************************/
/*! exports provided: PrivacySettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacySettingsComponent", function() { return PrivacySettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrivacySettingsComponent = /** @class */ (function () {
    function PrivacySettingsComponent() {
    }
    PrivacySettingsComponent.prototype.ngOnInit = function () {
    };
    PrivacySettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-privacy-settings',
            template: __webpack_require__(/*! ./privacy-settings.component.html */ "./src/app/Settings-Views/privacy-settings/privacy-settings.component.html"),
            styles: [__webpack_require__(/*! ./privacy-settings.component.css */ "./src/app/Settings-Views/privacy-settings/privacy-settings.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PrivacySettingsComponent);
    return PrivacySettingsComponent;
}());



/***/ }),

/***/ "./src/app/Settings-Views/security-settings/security-settings.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/Settings-Views/security-settings/security-settings.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".description{\n    color:#999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvU2V0dGluZ3MtVmlld3Mvc2VjdXJpdHktc2V0dGluZ3Mvc2VjdXJpdHktc2V0dGluZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL1NldHRpbmdzLVZpZXdzL3NlY3VyaXR5LXNldHRpbmdzL3NlY3VyaXR5LXNldHRpbmdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVzY3JpcHRpb257XG4gICAgY29sb3I6Izk5OTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/Settings-Views/security-settings/security-settings.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/Settings-Views/security-settings/security-settings.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"pt-4\">\n    <h3 class=\"text-secondary pb-3\">Two-Factor Authentication</h3>\n    <p><input type=\"checkbox\" id=\"2FA\">&nbsp; Two-Factor Authentication</p>\n    <p class=\"description\">For additional security, enable two-factor authentication. Every time you sign in, you will be required to enter your password and an authentication code so we can make sure it's you.</p>\n    <hr />\n  </div>\n  <div class=\"pt-4\">\n    <h3 class=\"text-secondary pb-3\">Change Password</h3>\n    <p class=\"description\">If you think your account has been compromised, please change your password.</p>\n      <a [routerLink]=\"['/forgot']\"><button type=\"submit\" class=\"btn btn-primary text-uppercase px-4\">Change Password</button></a>\n    <hr />\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Settings-Views/security-settings/security-settings.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/Settings-Views/security-settings/security-settings.component.ts ***!
  \*********************************************************************************/
/*! exports provided: SecuritySettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecuritySettingsComponent", function() { return SecuritySettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SecuritySettingsComponent = /** @class */ (function () {
    function SecuritySettingsComponent() {
    }
    SecuritySettingsComponent.prototype.ngOnInit = function () {
    };
    SecuritySettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-security-settings',
            template: __webpack_require__(/*! ./security-settings.component.html */ "./src/app/Settings-Views/security-settings/security-settings.component.html"),
            styles: [__webpack_require__(/*! ./security-settings.component.css */ "./src/app/Settings-Views/security-settings/security-settings.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SecuritySettingsComponent);
    return SecuritySettingsComponent;
}());



/***/ }),

/***/ "./src/app/Settings-Views/settings/settings.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/Settings-Views/settings/settings.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"height:100vh;\">\n\n  <app-top-bar [viewName]=\"'Settings'\" [headerText]=\"headerText\"></app-top-bar>\n  \n  <div class=\"row page-content\">\n    <div class=\"col-12 col-lg-3\" style=\"background-color:#F1F8FC; border-bottom:1px solid #DAE6ED;\">\n      <div class=\"my-3 px-1\">\n        <button class=\"btn btn-block custom-btn text-left my-2 p-3\" (click)=\"showProfileView()\"\n        [ngClass]=\"{ 'active': ProfileView.current }\">My Profile</button>\n        <button class=\"btn btn-block custom-btn text-left my-2 p-3\" (click)=\"showPrivacyView()\"\n        [ngClass]=\"{ 'active': PrivacyView.current }\">Privacy</button>\n        <button class=\"btn btn-block custom-btn text-left my-2 p-3\" (click)=\"showSecurityView()\"\n        [ngClass]=\"{ 'active': SecurityView.current }\">Security</button>\n        <button class=\"btn btn-block custom-btn text-left my-2 p-3\" (click)=\"showConnectionsView()\"\n        [ngClass]=\"{ 'active': ConnectionsView.current }\">Connections</button>\n        <button class=\"btn btn-block custom-btn text-left my-2 p-3 user-action-btn\" (click)=\"logOut()\">Logout <i class=\"fa fa-sign-out-alt\"></i></button>\n      </div>\n    </div>\n  \n  <div class=\"col-12 col-lg-9\" style=\"background-color: #fafdff; border-left:1px solid #DAE6ED;\">\n    <div *ngIf=\"ProfileView.current\">\n      <app-settings-profile></app-settings-profile>\n    </div>\n    <div *ngIf=\"PrivacyView.current\">\n      <app-privacy-settings></app-privacy-settings>\n    </div>\n    <div *ngIf=\"SecurityView.current\">\n      <app-security-settings></app-security-settings>\n    </div>\n    <div *ngIf=\"ConnectionsView.current\">\n      <app-connection-settings></app-connection-settings>\n    </div>\n  </div>\n\n  </div>\n</div>\n      "

/***/ }),

/***/ "./src/app/Settings-Views/settings/settings.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/Settings-Views/settings/settings.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active {\n  background-color: white !important;\n  color: #0E425F;\n  border: 1px solid #bddef1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Db25ub3IvQ2hhdHZlcnNpdHlfQXBwL3NyYy9hcHAvU2V0dGluZ3MtVmlld3Mvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBa0M7RUFDbEMsY0FBYztFQUNkLHlCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvU2V0dGluZ3MtVmlld3Mvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aXZle1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICMwRTQyNUY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2JkZGVmMTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/Settings-Views/settings/settings.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/Settings-Views/settings/settings.component.ts ***!
  \***************************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Core/_services/auth.service */ "./src/app/Core/_services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(activatedRoute, router, _auth) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this._auth = _auth;
        this.ProfileView = { id: 1, name: 'Profile', current: false };
        this.PrivacyView = { id: 2, name: 'Privacy', current: false };
        this.SecurityView = { id: 3, name: 'Security', current: false };
        this.ConnectionsView = { id: 4, name: 'Connections', current: false };
        this.views = [this.ProfileView, this.PrivacyView, this.SecurityView, this.ConnectionsView];
    }
    SettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.returnUrl = '/login';
        this.ProfileView.current = true;
        this.headerText = this.ProfileView.name;
        this.activatedRoute.queryParams.subscribe(function (params) {
            var view = params['view'];
            _this.handleViewParam(view);
        });
    };
    SettingsComponent.prototype.logOut = function () {
        this._auth.logout();
        this.router.navigate([this.returnUrl]);
    };
    // Display profile view
    SettingsComponent.prototype.showProfileView = function () {
        this.showPage(this.ProfileView.id);
    };
    // Display privacy view
    SettingsComponent.prototype.showPrivacyView = function () {
        this.showPage(this.PrivacyView.id);
    };
    // Display security view
    SettingsComponent.prototype.showSecurityView = function () {
        this.showPage(this.SecurityView.id);
    };
    // Display connections view
    SettingsComponent.prototype.showConnectionsView = function () {
        this.showPage(this.ConnectionsView.id);
    };
    // Hide all settings views
    SettingsComponent.prototype.hideAllViews = function () {
        this.views.forEach(function (view) {
            view.current = false;
        });
    };
    // Display view by id
    SettingsComponent.prototype.showPage = function (_id) {
        this.hideAllViews();
        switch (_id) {
            case 2:
                this.PrivacyView.current = true;
                this.headerText = this.PrivacyView.name;
                break;
            case 3:
                this.SecurityView.current = true;
                this.headerText = this.SecurityView.name;
                break;
            case 4:
                this.ConnectionsView.current = true;
                this.headerText = this.ConnectionsView.name;
                break;
            default:
                this.ProfileView.current = true;
                this.headerText = this.ProfileView.name;
                break;
        }
    };
    // Display view based on url param
    SettingsComponent.prototype.handleViewParam = function (param) {
        switch (param) {
            case 'privacy':
                this.showPrivacyView();
                break;
            case 'security':
                this.showSecurityView();
                break;
            case 'connections':
                this.showConnectionsView();
                break;
            default:
                this.showProfileView();
                break;
        }
    };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/Settings-Views/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.scss */ "./src/app/Settings-Views/settings/settings.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _Core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/Shared/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/Shared/footer/footer.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n    color: #0E425F !important;\n    font-size: 1rem;\n    font-weight: 500;\n}\na:hover{\n    text-decoration: underline;\n}\nspan{\n    font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvU2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSwwQkFBMEI7QUFDOUI7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9TaGFyZWQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XG4gICAgY29sb3I6ICMwRTQyNUYgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbmE6aG92ZXJ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbnNwYW57XG4gICAgZm9udC1zaXplOiAxcmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/Shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/Shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light footer-nav justify-content-center mb-3\" style=\"background-color: inherit !important\">\n    <a class=\"navbar-brand\" href=\"https://chatversityapp.com/EULA\">EULA</a>\n    <a class=\"navbar-brand\" href=\"https://chatversityapp.com/\">TERMS</a>\n    <a class=\"navbar-brand\" href=\"https://chatversityapp.com/\">PRIVACY</a>\n    <a class=\"navbar-brand\" href=\"https://chatversityapp.com/about\">ABOUT</a>\n    <a class=\"navbar-brand\" href=\"https://chatversityapp.com/contact\">CONTACT</a>\n    <a class=\"navbar-brand\" href=\"https://chatversityapp.com/faq\">FAQ</a>\n    <a class=\"navbar-brand\" href=\"https://chatversityapp.com/\">SUPPORT</a>\n    <a class=\"navbar-brand\" href=\"https://chatversityapp.com/pricing\">PRICING</a>\n    <span class=\"navbar-brand pl-4 text-light text-light-weight\">COPYRIGHT &copy; 2019 CHATVERSITY</span>\n</nav>"

/***/ }),

/***/ "./src/app/Shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/Shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/Shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/Shared/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/Shared/navbar/navbar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/Shared/navbar/navbar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"currentUser\">\n    <a [routerLink]='[\"/home\"]' id=\"top-logo\"><img src=\"/assets/icons/icon-72x72.png\" height=\"48\" width=\"42\" class=\"m-3\"></a>\n    <ul class=\"nav nav-pills nav-justified flex-column align-self-center m-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link mt-1 mb-1 pt-3 pb-3\" ngbTooltip=\"Home\" placement=\"right\" triggers=\"hover\" [autoClose]=\"true\" routerLinkActive=\"active\" routerLink=\"home\"><i class=\"fa fa-home fa-lg\"></i></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link mt-1 mb-1 pt-3 pb-3\" ngbTooltip=\"Rooms\" placement=\"right\" triggers=\"hover\" [autoClose]=\"true\" routerLinkActive=\"active\" routerLink=\"rooms\"><i class=\"fa fa-door-closed fa-lg\"></i>\n          <span *ngIf=\"roomsWithNewMessages.length\" class=\"badge badge-info\">{{ roomsWithNewMessages.length }}</span>\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link mt-1 mb-1 pt-3 pb-3\" ngbTooltip=\"Messages\" placement=\"right\" triggers=\"hover\" [autoClose]=\"true\" routerLink=\"rooms\"><i class=\"far fa-envelope fa-lg\"></i></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link mt-1 mb-1 pt-3 pb-3\" ngbTooltip=\"Settings\" placement=\"right\" triggers=\"hover\" [autoClose]=\"true\" routerLinkActive=\"active\" routerLink=\"settings\"><i class=\"fa fa-cogs fa-lg\"></i></a>\n      </li>\n      <li class=\"nav-item mt-auto\">\n        <a class=\"nav-link mt-1 mb-1 pt-3 pb-3\" ngbTooltip=\"Profile\" placement=\"right\" triggers=\"hover\" [autoClose]=\"true\" routerLinkActive=\"active\" routerLink=\"settings\"></a>\n      </li>\n      <!--<li class=\"nav-item\">\n        <a class=\"nav-link mt-1 mb-1 pt-3 pb-3\" routerLink=\"rooms\">\n          <ng-container *ngIf=\"roomMessages\">\n              <span *ngIf=\"roomMessages\" class=\"badge badge-info\">{{ incomingMessages }}</span>\n          </ng-container>\n        </a>\n      </li>-->\n    </ul>\n</ng-container>"

/***/ }),

/***/ "./src/app/Shared/navbar/navbar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/Shared/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  color: #96B7C9 !important;\n  border-radius: 0px;\n  border: 1px solid white; }\n\n.active {\n  color: #24B6FF !important;\n  background-color: #F3F6F8 !important;\n  border: 1px solid #dce8ef; }\n\na:hover {\n  background-color: #F3F6F8;\n  border: 1px solid #F3F6F8; }\n\n#top-logo {\n  all: initial; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Db25ub3IvQ2hhdHZlcnNpdHlfQXBwL3NyYy9hcHAvU2hhcmVkL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHVCQUF1QixFQUFBOztBQUczQjtFQUNJLHlCQUF5QjtFQUN6QixvQ0FBb0M7RUFDcEMseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0kseUJBQXlCO0VBQ3pCLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL1NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XG4gICAgY29sb3I6ICM5NkI3QzkgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG59XG5cbi5hY3RpdmUge1xuICAgIGNvbG9yOiAjMjRCNkZGICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YzRjZGOCAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkY2U4ZWY7XG59XG5cbmE6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGM0Y2Rjg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0YzRjZGODtcbn1cblxuI3RvcC1sb2dve1xuICAgIGFsbDogaW5pdGlhbDtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/Shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/Shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Core_services_messaging_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Core/_services/messaging.service */ "./src/app/Core/_services/messaging.service.ts");
/* harmony import */ var _Core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Core/_services/auth.service */ "./src/app/Core/_services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, messageService) {
        this.authService = authService;
        this.messageService = messageService;
        this.roomsWithNewMessages = [];
    }
    NavbarComponent.prototype.setNotifications = function (user) {
        var _this = this;
        var rooms = user.rooms;
        var i = 0;
        // foreach room -> compare latest message to user cursor
        rooms.forEach(function (room) {
            // get latest message
            user.fetchMultipartMessages({
                roomId: room.id,
                direction: 'older',
                limit: 1,
            })
                .then(function (messages) {
                // compare dates -> determine if new
                if (messages[0].id > user.readCursor({
                    roomId: room.id
                }).position) {
                    console.log("New message in " + messages[0].room.name);
                    _this.roomsWithNewMessages.push(room);
                }
            })
                .catch(function (err) {
                console.log("Error fetching messages: " + err);
            });
            i++;
        });
    };
    NavbarComponent.prototype.ngOnInit = function () {
        this.currentUser = this.authService.currentUser;
        console.log(this.currentUser);
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/Shared/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/Shared/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_Core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _Core_services_messaging_service__WEBPACK_IMPORTED_MODULE_1__["MessagingService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/Shared/top-bar/top-bar.component.css":
/*!******************************************************!*\
  !*** ./src/app/Shared/top-bar/top-bar.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#messages_header {\n    background-color:#FFF;\n    z-index: 2;\n    font-family: 'Poppins', sans-serif;\n    font-weight: bold;\n    color: #94B0C0;\n    top:0;\n    position: -webkit-sticky;\n    position: sticky;\n}\n\n#header-text{\n    display: none;\n}\n\n#mobile-header-text{\n    display: inline-block;\n}\n\n#header-left-text{\n    padding-left: 0;\n}\n\n@media (min-width: 768px){ /*Medium*/\n    #header-text{\n        display: inline-block;\n    }\n    #mobile-header-text{\n        display: none;\n    }\n    #header-left-text{\n        padding-left: 15px;\n    }\n}\n\n#logoutLink:hover{\n    text-decoration: underline;\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvU2hhcmVkL3RvcC1iYXIvdG9wLWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixrQ0FBa0M7SUFDbEMsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxLQUFLO0lBQ0wsd0JBQWdCO0lBQWhCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7O0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUVBLDJCQUEyQixTQUFTO0lBQ2hDO1FBQ0kscUJBQXFCO0lBQ3pCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSjs7QUFDQTtJQUNJLDBCQUEwQjtJQUMxQixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvU2hhcmVkL3RvcC1iYXIvdG9wLWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21lc3NhZ2VzX2hlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojRkZGO1xuICAgIHotaW5kZXg6IDI7XG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzk0QjBDMDtcbiAgICB0b3A6MDtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xufVxuXG4jaGVhZGVyLXRleHR7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbiNtb2JpbGUtaGVhZGVyLXRleHR7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuI2hlYWRlci1sZWZ0LXRleHR7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpeyAvKk1lZGl1bSovXG4gICAgI2hlYWRlci10ZXh0e1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxuICAgICNtb2JpbGUtaGVhZGVyLXRleHR7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgICNoZWFkZXItbGVmdC10ZXh0e1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgfVxufVxuI2xvZ291dExpbms6aG92ZXJ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/Shared/top-bar/top-bar.component.html":
/*!*******************************************************!*\
  !*** ./src/app/Shared/top-bar/top-bar.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row shadow-sm\" id=\"messages_header\">\n  <div class=\"col 12 col-md-3 py-3\">\n      <div class=\"d-flex h-100 align-items-center\">\n        <span id=\"header-left-text\" class=\"text-uppercase text-secondary text-light-weight\">{{ viewName }} <span id=\"mobile-header-text\">&nbsp;|&nbsp; {{ headerText }} &nbsp;|&nbsp; <a (click)=\"logOut()\" id=\"logoutLink\">Logout</a></span></span>\n      </div>\n  </div>\n  <div class=\"col-md-9 py-3\" style=\"border-left:1px solid #DAE6ED;\" id=\"header-text\">\n    <div class=\"d-flex h-100 align-items-center\">\n      <span class=\"text-uppercase text-secondary text-light-weight pl-3\">{{ headerText }}</span>\n      <button class=\"btn btn-outline-secondary text-uppercase mr-3 ml-auto\" (click)=\"logOut()\">Logout</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/Shared/top-bar/top-bar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/Shared/top-bar/top-bar.component.ts ***!
  \*****************************************************/
/*! exports provided: TopBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopBarComponent", function() { return TopBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Core/_services/auth.service */ "./src/app/Core/_services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TopBarComponent = /** @class */ (function () {
    function TopBarComponent(auth, route, router) {
        this.auth = auth;
        this.route = route;
        this.router = router;
    }
    TopBarComponent.prototype.ngOnInit = function () {
        this.returnUrl = '/login';
    };
    // Logout user
    TopBarComponent.prototype.logOut = function () {
        this.auth.logout();
        this.router.navigate([this.returnUrl]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TopBarComponent.prototype, "viewName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TopBarComponent.prototype, "headerText", void 0);
    TopBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-top-bar',
            template: __webpack_require__(/*! ./top-bar.component.html */ "./src/app/Shared/top-bar/top-bar.component.html"),
            styles: [__webpack_require__(/*! ./top-bar.component.css */ "./src/app/Shared/top-bar/top-bar.component.css")]
        }),
        __metadata("design:paramtypes", [_Core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], TopBarComponent);
    return TopBarComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_2__["routes"])],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"update\" class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\">\n    <strong>Holy guacamole!</strong> There is an update for Chatversity!\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n\n\n<div [class.app-mount]=\"(currentUser && RemoveNavbarForTesting())\">\n    <div *ngIf=\"(currentUser && RemoveNavbarForTesting())\" class=\"nav-wrapper\">\n        <div id=\"primary_navigation\">\n            <app-navbar *ngIf=\"(currentUser && RemoveNavbarForTesting())\" class=\"h-100 d-flex align-items-center flex-column shadow-sm\"></app-navbar>\n        </div>\n    </div>\n    <section [class.app-main]=\"(currentUser && RemoveNavbarForTesting())\">\n        <router-outlet></router-outlet> \n    </section>\n</div>\n\n<!-- Router Outlet -->"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-mount {\n  flex-direction: row;\n  display: flex;\n  height: 100vh;\n  position: absolute;\n  width: 100vw; }\n\n.nav-wrapper {\n  width: 88px;\n  position: relative; }\n\n#primary_navigation {\n  width: 88px;\n  background-color: white;\n  z-index: 10;\n  height: 100vh;\n  position: fixed;\n  top: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Db25ub3IvQ2hhdHZlcnNpdHlfQXBwL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQW1CO0VBR25CLGFBQWE7RUFDYixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksV0FBVTtFQUNWLHVCQUFzQjtFQUN0QixXQUFXO0VBQ1gsYUFBYTtFQUNiLGVBQWU7RUFDZixNQUFNLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLW1vdW50IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMHZ3O1xufVxuXG4ubmF2LXdyYXBwZXJ7XG4gICAgd2lkdGg6IDg4cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4jcHJpbWFyeV9uYXZpZ2F0aW9uIHtcbiAgICB3aWR0aDo4OHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gICAgei1pbmRleDogMTA7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Core/_services/auth.service */ "./src/app/Core/_services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _Core_services_messaging_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Core/_services/messaging.service */ "./src/app/Core/_services/messaging.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    // chatkitUser: any;
    function AppComponent(router, authService, updates, messageService) {
        this.router = router;
        this.authService = authService;
        this.updates = updates;
        this.messageService = messageService;
        this.title = 'Chatversity';
        this.update = false;
    }
    //
    // ─── LOGOUT USER ────────────────────────────────────────────────────────────────
    //
    AppComponent.prototype.logout = function () {
        this.authService.logout();
    };
    // ────────────────────────────────────────────────────────────────────────────────
    // !
    // ! ─── FOR TESTING ONLY - USE THIS FUNCTION TO REMOVE THE NAVBAR ON PAGES THAT DO NOT NEED IT
    // !
    AppComponent.prototype.RemoveNavbarForTesting = function () {
        if (this.router.url === '/login'
            || this.router.url === '/signup'
            || this.router.url === '/forgot'
            || this.router.url === '/new-user'
            || this.router.url === '/404') {
            return false;
        }
        return true;
    };
    // ! ────────────────────────────────────────────────────────────────────────────────
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('%cWelcome to Chatversity!', 'font-size: 20px; color: #186fa0;');
        console.log('Initializing app');
        this.authService.getCurrentUser().subscribe(function (user) {
            if (user) {
                _this.currentUser = user;
                return;
            }
            else {
                _this.messageService.initChatkit(_this.authService.getUserId());
            }
            console.log(user.rooms);
            console.log(user);
        });
        //   this.messageService.initChatkit(this.authService.getUserId())
        //   .then(chatkitUser => {
        //     console.log('got chatkit user');
        //     console.log(chatkitUser);
        //     this.authService.currentUser = chatkitUser;
        //     this.currentUser = chatkitUser;
        //     console.log(this.authService.currentUser);
        // });
        console.log('User Logged In: ' + this.authService.userLoggedIn());
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _Core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__["SwUpdate"],
            _Core_services_messaging_service__WEBPACK_IMPORTED_MODULE_4__["MessagingService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _Core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Core/_services/auth.service */ "./src/app/Core/_services/auth.service.ts");
/* harmony import */ var _Core_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Core/_services/user.service */ "./src/app/Core/_services/user.service.ts");
/* harmony import */ var ngx_filepond__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-filepond */ "./node_modules/ngx-filepond/esm5/ngx-filepond.js");
/* harmony import */ var filepond_plugin_file_validate_type__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! filepond-plugin-file-validate-type */ "./node_modules/filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.js");
/* harmony import */ var filepond_plugin_file_validate_type__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(filepond_plugin_file_validate_type__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _Error_Views_error_error_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Error-Views/error/error.component */ "./src/app/Error-Views/error/error.component.ts");
/* harmony import */ var _Error_Views_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Error-Views/page-not-found/page-not-found.component */ "./src/app/Error-Views/page-not-found/page-not-found.component.ts");
/* harmony import */ var _Home_view_latest_news_view_latest_news_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Home/view-latest-news/view-latest-news.component */ "./src/app/Home/view-latest-news/view-latest-news.component.ts");
/* harmony import */ var _Home_view_navigation_home_view_navigation_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Home/view-navigation-home/view-navigation-home.component */ "./src/app/Home/view-navigation-home/view-navigation-home.component.ts");
/* harmony import */ var _Home_view_friends_home_view_friends_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Home/view-friends-home/view-friends-home.component */ "./src/app/Home/view-friends-home/view-friends-home.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _Onboarding_login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Onboarding/login/login.component */ "./src/app/Onboarding/login/login.component.ts");
/* harmony import */ var _Onboarding_signup_signup_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Onboarding/signup/signup.component */ "./src/app/Onboarding/signup/signup.component.ts");
/* harmony import */ var _Onboarding_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Onboarding/forgot/forgot.component */ "./src/app/Onboarding/forgot/forgot.component.ts");
/* harmony import */ var _Onboarding_new_user_new_user_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Onboarding/new-user/new-user.component */ "./src/app/Onboarding/new-user/new-user.component.ts");
/* harmony import */ var _Profile_Views_profile_profile_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Profile-Views/profile/profile.component */ "./src/app/Profile-Views/profile/profile.component.ts");
/* harmony import */ var _Profile_Views_small_small_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Profile-Views/small/small.component */ "./src/app/Profile-Views/small/small.component.ts");
/* harmony import */ var _Profile_Views_settings_profile_settings_profile_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Profile-Views/settings-profile/settings-profile.component */ "./src/app/Profile-Views/settings-profile/settings-profile.component.ts");
/* harmony import */ var _Settings_Views_settings_settings_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Settings-Views/settings/settings.component */ "./src/app/Settings-Views/settings/settings.component.ts");
/* harmony import */ var _Shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Shared/footer/footer.component */ "./src/app/Shared/footer/footer.component.ts");
/* harmony import */ var _Shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Shared/navbar/navbar.component */ "./src/app/Shared/navbar/navbar.component.ts");
/* harmony import */ var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @okta/okta-angular */ "./node_modules/@okta/okta-angular/dist/index.js");
/* harmony import */ var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_okta_okta_angular__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _Core_callback_callback_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./Core/callback/callback.component */ "./src/app/Core/callback/callback.component.ts");
/* harmony import */ var _Core_protected_protected_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./Core/protected/protected.component */ "./src/app/Core/protected/protected.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _rooms_rooms_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./rooms/rooms.component */ "./src/app/rooms/rooms.component.ts");
/* harmony import */ var _scroll_to_top_directive__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./scroll-to-top.directive */ "./src/app/scroll-to-top.directive.ts");
/* harmony import */ var _Settings_Views_privacy_settings_privacy_settings_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./Settings-Views/privacy-settings/privacy-settings.component */ "./src/app/Settings-Views/privacy-settings/privacy-settings.component.ts");
/* harmony import */ var _Settings_Views_security_settings_security_settings_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./Settings-Views/security-settings/security-settings.component */ "./src/app/Settings-Views/security-settings/security-settings.component.ts");
/* harmony import */ var _Settings_Views_connection_settings_connection_settings_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./Settings-Views/connection-settings/connection-settings.component */ "./src/app/Settings-Views/connection-settings/connection-settings.component.ts");
/* harmony import */ var _Shared_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./Shared/top-bar/top-bar.component */ "./src/app/Shared/top-bar/top-bar.component.ts");
/* harmony import */ var _Core_services_messaging_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./Core/_services/messaging.service */ "./src/app/Core/_services/messaging.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Angular Component Imports






// import filepond module

// import and register filepond file type validation plugin

Object(ngx_filepond__WEBPACK_IMPORTED_MODULE_6__["registerPlugin"])(filepond_plugin_file_validate_type__WEBPACK_IMPORTED_MODULE_7___default.a);
// Angular Bootstrap

// Component Import


// Dashboard Component Imports

// Error Component Imports


// Home Component Imports



// Messages Component Imports

// Onboarding Component Imports




// Profile Component Imports



// Settings Component Imports

// Shared Component Imports


// Okta Guard and Service
















var config = {
    issuer: 'https://dev-117825.okta.com',
    redirectUri: 'http://localhost:4200/implicit/callback',
    clientId: '0oadacumlPWmV9j5a356'
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _Error_Views_error_error_component__WEBPACK_IMPORTED_MODULE_12__["ErrorComponent"],
                _Onboarding_login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"],
                _Onboarding_signup_signup_component__WEBPACK_IMPORTED_MODULE_19__["SignupComponent"],
                _Profile_Views_profile_profile_component__WEBPACK_IMPORTED_MODULE_22__["ProfileComponent"],
                _Settings_Views_settings_settings_component__WEBPACK_IMPORTED_MODULE_25__["SettingsComponent"],
                _Onboarding_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_20__["ForgotComponent"],
                _Profile_Views_small_small_component__WEBPACK_IMPORTED_MODULE_23__["SmallComponent"],
                _Core_callback_callback_component__WEBPACK_IMPORTED_MODULE_30__["CallbackComponent"],
                _Core_protected_protected_component__WEBPACK_IMPORTED_MODULE_31__["ProtectedComponent"],
                _Error_Views_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_13__["PageNotFoundComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"],
                _Core_callback_callback_component__WEBPACK_IMPORTED_MODULE_30__["CallbackComponent"],
                _Shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_26__["FooterComponent"],
                _Shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_27__["NavbarComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_17__["MessagesComponent"],
                _Profile_Views_settings_profile_settings_profile_component__WEBPACK_IMPORTED_MODULE_24__["SettingsProfileComponent"],
                _Onboarding_new_user_new_user_component__WEBPACK_IMPORTED_MODULE_21__["NewUserComponent"],
                _Home_view_latest_news_view_latest_news_component__WEBPACK_IMPORTED_MODULE_14__["ViewLatestNewsComponent"],
                _Home_view_navigation_home_view_navigation_home_component__WEBPACK_IMPORTED_MODULE_15__["ViewNavigationHomeComponent"],
                _Home_view_friends_home_view_friends_home_component__WEBPACK_IMPORTED_MODULE_16__["ViewFriendsHomeComponent"],
                _rooms_rooms_component__WEBPACK_IMPORTED_MODULE_36__["RoomsComponent"],
                _scroll_to_top_directive__WEBPACK_IMPORTED_MODULE_37__["ScrollToTopDirective"],
                _Settings_Views_privacy_settings_privacy_settings_component__WEBPACK_IMPORTED_MODULE_38__["PrivacySettingsComponent"],
                _Settings_Views_security_settings_security_settings_component__WEBPACK_IMPORTED_MODULE_39__["SecuritySettingsComponent"],
                _Settings_Views_connection_settings_connection_settings_component__WEBPACK_IMPORTED_MODULE_40__["ConnectionSettingsComponent"],
                _Shared_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_41__["TopBarComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_32__["routes"]),
                _okta_okta_angular__WEBPACK_IMPORTED_MODULE_28__["OktaAuthModule"].initAuth(config),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_33__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_33__["ReactiveFormsModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_34__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_35__["environment"].production }),
                ngx_filepond__WEBPACK_IMPORTED_MODULE_6__["FilePondModule"]
            ],
            providers: [
                _okta_okta_angular__WEBPACK_IMPORTED_MODULE_28__["OktaAuthGuard"],
                _app_service__WEBPACK_IMPORTED_MODULE_29__["OktaAuthService"],
                _Core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
                _Core_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
                _Core_services_messaging_service__WEBPACK_IMPORTED_MODULE_42__["MessagingService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _Onboarding_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Onboarding/login/login.component */ "./src/app/Onboarding/login/login.component.ts");
/* harmony import */ var _Onboarding_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Onboarding/forgot/forgot.component */ "./src/app/Onboarding/forgot/forgot.component.ts");
/* harmony import */ var _Onboarding_signup_signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Onboarding/signup/signup.component */ "./src/app/Onboarding/signup/signup.component.ts");
/* harmony import */ var _Error_Views_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Error-Views/page-not-found/page-not-found.component */ "./src/app/Error-Views/page-not-found/page-not-found.component.ts");
/* harmony import */ var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @okta/okta-angular */ "./node_modules/@okta/okta-angular/dist/index.js");
/* harmony import */ var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_okta_okta_angular__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Core/_guards/auth.guard */ "./src/app/Core/_guards/auth.guard.ts");
/* harmony import */ var _Core_guards_route_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Core/_guards/route.guard */ "./src/app/Core/_guards/route.guard.ts");
/* harmony import */ var _Settings_Views_settings_settings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Settings-Views/settings/settings.component */ "./src/app/Settings-Views/settings/settings.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _Profile_Views_settings_profile_settings_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Profile-Views/settings-profile/settings-profile.component */ "./src/app/Profile-Views/settings-profile/settings-profile.component.ts");
/* harmony import */ var _Onboarding_new_user_new_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Onboarding/new-user/new-user.component */ "./src/app/Onboarding/new-user/new-user.component.ts");
/* harmony import */ var _Home_view_navigation_home_view_navigation_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Home/view-navigation-home/view-navigation-home.component */ "./src/app/Home/view-navigation-home/view-navigation-home.component.ts");
/* harmony import */ var _rooms_rooms_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./rooms/rooms.component */ "./src/app/rooms/rooms.component.ts");













var routes = [
    /* Must be logged out to access these components */
    { path: 'forgot', component: _Onboarding_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_1__["ForgotComponent"], canActivate: [_Core_guards_route_guard__WEBPACK_IMPORTED_MODULE_6__["RouteGuard"]] },
    { path: 'signup', component: _Onboarding_signup_signup_component__WEBPACK_IMPORTED_MODULE_2__["SignupComponent"], canActivate: [_Core_guards_route_guard__WEBPACK_IMPORTED_MODULE_6__["RouteGuard"]] },
    { path: 'login', component: _Onboarding_login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"], canActivate: [_Core_guards_route_guard__WEBPACK_IMPORTED_MODULE_6__["RouteGuard"]] },
    /* Must be logged in to access these components */
    { path: '', component: _Home_view_navigation_home_view_navigation_home_component__WEBPACK_IMPORTED_MODULE_11__["ViewNavigationHomeComponent"], canActivate: [_Core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'settings', component: _Settings_Views_settings_settings_component__WEBPACK_IMPORTED_MODULE_7__["SettingsComponent"], canActivate: [_Core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'rooms', component: _rooms_rooms_component__WEBPACK_IMPORTED_MODULE_12__["RoomsComponent"], canActivate: [_Core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'messages', component: _messages_messages_component__WEBPACK_IMPORTED_MODULE_8__["MessagesComponent"], canActivate: [_Core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'settings-profile', component: _Profile_Views_settings_profile_settings_profile_component__WEBPACK_IMPORTED_MODULE_9__["SettingsProfileComponent"], canActivate: [_Core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'home', component: _Home_view_navigation_home_view_navigation_home_component__WEBPACK_IMPORTED_MODULE_11__["ViewNavigationHomeComponent"], canActivate: [_Core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'new-user', component: _Onboarding_new_user_new_user_component__WEBPACK_IMPORTED_MODULE_10__["NewUserComponent"], canActivate: [_Core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    /* Can be logged in or logged out to access these components */
    { path: '404', component: _Error_Views_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"] },
    { path: '**', redirectTo: '/404' },
    { path: 'implicit/callback', component: _okta_okta_angular__WEBPACK_IMPORTED_MODULE_4__["OktaCallbackComponent"] },
];


/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: OktaAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OktaAuthService", function() { return OktaAuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
// app.service.ts
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* Whenever a user attempts to access a route that
is protected by OktaAuthGuard, it first checks to
see if the user has been authenticated.
If isAuthenticated() returns false, start the login flow. */

var OktaAuthService = /** @class */ (function () {
    function OktaAuthService() {
    }
    OktaAuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], OktaAuthService);
    return OktaAuthService;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/messages/messages.component.html":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"height:100vh;\">\n\n  <ng-container *ngIf=\"current_room.name\">\n    <app-top-bar [viewName]=\"'Messages'\" [headerText]=\"current_room.name\"></app-top-bar>\n  </ng-container>\n\n  <ng-container *ngIf=\"!current_room.name\">\n    <app-top-bar [viewName]=\"'Messages'\" [headerText]=\"'Chat'\"></app-top-bar>\n  </ng-container>\n\n  <!--<button type=\"button\" class=\"ml-auto btn btn-outline-primary\" data-toggle=\"modal\" data-target=\"#addRoomModal\" (click)=\"roomCreated = false\" placement=\"left\" ngbTooltip=\"Create Room\" triggers=\"hover\" [autoClose]=\"true\">\n    <i class=\"fa fa-plus\"></i>\n  </button>-->\n\n  <!--<button type=\"button\" class=\"ml-auto btn btn-outline-primary\" data-toggle=\"modal\" data-target=\"#addRoomModal\" placement=\"left\" ngbTooltip=\"Edit Room\" triggers=\"hover\" [autoClose]=\"true\">\n    <i class=\"fa fa-cog\"></i>\n  </button>-->\n\n  <div class=\"row page-content\">\n    <div  class=\"col-12 col-lg-3 overflow-auto\" style=\"background-color:#F1F8FC; border-bottom:1px solid #DAE6ED;\">\n        \n          <!-- Begin Messages outlet -->\n          <div id=\"messages\" class=\"row\">\n            <div class=\"col-12\">\n                <ng-container *ngIf=\"rooms && current_room\">\n                    <button *ngFor=\"let room of rooms\" class=\"btn btn-block custom-btn text-left mr-4 my-2 p-3\" (click)=\"joinRoom(room.id)\"\n                    [ngClass]=\"{ 'active': current_room.id == room.id }\">\n                        <div class=\"room d-flex align-items-center justify-content-between\">\n                            <ng-container *ngIf=\"room?.custom_data !== undefined\">\n                                <!-- <img src=\"{{ room.custom_data.roomAvatar }}\" alt=\"\"> -->\n                            </ng-container>\n                            <span class=\"text-secondary\">{{ room.name }}</span>\n                            <span *ngIf=\"roomNotifications[room.id]\" class=\"badge badge-secondary\">New</span>\n                          </div>\n                      </button>\n                  </ng-container>\n                  <div *ngIf=\"(currentUser)\" class=\"col-12\">\n                      <div class=\"message-wrap\">\n                        <img src=\"{{currentUser.avatarURL}}\" alt=\"\">\n                        <span>{{ currentUser.name }}</span>\n                      </div>\n                  </div>\n            </div>\n          </div>\n\n    </div>\n    <div class=\"col-12 col-lg-9 overflow-auto\" style=\"background-color: #fafdff; border-left:1px solid #DAE6ED;\">\n      <div class=\"chat-window h-100 overflow-auto\">\n        <ng-container *ngIf=\"room_messages\">\n          <div class=\"row\">\n            <div *ngFor=\"let message of room_messages\">\n            {{ message.parts[0].payload.content }}\n            <!-- Messages -->\n              <div class=\"col-12\">\n                {{ message.user_id }}\n              </div>\n            </div>\n          </div>\n        </ng-container>\n      </div>\n      <div class=\"chat-footer\" style=\"position: absolute; bottom: 0; left: 0; width: 100%;\">\n        <form (ngSubmit)='sendMessage()'>\n          <input placeholder=\"Type a message. Hit Enter to send\" type=\"text\" name=\"message\" [(ngModel)]=\"message\">\n        </form>\n      </div>\n    </div>\n  </div>\n  <!-- Messages Header -->\n</div>\n\n<!-- Create room modal -->\n<div class=\"modal fade\" id=\"addRoomModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addRoomModal\" aria-hidden=\"true\">\n\n  <!-- Show success alert on room created -->\n  <div *ngIf=\"roomCreated\" class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\n        <strong>Success!</strong> Created room\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n    </div>\n  </div>  <!-- End success modal dialog -->\n\n  <div *ngIf=\"!roomCreated\" class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <!-- Modal Header -->\n      <div class=\"modal-header\">\n        <!-- Modal Title -->\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Create Room</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <!-- Add room form -->\n        <form (ngSubmit)='createRoom()' [formGroup]=\"formImport\" enctype=\"multipart/form-data\">\n          <!-- Room Name -->\n          <div class=\"form-group\" formGroupName=\"roomNameGroup\">\n            <label for=\"room_name\">Room name</label>\n            <input id=\"room_name\" formControlName=\"roomName\" placeholder=\"Enter a room name\" type=\"text\" class=\"form-control\" required>\n            <small id=\"roomNameHelp\" class=\"form-text text-muted\">A room name must be no longer than 60 characters.</small>\n          </div>\n          <!-- Private? -->\n          <div class=\"form-group\" formGroupName=\"privateRoomGroup\">\n            <div class=\"custom-control custom-switch\">\n              <input type=\"checkbox\" formControlName=\"privateRoom\" class=\"custom-control-input\" id=\"private_room\">\n              <label class=\"custom-control-label\" for=\"private_room\">Private room?</label>\n            </div>\n          </div>\n          <!-- Room Avatar -->\n          <div class=\"form-group\" formGroupName=\"importFileGroup\">\n            <div class=\"form-control-file\">\n              <div class=\"custom-file\">\n                <img src={{imagePath}} width=\"150\" alt=\"Thumb preview...\">\n                <input formControlName=\"importFile\" name=\"avatar\" (change)=\"onFileChange($event)\" type=\"file\" accept=\".png, .jpg, .jpeg\" class=\"custom-file-input\" id=\"customFile\" #avatar>\n                <label class=\"custom-file-label\" #labelImport for=\"customFile\">Choose file</label>\n              </div>\n            </div>\n          </div>\n          <!-- Submit -->\n          <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!formImport.valid\">Submit</button>\n        </form>\n      </div>\n      <!-- Modal Footer -->\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n      </div>\n    </div> <!-- End modal content -->\n  </div> <!-- End modal dialog -->\n</div> <!-- End modal -->\n"

/***/ }),

/***/ "./src/app/messages/messages.component.scss":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#messages_header {\n  background-color: #FFF;\n  z-index: 2;\n  font-family: 'Poppins', sans-serif;\n  font-weight: bold;\n  color: #94B0C0;\n  top: 0;\n  position: -webkit-sticky;\n  position: sticky; }\n\n#messages {\n  position: relative; }\n\n.message-wrap {\n  background: #F3F6F8;\n  padding: 16px 16px;\n  margin-top: 3px;\n  border-radius: 3px;\n  transition: 0.2s ease box-shadow;\n  position: relative; }\n\n.message-wrap:hover:after {\n    content: \"\";\n    position: absolute;\n    top: 0px;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    right: 0;\n    z-index: 1;\n    box-shadow: 0px 4px 12px rgba(21, 157, 246, 0.5); }\n\n.message-wrap #status {\n    font-size: 8px;\n    margin-left: 40px;\n    line-height: .005 !important; }\n\n.chat-footer form {\n  width: 100%;\n  display: flex;\n  padding-bottom: 40px;\n  padding-top: 20px; }\n\n.chat-footer {\n  background-color: #FFFFFF;\n  padding: inherit; }\n\n.chat-footer input {\n  width: 100%;\n  background: #FFFFFF;\n  /* Primary 25 */\n  border: 1px solid #C9EBFF;\n  box-sizing: border-box;\n  box-shadow: inset 0px 1px 3px rgba(21, 157, 246, 0.5);\n  border-radius: 3px;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: normal;\n  letter-spacing: 0.75px;\n  padding: 10px;\n  color: #94B0C0; }\n\n.custom-btn {\n  border-radius: 5px;\n  color: #96B7C9;\n  background-color: #F1F8FC; }\n\n.custom-btn:hover {\n  background-color: white;\n  color: #0E425F;\n  border: 1px solid #bddef1; }\n\n.active {\n  background-color: white !important;\n  color: #0E425F;\n  border: 1px solid #bddef1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Db25ub3IvQ2hhdHZlcnNpdHlfQXBwL3NyYy9hcHAvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBcUI7RUFDckIsVUFBVTtFQUNWLGtDQUFrQztFQUNsQyxpQkFBaUI7RUFDakIsY0FBYztFQUNkLE1BQUs7RUFDTCx3QkFBZ0I7RUFBaEIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBRUksbUJBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdDQUFnQztFQUNoQyxrQkFBaUIsRUFBQTs7QUFQckI7SUFXUSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsT0FBTztJQUNQLFdBQVc7SUFDWCxRQUFRO0lBQ1IsVUFBVTtJQUNWLGdEQUFnRCxFQUFBOztBQW5CeEQ7SUF1QlEsY0FBYztJQUNkLGlCQUFpQjtJQUNqQiw0QkFBNEIsRUFBQTs7QUFLcEM7RUFDSSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSx5QkFBd0I7RUFDeEIsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksV0FBVTtFQUNWLG1CQUFtQjtFQUNuQixlQUFBO0VBQ0EseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixxREFBcUQ7RUFDckQsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsYUFBWTtFQUNaLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLHlCQUF5QixFQUFBOztBQUU3QjtFQUNJLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksa0NBQWtDO0VBQ2xDLGNBQWM7RUFDZCx5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21lc3NhZ2VzX2hlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojRkZGO1xuICAgIHotaW5kZXg6IDI7XG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzk0QjBDMDtcbiAgICB0b3A6MDtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xufVxuXG4jbWVzc2FnZXMge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm1lc3NhZ2Utd3JhcCB7XG5cbiAgICBiYWNrZ3JvdW5kOiNGM0Y2Rjg7XG4gICAgcGFkZGluZzogMTZweCAxNnB4O1xuICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlIGJveC1zaGFkb3c7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG5cblxuICAgICY6aG92ZXI6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMHB4O1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCAxMnB4IHJnYmEoMjEsIDE1NywgMjQ2LCAwLjUpOyAgICBcbiAgICB9XG5cbiAgICAjc3RhdHVzIHtcbiAgICAgICAgZm9udC1zaXplOiA4cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogLjAwNSAhaW1wb3J0YW50O1xuICAgIH1cblxufVxuXG4uY2hhdC1mb290ZXIgZm9ybSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbn1cbi5jaGF0LWZvb3RlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojRkZGRkZGOyBcbiAgICBwYWRkaW5nOiBpbmhlcml0O1xufVxuLmNoYXQtZm9vdGVyIGlucHV0IHtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgLyogUHJpbWFyeSAyNSAqL1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNDOUVCRkY7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMXB4IDNweCByZ2JhKDIxLCAxNTcsIDI0NiwgMC41KTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNzVweDtcbiAgICBwYWRkaW5nOjEwcHg7XG4gICAgY29sb3I6ICM5NEIwQzA7XG59XG5cbi5jdXN0b20tYnRue1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBjb2xvcjogIzk2QjdDOTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjFGOEZDO1xufVxuLmN1c3RvbS1idG46aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6ICMwRTQyNUY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2JkZGVmMTtcbn1cblxuLmFjdGl2ZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjMEU0MjVGO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZGRlZjE7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _Core_services_messaging_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Core/_services/messaging.service */ "./src/app/Core/_services/messaging.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Core/_services/auth.service */ "./src/app/Core/_services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(http, msgService, authService) {
        this.http = http;
        this.msgService = msgService;
        this.authService = authService;
        this.rooms = [];
        this.room_messages = [];
        this._message = '';
        this.roomNotifications = [];
        // TODO: Can probably remove these props
        this._roomPrivate = '';
        this.formImport = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            importFileGroup: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
                importFile: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            }),
            roomNameGroup: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
                roomName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(60)
                ])
            }),
            privateRoomGroup: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
                privateRoom: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('')
            })
        });
    }
    Object.defineProperty(MessagesComponent.prototype, "message", {
        get: function () {
            return this._message;
        },
        set: function (value) {
            this._message = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MessagesComponent.prototype, "roomPrivate", {
        get: function () {
            return this._roomPrivate;
        },
        set: function (value) {
            this._roomPrivate = value;
        },
        enumerable: true,
        configurable: true
    });
    MessagesComponent.prototype.onFileChange = function (event) {
        var _this = this;
        if (!(event.target.files && event.target.files[0])) {
            return;
        }
        var file = event.target.files[0];
        this.fileToUpload = file;
        var reader = new FileReader();
        reader.readAsDataURL(file); // read file as data url
        reader.onload = function (_event) {
            console.log(reader.result); // log base64 string
            _this.imagePath = reader.result;
        };
    };
    // Send a message
    MessagesComponent.prototype.sendMessage = function () {
        var _a = this, message = _a.message, currentUser = _a.currentUser;
        this.currentUser.sendMessage({
            text: message,
            roomId: this.current_room.id,
        }).then(function (res) {
            console.log(res);
        });
        this.message = '';
    };
    // Join a room
    MessagesComponent.prototype.joinRoom = function (roomID) {
        var _this = this;
        this.currentUser.joinRoom({ roomId: roomID }).then(function (room) {
            _this.current_room = room;
            // After joining room, fetch messages
            _this.currentUser.fetchMultipartMessages({ roomId: roomID }).then(function (messages) {
                // Check if messages
                if (messages === undefined || messages.length === 0) {
                    return;
                }
                // Set read cursor
                _this.currentUser.setReadCursor({
                    roomId: _this.current_room.id,
                    position: messages[messages.length - 1].id
                })
                    .then(function () {
                    _this.roomNotifications[room.id] = false;
                }); // Remove marker from notifications array
                // .then(() => {
                //     console.log('Set cursor');
                //   })
                //   .catch(err => {
                //     console.log(`Error setting cursor: ${err}`);
                //   });
                messages.forEach(function (message) {
                    // console.log(message.parts[0].payload.content);
                });
                _this.room_messages = messages;
            });
        });
    };
    // end Join room
    // Function => check if user has unread messages in a room
    MessagesComponent.prototype.hasUnread = function (roomID) {
        var hasUnread = false; // Track return status
        // First, check if cursor exists
        var cursor = this.currentUser.readCursor({
            roomId: roomID
        });
        // if read cursor ID !== latest message ID...
        this.currentUser.fetchMultipartMessages({
            roomId: roomID,
            limit: 1,
        })
            .then(function (messages) {
            if (cursor) { // Has cursor so check cursor pos vs latest message id
                hasUnread = (cursor.position !== messages[0].initialId) ? true : false;
            }
            else {
                // No cursor => set
            }
        })
            .catch(function (err) {
            console.log("Error fetching messages: " + err);
        });
        return hasUnread;
    };
    // Get Chatkit user
    MessagesComponent.prototype.getUser = function (user_id) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/chatkit/getuser", { user_id: user_id })
            .toPromise()
            .then(function (res) {
            return res;
            console.log(res);
        })
            .catch(function (error) { return console.log(error); });
    };
    // Get Chatkit user's rooms
    MessagesComponent.prototype.getUserRooms = function (user_id) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/chatkit/getuserrooms", { user_id: user_id })
            .toPromise()
            .then(function (res) {
            // this.rooms = res;
            console.log(res);
            return res;
        })
            .catch(function (error) { return console.log(error); });
    };
    //
    // ─── SUBSCRIBE TO ROOM ──────────────────────────────────────────────────────────
    //
    MessagesComponent.prototype.subscribeToRoom = function (roomID) {
        var _this = this;
        this.currentUser.subscribeToRoomMultipart({
            roomId: roomID,
            hooks: {
                onMessage: function (message) {
                    // When a message is received...
                    // Push to messages array and update view
                    _this.room_messages.push(message);
                    // Get the users last cursor position from the room
                    var cursor = _this.currentUser.readCursor({
                        roomId: message.roomId
                    });
                    if ((cursor.position !== message.id) && (message.roomId !== _this.current_room.id)) {
                        // If the current user has not seen the message, AND the message was received in a different room,
                        // add marker to notification array
                        _this.roomNotifications[message.room.id] = true;
                    }
                    else {
                        // Otherwise, message was sent in current room, so all we must do is update the
                        // read cursor for the current user's room
                        _this.currentUser.setReadCursor({
                            roomId: message.roomId,
                            position: message.id,
                        });
                    }
                    // Count rooms with unread notifucations
                    var roomsWithNotifications = 0;
                    _this.roomNotifications.forEach(function (room) {
                        roomsWithNotifications += room === true ? 1 : 0;
                    });
                    // Add to global notification counter
                    // this.msgService.setRoomsWithNotifications(roomsWithNotifications);
                },
                onAddedToRoom: function (room) {
                    console.log("Added to room " + room.name);
                }
            },
            messageLimit: 0
        });
    };
    // ────────────────────────────────────────────────────────────────────────────────
    // Create room
    MessagesComponent.prototype.createRoom = function () {
        var _this = this;
        this.roomCreated = true;
        return;
        // this.isLoading = true; // Display loading icon
        var roomName = this.formImport.value.roomNameGroup.roomName;
        var privateRoom = this.formImport.value.privateRoomGroup.privateRoom;
        var roomAvatar = this.formImport.value.importFileGroup.importFile;
        console.log(this.formImport.value.roomNameGroup.roomName);
        console.log(this.formImport.value.privateRoomGroup.privateRoom);
        console.log(this.formImport.value.importFileGroup.importFile);
        console.log(this.fileToUpload);
        console.log(this.formImport.value);
        var formData = new FormData();
        var b64string = JSON.stringify(this.imagePath);
        formData.append('file', b64string);
        formData.append('testvar', 'my test var value');
        console.log(formData);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Accept', 'application/json');
        // Create room and insert room avatar into database
        this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/asdf", formData)
            .toPromise()
            .then(function (res) {
            console.log(res);
            console.log('Image uploaded');
            _this.currentUser.createRoom({
                name: roomName,
                private: true,
                customData: { roomAvatar: res['_id'] },
            }).then(function (room) {
                // this.isLoading = false;
                _this.roomCreated = true;
                console.log("Created room called " + room.name);
            })
                .catch(function (err) {
                console.log("Error creating room " + err);
            });
        })
            .catch(function (err) {
            console.log('Error uploading room image');
        });
    };
    MessagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.authService.currentUser.subscribe(function (user) {
            _this.currentUser = user;
            _this.rooms = user.rooms;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('avatar'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MessagesComponent.prototype, "avatar", void 0);
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.scss */ "./src/app/messages/messages.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _Core_services_messaging_service__WEBPACK_IMPORTED_MODULE_3__["MessagingService"], _Core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/rooms/rooms.component.html":
/*!********************************************!*\
  !*** ./src/app/rooms/rooms.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"height:100vh;\">\n\n  <ng-container *ngIf=\"current_room\">\n    <app-top-bar [viewName]=\"'Rooms'\" [headerText]=\"current_room.name\"></app-top-bar>\n  </ng-container>\n\n  <ng-container *ngIf=\"!current_room\">\n    <app-top-bar [viewName]=\"'Rooms'\" [headerText]=\"'Chat'\"></app-top-bar>\n  </ng-container>\n\n  <!--<button type=\"button\" class=\"ml-auto btn btn-outline-primary\" data-toggle=\"modal\" data-target=\"#addRoomModal\" placement=\"left\" ngbTooltip=\"Edit Room\" triggers=\"hover\" [autoClose]=\"true\">\n    <i class=\"fa fa-cog\"></i>\n  </button>-->\n\n  <div class=\"row page-content\">\n    <div class=\"col-12 col-lg-3 overflow-auto\" style=\"background-color:#F1F8FC; border-bottom:1px solid #DAE6ED;\">\n        \n          <!-- Begin rooms list -->\n          <div *ngIf=\"rooms && current_room\" id=\"messages\" class=\"row\">\n            <div class=\"col-12 my-2 px-3\">\n                <button class=\"btn btn-block custom-btn text-left mr-4 my-2 p-3 user-action-btn\"  data-toggle=\"modal\"\n                 data-target=\"#addRoomModal\" (click)=\"roomCreated = false\">New Room <i class=\"fa fa-plus\"></i> </button>\n\n                <ng-container *ngFor=\"let room of rooms\">\n                <button class=\"btn btn-block custom-btn text-left my-2 p-3\" (click)=\"joinRoom(room.id)\"\n                [ngClass]=\"{ 'active': current_room.id == room.id }\">\n                    <div class=\"room d-flex align-items-center justify-content-between\">\n                        <ng-container *ngIf=\"room?.custom_data !== undefined\">\n                            <div class=\"\" [ngStyle]=\"{ 'background-image': 'url(assets/avatars/' + room.customData.roomAvatar + ')', 'height':'50px', 'width':'50px', 'background-size':'cover', 'background-position':'center, center' }\">\n                            </div>\n                        </ng-container>\n                        <span>{{ room.name }}</span>\n                        <span *ngIf=\"roomNotifications[room.id]\" class=\"badge badge-secondary\">New</span>\n                      </div>\n                  </button>\n                </ng-container>\n              </div>\n            <div *ngIf=\"currentUser\" class=\"col-12\">\n                <div class=\"message-wrap\">\n                  <img src=\"https://images.unsplash.com/photo-1509868918748-a554ad25f858?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3159ec467959b2aada4b75d565c270aa\" class=\"img-fluid\" alt=\"\" style=\"border-radius: 100px;width: 50px;height: 50px;object-fit: cover;object-position: center;\">\n                  <span>{{ currentUser.name }}</span>\n                  <button class=\"btn btn-link\" (click)=\"viewUserModal\">{{ currentUser.name }}</button>\n                </div>\n            </div>\n          </div>\n    </div>\n    <div class=\"col-12 col-lg-9 overflow-auto\" style=\"background-color: #fafdff; border-left:1px solid #DAE6ED;\">\n      <div class=\"chat-window overflow-auto\" style=\"height: calc(100vh - 174px); position:relative;\">\n        <ng-container *ngIf=\"rooms_with_messages\">\n          <div class=\"container-fluid mt-3\" #chatReel>\n            <div *ngFor=\"let room of rooms_with_messages | keyvalue\">\n                <ng-container *ngIf=\"room.key===current_room.id\">\n                    <div class=\"row\" id=\"chatReel\">\n                        <!-- [ngClass]=\"current_room.userStore.users[message.senderId].id == chatkitUser.id ? 'text-secondary-light' : 'text-secondary'\"  -->\n                        <!-- Messages -->\n                        <div class=\"col-12\">\n                            <span role=\"button\" tabindex=\"0\" class=\"chat-user-link\" (click)=\"setSelectedRoomMember(current_room.users[room.value.senderId])\" data-toggle=\"modal\" data-target=\"#profileModal\" style=\"font-weight:500\">\n                                {{ room.value.sender.name }}\n                            </span>\n                          <small class=\"text-muted pl-1\" style=\"font-size:12px;\">\n                            <span *ngIf=\"MessageSentToday(room.value.createdAt);else full_date\">Today at {{ room.value.createdAt | date:'shortTime' }}</span>\n                            <ng-template #full_date>{{ room.value.createdAt | date }} at {{ room.value.createdAt | date:'shortTime' }}</ng-template>\n                          </small>\n                          <p style=\"color:#626e7a; font-size:15px;\">{{ room.value.parts[0].payload.content }}</p>\n                          <hr>\n                        </div>\n                      </div>\n                </ng-container>\n              \n            </div>\n          </div>\n        </ng-container>\n      </div>\n      <div class=\"chat-footer\" style=\"position: absolute; bottom: 0; left: 0; width: 100%;\">\n        <!--TODO: Change placeholder to only display room name if room name is defined-->\n        <form (ngSubmit)='sendMessage()'>\n          <input *ngIf=\"current_room\" [placeholder]=\"(current_room.name) ? 'Message ' + current_room.name : 'Message'\" type=\"text\" name=\"message\" [(ngModel)]=\"message\">\n        </form>\n      </div>\n    </div>\n\n    <!-- view user modal -->\n    <app-small *ngIf=\"selectedRoomMember\" [user]=\"selectedRoomMember\" [isConnection]=\"isConnection\"></app-small>\n    <!-- end view user modal -->\n    \n  </div>\n  <!-- Messages Header -->\n</div>\n\n<!-- Create room modal -->\n<div class=\"modal fade\" id=\"addRoomModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addRoomModal\" aria-hidden=\"true\">\n\n  <!-- Show success alert on room created -->\n  <div *ngIf=\"roomCreated\" class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\n        <strong>Success!</strong> Created room\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n    </div>\n  </div>  <!-- End success modal dialog -->\n\n  <div *ngIf=\"!roomCreated\" class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <!-- Modal Header -->\n      <div class=\"modal-header\">\n        <!-- Modal Title -->\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Create Room</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <!-- Add room form -->\n        <form (ngSubmit)='createRoom()' [formGroup]=\"formImport\" enctype=\"multipart/form-data\">\n          <!-- Room Name -->\n          <div class=\"form-group\" formGroupName=\"roomNameGroup\">\n            <label for=\"room_name\">Room name</label>\n            <input id=\"room_name\" formControlName=\"roomName\" placeholder=\"Enter a room name\" type=\"text\" class=\"form-control\" required>\n            <small id=\"roomNameHelp\" class=\"form-text text-muted\">A room name must be no longer than 60 characters.</small>\n          </div>\n          <!-- Private? -->\n          <div class=\"form-group\" formGroupName=\"privateRoomGroup\">\n            <div class=\"custom-control custom-switch\">\n              <input type=\"checkbox\" formControlName=\"privateRoom\" class=\"custom-control-input\" id=\"private_room\">\n              <label class=\"custom-control-label\" for=\"private_room\">Private room?</label>\n            </div>\n          </div>\n          <!-- Room Avatar -->\n          <div class=\"form-group\" formGroupName=\"userAvatarFileGroup\">\n            <div class=\"form-control-file\">\n              <div class=\"custom-file\">\n                <img src={{imagePath}} width=\"150\" alt=\"Thumb preview...\">\n                <input formControlName=\"avatar\" (change)=\"onFileChange($event)\" type=\"file\" accept=\".png, .jpg, .jpeg\" class=\"custom-file-input\" id=\"avatar\" #avatar>\n                <label class=\"custom-file-label\" for=\"avatar\">Choose file</label>\n              </div>\n            </div>\n          </div>\n          <!-- Submit -->\n          <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!formImport.valid\">Submit</button>\n        </form>\n      </div>\n      <!-- Modal Footer -->\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n      </div>\n    </div> <!-- End modal content -->\n  </div> <!-- End modal dialog -->\n</div> <!-- End modal -->\n"

/***/ }),

/***/ "./src/app/rooms/rooms.component.scss":
/*!********************************************!*\
  !*** ./src/app/rooms/rooms.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#messages_header {\n  background-color: #FFF;\n  z-index: 2;\n  font-family: 'Poppins', sans-serif;\n  font-weight: bold;\n  color: #94B0C0;\n  top: 0;\n  position: -webkit-sticky;\n  position: sticky; }\n\n#messages {\n  position: relative; }\n\n.message-wrap {\n  background: #F3F6F8;\n  padding: 16px 16px;\n  margin-top: 3px;\n  border-radius: 3px;\n  transition: 0.2s ease box-shadow;\n  position: relative; }\n\n.message-wrap:hover:after {\n    content: \"\";\n    position: absolute;\n    top: 0px;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    right: 0;\n    z-index: 1;\n    box-shadow: 0px 4px 12px rgba(21, 157, 246, 0.5); }\n\n.message-wrap #status {\n    font-size: 8px;\n    margin-left: 40px;\n    line-height: .005 !important; }\n\n.chat-footer form {\n  width: 100%;\n  display: flex;\n  padding-bottom: 40px;\n  padding-top: 20px; }\n\n.chat-footer {\n  background-color: #FFFFFF;\n  padding: inherit;\n  border-top: 1px solid #DAE6ED; }\n\n.chat-footer input {\n  width: 100%;\n  background: #FFFFFF;\n  /* Primary 25 */\n  border: 1px solid #C9EBFF;\n  box-sizing: border-box;\n  border-radius: 3px;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: normal;\n  letter-spacing: 0.75px;\n  padding: 10px;\n  color: #0E425F; }\n\n.chat-footer input::-webkit-input-placeholder {\n  color: #96B7C9; }\n\n.chat-footer input:-ms-input-placeholder {\n  color: #96B7C9; }\n\n.chat-footer input::-ms-input-placeholder {\n  color: #96B7C9; }\n\n.chat-footer input::placeholder {\n  color: #96B7C9; }\n\n.active {\n  background-color: white !important;\n  color: #0E425F;\n  border: 1px solid #bddef1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Db25ub3IvQ2hhdHZlcnNpdHlfQXBwL3NyYy9hcHAvcm9vbXMvcm9vbXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBcUI7RUFDckIsVUFBVTtFQUNWLGtDQUFrQztFQUNsQyxpQkFBaUI7RUFDakIsY0FBYztFQUNkLE1BQUs7RUFDTCx3QkFBZ0I7RUFBaEIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksbUJBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdDQUFnQztFQUNoQyxrQkFBaUIsRUFBQTs7QUFOckI7SUFTUSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsT0FBTztJQUNQLFdBQVc7SUFDWCxRQUFRO0lBQ1IsVUFBVTtJQUNWLGdEQUFnRCxFQUFBOztBQWpCeEQ7SUFxQlEsY0FBYztJQUNkLGlCQUFpQjtJQUNqQiw0QkFBNEIsRUFBQTs7QUFJcEM7RUFDSSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSx5QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLDZCQUE2QixFQUFBOztBQUVqQztFQUNJLFdBQVU7RUFDVixtQkFBbUI7RUFDbkIsZUFBQTtFQUNBLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFFdEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsYUFBWTtFQUNaLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxjQUFjLEVBQUE7O0FBRGxCO0VBQ0ksY0FBYyxFQUFBOztBQURsQjtFQUNJLGNBQWMsRUFBQTs7QUFEbEI7RUFDSSxjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksa0NBQWtDO0VBQ2xDLGNBQWM7RUFDZCx5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Jvb21zL3Jvb21zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21lc3NhZ2VzX2hlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojRkZGO1xuICAgIHotaW5kZXg6IDI7XG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzk0QjBDMDtcbiAgICB0b3A6MDtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xufVxuXG4jbWVzc2FnZXMge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm1lc3NhZ2Utd3JhcCB7XG4gICAgYmFja2dyb3VuZDojRjNGNkY4O1xuICAgIHBhZGRpbmc6IDE2cHggMTZweDtcbiAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZSBib3gtc2hhZG93O1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuXG4gICAgJjpob3ZlcjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDEycHggcmdiYSgyMSwgMTU3LCAyNDYsIDAuNSk7ICAgIFxuICAgIH1cblxuICAgICNzdGF0dXMge1xuICAgICAgICBmb250LXNpemU6IDhweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAuMDA1ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG4uY2hhdC1mb290ZXIgZm9ybSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbn1cbi5jaGF0LWZvb3RlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojRkZGRkZGOyBcbiAgICBwYWRkaW5nOiBpbmhlcml0O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjREFFNkVEO1xufVxuLmNoYXQtZm9vdGVyIGlucHV0IHtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgLyogUHJpbWFyeSAyNSAqL1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNDOUVCRkY7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAvL2JveC1zaGFkb3c6IGluc2V0IDBweCAxcHggM3B4IHJnYmEoMjEsIDE1NywgMjQ2LCAwLjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC43NXB4O1xuICAgIHBhZGRpbmc6MTBweDtcbiAgICBjb2xvcjogIzBFNDI1Rjtcbn1cblxuLmNoYXQtZm9vdGVyIGlucHV0OjpwbGFjZWhvbGRlcntcbiAgICBjb2xvcjogIzk2QjdDOTtcbn1cblxuLmFjdGl2ZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjMEU0MjVGO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZGRlZjE7XG59XG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/rooms/rooms.component.ts":
/*!******************************************!*\
  !*** ./src/app/rooms/rooms.component.ts ***!
  \******************************************/
/*! exports provided: RoomsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomsComponent", function() { return RoomsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _Core_services_messaging_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Core/_services/messaging.service */ "./src/app/Core/_services/messaging.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Core/_services/auth.service */ "./src/app/Core/_services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RoomsComponent = /** @class */ (function () {
    //
    // ─── CONSTRUCTOR ────────────────────────────────────────────────────────────────
    //
    function RoomsComponent(http, messageService, authService) {
        this.http = http;
        this.messageService = messageService;
        this.authService = authService;
        this.selectedFile = null;
        this.fd = new FormData();
        this.rooms = [];
        this.rooms_with_messages = {};
        this.roomNotifications = [];
        // TODO: Can probably remove these props
        this._roomPrivate = '';
        this._message = '';
        this.formImport = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            userAvatarFileGroup: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
                avatar: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            }),
            roomNameGroup: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
                roomName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(60)
                ])
            }),
            privateRoomGroup: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
                privateRoom: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('')
            })
        });
    }
    Object.defineProperty(RoomsComponent.prototype, "roomPrivate", {
        get: function () {
            return this._roomPrivate;
        },
        set: function (value) {
            this._roomPrivate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RoomsComponent.prototype, "message", {
        get: function () {
            return this._message;
        },
        set: function (value) {
            this._message = value;
        },
        enumerable: true,
        configurable: true
    });
    // ────────────────────────────────────────────────────────────────────────────────
    //
    // ─── DETECT FILE CHANGE FOR ROOM AVATAR ON CREATION ─────────────────────────────
    //
    RoomsComponent.prototype.onFileChange = function (event) {
        if (!(event.target.files && event.target.files[0])) {
            return;
        }
        this.selectedFile = event.target.files[0];
        this.fd.append('avatar', this.selectedFile, this.selectedFile.name);
    };
    // ────────────────────────────────────────────────────────────────────────────────
    //
    // ─── VIEW A USER IN THE ROOM ────────────────────────────────────────────────────
    //
    RoomsComponent.prototype.setSelectedRoomMember = function (user) {
        this.selectedRoomMember = user;
    };
    // ────────────────────────────────────────────────────────────────────────────────
    //
    // ─── SEND A MESSAGE ─────────────────────────────────────────────────────────────
    //
    RoomsComponent.prototype.sendMessage = function () {
        var _a = this, message = _a.message, currentUser = _a.currentUser;
        this.currentUser.sendMessage({
            text: message,
            roomId: this.current_room.id,
        }).then(function (res) {
            console.log(res);
            console.log();
        });
        this.message = '';
    };
    // ─────────────────────────────────────────────────────────────────
    //
    // ─── JOIN A ROOM ────────────────────────────────────────────────────────────────
    //
    RoomsComponent.prototype.joinRoom = function (roomID) {
        var _this = this;
        this.messageService.joinRoom(this.currentUser, roomID).then(function (room) {
            // update current room
            _this.current_room = room;
        });
    };
    // ────────────────────────────────────────────────────────────────────────────────
    //
    // ─── CHECK UNREAD MESSAGES ──────────────────────────────────────────────────────
    //
    RoomsComponent.prototype.hasUnread = function (roomID) {
        var hasUnread = false; // Track return status
        // First, check if cursor exists
        var cursor = this.currentUser.readCursor({
            roomId: roomID
        });
        // if read cursor ID !== latest message ID...
        this.currentUser.fetchMultipartMessages({
            roomId: roomID,
            limit: 1,
        })
            .then(function (messages) {
            if (cursor) { // Has cursor so check cursor pos vs latest message id
                hasUnread = (cursor.position !== messages[0].initialId) ? true : false;
            }
            else {
                // No cursor => set
            }
        })
            .catch(function (err) {
            console.log("Error fetching messages: " + err);
        });
        return hasUnread;
    };
    // ────────────────────────────────────────────────────────────────────────────────
    //
    // ─── GET CHATKIT USER ───────────────────────────────────────────────────────────
    //
    RoomsComponent.prototype.getUser = function (user_id) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/chatkit/getuser", { user_id: user_id })
            .toPromise()
            .then(function (res) {
            return res;
            console.log(res);
        })
            .catch(function (error) { return console.log(error); });
    };
    // ─────────────────────────────────────────────────────────────────
    //
    // ─── GET CHATKIT USERS ROOMS ────────────────────────────────────────────────────
    //
    RoomsComponent.prototype.getUserRooms = function (user_id) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/chatkit/getuserrooms", { user_id: user_id })
            .toPromise()
            .then(function (res) {
            // this.rooms = res;
            console.log(res);
            return res;
        })
            .catch(function (error) { return console.log(error); });
    };
    // ─────────────────────────────────────────────────────────────────
    //
    // ─── CREATE ROOM ────────────────────────────────────────────────────────────────
    //
    RoomsComponent.prototype.createRoom = function () {
        var _this = this;
        var roomName = this.formImport.value.roomNameGroup.roomName;
        var roomAvatar = '';
        // TODO: Add this to upload service
        // Upload image
        this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/rooms/avatar", this.fd)
            .toPromise()
            .then(function (avatar) {
            roomAvatar = avatar['filename']; // Store path
            console.log(roomAvatar);
            // Create the room
            _this.currentUser.createRoom({
                name: roomName,
                private: false,
                customData: { roomAvatar: roomAvatar },
            }).then(function (room) {
                _this.rooms.push(room); // Add the new room to the list
                _this.roomCreated = true;
                console.log(room);
                console.log("Created room called " + room.name);
            })
                .catch(function (err) {
                console.log("Error creating room " + err);
            });
        });
    };
    // ────────────────────────────────────────────────────────────────────────────────
    //
    // ─── CHECK IF MESSAGE TIMESTAMP IS TODAY ────────────────────────────────────────
    //
    RoomsComponent.prototype.MessageSentToday = function (msgDate) {
        // get current date
        var currDate = new Date();
        currDate.setDate(currDate.getDate());
        // console.log(currDate);
        // get message date
        msgDate = new Date(msgDate);
        // console.log(msgDate);
        var daysBetween = Math.floor((Date.parse(currDate.toDateString()) - Date.parse(msgDate.toDateString())) / 86400000);
        if (daysBetween >= 7) {
            console.log('Message is at least 7 days old');
        }
        return false;
    };
    // ────────────────────────────────────────────────────────────────────────────────
    RoomsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getCurrentUser().subscribe(function (user) {
            _this.currentUser = user;
            _this.rooms = user.rooms;
            _this.current_room = _this.messageService.getLatestRoom(user);
            console.log(_this.current_room);
            console.log(user.rooms);
            console.log(user);
        });
    };
    RoomsComponent.prototype.ngAfterViewInit = function () {
        this.chatReel.changes.subscribe(function (c) {
            c.toArray().forEach(function (item) {
                item.nativeElement.offsetParent.scrollTop = item.nativeElement.offsetParent.scrollHeight;
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])('chatReel'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], RoomsComponent.prototype, "chatReel", void 0);
    RoomsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rooms',
            template: __webpack_require__(/*! ./rooms.component.html */ "./src/app/rooms/rooms.component.html"),
            styles: [__webpack_require__(/*! ./rooms.component.scss */ "./src/app/rooms/rooms.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _Core_services_messaging_service__WEBPACK_IMPORTED_MODULE_3__["MessagingService"], _Core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], RoomsComponent);
    return RoomsComponent;
}());



/***/ }),

/***/ "./src/app/scroll-to-top.directive.ts":
/*!********************************************!*\
  !*** ./src/app/scroll-to-top.directive.ts ***!
  \********************************************/
/*! exports provided: ScrollToTopDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollToTopDirective", function() { return ScrollToTopDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ScrollToTopDirective = /** @class */ (function () {
    function ScrollToTopDirective(el) {
        el.nativeElement.style.backgroundColor = 'yellow';
        console.log(el.nativeElement.offsetHeight);
    }
    ScrollToTopDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appScrollToTop]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ScrollToTopDirective);
    return ScrollToTopDirective;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'http://localhost:3200',
    chatkitTestTokenEndpoint: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/a54bdf12-93d6-46f9-be3b-bfa837917fb5',
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'http://localhost:3200',
    chatkitTestTokenEndpoint: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/a54bdf12-93d6-46f9-be3b-bfa837917fb5',
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Connor/Chatversity_App/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** xhr2 (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map