import { login, logout } from '../services/system';
import { stat } from 'fs';

export default {

    namespace: 'system',

    state: {
        current: 'home',
        isLogin: false,
        username: ''
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
        //登录
        *login({ payload }, { call, put }) {

            const { data } = yield call(login, payload);
            if (data) {
                yield put({
                    type: 'doLogin', 
                    payload: {
                        username: payload.username,
                        isLogin: data.success
                    }
                })
            }
        },

        //登出
        *logout({ payload }, { call, put }) {

            const { data } = yield call(logout, payload);
            console.log(data);
            if (data) {
                yield put({
                    type: 'doLogout', payload: {
                        username: payload.username,
                        isLogin: data.success
                    }
                })
            }
        }, 
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
            let result = { ...state, current: current};
            // 判断是否登录
            if (!state.isLogin) {
                let sessionStorage = window.sessionStorage;
                if (sessionStorage['userInfo']) {
                    let userInfo = JSON.parse(sessionStorage['userInfo'])
                    result.username = userInfo.username
                    result.isLogin = true
                }
            }
            return result
        },

        doLogin(state, action) {
            let userInfo = action.payload;
            let sessionStorage = window.sessionStorage;
            sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
            return { ...state, ...action.payload };
        },

        doLogout(state, action) {
            let userInfo = action.payload;
            let sessionStorage = window.sessionStorage;
            sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
            return { ...state, ...action.payload };
        },
        
    },

}
