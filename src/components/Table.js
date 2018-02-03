import React, { Component } from 'react';
import TableRow from './TableRow';

export default class Table extends Component {

    constructor(props) {
        super(props);
        this.state = props.state;
    }

    render() {

        const Rows = [];
        const rows = this.props.periods * this.props.accruals;
        for (let i = 0; i < rows; i++) {
            let counter = i + 1;
            let summ = this.props.summ * Math.pow((1 + (this.props.rate / 100) / this.props.accruals ),  counter);
            Rows.push(<TableRow key={counter} counter={counter} summ={parseFloat(summ).toFixed(this.props.accuracy)} />);
        }

        return (
            <table className="calculator__table">
                <thead>
                    <tr>
                        <th>Номер платежа</th>
                        <th>Наращенная сумма</th>
                    </tr>
                </thead>
                <tbody>
                    { Rows }
                </tbody>
            </table>
        );
    }

}