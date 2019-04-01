import { createApiRequest } from "../../redux/actions/api/api.action"

export const insertUser = ({ values, dispatch, onSuccess }) => {
  const url = "/user"
  return dispatch(
    createApiRequest({
      type: "USER",
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
