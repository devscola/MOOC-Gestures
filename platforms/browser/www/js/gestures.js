var app={
  inicio: function(){

    if ('addEventListener' in document) {
      document.addEventListener('DOMContentLoaded', function() {
          FastClick.attach(document.body);
      }, false);
    }

    var botonClaro = document.querySelector('#claro');
    var botonOscuro = document.querySelector('#oscuro');
    
    botonClaro.addEventListener('click',this.ponloClaro,false);
    botonOscuro.addEventListener('click',this.ponloOscuro,false);
  },

  ponloClaro: function(){
    document.body.className = 'claro';
  },

  ponloOscuro: function(){
    document.body.className = 'oscuro';
  },

};
app.inicio();