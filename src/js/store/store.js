export default class Store123 {
    constructor() {
      this.state = {
        films: []
      },
      // this.actions = {},
      // this.mutations = {},
         this.api = '9b94c21c'
    }
    //actions
    fetchFilmsAsync(filmTitle) {
      let respone = fetch(`http://www.omdbapi.com/?s=${filmTitle}&apikey=${this.api}`).then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(this)
        this.processFilmsResponse(data)
      })
      
    }
    processFilmsResponse(data) {
      console.log(data)
    }
  }
