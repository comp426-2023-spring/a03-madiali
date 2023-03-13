#!/usr/bin/env node

import minimist from 'minimist'
import { rps } from '../lib/rpsls.js'

// Process CLI arguments
var argv = minimist(process.argv.slice(2))

// Help message
if (argv.h !== undefined || argv.help !== undefined) {
    printHelpMessage()
    process.exit(0)
}

// Rules message
if (argv.r !== undefined || argv.rules !== undefined) {
    printRulesMessage()
    process.exit(0)
}

// Play game
try {
    let result = rps((argv._)[0])
    console.log(JSON.stringify(result))
    process.exit(0)
} catch (e) {
    printHelpMessage()
    printRulesMessage()
    process.exit(1)
}


// Helper functions

function printHelpMessage() {
    console.log(`Usage: node-rps [SHOT]
    Play Rock Paper Scissors (RPS)
    
      -h, --help      display this help message and exit
      -r, --rules     display the rules and exit
    
    Examples:
      node-rps        Return JSON with single player RPS result.
                      e.g. {"player":"rock"}
      node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                      e.g {"player":"rock","opponent":"scissors","result":"win"}`)
}

function printRulesMessage() {
    console.log(`Rules for Rock Paper Scissors:

    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock CRUSHES Scissors`)
}
