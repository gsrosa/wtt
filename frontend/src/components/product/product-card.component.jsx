import React, { Fragment } from "react"
import { Button } from "react-materialize"

export const CardProduct = ({ product, isLogged }) => (
  <div class="col s12 m6 l4">
    <div class="card">
      <div class="card-image waves-effect waves-block waves-light">
        <img
          class="activator"
          src=" https://i1.wp.com/www.feedough.com/wp-content/uploads/2016/08/NEW-PRODUCT-DEVELOPMENT-03.png?resize=1280%2C620&ssl=1"
        />
      </div>
      <div class="card-content col s12">
        <div className="row card-title activator grey-text text-darken-4">
          <div className="col s11 truncate">{product.name}</div>
          <div className="col s1">
            <i class="material-icons right">more_vert</i>
          </div>
        </div>
        <p>Avaliação interna: {product.evaluation}</p>
      </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">
          {product.name}
          <i class="material-icons right">close</i>
        </span>
        <p>
          {isLogged ? (
            <Fragment>
              <div className="flex-between">
                <Button className="blue darken-2">Editar</Button>
                <Button className="red">Excluir</Button>
              </div>
              <p>Descrição: {product.description}</p>
            </Fragment>
          ) : (
            product.description
          )}
        </p>
      </div>
    </div>
  </div>
)
