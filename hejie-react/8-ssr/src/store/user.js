// import axios from "axios"
// actionsType
const GET_LIST = "INDEX/GET_USER_INFO"

const changeUserInfo = data => ({
  type: GET_LIST,
  data
})
export const getUserInfo = server => {
  return (dispatch, getState, $axios) => {
    return $axios.get(`/api/user/info`).then(res => {
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
