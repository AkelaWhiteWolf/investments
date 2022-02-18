import React from 'react';

import './ButtonInvest.css';

export default function ButtonInvest({action}) {
    return (
        <button
            className="button-invest"
            onClick={action}
        >
            Invest
        </button>
    );
}