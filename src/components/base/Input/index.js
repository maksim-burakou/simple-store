import searchLogo from '../../../assets/loupe.png'

import './styles.scss'

export const Input = (props) => (
  <div className="input-wrapper">
    <img className="input__icon" src={searchLogo} alt="search" />
    <input className="input" {...props} />
  </div>
)
