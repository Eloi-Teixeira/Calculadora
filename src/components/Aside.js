import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as PiSvg } from '../assets/imgs/icons/pi.svg';
import { ReactComponent as RootSvg } from '../assets/imgs/icons/root.svg';
import { ReactComponent as PercentSvg } from '../assets/imgs/icons/percent.svg';
import { ReactComponent as WeightSvg } from '../assets/imgs/icons/weight.svg';
import { ReactComponent as TriangleSvg } from '../assets/imgs/icons/triangle.svg';
import { ReactComponent as AngleSvg } from '../assets/imgs/icons/angle.svg';
import { ReactComponent as BoxArrowSvg } from '../assets/imgs/icons/box-arrow.svg';

const Aside = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleActiveAsideMenu = () => {
    const headerContent = document.querySelector('.header-content');
    const linkHomeSpan = document.querySelector('.nav-pages li span');
    const logoContainer = document.querySelector('.logo-container');

    setExpanded(!expanded);

    if (expanded) {
      headerContent.style.borderEndStartRadius = '30px';
      logoContainer.style.borderEndEndRadius = '50%';
      linkHomeSpan.classList.remove('aside-expanded');
    } else {
      logoContainer.style.borderEndEndRadius = '0';
      headerContent.style.borderRadius = '0';
      linkHomeSpan.classList.add('aside-expanded');
    }
  };

  return (
    <aside className={`aside-container ${expanded ? 'expanded' : ''}`}>
      <nav className="aside-menu">
        <NavLink to="/algebra">
          <PiSvg />
          <span className={`text-option`}>Algebra</span>
        </NavLink>
        <NavLink to="percent">
          <PercentSvg />
          <span className={`text-option`}>Porcentagem</span>
        </NavLink>
        <NavLink to='radiation'>
          <RootSvg />
          <span className={`text-option`}>Radiciação</span>
        </NavLink>
        <NavLink to="geometry">
          <TriangleSvg />
          <span className={`text-option`}>Geométria</span>
        </NavLink>
        <NavLink to="angle">
          <AngleSvg />
          <span className={`text-option`}>Angulo</span>
        </NavLink>
        <NavLink to="weight">
          <WeightSvg />
          <span className={`text-option`}>Peso</span>
        </NavLink>
        <button onClick={handleActiveAsideMenu}>
          <BoxArrowSvg className={`${expanded ? '' : 'active'}`} />
          <span className={`text-option`}>Reduzir</span>
        </button>
      </nav>
    </aside>
  );
};

export default Aside;
