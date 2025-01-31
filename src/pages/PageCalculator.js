import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Algebra from '../components/Calculators/Algebra';
import Percent from '../components/Calculators/Percent';
import Rooting from '../components/Calculators/Rooting';
import Geometry from '../components/Calculators/Geometry';
import Angle from '../components/Calculators/Angle';
import Strength from '../components/Calculators/Strength';

const PageCalculator = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Algebra />} />
        <Route path="percent" element={<Percent />} />
        <Route path="rooting" element={<Rooting />} />
        <Route path="geometry" element={<Geometry />} />
        <Route path="angle" element={<Angle />} />
        <Route path="strength" element={<Strength />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default PageCalculator;
