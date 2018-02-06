import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {

    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        summ: PropTypes.number.isRequired,
        rate: PropTypes.number.isRequired,
        accruals: PropTypes.number.isRequired,
        periods: PropTypes.number.isRequired,
        accuracy: PropTypes.number.isRequired,
        onUpdateFormAction: PropTypes.func.isRequired
    };

    onChangeInputHandler(e) {
        const name = e.target.name;
        const value = Number(e.target.value);
        const changeInputObj = {[name]: value};
        this.props.onUpdateFormAction(changeInputObj);
    }

    render() {

        const {summ, rate, accruals, periods, accuracy} = this.props;
        const onChangeInputHandler = this.onChangeInputHandler.bind(this);

        return (
            <form className="calculator__form">
                <label>Сумма: <input type="number" min="0" step="0.01" name="summ" defaultValue={summ} onChange={ onChangeInputHandler } placeholder="Сумма"/></label>
                <label>Ставка, %: <input type="number" min="0" step="0.01" name="rate" defaultValue={rate} onChange={ onChangeInputHandler } placeholder="Ставка" /></label>
                <label>Начислений: <input type="number" min="0" name="accruals" defaultValue={accruals} onChange={ onChangeInputHandler } placeholder="Начислений" /></label>
                <label>Периодов: <input type="number" min="0" max="5" name="periods" defaultValue={periods} onChange={ onChangeInputHandler } placeholder="Периодов" /></label>
                <label>Знаков после запятой: <input type="range" min="0" max="5" name="accuracy" defaultValue={accuracy} onChange={ onChangeInputHandler } placeholder="Знаков после запятой" /></label>
            </form>
        );
    }

}