/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/

// Odavde krece za dugmice etc

console.log("radi li lajv?2");

  let closeButton = document.getElementsByClassName("close")[0];
  let closeButton2 = document.getElementsByClassName("close")[1];
  
  let modal = document.getElementsByClassName("modal-bck")[0];
  
  let projectWindow = document.getElementById("project-form");  
  let taskWindow = document.getElementsByClassName("modal-cnt")[0];
  
 



closeButton.onclick = function(){
modal.style.display = "none";
projectWindow.style.display = "none";
taskWindow.style.display = "none";

  }

  closeButton2.onclick = function(){
   modal.style.display = "none";
   taskWindow.style.display = "none";
   projectWindow.style.display = "none";
     }


   let addProjectButton = document.getElementById("button1");
   addProjectButton.onclick = function(){
      modal.style.display = "flex";
      projectWindow.style.display = "flex";
   }

   let addTaskButton = document.getElementById("button2");
   addTaskButton.onclick = function(){
      modal.style.display = "flex";
      taskWindow.style.display = "flex";
   }




// Funkcionalnost dugmica

let projectList = [];




/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8vIE9kYXZkZSBrcmVjZSB6YSBkdWdtaWNlIGV0Y1xyXG5cclxuY29uc29sZS5sb2coXCJyYWRpIGxpIGxhanY/MlwiKTtcclxuXHJcbiAgbGV0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNsb3NlXCIpWzBdO1xyXG4gIGxldCBjbG9zZUJ1dHRvbjIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2xvc2VcIilbMV07XHJcbiAgXHJcbiAgbGV0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1vZGFsLWJja1wiKVswXTtcclxuICBcclxuICBsZXQgcHJvamVjdFdpbmRvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1mb3JtXCIpOyAgXHJcbiAgbGV0IHRhc2tXaW5kb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibW9kYWwtY250XCIpWzBdO1xyXG4gIFxyXG4gXHJcblxyXG5cclxuXHJcbmNsb3NlQnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbigpe1xyXG5tb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbnByb2plY3RXaW5kb3cuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG50YXNrV2luZG93LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHJcbiAgfVxyXG5cclxuICBjbG9zZUJ1dHRvbjIub25jbGljayA9IGZ1bmN0aW9uKCl7XHJcbiAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgdGFza1dpbmRvdy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgIHByb2plY3RXaW5kb3cuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgIH1cclxuXHJcblxyXG4gICBsZXQgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uMVwiKTtcclxuICAgYWRkUHJvamVjdEJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24oKXtcclxuICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICBwcm9qZWN0V2luZG93LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgfVxyXG5cclxuICAgbGV0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbjJcIik7XHJcbiAgIGFkZFRhc2tCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgdGFza1dpbmRvdy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgIH1cclxuXHJcblxyXG5cclxuXHJcbi8vIEZ1bmtjaW9uYWxub3N0IGR1Z21pY2FcclxuXHJcbmxldCBwcm9qZWN0TGlzdCA9IFtdO1xyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=