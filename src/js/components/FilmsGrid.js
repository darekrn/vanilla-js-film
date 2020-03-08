import PublisherSubscriber from '../PublisherSubscriber'
export default class FilmsGrid {
    constructor(divToAttachTo,pubsub) {
        this.divToAttachTo2 = divToAttachTo
        this.pubsub2 = pubsub
        PublisherSubscriber.subscribe('films-list-updated', this.Render)
    }

    // old
    // Render = (data) => {
    //     if(data !== undefined && data.Type === 'List') { //ToDo: data !== undefined -> strategy pattern
    //     const filmsGrid = document.getElementById(this.divToAttachTo2);
    //     filmsGrid.className = 'filmsGrid'
    //     data.Films.forEach(film => {
    //         let child = document.createElement('div')
    //         child.className = "filmsGridItem"
    //         child.textContent = 'one'
    //         const poster = document.createElement("img")
    //         poster.setAttribute("src", film.Poster)
    //         poster.setAttribute("height", "80%")
    //         poster.setAttribute("width", "80%")
    //         child.appendChild(poster)
    //         filmsGrid.appendChild(child)
    //     });
    //     }
    // }

    Render = (data) => {
        if(data !== undefined && data.Type === 'List') { //ToDo: data !== undefined -> strategy pattern
        const filmsGrid = document.getElementById(this.divToAttachTo2);
            const cards = document.createElement('ul')
            cards.className = 'cards'
            filmsGrid.appendChild(cards)
            //filmsGrid.className = 'filmsGrid'
            data.Films.forEach(film => {
                cards.appendChild(this.CreateCard(film.Poster, film.Title))
            });
        }
    }

    CreateCard(image, description) {
        const cardsItem = document.createElement('li')
        cardsItem.className = 'cards__item'
            const card = document.createElement('div')
            card.className = 'card'

                const cardImage = document.createElement('div')
                cardImage.className = 'card__image'
                cardImage.style.backgroundImage = `url('${image}')`
                //cardImage.style.height = '80%'
                //cardImage.style.width = '80%'

                const cardContent = document.createElement('div')
                cardContent.className = 'card__content'

                    const cardTitle = document.createElement('div')
                    cardTitle.className = 'card__title'
                    const cardText = document.createElement('p')
                    cardText.className = 'card__text'
                    cardText.innerText = description
                    const cardBtn = document.createElement('BUTTON')
                    cardBtn.className = 'btn btn--block card__btn'
                    cardBtn.textContent = "Details"

                cardContent.appendChild(cardTitle)
                cardContent.appendChild(cardText)
                cardContent.appendChild(cardBtn)

            card.appendChild(cardImage)
            card.appendChild(cardContent)
        cardsItem.appendChild(card)
        return cardsItem
    }
}
