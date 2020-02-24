class PublisherSubscriber {
    constructor(){
        if(!PublisherSubscriber.instance) {
            this.events = {};
            PublisherSubscriber.instance = this
        }
        return PublisherSubscriber.instance;
    }

    subscribe(eventName, callback) {
        //If it is a new subscription create an empty array for the given event's type
        if(!this.events.hasOwnProperty(eventName)) {
            this.events[eventName] = [];
        }

        this.events[eventName].push(callback);
    }

    unsubscribe(eventName, callback) {
        let index = 0, length = 0;
        
        if(this.events.hasOwnProperty(eventName)) {
            for(let i = 0; i < this.events[eventName].length; i++) {
                if(this.events[eventName][i] === callback) {
                    this.events[eventName].splice(i,1);
                    break;
                }
            }
        }
    }

    publish(eventName) {
        const data = Array.from(arguments).splice.call(arguments, 1)
        if(this.events.hasOwnProperty(eventName)) {
            for(let i = 0; i < this.events[eventName].length; i++) {
                this.events[eventName][i].apply(this, data)
            }
        }
    }
}

const PublisherSubscriberInstance = new PublisherSubscriber();
Object.freeze(PublisherSubscriberInstance);

export default PublisherSubscriberInstance;