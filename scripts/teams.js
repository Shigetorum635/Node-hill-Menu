/*
 BrickCore Game Manager 

 This file handles everything related to BrickCore

 v0.2.0
*/

/* Environment Variables */

const sLog = require('./utils/sLog')

/* We can't forget teams, so let's create them */

Game.assignRandomTeam = false
const teams = {
    Employee: new Team('Employee', '#8C92AC'),
    Security: new Team('Security', '#8C92AC'),
    Raider: new Team('Raider', '#8C92AC'),
    'Main Menu': new Team('Main Menu', '#bf00000'),
}

/**
 * Initial spawn, we set the teams and config.
 */
Game.on('initialSpawn', (p) => {
    sLog.startWorker('PROPERTY SETTING', 'PayerWorker')
    p.setTeam(teams['Main Menu'])
    p.menuEnabled = false
    p.menuPage = 1
    sLog.finishWorker(`PROPERTY SETTING`, 'PayerWorker')
})

module.exports = {
    teams,
}
