import React from 'react';

const Algebra = () => {
  return (
    <section className="section-container">
      <h1>Álgebra - Simplifique Seus Cálculos</h1>
      <p>
        Bem-vindo à seção de Álgebra! Aqui, você pode realizar cálculos rápidos
        e precisos com as fórmulas mais comuns usadas no dia a dia. Escolha a
        fórmula desejada, insira os valores necessários e obtenha os resultados
        em segundos!
      </p>

      <h2>Como Funciona?</h2>
      <span className="separator-horizontal"></span>
      <ul>
        <li>Escolha uma fórmula na lista abaixo.</li>
        <li>Insira os valores necessários.</li>
        <li>Espere o resultado.</li>
      </ul>
      <p>Com esta ferramenta, a álgebra nunca foi tão simples e prática!</p>
      <h2>Fórmulas Disponíveis</h2>
      <span className="separator-horizontal"></span>
      <h3>Equação Linear (Forma Geral)</h3>
      <div className="formula-container">
        <div className="formula-info">
          <p className="example">y = mx + b</p>
          <h4>Informações</h4>
          <ul>
            <li>
              <strong>m:</strong> Inclinação da reta
            </li>
            <li>
              <strong>b:</strong> Interseção com o eixo y
            </li>
            <li>
              <strong>x:</strong> Valor da variável independente
            </li>
            <li>
              <strong>Resultado:</strong> Valor de y
            </li>
          </ul>
        </div>
        <span className="separator-vertical"></span>
        <div className="formula-response">
          <p className="example">y = mx + b</p>
          <h4>Preencha 3 valores</h4>
          <ul>
            <li>
              <strong>m: </strong>
              <input type="number" className="input-value" />
            </li>
            <li>
              <strong>b: </strong>
              <input type="number" className="input-value" />
            </li>
            <li>
              <strong>x: </strong>
              <input type="number" className="input-value" />
            </li>
            <li>
              <strong>y: </strong>
              <input type="number" className="input-value" />
            </li>
          </ul>

          <h4>Resultados: </h4>
          <ul>
            <li>
              <strong>m: </strong>{' '}
              <span className="result-value" id="result-m">
                0
              </span>
            </li>
            <li>
              <strong>b: </strong>{' '}
              <span className="result-value" id="result-b">
                0
              </span>
            </li>
            <li>
              <strong>x: </strong>{' '}
              <span className="result-value" id="result-x">
                0
              </span>
            </li>
            <li>
              <strong>y: </strong>{' '}
              <span className="result-value" id="result-y">
                0
              </span>
            </li>
          </ul>
        </div>
      </div>
      <h3>Equação de 2° graú (Fórmula de Bhaskara)</h3>
      <div className="formula-container">
        <div className="formula-info">
          <p className="example">ax² + bx + c = 0</p>
          <h4>Informações</h4>
          <ul>
            <li>
              <strong>a, b c:</strong> Coeficientes da equação quadrática
            </li>
            <li>
              <strong>x:</strong> Valor de x
            </li>
            <li>
              <strong>Resultado:</strong> Raízes x1 e x2
            </li>
          </ul>
        </div>
        <span className="separator-vertical"></span>
        <div className="formula-response">
          <p className="example">ax² + bx + c = 0</p>
          <h4>Preencha 3 valores</h4>
          <ul>
            <li>
              <strong>a: </strong>
              <input type="number" className="input-value" />
            </li>
            <li>
              <strong>b: </strong>
              <input type="number" className="input-value" />
            </li>
            <li>
              <strong>c: </strong>
              <input type="number" className="input-value" />
            </li>
          </ul>
          <h4>Resultados: </h4>
          <ul>
            <li>
              <strong>x1:</strong>
              <span className="result-value">0</span>
            </li>
            <li>
              <strong>x2:</strong>
              <span className="result-value">0</span>
            </li>
          </ul>
        </div>
      </div>
      <h3>Propriedade do Logaritmo Simples (Base 10 e Base e)</h3>
      <div className="formula-container">
        <div className="formula-info">
          <p className="example">log(x) = log(x)/log(b)</p>
          <h4>Informações</h4>
          <ul>
            <li>
              <strong>x: </strong> Valor do qual você quer calcular o logaritmo.
            </li>
            <li>
              <strong>b: </strong> Base do logaritmo (por exemplo, b = 10 para
              base decimal).
            </li>
            <li>
              <strong>log(x) e log(b): </strong> Representam os logaritmos base
              10.
            </li>
          </ul>
        </div>
        <span className="separator-vertical"></span>
        <div className="formula-response">
          <p className="example">log(x) = log(x)/log(b)</p>
          <h4>Preencha 2 valores</h4>
          <ul>
            <li>
              <strong>x: </strong>
              <input type="number" name="x" id="" className="input-value" />
            </li>
            <li>
              <strong>b: </strong>
              <input type="number" name="b" id="" className="input-value" />
            </li>
          </ul>
          <h4>Resultados</h4>
          <ul>
            <li>
              <strong>x: </strong>
              <span className="result-value">0</span>
            </li>
            <li>
              <strong>b: </strong>
              <span className="result-value">0</span>
            </li>
          </ul>
        </div>
      </div>
      <h3>Propriedade do Logaritmo Natural (Base 10 e Base e)</h3>
      <div className="formula-container">
        <div className="formula-info">
          <p className="example">ln(x)</p>
          <h4>Informações</h4>
          <ul>
            <li>
              <strong>x:</strong>Valor do qual você quer calcular o logaritmo
              natural.
            </li>
            <li>
              <strong>A base:</strong>É um número irracional aproximadamente
              igual a 2,718.
            </li>
          </ul>
        </div>
        <span className="separator-vertical"></span>
        <div className="formula-response">
          <p className="example">ln(x)</p>
          <h4>Preencha 1 valor</h4>
          <ul>
            <li>
              <strong>x: </strong>
              <input type="number" name="x" id="" className="input-value" />
            </li>
          </ul>
          <h4>Resultados</h4>
          <ul>
            <li>
              <strong>x: </strong>
              <span className="result-value">0</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Algebra;
