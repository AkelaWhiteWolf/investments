import {React, useState} from 'react';

import './App.css';

import PageLoans from '../PageLoans/PageLoans';
import ModalInvest from '../ModalInvest/ModalInvest.jsx';

import transformedLoansDataFromJSON from '../../services/loansDataFromJSON';

function App() {
    const [totalAmount, setTotalAmount] = useState(1000);
    const [loansData, setLoansData] = useState(transformedLoansDataFromJSON);
    const [modalInvestIsVisible, setModalInvestIsVisible] = useState(false);
    const [chosedLoanToInvestId, setChosedLoanToInvestId] = useState(undefined);

    const modalInvest = modalInvestIsVisible ?
        <ModalInvest
            investMoney={investMoney}
            toggleModalInvest={toggleModalInvest}
        />
        :
        null;
    
    function investMoney(money) {
        if (money > totalAmount) {
            alert('You can not invest more then your total amount');
            return;
        }
        if (money < 0) {
            alert('You can not invest negative amount');
            return;
        }

        const newState = loansData.map(loan => {
            if (loan.id === chosedLoanToInvestId) loan.amount += money;
            return loan;
        });
        
        setLoansData(newState);
        setTotalAmount(state => state - money);
        setModalInvestIsVisible(state => !state);
    }

    function toggleModalInvest(id) {
        setChosedLoanToInvestId(id);
        setModalInvestIsVisible(state => !state);
    }

    console.log(loansData);
    return (
        <>
            <PageLoans
                loansData={loansData}
                toggleModalInvest={toggleModalInvest}
            />

            <p className="total-amount">Total amount available for investments: {totalAmount}</p>

            {modalInvest}
        </>
    );
}

export default App;