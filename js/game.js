let game = {}

game.globalId = -1
game.objects = {}
game.idsByType = {}
game.newId = () => {
    return game.globalId += 1
}
game.getWithType = (type, id) => {
    return game.objects[`${type}_store`][id] || false
}
game.get = (id) => {
    let type = game.idsByType[id]
    return game.objects[`${type}_store`][id] || false
}

let ObjectType = function (name, initialize) {
    game.objects[`${name}_store`] = {}
    return function () {
        this.id = game.newId()
        this.type = name
        game.objects[`${name}_store`][this.id] = this
        game.idsByType[this.id] = name
        initialize.bind(this)()
    }
}
