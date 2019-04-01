import React, { Fragment } from "react"
import { connect } from "react-redux"
import { Field, reduxForm } from "redux-form"
import { RenderInput } from "../../redux/form/renderInput"
import { login } from "../../request/user/index"
import {
  setLogged,
  setToken,
  setUser
} from "../../redux/reducers/user/user.reducer"
import { modalClose } from "../../redux/reducers/modal/modal.reducer"

const signupComponent = ({
  handleSubmit,
  login,
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
    closeModal("loginModal")
  }
  return (
    <div className="row">
      <form className="col s12" onSubmit={handleSubmit(login(onSucess))}>
        <div className="row">
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
          <div className="input-field col s12 right-align">
            <button type="submit" class="waves-effect waves-light btn">
              Entrar
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({
  login: onSuccess => values => login({ values, dispatch, onSuccess }),
  setLogged: value => setLogged({ dispatch, value }),
  setUser: value => setUser({ dispatch, value }),
  setToken: value => setToken({ dispatch, value }),
  closeModal: id => modalClose({ dispatch, id })
})
export const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm({ form: "signup" })(signupComponent))
