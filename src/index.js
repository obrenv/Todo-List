

// Odavde krece za dugmice etc
  let closeButton = document.getElementsByClassName("close")[0];
  let closeButton2 = document.getElementsByClassName("close")[1];
  
  let modal = document.getElementsByClassName("modal-bck")[0];
  
  let projectWindow = document.getElementById("project-form");  
  let taskWindow = document.getElementsByClassName("modal-cnt")[0];
  
 


//Get data from project form
let projectTitle = document.getElementById("titleProject");
let projectDescription = document.getElementById("descriptionProject");
let projectButton = document.getElementById("projectSubmit");



projectButton.onclick = function(){
  let projectM = Projects(projectTitle.value, projectDescription.value);
  projectList.push(projectM);
  modal.style.display = "none";
projectWindow.style.display = "none";
taskWindow.style.display = "none";
renderProjects();
}

console.log(projectList);

//Get data from task form
let taskTitle = document.getElementById("title");
let taskDescription = document.getElementById("description");
let taskDate = document.getElementById("date");
let taskPriority = document.getElementById("priority");
let taskButton = document.getElementById("taskSubmit");

taskButton.onclick = function(){

let taskM = Task(taskTitle.value, taskDescription.value, taskDate.value, taskPriority.value);
modal.style.display = "none";
projectWindow.style.display = "none";
taskWindow.style.display = "none";

projectList[0].arr.push(taskM);
}

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



 



   import {Projects, Task, addProject, projectList} from "./logic";
   import { renderProjects } from "./dom";