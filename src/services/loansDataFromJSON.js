import currentLoans from '../JSON/current-loans.json';

function transformDataToNumbers() {
    const loansArr = [...currentLoans.loans];
    
    for (let elem of loansArr) {
        elem.amount = stringToNumber(elem.amount);
        elem.annualised_return = stringToNumber(elem.annualised_return);
        elem.available = stringToNumber(elem.available);
        elem.id = stringToNumber(elem.id);
        elem.ltv = stringToNumber(elem.ltv);
        elem.term_remaining = stringToNumber(elem.term_remaining);
    }
        
    function stringToNumber(str) {
        let result = Number(str.replace(/,/, '.'));
        result = (Math.floor(result * 100)) / 100;
        
        if (!result) throw new Error('This string can not be transformed to nubmer');
        
        return result;
    }
    
    return loansArr;
}

const transformedLoansDataFromJSON = transformDataToNumbers();

export default transformedLoansDataFromJSON;