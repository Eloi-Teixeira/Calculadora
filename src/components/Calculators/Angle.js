import React from 'react';
import Intro from '../Intro';
import HowtoUse from '../HowtoUse';
import FormulaContainer from '../Formula/FormulaContainer';

const Angle = () => {
  return (
    <section className="section-container">
      <Intro
        title="Ângulos - Descubra Medidas e Relações"
        text="A seção de ângulos é projetada para ajudá-lo a calcular medidas angulares e explorar suas relações em diferentes contextos, como triângulos, círculos e trigonometria."
      />
      <FormulaContainer
        title={'Cálculo da Força (Segunda Lei de Newton)'}
        example={'F = m × a'}
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
        example={'v = v₀ + a × t'}
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
        example={'P = m × g'}
        values={['P', 'm', 'g']}
        inputIDs={['ForcaPeso-P', 'ForcaPeso-m', 'ForcaPeso-g']}
        info={[
          'Peso do objeto (em Newtons, N).',
          'Massa do objeto (em quilogramas, kg).',
          'Aceleração da gravidade (9,8 m/s² na Terra).',
        ]}
      />

      <FormulaContainer
        title={'Conversão de Graus para Radianos'}
        example={'Radianos = Graus * π / 180'}
        values={['Graus', 'Radianos']}
        inputIDs={[
          'ConversaoGrausRadianos-Graus',
          'ConversaoGrausRadianos-Radianos',
        ]}
        info={[
          'Medida em graus que você deseja converter.',
          'A medida em radianos.',
        ]}
      />

      <FormulaContainer
        title={'Conversão de Radianos para Graus'}
        example={'Graus = Radianos * 180 / π'}
        values={['Radianos', 'Graus']}
        inputIDs={[
          'ConversaoRadianosGraus-Radianos',
          'ConversaoRadianosGraus-Graus',
        ]}
        info={[
          'Medida em radianos que você deseja converter.',
          'A medida em graus.',
        ]}
      />

      <FormulaContainer
        title={'Ângulo Interno de um Polígono Regular'}
        example={'Ângulo Interno = ((n - 2) * 180) / n'}
        values={['n', 'Ângulo Interno']}
        inputIDs={[
          'AnguloInternoPoligono-n',
          'AnguloInternoPoligono-AnguloInterno',
        ]}
        info={['Número de lados do polígono.', 'Medida de um ângulo interno.']}
      />

      <FormulaContainer
        title={'Soma dos Ângulos Internos de um Polígono'}
        example={'Soma dos Ângulos Internos = (n - 2) * 180'}
        values={['n', 'Soma Ângulos Internos']}
        inputIDs={[
          'SomaAngulosInternosPoligono-n',
          'SomaAngulosInternosPoligono-Soma',
        ]}
        info={[
          'Número de lados do polígono.',
          'Soma total dos ângulos internos.',
        ]}
      />

      <FormulaContainer
        title={'Ângulo Central no Círculo'}
        example={'Ângulo Central = Arco / Raio'}
        values={['Arco', 'Raio', 'Ângulo Central']}
        inputIDs={[
          'AnguloCentralCirculo-Arco',
          'AnguloCentralCirculo-Raio',
          'AnguloCentralCirculo-AnguloCentral',
        ]}
        info={[
          'Arco: Comprimento do arco da circunferência.',
          'Raio: Raio do círculo.',
          'Resultado: Medida do ângulo central em radianos.',
        ]}
      />
      <HowtoUse />
    </section>
  );
};

export default Angle;
