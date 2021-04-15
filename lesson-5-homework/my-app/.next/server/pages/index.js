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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\code\\webdesign\\lesson-5-homework\\my-app\\pages\\index.js";
//import styles from "../styles/index.css";
 //import '../styles/index.css';
//计算新闻的时间

function culTime(hot_time) {
  let now_time = Date.now();
  let delta = (now_time / 1000 - hot_time) / 60;

  if (delta < 60) {
    delta = delta.toFixed(0);
    return delta.toString() + "分钟前";
  } else if (delta < 60 * 24) {
    delta /= 60;
    delta = delta.toFixed(0);
    return delta.toString() + "小时前";
  } else {
    delta /= 60 * 24;
    delta = delta.toFixed(0);
    return delta.toString() + "天前";
  }
} // 有图片的新闻


function inputImg(data) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "img-news",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "img-news-lbox1",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: "img-news-lbox",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: data.img_url
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "img-news-rbox",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "title-box",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "link",
          children: [" ", data.title]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "foot-bar",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "foot-bar-left",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "foot-bar-left tag-style-politic",
            children: data.chinese_tag
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "foot-bar-action avatar",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: data.media_avatar_url
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "foot-bar-action sourse",
            children: [data.source, "\xA0\xB7"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "foot-bar-action sourse",
            children: [data.comments_count, "\u8BC4\u8BBA \xA0\xB7"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "foot-bar-action time",
            children: culTime(data.hot_time)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 9
  }, this);
} //没有图片的新闻


function inputArticle(data) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "news",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "title-box",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: "link",
        children: [" ", data.title]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "foot-bar",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "foot-bar-left",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "foot-bar-left tag-style-politic",
          children: "\u65F6\u653F"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "foot-bar-action avatar",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: data.media_avatar_url
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "foot-bar-action sourse",
          children: [data.source, "\xA0\xB7"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "foot-bar-action sourse",
          children: [data.comments_count, "\u8BC4\u8BBA \xA0\xB7"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "foot-bar-action time",
          children: culTime(data.hot_time)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 9
  }, this);
}

function changeIntoNews(data) {
  if ("img_url" in data && data.image_url != "") {
    return inputImg(data);
  } else {
    return inputArticle(data);
  }
}

function Home() {
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    list: []
  });
  const {
    0: num,
    1: setNum
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(10);

  function scb() {
    let st = document.documentElement.scrollTop || document.body.scrollTop;
    let ch = document.documentElement.clientHeight || document.body.clientHeight;
    let sh = document.documentElement.scrollHeight || document.body.scrollHeight;

    if (st + ch + 2 > sh) {
      setNum(num + 3); //增加三条新闻

      console.log('num1', num);
    }
  } //   fso = new ActiveXObject(Scripting.FileSystemObject);
  //   f = fso.OpenTextFile("D://code//homework5//my-app//pages//1.txt", 1);
  //   S = f.ReadAll();
  //   console.log('S',S);


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    window.addEventListener('scroll', scb);
    fetch("/api/news").then(async res => {
      const resp = await res.json();
      console.log('num', num);
      setState({
        list: resp.data
      });
    });
    return () => {
      window.removeEventListener('scroll', scb);
    };
  }); //console.log("state",state.list)

  return (
    /*#__PURE__*/
    // 1?
    // <img src="../figure/qiushi.png"/>:
    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "header",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "top-bar",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "header-left-nav",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "download-app",
              children: "\u4E0B\u8F7DAPP"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "register",
              children: "\u6CE8\u518C\u5934\u6761\u53F7"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "weather-bar",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "location",
                children: " \u5317\u4EAC "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 143,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "city-state",
                children: "\u6C99\u5C18\u66B4"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 144,
                columnNumber: 21
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "city_temperature",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("em", {
                children: "2"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 148,
                columnNumber: 52
              }, this), "\xA0\u2103 \xA0/\xA0 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("em", {
                children: "15"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 148,
                columnNumber: 84
              }, this), "\xA0\u2103"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 148,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "header-right-nav",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "copyright-complaint",
              children: "\u4FB5\u6743\u6295\u8BC9"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "other-app",
              children: "\u5934\u6761\u4EA7\u54C1"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          id: "center",
          className: "column",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "feed-list",
            children: state.list.slice(0, num).map(i => {
              return changeIntoNews(i);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          id: "left",
          className: "column",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "logo",
            href: "/",
            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAAA2CAMAAACSsKctAAAANlBMVEVHcEzuQEDwRETyRUX3TEzvQkLuQEDuQUHuQUHvQEDuQUHuQEDvQkLuQEDuQUHwQUHxQkLtQEDKaksGAAAAEXRSTlMAxiweDlyo49Nri/F5+bhLOapXaIgAAATMSURBVGje7ZrpsqQqDIAb2VEE3/9lx263AAmu3XVv1cn8mFOtIh+JIQuvFyFSzdK8/jsSrbg7BG+HSdjPZi3iJPTchR7a7iYam7mGNvwKTM5vlOQd6n3Z37IhN6zSNhW1TsJqMt/TwQk6G3gxmt0DC5/LfpxS9U38wOJ9RJN38uG4KGBR0wRNxrcHtn4dlPjpv4pCYzqEEffBfAG2XDC9sxyCUbbfH3wVDdbkS2P4FzQGRR4As8NdsEYXy01Y4xMa28C6KljT3gUDXNtYOn5fY3UwNtwEA9+XA397+zONxR03fQ1MerjG0Is4QYK5riLzEMDdC4+CuQoY99sKoW9R20z5zsKwN0gAczDFUohdPzSKRpw4j9Yp0+Jg2GgCrHBf3sAVuIytC8u4RjIwYmGOh8AMvTutfLtgydR8ZjzCgeV32M7eFlyZj2T8GY3lfHwNmChTGmcP5tECNNFBf4m4AqEGhGt8rYEj2i+AwUhwFCocgOs+ok383MFfMecdoGYUHFwkW76Jz5kiHlmQ4TtPY48+iNAnfqgX1a+vtNMueXyjvqox5WTkJFgthq3t0i2ydhY+4MsbYhKMtEu6dxFseqw1Gd+s2raasylPRgCluoJJgnnU3SYaHbS8Y4rJBv3h42AFdN1gGzwWZtgcMHD3Xk5BfYOz67qlsWKDnq3G1DP74DTCZVwQVbA1X57WpWWqk40od4svgInKBrtUPJSpfGPGyYYC6zma/OjJm0RzBcwcBONltAzKIVYxfyBObJlbFAHAtKSyOla4x+c1FiuhAxvOiDcpWBKo4GDbp3sLDA2CJR07EGCaUZYJwUys5OGgBhdYCRYFIWQQHKzrjU/AXCUdQ8C0e0+Y295XwbSsFhiS4qLUC9hePsZ2QqqVT4I3NvtgvrfbXQLxkwsYUoWsgI37uX4GbOXj231+J332DPHsXKb+cknCkC2gkZ1iLQE2RtRPgiVJq6mAadVtUKL5CAea69v9qGxxs/KTMLFrVaozYLLi7UcwrVxWY3XYtjfu32q07cOF/Ob7YKpWLm0Emewj+7m43Ud5EGzdAvjJKnz/jTbCg2B2OBIpXgBzZl9a/xFdhBChwYWXYIEYe1GYzn6fHlPIE3rJDhBBTPxIPHYng5bDObEXQqrEK34PTP+B/c/A/kzxD+wUWLB1AXVJd8cUm3Jkv1W/SpmGlsiVOUw32GxPbMVbZtA9WwneGjo+Xun/34s8hEGLqQ+AgUaVff0cDHCpJ7stSZvKTVW//vNPoXVuNV3rVQ7WVR+juRjRfLqtMeuzkWOtG2SxdtrnuehrSc9utyBpwjwB5sp23eqdI33Og5Wm6IZan3eXKz/wcc8UYdl87ZOsrUtDZmzz6xIwoU9nB2CHKw5FLGBWVkQXzrTsu4Fvw1K+JGRWmjoPiTjto6eqysMeF08NFA0chRVu8jNRyzpogXpF6rF9LuSw2MVzHtnphMxRNLgj6IasdpCBNef8B+CKj53zyI5tWOqdATsP0VP7GPoYJd1QDQuuagw2f30xj9URaFF6MM8pMPSxfa7w4FmqxtTb4YgjCOVPReQRanvgKa5TGuvQ7j9+rq5QD6aNMqRa/LffKb9JvQoR6Al9XCQyrCZCIL5eX5Z4+QEscJfekj/2D7KhSDEKe9jHAAAAAElFTkSuQmCC"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 166,
              columnNumber: 43
            }, this), " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 166,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            className: "left-ulist",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "left-list-head",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "left-list",
                children: "\u63A8\u8350"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 169,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "left-list",
                children: "\u897F\u74DC\u89C6\u9891"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 172,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "left-list",
                children: "\u70ED\u70B9"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 175,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 174,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "left-list",
                children: "\u76F4\u64AD"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 178,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 177,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "left-list",
                children: "\u56FE\u7247"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 181,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 180,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "left-list",
                children: "\u79D1\u6280"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 184,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 183,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "left-list",
                children: "\u5A31\u4E50"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 187,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 186,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "left-list",
                children: "\u6E38\u620F"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 190,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 189,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "left-list",
                children: "\u4F53\u80B2"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 193,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 192,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "left-list",
                children: "\u61C2\u8F66\u5E1D"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 196,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 195,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "left-list",
                children: "\u8D22\u7ECF"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 199,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 198,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "left-list",
                children: "\u6570\u7801"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 202,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 201,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "left-list",
                children: "\u66F4\u591A"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 205,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 204,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          id: "right",
          className: "column",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "search-wrapper",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              className: "search-input",
              placeholder: "\u641C\u7D22\u7AD9\u5185\u8D44\u8BAF\u3001\u89C6\u9891\u6216\u7528\u6237"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 211,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "search-button",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: "right-search-button",
                type: "button",
                children: "\u641C\u7D22"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 213,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 212,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "login-wrapper",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "login-inner",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "login-msg",
                children: "\u767B\u5F55\u540E\u53EF\u4EE5\u4FDD\u5B58\u60A8\u7684\u6D4F\u89C8\u559C\u597D\u3001\u8BC4\u8BBA\u3001\u6536\u85CF\uFF0C\u5E76\u4E0EAPP\u540C\u6B65\uFF0C\u66F4\u53EF\u4EE5\u53D1\u5E03\u5FAE\u5934\u6761"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 218,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 217,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: "login-btn",
                children: "\u767B\u9646"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 221,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 220,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 216,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "pane-module",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "pane-module-head",
              children: "\u66F4\u591A"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 225,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
              className: "links-wrapper",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: "\u5173\u4E8E\u5934\u6761"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 229,
                  columnNumber: 42
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 229,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: "\u52A0\u5165\u5934\u6761"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 230,
                  columnNumber: 42
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 230,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: "\u5A92\u4F53\u62A5\u9053"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 231,
                  columnNumber: 42
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 231,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: "\u5A92\u4F53\u5408\u4F5C"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 232,
                  columnNumber: 42
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 232,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: "\u4EA7\u54C1\u5408\u4F5C"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 233,
                  columnNumber: 42
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 233,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: "\u5408\u4F5C\u8BF4\u660E"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 234,
                  columnNumber: 42
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 234,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: "\u5E7F\u544A\u6295\u653E"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 235,
                  columnNumber: 42
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 235,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: "\u8054\u7CFB\u6211\u4EEC"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 236,
                  columnNumber: 42
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 236,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: "\u7528\u6237\u534F\u8BAE"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 237,
                  columnNumber: 42
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 237,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: "\u9690\u79C1\u653F\u7B56"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 238,
                  columnNumber: 42
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 238,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: "\u4FB5\u6743\u6295\u8BC9"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 239,
                  columnNumber: 42
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 239,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: "\u5EC9\u6D01\u4E3E\u62A5"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 240,
                  columnNumber: 42
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 240,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: "\u4F01\u4E1A\u8BA4\u8BC1"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 241,
                  columnNumber: 42
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 241,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: "\u80BA\u708E\u6C42\u52A9"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 242,
                  columnNumber: 42
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 242,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: "\u8F9F\u8C23\u4E13\u533A"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 243,
                  columnNumber: 42
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 243,
                columnNumber: 21
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 228,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 224,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "pane-module",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "pane-module-head",
              children: "\u53CB\u60C5\u94FE\u63A5"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 247,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
              className: "links-wrapper",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: "\u5149\u660E\u7F51"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 251,
                  columnNumber: 42
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 251,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: "\u592E\u5E7F\u7F51"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 252,
                  columnNumber: 42
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 252,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: "\u56FD\u9645\u5728\u7EBF"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 253,
                  columnNumber: 42
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 253,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: "\u4E2D\u56FD\u897F\u85CF\u7F51"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 254,
                  columnNumber: 42
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 254,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: "\u53C2\u8003\u6D88\u606F"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 255,
                  columnNumber: 42
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 255,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: "\u73AF\u7403\u7F51"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 256,
                  columnNumber: 42
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 256,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: "\u4E2D\u9752\u5728\u7EBF"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 257,
                  columnNumber: 42
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 257,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: "\u4E2D\u9752\u7F51"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 258,
                  columnNumber: 42
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 258,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: "\u4E2D\u5DE5\u7F51"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 259,
                  columnNumber: 42
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 259,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: "\u6D77\u5916\u7F51"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 260,
                  columnNumber: 42
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 260,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: "\u4E2D\u56FD\u7F51"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 261,
                  columnNumber: 42
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 261,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: "\u672A\u6765\u7F51"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 262,
                  columnNumber: 42
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 262,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: "\u5343\u9F99\u7F51"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 263,
                  columnNumber: 42
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 263,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: "\u65B0\u4EAC\u62A5"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 264,
                  columnNumber: 42
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 264,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: "\u5317\u9752\u7F51"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 265,
                  columnNumber: 42
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 265,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: "\u6CD5\u5236\u665A\u62A5"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 266,
                  columnNumber: 42
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 266,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: "\u5317\u4EAC\u6668\u62A5"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 267,
                  columnNumber: 42
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 267,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: "\u5317\u4EAC\u5546\u62A5"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 268,
                  columnNumber: 42
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 268,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: "\u5317\u4EAC\u5A31\u4E50\u4FE1\u62A5"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 269,
                  columnNumber: 42
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 269,
                columnNumber: 21
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 250,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 246,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 5
    }, this)
  );
}

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJjdWxUaW1lIiwiaG90X3RpbWUiLCJub3dfdGltZSIsIkRhdGUiLCJub3ciLCJkZWx0YSIsInRvRml4ZWQiLCJ0b1N0cmluZyIsImlucHV0SW1nIiwiZGF0YSIsImltZ191cmwiLCJ0aXRsZSIsImNoaW5lc2VfdGFnIiwibWVkaWFfYXZhdGFyX3VybCIsInNvdXJjZSIsImNvbW1lbnRzX2NvdW50IiwiaW5wdXRBcnRpY2xlIiwiY2hhbmdlSW50b05ld3MiLCJpbWFnZV91cmwiLCJIb21lIiwic3RhdGUiLCJzZXRTdGF0ZSIsInVzZVN0YXRlIiwibGlzdCIsIm51bSIsInNldE51bSIsInNjYiIsInN0IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJib2R5IiwiY2giLCJjbGllbnRIZWlnaHQiLCJzaCIsInNjcm9sbEhlaWdodCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwicmVzcCIsImpzb24iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2xpY2UiLCJtYXAiLCJpIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFF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UyxFQUFDLE1BQWQ7QUFBQSx1Q0FBcUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFoQkosZUFpQkk7QUFBSSx5QkFBUyxFQUFDLE1BQWQ7QUFBQSx1Q0FBcUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFqQkosZUFrQkk7QUFBSSx5QkFBUyxFQUFDLE1BQWQ7QUFBQSx1Q0FBcUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFsQkosZUFtQkk7QUFBSSx5QkFBUyxFQUFDLE1BQWQ7QUFBQSx1Q0FBcUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFuQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFyQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXJESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FwQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEY7QUErSUQsQzs7Ozs7Ozs7Ozs7QUNuUkQsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiLy9pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvaW5kZXguY3NzXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuLy9pbXBvcnQgJy4uL3N0eWxlcy9pbmRleC5jc3MnO1xuLy/orqHnrpfmlrDpl7vnmoTml7bpl7RcbmZ1bmN0aW9uIGN1bFRpbWUoaG90X3RpbWUpe1xuICAgIGxldCBub3dfdGltZSA9IERhdGUubm93KCk7XG4gICAgbGV0IGRlbHRhID0gKG5vd190aW1lLzEwMDAtaG90X3RpbWUpLzYwO1xuICAgIGlmIChkZWx0YTw2MCl7XG4gICAgICAgIGRlbHRhID0gZGVsdGEudG9GaXhlZCgwKTtcbiAgICAgICAgcmV0dXJuIGRlbHRhLnRvU3RyaW5nKCkrXCLliIbpkp/liY1cIjtcbiAgICB9XG4gICAgZWxzZSBpZiAoZGVsdGE8NjAqMjQpe1xuICAgICAgICBkZWx0YS89NjA7XG4gICAgICAgIGRlbHRhID0gZGVsdGEudG9GaXhlZCgwKTtcbiAgICAgICAgcmV0dXJuIGRlbHRhLnRvU3RyaW5nKCkrXCLlsI/ml7bliY1cIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGRlbHRhLz02MCoyNDtcbiAgICAgICAgZGVsdGEgPSBkZWx0YS50b0ZpeGVkKDApO1xuICAgICAgICByZXR1cm4gZGVsdGEudG9TdHJpbmcoKStcIuWkqeWJjVwiO1xuICAgIH1cbn1cbi8vIOacieWbvueJh+eahOaWsOmXu1xuZnVuY3Rpb24gaW5wdXRJbWcoZGF0YSl7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctbmV3c1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctbmV3cy1sYm94MVwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImltZy1uZXdzLWxib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2RhdGEuaW1nX3VybH0vPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctbmV3cy1yYm94XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGlua1wiPiB7ZGF0YS50aXRsZX08L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290LWJhclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3QtYmFyLWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZvb3QtYmFyLWxlZnQgdGFnLXN0eWxlLXBvbGl0aWNcIj57ZGF0YS5jaGluZXNlX3RhZ308L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmb290LWJhci1hY3Rpb24gYXZhdGFyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2RhdGEubWVkaWFfYXZhdGFyX3VybH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZm9vdC1iYXItYWN0aW9uIHNvdXJzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLnNvdXJjZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDvCt1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZm9vdC1iYXItYWN0aW9uIHNvdXJzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLmNvbW1lbnRzX2NvdW50feivhOiuulxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO8K3XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb290LWJhci1hY3Rpb24gdGltZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdWxUaW1lKGRhdGEuaG90X3RpbWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj4pXG59XG4vL+ayoeacieWbvueJh+eahOaWsOmXu1xuZnVuY3Rpb24gaW5wdXRBcnRpY2xlKGRhdGEpe1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3c1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS1ib3hcIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsaW5rXCI+IHtkYXRhLnRpdGxlfTwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290LWJhclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdC1iYXItbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmb290LWJhci1sZWZ0IHRhZy1zdHlsZS1wb2xpdGljXCI+5pe25pS/PC9hPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmb290LWJhci1hY3Rpb24gYXZhdGFyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZGF0YS5tZWRpYV9hdmF0YXJfdXJsfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZm9vdC1iYXItYWN0aW9uIHNvdXJzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuc291cmNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7wrdcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmb290LWJhci1hY3Rpb24gc291cnNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5jb21tZW50c19jb3VudH3or4TorrpcbiAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO8K3XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9vdC1iYXItYWN0aW9uIHRpbWVcIj5cbiAgICAgICAgICAgICAgICAgICAge2N1bFRpbWUoZGF0YS5ob3RfdGltZSl9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmZ1bmN0aW9uIGNoYW5nZUludG9OZXdzKGRhdGEpe1xuICAgIGlmIChcImltZ191cmxcIiBpbiBkYXRhICYmZGF0YS5pbWFnZV91cmwhPVwiXCIpe1xuICAgICAgICByZXR1cm4gaW5wdXRJbWcoZGF0YSk7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIHJldHVybiBpbnB1dEFydGljbGUoZGF0YSk7XG4gICAgfVxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XG4gICAgbGlzdDogW10sXG4gIH0pO1xuICBjb25zdCBbbnVtLHNldE51bV0gPSB1c2VTdGF0ZSgxMCk7XG4gIGZ1bmN0aW9uIHNjYigpe1xuICAgIGxldCBzdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XG4gICAgbGV0IGNoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCB8fCBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodDtcbiAgICBsZXQgc2ggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0IHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0O1xuICAgIGlmKHN0ICsgY2grMj5zaCkge1xuICAgICAgICBzZXROdW0obnVtKzMpOyAvL+WinuWKoOS4ieadoeaWsOmXu1xuICAgICAgICBjb25zb2xlLmxvZygnbnVtMScsbnVtKTtcbiAgICB9XG4gIH1cblxuLy8gICBmc28gPSBuZXcgQWN0aXZlWE9iamVjdChTY3JpcHRpbmcuRmlsZVN5c3RlbU9iamVjdCk7XG4vLyAgIGYgPSBmc28uT3BlblRleHRGaWxlKFwiRDovL2NvZGUvL2hvbWV3b3JrNS8vbXktYXBwLy9wYWdlcy8vMS50eHRcIiwgMSk7XG4vLyAgIFMgPSBmLlJlYWRBbGwoKTtcbi8vICAgY29uc29sZS5sb2coJ1MnLFMpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLHNjYilcbiAgICBmZXRjaChcIi9hcGkvbmV3c1wiKS50aGVuKGFzeW5jIChyZXMpID0+IHtcbiAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgY29uc29sZS5sb2coJ251bScsbnVtKTtcbiAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgbGlzdDogcmVzcC5kYXRhLFxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuICgpPT57XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLHNjYilcbiAgICB9XG4gIH0pO1xuXG4gIC8vY29uc29sZS5sb2coXCJzdGF0ZVwiLHN0YXRlLmxpc3QpXG4gIHJldHVybiAoXG4gICAgLy8gMT9cbiAgICAvLyA8aW1nIHNyYz1cIi4uL2ZpZ3VyZS9xaXVzaGkucG5nXCIvPjpcbiAgICA8ZGl2PlxuICAgIDxkaXYgaWQ9XCJoZWFkZXJcIiA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLWJhclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItbGVmdC1uYXZcIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkb3dubG9hZC1hcHBcIj7kuIvovb1BUFA8L2E+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicmVnaXN0ZXJcIj7ms6jlhozlpLTmnaHlj7c8L2E+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWF0aGVyLWJhclwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb2NhdGlvblwiPiDljJfkuqwgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaXR5LXN0YXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICDmspnlsJjmmrRcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNpdHlfdGVtcGVyYXR1cmVcIj48ZW0+MjwvZW0+Jm5ic3A74oSDICZuYnNwOy8mbmJzcDsgPGVtPjE1PC9lbT4mbmJzcDvihIM8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXJpZ2h0LW5hdlwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNvcHlyaWdodC1jb21wbGFpbnRcIj7kvrXmnYPmipXor4k8L2E+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwib3RoZXItYXBwXCI+5aS05p2h5Lqn5ZOBPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgaWQ9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBpZD1cImNlbnRlclwiIGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZWVkLWxpc3RcIj5cbiAgICAgICAgICAgICAgICB7c3RhdGUubGlzdC5zbGljZSgwLG51bSkubWFwKChpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZUludG9OZXdzKGkpXG4gICAgICAgICAgICAgICAgKTt9KX0gICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgIDxkaXYgaWQ9XCJsZWZ0XCIgY2xhc3NOYW1lPVwiY29sdW1uXCIgPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibG9nb1wiIGhyZWY9XCIvXCI+IDxpbWcgc3JjPVwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFOZ0FBQUEyQ0FNQUFBQ1NzS2N0QUFBQU5sQk1WRVZIY0V6dVFFRHdSRVR5UlVYM1RFenZRa0x1UUVEdVFVSHVRVUh2UUVEdVFVSHVRRUR2UWtMdVFFRHVRVUh3UVVIeFFrTHRRRURLYWtzR0FBQUFFWFJTVGxNQXhpd2VEbHlvNDlOcmkvRjUrYmhMT2FwWGFJZ0FBQVRNU1VSQlZHamU3WnJwc3FRcURJQWIyVkVFMy85bHgyNjNBQW11M1hWdjFjbjhtRk90SWgrSklRdXZGeUZTemRLOC9qc1NyYmc3QkcrSFNkalBaaTNpSlBUY2hSN2E3aVlhbTdtR052d0tUTTV2bE9RZDZuM1ozN0loTjZ6U05oVzFUc0pxTXQvVHdRazZHM2d4bXQwREM1L0xmcHhTOVUzOHdPSjlSSk4zOHVHNEtHQlIwd1JOeHJjSHRuNGRsUGpwdjRwQ1l6cUVFZmZCZkFHMlhEQzlzeHlDVWJiZkgzd1ZEZGJrUzJQNEZ6UUdSUjRBczhOZHNFWVh5MDFZNHhNYTI4QzZLbGpUM2dVRFhOdFlPbjVmWTNVd050d0VBOStYQTM5Nyt6T054UjAzZlExTWVyakcwSXM0UVlLNXJpTHpFTURkQzQrQ3VRb1k5OXNLb1c5UjIwejV6c0t3TjBnQWN6REZVb2hkUHpTS1JwdzRqOVlwMCtKZzJHZ0NySEJmM3NBVnVJeXRDOHU0UmpJd1ltR09oOEFNdlR1dGZMdGd5ZFI4Wmp6Q2dlVjMyTTdlRmx5WmoyVDhHWTNsZkh3Tm1DaFRHbWNQNXRFQ05ORkJmNG00QXFFR2hHdDhyWUVqMmkrQXdVaHdGQ29jZ09zK29rMzgzTUZmTWVjZG9HWVVIRndrVzc2Sno1a2lIbG1RNFR0UFk0OCtpTkFuZnFnWDFhK3Z0Tk11ZVh5anZxb3g1V1RrSkZndGhxM3QwaTJ5ZGhZKzRNc2JZaEtNdEV1NmR4RnNlcXcxR2QrczJyYWFzeWxQUmdDbHVvSkpnbm5VM1NZYUhiUzhZNHJKQnYzaDQyQUZkTjFnR3p3V1p0Z2NNSEQzWGs1QmZZT3o2N3Fsc1dLRG5xM0cxRFA3NERUQ1pWd1FWYkExWDU3V3BXV3FrNDBvZDRzdmdJbktCcnRVUEpTcGZHUEd5WVlDNnptYS9PakptMFJ6QmN3Y0JPTmx0QXpLSVZZeGZ5Qk9iSmxiRkFIQXRLU3lPbGE0eCtjMUZpdWhBeHZPaURjcFdCS280R0RicDNzTERBMkNKUjA3RUdDYVVaWUp3VXlzNU9HZ0JoZFlDUllGSVdRUUhLenJqVS9BWENVZFE4QzBlMCtZMjk1WHdiU3NGaGlTNHFMVUM5aGVQc1oyUXFxVlQ0STNOdnRndnJmYlhRTHhrd3NZVW9Xc2dJMzd1WDRHYk9YajIzMStKMzMyRFBIc1hLYitja25Da0MyZ2taMWlMUUUyUnRSUGdpVkpxNm1BYWRWdFVLTDVDQWVhNjl2OXFHeHhzL0tUTUxGclZhb3pZTExpN1Vjd3JWeFdZM1hZdGpmdTMycTA3Y09GL09iN1lLcFdMbTBFbWV3ais3bTQzVWQ1RUd6ZEF2akpLbnovalRiQ2cyQjJPQklwWGdCelpsOWEveEZkaEJDaHdZV1hZSUVZZTFHWXpuNmZIbFBJRTNySkRoQkJUUHhJUEhZbmc1YkRPYkVYUXFyRUszNFBUUCtCL2MvQS9renhEK3dVV0xCMUFYVkpkOGNVbTNKa3YxVy9TcG1HbHNpVk9VdzMyR3hQYk1WYlp0QTlXd25lR2pvK1h1bi8zNHM4aEVHTHFRK0FnVWFWZmYwY0RIQ3BKN3N0U1p2S1RWVy8vdk5Qb1hWdU5WM3JWUTdXVlIranVSalJmTHF0TWV1emtXT3RHMlN4ZHRybnVlaHJTYzl1dHlCcHdqd0I1c3AyM2VxZEkzM09nNVdtNklaYW4zZVhLei93Y2M4VVlkbDg3Wk9zclV0RFpteno2eEl3b1U5bkIyQ0hLdzVGTEdCV1ZrUVh6clRzdTRGdncxSytKR1JXbWpvUGlUanRvNmVxeXNNZUYwOE5GQTBjaFJWdThqTlJ5enBvZ1hwRjZyRjlMdVN3Mk1Wekh0bnBoTXhSTkxnajZJYXNkcENCTmVmOEIrQ0tqNTN6eUk1dFdPcWRBVHNQMFZQN0dQb1lKZDFRRFF1dWFndzJmMzB4ajlVUmFGRjZNTThwTVBTeGZhN3c0Rm1xeHRUYjRZZ2pDT1ZQUmVRUmFudmdLYTVUR3V2UTdqOStycTVRRDZhTk1xUmEvTGZmS2I5SnZRb1I2QWw5WENReXJDWkNJTDVlWDVaNCtRRXNjSmZla2ovMkQ3S2hTREVLZTlqSEFBQUFBRWxGVGtTdVFtQ0NcIi8+IDwvYT5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsZWZ0LXVsaXN0XCI+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxlZnQtbGlzdC1oZWFkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxlZnQtbGlzdFwiPuaOqOiNkDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGVmdC1saXN0XCI+6KW/55Oc6KeG6aKRPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsZWZ0LWxpc3RcIj7ng63ngrk8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxlZnQtbGlzdFwiPuebtOaSrTwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGVmdC1saXN0XCI+5Zu+54mHPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsZWZ0LWxpc3RcIj7np5HmioA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxlZnQtbGlzdFwiPuWoseS5kDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGVmdC1saXN0XCI+5ri45oiPPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsZWZ0LWxpc3RcIj7kvZPogrI8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxlZnQtbGlzdFwiPuaHgui9puW4nTwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGVmdC1saXN0XCI+6LSi57uPPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsZWZ0LWxpc3RcIj7mlbDnoIE8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxlZnQtbGlzdFwiPuabtOWkmjwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9XCJyaWdodFwiIGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJzZWFyY2gtaW5wdXRcIiBwbGFjZWhvbGRlcj1cIuaQnOe0ouermeWGhei1hOiur+OAgeinhumikeaIlueUqOaIt1wiLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1idXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJyaWdodC1zZWFyY2gtYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiPuaQnOe0ojwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWlubmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxvZ2luLW1zZ1wiPueZu+W9leWQjuWPr+S7peS/neWtmOaCqOeahOa1j+iniOWWnOWlveOAgeivhOiuuuOAgeaUtuiXj++8jOW5tuS4jkFQUOWQjOatpe+8jOabtOWPr+S7peWPkeW4g+W+ruWktOadoTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJsb2dpbi1idG5cIj7nmbvpmYY8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZS1tb2R1bGVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmUtbW9kdWxlLWhlYWRcIj5cbiAgICAgICAgICAgICAgICAgICAg5pu05aSaXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpbmtzLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIml0ZW1cIj48YT7lhbPkuo7lpLTmnaE8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIml0ZW1cIj48YT7liqDlhaXlpLTmnaE8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIml0ZW1cIj48YT7lqpLkvZPmiqXpgZM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIml0ZW1cIj48YT7lqpLkvZPlkIjkvZw8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIml0ZW1cIj48YT7kuqflk4HlkIjkvZw8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIml0ZW1cIj48YT7lkIjkvZzor7TmmI48L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIml0ZW1cIj48YT7lub/lkYrmipXmlL48L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIml0ZW1cIj48YT7ogZTns7vmiJHku6w8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIml0ZW1cIj48YT7nlKjmiLfljY/orq48L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIml0ZW1cIj48YT7pmpDnp4HmlL/nrZY8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIml0ZW1cIj48YT7kvrXmnYPmipXor4k8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIml0ZW1cIj48YT7lu4nmtIHkuL7miqU8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIml0ZW1cIj48YT7kvIHkuJrorqTor4E8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIml0ZW1cIj48YT7ogrrngo7msYLliqk8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIml0ZW1cIj48YT7ovp/osKPkuJPljLo8L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmUtbW9kdWxlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lLW1vZHVsZS1oZWFkXCI+XG4gICAgICAgICAgICAgICAgICAgIOWPi+aDhemTvuaOpVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaW5rcy13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJpdGVtXCI+PGE+5YWJ5piO572RPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJpdGVtXCI+PGE+5aSu5bm/572RPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJpdGVtXCI+PGE+5Zu96ZmF5Zyo57q/PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJpdGVtXCI+PGE+5Lit5Zu96KW/6JeP572RPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJpdGVtXCI+PGE+5Y+C6ICD5raI5oGvPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJpdGVtXCI+PGE+546v55CD572RPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJpdGVtXCI+PGE+5Lit6Z2S5Zyo57q/PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJpdGVtXCI+PGE+5Lit6Z2S572RPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJpdGVtXCI+PGE+5Lit5bel572RPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJpdGVtXCI+PGE+5rW35aSW572RPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJpdGVtXCI+PGE+5Lit5Zu9572RPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJpdGVtXCI+PGE+5pyq5p2l572RPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJpdGVtXCI+PGE+5Y2D6b6Z572RPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJpdGVtXCI+PGE+5paw5Lqs5oqlPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJpdGVtXCI+PGE+5YyX6Z2S572RPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJpdGVtXCI+PGE+5rOV5Yi25pma5oqlPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJpdGVtXCI+PGE+5YyX5Lqs5pmo5oqlPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJpdGVtXCI+PGE+5YyX5Lqs5ZWG5oqlPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJpdGVtXCI+PGE+5YyX5Lqs5aix5LmQ5L+h5oqlPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gICk7XG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=