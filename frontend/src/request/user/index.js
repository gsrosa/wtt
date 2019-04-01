import { createApiRequest } from "../../redux/actions/api/api.action"

export const insertUser = ({ values, dispatch }) => {
  const url = "/user"

  return dispatch(
    createApiRequest({
      type: "USER",
      url,
      data: { ...values },
      method: "POST",
      success: response => {
        console.log(response)
      },
      fail: response => {
        console.log(response)
      }
    })
  )
}
