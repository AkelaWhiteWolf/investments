import React from 'react';

import ButtonInvest from '../ButtonInvest/ButtonInvest.jsx';

import './CardLoan.css';

export default function CardLoan({title, available, annualised_return: annualisedReturn, term_remaining: termRemaining, ltv, amount}) {
    return (
        <article
            className="card-loan"
        >
            <h1 className="title">{title}</h1>

            <p className="details">
                Available: {available}
                Annualised Return: {annualisedReturn}
                Term Remaining: {termRemaining}
                LTV: {ltv}
                Amount: {amount}
            </p>

            <ButtonInvest/>
        </article>
    );
}