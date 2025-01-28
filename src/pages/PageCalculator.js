import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Algebra from '../components/Calculators/Algebra'
import Percent from '../components/Calculators/Percent'

const PageCalculator = () => {
  return (
    <>
      <Routes>
      <Route path="algebra" element={<Algebra />} />
      <Route path="percent" element={<Percent />} />
      </Routes>
    </>
  )
}

export default PageCalculator
