import React, { Fragment } from "react"
import { connect } from "react-redux"
import { Field, reduxForm } from "redux-form"
import { RenderInput } from "../../redux/form/renderInput"
import { insertUser } from "../../request/user/index"

const signupComponent = ({ handleSubmit, insert }) => {
  return (
    <div className="row">
      <form className="col s12" onSubmit={handleSubmit(insert)}>
        <div className="row">
          <div className="input-field col s12">
            <Field
              name="nome"
              component={RenderInput}
              type="text"
              label="Nome"
            />
          </div>
          <div className="input-field col s12">
            <Field
              name="Email"
              component={RenderInput}
              type="text"
              label="Email"
            />
          </div>
          <div className="input-field col s12">
            <Field
              name="Senha"
              component={RenderInput}
              type="password"
              label="Senha"
            />
          </div>
          <div className="input-field col s12">
            <button type="submit" class="waves-effect waves-light btn">
              Cadastrar
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({
  insert: values => insertUser({ values, dispatch })
})
export const Signup = connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm({ form: "signup" })(signupComponent))
