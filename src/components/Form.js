import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    static propTypes = {
        state: PropTypes.shape({
            summ: PropTypes.number.isRequired,
            rate: PropTypes.number.isRequired,
            accruals: PropTypes.number.isRequired,
            periods: PropTypes.number.isRequired,
            accuracy: PropTypes.number.isRequired,
        }),
        changeSumm: PropTypes.func.isRequired,
        changeRate: PropTypes.func.isRequired,
        changeAccruals: PropTypes.func.isRequired,
        changePeriods: PropTypes.func.isRequired,
        changeAccuracy: PropTypes.func.isRequired
    };

    handleChangeInput(e, callback) {
        return callback(Number(e.target.value));
    }

    render() {
        return (
            <form className="calculator__form">
                <label>Сумма: <input type="number" min="0" step="0.01" defaultValue={this.props.state.summ} onChange={ (e) => this.handleChangeInput(e, this.props.changeSumm) } placeholder="Сумма"/></label>
                <label>Ставка, %: <input type="number" min="0" step="0.01" defaultValue={this.props.state.rate} onChange={ (e) => this.handleChangeInput(e, this.props.changeRate) } placeholder="Ставка" /></label>
                <label>Начислений: <input type="number" min="0" defaultValue={this.props.state.accruals} onChange={ (e) => this.handleChangeInput(e, this.props.changeAccruals) } placeholder="Начислений" /></label>
                <label>Периодов: <input type="number" min="0" max="5" defaultValue={this.props.state.periods} onChange={ (e) => this.handleChangeInput(e, this.props.changePeriods) } placeholder="Периодов" /></label>
                <label>Знаков после запятой: <input type="range" min="0" max="5" defaultValue={this.props.state.accuracy} onChange={ (e) => this.handleChangeInput(e, this.props.changeAccuracy) } placeholder="Знаков после запятой" /></label>
            </form>
        );
    }

}