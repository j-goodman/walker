game.begin()

let atrium = new Room ()
atrium.name = 'atrium'
let cell = new Room ()
cell.name = 'cell'

let sanjuro = player.character

game.connect(atrium.id, cell.id, 'cell door')

cell = new Room ()
cell.name = 'cell'
game.connect(atrium.id, cell.id, 'broken cell door')

let storeroom = new Room ()
storeroom.name = 'storeroom'
game.connect(atrium.id, storeroom.id, 'plywood door')
let sword = new Item ()
sword.name = 'sword'
sword.location = atrium.id
atrium.contents.push(sword.id)

let fireescape = new Room ()
fireescape.name = 'fire escape'
fireescape.description = `It's a metal fire escape three stories up on the side of an old brick building`
game.connect(storeroom.id, fireescape.id, 'emergency exit')

let secondFireescape = new Room ()
secondFireescape.name = 'fire escape'
secondFireescape.description = `It's a metal fire escape two stories up on the side of an old brick building. The staircase going down is missing`
game.connect(fireescape.id, secondFireescape.id, 'staircase')

atrium = new Room ()
atrium.name = 'guards\' lounge'
atrium.description = `A break room for guards, with a card table and a few couches`
game.connect(secondFireescape.id, atrium.id, 'emergency exit')

sanjuro.room = cell.id
cell.contents.push(sanjuro.id)

player.look()
