import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Algebra from '../components/Calculators/Algebra'

const PageCalculator = () => {
  return (
    <>
      <Routes>

      <Route path="algebra" element={<Algebra />} />
      </Routes>
    </>
  )
}

export default PageCalculator
