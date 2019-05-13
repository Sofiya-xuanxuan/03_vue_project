export default {
    namespaced: true,//命名空间
    state: {
        isLogin:!!localStorage.getItem('token')//！！表示布尔值转换——转为了true或者false
    },
    mutations: {
        setLoginState(state,val){
            state.isLogin=val;
        }
    },
    actions: {
        login({commit},userInfo){

        }
    }
}