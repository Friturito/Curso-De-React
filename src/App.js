import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Componente from "./components/Componente";
import Propiedades from "./components/Propiedades";

function App() {
  let nombre = "Ricardo";
  let auth = true;
  let estaciones = ["Primavera", "Verano", "Otoño", "Invierno"];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Editar <code>src/App.js</code> y guarda para recargar.
        </p>
        <label htmlFor="nombre">Nombre</label>
        <input id="nombre" />
        <p>Hola, {nombre} </p>
        <p>{auth ? "Autorizado" : "No estas Autorizado"}</p>
        <ul>
          {estaciones.map((el, index) => (
            <li key={index}>{el}</li>
          ))}
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprende React
        </a>
        <section>
          <Componente msg="Hola soy un componente " />
          <hr />
          <Propiedades
            cadena="Esto es una cadena de texto"
            numero={19}
            booleano={true}
          />
        </section>
      </header>
    </div>
  );
}

export default App;
