import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Componente from "./components/Componente";
import Propiedades from "./components/Propiedades";
import Estado from "./components/Estado";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoElementos from "./components/RenderizadoElementos";
import Eventos from "./components/Eventos";

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
            arreglo={[1, 2, 3]}
            objeto={{
              nombre: "Friturito",
              mail: "ricardo@gmail.com",
            }}
            funcion={(num) => num * num}
            elementoReact={<i>Esto es un elemento React</i>}
            componenteReact={<Componente msg="Soy un componente" />}
          />
          <hr />
          <Estado />
          <hr />
          <RenderizadoCondicional />
          <hr />
          <RenderizadoElementos />
          <hr />
          <Eventos />
        </section>
      </header>
    </div>
  );
}

export default App;
