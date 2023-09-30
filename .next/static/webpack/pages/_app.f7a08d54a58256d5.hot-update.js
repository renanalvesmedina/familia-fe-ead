"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/contexts/auth.context.tsx":
/*!***************************************!*\
  !*** ./src/contexts/auth.context.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: function() { return /* binding */ AuthProvider; },\n/* harmony export */   useAuthContext: function() { return /* binding */ useAuthContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var _services_AuthService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/AuthService */ \"./src/services/AuthService.ts\");\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/api */ \"./src/services/api.ts\");\n/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/utils */ \"./src/services/utils.ts\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\nconst AuthContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext({});\nconst getMe = async ()=>_services_api__WEBPACK_IMPORTED_MODULE_5__.api.get(\"/v1/Me/profile\").then((data)=>data.data);\nconst AuthProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [authData, setAuthData] = react__WEBPACK_IMPORTED_MODULE_1___default().useState();\n    const { data: me, isLoading } = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)([\n        \"me\"\n    ], getMe, {\n        staleTime: 1000 * 60 * 1,\n        onError: (error)=>console.error(error)\n    });\n    const handleLogin = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback(async (email, password)=>{\n        const result = await _services_AuthService__WEBPACK_IMPORTED_MODULE_4__.AuthService.auth(email, password);\n        if (result instanceof Error) return result.message;\n        _services_api__WEBPACK_IMPORTED_MODULE_5__.api.defaults.headers.common[\"Authorization\"] = \"Bearer \".concat(result.token);\n        (0,_services_utils__WEBPACK_IMPORTED_MODULE_6__.setAuthLocalStorage)(result);\n        setAuthData(result);\n        next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/\");\n    }, []);\n    const handleLogout = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback(()=>{\n        (0,_services_utils__WEBPACK_IMPORTED_MODULE_6__.removeAuthLocalStorage)();\n        setAuthData(undefined);\n        delete _services_api__WEBPACK_IMPORTED_MODULE_5__.api.defaults.headers.common[\"Authorization\"];\n        next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/login\");\n    }, []);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        const accessData = (0,_services_utils__WEBPACK_IMPORTED_MODULE_6__.getAuthLocalStorage)();\n        if (accessData) {\n            if (Date.parse(accessData.expiration) <= Date.now()) handleLogout();\n            setAuthData(accessData);\n            _services_api__WEBPACK_IMPORTED_MODULE_5__.api.defaults.headers.common[\"Authorization\"] = \"Bearer \".concat(accessData.token);\n        } else {\n            handleLogout();\n        }\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            isAuthenticated: !!authData,\n            loading: isLoading,\n            ...authData,\n            user: me,\n            login: handleLogin,\n            logout: handleLogout\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/samcarvalhos/dev/familia/familia-fe-ead/src/contexts/auth.context.tsx\",\n        lineNumber: 84,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AuthProvider, \"Xd1Qf6vd0NpTNfydTY9qP24Oxo4=\", false, function() {\n    return [\n        react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery\n    ];\n});\n_c = AuthProvider;\nconst useAuthContext = ()=>{\n    _s1();\n    return react__WEBPACK_IMPORTED_MODULE_1___default().useContext(AuthContext);\n};\n_s1(useAuthContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"AuthProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvYXV0aC5jb250ZXh0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUNPO0FBRU07QUFJYTtBQUNoQjtBQU1YO0FBVXhCLE1BQU1RLDRCQUFjUiwwREFBbUIsQ0FBQyxDQUFDO0FBTXpDLE1BQU1VLFFBQVEsVUFDWk4sOENBQUdBLENBQUNPLEdBQUcsQ0FBbUIsa0JBQWtCQyxJQUFJLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS0EsSUFBSTtBQUUvRCxNQUFNQyxlQUE2QztRQUFDLEVBQ3pEQyxRQUFRLEVBQ1c7O0lBQ25CLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHakIscURBQWM7SUFFOUMsTUFBTSxFQUFFYSxNQUFNTSxFQUFFLEVBQUVDLFNBQVMsRUFBRSxHQUFHbEIscURBQVFBLENBQUM7UUFBQztLQUFLLEVBQUVRLE9BQU87UUFDdERXLFdBQVcsT0FBTyxLQUFLO1FBQ3ZCQyxTQUFTLENBQUNDLFFBQVVDLFFBQVFELEtBQUssQ0FBQ0E7SUFDcEM7SUFFQSxNQUFNRSxjQUFjekIsd0RBQWlCLENBQ25DLE9BQU8yQixPQUFlQztRQUNwQixNQUFNQyxTQUFTLE1BQU0xQiw4REFBV0EsQ0FBQzJCLElBQUksQ0FBQ0gsT0FBT0M7UUFFN0MsSUFBSUMsa0JBQWtCRSxPQUFPLE9BQU9GLE9BQU9HLE9BQU87UUFFbEQ1Qiw4Q0FBR0EsQ0FBQzZCLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDQyxNQUFNLENBQUMsZ0JBQWdCLEdBQUcsVUFBdUIsT0FBYk4sT0FBT08sS0FBSztRQUNyRTdCLG9FQUFtQkEsQ0FBQ3NCO1FBQ3BCWixZQUFZWTtRQUVaNUIsdURBQVcsQ0FBQztJQUNkLEdBQ0EsRUFBRTtJQUdKLE1BQU1xQyxlQUFldEMsd0RBQWlCLENBQUM7UUFDckNLLHVFQUFzQkE7UUFDdEJZLFlBQVlzQjtRQUNaLE9BQU9uQyw4Q0FBR0EsQ0FBQzZCLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDQyxNQUFNLENBQUMsZ0JBQWdCO1FBQ25EbEMsdURBQVcsQ0FBQztJQUNkLEdBQUcsRUFBRTtJQUVMRCxzREFBZSxDQUFDO1FBQ2QsTUFBTXlDLGFBQWFuQyxvRUFBbUJBO1FBRXRDLElBQUltQyxZQUFZO1lBQ2QsSUFBSUMsS0FBS0MsS0FBSyxDQUFDRixXQUFXRyxVQUFVLEtBQUtGLEtBQUtHLEdBQUcsSUFBSVA7WUFFckRyQixZQUFZd0I7WUFFWnJDLDhDQUFHQSxDQUFDNkIsUUFBUSxDQUFDQyxPQUFPLENBQUNDLE1BQU0sQ0FDekIsZ0JBQ0QsR0FBRyxVQUEyQixPQUFqQk0sV0FBV0wsS0FBSztRQUNoQyxPQUFPO1lBQ0xFO1FBQ0Y7SUFDQSx1REFBdUQ7SUFDekQsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUM5QixZQUFZc0MsUUFBUTtRQUNuQkMsT0FBTztZQUNMQyxpQkFBaUIsQ0FBQyxDQUFDaEM7WUFDbkJpQyxTQUFTN0I7WUFDVCxHQUFHSixRQUFRO1lBQ1hrQyxNQUFNL0I7WUFDTmdDLE9BQU8xQjtZQUNQMkIsUUFBUWQ7UUFDVjtrQkFFQ3ZCOzs7Ozs7QUFHUCxFQUFDO0dBL0RZRDs7UUFLcUJaLGlEQUFRQTs7O0tBTDdCWTtBQWlFTixNQUFNdUMsaUJBQWlCOztJQUFNckQsT0FBQUEsdURBQWdCLENBQUNRO0FBQVcsRUFBQztJQUFwRDZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb250ZXh0cy9hdXRoLmNvbnRleHQudHN4P2MzNTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcblxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdyZWFjdC1xdWVyeSdcblxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25Nb2RlbCB9IGZyb20gJ0Btb2RlbHMvQXV0aGVudGljYXRpb25Nb2RlbCdcbmltcG9ydCB7IFVzZXJQcm9maWxlTW9kZWwgfSBmcm9tICdAbW9kZWxzL1VzZXJQcm9maWxlTW9kZWwnXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJ0BzZXJ2aWNlcy9BdXRoU2VydmljZSdcbmltcG9ydCB7IGFwaSB9IGZyb20gJ0BzZXJ2aWNlcy9hcGknXG5cbmltcG9ydCB7XG4gIHJlbW92ZUF1dGhMb2NhbFN0b3JhZ2UsXG4gIGdldEF1dGhMb2NhbFN0b3JhZ2UsXG4gIHNldEF1dGhMb2NhbFN0b3JhZ2UsXG59IGZyb20gJ0BzZXJ2aWNlcy91dGlscydcblxuaW50ZXJmYWNlIElBdXRoQ29udGV4dERhdGEgZXh0ZW5kcyBBdXRoZW50aWNhdGlvbk1vZGVsIHtcbiAgaXNBdXRoZW50aWNhdGVkOiBib29sZWFuXG4gIHVzZXI6IFVzZXJQcm9maWxlTW9kZWwgfCBudWxsXG4gIGxvYWRpbmc6IGJvb2xlYW5cbiAgbG9naW46IChlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSA9PiBQcm9taXNlPHN0cmluZyB8IHZvaWQ+XG4gIGxvZ291dDogKCkgPT4gdm9pZFxufVxuXG5jb25zdCBBdXRoQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe30gYXMgSUF1dGhDb250ZXh0RGF0YSlcblxuaW50ZXJmYWNlIElBdXRoUHJvdmlkZXJQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcbn1cblxuY29uc3QgZ2V0TWUgPSBhc3luYyAoKSA9PlxuICBhcGkuZ2V0PFVzZXJQcm9maWxlTW9kZWw+KCcvdjEvTWUvcHJvZmlsZScpLnRoZW4oKGRhdGEpID0+IGRhdGEuZGF0YSlcblxuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlcjogUmVhY3QuRkM8SUF1dGhQcm92aWRlclByb3BzPiA9ICh7XG4gIGNoaWxkcmVuLFxufTogSUF1dGhQcm92aWRlclByb3BzKSA9PiB7XG4gIGNvbnN0IFthdXRoRGF0YSwgc2V0QXV0aERhdGFdID0gUmVhY3QudXNlU3RhdGU8QXV0aGVudGljYXRpb25Nb2RlbD4oKVxuXG4gIGNvbnN0IHsgZGF0YTogbWUsIGlzTG9hZGluZyB9ID0gdXNlUXVlcnkoWydtZSddLCBnZXRNZSwge1xuICAgIHN0YWxlVGltZTogMTAwMCAqIDYwICogMSwgLy8gMSBtaW51dGVzXG4gICAgb25FcnJvcjogKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSxcbiAgfSlcblxuICBjb25zdCBoYW5kbGVMb2dpbiA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIGFzeW5jIChlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBBdXRoU2VydmljZS5hdXRoKGVtYWlsLCBwYXNzd29yZClcblxuICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIEVycm9yKSByZXR1cm4gcmVzdWx0Lm1lc3NhZ2VcblxuICAgICAgYXBpLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ10gPSBgQmVhcmVyICR7cmVzdWx0LnRva2VufWBcbiAgICAgIHNldEF1dGhMb2NhbFN0b3JhZ2UocmVzdWx0KVxuICAgICAgc2V0QXV0aERhdGEocmVzdWx0KVxuXG4gICAgICBSb3V0ZXIucHVzaCgnLycpXG4gICAgfSxcbiAgICBbXVxuICApXG5cbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHJlbW92ZUF1dGhMb2NhbFN0b3JhZ2UoKVxuICAgIHNldEF1dGhEYXRhKHVuZGVmaW5lZClcbiAgICBkZWxldGUgYXBpLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ11cbiAgICBSb3V0ZXIucHVzaCgnL2xvZ2luJylcbiAgfSwgW10pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBhY2Nlc3NEYXRhID0gZ2V0QXV0aExvY2FsU3RvcmFnZSgpXG5cbiAgICBpZiAoYWNjZXNzRGF0YSkge1xuICAgICAgaWYgKERhdGUucGFyc2UoYWNjZXNzRGF0YS5leHBpcmF0aW9uKSA8PSBEYXRlLm5vdygpKSBoYW5kbGVMb2dvdXQoKVxuXG4gICAgICBzZXRBdXRoRGF0YShhY2Nlc3NEYXRhKVxuXG4gICAgICBhcGkuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bXG4gICAgICAgICdBdXRob3JpemF0aW9uJ1xuICAgICAgXSA9IGBCZWFyZXIgJHthY2Nlc3NEYXRhLnRva2VufWBcbiAgICB9IGVsc2Uge1xuICAgICAgaGFuZGxlTG9nb3V0KClcbiAgICB9XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgaXNBdXRoZW50aWNhdGVkOiAhIWF1dGhEYXRhLFxuICAgICAgICBsb2FkaW5nOiBpc0xvYWRpbmcsXG4gICAgICAgIC4uLmF1dGhEYXRhLFxuICAgICAgICB1c2VyOiBtZSxcbiAgICAgICAgbG9naW46IGhhbmRsZUxvZ2luLFxuICAgICAgICBsb2dvdXQ6IGhhbmRsZUxvZ291dCxcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IHVzZUF1dGhDb250ZXh0ID0gKCkgPT4gUmVhY3QudXNlQ29udGV4dChBdXRoQ29udGV4dClcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlJvdXRlciIsInVzZVF1ZXJ5IiwiQXV0aFNlcnZpY2UiLCJhcGkiLCJyZW1vdmVBdXRoTG9jYWxTdG9yYWdlIiwiZ2V0QXV0aExvY2FsU3RvcmFnZSIsInNldEF1dGhMb2NhbFN0b3JhZ2UiLCJBdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJnZXRNZSIsImdldCIsInRoZW4iLCJkYXRhIiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJhdXRoRGF0YSIsInNldEF1dGhEYXRhIiwidXNlU3RhdGUiLCJtZSIsImlzTG9hZGluZyIsInN0YWxlVGltZSIsIm9uRXJyb3IiLCJlcnJvciIsImNvbnNvbGUiLCJoYW5kbGVMb2dpbiIsInVzZUNhbGxiYWNrIiwiZW1haWwiLCJwYXNzd29yZCIsInJlc3VsdCIsImF1dGgiLCJFcnJvciIsIm1lc3NhZ2UiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iLCJ0b2tlbiIsInB1c2giLCJoYW5kbGVMb2dvdXQiLCJ1bmRlZmluZWQiLCJ1c2VFZmZlY3QiLCJhY2Nlc3NEYXRhIiwiRGF0ZSIsInBhcnNlIiwiZXhwaXJhdGlvbiIsIm5vdyIsIlByb3ZpZGVyIiwidmFsdWUiLCJpc0F1dGhlbnRpY2F0ZWQiLCJsb2FkaW5nIiwidXNlciIsImxvZ2luIiwibG9nb3V0IiwidXNlQXV0aENvbnRleHQiLCJ1c2VDb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/contexts/auth.context.tsx\n"));

/***/ })

});