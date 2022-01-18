import { Header } from '.'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { CartContextProvider } from '../../../contexts/cart'

it('ProductCard renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <CartContextProvider>
      <Router>
        <Header />
      </Router>
    </CartContextProvider>,
    div
  )
})