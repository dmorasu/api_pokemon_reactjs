import React from 'react';

class Cuerpo extends React.Component{

    constructor(props){
        super(props);
        this.state ={
          name:'',
          img:'#'
        }
      }
    
     
    
      LaApi =async()=>{
    
        let res=await fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.name}`)
        // let res=await fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
        let data= await res.json()
    
        console.log(data.sprites.front_default)
        this.setState({
            img: data.sprites.front_default
        })
      }

      hadleName =  event=>{
          this.setState({
              name: event.target.value
          })
      }

      hadleSubmit = event =>{
          var le =this.state.name
          console.log(le)
          event.preventDefault();

          this.LaApi()
      }


    render(){
        return(
            <div>
                <div className="card center">
                    <div className="container is-fluid">
                         POKEMON API
                    </div>
                <div className="columns">
                     <form onSubmit={this.hadleSubmit}>
                         <label  className="column">¿Cual Pokemon Buscas?</label><br/>
                         <input
                            className="column"
                            type="text"
                            placeholder="nombre"
                            value={this.state.name}
                            onChange={this.hadleName}


                         /> <br/> <br/>
                         <button type="submit" className="button is-primary">Encontrar</button>
                         <img  className="column"src={this.state.img}/>
                     </form>
                </div>
                <div className="">
                !Tienes que Atraparlo¡
                </div>
            </div>
                
            </div>
        );

    }
}

export default Cuerpo;
