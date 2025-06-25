<template>
    <button
     class="btn" 
     :class="color"
     @click="$emit('action')"
     >
     <slot/>
     </button>
</template>


<script>
    export default {
        methods: {
            btnLog() {
                console.log('LOG FROM BUTTON')
            }
        },
        emits:{
            'action':null,
        },
        props:{
            color:{
                type:String,
                default:'',
                validator(value) {
                  return  ['','primary','danger'].includes(value)
                }
            }
        }
    }
</script>