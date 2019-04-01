import React, { Fragment } from "react"
import { connect } from "react-redux"
import { Navbar, NavItem } from "react-materialize"
import Modal from "../../components/modal/modal.component"
import { modalOpen } from "../../redux/reducers/modal/modal.reducer"

export const NavComponent = ({ logged, openModal }) => (
  <Fragment>
    <Navbar brand={<a>Wtt</a>} alignLinks="right">
      {!logged ? (
        <NavItem onClick={e => openModal("loginModal")}>Login</NavItem>
      ) : (
        <Fragment>
          <NavItem>Minha conta</NavItem>
          <NavItem>Produtos</NavItem>
        </Fragment>
      )}
    </Navbar>
    <Modal id="loginModal" />
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
