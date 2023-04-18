function parOImpar(numero) {
    if (numero % 2 === 0) {
      return "El número es par";
    } else {
      return "El número es impar";
    }
  }
  
  function analizarCadena(cadena) {
    if (cadena == cadena.toUpperCase()) {
      return("La cadena está formada solo por mayúsculas");
    } else if (cadena == cadena.toLowerCase()) {
      return("La cadena está formada solo por minúsculas");
    } else {
      return("La cadena está formada por una mezcla de mayúsculas y minúsculas");
    }
  }

  function esPalindromo(cadena) {
    // Convertir la cadena a minúsculas y eliminar los espacios en blanco
    cadena = cadena.toLowerCase().replace(/\s/g, '');
    // Crear una cadena invertida
    var cadenaInvertida = cadena.split('').reverse().join('');
    // Comparar la cadena original con la cadena invertida
    if(cadena === cadenaInvertida) {
      return true;
    } else {
      return false;
    }
  }