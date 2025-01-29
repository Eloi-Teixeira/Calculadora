import React from 'react';
import { Link } from 'react-router-dom';

const PagePrivacityPolicy = () => {
  return (
    <section className="page-privacity-policy section-container">
      <h1>Política de Privacidade</h1>

      <p>
        Bem-vindo à nossa página de Política de Privacidade. Sua privacidade e
        proteção de dados são importantes para nós. Nesta página, explicamos
        como coletamos, usamos e protegemos suas informações ao utilizar nosso
        site.
      </p>

      <span className="separator-horizontal"></span>

      <h2>1. Informações que Coletamos </h2>
      <p>Durante sua navegação, podemos coletar as seguintes informações: </p>
      <ul>
        <li>
          <strong>Dados Pessoais:</strong> Nome, endereço de e-mail ou outros
          dados fornecidos voluntariamente por você ao preencher formulários de
          contato ou realizar cadastros.
        </li>
        <li>
          <strong>Dados de Navegação:</strong> Endereço IP, localização
          aproximada, tipo de dispositivo, navegador e páginas visitadas,
          coletados por meio de cookies e ferramentas de análise.
        </li>
      </ul>

      <span className="separator-horizontal"></span>

      <h2>2. Como Usamos Suas Informações </h2>
      <strong>As informações coletadas podem ser utilizadas para: </strong>
      <ul>
        <li>Melhorar a funcionalidade e a experiência do usuário no site.</li>
        <li>
          Responder a solicitações enviadas por você por meio do formulário de
          contato.
        </li>
        <li>
          Monitorar e analisar métricas como tráfego e interação do usuário para
          melhorar nosso conteúdo.
        </li>
      </ul>

      <span className="separator-horizontal"></span>

      <h2>3. Compartilhamento de Dados</h2>
      <p>
        Seus dados pessoais{' '}
        <strong>não serão vendidos ou compartilhados</strong> com terceiros,
        exceto nos seguintes casos:
      </p>
      <ul>
        <li>Quando exigido por lei ou autoridades governamentais.</li>
        <li>Para proteger nossos direitos legais ou evitar fraudes.</li>
        <li>
          Em caso de integração com ferramentas de terceiros, como plataformas
          de análise, que utilizam apenas dados agregados e anônimos.
        </li>
      </ul>

      <span className="separator-horizontal"></span>

      <h2>4. Cookies e Tecnologias de Rastreamento</h2>
      <p>
        Utilizamos cookies para melhorar sua experiência no site. Você pode
        optar por desativar os cookies no seu navegador, mas isso pode impactar
        algumas funcionalidades do site.
      </p>

      
        <strong>Tipos de cookies utilizados:</strong>

      <ul>
        <li>
          <strong>Cookies Essenciais</strong>: Necessários para o funcionamento
          do site.
        </li>
        <li>
          <strong>Cookies de Análise</strong>: Usados para entender como os
          visitantes utilizam nosso site e melhorar sua funcionalidade.
        </li>
      </ul>

      <span className="separator-horizontal"></span>

      <h2>5. Segurança dos Dados</h2>
      <p>
        Implementamos medidas de segurança para proteger suas informações contra
        acessos não autorizados, alterações ou exclusões. No entanto, nenhuma
        transmissão de dados pela internet é 100% segura, e não podemos garantir
        a total segurança dos dados transmitidos por meio do site.
      </p>

      <span className="separator-horizontal"></span>

      <h2>6. Seus Direitos</h2>
      <p>
        <strong>Você tem o direito de: </strong>
      </p>
      <ul>
        <li>Solicitar acesso às informações que coletamos sobre você.</li>
        <li>Corrigir ou excluir seus dados pessoais armazenados.</li>
        <li>
          Revogar seu consentimento para coleta de dados, quando aplicável.
        </li>
      </ul>

      <p>
        Para exercer seus direitos, entre em contato conosco por meio do e-mail
        fornecido na seção de contato.
      </p>

      <span className="separator-horizontal"></span>

      <h2>7. Alterações na Política de Privacidade</h2>
      <p>
        Esta política pode ser atualizada periodicamente para refletir
        alterações nas leis ou no funcionamento do site. Recomendamos revisitar
        esta página regularmente para estar ciente de eventuais mudanças.
      </p>

      <span className="separator-horizontal"></span>

      <h2>8. Contato</h2>
      <strong>
        Caso tenha dúvidas sobre esta Política de Privacidade ou o uso de suas
        informações, entre em contato conosco:
      </strong>
      <ul>
        <li>
          <strong>E-mail</strong>: <Link to="/contact">oline9473@gmail.com</Link>
        </li>
        <li>
          <strong>Formulário de Contato</strong>: <Link to="/contact"> Página de Contato</Link>
        </li>
      </ul>

      <p>Agradecemos sua confiança e comprometimento com nossa plataforma!</p>
    </section>
  );
};

export default PagePrivacityPolicy;
