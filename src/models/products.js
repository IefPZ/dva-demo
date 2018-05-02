import { query } from '../services/products';

export default {
    namespace: 'products',
    state: {
        list: [],
        total: null,
        loading: false, 
        current: null,
    },

    subscriptions: {
        setup({dispatch, history}) {
            history.listen(location => {
                if (location.pathname === '/products') {
                  dispatch({
                    type: 'query',
                    payload: {}
                  });
                }
              });
        }
    },

    effects: {
        *query({ payload }, { select, call, put }){
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
    },

    reducers: {
        'delete'(state, { payload: id }) {
            const list = state.list;
            return {list: list.filter(item => item.id !== id)};
          },

        querySuccess(state, action){
            return {...state, ...action.payload, loading:false}
        },
    },
}