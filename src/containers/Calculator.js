import React, { Component } from 'react';
import Form from '../components/Form';
import Table from '../components/Table';

export default class Calculator extends Component {

  render() {
    
    return (
      <div className="calculator">
        <Form />
        <Table />
      </div>
    );
  }

};