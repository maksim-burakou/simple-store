import { ProductCard } from '.'
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react'
import { CartContextProvider } from '../../contexts/cart'
import { BrowserRouter as Router } from 'react-router-dom'
import { productStatus } from '../../models/productStatus'

it('ProductCard renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <CartContextProvider>
      <Router>
        <ProductCard />
      </Router>
    </CartContextProvider>,
    div
  )
})

describe('ProductCars renders correctly', () => {
  const testValues = {
    id: 0,
    image:
      'https://cdn.pixabay.com/photo/2021/01/05/05/30/grapes-5889697_960_720.jpg',
    title: 'Grapes',
    info: '1kg',
    status: productStatus.none,
    price: 3,
    prevPrice: 5,
  }

  it('renders Title correctly', () => {
    const { getByTestId } = render(
      <CartContextProvider>
        <Router>
          <ProductCard
            id={testValues.id}
            image={testValues.image}
            title={testValues.title}
            info={testValues.info}
            status={testValues.status}
            price={testValues.price}
            prevPrice={testValues.prevPrice}
          />
        </Router>
      </CartContextProvider>
    )
    expect(getByTestId('product-dard__test--title').textContent).toBe(
      testValues.title
    )
  })
  it('renders Info correctly', () => {
    const { getByTestId } = render(
      <CartContextProvider>
        <Router>
          <ProductCard
            id={testValues.id}
            image={testValues.image}
            title={testValues.title}
            info={testValues.info}
            status={testValues.status}
            price={testValues.price}
            prevPrice={testValues.prevPrice}
          />
        </Router>
      </CartContextProvider>
    )
    expect(getByTestId('product-dard__test--info').textContent).toBe(
      testValues.info
    )
  })
  it('renders Price correctly', () => {
    const { getByTestId } = render(
      <CartContextProvider>
        <Router>
          <ProductCard
            id={testValues.id}
            image={testValues.image}
            title={testValues.title}
            info={testValues.info}
            status={testValues.status}
            price={testValues.price}
            prevPrice={testValues.prevPrice}
          />
        </Router>
      </CartContextProvider>
    )
    expect(getByTestId('product-dard__test--price').textContent).toBe(
      `${testValues.price}$`
    )
  })
  it('renders Image correctly', () => {
    const { getByTestId } = render(
      <CartContextProvider>
        <Router>
          <ProductCard
            id={testValues.id}
            image={testValues.image}
            title={testValues.title}
            info={testValues.info}
            status={testValues.status}
            price={testValues.price}
            prevPrice={testValues.prevPrice}
          />
        </Router>
      </CartContextProvider>
    )
    expect(getByTestId('product-dard__test--image').getAttribute('src')).toBe(
      testValues.image
    )
  })
})
