import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './container/configureStore';
import Root from './container/Root';

const store = configureStore();

render(
    <Root store={ store }/>,
    document.getElementById('root')
);