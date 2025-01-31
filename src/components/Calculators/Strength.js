import React from 'react';
import Intro from '../Intro';
import HowtoUse from '../HowtoUse';
import FormulaContainer from '../Formula/FormulaContainer';

const Strength = () => {
  return (
    <section className="section-container">
      <Intro
        title="Força e Velocidade - Cálculos e Fórmulas"
        text="A seção de força e velocidade é projetada para ajudar a calcular e entender conceitos relacionados à força, velocidade e outras medidas físicas. Aqui, você pode calcular a força, velocidade, aceleração e muito mais, com fórmulas e exemplos práticos para facilitar o entendimento."
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
        type={'forceCalculation'}
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
        type={'averageSpeed'}
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
        type={'averageAcceleration'}
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
        type={'uam'}
      />

      <FormulaContainer
        title={'Equação da Posição no Movimento Uniformemente Acelerado (MUV)'}
        example={'S = S₀ + v₀ * t + (1/2) * a * t²'}
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
        type={'acceleratedPosition'}
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
        type={'weight'}
      />

      <HowtoUse />
    </section>
  );
};

export default Strength;
