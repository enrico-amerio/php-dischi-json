const { createApp } = Vue;

createApp({
  data(){
    return{
      discs:[],
      iframeSrc: 'https://open.spotify.com/embed/album/5jaBd7t5jtPsn8Dwj1HF1q?utm_source=generator',
      apiUrl:'php/server.php'
    }
  },
  methods:{
    getApi(){
      axios.get(this.apiUrl)
      .then(result =>{
        this.discs = result.data
      })

    },
    changePlayerSrc(spotifySrc){
      this.iframeSrc = spotifySrc;
    }
  },
  mounted(){
    this.getApi();
    
  }

}).mount('#app')