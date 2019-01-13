window.onload = () => {
  var addbutton = document.getElementById("addbutton"); // button to add inputs

  addbutton.onclick = addinputs; // when is onclick runs addinputs function
}

function addinputs() {

  var padre = document.getElementById("homeworks"); // parent
  
  var input1 = document.createElement("INPUT");
  input1.type = "checkbox";

  input1.onclick = function() { // to check if text is empty
    if(input2.value == false) {
      alert("¡Agrega contenido a tu tarea!");
      input1.checked = false;
    } else {
      alert("¡Felicidades, haz completado tu tarea!");
    }
  }

  padre.appendChild(input1);
 
  var input2 = document.createElement("INPUT");
  input2.type = "text";
  input2.placeholder = "Indica aquí tu tarea";

  padre.appendChild(input2);
  
  var del = document.createElement("INPUT"); // button to delete inputs
  del.type = "button";
  del.value = "x";
  
  del.onclick = function() {
    padre.removeChild(input1);
    padre.removeChild(input2);
    padre.removeChild(del);
  }
  
  padre.appendChild(del);

  var salto = document.createElement("p"); // line break between input groups
  padre.appendChild(salto);
}