<template>
  <div class="container">
    <form class="card" @submit.prevent="createPerson">
      <h2>Работа с базой данных</h2>

      <div class="form-control">
        <label for="name" id="name">Введите имя</label>
        <input id="name" v-model.trim="name" type="text">
      </div>

      <button type="submit" class="btn primary" :disabled="name.length === 0">Создать Запись</button>
    </form>

    <app-loader v-if="loading"></app-loader>

    <app-people-list :people="people" @load="loadPeople" v-else @deletePerson="deleteFromDb">

    </app-people-list>
  </div>
</template>

<script>
import AppPeopleList from './components/AppPeopleList.vue';
import AppLoader from './components/AppLoader.vue';
import axios from 'axios';

  export default {
    data() {
      return {
        name:'',
        people:[],
        loading:false,
      }
    },
    mounted() {
        this.loadPeople();
    },
    methods: {
      async createPerson(){
        const sentData = await fetch('https://vue-with-http-59a8c-default-rtdb.europe-west1.firebasedatabase.app/people.json',
          {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
              firstName:this.name
            })
          })
        const firebaseData = await sentData.json();
        this.people.push({
          firstName:this.name,
          id:firebaseData.name,
        })
          this.name = ''
      },
      async loadPeople() {
        try {
          this.loading = true
          const { data }= await axios.get('https://vue-with-http-59a8c-default-rtdb.europe-west1.firebasedatabase.app/people.json');
          this.people = Object.keys(data).map((key)=>{return {id:key,...data[key]}});
          this.loading = false;
        } catch(e) {
          if(e) {
            this.people = []
            this.loading = false;
          }
        }
      
      },
      async deleteFromDb(personId) {
        await axios.delete(`https://vue-with-http-59a8c-default-rtdb.europe-west1.firebasedatabase.app/people/${personId}.json`)
        this.people = this.people.filter(person=>person.id !== personId)
      }
      
    },
    components : {AppPeopleList,AppLoader}
  }
</script>

<style scoped>

</style>