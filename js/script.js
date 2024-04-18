const { createApp } = Vue;

createApp({
  data(){
    return{
      discs:[],
      newDisc:{
        title:'',
        author:'',
        year:'',
        poster:'',
        genre:'',
        addedBy:''
      },
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

    },
    addnewDisc(){
      const data = new FormData();
      data.append('newDiscTitle', this.newDisc.title);
      data.append('newDiscAuthor', this.newDisc.author);
      data.append('newDiscYear', this.newDisc.year);
      data.append('newDiscPoster', this.newDisc.poster);
      data.append('newDiscGenre', this.newDisc.genre);
      data.append('newDiscAddedBy', this.newDisc.addedBy);
      axios.post(this.apiUrl, data)
      .then(result =>{
        this.discs = result.data
        
      })
    },
    deleteDisc(index){
      if(confirm('Sei sicuro di voler eliminare questo disco dai preferiti?')){
        const data = new FormData();
        data.append('discToDelete', index);
        axios.post(this.apiUrl, data)
        .then(result =>{
          this.discs = result.data
          
        })

      }
      
    }
  },
  mounted(){
    this.getApi();
    
  }

}).mount('#app')