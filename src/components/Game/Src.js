export default class BlackJackGame {
    constructor(players) {
        this.players = [...players]
        this.players_all = [...players]
        this.player_points = this.set_start_points()
        this.player_bids = this.set_start_bids()
        this.player_turn = players[0]
    }

    set_start_points() {
        let player_points = {}
        this.players.forEach((player) => {
            player_points[player] = 0
        })
        return player_points
    }

    set_start_bids() {
        let player_bids = {}
        this.players.forEach((player) => {
            player_bids[player] = []
        })
        return player_bids
    }

    step(player) {
        if (player === this.player_turn) {
            let points = Math.ceil(Math.random() * 10)
            this.player_points[player] += points
            return this.check_after_step(player)
        } else { return 'Not your turn' }
    }
    check_after_step(player) {
        if (this.player_points[player] > 21) {
            this.players.splice(this.players.indexOf(player), 1)
            this.set_turn(player)
            return 'lose'
        } else if (this.player_points[player] < 21) {
            this.set_turn(player)
            return 'in game'
        } else if (this.player_points[player] === 21) {
            this.players.splice(this.players.indexOf(player), 1)
            this.set_turn(player)
            return 'bj'
        }

    }
    skip(player) {
        if (player === this.player_turn) {
            this.set_turn(player)
            this.players.splice(this.players.indexOf(player), 1)
            return 'skip'
        } else { return 'Not your turn' }
    }
    set_turn(player) {
        if (this.players.length > 1) {
            if (this.players.indexOf(player) === this.players.length - 1) {
                this.player_turn = this.players[0]
            } else {
                this.player_turn = this.players[this.players.indexOf(player) + 1]
            }
        } else if (this.players.length === 1) { this.player_turn = this.players[0] }
        else {
            this.player_turn = 'end'
            return 'end' }

    }
}
// const players = ['first', 'second', 'third']
// const game = new BlackJackGame(players)
// let i = 0
// while (i < 15) {
//     if (game.player_turn !== 'end') {
//         console.log(game.players.length)
//         console.log(game.step(game.player_turn))
//         console.log(game.player_points)
//         console.log(game.players)
//         console.log(game.player_turn)
//         i++
//     } else {
//         console.log('end')
//         i++
//     }
//
// }