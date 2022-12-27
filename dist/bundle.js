/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("let Task = (title, description, date, priority) => {\r\n  \r\n   return{\r\n        title: title,\r\n        description: description,\r\n        date: date,\r\n        priority: priority,\r\n    }\r\n    \r\n  }\r\n  \r\n  let task1 = Task(\"Pocistio\", \"govna\", 22.7, \"high\");\r\n  console.log(task1);\r\n\r\n\r\n  let Projects = (title, description) => {\r\n\r\n     return{\r\n        title: title,\r\n        description: description,\r\n        arr: [\"test\"]\r\n     }\r\n\r\n\r\n\r\n  }\r\n  \r\n  let project = Projects(\"Poslovni\", \"Ovde sve vezano za poso\");\r\n  console.log(project);\r\n\r\n// Odavde krece za dugmice etc\r\n\r\n\r\n\r\n  let closeButton = document.getElementsByClassName(\"close\")[0];\r\n  let closeButton2 = document.getElementsByClassName(\"close\")[1];\r\n  \r\n  let modal = document.getElementsByClassName(\"modal-bck\")[0];\r\n  \r\n  let projectWindow = document.getElementById(\"project-form\");  \r\n  let taskWindow = document.getElementsByClassName(\"modal-cnt\")[0];\r\n  \r\n \r\n\r\n\r\n\r\n  closeButton.onclick = function(){\r\nmodal.style.display = \"none\";\r\nprojectWindow.style.display = \"none\";\r\ntaskWindow.style.display = \"none\";\r\n\r\n  }\r\n\r\n  closeButton2.onclick = function(){\r\n   modal.style.display = \"none\";\r\n   taskWindow.style.display = \"none\";\r\n   projectWindow.style.display = \"none\";\r\n     }\r\n\r\n\r\n   let addProjectButton = document.getElementById(\"button1\");\r\n   addProjectButton.onclick = function(){\r\n      modal.style.display = \"flex\";\r\n      projectWindow.style.display = \"flex\";\r\n   }\r\n\r\n   let addTaskButton = document.getElementById(\"button2\");\r\n   addTaskButton.onclick = function(){\r\n      modal.style.display = \"flex\";\r\n      taskWindow.style.display = \"flex\";\r\n   }\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;