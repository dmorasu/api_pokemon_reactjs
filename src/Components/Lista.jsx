import React, { useState } from 'react'
import { useEffect } from 'react'

export default function Lista() {
    const [pokemones, setPokemones] = useState([])

    useEffect(() => {   
           fetch('https://pokeapi.co/api/v2/pokemon/?limit=25')
            .then(r => r.json() )
            .then( pokemon => {  
                                    
                setPokemones(pokemon.results)
            })
               
    },[])
    return (
        <section>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Imagen</th>
                        <th>Tipo o Tipos</th>
                        <th>Id</th>
                    </tr>
                </thead>
                <tbody>
                    {pokemones.map ((poke, index) => {
                        return <tr key={index}>
                            <td>{poke.name}</td>
                            <td><img  src={`https://pokeres.bastionbot.org/images/pokemon/${index +1}.png`} alt="Nombre Pokemon" /></td>
                                                       
                        </tr>
                    })}
                </tbody>
            </table>
        </section>
    )
}
