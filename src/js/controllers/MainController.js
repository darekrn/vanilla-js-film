import PublisherSubscriber from '../PublisherSubscriber'
import HeaderView from '../components/HeaderView'
import FilmsGrid from '../components/FilmsGrid';
import Store from './../store/Store'


export default class MainController {
    constructor(headerViewId, filmsGridId) {
        this.HeaderView = new HeaderView(headerViewId, PublisherSubscriber)
        this.FilmsGrid = new FilmsGrid(filmsGridId, PublisherSubscriber)
        this.Store = new Store()
        PublisherSubscriber.subscribe('search-films-button-clicked', this.SearchFilmsButtonClicked)
    }
    Render() {
        this.HeaderView.Render()
        this.FilmsGrid.Render()
    }
    SearchFilmsButtonClicked = (filmTitle) => {
        //console.log('search-films-button-clicked clicked: ' + filmTitle)
        console.log(this)
        //this.FilmsGrid.Render()
        //this.model123.fetchFilmsAsync(filmTitle)
    }
}