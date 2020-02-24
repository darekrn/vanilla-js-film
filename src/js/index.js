import HeaderView from './components/HeaderView'
import PublisherSubscriber from './PublisherSubscriber'
import FilmsGrid from './components/FilmsGrid';

const headerView = new HeaderView('header', PublisherSubscriber)
headerView.Render()
const filmsgrid = new FilmsGrid('filmsGrid',PublisherSubscriber)
filmsgrid.Render()

class Store {
  constructor() {
    this.state = {}
    this.actions = {}
    this.mutations = {}
  }
}
