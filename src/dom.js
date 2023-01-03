import { projectList } from "./logic";

function renderProjects(){


for(let i=0; i<projectList.length; i++)    {
let container = document.getElementById("side-menu");
let paragraph = document.createElement("p");
container.appendChild(paragraph);

paragraph.textContent = "test";

}



}



export{renderProjects};





/*
Modules use strict mode by default.

In strict mode, you must use a keyword (such as var, let, or const) 
to declare a variable. If you attempt to declare a variable without 
using a keyword, you will get a syntax error.


*/