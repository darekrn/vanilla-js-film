import PublisherSubscriber from './../PublisherSubscriber'
import HeaderView from './../components/HeaderView'
import FilmsGrid from './../components/FilmsGrid';


export default class MainController {
    constructor(headerViewId, filmsGridId) {
        this.HeaderView = new HeaderView(headerViewId, PublisherSubscriber),
        this.FilmsGrid = new FilmsGrid(filmsGridId, PublisherSubscriber)
        PublisherSubscriber.subscribe('search-films-button-clicked', this.SearchFilmsButtonClicked)
    }
    Render() {
        this.HeaderView.Render()
        this.FilmsGrid.Render()
    }
    SearchFilmsButtonClicked() {
        console.log('search-films-button-clicked clicked')
    }
}