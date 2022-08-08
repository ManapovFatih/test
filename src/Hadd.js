import React from 'react';
import Artwork from './Artwork.svg';


function Hadd(name) {

return (
    <>
        <img src={Artwork} style={{margin:'-4vh 2vh',}}/>
        <a href='#/devices' style={{margin:'0vh 0vh', fontSize:'95%', color:'black',}}>Приборы /</a>
        <p style={{margin:'0vh 1vh', color: '#757295', fontSize:'95%',}}>Добавить оборудование</p>
    </>
  );
}

export default Hadd;