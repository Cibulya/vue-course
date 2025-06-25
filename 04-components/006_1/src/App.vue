<template>
  <div class="container pt-1">
    <div class="card">
      <async-component></async-component>
       <h2>Динамические и синхронные компоненты</h2>

        <app-button
          :color="oneColor"
          @action="active = 'one'"
          ref="myBtn">
                  One
        </app-button>
        <app-button
          :color="twoColor"
          @action="active = 'two'"
          >Two</app-button>
      </div>
      <keep-alive>
        <component :is="componentName"></component>
      </keep-alive>
  </div>
</template>

<script>
import AppButton from './components/AppButton.vue';
import AppTextOne from './components/AppTextOne.vue';
import AppTextTwo from './components/AppTextTwo.vue';
 export default {
    components:{AppButton,AppTextOne,AppTextTwo},
    data () {
      return {
        active:'one'
      }
    },
    mounted() {
      console.log(this.$refs.myBtn)
      this.$refs.myBtn.btnLog();
      // this.$refs.myBtn.btnLog();
    },
    computed : {
      // componentName() {
      //   return 'app-text-' + this.active
      // },
       componentName() {
        
          return 'app-text-' + this.active
        
      },
      oneColor() {
        return this.active === 'one' ? 'primary' : ''
      },
      twoColor() {
        return this.active === 'two' ? 'primary' : ''
      }
    }
 }
</script>

<style scoped>

</style>