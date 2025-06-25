<template>
     <div class="form-control" 
             >
        <label :for="id">{{ label }}</label>
        <input  
        type="text" 
        :id="id" 
        :placeholder="placeHolder"
        :value="value"
        @input="change"
        >
        <small v-if="error">{{ error }}</small>
      </div>
</template>

<script>
 export default {
    emits:['update:value'],
    props : {
        value:String,
        placeHolder:String,
        error:String,
        label:String,
    },
    data() {
        return {
            id:'input_' + Math.random(),
        }
    },
    methods : {
        change(event) {
          this.$emit('update:value', event.target.value)
        }
    }
 }
</script>


<style scoped>

</style>