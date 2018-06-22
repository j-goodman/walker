let grammar = {}

grammar.list = (array) => {
    // Returns a list of strings as a sentence list.
    // ['a circle', 'a square'] => 'a circle and a square'
    let string = ''
    array.map((word, index) => {
        if (index !== array.length - 1 && array.length > 2) {
            string += `${word}, `
        } else if (index !== array.length - 1) {
            string += `${word} `
        } else if (index === array.length -1 && array.length > 1) {
            string += `and ${word}`
        } else {
            string += word
        }
    })
    return string
}

grammar.addArticle = word => {
    // returns a string with either 'a' or 'an' appended to the front
    // 'tiger' => 'a tiger'
    return `${['a', 'e', 'i', 'o', 'u'].includes(word[0]) ? 'an' : 'a'} ${word}`
}

let gr = grammar
gr.a = gr.addArticle
