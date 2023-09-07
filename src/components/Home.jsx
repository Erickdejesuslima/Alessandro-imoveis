import React, { Component } from 'react';
import 'animate.css';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className='image-container'>
          <img src='ai.jpeg' className='logo alessandro animate__animated animate__zoomIn' />
        </div>
        <p>🏡 | Compra, Venda e Administração de Imóveis</p>
        <p>🎯 | Desde 2008 realizando sonhos</p>
        <p>🔑 | Luziânia, Goiás e região</p>
        <ul style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <li>Despachante imobiliário em geral</li>
          <li>Contrato de compra e venda</li>
          <li>Cessão de direito</li>
          <li>Contrato de locação</li>
          <li>Avaliação de imóveis</li>
          <li>Requerimento de averbação em cartório</li>
          <li>Declaração de endereço</li>
        </ul>
        <p>| Creci: 15.625 5º Região</p>
        <p>Saiba mais 👇🏽clicando na imagem</p>
        <div className="image-container">
          <a href="https://linktr.ee/alessandroimoveis" target='blank'>
            <img className='alessandro' src="me.jpeg" alt="Descrição da imagem" />
          </a>
        </div>
      </div>
    );
  }
}
