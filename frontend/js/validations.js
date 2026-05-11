function validarBusqueda(texto){
  if(texto.trim() === ""){return false;}
  if(texto.trim().length < 2 ){return false;} return true;
}