export default class Store123 {
    constructor() {
      // this.state = {},
      // this.actions = {},
      // this.mutations = {},
         this.api = '9b94c21c'
    }
    //actions
    fetchFilmsAsync(filmTitle) {
      //let respone = fetch(`http://www.omdbapi.com/?s=${filmTitle}&apikey=${this.api}`)
      console.log(filmTitle)
    }
    processFilmsResponse(respone) {

    }
  }
