import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';
import axios from 'axios';

store.subscribe(() => console.log(store.getState()));

const getApi = () => {
 return axios.get('https://api.github.com/repos/Yomguithereal/baobab/issues')
 .then((res) => console.log(res.data))
 .catch((err) => console.log(err));
} 

store.dispatch(getApi())

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>,
 document.getElementById('root'));
registerServiceWorker();
