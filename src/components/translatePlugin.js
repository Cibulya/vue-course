export default {
    install(app,options) {
        // console.log(app,'APP');
        // console.log(options,'Options')
        let current = 'ru';

        const changeLanguage = () => { 
          return  current = current === 'ru' ? 'en' : 'ru';
        }

        app.config.globalProperties.$alert = text => {
            window.alert(text)
        }

        app.config.globalProperties.$i18n = key => {
            return key.split('.').reduce((words,k)=>{
                return words[k] || '=== unknown ===='
            },options[current])
        }
        app.provide('changeI18n',{changeLanguage});
    }
}