import React from 'react';
import { Layout, Menu, Icon, Button } from 'antd';
import { Route, Link } from 'dva/router';
import { connect } from 'dva';

import AppHeader from '../components/Home/Header';

import IndexPage from './IndexPage';
import Users from './Users'
import Products from './Products'
import Map from '../components/Gis/Map'

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const App = ({ home }) => {
    const { current } = home;

    return (
        <div>
            <Layout style={{ height: window.innerHeight }}>
                <Sider>
                    <AppHeader current={current} />
                </Sider>
                <Layout>
                    <Header>


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

//export default App;
function mapStateToProps({ home }) {
    return { home };
}

export default connect(mapStateToProps)(App);