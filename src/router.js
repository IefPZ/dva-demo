import React from 'react';
import {Router, Route, hashHistory, IndexRedirect} from 'dva/router';
import App from './routes/App';
import IndexPage from './routes/IndexPage';
import Users from './routes/Users'
import Products from './routes/Products'

function RouterConfig({ history }) {
  return (
    <Router history={history}>

        <Route path="/" component={App} >
          {/*
          <Route path="/index" component={IndexPage}/>
          <Route path="/users" component={Users} />
          <Route path="/products" component={Products} />
          */}
        </Route>
    </Router>
  );
}

export default RouterConfig;
