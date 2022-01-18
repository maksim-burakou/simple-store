import React, { useContext } from 'react'
import { useCart } from '../hooks/useCart'

export const CartContext = React.createContext(null)

CartContext.displayName = 'CartContext'

export const CartContextProvider = (props) => {
  const {
    cartList,
    totalPrice,
    deletePurchase,
    addPurchase,
    modifyPurchaseAmount,
  } = useCart()
  return (
    <CartContext.Provider
      value={{
        cartList,
        totalPrice,
        deletePurchase,
        addPurchase,
        modifyPurchaseAmount,
      }}
      {...props}
    />
  )
}

export const useCartContext = () => useContext(CartContext)
