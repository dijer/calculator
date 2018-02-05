import React from 'react';
import PropTypes from 'prop-types';

const TableTr = props => {

    return (
        <tr>
            <td>{props.counter}</td>
            <td>{props.summ}</td>
        </tr>
    );

}

TableTr.propTypes = {
    counter: PropTypes.number.isRequired,
    summ: PropTypes.string.isRequired
}

export default TableTr;