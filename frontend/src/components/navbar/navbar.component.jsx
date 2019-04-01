import React, { Fragment } from "react"
import { connect } from "react-redux"
import { Navbar, NavItem } from "react-materialize"
import Modal from "../../components/modal/modal.component"
import { modalOpen } from "../../redux/reducers/modal/modal.reducer"
import { Signup } from "../../modules/user/signup"
import { signOut } from "../../redux/reducers/user/user.reducer"

export const NavComponent = ({ logged, openModal, signOut }) => (
  <Fragment>
    <Navbar brand={<a>Wtt</a>} alignLinks="right">
      {!logged && (
        <NavItem onClick={e => openModal("signUpModal")}>Cadastrar</NavItem>
      )}
      {!logged && (
        <NavItem onClick={e => openModal("loginModal")}>Login</NavItem>
      )}
      {logged && <NavItem>Minha conta</NavItem>}
      {logged && <NavItem>Produtos</NavItem>}
      {logged && <NavItem onClick={signOut}>Sair</NavItem>}
    </Navbar>
    <Modal id="loginModal" />
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
