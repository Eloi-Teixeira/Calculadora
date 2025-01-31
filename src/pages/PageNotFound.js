import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <section className='section-container'>
      <h1>Página não encontrada</h1>
      <ul>
        <li>A página que você está procurando não foi encontrada.</li>
        <li>Verifique se o endereço está correto ou tente novamente mais tarde.</li>
        <li>Voltar para a <Link href='/'>página inicial</Link></li>
      </ul>
    </section>
  )
}

export default PageNotFound
