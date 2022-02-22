import {React, useState} from 'react';

import ButtonInvest from '../ButtonInvest/ButtonInvest.jsx';

import './CardLoan.css';

export default function CardLoan({id, title, available, annualisedReturn, termRemaining, ltv, amount, wasInvested, toggleModalInvest, loanData}) {
    const wasInvestedMarker = wasInvested ?
        <p className="was-invested-marker">Invested</p>
        :
        null;

    return (
        <article
            className="card-loan page-loans__card-loan"
        >
            <h1 className="title">{title}</h1>

            {wasInvestedMarker}

            <ul className="details-list">
                <li className="details-list__li">Available: {available}</li>
                <li className="details-list__li">Annualised Return: {annualisedReturn}</li>
                <li className="details-list__li">Term Remaining: {termRemaining}</li>
                <li className="details-list__li">LTV: {ltv}</li>
                <li className="details-list__li">Amount: {amount}</li>
            </ul>

            <ButtonInvest
                action={() => toggleModalInvest(loanData)}
                clazz="card-loan__button-invest"
            />
        </article>
    );
}