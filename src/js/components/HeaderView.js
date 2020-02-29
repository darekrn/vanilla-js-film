import PublisherSubscriber from '../PublisherSubscriber'

export default class HeaderView {
    constructor(divToAttachTo,pubsub) {
        this.divToAttachTo2 = divToAttachTo
        this.pubsub2 = pubsub
    }

    Render(data) {
        const headerContainer = document.getElementById(this.divToAttachTo2);
        headerContainer.className = 'headerContainer'

        const inputSearchFilms = document.createElement('input')
        inputSearchFilms.className = 'searchfilmsinput'
        inputSearchFilms.type = 'text'
        const btn = document.createElement("BUTTON")
        btn.className = 'button'
        btn.innerText = 'Search films'
        btn.addEventListener("click", function(){
            PublisherSubscriber.publish('search-films-button-clicked','Terminator')
          }); 

        headerContainer.appendChild(inputSearchFilms)
        headerContainer.appendChild(btn)
    }
}
