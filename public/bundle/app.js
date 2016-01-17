/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!******************************!*\
  !*** ./src/client/index.es6 ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(/*! ./styles/app.css */ 1);
	
	var _Store = __webpack_require__(/*! ./factories/Store */ 5);
	
	var _Store2 = _interopRequireDefault(_Store);
	
	var _View = __webpack_require__(/*! ./factories/View */ 7);
	
	var _View2 = _interopRequireDefault(_View);
	
	var _Chat = __webpack_require__(/*! ./factories/Chat */ 8);
	
	var _Chat2 = _interopRequireDefault(_Chat);
	
	var _ViewRegistry = __webpack_require__(/*! ./factories/ViewRegistry */ 64);
	
	var _ViewRegistry2 = _interopRequireDefault(_ViewRegistry);
	
	var _ComponentRegistry = __webpack_require__(/*! ./factories/ComponentRegistry */ 79);
	
	var _ComponentRegistry2 = _interopRequireDefault(_ComponentRegistry);
	
	var _App = __webpack_require__(/*! ./factories/App */ 81);
	
	var _App2 = _interopRequireDefault(_App);
	
	var _index = __webpack_require__(/*! ./reducers/index */ 83);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _LoginForm = __webpack_require__(/*! ./components/LoginForm */ 100);
	
	var _LoginForm2 = _interopRequireDefault(_LoginForm);
	
	var _LoginError = __webpack_require__(/*! ./components/LoginError */ 120);
	
	var _LoginError2 = _interopRequireDefault(_LoginError);
	
	var _MessageForm = __webpack_require__(/*! ./components/MessageForm */ 104);
	
	var _MessageForm2 = _interopRequireDefault(_MessageForm);
	
	var _Buddies = __webpack_require__(/*! ./components/Buddies */ 105);
	
	var _Buddies2 = _interopRequireDefault(_Buddies);
	
	var _Messages = __webpack_require__(/*! ./components/Messages */ 107);
	
	var _Messages2 = _interopRequireDefault(_Messages);
	
	var _chat = __webpack_require__(/*! ./views/chat */ 112);
	
	var _chat2 = _interopRequireDefault(_chat);
	
	var _login = __webpack_require__(/*! ./views/login */ 114);
	
	var _login2 = _interopRequireDefault(_login);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var store = (0, _Store2.default)(_index2.default);
	var view = (0, _View2.default)(store.getState);
	var view_registry = (0, _ViewRegistry2.default)();
	var component_registry = (0, _ComponentRegistry2.default)(store);
	var chat = (0, _Chat2.default)('ws://localhost:8081', store.dispatch);
	
	var app = (0, _App2.default)(view, store, view_registry, component_registry).component('.login-form', (0, _LoginForm2.default)(chat)).component('.login-form__error', (0, _LoginError2.default)()).component('chat-form', (0, _MessageForm2.default)(chat)).component('.chat__buddies', (0, _Buddies2.default)()).component('.chat__messages', (0, _Messages2.default)()).shouldRender(function (prevState, nextState) {
	  return prevState.login !== nextState.login;
	}).view(_chat2.default, function (state) {
	  return !!state.login;
	}).view(_login2.default, function (state) {
	  return !state.login;
	});
	
	app.bootstrap(document.getElementById('app'));

/***/ },
/* 1 */
/*!***********************************!*\
  !*** ./src/client/styles/app.css ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader?importLoaders=1!./../../../~/postcss-loader!./app.css */ 2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?importLoaders=1!./../../../node_modules/postcss-loader/index.js!./app.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?importLoaders=1!./../../../node_modules/postcss-loader/index.js!./app.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/*!*************************************************************************************!*\
  !*** ./~/css-loader?importLoaders=1!./~/postcss-loader!./src/client/styles/app.css ***!
  \*************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 3)();
	// imports
	
	
	// module
	exports.push([module.id, "* {\n  box-sizing: border-box;\n}\n\nhtml {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  font-family: 'Proxima Nova', sans-serif;\n}\n\nbody {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n}\n\n#app {\n  height: 100%;\n}\n\n.chat {\n  height: 100%\n}\n\n.chat__form {\n  height: 100px;\n}\n\n.chat__messages {\n  -webkit-box-flex: 1;\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  overflow: auto;\n}\n\n.chat__content {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n\n.chat__sidebar {\n  width: 20%;\n  min-width: 200px;\n}\n\n.chat__columns {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  height: 100%;\n}\n", ""]);
	
	// exports


/***/ },
/* 3 */
/*!**************************************!*\
  !*** ./~/css-loader/lib/css-base.js ***!
  \**************************************/
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/*!*************************************!*\
  !*** ./~/style-loader/addStyles.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/*!****************************************!*\
  !*** ./src/client/factories/Store.es6 ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _without = __webpack_require__(/*! ../utils/without */ 6);
	
	var _without2 = _interopRequireDefault(_without);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Store = function Store(reducer) {
	
	  var state = reducer(undefined, { type: '@init@' }),
	      prevState = undefined,
	      listeners = [];
	
	  var dispatch = function dispatch(action) {
	    prevState = state;
	    state = reducer(prevState, action);
	
	    // console.groupCollapsed(action.type);
	    // console.log('prevState', prevState);
	    // console.log('action', action);
	    // console.log('nextState', state);
	    // console.groupEnd();
	
	    listeners.forEach(function (fn) {
	      return fn(state, prevState);
	    });
	  };
	
	  var subscribe = function subscribe(listener) {
	    listeners.push(listener);
	    return function unsubscribe() {
	      listeners = (0, _without2.default)(listener, listeners);
	    };
	  };
	
	  var removeListeners = function removeListeners() {
	    listeners = [];
	  };
	
	  var getState = function getState() {
	    return state;
	  };
	
	  return {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    removeListeners: removeListeners,
	    getState: getState
	  };
	};
	
	exports.default = Store;

/***/ },
/* 6 */
/*!**************************************!*\
  !*** ./src/client/utils/without.es6 ***!
  \**************************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = without;
	// without:: a -> [a] -> [a]
	function without(item) {
	  var array = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
	
	  var index = array.indexOf(item);
	
	  return index === -1 ? array : array.slice(0, index).concat(array.slice(index + 1));
	}

/***/ },
/* 7 */
/*!***************************************!*\
  !*** ./src/client/factories/View.es6 ***!
  \***************************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var View = function View(getState) {
	
	  var render = function render(view, root) {
	    root.innerHTML = view(getState());
	  };
	
	  return { render: render };
	};
	
	exports.default = View;

/***/ },
/* 8 */
/*!***************************************!*\
  !*** ./src/client/factories/Chat.es6 ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Chat;
	
	var _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ 9);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function Chat(url, dispatch) {
	
	  var socket = undefined;
	
	  var connect = function connect(username) {
	    var resolved = false;
	    return new _promise2.default(function (resolve, reject) {
	      socket = new WebSocket(url + "?username=" + username);
	      socket.onerror = reject;
	      socket.onmessage = function (event) {
	        var data = JSON.parse(event.data);
	
	        if (resolved) {
	          dispatch(data);
	        } else {
	          resolve(data.chat);
	          resolved = true;
	        }
	      };
	      socket.onclose = function (event) {
	        reject(event.reason);
	      };
	    });
	  };
	
	  var sendMessage = function sendMessage(message) {
	    socket.send(message);
	  };
	
	  return { connect: connect, sendMessage: sendMessage };
	}

/***/ },
/* 9 */
/*!********************************************!*\
  !*** ./~/babel-runtime/core-js/promise.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/promise */ 10), __esModule: true };

/***/ },
/* 10 */
/*!*****************************************!*\
  !*** ./~/core-js/library/fn/promise.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ../modules/es6.object.to-string */ 11);
	__webpack_require__(/*! ../modules/es6.string.iterator */ 12);
	__webpack_require__(/*! ../modules/web.dom.iterable */ 36);
	__webpack_require__(/*! ../modules/es6.promise */ 43);
	module.exports = __webpack_require__(/*! ../modules/$.core */ 20).Promise;

/***/ },
/* 11 */
/*!***********************************************************!*\
  !*** ./~/core-js/library/modules/es6.object.to-string.js ***!
  \***********************************************************/
/***/ function(module, exports) {



/***/ },
/* 12 */
/*!**********************************************************!*\
  !*** ./~/core-js/library/modules/es6.string.iterator.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(/*! ./$.string-at */ 13)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(/*! ./$.iter-define */ 16)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 13 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/$.string-at.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(/*! ./$.to-integer */ 14)
	  , defined   = __webpack_require__(/*! ./$.defined */ 15);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 14 */
/*!***************************************************!*\
  !*** ./~/core-js/library/modules/$.to-integer.js ***!
  \***************************************************/
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 15 */
/*!************************************************!*\
  !*** ./~/core-js/library/modules/$.defined.js ***!
  \************************************************/
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 16 */
/*!****************************************************!*\
  !*** ./~/core-js/library/modules/$.iter-define.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(/*! ./$.library */ 17)
	  , $export        = __webpack_require__(/*! ./$.export */ 18)
	  , redefine       = __webpack_require__(/*! ./$.redefine */ 23)
	  , hide           = __webpack_require__(/*! ./$.hide */ 24)
	  , has            = __webpack_require__(/*! ./$.has */ 29)
	  , Iterators      = __webpack_require__(/*! ./$.iterators */ 30)
	  , $iterCreate    = __webpack_require__(/*! ./$.iter-create */ 31)
	  , setToStringTag = __webpack_require__(/*! ./$.set-to-string-tag */ 32)
	  , getProto       = __webpack_require__(/*! ./$ */ 25).getProto
	  , ITERATOR       = __webpack_require__(/*! ./$.wks */ 33)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if($native){
	    var IteratorPrototype = getProto($default.call(new Base));
	    // Set @@toStringTag to native iterators
	    setToStringTag(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    // fix Array#{values, @@iterator}.name in V8 / FF
	    if(DEF_VALUES && $native.name !== VALUES){
	      VALUES_BUG = true;
	      $default = function values(){ return $native.call(this); };
	    }
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES  ? $default : getMethod(VALUES),
	      keys:    IS_SET      ? $default : getMethod(KEYS),
	      entries: !DEF_VALUES ? $default : getMethod('entries')
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 17 */
/*!************************************************!*\
  !*** ./~/core-js/library/modules/$.library.js ***!
  \************************************************/
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 18 */
/*!***********************************************!*\
  !*** ./~/core-js/library/modules/$.export.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(/*! ./$.global */ 19)
	  , core      = __webpack_require__(/*! ./$.core */ 20)
	  , ctx       = __webpack_require__(/*! ./$.ctx */ 21)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 19 */
/*!***********************************************!*\
  !*** ./~/core-js/library/modules/$.global.js ***!
  \***********************************************/
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 20 */
/*!*********************************************!*\
  !*** ./~/core-js/library/modules/$.core.js ***!
  \*********************************************/
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 21 */
/*!********************************************!*\
  !*** ./~/core-js/library/modules/$.ctx.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(/*! ./$.a-function */ 22);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 22 */
/*!***************************************************!*\
  !*** ./~/core-js/library/modules/$.a-function.js ***!
  \***************************************************/
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 23 */
/*!*************************************************!*\
  !*** ./~/core-js/library/modules/$.redefine.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./$.hide */ 24);

/***/ },
/* 24 */
/*!*********************************************!*\
  !*** ./~/core-js/library/modules/$.hide.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(/*! ./$ */ 25)
	  , createDesc = __webpack_require__(/*! ./$.property-desc */ 26);
	module.exports = __webpack_require__(/*! ./$.descriptors */ 27) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 25 */
/*!****************************************!*\
  !*** ./~/core-js/library/modules/$.js ***!
  \****************************************/
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 26 */
/*!******************************************************!*\
  !*** ./~/core-js/library/modules/$.property-desc.js ***!
  \******************************************************/
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 27 */
/*!****************************************************!*\
  !*** ./~/core-js/library/modules/$.descriptors.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(/*! ./$.fails */ 28)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 28 */
/*!**********************************************!*\
  !*** ./~/core-js/library/modules/$.fails.js ***!
  \**********************************************/
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 29 */
/*!********************************************!*\
  !*** ./~/core-js/library/modules/$.has.js ***!
  \********************************************/
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 30 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/$.iterators.js ***!
  \**************************************************/
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 31 */
/*!****************************************************!*\
  !*** ./~/core-js/library/modules/$.iter-create.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $              = __webpack_require__(/*! ./$ */ 25)
	  , descriptor     = __webpack_require__(/*! ./$.property-desc */ 26)
	  , setToStringTag = __webpack_require__(/*! ./$.set-to-string-tag */ 32)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(/*! ./$.hide */ 24)(IteratorPrototype, __webpack_require__(/*! ./$.wks */ 33)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 32 */
/*!**********************************************************!*\
  !*** ./~/core-js/library/modules/$.set-to-string-tag.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(/*! ./$ */ 25).setDesc
	  , has = __webpack_require__(/*! ./$.has */ 29)
	  , TAG = __webpack_require__(/*! ./$.wks */ 33)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 33 */
/*!********************************************!*\
  !*** ./~/core-js/library/modules/$.wks.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(/*! ./$.shared */ 34)('wks')
	  , uid    = __webpack_require__(/*! ./$.uid */ 35)
	  , Symbol = __webpack_require__(/*! ./$.global */ 19).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 34 */
/*!***********************************************!*\
  !*** ./~/core-js/library/modules/$.shared.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(/*! ./$.global */ 19)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 35 */
/*!********************************************!*\
  !*** ./~/core-js/library/modules/$.uid.js ***!
  \********************************************/
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 36 */
/*!*******************************************************!*\
  !*** ./~/core-js/library/modules/web.dom.iterable.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ./es6.array.iterator */ 37);
	var Iterators = __webpack_require__(/*! ./$.iterators */ 30);
	Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;

/***/ },
/* 37 */
/*!*********************************************************!*\
  !*** ./~/core-js/library/modules/es6.array.iterator.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(/*! ./$.add-to-unscopables */ 38)
	  , step             = __webpack_require__(/*! ./$.iter-step */ 39)
	  , Iterators        = __webpack_require__(/*! ./$.iterators */ 30)
	  , toIObject        = __webpack_require__(/*! ./$.to-iobject */ 40);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(/*! ./$.iter-define */ 16)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 38 */
/*!***********************************************************!*\
  !*** ./~/core-js/library/modules/$.add-to-unscopables.js ***!
  \***********************************************************/
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 39 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/$.iter-step.js ***!
  \**************************************************/
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 40 */
/*!***************************************************!*\
  !*** ./~/core-js/library/modules/$.to-iobject.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(/*! ./$.iobject */ 41)
	  , defined = __webpack_require__(/*! ./$.defined */ 15);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 41 */
/*!************************************************!*\
  !*** ./~/core-js/library/modules/$.iobject.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(/*! ./$.cof */ 42);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 42 */
/*!********************************************!*\
  !*** ./~/core-js/library/modules/$.cof.js ***!
  \********************************************/
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 43 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/es6.promise.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $          = __webpack_require__(/*! ./$ */ 25)
	  , LIBRARY    = __webpack_require__(/*! ./$.library */ 17)
	  , global     = __webpack_require__(/*! ./$.global */ 19)
	  , ctx        = __webpack_require__(/*! ./$.ctx */ 21)
	  , classof    = __webpack_require__(/*! ./$.classof */ 44)
	  , $export    = __webpack_require__(/*! ./$.export */ 18)
	  , isObject   = __webpack_require__(/*! ./$.is-object */ 45)
	  , anObject   = __webpack_require__(/*! ./$.an-object */ 46)
	  , aFunction  = __webpack_require__(/*! ./$.a-function */ 22)
	  , strictNew  = __webpack_require__(/*! ./$.strict-new */ 47)
	  , forOf      = __webpack_require__(/*! ./$.for-of */ 48)
	  , setProto   = __webpack_require__(/*! ./$.set-proto */ 53).set
	  , same       = __webpack_require__(/*! ./$.same-value */ 54)
	  , SPECIES    = __webpack_require__(/*! ./$.wks */ 33)('species')
	  , speciesConstructor = __webpack_require__(/*! ./$.species-constructor */ 55)
	  , asap       = __webpack_require__(/*! ./$.microtask */ 56)
	  , PROMISE    = 'Promise'
	  , process    = global.process
	  , isNode     = classof(process) == 'process'
	  , P          = global[PROMISE]
	  , Wrapper;
	
	var testResolve = function(sub){
	  var test = new P(function(){});
	  if(sub)test.constructor = Object;
	  return P.resolve(test) === test;
	};
	
	var USE_NATIVE = function(){
	  var works = false;
	  function P2(x){
	    var self = new P(x);
	    setProto(self, P2.prototype);
	    return self;
	  }
	  try {
	    works = P && P.resolve && testResolve();
	    setProto(P2, P);
	    P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
	    // actual Firefox has broken subclass support, test that
	    if(!(P2.resolve(5).then(function(){}) instanceof P2)){
	      works = false;
	    }
	    // actual V8 bug, https://code.google.com/p/v8/issues/detail?id=4162
	    if(works && __webpack_require__(/*! ./$.descriptors */ 27)){
	      var thenableThenGotten = false;
	      P.resolve($.setDesc({}, 'then', {
	        get: function(){ thenableThenGotten = true; }
	      }));
	      works = thenableThenGotten;
	    }
	  } catch(e){ works = false; }
	  return works;
	}();
	
	// helpers
	var sameConstructor = function(a, b){
	  // library wrapper special case
	  if(LIBRARY && a === P && b === Wrapper)return true;
	  return same(a, b);
	};
	var getConstructor = function(C){
	  var S = anObject(C)[SPECIES];
	  return S != undefined ? S : C;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var PromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve),
	  this.reject  = aFunction(reject)
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(record, isReject){
	  if(record.n)return;
	  record.n = true;
	  var chain = record.c;
	  asap(function(){
	    var value = record.v
	      , ok    = record.s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , result, then;
	      try {
	        if(handler){
	          if(!ok)record.h = true;
	          result = handler === true ? value : handler(value);
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    chain.length = 0;
	    record.n = false;
	    if(isReject)setTimeout(function(){
	      var promise = record.p
	        , handler, console;
	      if(isUnhandled(promise)){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      } record.a = undefined;
	    }, 1);
	  });
	};
	var isUnhandled = function(promise){
	  var record = promise._d
	    , chain  = record.a || record.c
	    , i      = 0
	    , reaction;
	  if(record.h)return false;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var $reject = function(value){
	  var record = this;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  record.v = value;
	  record.s = 2;
	  record.a = record.c.slice();
	  notify(record, true);
	};
	var $resolve = function(value){
	  var record = this
	    , then;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  try {
	    if(record.p === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      asap(function(){
	        var wrapper = {r: record, d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      record.v = value;
	      record.s = 1;
	      notify(record, false);
	    }
	  } catch(e){
	    $reject.call({r: record, d: false}, e); // wrap
	  }
	};
	
	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  P = function Promise(executor){
	    aFunction(executor);
	    var record = this._d = {
	      p: strictNew(this, P, PROMISE),         // <- promise
	      c: [],                                  // <- awaiting reactions
	      a: undefined,                           // <- checked in isUnhandled reactions
	      s: 0,                                   // <- state
	      d: false,                               // <- done
	      v: undefined,                           // <- value
	      h: false,                               // <- handled rejection
	      n: false                                // <- notify
	    };
	    try {
	      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
	    } catch(err){
	      $reject.call(record, err);
	    }
	  };
	  __webpack_require__(/*! ./$.redefine-all */ 61)(P.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction = new PromiseCapability(speciesConstructor(this, P))
	        , promise  = reaction.promise
	        , record   = this._d;
	      reaction.ok   = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      record.c.push(reaction);
	      if(record.a)record.a.push(reaction);
	      if(record.s)notify(record, false);
	      return promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: P});
	__webpack_require__(/*! ./$.set-to-string-tag */ 32)(P, PROMISE);
	__webpack_require__(/*! ./$.set-species */ 62)(PROMISE);
	Wrapper = __webpack_require__(/*! ./$.core */ 20)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = new PromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (!USE_NATIVE || testResolve(true)), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof P && sameConstructor(x.constructor, this))return x;
	    var capability = new PromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./$.iter-detect */ 63)(function(iter){
	  P.all(iter)['catch'](function(){});
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = getConstructor(this)
	      , capability = new PromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject
	      , values     = [];
	    var abrupt = perform(function(){
	      forOf(iterable, false, values.push, values);
	      var remaining = values.length
	        , results   = Array(remaining);
	      if(remaining)$.each.call(values, function(promise, index){
	        var alreadyCalled = false;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled = true;
	          results[index] = value;
	          --remaining || resolve(results);
	        }, reject);
	      });
	      else resolve(results);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = getConstructor(this)
	      , capability = new PromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 44 */
/*!************************************************!*\
  !*** ./~/core-js/library/modules/$.classof.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(/*! ./$.cof */ 42)
	  , TAG = __webpack_require__(/*! ./$.wks */ 33)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 45 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/$.is-object.js ***!
  \**************************************************/
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 46 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/$.an-object.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(/*! ./$.is-object */ 45);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 47 */
/*!***************************************************!*\
  !*** ./~/core-js/library/modules/$.strict-new.js ***!
  \***************************************************/
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name){
	  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
	  return it;
	};

/***/ },
/* 48 */
/*!***********************************************!*\
  !*** ./~/core-js/library/modules/$.for-of.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(/*! ./$.ctx */ 21)
	  , call        = __webpack_require__(/*! ./$.iter-call */ 49)
	  , isArrayIter = __webpack_require__(/*! ./$.is-array-iter */ 50)
	  , anObject    = __webpack_require__(/*! ./$.an-object */ 46)
	  , toLength    = __webpack_require__(/*! ./$.to-length */ 51)
	  , getIterFn   = __webpack_require__(/*! ./core.get-iterator-method */ 52);
	module.exports = function(iterable, entries, fn, that){
	  var iterFn = getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    call(iterator, f, step.value, entries);
	  }
	};

/***/ },
/* 49 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/$.iter-call.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(/*! ./$.an-object */ 46);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 50 */
/*!******************************************************!*\
  !*** ./~/core-js/library/modules/$.is-array-iter.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(/*! ./$.iterators */ 30)
	  , ITERATOR   = __webpack_require__(/*! ./$.wks */ 33)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 51 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/$.to-length.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(/*! ./$.to-integer */ 14)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 52 */
/*!***************************************************************!*\
  !*** ./~/core-js/library/modules/core.get-iterator-method.js ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(/*! ./$.classof */ 44)
	  , ITERATOR  = __webpack_require__(/*! ./$.wks */ 33)('iterator')
	  , Iterators = __webpack_require__(/*! ./$.iterators */ 30);
	module.exports = __webpack_require__(/*! ./$.core */ 20).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 53 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/$.set-proto.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(/*! ./$ */ 25).getDesc
	  , isObject = __webpack_require__(/*! ./$.is-object */ 45)
	  , anObject = __webpack_require__(/*! ./$.an-object */ 46);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(/*! ./$.ctx */ 21)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 54 */
/*!***************************************************!*\
  !*** ./~/core-js/library/modules/$.same-value.js ***!
  \***************************************************/
/***/ function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 55 */
/*!************************************************************!*\
  !*** ./~/core-js/library/modules/$.species-constructor.js ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(/*! ./$.an-object */ 46)
	  , aFunction = __webpack_require__(/*! ./$.a-function */ 22)
	  , SPECIES   = __webpack_require__(/*! ./$.wks */ 33)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 56 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/$.microtask.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(/*! ./$.global */ 19)
	  , macrotask = __webpack_require__(/*! ./$.task */ 57).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(/*! ./$.cof */ 42)(process) == 'process'
	  , head, last, notify;
	
	var flush = function(){
	  var parent, domain, fn;
	  if(isNode && (parent = process.domain)){
	    process.domain = null;
	    parent.exit();
	  }
	  while(head){
	    domain = head.domain;
	    fn     = head.fn;
	    if(domain)domain.enter();
	    fn(); // <- currently we use it only for Promise - try / catch not required
	    if(domain)domain.exit();
	    head = head.next;
	  } last = undefined;
	  if(parent)parent.enter();
	};
	
	// Node.js
	if(isNode){
	  notify = function(){
	    process.nextTick(flush);
	  };
	// browsers with MutationObserver
	} else if(Observer){
	  var toggle = 1
	    , node   = document.createTextNode('');
	  new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	  notify = function(){
	    node.data = toggle = -toggle;
	  };
	// environments with maybe non-completely correct, but existent Promise
	} else if(Promise && Promise.resolve){
	  notify = function(){
	    Promise.resolve().then(flush);
	  };
	// for other environments - macrotask based on:
	// - setImmediate
	// - MessageChannel
	// - window.postMessag
	// - onreadystatechange
	// - setTimeout
	} else {
	  notify = function(){
	    // strange IE + webpack dev server bug - use .call(global)
	    macrotask.call(global, flush);
	  };
	}
	
	module.exports = function asap(fn){
	  var task = {fn: fn, next: undefined, domain: isNode && process.domain};
	  if(last)last.next = task;
	  if(!head){
	    head = task;
	    notify();
	  } last = task;
	};

/***/ },
/* 57 */
/*!*********************************************!*\
  !*** ./~/core-js/library/modules/$.task.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(/*! ./$.ctx */ 21)
	  , invoke             = __webpack_require__(/*! ./$.invoke */ 58)
	  , html               = __webpack_require__(/*! ./$.html */ 59)
	  , cel                = __webpack_require__(/*! ./$.dom-create */ 60)
	  , global             = __webpack_require__(/*! ./$.global */ 19)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listner = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(/*! ./$.cof */ 42)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listner;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listner, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 58 */
/*!***********************************************!*\
  !*** ./~/core-js/library/modules/$.invoke.js ***!
  \***********************************************/
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 59 */
/*!*********************************************!*\
  !*** ./~/core-js/library/modules/$.html.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./$.global */ 19).document && document.documentElement;

/***/ },
/* 60 */
/*!***************************************************!*\
  !*** ./~/core-js/library/modules/$.dom-create.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(/*! ./$.is-object */ 45)
	  , document = __webpack_require__(/*! ./$.global */ 19).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 61 */
/*!*****************************************************!*\
  !*** ./~/core-js/library/modules/$.redefine-all.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(/*! ./$.redefine */ 23);
	module.exports = function(target, src){
	  for(var key in src)redefine(target, key, src[key]);
	  return target;
	};

/***/ },
/* 62 */
/*!****************************************************!*\
  !*** ./~/core-js/library/modules/$.set-species.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var core        = __webpack_require__(/*! ./$.core */ 20)
	  , $           = __webpack_require__(/*! ./$ */ 25)
	  , DESCRIPTORS = __webpack_require__(/*! ./$.descriptors */ 27)
	  , SPECIES     = __webpack_require__(/*! ./$.wks */ 33)('species');
	
	module.exports = function(KEY){
	  var C = core[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])$.setDesc(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 63 */
/*!****************************************************!*\
  !*** ./~/core-js/library/modules/$.iter-detect.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(/*! ./$.wks */ 33)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ safe = true; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 64 */
/*!***********************************************!*\
  !*** ./src/client/factories/ViewRegistry.es6 ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = ViewRegistry;
	
	var _slicedToArray2 = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ 65);
	
	var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);
	
	var _getIterator2 = __webpack_require__(/*! babel-runtime/core-js/get-iterator */ 69);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	var _map = __webpack_require__(/*! babel-runtime/core-js/map */ 72);
	
	var _map2 = _interopRequireDefault(_map);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function ViewRegistry() {
	
	  var views = new _map2.default();
	
	  var register = function register(viewFn, condition) {
	    views.set(viewFn, condition);
	  };
	
	  var get = function get(state) {
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;
	
	    try {
	      for (var _iterator = (0, _getIterator3.default)(views), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var _step$value = (0, _slicedToArray3.default)(_step.value, 2);
	
	        var viewFn = _step$value[0];
	        var condition = _step$value[1];
	
	        if (condition(state)) {
	          return viewFn;
	        }
	      }
	    } catch (err) {
	      _didIteratorError = true;
	      _iteratorError = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion && _iterator.return) {
	          _iterator.return();
	        }
	      } finally {
	        if (_didIteratorError) {
	          throw _iteratorError;
	        }
	      }
	    }
	  };
	
	  return { register: register, get: get };
	}

/***/ },
/* 65 */
/*!**************************************************!*\
  !*** ./~/babel-runtime/helpers/slicedToArray.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _isIterable2 = __webpack_require__(/*! ../core-js/is-iterable */ 66);
	
	var _isIterable3 = _interopRequireDefault(_isIterable2);
	
	var _getIterator2 = __webpack_require__(/*! ../core-js/get-iterator */ 69);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (function () {
	  function sliceIterator(arr, i) {
	    var _arr = [];
	    var _n = true;
	    var _d = false;
	    var _e = undefined;
	
	    try {
	      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
	        _arr.push(_s.value);
	
	        if (i && _arr.length === i) break;
	      }
	    } catch (err) {
	      _d = true;
	      _e = err;
	    } finally {
	      try {
	        if (!_n && _i["return"]) _i["return"]();
	      } finally {
	        if (_d) throw _e;
	      }
	    }
	
	    return _arr;
	  }
	
	  return function (arr, i) {
	    if (Array.isArray(arr)) {
	      return arr;
	    } else if ((0, _isIterable3.default)(Object(arr))) {
	      return sliceIterator(arr, i);
	    } else {
	      throw new TypeError("Invalid attempt to destructure non-iterable instance");
	    }
	  };
	})();

/***/ },
/* 66 */
/*!************************************************!*\
  !*** ./~/babel-runtime/core-js/is-iterable.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/is-iterable */ 67), __esModule: true };

/***/ },
/* 67 */
/*!*********************************************!*\
  !*** ./~/core-js/library/fn/is-iterable.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ../modules/web.dom.iterable */ 36);
	__webpack_require__(/*! ../modules/es6.string.iterator */ 12);
	module.exports = __webpack_require__(/*! ../modules/core.is-iterable */ 68);

/***/ },
/* 68 */
/*!*******************************************************!*\
  !*** ./~/core-js/library/modules/core.is-iterable.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(/*! ./$.classof */ 44)
	  , ITERATOR  = __webpack_require__(/*! ./$.wks */ 33)('iterator')
	  , Iterators = __webpack_require__(/*! ./$.iterators */ 30);
	module.exports = __webpack_require__(/*! ./$.core */ 20).isIterable = function(it){
	  var O = Object(it);
	  return O[ITERATOR] !== undefined
	    || '@@iterator' in O
	    || Iterators.hasOwnProperty(classof(O));
	};

/***/ },
/* 69 */
/*!*************************************************!*\
  !*** ./~/babel-runtime/core-js/get-iterator.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/get-iterator */ 70), __esModule: true };

/***/ },
/* 70 */
/*!**********************************************!*\
  !*** ./~/core-js/library/fn/get-iterator.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ../modules/web.dom.iterable */ 36);
	__webpack_require__(/*! ../modules/es6.string.iterator */ 12);
	module.exports = __webpack_require__(/*! ../modules/core.get-iterator */ 71);

/***/ },
/* 71 */
/*!********************************************************!*\
  !*** ./~/core-js/library/modules/core.get-iterator.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(/*! ./$.an-object */ 46)
	  , get      = __webpack_require__(/*! ./core.get-iterator-method */ 52);
	module.exports = __webpack_require__(/*! ./$.core */ 20).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 72 */
/*!****************************************!*\
  !*** ./~/babel-runtime/core-js/map.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/map */ 73), __esModule: true };

/***/ },
/* 73 */
/*!*************************************!*\
  !*** ./~/core-js/library/fn/map.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ../modules/es6.object.to-string */ 11);
	__webpack_require__(/*! ../modules/es6.string.iterator */ 12);
	__webpack_require__(/*! ../modules/web.dom.iterable */ 36);
	__webpack_require__(/*! ../modules/es6.map */ 74);
	__webpack_require__(/*! ../modules/es7.map.to-json */ 77);
	module.exports = __webpack_require__(/*! ../modules/$.core */ 20).Map;

/***/ },
/* 74 */
/*!**********************************************!*\
  !*** ./~/core-js/library/modules/es6.map.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(/*! ./$.collection-strong */ 75);
	
	// 23.1 Map Objects
	__webpack_require__(/*! ./$.collection */ 76)('Map', function(get){
	  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key){
	    var entry = strong.getEntry(this, key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value){
	    return strong.def(this, key === 0 ? 0 : key, value);
	  }
	}, strong, true);

/***/ },
/* 75 */
/*!**********************************************************!*\
  !*** ./~/core-js/library/modules/$.collection-strong.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $            = __webpack_require__(/*! ./$ */ 25)
	  , hide         = __webpack_require__(/*! ./$.hide */ 24)
	  , redefineAll  = __webpack_require__(/*! ./$.redefine-all */ 61)
	  , ctx          = __webpack_require__(/*! ./$.ctx */ 21)
	  , strictNew    = __webpack_require__(/*! ./$.strict-new */ 47)
	  , defined      = __webpack_require__(/*! ./$.defined */ 15)
	  , forOf        = __webpack_require__(/*! ./$.for-of */ 48)
	  , $iterDefine  = __webpack_require__(/*! ./$.iter-define */ 16)
	  , step         = __webpack_require__(/*! ./$.iter-step */ 39)
	  , ID           = __webpack_require__(/*! ./$.uid */ 35)('id')
	  , $has         = __webpack_require__(/*! ./$.has */ 29)
	  , isObject     = __webpack_require__(/*! ./$.is-object */ 45)
	  , setSpecies   = __webpack_require__(/*! ./$.set-species */ 62)
	  , DESCRIPTORS  = __webpack_require__(/*! ./$.descriptors */ 27)
	  , isExtensible = Object.isExtensible || isObject
	  , SIZE         = DESCRIPTORS ? '_s' : 'size'
	  , id           = 0;
	
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!$has(it, ID)){
	    // can't set id to frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add id
	    if(!create)return 'E';
	    // add missing object id
	    hide(it, ID, ++id);
	  // return object id with prefix
	  } return 'O' + it[ID];
	};
	
	var getEntry = function(that, key){
	  // fast case
	  var index = fastKey(key), entry;
	  if(index !== 'F')return that._i[index];
	  // frozen object case
	  for(entry = that._f; entry; entry = entry.n){
	    if(entry.k == key)return entry;
	  }
	};
	
	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      strictNew(that, C, NAME);
	      that._i = $.create(null); // index
	      that._f = undefined;      // first entry
	      that._l = undefined;      // last entry
	      that[SIZE] = 0;           // size
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear(){
	        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
	          entry.r = true;
	          if(entry.p)entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function(key){
	        var that  = this
	          , entry = getEntry(that, key);
	        if(entry){
	          var next = entry.n
	            , prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if(prev)prev.n = next;
	          if(next)next.p = prev;
	          if(that._f == entry)that._f = next;
	          if(that._l == entry)that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */){
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
	          , entry;
	        while(entry = entry ? entry.n : this._f){
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while(entry && entry.r)entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key){
	        return !!getEntry(this, key);
	      }
	    });
	    if(DESCRIPTORS)$.setDesc(C.prototype, 'size', {
	      get: function(){
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry){
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that._f)that._f = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index !== 'F')that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function(C, NAME, IS_MAP){
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function(iterated, kind){
	      this._t = iterated;  // target
	      this._k = kind;      // kind
	      this._l = undefined; // previous
	    }, function(){
	      var that  = this
	        , kind  = that._k
	        , entry = that._l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if(kind == 'keys'  )return step(0, entry.k);
	      if(kind == 'values')return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);
	
	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};

/***/ },
/* 76 */
/*!***************************************************!*\
  !*** ./~/core-js/library/modules/$.collection.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $              = __webpack_require__(/*! ./$ */ 25)
	  , global         = __webpack_require__(/*! ./$.global */ 19)
	  , $export        = __webpack_require__(/*! ./$.export */ 18)
	  , fails          = __webpack_require__(/*! ./$.fails */ 28)
	  , hide           = __webpack_require__(/*! ./$.hide */ 24)
	  , redefineAll    = __webpack_require__(/*! ./$.redefine-all */ 61)
	  , forOf          = __webpack_require__(/*! ./$.for-of */ 48)
	  , strictNew      = __webpack_require__(/*! ./$.strict-new */ 47)
	  , isObject       = __webpack_require__(/*! ./$.is-object */ 45)
	  , setToStringTag = __webpack_require__(/*! ./$.set-to-string-tag */ 32)
	  , DESCRIPTORS    = __webpack_require__(/*! ./$.descriptors */ 27);
	
	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  if(!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
	    new C().entries().next();
	  }))){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	  } else {
	    C = wrapper(function(target, iterable){
	      strictNew(target, C, NAME);
	      target._c = new Base;
	      if(iterable != undefined)forOf(iterable, IS_MAP, target[ADDER], target);
	    });
	    $.each.call('add,clear,delete,forEach,get,has,set,keys,values,entries'.split(','),function(KEY){
	      var IS_ADDER = KEY == 'add' || KEY == 'set';
	      if(KEY in proto && !(IS_WEAK && KEY == 'clear'))hide(C.prototype, KEY, function(a, b){
	        if(!IS_ADDER && IS_WEAK && !isObject(a))return KEY == 'get' ? undefined : false;
	        var result = this._c[KEY](a === 0 ? 0 : a, b);
	        return IS_ADDER ? this : result;
	      });
	    });
	    if('size' in proto)$.setDesc(C.prototype, 'size', {
	      get: function(){
	        return this._c.size;
	      }
	    });
	  }
	
	  setToStringTag(C, NAME);
	
	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F, O);
	
	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);
	
	  return C;
	};

/***/ },
/* 77 */
/*!******************************************************!*\
  !*** ./~/core-js/library/modules/es7.map.to-json.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(/*! ./$.export */ 18);
	
	$export($export.P, 'Map', {toJSON: __webpack_require__(/*! ./$.collection-to-json */ 78)('Map')});

/***/ },
/* 78 */
/*!***********************************************************!*\
  !*** ./~/core-js/library/modules/$.collection-to-json.js ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var forOf   = __webpack_require__(/*! ./$.for-of */ 48)
	  , classof = __webpack_require__(/*! ./$.classof */ 44);
	module.exports = function(NAME){
	  return function toJSON(){
	    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
	    var arr = [];
	    forOf(this, false, arr.push, arr);
	    return arr;
	  };
	};

/***/ },
/* 79 */
/*!****************************************************!*\
  !*** ./src/client/factories/ComponentRegistry.es6 ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = ComponentRegistry;
	
	var _identity = __webpack_require__(/*! ../utils/identity */ 80);
	
	var _identity2 = _interopRequireDefault(_identity);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function ComponentRegistry(Store) {
	
	  var registry = [];
	  var instances = [];
	
	  var register = function register(selector, factory) {
	    registry.push({ selector: selector, factory: factory });
	  };
	
	  var instantiate = function instantiate(root) {
	    instances = registry.map(function (_ref) {
	      var selector = _ref.selector;
	      var factory = _ref.factory;
	
	      var element = root.querySelector(selector);
	      return element ? factory(element, Store.dispatch) : null;
	    }).filter(_identity2.default);
	  };
	
	  var update = function update(nextState, prevState) {
	    instances.forEach(function (instance) {
	      if (instance.shouldUpdate(nextState, prevState)) {
	        instance.update(nextState, prevState);
	      }
	    });
	  };
	
	  return {
	    register: register,
	    instantiate: instantiate,
	    update: update
	  };
	}

/***/ },
/* 80 */
/*!***************************************!*\
  !*** ./src/client/utils/identity.es6 ***!
  \***************************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = identity;
	function identity(id) {
	  return id;
	}

/***/ },
/* 81 */
/*!**************************************!*\
  !*** ./src/client/factories/App.es6 ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _noop = __webpack_require__(/*! ../utils/noop */ 82);
	
	var _noop2 = _interopRequireDefault(_noop);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var App = function App(View, Store, ViewRegistry, ComponentRegistry) {
	
	  var _shouldRender = _noop2.default;
	  var root = undefined;
	
	  var tryRender = function tryRender(nextState, prevState) {
	    if (_shouldRender(prevState, nextState)) {
	      bootstrap(root);
	    }
	  };
	
	  var update = function update(nextState, prevState) {
	    tryRender(nextState, prevState);
	    ComponentRegistry.update(nextState, prevState);
	  };
	
	  var render = function render(state) {
	    var view = ViewRegistry.get(state) || _noop2.default;
	    View.render(view, root);
	  };
	
	  var bootstrap = function bootstrap(element) {
	    root = element;
	
	    render(Store.getState());
	    ComponentRegistry.instantiate(element);
	    Store.removeListeners();
	    Store.subscribe(update);
	  };
	
	  var app = {
	    view: function view() {
	      ViewRegistry.register.apply(ViewRegistry, arguments);
	      return this;
	    },
	    shouldRender: function shouldRender(fn) {
	      _shouldRender = fn;
	      return this;
	    },
	    component: function component() {
	      ComponentRegistry.register.apply(ComponentRegistry, arguments);
	      return this;
	    },
	
	    bootstrap: bootstrap
	  };
	
	  return app;
	};
	
	exports.default = App;

/***/ },
/* 82 */
/*!***********************************!*\
  !*** ./src/client/utils/noop.es6 ***!
  \***********************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = noop;
	function noop() {};

/***/ },
/* 83 */
/*!***************************************!*\
  !*** ./src/client/reducers/index.es6 ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reducers = __webpack_require__(/*! ../utils/reducers */ 84);
	
	var _chat = __webpack_require__(/*! ./chat */ 97);
	
	var _chat2 = _interopRequireDefault(_chat);
	
	var _login = __webpack_require__(/*! ./login */ 99);
	
	var _login2 = _interopRequireDefault(_login);
	
	var _login_error = __webpack_require__(/*! ./login_error */ 119);
	
	var _login_error2 = _interopRequireDefault(_login_error);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _reducers.combineReducers)({
	  chat: _chat2.default,
	  login: _login2.default,
	  login_error: _login_error2.default
	});

/***/ },
/* 84 */
/*!***************************************!*\
  !*** ./src/client/utils/reducers.es6 ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.combineReducers = combineReducers;
	
	var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ 85);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 88);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ 93);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function combineReducers(reducers) {
	  return function reducer() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments[1];
	
	    return (0, _keys2.default)(reducers).reduce(function (_state, key) {
	      return (0, _assign2.default)({}, _state, (0, _defineProperty3.default)({}, key, reducers[key](_state[key], action)));
	    }, state);
	  };
	}

/***/ },
/* 85 */
/*!***************************************************!*\
  !*** ./~/babel-runtime/helpers/defineProperty.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ 86);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	
	  return obj;
	};

/***/ },
/* 86 */
/*!***********************************************************!*\
  !*** ./~/babel-runtime/core-js/object/define-property.js ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/define-property */ 87), __esModule: true };

/***/ },
/* 87 */
/*!********************************************************!*\
  !*** ./~/core-js/library/fn/object/define-property.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(/*! ../../modules/$ */ 25);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 88 */
/*!**************************************************!*\
  !*** ./~/babel-runtime/core-js/object/assign.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/assign */ 89), __esModule: true };

/***/ },
/* 89 */
/*!***********************************************!*\
  !*** ./~/core-js/library/fn/object/assign.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ../../modules/es6.object.assign */ 90);
	module.exports = __webpack_require__(/*! ../../modules/$.core */ 20).Object.assign;

/***/ },
/* 90 */
/*!********************************************************!*\
  !*** ./~/core-js/library/modules/es6.object.assign.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(/*! ./$.export */ 18);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(/*! ./$.object-assign */ 91)});

/***/ },
/* 91 */
/*!******************************************************!*\
  !*** ./~/core-js/library/modules/$.object-assign.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var $        = __webpack_require__(/*! ./$ */ 25)
	  , toObject = __webpack_require__(/*! ./$.to-object */ 92)
	  , IObject  = __webpack_require__(/*! ./$.iobject */ 41);
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = __webpack_require__(/*! ./$.fails */ 28)(function(){
	  var a = Object.assign
	    , A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , $$    = arguments
	    , $$len = $$.length
	    , index = 1
	    , getKeys    = $.getKeys
	    , getSymbols = $.getSymbols
	    , isEnum     = $.isEnum;
	  while($$len > index){
	    var S      = IObject($$[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  }
	  return T;
	} : Object.assign;

/***/ },
/* 92 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/$.to-object.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(/*! ./$.defined */ 15);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 93 */
/*!************************************************!*\
  !*** ./~/babel-runtime/core-js/object/keys.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/keys */ 94), __esModule: true };

/***/ },
/* 94 */
/*!*********************************************!*\
  !*** ./~/core-js/library/fn/object/keys.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ../../modules/es6.object.keys */ 95);
	module.exports = __webpack_require__(/*! ../../modules/$.core */ 20).Object.keys;

/***/ },
/* 95 */
/*!******************************************************!*\
  !*** ./~/core-js/library/modules/es6.object.keys.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(/*! ./$.to-object */ 92);
	
	__webpack_require__(/*! ./$.object-sap */ 96)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 96 */
/*!***************************************************!*\
  !*** ./~/core-js/library/modules/$.object-sap.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(/*! ./$.export */ 18)
	  , core    = __webpack_require__(/*! ./$.core */ 20)
	  , fails   = __webpack_require__(/*! ./$.fails */ 28);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 97 */
/*!**************************************!*\
  !*** ./src/client/reducers/chat.es6 ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = chat;
	
	var _chat = __webpack_require__(/*! ../actions/chat */ 98);
	
	function chat() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var action = arguments[1];
	
	  switch (action.type) {
	
	    case _chat.CHAT:
	    case _chat.LOGIN:
	      return action.chat;
	
	    default:
	      return state;
	  }
	}

/***/ },
/* 98 */
/*!*************************************!*\
  !*** ./src/client/actions/chat.es6 ***!
  \*************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.receiveChat = receiveChat;
	exports.login = login;
	exports.loginError = loginError;
	var CHAT = exports.CHAT = 'CHAT';
	var LOGIN = exports.LOGIN = 'LOGIN';
	var LOGIN_ERROR = exports.LOGIN_ERROR = 'LOGIN_ERROR';
	
	function receiveChat(chat) {
	  return {
	    type: CHAT,
	    chat: chat
	  };
	}
	
	function login(username, chat) {
	  return {
	    type: LOGIN,
	    username: username,
	    chat: chat
	  };
	}
	
	function loginError(error) {
	  return {
	    type: LOGIN_ERROR,
	    error: error
	  };
	}

/***/ },
/* 99 */
/*!***************************************!*\
  !*** ./src/client/reducers/login.es6 ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = login;
	
	var _chat = __webpack_require__(/*! ../actions/chat */ 98);
	
	function login() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
	  var action = arguments[1];
	
	  switch (action.type) {
	
	    case _chat.LOGIN:
	      return action.username;
	
	    default:
	      return state;
	  }
	}

/***/ },
/* 100 */
/*!*********************************************!*\
  !*** ./src/client/components/LoginForm.es6 ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = LoginForm;
	
	__webpack_require__(/*! ../styles/LoginForm.css */ 101);
	
	var _chat = __webpack_require__(/*! ../actions/chat */ 98);
	
	var _Component = __webpack_require__(/*! ../factories/Component */ 103);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function LoginForm(Chat) {
	
	  return function LoginFormComponent(element, dispatch) {
	
	    var input = element.querySelector('input');
	
	    var onSubmit = function onSubmit(event) {
	      event.preventDefault();
	
	      var username = input.value;
	
	      Chat.connect(username).then(function (chat) {
	        return dispatch((0, _chat.login)(username, chat));
	      }, function (error) {
	        return dispatch((0, _chat.loginError)(error));
	      });
	    };
	
	    element.addEventListener('submit', onSubmit);
	    input.focus();
	
	    return (0, _Component2.default)();
	  };
	}

/***/ },
/* 101 */
/*!*****************************************!*\
  !*** ./src/client/styles/LoginForm.css ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader?importLoaders=1!./../../../~/postcss-loader!./LoginForm.css */ 102);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?importLoaders=1!./../../../node_modules/postcss-loader/index.js!./LoginForm.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?importLoaders=1!./../../../node_modules/postcss-loader/index.js!./LoginForm.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 102 */
/*!*******************************************************************************************!*\
  !*** ./~/css-loader?importLoaders=1!./~/postcss-loader!./src/client/styles/LoginForm.css ***!
  \*******************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 3)();
	// imports
	
	
	// module
	exports.push([module.id, ".login-form {\n\n  height: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center\n\n}\n.login-form__error {\n\n  color: #F00;\n\n}\n.login-form__controls {\n\n  margin-bottom: 20px;\n\n}\n", ""]);
	
	// exports


/***/ },
/* 103 */
/*!********************************************!*\
  !*** ./src/client/factories/Component.es6 ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Component;
	
	var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 88);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _noop = __webpack_require__(/*! ../utils/noop */ 82);
	
	var _noop2 = _interopRequireDefault(_noop);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function Component(methods) {
	  return (0, _assign2.default)({
	    shouldUpdate: function shouldUpdate() {
	      return true;
	    },
	
	    update: _noop2.default
	  }, methods);
	}

/***/ },
/* 104 */
/*!***********************************************!*\
  !*** ./src/client/components/MessageForm.es6 ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = MessageForm;
	
	__webpack_require__(/*! ../styles/MessageForm.css */ 115);
	
	var _Component = __webpack_require__(/*! ../factories/Component */ 103);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ENTER = 13;
	
	function MessageForm(Chat) {
	
	  return function MessageFormComponent(element) {
	
	    var input = element.querySelector('textarea');
	
	    var onSubmit = function onSubmit(event) {
	      event.preventDefault();
	      submit();
	    };
	
	    var submit = function submit() {
	      var message = input.value;
	
	      Chat.sendMessage(message);
	      input.value = '';
	    };
	
	    var onKeyDown = function onKeyDown(event) {
	      var modificator = event.shiftKey || event.ctrlKey || event.metaKey;
	
	      if (event.keyCode === ENTER && modificator) {
	        submit();
	      }
	    };
	
	    element.addEventListener('submit', onSubmit);
	    input.addEventListener('keydown', onKeyDown);
	    input.focus();
	
	    return (0, _Component2.default)();
	  };
	}

/***/ },
/* 105 */
/*!*******************************************!*\
  !*** ./src/client/components/Buddies.es6 ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Buddies;
	
	__webpack_require__(/*! ../styles/Buddies.css */ 117);
	
	var _buddies = __webpack_require__(/*! ../views/buddies */ 106);
	
	var _buddies2 = _interopRequireDefault(_buddies);
	
	var _Component = __webpack_require__(/*! ../factories/Component */ 103);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function Buddies() {
	
	  return function BuddiesComponent(element) {
	
	    return (0, _Component2.default)({
	      update: function update(state) {
	        element.innerHTML = (0, _buddies2.default)(state);
	      }
	    });
	  };
	}

/***/ },
/* 106 */
/*!**************************************!*\
  !*** ./src/client/views/buddies.es6 ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = buddies;
	
	var _classNames = __webpack_require__(/*! ../utils/classNames */ 111);
	
	var _classNames2 = _interopRequireDefault(_classNames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function buddyClassname(name, username) {
	  return (0, _classNames2.default)({
	    'buddies__buddy': true,
	    'buddies__buddy--me': name === username
	  });
	}
	
	function buddy(name, username) {
	  return '\n    <li class="' + buddyClassname(name, username) + '">' + name + '</li>\n  ';
	}
	
	function buddies(state) {
	  var content = state.chat.buddies.map(function (name) {
	    return buddy(name, state.login);
	  }).join('');
	
	  return '<ul class="buddies">' + content + '</ul>';
	}

/***/ },
/* 107 */
/*!********************************************!*\
  !*** ./src/client/components/Messages.es6 ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Messages;
	
	__webpack_require__(/*! ../styles/Messages.css */ 108);
	
	var _Component = __webpack_require__(/*! ../factories/Component */ 103);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	var _messages = __webpack_require__(/*! ../views/messages */ 110);
	
	var _messages2 = _interopRequireDefault(_messages);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function isAutoscrollEnabled(element) {
	  var at_bottom = element.clientHeight + element.scrollTop >= element.scrollHeight;
	  return at_bottom || !element.innerHTML.trim().length;
	}
	
	function Messages() {
	
	  return function MessagesComponent(element) {
	
	    return (0, _Component2.default)({
	      update: function update(state) {
	        var autoscroll = isAutoscrollEnabled(element);
	        element.innerHTML = (0, _messages2.default)(state);
	
	        if (autoscroll) {
	          element.scrollTop = element.scrollHeight - element.clientHeight;
	        }
	      }
	    });
	  };
	}

/***/ },
/* 108 */
/*!****************************************!*\
  !*** ./src/client/styles/Messages.css ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader?importLoaders=1!./../../../~/postcss-loader!./Messages.css */ 109);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?importLoaders=1!./../../../node_modules/postcss-loader/index.js!./Messages.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?importLoaders=1!./../../../node_modules/postcss-loader/index.js!./Messages.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 109 */
/*!******************************************************************************************!*\
  !*** ./~/css-loader?importLoaders=1!./~/postcss-loader!./src/client/styles/Messages.css ***!
  \******************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 3)();
	// imports
	
	
	// module
	exports.push([module.id, ".messages {\n\n  list-style: none;\n  margin: 0;\n  padding: 10px;\n  padding-left: 0\n\n}\n\n.messages__message {\n\n  margin-bottom: 20px;\n\n}\n\n.message__sender {\n\n  font-size: .8em;\n\n  color: #F00\n\n}\n\n.message__sender--system {\n\n  color: #999;\n\n}\n\n.message__sender--my {\n\n  color: #2EB3DE;\n\n}\n\n.message:before,\n  .message:after {\n\n  content: ' ';\n\n  display: table;\n\n  clear: both\n\n}\n", ""]);
	
	// exports


/***/ },
/* 110 */
/*!***************************************!*\
  !*** ./src/client/views/messages.es6 ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = messages;
	
	var _classNames = __webpack_require__(/*! ../utils/classNames */ 111);
	
	var _classNames2 = _interopRequireDefault(_classNames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var senderClassName = function senderClassName(msg, username) {
	  return (0, _classNames2.default)({
	    'message__sender': true,
	    'message__sender--system': !!msg.is_system,
	    'message__sender--my': msg.sender === username
	  });
	};
	
	function message(msg, username) {
	  return '\n    <li class="messages__message message">\n      <div class="' + senderClassName(msg, username) + '">' + msg.sender + ':</div>\n      <div class="message__content">' + msg.content + '</div>\n    </li>\n  ';
	}
	
	function messages(state) {
	
	  var content = state.chat.messages.map(function (msg) {
	    return message(msg, state.login);
	  }).join('');
	
	  return '<ul class="messages">' + content + '</ul>';
	}

/***/ },
/* 111 */
/*!*****************************************!*\
  !*** ./src/client/utils/classNames.es6 ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = classNames;
	
	var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ 93);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function classNames(data) {
	  return (0, _keys2.default)(data).filter(function (key) {
	    return data[key];
	  }).join(' ');
	}

/***/ },
/* 112 */
/*!***********************************!*\
  !*** ./src/client/views/chat.es6 ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = chat;
	
	var _form = __webpack_require__(/*! ./form */ 113);
	
	var _form2 = _interopRequireDefault(_form);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function chat() {
	
	  return '\n    <div class="chat">\n      <div class="chat__columns">\n        <div class="chat__sidebar">\n          <div class="chat__buddies"></div>\n        </div>\n        <div class="chat__content">\n          <div class="chat__messages"></div>\n          <div class="chat__form">\n            <chat-form>' + (0, _form2.default)() + '</chat-form>\n          </div>\n        </div>\n      </div>\n    </div>\n  ';
	}

/***/ },
/* 113 */
/*!***********************************!*\
  !*** ./src/client/views/form.es6 ***!
  \***********************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = form;
	function form() {
	  return "\n    <form id=\"message_form\" class=\"message-form\">\n      <textarea class=\"message-form__message\"></textarea>\n      <button type=\"submit\" class=\"message-form__submit\">Send</button>\n    </form>\n  ";
	}

/***/ },
/* 114 */
/*!************************************!*\
  !*** ./src/client/views/login.es6 ***!
  \************************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = login;
	function login() {
	  return "\n    <form id=\"login_form\" class=\"login-form\">\n      <div class=\"login-form__controls\">\n        <input type=\"text\" name=\"username\">\n        <button type=\"submit\">Join chat</button>\n      </div>\n      <div class=\"login-form__error\"></div>\n    </form>\n  ";
	}

/***/ },
/* 115 */
/*!*******************************************!*\
  !*** ./src/client/styles/MessageForm.css ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader?importLoaders=1!./../../../~/postcss-loader!./MessageForm.css */ 116);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?importLoaders=1!./../../../node_modules/postcss-loader/index.js!./MessageForm.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?importLoaders=1!./../../../node_modules/postcss-loader/index.js!./MessageForm.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 116 */
/*!*********************************************************************************************!*\
  !*** ./~/css-loader?importLoaders=1!./~/postcss-loader!./src/client/styles/MessageForm.css ***!
  \*********************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 3)();
	// imports
	
	
	// module
	exports.push([module.id, ".message-form {\n  height: 100%;\n  padding: 10px;\n  padding-left: 0\n\n}\n.message-form__submit {\n  height: 100%;\n  width: 40px;\n\n}\n.message-form__message {\n  height: 100%;\n  width: calc(100% - 60px);\n  margin-right: 20px;\n\n}\n.message-form__message,\n  .message-form__submit {\n  float: left;\n\n}\n.message-form:before,\n  .message-form:after {\n  content: ' ';\n  display: table;\n  clear: both\n\n}\n", ""]);
	
	// exports


/***/ },
/* 117 */
/*!***************************************!*\
  !*** ./src/client/styles/Buddies.css ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader?importLoaders=1!./../../../~/postcss-loader!./Buddies.css */ 118);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?importLoaders=1!./../../../node_modules/postcss-loader/index.js!./Buddies.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?importLoaders=1!./../../../node_modules/postcss-loader/index.js!./Buddies.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 118 */
/*!*****************************************************************************************!*\
  !*** ./~/css-loader?importLoaders=1!./~/postcss-loader!./src/client/styles/Buddies.css ***!
  \*****************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 3)();
	// imports
	
	
	// module
	exports.push([module.id, ".buddies {\n\n  margin: 0;\n  padding: 10px;\n  list-style: none\n\n\n}\n.buddies__buddy {\n\n  padding: 10px\n\n\n}\n.buddies__buddy--me {\n\n  color: #2EB3DE;\n\n\n}\n", ""]);
	
	// exports


/***/ },
/* 119 */
/*!*********************************************!*\
  !*** ./src/client/reducers/login_error.es6 ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = login_error;
	
	var _chat = __webpack_require__(/*! ../actions/chat */ 98);
	
	function login_error() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
	  var action = arguments[1];
	
	  switch (action.type) {
	
	    case _chat.LOGIN:
	      return null;
	
	    case _chat.LOGIN_ERROR:
	      return action.error;
	
	    default:
	      return state;
	  }
	}

/***/ },
/* 120 */
/*!**********************************************!*\
  !*** ./src/client/components/LoginError.es6 ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = LoginError;
	
	var _Component = __webpack_require__(/*! ../factories/Component */ 103);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function LoginError() {
	
	  return function LoginErrorComponent(element) {
	    return (0, _Component2.default)({
	      update: function update(state) {
	        var text = state.login_error;
	        element.textContent = text;
	        element.style.display = text ? 'block' : 'none';
	      }
	    });
	  };
	}

/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map