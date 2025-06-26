<template>
  <div class="container column">
    
    <app-form 
    :options="options"
    @add-block="addCvBlock"
    ></app-form>

    <div class="card card-w70">
      <!-- <app-title-block
      v-for="item in cvData.filter(el=>el.type === 'title')"
      :key="new Date()" 
      :titleText="item.content"></app-title-block>
      
      <app-avatar
        v-for="item in cvData.filter(el => el.type === 'avatar')"
        :key="new Date()" 
        :avatarSrc="item.content"
      ></app-avatar>


      <app-sub-heading 
        v-for="item in cvData.filter(el => el.type === 'subtitle')"
        :key="new Date()" 
        :textContent="item.content"
      ></app-sub-heading>

      <app-text-desc
        v-for="item in cvData.filter(el => el.type === 'text')"
        :key="new Date()" 
        :textContent="item.content"
      ></app-text-desc> -->

      <component
       v-for="block in renderBlock"
       :key="new Date()"
       :is="block.component"
       v-bind="block.compProps"
      />
      <h3 v-if="!cvData.length">Добавьте первый блок, чтобы увидеть результат</h3>
    </div>
  </div>
    <app-reviews-block></app-reviews-block>
</template>

<script>
import AppForm from './components/AppForm.vue';
import AppTitleBlock from './components/AppTitleBlock.vue';
import AppSubHeading from './components/AppSubHeading.vue';
import AppAvatar from './components/AppAvatar.vue';
import AppTextDesc from './components/AppTextDesc.vue';
import AppReviewsBlock from './components/AppReviewsBlock.vue';

export default {
  components:{
    AppForm,
    AppTitleBlock,
    AppSubHeading,
    AppAvatar,
    AppTextDesc,
    AppReviewsBlock,
  },
  data() {
    return {
      options:[
              {
                type:'title',
                optionText:'Заголовок',
              },
              {
                type:'subtitle',
                optionText:'Подзаголовок',
              },
              {
                type:'avatar',
                optionText:'Аватар',
              },
              {
                type:'text',
                optionText:'Текст',
              },
            ],
      cvData:[],
      reviews:[],      
    }
  },
  methods:{
    addCvBlock(cvData) {
        this.cvData.push(cvData);
    },
  },
  computed: {
      renderBlock() {
       return this.cvData.map(item=>{
        let component = null;
        let compProps = {}
        switch(item.type) {
          case 'avatar':
            component = 'AppAvatar';
            compProps = { avatarSrc:item.content };
            break;
           case 'title' :
            component = 'AppTitleBlock';
            compProps = { titleText:item.content };
            break;
          case 'subtitle' :
            component = 'AppSubHeading';
            compProps = { textContent:item.content };
            break;
          case 'text' :
            component = 'AppTextDesc';
            compProps = { textContent:item.content };
          break;    
        }
        return {component,compProps}
      })
    }
  }
}
</script>

<style>
  .avatar {
    display: flex;
    justify-content: center;
  }

  .avatar img {
    width: 150px;
    height: auto;
    border-radius: 50%;
  }
</style>