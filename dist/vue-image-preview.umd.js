(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"), require("swiper"));
	else if(typeof define === 'function' && define.amd)
		define(["vue", "swiper"], factory);
	else if(typeof exports === 'object')
		exports["vue-image-preview"] = factory(require("vue"), require("swiper"));
	else
		root["vue-image-preview"] = factory(root["vue"], root["swiper"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__, __WEBPACK_EXTERNAL_MODULE_d670__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "f2a0");
/******/ })
/************************************************************************/
/******/ ({

/***/ "031e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "03c2":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d45e");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "064b":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("6446");
var call = __webpack_require__("cbac");
var propertyIsEnumerableModule = __webpack_require__("c829");
var createPropertyDescriptor = __webpack_require__("7e3c");
var toIndexedObject = __webpack_require__("097d");
var toPropertyKey = __webpack_require__("3e94");
var hasOwn = __webpack_require__("c7e7");
var IE8_DOM_DEFINE = __webpack_require__("62ea");

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ "081e":
/***/ (function(module, exports) {

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ "097d":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("96a5");
var requireObjectCoercible = __webpack_require__("c39c");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "0b57":
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "0b61":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("c252");

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ "1262":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ca14");
var TO_STRING_TAG_SUPPORT = __webpack_require__("3fa4");
var isCallable = __webpack_require__("081e");
var classofRaw = __webpack_require__("cc43");
var wellKnownSymbol = __webpack_require__("519f");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var Object = global.Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ "1576":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("3fa4");
var redefine = __webpack_require__("7219");
var toString = __webpack_require__("cdf3");

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "18aa":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ca14");
var call = __webpack_require__("cbac");
var isCallable = __webpack_require__("081e");
var isObject = __webpack_require__("9a02");

var TypeError = global.TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "1ffe":
/***/ (function(module, exports, __webpack_require__) {

var aCallable = __webpack_require__("b0c4");

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable(func);
};


/***/ }),

/***/ "2409":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "265d":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("6446");
var hasOwn = __webpack_require__("c7e7");

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ "28dc":
/***/ (function(module, exports, __webpack_require__) {

var toLength = __webpack_require__("f4b1");

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ "2ccb":
/***/ (function(module, exports, __webpack_require__) {

// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
var documentCreateElement = __webpack_require__("c4ae");

var classList = documentCreateElement('span').classList;
var DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype;

module.exports = DOMTokenListPrototype === Object.prototype ? undefined : DOMTokenListPrototype;


/***/ }),

/***/ "34bc":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("9153");
var store = __webpack_require__("efd9");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.19.2',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "3e94":
/***/ (function(module, exports, __webpack_require__) {

var toPrimitive = __webpack_require__("a434");
var isSymbol = __webpack_require__("62b4");

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ "3fa4":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("519f");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "41a4":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ca14");
var requireObjectCoercible = __webpack_require__("c39c");

var Object = global.Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "433e":
/***/ (function(module, exports, __webpack_require__) {

var arraySpeciesConstructor = __webpack_require__("dbce");

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};


/***/ }),

/***/ "4704":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("c252");
var hasOwn = __webpack_require__("c7e7");
var toIndexedObject = __webpack_require__("097d");
var indexOf = __webpack_require__("ee4f").indexOf;
var hiddenKeys = __webpack_require__("f448");

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ "4748":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d45e");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "4799":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- safe
  return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);
};


/***/ }),

/***/ "4b1a":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d45e");
var uncurryThis = __webpack_require__("c252");
var getOwnPropertyNamesModule = __webpack_require__("9cd9");
var getOwnPropertySymbolsModule = __webpack_require__("b2e9");
var anObject = __webpack_require__("97d8");

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "4e84":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("961e");
var $find = __webpack_require__("d796").find;
var addToUnscopables = __webpack_require__("9acd");

var FIND = 'find';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ }),

/***/ "4f29":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("c252");
var isCallable = __webpack_require__("081e");
var store = __webpack_require__("efd9");

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "519f":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ca14");
var shared = __webpack_require__("34bc");
var hasOwn = __webpack_require__("c7e7");
var uid = __webpack_require__("0b61");
var NATIVE_SYMBOL = __webpack_require__("5ce1");
var USE_SYMBOL_AS_UID = __webpack_require__("7b76");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var symbolFor = Symbol && Symbol['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (NATIVE_SYMBOL && hasOwn(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "53b8":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("34bc");
var uid = __webpack_require__("0b61");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "5c75":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("4704");
var enumBugKeys = __webpack_require__("988d");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "5ce1":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__("a0a0");
var fails = __webpack_require__("c814");

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "62b4":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ca14");
var getBuiltIn = __webpack_require__("d45e");
var isCallable = __webpack_require__("081e");
var isPrototypeOf = __webpack_require__("afdf");
var USE_SYMBOL_AS_UID = __webpack_require__("7b76");

var Object = global.Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, Object(it));
};


/***/ }),

/***/ "62ea":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("6446");
var fails = __webpack_require__("c814");
var createElement = __webpack_require__("c4ae");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "6446":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("c814");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "6c01":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ca14");
var DESCRIPTORS = __webpack_require__("6446");
var IE8_DOM_DEFINE = __webpack_require__("62ea");
var anObject = __webpack_require__("97d8");
var toPropertyKey = __webpack_require__("3e94");

var TypeError = global.TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "6d9b":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("c252");
var fails = __webpack_require__("c814");
var isCallable = __webpack_require__("081e");
var classof = __webpack_require__("1262");
var getBuiltIn = __webpack_require__("d45e");
var inspectSource = __webpack_require__("4f29");

var noop = function () { /* empty */ };
var empty = [];
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function (argument) {
  if (!isCallable(argument)) return false;
  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function (argument) {
  if (!isCallable(argument)) return false;
  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
    // we can't check .prototype since constructors produced by .bind haven't it
  } return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
};

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
module.exports = !construct || fails(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;


/***/ }),

/***/ "7219":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ca14");
var isCallable = __webpack_require__("081e");
var hasOwn = __webpack_require__("c7e7");
var createNonEnumerableProperty = __webpack_require__("d3a9");
var setGlobal = __webpack_require__("a2c2");
var inspectSource = __webpack_require__("4f29");
var InternalStateModule = __webpack_require__("e13b");
var CONFIGURABLE_FUNCTION_NAME = __webpack_require__("265d").CONFIGURABLE;

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var name = options && options.name !== undefined ? options.name : key;
  var state;
  if (isCallable(value)) {
    if (String(name).slice(0, 7) === 'Symbol(') {
      name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
    }
    if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
      createNonEnumerableProperty(value, 'name', name);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "79b5":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ca14");
var isCallable = __webpack_require__("081e");
var inspectSource = __webpack_require__("4f29");

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "79e4":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "7b76":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__("5ce1");

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "7e3c":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "82b8":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ca14");

var String = global.String;

module.exports = function (argument) {
  try {
    return String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "8e04":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("cc43");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) == 'Array';
};


/***/ }),

/***/ "9153":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "961e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ca14");
var getOwnPropertyDescriptor = __webpack_require__("064b").f;
var createNonEnumerableProperty = __webpack_require__("d3a9");
var redefine = __webpack_require__("7219");
var setGlobal = __webpack_require__("a2c2");
var copyConstructorProperties = __webpack_require__("b61d");
var isForced = __webpack_require__("a3e2");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
  options.name        - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "96a5":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ca14");
var uncurryThis = __webpack_require__("c252");
var fails = __webpack_require__("c814");
var classof = __webpack_require__("cc43");

var Object = global.Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "97c7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_15_9_8_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_9_8_vue_loader_lib_index_js_vue_loader_options_vue_image_preview_vue_vue_type_style_index_0_id_f6b3534c_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("031e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_15_9_8_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_9_8_vue_loader_lib_index_js_vue_loader_options_vue_image_preview_vue_vue_type_style_index_0_id_f6b3534c_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_15_9_8_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_9_8_vue_loader_lib_index_js_vue_loader_options_vue_image_preview_vue_vue_type_style_index_0_id_f6b3534c_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "97d8":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ca14");
var isObject = __webpack_require__("9a02");

var String = global.String;
var TypeError = global.TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw TypeError(String(argument) + ' is not an object');
};


/***/ }),

/***/ "988d":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "9a02":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("081e");

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ "9acd":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("519f");
var create = __webpack_require__("a30f");
var definePropertyModule = __webpack_require__("6c01");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "9cd9":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("4704");
var enumBugKeys = __webpack_require__("988d");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "9f84":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a0a0":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ca14");
var userAgent = __webpack_require__("4748");

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ "a10c":
/***/ (function(module, exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__("4799");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "a2c2":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ca14");

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "a30f":
/***/ (function(module, exports, __webpack_require__) {

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__("97d8");
var defineProperties = __webpack_require__("e921");
var enumBugKeys = __webpack_require__("988d");
var hiddenKeys = __webpack_require__("f448");
var html = __webpack_require__("03c2");
var documentCreateElement = __webpack_require__("c4ae");
var sharedKey = __webpack_require__("53b8");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "a3e2":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("c814");
var isCallable = __webpack_require__("081e");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "a434":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ca14");
var call = __webpack_require__("cbac");
var isObject = __webpack_require__("9a02");
var isSymbol = __webpack_require__("62b4");
var getMethod = __webpack_require__("1ffe");
var ordinaryToPrimitive = __webpack_require__("18aa");
var wellKnownSymbol = __webpack_require__("519f");

var TypeError = global.TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ "a49e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ca14");
var DOMIterables = __webpack_require__("0b57");
var DOMTokenListPrototype = __webpack_require__("2ccb");
var forEach = __webpack_require__("dc61");
var createNonEnumerableProperty = __webpack_require__("d3a9");

var handlePrototype = function (CollectionPrototype) {
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  if (DOMIterables[COLLECTION_NAME]) {
    handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype);
  }
}

handlePrototype(DOMTokenListPrototype);


/***/ }),

/***/ "a849":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("c814");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "ad0f":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("c252");
var aCallable = __webpack_require__("b0c4");

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : bind ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "afdf":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("c252");

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ "b0c4":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ca14");
var isCallable = __webpack_require__("081e");
var tryToString = __webpack_require__("82b8");

var TypeError = global.TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ "b2e9":
/***/ (function(module, exports) {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "b61d":
/***/ (function(module, exports, __webpack_require__) {

var hasOwn = __webpack_require__("c7e7");
var ownKeys = __webpack_require__("4b1a");
var getOwnPropertyDescriptorModule = __webpack_require__("064b");
var definePropertyModule = __webpack_require__("6c01");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "c252":
/***/ (function(module, exports) {

var FunctionPrototype = Function.prototype;
var bind = FunctionPrototype.bind;
var call = FunctionPrototype.call;
var callBind = bind && bind.bind(call);

module.exports = bind ? function (fn) {
  return fn && callBind(call, fn);
} : function (fn) {
  return fn && function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ "c39c":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ca14");

var TypeError = global.TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "c4ae":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ca14");
var isObject = __webpack_require__("9a02");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "c7e7":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("c252");
var toObject = __webpack_require__("41a4");

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ "c814":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "c829":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ "ca14":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("2409")))

/***/ }),

/***/ "cbac":
/***/ (function(module, exports) {

var call = Function.prototype.call;

module.exports = call.bind ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ "cc43":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("c252");

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ "cdf3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__("3fa4");
var classof = __webpack_require__("1262");

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "d3a9":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("6446");
var definePropertyModule = __webpack_require__("6c01");
var createPropertyDescriptor = __webpack_require__("7e3c");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "d45e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ca14");
var isCallable = __webpack_require__("081e");

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "d670":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_d670__;

/***/ }),

/***/ "d796":
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__("ad0f");
var uncurryThis = __webpack_require__("c252");
var IndexedObject = __webpack_require__("96a5");
var toObject = __webpack_require__("41a4");
var lengthOfArrayLike = __webpack_require__("28dc");
var arraySpeciesCreate = __webpack_require__("433e");

var push = uncurryThis([].push);

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that);
    var length = lengthOfArrayLike(self);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push(target, value);      // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push(target, value);      // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};


/***/ }),

/***/ "dbce":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ca14");
var isArray = __webpack_require__("8e04");
var isConstructor = __webpack_require__("6d9b");
var isObject = __webpack_require__("9a02");
var wellKnownSymbol = __webpack_require__("519f");

var SPECIES = wellKnownSymbol('species');
var Array = global.Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "dc61":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__("d796").forEach;
var arrayMethodIsStrict = __webpack_require__("a849");

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;


/***/ }),

/***/ "e13b":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("79b5");
var global = __webpack_require__("ca14");
var uncurryThis = __webpack_require__("c252");
var isObject = __webpack_require__("9a02");
var createNonEnumerableProperty = __webpack_require__("d3a9");
var hasOwn = __webpack_require__("c7e7");
var shared = __webpack_require__("efd9");
var sharedKey = __webpack_require__("53b8");
var hiddenKeys = __webpack_require__("f448");

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = uncurryThis(store.get);
  var wmhas = uncurryThis(store.has);
  var wmset = uncurryThis(store.set);
  set = function (it, metadata) {
    if (wmhas(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget(store, it) || {};
  };
  has = function (it) {
    return wmhas(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "e921":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("6446");
var definePropertyModule = __webpack_require__("6c01");
var anObject = __webpack_require__("97d8");
var toIndexedObject = __webpack_require__("097d");
var objectKeys = __webpack_require__("5c75");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};


/***/ }),

/***/ "ee4f":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("097d");
var toAbsoluteIndex = __webpack_require__("a10c");
var lengthOfArrayLike = __webpack_require__("28dc");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "efd9":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ca14");
var setGlobal = __webpack_require__("a2c2");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "f2a0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "install", function() { return /* reexport */ install; });
__webpack_require__.d(__webpack_exports__, "ImagePreview", function() { return /* reexport */ ImagePreview; });

// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@4.5.15@@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("79e4")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"95487c64-vue-loader-template"}!./node_modules/_vue-loader@15.9.8@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!./node_modules/_vue-loader@15.9.8@vue-loader/lib??vue-loader-options!./src/vue-image-preview.vue?vue&type=template&id=f6b3534c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShow),expression:"isShow"}],staticClass:"image-preview fullscreen",on:{"click":function($event){$event.stopPropagation();$event.preventDefault();return _vm.hide.apply(null, arguments)},"touchmove":function($event){$event.stopPropagation();$event.preventDefault();}}},[_c('div',{staticClass:"header-text"},[_c('span',{staticClass:"text-indicator"},[_vm._v(_vm._s(_vm.currentIndex + 1)+"/"+_vm._s(_vm.imgs.length))])]),(_vm.imgs.length > 0)?_c('div',{ref:"swiperContainer",staticClass:"swiper-container"},[_c('div',{staticClass:"swiper-wrapper"},_vm._l((_vm.imgs),function(imgItem){return _c('div',{key:imgItem,staticClass:"swiper-slide"},[_c('div',{staticClass:"swiper-zoom-container"},[_c('img',{staticClass:"swiper-lazy",attrs:{"data-src":imgItem}}),_c('div',{staticClass:"swiper-lazy-preloader swiper-lazy-preloader-white"})])])}),0)]):_vm._e(),_c('div',{staticClass:"footer-text"})])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/vue-image-preview.vue?vue&type=template&id=f6b3534c&scoped=true&

// EXTERNAL MODULE: ./node_modules/_core-js@3.19.2@core-js/modules/es.array.find.js
var es_array_find = __webpack_require__("4e84");

// EXTERNAL MODULE: ./node_modules/_core-js@3.19.2@core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("1576");

// EXTERNAL MODULE: ./node_modules/_core-js@3.19.2@core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("a49e");

// EXTERNAL MODULE: external "swiper"
var external_swiper_ = __webpack_require__("d670");
var external_swiper_default = /*#__PURE__*/__webpack_require__.n(external_swiper_);

// EXTERNAL MODULE: ./node_modules/_swiper@5.4.5@swiper/css/swiper.min.css
var swiper_min = __webpack_require__("9f84");

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--13-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.2.3@babel-loader/lib!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!./node_modules/_vue-loader@15.9.8@vue-loader/lib??vue-loader-options!./src/vue-image-preview.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var vue_image_previewvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      isShow: false,
      // 是否展示
      imgs: [],
      // 预览的图片列表
      currentIndex: 0,
      // 当前图片展示的位置
      currentElement: null,
      // 当前图片展示时的元素
      eventType: "click",
      // 触发图片展示事件类型:click,tap
      groupId: null,
      // 当前图片组ID
      stopPropagation: true,
      preventDefault: true,
      selectorElementList: [],
      // 当前触发图片所属的元素绑定事件集合列表
      swiperInstance: null // swiper初始化的实例

    };
  },
  methods: {
    init: function init() {
      var _this2 = this;

      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          selector = _ref.selector,
          _ref$eventType = _ref.eventType,
          eventType = _ref$eventType === void 0 ? "click" : _ref$eventType,
          _ref$stopPropagation = _ref.stopPropagation,
          stopPropagation = _ref$stopPropagation === void 0 ? true : _ref$stopPropagation,
          _ref$preventDefault = _ref.preventDefault,
          preventDefault = _ref$preventDefault === void 0 ? true : _ref$preventDefault;

      var selectorElements = [],
          selectorElement = null;

      if (typeof selector == "string") {
        selectorElement = document.querySelector(selector);

        if (this.selectorElementList.find(function (item) {
          return item.element == selectorElement;
        })) {
          // 当前元素事件已经被绑定，无需再次绑定
          return;
        }

        selectorElements.push(selectorElement);
        this.selectorElementList.push({
          element: selectorElement,
          eventType: eventType
        });
      } else if (Array.isArray(selector)) {
        selector.forEach(function (selectItem) {
          if (typeof selectItem == "string") {
            selectorElement = document.querySelector(selector);
          } else {
            selectorElement = selectItem;
          }

          if (!_this2.selectorElementList.find(function (item) {
            return item.element == selectorElement;
          })) {
            selectorElements.push(selectorElement);

            _this2.selectorElementList.push({
              element: selectorElement,
              eventType: eventType
            });
          }
        });
      } else {
        selectorElement = selector;
        selectorElements.push(selectorElement);
      }

      if (selectorElements.length > 0) {
        this.eventType = eventType;
        this.stopPropagation = stopPropagation;
        this.preventDefault = preventDefault;
        selectorElements.forEach(function (elementItem) {
          return elementItem.addEventListener(_this2.eventType, _this2.bingEvent);
        });
      }
    },
    bingEvent: function bingEvent(e) {
      var target = e.target;

      if (target.tagName === "IMG" && target.hasAttribute("data-preview-src")) {
        if (this.stopPropagation) e.stopPropagation();
        if (this.preventDefault) e.preventDefault();

        if (this.isShow) {
          // 如果当前图片正在展示，就不用再隐藏
          return;
        }

        this.open(target, e.currentTarget);
        return false;
      }
    },
    open: function open(imgElement, currentElement) {
      this.groupId = imgElement.getAttribute("data-preview-group") || "";
      var imgs = currentElement.querySelectorAll("img[data-preview-src][data-preview-group='" + this.groupId + "']");

      if (imgs.length == 0) {
        imgs = [imgElement];
      }

      this.imgs = [];

      for (var i = 0; i < imgs.length; i++) {
        if (imgs[i] == imgElement) {
          this.currentIndex = i;
        }

        this.imgs.push(imgs[i].getAttribute("data-preview-src"));
      }

      this.currentElement = currentElement;
      this.show();
    },
    show: function show() {
      var _this3 = this;

      this.isShow = true;
      this.$nextTick(function () {
        var _this = _this3;
        _this3.swiperInstance = new external_swiper_default.a(_this3.$refs["swiperContainer"], {
          autoplay: false,
          zoom: true,
          lazy: true,
          initialSlide: _this3.currentIndex,
          on: {
            slideChange: function slideChange() {
              _this.currentIndex = this.activeIndex;
            }
          }
        });
      });
    },
    hide: function hide() {
      var _this4 = this;

      this.isShow = false;
      this.currentElement = null;
      this.currentIndex = 0;
      this.imgs = [];
      this.groupId = null;
      this.$nextTick(function () {
        _this4.swiperInstance.removeAllSlides();

        _this4.swiperInstance.destroy(true, true);

        _this4.swiperInstance = null;
      });
    },
    reresh: function reresh() {
      if (!this.isShow) return;
      var imgs = this.currentElement.querySelectorAll("img[data-preview-src][data-preview-group='" + this.groupId + "']");

      if (imgs.length == 0) {
        imgs = [];
      }

      var findIndx = -1;
      var currentImg = this.imgs[this.currentIndex];

      for (var i = 0; i < imgs.length; i++) {
        if (imgs[i].getAttribute("data-preview-src") == currentImg) {
          findIndx = i;
        }

        this.imgs.push(imgs[i].getAttribute("data-preview-src"));
      }

      if (findIndx == -1 && this.currentIndex >= this.imgs.length) {
        this.currentIndex = this.imgs.length - 1;
      } else if (findIndx != -1) {
        this.currentIndex = findIndx;
      }

      this.show();
    },
    destroy: function destroy() {
      var _this5 = this;

      if (this.selectorElementList.length > 0) {
        this.selectorElementList.forEach(function (selectorElement) {
          return selectorElement.element.removeEventListener(selectorElement.eventType, _this5.bingEvent);
        });
      }

      this.selectorElementList = [];
      this.currentElement = null;
      this.currentIndex = 0;
      this.imgs = [];
      this.groupId = null;

      if (this.swiperInstance) {
        this.$nextTick(function () {
          _this5.swiperInstance.removeAllSlides();

          _this5.swiperInstance.destroy(true, true);

          _this5.swiperInstance = null;
        });
      }
    }
  },
  destroyed: function destroyed() {
    this.destroy();
  }
});
// CONCATENATED MODULE: ./src/vue-image-preview.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_vue_image_previewvue_type_script_lang_js_ = (vue_image_previewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/vue-image-preview.vue?vue&type=style&index=0&id=f6b3534c&lang=less&scoped=true&
var vue_image_previewvue_type_style_index_0_id_f6b3534c_lang_less_scoped_true_ = __webpack_require__("97c7");

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.8@vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/vue-image-preview.vue






/* normalize component */

var component = normalizeComponent(
  src_vue_image_previewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "f6b3534c",
  null
  
)

/* harmony default export */ var vue_image_preview = (component.exports);
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__("8bbf");
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./src/index.js
/**
 * 作者：yujinjin9@126.com
 * 时间：2019-11-16
 * 描述：图片预览插件
 */


var VueImagePreviewConstructor = external_vue_default.a.extend(vue_image_preview); // 弹窗实例

var vueImagePreviewInstance = null; // 默认配置选项

var defaults = {
  selector: null,
  // 当前触发图片所属的选择器
  eventType: "click",
  // 触发图片展示事件类型:click,tap
  stopPropagation: true,
  // 图片事件是否要阻止冒泡
  preventDefault: true // 阻止元素发生默认的行为

};

var ImagePreview = function ImagePreview(options) {
  if (!options) {
    options = {
      selector: document.body
    };
  } else if (typeof options == "string" || Array.isArray(options)) {
    options = {
      selector: options
    };
  }

  var _options = Object.assign({}, defaults, options);

  if (!vueImagePreviewInstance) {
    vueImagePreviewInstance = new VueImagePreviewConstructor({
      el: document.createElement("div")
    });
    document.body.appendChild(vueImagePreviewInstance.$el);
  }

  vueImagePreviewInstance.init(_options);
  this.vueImagePreviewInstance = vueImagePreviewInstance; // this.show = function(){
  //     vueImagePreviewInstance.show();
  // }

  this.destroy = function () {
    vueImagePreviewInstance.destroy();
    vueImagePreviewInstance.$el.parentNode.removeChild(vueImagePreviewInstance.$el);
    vueImagePreviewInstance = null;
  };

  return vueImagePreviewInstance;
};

var install = function install(Vue, options) {
  if (options) {
    defaults = Object.assign(defaults, options);
  }

  Vue.prototype.$imagePreview = ImagePreview;
};


/* harmony default export */ var src_0 = ({
  install: install,
  ImagePreview: ImagePreview
});
// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@4.5.15@@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_0);



/***/ }),

/***/ "f448":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "f4b1":
/***/ (function(module, exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__("4799");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ })

/******/ })["default"];
});
//# sourceMappingURL=vue-image-preview.umd.js.map