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

        case CalculatorActionTypes.UPDATE_FORM:
            const value = action.value;
            return {
                ...state,
                ...value
            };
        
        
        default:
            return state;
        
    }
}