import {
  SET_FETCHED_PRODUCT,
  CLEAR_PRODUCT,
  SET_FETCHED_PRODUCT_ID
} from "../../actions/product/product.action"

const initialState = {
  listed: [],
  id: {}
}

export const product = (state = initialState, action) => {
  switch (action.type) {
    case SET_FETCHED_PRODUCT:
      return { ...state, listed: action.payload }
    case SET_FETCHED_PRODUCT_ID:
      return { ...state, id: action.payload }
    case CLEAR_PRODUCT:
      return { ...state, listed: [] }
    default:
      return { ...state }
  }
}

export const setFetchProduct = ({ value, dispatch }) =>
  dispatch({ type: SET_FETCHED_PRODUCT, payload: value })

export const setFetchProductId = ({ value, dispatch }) =>
  dispatch({ type: SET_FETCHED_PRODUCT_ID, payload: value })

export const clearProduct = ({ dispatch }) =>
  dispatch({ type: CLEAR_PRODUCT, payload: [] })

export const getFetchedProduct = state => state.product.listed
export const getFetchedProductId = state => state.product.id
