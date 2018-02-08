import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as CalculatorActionCreators from '../actions/calculator';

class Form extends Component {

    static propTypes = {
        summ: PropTypes.number.isRequired,
        rate: PropTypes.number.isRequired,
        accruals: PropTypes.number.isRequired,
        periods: PropTypes.number.isRequired,
        accuracy: PropTypes.number.isRequired,
        onUpdateFormAction: PropTypes.func.isRequired
    };

    static defaultProps = {
        summ: 0,
        rate: 0,
        accruals: 0,
        periods: 0,
        accuracy: 0
    };

    handleChangeInput(e) {
        const name = e.target.name;
        const value = Number(e.target.value);
        const changeInputObj = {[name]: value};
        this.props.onUpdateFormAction(changeInputObj);
    }

    render() {
        
        const {summ, rate, accruals, periods, accuracy} = this.props;
 
        return (
            <form className="calculator__form">
                <label>Сумма: <input type="number" min="0" step="0.01" name="summ" value={summ} onChange={ (e) => {this.handleChangeInput(e)} } placeholder="Сумма"/></label>
                <label>Ставка, %: <input type="number" min="0" step="0.01" name="rate" value={rate} onChange={ (e) => {this.handleChangeInput(e)} } placeholder="Ставка" /></label>
                <label>Начислений: <input type="number" min="0" name="accruals" value={accruals} onChange={ (e) => {this.handleChangeInput(e)} } placeholder="Начислений" /></label>
                <label>Периодов: <input type="number" min="0" max="5" name="periods" value={periods} onChange={ (e) => {this.handleChangeInput(e)} } placeholder="Периодов" /></label>
                <label>Знаков после запятой: <input type="range" min="0" max="5" name="accuracy" value={accuracy} onChange={ (e) => {this.handleChangeInput(e)} } placeholder="Знаков после запятой" /></label>
            </form>
        );
    }

}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    onUpdateFormAction(state) {
        dispatch(CalculatorActionCreators.onUpdateFormAction(state))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);