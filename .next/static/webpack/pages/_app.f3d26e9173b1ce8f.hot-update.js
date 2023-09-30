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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: function() { return /* binding */ AuthProvider; },\n/* harmony export */   useAuthContext: function() { return /* binding */ useAuthContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var _services_AuthService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/AuthService */ \"./src/services/AuthService.ts\");\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/api */ \"./src/services/api.ts\");\n/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/utils */ \"./src/services/utils.ts\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\nconst AuthContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext({});\nconst getMe = async ()=>_services_api__WEBPACK_IMPORTED_MODULE_5__.api.get(\"/v1/Me/profile\").then((data)=>data.data);\nconst AuthProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [authData, setAuthData] = react__WEBPACK_IMPORTED_MODULE_1___default().useState();\n    const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(true);\n    const { data: me, isLoading } = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)(\"me\", getMe, {\n        staleTime: 1000 * 60 * 1,\n        onError: (error)=>console.error(error)\n    });\n    const handleLogin = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback(async (email, password)=>{\n        const result = await _services_AuthService__WEBPACK_IMPORTED_MODULE_4__.AuthService.auth(email, password);\n        if (result instanceof Error) return result.message;\n        _services_api__WEBPACK_IMPORTED_MODULE_5__.api.defaults.headers.common[\"Authorization\"] = \"Bearer \".concat(result.token);\n        (0,_services_utils__WEBPACK_IMPORTED_MODULE_6__.setAuthLocalStorage)(result);\n        setAuthData(result);\n        next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/\");\n    }, []);\n    const handleLogout = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback(()=>{\n        delete _services_api__WEBPACK_IMPORTED_MODULE_5__.api.defaults.headers.common[\"Authorization\"];\n        (0,_services_utils__WEBPACK_IMPORTED_MODULE_6__.removeAuthLocalStorage)();\n        setAuthData(undefined);\n        next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/login\");\n    }, []);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        const accessData = (0,_services_utils__WEBPACK_IMPORTED_MODULE_6__.getAuthLocalStorage)();\n        if (accessData) {\n            if (Date.parse(accessData.expiration) <= Date.now()) handleLogout();\n            setAuthData(accessData);\n            setLoading(false);\n            _services_api__WEBPACK_IMPORTED_MODULE_5__.api.defaults.headers.common[\"Authorization\"] = \"Bearer \".concat(accessData.token);\n        } else {\n            handleLogout();\n            setLoading(false);\n        }\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            isAuthenticated: !!authData,\n            loading: loading || isLoading,\n            ...authData,\n            user: me,\n            login: handleLogin,\n            logout: handleLogout\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/samcarvalhos/dev/familia/familia-fe-ead/src/contexts/auth.context.tsx\",\n        lineNumber: 86,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AuthProvider, \"R0dy6hQBZp+dImS2m58ZST6Uanc=\", false, function() {\n    return [\n        react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery\n    ];\n});\n_c = AuthProvider;\nconst useAuthContext = ()=>{\n    _s1();\n    return react__WEBPACK_IMPORTED_MODULE_1___default().useContext(AuthContext);\n};\n_s1(useAuthContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"AuthProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvYXV0aC5jb250ZXh0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUNPO0FBRU07QUFHYTtBQUVoQjtBQU1YO0FBVXhCLE1BQU1RLDRCQUFjUiwwREFBbUIsQ0FBQyxDQUFDO0FBTXpDLE1BQU1VLFFBQVEsVUFBWU4sOENBQUdBLENBQUNPLEdBQUcsQ0FBQyxrQkFBa0JDLElBQUksQ0FBQyxDQUFDQyxPQUFTQSxLQUFLQSxJQUFJO0FBRXJFLE1BQU1DLGVBQTZDO1FBQUMsRUFDekRDLFFBQVEsRUFDVzs7SUFDbkIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdqQixxREFBYztJQUM5QyxNQUFNLENBQUNtQixTQUFTQyxXQUFXLEdBQUdwQixxREFBYyxDQUFDO0lBRTdDLE1BQU0sRUFBRWEsTUFBTVEsRUFBRSxFQUFFQyxTQUFTLEVBQUUsR0FBR3BCLHFEQUFRQSxDQUFDLE1BQU1RLE9BQU87UUFDcERhLFdBQVcsT0FBTyxLQUFLO1FBQ3ZCQyxTQUFTLENBQUNDLFFBQVVDLFFBQVFELEtBQUssQ0FBQ0E7SUFDcEM7SUFFQSxNQUFNRSxjQUFjM0Isd0RBQWlCLENBQ25DLE9BQU82QixPQUFlQztRQUNwQixNQUFNQyxTQUFTLE1BQU01Qiw4REFBV0EsQ0FBQzZCLElBQUksQ0FBQ0gsT0FBT0M7UUFFN0MsSUFBSUMsa0JBQWtCRSxPQUFPLE9BQU9GLE9BQU9HLE9BQU87UUFFbEQ5Qiw4Q0FBR0EsQ0FBQytCLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDQyxNQUFNLENBQUMsZ0JBQWdCLEdBQUcsVUFBdUIsT0FBYk4sT0FBT08sS0FBSztRQUNyRS9CLG9FQUFtQkEsQ0FBQ3dCO1FBQ3BCZCxZQUFZYztRQUVaOUIsdURBQVcsQ0FBQztJQUNkLEdBQ0EsRUFBRTtJQUdKLE1BQU11QyxlQUFleEMsd0RBQWlCLENBQUM7UUFDckMsT0FBT0ksOENBQUdBLENBQUMrQixRQUFRLENBQUNDLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDLGdCQUFnQjtRQUNuRGhDLHVFQUFzQkE7UUFDdEJZLFlBQVl3QjtRQUNaeEMsdURBQVcsQ0FBQztJQUNkLEdBQUcsRUFBRTtJQUVMRCxzREFBZSxDQUFDO1FBQ2QsTUFBTTJDLGFBQWFyQyxvRUFBbUJBO1FBRXRDLElBQUlxQyxZQUFZO1lBQ2QsSUFBSUMsS0FBS0MsS0FBSyxDQUFDRixXQUFXRyxVQUFVLEtBQUtGLEtBQUtHLEdBQUcsSUFBSVA7WUFFckR2QixZQUFZMEI7WUFDWnZCLFdBQVc7WUFFWGhCLDhDQUFHQSxDQUFDK0IsUUFBUSxDQUFDQyxPQUFPLENBQUNDLE1BQU0sQ0FDekIsZ0JBQ0QsR0FBRyxVQUEyQixPQUFqQk0sV0FBV0wsS0FBSztRQUNoQyxPQUFPO1lBQ0xFO1lBQ0FwQixXQUFXO1FBQ2I7SUFDQSx1REFBdUQ7SUFDekQsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNaLFlBQVl3QyxRQUFRO1FBQ25CQyxPQUFPO1lBQ0xDLGlCQUFpQixDQUFDLENBQUNsQztZQUNuQkcsU0FBU0EsV0FBV0c7WUFDcEIsR0FBR04sUUFBUTtZQUNYbUMsTUFBTTlCO1lBQ04rQixPQUFPekI7WUFDUDBCLFFBQVFiO1FBQ1Y7a0JBRUN6Qjs7Ozs7O0FBR1AsRUFBQztHQWxFWUQ7O1FBTXFCWixpREFBUUE7OztLQU43Qlk7QUFvRU4sTUFBTXdDLGlCQUFpQjs7SUFBTXRELE9BQUFBLHVEQUFnQixDQUFDUTtBQUFXLEVBQUM7SUFBcEQ4QyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29udGV4dHMvYXV0aC5jb250ZXh0LnRzeD9jMzU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAncmVhY3QtcXVlcnknXG5cbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uTW9kZWwgfSBmcm9tICdAbW9kZWxzL0F1dGhlbnRpY2F0aW9uTW9kZWwnXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJ0BzZXJ2aWNlcy9BdXRoU2VydmljZSdcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gJ0Btb2RlbHMvVXNlck1vZGVsJ1xuaW1wb3J0IHsgYXBpIH0gZnJvbSAnQHNlcnZpY2VzL2FwaSdcblxuaW1wb3J0IHtcbiAgcmVtb3ZlQXV0aExvY2FsU3RvcmFnZSxcbiAgZ2V0QXV0aExvY2FsU3RvcmFnZSxcbiAgc2V0QXV0aExvY2FsU3RvcmFnZSxcbn0gZnJvbSAnQHNlcnZpY2VzL3V0aWxzJ1xuXG5pbnRlcmZhY2UgSUF1dGhDb250ZXh0RGF0YSBleHRlbmRzIEF1dGhlbnRpY2F0aW9uTW9kZWwge1xuICBpc0F1dGhlbnRpY2F0ZWQ6IGJvb2xlYW5cbiAgdXNlcjogVXNlck1vZGVsIHwgbnVsbFxuICBsb2FkaW5nOiBib29sZWFuXG4gIGxvZ2luOiAoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykgPT4gUHJvbWlzZTxzdHJpbmcgfCB2b2lkPlxuICBsb2dvdXQ6ICgpID0+IHZvaWRcbn1cblxuY29uc3QgQXV0aENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHt9IGFzIElBdXRoQ29udGV4dERhdGEpXG5cbmludGVyZmFjZSBJQXV0aFByb3ZpZGVyUHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXG59XG5cbmNvbnN0IGdldE1lID0gYXN5bmMgKCkgPT4gYXBpLmdldCgnL3YxL01lL3Byb2ZpbGUnKS50aGVuKChkYXRhKSA9PiBkYXRhLmRhdGEpXG5cbmV4cG9ydCBjb25zdCBBdXRoUHJvdmlkZXI6IFJlYWN0LkZDPElBdXRoUHJvdmlkZXJQcm9wcz4gPSAoe1xuICBjaGlsZHJlbixcbn06IElBdXRoUHJvdmlkZXJQcm9wcykgPT4ge1xuICBjb25zdCBbYXV0aERhdGEsIHNldEF1dGhEYXRhXSA9IFJlYWN0LnVzZVN0YXRlPEF1dGhlbnRpY2F0aW9uTW9kZWw+KClcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gUmVhY3QudXNlU3RhdGUodHJ1ZSlcblxuICBjb25zdCB7IGRhdGE6IG1lLCBpc0xvYWRpbmcgfSA9IHVzZVF1ZXJ5KCdtZScsIGdldE1lLCB7XG4gICAgc3RhbGVUaW1lOiAxMDAwICogNjAgKiAxLCAvLyAxIG1pbnV0ZXNcbiAgICBvbkVycm9yOiAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpLFxuICB9KVxuXG4gIGNvbnN0IGhhbmRsZUxvZ2luID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgYXN5bmMgKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IEF1dGhTZXJ2aWNlLmF1dGgoZW1haWwsIHBhc3N3b3JkKVxuXG4gICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgRXJyb3IpIHJldHVybiByZXN1bHQubWVzc2FnZVxuXG4gICAgICBhcGkuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0F1dGhvcml6YXRpb24nXSA9IGBCZWFyZXIgJHtyZXN1bHQudG9rZW59YFxuICAgICAgc2V0QXV0aExvY2FsU3RvcmFnZShyZXN1bHQpXG4gICAgICBzZXRBdXRoRGF0YShyZXN1bHQpXG5cbiAgICAgIFJvdXRlci5wdXNoKCcvJylcbiAgICB9LFxuICAgIFtdXG4gIClcblxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgZGVsZXRlIGFwaS5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddXG4gICAgcmVtb3ZlQXV0aExvY2FsU3RvcmFnZSgpXG4gICAgc2V0QXV0aERhdGEodW5kZWZpbmVkKVxuICAgIFJvdXRlci5wdXNoKCcvbG9naW4nKVxuICB9LCBbXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGFjY2Vzc0RhdGEgPSBnZXRBdXRoTG9jYWxTdG9yYWdlKClcblxuICAgIGlmIChhY2Nlc3NEYXRhKSB7XG4gICAgICBpZiAoRGF0ZS5wYXJzZShhY2Nlc3NEYXRhLmV4cGlyYXRpb24pIDw9IERhdGUubm93KCkpIGhhbmRsZUxvZ291dCgpXG5cbiAgICAgIHNldEF1dGhEYXRhKGFjY2Vzc0RhdGEpXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuXG4gICAgICBhcGkuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bXG4gICAgICAgICdBdXRob3JpemF0aW9uJ1xuICAgICAgXSA9IGBCZWFyZXIgJHthY2Nlc3NEYXRhLnRva2VufWBcbiAgICB9IGVsc2Uge1xuICAgICAgaGFuZGxlTG9nb3V0KClcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgfVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIGlzQXV0aGVudGljYXRlZDogISFhdXRoRGF0YSxcbiAgICAgICAgbG9hZGluZzogbG9hZGluZyB8fCBpc0xvYWRpbmcsXG4gICAgICAgIC4uLmF1dGhEYXRhLFxuICAgICAgICB1c2VyOiBtZSxcbiAgICAgICAgbG9naW46IGhhbmRsZUxvZ2luLFxuICAgICAgICBsb2dvdXQ6IGhhbmRsZUxvZ291dCxcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IHVzZUF1dGhDb250ZXh0ID0gKCkgPT4gUmVhY3QudXNlQ29udGV4dChBdXRoQ29udGV4dClcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlJvdXRlciIsInVzZVF1ZXJ5IiwiQXV0aFNlcnZpY2UiLCJhcGkiLCJyZW1vdmVBdXRoTG9jYWxTdG9yYWdlIiwiZ2V0QXV0aExvY2FsU3RvcmFnZSIsInNldEF1dGhMb2NhbFN0b3JhZ2UiLCJBdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJnZXRNZSIsImdldCIsInRoZW4iLCJkYXRhIiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJhdXRoRGF0YSIsInNldEF1dGhEYXRhIiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIm1lIiwiaXNMb2FkaW5nIiwic3RhbGVUaW1lIiwib25FcnJvciIsImVycm9yIiwiY29uc29sZSIsImhhbmRsZUxvZ2luIiwidXNlQ2FsbGJhY2siLCJlbWFpbCIsInBhc3N3b3JkIiwicmVzdWx0IiwiYXV0aCIsIkVycm9yIiwibWVzc2FnZSIsImRlZmF1bHRzIiwiaGVhZGVycyIsImNvbW1vbiIsInRva2VuIiwicHVzaCIsImhhbmRsZUxvZ291dCIsInVuZGVmaW5lZCIsInVzZUVmZmVjdCIsImFjY2Vzc0RhdGEiLCJEYXRlIiwicGFyc2UiLCJleHBpcmF0aW9uIiwibm93IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImlzQXV0aGVudGljYXRlZCIsInVzZXIiLCJsb2dpbiIsImxvZ291dCIsInVzZUF1dGhDb250ZXh0IiwidXNlQ29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contexts/auth.context.tsx\n"));

/***/ })

});