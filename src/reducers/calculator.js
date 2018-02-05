import * as CalculatorActionTypes from '../actiontypes/calculator';

const initialState = {
    summ: 500,
    rate: 11,
    accruals: 12,
    periods: 1,
    accuracy: 2
};

export default function Calculator(state=initialState, action) {
    
    switch (action.type) {
        case CalculatorActionTypes.CHANGE_SUMM:
            return {
                ...state,
                summ: action.value
            };
        
        case CalculatorActionTypes.CHANGE_RATE:
            return {
                ...state,
                rate: action.value
            };
        
        case CalculatorActionTypes.CHANGE_ACCRUALS:
            return {
                ...state,
                accruals: action.value
            };
        
        case CalculatorActionTypes.CHANGE_PERIODS:
            return {
                ...state,
                periods: action.value
            };
        
        case CalculatorActionTypes.CHANGE_ACCURACY:
            return {
                ...state,
                accuracy: action.value
            };
        
        default:
            return state;
    }
}