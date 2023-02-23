import React, { Component } from "react";

//Una funcion hijo que hereda el estado del padre (Mala practica: Ver eventos) estos se convierten en Props.
function EstadoAHijo(props) {
  return (
    <div>
      <h3>{props.contadorHijo}</h3>
    </div>
  );
}

export default class Estado extends Component {
  //Crear el State
  constructor(props) {
    super(props);
    this.state = {
      contandor: 0,
    };
    //Cambiar al estado
    /*
    setInterval(() => {
      this.setState({
        contandor: this.state.contandor + 1,
      });
    }, 1000);
  */
  }
  render() {
    return (
      <div>
        <h2>El State</h2>
        <p>{this.state.contandor}</p>
        <EstadoAHijo contadorHijo={this.state.contandor} />
      </div>
    );
  }
}
