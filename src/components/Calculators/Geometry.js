import React from 'react';
import Intro from '../Intro';
import HowtoUse from '../HowtoUse';
import FormulaContainer from '../Formula/FormulaContainer';

const Geometry = () => {
  return (
    <section className="section-container">
      <Intro
        title="Geometria - Descubra Formas e Medidas"
        text="A seção de geometria é sua ferramenta ideal para calcular áreas, perímetros, volumes e outras propriedades das formas geométricas mais comuns. Seja para estudos, projetos ou curiosidades, esta seção oferece soluções rápidas e precisas."
      />
      <FormulaContainer
        title={'Área do Retângulo'}
        example={'Área = b * h'}
        values={['b', 'h', 'Área']}
        info={[
          'Base do retângulo.',
          'Altura do retângulo.',
          'A medida da área.',
        ]}
        inputIDs={['AR-base', 'AR-altura', 'AR-area']}
      />
      <FormulaContainer
        title={'Perímetro do Retângulo'}
        example={'Perímetro = 2 * (b + h)'}
        values={['b', 'h', 'Perímetro']}
        info={[
          'Base do retângulo.',
          'Altura do retângulo.',
          'A medida do perímetro.',
        ]}
        inputIDs={['PR-base', 'PR-altura', 'PR-perimetro']}
      />
      <FormulaContainer
        title={'Área do Círculo'}
        example={'Área = π * r²'}
        values={['r', 'Área']}
        info={['Raio do círculo.', 'A medida da área.']}
        inputIDs={['AC-raio', 'AC-area']}
      />
      <FormulaContainer
        title={'Perímetro do Círculo'}
        example={'Perímetro = 2 * π * r'}
        values={['r', 'Perímetro']}
        info={['Raio do círculo.', 'A medida do perímetro.']}
        inputIDs={['PC-raio', 'PC-perimetro']}
      />
      <FormulaContainer
        title={'Área do Triângulo'}
        example={'Área = (b * h) / 2'}
        values={['b', 'h', 'Área']}
        info={[
          'Base do triângulo.',
          'Altura do triângulo.',
          'A medida da área.',
        ]}
        inputIDs={['AT-base', 'AT-altura', 'AT-area']}
      />
      <FormulaContainer
        title={'Perímetro do Triângulo'}
        example={'Perímetro = a + b + c'}
        values={['a', 'b', 'c', 'Perímetro']}
        info={[
          'Lado do triângulo.',
          'Lado do triângulo.',
          'Lado do triângulo.',
          'A medida do perímetro.',
        ]}
        inputIDs={['PT-lado1', 'PT-lado2', 'PT-lado3', 'PT-perimetro']}
      />
      <FormulaContainer
        title={'Volume do Cubo'}
        example={'Volume = a³'}
        values={['a', 'Volume']}
        info={[' Medida da aresta do cubo.', 'O volume do cubo.']}
        inputIDs={['VC-aresta', 'VC-volume']}
      />
      <FormulaContainer
        title={'Volume do Cilindro'}
        example={'Volume = π * r² * h'}
        values={['r', 'h', 'Volume']}
        info={[
          'Raio da base do cilindro.',
          'Altura do cilindro.',
          'O volume do cilindro.',
        ]}
        inputIDs={['VolumeCilindro-raio', 'VolumeCilindro-altura', 'VolumeCilindro-volume']}
      />
      <FormulaContainer
        title={'Área Total do Cilindro'}
        example={'Área = 2 * π * r * (r + h)'}
        values={['r', 'h', 'Área']}
        info={[
          'Raio da base do cilindro.',
          'Altura do cilindro.',
          'A área total do cilindro.',
        ]}
        inputIDs={['ATC-raio', 'ATC-altura', 'ATC-area']}
      />
      <HowtoUse />
    </section>
  );
};

export default Geometry;
