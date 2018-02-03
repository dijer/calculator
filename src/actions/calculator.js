import * as CalculatorActionTypes from '../actiontypes/calculator';

export const changeSumm = value => {
    return {
        type: CalculatorActionTypes.CHANGE_SUMM,
        value
    }
};

export const changeRate = value => {
    return {
        type: CalculatorActionTypes.CHANGE_RATE,
        value
    }
};

export const changeAccruals = value => {
    return {
        type: CalculatorActionTypes.CHANGE_ACCRUALS,
        value
    }
};

export const changePeriods = value => {
    return {
        type: CalculatorActionTypes.CHANGE_PERIODS,
        value
    }
};

export const changeAccuracy = value => {
    return {
        type: CalculatorActionTypes.CHANGE_ACCURACY,
        value
    }
};