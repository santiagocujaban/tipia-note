function addtext() {
  var padre = document.getElementById("tareas");
  
  var input1 = document.createElement("INPUT");
  input1.type = "checkbox";
  padre.appendChild(input1);
 
  var input2 = document.createElement("INPUT");
  input2.type = "text";
  input2.placeholder = "Indica aquí tu tarea";
  padre.appendChild(input2);
  
  var del = document.createElement("INPUT");
  del.type = "button";
  del.value = "x";
  
  del.onclick = function() {
    var confirmar = confirm("¿Estas seguro de que quieres eliminar esta tarea?");

    confirmar;

    if(confirmar == true) {
      padre.removeChild(input1);
      padre.removeChild(input2);
      padre.removeChild(del);
    } else if(confirmar == false){
      window.onload;
    }
  }
  
  padre.appendChild(del);
  
  var salto = document.createElement("p");
  
  input1.onclick = function() {
    if(input2.value == false) {
      alert("¡Agrega contenido a tu tarea!");
      input1.checked = false;
    } else {
      alert("¡Felicidades, haz completado tu tarea!");
    }
  }
  
  padre.appendChild(salto);
}

window.onload = function() {
  var addbutton = document.getElementById("addbutton");
  
  addbutton.onclick = addtext;
}