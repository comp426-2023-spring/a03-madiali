#!/usr/bin/env node

import minimist from 'minimist'
import { rps } from '../lib/rpsls.js'

// Process CLI arguments
var argv = minimist(process.argv.slice(2))

// Check for out-of-range error
if ((argv._).length > 1) {
    console.error('out-of-range error')
    printHelpMessage()
    printRulesMessage()
    process.exit(-1)
}

// Help message
if (argv.h !== undefined || argv.help !== undefined) {
    printHelpMessage()
}

// Rules message
if (argv.r !== undefined || argv.rules !== undefined) {
    printRulesMessage()
}

// Play game
console.log(rps((argv._)[0]))


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
