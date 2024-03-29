import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Componente from "./components/Componente";
import Propiedades from "./components/Propiedades";
import Estado from "./components/Estado";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoElementos from "./components/RenderizadoElementos";
import { EventosES6, EventosES7, MasSobreEvento } from "./components/Eventos";
import ComunicacionComponentes from "./components/ComunicacionComponentes"
import CicloVida from "./components/CicloVida";
import AjaxApis from "./components/AjaxApis";
import ContadorHooks from "./components/contadorHooks";
import ScrollHooks from "./components/ScrollHooks";
import RelojHooks from "./components/RelojHooks";
import AjaxHooks from "./components/AjaxHooks";
import HooksPersonalizado from "./components/HooksPersonalizados";
import Referencias from "./components/Refencias";
import Formularios from "./components/Formularios";
import Estilos from "./components/Estilos";
import ComponenteEstilizado from "./components/ComponentesEstilizados";


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
        <label htmlFor="Nombre">Nombre</label>
        <input id="Nombre" />
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
          <EventosES6 />
          <hr />
          <EventosES7 />
          <hr />
          <MasSobreEvento />
          <hr />
          <ComunicacionComponentes/>
          <hr />
          <CicloVida/>
          <hr/>
          <AjaxApis/>
          <hr/>
          <ContadorHooks titulo="Seguidores"/>
          <hr/>
          <ScrollHooks/>
          <hr/>
          <RelojHooks/>
          <hr/>
          <AjaxHooks/>
          <hr/>
          <HooksPersonalizado/>
          <hr/>
          <Referencias/>
          <hr/>
          <Formularios/>
          <hr/>
          <Estilos/>
          <hr/>
          <ComponenteEstilizado/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        </section>
      </header>
    </div>
  );
}

export default App;
