import currentLoans from '../JSON/current-loans.json';

function transformDataForCode() {
    const loansArr = [...currentLoans.loans];
    
    for (let elem of loansArr) {
        elem.amount = stringToNumber(elem.amount);
        elem.annualised_return = stringToNumber(elem.annualised_return);
        elem.available = stringToNumber(elem.available);
        elem.id = stringToNumber(elem.id);
        elem.ltv = stringToNumber(elem.ltv);
        elem.term_remaining = getStringHowMuchTimeRemain(stringToNumber(elem.term_remaining));
    }
    
    return loansArr;
        
    function stringToNumber(str) {
        let result = Number(str.replace(/,/, '.'));
        result = (Math.floor(result * 100)) / 100;
        
        if (!result) throw new Error('This string can not be transformed to nubmer');
        
        return result;
    }

    function getStringHowMuchTimeRemain(milliseconds) {
        const seconds = Math.floor(milliseconds / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const months = Math.floor(days / 30.5);
        const years = Math.floor(months / 12);

        const yearsRemain = years;
        const monthsRemain = months % 12;
        const daysRemain = Math.floor(days % 30.5);
        const hoursRemain = hours % 60;
        const minutesRemain = minutes % 60;
        
        const yearsString = yearsRemain ? `${yearsRemain} years ` : '';
        const monthsString = monthsRemain ? `${monthsRemain} months ` : '';
        const daysString = daysRemain ? `${daysRemain} days` : '';
        const hoursString = hoursRemain ? `${hoursRemain} hours` : '';
        const minutesString = minutesRemain ? `${minutesRemain} minutes` : '';

        return (yearsString + monthsString + daysString + hoursString + minutesString) || '0 minutes';
    }
}

const transformedLoansDataFromJSON = transformDataForCode();

export default transformedLoansDataFromJSON;