import { getToken, setToken, removeToken } from "@/utils/auth";
import {login, getInfo} from '@/api/user';

// 存储用户令牌和角色信息
const state = {
  token: getToken(),
  roles: []
  // 其他用户信息
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles;
  }
};

const actions = {
  // 用户登录动作 user/login  dispatch('user/login')
  login({ commit }, userInfo) {
    // 调用并处理结果，错误处理已拦截无需处理
    return login(userInfo).then((res) => {
      commit("SET_TOKEN", res.data);
      setToken(res.data);
    });
    // const { username } = userInfo;
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     if (username === "admin" || username === "jerry") {
    //         // 保存状态
    //       commit("SET_TOKEN", username);
    //     //   写入cookie
    //       setToken(username);
    //       resolve();
    //     } else {
    //       reject("用户名、密码错误");
    //     }
    //   }, 1000);
    // });
  },

  // 获取用户角色等信息
  getInfo({ commit, state }) {
    return getInfo(state.token).then(({data: roles}) => {
      commit("SET_ROLES", roles);
      return {roles}
    })
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     const roles = state.token === 'admin' ? ['admin'] : ['editor']
    //     commit("SET_ROLES", roles);
    //     resolve({roles});
    //   }, 1000);
    // });
  },

  // 重置令牌
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit("SET_TOKEN", "");
      commit("SET_ROLES", []);
      removeToken();
      resolve();
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
