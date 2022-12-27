let Task = (title, description, date, priority) => {
  
    return{
         title: title,
         description: description,
         date: date,
         priority: priority,
     }
     
   }
   
   let task1 = Task("Pocistio", "govna", 22.7, "high");
   console.log(task1);
 
 
   let Projects = (title, description) => {
 
      return{
         title: title,
         description: description,
         arr: ["test"]
      }
 
 
 
   }