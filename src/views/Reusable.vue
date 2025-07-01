<template>
    <app-alert 
    v-if="alert"
    title="Работаем с Composition APi"
    type="primary"
    @close="closeAlert"  
    ></app-alert>
<div class="card">
    <h2>Переиспользование</h2>
    <button 
    @click="toggle"
    class="btn primary">{{alert ? 'Закрыть сообщение' : 'Показать сообщение'}}</button>
    <button class="btn" @click="navigate">Перейти на главную</button>
</div>

</template>


<script>
import { useRouter,useRoute } from 'vue-router';
import AppAlert from '@/AppAlert.vue';
import { useAlert } from '@/use/alert';

export default {
    
 setup() {
    const {alert,toggle,closeAlert} = useAlert();
    const {path} = useRoute();
    const router = useRouter();
    const navigate = () => router.push('/');
    
    return {
       navigate,
       alert,
       toggle,
       closeAlert
    }
 },
 components:{
    AppAlert,
 }
}
</script>