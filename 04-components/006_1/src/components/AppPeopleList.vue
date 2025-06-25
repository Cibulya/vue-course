<template>
    <div v-if="people.length !== 0">
    <div class="card inline" v-for="person in people" :key="person.id">
       <h3> {{ person.firstName }} </h3>
       <button class="btn danger" @click="$emit('deletePerson',person.id)">Удалить</button>
    </div>
    </div>
     <div v-else>
    <div class="card center">
        <h4>Людей пока нет.</h4>
       <button class="btn" @click="$emit('load')">Загрузить список</button>
    </div>
    </div>
</template>


<script>
  export default {
    emits:['load','deletePerson'],
    props:{
        people:Array
    }
  }
</script>


<style scoped>
    .inline {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

</style> const { data }= await axios.get('https://vue-with-http-59a8c-default-rtdb.europe-west1.firebasedatabase.app/people.json');
      this.people = Object.keys(data).map((key)=>{return {id:key,...data[key]}});