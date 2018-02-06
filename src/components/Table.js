import React, { Component } from 'react';
import TableRow from './TableRow';
import PropTypes from 'prop-types';

export default class Table extends Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    static propTypes = {
        summ: PropTypes.number.isRequired,
        rate: PropTypes.number.isRequired,
        accruals: PropTypes.number.isRequired,
        periods: PropTypes.number.isRequired,
        accuracy: PropTypes.number.isRequired,
    };

    render() {

        const {summ, rate, accruals, periods, accuracy} = this.props;
        const Rows = [];
        const rows = periods * accruals;
        for (let i = 0; i < rows; i++) {
            let counter = i + 1;
            let accruedSumm = summ * Math.pow((1 + (rate / 100) / accruals ),  counter);
            Rows.push(<TableRow key={counter} counter={counter} summ={accruedSumm} accuracy={accuracy} />);
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