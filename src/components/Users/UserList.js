
//采用antd的UI组件
import { Table, Popconfirm } from 'antd';

//采用 stateless 的写法
const UserList = ({
    total,
    current,
    loading,
    dataSource,
}) => {
    const columns = [{
        title: 'id',
        dataIndex: 'id',
        key: 'id',
        render: (text) => <a href='#'>{text}</a>
    }, {
        title: 'username',
        dataIndex: 'username',
        key: 'username',
        render: (text) => <a href='#'>{text}</a>
    }, {
        title: 'first_name',
        dataIndex: 'first_name',
        key: 'first_name',
    }, {
        title: 'last_name',
        dataIndex: 'last_name',
        key: 'last_name',
    }, {
        title: 'email',
        dataIndex: 'email',
        key: 'email',
    }, {
        title: '操作',
        key: 'operation',
        render: (text, record) => (
            <p>
                <a onClick={() => { }}>编辑</a>
                &nbsp;
                <Popconfirm title='确定删除？' onConfirm={() => { }}>
                    <a>删除</a>
                </Popconfirm>
            </p>
        ),
    }];

    //定义分页对象
    const pagination = {
        total,
        current,
        pageSize: 10,
        onChange: () => { },
    };

    return (
        <div>
            <Table
                columns={columns}
                dataSource={dataSource}
                loading={loading}
                rowKey={record => record.id}
                pagination={pagination}
            />
        </div>
    );
}

export default UserList;