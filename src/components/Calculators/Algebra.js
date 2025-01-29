import React from 'react';
import FormulaContainer from '../Formula/FormulaContainer';
import Intro from '../Intro';
import HowtoUse from '../HowtoUse';

const Algebra = () => {
  return (
    <section className="section-container">
      <Intro
        title={'Álgebra - Simplifique Seus Cálculos'}
        text={
          'Bem-vindo à seção de Álgebra! Aqui, você pode realizar cálculos rápidose precisos com as fórmulas mais comuns usadas no dia a dia. Escolha afórmula desejada, insira os valores necessários e obtenha os resultados em segundos!'
        }
      />
      <FormulaContainer
        title={'Cálculo da Força (Segunda Lei de Newton)'}
        example={'F = m * a'}
        values={['F', 'm', 'a']}
        inputIDs={['CalculoForca-F', 'CalculoForca-m', 'CalculoForca-a']}
        info={[
          'Força resultante (em Newtons, N).',
          'Massa do objeto (em quilogramas, kg).',
          'Aceleração do objeto (em metros por segundo ao quadrado, m/s²).',
        ]}
      />

      <FormulaContainer
        title={'Cálculo da Velocidade Média'}
        example={'v = ΔS / Δt'}
        values={['v', 'ΔS', 'Δt']}
        inputIDs={[
          'CalculoVelocidadeMedia-v',
          'CalculoVelocidadeMedia-ΔS',
          'CalculoVelocidadeMedia-Δt',
        ]}
        info={[
          'Velocidade média (em metros por segundo, m/s).',
          'Distância percorrida (em metros, m).',
          'Tempo gasto para percorrer a distância (em segundos, s).',
        ]}
      />

      <FormulaContainer
        title={'Cálculo da Aceleração Média'}
        example={'a = Δv / Δt'}
        values={['a', 'Δv', 'Δt']}
        inputIDs={[
          'CalculoAceleracaoMedia-a',
          'CalculoAceleracaoMedia-Δv',
          'CalculoAceleracaoMedia-Δt',
        ]}
        info={[
          'Aceleração média (em m/s²).',
          'Variação da velocidade (diferença entre velocidade final e inicial).',
          'Intervalo de tempo (em segundos, s).',
        ]}
      />

      <FormulaContainer
        title={
          'Equação da Velocidade no Movimento Uniformemente Acelerado (MUV)'
        }
        example={'v = v₀ + a * t'}
        values={['v', 'v₀', 'a', 't']}
        inputIDs={[
          'EquacaoVelocidadeMUV-v',
          'EquacaoVelocidadeMUV-v₀',
          'EquacaoVelocidadeMUV-a',
          'EquacaoVelocidadeMUV-t',
        ]}
        info={[
          'Velocidade final (em m/s).',
          'Velocidade inicial (em m/s).',
          'Aceleração (em m/s²).',
          'Tempo (em segundos, s).',
        ]}
      />

      <FormulaContainer
        title={'Equação da Posição no Movimento Uniformemente Acelerado (MUV)'}
        example={'S = S₀ + v₀t + (1/2) a t²'}
        values={['S', 'S₀', 'v₀', 't', 'a']}
        inputIDs={[
          'EquacaoPosicaoMUV-S',
          'EquacaoPosicaoMUV-S₀',
          'EquacaoPosicaoMUV-v₀',
          'EquacaoPosicaoMUV-t',
          'EquacaoPosicaoMUV-a',
        ]}
        info={[
          'Posição final do objeto.',
          'Posição inicial do objeto.',
          'Velocidade inicial.',
          'Tempo decorrido.',
          'Aceleração do movimento.',
        ]}
      />

      <FormulaContainer
        title={'Força Peso (Gravidade)'}
        example={'P = m * g'}
        values={['P', 'm', 'g']}
        inputIDs={['ForcaPeso-P', 'ForcaPeso-m', 'ForcaPeso-g']}
        info={[
          'Peso do objeto (em Newtons, N).',
          'Massa do objeto (em quilogramas, kg).',
          'Aceleração da gravidade (9,8 m/s² na Terra).',
        ]}
      />

      <FormulaContainer
        title={'Equação Linear (Forma Geral)'}
        example={'y = mx + b'}
        values={['m', 'b', 'x', 'y']}
        inputIDs={[
          'EquacaoLinear-m',
          'EquacaoLinear-b',
          'EquacaoLinear-x',
          'EquacaoLinear-y',
        ]}
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
        values={['a', 'b', 'c']}
        inputIDs={[
          'EquacaoBhaskara-a',
          'EquacaoBhaskara-b',
          'EquacaoBhaskara-c',
        ]}
        info={[
          'Coeficientes da equação quadrática.',
          'Coeficientes da equação quadrática.',
          'Coeficientes da equação quadrática.',
        ]}
        results={['x1', 'x2']}
      />

      <FormulaContainer
        title={'Propriedade do Logaritmo Simples (Base 10 e Base e)'}
        example={'log(x) = log(x) / log(b)'}
        values={['x', 'b']}
        inputIDs={['LogaritmoSimples-x', 'LogaritmoSimples-b']}
        info={[
          'Valor do qual você quer calcular o logaritmo.',
          'Base do logaritmo (por exemplo, b = 10 para base decimal).',
          'Representam os logaritmos base 10.',
        ]}
        results={['log(x)']}
      />

      <FormulaContainer
        title={'Propriedade do Logaritmo Natural (Base e)'}
        example={'ln(x)'}
        values={['x']}
        inputIDs={['LogaritmoNatural-x']}
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
