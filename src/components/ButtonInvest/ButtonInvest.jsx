import React from 'react';

import './ButtonInvest.css';

export default function ButtonInvest({action, clazz}) {
    const classNames = `button button-invest ${clazz}`;
    
    return (
        <button
            className={classNames}
            onClick={action}
        >
            Invest
        </button>
    );
}