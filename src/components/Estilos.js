import React from 'react'
import "./Estilos.css"
import "./Estilo.scss"
import moduleStyle from "./Estilos.module.css"


export default function Estilos (){
    let myStyle = {
        borderRadius:".25rem" , 
        margin:"2rem"
    }


    return(
        <section className='Estilos'>
            <h2>Estilos en react</h2>
            <h3 className='bg-react'>Estilo Hoja CSS externa</h3>
            <h3 className='bg-react' style={{borderRadius:".25rem" , margin:"1rem"}}>Estilo Hoja CSS en linea(atributo style)</h3>
            <h3 className='bg-react' style={myStyle}>Estilos en linea</h3>

            <h3 className={moduleStyle.error}>Estilo con module</h3>
            <h3 className={moduleStyle.success}>Estilo con module</h3>
            <h3 className="bg-sass">Estilo con SASS</h3>
        </section>
    )
}