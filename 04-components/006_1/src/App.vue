<template>
  <div class="container">
    <form class="card" @submit.prevent="submitHandler">
      <h1>Анкета на Vue разработчика!</h1>
      <!-- <div class="form-control" 
           :class="{invalid:errors.name}"
             >
        <label for="name">Как тебя зовут?</label>
        <input  
        type="text" 
        id="name" 
        placeholder="Введи имя"
        v-model.trim="name"
        
        >
        <small v-if="errors.name">{{ errors.name }}</small>
      </div> -->
       <app-input
       :placeHolder="'Введи имя'"
       label="Как тебя зовут?"
       :error="errors.name"
       v-model:value="name"
       > </app-input>
      <div class="form-control">
        <label for="age">Выбери возраст</label>
        <input 
        type="number" 
        id="age" 
        max="70"
        v-model.number="age"
        >
      </div>

      <div class="form-control">
        <label for="city">Твой город</label>
        <select 
        id="city"
         v-model="city"
        >
          <option value="spb">Санкт-Петербург</option>
          <option value="msk">Москва</option>
          <option value="kzn">Казань</option>
          <option selected value="nsk">Новосибирск</option>
        </select>
      </div>

      <div class="form-checkbox">
        <span class="label">Готов к переезду в Токио?</span>
        <div class="checkbox">
          <label><input type="radio" name="trip" v-model="relocate" value="yes"/> Да</label>
        </div>

        <div class="checkbox">
          <label><input type="radio" name="trip" v-model="relocate" value="no"/> Нет</label>
        </div>
      </div>

      <div class="form-checkbox">
        <span class="label">Что знаешь во Vue?</span>
        <div class="checkbox">
          <label><input type="checkbox" name="skills" v-model="skills" value="Vuex"/> Vuex</label>
        </div>
        <div class="checkbox">
          <label><input type="checkbox" name="skills" v-model="skills" value="Vue CLI"/> Vue CLI</label>
        </div>
        <div class="checkbox">
          <label><input type="checkbox" name="skills" v-model="skills" value="Vue Router"/> Vue Router</label>
        </div>
      </div>

      <div class="form-checkbox">
        <span class="label">С правилами согласен</span>
        <div class="checkbox">
          <input type="checkbox" name="agree" v-model="agree" value="true"/><span>Правила</span>
        </div>
      </div>

      <button type="submit" class="btn primary">Отправить</button>
    </form>
  </div>
</template>

<script>
import AppInput from './components/AppInput.vue'
  export default {
     data() {
      return {
        name:'',
        age: 23,
        city:'spb',
        relocate:'yes',
        skills:[],
        agree:false,
        errors: {
          name:null,
        }
      }
    },
    methods : {
      formIsValid() {
        let isValid = true
        if(this.name.length === 0) {
          this.errors.name = 'Введите ваше имя'
           isValid = false
        } else {
          this.errors.name = null
          return isValid
        }
        
      },
       submitHandler() {
        if(this.formIsValid()){
          console.log(this.name)
          console.log(this.age)
          console.log(this.city)
          console.log(this.relocate)
          console.log(this.skills)
          console.log(this.agree)
        }
       }
    },
    components : {AppInput}
  }
</script>

<style scoped>
  .form-control small {color:red}
  .form-control.invalid input { border-color:red}
</style>