import { useProduct } from '../../hooks/useProduct'
import { productStatus } from '../../models//productStatus'
import { amountTypeModification } from '../../models/amountModifier'
import './styles.scss'

export const Product = () => {
  const {
    isActive,
    productInfo,
    poductInCartInfo,
    handlePurchase,
    modifyPurchaseAmount,
    totalPrice,
  } = useProduct()

  return (
    <section className="product">
      <div className="product__header">
        <h1 className="product__title">
          {productInfo.title}
          {productInfo.status === productStatus.onSales ? (
            <span>, ON SALE!</span>
          ) : productInfo.status === productStatus.goodPrice ? (
            <span>, GOOF PRICE!</span>
          ) : null}
        </h1>
      </div>
      <div className="product__content">
        <img className="product__image" src={productInfo.image} alt="product" />
        <div className="product__info">
          <div className="info__header">
            <h2>About product:</h2>
            <p>
              <span>Info: </span>
              {productInfo.title}
            </p>
            <div className="product__price">
              <span>Price: </span>
              {productInfo.status === productStatus.onSales ? (
                <h1 className="product-price--current --sales">
                  {`${productInfo.price}$ `}
                  <span className="product-price--prev">{`${productInfo.prevPrice}$`}</span>
                </h1>
              ) : (
                <h1
                  className={`product-price--current ${
                    productInfo.status === productStatus.goodPrice
                      ? '--good-price'
                      : ''
                  }`}
                >
                  {`${productInfo.price}$`}
                </h1>
              )}
              {!productInfo.price && (
                <h1 className="product-price--current">not defined</h1>
              )}
            </div>
            <div className="product__amount">
              <p>Amount: </p>
              {poductInCartInfo?.hasOwnProperty('amount') ? (
                <>
                  <button
                    className="amount__button"
                    onClick={() =>
                      modifyPurchaseAmount(
                        productInfo.id,
                        poductInCartInfo.amount,
                        amountTypeModification.decr
                      )
                    }
                  >
                    -
                  </button>
                  <span>{poductInCartInfo.amount}</span>
                  <button
                    className="amount__button"
                    onClick={() =>
                      modifyPurchaseAmount(
                        productInfo.id,
                        poductInCartInfo.amount,
                        amountTypeModification.incr
                      )
                    }
                  >
                    +
                  </button>
                </>
              ) : (
                <span>You dont have this product in your cart yet</span>
              )}
            </div>
            {poductInCartInfo?.hasOwnProperty('amount') && (
              <div className="product__price">
                <span>Total price:</span>
                <span>{`${totalPrice}$`}</span>
              </div>
            )}
          </div>
          <div className="info__footer">
            <button
              disabled={!isActive}
              className={`product-card__button ${isActive ? '' : '--disabled'}`}
              onClick={(e) =>
                handlePurchase(
                  e,
                  productInfo.id,
                  productInfo.title,
                  productInfo.price
                )
              }
            >
              {isActive ? 'Add to trolley' : 'Already in the cart'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
