export const init = payload => ({
  type: "init",
  payload
})
export const addUser = payload => ({
  type: "add",
  payload
})

// export let asyncFetch = payload => ({
//   type: "asyncFetch",
//   payload
// })

export const asyncFetch = payload => {
  return dispatch => {
    setTimeout(() => {
      dispatch({ type: "init", payload })
    }, 1000)
  }
}

export default function Reducer(
  state = {
    name: "和杰啊",
    age: 24
  },
  action
) {
  switch (action.type) {
    case "init":
      return { ...action.payload }
    case "add":
      return { ...state, ...action.payload }
    default:
      return state
  }
}
