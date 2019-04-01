import React, { Fragment } from "react"
import { connect } from "react-redux"
import { Navbar, NavItem } from "react-materialize"
import Modal from "../../components/modal/modal.component"
import { modalOpen } from "../../redux/reducers/modal/modal.reducer"
import { Signup } from "../../modules/user/signup"
import { Login } from "../../modules/user/login"
import { signOut } from "../../redux/reducers/user/user.reducer"
import { redirect } from "../../redux/main.redux"

export const NavComponent = ({ logged, openModal, signOut }) => (
  <Fragment>
    <Navbar brand={<a>Wtt</a>} alignLinks="right">
      {!logged && (
        <NavItem onClick={e => openModal("signUpModal")}>Cadastrar</NavItem>
      )}
      {!logged && (
        <NavItem onClick={e => openModal("loginModal")}>Login</NavItem>
      )}
      {logged && (
        <NavItem onClick={e => redirect("/product")}>Inserir produto</NavItem>
      )}
      {logged && <NavItem onClick={e => redirect("/")}>Produtos</NavItem>}
      {logged && <NavItem onClick={signOut}>Sair</NavItem>}
    </Navbar>
    <Modal id="loginModal" content={<Login />} />
    <Modal id="signUpModal" content={<Signup />} />
  </Fragment>
)

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({
  openModal: id => modalOpen({ dispatch, id }),
  signOut: e => signOut({ dispatch })
})

export const Nav = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavComponent)
