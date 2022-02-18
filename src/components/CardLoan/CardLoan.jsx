import React from 'react';

import ButtonInvest from '../ButtonInvest/ButtonInvest.jsx';

import './CardLoan.css';

export default function CardLoan({title, available, annualisedReturn, termRemaining, ltv, amount, toggleModalInvest}) {
    return (
        <article
            className="card-loan"
        >
            <h1 className="title">{title}</h1>

            <ul className="details">
                <li className="details-list__detail">Available: {available}</li>
                <li className="details-list__detail">Annualised Return: {annualisedReturn}</li>
                <li className="details-list__detail">Term Remaining: {termRemaining}</li>
                <li className="details-list__detail">LTV: {ltv}</li>
                <li className="details-list__detail">Amount: {amount}</li>
            </ul>

            <ButtonInvest
                action={toggleModalInvest}
            />
        </article>
    );
}