import React, { useState } from 'react'
import { useEffect } from 'react'

export default function Lista() {
    const [pokemones, setPokemones] = useState([])

    let url = "https://pokeapi.co/api/v2/pokemon/?limit=25"

    useEffect(() => {          
        fetch( url)  
        .then(r => r.json() )
        .then( pokemon => {  
                                    
                setPokemones(pokemon.results)
                
            })
               
    },[])
    return (
        <section>
            <table className="tabla" border="2">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Imagen</th>                        
                    </tr>
                </thead>
                <tbody>
                    {pokemones.map ((poke, index) => {
                        return <tr key={index}>
                            <td>{poke.name}</td>
                            <td><img className="imagenes_25" src={`https://pokeres.bastionbot.org/images/pokemon/${index +1}.png`} alt="Nombre Pokemon" /></td>
                            </tr>
                    })}
                </tbody>
            </table>
        </section>
    )
}
