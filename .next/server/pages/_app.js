/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./next-seo.config.ts":
/*!****************************!*\
  !*** ./next-seo.config.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst config = {\n    titleTemplate: \"%s | DNA Igreja Fam\\xedlia\"\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9uZXh0LXNlby5jb25maWcudHMiLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE1BQU1BLFNBQTBCO0lBQzlCQyxlQUFlO0FBQ2pCO0FBRUEsaUVBQWVELE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mYW1pbGlhLWZlLWVhZC8uL25leHQtc2VvLmNvbmZpZy50cz84YjdiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERlZmF1bHRTZW9Qcm9wcyB9IGZyb20gJ25leHQtc2VvJ1xuXG5jb25zdCBjb25maWc6IERlZmF1bHRTZW9Qcm9wcyA9IHtcbiAgdGl0bGVUZW1wbGF0ZTogJyVzIHwgRE5BIElncmVqYSBGYW3DrWxpYScsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZ1xuIl0sIm5hbWVzIjpbImNvbmZpZyIsInRpdGxlVGVtcGxhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./next-seo.config.ts\n");

/***/ }),

/***/ "./src/contexts/auth.context.tsx":
/*!***************************************!*\
  !*** ./src/contexts/auth.context.tsx ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider),\n/* harmony export */   useAuthContext: () => (/* binding */ useAuthContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query */ \"react-query\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _services_AuthService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/AuthService */ \"./src/services/AuthService.ts\");\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/api */ \"./src/services/api.ts\");\n/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/utils */ \"./src/services/utils.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_AuthService__WEBPACK_IMPORTED_MODULE_4__, _services_api__WEBPACK_IMPORTED_MODULE_5__]);\n([_services_AuthService__WEBPACK_IMPORTED_MODULE_4__, _services_api__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\nconst AuthContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext({});\nconst getMe = async ()=>_services_api__WEBPACK_IMPORTED_MODULE_5__.api.get(\"/v1/Me/profile\").then((data)=>data.data);\nconst AuthProvider = ({ children })=>{\n    const [authData, setAuthData] = react__WEBPACK_IMPORTED_MODULE_1___default().useState();\n    const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useQueryClient)();\n    const queryKey = react__WEBPACK_IMPORTED_MODULE_1___default().useMemo(()=>[\n            \"me\"\n        ], []);\n    const { data: me, isLoading } = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)(queryKey, getMe, {\n        staleTime: 1000 * 60 * 1,\n        onError: (error)=>console.error(error)\n    });\n    const handleLogin = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback(async (email, password)=>{\n        const result = await _services_AuthService__WEBPACK_IMPORTED_MODULE_4__.AuthService.auth(email, password);\n        if (result instanceof Error) return result.message;\n        _services_api__WEBPACK_IMPORTED_MODULE_5__.api.defaults.headers.common[\"Authorization\"] = `Bearer ${result.token}`;\n        (0,_services_utils__WEBPACK_IMPORTED_MODULE_6__.setAuthLocalStorage)(result);\n        setAuthData(result);\n        next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/\");\n    }, []);\n    const handleLogout = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback(()=>{\n        queryClient.cancelQueries(queryKey);\n        queryClient.removeQueries(queryKey);\n        (0,_services_utils__WEBPACK_IMPORTED_MODULE_6__.removeAuthLocalStorage)();\n        setAuthData(undefined);\n        delete _services_api__WEBPACK_IMPORTED_MODULE_5__.api.defaults.headers.common[\"Authorization\"];\n        next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/login\");\n    }, [\n        queryClient,\n        queryKey\n    ]);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        const accessData = (0,_services_utils__WEBPACK_IMPORTED_MODULE_6__.getAuthLocalStorage)();\n        if (accessData) {\n            if (Date.parse(accessData.expiration) <= Date.now()) handleLogout();\n            setAuthData(accessData);\n            _services_api__WEBPACK_IMPORTED_MODULE_5__.api.defaults.headers.common[\"Authorization\"] = `Bearer ${accessData.token}`;\n        } else {\n            handleLogout();\n        }\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            isAuthenticated: !!authData,\n            loading: isLoading,\n            ...authData,\n            user: me,\n            login: handleLogin,\n            logout: handleLogout\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/samcarvalhos/dev/familia/familia-fe-ead/src/contexts/auth.context.tsx\",\n        lineNumber: 89,\n        columnNumber: 5\n    }, undefined);\n};\nconst useAuthContext = ()=>react__WEBPACK_IMPORTED_MODULE_1___default().useContext(AuthContext);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvYXV0aC5jb250ZXh0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUNPO0FBRXNCO0FBSUg7QUFDaEI7QUFNWDtBQVV4QixNQUFNUyw0QkFBY1QsMERBQW1CLENBQUMsQ0FBQztBQU16QyxNQUFNVyxRQUFRLFVBQ1pOLDhDQUFHQSxDQUFDTyxHQUFHLENBQW1CLGtCQUFrQkMsSUFBSSxDQUFDLENBQUNDLE9BQVNBLEtBQUtBLElBQUk7QUFFL0QsTUFBTUMsZUFBNkMsQ0FBQyxFQUN6REMsUUFBUSxFQUNXO0lBQ25CLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHbEIscURBQWM7SUFFOUMsTUFBTW9CLGNBQWNqQiwyREFBY0E7SUFDbEMsTUFBTWtCLFdBQVdyQixvREFBYSxDQUFDLElBQU07WUFBQztTQUFLLEVBQUUsRUFBRTtJQUUvQyxNQUFNLEVBQUVjLE1BQU1TLEVBQUUsRUFBRUMsU0FBUyxFQUFFLEdBQUd0QixxREFBUUEsQ0FBQ21CLFVBQVVWLE9BQU87UUFDeERjLFdBQVcsT0FBTyxLQUFLO1FBQ3ZCQyxTQUFTLENBQUNDLFFBQVVDLFFBQVFELEtBQUssQ0FBQ0E7SUFDcEM7SUFFQSxNQUFNRSxjQUFjN0Isd0RBQWlCLENBQ25DLE9BQU8rQixPQUFlQztRQUNwQixNQUFNQyxTQUFTLE1BQU03Qiw4REFBV0EsQ0FBQzhCLElBQUksQ0FBQ0gsT0FBT0M7UUFFN0MsSUFBSUMsa0JBQWtCRSxPQUFPLE9BQU9GLE9BQU9HLE9BQU87UUFFbEQvQiw4Q0FBR0EsQ0FBQ2dDLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDQyxNQUFNLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxPQUFPLEVBQUVOLE9BQU9PLEtBQUssQ0FBQyxDQUFDO1FBQ3ZFaEMsb0VBQW1CQSxDQUFDeUI7UUFDcEJmLFlBQVllO1FBRVpoQyx1REFBVyxDQUFDO0lBQ2QsR0FDQSxFQUFFO0lBR0osTUFBTXlDLGVBQWUxQyx3REFBaUIsQ0FBQztRQUNyQ29CLFlBQVl1QixhQUFhLENBQUN0QjtRQUMxQkQsWUFBWXdCLGFBQWEsQ0FBQ3ZCO1FBQzFCZix1RUFBc0JBO1FBQ3RCWSxZQUFZMkI7UUFDWixPQUFPeEMsOENBQUdBLENBQUNnQyxRQUFRLENBQUNDLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDLGdCQUFnQjtRQUNuRHRDLHVEQUFXLENBQUM7SUFDZCxHQUFHO1FBQUNtQjtRQUFhQztLQUFTO0lBRTFCckIsc0RBQWUsQ0FBQztRQUNkLE1BQU0rQyxhQUFheEMsb0VBQW1CQTtRQUV0QyxJQUFJd0MsWUFBWTtZQUNkLElBQUlDLEtBQUtDLEtBQUssQ0FBQ0YsV0FBV0csVUFBVSxLQUFLRixLQUFLRyxHQUFHLElBQUlUO1lBRXJEeEIsWUFBWTZCO1lBRVoxQyw4Q0FBR0EsQ0FBQ2dDLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDQyxNQUFNLENBQ3pCLGdCQUNELEdBQUcsQ0FBQyxPQUFPLEVBQUVRLFdBQVdQLEtBQUssQ0FBQyxDQUFDO1FBQ2xDLE9BQU87WUFDTEU7UUFDRjtJQUNBLHVEQUF1RDtJQUN6RCxHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ2pDLFlBQVkyQyxRQUFRO1FBQ25CQyxPQUFPO1lBQ0xDLGlCQUFpQixDQUFDLENBQUNyQztZQUNuQnNDLFNBQVMvQjtZQUNULEdBQUdQLFFBQVE7WUFDWHVDLE1BQU1qQztZQUNOa0MsT0FBTzVCO1lBQ1A2QixRQUFRaEI7UUFDVjtrQkFFQzFCOzs7Ozs7QUFHUCxFQUFDO0FBRU0sTUFBTTJDLGlCQUFpQixJQUFNM0QsdURBQWdCLENBQUNTLGFBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mYW1pbGlhLWZlLWVhZC8uL3NyYy9jb250ZXh0cy9hdXRoLmNvbnRleHQudHN4P2MzNTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcblxuaW1wb3J0IHsgdXNlUXVlcnksIHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSAncmVhY3QtcXVlcnknXG5cbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uTW9kZWwgfSBmcm9tICdAbW9kZWxzL0F1dGhlbnRpY2F0aW9uTW9kZWwnXG5pbXBvcnQgeyBVc2VyUHJvZmlsZU1vZGVsIH0gZnJvbSAnQG1vZGVscy9Vc2VyUHJvZmlsZU1vZGVsJ1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICdAc2VydmljZXMvQXV0aFNlcnZpY2UnXG5pbXBvcnQgeyBhcGkgfSBmcm9tICdAc2VydmljZXMvYXBpJ1xuXG5pbXBvcnQge1xuICByZW1vdmVBdXRoTG9jYWxTdG9yYWdlLFxuICBnZXRBdXRoTG9jYWxTdG9yYWdlLFxuICBzZXRBdXRoTG9jYWxTdG9yYWdlLFxufSBmcm9tICdAc2VydmljZXMvdXRpbHMnXG5cbmludGVyZmFjZSBJQXV0aENvbnRleHREYXRhIGV4dGVuZHMgQXV0aGVudGljYXRpb25Nb2RlbCB7XG4gIGlzQXV0aGVudGljYXRlZDogYm9vbGVhblxuICB1c2VyPzogVXNlclByb2ZpbGVNb2RlbFxuICBsb2FkaW5nOiBib29sZWFuXG4gIGxvZ2luOiAoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykgPT4gUHJvbWlzZTxzdHJpbmcgfCB2b2lkPlxuICBsb2dvdXQ6ICgpID0+IHZvaWRcbn1cblxuY29uc3QgQXV0aENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHt9IGFzIElBdXRoQ29udGV4dERhdGEpXG5cbmludGVyZmFjZSBJQXV0aFByb3ZpZGVyUHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXG59XG5cbmNvbnN0IGdldE1lID0gYXN5bmMgKCkgPT5cbiAgYXBpLmdldDxVc2VyUHJvZmlsZU1vZGVsPignL3YxL01lL3Byb2ZpbGUnKS50aGVuKChkYXRhKSA9PiBkYXRhLmRhdGEpXG5cbmV4cG9ydCBjb25zdCBBdXRoUHJvdmlkZXI6IFJlYWN0LkZDPElBdXRoUHJvdmlkZXJQcm9wcz4gPSAoe1xuICBjaGlsZHJlbixcbn06IElBdXRoUHJvdmlkZXJQcm9wcykgPT4ge1xuICBjb25zdCBbYXV0aERhdGEsIHNldEF1dGhEYXRhXSA9IFJlYWN0LnVzZVN0YXRlPEF1dGhlbnRpY2F0aW9uTW9kZWw+KClcblxuICBjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KClcbiAgY29uc3QgcXVlcnlLZXkgPSBSZWFjdC51c2VNZW1vKCgpID0+IFsnbWUnXSwgW10pXG5cbiAgY29uc3QgeyBkYXRhOiBtZSwgaXNMb2FkaW5nIH0gPSB1c2VRdWVyeShxdWVyeUtleSwgZ2V0TWUsIHtcbiAgICBzdGFsZVRpbWU6IDEwMDAgKiA2MCAqIDEsIC8vIDEgbWludXRlc1xuICAgIG9uRXJyb3I6IChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvciksXG4gIH0pXG5cbiAgY29uc3QgaGFuZGxlTG9naW4gPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICBhc3luYyAoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgQXV0aFNlcnZpY2UuYXV0aChlbWFpbCwgcGFzc3dvcmQpXG5cbiAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBFcnJvcikgcmV0dXJuIHJlc3VsdC5tZXNzYWdlXG5cbiAgICAgIGFwaS5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddID0gYEJlYXJlciAke3Jlc3VsdC50b2tlbn1gXG4gICAgICBzZXRBdXRoTG9jYWxTdG9yYWdlKHJlc3VsdClcbiAgICAgIHNldEF1dGhEYXRhKHJlc3VsdClcblxuICAgICAgUm91dGVyLnB1c2goJy8nKVxuICAgIH0sXG4gICAgW11cbiAgKVxuXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBxdWVyeUNsaWVudC5jYW5jZWxRdWVyaWVzKHF1ZXJ5S2V5KVxuICAgIHF1ZXJ5Q2xpZW50LnJlbW92ZVF1ZXJpZXMocXVlcnlLZXkpXG4gICAgcmVtb3ZlQXV0aExvY2FsU3RvcmFnZSgpXG4gICAgc2V0QXV0aERhdGEodW5kZWZpbmVkKVxuICAgIGRlbGV0ZSBhcGkuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0F1dGhvcml6YXRpb24nXVxuICAgIFJvdXRlci5wdXNoKCcvbG9naW4nKVxuICB9LCBbcXVlcnlDbGllbnQsIHF1ZXJ5S2V5XSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGFjY2Vzc0RhdGEgPSBnZXRBdXRoTG9jYWxTdG9yYWdlKClcblxuICAgIGlmIChhY2Nlc3NEYXRhKSB7XG4gICAgICBpZiAoRGF0ZS5wYXJzZShhY2Nlc3NEYXRhLmV4cGlyYXRpb24pIDw9IERhdGUubm93KCkpIGhhbmRsZUxvZ291dCgpXG5cbiAgICAgIHNldEF1dGhEYXRhKGFjY2Vzc0RhdGEpXG5cbiAgICAgIGFwaS5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbltcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nXG4gICAgICBdID0gYEJlYXJlciAke2FjY2Vzc0RhdGEudG9rZW59YFxuICAgIH0gZWxzZSB7XG4gICAgICBoYW5kbGVMb2dvdXQoKVxuICAgIH1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ6ICEhYXV0aERhdGEsXG4gICAgICAgIGxvYWRpbmc6IGlzTG9hZGluZyxcbiAgICAgICAgLi4uYXV0aERhdGEsXG4gICAgICAgIHVzZXI6IG1lLFxuICAgICAgICBsb2dpbjogaGFuZGxlTG9naW4sXG4gICAgICAgIGxvZ291dDogaGFuZGxlTG9nb3V0LFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgdXNlQXV0aENvbnRleHQgPSAoKSA9PiBSZWFjdC51c2VDb250ZXh0KEF1dGhDb250ZXh0KVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUm91dGVyIiwidXNlUXVlcnkiLCJ1c2VRdWVyeUNsaWVudCIsIkF1dGhTZXJ2aWNlIiwiYXBpIiwicmVtb3ZlQXV0aExvY2FsU3RvcmFnZSIsImdldEF1dGhMb2NhbFN0b3JhZ2UiLCJzZXRBdXRoTG9jYWxTdG9yYWdlIiwiQXV0aENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiZ2V0TWUiLCJnZXQiLCJ0aGVuIiwiZGF0YSIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwiYXV0aERhdGEiLCJzZXRBdXRoRGF0YSIsInVzZVN0YXRlIiwicXVlcnlDbGllbnQiLCJxdWVyeUtleSIsInVzZU1lbW8iLCJtZSIsImlzTG9hZGluZyIsInN0YWxlVGltZSIsIm9uRXJyb3IiLCJlcnJvciIsImNvbnNvbGUiLCJoYW5kbGVMb2dpbiIsInVzZUNhbGxiYWNrIiwiZW1haWwiLCJwYXNzd29yZCIsInJlc3VsdCIsImF1dGgiLCJFcnJvciIsIm1lc3NhZ2UiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iLCJ0b2tlbiIsInB1c2giLCJoYW5kbGVMb2dvdXQiLCJjYW5jZWxRdWVyaWVzIiwicmVtb3ZlUXVlcmllcyIsInVuZGVmaW5lZCIsInVzZUVmZmVjdCIsImFjY2Vzc0RhdGEiLCJEYXRlIiwicGFyc2UiLCJleHBpcmF0aW9uIiwibm93IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImlzQXV0aGVudGljYXRlZCIsImxvYWRpbmciLCJ1c2VyIiwibG9naW4iLCJsb2dvdXQiLCJ1c2VBdXRoQ29udGV4dCIsInVzZUNvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contexts/auth.context.tsx\n");

/***/ }),

/***/ "./src/hocs/with-query-client.tsx":
/*!****************************************!*\
  !*** ./src/hocs/with-query-client.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   withQueryClient: () => (/* binding */ withQueryClient)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ \"react-query\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_query_devtools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query/devtools */ \"react-query/devtools\");\n/* harmony import */ var react_query_devtools__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_query_devtools__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst queryClient = new react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClient();\nconst withQueryClient = (children)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClientProvider, {\n        client: queryClient,\n        children: [\n            children,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_query_devtools__WEBPACK_IMPORTED_MODULE_3__.ReactQueryDevtools, {}, void 0, false, {\n                fileName: \"/home/samcarvalhos/dev/familia/familia-fe-ead/src/hocs/with-query-client.tsx\",\n                lineNumber: 11,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/samcarvalhos/dev/familia/familia-fe-ead/src/hocs/with-query-client.tsx\",\n        lineNumber: 9,\n        columnNumber: 3\n    }, undefined);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9jcy93aXRoLXF1ZXJ5LWNsaWVudC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUVxQztBQUNMO0FBRXpELE1BQU1JLGNBQWMsSUFBSUgsb0RBQVdBO0FBRTVCLE1BQU1JLGtCQUFrQixDQUFDQyx5QkFDOUIsOERBQUNKLDREQUFtQkE7UUFBQ0ssUUFBUUg7O1lBQzFCRTswQkFDRCw4REFBQ0gsb0VBQWtCQTs7Ozs7Ozs7OztrQkFFdEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mYW1pbGlhLWZlLWVhZC8uL3NyYy9ob2NzL3dpdGgtcXVlcnktY2xpZW50LnRzeD84ZGZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgUXVlcnlDbGllbnQsIFF1ZXJ5Q2xpZW50UHJvdmlkZXIgfSBmcm9tICdyZWFjdC1xdWVyeSdcbmltcG9ydCB7IFJlYWN0UXVlcnlEZXZ0b29scyB9IGZyb20gJ3JlYWN0LXF1ZXJ5L2RldnRvb2xzJ1xuXG5jb25zdCBxdWVyeUNsaWVudCA9IG5ldyBRdWVyeUNsaWVudCgpXG5cbmV4cG9ydCBjb25zdCB3aXRoUXVlcnlDbGllbnQgPSAoY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSkgPT4gKFxuICA8UXVlcnlDbGllbnRQcm92aWRlciBjbGllbnQ9e3F1ZXJ5Q2xpZW50fT5cbiAgICB7Y2hpbGRyZW59XG4gICAgPFJlYWN0UXVlcnlEZXZ0b29scyAvPlxuICA8L1F1ZXJ5Q2xpZW50UHJvdmlkZXI+XG4pXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJRdWVyeUNsaWVudCIsIlF1ZXJ5Q2xpZW50UHJvdmlkZXIiLCJSZWFjdFF1ZXJ5RGV2dG9vbHMiLCJxdWVyeUNsaWVudCIsIndpdGhRdWVyeUNsaWVudCIsImNoaWxkcmVuIiwiY2xpZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/hocs/with-query-client.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _next_seo_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../next-seo.config */ \"./next-seo.config.ts\");\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-seo */ \"next-seo\");\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hot-toast */ \"react-hot-toast\");\n/* harmony import */ var _hocs_with_query_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @hocs/with-query-client */ \"./src/hocs/with-query-client.tsx\");\n/* harmony import */ var _contexts_auth_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @contexts/auth.context */ \"./src/contexts/auth.context.tsx\");\n/* harmony import */ var react_calendar_dist_Calendar_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-calendar/dist/Calendar.css */ \"./node_modules/react-calendar/dist/Calendar.css\");\n/* harmony import */ var react_calendar_dist_Calendar_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_calendar_dist_Calendar_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @styles/globals.css */ \"./src/client/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_8__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_4__, _contexts_auth_context__WEBPACK_IMPORTED_MODULE_6__]);\n([react_hot_toast__WEBPACK_IMPORTED_MODULE_4__, _contexts_auth_context__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\nconst App = ({ Component, pageProps })=>(0,_hocs_with_query_client__WEBPACK_IMPORTED_MODULE_5__.withQueryClient)(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_auth_context__WEBPACK_IMPORTED_MODULE_6__.AuthProvider, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_seo__WEBPACK_IMPORTED_MODULE_3__.DefaultSeo, {\n                ..._next_seo_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n            }, void 0, false, {\n                fileName: \"/home/samcarvalhos/dev/familia/familia-fe-ead/src/pages/_app.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_4__.Toaster, {\n                position: \"top-right\",\n                toastOptions: {\n                    duration: 5000\n                }\n            }, void 0, false, {\n                fileName: \"/home/samcarvalhos/dev/familia/familia-fe-ead/src/pages/_app.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/home/samcarvalhos/dev/familia/familia-fe-ead/src/pages/_app.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/samcarvalhos/dev/familia/familia-fe-ead/src/pages/_app.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUNjO0FBSUY7QUFDSTtBQUVnQjtBQUNKO0FBRVo7QUFDYjtBQUU1QixNQUFNTSxNQUEwQixDQUFDLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFLEdBQ3ZESix3RUFBZUEsZUFDYiw4REFBQ0MsZ0VBQVlBOzswQkFDWCw4REFBQ0gsZ0RBQVVBO2dCQUFFLEdBQUdELHdEQUFHOzs7Ozs7MEJBQ25CLDhEQUFDRSxvREFBT0E7Z0JBQUNNLFVBQVM7Z0JBQVlDLGNBQWM7b0JBQUVDLFVBQVU7Z0JBQUs7Ozs7OzswQkFDN0QsOERBQUNKO2dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7OztBQUk5QixpRUFBZUYsR0FBR0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2ZhbWlsaWEtZmUtZWFkLy4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHNlbyBmcm9tICcuLi8uLi9uZXh0LXNlby5jb25maWcnXG5cbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcblxuaW1wb3J0IHsgRGVmYXVsdFNlbyB9IGZyb20gJ25leHQtc2VvJ1xuaW1wb3J0IHsgVG9hc3RlciB9IGZyb20gJ3JlYWN0LWhvdC10b2FzdCdcblxuaW1wb3J0IHsgd2l0aFF1ZXJ5Q2xpZW50IH0gZnJvbSAnQGhvY3Mvd2l0aC1xdWVyeS1jbGllbnQnXG5pbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tICdAY29udGV4dHMvYXV0aC5jb250ZXh0J1xuXG5pbXBvcnQgJ3JlYWN0LWNhbGVuZGFyL2Rpc3QvQ2FsZW5kYXIuY3NzJ1xuaW1wb3J0ICdAc3R5bGVzL2dsb2JhbHMuY3NzJ1xuXG5jb25zdCBBcHA6IFJlYWN0LkZDPEFwcFByb3BzPiA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+XG4gIHdpdGhRdWVyeUNsaWVudChcbiAgICA8QXV0aFByb3ZpZGVyPlxuICAgICAgPERlZmF1bHRTZW8gey4uLnNlb30gLz5cbiAgICAgIDxUb2FzdGVyIHBvc2l0aW9uPVwidG9wLXJpZ2h0XCIgdG9hc3RPcHRpb25zPXt7IGR1cmF0aW9uOiA1MDAwIH19IC8+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9BdXRoUHJvdmlkZXI+XG4gIClcblxuZXhwb3J0IGRlZmF1bHQgQXBwXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzZW8iLCJEZWZhdWx0U2VvIiwiVG9hc3RlciIsIndpdGhRdWVyeUNsaWVudCIsIkF1dGhQcm92aWRlciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInBvc2l0aW9uIiwidG9hc3RPcHRpb25zIiwiZHVyYXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/services/AuthService.ts":
/*!*************************************!*\
  !*** ./src/services/AuthService.ts ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthService: () => (/* binding */ AuthService),\n/* harmony export */   auth: () => (/* binding */ auth)\n/* harmony export */ });\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-hot-toast */ \"react-hot-toast\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ \"./src/services/api.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_0__, _api__WEBPACK_IMPORTED_MODULE_1__]);\n([react_hot_toast__WEBPACK_IMPORTED_MODULE_0__, _api__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst auth = async (email, password)=>{\n    const toastId = react_hot_toast__WEBPACK_IMPORTED_MODULE_0__.toast.loading(\"Carregando...\");\n    try {\n        const { data } = await _api__WEBPACK_IMPORTED_MODULE_1__.api.post(\"/api/Authentication\", {\n            email,\n            password\n        });\n        if (data) {\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_0__.toast.dismiss(toastId);\n            return data;\n        }\n        return new Error(\"Falha no Login!\");\n    } catch (error) {\n        react_hot_toast__WEBPACK_IMPORTED_MODULE_0__.toast.dismiss(toastId);\n        react_hot_toast__WEBPACK_IMPORTED_MODULE_0__.toast.error(`${error.response.data.errors[0].message} :(`);\n        return new Error(error.message || \"Falha no Login!\");\n    }\n};\nconst AuthService = {\n    auth\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvQXV0aFNlcnZpY2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF1QztBQUlaO0FBRXBCLE1BQU1FLE9BQU8sT0FDbEJDLE9BQ0FDO0lBRUEsTUFBTUMsVUFBVUwsa0RBQUtBLENBQUNNLE9BQU8sQ0FBQztJQUM5QixJQUFJO1FBQ0YsTUFBTSxFQUFFQyxJQUFJLEVBQUUsR0FBRyxNQUFNTixxQ0FBR0EsQ0FBQ08sSUFBSSxDQUFDLHVCQUF1QjtZQUFFTDtZQUFPQztRQUFTO1FBQ3pFLElBQUlHLE1BQU07WUFDUlAsa0RBQUtBLENBQUNTLE9BQU8sQ0FBQ0o7WUFDZCxPQUFPRTtRQUNUO1FBRUEsT0FBTyxJQUFJRyxNQUFNO0lBQ25CLEVBQUUsT0FBT0MsT0FBWTtRQUNuQlgsa0RBQUtBLENBQUNTLE9BQU8sQ0FBQ0o7UUFDZEwsa0RBQUtBLENBQUNXLEtBQUssQ0FBQyxDQUFDLEVBQUVBLE1BQU1DLFFBQVEsQ0FBQ0wsSUFBSSxDQUFDTSxNQUFNLENBQUMsRUFBRSxDQUFDQyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBQ3pELE9BQU8sSUFBSUosTUFDVCxNQUErQkksT0FBTyxJQUFJO0lBRTlDO0FBQ0YsRUFBQztBQUVNLE1BQU1DLGNBQWM7SUFDekJiO0FBQ0YsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZhbWlsaWEtZmUtZWFkLy4vc3JjL3NlcnZpY2VzL0F1dGhTZXJ2aWNlLnRzP2UzMjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC1ob3QtdG9hc3QnXG5cbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uTW9kZWwgfSBmcm9tICdAbW9kZWxzL0F1dGhlbnRpY2F0aW9uTW9kZWwnXG5cbmltcG9ydCB7IGFwaSB9IGZyb20gJy4vYXBpJ1xuXG5leHBvcnQgY29uc3QgYXV0aCA9IGFzeW5jIChcbiAgZW1haWw6IHN0cmluZyxcbiAgcGFzc3dvcmQ6IHN0cmluZ1xuKTogUHJvbWlzZTxBdXRoZW50aWNhdGlvbk1vZGVsIHwgRXJyb3I+ID0+IHtcbiAgY29uc3QgdG9hc3RJZCA9IHRvYXN0LmxvYWRpbmcoJ0NhcnJlZ2FuZG8uLi4nKVxuICB0cnkge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXBpLnBvc3QoJy9hcGkvQXV0aGVudGljYXRpb24nLCB7IGVtYWlsLCBwYXNzd29yZCB9KVxuICAgIGlmIChkYXRhKSB7XG4gICAgICB0b2FzdC5kaXNtaXNzKHRvYXN0SWQpXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH1cblxuICAgIHJldHVybiBuZXcgRXJyb3IoJ0ZhbGhhIG5vIExvZ2luIScpXG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICB0b2FzdC5kaXNtaXNzKHRvYXN0SWQpXG4gICAgdG9hc3QuZXJyb3IoYCR7ZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnNbMF0ubWVzc2FnZX0gOihgKVxuICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAoZXJyb3IgYXMgeyBtZXNzYWdlOiBzdHJpbmcgfSkubWVzc2FnZSB8fCAnRmFsaGEgbm8gTG9naW4hJ1xuICAgIClcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgQXV0aFNlcnZpY2UgPSB7XG4gIGF1dGgsXG59XG4iXSwibmFtZXMiOlsidG9hc3QiLCJhcGkiLCJhdXRoIiwiZW1haWwiLCJwYXNzd29yZCIsInRvYXN0SWQiLCJsb2FkaW5nIiwiZGF0YSIsInBvc3QiLCJkaXNtaXNzIiwiRXJyb3IiLCJlcnJvciIsInJlc3BvbnNlIiwiZXJyb3JzIiwibWVzc2FnZSIsIkF1dGhTZXJ2aWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/AuthService.ts\n");

/***/ }),

/***/ "./src/services/ErrorInterceptor.ts":
/*!******************************************!*\
  !*** ./src/services/ErrorInterceptor.ts ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   errorInterceptor: () => (/* binding */ errorInterceptor)\n/* harmony export */ });\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-hot-toast */ \"react-hot-toast\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/services/utils.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_0__]);\nreact_hot_toast__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst errorInterceptor = (error)=>{\n    if (error.message == \"Network Error\") {\n        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.removeAuthLocalStorage)();\n        react_hot_toast__WEBPACK_IMPORTED_MODULE_0__[\"default\"].error(\"Falha de conex\\xe3o com servidor!\");\n        return Promise.reject(new Error(\"Falha de conex\\xe3o com servidor!\"));\n    }\n    if (error.response?.status == 401) {\n        return Promise.reject(new Error(\"Erro de login!\"));\n    }\n    return Promise.reject(error);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvRXJyb3JJbnRlcmNlcHRvci50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDbUM7QUFDYTtBQUV6QyxNQUFNRSxtQkFBbUIsQ0FBQ0M7SUFDL0IsSUFBSUEsTUFBTUMsT0FBTyxJQUFJLGlCQUFpQjtRQUNwQ0gsOERBQXNCQTtRQUN0QkQsNkRBQVcsQ0FBQztRQUNaLE9BQU9LLFFBQVFDLE1BQU0sQ0FBQyxJQUFJQyxNQUFNO0lBQ2xDO0lBRUEsSUFBSUosTUFBTUssUUFBUSxFQUFFQyxVQUFVLEtBQUs7UUFDakMsT0FBT0osUUFBUUMsTUFBTSxDQUFDLElBQUlDLE1BQU07SUFDbEM7SUFFQSxPQUFPRixRQUFRQyxNQUFNLENBQUNIO0FBQ3hCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mYW1pbGlhLWZlLWVhZC8uL3NyYy9zZXJ2aWNlcy9FcnJvckludGVyY2VwdG9yLnRzPzcxZWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXhpb3NFcnJvciB9IGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHRvYXN0IGZyb20gJ3JlYWN0LWhvdC10b2FzdCdcbmltcG9ydCB7IHJlbW92ZUF1dGhMb2NhbFN0b3JhZ2UgfSBmcm9tICcuL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgZXJyb3JJbnRlcmNlcHRvciA9IChlcnJvcjogQXhpb3NFcnJvcikgPT4ge1xuICBpZiAoZXJyb3IubWVzc2FnZSA9PSAnTmV0d29yayBFcnJvcicpIHtcbiAgICByZW1vdmVBdXRoTG9jYWxTdG9yYWdlKClcbiAgICB0b2FzdC5lcnJvcignRmFsaGEgZGUgY29uZXjDo28gY29tIHNlcnZpZG9yIScpXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignRmFsaGEgZGUgY29uZXjDo28gY29tIHNlcnZpZG9yIScpKVxuICB9XG5cbiAgaWYgKGVycm9yLnJlc3BvbnNlPy5zdGF0dXMgPT0gNDAxKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignRXJybyBkZSBsb2dpbiEnKSlcbiAgfVxuXG4gIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcilcbn1cbiJdLCJuYW1lcyI6WyJ0b2FzdCIsInJlbW92ZUF1dGhMb2NhbFN0b3JhZ2UiLCJlcnJvckludGVyY2VwdG9yIiwiZXJyb3IiLCJtZXNzYWdlIiwiUHJvbWlzZSIsInJlamVjdCIsIkVycm9yIiwicmVzcG9uc2UiLCJzdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/ErrorInterceptor.ts\n");

/***/ }),

/***/ "./src/services/ResponseInterceptor.ts":
/*!*********************************************!*\
  !*** ./src/services/ResponseInterceptor.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   responseInterceptor: () => (/* binding */ responseInterceptor)\n/* harmony export */ });\nconst responseInterceptor = (response)=>{\n    return response;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvUmVzcG9uc2VJbnRlcmNlcHRvci50cyIsIm1hcHBpbmdzIjoiOzs7O0FBRU8sTUFBTUEsc0JBQXNCLENBQUNDO0lBQ2xDLE9BQU9BO0FBQ1QsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZhbWlsaWEtZmUtZWFkLy4vc3JjL3NlcnZpY2VzL1Jlc3BvbnNlSW50ZXJjZXB0b3IudHM/MjAwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBeGlvc1Jlc3BvbnNlIH0gZnJvbSAnYXhpb3MnXG5cbmV4cG9ydCBjb25zdCByZXNwb25zZUludGVyY2VwdG9yID0gKHJlc3BvbnNlOiBBeGlvc1Jlc3BvbnNlKSA9PiB7XG4gIHJldHVybiByZXNwb25zZVxufVxuIl0sIm5hbWVzIjpbInJlc3BvbnNlSW50ZXJjZXB0b3IiLCJyZXNwb25zZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/ResponseInterceptor.ts\n");

/***/ }),

/***/ "./src/services/api.ts":
/*!*****************************!*\
  !*** ./src/services/api.ts ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   api: () => (/* binding */ api)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var _ErrorInterceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ErrorInterceptor */ \"./src/services/ErrorInterceptor.ts\");\n/* harmony import */ var _ResponseInterceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ResponseInterceptor */ \"./src/services/ResponseInterceptor.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, _ErrorInterceptor__WEBPACK_IMPORTED_MODULE_1__]);\n([axios__WEBPACK_IMPORTED_MODULE_0__, _ErrorInterceptor__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nconst api = axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n    baseURL: \"https://familia-ms-ead.azurewebsites.net\"\n});\napi.interceptors.response.use((response)=>(0,_ResponseInterceptor__WEBPACK_IMPORTED_MODULE_2__.responseInterceptor)(response), (error)=>(0,_ErrorInterceptor__WEBPACK_IMPORTED_MODULE_1__.errorInterceptor)(error));\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvYXBpLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBeUI7QUFDNEI7QUFDTTtBQUUzRCxNQUFNRyxNQUFNSCxvREFBWSxDQUFDO0lBQ3ZCSyxTQUFTO0FBRVg7QUFFQUYsSUFBSUcsWUFBWSxDQUFDQyxRQUFRLENBQUNDLEdBQUcsQ0FDM0IsQ0FBQ0QsV0FBYUwseUVBQW1CQSxDQUFDSyxXQUNsQyxDQUFDRSxRQUFVUixtRUFBZ0JBLENBQUNRO0FBR2hCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmFtaWxpYS1mZS1lYWQvLi9zcmMvc2VydmljZXMvYXBpLnRzPzk1NmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgZXJyb3JJbnRlcmNlcHRvciB9IGZyb20gJy4vRXJyb3JJbnRlcmNlcHRvcidcbmltcG9ydCB7IHJlc3BvbnNlSW50ZXJjZXB0b3IgfSBmcm9tICcuL1Jlc3BvbnNlSW50ZXJjZXB0b3InXG5cbmNvbnN0IGFwaSA9IGF4aW9zLmNyZWF0ZSh7XG4gIGJhc2VVUkw6ICdodHRwczovL2ZhbWlsaWEtbXMtZWFkLmF6dXJld2Vic2l0ZXMubmV0JyxcbiAgLy8gYmFzZVVSTDogJ2h0dHBzOi8vbG9jYWxob3N0OjcyMzgnLFxufSlcblxuYXBpLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoXG4gIChyZXNwb25zZSkgPT4gcmVzcG9uc2VJbnRlcmNlcHRvcihyZXNwb25zZSksXG4gIChlcnJvcikgPT4gZXJyb3JJbnRlcmNlcHRvcihlcnJvcilcbilcblxuZXhwb3J0IHsgYXBpIH1cbiJdLCJuYW1lcyI6WyJheGlvcyIsImVycm9ySW50ZXJjZXB0b3IiLCJyZXNwb25zZUludGVyY2VwdG9yIiwiYXBpIiwiY3JlYXRlIiwiYmFzZVVSTCIsImludGVyY2VwdG9ycyIsInJlc3BvbnNlIiwidXNlIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/api.ts\n");

/***/ }),

/***/ "./src/services/utils.ts":
/*!*******************************!*\
  !*** ./src/services/utils.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   REACT_LOCAL_STORAGE_AUTH_DATA: () => (/* binding */ REACT_LOCAL_STORAGE_AUTH_DATA),\n/* harmony export */   REACT_LOCAL_STORAGE_COMPLETED_CLASS: () => (/* binding */ REACT_LOCAL_STORAGE_COMPLETED_CLASS),\n/* harmony export */   getAuthLocalStorage: () => (/* binding */ getAuthLocalStorage),\n/* harmony export */   getAvatarLetters: () => (/* binding */ getAvatarLetters),\n/* harmony export */   getCompletedClassLocalStorage: () => (/* binding */ getCompletedClassLocalStorage),\n/* harmony export */   getToken: () => (/* binding */ getToken),\n/* harmony export */   removeAuthLocalStorage: () => (/* binding */ removeAuthLocalStorage),\n/* harmony export */   setAuthLocalStorage: () => (/* binding */ setAuthLocalStorage),\n/* harmony export */   setCompletedClassLocalStorage: () => (/* binding */ setCompletedClassLocalStorage)\n/* harmony export */ });\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_0__);\n\nconst REACT_LOCAL_STORAGE_AUTH_DATA = \"@App:authData\";\nconst REACT_LOCAL_STORAGE_COMPLETED_CLASS = \"@App:completedClass\";\nfunction setAuthLocalStorage(authData) {\n    (0,nookies__WEBPACK_IMPORTED_MODULE_0__.setCookie)(undefined, REACT_LOCAL_STORAGE_AUTH_DATA, JSON.stringify(authData), {\n        maxAge: 60 * 60 * 24 * 30,\n        path: \"/\"\n    });\n}\nfunction getAuthLocalStorage() {\n    const { [REACT_LOCAL_STORAGE_AUTH_DATA]: data } = (0,nookies__WEBPACK_IMPORTED_MODULE_0__.parseCookies)();\n    if (!data) return null;\n    return JSON.parse(data);\n}\nfunction getToken() {\n    const authData = getAuthLocalStorage();\n    return authData != null ? authData.token.toString() : \"\";\n}\nfunction removeAuthLocalStorage() {\n    (0,nookies__WEBPACK_IMPORTED_MODULE_0__.destroyCookie)(null, REACT_LOCAL_STORAGE_AUTH_DATA, {\n        path: \"/\"\n    });\n}\nfunction getAvatarLetters(userName) {\n    const words = userName.trim().toLowerCase().split(\" \");\n    let avatarLetters = \"\";\n    for(let a = 0; a < words.length; a++){\n        const w = words[a];\n        words[a] = w[0]?.toUpperCase();\n        avatarLetters = words.join().replace(\",\", \"\").substring(0, 2);\n    }\n    return avatarLetters;\n}\nfunction setCompletedClassLocalStorage(completedClass) {\n    localStorage.setItem(REACT_LOCAL_STORAGE_COMPLETED_CLASS, JSON.stringify(completedClass));\n}\nfunction getCompletedClassLocalStorage() {\n    const data = localStorage.getItem(REACT_LOCAL_STORAGE_COMPLETED_CLASS);\n    if (!data) {\n        return [];\n    }\n    return JSON.parse(data);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvdXRpbHMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBZ0U7QUFHekQsTUFBTUcsZ0NBQWdDLGdCQUFlO0FBQ3JELE1BQU1DLHNDQUFzQyxzQkFBcUI7QUFFakUsU0FBU0Msb0JBQW9CQyxRQUFvQztJQUN0RUosa0RBQVNBLENBQ1BLLFdBQ0FKLCtCQUNBSyxLQUFLQyxTQUFTLENBQUNILFdBQ2Y7UUFDRUksUUFBUSxLQUFLLEtBQUssS0FBSztRQUN2QkMsTUFBTTtJQUNSO0FBRUo7QUFFTyxTQUFTQztJQUNkLE1BQU0sRUFBRSxDQUFDVCw4QkFBOEIsRUFBRVUsSUFBSSxFQUFFLEdBQUdaLHFEQUFZQTtJQUU5RCxJQUFJLENBQUNZLE1BQU0sT0FBTztJQUVsQixPQUFPTCxLQUFLTSxLQUFLLENBQUNEO0FBQ3BCO0FBRU8sU0FBU0U7SUFDZCxNQUFNVCxXQUFXTTtJQUNqQixPQUFPTixZQUFZLE9BQU9BLFNBQVNVLEtBQUssQ0FBQ0MsUUFBUSxLQUFLO0FBQ3hEO0FBRU8sU0FBU0M7SUFDZGxCLHNEQUFhQSxDQUFDLE1BQU1HLCtCQUErQjtRQUFFUSxNQUFNO0lBQUk7QUFDakU7QUFFTyxTQUFTUSxpQkFBaUJDLFFBQWdCO0lBQy9DLE1BQU1DLFFBQVFELFNBQVNFLElBQUksR0FBR0MsV0FBVyxHQUFHQyxLQUFLLENBQUM7SUFDbEQsSUFBSUMsZ0JBQWdCO0lBRXBCLElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJTCxNQUFNTSxNQUFNLEVBQUVELElBQUs7UUFDckMsTUFBTUUsSUFBSVAsS0FBSyxDQUFDSyxFQUFFO1FBQ2xCTCxLQUFLLENBQUNLLEVBQUUsR0FBR0UsQ0FBQyxDQUFDLEVBQUUsRUFBRUM7UUFDakJKLGdCQUFnQkosTUFBTVMsSUFBSSxHQUFHQyxPQUFPLENBQUMsS0FBSyxJQUFJQyxTQUFTLENBQUMsR0FBRztJQUM3RDtJQUVBLE9BQU9QO0FBQ1Q7QUFFTyxTQUFTUSw4QkFBOEJDLGNBQXdCO0lBQ3BFQyxhQUFhQyxPQUFPLENBQ2xCaEMscUNBQ0FJLEtBQUtDLFNBQVMsQ0FBQ3lCO0FBRW5CO0FBRU8sU0FBU0c7SUFDZCxNQUFNeEIsT0FBT3NCLGFBQWFHLE9BQU8sQ0FBQ2xDO0lBQ2xDLElBQUksQ0FBQ1MsTUFBTTtRQUNULE9BQU8sRUFBRTtJQUNYO0lBRUEsT0FBT0wsS0FBS00sS0FBSyxDQUFDRDtBQUNwQiIsInNvdXJjZXMiOlsid2VicGFjazovL2ZhbWlsaWEtZmUtZWFkLy4vc3JjL3NlcnZpY2VzL3V0aWxzLnRzP2I4ZjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGVzdHJveUNvb2tpZSwgcGFyc2VDb29raWVzLCBzZXRDb29raWUgfSBmcm9tICdub29raWVzJ1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25Nb2RlbCB9IGZyb20gJ0Btb2RlbHMvQXV0aGVudGljYXRpb25Nb2RlbCdcblxuZXhwb3J0IGNvbnN0IFJFQUNUX0xPQ0FMX1NUT1JBR0VfQVVUSF9EQVRBID0gJ0BBcHA6YXV0aERhdGEnXG5leHBvcnQgY29uc3QgUkVBQ1RfTE9DQUxfU1RPUkFHRV9DT01QTEVURURfQ0xBU1MgPSAnQEFwcDpjb21wbGV0ZWRDbGFzcydcblxuZXhwb3J0IGZ1bmN0aW9uIHNldEF1dGhMb2NhbFN0b3JhZ2UoYXV0aERhdGE6IEF1dGhlbnRpY2F0aW9uTW9kZWwgfCBudWxsKSB7XG4gIHNldENvb2tpZShcbiAgICB1bmRlZmluZWQsXG4gICAgUkVBQ1RfTE9DQUxfU1RPUkFHRV9BVVRIX0RBVEEsXG4gICAgSlNPTi5zdHJpbmdpZnkoYXV0aERhdGEpLFxuICAgIHtcbiAgICAgIG1heEFnZTogNjAgKiA2MCAqIDI0ICogMzAsIC8vIDMwIGRheXNcbiAgICAgIHBhdGg6ICcvJywgLy8gV2hpdGNoIHBhdGhzIGluIG15IGFwcCBoYXMgYWNjZXNzIHRvIHRoaXMgY29va2llXG4gICAgfVxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBdXRoTG9jYWxTdG9yYWdlKCkge1xuICBjb25zdCB7IFtSRUFDVF9MT0NBTF9TVE9SQUdFX0FVVEhfREFUQV06IGRhdGEgfSA9IHBhcnNlQ29va2llcygpXG5cbiAgaWYgKCFkYXRhKSByZXR1cm4gbnVsbFxuXG4gIHJldHVybiBKU09OLnBhcnNlKGRhdGEpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUb2tlbigpIHtcbiAgY29uc3QgYXV0aERhdGEgPSBnZXRBdXRoTG9jYWxTdG9yYWdlKClcbiAgcmV0dXJuIGF1dGhEYXRhICE9IG51bGwgPyBhdXRoRGF0YS50b2tlbi50b1N0cmluZygpIDogJydcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUF1dGhMb2NhbFN0b3JhZ2UoKSB7XG4gIGRlc3Ryb3lDb29raWUobnVsbCwgUkVBQ1RfTE9DQUxfU1RPUkFHRV9BVVRIX0RBVEEsIHsgcGF0aDogJy8nIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBdmF0YXJMZXR0ZXJzKHVzZXJOYW1lOiBzdHJpbmcpIHtcbiAgY29uc3Qgd29yZHMgPSB1c2VyTmFtZS50cmltKCkudG9Mb3dlckNhc2UoKS5zcGxpdCgnICcpXG4gIGxldCBhdmF0YXJMZXR0ZXJzID0gJydcblxuICBmb3IgKGxldCBhID0gMDsgYSA8IHdvcmRzLmxlbmd0aDsgYSsrKSB7XG4gICAgY29uc3QgdyA9IHdvcmRzW2FdXG4gICAgd29yZHNbYV0gPSB3WzBdPy50b1VwcGVyQ2FzZSgpXG4gICAgYXZhdGFyTGV0dGVycyA9IHdvcmRzLmpvaW4oKS5yZXBsYWNlKCcsJywgJycpLnN1YnN0cmluZygwLCAyKVxuICB9XG5cbiAgcmV0dXJuIGF2YXRhckxldHRlcnNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldENvbXBsZXRlZENsYXNzTG9jYWxTdG9yYWdlKGNvbXBsZXRlZENsYXNzOiBzdHJpbmdbXSkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICBSRUFDVF9MT0NBTF9TVE9SQUdFX0NPTVBMRVRFRF9DTEFTUyxcbiAgICBKU09OLnN0cmluZ2lmeShjb21wbGV0ZWRDbGFzcylcbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29tcGxldGVkQ2xhc3NMb2NhbFN0b3JhZ2UoKTogc3RyaW5nW10ge1xuICBjb25zdCBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oUkVBQ1RfTE9DQUxfU1RPUkFHRV9DT01QTEVURURfQ0xBU1MpXG4gIGlmICghZGF0YSkge1xuICAgIHJldHVybiBbXVxuICB9XG5cbiAgcmV0dXJuIEpTT04ucGFyc2UoZGF0YSlcbn1cbiJdLCJuYW1lcyI6WyJkZXN0cm95Q29va2llIiwicGFyc2VDb29raWVzIiwic2V0Q29va2llIiwiUkVBQ1RfTE9DQUxfU1RPUkFHRV9BVVRIX0RBVEEiLCJSRUFDVF9MT0NBTF9TVE9SQUdFX0NPTVBMRVRFRF9DTEFTUyIsInNldEF1dGhMb2NhbFN0b3JhZ2UiLCJhdXRoRGF0YSIsInVuZGVmaW5lZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJtYXhBZ2UiLCJwYXRoIiwiZ2V0QXV0aExvY2FsU3RvcmFnZSIsImRhdGEiLCJwYXJzZSIsImdldFRva2VuIiwidG9rZW4iLCJ0b1N0cmluZyIsInJlbW92ZUF1dGhMb2NhbFN0b3JhZ2UiLCJnZXRBdmF0YXJMZXR0ZXJzIiwidXNlck5hbWUiLCJ3b3JkcyIsInRyaW0iLCJ0b0xvd2VyQ2FzZSIsInNwbGl0IiwiYXZhdGFyTGV0dGVycyIsImEiLCJsZW5ndGgiLCJ3IiwidG9VcHBlckNhc2UiLCJqb2luIiwicmVwbGFjZSIsInN1YnN0cmluZyIsInNldENvbXBsZXRlZENsYXNzTG9jYWxTdG9yYWdlIiwiY29tcGxldGVkQ2xhc3MiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZ2V0Q29tcGxldGVkQ2xhc3NMb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/utils.ts\n");

/***/ }),

/***/ "./src/client/styles/globals.css":
/*!***************************************!*\
  !*** ./src/client/styles/globals.css ***!
  \***************************************/
/***/ (() => {



/***/ }),

/***/ "next-seo":
/*!***************************!*\
  !*** external "next-seo" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-seo");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("nookies");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react-query":
/*!******************************!*\
  !*** external "react-query" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-query");

/***/ }),

/***/ "react-query/devtools":
/*!***************************************!*\
  !*** external "react-query/devtools" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-query/devtools");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ "react-hot-toast":
/*!**********************************!*\
  !*** external "react-hot-toast" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-hot-toast");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/react-calendar"], () => (__webpack_exec__("./src/pages/_app.tsx")));
module.exports = __webpack_exports__;

})();