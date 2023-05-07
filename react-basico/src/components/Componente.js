import React, { Component } from "react";

//Componente Funcion flecha
const Componente = (props) => <h2>{props.msg}</h2>;

/*Componente funcion
function Componente(props) {
  return <h2>{props.msg}</h2>;
}
*/

/* Componente clase
class Componente extends Component {
  render() {
    return <h2>{this.props.msg}</h2>;
  }
}
*/
export default Componente;
