import React from 'react';
import '../App.css';



function Card({ pokemon }) {
    return (
        <div className="Card">
             <div className="Card__name" style={{background:"yellow", color:"blue"}}>
                {pokemon.name}
            </div>
            <div className="Card__img">
                <img src={pokemon.sprites.front_default} alt="" />
            </div>           
            <div className="Card__types">              
            </div>
            <div className="Card__info">
                <div className="Card__data Card__data--weight">
                    <p className="title" >Tipos: </p>
                    <p>{pokemon.types[0].type.name} </p>
                </div>
                <div className="Card__data Card__data--weight">
                    <p className="title">Id : </p>
                    <p>{pokemon.id}</p>
                </div>
                
            </div>
        </div>
    );
}

export default Card;
