import { Link } from 'react-router-dom'
import { Container } from '../Container'

import { Cart } from '../../Cart'

import logo from '../../../assets/badge.png'

import './styles.scss'

export const Header = () => (
  <header className="header">
    <Container>
      <div className="header__wrapper">
        <div className="logo">
          <Link className="logo__link" to="/">
            <img className="logo__image" src={logo} alt="logo" />
            <h1 className="logo__text">Store</h1>
          </Link>
        </div>
        <Cart />
      </div>
    </Container>
  </header>
)
