import * as CalculatorActionTypes from '../actiontypes/calculator';

export const onUpdateFormAction = value => {

    return {
        type: CalculatorActionTypes.UPDATE_FORM,
        value
    }

};