import axios from 'axios'
import config from '../../config'

//首页的逻辑
//indexReducer

const GET_LIST = 'INDEX/GET_LIST'
const changeList = list => ({
  type: GET_LIST,
  list
})

export const getIndexList = server => {
  return (dispatch) => {
    return axios.get(`${config.host}/api/course/list`)
      .then(res => {
        const {
          list
        } = res.data
        console.log("TCL: list", list)
        dispatch(changeList(list))
      })
  }
}
const defaultState = {
  list: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_LIST:
      const newState = {
        ...state,
        list: action.list
      }
      return newState
    default:
      return state
  }
}