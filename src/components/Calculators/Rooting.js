import React from 'react';
import Intro from '../Intro';
import HowtoUse from '../HowtoUse';
import FormulaContainer from '../Formula/FormulaContainer';

const Rooting = () => {
  return (
    <section className="section-container">
      <Intro
        title="Radiciação - Simplifique seus Cálculos"
        text="A seção de radiciação é projetada para facilitar o cálculo de raízes quadradas, cúbicas e de outros índices. Ela é ideal para resolver problemas matemáticos que envolvem radicais, seja no ensino básico, médio ou em aplicações mais avançadas."
      />

      <FormulaContainer
        title={'Radiciação (Raiz Quadrada)'}
        example={'√x = r'}
        values={['x', 'r']}
        info={[
          'x é o radicando, o número dentro da raiz.',
          'r é o resultado da raiz quadrada de x.',
        ]}
        inputIDs={['RaizQuadrada-radicando', 'RaizQuadrada-resultado']}
      />

      <FormulaContainer
        title={'Radiciação (Raiz Cúbica)'}
        example={'∛x = r'}
        values={['x', 'r']}
        info={[
          'x é o radicando, o número dentro da raiz.',
          'r é o resultado da raiz cúbica de x.',
        ]}
        inputIDs={['RaizCubica-radicando', 'RaizCubica-resultado']}
      />

      <FormulaContainer
        title={'Radiciação com Índice'}
        example={'ⁿ√x = r'}
        values={['n', 'x', 'r']}
        info={[
          'n é o índice da raiz (2 para quadrada, 3 para cúbica, etc.).',
          'x é o radicando, o número dentro da raiz.',
          'r é o resultado da radiciação com índice n.',
        ]}
        inputIDs={[
          'RaizComIndice-indice',
          'RaizComIndice-radicando',
          'RaizComIndice-resultado',
        ]}
      />

      <HowtoUse />
    </section>
  );
};

export default Rooting;
