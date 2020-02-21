export default class HeaderView {
    constructor(divToAttachTo,pubsub) {
        this.divToAttachTo2 = divToAttachTo
        this.pubsub2 = pubsub
    }

    // Render() {
    //     //check if I have access to the document object
    //     //The below could go to a utility(element creator) -> DRY
    //     const header = document.getElementById(this.divToAttachTo2);
    //     const headerDiv = document.createElement('div')
    //     headerDiv.className = 'headerContainer'
    //     const textBoxPanelDiv = document.createElement('div')
    //     textBoxPanelDiv.className = 'textBoxContainer'
    //     const label = document.createElement('label')
    //     label.appendChild(document.createTextNode('Search films: '));
    //     const textbox = document.createElement('input')
    //     textbox.class = 'seachfilmstextbox'
    //     textbox.type = 'text'
    //     const btn = document.createElement("BUTTON")
    //     btn.className = 'button'
    //     btn.innerText = 'Search films'
    //     btn.addEventListener("click", function(){
    //         //this.pubsub2.publish('search_films_button',btn,null)
    //         alert('button pressed')
    //       }); 
    //     textBoxPanelDiv.appendChild(label)
    //     textBoxPanelDiv.appendChild(textbox)
    //     textBoxPanelDiv.appendChild(btn)
    //     headerDiv.appendChild(textBoxPanelDiv)

    //     header.appendChild(headerDiv)
    // }
    Render() {
        //check if I have access to the document object
        //The below could go to a utility(element creator) -> DRY
        const headerContainer = document.getElementById(this.divToAttachTo2);
        headerContainer.className = 'headerContainer'
        //const headerDiv = document.createElement('div')
        
        // const textBoxPanelDiv = document.createElement('div')
        // textBoxPanelDiv.className = 'textBoxContainer'
        // const label = document.createElement('label')
        // label.appendChild(document.createTextNode('Search films: '));
        const inputSearchFilms = document.createElement('input')
        inputSearchFilms.class = 'searchfilmsinput'
        inputSearchFilms.type = 'text'
        const btn = document.createElement("BUTTON")
        btn.className = 'button'
        btn.innerText = 'Search films'
        btn.addEventListener("click", function(){
            //this.pubsub2.publish('search_films_button',btn,null)
            alert('button pressed')
          }); 
        //textBoxPanelDiv.appendChild(label)
        //textBoxPanelDiv.appendChild(textbox)
        //textBoxPanelDiv.appendChild(btn)
        headerContainer.appendChild(inputSearchFilms)
        headerContainer.appendChild(btn)

        //header.appendChild(headerDiv)
    }
}
