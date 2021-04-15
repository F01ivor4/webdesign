webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var D_code_webdesign_lesson_5_homework_my_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_code_webdesign_lesson_5_homework_my_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_code_webdesign_lesson_5_homework_my_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_code_webdesign_lesson_5_homework_my_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




var _jsxFileName = "D:\\code\\webdesign\\lesson-5-homework\\my-app\\pages\\index.js",
    _s = $RefreshSig$();

//import styles from "../styles/index.css";
 //import '../styles/index.css';
//计算新闻的时间

function culTime(hot_time) {
  var now_time = Date.now();
  var delta = (now_time / 1000 - hot_time) / 60;

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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: "img-news",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "img-news-lbox1",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
        className: "img-news-lbox",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
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
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "img-news-rbox",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "title-box",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
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
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "foot-bar",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "foot-bar-left",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            className: "foot-bar-left tag-style-politic",
            children: data.chinese_tag
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            className: "foot-bar-action avatar",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
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
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            className: "foot-bar-action sourse",
            children: [data.source, "\xA0\xB7"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            className: "foot-bar-action sourse",
            children: [data.comments_count, "\u8BC4\u8BBA \xA0\xB7"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: "news",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "title-box",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
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
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "foot-bar",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "foot-bar-left",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
          className: "foot-bar-left tag-style-politic",
          children: "\u65F6\u653F"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
          className: "foot-bar-action avatar",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
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
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
          className: "foot-bar-action sourse",
          children: [data.source, "\xA0\xB7"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
          className: "foot-bar-action sourse",
          children: [data.comments_count, "\u8BC4\u8BBA \xA0\xB7"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
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
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    list: []
  }),
      state = _useState[0],
      setState = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(10),
      num = _useState2[0],
      setNum = _useState2[1];

  function scb() {
    var st = document.documentElement.scrollTop || document.body.scrollTop;
    var ch = document.documentElement.clientHeight || document.body.clientHeight;
    var sh = document.documentElement.scrollHeight || document.body.scrollHeight;

    if (st + ch + 2 > sh) {
      setNum(num + 3); //增加三条新闻

      console.log('num1', num);
    }
  } //   fso = new ActiveXObject(Scripting.FileSystemObject);
  //   f = fso.OpenTextFile("D://code//homework5//my-app//pages//1.txt", 1);
  //   S = f.ReadAll();
  //   console.log('S',S);


  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    window.addEventListener('scroll', scb);
    fetch("/api/news").then( /*#__PURE__*/function () {
      var _ref = Object(D_code_webdesign_lesson_5_homework_my_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_code_webdesign_lesson_5_homework_my_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(res) {
        var resp;
        return D_code_webdesign_lesson_5_homework_my_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return res.json();

              case 2:
                resp = _context.sent;
                console.log('num', num);
                setState({
                  list: resp.data
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    return function () {
      window.removeEventListener('scroll', scb);
    };
  }); //console.log("state",state.list)

  return (
    /*#__PURE__*/
    // 1?
    // <img src="../figure/qiushi.png"/>:
    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        id: "header",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "top-bar",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "header-left-nav",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
              className: "download-app",
              children: "\u4E0B\u8F7DAPP"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
              className: "register",
              children: "\u6CE8\u518C\u5934\u6761\u53F7"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "weather-bar",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
                className: "location",
                children: " \u5317\u4EAC "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 143,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
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
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
              className: "city_temperature",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("em", {
                children: "2"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 148,
                columnNumber: 52
              }, this), "\xA0\u2103 \xA0/\xA0 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("em", {
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
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "header-right-nav",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
              className: "copyright-complaint",
              children: "\u4FB5\u6743\u6295\u8BC9"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
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
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        id: "container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          id: "center",
          className: "column",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "feed-list",
            children: state.list.slice(0, num).map(function (i) {
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
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          id: "left",
          className: "column",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            className: "logo",
            href: "/",
            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
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
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ul", {
            className: "left-ulist",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
              className: "left-list-head",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
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
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
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
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
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
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
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
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
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
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
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
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
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
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
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
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
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
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
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
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
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
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
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
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
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
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          id: "right",
          className: "column",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "search-wrapper",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
              className: "search-input",
              placeholder: "\u641C\u7D22\u7AD9\u5185\u8D44\u8BAF\u3001\u89C6\u9891\u6216\u7528\u6237"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 211,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "search-button",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
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
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "login-wrapper",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "login-inner",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
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
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
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
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "pane-module",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "pane-module-head",
              children: "\u66F4\u591A"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 225,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ul", {
              className: "links-wrapper",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
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
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
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
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
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
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
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
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
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
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
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
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
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
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
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
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
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
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
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
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
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
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
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
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
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
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
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
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
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
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "pane-module",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "pane-module-head",
              children: "\u53CB\u60C5\u94FE\u63A5"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 247,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ul", {
              className: "links-wrapper",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
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
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
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
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
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
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
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
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
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
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
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
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
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
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
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
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
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
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
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
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
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
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
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
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
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
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
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
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
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
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
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
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
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
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
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
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
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

_s(Home, "CMNaN+CfI6sMUCJ/hCh6tBDwz+E=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiY3VsVGltZSIsImhvdF90aW1lIiwibm93X3RpbWUiLCJEYXRlIiwibm93IiwiZGVsdGEiLCJ0b0ZpeGVkIiwidG9TdHJpbmciLCJpbnB1dEltZyIsImRhdGEiLCJpbWdfdXJsIiwidGl0bGUiLCJjaGluZXNlX3RhZyIsIm1lZGlhX2F2YXRhcl91cmwiLCJzb3VyY2UiLCJjb21tZW50c19jb3VudCIsImlucHV0QXJ0aWNsZSIsImNoYW5nZUludG9OZXdzIiwiaW1hZ2VfdXJsIiwiSG9tZSIsInVzZVN0YXRlIiwibGlzdCIsInN0YXRlIiwic2V0U3RhdGUiLCJudW0iLCJzZXROdW0iLCJzY2IiLCJzdCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwiYm9keSIsImNoIiwiY2xpZW50SGVpZ2h0Iiwic2giLCJzY3JvbGxIZWlnaHQiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJyZXNwIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNsaWNlIiwibWFwIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBO0FBQ0E7O0FBQ0EsU0FBU0EsT0FBVCxDQUFpQkMsUUFBakIsRUFBMEI7QUFDdEIsTUFBSUMsUUFBUSxHQUFHQyxJQUFJLENBQUNDLEdBQUwsRUFBZjtBQUNBLE1BQUlDLEtBQUssR0FBRyxDQUFDSCxRQUFRLEdBQUMsSUFBVCxHQUFjRCxRQUFmLElBQXlCLEVBQXJDOztBQUNBLE1BQUlJLEtBQUssR0FBQyxFQUFWLEVBQWE7QUFDVEEsU0FBSyxHQUFHQSxLQUFLLENBQUNDLE9BQU4sQ0FBYyxDQUFkLENBQVI7QUFDQSxXQUFPRCxLQUFLLENBQUNFLFFBQU4sS0FBaUIsS0FBeEI7QUFDSCxHQUhELE1B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cEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhGO0FBK0lEOztHQWpMdUI5QixJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjZkY2FjNWYwZWRlYWRlYTg3MmVmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9pbmRleC5jc3NcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG4vL2ltcG9ydCAnLi4vc3R5bGVzL2luZGV4LmNzcyc7XG4vL+iuoeeul+aWsOmXu+eahOaXtumXtFxuZnVuY3Rpb24gY3VsVGltZShob3RfdGltZSl7XG4gICAgbGV0IG5vd190aW1lID0gRGF0ZS5ub3coKTtcbiAgICBsZXQgZGVsdGEgPSAobm93X3RpbWUvMTAwMC1ob3RfdGltZSkvNjA7XG4gICAgaWYgKGRlbHRhPDYwKXtcbiAgICAgICAgZGVsdGEgPSBkZWx0YS50b0ZpeGVkKDApO1xuICAgICAgICByZXR1cm4gZGVsdGEudG9TdHJpbmcoKStcIuWIhumSn+WJjVwiO1xuICAgIH1cbiAgICBlbHNlIGlmIChkZWx0YTw2MCoyNCl7XG4gICAgICAgIGRlbHRhLz02MDtcbiAgICAgICAgZGVsdGEgPSBkZWx0YS50b0ZpeGVkKDApO1xuICAgICAgICByZXR1cm4gZGVsdGEudG9TdHJpbmcoKStcIuWwj+aXtuWJjVwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZGVsdGEvPTYwKjI0O1xuICAgICAgICBkZWx0YSA9IGRlbHRhLnRvRml4ZWQoMCk7XG4gICAgICAgIHJldHVybiBkZWx0YS50b1N0cmluZygpK1wi5aSp5YmNXCI7XG4gICAgfVxufVxuLy8g5pyJ5Zu+54mH55qE5paw6Ze7XG5mdW5jdGlvbiBpbnB1dEltZyhkYXRhKXtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1uZXdzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1uZXdzLWxib3gxXCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaW1nLW5ld3MtbGJveFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZGF0YS5pbWdfdXJsfS8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1uZXdzLXJib3hcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsaW5rXCI+IHtkYXRhLnRpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3QtYmFyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdC1iYXItbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZm9vdC1iYXItbGVmdCB0YWctc3R5bGUtcG9saXRpY1wiPntkYXRhLmNoaW5lc2VfdGFnfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZvb3QtYmFyLWFjdGlvbiBhdmF0YXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZGF0YS5tZWRpYV9hdmF0YXJfdXJsfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmb290LWJhci1hY3Rpb24gc291cnNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuc291cmNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO8K3XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmb290LWJhci1hY3Rpb24gc291cnNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuY29tbWVudHNfY291bnR96K+E6K66XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7wrdcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvb3QtYmFyLWFjdGlvbiB0aW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2N1bFRpbWUoZGF0YS5ob3RfdGltZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2Pilcbn1cbi8v5rKh5pyJ5Zu+54mH55qE5paw6Ze7XG5mdW5jdGlvbiBpbnB1dEFydGljbGUoZGF0YSl7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLWJveFwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxpbmtcIj4ge2RhdGEudGl0bGV9PC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3QtYmFyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290LWJhci1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZvb3QtYmFyLWxlZnQgdGFnLXN0eWxlLXBvbGl0aWNcIj7ml7bmlL88L2E+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZvb3QtYmFyLWFjdGlvbiBhdmF0YXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkYXRhLm1lZGlhX2F2YXRhcl91cmx9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmb290LWJhci1hY3Rpb24gc291cnNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5zb3VyY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDvCt1xuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZvb3QtYmFyLWFjdGlvbiBzb3Vyc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLmNvbW1lbnRzX2NvdW50feivhOiuulxuICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7wrdcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb290LWJhci1hY3Rpb24gdGltZVwiPlxuICAgICAgICAgICAgICAgICAgICB7Y3VsVGltZShkYXRhLmhvdF90aW1lKX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZnVuY3Rpb24gY2hhbmdlSW50b05ld3MoZGF0YSl7XG4gICAgaWYgKFwiaW1nX3VybFwiIGluIGRhdGEgJiZkYXRhLmltYWdlX3VybCE9XCJcIil7XG4gICAgICAgIHJldHVybiBpbnB1dEltZyhkYXRhKTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgcmV0dXJuIGlucHV0QXJ0aWNsZShkYXRhKTtcbiAgICB9XG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcbiAgICBsaXN0OiBbXSxcbiAgfSk7XG4gIGNvbnN0IFtudW0sc2V0TnVtXSA9IHVzZVN0YXRlKDEwKTtcbiAgZnVuY3Rpb24gc2NiKCl7XG4gICAgbGV0IHN0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcbiAgICBsZXQgY2ggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IHx8IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0O1xuICAgIGxldCBzaCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQ7XG4gICAgaWYoc3QgKyBjaCsyPnNoKSB7XG4gICAgICAgIHNldE51bShudW0rMyk7IC8v5aKe5Yqg5LiJ5p2h5paw6Ze7XG4gICAgICAgIGNvbnNvbGUubG9nKCdudW0xJyxudW0pO1xuICAgIH1cbiAgfVxuXG4vLyAgIGZzbyA9IG5ldyBBY3RpdmVYT2JqZWN0KFNjcmlwdGluZy5GaWxlU3lzdGVtT2JqZWN0KTtcbi8vICAgZiA9IGZzby5PcGVuVGV4dEZpbGUoXCJEOi8vY29kZS8vaG9tZXdvcms1Ly9teS1hcHAvL3BhZ2VzLy8xLnR4dFwiLCAxKTtcbi8vICAgUyA9IGYuUmVhZEFsbCgpO1xuLy8gICBjb25zb2xlLmxvZygnUycsUyk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsc2NiKVxuICAgIGZldGNoKFwiL2FwaS9uZXdzXCIpLnRoZW4oYXN5bmMgKHJlcykgPT4ge1xuICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICBjb25zb2xlLmxvZygnbnVtJyxudW0pO1xuICAgICAgc2V0U3RhdGUoe1xuICAgICAgICBsaXN0OiByZXNwLmRhdGEsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gKCk9PntcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsc2NiKVxuICAgIH1cbiAgfSk7XG5cbiAgLy9jb25zb2xlLmxvZyhcInN0YXRlXCIsc3RhdGUubGlzdClcbiAgcmV0dXJuIChcbiAgICAvLyAxP1xuICAgIC8vIDxpbWcgc3JjPVwiLi4vZmlndXJlL3FpdXNoaS5wbmdcIi8+OlxuICAgIDxkaXY+XG4gICAgPGRpdiBpZD1cImhlYWRlclwiID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtYmFyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1sZWZ0LW5hdlwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRvd25sb2FkLWFwcFwiPuS4i+i9vUFQUDwvYT5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJyZWdpc3RlclwiPuazqOWGjOWktOadoeWPtzwvYT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlYXRoZXItYmFyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxvY2F0aW9uXCI+IOWMl+S6rCA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNpdHktc3RhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIOaymeWwmOaatFxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2l0eV90ZW1wZXJhdHVyZVwiPjxlbT4yPC9lbT4mbmJzcDvihIMgJm5ic3A7LyZuYnNwOyA8ZW0+MTU8L2VtPiZuYnNwO+KEgzwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItcmlnaHQtbmF2XCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiY29weXJpZ2h0LWNvbXBsYWludFwiPuS+teadg+aKleiviTwvYT5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJvdGhlci1hcHBcIj7lpLTmnaHkuqflk4E8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBpZD1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGlkPVwiY2VudGVyXCIgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlZWQtbGlzdFwiPlxuICAgICAgICAgICAgICAgIHtzdGF0ZS5saXN0LnNsaWNlKDAsbnVtKS5tYXAoKGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlSW50b05ld3MoaSlcbiAgICAgICAgICAgICAgICApO30pfSAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgPGRpdiBpZD1cImxlZnRcIiBjbGFzc05hbWU9XCJjb2x1bW5cIiA+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsb2dvXCIgaHJlZj1cIi9cIj4gPGltZyBzcmM9XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQU5nQUFBQTJDQU1BQUFDU3NLY3RBQUFBTmxCTVZFVkhjRXp1UUVEd1JFVHlSVVgzVEV6dlFrTHVRRUR1UVVIdVFVSHZRRUR1UVVIdVFFRHZRa0x1UUVEdVFVSHdRVUh4UWtMdFFFREtha3NHQUFBQUVYUlNUbE1BeGl3ZURseW80OU5yaS9GNStiaExPYXBYYUlnQUFBVE1TVVJCVkdqZTdacnBzcVFxRElBYjJWRUUzLzlseDI2M0FBbXUzWFZ2MWNuOG1GT3RJaCtKSVF1dkZ5RlN6ZEs4L2pzU3JiZzdCRytIU2RqUFppM2lKUFRjaFI3YTdpWWFtN21HTnZ3S1RNNXZsT1FkNm4zWjM3SWhONnpTTmhXMVRzSnFNdC9Ud1FrNkczZ3htdDBEQzUvTGZweFM5VTM4d09KOVJKTjM4dUc0S0dCUjB3Uk54cmNIdG40ZGxQanB2NHBDWXpxRUVmZkJmQUcyWERDOXN4eUNVYmJmSDN3VkRkYmtTMlA0RnpRR1JSNEFzOE5kc0VZWHkwMVk0eE1hMjhDNktsalQzZ1VEWE50WU9uNWZZM1V3TnR3RUE5K1hBMzk3K3pPTnhSMDNmUTFNZXJqRzBJczRRWUs1cmlMekVNRGRDNCtDdVFvWTk5c0tvVzlSMjB6NXpzS3dOMGdBY3pERlVvaGRQelNLUnB3NGo5WXAwK0pnMkdnQ3JIQmYzc0FWdUl5dEM4dTRSakl3WW1HT2g4QU12VHV0Zkx0Z3lkUjhaanpDZ2VWMzJNN2VGbHlaajJUOEdZM2xmSHdObUNoVEdtY1A1dEVDTk5GQmY0bTRBcUVHaEd0OHJZRWoyaStBd1Vod0ZDb2NnT3Mrb2szODNNRmZNZWNkb0dZVUhGd2tXNzZKejVraUhsbVE0VHRQWTQ4K2lOQW5mcWdYMWErdnROTXVlWHlqdnFveDVXVGtKRmd0aHEzdDBpMnlkaFkrNE1zYlloS010RXU2ZHhGc2VxdzFHZCtzMnJhYXN5bFBSZ0NsdW9KSmdublUzU1lhSGJTOFk0ckpCdjNoNDJBRmROMWdHendXWnRnY01IRDNYazVCZllPejY3cWxzV0tEbnEzRzFEUDc0RFRDWlZ3UVZiQTFYNTdXcFdXcWs0MG9kNHN2Z0luS0JydFVQSlNwZkdQR3lZWUM2em1hL09qSm0wUnpCY3djQk9ObHRBektJVll4ZnlCT2JKbGJGQUhBdEtTeU9sYTR4K2MxRml1aEF4dk9pRGNwV0JLbzRHRGJwM3NMREEyQ0pSMDdFR0NhVVpZSndVeXM1T0dnQmhkWUNSWUZJV1FRSEt6cmpVL0FYQ1VkUThDMGUwK1kyOTVYd2JTc0ZoaVM0cUxVQzloZVBzWjJRcXFWVDRJM052dGd2cmZiWFFMeGt3c1lVb1dzZ0kzN3VYNEdiT1hqMjMxK0ozMzJEUEhzWEtiK2NrbkNrQzJna1oxaUxRRTJSdFJQZ2lWSnE2bUFhZFZ0VUtMNUNBZWE2OXY5cUd4eHMvS1RNTEZyVmFvellMTGk3VWN3clZ4V1kzWFl0amZ1MzJxMDdjT0YvT2I3WUtwV0xtMEVtZXdqKzdtNDNVZDVFR3pkQXZqSktuei9qVGJDZzJCMk9CSXBYZ0J6Wmw5YS94RmRoQkNod1lXWFlJRVllMUdZem42ZkhsUElFM3JKRGhCQlRQeElQSFluZzViRE9iRVhRcXJFSzM0UFRQK0IvYy9BL2t6eEQrd1VXTEIxQVhWSmQ4Y1VtM0prdjFXL1NwbUdsc2lWT1V3MzJHeFBiTVZiWnRBOVd3bmVHam8rWHVuLzM0czhoRUdMcVErQWdVYVZmZjBjREhDcEo3c3RTWnZLVFZXLy92TlBvWFZ1TlYzclZRN1dWUitqdVJqUmZMcXRNZXV6a1dPdEcyU3hkdHJudWVoclNjOXV0eUJwd2p3QjVzcDIzZXFkSTMzT2c1V202SVphbjNlWEt6L3djYzhVWWRsODdaT3NyVXREWm16ejZ4SXdvVTluQjJDSEt3NUZMR0JXVmtRWHpyVHN1NEZ2dzFLK0pHUldtam9QaVRqdG82ZXF5c01lRjA4TkZBMGNoUlZ1OGpOUnl6cG9nWHBGNnJGOUx1U3cyTVZ6SHRucGhNeFJOTGdqNklhc2RwQ0JOZWY4QitDS2o1M3p5STV0V09xZEFUc1AwVlA3R1BvWUpkMVFEUXV1YWd3MmYzMHhqOVVSYUZGNk1NOHBNUFN4ZmE3dzRGbXF4dFRiNFlnakNPVlBSZVFSYW52Z0thNVRHdXZRN2o5K3JxNVFENmFOTXFSYS9MZmZLYjlKdlFvUjZBbDlYQ1F5ckNaQ0lMNWVYNVo0K1FFc2NKZmVrai8yRDdLaFNERUtlOWpIQUFBQUFFbEZUa1N1UW1DQ1wiLz4gPC9hPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxlZnQtdWxpc3RcIj5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGVmdC1saXN0LWhlYWRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGVmdC1saXN0XCI+5o6o6I2QPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsZWZ0LWxpc3RcIj7opb/nk5zop4bpopE8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxlZnQtbGlzdFwiPueDreeCuTwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGVmdC1saXN0XCI+55u05pKtPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsZWZ0LWxpc3RcIj7lm77niYc8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxlZnQtbGlzdFwiPuenkeaKgDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGVmdC1saXN0XCI+5aix5LmQPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsZWZ0LWxpc3RcIj7muLjmiI88L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxlZnQtbGlzdFwiPuS9k+iCsjwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGVmdC1saXN0XCI+5oeC6L2m5bidPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsZWZ0LWxpc3RcIj7otKLnu488L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxlZnQtbGlzdFwiPuaVsOeggTwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGVmdC1saXN0XCI+5pu05aSaPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD1cInJpZ2h0XCIgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInNlYXJjaC1pbnB1dFwiIHBsYWNlaG9sZGVyPVwi5pCc57Si56uZ5YaF6LWE6K6v44CB6KeG6aKR5oiW55So5oi3XCIvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInJpZ2h0LXNlYXJjaC1idXR0b25cIiB0eXBlPVwiYnV0dG9uXCI+5pCc57SiPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4td3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4taW5uZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibG9naW4tbXNnXCI+55m75b2V5ZCO5Y+v5Lul5L+d5a2Y5oKo55qE5rWP6KeI5Zac5aW944CB6K+E6K6644CB5pS26JeP77yM5bm25LiOQVBQ5ZCM5q2l77yM5pu05Y+v5Lul5Y+R5biD5b6u5aS05p2hPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImxvZ2luLWJ0blwiPueZu+mZhjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lLW1vZHVsZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZS1tb2R1bGUtaGVhZFwiPlxuICAgICAgICAgICAgICAgICAgICDmm7TlpJpcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlua3Mtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaXRlbVwiPjxhPuWFs+S6juWktOadoTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaXRlbVwiPjxhPuWKoOWFpeWktOadoTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaXRlbVwiPjxhPuWqkuS9k+aKpemBkzwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaXRlbVwiPjxhPuWqkuS9k+WQiOS9nDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaXRlbVwiPjxhPuS6p+WTgeWQiOS9nDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaXRlbVwiPjxhPuWQiOS9nOivtOaYjjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaXRlbVwiPjxhPuW5v+WRiuaKleaUvjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaXRlbVwiPjxhPuiBlOezu+aIkeS7rDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaXRlbVwiPjxhPueUqOaIt+WNj+iurjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaXRlbVwiPjxhPumakOengeaUv+etljwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaXRlbVwiPjxhPuS+teadg+aKleiviTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaXRlbVwiPjxhPuW7iea0geS4vuaKpTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaXRlbVwiPjxhPuS8geS4muiupOivgTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaXRlbVwiPjxhPuiCuueCjuaxguWKqTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaXRlbVwiPjxhPui+n+iwo+S4k+WMujwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZS1tb2R1bGVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmUtbW9kdWxlLWhlYWRcIj5cbiAgICAgICAgICAgICAgICAgICAg5Y+L5oOF6ZO+5o6lXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpbmtzLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIml0ZW1cIj48YT7lhYnmmI7nvZE8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIml0ZW1cIj48YT7lpK7lub/nvZE8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIml0ZW1cIj48YT7lm73pmYXlnKjnur88L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIml0ZW1cIj48YT7kuK3lm73opb/ol4/nvZE8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIml0ZW1cIj48YT7lj4LogIPmtojmga88L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIml0ZW1cIj48YT7njq/nkIPnvZE8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIml0ZW1cIj48YT7kuK3pnZLlnKjnur88L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIml0ZW1cIj48YT7kuK3pnZLnvZE8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIml0ZW1cIj48YT7kuK3lt6XnvZE8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIml0ZW1cIj48YT7mtbflpJbnvZE8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIml0ZW1cIj48YT7kuK3lm73nvZE8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIml0ZW1cIj48YT7mnKrmnaXnvZE8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIml0ZW1cIj48YT7ljYPpvpnnvZE8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIml0ZW1cIj48YT7mlrDkuqzmiqU8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIml0ZW1cIj48YT7ljJfpnZLnvZE8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIml0ZW1cIj48YT7ms5XliLbmmZrmiqU8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIml0ZW1cIj48YT7ljJfkuqzmmajmiqU8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIml0ZW1cIj48YT7ljJfkuqzllYbmiqU8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIml0ZW1cIj48YT7ljJfkuqzlqLHkuZDkv6HmiqU8L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9