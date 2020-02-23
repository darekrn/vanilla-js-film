export default class HeaderView {
    constructor(divToAttachTo,pubsub) {
        this.divToAttachTo2 = divToAttachTo
        this.pubsub2 = pubsub
    }

    Render() {
        const headerContainer = document.getElementById(this.divToAttachTo2);
        headerContainer.className = 'headerContainer'

        const inputSearchFilms = document.createElement('input')
        inputSearchFilms.className = 'searchfilmsinput'
        inputSearchFilms.type = 'text'
        const btn = document.createElement("BUTTON")
        btn.className = 'button'
        btn.innerText = 'Search films'
        btn.addEventListener("click", function(){
            //this.pubsub2.publish('search_films_button',btn,null)
            alert('button pressed')
          }); 

        headerContainer.appendChild(inputSearchFilms)
        headerContainer.appendChild(btn)
    }
}
