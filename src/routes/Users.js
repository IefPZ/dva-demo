
//引入connect工具函数
import { connect } from 'dva';

import UserList from '../components/Users/UserList';
import UserSearch from '../components/Users/UserSearch';
import UserModal from '../components/Users/UserModal';

import styles from './Users.less'

function Users({ location, dispath, users}) {

    const {
        loading, list, total, current,
        } = users;

    const userSearchProps = {};
    const userListProps = {
        dataSource: list,
        total,
        loading,
        current
    };
    const userModalProps={};

    return (
        <div className={styles.normal}>
            {/*用户筛选搜索框*/}
            <UserSearch {...userSearchProps}/>
            {/*用户信息展示列表*/}
            <UserList {...userListProps}/>
            {/*添加用户 & 修改用户弹出的浮层*/}
            <UserModal {...userModalProps}/>
        </div>
    );
}

//指定订阅数据， 这里关联了users
function mapStateToProps({ users }){
    return { users };
}

//建立数据关联关系
export default connect(mapStateToProps)(Users);