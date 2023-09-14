import './Formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'
const Formulario = (props) => {
   
    const [nome, setNome]= useState('')
    const [cargo, setCargo]= useState('')
    const [imagem, setImagem]= useState('')
    const [time, setTime]= useState('')




    const aoSAlvar=(evento) =>{
        evento.preventDefault()
        //console.log('teste =>',nome,cargo,imagem,time)
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
   
    }
    return (
        <section className='formulario'>
            <form onSubmit={aoSAlvar}>
                <h2>Preencha os dados:</h2>
                <CampoTexto 
                obrigatorio={true} 
                label="Nome" 
                placeholder="digite seu nome" 
                valor={nome}
                aoAlterado={valor => setNome(valor )}
                />
                <CampoTexto 
                obrigatorio={true} 
                label="Cargo" 
                placeholder="digite seu Cargo" 
                valor={cargo}
                aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto 
                label="Imagem" 
                placeholder="Coloque sua imagem" 
                valor={imagem}
                aoAlterado={valor =>setImagem(valor)}
                />
                <ListaSuspensa 
                obrigatorio={true} 
                label="Times" 
                itens={props.times} 
                valor={time}
                aoAlterado={valor => setTime(valor)}
                />
                <Botao >
                    criar card
                </Botao>
            </form>
        </section>

    )
}
export default Formulario