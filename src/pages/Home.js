import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Intro from '../components/Intro'
import Algebra from '../components/Calculators/Algebra'

const Home = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Intro />} />
      <Route path='algebra' element={<Algebra />} />
    </Routes>
    </>
  )
}

export default Home
