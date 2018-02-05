import * as CalculatorActionTypes from '../actiontypes/calculator';

export const onChangeInputAction = e => {
    const name = e.target.name;
    const value = Number(e.target.value);

    let type;
    switch(name) {
        case 'summ':
            type = CalculatorActionTypes.CHANGE_SUMM;
            break;
        case 'rate':
            type = CalculatorActionTypes.CHANGE_RATE;
            break;
        case 'accruals':
            type = CalculatorActionTypes.CHANGE_ACCRUALS;
            break;
        case 'periods':
            type = CalculatorActionTypes.CHANGE_PERIODS;
            break;
        case 'accuracy':
            type = CalculatorActionTypes.CHANGE_ACCURACY;
            break;
        default:
            type = null;
    }
    return {type, value};
};