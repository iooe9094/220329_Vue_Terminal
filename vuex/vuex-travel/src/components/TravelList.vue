<template>
  <div id="travel-list">
      <p>유럽여행</p>
      <ul>
          <li v-for="item in items"
              :key="item.attraction"
              @click="goCountry(item.country)">
              <span>국가 : {{ item.country }} </span>
              <span>도시 : {{ item.city }} </span>
              <span>명소 : {{ item.attraction }} </span>
              <span>요금 : {{ item.entrance_fee | currency }} </span>
          </li>
      </ul>
      <!-- mutations 속성에 등록된 함수 호출 -->
      <br>
      <button @click="reducePrice">특별 입장료 할인</button>
      <!-- 자식 컴포넌트 안의 자식 컴포넌트 -->
      <TravelListDetails></TravelListDetails>
  </div>
</template>

<script>
import TravelListDetails from "./TravelListDetails"

export default {
    components: {
        "TravelListDetails" : TravelListDetails
    },
    methods: {
        // vuex 저장소 데이터 호출
        goCountry(inValue) {
            // 저장소 호출 식 : this.$store.~
            // this.$store.state.selectedCountry = inValue;
            // this.$store.commit("goCountry", inValue);
            this.$store.dispatch("goCountry", inValue);
        },
        reducePrice() {
            // this.$store.commit("reducePrice")
            this.$store.dispatch("reducePrice");
    }
    },
    filters: {
        currency(value) {
            // 나라 별 통화(원, 달러 등) 사용식
            // de-DE : 나라명(독일 DE)
            // currency: 통화 표시 (유로 EUR)
            return new Intl
                .NumberFormat("de-DE", {style:"currency", currency: "EUR"})
                .format(value)
        }
    },
    computed: {
        items() {
            // vuex 저장소 데이터 호출
            return this.$store.getters.items;
        }
    }
}
</script>

<style>
    #travel-list {
        color: white;
        background: blue;
        padding: 10px 20px;
    }
    #travel-list ul {
        padding: 0;
        list-style-type: none;
    }
    #travel-list li {
        margin: 10px;
        padding: 20px;
        background: #1565c0;
    }
</style>