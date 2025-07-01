<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <div class="card">
      <h1>{{ upperCaseTitle }}</h1>
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
  // computed:mapGetters(['counter','doubleCounter','upperCaseTitle']),
  computed:{
    ...mapGetters(['upperCaseTitle']),
    ...mapGetters('count',['counter','doubleCounter'])
  },
  // data() {
  //   return {
  //     counter:0,
  //   }
  // },
  methods:{
    ...mapMutations({
      add:'count/increment',
    }),
    ...mapActions('count',['incrementAsync'])
  }
}
</script>
