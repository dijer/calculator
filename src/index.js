import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import CalculatorReducer from './reducers/calculator';
import './index.css';
import './Calculator.css';
import Calculator from './containers/Calculator';

const store = createStore(
    CalculatorReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
    <Provider store={store}>
        <Calculator />
    </Provider>,
    document.getElementById('root')
);