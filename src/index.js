
  
  let project = Projects("Poslovni", "Ovde sve vezano za poso");
  console.log(project);

// Odavde krece za dugmice etc



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

