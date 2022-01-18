import ReactDOM from 'react-dom'
import { render } from '@testing-library/react'
import { PurchaseItem } from '.'
import { CartContextProvider } from '../../../contexts/cart'

it('PurchaseItem renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <CartContextProvider>
      <PurchaseItem />
    </CartContextProvider>,
    div
  )
})

describe('PurchaseItem renders correctly', () => {
  const testId = 1
  const testTitle = 'Nut'
  const testPrice = 12
  const testAmount = 1
  it('renders ID correctly', () => {
    const { getByTestId } = render(
      <CartContextProvider>
        <PurchaseItem
          id={testId}
          title={testTitle}
          price={testPrice}
          amount={testAmount}
        />
      </CartContextProvider>
    )
    expect(getByTestId('id').textContent).toBe(`Id: ${testId}`)
  })
  it('renders Title correctly', () => {
    const { getByTestId } = render(
      <CartContextProvider>
        <PurchaseItem
          id={testId}
          title={testTitle}
          price={testPrice}
          amount={testAmount}
        />
      </CartContextProvider>
    )
    expect(getByTestId('title').textContent).toBe(testTitle)
  })
  it('renders Price correctly', () => {
    const { getByTestId } = render(
      <CartContextProvider>
        <PurchaseItem
          id={testId}
          title={testTitle}
          price={testPrice}
          amount={testAmount}
        />
      </CartContextProvider>
    )
    expect(getByTestId('price').textContent).toBe(`Price: ${testPrice}$`)
  })
  it('renders Amount correctly', () => {
    const { getByTestId } = render(
      <CartContextProvider>
        <PurchaseItem
          id={testId}
          title={testTitle}
          price={testPrice}
          amount={testAmount}
        />
      </CartContextProvider>
    )
    expect(getByTestId('amount').textContent).toBe(String(testAmount))
  })
})
