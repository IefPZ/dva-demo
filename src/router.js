import React from 'react';
import { Router, Route, hashHistory, IndexRedirect } from 'dva/router';
import App from './routes/App';
import IndexPage from './routes/IndexPage';
import Users from './routes/Users';
import Products from './routes/Products';
import WrappedNormalLoginForm from './components/System/Login';


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <div>
        <Route path="/" component={App} >
          {/*
          <IndexRedirect to="/index" />
          <Route path="/index" component={IndexPage}/>
          <Route path="/users" component={Users} />
          <Route path="/products" component={Products} />
          */}
        </Route>
        <Route path='/login' component={WrappedNormalLoginForm} />
      </div>
    </Router>
  );
}

export default RouterConfig;
