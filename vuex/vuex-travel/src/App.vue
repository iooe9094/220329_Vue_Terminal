<template>
  <div id="app">
    <!-- 넘길게 아무것도 없으면 <TravelList /> 써도 됨 -->
    <TravelList>

    </TravelList>
  </div>
</template>

<script>
import TravelList from "@/components/TravelList.vue"

export default {
  name: 'App',
  components: {
    "TravelList" : TravelList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
