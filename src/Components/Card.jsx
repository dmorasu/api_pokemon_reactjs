import React from 'react';
import './style.css';


function Card({ pokemon }) {
    return (
        <div className="Card">
             <div className="Card__name">
                {pokemon.name}
            </div>
            <div className="Card__img">
                <img src={pokemon.sprites.front_default} alt="" />
            </div>           
            <div className="Card__types">               
            </div>
            <div className="Card__info">
                <div className="Card__data Card__data--weight">
                    <p className="title" >Tipo o Tipos: </p>
                    <p>{pokemon.types[0].type.name} </p>
                </div>
                <div className="Card__data Card__data--weight">
                    <h1 className="title">Pokemon con ID : </h1>
                    <p>{pokemon.id}</p>
                </div>               
            </div>
        </div>
    );
}

export default Card;
