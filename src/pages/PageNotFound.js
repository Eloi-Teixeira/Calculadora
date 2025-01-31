import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <section className='section-container'>
      <h1>Página não encontrada</h1>
      <p>A página que você está procurando não foi encontrada.</p>
      <p>Verifique se o endereço está correto ou tente novamente mais tarde.</p>
      <p>Voltar para a <Link href='/'>página inicial</Link></p>
    </section>
  )
}

export default PageNotFound
