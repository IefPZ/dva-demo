import React from 'react';
import { Layout, Menu, Icon, Button } from 'antd';
import { Route, Link, routerRedux, hashHistory } from 'dva/router';
import { connect } from 'dva';

import AppMenu from '../components/System/Menu';

import IndexPage from './IndexPage';
import Users from './Users'
import Products from './Products'
import Map from '../components/Gis/Map'
import WrappedNormalLoginForm from '../components/System/Login';
import AppHeader from '../components/System/Header';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const App = ({ system, dispatch }) => {
    const { current, isLogin } = system;
    if (!isLogin) {
        const LoginFormProps = {
            onSubmit(params) {
                dispatch({
                    type: 'system/login',
                    payload: params
                })
            },
        }
        return (<WrappedNormalLoginForm {...LoginFormProps} />);
    } else {
        return (
            <div>
                <Layout style={{ height: window.innerHeight }}>
                    <Sider>
                        <AppMenu current={current} />
                    </Sider>
                    <Layout>
                        <Header>
                            <AppHeader/>
                        </Header>
                        <Content style={{ margin: '0 8px', height: "85%" }}>
                            <Route path="/index" component={IndexPage} />
                            <Route path="/users" component={Users} />
                            <Route path="/products" component={Products} />
                            <Route path="/map" component={Map} />
                        </Content>
                        <Footer>test@qq.com</Footer>
                    </Layout>
                </Layout>
            </div>
        );
    }

}

//export default App;
function mapStateToProps({ system }) {
    return { system };
}

export default connect(mapStateToProps)(App);