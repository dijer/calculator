import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CalculatorActionCreators from '../actions/calculator';
import Form from '../components/Form';
import Table from '../components/Table';

class Calculator extends Component {

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
          state={this.props.state}
          changeSumm={changeSumm}
          changeRate={changeRate}
          changeAccruals={changeAccruals}
          changePeriods={changePeriods}
          changeAccuracy={changeAccuracy}
        />
        <Table {...this.props.state} />
      </div>
    );
  }

};

const mapStateToProps = state => {
  return {state}
};

export default connect(mapStateToProps)(Calculator);