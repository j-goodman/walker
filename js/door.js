let Door = ObjectType('Door', function () {
    this.from = null
    this.to = null
})

game.connect = (fromId, toId, name) => {
    let door = new Door ()
    door.name = name
    door.from = fromId
    door.to = toId
    game.get(fromId).contents.push(door)
    game.get(fromId).doors.push(door)
    game.get(toId).contents.push(door)
    game.get(toId).doors.push(door)
}
