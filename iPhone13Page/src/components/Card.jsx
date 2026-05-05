import Button from "./Button";

import Green from '../assets/img/iphone_green.jpg';
import Silver from '../assets/img/iphone_silver.jpg';
import Golden from '../assets/img/iphone_golden.jpg';
import Graphite from '../assets/img/iphone_graphite.jpg';
import Blue from '../assets/img/iphone_blue.jpg';


import './Card.css';
import { useState } from "react";

const Card = () => {
    const [idSelected, setIdSelected] = useState(1);

    const selectedButton = (id) => {
        setIdSelected(id);
    }

    const iPhoneColor = {
        1: Green,
        2: Silver,
        3: Golden,
        4: Graphite,
        5: Blue,
    };

  return (
    <div className='card'>
        <h3>iPhone 13 Pro</h3>
        <h1>É todo Pro.</h1>
        <p className='description'>O iPhone 13 Pro é uma enorme evolução. Ele traz uma rapidez absurda a tudo 
            o que você faz e vem com novos recursos espetaculares para fotos, vídeos. 
            Tudo em dois tamanhos.</p>
        <p className='valor'> A partir de R$9.499</p>
        <button className='btn'>Comprar</button>
        <img src={iPhoneColor[idSelected]} alt="iPhone 13 Pro" />
        <div className="btn-colors">
            <Button id={1} label={"Verde-Alpino"} Selecionado={selectedButton} color="#394c38" />
            <Button id={2} label={"Prateado"} Selecionado={selectedButton} color="#8f9191" />
            <Button id={3} label={"Dourado"} Selecionado={selectedButton} color="#d6b11c" />
            <Button id={4} label={"Grafite"} Selecionado={selectedButton} color="#54524f" />
            <Button id={5} label={"Azul-Sierra"} Selecionado={selectedButton} color="#8eb0cf" />
        </div>
    </div>
  )
}

export default Card