"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Cardreal/index.jsx":
/*!***************************************!*\
  !*** ./components/Cardreal/index.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Cardreal; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Card */ \"./components/Card/index.jsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lenis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lenis */ \"./node_modules/lenis/dist/lenis.mjs\");\n/* harmony import */ var _public_med_gif__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/med.gif */ \"./public/med.gif\");\n\nvar _s = $RefreshSig$();\n\"use client\";\n\n\n\n\n\nconst projects = [\n    {\n        title: \"Organisation (Laboratory)\",\n        description: \"The Cheng Lab website is a neuroscience laboratory website. It provides background information about the laboratory and explains their work.\",\n        src: _public_med_gif__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        link: \"https://chenglab.vercel.app/\",\n        color: \"#BBACAF\"\n    },\n    {\n        title: \"Organisation (Medical Center)\",\n        description: \"This is a website for medical center in Vietnam.\",\n        src: \"../../public/med.gif\",\n        link: \"https://https://www.homed.health/\",\n        color: \"#977F6D\"\n    },\n    {\n        title: \"Personal Website\",\n        description: \"A personal website of Julia Chan\",\n        src: \"../../public/personal.gif\",\n        link: \"https://collieweb.github.io/Julia3/index.html\",\n        color: \"#C2491D\"\n    }\n];\nfunction Cardreal() {\n    _s();\n    const container = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const { scrollYProgress  } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useScroll)({\n        target: container,\n        offset: [\n            \"start start\",\n            \"end end\"\n        ]\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const lenis = new lenis__WEBPACK_IMPORTED_MODULE_5__[\"default\"]();\n        function raf(time) {\n            lenis.raf(time);\n            requestAnimationFrame(raf);\n        }\n        requestAnimationFrame(raf);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            ref: container,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-3xl sm:pt-24 font-semibold sm:text-5xl tracking-wider text-center \",\n                    children: \"Sample Website\"\n                }, void 0, false, {\n                    fileName: \"/Users/tyler/Desktop/Company/Com/components/Cardreal/index.jsx\",\n                    lineNumber: 58,\n                    columnNumber: 7\n                }, this),\n                projects.map((project, i)=>{\n                    const targetScale = 1 - (projects.length - i) * 0.05;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        i: i,\n                        ...project,\n                        progress: scrollYProgress,\n                        range: [\n                            i * .25,\n                            1\n                        ],\n                        targetScale: targetScale\n                    }, \"p_\".concat(i), false, {\n                        fileName: \"/Users/tyler/Desktop/Company/Com/components/Cardreal/index.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 13\n                    }, this);\n                })\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/tyler/Desktop/Company/Com/components/Cardreal/index.jsx\",\n            lineNumber: 57,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/tyler/Desktop/Company/Com/components/Cardreal/index.jsx\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, this);\n}\n_s(Cardreal, \"fNFK/7FQXiChPMTwTFt1N4qdytQ=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useScroll\n    ];\n});\n_c = Cardreal;\nvar _c;\n$RefreshReg$(_c, \"Cardreal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhcmRyZWFsL2luZGV4LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFBQTtBQUV5QztBQUNDO0FBQ0E7QUFDaEI7QUFDWTtBQUV0QyxNQUFNTSxXQUFXO0lBQ2I7UUFDRUMsT0FBTztRQUNQQyxhQUFhO1FBQ2JDLEtBQUtKLHVEQUFHQTtRQUNSSyxNQUFNO1FBQ05DLE9BQU87SUFDVDtJQUNBO1FBQ0VKLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxLQUFLO1FBQ0xDLE1BQU07UUFDTkMsT0FBTztJQUNUO0lBQ0E7UUFDRUosT0FBTztRQUNQQyxhQUFhO1FBQ2JDLEtBQUs7UUFDTEMsTUFBTTtRQUNOQyxPQUFPO0lBQ1Q7Q0FFRDtBQUdZLFNBQVNDLFdBQVc7O0lBQ2pDLE1BQU1DLFlBQVlWLDZDQUFNQSxDQUFDLElBQUk7SUFDN0IsTUFBTSxFQUFFVyxnQkFBZSxFQUFFLEdBQUdiLHdEQUFTQSxDQUFDO1FBQ3BDYyxRQUFRRjtRQUNSRyxRQUFRO1lBQUM7WUFBZTtTQUFVO0lBQ3BDO0lBRUFkLGdEQUFTQSxDQUFFLElBQU07UUFDZixNQUFNZSxRQUFRLElBQUliLDZDQUFLQTtRQUV2QixTQUFTYyxJQUFJQyxJQUFJLEVBQUU7WUFDakJGLE1BQU1DLEdBQUcsQ0FBQ0M7WUFDVkMsc0JBQXNCRjtRQUN4QjtRQUVBRSxzQkFBc0JGO0lBQ3hCO0lBRUEscUJBRUUsOERBQUNHO2tCQUVDLDRFQUFDQztZQUFNQyxLQUFLVjs7OEJBQ1osOERBQUNXO29CQUFHQyxXQUFVOzhCQUE4RTs7Ozs7O2dCQUkvRm5CLFNBQVNvQixHQUFHLENBQUUsQ0FBQ0MsU0FBU0MsSUFBTTtvQkFDNUIsTUFBTUMsY0FBYyxJQUFNLENBQUN2QixTQUFTd0IsTUFBTSxHQUFHRixDQUFBQSxJQUFLO29CQUNsRCxxQkFBTyw4REFBQzVCLHdEQUFJQTt3QkFBZ0I0QixHQUFHQTt3QkFBSSxHQUFHRCxPQUFPO3dCQUFFSSxVQUFVakI7d0JBQWlCa0IsT0FBTzs0QkFBQ0osSUFBSTs0QkFBSzt5QkFBRTt3QkFBRUMsYUFBYUE7dUJBQTFGLEtBQU8sT0FBRkQ7Ozs7O2dCQUN6Qjs7Ozs7Ozs7Ozs7O0FBT0gsQ0FBQztHQXJDdUJoQjs7UUFFTVgsb0RBQVNBOzs7S0FGZlciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkcmVhbC9pbmRleC5qc3g/YTE4MyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCBDYXJkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ2FyZCc7XG5pbXBvcnQgeyB1c2VTY3JvbGwgfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExlbmlzIGZyb20gJ2xlbmlzJztcbmltcG9ydCBsYWIgZnJvbSAnLi4vLi4vcHVibGljL21lZC5naWYnXG5cbmNvbnN0IHByb2plY3RzID0gW1xuICAgIHtcbiAgICAgIHRpdGxlOiBcIk9yZ2FuaXNhdGlvbiAoTGFib3JhdG9yeSlcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBDaGVuZyBMYWIgd2Vic2l0ZSBpcyBhIG5ldXJvc2NpZW5jZSBsYWJvcmF0b3J5IHdlYnNpdGUuIEl0IHByb3ZpZGVzIGJhY2tncm91bmQgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGxhYm9yYXRvcnkgYW5kIGV4cGxhaW5zIHRoZWlyIHdvcmsuXCIsXG4gICAgICBzcmM6IGxhYixcbiAgICAgIGxpbms6IFwiaHR0cHM6Ly9jaGVuZ2xhYi52ZXJjZWwuYXBwL1wiLFxuICAgICAgY29sb3I6IFwiI0JCQUNBRlwiXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJPcmdhbmlzYXRpb24gKE1lZGljYWwgQ2VudGVyKVwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIHdlYnNpdGUgZm9yIG1lZGljYWwgY2VudGVyIGluIFZpZXRuYW0uXCIsXG4gICAgICBzcmM6ICcuLi8uLi9wdWJsaWMvbWVkLmdpZicsXG4gICAgICBsaW5rOiBcImh0dHBzOi8vaHR0cHM6Ly93d3cuaG9tZWQuaGVhbHRoL1wiLFxuICAgICAgY29sb3I6IFwiIzk3N0Y2RFwiXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJQZXJzb25hbCBXZWJzaXRlXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJBIHBlcnNvbmFsIHdlYnNpdGUgb2YgSnVsaWEgQ2hhblwiLFxuICAgICAgc3JjOiAnLi4vLi4vcHVibGljL3BlcnNvbmFsLmdpZicsXG4gICAgICBsaW5rOiBcImh0dHBzOi8vY29sbGlld2ViLmdpdGh1Yi5pby9KdWxpYTMvaW5kZXguaHRtbFwiLFxuICAgICAgY29sb3I6IFwiI0MyNDkxRFwiXG4gICAgfSxcbiAgXG4gIF1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJkcmVhbCgpIHtcbiAgY29uc3QgY29udGFpbmVyID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCB7IHNjcm9sbFlQcm9ncmVzcyB9ID0gdXNlU2Nyb2xsKHtcbiAgICB0YXJnZXQ6IGNvbnRhaW5lcixcbiAgICBvZmZzZXQ6IFsnc3RhcnQgc3RhcnQnLCAnZW5kIGVuZCddXG4gIH0pXG5cbiAgdXNlRWZmZWN0KCAoKSA9PiB7XG4gICAgY29uc3QgbGVuaXMgPSBuZXcgTGVuaXMoKVxuXG4gICAgZnVuY3Rpb24gcmFmKHRpbWUpIHtcbiAgICAgIGxlbmlzLnJhZih0aW1lKVxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJhZilcbiAgICB9XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmFmKVxuICB9KVxuXG4gIHJldHVybiAoXG5cbiAgICA8ZGl2PlxuXG4gICAgICA8bWFpbiAgcmVmPXtjb250YWluZXJ9ID5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCAgc206cHQtMjQgIGZvbnQtc2VtaWJvbGQgc206dGV4dC01eGwgdHJhY2tpbmctd2lkZXIgICB0ZXh0LWNlbnRlciBcIj5cbiAgICAgICAgU2FtcGxlIFdlYnNpdGVcbiAgICAgIDwvaDE+XG4ge1xuICAgcHJvamVjdHMubWFwKCAocHJvamVjdCwgaSkgPT4ge1xuICAgICBjb25zdCB0YXJnZXRTY2FsZSA9IDEgLSAoIChwcm9qZWN0cy5sZW5ndGggLSBpKSAqIDAuMDUpO1xuICAgICByZXR1cm4gPENhcmQga2V5PXtgcF8ke2l9YH0gaT17aX0gey4uLnByb2plY3R9IHByb2dyZXNzPXtzY3JvbGxZUHJvZ3Jlc3N9IHJhbmdlPXtbaSAqIC4yNSwgMV19IHRhcmdldFNjYWxlPXt0YXJnZXRTY2FsZX0vPlxuICAgfSlcbiB9XG48L21haW4+XG4gICAgPC9kaXY+XG5cblxuICApXG59XG4iXSwibmFtZXMiOlsiQ2FyZCIsInVzZVNjcm9sbCIsInVzZUVmZmVjdCIsInVzZVJlZiIsIkxlbmlzIiwibGFiIiwicHJvamVjdHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwic3JjIiwibGluayIsImNvbG9yIiwiQ2FyZHJlYWwiLCJjb250YWluZXIiLCJzY3JvbGxZUHJvZ3Jlc3MiLCJ0YXJnZXQiLCJvZmZzZXQiLCJsZW5pcyIsInJhZiIsInRpbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJkaXYiLCJtYWluIiwicmVmIiwiaDEiLCJjbGFzc05hbWUiLCJtYXAiLCJwcm9qZWN0IiwiaSIsInRhcmdldFNjYWxlIiwibGVuZ3RoIiwicHJvZ3Jlc3MiLCJyYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Cardreal/index.jsx\n"));

/***/ })

});