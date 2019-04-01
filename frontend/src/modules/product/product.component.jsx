import React, { useEffect } from "react"
import { connect } from "react-redux"
import { listProduct } from "../../request/product/index"
import { getFetchedProduct } from "../../redux/reducers/product/product.reducer"
import { CardProduct } from "../../components/product/product-card.component"
import { Row } from "react-materialize"
import { loggedReducer } from "../../redux/reducers/user/user.reducer"

const product = ({ products, list, isLogged }) => {
  useEffect(() => {
    list()
  }, [])

  return (
    <Row>
      {Array.isArray(products) &&
        products.map((p, index) => (
          <CardProduct product={p} key={index} isLogged={isLogged} />
        ))}
      {!isLogged && (
        <div className="center-align">
          <h2>Faça o login para visualizar</h2>
        </div>
      )}
    </Row>
  )
}

const mapStateToProps = state => ({
  products: getFetchedProduct(state),
  isLogged: loggedReducer(state)
})

const mapDispatchToProps = dispatch => ({
  list: () => listProduct({ dispatch })
})

export const ProductComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(product)
