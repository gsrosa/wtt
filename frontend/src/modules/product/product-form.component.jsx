import React, { useEffect } from "react"
import { connect } from "react-redux"
import { reduxForm, Field } from "redux-form"
import { RenderInput } from "../../redux/form/renderInput"
import { RenderRange } from "../../redux/form/renderRange"
import { Button, Row, Col } from "react-materialize"
import {
  insertProduct,
  update,
  listProductId
} from "../../request/product/index"
import { getFetchedProductId } from "../../redux/reducers/product/product.reducer"

const productForm = ({
  handleSubmit,
  insert,
  updateProduct,
  match,
  getProductById
}) => {
  const id = match.params.id

  useEffect(() => {
    getProductById(id)
  }, [])

  const onSuccess = response => {
    id === undefined
      ? alert("Produto cadastrado com sucesso")
      : alert("alterado com sucesso")
  }

  const submit = () =>
    id === undefined ? insert(onSuccess) : updateProduct(onSuccess, id)

  return (
    <Row>
      <form className="input-field" onSubmit={handleSubmit(submit())}>
        <Col s={12} m={6}>
          <Field name="name" component={RenderInput} type="text" label="Nome" />
        </Col>
        <Col s={12} m={6}>
          <Field
            name="evaluation"
            component={RenderRange}
            label="Avaliação interna"
            min={1}
            max={10}
          />
        </Col>
        <Col s={12}>
          <Field
            name="description"
            component={RenderInput}
            label="Descrição"
            textarea
          />
        </Col>
        <Col s={12} className="right-align">
          <Button type="submit" className=" light-green darken-1">
            {id === undefined ? "Inserir" : "Atualizar"}
          </Button>
        </Col>
      </form>
    </Row>
  )
}

const mapStateToProps = state => ({
  initialValues: getFetchedProductId(state)
})

const mapDispatchToProps = dispatch => ({
  insert: onSuccess => values => insertProduct({ values, dispatch, onSuccess }),
  updateProduct: (onSuccess, id) => values =>
    update({ values, dispatch, onSuccess, id }),
  getProductById: id => listProductId({ dispatch, id })
})

export const ProductFormComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm({ form: "productForm", enableReinitialize: true })(productForm))
