import React, { Component } from 'react';
import TableRow from './TableRow';
import PropTypes from 'prop-types';

export default class Table extends Component {

    constructor(props) {
        super(props);
        this.state = props.state;
    }

    static propTypes = {
        state: PropTypes.shape({
            summ: PropTypes.number.isRequired,
            rate: PropTypes.number.isRequired,
            accruals: PropTypes.number.isRequired,
            periods: PropTypes.number.isRequired,
            accuracy: PropTypes.number.isRequired,
        })
    };

    render() {

        const Rows = [];
        const rows = this.props.periods * this.props.accruals;
        for (let i = 0; i < rows; i++) {
            let counter = i + 1;
            let summ = this.props.summ * Math.pow((1 + (this.props.rate / 100) / this.props.accruals ),  counter);
            Rows.push(<TableRow key={counter} counter={counter} summ={Number(summ.toFixed(this.props.accuracy))} />);
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