<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <div class="card">
      <h1>Про Vuex</h1>
      <h2>Счетчик: {{ counter }}. ({{ doubleCounter }})</h2>
      <button @click="add" class="btn">Добавить</button>
      <button @click="incrementAsync({value:10,delay:100})" class="btn danger">Добавить 10</button>
    </div>
  </div>
</template>

<script>
import {mapGetters,mapMutations,mapActions} from 'vuex';
import TheNavbar from './TheNavbar.vue'
export default {
  components: {TheNavbar},
  computed:mapGetters(['counter','doubleCounter']),
  // data() {
  //   return {
  //     counter:0,
  //   }
  // },
  methods:{
    ...mapMutations({
      add:'increment',
    }),
    ...mapActions(['incrementAsync'])
  }
}
</script>
