const alertMixin = {
    data() {
        return {
        alertProps:{
          alertText:'Очень важное сообщение',
          alertTitle:'Внимание',
          alert:false
        }
        }
    },
     methods:{
      toggleAlert(){
        this.alertProps.alert = !this.alertProps.alert
      }
    }
};

export default alertMixin