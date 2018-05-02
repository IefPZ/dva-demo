var express = require('express');

var app = express();

app.get('/',  (req ,res) => {
    res.send('Hello World!');
});

app.get('/api/users', (req, res) => {
    const mock = {
        total: 3,
        current: 1,
        loading: false,
        list: [
          {
            id: 1,
            name: '张三',
            age: 23,
            address: '成都',
          },
          {
            id: 2,
            name: '李四',
            age: 24,
            address: '杭州',
          },
          {
            id: 3,
            name: '王五',
            age: 25,
            address: '上海',
          },
        ],

      };
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.json(mock);
})

app.get('/api/products', (req, res) => {
  const mock = {
      total: 2,
      current: 1,
      list: [
        { name: 'dva', id: 1},
        { name: 'antd', id: 2},
        { name: 'react', id: 3},
      ],

    };
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.json(mock);
})


var server = app.listen(3000, () => {
    let host = server.address().address;
    let port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});