import { useState, useEffect } from 'react'
import { useCartContext } from '../contexts/cart'
import { products } from '../mocks/products'
import { getProduct } from './useCart'

export const useProduct = () => {
  const [isActive, setIsActive] = useState(true)
  const { cartList, addPurchase, modifyPurchaseAmount, totalPrice } =
    useCartContext()

  const pathnameArray = window.location.hash.split('/')
  const productId = pathnameArray[pathnameArray.length - 1]
  const poductInCartInfo = getProduct(Number(productId), cartList)
  const productInfo = getProduct(Number(productId), products.flat())

  useEffect(() => {
    !!cartList.find((purchase) => purchase.id === Number(productId))
      ? setIsActive(false)
      : setIsActive(true)
  }, [cartList, productId])

  const handlePurchase = (e, id, title, price) => {
    e.preventDefault()
    addPurchase(id, title, price)
    setIsActive(false)
  }

  return {
    isActive,
    productInfo,
    poductInCartInfo,
    handlePurchase,
    modifyPurchaseAmount,
    totalPrice,
  }
}
