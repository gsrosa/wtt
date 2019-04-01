import React, { Fragment } from "react"
import { connect } from "react-redux"
import { Navbar, NavItem } from "react-materialize"
import Modal from "../../components/modal/modal.component"
import { modalOpen } from "../../redux/reducers/modal/modal.reducer"

import { Signup } from "../../modules/user/signup"

export const NavComponent = ({ logged, openModal }) => (
  <Fragment>
    <Navbar brand={<a>Wtt</a>} alignLinks="right">
      {!logged ? (
        <Fragment>
          <NavItem onClick={e => openModal("signUpModal")}>Cadastrar</NavItem>
          <NavItem onClick={e => openModal("loginModal")}>Login</NavItem>
        </Fragment>
      ) : (
        <Fragment>
          <NavItem>Minha conta</NavItem>
          <NavItem>Produtos</NavItem>
        </Fragment>
      )}
    </Navbar>
    <Modal id="loginModal" />
    <Modal id="signUpModal" content={<Signup />} />
  </Fragment>
)

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({
  openModal: id => modalOpen({ dispatch, id })
})

export const Nav = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavComponent)
