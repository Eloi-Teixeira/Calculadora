import React from 'react';

const Home = () => {
  return (
    <>
      <section className="home-container section-container">
        <h1>Bem Vindo à Calculadora Completa</h1>
        <p>
          Sua ferramenta definitiva para cálculos rápidos, precisos e
          organizados. Aqui você encontra funções avançadas divididas em seções
          específicas para atender todas as suas necessidades:
        </p>
        <ul>
          <li>
            <strong>Porcentagem:</strong> Descubra aumentos, descontos e
            proporções com facilidade.
          </li>
          <li>
            <strong>Ângulos:</strong> Trabalhe com graus ou radianos em cálculos
            trigonométricos e geométricos.
          </li>
          <li>
            <strong>Peso:</strong> Calcule forças, pesos e outras interações
            gravitacionais com precisão.
          </li>
          <li>
            <strong>Radiação:</strong> Faça cálculos de dose absorvida e fatores
            de qualidade com segurança.
          </li>
          <li>
            <strong>Equações com π:</strong> Realize cálculos envolvendo
            circunferência, área de círculos e muito mais.
          </li>
        </ul>
        <h2>Como usar?</h2>
        <ul>
          <li>Escolha a seção desejada no menu.</li>
          <li>Insira os dados necessários no formulário correspondente.</li>
          <li>Clique em Calcular para obter os resultados instantaneamente.</li>
        </ul>
        <p>
          Otimizamos sua experiência com um design simples e funcional. Explore
          nossas funções e descubra como a matemática pode ser prática e
          eficiente!
        </p>
      </section>
    </>
  );
};

export default Home;
