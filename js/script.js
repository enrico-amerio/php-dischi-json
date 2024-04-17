const { createApp } = Vue;

createApp({
  data(){
    return{
      discs:[],
      discOnFocus:null,
      spotifySrc: '',
      ytSrc:'',
      apiUrl:'php/server.php',
      isFocus: false,
      isSpotifyActive: false,
      isYoutubeActive: false
    }
  },
  methods:{
    getApi(){
      axios.get(this.apiUrl)
      .then(result =>{
        this.discs = result.data
      })
    },
    changeSpotifySrc(newSrc){
      this.isYoutubeActive = false;
      this.isSpotifyActive= true;
      this.spotifySrc = newSrc;
    },
    changeYoutubeSrc(newSrc){
      this.isYoutubeActive = true;
      this.isSpotifyActive= false;
      this.ytSrc = newSrc;
    },
    closePlayer(){
      this.isYoutubeActive = false;
      this.isSpotifyActive= false;
    },
    focusAlbum(album){
      this.isFocus = true,
      this.discOnFocus = album;
    },
    closePopup(){
      this.isFocus = false,
      this.discOnFocus = null

    }
  },
  mounted(){
    this.getApi();
    
  }

}).mount('#app')