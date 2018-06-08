let barn = new Room ()
barn.name = 'barn'
let field = new Room ()
field.name = 'field'
let sword = new Item ()
sword.name = 'sword'
sword.location = field.id

let sanjuro = player.character

game.connect(barn.id, field.id, 'barn door')
sanjuro.room = field.id
