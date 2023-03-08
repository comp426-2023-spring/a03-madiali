import { rps } from 'node-rpsls'
import { rpsls } from 'node-rpsls'

// Process CLI arguments
var argv = minimist(process.argv.slice(2))

// Help message
if (argv.h !== undefined || argv.help !== undefined) {
    console.log(`Usage: node-rps [SHOT]
    Play Rock Paper Scissors (RPS)
    
      -h, --help      display this help message and exit
      -r, --rules     display the rules and exit
    
    Examples:
      node-rps        Return JSON with single player RPS result.
                      e.g. {"player":"rock"}
      node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                      e.g {"player":"rock","opponent":"scissors","result":"win"}`)
    process.exit(0)
}

// Rules message
if (argv.r !== undefined || argv.rules !== undefined) {
    console.log(`Rules for Rock Paper Scissors:

    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock CRUSHES Scissors`)
    process.exit(0)
}