export default class MainController {
    constructor(headerViewId, filmsGridId) {
        this.HeaderView = headerViewId,
        this.FilmsGrid = filmsGridId
    }
    Render() {
        this.HeaderView.Render()
        this.FilmsGrid.Render()
    }
    SearchFilmsButtonClicked() {
        
    }
}