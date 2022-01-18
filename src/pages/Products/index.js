import { useState } from 'react'

import { ProductCard } from '../../components/ProductCard'
import { Grid } from '../../components/base/Grid'
import { Input } from '../../components/base/Input'
import { Loader } from '../../components/base/Loader'

import { useInfiniteScroll } from '../../hooks/useInfiniteScroll'
import { useDebounce } from '../../hooks/debounce'
import { products } from '../../mocks/products'

import {
  LOADER_ID,
  PRODUCT_LIST_ID,
  PRODUCT_SEARCH_INPUT_ID,
} from '../../constants'

import './styles.scss'

const LAZY_LOADING_MOCK_TIME = 1000

export const Products = () => {
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(0)
  const [productsList, setProductsList] = useState(products[page])
  const [isOver, setIsOver] = useState(false)

  const loadMoreProducts = () => {
    if (page === products.length - 1) {
      setIsOver(true)
      setIsLoading(false)
      return
    }
    setTimeout(() => {
      setProductsList((prevState) => [...prevState, ...products[page + 1]])
      setPage((prev) => prev + 1)
      setIsLoading(false)
    }, LAZY_LOADING_MOCK_TIME)
  }

  const [isLoading, setIsLoading] = useInfiniteScroll(loadMoreProducts)

  const searchHandler = (event) => {
    event.preventDefault()
    setSearch(event.target.value)
  }

  const getProductsToDisplay = () => {
    const result = productsList

    if (search) {
      const reg = new RegExp(search, 'i')
      return products.flat().filter((el) => el.title.match(reg) !== null)
    }

    return result
  }

  const productsToDisplay = useDebounce(getProductsToDisplay(), 500)

  return (
    <div className="products-wrapper">
      <Input
        id={PRODUCT_SEARCH_INPUT_ID}
        value={search}
        type="text"
        onChange={searchHandler}
        placeholder="Search..."
      />
      <div className="grid-wrapper">
        <Grid id={PRODUCT_LIST_ID}>
          {productsToDisplay.map((product, index) => (
            <ProductCard
              key={index}
              id={product.id}
              image={product.image}
              title={product.title}
              info={product.info}
              status={product.status}
              price={product.price}
              prevPrice={product.prevPrice}
            />
          ))}
        </Grid>
        <div className='products-status'>
          {!isOver && isLoading ? (
            <Loader id={LOADER_ID} />
          ) : (
            isOver && (
              <p className="no-more-products">There is no more products</p>
            )
          )}
        </div>
      </div>
    </div>
  )
}
