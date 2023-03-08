#!/usr/bin/env node

import minimist from 'minimist'
// https://www.npmjs.com/package/minimist

const validShots = ['rock', 'paper', 'scissors']

export function rps(playerShot) {
    if (playerShot !== undefined) {
        playerShot = playerShot.toLowerCase()
    }
    

    if (playerShot === undefined) {
        return JSON.stringify({'player': opponentShot})
    } else if (!validShots.includes(playerShot)) {
        // TODO
    } else {
        // TODO
        result = undefined
        return JSON.stringify({'player': playerShot, 'opponent': opponentShot, 'result': result})
    }
}