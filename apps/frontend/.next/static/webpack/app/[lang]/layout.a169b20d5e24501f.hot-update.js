"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[lang]/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"404de2afd492\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzE5ODIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI0MDRkZTJhZmQ0OTJcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/header.tsx":
/*!*******************************!*\
  !*** ./components/header.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/../../node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lenis_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lenis/react */ \"(app-pages-browser)/./node_modules/lenis/dist/lenis-react.mjs\");\n/* harmony import */ var _inoguez_logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inoguez-logo */ \"(app-pages-browser)/./components/inoguez-logo.tsx\");\n/* harmony import */ var _mobile_navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mobile-navbar */ \"(app-pages-browser)/./components/mobile-navbar.tsx\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/../../node_modules/@nextui-org/theme/dist/chunk-3XVMTUU7.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst BLUR_THRESHOLD = 50;\nfunction Header(param) {\n    let { navigationInfo } = param;\n    _s();\n    const [blur, setBlur] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleScroll = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((scroll)=>{\n        setBlur(scroll > BLUR_THRESHOLD);\n    }, []);\n    (0,lenis_react__WEBPACK_IMPORTED_MODULE_4__.useLenis)((param)=>{\n        let { scroll } = param;\n        handleScroll(scroll);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: (0,_nextui_org_react__WEBPACK_IMPORTED_MODULE_5__.cn)(\"fixed w-full flex justify-between transition-all duration-400 p-4  z-50\", {\n            \"backdrop-blur-md shadow-md\": blur,\n            \"shadow-none\": !blur\n        }),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_inoguez_logo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                className: \"fill-foreground flex-1\"\n            }, void 0, false, {\n                fileName: \"C:\\\\dev\\\\inoguez-v3\\\\apps\\\\frontend\\\\components\\\\header.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mobile_navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                navigation: navigationInfo,\n                className: \"absolute right-[1.4rem] top-1/2 -translate-y-1/2 text-4xl min-w-0 rounded-full !p-2\"\n            }, void 0, false, {\n                fileName: \"C:\\\\dev\\\\inoguez-v3\\\\apps\\\\frontend\\\\components\\\\header.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\dev\\\\inoguez-v3\\\\apps\\\\frontend\\\\components\\\\header.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"LmptF3vvKJbT2wQ/1qNgKmJbwy8=\", false, function() {\n    return [\n        lenis_react__WEBPACK_IMPORTED_MODULE_4__.useLenis\n    ];\n});\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvaGVhZGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQzhDO0FBQ1A7QUFDRTtBQUNFO0FBRUo7QUFDdkMsTUFBTU0saUJBQWlCO0FBQ1IsU0FBU0MsT0FBTyxLQUk5QjtRQUo4QixFQUM3QkMsY0FBYyxFQUdmLEdBSjhCOztJQUs3QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1QsK0NBQVFBLENBQUM7SUFFakMsTUFBTVUsZUFBZVgsa0RBQVdBLENBQUMsQ0FBQ1k7UUFDaENGLFFBQVFFLFNBQVNOO0lBQ25CLEdBQUcsRUFBRTtJQUVMSixxREFBUUEsQ0FBQztZQUFDLEVBQUVVLE1BQU0sRUFBRTtRQUNsQkQsYUFBYUM7SUFDZjtJQUVBLHFCQUNFLDhEQUFDQztRQUNDQyxXQUFXVCxxREFBRUEsQ0FDViwyRUFDRDtZQUNFLDhCQUE4Qkk7WUFDOUIsZUFBZSxDQUFDQTtRQUNsQjs7MEJBR0YsOERBQUNOLHFEQUFXQTtnQkFBQ1csV0FBVzs7Ozs7OzBCQUN4Qiw4REFBQ1Ysc0RBQVlBO2dCQUNYVyxZQUFZUDtnQkFDWk0sV0FBVTs7Ozs7Ozs7Ozs7O0FBSWxCO0dBaEN3QlA7O1FBV3RCTCxpREFBUUE7OztLQVhjSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hlYWRlci50c3g/ODcwYyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlTGVuaXMgfSBmcm9tICdsZW5pcy9yZWFjdCc7XHJcbmltcG9ydCBJbm9ndWV6TG9nbyBmcm9tICcuL2lub2d1ZXotbG9nbyc7XHJcbmltcG9ydCBNb2JpbGVOYXZiYXIgZnJvbSAnLi9tb2JpbGUtbmF2YmFyJztcclxuaW1wb3J0IHsgQXBpTmF2aWdhdGlvbk5hdmlnYXRpb24gfSBmcm9tICdAaW5vZ3Vlei9zdHJhcGktdHlwZXMvQ29udGVudFR5cGVzJztcclxuaW1wb3J0IHsgY24gfSBmcm9tICdAbmV4dHVpLW9yZy9yZWFjdCc7XHJcbmNvbnN0IEJMVVJfVEhSRVNIT0xEID0gNTA7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcih7XHJcbiAgbmF2aWdhdGlvbkluZm8sXHJcbn06IHtcclxuICBuYXZpZ2F0aW9uSW5mbzogQXBpTmF2aWdhdGlvbk5hdmlnYXRpb25bXTtcclxufSkge1xyXG4gIGNvbnN0IFtibHVyLCBzZXRCbHVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gdXNlQ2FsbGJhY2soKHNjcm9sbDogbnVtYmVyKSA9PiB7XHJcbiAgICBzZXRCbHVyKHNjcm9sbCA+IEJMVVJfVEhSRVNIT0xEKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUxlbmlzKCh7IHNjcm9sbCB9KSA9PiB7XHJcbiAgICBoYW5kbGVTY3JvbGwoc2Nyb2xsKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxoZWFkZXJcclxuICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICBgZml4ZWQgdy1mdWxsIGZsZXgganVzdGlmeS1iZXR3ZWVuIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTQwMCBwLTQgIHotNTBgLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICdiYWNrZHJvcC1ibHVyLW1kIHNoYWRvdy1tZCc6IGJsdXIsXHJcbiAgICAgICAgICAnc2hhZG93LW5vbmUnOiAhYmx1cixcclxuICAgICAgICB9XHJcbiAgICAgICl9XHJcbiAgICA+XHJcbiAgICAgIDxJbm9ndWV6TG9nbyBjbGFzc05hbWU9eydmaWxsLWZvcmVncm91bmQgZmxleC0xJ30gLz5cclxuICAgICAgPE1vYmlsZU5hdmJhclxyXG4gICAgICAgIG5hdmlnYXRpb249e25hdmlnYXRpb25JbmZvfVxyXG4gICAgICAgIGNsYXNzTmFtZT0nYWJzb2x1dGUgcmlnaHQtWzEuNHJlbV0gdG9wLTEvMiAtdHJhbnNsYXRlLXktMS8yIHRleHQtNHhsIG1pbi13LTAgcm91bmRlZC1mdWxsICFwLTInXHJcbiAgICAgIC8+XHJcbiAgICA8L2hlYWRlcj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VDYWxsYmFjayIsInVzZVN0YXRlIiwidXNlTGVuaXMiLCJJbm9ndWV6TG9nbyIsIk1vYmlsZU5hdmJhciIsImNuIiwiQkxVUl9USFJFU0hPTEQiLCJIZWFkZXIiLCJuYXZpZ2F0aW9uSW5mbyIsImJsdXIiLCJzZXRCbHVyIiwiaGFuZGxlU2Nyb2xsIiwic2Nyb2xsIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwibmF2aWdhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/header.tsx\n"));

/***/ })

});