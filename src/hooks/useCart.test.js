import { useCart } from './useCart'
import { act, renderHook } from '@testing-library/react-hooks'

import { amountTypeModification } from '../models/amountModifier'

describe('test useCart', () => {
  it('add purchase', () => {
    const { result } = renderHook(useCart)

    act(() => {
      result.current.addPurchase(1, 'title', 10)
    })

    expect(result.current.cartList.length).toBe(1)
  })
  it('delete purchase', () => {
    const { result } = renderHook(useCart)

    act(() => {
      result.current.addPurchase(1, 'testTitle', 10)
      result.current.deletePurchase(1)
    })

    expect(result.current.cartList.length).toBe(0)
  })
  it('Modify purchase', () => {
    const { result } = renderHook(useCart)

    act(() => {
      result.current.addPurchase(1, 'testTitle', 10)
      result.current.modifyPurchaseAmount(1, 1, amountTypeModification.decr)
    })

    expect(result.current.cartList[0].amount).toBe(1)
  })
  it('TotalPrice count', () => {
    const { result } = renderHook(useCart)

    act(() => {
      result.current.addPurchase(2, 'testTitle', 10)
    })

    expect(result.current.totalPrice).toBe(20)
  })
})
