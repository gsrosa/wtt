import {
  SET_FETCHED_PRODUCT,
  CLEAR_PRODUCT
} from "../../actions/product/product.action"

const initialState = {
  listed: []
}

export const product = (state = initialState, action) => {
  switch (action.type) {
    case SET_FETCHED_PRODUCT:
      return { ...state, listed: action.payload }
    case CLEAR_PRODUCT:
      return { ...state, listed: [] }
    default:
      return { ...state }
  }
}

export const setFetchProduct = ({ value, dispatch }) =>
  dispatch({ type: SET_FETCHED_PRODUCT, payload: value })
export const clearProduct = ({ dispatch }) =>
  dispatch({ type: CLEAR_PRODUCT, payload: [] })

export const getFetchedProduct = state => state.product.listed
