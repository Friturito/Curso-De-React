import React, { useState, useEffect } from 'react'

export default function ScrollHooks (){
    const [scrollY, setScrollY] = useState(0)
    const [name,setName] = useState("Jon")


    useEffect(() => {
    const detectarScroll= ()=>{setScrollY(window.pageYOffset)}
    window.addEventListener("scroll",detectarScroll)

    return ()=> {window.removeEventListener("scroll",detectarScroll)}
    },[scrollY])

    useEffect(() => {
    console.log("Fase de montaje 1");
    
    },[scrollY])

    useEffect(() => {
    console.log("Fase de Actualizacion 2");
    
    },[])

    
    
    return(
        <>
            <h2>Hooks - useEffect y el ciclo de vida</h2>
            <p>Scroll Y del Navigador {scrollY} PX</p>
        </>
    )
}