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
        onChangeSumm: PropTypes.func.isRequired,
        onChangeRate: PropTypes.func.isRequired,
        onChangeAccruals: PropTypes.func.isRequired,
        onChangePeriods: PropTypes.func.isRequired,
        onChangeAccuracy: PropTypes.func.isRequired
    };

    handleChangeInput(e, callback) {
        return callback(Number(e.target.value));
    }

    render() {

        const {summ, rate, accruals, periods, accuracy, onChangeSumm, onChangeRate, onChangeAccruals, onChangePeriods, onChangeAccuracy} = this.props;
        const haldeChangeInput = this.handleChangeInput;

        return (
            <form className="calculator__form">
                <label>Сумма: <input type="number" min="0" step="0.01" defaultValue={summ} onChange={ (e) => haldeChangeInput(e, onChangeSumm) } placeholder="Сумма"/></label>
                <label>Ставка, %: <input type="number" min="0" step="0.01" defaultValue={rate} onChange={ (e) => haldeChangeInput(e, onChangeRate) } placeholder="Ставка" /></label>
                <label>Начислений: <input type="number" min="0" defaultValue={accruals} onChange={ (e) => haldeChangeInput(e, onChangeAccruals) } placeholder="Начислений" /></label>
                <label>Периодов: <input type="number" min="0" max="5" defaultValue={periods} onChange={ (e) => haldeChangeInput(e, onChangePeriods) } placeholder="Периодов" /></label>
                <label>Знаков после запятой: <input type="range" min="0" max="5" defaultValue={accuracy} onChange={ (e) => haldeChangeInput(e, onChangeAccuracy) } placeholder="Знаков после запятой" /></label>
            </form>
        );
    }

}