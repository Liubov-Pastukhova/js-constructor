export class Site {
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }

    render(model) {
        this.$el.innerHTML = ''
        model.forEach(Block => {
            this.$el.insertAdjacentHTML('beforeend', Block.toHTML())
        })
    }
}