function capturar(){
  //uso del archivo JS 
  //console.log("Capturar")

  function Persona(nombre,edad){
    this.nombre = nombre;
    this.edad = edad;
  }
  var nombreCapturar = document.getElementById("nombre").value;
  // testeamos la captura de lña primer variable
  // console.log(nombreCaptura);
  var edadCapturar = document.getElementById("edad").value;
  // hacemos uso de la variable local nuevoNombre 
  //var nuevoNombre = new Persona(nombreCapturar, edadCapturar);
  // para que responda mi funcion externa pasamos la variable local a global quitando var
  nuevoNombre = new Persona(nombreCapturar, edadCapturar);
  // testeamos el contructor con el nuevo objeto
  console.log(nuevoNombre);
  // ejecutamos la función  
  agregar();
}

var nombresListados = [];

function agregar () {
  nombresListados.push(nuevoNombre);
  console.log(nombresListados);
  document.getElementById("tabla").innerHTML += '<tbody><td>'+nuevoNombre.nombre+'</td><td>'+nuevoNombre.edad+'</td></tbody>';
};

