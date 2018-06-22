let Person = ObjectType('Person', function () {
    this.inventory = []
    this.name = ''
    this.room = null
})

Person.prototype.go = function (doorId) {
    let door = game.get(doorId)
    let fromRoom = game.get(door.from)
    let toRoom = game.get(door.to)
    if (this.room === door.to) {
        this.room = door.from
        toRoom.contents = toRoom.contents.filter(id => {
            return id !== this.id
        })
        fromRoom.contents.push(this.id)
    } else if (this.room === door.from) {
        this.room = door.to
        fromRoom.contents = fromRoom.contents.filter(id => {
            return id !== this.id
        })
        toRoom.contents.push(this.id)
    } else {
        console.error('That movable object is not in the same room as the door it\'s trying to use.')
    }
}

Person.prototype.availableDoors = function () {
    return game.get(this.room).doors.map(door => {
        return door.id
    })
}

Person.prototype.get = function (itemId) {
    let room = game.get(this.room)
    room.contents = room.contents.filter(id => {
        return id !== itemId
    })
    this.inventory.push(itemId)
    game.get(itemId).location = this.id
}

Person.prototype.drop = function (itemId) {
    let room = game.get(this.room)
    this.inventory = this.inventory.filter(id => {
        return id !== itemId
    })
    room.contents.push(itemId)
    game.get(itemId).location = room.id
}
