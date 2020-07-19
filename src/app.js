import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter,{ history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { login,logout } from './actions/auth';
import LoadingPage from './components/LoadingPage';
import 'react-dates/initialize';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';


const store = configureStore();
const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)
let hasRendered = false;
const renderApp = () => {
    if(!hasRendered) {
        ReactDOM.render(jsx, document.querySelector('#app'));
        hasRendered = true;
    }
};


ReactDOM.render(<LoadingPage/>, document.querySelector('#app'));

firebase.auth().onAuthStateChanged((user) => {
    if(user) {
        store.dispatch(login(user.uid));
        renderApp();
        if(history.location.pathname === '/') {
            history.push('/dashboard');
            console.log(history);
        }  
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});