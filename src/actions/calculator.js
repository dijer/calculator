import * as CalculatorActionTypes from '../actiontypes/calculator';

const onChangeHandler = (type, value) => {
    return {type, value};
};

export const onChangeSumm = value => onChangeHandler(CalculatorActionTypes.CHANGE_SUMM, value);

export const onChangeRate = value => onChangeHandler(CalculatorActionTypes.CHANGE_RATE, value);

export const onChangeAccruals = value => onChangeHandler(CalculatorActionTypes.CHANGE_ACCRUALS, value);

export const onChangePeriods = value => onChangeHandler(CalculatorActionTypes.CHANGE_PERIODS, value);

export const onChangeAccuracy = value => onChangeHandler(CalculatorActionTypes.CHANGE_ACCURACY, value);