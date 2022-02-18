import {React, useState} from 'react';

import './App.css';

import PageLoans from '../PageLoans/PageLoans';
import ModalInvest from '../ModalInvest/ModalInvest.jsx';

import loansDataFromJSON from '../../services/loansDataFromJSON';

function App() {
    const [totalAmount, setTotalAmount] = useState(1000);
    const [modalInvestIsVisible, setModalInvestIsVisible] = useState(false);

    const modalInvest = modalInvestIsVisible ?
        <ModalInvest/>
        :
        null;
    
    function investMoney(money) {
        console.log(`invested ${money}`);
    }

    function toggleModalInvest() {
        setModalInvestIsVisible(state => !state);
    }

    console.log(loansDataFromJSON);
    return (
        <>
            <PageLoans
                loansData={loansDataFromJSON}
                toggleModalInvest={toggleModalInvest}
            />

            <p className="total-amount">Total amount available for investments: {totalAmount}</p>

            <ModalInvest
                investMoney={investMoney}
                toggleModalInvest={toggleModalInvest}    
            />
        </>
    );
}

export default App;