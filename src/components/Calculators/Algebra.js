import React from 'react';
import FormulaContainer from '../Formula/FormulaContainer';
import Intro from '../Intro';
import HowtoUse from '../HowtoUse';

const Algebra = () => {
  return (
    <section className="section-container">
      <Intro title={'Álgebra - Simplifique Seus Cálculos'} text={'Bem-vindo à seção de Álgebra! Aqui, você pode realizar cálculos rápidose precisos com as fórmulas mais comuns usadas no dia a dia. Escolha afórmula desejada, insira os valores necessários e obtenha os resultados em segundos!'}/>
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
      <HowtoUse />
    </section>
  );
};

export default Algebra;
