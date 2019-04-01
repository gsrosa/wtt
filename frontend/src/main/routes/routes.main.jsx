import React from "react"
import { Route, Switch } from "react-router"
import { ProductComponent } from "../../modules/product/product.component"
import { ProductFormComponent } from "../../modules/product/product-form.component"

export const Routes = ({}) => (
  <Switch>
    <Route path="/" exact strict component={ProductComponent} />
    <Route path="/product" exact strict component={ProductFormComponent} />
  </Switch>
)
