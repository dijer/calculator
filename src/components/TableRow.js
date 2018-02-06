import React from 'react';
import PropTypes from 'prop-types';

const TableTr = props => {

    return (
        <tr>
            <td>{props.counter}</td>
            <td>{props.summ.toFixed(props.accuracy)}</td>
        </tr>
    );

}

TableTr.propTypes = {
    counter: PropTypes.number.isRequired,
    summ: PropTypes.number.isRequired,
    accuracy: PropTypes.number.isRequired
}

export default TableTr;