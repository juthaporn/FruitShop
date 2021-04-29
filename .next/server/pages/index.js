module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/meetups/MeetupItem.js":
/*!******************************************!*\
  !*** ./components/meetups/MeetupItem.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/Card */ "./components/ui/Card.js");
/* harmony import */ var _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MeetupItem.module.css */ "./components/meetups/MeetupItem.module.css");
/* harmony import */ var _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "D:\\Xampp\\htdocs\\Swe-498\\Shop\\components\\meetups\\MeetupItem.js";




function MeetupItem(props) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();

  function showDetailsHandler() {
    router.push('/' + props.id);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
    className: _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.item,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.image,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: props.image,
          alt: props.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.content,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: props.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("price", {
          children: props.price
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 39
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("description", {
          children: props.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.actions,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          children: "Show Details"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MeetupItem);

/***/ }),

/***/ "./components/meetups/MeetupItem.module.css":
/*!**************************************************!*\
  !*** ./components/meetups/MeetupItem.module.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"item": "MeetupItem_item__3siMU",
	"image": "MeetupItem_image__13rAP",
	"content": "MeetupItem_content__3uEkT",
	"actions": "MeetupItem_actions__LvT9B"
};


/***/ }),

/***/ "./components/meetups/MeetupList.js":
/*!******************************************!*\
  !*** ./components/meetups/MeetupList.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MeetupItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MeetupItem */ "./components/meetups/MeetupItem.js");
/* harmony import */ var _MeetupList_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MeetupList.module.css */ "./components/meetups/MeetupList.module.css");
/* harmony import */ var _MeetupList_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_MeetupList_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "D:\\Xampp\\htdocs\\Swe-498\\Shop\\components\\meetups\\MeetupList.js";



function MeetupList(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
    className: _MeetupList_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.list,
    children: props.meetups.map(meetup => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_MeetupItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      id: meetup.id,
      image: meetup.image,
      title: meetup.title,
      price: meetup.price,
      description: meetup.description
    }, meetup.id, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }, this))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MeetupList);

/***/ }),

/***/ "./components/meetups/MeetupList.module.css":
/*!**************************************************!*\
  !*** ./components/meetups/MeetupList.module.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"list": "MeetupList_list__1iafn"
};


/***/ }),

/***/ "./components/ui/Card.js":
/*!*******************************!*\
  !*** ./components/ui/Card.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.module.css */ "./components/ui/Card.module.css");
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\Xampp\\htdocs\\Swe-498\\Shop\\components\\ui\\Card.js";


function Card(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.card,
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 10
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./components/ui/Card.module.css":
/*!***************************************!*\
  !*** ./components/ui/Card.module.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"card": "Card_card__3KSLO"
};


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");

var _jsxFileName = "D:\\Xampp\\htdocs\\Swe-498\\Shop\\pages\\index.js";

const DUMMY_MEETUPS = [{
  id: '01',
  title: 'อโวคาโด',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTswgKRYvu_IObfHw7s1w1peySfRVMF-D1M2g&usqp=CAU',
  price: '699 ฿',
  description: 'อโวคาโดแฮส USA จากแคลิฟอร์เนีย '
}, {
  id: '02',
  title: 'เชอร์รี่',
  image: 'http://www.foodgallery.co.th/wp-content/uploads/2018/06/cherry-NZ.jpg',
  price: '950 ฿',
  description: 'เชอร์รี่ ไซส์ใหญ่ นำเข้าจากประเทศชิลี'
}, {
  id: '03',
  title: 'กีวี่',
  image: 'https://backend.tops.co.th/media/catalog/product/0/2/0219898000003_29-01-2021.jpg',
  price: '25 $',
  description: 'กีวี่สีทอง นำเข้าจากนิวซีแลนด์ '
}, {
  id: '04',
  title: 'แอปเปิ้ล',
  image: 'https://static.bigc.co.th/media/catalog/product/cache/2/image/17f82f742ffe127f42dca9de82fb58b1/2/0/2000004002046_4.jpg ',
  price: '600 ฿',
  description: 'แอปเปิ้ลเอ็นวี่ จากประเทศอเมริกา'
}, {
  id: '05',
  title: 'องุ่นเขียว ',
  image: 'https://backend.tops.co.th/media/catalog/product/0/2/0218852000004.jpg ',
  price: '400 ฿',
  description: 'องุ่นเขียวไร้เมล็ดออสเตรเลีย ออทัมคริสป์'
}, {
  id: '06',
  title: ' ส้มโอทับทิมสยาม',
  image: ' https://cf.shopee.co.th/file/633860731236602849ab2f6cf97cf7b4',
  price: ' 200 ฿',
  description: 'ส้มโอทับทิมสยามฤดูร้อน  '
}, {
  id: '07',
  title: ' สตอเบอรี่',
  image: 'https://f.ptcdn.info/216/014/000/1389141304-photo-o.jpg ',
  price: ' 650 ฿',
  description: 'สตอเบอรี่จัมโบ้ จากประเทศเกาหลี '
}, {
  id: '08',
  title: 'มันหวานญี่ปุ่น พันธุ์เบนิฮารุกะ  ',
  image: ' https://www.kasethub.co.th/pic/bigpic/f94d2562bdf4310e8dc882902bce4785.jpg',
  price: ' 399 ฿',
  description: 'มันหวานญี่ปุ่น พันธุ์เบนิฮารุกะ ไซส์ L จากประเทศญี่ปุ่น '
}, {
  id: '09',
  title: 'สาลี่หิมะ ',
  image: 'https://fruitage.in.th/wp-content/uploads/2020/04/kp3.jpg ',
  price: ' 1650 ฿',
  description: 'สาลี่หิมะเกาหลีเกรดพรีเมียม '
}, {
  id: '10',
  title: 'อินทผาลัมสด ',
  image: ' https://th-test-11.slatic.net/p/6cd2353be58c385d0dd01422268e94c1.jpg',
  price: ' 850 ฿',
  description: 'อินทผาลัมสด นำเข้าจากประเทศเปรู '
}];

function HomePage(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    meetups: props.meetups
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 87,
    columnNumber: 10
  }, this);
}

async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
    revalidate: 1
  };
}
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cEl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cEl0ZW0ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdC5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdWkvQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VpL0NhcmQubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIk1lZXR1cEl0ZW0iLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsInNob3dEZXRhaWxzSGFuZGxlciIsInB1c2giLCJpZCIsImNsYXNzZXMiLCJpdGVtIiwiaW1hZ2UiLCJ0aXRsZSIsImNvbnRlbnQiLCJwcmljZSIsImRlc2NyaXB0aW9uIiwiYWN0aW9ucyIsIk1lZXR1cExpc3QiLCJsaXN0IiwibWVldHVwcyIsIm1hcCIsIm1lZXR1cCIsIkNhcmQiLCJjYXJkIiwiY2hpbGRyZW4iLCJEVU1NWV9NRUVUVVBTIiwiSG9tZVBhZ2UiLCJnZXRTdGF0aWNQcm9wcyIsInJldmFsaWRhdGUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FB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XHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi91aS9DYXJkJztcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vTWVldHVwSXRlbS5tb2R1bGUuY3NzJztcblxuZnVuY3Rpb24gTWVldHVwSXRlbShwcm9wcykge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBmdW5jdGlvbiBzaG93RGV0YWlsc0hhbmRsZXIoKSB7XG4gICAgcm91dGVyLnB1c2goJy8nICsgcHJvcHMuaWQpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW19PlxuICAgICAgPENhcmQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlfT5cbiAgICAgICAgICA8aW1nIHNyYz17cHJvcHMuaW1hZ2V9IGFsdD17cHJvcHMudGl0bGV9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cbiAgICAgICAgICA8aDM+e3Byb3BzLnRpdGxlfTwvaDM+XG4gICAgICAgICAgPHByaWNlPntwcm9wcy5wcmljZX08L3ByaWNlPjxicj48L2JyPlxuICAgICAgICAgIDxkZXNjcmlwdGlvbj57cHJvcHMuZGVzY3JpcHRpb259PC9kZXNjcmlwdGlvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbnN9PlxuICAgICAgICAgIDxidXR0b24+U2hvdyBEZXRhaWxzPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9DYXJkPlxuICAgIDwvbGk+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lZXR1cEl0ZW07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJpdGVtXCI6IFwiTWVldHVwSXRlbV9pdGVtX18zc2lNVVwiLFxuXHRcImltYWdlXCI6IFwiTWVldHVwSXRlbV9pbWFnZV9fMTNyQVBcIixcblx0XCJjb250ZW50XCI6IFwiTWVldHVwSXRlbV9jb250ZW50X18zdUVrVFwiLFxuXHRcImFjdGlvbnNcIjogXCJNZWV0dXBJdGVtX2FjdGlvbnNfX0x2VDlCXCJcbn07XG4iLCJpbXBvcnQgTWVldHVwSXRlbSBmcm9tICcuL01lZXR1cEl0ZW0nO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9NZWV0dXBMaXN0Lm1vZHVsZS5jc3MnO1xuXG5mdW5jdGlvbiBNZWV0dXBMaXN0KHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHVsIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0fT5cbiAgICAgIHtwcm9wcy5tZWV0dXBzLm1hcCgobWVldHVwKSA9PiAoXG4gICAgICAgIDxNZWV0dXBJdGVtXG4gICAgICAgICAga2V5PXttZWV0dXAuaWR9XG4gICAgICAgICAgaWQ9e21lZXR1cC5pZH1cbiAgICAgICAgICBpbWFnZT17bWVldHVwLmltYWdlfVxuICAgICAgICAgIHRpdGxlPXttZWV0dXAudGl0bGV9XG4gICAgICAgICAgcHJpY2U9e21lZXR1cC5wcmljZX1cbiAgICAgICAgICBkZXNjcmlwdGlvbj17bWVldHVwLmRlc2NyaXB0aW9ufVxuICAgICAgICAvPlxuICAgICAgKSl9XG4gICAgPC91bD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVldHVwTGlzdDtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImxpc3RcIjogXCJNZWV0dXBMaXN0X2xpc3RfXzFpYWZuXCJcbn07XG4iLCJpbXBvcnQgY2xhc3NlcyBmcm9tICcuL0NhcmQubW9kdWxlLmNzcyc7XG5cbmZ1bmN0aW9uIENhcmQocHJvcHMpIHtcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmR9Pntwcm9wcy5jaGlsZHJlbn08L2Rpdj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjYXJkXCI6IFwiQ2FyZF9jYXJkX18zS1NMT1wiXG59O1xuIiwiaW1wb3J0IE1lZXR1cExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cExpc3QnO1xuXG5jb25zdCBEVU1NWV9NRUVUVVBTID0gW1xuICB7XG4gICAgaWQ6ICcwMScsXG4gICAgdGl0bGU6ICfguK3guYLguKfguITguLLguYLguJQnLFxuICAgIGltYWdlOlxuICAgICAgJ2h0dHBzOi8vZW5jcnlwdGVkLXRibjAuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuOkFOZDlHY1Rzd2dLUll2dV9JT2JmSHc3czF3MXBleVNmUlZNRi1EMU0yZyZ1c3FwPUNBVScsXG4gICAgcHJpY2U6ICc2OTkg4Li/JyxcbiAgICBkZXNjcmlwdGlvbjogJ+C4reC5guC4p+C4hOC4suC5guC4lOC5geC4ruC4qiBVU0Eg4LiI4Liy4LiB4LmB4LiE4Lil4Li04Lif4Lit4Lij4LmM4LmA4LiZ4Li14LiiICcsXG4gIH0sXG4gIHtcbiAgICBpZDogJzAyJyxcbiAgICB0aXRsZTogJ+C5gOC4iuC4reC4o+C5jOC4o+C4teC5iCcsXG4gICAgaW1hZ2U6XG4gICAgICAnaHR0cDovL3d3dy5mb29kZ2FsbGVyeS5jby50aC93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8wNi9jaGVycnktTlouanBnJyxcbiAgICBwcmljZTogJzk1MCDguL8nLFxuICAgIGRlc2NyaXB0aW9uOiAn4LmA4LiK4Lit4Lij4LmM4Lij4Li14LmIIOC5hOC4i+C4quC5jOC5g+C4q+C4jeC5iCDguJnguLPguYDguILguYnguLLguIjguLLguIHguJvguKPguLDguYDguJfguKjguIrguLTguKXguLUnLFxuICB9LFxuICB7XG4gICAgaWQ6ICcwMycsXG4gICAgdGl0bGU6ICfguIHguLXguKfguLXguYgnLFxuICAgIGltYWdlOlxuICAgICAgJ2h0dHBzOi8vYmFja2VuZC50b3BzLmNvLnRoL21lZGlhL2NhdGFsb2cvcHJvZHVjdC8wLzIvMDIxOTg5ODAwMDAwM18yOS0wMS0yMDIxLmpwZycsXG4gICAgcHJpY2U6ICcyNSAkJyxcbiAgICBkZXNjcmlwdGlvbjogJ+C4geC4teC4p+C4teC5iOC4quC4teC4l+C4reC4hyDguJnguLPguYDguILguYnguLLguIjguLLguIHguJnguLTguKfguIvguLXguYHguKXguJnguJTguYwgJyxcbiAgfSxcbiAge1xuICAgIGlkOiAnMDQnLFxuICAgIHRpdGxlOiAn4LmB4Lit4Lib4LmA4Lib4Li04LmJ4LilJyxcbiAgICBpbWFnZTpcbiAgICAgICdodHRwczovL3N0YXRpYy5iaWdjLmNvLnRoL21lZGlhL2NhdGFsb2cvcHJvZHVjdC9jYWNoZS8yL2ltYWdlLzE3ZjgyZjc0MmZmZTEyN2Y0MmRjYTlkZTgyZmI1OGIxLzIvMC8yMDAwMDA0MDAyMDQ2XzQuanBnICcsXG4gICAgcHJpY2U6ICc2MDAg4Li/JyxcbiAgICBkZXNjcmlwdGlvbjogJ+C5geC4reC4m+C5gOC4m+C4tOC5ieC4peC5gOC4reC5h+C4meC4p+C4teC5iCDguIjguLLguIHguJvguKPguLDguYDguJfguKjguK3guYDguKHguKPguLTguIHguLInLFxuICB9LFxuICB7XG4gICAgaWQ6ICcwNScsXG4gICAgdGl0bGU6ICfguK3guIfguLjguYjguJnguYDguILguLXguKLguKcgJyxcbiAgICBpbWFnZTpcbiAgICAgICdodHRwczovL2JhY2tlbmQudG9wcy5jby50aC9tZWRpYS9jYXRhbG9nL3Byb2R1Y3QvMC8yLzAyMTg4NTIwMDAwMDQuanBnICcsXG4gICAgcHJpY2U6ICc0MDAg4Li/JyxcbiAgICBkZXNjcmlwdGlvbjogJ+C4reC4h+C4uOC5iOC4meC5gOC4guC4teC4ouC4p+C5hOC4o+C5ieC5gOC4oeC4peC5h+C4lOC4reC4reC4quC5gOC4leC4o+C5gOC4peC4teC4oiDguK3guK3guJfguLHguKHguITguKPguLTguKrguJvguYwnLFxuICB9LFxuICB7XG4gICAgaWQ6ICcwNicsXG4gICAgdGl0bGU6ICcg4Liq4LmJ4Lih4LmC4Lit4LiX4Lix4Lia4LiX4Li04Lih4Liq4Lii4Liy4LihJyxcbiAgICBpbWFnZTpcbiAgICAgICcgaHR0cHM6Ly9jZi5zaG9wZWUuY28udGgvZmlsZS82MzM4NjA3MzEyMzY2MDI4NDlhYjJmNmNmOTdjZjdiNCcsXG4gICAgcHJpY2U6ICcgMjAwIOC4vycsXG4gICAgZGVzY3JpcHRpb246ICfguKrguYnguKHguYLguK3guJfguLHguJrguJfguLTguKHguKrguKLguLLguKHguKTguJTguLnguKPguYnguK3guJkgICcsXG4gIH0sXG4gIHtcbiAgICBpZDogJzA3JyxcbiAgICB0aXRsZTogJyDguKrguJXguK3guYDguJrguK3guKPguLXguYgnLFxuICAgIGltYWdlOlxuICAgICAgJ2h0dHBzOi8vZi5wdGNkbi5pbmZvLzIxNi8wMTQvMDAwLzEzODkxNDEzMDQtcGhvdG8tby5qcGcgJyxcbiAgICBwcmljZTogJyA2NTAg4Li/JyxcbiAgICBkZXNjcmlwdGlvbjogJ+C4quC4leC4reC5gOC4muC4reC4o+C4teC5iOC4iOC4seC4oeC5guC4muC5iSDguIjguLLguIHguJvguKPguLDguYDguJfguKjguYDguIHguLLguKvguKXguLUgJyxcbiAgfSxcbiAge1xuICAgIGlkOiAnMDgnLFxuICAgIHRpdGxlOiAn4Lih4Lix4LiZ4Lir4Lin4Liy4LiZ4LiN4Li14LmI4Lib4Li44LmI4LiZIOC4nuC4seC4meC4mOC4uOC5jOC5gOC4muC4meC4tOC4ruC4suC4o+C4uOC4geC4sCAgJyxcbiAgICBpbWFnZTpcbiAgICAgICcgaHR0cHM6Ly93d3cua2FzZXRodWIuY28udGgvcGljL2JpZ3BpYy9mOTRkMjU2MmJkZjQzMTBlOGRjODgyOTAyYmNlNDc4NS5qcGcnLFxuICAgIHByaWNlOiAnIDM5OSDguL8nLFxuICAgIGRlc2NyaXB0aW9uOiAn4Lih4Lix4LiZ4Lir4Lin4Liy4LiZ4LiN4Li14LmI4Lib4Li44LmI4LiZIOC4nuC4seC4meC4mOC4uOC5jOC5gOC4muC4meC4tOC4ruC4suC4o+C4uOC4geC4sCDguYTguIvguKrguYwgTCDguIjguLLguIHguJvguKPguLDguYDguJfguKjguI3guLXguYjguJvguLjguYjguJkgJyxcbiAgfSxcbiAge1xuICAgIGlkOiAnMDknLFxuICAgIHRpdGxlOiAn4Liq4Liy4Lil4Li14LmI4Lir4Li04Lih4LiwICcsXG4gICAgaW1hZ2U6XG4gICAgICAnaHR0cHM6Ly9mcnVpdGFnZS5pbi50aC93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wNC9rcDMuanBnICcsXG4gICAgcHJpY2U6ICcgMTY1MCDguL8nLFxuICAgIGRlc2NyaXB0aW9uOiAn4Liq4Liy4Lil4Li14LmI4Lir4Li04Lih4Liw4LmA4LiB4Liy4Lir4Lil4Li14LmA4LiB4Lij4LiU4Lie4Lij4Li14LmA4Lih4Li14Lii4LihICcsXG4gIH0sXG4gIHtcbiAgICBpZDogJzEwJyxcbiAgICB0aXRsZTogJ+C4reC4tOC4meC4l+C4nOC4suC4peC4seC4oeC4quC4lCAnLFxuICAgIGltYWdlOlxuICAgICAgJyBodHRwczovL3RoLXRlc3QtMTEuc2xhdGljLm5ldC9wLzZjZDIzNTNiZTU4YzM4NWQwZGQwMTQyMjI2OGU5NGMxLmpwZycsXG4gICAgcHJpY2U6ICcgODUwIOC4vycsXG4gICAgZGVzY3JpcHRpb246ICfguK3guLTguJnguJfguJzguLLguKXguLHguKHguKrguJQg4LiZ4Liz4LmA4LiC4LmJ4Liy4LiI4Liy4LiB4Lib4Lij4Liw4LmA4LiX4Lio4LmA4Lib4Lij4Li5ICcsXG4gIH0sXG5dO1xuXG5mdW5jdGlvbiBIb21lUGFnZShwcm9wcykge1xuICByZXR1cm4gPE1lZXR1cExpc3QgbWVldHVwcz17cHJvcHMubWVldHVwc30gLz47XG59XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICAvLyBmZXRjaCBkYXRhIGZyb20gYW4gQVBJXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIG1lZXR1cHM6IERVTU1ZX01FRVRVUFNcbiAgICB9LFxuICAgIHJldmFsaWRhdGU6IDFcbiAgfTsgXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=