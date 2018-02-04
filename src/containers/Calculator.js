import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CalculatorActionCreators from '../actions/calculator';
import Form from '../components/Form';
import Table from '../components/Table';
import PropTypes from 'prop-types';

class Calculator extends Component {

  static propTypes = {
    state: PropTypes.shape({
      summ: PropTypes.number.isRequired,
      rate: PropTypes.number.isRequired,
      accruals: PropTypes.number.isRequired,
      periods: PropTypes.number.isRequired,
      accuracy: PropTypes.number.isRequired,
    })
  };

  static defaultProps = {
    state: {
      summ: 0,
      rate: 0,
      accruals: 0,
      periods: 0,
      accuracy: 0
    }
  };

  render() {
    const {dispatch, state} = this.props;

    const changeSumm = bindActionCreators(CalculatorActionCreators.changeSumm, dispatch);
    const changeRate = bindActionCreators(CalculatorActionCreators.changeRate, dispatch);
    const changeAccruals = bindActionCreators(CalculatorActionCreators.changeAccruals, dispatch);
    const changePeriods = bindActionCreators(CalculatorActionCreators.changePeriods, dispatch);
    const changeAccuracy = bindActionCreators(CalculatorActionCreators.changeAccuracy, dispatch);

    return (
      <div className="calculator">
        <Form
          state={state}
          changeSumm={changeSumm}
          changeRate={changeRate}
          changeAccruals={changeAccruals}
          changePeriods={changePeriods}
          changeAccuracy={changeAccuracy}
        />
        <Table {...state} />
      </div>
    );
  }

};

const mapStateToProps = state => {
  return {state}
};

export default connect(mapStateToProps)(Calculator);