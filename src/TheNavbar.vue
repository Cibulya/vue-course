<template>
  <header class="navbar">
   <strong>Счетчик  {{ counter }}</strong>
   <button class="btn primary" @click="add">Добавить 5</button>
  </header>
</template>

<script>
//mappers
import {mapGetters,mapMutations} from 'vuex'
  export default {
     computed:{
      // counter() {
      //   return this.$store.getters.counter
      // },
      ...mapGetters(['counter']) 
     },
     methods: {
      add() {
        // this.$store.commit('addFive',5)
        this.$store.commit({
          type:'addFive',
          value:5,
        })
      },
      ...mapMutations({
        add:'addFive'
      }),
     }
  }
</script>
