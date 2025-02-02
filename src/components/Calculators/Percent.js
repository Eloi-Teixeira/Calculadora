import React from 'react';
import FormulaContainer from '../Formula/FormulaContainer';
import Intro from '../Intro';
import HowtoUse from '../HowtoUse';

const Percent = () => {
  return (
    <section className="section-container">
      <Intro
        title="Porcentagem - Calcule Rápido e Fácil"
        text="A seção de porcentagem permite calcular rapidamente aumentos, descontos, lucros, e outros valores baseados em porcentagens. Simples de usar e essencial para diversas situações no dia a dia, como compras, finanças e análise de dados."
      />
      <FormulaContainer
        title={'Cálculo de Percentual de um Valor'}
        example={'P = V * P% / 100'}
        values={['V', 'P%', 'P']}
        info={[
          'Valor inicial.',
          'Percentual a ser calculado.',
          'Resultado, ou seja, o valor percentual de V.',
        ]}
        inputIDs={[
          'PercentualValor-valor',
          'PercentualValor-percentual',
          'PercentualValor-resultado',
        ]}
        type='percentageValue'
      />

      <FormulaContainer
        title={'Encontrando o Percentual de um Valor em relação a outro'}
        example={'P% = (Vparte / Vtotal) * 100'}
        values={['Vparte', 'Vtotal', 'P%']}
        info={[
          'Valor da parte que você quer calcular o percentual.',
          'Valor total de referência.',
          'Percentual da parte em relação ao total.',
        ]}
        inputIDs={[
          'PercentualRelacao-valorParte',
          'PercentualRelacao-valorTotal',
          'PercentualRelacao-percentual',
        ]}
        type={'relativePercentage'}
      />

      <HowtoUse />
    </section>
  );
};

export default Percent;
