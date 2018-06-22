let player = {}
player.character = new Person ()
player.character.name = 'Sanjuro'

player.look = () => {
    let room = game.get(player.character.room)
    console.log(`${room.description || `It\'s ${gr.a(room.name || 'unknown')}`}. You can see ${gr.list(room.contents.filter(id => {
        return id !== player.character.id
    }).map(id => {
        return gr.a(game.get(id).name || 'unknown')
    }))}.`)
}

player.goto = doorName => {
    let doorId = game.get(player.character.room).contents.filter(id => {
        return game.get(id).name === doorName
    })[0]
    let door = game.get(doorId)
    player.character.go(doorId)
    console.log(`The ${door.name} opens into ${gr.a(game.get(player.character.room).name)}.`)
    player.look()
    game.advance()
}

player.get = itemName => {
    let itemId = game.get(player.character.room).contents.filter(id => {
        return game.get(id).name === itemName
    })[0]
    let item = game.get(itemId)
    player.character.get(itemId)
    console.log(`You acquire the ${item.name}.`)
    player.look()
}

let p = player
