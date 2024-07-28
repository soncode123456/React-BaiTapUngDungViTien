import React, { useState } from 'react'
import ModalWallet from './ModalWallet';

const MyWallet = () => {
    // Khai báo state balance để quản lý số dư hiện tại, khởi tạo với giá trị 0.
    const [balance, setBalance] = useState(0);
    // Khai báo state transactions để quản lý lịch sử giao dịch, khởi tạo là một mảng rỗng.
    const [transactions, setTransactions] = useState([]);
    // Khai báo state showModal để quản lý việc hiển thị modal, khởi tạo là false.
    const [showModal, setShowModal] = useState(false);
    // Khai báo state modalType để quản lý loại giao dịch (nạp tiền hoặc rút tiền), khởi tạo là chuỗi rỗng.
    const [modalType, setModalType] = useState('');
    // Khai báo state errorMessage để hiển thị ra lỗi khi người dùng rút số tiền quá số dư có trong ví, khởi tạo là chuỗi rỗng.
    const [errorMessage, setErrorMessage] = useState('');

    // Hàm xử lý giao dịch
    const handleTransaction = (amount, type) => {
        if(type === 'withdraw' && amount > balance) {
            setErrorMessage('Số tiền rút không đủ với số dư')
            return;
        }
        // Tính toán số dư mới dựa trên loại giao dịch.
        const newBalance = type === 'deposit' ? balance + amount : balance - amount;
        // Cập nhật số dư mới.
        setBalance(newBalance);
        // Cập nhật lịch sử giao dịch với giao dịch mới.
        setTransactions([...transactions, {
            type,
            amount,
            date: new Date()
        }]);
        setErrorMessage('');
    }
    
    return (
        <div className='container'>
            <div className="content">
                <h1 className='text text-white text-center fw-bold'>My Wallet</h1>
                <div className="card">
                    <div className="card-body">
                        <p className='fs-1 fw-bold text-center m-0'>${balance.toFixed(2)}</p>
                        <h2 className='fs-5'>Total balance</h2>
                        <button className='btn btn-success m-2' onClick={() => {
                            setModalType('deposit');
                            setShowModal(true);
                        }}>Deposit</button>
                        <button className='btn btn-danger m-2' onClick={() => {
                            setModalType('withdraw');
                            setShowModal(true);
                        }}>Withdraw</button>
                    </div>
                </div>
                {errorMessage && <div className='alert alert-danger mt-3'>{errorMessage}</div>}
                <h3 className='text text-white text-center fw-bold'>Transaction History</h3>
                <ul className='list-group'>
                    {transactions.map((transactions, index) => {
                        return (
                            <li key={index} className='list-group-item d-flex justify-content-between'>
                                <span>{transactions.type === 'deposit' ? 'Deposited' : 'Withdrew'}</span>
                                <span>{transactions.amount.toFixed(2)}</span>
                                <span>{transactions.date.toLocaleString()}</span>
                            </li>
                        );
                    })}
                </ul>
                <ModalWallet
                    show={showModal}
                    type={modalType}
                    onHide={() => setShowModal(false)}
                    onTransaction={handleTransaction}
                />
            </div>
        </div>
    )
}

export default MyWallet