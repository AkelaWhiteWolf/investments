import React from 'react';

import './PageLoans.css';

import CardLoan from '../CardLoan/CardLoan.jsx';

export default function PageLoans({loansData, toggleModalInvest}) {    
    const loanCardsArr = loansData.map(loan => {
        return <CardLoan
            key={loan.id}
            id={loan.id}
            title={loan.title}
            available={loan.available}
            annualisedReturn={loan.annualised_return}
            termRemaining={loan.term_remaining}
            ltv={loan.ltv}
            amount={loan.amount}
            toggleModalInvest={toggleModalInvest}
        />
    });

    return (
        <section
            className="page-loans"
        >
            <h1 className="page-loans-name">Current Loans</h1>
            
            {loanCardsArr}
        </section>
    );
};