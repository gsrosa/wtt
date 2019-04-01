import {
  apiFailAction,
  apiPendingAction,
  apiSuccessAction
} from "../actions/api/api.action"
import axios from "axios"

const api = ({ getState, dispatch }) => next => async action => {
  if (!action.meta || !action.meta.api) return next(action)
  else {
    next(action)

    const { url, method, params, data } = action.payload
    const { pending, success, fail } = action.payload
    const { baseURL } = action.meta
    const { headers } = action.payload
    try {
      dispatch(
        apiPendingAction({
          type: `${action.type}_PENDING`
        })
      )
      if (pending) pending()

      const response = await axios.default({
        url: `${baseURL}${url ? url : ""}`,
        timeout: 50000,
        method,
        params,
        data,
        headers: {
          "Access-Control-Allow-Headers":
            "Content-Type, Authorization, Access-Control-Allow-Origin, Access-Control-Allow-Headers, x-access-token",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "*",
          lang: "pt-br",
          "x-application-type": "application/json",
          "x-access-token": getState().session.token,
          crossDomain: true,

          ...headers
        }
      })
      dispatch(
        apiSuccessAction({
          type: `${action.type}_SUCCESS`,
          data: response
        })
      )
      if (success) success(response)
    } catch (error) {
      dispatch(
        apiFailAction({
          type: `${action.type}_FAIL`,
          error: error.response
        })
      )
      if (fail) {
        console.log(error)
        fail(error.response)
      }
    }
  }
}
export default api
