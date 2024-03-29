/*
    Nguyen, Nguyen

    December 15, 2019
*/
class EventHandler {
    constructor() {
        this.handlers = [];
    }
    addHandler(handler) {
        if (this.handlers.indexOf(handler) < 0) {
            this.handlers = [handler];
        }
        else {
            this.handlers.push(handler);
        }
    }
    removeHandler(handler) {
        let index = this.handlers.indexOf(handler);
        if (index >= 0) {
            this.handlers.splice(index, 1);
        }
    }
    removeAllHandlers() {
        this.handlers.length = 0;
    }
    raiseEvent(args) {
        if (!args || !args.length)
            args = [];
        this.handlers.forEach(e => {
            e.apply(this, args);
        });
    }
}
