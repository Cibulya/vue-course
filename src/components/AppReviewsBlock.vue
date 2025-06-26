<template>
      <div class="container">
    <p>
      <app-button  
      @action="getComments"
      buttonType="button"
      buttonText="Загрузить Комментарии"
      ></app-button>
    </p>
    <app-comments-list :comments="comments"></app-comments-list>
    <div 
     class="loader"
     v-if="isLoading"
     ></div>
  </div>
</template>

<script>
import axios from 'axios';
import AppButton from './AppButton.vue';
import AppCommentsList from './AppCommentsList.vue';

    export default {
        data() {
            return {
                comments:[],
                isLoading:false
            }
        },
        methods:{
            async getComments() {
              this.isLoading = true;
              const getComments = await axios.get('https://jsonplaceholder.typicode.com/comments?_limit=42')
              this.comments = getComments.data;
              this.isLoading = false
            }
        },
        components:{
            AppButton,
            AppCommentsList
        }
    }
</script>