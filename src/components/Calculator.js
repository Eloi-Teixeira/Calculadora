import React from 'react';
import { ReactComponent as PiSvg } from '../assets/icons/pi.svg';
import { ReactComponent as RootSvg } from '../assets/icons/root.svg';
import { ReactComponent as PercentSvg } from '../assets/icons/percent.svg';
import { ReactComponent as WeightSvg } from '../assets/icons/weight.svg';
import { ReactComponent as TriangleSvg } from '../assets/icons/triangle.svg';
import { ReactComponent as AngleSvg } from '../assets/icons/angle.svg';
import { NavLink } from 'react-router-dom';

const Calculator = () => {
  return (
    <section className="section-container calc-container">
      <h1>Navegue entre os nossas formulas</h1>
      <ul>
        <li>
          <NavLink to="/calc/algebra">
            <PiSvg />
            Álgebra
          </NavLink>
        </li>
        <li>
          <NavLink to="/calc/percent">
            <PercentSvg />
            Porcentagem
          </NavLink>
        </li>
        <li>
          <NavLink to="/calc/root">
            <RootSvg />
            Radiciação
          </NavLink>
        </li>
        <li>
          <NavLink to="/calc/geometry">
            <TriangleSvg />
            Geométria
          </NavLink>
        </li>
        <li>
          <NavLink to="/calc/angle">
            <AngleSvg />
            Angulo
          </NavLink>
        </li>
        <li>
          <NavLink to="/calc/weight">
            <WeightSvg />
            Peso
          </NavLink>
        </li>
      </ul>
    </section>
  );
};

export default Calculator;
