import React from 'react'

const FooterModal = ({onHide, handleTransaction }) => {
  return (
    <div className='modal-footer'>
      <button type='button' className='btn btn-secondary' onClick={onHide}>Close</button>
      <button type='button' className='btn btn-primary' onClick={handleTransaction}>Ok</button>
    </div>
  )
}

export default FooterModal