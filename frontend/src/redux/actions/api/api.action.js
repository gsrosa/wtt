export const createApiRequest = ({
  type,
  context,
  url,
  method,
  data,
  params,
  success,
  pending,
  fail,
  headers,
  ...rest
}) => ({
  type: `${type}`,
  payload: {
    url,
    method,
    data,
    success,
    pending,
    fail,
    headers,
    ...rest
  },
  meta: {
    api: true,
    baseURL: "http://localhost:3000"
  }
})

export const apiSuccessAction = ({ type, data }) => ({
  type,
  payload: {
    data,
    pending: false
  }
})
export const apiPendingAction = ({ type }) => ({
  type,
  payload: {
    pending: true
  }
})
export const apiFailAction = ({ type, error }) => ({
  type,
  payload: { pending: false },
  error
})
