import { useState } from 'react'
import './CampoTexto.css'

const CampoTexto = (props) => {
    //let valor=''
    

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
        
    }
    
    return (
    
    <div className="campo-texto">
    
            <label>{props.label}
    
            </label>
    
            <input onChange={aoDigitado} required placeholder={props.placeholder}>

            </input>
        </div>
    )

}
export default CampoTexto