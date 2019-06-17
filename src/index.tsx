import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { DefaultTypelessProvider } from 'typeless';
import CounterModule from './features/counter/module';

ReactDOM.render(<DefaultTypelessProvider>
<CounterModule />
</DefaultTypelessProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
