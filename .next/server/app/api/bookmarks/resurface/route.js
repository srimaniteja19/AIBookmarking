"use strict";
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
exports.id = "app/api/bookmarks/resurface/route";
exports.ids = ["app/api/bookmarks/resurface/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fbookmarks%2Fresurface%2Froute&page=%2Fapi%2Fbookmarks%2Fresurface%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fbookmarks%2Fresurface%2Froute.ts&appDir=%2FUsers%2Fmaniteja19%2FDocuments%2FGitHub%2FAIBookmarking%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmaniteja19%2FDocuments%2FGitHub%2FAIBookmarking&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fbookmarks%2Fresurface%2Froute&page=%2Fapi%2Fbookmarks%2Fresurface%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fbookmarks%2Fresurface%2Froute.ts&appDir=%2FUsers%2Fmaniteja19%2FDocuments%2FGitHub%2FAIBookmarking%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmaniteja19%2FDocuments%2FGitHub%2FAIBookmarking&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_maniteja19_Documents_GitHub_AIBookmarking_src_app_api_bookmarks_resurface_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/bookmarks/resurface/route.ts */ \"(rsc)/./src/app/api/bookmarks/resurface/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/bookmarks/resurface/route\",\n        pathname: \"/api/bookmarks/resurface\",\n        filename: \"route\",\n        bundlePath: \"app/api/bookmarks/resurface/route\"\n    },\n    resolvedPagePath: \"/Users/maniteja19/Documents/GitHub/AIBookmarking/src/app/api/bookmarks/resurface/route.ts\",\n    nextConfigOutput,\n    userland: _Users_maniteja19_Documents_GitHub_AIBookmarking_src_app_api_bookmarks_resurface_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/bookmarks/resurface/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZib29rbWFya3MlMkZyZXN1cmZhY2UlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmJvb2ttYXJrcyUyRnJlc3VyZmFjZSUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmJvb2ttYXJrcyUyRnJlc3VyZmFjZSUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRm1hbml0ZWphMTklMkZEb2N1bWVudHMlMkZHaXRIdWIlMkZBSUJvb2ttYXJraW5nJTJGc3JjJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRm1hbml0ZWphMTklMkZEb2N1bWVudHMlMkZHaXRIdWIlMkZBSUJvb2ttYXJraW5nJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUN5QztBQUN0SDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL3ZhdWx0Lz9kNWQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy9tYW5pdGVqYTE5L0RvY3VtZW50cy9HaXRIdWIvQUlCb29rbWFya2luZy9zcmMvYXBwL2FwaS9ib29rbWFya3MvcmVzdXJmYWNlL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9ib29rbWFya3MvcmVzdXJmYWNlL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYm9va21hcmtzL3Jlc3VyZmFjZVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYm9va21hcmtzL3Jlc3VyZmFjZS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9tYW5pdGVqYTE5L0RvY3VtZW50cy9HaXRIdWIvQUlCb29rbWFya2luZy9zcmMvYXBwL2FwaS9ib29rbWFya3MvcmVzdXJmYWNlL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9ib29rbWFya3MvcmVzdXJmYWNlL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fbookmarks%2Fresurface%2Froute&page=%2Fapi%2Fbookmarks%2Fresurface%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fbookmarks%2Fresurface%2Froute.ts&appDir=%2FUsers%2Fmaniteja19%2FDocuments%2FGitHub%2FAIBookmarking%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmaniteja19%2FDocuments%2FGitHub%2FAIBookmarking&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/bookmarks/resurface/route.ts":
/*!**************************************************!*\
  !*** ./src/app/api/bookmarks/resurface/route.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./src/lib/auth.ts\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./src/lib/prisma.ts\");\n/* harmony import */ var _barrel_optimize_names_endOfDay_startOfDay_subMonths_subYears_date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=endOfDay,startOfDay,subMonths,subYears!=!date-fns */ \"(rsc)/./node_modules/date-fns/subYears.mjs\");\n/* harmony import */ var _barrel_optimize_names_endOfDay_startOfDay_subMonths_subYears_date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=endOfDay,startOfDay,subMonths,subYears!=!date-fns */ \"(rsc)/./node_modules/date-fns/subMonths.mjs\");\n/* harmony import */ var _barrel_optimize_names_endOfDay_startOfDay_subMonths_subYears_date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=endOfDay,startOfDay,subMonths,subYears!=!date-fns */ \"(rsc)/./node_modules/date-fns/startOfDay.mjs\");\n/* harmony import */ var _barrel_optimize_names_endOfDay_startOfDay_subMonths_subYears_date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=endOfDay,startOfDay,subMonths,subYears!=!date-fns */ \"(rsc)/./node_modules/date-fns/endOfDay.mjs\");\n\n\n\n\n\nasync function GET() {\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n    if (!session?.user?.id) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Unauthorized\"\n        }, {\n            status: 401\n        });\n    }\n    const today = new Date();\n    const oneYearAgo = (0,_barrel_optimize_names_endOfDay_startOfDay_subMonths_subYears_date_fns__WEBPACK_IMPORTED_MODULE_4__.subYears)(today, 1);\n    const oneMonthAgo = (0,_barrel_optimize_names_endOfDay_startOfDay_subMonths_subYears_date_fns__WEBPACK_IMPORTED_MODULE_5__.subMonths)(today, 1);\n    const [yearAgo, monthAgo, unvisitedCount, unvisitedSample] = await Promise.all([\n        _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.bookmark.findFirst({\n            where: {\n                userId: session.user.id,\n                isArchived: false,\n                createdAt: {\n                    gte: (0,_barrel_optimize_names_endOfDay_startOfDay_subMonths_subYears_date_fns__WEBPACK_IMPORTED_MODULE_6__.startOfDay)(oneYearAgo),\n                    lte: (0,_barrel_optimize_names_endOfDay_startOfDay_subMonths_subYears_date_fns__WEBPACK_IMPORTED_MODULE_7__.endOfDay)(oneYearAgo)\n                }\n            },\n            include: {\n                collection: {\n                    select: {\n                        id: true,\n                        name: true,\n                        emoji: true,\n                        color: true\n                    }\n                },\n                tags: {\n                    select: {\n                        id: true,\n                        name: true,\n                        color: true\n                    }\n                }\n            }\n        }),\n        _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.bookmark.findFirst({\n            where: {\n                userId: session.user.id,\n                isArchived: false,\n                createdAt: {\n                    gte: (0,_barrel_optimize_names_endOfDay_startOfDay_subMonths_subYears_date_fns__WEBPACK_IMPORTED_MODULE_6__.startOfDay)(oneMonthAgo),\n                    lte: (0,_barrel_optimize_names_endOfDay_startOfDay_subMonths_subYears_date_fns__WEBPACK_IMPORTED_MODULE_7__.endOfDay)(oneMonthAgo)\n                }\n            },\n            include: {\n                collection: {\n                    select: {\n                        id: true,\n                        name: true,\n                        emoji: true,\n                        color: true\n                    }\n                },\n                tags: {\n                    select: {\n                        id: true,\n                        name: true,\n                        color: true\n                    }\n                }\n            }\n        }),\n        _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.bookmark.count({\n            where: {\n                userId: session.user.id,\n                isArchived: false,\n                visitCount: 0\n            }\n        }),\n        _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.bookmark.findMany({\n            where: {\n                userId: session.user.id,\n                isArchived: false,\n                visitCount: 0\n            },\n            take: 1,\n            skip: Math.floor(Math.random() * 15),\n            include: {\n                collection: {\n                    select: {\n                        id: true,\n                        name: true,\n                        emoji: true,\n                        color: true\n                    }\n                },\n                tags: {\n                    select: {\n                        id: true,\n                        name: true,\n                        color: true\n                    }\n                }\n            },\n            orderBy: {\n                createdAt: \"asc\"\n            }\n        })\n    ]);\n    const randomUnvisited = unvisitedCount > 0 ? unvisitedSample[0] : null;\n    const out = [];\n    if (yearAgo) out.push({\n        ...yearAgo,\n        resurfaceLabel: \"1 year ago\"\n    });\n    if (monthAgo) out.push({\n        ...monthAgo,\n        resurfaceLabel: \"1 month ago\"\n    });\n    if (randomUnvisited && randomUnvisited.id !== yearAgo?.id && randomUnvisited.id !== monthAgo?.id) {\n        out.push({\n            ...randomUnvisited,\n            resurfaceLabel: \"Unvisited\"\n        });\n    }\n    const serialized = out.map((b)=>{\n        const x = b;\n        return {\n            ...b,\n            createdAt: x.createdAt.toISOString(),\n            updatedAt: x.updatedAt.toISOString(),\n            lastVisited: x.lastVisited?.toISOString() ?? null,\n            remindAt: x.remindAt?.toISOString() ?? null\n        };\n    });\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(serialized);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9ib29rbWFya3MvcmVzdXJmYWNlL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMkM7QUFDRTtBQUNKO0FBQ0g7QUFDK0I7QUFFOUQsZUFBZVE7SUFDcEIsTUFBTUMsVUFBVSxNQUFNUiwyREFBZ0JBLENBQUNDLGtEQUFXQTtJQUNsRCxJQUFJLENBQUNPLFNBQVNDLE1BQU1DLElBQUk7UUFDdEIsT0FBT1gscURBQVlBLENBQUNZLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQWUsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDcEU7SUFFQSxNQUFNQyxRQUFRLElBQUlDO0lBQ2xCLE1BQU1DLGFBQWFiLGdIQUFRQSxDQUFDVyxPQUFPO0lBQ25DLE1BQU1HLGNBQWNiLGlIQUFTQSxDQUFDVSxPQUFPO0lBRXJDLE1BQU0sQ0FBQ0ksU0FBU0MsVUFBVUMsZ0JBQWdCQyxnQkFBZ0IsR0FBRyxNQUFNQyxRQUFRQyxHQUFHLENBQUM7UUFDN0VyQiwrQ0FBTUEsQ0FBQ3NCLFFBQVEsQ0FBQ0MsU0FBUyxDQUFDO1lBQ3hCQyxPQUFPO2dCQUNMQyxRQUFRbkIsUUFBUUMsSUFBSSxDQUFDQyxFQUFFO2dCQUN2QmtCLFlBQVk7Z0JBQ1pDLFdBQVc7b0JBQ1RDLEtBQUt6QixrSEFBVUEsQ0FBQ1c7b0JBQ2hCZSxLQUFLekIsZ0hBQVFBLENBQUNVO2dCQUNoQjtZQUNGO1lBQ0FnQixTQUFTO2dCQUNQQyxZQUFZO29CQUFFQyxRQUFRO3dCQUFFeEIsSUFBSTt3QkFBTXlCLE1BQU07d0JBQU1DLE9BQU87d0JBQU1DLE9BQU87b0JBQUs7Z0JBQUU7Z0JBQ3pFQyxNQUFNO29CQUFFSixRQUFRO3dCQUFFeEIsSUFBSTt3QkFBTXlCLE1BQU07d0JBQU1FLE9BQU87b0JBQUs7Z0JBQUU7WUFDeEQ7UUFDRjtRQUNBbkMsK0NBQU1BLENBQUNzQixRQUFRLENBQUNDLFNBQVMsQ0FBQztZQUN4QkMsT0FBTztnQkFDTEMsUUFBUW5CLFFBQVFDLElBQUksQ0FBQ0MsRUFBRTtnQkFDdkJrQixZQUFZO2dCQUNaQyxXQUFXO29CQUNUQyxLQUFLekIsa0hBQVVBLENBQUNZO29CQUNoQmMsS0FBS3pCLGdIQUFRQSxDQUFDVztnQkFDaEI7WUFDRjtZQUNBZSxTQUFTO2dCQUNQQyxZQUFZO29CQUFFQyxRQUFRO3dCQUFFeEIsSUFBSTt3QkFBTXlCLE1BQU07d0JBQU1DLE9BQU87d0JBQU1DLE9BQU87b0JBQUs7Z0JBQUU7Z0JBQ3pFQyxNQUFNO29CQUFFSixRQUFRO3dCQUFFeEIsSUFBSTt3QkFBTXlCLE1BQU07d0JBQU1FLE9BQU87b0JBQUs7Z0JBQUU7WUFDeEQ7UUFDRjtRQUNBbkMsK0NBQU1BLENBQUNzQixRQUFRLENBQUNlLEtBQUssQ0FBQztZQUNwQmIsT0FBTztnQkFDTEMsUUFBUW5CLFFBQVFDLElBQUksQ0FBQ0MsRUFBRTtnQkFDdkJrQixZQUFZO2dCQUNaWSxZQUFZO1lBQ2Q7UUFDRjtRQUNBdEMsK0NBQU1BLENBQUNzQixRQUFRLENBQUNpQixRQUFRLENBQUM7WUFDdkJmLE9BQU87Z0JBQ0xDLFFBQVFuQixRQUFRQyxJQUFJLENBQUNDLEVBQUU7Z0JBQ3ZCa0IsWUFBWTtnQkFDWlksWUFBWTtZQUNkO1lBQ0FFLE1BQU07WUFDTkMsTUFBTUMsS0FBS0MsS0FBSyxDQUFDRCxLQUFLRSxNQUFNLEtBQUs7WUFDakNkLFNBQVM7Z0JBQ1BDLFlBQVk7b0JBQUVDLFFBQVE7d0JBQUV4QixJQUFJO3dCQUFNeUIsTUFBTTt3QkFBTUMsT0FBTzt3QkFBTUMsT0FBTztvQkFBSztnQkFBRTtnQkFDekVDLE1BQU07b0JBQUVKLFFBQVE7d0JBQUV4QixJQUFJO3dCQUFNeUIsTUFBTTt3QkFBTUUsT0FBTztvQkFBSztnQkFBRTtZQUN4RDtZQUNBVSxTQUFTO2dCQUFFbEIsV0FBVztZQUFNO1FBQzlCO0tBQ0Q7SUFFRCxNQUFNbUIsa0JBQWtCNUIsaUJBQWlCLElBQUlDLGVBQWUsQ0FBQyxFQUFFLEdBQUc7SUFFbEUsTUFBTTRCLE1BQW1FLEVBQUU7SUFDM0UsSUFBSS9CLFNBQVMrQixJQUFJQyxJQUFJLENBQUM7UUFBRSxHQUFHaEMsT0FBTztRQUFFaUMsZ0JBQWdCO0lBQWE7SUFDakUsSUFBSWhDLFVBQVU4QixJQUFJQyxJQUFJLENBQUM7UUFBRSxHQUFHL0IsUUFBUTtRQUFFZ0MsZ0JBQWdCO0lBQWM7SUFDcEUsSUFBSUgsbUJBQW1CQSxnQkFBZ0J0QyxFQUFFLEtBQUtRLFNBQVNSLE1BQU1zQyxnQkFBZ0J0QyxFQUFFLEtBQUtTLFVBQVVULElBQUk7UUFDaEd1QyxJQUFJQyxJQUFJLENBQUM7WUFBRSxHQUFHRixlQUFlO1lBQUVHLGdCQUFnQjtRQUFZO0lBQzdEO0lBR0EsTUFBTUMsYUFBYUgsSUFBSUksR0FBRyxDQUFDLENBQUNDO1FBQzFCLE1BQU1DLElBQUlEO1FBQ1YsT0FBTztZQUNMLEdBQUdBLENBQUM7WUFDSnpCLFdBQVcwQixFQUFFMUIsU0FBUyxDQUFDMkIsV0FBVztZQUNsQ0MsV0FBV0YsRUFBRUUsU0FBUyxDQUFDRCxXQUFXO1lBQ2xDRSxhQUFhSCxFQUFFRyxXQUFXLEVBQUVGLGlCQUFpQjtZQUM3Q0csVUFBVUosRUFBRUksUUFBUSxFQUFFSCxpQkFBaUI7UUFDekM7SUFDRjtJQUVBLE9BQU96RCxxREFBWUEsQ0FBQ1ksSUFBSSxDQUFDeUM7QUFDM0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92YXVsdC8uL3NyYy9hcHAvYXBpL2Jvb2ttYXJrcy9yZXN1cmZhY2Uvcm91dGUudHM/NjY5YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcbmltcG9ydCB7IGdldFNlcnZlclNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgeyBhdXRoT3B0aW9ucyB9IGZyb20gXCJAL2xpYi9hdXRoXCI7XG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tIFwiQC9saWIvcHJpc21hXCI7XG5pbXBvcnQgeyBzdWJZZWFycywgc3ViTW9udGhzLCBzdGFydE9mRGF5LCBlbmRPZkRheSB9IGZyb20gXCJkYXRlLWZuc1wiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKCkge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucyk7XG4gIGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJVbmF1dGhvcml6ZWRcIiB9LCB7IHN0YXR1czogNDAxIH0pO1xuICB9XG5cbiAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBvbmVZZWFyQWdvID0gc3ViWWVhcnModG9kYXksIDEpO1xuICBjb25zdCBvbmVNb250aEFnbyA9IHN1Yk1vbnRocyh0b2RheSwgMSk7XG5cbiAgY29uc3QgW3llYXJBZ28sIG1vbnRoQWdvLCB1bnZpc2l0ZWRDb3VudCwgdW52aXNpdGVkU2FtcGxlXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICBwcmlzbWEuYm9va21hcmsuZmluZEZpcnN0KHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIHVzZXJJZDogc2Vzc2lvbi51c2VyLmlkLFxuICAgICAgICBpc0FyY2hpdmVkOiBmYWxzZSxcbiAgICAgICAgY3JlYXRlZEF0OiB7XG4gICAgICAgICAgZ3RlOiBzdGFydE9mRGF5KG9uZVllYXJBZ28pLFxuICAgICAgICAgIGx0ZTogZW5kT2ZEYXkob25lWWVhckFnbyksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgaW5jbHVkZToge1xuICAgICAgICBjb2xsZWN0aW9uOiB7IHNlbGVjdDogeyBpZDogdHJ1ZSwgbmFtZTogdHJ1ZSwgZW1vamk6IHRydWUsIGNvbG9yOiB0cnVlIH0gfSxcbiAgICAgICAgdGFnczogeyBzZWxlY3Q6IHsgaWQ6IHRydWUsIG5hbWU6IHRydWUsIGNvbG9yOiB0cnVlIH0gfSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgcHJpc21hLmJvb2ttYXJrLmZpbmRGaXJzdCh7XG4gICAgICB3aGVyZToge1xuICAgICAgICB1c2VySWQ6IHNlc3Npb24udXNlci5pZCxcbiAgICAgICAgaXNBcmNoaXZlZDogZmFsc2UsXG4gICAgICAgIGNyZWF0ZWRBdDoge1xuICAgICAgICAgIGd0ZTogc3RhcnRPZkRheShvbmVNb250aEFnbyksXG4gICAgICAgICAgbHRlOiBlbmRPZkRheShvbmVNb250aEFnbyksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgaW5jbHVkZToge1xuICAgICAgICBjb2xsZWN0aW9uOiB7IHNlbGVjdDogeyBpZDogdHJ1ZSwgbmFtZTogdHJ1ZSwgZW1vamk6IHRydWUsIGNvbG9yOiB0cnVlIH0gfSxcbiAgICAgICAgdGFnczogeyBzZWxlY3Q6IHsgaWQ6IHRydWUsIG5hbWU6IHRydWUsIGNvbG9yOiB0cnVlIH0gfSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgcHJpc21hLmJvb2ttYXJrLmNvdW50KHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIHVzZXJJZDogc2Vzc2lvbi51c2VyLmlkLFxuICAgICAgICBpc0FyY2hpdmVkOiBmYWxzZSxcbiAgICAgICAgdmlzaXRDb3VudDogMCxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgcHJpc21hLmJvb2ttYXJrLmZpbmRNYW55KHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIHVzZXJJZDogc2Vzc2lvbi51c2VyLmlkLFxuICAgICAgICBpc0FyY2hpdmVkOiBmYWxzZSxcbiAgICAgICAgdmlzaXRDb3VudDogMCxcbiAgICAgIH0sXG4gICAgICB0YWtlOiAxLFxuICAgICAgc2tpcDogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTUpLFxuICAgICAgaW5jbHVkZToge1xuICAgICAgICBjb2xsZWN0aW9uOiB7IHNlbGVjdDogeyBpZDogdHJ1ZSwgbmFtZTogdHJ1ZSwgZW1vamk6IHRydWUsIGNvbG9yOiB0cnVlIH0gfSxcbiAgICAgICAgdGFnczogeyBzZWxlY3Q6IHsgaWQ6IHRydWUsIG5hbWU6IHRydWUsIGNvbG9yOiB0cnVlIH0gfSxcbiAgICAgIH0sXG4gICAgICBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogXCJhc2NcIiB9LFxuICAgIH0pLFxuICBdKTtcblxuICBjb25zdCByYW5kb21VbnZpc2l0ZWQgPSB1bnZpc2l0ZWRDb3VudCA+IDAgPyB1bnZpc2l0ZWRTYW1wbGVbMF0gOiBudWxsO1xuXG4gIGNvbnN0IG91dDogQXJyYXk8UmVjb3JkPHN0cmluZywgdW5rbm93bj4gJiB7IHJlc3VyZmFjZUxhYmVsOiBzdHJpbmcgfT4gPSBbXTtcbiAgaWYgKHllYXJBZ28pIG91dC5wdXNoKHsgLi4ueWVhckFnbywgcmVzdXJmYWNlTGFiZWw6IFwiMSB5ZWFyIGFnb1wiIH0pO1xuICBpZiAobW9udGhBZ28pIG91dC5wdXNoKHsgLi4ubW9udGhBZ28sIHJlc3VyZmFjZUxhYmVsOiBcIjEgbW9udGggYWdvXCIgfSk7XG4gIGlmIChyYW5kb21VbnZpc2l0ZWQgJiYgcmFuZG9tVW52aXNpdGVkLmlkICE9PSB5ZWFyQWdvPy5pZCAmJiByYW5kb21VbnZpc2l0ZWQuaWQgIT09IG1vbnRoQWdvPy5pZCkge1xuICAgIG91dC5wdXNoKHsgLi4ucmFuZG9tVW52aXNpdGVkLCByZXN1cmZhY2VMYWJlbDogXCJVbnZpc2l0ZWRcIiB9KTtcbiAgfVxuXG4gIHR5cGUgQm9va21hcmtXaXRoRGF0ZXMgPSB7IGNyZWF0ZWRBdDogRGF0ZTsgdXBkYXRlZEF0OiBEYXRlOyBsYXN0VmlzaXRlZDogRGF0ZSB8IG51bGw7IHJlbWluZEF0OiBEYXRlIHwgbnVsbCB9O1xuICBjb25zdCBzZXJpYWxpemVkID0gb3V0Lm1hcCgoYikgPT4ge1xuICAgIGNvbnN0IHggPSBiIGFzIHVua25vd24gYXMgQm9va21hcmtXaXRoRGF0ZXMgJiB0eXBlb2YgYjtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uYixcbiAgICAgIGNyZWF0ZWRBdDogeC5jcmVhdGVkQXQudG9JU09TdHJpbmcoKSxcbiAgICAgIHVwZGF0ZWRBdDogeC51cGRhdGVkQXQudG9JU09TdHJpbmcoKSxcbiAgICAgIGxhc3RWaXNpdGVkOiB4Lmxhc3RWaXNpdGVkPy50b0lTT1N0cmluZygpID8/IG51bGwsXG4gICAgICByZW1pbmRBdDogeC5yZW1pbmRBdD8udG9JU09TdHJpbmcoKSA/PyBudWxsLFxuICAgIH07XG4gIH0pO1xuXG4gIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihzZXJpYWxpemVkKTtcbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJnZXRTZXJ2ZXJTZXNzaW9uIiwiYXV0aE9wdGlvbnMiLCJwcmlzbWEiLCJzdWJZZWFycyIsInN1Yk1vbnRocyIsInN0YXJ0T2ZEYXkiLCJlbmRPZkRheSIsIkdFVCIsInNlc3Npb24iLCJ1c2VyIiwiaWQiLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJ0b2RheSIsIkRhdGUiLCJvbmVZZWFyQWdvIiwib25lTW9udGhBZ28iLCJ5ZWFyQWdvIiwibW9udGhBZ28iLCJ1bnZpc2l0ZWRDb3VudCIsInVudmlzaXRlZFNhbXBsZSIsIlByb21pc2UiLCJhbGwiLCJib29rbWFyayIsImZpbmRGaXJzdCIsIndoZXJlIiwidXNlcklkIiwiaXNBcmNoaXZlZCIsImNyZWF0ZWRBdCIsImd0ZSIsImx0ZSIsImluY2x1ZGUiLCJjb2xsZWN0aW9uIiwic2VsZWN0IiwibmFtZSIsImVtb2ppIiwiY29sb3IiLCJ0YWdzIiwiY291bnQiLCJ2aXNpdENvdW50IiwiZmluZE1hbnkiLCJ0YWtlIiwic2tpcCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIm9yZGVyQnkiLCJyYW5kb21VbnZpc2l0ZWQiLCJvdXQiLCJwdXNoIiwicmVzdXJmYWNlTGFiZWwiLCJzZXJpYWxpemVkIiwibWFwIiwiYiIsIngiLCJ0b0lTT1N0cmluZyIsInVwZGF0ZWRBdCIsImxhc3RWaXNpdGVkIiwicmVtaW5kQXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/bookmarks/resurface/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/auth.ts":
/*!*************************!*\
  !*** ./src/lib/auth.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/github */ \"(rsc)/./node_modules/next-auth/providers/github.js\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"(rsc)/./node_modules/@next-auth/prisma-adapter/dist/index.js\");\n/* harmony import */ var _prisma__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./prisma */ \"(rsc)/./src/lib/prisma.ts\");\n\n\n\n\n\nconst authOptions = {\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_3__.PrismaAdapter)(_prisma__WEBPACK_IMPORTED_MODULE_4__.prisma),\n    providers: [\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        }),\n        (0,next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            clientId: process.env.GITHUB_ID,\n            clientSecret: process.env.GITHUB_CLIENT_SECRET\n        }),\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n            name: \"Test account\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                const email = credentials?.email;\n                const password = credentials?.password;\n                if (!email || !password) return null;\n                const testEmail = process.env.TEST_USER_EMAIL || \"test@vault.local\";\n                const testPassword = process.env.TEST_USER_PASSWORD || \"test1234\";\n                if (email !== testEmail || password !== testPassword) {\n                    return null;\n                }\n                let user = await _prisma__WEBPACK_IMPORTED_MODULE_4__.prisma.user.findUnique({\n                    where: {\n                        email: testEmail\n                    }\n                });\n                if (!user) {\n                    user = await _prisma__WEBPACK_IMPORTED_MODULE_4__.prisma.user.create({\n                        data: {\n                            email: testEmail,\n                            name: \"Test User\"\n                        }\n                    });\n                }\n                return {\n                    id: user.id,\n                    email: user.email,\n                    name: user.name ?? \"Test User\"\n                };\n            }\n        })\n    ],\n    session: {\n        strategy: \"jwt\",\n        maxAge: 30 * 24 * 60 * 60\n    },\n    pages: {\n        signIn: \"/auth\"\n    },\n    callbacks: {\n        async jwt ({ token, user }) {\n            if (user) {\n                token.id = user.id;\n                token.email = user.email;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (session.user) {\n                session.user.id = token.id;\n            }\n            return session;\n        }\n    },\n    secret: process.env.NEXTAUTH_SECRET\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2F1dGgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ3dEO0FBQ0E7QUFDVTtBQUNSO0FBQ3hCO0FBRTNCLE1BQU1LLGNBQStCO0lBQzFDQyxTQUFTSCx3RUFBYUEsQ0FBQ0MsMkNBQU1BO0lBQzdCRyxXQUFXO1FBQ1RQLHNFQUFjQSxDQUFDO1lBQ2JRLFVBQVVDLFFBQVFDLEdBQUcsQ0FBQ0MsZ0JBQWdCO1lBQ3RDQyxjQUFjSCxRQUFRQyxHQUFHLENBQUNHLG9CQUFvQjtRQUNoRDtRQUNBWixzRUFBY0EsQ0FBQztZQUNiTyxVQUFVQyxRQUFRQyxHQUFHLENBQUNJLFNBQVM7WUFDL0JGLGNBQWNILFFBQVFDLEdBQUcsQ0FBQ0ssb0JBQW9CO1FBQ2hEO1FBQ0FiLDJFQUFtQkEsQ0FBQztZQUNsQmMsTUFBTTtZQUNOQyxhQUFhO2dCQUNYQyxPQUFPO29CQUFFQyxPQUFPO29CQUFTQyxNQUFNO2dCQUFRO2dCQUN2Q0MsVUFBVTtvQkFBRUYsT0FBTztvQkFBWUMsTUFBTTtnQkFBVztZQUNsRDtZQUNBLE1BQU1FLFdBQVVMLFdBQVc7Z0JBQ3pCLE1BQU1DLFFBQVFELGFBQWFDO2dCQUMzQixNQUFNRyxXQUFXSixhQUFhSTtnQkFDOUIsSUFBSSxDQUFDSCxTQUFTLENBQUNHLFVBQVUsT0FBTztnQkFFaEMsTUFBTUUsWUFBWWQsUUFBUUMsR0FBRyxDQUFDYyxlQUFlLElBQUk7Z0JBQ2pELE1BQU1DLGVBQWVoQixRQUFRQyxHQUFHLENBQUNnQixrQkFBa0IsSUFBSTtnQkFFdkQsSUFBSVIsVUFBVUssYUFBYUYsYUFBYUksY0FBYztvQkFDcEQsT0FBTztnQkFDVDtnQkFFQSxJQUFJRSxPQUFPLE1BQU12QiwyQ0FBTUEsQ0FBQ3VCLElBQUksQ0FBQ0MsVUFBVSxDQUFDO29CQUFFQyxPQUFPO3dCQUFFWCxPQUFPSztvQkFBVTtnQkFBRTtnQkFDdEUsSUFBSSxDQUFDSSxNQUFNO29CQUNUQSxPQUFPLE1BQU12QiwyQ0FBTUEsQ0FBQ3VCLElBQUksQ0FBQ0csTUFBTSxDQUFDO3dCQUM5QkMsTUFBTTs0QkFDSmIsT0FBT0s7NEJBQ1BQLE1BQU07d0JBQ1I7b0JBQ0Y7Z0JBQ0Y7Z0JBRUEsT0FBTztvQkFDTGdCLElBQUlMLEtBQUtLLEVBQUU7b0JBQ1hkLE9BQU9TLEtBQUtULEtBQUs7b0JBQ2pCRixNQUFNVyxLQUFLWCxJQUFJLElBQUk7Z0JBQ3JCO1lBQ0Y7UUFDRjtLQUNEO0lBQ0RpQixTQUFTO1FBQUVDLFVBQVU7UUFBT0MsUUFBUSxLQUFLLEtBQUssS0FBSztJQUFHO0lBQ3REQyxPQUFPO1FBQUVDLFFBQVE7SUFBUTtJQUN6QkMsV0FBVztRQUNULE1BQU1DLEtBQUksRUFBRUMsS0FBSyxFQUFFYixJQUFJLEVBQUU7WUFDdkIsSUFBSUEsTUFBTTtnQkFDUmEsTUFBTVIsRUFBRSxHQUFHTCxLQUFLSyxFQUFFO2dCQUNsQlEsTUFBTXRCLEtBQUssR0FBR1MsS0FBS1QsS0FBSztZQUMxQjtZQUNBLE9BQU9zQjtRQUNUO1FBQ0EsTUFBTVAsU0FBUSxFQUFFQSxPQUFPLEVBQUVPLEtBQUssRUFBRTtZQUM5QixJQUFJUCxRQUFRTixJQUFJLEVBQUU7Z0JBQ2hCTSxRQUFRTixJQUFJLENBQUNLLEVBQUUsR0FBR1EsTUFBTVIsRUFBRTtZQUM1QjtZQUNBLE9BQU9DO1FBQ1Q7SUFDRjtJQUNBUSxRQUFRaEMsUUFBUUMsR0FBRyxDQUFDZ0MsZUFBZTtBQUNyQyxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmF1bHQvLi9zcmMvbGliL2F1dGgudHM/NjY5MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXV0aE9wdGlvbnMgfSBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCI7XG5pbXBvcnQgR2l0SHViUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ2l0aHViXCI7XG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xuaW1wb3J0IHsgUHJpc21hQWRhcHRlciB9IGZyb20gXCJAbmV4dC1hdXRoL3ByaXNtYS1hZGFwdGVyXCI7XG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tIFwiLi9wcmlzbWFcIjtcblxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zOiBOZXh0QXV0aE9wdGlvbnMgPSB7XG4gIGFkYXB0ZXI6IFByaXNtYUFkYXB0ZXIocHJpc21hKSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgR29vZ2xlUHJvdmlkZXIoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQhLFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVCEsXG4gICAgfSksXG4gICAgR2l0SHViUHJvdmlkZXIoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdJVEhVQl9JRCEsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdJVEhVQl9DTElFTlRfU0VDUkVUISxcbiAgICB9KSxcbiAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcbiAgICAgIG5hbWU6IFwiVGVzdCBhY2NvdW50XCIsXG4gICAgICBjcmVkZW50aWFsczoge1xuICAgICAgICBlbWFpbDogeyBsYWJlbDogXCJFbWFpbFwiLCB0eXBlOiBcImVtYWlsXCIgfSxcbiAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6IFwiUGFzc3dvcmRcIiwgdHlwZTogXCJwYXNzd29yZFwiIH0sXG4gICAgICB9LFxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgIGNvbnN0IGVtYWlsID0gY3JlZGVudGlhbHM/LmVtYWlsO1xuICAgICAgICBjb25zdCBwYXNzd29yZCA9IGNyZWRlbnRpYWxzPy5wYXNzd29yZDtcbiAgICAgICAgaWYgKCFlbWFpbCB8fCAhcGFzc3dvcmQpIHJldHVybiBudWxsO1xuXG4gICAgICAgIGNvbnN0IHRlc3RFbWFpbCA9IHByb2Nlc3MuZW52LlRFU1RfVVNFUl9FTUFJTCB8fCBcInRlc3RAdmF1bHQubG9jYWxcIjtcbiAgICAgICAgY29uc3QgdGVzdFBhc3N3b3JkID0gcHJvY2Vzcy5lbnYuVEVTVF9VU0VSX1BBU1NXT1JEIHx8IFwidGVzdDEyMzRcIjtcblxuICAgICAgICBpZiAoZW1haWwgIT09IHRlc3RFbWFpbCB8fCBwYXNzd29yZCAhPT0gdGVzdFBhc3N3b3JkKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBlbWFpbDogdGVzdEVtYWlsIH0gfSk7XG4gICAgICAgIGlmICghdXNlcikge1xuICAgICAgICAgIHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5jcmVhdGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICBlbWFpbDogdGVzdEVtYWlsLFxuICAgICAgICAgICAgICBuYW1lOiBcIlRlc3QgVXNlclwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaWQ6IHVzZXIuaWQsXG4gICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgICAgbmFtZTogdXNlci5uYW1lID8/IFwiVGVzdCBVc2VyXCIsXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBzZXNzaW9uOiB7IHN0cmF0ZWd5OiBcImp3dFwiLCBtYXhBZ2U6IDMwICogMjQgKiA2MCAqIDYwIH0sXG4gIHBhZ2VzOiB7IHNpZ25JbjogXCIvYXV0aFwiIH0sXG4gIGNhbGxiYWNrczoge1xuICAgIGFzeW5jIGp3dCh7IHRva2VuLCB1c2VyIH0pIHtcbiAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgIHRva2VuLmlkID0gdXNlci5pZDtcbiAgICAgICAgdG9rZW4uZW1haWwgPSB1c2VyLmVtYWlsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH0sXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH0pIHtcbiAgICAgIGlmIChzZXNzaW9uLnVzZXIpIHtcbiAgICAgICAgc2Vzc2lvbi51c2VyLmlkID0gdG9rZW4uaWQgYXMgc3RyaW5nO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNlc3Npb247XG4gICAgfSxcbiAgfSxcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVQsXG59O1xuIl0sIm5hbWVzIjpbIkdvb2dsZVByb3ZpZGVyIiwiR2l0SHViUHJvdmlkZXIiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiUHJpc21hQWRhcHRlciIsInByaXNtYSIsImF1dGhPcHRpb25zIiwiYWRhcHRlciIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdPT0dMRV9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJHT09HTEVfQ0xJRU5UX1NFQ1JFVCIsIkdJVEhVQl9JRCIsIkdJVEhVQl9DTElFTlRfU0VDUkVUIiwibmFtZSIsImNyZWRlbnRpYWxzIiwiZW1haWwiLCJsYWJlbCIsInR5cGUiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsInRlc3RFbWFpbCIsIlRFU1RfVVNFUl9FTUFJTCIsInRlc3RQYXNzd29yZCIsIlRFU1RfVVNFUl9QQVNTV09SRCIsInVzZXIiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJjcmVhdGUiLCJkYXRhIiwiaWQiLCJzZXNzaW9uIiwic3RyYXRlZ3kiLCJtYXhBZ2UiLCJwYWdlcyIsInNpZ25JbiIsImNhbGxiYWNrcyIsImp3dCIsInRva2VuIiwic2VjcmV0IiwiTkVYVEFVVEhfU0VDUkVUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/prisma.ts":
/*!***************************!*\
  !*** ./src/lib/prisma.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst globalForPrisma = globalThis;\nconst prisma = globalForPrisma.prisma ?? new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log:  true ? [\n        \"query\",\n        \"error\",\n        \"warn\"\n    ] : 0\n});\nif (true) globalForPrisma.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL3ByaXNtYS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEM7QUFFOUMsTUFBTUMsa0JBQWtCQztBQUVqQixNQUFNQyxTQUNYRixnQkFBZ0JFLE1BQU0sSUFDdEIsSUFBSUgsd0RBQVlBLENBQUM7SUFDZkksS0FBS0MsS0FBc0MsR0FBRztRQUFDO1FBQVM7UUFBUztLQUFPLEdBQUcsQ0FBUztBQUN0RixHQUFHO0FBRUwsSUFBSUEsSUFBcUMsRUFBRUosZ0JBQWdCRSxNQUFNLEdBQUdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmF1bHQvLi9zcmMvbGliL3ByaXNtYS50cz8wMWQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5jb25zdCBnbG9iYWxGb3JQcmlzbWEgPSBnbG9iYWxUaGlzIGFzIHVua25vd24gYXMgeyBwcmlzbWE6IFByaXNtYUNsaWVudCB9O1xuXG5leHBvcnQgY29uc3QgcHJpc21hID1cbiAgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA/P1xuICBuZXcgUHJpc21hQ2xpZW50KHtcbiAgICBsb2c6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIgPyBbXCJxdWVyeVwiLCBcImVycm9yXCIsIFwid2FyblwiXSA6IFtcImVycm9yXCJdLFxuICB9KTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA9IHByaXNtYTtcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJnbG9iYWxGb3JQcmlzbWEiLCJnbG9iYWxUaGlzIiwicHJpc21hIiwibG9nIiwicHJvY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/prisma.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/@babel","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/@next-auth","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva","vendor-chunks/date-fns"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fbookmarks%2Fresurface%2Froute&page=%2Fapi%2Fbookmarks%2Fresurface%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fbookmarks%2Fresurface%2Froute.ts&appDir=%2FUsers%2Fmaniteja19%2FDocuments%2FGitHub%2FAIBookmarking%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmaniteja19%2FDocuments%2FGitHub%2FAIBookmarking&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();