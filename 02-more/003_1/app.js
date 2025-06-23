Vue.createApp({
    data: () => ({
        title:'Заголовак Vue классный заголовок',
        myHtml : '<h1>Это мой HTML</h1>',
        person: {
            name: 'Иван',
            age: 30,
            job: 'Программист'
        },
        items: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    }),
    methods:{
        addItem() {    
            this.items.unshift(this.$refs.myInput.value)
        },
        removeElement(i) {
            return this.items.splice(i,1)
        }
    },
    computed: {
        evenItems() {
            return this.items.filter(item => item % 2 === 0);
        }
    }
}).mount('#app');