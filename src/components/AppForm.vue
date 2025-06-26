<template>
    <form 
    class="card card-w30"
    @submit.prevent="emitData"
    >
      <div class="form-control">
        <label for="type">Тип блока</label>
        <select 
        id="type"
        v-model="selectValue"
        @input="setSelectValue"
        >
          <option
          v-for="option in options"
          :value="option.type"
          :key="new Date()"
          >
           {{ option.optionText }} 
        </option>
        </select>
      </div>
      <div class="form-control">
        <label for="value">Значение</label>
        <textarea 
        id="value" 
        rows="3"
        v-model.trim="text"
        ></textarea>
      </div>
      <app-button 
      buttonType="submit"
      buttonText="Добавить"
      :disabled="text.length < 3"
      ></app-button>
    </form>
</template>

<script>
  import AppButton from './AppButton.vue';
    export default {
        emits:['add-block'],
        props:{
            options:Array,
        },
        data() {
            return {
              selectValue:this.options[0].type,
              text:''
            }
        },
        components:{
            AppButton
        },
        methods: {
            setSelectValue(e) {
                this.selectValue = e.target.value;
                console.log(e.target.value)
            },


            resetFields() {
                this.selectValue = this.options[0].type;
                this.text = '';
            },
            emitData() {
                const blockData = {
                    type:this.selectValue,
                    content:this.text
                };
                this.$emit('add-block',blockData);
                this.resetFields(); 
            }
        }
    }
</script>