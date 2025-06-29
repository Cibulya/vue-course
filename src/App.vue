<template>
  <div class="card">
    <h2>{{$i18n('app.title')}}</h2>
    <h2></h2>
    <button class="btn" @click="$alert('Alert from plugin')">Alert</button>
    <button class="btn" @click="changeLang">Переключить язык</button>
    <button class="btn primary" @click="modal = true">Открыть Модальное окно</button>
   
    <teleport to="body">
      <app-modal 
      v-if="modal"
      @close="modal = false"
      >
    </app-modal>
    </teleport>
  </div>
</template>

<script>
import AppModal from './components/AppModal.vue';
export default {
  inject:['changeI18n'],
  methods:{
    changeLang() {
      this.changeI18n.changeLanguage(); 
      this.$forceUpdate();
    }
  },
  data(){
    return {
      modal:false
    }
    
  },
  components:{
    AppModal
  }
}
</script>

<style>

</style>