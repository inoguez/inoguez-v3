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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"9131b4414310\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzE5ODIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI5MTMxYjQ0MTQzMTBcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/header.tsx":
/*!*******************************!*\
  !*** ./components/header.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/../../node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lenis_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lenis/react */ \"(app-pages-browser)/./node_modules/lenis/dist/lenis-react.mjs\");\n/* harmony import */ var _inoguez_logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inoguez-logo */ \"(app-pages-browser)/./components/inoguez-logo.tsx\");\n/* harmony import */ var _mobile_navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mobile-navbar */ \"(app-pages-browser)/./components/mobile-navbar.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Header(param) {\n    let { navigationInfo } = param;\n    _s();\n    const [blur, setBlur] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,lenis_react__WEBPACK_IMPORTED_MODULE_4__.useLenis)((param)=>{\n        let { scroll } = param;\n        if (scroll > 100 && !blur) {\n            setBlur(true);\n        } else if (scroll <= 100 && blur) {\n            setBlur(false);\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"fixed w-full flex justify-between transition-all duration-300 p-4  \".concat(blur ? \"backdrop-blur-md shadow-md\" : \"shadow-none\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_inoguez_logo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                className: \"fill-foreground flex-1\"\n            }, void 0, false, {\n                fileName: \"C:\\\\dev\\\\inoguez-v3\\\\apps\\\\frontend\\\\components\\\\header.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mobile_navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                navigation: navigationInfo,\n                className: \"absolute right-5 top-1/2 -translate-y-1/2 text-4xl min-w-0 rounded-full !p-2\"\n            }, void 0, false, {\n                fileName: \"C:\\\\dev\\\\inoguez-v3\\\\apps\\\\frontend\\\\components\\\\header.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\dev\\\\inoguez-v3\\\\apps\\\\frontend\\\\components\\\\header.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"H836g3BWnR3c+4YhEwmqo1NCiKM=\", false, function() {\n    return [\n        lenis_react__WEBPACK_IMPORTED_MODULE_4__.useLenis\n    ];\n});\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvaGVhZGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDaUM7QUFDTTtBQUNFO0FBQ0U7QUFHNUIsU0FBU0ksT0FBTyxLQUk5QjtRQUo4QixFQUM3QkMsY0FBYyxFQUdmLEdBSjhCOztJQUs3QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1AsK0NBQVFBLENBQUM7SUFFakNDLHFEQUFRQSxDQUFDO1lBQUMsRUFBRU8sTUFBTSxFQUFFO1FBQ2xCLElBQUlBLFNBQVMsT0FBTyxDQUFDRixNQUFNO1lBQ3pCQyxRQUFRO1FBQ1YsT0FBTyxJQUFJQyxVQUFVLE9BQU9GLE1BQU07WUFDaENDLFFBQVE7UUFDVjtJQUNGO0lBRUEscUJBQ0UsOERBQUNFO1FBQ0NDLFdBQVcsc0VBRVYsT0FEQ0osT0FBTywrQkFBK0I7OzBCQUd4Qyw4REFBQ0oscURBQVdBO2dCQUFDUSxXQUFXOzs7Ozs7MEJBQ3hCLDhEQUFDUCxzREFBWUE7Z0JBQ1hRLFlBQVlOO2dCQUNaSyxXQUFVOzs7Ozs7Ozs7Ozs7QUFJbEI7R0E1QndCTjs7UUFPdEJILGlEQUFRQTs7O0tBUGNHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaGVhZGVyLnRzeD84NzBjIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUxlbmlzIH0gZnJvbSAnbGVuaXMvcmVhY3QnO1xyXG5pbXBvcnQgSW5vZ3VlekxvZ28gZnJvbSAnLi9pbm9ndWV6LWxvZ28nO1xyXG5pbXBvcnQgTW9iaWxlTmF2YmFyIGZyb20gJy4vbW9iaWxlLW5hdmJhcic7XHJcbmltcG9ydCB7IEFwaU5hdmlnYXRpb25OYXZpZ2F0aW9uIH0gZnJvbSAnQGlub2d1ZXovc3RyYXBpLXR5cGVzL0NvbnRlbnRUeXBlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoe1xyXG4gIG5hdmlnYXRpb25JbmZvLFxyXG59OiB7XHJcbiAgbmF2aWdhdGlvbkluZm86IEFwaU5hdmlnYXRpb25OYXZpZ2F0aW9uW107XHJcbn0pIHtcclxuICBjb25zdCBbYmx1ciwgc2V0Qmx1cl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUxlbmlzKCh7IHNjcm9sbCB9KSA9PiB7XHJcbiAgICBpZiAoc2Nyb2xsID4gMTAwICYmICFibHVyKSB7XHJcbiAgICAgIHNldEJsdXIodHJ1ZSk7XHJcbiAgICB9IGVsc2UgaWYgKHNjcm9sbCA8PSAxMDAgJiYgYmx1cikge1xyXG4gICAgICBzZXRCbHVyKGZhbHNlKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxoZWFkZXJcclxuICAgICAgY2xhc3NOYW1lPXtgZml4ZWQgdy1mdWxsIGZsZXgganVzdGlmeS1iZXR3ZWVuIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBwLTQgICR7XHJcbiAgICAgICAgYmx1ciA/ICdiYWNrZHJvcC1ibHVyLW1kIHNoYWRvdy1tZCcgOiAnc2hhZG93LW5vbmUnXHJcbiAgICAgIH1gfVxyXG4gICAgPlxyXG4gICAgICA8SW5vZ3VlekxvZ28gY2xhc3NOYW1lPXsnZmlsbC1mb3JlZ3JvdW5kIGZsZXgtMSd9IC8+XHJcbiAgICAgIDxNb2JpbGVOYXZiYXJcclxuICAgICAgICBuYXZpZ2F0aW9uPXtuYXZpZ2F0aW9uSW5mb31cclxuICAgICAgICBjbGFzc05hbWU9J2Fic29sdXRlIHJpZ2h0LTUgdG9wLTEvMiAtdHJhbnNsYXRlLXktMS8yIHRleHQtNHhsIG1pbi13LTAgcm91bmRlZC1mdWxsICFwLTInXHJcbiAgICAgIC8+XHJcbiAgICA8L2hlYWRlcj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUxlbmlzIiwiSW5vZ3VlekxvZ28iLCJNb2JpbGVOYXZiYXIiLCJIZWFkZXIiLCJuYXZpZ2F0aW9uSW5mbyIsImJsdXIiLCJzZXRCbHVyIiwic2Nyb2xsIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwibmF2aWdhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/header.tsx\n"));

/***/ })

});