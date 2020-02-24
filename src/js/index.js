import HeaderView from './components/HeaderView'
import PublisherSubscriber from './PublisherSubscriber'
import FilmsGrid from './components/FilmsGrid';
import MainController from './controllers/MainController'

// const headerView = new HeaderView('header', PublisherSubscriber)
// headerView.Render()
// const filmsgrid = new FilmsGrid('filmsGrid',PublisherSubscriber)
// filmsgrid.Render()

const mainController = new MainController('header', 'filmsGrid')
mainController.Render()

class Store {
  constructor() {
    this.state = {}
    this.actions = {}
    this.mutations = {}
  }
}
