export default {
  namespace: 'user', // 可省略
  state: [], // 初始状态：缓存或空数组
  effects: {
    *asyncFetch({ payload }, { put, select }) {
      console.log('TCL: *Fetch -> payload', payload);
      yield put({ type: 'add', payload });
      const cart = yield select(state => state.user);
      console.log('TCL: *init -> cart', cart);
    },
    // *init({ payload }, { put, select }) {
    //   // 1.派发动作
    //   yield put({ type: 'add', payload });
    //   // 2.缓存

    //   // localStorage.setItem('cart', JSON.stringify(cart));
    // },
  },
  reducers: {
    add(state, action) {
      // 新增
      return [...state, action.payload];
    },
  },
};
