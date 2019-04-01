import React, { useEffect, Fragment } from "react"
import { connect } from "react-redux"
import { listProduct } from "../../request/product/index"
import { getFetchedProduct } from "../../redux/reducers/product/product.reducer"

const product = ({ products, list }) => {
  useEffect(() => {
    list()
  }, [])

  return (
    <Fragment>
      {products.map((p, index) => (
        <div>{p.name}</div>
      ))}
    </Fragment>
  )
}

const mapStateToProps = state => ({
  products: getFetchedProduct(state)
})

const mapDispatchToProps = dispatch => ({
  list: () => listProduct({ dispatch })
})

export const ProductComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(product)
