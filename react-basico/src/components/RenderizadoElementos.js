import React, { Component } from "react";
import data from "../helpers/data.json";

function ElementoDeLista(props) {
  return (
    <li>
      <a target="_blank" href={props.el.web} rel="noreferrer">
        {props.el.name}
      </a>
    </li>
  );
}

export default class RenderizadoElementos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seasons: ["Primavera", "Verano", "Otoño", "Invierno"],
    };
  }

  render() {
    console.log(data);
    return (
      <div>
        <h2>Renderizado Elementos</h2>
        <h3>Estaciones del año</h3>
        <ol>
          {this.state.seasons.map((el, index) => (
            <li key={index}>{el}</li>
          ))}
        </ol>
        <h3>Frameworks Frontend JavaScript</h3>
        <ul>
          {data.frameworks.map((el, index) => (
            <ElementoDeLista key={el.id} el={el} />
          ))}
        </ul>
      </div>
    );
  }
}
