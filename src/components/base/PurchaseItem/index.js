import { useCartContext } from '../../../contexts/cart'

import { amountTypeModification } from '../../../models/amountModifier'

import './styles.scss'

export const PurchaseItem = ({ id, title, price, amount }) => {
  const { deletePurchase, modifyPurchaseAmount } = useCartContext()
  const decreaseAmount = () =>
    modifyPurchaseAmount(id, amount, amountTypeModification.decr)
  const increaseAmount = () =>
    modifyPurchaseAmount(id, amount, amountTypeModification.incr)
  const deleteItem = () => deletePurchase(id)
  return (
    <div className="purchase">
      <h3 data-testid="title" className="purchase__title">
        {title}
      </h3>
      <div className="purchase__amount">
        <p>Amount: </p>
        <button className="amount__button" onClick={decreaseAmount}>
          -
        </button>
        <span data-testid="amount">{amount}</span>
        <button className="amount__button" onClick={increaseAmount}>
          +
        </button>
      </div>
      <div className="purchase__info">
        <p data-testid="id" className="purchase__id">
          Id: {id}
        </p>
        <p data-testid="price" className="purchase__price">
          Price: {`${price * amount}$`}
        </p>
      </div>
      <button className="purchase__button" onClick={deleteItem}>
        X
      </button>
    </div>
  )
}
