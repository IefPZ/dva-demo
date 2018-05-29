export default {

    namespace: 'home',

    state: {
        //activeIndex: 0,
        current: 'home',
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
        }
    },

}
