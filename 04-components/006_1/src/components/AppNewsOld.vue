<template>
  <div class="container pt-1">
    <h2 class="card">{{title}} на {{ now }}
      <span>Открыто {{ openRate }} || Прочитано : <strong>{{ readRate }}</strong></span>
    </h2>
    
  </div>
   <app-news 
    v-for="item in news"
    :title="item.title"
    :key="item.id"
    :id="item.id"
    :is-open="item.isOpen"
    :text="item.text"
    @news-open="openNews"
    @read-news="readIcrease"
    :was-read="item.wasRead"
    @un-mark="unRead"
   ></app-news>
</template>

<script>
import AppNews from './components/AppNews.vue';
 export default {
    data () {
     return { 
      title:'Актуальные новости',
      now:new Date().toLocaleDateString(),
      openRate:0,
      readRate:0,
      news: [{
        title:'Пожилое Лабубу',
        id:1,
        isOpen:false,
        wasRead:false,
        text:'Отличная новость Вью js бомбоклат рич милионир'
      },
      {
        title:'Жонг Сина',
        id:2,
        isOpen:false,
        wasRead:false,
        text:'Отличная новость Вью js бомбоклат рич милионир'
      },
       ],
     }
    },
    components : {
      'app-news':AppNews
    },
    methods : {
      openNews(data) {
         this.openRate++;
      },
      readIcrease(id) {
        const idx = this.news.findIndex(news=> news.id === id);
        this.news[idx].wasRead = true;
         this.readRate++;
      },
      unRead(id) {
        const idx = this.news.findIndex(news => news.id === id);
        this.news[idx].wasRead = false;
        this.readRate--
      }
    },
    provide() {
      return {
          title:'Список всех новостей',
          news: this.news
      }
    }
  }
</script>

<style scoped>
 h2 {
  color: darkred;
 }
</style>