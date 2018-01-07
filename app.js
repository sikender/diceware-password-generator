const wordCount = parseInt(process.argv[2])

if (process.argv.length <= 2 || typeof wordCount !== 'number' || isNaN(wordCount)) {
  console.log(`Usage: node ${__filename} NUMBER_OF_WORDS_TO_GENERATE`)
  process.exit(-1)
} else {
  const list = require('./diceware.json')
  let roll = []

  for (let i = 0; i < wordCount; i++) {
    let word = []
    for (let j = 0; j < 5; j++) {
      word.push(Math.floor(Math.random() * 6) + 1)
    }
    const lookup = word.join('')
    roll.push(list[lookup])
  }

  const password = roll.join(' ')
  console.log(password)
}
