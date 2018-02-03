import React, { Component } from 'react';

export default class Form extends Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <form className="calculator__form">
                <label>Сумма: <input type="number" min="0" step="0.01" defaultValue={this.props.state.summ} onChange={ (e) => this.props.changeSumm(e.target.value) } placeholder="Сумма"/></label>
                <label>Ставка, %: <input type="number" min="0" step="0.01" defaultValue={this.props.state.rate} onChange={ (e) => this.props.changeRate(e.target.value) } placeholder="Ставка" /></label>
                <label>Начислений: <input type="number" min="0" defaultValue={this.props.state.accruals} onChange={ (e) => this.props.changeAccruals(e.target.value) } placeholder="Начислений" /></label>
                <label>Периодов: <input type="number" min="0" max="5" defaultValue={this.props.state.periods} onChange={ (e) => this.props.changePeriods(e.target.value) } placeholder="Периодов" /></label>
                <label>Знаков после запятой: <input type="number" min="0" max="5" defaultValue={this.props.state.accuracy} onChange={ (e) => this.props.changeAccuracy(e.target.value) } placeholder="Знаков после запятой" /></label>
            </form>
        );
    }

}