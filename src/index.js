import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// import component
import App from './component/App'

//import reducer
import todoApp from './reducers'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

let store = createStore(todoApp)
store.subscribe(() => {
    console.log("Update Store: ",  store.getState())
}) 

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
