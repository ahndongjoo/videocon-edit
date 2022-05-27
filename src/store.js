import { createStore } from 'vuex'

const store = createStore({
  state(){
    return {
        MenuState : 1,
        fileSrc : "",

    }
  },
  mutations : {
    MenuStateChange(state , ms){
      state.MenuState = ms
      console.log(ms)
    },
    fileSrcChange(state){
      console.log(state)
    },
    onFileChange2(state){

      const files = state.target.files
			console.log(files)
			files[0].type != "video/mp4" ? alert("확장자명을 확인해 주세요.") : this.fileName = files[0].name;

			let reader = new FileReader();
			reader.readAsDataURL(files[0]);
			reader.addEventListener('load' , function(){
				console.log(reader.result);
			});
    }
  },
  actions:{
    onFileChange2 : function(context){
      return alert(`${context}`)
    } 
  }
});

// 데이터 수정 스텝
// store.js에 state수정방법 정의
// 수정하고 싶으면 store.js에 부탁

export default store