import React, { Component } from 'react';
import TableRow from './TableRow';

export default class Table extends Component {

    constructor(props) {
        super(props);
        this.state = props.state;
    }

    render() {

        const Rows = [];
        let counter = 1;
        for (let i = 0; i < this.props.periods; i++) {
            let period = i + 1;

            for (let j = 0; j < this.props.accruals; j++) {
                let accrual = j + 1;
                let summ = this.props.summ * Math.pow((1 + (this.props.rate / 100) / this.props.accruals ), accrual * period);
                Rows.push(<TableRow key={counter} counter={counter} summ={parseFloat(summ).toFixed(this.props.accuracy)} />);
                counter++;
            }

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