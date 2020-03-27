import axios from 'axios';

// api
function getGoods(){
  return axios.get('/api/goods').then(({data}) => {
    const courseData = data.data;
    return {
      courses: courseData.data,
      tags: courseData.tags
    }
  })
}

export default {
  namespace: "goods",
  state: { // 初始状态包括物品和分类
    courses: {}, // 物品
    tags: [] // 分类
  },
  effects: {
    *getList(action, {call, put}){           
      const payload = yield call(getGoods)
      yield put({ type: 'initGoods', payload })
    }
  },
  reducers: {
    initGoods(state,{payload}){
      return payload
    }
  }
};
