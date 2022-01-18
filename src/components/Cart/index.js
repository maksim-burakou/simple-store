import { useState, useCallback } from 'react'

import { PurchaseItem } from '../base/PurchaseItem'

import { useClassNames } from '../../utils/classNames'
import cart from '../../assets/cart.png'

import './styles.scss'
import { useCartContext } from '../../contexts/cart'

const baseClassCart = 'cart'

export const Cart = () => {
  const [selected, setSelected] = useState(false)

  const { cartList, totalPrice } = useCartContext()

  const cartClassNames = useClassNames({ __selected: selected }, baseClassCart)

  const toggleCart = useCallback(() => {
    setSelected((prevValue) => !prevValue)
  }, [])

  return (
    <>
      <button className="cart-button" onClick={toggleCart}>
        <img className="cart-button__image" src={cart} alt="cart-icon" />
        {!!cartList.length && (
          <div className="notification">
            <span>{cartList.length}</span>
          </div>
        )}
      </button>
      <div className={cartClassNames}>
        <div className={`${baseClassCart}__header`}>
          <h3>Cart</h3>
          <button onClick={toggleCart}>X</button>
        </div>
        <div className={`${baseClassCart}__list`}>
          {cartList.map((item) => (
            <PurchaseItem
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              amount={item.amount}
            />
          ))}
        </div>
        <div className={`${baseClassCart}__footer`}>
          <h3>
            Total price: <span>{`${totalPrice}$`}</span>
          </h3>
          <button onClick={toggleCart}>Order now</button>
        </div>
      </div>
    </>
  )
}
