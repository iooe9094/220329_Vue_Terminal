<template>
  <div id="travelist-details">
    <p>{{ this.$store.state.selectedCountry }}</p>
    <ul>
      <li v-for="item in filterdItems" :key="item.attraction">
        <span>도시 : {{ item.city }}</span>
        <span>명소 : {{ item.attraction }}</span>
        <span>요금 : {{ item.entrance_fee | currency }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  filters: {
    currency(value) {
            // 나라 별 통화(원, 달러 등) 사용식
            // de-DE : 나라명(독일 DE)
            // currency: 통화 표시 (유로 EUR)
      return new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
      }).format(value);
    },
  },
  computed: {
    filterdItems() {
      return this.$store.getters.items.filter((item) => {
        return item.country == this.$store.state.selectedCountry;
      });
    },
  },
};
</script>

<style>
#travelist-details {
    color: white;
    background: teal;
    padding: 10px 20px;
}
#travelist-details ul {
    padding: 0;
    list-style-type: none;
}
#travelist-details li {
    margin: 10px;
    padding: 20px;
    background: #00695c;
}
</style>