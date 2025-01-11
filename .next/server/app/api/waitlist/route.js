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
exports.id = "app/api/waitlist/route";
exports.ids = ["app/api/waitlist/route"];
exports.modules = {

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

/***/ "async_hooks":
/*!******************************!*\
  !*** external "async_hooks" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("async_hooks");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "node:stream":
/*!******************************!*\
  !*** external "node:stream" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:stream");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/next@14.2.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fwaitlist%2Froute&page=%2Fapi%2Fwaitlist%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fwaitlist%2Froute.ts&appDir=%2FUsers%2Ffranciscoalepalacios%2Flanding-page-diceverse%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Ffranciscoalepalacios%2Flanding-page-diceverse&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@14.2.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fwaitlist%2Froute&page=%2Fapi%2Fwaitlist%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fwaitlist%2Froute.ts&appDir=%2FUsers%2Ffranciscoalepalacios%2Flanding-page-diceverse%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Ffranciscoalepalacios%2Flanding-page-diceverse&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/.pnpm/next@14.2.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/.pnpm/next@14.2.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/.pnpm/next@14.2.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_franciscoalepalacios_landing_page_diceverse_src_app_api_waitlist_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/waitlist/route.ts */ \"(rsc)/./src/app/api/waitlist/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/waitlist/route\",\n        pathname: \"/api/waitlist\",\n        filename: \"route\",\n        bundlePath: \"app/api/waitlist/route\"\n    },\n    resolvedPagePath: \"/Users/franciscoalepalacios/landing-page-diceverse/src/app/api/waitlist/route.ts\",\n    nextConfigOutput,\n    userland: _Users_franciscoalepalacios_landing_page_diceverse_src_app_api_waitlist_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/waitlist/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vbmV4dEAxNC4yLjIzX3JlYWN0LWRvbUAxOC4zLjFfcmVhY3RAMTguMy4xX19yZWFjdEAxOC4zLjEvbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1hcHAtbG9hZGVyLmpzP25hbWU9YXBwJTJGYXBpJTJGd2FpdGxpc3QlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRndhaXRsaXN0JTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGd2FpdGxpc3QlMkZyb3V0ZS50cyZhcHBEaXI9JTJGVXNlcnMlMkZmcmFuY2lzY29hbGVwYWxhY2lvcyUyRmxhbmRpbmctcGFnZS1kaWNldmVyc2UlMkZzcmMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGZnJhbmNpc2NvYWxlcGFsYWNpb3MlMkZsYW5kaW5nLXBhZ2UtZGljZXZlcnNlJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNnQztBQUM3RztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL2RpY2V2ZXJzZS13YWl0bGlzdC8/OWNlZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvZnJhbmNpc2NvYWxlcGFsYWNpb3MvbGFuZGluZy1wYWdlLWRpY2V2ZXJzZS9zcmMvYXBwL2FwaS93YWl0bGlzdC9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvd2FpdGxpc3Qvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS93YWl0bGlzdFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvd2FpdGxpc3Qvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvZnJhbmNpc2NvYWxlcGFsYWNpb3MvbGFuZGluZy1wYWdlLWRpY2V2ZXJzZS9zcmMvYXBwL2FwaS93YWl0bGlzdC9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvd2FpdGxpc3Qvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/next@14.2.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fwaitlist%2Froute&page=%2Fapi%2Fwaitlist%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fwaitlist%2Froute.ts&appDir=%2FUsers%2Ffranciscoalepalacios%2Flanding-page-diceverse%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Ffranciscoalepalacios%2Flanding-page-diceverse&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/waitlist/route.ts":
/*!***************************************!*\
  !*** ./src/app/api/waitlist/route.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/.pnpm/next@14.2.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/api/server.js\");\n/* harmony import */ var resend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! resend */ \"(rsc)/./node_modules/.pnpm/resend@4.0.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/resend/dist/index.mjs\");\n\n\n// Inicializar Resend con la API key directamente para pruebas\nconst resend = new resend__WEBPACK_IMPORTED_MODULE_1__.Resend(\"re_R36eexjG_GpR1CaDe3GooVYgWa8o7uiy4\");\n// ID de la audiencia (audience) en Resend - asegúrate de reemplazar esto con tu ID real\nconst diceverse_AUDIENCE_ID = \"dee127f4-5114-413e-8b7d-d9b24fcbba36\";\nasync function POST(request) {\n    try {\n        const { email, firstName = \"\", lastName = \"\" } = await request.json();\n        console.log(\"Attempting to send email to:\", email); // Para debugging\n        // Primero, enviar el correo electrónico\n        const emailData = await resend.emails.send({\n            from: \"diceverse <onboarding@resend.dev>\",\n            to: [\n                email\n            ],\n            subject: \"Welcome to diceverse Waitlist!\",\n            html: `\n        <div style=\"font-family: Arial, sans-serif; padding: 20px;\">\n          <h1 style=\"color: #6366f1;\">Welcome to diceverse!</h1>\n          <p>Thank you for joining our waitlist. We're thrilled to have you on board!</p>\n          <p>We'll keep you updated on our progress and let you know as soon as we launch.</p>\n          <br/>\n          <p>Best regards,</p>\n          <p>The diceverse Team</p>\n        </div>\n      `\n        });\n        console.log(\"Email sent successfully:\", emailData); // Para debugging\n        // Luego, crear un contacto en Resend\n        const contactData = await resend.contacts.create({\n            email: email,\n            firstName: firstName,\n            lastName: lastName,\n            unsubscribed: false,\n            audienceId: diceverse_AUDIENCE_ID\n        });\n        console.log(\"Contact created successfully:\", contactData); // Para debugging\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true,\n            message: \"Successfully joined waitlist\",\n            emailData,\n            contactData\n        });\n    } catch (error) {\n        console.error(\"Error processing waitlist request:\", error); // Para debugging\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: false,\n            error: \"Failed to join waitlist\",\n            details: error instanceof Error ? error.message : \"Unknown error\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS93YWl0bGlzdC9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMkM7QUFDWDtBQUVoQyw4REFBOEQ7QUFDOUQsTUFBTUUsU0FBUyxJQUFJRCwwQ0FBTUEsQ0FBQztBQUUxQix3RkFBd0Y7QUFDeEYsTUFBTUUsd0JBQXdCO0FBRXZCLGVBQWVDLEtBQUtDLE9BQWdCO0lBQ3pDLElBQUk7UUFDRixNQUFNLEVBQUVDLEtBQUssRUFBRUMsWUFBWSxFQUFFLEVBQUVDLFdBQVcsRUFBRSxFQUFFLEdBQUcsTUFBTUgsUUFBUUksSUFBSTtRQUNuRUMsUUFBUUMsR0FBRyxDQUFDLGdDQUFnQ0wsUUFBUSxpQkFBaUI7UUFFckUsd0NBQXdDO1FBQ3hDLE1BQU1NLFlBQVksTUFBTVYsT0FBT1csTUFBTSxDQUFDQyxJQUFJLENBQUM7WUFDekNDLE1BQU07WUFDTkMsSUFBSTtnQkFBQ1Y7YUFBTTtZQUNYVyxTQUFTO1lBQ1RDLE1BQU0sQ0FBQzs7Ozs7Ozs7O01BU1AsQ0FBQztRQUNIO1FBQ0FSLFFBQVFDLEdBQUcsQ0FBQyw0QkFBNEJDLFlBQVksaUJBQWlCO1FBRXJFLHFDQUFxQztRQUNyQyxNQUFNTyxjQUFjLE1BQU1qQixPQUFPa0IsUUFBUSxDQUFDQyxNQUFNLENBQUM7WUFDL0NmLE9BQU9BO1lBQ1BDLFdBQVdBO1lBQ1hDLFVBQVVBO1lBQ1ZjLGNBQWM7WUFDZEMsWUFBWXBCO1FBQ2Q7UUFDQU8sUUFBUUMsR0FBRyxDQUFDLGlDQUFpQ1EsY0FBYyxpQkFBaUI7UUFFNUUsT0FBT25CLHFEQUFZQSxDQUFDUyxJQUFJLENBQUM7WUFDdkJlLFNBQVM7WUFDVEMsU0FBUztZQUNUYjtZQUNBTztRQUNGO0lBQ0YsRUFBRSxPQUFPTyxPQUFPO1FBQ2RoQixRQUFRZ0IsS0FBSyxDQUFDLHNDQUFzQ0EsUUFBUSxpQkFBaUI7UUFDN0UsT0FBTzFCLHFEQUFZQSxDQUFDUyxJQUFJLENBQ3RCO1lBQ0VlLFNBQVM7WUFDVEUsT0FBTztZQUNQQyxTQUFTRCxpQkFBaUJFLFFBQVFGLE1BQU1ELE9BQU8sR0FBRztRQUNwRCxHQUNBO1lBQUVJLFFBQVE7UUFBSTtJQUVsQjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGljZXZlcnNlLXdhaXRsaXN0Ly4vc3JjL2FwcC9hcGkvd2FpdGxpc3Qvcm91dGUudHM/ZmUzZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XG5pbXBvcnQgeyBSZXNlbmQgfSBmcm9tICdyZXNlbmQnO1xuXG4vLyBJbmljaWFsaXphciBSZXNlbmQgY29uIGxhIEFQSSBrZXkgZGlyZWN0YW1lbnRlIHBhcmEgcHJ1ZWJhc1xuY29uc3QgcmVzZW5kID0gbmV3IFJlc2VuZCgncmVfUjM2ZWV4akdfR3BSMUNhRGUzR29vVllnV2E4bzd1aXk0Jyk7XG5cbi8vIElEIGRlIGxhIGF1ZGllbmNpYSAoYXVkaWVuY2UpIGVuIFJlc2VuZCAtIGFzZWfDunJhdGUgZGUgcmVlbXBsYXphciBlc3RvIGNvbiB0dSBJRCByZWFsXG5jb25zdCBkaWNldmVyc2VfQVVESUVOQ0VfSUQgPSAnZGVlMTI3ZjQtNTExNC00MTNlLThiN2QtZDliMjRmY2JiYTM2JztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdDogUmVxdWVzdCkge1xuICB0cnkge1xuICAgIGNvbnN0IHsgZW1haWwsIGZpcnN0TmFtZSA9ICcnLCBsYXN0TmFtZSA9ICcnIH0gPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcbiAgICBjb25zb2xlLmxvZygnQXR0ZW1wdGluZyB0byBzZW5kIGVtYWlsIHRvOicsIGVtYWlsKTsgLy8gUGFyYSBkZWJ1Z2dpbmdcblxuICAgIC8vIFByaW1lcm8sIGVudmlhciBlbCBjb3JyZW8gZWxlY3Ryw7NuaWNvXG4gICAgY29uc3QgZW1haWxEYXRhID0gYXdhaXQgcmVzZW5kLmVtYWlscy5zZW5kKHtcbiAgICAgIGZyb206ICdkaWNldmVyc2UgPG9uYm9hcmRpbmdAcmVzZW5kLmRldj4nLFxuICAgICAgdG86IFtlbWFpbF0sXG4gICAgICBzdWJqZWN0OiAnV2VsY29tZSB0byBkaWNldmVyc2UgV2FpdGxpc3QhJyxcbiAgICAgIGh0bWw6IGBcbiAgICAgICAgPGRpdiBzdHlsZT1cImZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjsgcGFkZGluZzogMjBweDtcIj5cbiAgICAgICAgICA8aDEgc3R5bGU9XCJjb2xvcjogIzYzNjZmMTtcIj5XZWxjb21lIHRvIGRpY2V2ZXJzZSE8L2gxPlxuICAgICAgICAgIDxwPlRoYW5rIHlvdSBmb3Igam9pbmluZyBvdXIgd2FpdGxpc3QuIFdlJ3JlIHRocmlsbGVkIHRvIGhhdmUgeW91IG9uIGJvYXJkITwvcD5cbiAgICAgICAgICA8cD5XZSdsbCBrZWVwIHlvdSB1cGRhdGVkIG9uIG91ciBwcm9ncmVzcyBhbmQgbGV0IHlvdSBrbm93IGFzIHNvb24gYXMgd2UgbGF1bmNoLjwvcD5cbiAgICAgICAgICA8YnIvPlxuICAgICAgICAgIDxwPkJlc3QgcmVnYXJkcyw8L3A+XG4gICAgICAgICAgPHA+VGhlIGRpY2V2ZXJzZSBUZWFtPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIGAsXG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coJ0VtYWlsIHNlbnQgc3VjY2Vzc2Z1bGx5OicsIGVtYWlsRGF0YSk7IC8vIFBhcmEgZGVidWdnaW5nXG5cbiAgICAvLyBMdWVnbywgY3JlYXIgdW4gY29udGFjdG8gZW4gUmVzZW5kXG4gICAgY29uc3QgY29udGFjdERhdGEgPSBhd2FpdCByZXNlbmQuY29udGFjdHMuY3JlYXRlKHtcbiAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgIGZpcnN0TmFtZTogZmlyc3ROYW1lLFxuICAgICAgbGFzdE5hbWU6IGxhc3ROYW1lLFxuICAgICAgdW5zdWJzY3JpYmVkOiBmYWxzZSxcbiAgICAgIGF1ZGllbmNlSWQ6IGRpY2V2ZXJzZV9BVURJRU5DRV9JRCxcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZygnQ29udGFjdCBjcmVhdGVkIHN1Y2Nlc3NmdWxseTonLCBjb250YWN0RGF0YSk7IC8vIFBhcmEgZGVidWdnaW5nXG5cbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIG1lc3NhZ2U6ICdTdWNjZXNzZnVsbHkgam9pbmVkIHdhaXRsaXN0JyxcbiAgICAgIGVtYWlsRGF0YSxcbiAgICAgIGNvbnRhY3REYXRhXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgcHJvY2Vzc2luZyB3YWl0bGlzdCByZXF1ZXN0OicsIGVycm9yKTsgLy8gUGFyYSBkZWJ1Z2dpbmdcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcjogJ0ZhaWxlZCB0byBqb2luIHdhaXRsaXN0JyxcbiAgICAgICAgZGV0YWlsczogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnVW5rbm93biBlcnJvcidcbiAgICAgIH0sXG4gICAgICB7IHN0YXR1czogNTAwIH1cbiAgICApO1xuICB9XG59Il0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIlJlc2VuZCIsInJlc2VuZCIsImRpY2V2ZXJzZV9BVURJRU5DRV9JRCIsIlBPU1QiLCJyZXF1ZXN0IiwiZW1haWwiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZW1haWxEYXRhIiwiZW1haWxzIiwic2VuZCIsImZyb20iLCJ0byIsInN1YmplY3QiLCJodG1sIiwiY29udGFjdERhdGEiLCJjb250YWN0cyIsImNyZWF0ZSIsInVuc3Vic2NyaWJlZCIsImF1ZGllbmNlSWQiLCJzdWNjZXNzIiwibWVzc2FnZSIsImVycm9yIiwiZGV0YWlscyIsIkVycm9yIiwic3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/waitlist/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next@14.2.23_react-dom@18.3.1_react@18.3.1__react@18.3.1","vendor-chunks/resend@4.0.1_react-dom@18.3.1_react@18.3.1__react@18.3.1"], () => (__webpack_exec__("(rsc)/./node_modules/.pnpm/next@14.2.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fwaitlist%2Froute&page=%2Fapi%2Fwaitlist%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fwaitlist%2Froute.ts&appDir=%2FUsers%2Ffranciscoalepalacios%2Flanding-page-diceverse%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Ffranciscoalepalacios%2Flanding-page-diceverse&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();