import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CalculatorActionCreators from '../actions/calculator';
import Form from '../components/Form';
import Table from '../components/Table';
import PropTypes from 'prop-types';

class Calculator extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    summ: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
    accruals: PropTypes.number.isRequired,
    periods: PropTypes.number.isRequired,
    accuracy: PropTypes.number.isRequired
  };

  static defaultProps = {
    summ: 0,
    rate: 0,
    accruals: 0,
    periods: 0,
    accuracy: 0
  };

  render() {
    const {dispatch, ...tableProps} = this.props;

    const onChangeSumm = bindActionCreators(CalculatorActionCreators.onChangeSumm, dispatch);
    const onChangeRate = bindActionCreators(CalculatorActionCreators.onChangeRate, dispatch);
    const onChangeAccruals = bindActionCreators(CalculatorActionCreators.onChangeAccruals, dispatch);
    const onChangePeriods = bindActionCreators(CalculatorActionCreators.onChangePeriods, dispatch);
    const onChangeAccuracy = bindActionCreators(CalculatorActionCreators.onChangeAccuracy, dispatch);

    const formProps = {...this.props, onChangeSumm, onChangeRate, onChangeAccruals, onChangePeriods, onChangeAccuracy};
    
    return (
      <div className="calculator">
        <Form
          {...formProps}
        />
        <Table {...tableProps} />
      </div>
    );
  }

};

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Calculator);