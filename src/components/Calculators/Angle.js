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
        type={'conversionDegreesRadians'}
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
        type={'internalAnglePolygon'}
        />

      <FormulaContainer
        title={'Soma dos Ângulos Internos de um Polígono'}
        example={'Soma dos Ângulos Internos = (n - 2) * 180'}
        values={['n', 'Ângulo Interno']}
        inputIDs={[
          'SomaAngulosInternosPoligono-n',
          'SomaAngulosInternosPoligono-Soma',
        ]}
        info={[
          'Número de lados do polígono.',
          'Soma total dos ângulos internos.',
        ]}
        type={'sumInternalAnglePolygon'}
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
        type={'centralAngleCircle'}
      />
      <HowtoUse />
    </section>
  );
};

export default Angle;
