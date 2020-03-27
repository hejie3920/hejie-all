import store from "@/store";

const permission = {
    // 指令已经添加到元素上，el-指令相关dom元素；binding-对象
    // binding: {name:'if', expression:'foo==1', value: true}
    // v-permission="['admin','editor']"
  inserted(el, binding) {
    // 获取指令的值：按钮要求的角色数组
    // 结构value并取别名pRoles
    const { value:pRoles } = binding;
    // 获取用户角色
    const roles = store.getters && store.getters.roles;

    if (pRoles && pRoles instanceof Array && pRoles.length > 0) {      
      // 判断用户角色中是否有按钮要求的角色
      const hasPermission = roles.some(role => {
        return pRoles.includes(role);
      });

      // 如果没有权限则删除当前dom
      if (!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el);
      }
    } else {
      throw new Error(`需要指定按钮要求角色数组，如v-permission="['admin','editor']"`);
    }
  }
};

export default permission;