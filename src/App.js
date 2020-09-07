import React from 'react';
import Cuerpo from './Components/cuerpo';
import Lista from './Components/Lista';
import './App.css';


class App extends React.Component{


  render(){
    return(
      <div>
         <Cuerpo />
         <Lista />
      </div>
    );

  }


}

export default App;
