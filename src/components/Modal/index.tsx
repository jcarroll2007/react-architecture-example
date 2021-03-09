import React from 'react'
import ReactModal from 'react-modal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

export const Modal: React.FunctionComponent<React.ComponentProps<typeof ReactModal>> = (props) => (
  <ReactModal style={customStyles} {...props} />
)
