const h = Vue.h;

const app = Vue.createApp({
    data() {
       return {
             title:'Текст из шаблона'
       } 
    },
    // template: `
    // <div class="card center">
    // <h1>{{title}}</h1>
    // <button class="btn" @click="title='Новый тайтл'">Изменить текст тайтла</button>
    // </div>
    //  `,
    methods: {
        changeTitle() {
            return this.title = 'Измененный тайтл'
        }
    },
    render() {
        return h('div',{
            class:'card center'
        }, [
            h('h1',{},this.title),
            h('button',
                {
                  class:'btn',
                  onClick:this.changeTitle,
                },
                'Изменить')
            ])
    },
    beforeCreate() {
        console.log('Before Create')
    },
    created() {
        console.log('Created')
    },
    beforeMount() {
        console.log('beforeMount')
    },
    mounted() {
        console.log('mounted')
    },
    beforeUnmount() {
        console.log('beforeUnmount')
    },
    unmounted() {
        console.log('unMounted')
    },
})
setTimeout(()=>{
    app.unmount();
},1000)

app.mount('#app');