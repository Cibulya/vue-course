<template>
     <app-alert 
    v-if="alert"
    title="Работаем с Composition APi"
    type="danger"
    @close="closeAlert"  
    ></app-alert>
        <div class="card">
      <h1>Vue Composition Api</h1>
      <small>data methods computed watch</small>
      <hr>
      <div class="form-control">
        <input type="text" v-model="textInput">
      </div>
      <button class="btn" @click="change">Изменить</button>

      <button class="btn danger" @click="toggle">{{alert ? 'Закрыть Алерт' : 'Показать Алерт'  }}</button>
    </div>

    <framefork-info
     :name="name" 
     :version="version" 
     @change-version="changeVers"
     class="test-from-app"
     >
    </framefork-info>
</template>

<script>
import {ref, 
  reactive, 
  toRefs,
  isRef,
  isReactive,
  computed,
  provide,
    watch} from 'vue';
    import FrameforkInfo from '@/FrameforkInfo.vue';
    import AppAlert from '@/AppAlert.vue';
    import { useAlert } from '@/use/alert';
    const {alert,toggle,closeAlert}=useAlert();
    export default {
        setup() {
    const name = ref('Vue JS');
    const version = ref(3);
    const textInput = ref(null);
    const firstName = ref('');
   

    const framework = reactive({
      name:'Vue JS',
      version:'3'
    });
    function changeVers(number) {
      version.value = number
    };

    function changeInfo() {
       name.value = 'Vue JS!';
       version.value = 42;
    };
    provide('name',name);
    provide('version',version)
    watch([textInput],(newVals,oldVals)=>{
      console.log(newVals)
      console.log(oldVals)
    });
    return {
      change:changeInfo,
      textInput,
      changeVers,
      name,
      version,
      alert,
      toggle,
      closeAlert
    }
  },
  components:{
    FrameforkInfo,
    AppAlert
  }
    }
</script>