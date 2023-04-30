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
exports.id = "pages/api/auth/accessToken";
exports.ids = ["pages/api/auth/accessToken"];
exports.modules = {

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./models/userModel.js":
/*!*****************************!*\
  !*** ./models/userModel.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    userName: {\n        type: String,\n        required: true\n    },\n    password: {\n        type: String,\n        required: true\n    },\n    role: {\n        type: String,\n        default: \"user\"\n    },\n    root: {\n        type: Boolean,\n        default: false\n    }\n});\nlet Dataset = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.user) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"user\", userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dataset);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvdXNlck1vZGVsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQjtBQUUvQixNQUFNQyxhQUFhLElBQUlELHdEQUFlLENBQUM7SUFDbkNHLFVBQVM7UUFDTEMsTUFBS0M7UUFDTEMsVUFBUyxJQUFJO0lBQ2pCO0lBQ0FDLFVBQVM7UUFDTEgsTUFBS0M7UUFDTEMsVUFBUyxJQUFJO0lBQ2pCO0lBQ0FFLE1BQUs7UUFDREosTUFBS0M7UUFDTEksU0FBUztJQUNiO0lBQ0FDLE1BQUs7UUFDRE4sTUFBTU87UUFDTkYsU0FBUSxLQUFLO0lBQ2pCO0FBQ0o7QUFFQSxJQUFJRyxVQUFVWiw2REFBb0IsSUFBSUEscURBQWMsQ0FBQyxRQUFRQztBQUM3RCxpRUFBZVcsT0FBT0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL21vZGVscy91c2VyTW9kZWwuanM/OTYxNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnXG5cbmNvbnN0IHVzZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgICB1c2VyTmFtZTp7XG4gICAgICAgIHR5cGU6U3RyaW5nLFxuICAgICAgICByZXF1aXJlZDp0cnVlXG4gICAgfSxcbiAgICBwYXNzd29yZDp7XG4gICAgICAgIHR5cGU6U3RyaW5nLFxuICAgICAgICByZXF1aXJlZDp0cnVlXG4gICAgfSxcbiAgICByb2xlOntcbiAgICAgICAgdHlwZTpTdHJpbmcsXG4gICAgICAgIGRlZmF1bHQ6ICd1c2VyJ1xuICAgIH0sXG4gICAgcm9vdDp7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGRlZmF1bHQ6ZmFsc2VcbiAgICB9XG59KVxuXG5sZXQgRGF0YXNldCA9IG1vbmdvb3NlLm1vZGVscy51c2VyIHx8IG1vbmdvb3NlLm1vZGVsKCd1c2VyJywgdXNlclNjaGVtYSlcbmV4cG9ydCBkZWZhdWx0IERhdGFzZXQiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJ1c2VyU2NoZW1hIiwiU2NoZW1hIiwidXNlck5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJwYXNzd29yZCIsInJvbGUiLCJkZWZhdWx0Iiwicm9vdCIsIkJvb2xlYW4iLCJEYXRhc2V0IiwibW9kZWxzIiwidXNlciIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./models/userModel.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/accessToken.js":
/*!***************************************!*\
  !*** ./pages/api/auth/accessToken.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_connectDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/connectDB */ \"(api)/./utils/connectDB.js\");\n/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/userModel */ \"(api)/./models/userModel.js\");\n/* harmony import */ var _utils_generateToken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/generateToken */ \"(api)/./utils/generateToken.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n(0,_utils_connectDB__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    try {\n        const rf_token = req.cookies.refreshtoken;\n        if (!rf_token) return res.status(400).json({\n            err: \"Login Now!\"\n        });\n        const result = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default().verify(rf_token, \"S%=VY!nj3rkK@?VZ_v?bQVFzhz^rSA#vKgJ4Rb23j_XCjQXU?fY9AmA-MgJWHae9f*Xz%P*x$WaGT*7c8HM67B-R%Z_zc\");\n        if (!result) return res.status(400).json({\n            err: \"Incorrect tokennnn or  it has expiredd!!\"\n        });\n        const user = await _models_userModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findById(result.id);\n        if (!user) return res.status(400).json({\n            err: \"This user does not exist, ok bye!\"\n        });\n        const access_token = (0,_utils_generateToken__WEBPACK_IMPORTED_MODULE_2__.createAccessToken)({\n            id: user._id\n        });\n        res.json({\n            access_token,\n            user: {\n                userName: user.userName,\n                role: user.role,\n                root: user.root\n            }\n        });\n    } catch (err) {\n        return res.status(500).json({\n            err: err.message\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9hY2Nlc3NUb2tlbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBaUQ7QUFDSjtBQUN1QztBQUN0RDtBQUU5QkEsNERBQVNBO0FBRVQsaUVBQWUsT0FBT0ssS0FBS0MsTUFBUTtJQUMvQixJQUFJO1FBQ0EsTUFBTUMsV0FBV0YsSUFBSUcsT0FBTyxDQUFDQyxZQUFZO1FBQ3pDLElBQUcsQ0FBQ0YsVUFBVSxPQUFPRCxJQUFJSSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUNDLEtBQUk7UUFBWTtRQUMzRCxNQUFNQyxTQUFTVCwwREFBVSxDQUFDRyxVQUFVUSwrRkFBZ0M7UUFDcEUsSUFBRyxDQUFDRixRQUFRLE9BQU9QLElBQUlJLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBQ0MsS0FBSTtRQUEwQztRQUN2RixNQUFNTSxPQUFRLE1BQU1qQixrRUFBYyxDQUFDWSxPQUFPTyxFQUFFO1FBQzVDLElBQUcsQ0FBQ0YsTUFBTSxPQUFPWixJQUFJSSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUNDLEtBQUk7UUFBbUM7UUFDOUUsTUFBTVMsZUFBZW5CLHVFQUFpQkEsQ0FBQztZQUFDa0IsSUFBSUYsS0FBS0ksR0FBRztRQUFBO1FBQ3BEaEIsSUFBSUssSUFBSSxDQUFDO1lBQ0xVO1lBQ0FILE1BQUs7Z0JBQ0RLLFVBQVVMLEtBQUtLLFFBQVE7Z0JBQ3ZCQyxNQUFNTixLQUFLTSxJQUFJO2dCQUNmQyxNQUFNUCxLQUFLTyxJQUFJO1lBQ25CO1FBQ0o7SUFDSixFQUFFLE9BQU1iLEtBQUs7UUFDVCxPQUFPTixJQUFJSSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUNDLEtBQUlBLElBQUljLE9BQU87UUFBQTtJQUNoRDtBQUNKLEdBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9wYWdlcy9hcGkvYXV0aC9hY2Nlc3NUb2tlbi5qcz85ZjRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25uZWN0REIgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2Nvbm5lY3REQlwiO1xuaW1wb3J0IFVzZXJzIGZyb20gJy4uLy4uLy4uL21vZGVscy91c2VyTW9kZWwnXG5pbXBvcnQgeyBjcmVhdGVBY2Nlc3NUb2tlbiwgY3JlYXRlUmVmcmVzaFRva2VuIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZ2VuZXJhdGVUb2tlbidcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xuXG5jb25uZWN0REIoKVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZl90b2tlbiA9IHJlcS5jb29raWVzLnJlZnJlc2h0b2tlblxuICAgICAgICBpZighcmZfdG9rZW4pIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyOidMb2dpbiBOb3chJ30pXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGp3dC52ZXJpZnkocmZfdG9rZW4sIHByb2Nlc3MuZW52LlJFRlJFU0hfVE9LRU5fU0VDUkVUKVxuICAgICAgICBpZighcmVzdWx0KSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2VycjonSW5jb3JyZWN0IHRva2Vubm5uIG9yICBpdCBoYXMgZXhwaXJlZGQhISd9KVxuICAgICAgICBjb25zdCB1c2VyICA9IGF3YWl0IFVzZXJzLmZpbmRCeUlkKHJlc3VsdC5pZCkgICBcbiAgICAgICAgaWYoIXVzZXIpIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyOidUaGlzIHVzZXIgZG9lcyBub3QgZXhpc3QsIG9rIGJ5ZSEnfSlcbiAgICAgICAgY29uc3QgYWNjZXNzX3Rva2VuID0gY3JlYXRlQWNjZXNzVG9rZW4oe2lkOiB1c2VyLl9pZH0pXG4gICAgICAgIHJlcy5qc29uKHtcbiAgICAgICAgICAgIGFjY2Vzc190b2tlbixcbiAgICAgICAgICAgIHVzZXI6e1xuICAgICAgICAgICAgICAgIHVzZXJOYW1lOiB1c2VyLnVzZXJOYW1lLFxuICAgICAgICAgICAgICAgIHJvbGU6IHVzZXIucm9sZSxcbiAgICAgICAgICAgICAgICByb290OiB1c2VyLnJvb3RcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9IGNhdGNoKGVycikge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oe2VycjplcnIubWVzc2FnZX0pXG4gICAgfVxufVxuIl0sIm5hbWVzIjpbImNvbm5lY3REQiIsIlVzZXJzIiwiY3JlYXRlQWNjZXNzVG9rZW4iLCJjcmVhdGVSZWZyZXNoVG9rZW4iLCJqd3QiLCJyZXEiLCJyZXMiLCJyZl90b2tlbiIsImNvb2tpZXMiLCJyZWZyZXNodG9rZW4iLCJzdGF0dXMiLCJqc29uIiwiZXJyIiwicmVzdWx0IiwidmVyaWZ5IiwicHJvY2VzcyIsImVudiIsIlJFRlJFU0hfVE9LRU5fU0VDUkVUIiwidXNlciIsImZpbmRCeUlkIiwiaWQiLCJhY2Nlc3NfdG9rZW4iLCJfaWQiLCJ1c2VyTmFtZSIsInJvbGUiLCJyb290IiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/accessToken.js\n");

/***/ }),

/***/ "(api)/./utils/connectDB.js":
/*!****************************!*\
  !*** ./utils/connectDB.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectDB = ()=>{\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections[0].readyState)) {\n        console.log(\"Already connected Biatch!\");\n        return;\n    }\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default().set(\"strictQuery\", false);\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(\"mongodb+srv://aditya4sure:RiseAbove@panti.u95z5p8.mongodb.net/test\", {\n        useNewUrlParser: true,\n        useUnifiedTopology: true\n    }, (err)=>{\n        if (err) throw err;\n        console.log(\"Connected to Mongodb bitch!\");\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9jb25uZWN0REIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStCO0FBRS9CLE1BQU1DLFlBQVksSUFBSztJQUN2QixJQUFJRCwyRUFBa0MsRUFBQztRQUNuQ0ksUUFBUUMsR0FBRyxDQUFDO1FBQ1o7SUFDSixDQUFDO0lBQ0RMLG1EQUFZLENBQUMsZUFBZSxLQUFLO0lBQ2pDQSx1REFBZ0IsQ0FBQ1Esb0VBQXVCLEVBQUM7UUFDckNHLGlCQUFpQixJQUFJO1FBQ3JCQyxvQkFBb0IsSUFBSTtJQUM1QixHQUFHQyxDQUFBQSxNQUFNO1FBQ0wsSUFBR0EsS0FBSyxNQUFNQSxJQUFJO1FBQ2xCVCxRQUFRQyxHQUFHLENBQUM7SUFDaEI7QUFDQTtBQUVBLGlFQUFlSixTQUFTQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vdXRpbHMvY29ubmVjdERCLmpzP2M2MTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJ1xuXG5jb25zdCBjb25uZWN0REIgPSAoKSA9PntcbmlmIChtb25nb29zZS5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlKXtcbiAgICBjb25zb2xlLmxvZygnQWxyZWFkeSBjb25uZWN0ZWQgQmlhdGNoIScpXG4gICAgcmV0dXJuO1xufVxubW9uZ29vc2Uuc2V0KFwic3RyaWN0UXVlcnlcIiwgZmFsc2UpO1xubW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT0RCX1VSTCx7XG4gICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSBcbn0sIGVyciA9PntcbiAgICBpZihlcnIpIHRocm93IGVycjtcbiAgICBjb25zb2xlLmxvZyhcIkNvbm5lY3RlZCB0byBNb25nb2RiIGJpdGNoIVwiKVxufSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdERCIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29ubmVjdERCIiwiY29ubmVjdGlvbnMiLCJyZWFkeVN0YXRlIiwiY29uc29sZSIsImxvZyIsInNldCIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkwiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJlcnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./utils/connectDB.js\n");

/***/ }),

/***/ "(api)/./utils/generateToken.js":
/*!********************************!*\
  !*** ./utils/generateToken.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createAccessToken\": () => (/* binding */ createAccessToken),\n/* harmony export */   \"createRefreshToken\": () => (/* binding */ createRefreshToken)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n\nconst createAccessToken = (payload)=>{\n    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign(payload, \"2MqS&V^f_&UudgstXMbnd3LTdC_zkSzBYVB#Q=9%Rjm&fFBW6zTE3^s646k\", {\n        expiresIn: \"15m\"\n    });\n};\nconst createRefreshToken = (payload)=>{\n    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign(payload, \"S%=VY!nj3rkK@?VZ_v?bQVFzhz^rSA#vKgJ4Rb23j_XCjQXU?fY9AmA-MgJWHae9f*Xz%P*x$WaGT*7c8HM67B-R%Z_zc\", {\n        expiresIn: \"7d\"\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9nZW5lcmF0ZVRva2VuLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBOEI7QUFFdkIsTUFBTUMsb0JBQW9CLENBQUNDLFVBQVc7SUFDekMsT0FBT0Ysd0RBQVEsQ0FBQ0UsU0FBU0UsNkRBQStCLEVBQUU7UUFBQ0csV0FBVztJQUFLO0FBQy9FLEVBQUM7QUFFTSxNQUFNQyxxQkFBcUIsQ0FBQ04sVUFBVztJQUMxQyxPQUFPRix3REFBUSxDQUFDRSxTQUFTRSwrRkFBZ0MsRUFBRTtRQUFDRyxXQUFXO0lBQUk7QUFDL0UsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3V0aWxzL2dlbmVyYXRlVG9rZW4uanM/ZGQ0MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbidcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUFjY2Vzc1Rva2VuID0gKHBheWxvYWQpID0+e1xuICAgIHJldHVybiBqd3Quc2lnbihwYXlsb2FkLCBwcm9jZXNzLmVudi5BQ0NFU1NfVE9LRU5fU0VDUkVULCB7ZXhwaXJlc0luOiAnMTVtJ30pXG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVSZWZyZXNoVG9rZW4gPSAocGF5bG9hZCkgPT57XG4gICAgcmV0dXJuIGp3dC5zaWduKHBheWxvYWQsIHByb2Nlc3MuZW52LlJFRlJFU0hfVE9LRU5fU0VDUkVULCB7ZXhwaXJlc0luOiAnN2QnfSlcbn0iXSwibmFtZXMiOlsiand0IiwiY3JlYXRlQWNjZXNzVG9rZW4iLCJwYXlsb2FkIiwic2lnbiIsInByb2Nlc3MiLCJlbnYiLCJBQ0NFU1NfVE9LRU5fU0VDUkVUIiwiZXhwaXJlc0luIiwiY3JlYXRlUmVmcmVzaFRva2VuIiwiUkVGUkVTSF9UT0tFTl9TRUNSRVQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./utils/generateToken.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/accessToken.js"));
module.exports = __webpack_exports__;

})();