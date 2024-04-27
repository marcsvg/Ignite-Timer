import { Scroll, Timer } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import { HeaderContainer } from './styles'

import logoIgnite from '../../assets/logo-ignite.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img
        src={logoIgnite}
        alt="Dois triângulos verdes na diagonal trazendo a representação de um foguete"
      />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
