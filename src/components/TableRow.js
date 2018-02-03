import React from 'react';

const TableTr = props => {

    return (
        <tr>
            <td>{props.counter}</td>
            <td>{props.summ}</td>
        </tr>
    );

}

export default TableTr;