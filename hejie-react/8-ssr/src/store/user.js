import axios from 'axios'
import config from '../../config';
// actionsType
const GET_LIST = 'INDEX/GET_USER_INFO'

const changeUserInfo = data => ({
  type: GET_LIST,
  data
})
export const getUserInfo = server => {
  return (dispatch, getState, axiosInstance) => {
    return axios.get(`${config.host}/api/user/info1`)
      .then(res => {
        const { data } = res.data
        console.log("TCL: userInfo", data)
        dispatch(changeUserInfo(data))
      })
  }
}

const defaultState = {
  userinfo: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_LIST:
      const newState = {
        ...state,
        userinfo: action.data
      }
      return newState
    default:
      return state
  }
}