#!/usr/bin/env node

import minimist from 'minimist'
import { rpsls } from '../lib/rpsls.js'

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
    let result = rpsls((argv._)[0])
    console.log(JSON.stringify(result))
    process.exit(0)
} catch (e) {
    printHelpMessage()
    printRulesMessage()
    process.exit(1)
}


// Helper functions

function printHelpMessage() {
    console.log(`Usage: node-rpsls [SHOT]
    Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!
    
      -h, --help        display this help message and exit
      -r, --rules       display the rules and exit
    
    Examples:
      node-rpsls        Return JSON with single player RPSLS result.
                        e.g. {"player":"rock"}
      node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.
                        e.g {"player":"rock","opponent":"Spock","result":"lose"}`)
}

function printRulesMessage() {
    console.log(`Rules for the Lizard-Spock Expansion of Rock Paper Scissors:

    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock SMOOSHES Lizard
    - Lizard POISONS Spock
    - Spock SMASHES Scissors
    - Scissors DECAPITATES Lizard
    - Lizard EATS Paper
    - Paper DISPROVES Spock
    - Spock VAPORIZES Rock
    - Rock CRUSHES Scissors`)
}