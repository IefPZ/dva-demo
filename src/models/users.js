import { query } from '../services/users';

export default {
    namespace: 'users',

    state: {
        list: [],
        total: null,
        loading: false, 
        current: null,
        currentItem: {},
        modalVisible: false,
        modalType: 'create',
    },

      // Quick Start 已经介绍过 subscriptions 的概念，这里不在多说
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname === '/users') {
          dispatch({
            //type: 'querySuccess',
            type: 'query',
            payload: {}
          });
        }
      });
    },
  },

    effects: {
        *query({ payload }, { select, call, put }){
            yield put({ type: 'showLoading' });
            const { data } = yield call(query);
            if (data) {
              yield put({
                type: 'querySuccess',
                payload: {
                  list: data.list,
                  total: data.total,
                  current: data.current
                }
              });
            }     
        },
        *create(){},
        *'delete'(){},
        *update(){},
    },

    reducers: {
        showLoading(state, action){
            return { ...state, loading:true }
        }, // 控制加载状态的 reducer
        showModal(){}, // 控制 Modal 显示状态的 reducer
        hideModal(){},
        // 使用静态数据返回
        querySuccess(state, action){
          /*  
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
          return {...state, ...mock, loading: false};
          */
         return {...state, ...action.payload, loading: false};
        },
        createSuccess(){},
        deleteSuccess(){},
        updateSuccess(){},
    }


}