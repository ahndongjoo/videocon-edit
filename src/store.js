import { createStore } from 'vuex'

const store = createStore({
  state(){
    return {
        MenuState : "",
    }
  },
  mutations : {
    MenuStateChange(state , ms){
        state.MenuState = ms
        console.log(ms)
      },
  }
});

// 데이터 수정 스텝
// store.js에 state수정방법 정의
// 수정하고 싶으면 store.js에 부탁

export default store