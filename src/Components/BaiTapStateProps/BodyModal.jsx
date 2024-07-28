import React from 'react'

const BodyModal = ({ amount, setAmount }) => {
  return (
    <div className='modal-body'>
      <div className='mb-3'>
          <label htmlFor="amount" className='form-label'>Amount</label>
          <input type="text" className='form-control' id='amount' value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Enter amount' />
      </div>
    </div>
  )
}

export default BodyModal