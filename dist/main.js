(()=>{console.log({title:"Pocistio",description:"govna",date:22.7,priority:"high"});let e={title:"Poslovni",description:"Ovde sve vezano za poso",arr:["test"]};console.log(e);let t=document.getElementsByClassName("close")[0],l=document.getElementsByClassName("close")[1],n=document.getElementsByClassName("modal-bck")[0],o=document.getElementById("project-form"),s=document.getElementsByClassName("modal-cnt")[0];t.onclick=function(){n.style.display="none",o.style.display="none",s.style.display="none"},l.onclick=function(){n.style.display="none",s.style.display="none",o.style.display="none"},document.getElementById("button1").onclick=function(){n.style.display="flex",o.style.display="flex"},document.getElementById("button2").onclick=function(){n.style.display="flex",s.style.display="flex"}})();