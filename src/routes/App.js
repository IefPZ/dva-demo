import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Route, Link } from 'dva/router';
import IndexPage from './IndexPage';
import Users from './Users'
import Products from './Products'

const { Header, Content, Footer } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        current: 'Home',
      }
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
    <div>
        <Layout style={{height: window.innerHeight}}>
            <Header>
                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                >
                    <Menu.Item key="Home">
                        <Link to='/index'>
                            <Icon type="home" />首页
                        </Link>
                    </Menu.Item>

                    <Menu.Item key="Users">
                        <Link to="/users">
                            <Icon type='user'/>Users
                        </Link>
                    </Menu.Item>

                    <Menu.Item >
                        <Link to="/products">
                            <Icon type="database" />产品
                        </Link>
                    </Menu.Item>
                </Menu>
            </Header>
            <Content style={{margin: '0 8px', height: "85%"}}>
                {/*this.props.children*/}
                <Route path="/index" component={IndexPage}/>
                <Route path="/users" component={Users} />
                <Route path="/products" component={Products} />
            </Content>
            <Footer>test@qq.com</Footer>
        </Layout>      
    </div>
    );
  }
}
export default App;