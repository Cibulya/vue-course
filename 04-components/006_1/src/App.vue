<template>
  <div class="container pt-1">
    <div class="card">
       <h2>Slots</h2>
      </div>
   
   <app-list>
    <template #default="slotProps">
      <span style="color: #c25205;">Item: {{ slotProps.iter }}</span> 
    </template>
    
   </app-list>
   

    <app-block>
      <p>Это важный тескт из апп</p>
      <template v-slot:header><h3>Это заголовок!</h3></template>
    </app-block>
  </div>
  
</template>

<script>
import AppBlock from './components/AppBlock.vue';
import AppList from './components/AppList.vue';
 export default {
   components : {
    AppBlock,AppList
   }
 }
</script>

<style>

</style>