<template>
    <hr>
    <ul>
        <h4>{{ title }}</h4>
        <li v-for="item in news">
            {{ item.title }}</li>
        </ul>
</template>


<script>
    export default {
        inject:['title','news']
    }
</script>