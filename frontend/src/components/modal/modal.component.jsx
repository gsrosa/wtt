import React, { useState, useEffect } from "react"
import Modal from "react-modal"
import { connect } from "react-redux"
import {
  modalClose,
  modalStateSelector
} from "../../redux/reducers/modal/modal.reducer"
import { breakpoints } from "../breakpoints"

const customStyles = ({ width = 40, ws, wm, wl, wxl }) => {
  const screen = window.screen.availWidth

  if (screen <= breakpoints.medium) width = ws !== undefined ? ws : 100
  if (screen <= breakpoints.large) width = wm ? wm !== undefined : 80
  if (screen < breakpoints.extralarge) width = wl !== undefined ? wl : 65
  if (screen >= breakpoints.extralarge) width = wxl !== undefined ? wxl : 40

  return {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      width: width + "%",
      minHeight: "30%",
      transform: "translate(-50%, -50%)",
      padding: "0px",
      transition: "all 0.2s"
    }
  }
}

Modal.setAppElement("#root")
const ModalComponent = ({
  id,
  content,
  modalState,
  ws = undefined,
  wm = undefined,
  wl = undefined,
  wxl = undefined,
  closeModal
}) => {
  const [modalIsOpen, setVisible] = useState(false)

  useEffect(() => {
    console.log(modalState)
    if (modalState !== undefined) {
      modalState.id === id && setVisible(modalState.visible)
    }
  }, [modalState])

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={e => closeModal(id)}
      style={customStyles({ ws, wm, wl, wxl })}
      closeTimeoutMS={200}
    >
      {content}
    </Modal>
  )
}

const mapStateToProps = state => ({
  modalState: modalStateSelector(state)
})
const mapDispatchToProps = dispatch => ({
  closeModal: id => modalClose({ dispatch, id })
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalComponent)
