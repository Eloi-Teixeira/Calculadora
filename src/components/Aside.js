import React from 'react'
import { NavLink } from 'react-router-dom'
import {ReactComponent as PiSvg} from '../assets/imgs/icons/pi.svg'

const Aside = () => {
  return (
    <div>
      <nav>
        <NavLink><PiSvg />edw</NavLink>
      </nav>
    </div>
  )
}

export default Aside
