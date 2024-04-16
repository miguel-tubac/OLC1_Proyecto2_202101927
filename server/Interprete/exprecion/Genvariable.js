// Variables.js
class Genvariable {
  static diccionario = {};

  static agregarDato(clave, valor) {
    this.diccionario[clave] = valor;
  }

  static obtenerDato(clave) {
    return this.diccionario[clave];
  }

  static eliminarDato(clave) {
    if (this.diccionario.hasOwnProperty(clave)) {
      delete this.diccionario[clave];
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Genvariable;
