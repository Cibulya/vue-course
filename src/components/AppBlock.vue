<template>
  <div class="container">
    <app-alert 
    :alertText="alertProps.alertText"
    :alertTitle="alertProps.alertTitle"
    @close="alertProps.alert = false"
    v-if="alertProps.alert === true"
    ></app-alert>
    <div class="card">
        <button 
        class="btn primary"
        @click="toggleAlert"
        >{{ alertProps.alert ? 'Скрыть Алерт' : 'Показать Алерт' }}</button>
    </div>
  </div>
</template>

<script>
import AppAlert from './AppAlert.vue';
import alertMixin from './alertMixin'
export default {
    mixins:[alertMixin],
    components:{
      AppAlert
    },

}
</script>

<style>

</style>