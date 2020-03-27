// 任务清单
import { call, put, takeEvery } from "redux-saga/effects"

// 模拟登录
const UserService = {
  login(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ name: "jie", age: 90 })
      }, 1000)
    })
  }
}

// worker Saga
function* test(action) {
  try {
    const result = yield call(UserService.login, action)
    console.log("TCL: function*test -> result", result)
    yield put({ type: "init", result })
  } catch (message) {
    console.log("TCL: function*test -> message", message)
  }
}

function* mySaga() {
  yield takeEvery("asyncFetch", test)
}

export default mySaga
