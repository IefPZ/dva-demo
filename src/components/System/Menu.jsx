import { Layout, Menu, Icon, Button } from 'antd';
import { Route, Link } from 'dva/router';

const AppMenu = ({ current }) => {
    console.log('props:' + current);
    return (
        <div>
            <Menu
                selectedKeys={[current]}
                mode="inline"
            >
                <Menu.Item key="Home">
                    <Link to='/index'>
                        <Icon type="home" />首页
                        </Link>
                </Menu.Item>

                <Menu.Item key="Users">
                    <Link to="/users">
                        <Icon type='user' />Users
                        </Link>
                </Menu.Item>

                <Menu.Item key="Products">
                    <Link to="/products">
                        <Icon type="database" />产品
                        </Link>
                </Menu.Item>

                {/*登录*/}
                <Menu.Item key="Map">
                    <Link to="/map">
                        <Icon type="login" />登录
                        </Link>
                </Menu.Item>
            </Menu>
        </div>
    )
};

export default AppMenu;