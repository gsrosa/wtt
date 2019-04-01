import React from "react"
import { connect } from "react-redux"

const product = () => {
  return <h1>teste</h1>
}

export const ProductComponent = connect()(product)
