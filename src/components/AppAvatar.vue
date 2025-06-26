<template>
      <div class="avatar">
        <img :src="avatarSrc">
      </div>
</template>

<script>
    export default {
        props:{
            avatarSrc:String,
        }
    }

</script>