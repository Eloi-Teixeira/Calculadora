import React from 'react';
import FormulaContainer from '../Formula/FormulaContainer';
import Intro from '../Intro';
import HowtoUse from '../HowtoUse';

const Percent = () => {
  return (
    <section className="section-container">
      <Intro title='Porcentagem - Calcule Rápido e Fácil' text='A seção de porcentagem permite calcular rapidamente aumentos, descontos, lucros, e outros valores baseados em porcentagens. Simples de usar e essencial para diversas situações no dia a dia, como compras, finanças e análise de dados.' />
      <FormulaContainer
        title={'Cálculo de Percentual de um Valor'}
        example={'P = V * P% / 100'}
        values={['V', 'P%', 'P']}
        info={[
          'Valor inicial.',
          'Percentual a ser calculado.',
          'Resultado, ou seja, o valor percentual de V.',
        ]}
      />

      <FormulaContainer
        title={'Cálculo de Valor após Aumento ou Desconto'}
        example={'Vfinal = V ± (V * P% / 100)'}
        values={['V', 'P%', 'Vfinal']}
        info={[
          'Valor inicial.',
          'Percentual de aumento (+) ou desconto (-).',
          'Valor final após o aumento ou desconto.',
        ]}
        inputIDs={['ACVAD-valor-final', 'ACVAD-valor-desconto', 'ACVAD-' ]}
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
      />
      <HowtoUse />
    </section>
  );
};

export default Percent;
