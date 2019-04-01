import { createApiRequest } from "../../redux/actions/api/api.action"
import { setFetchProduct } from "../../redux/reducers/product/product.reducer"

export const insertProduct = ({ values, dispatch, onSuccess }) => {
  const url = "/product"
  console.log(values)
  return dispatch(
    createApiRequest({
      type: "PRODUCT",
      url,
      data: values,
      method: "POST",
      success: response => {
        onSuccess(response)
      },
      fail: response => {
        console.log(response)
      }
    })
  )
}

export const listProduct = ({ dispatch }) => {
  const url = "/product"
  return dispatch(
    createApiRequest({
      type: "PRODUCT",
      url,
      method: "GET",
      success: response => {
        setFetchProduct({ dispatch, value: response.data })
      },
      fail: response => {
        console.log(response)
      }
    })
  )
}

export const update = ({ dispatch, id, onSuccess, values }) => {
  const url = "/product/" + id
  return dispatch(
    createApiRequest({
      type: "PRODUCT",
      url,
      data: values,
      method: "PUT",
      success: response => {
        onSuccess(response)
      },
      fail: response => {
        console.log(response)
      }
    })
  )
}

export const deleteProduct = ({ dispatch, id, onSuccess }) => {
  const url = "/product/" + id
  return dispatch(
    createApiRequest({
      type: "PRODUCT",
      url,
      method: "DELETE",
      success: response => {
        onSuccess(response)
      },
      fail: response => {
        console.log(response)
      }
    })
  )
}
