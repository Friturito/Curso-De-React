import React, {createRef, useRef} from 'react'

export default function Referencias (){
    /*
    Esto es para Class Component
    let refMenu = createRef(),*/
    let refMenu = useRef(),
    refMenuBtn = useRef()  

    console.log(refMenu);
    console.log(refMenuBtn);
    const handleToggleMenu = (e) =>{
        /*const $menu = document.getElementById("menu")

        if (e.target.textContent === "Menu") {
            e.target.textContent = "Cerrar"
            $menu.style.display = "block"
        }else {
            e.target.textContent = "Menu"
            $menu.style.display = "none"
        }*/

        if (refMenuBtn.current.textContent === "Menu") {
            refMenuBtn.current.textContent = "Cerrar"
            refMenu.current.style.display = "block"
        } else {
            refMenuBtn.current.textContent = "Abrir"
            refMenu.current.style.display = "none"
        }

    }

    return(
        <>
            <h2>
                Referencias
            </h2>

            <button id='menu-btn' onClick={handleToggleMenu} ref={refMenuBtn}>Menu</button>
            <nav id='menu' style={{display:'none'}} ref={refMenu}>
                <a href='#'>Seccion 1</a>
                <br/>
                <a href='#'>Seccion 2</a>
                <br/>
                <a href='#'>Seccion 3</a>
                <br/>
                <a href='#'>Seccion 4</a>
                <br/>
                <a href='#'>Seccion 5</a>
                <br/>
            </nav>
            
        </>
        
    )
}