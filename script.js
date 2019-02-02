var usuario = '';
function acceder(){
  let formulario   = document.getElementById('formulario');
  let mensajesCard = document.getElementById('mensajesCard');
  usuario = document.getElementById('usuario');
  if( usuario.value != '' && usuario.value.length >= 3 ){
    mensajesCard.classList.remove('noMostrar');
    usuario.classList.remove('checkInput');
    formulario.classList.add('noMostrar');
  }else{
    usuario.classList.add('checkInput');
  }
}
