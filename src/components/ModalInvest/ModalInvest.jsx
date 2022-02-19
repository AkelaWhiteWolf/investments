import {React, useState} from 'react';

import ButtonInvest from '../ButtonInvest/ButtonInvest.jsx';

import './ModalInvest.css';

export default function ModalInvest({loanTitle, amountAvailable, investMoney, toggleModalInvest}) {
    const [inputedMoney, setInputedMoney] = useState(0);

    // TODO: убрать эту заглушку
    loanTitle = (
        <ul>
            <li>Title-1</li>
            <li>Title-2</li>
        </ul>
    );

    return (
        <div className="modal-wrapper">

            <form className="modal-window modal-invest">
                <h2 className="modal-invest-name">Invest In Loan</h2>
                
                {loanTitle}

                <p>Amount available: {amountAvailable}</p>
                
                <input
                    type="number"
                    placeholder="How much do you want to invest?"
                    autoFocus
                    className="modal-invest__input"
                    onInput={e => setInputedMoney(Number(e.target.value))}
                />
                
                <ButtonInvest action={e => {
                    e.preventDefault();

                    investMoney(inputedMoney);
                }}/>

                <button
                    onClick={toggleModalInvest}
                >
                    Cancel
                </button>
            </form>
            
            <div
                className="overlay"
                onClick={toggleModalInvest}
            ></div>
        </div>
    )
}