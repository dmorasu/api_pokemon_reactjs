import React, { useEffect } from 'react';
// import '../App.css'

function Lista() {
const [result, setResult] = React.useState([]);
const [poke, setPoke] = React.useState([]);
const [load, setLoad] = React.useState('true');
const arr = [];

useEffect(() => {
  fetch('https://pokeapi.co/api/v2/pokemon/?limit=25')
  .then((response) => response.json())
  .then((data) => setResult(
  data.results.map((item) => {
  fetch(item.url)
  .then((response) => response.json())
  .then((allpokemon) => arr.push(allpokemon));
  setPoke(arr);
}),
));
}, []);
setTimeout(() => {
setLoad(false);
}, 1000);

return (
<div className="App">
<div className='pokegallery'>
{ load ? (
<p>Loading...</p>
) : (
poke.map((img, i) => (


<div id={img.id} key={img.id}>
<div className='card' style={{ width: '90rem', height: '18rem', backgroundColor: '#F0F0C9' }}>

<div >
<img  src={img.sprites.front_default} alt='pokemon' />
<h5 >Nombre: {img.name}</h5>
<h5>Type: {img.types[0].type.name}</h5>
<h5>ID: {img.id}</h5>     

</div>
</div>
</div>
))
)}
</div>
</div>
);
}
export default Lista;




