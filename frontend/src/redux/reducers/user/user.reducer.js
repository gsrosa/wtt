import {
  SET_TOKEN,
  SET_USER,
  LOG_USER,
  SIGN_OUT
} from "../../actions/user/user.action"

const userStorage = localStorage.getItem("user")
const tokenStorage = localStorage.getItem("token")
const loggedStorage = localStorage.getItem("logged")

const initialState = {
  user: userStorage ? userStorage : undefined,
  token: tokenStorage ? tokenStorage : undefined,
  logged: loggedStorage ? true : false
}

export const user = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return { ...state, token: action.payload }
    case SET_USER:
      return { ...state, user: action.payload }
    case LOG_USER:
      return { ...state, logged: action.payload }
    case SIGN_OUT:
      return { ...state, logged: false, token: undefined, user: undefined }
    default:
      return { ...state }
  }
}

export const setLogged = ({ dispatch, value }) => {
  localStorage.setItem("logged", value)
  dispatch({ type: LOG_USER, payload: value })
}
export const setToken = ({ dispatch, value }) => {
  localStorage.setItem("token", value)
  dispatch({ type: SET_TOKEN, payload: value })
}
export const setUser = ({ dispatch, value }) => {
  localStorage.setItem("user", value)
  dispatch({ type: SET_TOKEN, payload: value })
}
export const signOut = ({ dispatch }) => {
  localStorage.clear()
  dispatch({ type: SIGN_OUT, payload: undefined })
}

export const loggedReducer = state => state.user.logged
export const tokenReducer = state => state.user.token
export const userReducer = state => state.user.user
