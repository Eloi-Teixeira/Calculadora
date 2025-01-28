import React from 'react';
import FormulaContainer from '../Formula/FormulaContainer';

const Percent = () => {
  return (
    <section className="section-container animeDown">
      <h1>Porcentagem - Calcule Rápido e Fácil</h1>
      <p>
        A seção de porcentagem permite calcular rapidamente aumentos, descontos,
        lucros, e outros valores baseados em porcentagens. Simples de usar e
        essencial para diversas situações no dia a dia, como compras, finanças e
        análise de dados.
      </p>
      <h2>Fórmulas Comuns:</h2>
      <span className="separator-horizontal"></span>
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

export default Percent;
