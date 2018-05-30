import { Layout, Menu, Icon, Button } from 'antd';
import { Route, Link } from 'dva/router';

const AppHeader = ({ isLogin }) => {
    console.log('isLogin:' + isLogin);
    return (
        <div>
            <Link to="/map">
                <Icon type="login" />登录
            </Link>

        </div>
    )
};

export default AppHeader;