/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_example__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/example */ \"./src/scripts/example.js\");\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n\n\n\n/* \r\n    ROADMAP:\r\n        - Render Map\r\n        - Render Player\r\n        - Map Collision\r\n        - Render Enemies\r\n*/\n\nconst game = new _scripts_game__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"main\");\nconst canvas = document.getElementById(\"center\");\nconst ctx = canvas.getContext(\"2d\");\ncanvas.width = 400;\ncanvas.height = 400;\nconst playerImage = new Image();\nplayerImage.src = \"./assets/player.png\";\nctx.fillStyle = \"black\";\nctx.strokeStyle = \"black\";\nctx.fillRect(0, 0, canvas.width, canvas.height);\nctx.stroke();\n\n// PLAYER MODEL CODE DISABLE UNTIL MAP IS RENDERED\n// class Sprite {\n//     constructor(options) {\n//         this.position = options.position\n//     }\n// }\n\n// const keys = {\n//     up: {\n//         pressed: false\n//     },\n//     down: {\n//         pressed: false\n//     },\n//     left: {\n//         pressed: false\n//     },\n//     right: {\n//         pressed: false\n//     }\n// }\n// playerImage.onload = () => {\n//     ctx.drawImage(\n//         playerImage,\n//         0,\n//         0,\n//         playerImage.width / 17,\n//         playerImage.height,\n//         5,\n//         canvas.height - playerImage.height,\n//         playerImage.width / 17,\n//         playerImage.height\n//         );\n// }\n\n// function animate() {\n//     window.requestAnimationFrame(animate)\n// }\n// animate();\n\n// window.addEventListener('keydown', (e) => {\n//     switch (e.key) {\n//         case \"ArrowUp\":\n//             keys.up.pressed = true;\n//         break;\n//         case \"ArrowDown\":\n//             keys.down.pressed = true;\n//         break;\n//         case \"ArrowLeft\":\n//             keys.left.pressed = true;\n//         break;\n//         case \"ArrowRight\":\n//             keys.right.pressed = true;\n//         break;\n//     }\n// })\n// window.addEventListener('keyup', (e) => {\n//     switch (e.key) {\n//         case \"ArrowUp\":\n//             keys.up.pressed = false;\n//         break;\n//         case \"ArrowDown\":\n//             keys.down.pressed = false;\n//         break;\n//         case \"ArrowLeft\":\n//             keys.left.pressed = false;\n//         break;\n//         case \"ArrowRight\":\n//             keys.right.pressed = false;\n//         break;\n//     }\n// })\n\n/*  \r\n    map and combat will be one canvas\r\n    https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas\r\n*///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQXdDO0FBQ047O0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1FLElBQUksR0FBRyxJQUFJRCxxREFBSSxDQUFDLE1BQU0sQ0FBQztBQUM3QixNQUFNRSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFFBQVEsQ0FBQztBQUNoRCxNQUFNQyxHQUFHLEdBQUdILE1BQU0sQ0FBQ0ksVUFBVSxDQUFDLElBQUksQ0FBQztBQUNuQ0osTUFBTSxDQUFDSyxLQUFLLEdBQUcsR0FBRztBQUNsQkwsTUFBTSxDQUFDTSxNQUFNLEdBQUcsR0FBRztBQUVuQixNQUFNQyxXQUFXLEdBQUcsSUFBSUMsS0FBSyxFQUFFO0FBQy9CRCxXQUFXLENBQUNFLEdBQUcsR0FBRyxxQkFBcUI7QUFFdkNOLEdBQUcsQ0FBQ08sU0FBUyxHQUFHLE9BQU87QUFDdkJQLEdBQUcsQ0FBQ1EsV0FBVyxHQUFHLE9BQU87QUFDekJSLEdBQUcsQ0FBQ1MsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUVaLE1BQU0sQ0FBQ0ssS0FBSyxFQUFFTCxNQUFNLENBQUNNLE1BQU0sQ0FBQztBQUMvQ0gsR0FBRyxDQUFDVSxNQUFNLEVBQUU7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9uYW1lLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV4YW1wbGUgZnJvbSBcIi4vc2NyaXB0cy9leGFtcGxlXCI7XHJcbmltcG9ydCBHYW1lIGZyb20gXCIuL3NjcmlwdHMvZ2FtZVwiO1xyXG5cclxuLyogXHJcbiAgICBST0FETUFQOlxyXG4gICAgICAgIC0gUmVuZGVyIE1hcFxyXG4gICAgICAgIC0gUmVuZGVyIFBsYXllclxyXG4gICAgICAgIC0gTWFwIENvbGxpc2lvblxyXG4gICAgICAgIC0gUmVuZGVyIEVuZW1pZXNcclxuKi9cclxuXHJcbmNvbnN0IGdhbWUgPSBuZXcgR2FtZShcIm1haW5cIik7XHJcbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2VudGVyXCIpO1xyXG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5jYW52YXMud2lkdGggPSA0MDA7XHJcbmNhbnZhcy5oZWlnaHQgPSA0MDA7XHJcblxyXG5jb25zdCBwbGF5ZXJJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG5wbGF5ZXJJbWFnZS5zcmMgPSBcIi4vYXNzZXRzL3BsYXllci5wbmdcIjtcclxuXHJcbmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XHJcbmN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcclxuY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbmN0eC5zdHJva2UoKTtcclxuXHJcbi8vIFBMQVlFUiBNT0RFTCBDT0RFIERJU0FCTEUgVU5USUwgTUFQIElTIFJFTkRFUkVEXHJcbi8vIGNsYXNzIFNwcml0ZSB7XHJcbi8vICAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbi8vICAgICAgICAgdGhpcy5wb3NpdGlvbiA9IG9wdGlvbnMucG9zaXRpb25cclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gY29uc3Qga2V5cyA9IHtcclxuLy8gICAgIHVwOiB7XHJcbi8vICAgICAgICAgcHJlc3NlZDogZmFsc2VcclxuLy8gICAgIH0sXHJcbi8vICAgICBkb3duOiB7XHJcbi8vICAgICAgICAgcHJlc3NlZDogZmFsc2VcclxuLy8gICAgIH0sXHJcbi8vICAgICBsZWZ0OiB7XHJcbi8vICAgICAgICAgcHJlc3NlZDogZmFsc2VcclxuLy8gICAgIH0sXHJcbi8vICAgICByaWdodDoge1xyXG4vLyAgICAgICAgIHByZXNzZWQ6IGZhbHNlXHJcbi8vICAgICB9XHJcbi8vIH1cclxuLy8gcGxheWVySW1hZ2Uub25sb2FkID0gKCkgPT4ge1xyXG4vLyAgICAgY3R4LmRyYXdJbWFnZShcclxuLy8gICAgICAgICBwbGF5ZXJJbWFnZSxcclxuLy8gICAgICAgICAwLFxyXG4vLyAgICAgICAgIDAsXHJcbi8vICAgICAgICAgcGxheWVySW1hZ2Uud2lkdGggLyAxNyxcclxuLy8gICAgICAgICBwbGF5ZXJJbWFnZS5oZWlnaHQsXHJcbi8vICAgICAgICAgNSxcclxuLy8gICAgICAgICBjYW52YXMuaGVpZ2h0IC0gcGxheWVySW1hZ2UuaGVpZ2h0LFxyXG4vLyAgICAgICAgIHBsYXllckltYWdlLndpZHRoIC8gMTcsXHJcbi8vICAgICAgICAgcGxheWVySW1hZ2UuaGVpZ2h0XHJcbi8vICAgICAgICAgKTtcclxuLy8gfVxyXG5cclxuLy8gZnVuY3Rpb24gYW5pbWF0ZSgpIHtcclxuLy8gICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSlcclxuLy8gfVxyXG4vLyBhbmltYXRlKCk7XHJcblxyXG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XHJcbi8vICAgICBzd2l0Y2ggKGUua2V5KSB7XHJcbi8vICAgICAgICAgY2FzZSBcIkFycm93VXBcIjpcclxuLy8gICAgICAgICAgICAga2V5cy51cC5wcmVzc2VkID0gdHJ1ZTtcclxuLy8gICAgICAgICBicmVhaztcclxuLy8gICAgICAgICBjYXNlIFwiQXJyb3dEb3duXCI6XHJcbi8vICAgICAgICAgICAgIGtleXMuZG93bi5wcmVzc2VkID0gdHJ1ZTtcclxuLy8gICAgICAgICBicmVhaztcclxuLy8gICAgICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XHJcbi8vICAgICAgICAgICAgIGtleXMubGVmdC5wcmVzc2VkID0gdHJ1ZTtcclxuLy8gICAgICAgICBicmVhaztcclxuLy8gICAgICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxyXG4vLyAgICAgICAgICAgICBrZXlzLnJpZ2h0LnByZXNzZWQgPSB0cnVlO1xyXG4vLyAgICAgICAgIGJyZWFrO1xyXG4vLyAgICAgfVxyXG4vLyB9KVxyXG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4ge1xyXG4vLyAgICAgc3dpdGNoIChlLmtleSkge1xyXG4vLyAgICAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XHJcbi8vICAgICAgICAgICAgIGtleXMudXAucHJlc3NlZCA9IGZhbHNlO1xyXG4vLyAgICAgICAgIGJyZWFrO1xyXG4vLyAgICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcclxuLy8gICAgICAgICAgICAga2V5cy5kb3duLnByZXNzZWQgPSBmYWxzZTtcclxuLy8gICAgICAgICBicmVhaztcclxuLy8gICAgICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XHJcbi8vICAgICAgICAgICAgIGtleXMubGVmdC5wcmVzc2VkID0gZmFsc2U7XHJcbi8vICAgICAgICAgYnJlYWs7XHJcbi8vICAgICAgICAgY2FzZSBcIkFycm93UmlnaHRcIjpcclxuLy8gICAgICAgICAgICAga2V5cy5yaWdodC5wcmVzc2VkID0gZmFsc2U7XHJcbi8vICAgICAgICAgYnJlYWs7XHJcbi8vICAgICB9XHJcbi8vIH0pXHJcblxyXG4vKiAgXHJcbiAgICBtYXAgYW5kIGNvbWJhdCB3aWxsIGJlIG9uZSBjYW52YXNcclxuICAgIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DYW52YXNfQVBJL1R1dG9yaWFsL09wdGltaXppbmdfY2FudmFzXHJcbiovXHJcbiJdLCJuYW1lcyI6WyJFeGFtcGxlIiwiR2FtZSIsImdhbWUiLCJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsIndpZHRoIiwiaGVpZ2h0IiwicGxheWVySW1hZ2UiLCJJbWFnZSIsInNyYyIsImZpbGxTdHlsZSIsInN0cm9rZVN0eWxlIiwiZmlsbFJlY3QiLCJzdHJva2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/example.js":
/*!********************************!*\
  !*** ./src/scripts/example.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Example {\n  constructor(ele) {\n    this.ele = ele;\n    this.ele.innerHTML = \"<h1>It's ALIVE!!!</h1>\";\n    this.ele.addEventListener(\"click\", this.handleClick.bind(this));\n  }\n  handleClick() {\n    this.ele.children[0].innerText = \"Ouch!\";\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Example);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9leGFtcGxlLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxPQUFPLENBQUM7RUFDVkMsV0FBVyxDQUFDQyxHQUFHLEVBQUM7SUFDWixJQUFJLENBQUNBLEdBQUcsR0FBR0EsR0FBRztJQUNkLElBQUksQ0FBQ0EsR0FBRyxDQUFDQyxTQUFTLEdBQUcsd0JBQXdCO0lBRTdDLElBQUksQ0FBQ0QsR0FBRyxDQUFDRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDQyxXQUFXLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUNuRTtFQUVBRCxXQUFXLEdBQUU7SUFDVCxJQUFJLENBQUNILEdBQUcsQ0FBQ0ssUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEdBQUcsT0FBTztFQUM1QztBQUNKO0FBRUEsK0RBQWVSLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub25hbWUvLi9zcmMvc2NyaXB0cy9leGFtcGxlLmpzP2ZjZWUiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRXhhbXBsZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihlbGUpe1xyXG4gICAgICAgIHRoaXMuZWxlID0gZWxlO1xyXG4gICAgICAgIHRoaXMuZWxlLmlubmVySFRNTCA9IFwiPGgxPkl0J3MgQUxJVkUhISE8L2gxPlwiXHJcblxyXG4gICAgICAgIHRoaXMuZWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNsaWNrKCl7XHJcbiAgICAgICAgdGhpcy5lbGUuY2hpbGRyZW5bMF0uaW5uZXJUZXh0ID0gXCJPdWNoIVwiO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeGFtcGxlO1xyXG4iXSwibmFtZXMiOlsiRXhhbXBsZSIsImNvbnN0cnVjdG9yIiwiZWxlIiwiaW5uZXJIVE1MIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUNsaWNrIiwiYmluZCIsImNoaWxkcmVuIiwiaW5uZXJUZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/example.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Game {\n  constructor(state) {\n    this.state = state;\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxJQUFJLENBQUM7RUFDUEMsV0FBVyxDQUFDQyxLQUFLLEVBQUU7SUFDZixJQUFJLENBQUNBLEtBQUssR0FBR0EsS0FBSztFQUN0QjtBQUNKO0FBRUEsK0RBQWVGLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub25hbWUvLi9zcmMvc2NyaXB0cy9nYW1lLmpzP2NkYzAiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgR2FtZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihzdGF0ZSkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FtZTsiXSwibmFtZXMiOlsiR2FtZSIsImNvbnN0cnVjdG9yIiwic3RhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub25hbWUvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;