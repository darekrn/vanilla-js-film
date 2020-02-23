export default class Film {
    constructor() {
        this.title = '',
        this.description = '',
        this.imageUrls = []
    }
    addTitle(title) {
        this.title = title
    }
    addDescription(description) {
        this.description = description
    }
    addImageUrl(imageUrl) {
        this.imageUrls.push(imageUrl)
    }
}