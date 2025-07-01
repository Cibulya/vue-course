<template>
    <div class="alert"
         :class="type"
         @click="this.$emit('close')">
        <p class="alert-title">{{ title }}</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
    </div>
</template>


<script>
    export default {
        emits:['close'],
        props:['title','type']
    }
</script>