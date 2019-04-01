import React from "react"
import { connect } from "react-redux"
import { reduxForm, Field } from "redux-form"
import { RenderInput } from "../../redux/form/renderInput"

const productForm = () => {
  return (
    <form className="row input-field">
      <div className="col s12">
        <Field name="name" component={RenderInput} type="text" label="Nome" />
      </div>
      <div className="col s12">
        <Field
          name="description"
          component={RenderInput}
          label="Descrição"
          textarea
        />
      </div>
    </form>
  )
}

export const ProductFormComponent = connect()(
  reduxForm({ form: "productForm" })(productForm)
)
