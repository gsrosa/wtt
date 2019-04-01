import {
  MODAL_REACT_CLOSE,
  MODAL_REACT_OPEN
} from "../../actions/modal/modal.actions"

const initialState = {
  reactModal: undefined
}

export const modal = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_REACT_OPEN: {
      return { ...state, reactModal: action.payload }
    }
    case MODAL_REACT_CLOSE: {
      return { ...state, reactModal: action.payload }
    }

    default:
      return state
  }
}

export const modalStateSelector = state => state.modal.reactModal

export const modalClose = ({ dispatch, id }) =>
  dispatch({ type: MODAL_REACT_CLOSE, payload: { visible: false, id } })

export const modalOpen = ({ dispatch, id }) =>
  dispatch({ type: MODAL_REACT_OPEN, payload: { visible: true, id } })
