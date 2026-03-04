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
exports.id = "app/api/bookmarks/[id]/route";
exports.ids = ["app/api/bookmarks/[id]/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fbookmarks%2F%5Bid%5D%2Froute&page=%2Fapi%2Fbookmarks%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fbookmarks%2F%5Bid%5D%2Froute.ts&appDir=%2FUsers%2Fmaniteja19%2FDocuments%2FGitHub%2FAIBookmarking%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmaniteja19%2FDocuments%2FGitHub%2FAIBookmarking&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fbookmarks%2F%5Bid%5D%2Froute&page=%2Fapi%2Fbookmarks%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fbookmarks%2F%5Bid%5D%2Froute.ts&appDir=%2FUsers%2Fmaniteja19%2FDocuments%2FGitHub%2FAIBookmarking%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmaniteja19%2FDocuments%2FGitHub%2FAIBookmarking&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_maniteja19_Documents_GitHub_AIBookmarking_src_app_api_bookmarks_id_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/bookmarks/[id]/route.ts */ \"(rsc)/./src/app/api/bookmarks/[id]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/bookmarks/[id]/route\",\n        pathname: \"/api/bookmarks/[id]\",\n        filename: \"route\",\n        bundlePath: \"app/api/bookmarks/[id]/route\"\n    },\n    resolvedPagePath: \"/Users/maniteja19/Documents/GitHub/AIBookmarking/src/app/api/bookmarks/[id]/route.ts\",\n    nextConfigOutput,\n    userland: _Users_maniteja19_Documents_GitHub_AIBookmarking_src_app_api_bookmarks_id_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/bookmarks/[id]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZib29rbWFya3MlMkYlNUJpZCU1RCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGYm9va21hcmtzJTJGJTVCaWQlNUQlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZib29rbWFya3MlMkYlNUJpZCU1RCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRm1hbml0ZWphMTklMkZEb2N1bWVudHMlMkZHaXRIdWIlMkZBSUJvb2ttYXJraW5nJTJGc3JjJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRm1hbml0ZWphMTklMkZEb2N1bWVudHMlMkZHaXRIdWIlMkZBSUJvb2ttYXJraW5nJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNvQztBQUNqSDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL3ZhdWx0Lz8wMzc1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy9tYW5pdGVqYTE5L0RvY3VtZW50cy9HaXRIdWIvQUlCb29rbWFya2luZy9zcmMvYXBwL2FwaS9ib29rbWFya3MvW2lkXS9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYm9va21hcmtzL1tpZF0vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9ib29rbWFya3MvW2lkXVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYm9va21hcmtzL1tpZF0vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvbWFuaXRlamExOS9Eb2N1bWVudHMvR2l0SHViL0FJQm9va21hcmtpbmcvc3JjL2FwcC9hcGkvYm9va21hcmtzL1tpZF0vcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2Jvb2ttYXJrcy9baWRdL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fbookmarks%2F%5Bid%5D%2Froute&page=%2Fapi%2Fbookmarks%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fbookmarks%2F%5Bid%5D%2Froute.ts&appDir=%2FUsers%2Fmaniteja19%2FDocuments%2FGitHub%2FAIBookmarking%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmaniteja19%2FDocuments%2FGitHub%2FAIBookmarking&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/bookmarks/[id]/route.ts":
/*!*********************************************!*\
  !*** ./src/app/api/bookmarks/[id]/route.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   PATCH: () => (/* binding */ PATCH)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./src/lib/auth.ts\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./src/lib/prisma.ts\");\n\n\n\n\nasync function PATCH(request, { params }) {\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n    if (!session?.user?.id) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Unauthorized\"\n        }, {\n            status: 401\n        });\n    }\n    const { id } = await params;\n    const existing = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.bookmark.findFirst({\n        where: {\n            id,\n            userId: session.user.id\n        }\n    });\n    if (!existing) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Not found\"\n        }, {\n            status: 404\n        });\n    }\n    let body;\n    try {\n        body = await request.json();\n    } catch  {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Invalid JSON\"\n        }, {\n            status: 400\n        });\n    }\n    const allowed = [\n        \"collectionId\",\n        \"isPinned\",\n        \"isFavorite\",\n        \"isArchived\",\n        \"isRead\",\n        \"readProgress\",\n        \"note\",\n        \"highlight\",\n        \"remindAt\"\n    ];\n    const data = {};\n    for (const key of allowed){\n        if (key in body) data[key] = body[key];\n    }\n    const updated = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.bookmark.update({\n        where: {\n            id\n        },\n        data,\n        include: {\n            collection: {\n                select: {\n                    id: true,\n                    name: true,\n                    emoji: true,\n                    color: true\n                }\n            },\n            tags: {\n                select: {\n                    id: true,\n                    name: true,\n                    color: true\n                }\n            }\n        }\n    });\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(updated);\n}\nasync function GET(_request, { params }) {\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n    if (!session?.user?.id) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Unauthorized\"\n        }, {\n            status: 401\n        });\n    }\n    const { id } = await params;\n    const bookmark = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.bookmark.findFirst({\n        where: {\n            id,\n            userId: session.user.id\n        },\n        include: {\n            collection: {\n                select: {\n                    id: true,\n                    name: true,\n                    emoji: true,\n                    color: true\n                }\n            },\n            tags: {\n                select: {\n                    id: true,\n                    name: true,\n                    color: true\n                }\n            }\n        }\n    });\n    if (!bookmark) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Not found\"\n        }, {\n            status: 404\n        });\n    }\n    let keyPoints = [];\n    if (Array.isArray(bookmark.keyPoints)) {\n        keyPoints = bookmark.keyPoints;\n    } else if (typeof bookmark.keyPoints === \"string\") {\n        try {\n            const parsed = JSON.parse(bookmark.keyPoints);\n            if (Array.isArray(parsed)) keyPoints = parsed;\n        } catch  {\n            keyPoints = [];\n        }\n    }\n    const out = {\n        ...bookmark,\n        keyPoints\n    };\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(out);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9ib29rbWFya3MvW2lkXS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTJDO0FBQ0U7QUFDSjtBQUNIO0FBRS9CLGVBQWVJLE1BQ3BCQyxPQUFnQixFQUNoQixFQUFFQyxNQUFNLEVBQXVDO0lBRS9DLE1BQU1DLFVBQVUsTUFBTU4sMkRBQWdCQSxDQUFDQyxrREFBV0E7SUFDbEQsSUFBSSxDQUFDSyxTQUFTQyxNQUFNQyxJQUFJO1FBQ3RCLE9BQU9ULHFEQUFZQSxDQUFDVSxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFlLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQ3BFO0lBRUEsTUFBTSxFQUFFSCxFQUFFLEVBQUUsR0FBRyxNQUFNSDtJQUNyQixNQUFNTyxXQUFXLE1BQU1WLCtDQUFNQSxDQUFDVyxRQUFRLENBQUNDLFNBQVMsQ0FBQztRQUMvQ0MsT0FBTztZQUFFUDtZQUFJUSxRQUFRVixRQUFRQyxJQUFJLENBQUNDLEVBQUU7UUFBQztJQUN2QztJQUNBLElBQUksQ0FBQ0ksVUFBVTtRQUNiLE9BQU9iLHFEQUFZQSxDQUFDVSxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFZLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQ2pFO0lBRUEsSUFBSU07SUFDSixJQUFJO1FBQ0ZBLE9BQU8sTUFBTWIsUUFBUUssSUFBSTtJQUMzQixFQUFFLE9BQU07UUFDTixPQUFPVixxREFBWUEsQ0FBQ1UsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBZSxHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUNwRTtJQUVBLE1BQU1PLFVBQVU7UUFDZDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7S0FDRDtJQUNELE1BQU1DLE9BQWdDLENBQUM7SUFDdkMsS0FBSyxNQUFNQyxPQUFPRixRQUFTO1FBQ3pCLElBQUlFLE9BQU9ILE1BQU1FLElBQUksQ0FBQ0MsSUFBSSxHQUFHSCxJQUFJLENBQUNHLElBQUk7SUFDeEM7SUFFQSxNQUFNQyxVQUFVLE1BQU1uQiwrQ0FBTUEsQ0FBQ1csUUFBUSxDQUFDUyxNQUFNLENBQUM7UUFDM0NQLE9BQU87WUFBRVA7UUFBRztRQUNaVztRQUNBSSxTQUFTO1lBQ1BDLFlBQVk7Z0JBQUVDLFFBQVE7b0JBQUVqQixJQUFJO29CQUFNa0IsTUFBTTtvQkFBTUMsT0FBTztvQkFBTUMsT0FBTztnQkFBSztZQUFFO1lBQ3pFQyxNQUFNO2dCQUFFSixRQUFRO29CQUFFakIsSUFBSTtvQkFBTWtCLE1BQU07b0JBQU1FLE9BQU87Z0JBQUs7WUFBRTtRQUN4RDtJQUNGO0lBRUEsT0FBTzdCLHFEQUFZQSxDQUFDVSxJQUFJLENBQUNZO0FBQzNCO0FBRU8sZUFBZVMsSUFDcEJDLFFBQWlCLEVBQ2pCLEVBQUUxQixNQUFNLEVBQXVDO0lBRS9DLE1BQU1DLFVBQVUsTUFBTU4sMkRBQWdCQSxDQUFDQyxrREFBV0E7SUFDbEQsSUFBSSxDQUFDSyxTQUFTQyxNQUFNQyxJQUFJO1FBQ3RCLE9BQU9ULHFEQUFZQSxDQUFDVSxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFlLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQ3BFO0lBRUEsTUFBTSxFQUFFSCxFQUFFLEVBQUUsR0FBRyxNQUFNSDtJQUNyQixNQUFNUSxXQUFXLE1BQU1YLCtDQUFNQSxDQUFDVyxRQUFRLENBQUNDLFNBQVMsQ0FBQztRQUMvQ0MsT0FBTztZQUFFUDtZQUFJUSxRQUFRVixRQUFRQyxJQUFJLENBQUNDLEVBQUU7UUFBQztRQUNyQ2UsU0FBUztZQUNQQyxZQUFZO2dCQUFFQyxRQUFRO29CQUFFakIsSUFBSTtvQkFBTWtCLE1BQU07b0JBQU1DLE9BQU87b0JBQU1DLE9BQU87Z0JBQUs7WUFBRTtZQUN6RUMsTUFBTTtnQkFBRUosUUFBUTtvQkFBRWpCLElBQUk7b0JBQU1rQixNQUFNO29CQUFNRSxPQUFPO2dCQUFLO1lBQUU7UUFDeEQ7SUFDRjtJQUNBLElBQUksQ0FBQ2YsVUFBVTtRQUNiLE9BQU9kLHFEQUFZQSxDQUFDVSxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFZLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQ2pFO0lBRUEsSUFBSXFCLFlBQXNCLEVBQUU7SUFDNUIsSUFBSUMsTUFBTUMsT0FBTyxDQUFDLFNBQWtCRixTQUFTLEdBQUc7UUFDOUNBLFlBQVksU0FBa0JBLFNBQVM7SUFDekMsT0FBTyxJQUFJLE9BQU8sU0FBa0JBLFNBQVMsS0FBSyxVQUFVO1FBQzFELElBQUk7WUFDRixNQUFNRyxTQUFTQyxLQUFLQyxLQUFLLENBQUMsU0FBa0JMLFNBQVM7WUFDckQsSUFBSUMsTUFBTUMsT0FBTyxDQUFDQyxTQUFTSCxZQUFZRztRQUN6QyxFQUFFLE9BQU07WUFDTkgsWUFBWSxFQUFFO1FBQ2hCO0lBQ0Y7SUFFQSxNQUFNTSxNQUFNO1FBQ1YsR0FBR3pCLFFBQVE7UUFDWG1CO0lBQ0Y7SUFFQSxPQUFPakMscURBQVlBLENBQUNVLElBQUksQ0FBQzZCO0FBQzNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmF1bHQvLi9zcmMvYXBwL2FwaS9ib29rbWFya3MvW2lkXS9yb3V0ZS50cz82YTc4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSBcIkAvbGliL2F1dGhcIjtcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBBVENIKFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICB7IHBhcmFtcyB9OiB7IHBhcmFtczogUHJvbWlzZTx7IGlkOiBzdHJpbmcgfT4gfVxuKSB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKGF1dGhPcHRpb25zKTtcbiAgaWYgKCFzZXNzaW9uPy51c2VyPy5pZCkge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIlVuYXV0aG9yaXplZFwiIH0sIHsgc3RhdHVzOiA0MDEgfSk7XG4gIH1cblxuICBjb25zdCB7IGlkIH0gPSBhd2FpdCBwYXJhbXM7XG4gIGNvbnN0IGV4aXN0aW5nID0gYXdhaXQgcHJpc21hLmJvb2ttYXJrLmZpbmRGaXJzdCh7XG4gICAgd2hlcmU6IHsgaWQsIHVzZXJJZDogc2Vzc2lvbi51c2VyLmlkIH0sXG4gIH0pO1xuICBpZiAoIWV4aXN0aW5nKSB7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiTm90IGZvdW5kXCIgfSwgeyBzdGF0dXM6IDQwNCB9KTtcbiAgfVxuXG4gIGxldCBib2R5OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcbiAgdHJ5IHtcbiAgICBib2R5ID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIkludmFsaWQgSlNPTlwiIH0sIHsgc3RhdHVzOiA0MDAgfSk7XG4gIH1cblxuICBjb25zdCBhbGxvd2VkID0gW1xuICAgIFwiY29sbGVjdGlvbklkXCIsXG4gICAgXCJpc1Bpbm5lZFwiLFxuICAgIFwiaXNGYXZvcml0ZVwiLFxuICAgIFwiaXNBcmNoaXZlZFwiLFxuICAgIFwiaXNSZWFkXCIsXG4gICAgXCJyZWFkUHJvZ3Jlc3NcIixcbiAgICBcIm5vdGVcIixcbiAgICBcImhpZ2hsaWdodFwiLFxuICAgIFwicmVtaW5kQXRcIixcbiAgXTtcbiAgY29uc3QgZGF0YTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7fTtcbiAgZm9yIChjb25zdCBrZXkgb2YgYWxsb3dlZCkge1xuICAgIGlmIChrZXkgaW4gYm9keSkgZGF0YVtrZXldID0gYm9keVtrZXldO1xuICB9XG5cbiAgY29uc3QgdXBkYXRlZCA9IGF3YWl0IHByaXNtYS5ib29rbWFyay51cGRhdGUoe1xuICAgIHdoZXJlOiB7IGlkIH0sXG4gICAgZGF0YSxcbiAgICBpbmNsdWRlOiB7XG4gICAgICBjb2xsZWN0aW9uOiB7IHNlbGVjdDogeyBpZDogdHJ1ZSwgbmFtZTogdHJ1ZSwgZW1vamk6IHRydWUsIGNvbG9yOiB0cnVlIH0gfSxcbiAgICAgIHRhZ3M6IHsgc2VsZWN0OiB7IGlkOiB0cnVlLCBuYW1lOiB0cnVlLCBjb2xvcjogdHJ1ZSB9IH0sXG4gICAgfSxcbiAgfSk7XG5cbiAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHVwZGF0ZWQpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKFxuICBfcmVxdWVzdDogUmVxdWVzdCxcbiAgeyBwYXJhbXMgfTogeyBwYXJhbXM6IFByb21pc2U8eyBpZDogc3RyaW5nIH0+IH1cbikge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucyk7XG4gIGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJVbmF1dGhvcml6ZWRcIiB9LCB7IHN0YXR1czogNDAxIH0pO1xuICB9XG5cbiAgY29uc3QgeyBpZCB9ID0gYXdhaXQgcGFyYW1zO1xuICBjb25zdCBib29rbWFyayA9IGF3YWl0IHByaXNtYS5ib29rbWFyay5maW5kRmlyc3Qoe1xuICAgIHdoZXJlOiB7IGlkLCB1c2VySWQ6IHNlc3Npb24udXNlci5pZCB9LFxuICAgIGluY2x1ZGU6IHtcbiAgICAgIGNvbGxlY3Rpb246IHsgc2VsZWN0OiB7IGlkOiB0cnVlLCBuYW1lOiB0cnVlLCBlbW9qaTogdHJ1ZSwgY29sb3I6IHRydWUgfSB9LFxuICAgICAgdGFnczogeyBzZWxlY3Q6IHsgaWQ6IHRydWUsIG5hbWU6IHRydWUsIGNvbG9yOiB0cnVlIH0gfSxcbiAgICB9LFxuICB9KTtcbiAgaWYgKCFib29rbWFyaykge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIk5vdCBmb3VuZFwiIH0sIHsgc3RhdHVzOiA0MDQgfSk7XG4gIH1cblxuICBsZXQga2V5UG9pbnRzOiBzdHJpbmdbXSA9IFtdO1xuICBpZiAoQXJyYXkuaXNBcnJheSgoYm9va21hcmsgYXMgYW55KS5rZXlQb2ludHMpKSB7XG4gICAga2V5UG9pbnRzID0gKGJvb2ttYXJrIGFzIGFueSkua2V5UG9pbnRzIGFzIHN0cmluZ1tdO1xuICB9IGVsc2UgaWYgKHR5cGVvZiAoYm9va21hcmsgYXMgYW55KS5rZXlQb2ludHMgPT09IFwic3RyaW5nXCIpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcGFyc2VkID0gSlNPTi5wYXJzZSgoYm9va21hcmsgYXMgYW55KS5rZXlQb2ludHMgYXMgc3RyaW5nKTtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHBhcnNlZCkpIGtleVBvaW50cyA9IHBhcnNlZCBhcyBzdHJpbmdbXTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIGtleVBvaW50cyA9IFtdO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG91dCA9IHtcbiAgICAuLi5ib29rbWFyayxcbiAgICBrZXlQb2ludHMsXG4gIH07XG5cbiAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKG91dCk7XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiZ2V0U2VydmVyU2Vzc2lvbiIsImF1dGhPcHRpb25zIiwicHJpc21hIiwiUEFUQ0giLCJyZXF1ZXN0IiwicGFyYW1zIiwic2Vzc2lvbiIsInVzZXIiLCJpZCIsImpzb24iLCJlcnJvciIsInN0YXR1cyIsImV4aXN0aW5nIiwiYm9va21hcmsiLCJmaW5kRmlyc3QiLCJ3aGVyZSIsInVzZXJJZCIsImJvZHkiLCJhbGxvd2VkIiwiZGF0YSIsImtleSIsInVwZGF0ZWQiLCJ1cGRhdGUiLCJpbmNsdWRlIiwiY29sbGVjdGlvbiIsInNlbGVjdCIsIm5hbWUiLCJlbW9qaSIsImNvbG9yIiwidGFncyIsIkdFVCIsIl9yZXF1ZXN0Iiwia2V5UG9pbnRzIiwiQXJyYXkiLCJpc0FycmF5IiwicGFyc2VkIiwiSlNPTiIsInBhcnNlIiwib3V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/bookmarks/[id]/route.ts\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/@babel","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/@next-auth","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fbookmarks%2F%5Bid%5D%2Froute&page=%2Fapi%2Fbookmarks%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fbookmarks%2F%5Bid%5D%2Froute.ts&appDir=%2FUsers%2Fmaniteja19%2FDocuments%2FGitHub%2FAIBookmarking%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmaniteja19%2FDocuments%2FGitHub%2FAIBookmarking&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();