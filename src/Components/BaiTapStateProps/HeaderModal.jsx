import React from 'react'

const HeaderModal = ({ type, onHide }) => {
  return (
    <div className='modal-header'>
      <h5 className='modal-title'>{type === 'deposit' ? 'Deposit Money' : 'Withdraw Money'}</h5>
      <button type='button' className='btn-close' aria-label='Close' onClick={onHide}></button>
    </div>
  )
}

export default HeaderModal