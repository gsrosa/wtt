import { SET_FETCHED_PRODUCT } from "../../actions/product/product.action"

const initialState = {
  listed: []
}

export const product = (state = initialState, action) => {
  switch (action.type) {
    case SET_FETCHED_PRODUCT:
      return { ...state, listed: action.payload }
    default:
      return { ...state }
  }
}

export const setFetchProduct = ({ value, dispatch }) =>
  dispatch({ type: SET_FETCHED_PRODUCT, payload: value })

export const getFetchedProduct = state => state.product.listed
