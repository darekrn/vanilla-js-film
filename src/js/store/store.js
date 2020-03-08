import PublisherSubscriber from '../PublisherSubscriber'

export default class Store123 {
    constructor() {
      this.state = {
        films: []
      },
      this.api = '9b94c21c'
    }

    //ToDo: Make it async
    fetchFilmsAsync(filmTitle) {
      let respone = fetch(`http://www.omdbapi.com/?s=${filmTitle}&apikey=${this.api}`).then((response) => {
        return response.json();
      })
      .then((data) => {
        return data
      })
      .then((data) => this.processFilmsResponse(data))
      .then((data) => this.changeFilmsList(data))
      
    }
    processFilmsResponse(data) {
      const result = [] 
      data.Search.map(film => result.push({ Poster: film.Poster, Title: film.Title, Type: film.Type, Year: film.Year, imdbID: film.imdbID }))
      return result
    }
    changeFilmsList(newFilmsList) {
      console.log('chained')
      this.films = newFilmsList
      const dataToBeSent = { Type: 'List', Films: this.films }
      console.log(dataToBeSent)
      PublisherSubscriber.publish('films-list-updated', dataToBeSent)
    }
  }
