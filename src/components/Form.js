import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        summ: PropTypes.number.isRequired,
        rate: PropTypes.number.isRequired,
        accruals: PropTypes.number.isRequired,
        periods: PropTypes.number.isRequired,
        accuracy: PropTypes.number.isRequired,
        onChangeInputAction: PropTypes.func.isRequired
    };

    render() {

        const {summ, rate, accruals, periods, accuracy, onChangeInputAction} = this.props;

        return (
            <form className="calculator__form">
                <label>Сумма: <input type="number" min="0" step="0.01" name="summ" defaultValue={summ} onChange={ (e) => onChangeInputAction(e) } placeholder="Сумма"/></label>
                <label>Ставка, %: <input type="number" min="0" step="0.01" name="rate" defaultValue={rate} onChange={ (e) => onChangeInputAction(e) } placeholder="Ставка" /></label>
                <label>Начислений: <input type="number" min="0" name="accruals" defaultValue={accruals} onChange={ (e) => onChangeInputAction(e) } placeholder="Начислений" /></label>
                <label>Периодов: <input type="number" min="0" max="5" name="periods" defaultValue={periods} onChange={ (e) => onChangeInputAction(e) } placeholder="Периодов" /></label>
                <label>Знаков после запятой: <input type="range" min="0" max="5" name="accuracy" defaultValue={accuracy} onChange={ (e) => onChangeInputAction(e) } placeholder="Знаков после запятой" /></label>
            </form>
        );
    }

}