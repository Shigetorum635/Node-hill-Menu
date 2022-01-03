/**
* BrickCore Game Manager 
*/

/** 
 * Import required modules.
*/

import { startWorker, finishWorker } from './utils/sLog'

/**
* We can't forget teams, so let's create them.
*/

Game.assignRandomTeam = false
const teams = {
    Employee: new teams('Employee', '#8C92AC'),
    Security: new teams('Security', '#8C92AC'),
    Raider: new teams('Raider', '#8C92AC'),
    'Main Menu': new teams('Main Menu', '#bf00000'),
}

/**
 * Initial spawn, we set the teams and config.
 */
Game.on('initialSpawn', (p) => {
    startWorker('PROPERTY SETTING', 'PayerWorker')
    p.setTeam(teams['Main Menu'])
    p.menuEnabled = false
    p.menuPage = 1
    finishWorker(`PROPERTY SETTING`, 'PayerWorker')
})

export default {
    teams,
}
