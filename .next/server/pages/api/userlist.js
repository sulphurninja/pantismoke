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
exports.id = "pages/api/userlist";
exports.ids = ["pages/api/userlist"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/userlist.js":
/*!*******************************!*\
  !*** ./pages/api/userlist.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst uri = \"mongodb+srv://aditya4sure:RiseAbove@panti.u95z5p8.mongodb.net/test\";\nasync function handler(req, res) {\n    const client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri);\n    try {\n        await client.connect();\n        const collection = client.db(\"test\").collection(\"users\");\n        switch(req.method){\n            case \"GET\":\n                const users = await collection.find().toArray();\n                res.status(200).json(users);\n                break;\n            case \"PUT\":\n                const { id  } = req.query;\n                const { userName , role  } = req.body;\n                await collection.updateOne({\n                    _id: (0,mongodb__WEBPACK_IMPORTED_MODULE_0__.ObjectId)(id)\n                }, {\n                    $set: {\n                        userName: userName,\n                        role: role\n                    }\n                });\n                res.status(200).json({\n                    message: \"User updated successfully\"\n                });\n                break;\n            case \"DELETE\":\n                const userId = req.query.id;\n                await collection.deleteOne({\n                    _id: (0,mongodb__WEBPACK_IMPORTED_MODULE_0__.ObjectId)(userId)\n                });\n                res.status(200).json({\n                    message: \"User deleted successfully\"\n                });\n                break;\n            default:\n                res.setHeader(\"Allow\", [\n                    \"GET\",\n                    \"PUT\",\n                    \"DELETE\"\n                ]);\n                res.status(405).end(`Method ${req.method} Not Allowed`);\n        }\n    } catch (error) {\n        console.error(error);\n        res.status(500).json({\n            message: \"Internal Server Error\"\n        });\n    } finally{\n        await client.close();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlcmxpc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStDO0FBRS9DLE1BQU1FLE1BQU1DLG9FQUF1QjtBQUVwQixlQUFlRyxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxNQUFNQyxTQUFTLElBQUlULGdEQUFXQSxDQUFDRTtJQUUvQixJQUFJO1FBQ0YsTUFBTU8sT0FBT0MsT0FBTztRQUVwQixNQUFNQyxhQUFhRixPQUFPRyxFQUFFLENBQUMsUUFBUUQsVUFBVSxDQUFDO1FBRWhELE9BQVFKLElBQUlNLE1BQU07WUFDaEIsS0FBSztnQkFDSCxNQUFNQyxRQUFRLE1BQU1ILFdBQVdJLElBQUksR0FBR0MsT0FBTztnQkFDN0NSLElBQUlTLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNKO2dCQUNyQixLQUFLO1lBQ1AsS0FBSztnQkFDSCxNQUFNLEVBQUVLLEdBQUUsRUFBRSxHQUFHWixJQUFJYSxLQUFLO2dCQUN4QixNQUFNLEVBQUVDLFNBQVEsRUFBRUMsS0FBSSxFQUFFLEdBQUdmLElBQUlnQixJQUFJO2dCQUNuQyxNQUFNWixXQUFXYSxTQUFTLENBQ3hCO29CQUFFQyxLQUFLeEIsaURBQVFBLENBQUNrQjtnQkFBSSxHQUNwQjtvQkFBRU8sTUFBTTt3QkFBRUwsVUFBVUE7d0JBQVVDLE1BQU1BO29CQUFLO2dCQUFFO2dCQUU3Q2QsSUFBSVMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztvQkFBRVMsU0FBUztnQkFBNEI7Z0JBQzVELEtBQUs7WUFDUCxLQUFLO2dCQUNILE1BQU1DLFNBQVNyQixJQUFJYSxLQUFLLENBQUNELEVBQUU7Z0JBQzNCLE1BQU1SLFdBQVdrQixTQUFTLENBQUM7b0JBQUVKLEtBQUt4QixpREFBUUEsQ0FBQzJCO2dCQUFRO2dCQUNuRHBCLElBQUlTLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7b0JBQUVTLFNBQVM7Z0JBQTRCO2dCQUM1RCxLQUFLO1lBQ1A7Z0JBQ0VuQixJQUFJc0IsU0FBUyxDQUFDLFNBQVM7b0JBQUM7b0JBQU87b0JBQU87aUJBQVM7Z0JBQy9DdEIsSUFBSVMsTUFBTSxDQUFDLEtBQUtjLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRXhCLElBQUlNLE1BQU0sQ0FBQyxZQUFZLENBQUM7UUFDMUQ7SUFDRixFQUFFLE9BQU9tQixPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQ0E7UUFDZHhCLElBQUlTLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRVMsU0FBUztRQUF3QjtJQUMxRCxTQUFVO1FBQ1IsTUFBTWxCLE9BQU95QixLQUFLO0lBQ3BCO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3BhZ2VzL2FwaS91c2VybGlzdC5qcz9kMzFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50LCBPYmplY3RJZCB9IGZyb20gJ21vbmdvZGInXHJcblxyXG5jb25zdCB1cmkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSTDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBjb25zdCBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpKVxyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgY2xpZW50LmNvbm5lY3QoKVxyXG5cclxuICAgIGNvbnN0IGNvbGxlY3Rpb24gPSBjbGllbnQuZGIoJ3Rlc3QnKS5jb2xsZWN0aW9uKCd1c2VycycpXHJcblxyXG4gICAgc3dpdGNoIChyZXEubWV0aG9kKSB7XHJcbiAgICAgIGNhc2UgJ0dFVCc6XHJcbiAgICAgICAgY29uc3QgdXNlcnMgPSBhd2FpdCBjb2xsZWN0aW9uLmZpbmQoKS50b0FycmF5KClcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih1c2VycylcclxuICAgICAgICBicmVha1xyXG4gICAgICBjYXNlICdQVVQnOlxyXG4gICAgICAgIGNvbnN0IHsgaWQgfSA9IHJlcS5xdWVyeVxyXG4gICAgICAgIGNvbnN0IHsgdXNlck5hbWUsIHJvbGUgfSA9IHJlcS5ib2R5XHJcbiAgICAgICAgYXdhaXQgY29sbGVjdGlvbi51cGRhdGVPbmUoXHJcbiAgICAgICAgICB7IF9pZDogT2JqZWN0SWQoaWQpIH0sXHJcbiAgICAgICAgICB7ICRzZXQ6IHsgdXNlck5hbWU6IHVzZXJOYW1lLCByb2xlOiByb2xlIH0gfVxyXG4gICAgICAgIClcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6ICdVc2VyIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5JyB9KVxyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIGNhc2UgJ0RFTEVURSc6XHJcbiAgICAgICAgY29uc3QgdXNlcklkID0gcmVxLnF1ZXJ5LmlkXHJcbiAgICAgICAgYXdhaXQgY29sbGVjdGlvbi5kZWxldGVPbmUoeyBfaWQ6IE9iamVjdElkKHVzZXJJZCkgfSlcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6ICdVc2VyIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5JyB9KVxyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmVzLnNldEhlYWRlcignQWxsb3cnLCBbJ0dFVCcsICdQVVQnLCAnREVMRVRFJ10pXHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDUpLmVuZChgTWV0aG9kICR7cmVxLm1ldGhvZH0gTm90IEFsbG93ZWRgKVxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiAnSW50ZXJuYWwgU2VydmVyIEVycm9yJyB9KVxyXG4gIH0gZmluYWxseSB7XHJcbiAgICBhd2FpdCBjbGllbnQuY2xvc2UoKVxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJPYmplY3RJZCIsInVyaSIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSTCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJjbGllbnQiLCJjb25uZWN0IiwiY29sbGVjdGlvbiIsImRiIiwibWV0aG9kIiwidXNlcnMiLCJmaW5kIiwidG9BcnJheSIsInN0YXR1cyIsImpzb24iLCJpZCIsInF1ZXJ5IiwidXNlck5hbWUiLCJyb2xlIiwiYm9keSIsInVwZGF0ZU9uZSIsIl9pZCIsIiRzZXQiLCJtZXNzYWdlIiwidXNlcklkIiwiZGVsZXRlT25lIiwic2V0SGVhZGVyIiwiZW5kIiwiZXJyb3IiLCJjb25zb2xlIiwiY2xvc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/userlist.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/userlist.js"));
module.exports = __webpack_exports__;

})();