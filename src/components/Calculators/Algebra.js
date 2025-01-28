import React from 'react';
import FormulaContainer from '../Formula/FormulaContainer';

const Algebra = () => {
  return (
    <section className="section-container">
      <h1>Álgebra - Simplifique Seus Cálculos</h1>
      <p>
        Bem-vindo à seção de Álgebra! Aqui, você pode realizar cálculos rápidos
        e precisos com as fórmulas mais comuns usadas no dia a dia. Escolha a
        fórmula desejada, insira os valores necessários e obtenha os resultados
        em segundos!
      </p>
      <h2>Fórmulas Disponíveis</h2>
      <span className="separator-horizontal"></span>
      <FormulaContainer
        title={'Equação Linear (Forma Geral)'}
        example={'y = mx + b'}
        values={['m', 'b', 'x', 'y']}
        info={[
          'Inclinação da reta.',
          'Interseção com o eixo y.',
          'Valor da variável independente.',
          'Resultado, ou seja, o valor de y.',
        ]}
      />

      <FormulaContainer
        title={'Equação de 2° grau (Fórmula de Bhaskara)'}
        example={'ax² + bx + c = 0'}
        values={['a', 'b', 'c', 'x1', 'x2']}
        info={[
          'Coeficientes da equação quadrática.',
          'Coeficientes da equação quadrática.',
          'Coeficientes da equação quadrática.',
          'Primeira raiz da equação.',
          'Segunda raiz da equação.',
        ]}
      />

      <FormulaContainer
        title={'Propriedade do Logaritmo Simples (Base 10 e Base e)'}
        example={'log(x) = log(x) / log(b)'}
        values={['x', 'b']}
        info={[
          'Valor do qual você quer calcular o logaritmo.',
          'Base do logaritmo (por exemplo, b = 10 para base decimal).',
          'Representam os logaritmos base 10.',
        ]}
      />

      <FormulaContainer
        title={'Propriedade do Logaritmo Natural (Base e)'}
        example={'ln(x)'}
        values={['x']}
        info={[
          'Valor do qual você quer calcular o logaritmo natural.',
          'A base é um número irracional aproximadamente igual a 2,718.',
        ]}
      />

      <h2>Como Funciona?</h2>
      <span className="separator-horizontal"></span>
      <ul>
        <li>Escolha uma fórmula na lista abaixo.</li>
        <li>Insira os valores necessários.</li>
        <li>Espere o resultado.</li>
      </ul>
      <p>Com esta ferramenta, a álgebra nunca foi tão simples e prática!</p>
    </section>
  );
};

export default Algebra;
