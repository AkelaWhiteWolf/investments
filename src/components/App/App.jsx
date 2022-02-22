import {React, useState} from 'react';

import './App.css';

import PageLoans from '../PageLoans/PageLoans';
import ModalInvest from '../ModalInvest/ModalInvest.jsx';

import transformedLoansDataFromJSON from '../../services/loansDataFromJSON';

function App() {
    const [totalAmount, setTotalAmount] = useState(1000);
    const [loansData, setLoansData] = useState(transformedLoansDataFromJSON);
    const [modalInvestIsVisible, setModalInvestIsVisible] = useState(false);
    const [chosedLoanToInvest, setChosedLoanToInvest] = useState(undefined);

    const modalInvest = modalInvestIsVisible ?
        <ModalInvest
            investMoney={investMoney}
            toggleModalInvest={toggleModalInvest}
            chosedLoanToInvest={chosedLoanToInvest}
        />
        :
        null;
    
    function investMoney(money) {
        if (money > totalAmount) {
            alert('You can not invest more then your total amount');
            return;
        }
        if (money <= 0) {
            alert('You can not invest negative or zero amount');
            return;
        }

        const newState = loansData.map(loan => {
            if (loan.id === chosedLoanToInvest.id) {
                loan.amount += money;
                loan.wasInvested = true;
            };

            return loan;
        });
        
        setLoansData(newState);
        setTotalAmount(state => state - money);
        setModalInvestIsVisible(state => !state);
    }

    function toggleModalInvest(loanData) {
        setChosedLoanToInvest(loanData);
        setModalInvestIsVisible(state => !state);
    }

    console.log(loansData);
    return (
        <main className="main">
            <PageLoans
                loansData={loansData}
                toggleModalInvest={toggleModalInvest}
            />

            <p className="total-amount main__total-amount">Total amount available for investments: {totalAmount}</p>

            {modalInvest}
        </main>
    );
}

export default App;