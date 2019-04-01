import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { listProduct, deleteProduct } from "../../request/product/index"
import { getFetchedProduct } from "../../redux/reducers/product/product.reducer"
import { CardProduct } from "../../components/product/product-card.component"
import { Row } from "react-materialize"
import { loggedReducer } from "../../redux/reducers/user/user.reducer"
import { redirect } from "../../redux/main.redux"

const product = ({ products, list, isLogged, productDelete }) => {
  const [deleted, setDeleted] = useState(false)

  useEffect(() => {
    list()
  }, [])

  useEffect(() => {
    deleted && list()
    setDeleted(false)
  }, [deleted])

  return (
    <Row>
      {Array.isArray(products) &&
        products.map((p, index) => {
          const onDelete = e => {
            const onSuccess = e => {
              alert("produto excluído com sucesso")
              setDeleted(true)
            }
            productDelete(onSuccess, p._id)
          }
          const onEdit = e => {
            redirect(`/product/${p._id}`)
          }

          return (
            <CardProduct
              product={p}
              key={index}
              isLogged={isLogged}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          )
        })}
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
  list: () => listProduct({ dispatch }),
  productDelete: (onSuccess, id) => deleteProduct({ dispatch, id, onSuccess })
})

export const ProductComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(product)
