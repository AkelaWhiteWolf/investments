import {React, useState} from 'react';

import ButtonInvest from '../ButtonInvest/ButtonInvest.jsx';

import './ModalInvest.css';

export default function ModalInvest({loanTitle, amountAvailable, investMoney, toggleModalInvest}) {
    const [inputedMoney, setInputedMoney] = useState(0);

    return (
        <>
            <h2 className="modal-invest-name">Invest In Loan</h2>
            
            {loanTitle}

            <p>Amount available: {amountAvailable}</p>
            
            <div className="modal-wrapper">
                <form className="modal-window modal-invest">
                    <input
                        type="number"
                        className="modal-invest__input"
                        onInput={e => setInputedMoney(Number(e.value))}/>
                    <ButtonInvest action={e => {
                        e.preventDefault();

                        investMoney(inputedMoney);
                    }}/>
                </form>
                
                <div
                    className="overlay"
                    onClick={toggleModalInvest}
                ></div>
            </div>
        </>
    )
}