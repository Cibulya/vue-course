<template>
    <div class="modal-backdrop" @click="$emit('close')"></div>
    <div class="modal">
        <h3>Заголовок Модалки</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi laudantium. Sapiente quasi totam repellendus doloremque amet esse fugiat?</p>
    </div>
</template>

<script>
export default {
    emits:['close']
}
</script>
