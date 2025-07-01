<template>
    <div class="card">
      <p>Название: <strong>{{ name }}</strong></p>
      <p>Версия: <strong>{{ version }}.  {{ doubleVersion }}</strong></p>
      <button class="btn warning" @click="change">change to 3 version</button>
    </div>
</template>


<script>
import { computed , inject} from 'vue';

export default {
    props:{
        name:String,
        version:Number,
    },
   emits:['change-version'],
   setup(props,context) {
    const version = inject('version')
    const doubleVersion = computed(() => version.value * 2);
    const change = () => context.emit('change-version', 3)
    return {
        name:inject('name'),
        version,
        changeToThree:change,
        doubleVersion,
        change
    }
   }
}
</script>