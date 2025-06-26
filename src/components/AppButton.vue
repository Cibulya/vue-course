<template>
  <button
   :type="buttonType" 
   class="btn primary"
   @click="this.$emit('action')"
   >{{ buttonText }}</button>
</template>

<script>
    export default {
        emits:['action'],
        props:{
            buttonType:String,
            buttonText:String
        },
        data() {
            return {

            }
        }
    }
</script>