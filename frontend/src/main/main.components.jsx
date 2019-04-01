import React, { Fragment } from "react"
import { connect } from "react-redux"
import { Routes } from "./routes/routes.main"
import { userReducer, loggedReducer } from "../redux/reducers/user/user.reducer"
import { Nav } from "../components/navbar/navbar.component"

const MainComponent = ({ logged, user }) => {
  return (
    <Fragment>
      <Nav logged={logged} />
      <Routes />
    </Fragment>
  )
}

const mapStateToProps = state => ({
  logged: loggedReducer(state),
  user: userReducer(state)
})

export const Main = connect(mapStateToProps)(MainComponent)
