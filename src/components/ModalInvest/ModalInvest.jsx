import {React, useState} from 'react';

import ButtonInvest from '../ButtonInvest/ButtonInvest.jsx';

import './ModalInvest.css';

export default function ModalInvest({investMoney, toggleModalInvest, chosedLoanToInvest}) {
    const [inputedMoney, setInputedMoney] = useState(0);

    return (
        <div className="modal-wrapper">

            <form className="modal-window modal-invest">
                <h2 className="modal-invest-name">Invest In Loan</h2>
                
                <ul className="details-list">
                    <li className="details-list__li">Available: {chosedLoanToInvest.available}</li>
                    <li className="details-list__li">Annualised Return: {chosedLoanToInvest.annualised_return}</li>
                    <li className="details-list__li">Loan ends in: {chosedLoanToInvest.term_remaining}</li>
                    <li className="details-list__li">LTV: {chosedLoanToInvest.ltv}</li>
                    <li className="details-list__li">Amount: {chosedLoanToInvest.amount}</li>
                </ul>
                
                <input
                    type="number"
                    placeholder="How much do you want to invest?"
                    autoFocus
                    className="modal-invest__input"
                    onInput={e => setInputedMoney(Number(e.target.value))}
                />

                <div className="modal-window__button-container">
                    <button
                        className="button button-cancel modal-window__button"
                        onClick={toggleModalInvest}
                    >
                        Cancel
                    </button>
                    
                    <ButtonInvest
                        action={e => {
                            e.preventDefault();

                            investMoney(inputedMoney);
                        }}
                        clazz="modal-window__button"
                    />
                </div>
                
            </form>
            
            <div
                className="overlay"
                onClick={toggleModalInvest}
            ></div>
        </div>
    )
}