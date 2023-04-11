const { createApp } = Vue;

createApp({
    data() {
        return {
          randomEmail: [],
          basePath: 'https://flynn.boolean.careers/exercises/api/',
      }
    },
    methods: {
      getEmail(){
        this.randomEmail = [];
        for(let i = 0; i < 10; i++){
         axios.get(this.basePath + `random/mail`).then((res) => {
            //console.log(res);
            this.randomEmail.push(res.data.response);
            //console.log(this.randomEmail)
            
         } )



        }
        
      }

    },
   

}).mount('#app')