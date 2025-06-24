<template>  
  <div 
  class="card"
  >
  <h3>{{ id }}. {{ title }}</h3>
  <app-button 
  @action="toggle"
  >
  {{ localIsOpen ? ' Закрыть' : 'Открыть' }}
  </app-button>
  <app-button 
  class="btn"
  color="danger"
  v-if="wasRead"
  @action="$emit('un-mark',id)"
  >Сделать непрочитанной</app-button>
  <div v-if="localIsOpen">
    <hr>
    <p >{{ text }}</p>
    <app-button
     v-if="!wasRead"
     class="btn"
     color="primary"
     @action="readNews"
     >Прочесть новость</app-button>
     <app-new-list></app-new-list>
  </div>
  </div>
</template>


<script>
import AppButton from './AppButton.vue';
import AppNewList from './AppNewList.vue';
  export default {
    props:{
        title:String,
        id:Number,
        isOpen:Boolean,
        text:String,
        wasRead:Boolean,
        news:Array
    },
    emits: {
        'news-open':null,
        'read-news'(id) {
            if (id) {
                return true;
            }
            console.warn('Нет айди')
            return false;
        },
        'un-mark':null
    },
     data() {
    return {
      localIsOpen: this.isOpen
    }
  },
  methods: {
    toggle() {
      this.localIsOpen = !this.localIsOpen;
      if(this.localIsOpen) {
         this.$emit('news-open')
      }
    },
    readNews() {
        this.localIsOpen = false
        this.$emit('read-news',this.id)
    },
   },
   components : {
    'app-button':AppButton,
    'app-new-list':AppNewList,
   }
  }
</script>