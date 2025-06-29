<template>
    <div 
    class="alert"
    :class="type">
        <p class="alert-title">{{ alertTitle }}</p>
        <p>{{ alertText }}</p>
        <button  
        class="btn"
        :class="type"
        v-if="closable"
        @click="$emit('close')"
        >Закрыть</button>
    </div>

</template>       

<script>
export default {
    emits:['close'],
    props:{
        alertText:String,
        alertTitle:String,
        closable:{
            type:Boolean,
            required: false,
            default:false,
        },
        type:{
            type:String,
            default:'primary',
            required: false,
            validator(val) {
                return ['primary','danger','warning'].includes(val)
            }
        }
    }

}
</script>

<style>
</style>