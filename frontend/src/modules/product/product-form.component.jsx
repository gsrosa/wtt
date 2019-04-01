import React from "react"
import { connect } from "react-redux"
import { reduxForm, Field } from "redux-form"
import { RenderInput } from "../../redux/form/renderInput"
import { RenderRange } from "../../redux/form/renderRange"
import { Button, Row, Col } from "react-materialize"
import { insertProduct } from "../../request/product/index"

const productForm = ({ handleSubmit, insert }) => {
  const onSuccess = response => {
    alert("Produto cadastrado com sucesso")
  }

  return (
    <Row>
      <form className="input-field" onSubmit={handleSubmit(insert(onSuccess))}>
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
          <Button type="submit">Inserir</Button>
        </Col>
      </form>
    </Row>
  )
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({
  insert: onSuccess => values => insertProduct({ values, dispatch, onSuccess })
})

export const ProductFormComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm({ form: "productForm" })(productForm))
