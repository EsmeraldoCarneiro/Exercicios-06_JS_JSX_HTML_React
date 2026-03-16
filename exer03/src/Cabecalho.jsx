import React, { Component } from 'react';

/**
 * Componente Cabecalho
 * Demonstra o uso do ciclo de vida 'componentDidMount' para 
 * realizar uma alteração automática no estado.
 */
class Cabecalho extends Component {
  constructor(props) {
    super(props);

    // Estado inicial: a cor começa como vermelho
    this.state = {
      corFavorita: "vermelho"
    };
  }

  /**
   * componentDidMount: Executa IMEDIATAMENTE após o componente ser
   * inserido na árvore do DOM (montagem).
   */
  componentDidMount() {
    // Definimos a arrow function conforme solicitado
    const configurarTempoLimite = () => {
      // Altera o estado para 'amarelo'
      this.setState({ corFavorita: "amarelo" });
    };

    /* setTimeout executa a função após um determinado tempo.
       1000 milissegundos = 1 segundo.
    */
    setTimeout(configurarTempoLimite, 1000);
  }

  render() {
    const { corFavorita } = this.state;

    // Estilo dinâmico para refletir a cor que está no estado
    const estiloCor = {
      color: corFavorita === 'vermelho' ? 'red' : 'orange',
      fontWeight: 'bold'
    };

    return (
      <div style={{ padding: '20px', backgroundColor: '#fdfdfd', border: '1px solid #eee' }}>
        <h2 style={{ color: '#333' }}>
          A minha cor favorita é <span style={estiloCor}>{corFavorita}</span>
        </h2>
        <p style={{ fontSize: '0.9rem', color: '#666' }}>
          (Observe que a cor mudará de vermelho para amarelo após 1 segundo)
        </p>
      </div>
    );
  }
}

export default Cabecalho;