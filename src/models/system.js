import { login, logout } from '../services/system';

export default {

    namespace: 'system',

    state: {
        current: 'system',
        isLogin: false
    },

    subscriptions: {
        setup({ dispatch, history }) {
            history.listen(location => {
                dispatch({
                    type: 'updateActiveIndex',
                    payload: location.pathname
                });
            });
        },
    },

    effects: {
        *login({ payload }, { call, put }) {
            const { data } = yield call(login, payload);
            if (data) {
                yield put({
                    type: 'isLogin', payload: {
                        isLogin: data.success
                    }
                })
            }
        }
    },

    reducers: {
        updateActiveIndex(state, action) {
            let pathname = action.payload;
            let current = 'home';
            if (/index/.test(pathname)) {
                current = 'home';
            } else if (/users/.test(pathname)) {
                current = 'Users';
            } else if (/products/.test(pathname)) {
                current = 'Products';
            } else if (/map/.test(pathname)) {
                current = 'Map';
            }
            return { ...state, current: current };
        },

        isLogin(state, action) {
            return { ...state, ...action.payload };
        }
    },

}
