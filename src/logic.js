
let projectList = [];
   

   let Projects = (title, description) => {
 
      return{
         title: title,
         description: description,
         arr: ["test"]
      }

   };

let Task = (title, description, date, priority) => {
  
    return{
         title: title,
         description: description,
         date: date,
         priority: priority,
     }
     
   }
   
  
function addProject(title, description) {

let projectM = Projects(title, description);
projectList.push(projectM);
}



 
   /*let project = Projects("Poslovni", "Ovde sve vezano za poso");
   console.log(project);*/

   export {Projects, Task, addProject, projectList};