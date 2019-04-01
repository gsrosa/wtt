import React, { Fragment } from "react"
import { connect } from "react-redux"
import { Field, reduxForm } from "redux-form"
import { RenderInput } from "../../redux/form/renderInput"
import { insertUser } from "../../request/user/index"
import {
  setLogged,
  setToken,
  setUser
} from "../../redux/reducers/user/user.reducer"
import { modalClose } from "../../redux/reducers/modal/modal.reducer"

const signupComponent = ({
  handleSubmit,
  insert,
  setLogged,
  setUser,
  setToken,
  closeModal
}) => {
  const onSucess = response => {
    const { name, email, _id, token } = response.data
    setLogged(true)
    setToken(token)
    setUser({ name, email, _id })
    closeModal("signUpModal")
    alert("cadastrado com sucesso")
  }
  return (
    <div className="row">
      <form className="col s12" onSubmit={handleSubmit(insert(onSucess))}>
        <div className="row">
          <div className="input-field col s12">
            <Field
              name="name"
              component={RenderInput}
              type="text"
              label="Nome"
            />
          </div>
          <div className="input-field col s12">
            <Field
              name="email"
              component={RenderInput}
              type="email"
              label="Email"
            />
          </div>
          <div className="input-field col s12">
            <Field
              name="password"
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
  insert: onSuccess => values => insertUser({ values, dispatch, onSuccess }),
  setLogged: value => setLogged({ dispatch, value }),
  setUser: value => setUser({ dispatch, value }),
  setToken: value => setToken({ dispatch, value }),
  closeModal: id => modalClose({ dispatch, id })
})
export const Signup = connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm({ form: "signup" })(signupComponent))
