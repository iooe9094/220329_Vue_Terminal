import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 공유 data를 등록하는 자리
  state: {
    items: [
      {
        country: "France",
        city: "paris",
        attraction: "에펠탑",
        entrance_fee: 10
      },
      {
        country: "Italy",
        city: "venezia",
        attraction: "콜로세움",
        entrance_fee: 0
      },
      {
        country: "Austria",
        city: "Salzburg",
        attraction: "호엔잘츠부르크성",
        entrance_fee: 15.20
      },
      {
        country: "Germany",
        city: "FrankFurt",
        attraction: "뢰머광장",
        entrance_fee: 0
      },
      {
        country: "Nederland",
        city: "Amsterdam",
        attraction: "국립미술관",
        entrance_fee: 17.50
      },
    ],
    selectedCountry: ""
  },
  // 원본 데이터를 검색하는 목적
  getters: {
    items: state => {
      return state.items
    },
    // 관광지 객체 배열에서 클릭한 것의 나라이름에 해당하는 객체만 가져오는 함수
    filteredItems: state => {
      return state.items.filter(item => {
        return item.country == state.selectedCountry
      });
    }
  },
  // 원본 데이터를 변형, 가공하는 목적
  mutations: {
    reducePrice: state => {
      state.items.forEach(item => {
        item.entrance_fee = (item.entrance_fee - (item.entrance_fee * 0.2))
      })
    },
    // 첫번 째 매개변수인 state는 무조건 들어와야 함
    goCountry: (state, inCountry) => {
      state.selectedCountry = inCountry;
    }
  },
  // 비동기 함수일경우 아래에 등록
  actions: {
    reducePrice: context => {
      setTimeout(function() {
        context.commit("reducePrice");
      }, 2000);
    },
    goCountry: (context, inCountry) => {
      context.commit("goCountry", inCountry);
    }
  },
  modules: {
  }
})
