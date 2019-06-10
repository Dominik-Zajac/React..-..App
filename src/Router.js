import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import AdminPanel from './components/AdminPanel';
import PageNotFound from './components/PageNotFound';
import store from './store/store';

class Router extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={App} />
                        <Route path='/admin' component={AdminPanel} />
                        <Route component={PageNotFound} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default Router;