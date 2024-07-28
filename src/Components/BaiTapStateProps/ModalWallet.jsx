import React, { useState } from 'react'
import HeaderModal from './HeaderModal';
import BodyModal from './BodyModal';
import FooterModal from './FooterModal';

const ModalWallet = ({ show, type, onHide, onTransaction }) => {
  // Khai báo state amount để quản lý số tiền nhập vào, khởi tạo là chuỗi rỗng.
  const [amount, setAmount] = useState('')
  // Hàm xử lý giao dịch
  const handleTransaction = () => {
    // Chuyển đổi giá trị amount từ chuỗi sang số
    const numericAmount = parseFloat(amount);

    // Kiểm tra xem numericAmount có hợp lệ và lớn hơn 0 không.
    if (!isNaN(numericAmount) & numericAmount > 0) {
      // Gọi hàm onTransaction với số tiền và loại giao dịch, sau đó đặt lại amount và đóng modal
      onTransaction(numericAmount, type);
      setAmount('');
      onHide();
    }
  }
  return (
    <div className={`modal ${show && 'show'}`} style={{ display: show ? 'block' : 'none' }} aria-hidden={!show}>
      <div className="modal-dialog">
        <div className="modal-content">
            <HeaderModal type={type} onHide={onHide}/>
            <BodyModal amount={amount} setAmount={setAmount}/>
            <FooterModal onHide={onHide} handleTransaction={handleTransaction}/>
        </div>
      </div>
    </div>
  )
}

export default ModalWallet