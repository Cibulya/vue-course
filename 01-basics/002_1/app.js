const App = {
    data() {
        return {
            counter:0,
            title:'Список заметок',
            placeHolderString:'Введите название заметки',
            inputValue:'',
            notes:['Заметка 1', 'Заметка 2', 'Заметка 3'],
        }
    },
    methods: {
        addNote(){
            if(this.inputValue !== ""){
                this.notes.push(this.inputValue);
                this.inputValue = '';
            }
        },
        toUpperCase(string){
            return string.toUpperCase();
        },
        removeNote(index){
            this.notes.splice(index, 1);
        },

    },
     computed: {
        doubleCountComputed () {
          return  this.notes.length * 2;
        }
     },
     watch: {
        inputValue(value){
            console.log('inputValue changed:', value);
        }
     },
};
const app = Vue.createApp(App);
app.mount('#app');