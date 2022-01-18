import { useCallback, useEffect, useState } from 'react'
import { amountTypeModification } from '../models/amountModifier'

const CART_STORAGE_KEY = '@store/cart'

const DEFAULT_CART_LIST = []

const getDefaultCartList = () => {
  const history = localStorage.getItem(CART_STORAGE_KEY)

  return history ? JSON.parse(history) : DEFAULT_CART_LIST
}

export const getProduct = (id, arr) => arr.find((purchase) => purchase.id === id)

export const useCart = () => {
  const [cartList, setCartList] = useState(getDefaultCartList)
  const [totalPrice, setTotalPrice] = useState()

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartList))
    setTotalPrice(
      cartList.reduce((acc, purchase) => {
        return acc + purchase.price * purchase.amount
      }, 0)
    )
  }, [cartList])

  const deletePurchase = useCallback((id) => {
    setCartList((prev) => prev.filter((purchase) => purchase.id !== id))
  }, [])

  const addPurchase = useCallback((id, title, price) => {
    const newPurchase = { id, title, price, amount: 1 }
    setCartList((prev) => [...prev, newPurchase])
  }, [])

  const getModifiedAmount = useCallback((amount, type) => {
    if (type === amountTypeModification.decr) {
      return amount === 1 ? amount : amount - 1
    }
    return amount + 1
  }, [])

  const modifyPurchaseAmount = useCallback(
    (id, amount, type) => {
      const currentPurschase = getProduct(id, cartList)
      const modifiedAmount = getModifiedAmount(amount, type)
      const modifiedPurschase = {
        ...currentPurschase,
        amount: modifiedAmount,
      }
      setCartList((prev) =>
        prev.map((purchase) => {
          if (purchase.id === modifiedPurschase.id) {
            return modifiedPurschase
          }
          return purchase
        })
      )
    },
    [cartList, getModifiedAmount]
  )

  return {
    cartList,
    totalPrice,
    deletePurchase,
    addPurchase,
    modifyPurchaseAmount,
  }
}
