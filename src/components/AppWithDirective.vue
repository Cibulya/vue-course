<template>
  <div class="card" v-if="show">
    <h2 v-color:[type].blink="myColor">Директивы</h2>
    <div class="form-control">
      <label for="inp">Активный по умолчанию</label>
      <input v-focus type="text" name="inp" id="inp">
    </div>
    <button class="btn"
      @click="myColor = 'darkblue'"
    >Сделать синим</button>
    <button class="btn"
      @click="type = type === 'color' ? 'backgroundColor' : 'color'"
    >Переключить тип</button>
  </div>
</template>

<script>
import focusDirective from './ocusDirective'
import colorDirective from './colorDirective'
export default {
  directives:{
    focus:focusDirective,
    color:colorDirective
 },
 data() {
   return {
    myColor:'darkRed',
    type:'color',
    show:true,
   }
 },
 mounted(){
  setTimeout(()=>{
    this.show = false
  },2000)
 }
}
</script>

<style>

</style>