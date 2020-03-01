import PublisherSubscriber from '../PublisherSubscriber'
export default class FilmsGrid {
    constructor(divToAttachTo,pubsub) {
        this.divToAttachTo2 = divToAttachTo
        this.pubsub2 = pubsub
        PublisherSubscriber.subscribe('films-list-updated', this.Render)
    }

    Render = (data) => {
        if(data !== undefined && data.Type === 'List') { //ToDo: data !== undefined -> strategy pattern
        const filmsGrid = document.getElementById(this.divToAttachTo2);
        filmsGrid.className = 'filmsGrid'
        data.Films.forEach(film => {
            let child = document.createElement('div')
            child.className = "filmsGridItem"
            child.textContent = 'one'
            const poster = document.createElement("img")
            poster.setAttribute("src", film.Poster)
            poster.setAttribute("height", "80%")
            poster.setAttribute("width", "80%")
            child.appendChild(poster)
            filmsGrid.appendChild(child)
        });
        // const child1 = document.createElement('div')
        // child1.className = "filmsGridItem"
        // child1.textContent = 'one'
        // const child2 = document.createElement('div')
        // child2.className = "filmsGridItem"
        // child2.textContent = 'two'
        // const child3 = document.createElement('div')
        // child3.className = "filmsGridItem"
        // child3.textContent = 'three'
        // const child4 = document.createElement('div')
        // child4.className = "filmsGridItem"
        // child4.textContent = 'four'
        // const child5 = document.createElement('div')
        // child5.className = "filmsGridItem"
        // child5.textContent = 'five'
        // const child6 = document.createElement('div')
        // child6.className = "filmsGridItem"
        // child6.textContent = 'six'
        // const child7 = document.createElement('div')
        // child7.className = "filmsGridItem"
        // child7.textContent = 'seven'
        // const child8 = document.createElement('div')
        // child8.className = "filmsGridItem"
        // child8.textContent = 'eight'
        // const child9 = document.createElement('div')
        // child9.className = "filmsGridItem"
        // child9.textContent = 'nine'

        // filmsGrid.appendChild(child1)
        // filmsGrid.appendChild(child2)
        // filmsGrid.appendChild(child3)
        // filmsGrid.appendChild(child4)
        // filmsGrid.appendChild(child5)
        // filmsGrid.appendChild(child6)
        // filmsGrid.appendChild(child7)
        // filmsGrid.appendChild(child8)
        }
    }
}
