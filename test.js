// Классы

// class DurakGame {
//     constructor(num) {
//         this.num = num
//         this.num_two = 0
//     }
//
//     set number(value) {
//         this.num_two = value
//     }
//
//     get plus() {
//         return this.num + this.num_two
//     }
//
// }
//
// const test = new DurakGame(1)
//
// console.log(test.plus)
//
// test.number = 5
//
// console.log(test.plus)
//
// class Test {
//     constructor() {
//         this._val = 0
//     }
//
//     set val(value) {
//         this._val = value + 10
//     }
//
//     get val() {
//         return this._val + 5
//     }
//
// }
//
// const test = new Test()
//
// test.val = 1
//
// console.log(test.val)

// export default class Test {
//     constructor(num) {
//         this.num = num
//     }
//     ret () {
//         return this.num + 5
//     }
//
// }

// Сортировка карт

// for (let g = 0; g < 3; g++) {
//     for (let i in deck) {
//         let a = Math.floor(Math.random() * 36);
//         [deck[i], deck[a]] = [deck[a], deck[i]]
//     }
// }
//
// console.log(deck)


// Создание колоды карт


// const deck = [];
//
// const suits = ['♥️', '♦️', '♣️', '♠️'];
// const values = [
//     '6', '7', '8', '9', '10',
//     'Jack', 'Queen', 'King', 'Ace'
// ];
//
// for (let suit of suits) {
//     for (let value of values) {
//         deck.push({
//             suit: suit,
//             value: value
//         });
//     }
// }


// Я хз не работает


// class DurakGame {
//     constructor() {
//         this.deck = this.generateDeck()
//     }
//     generateDeck() {
//         const suits = ['♥️', '♦️', '♣️', '♠️'];
//         const values = [
//             '6', '7', '8', '9', '10',
//             'Jack', 'Queen', 'King', 'Ace'
//         ];
//
//         for (let suit of suits) {
//             for (let value of values) {
//                 this.deck.push({
//                     suit: suit,
//                     value: value
//                 });
//             }
//         }
//         return this.deck
//     }
//
//     set deck (value) {
//         this._deck = value
//     }
//
//     get deck() {
//         let deck = this._deck
//         for (let i = 0; i < 3; i++) {
//             for (let a in deck) {
//                 let b = Math.floor(Math.random() * 36);
//                 [deck[a], deck[b]] = [deck[b], deck[a]]
//             }
//         }
//         return this.deck = deck
//     }
// test() {
//     this.players_deck[players[0]] = []
//     this.players_deck[players[0]].push(1)
//     console.log(this.players_deck)
// }
// }
//
// const test = new DurakGame()
//
// console.log(test.deck)

// const hz = ['frst', 'scnd'];
// const hz3 = ['ab', 'bc']
// const hz2 = {};
// hz2[hz[0]] = hz3.pop()
// hz2[hz[1]] = hz3.pop()
// console.log(hz2)

// let hz = ['a', 'b']
// hz.forEach((player) => {hz2[player] = 0})
//
// console.log(hz2)

// const players = ['first', 'second', 'third']

// class DurakGame {
//     constructor(players) {
//         this.deck = this.generateDeck()
//         this.players = players
//         this.players_deck = {}
//         this.player_turn = {'at': this.players[0], 'df': this.players[1]}
//         this.table = ['at', 'df']
//     }
//
//     generateDeck() {
//         let deck = []
//         const suits = ['♥️', '♦️', '♣️', '♠️'];
//         const values = [
//             '6', '7', '8', '9', '10',
//             '11', '12', '13', '14'
//         ];
//
//         for (let suit of suits) {
//             for (let value of values) {
//                 deck.push({
//                     suit: suit,
//                     value: value
//                 });
//             }
//         }
//
//         for (let g = 0; g < 5; g++) {
//             for (let i in deck) {
//                 let a = Math.floor(Math.random() * 35);
//                 [deck[i], deck[a]] = [deck[a], deck[i]]
//             }
//         }
//         return deck
//     }
//
//     dealCards() {
//         for (let i in this.players) {
//             this.players_deck[players[i]] = []
//             for (let a = 0; a < 6; a++) {
//                 this.players_deck[players[i]].push(this.deck.pop())
//             }
//         }
//         return this.trump = this.deck.pop()
//     }
//
//     change_player_turn() {
//         if (this.players.indexOf(this.player_turn) >= this.players.length - 1) {
//             return this.player_turn = this.players[0]
//         } else {
//             return this.player_turn = this.players[this.players.indexOf(this.player_turn) + 1]
//         }
//     }
// }

// const test = new DurakGame(players)

// let deck = generateDeck()
// const players = ['first', 'second', 'third']
// let players_deck = []
// let player_turn = {'at': 'first', 'def': 'second', 'oth': 'third'}
// let trump = dealCards(deck)
// let table = {'at': [], 'def': [], 'oth': []}
//
// function generateDeck () {
//     let deck = []
//     const suits = ['♥️', '♦️', '♣️', '♠️'];
//     const values = [
//         '6', '7', '8', '9', '10',
//         '11', '12', '13', '14'
//     ];
//
//     for (let suit of suits) {
//         for (let value of values) {
//             deck.push({
//                 suit: suit,
//                 value: value
//             });
//         }
//     }
//
//     for (let g = 0; g < 5; g++) {
//         for (let i in deck) {
//             let a = Math.floor(Math.random() * 35);
//             [deck[i], deck[a]] = [deck[a], deck[i]]
//         }
//     }
//     return deck
// }
//
// function dealCards(deck) {
//     for (let i in players) {
//         players_deck[players[i]] = []
//         for (let a = 0; a < 6; a++) {
//             players_deck[players[i]].push(deck.pop())
//         }
//     }
//     return deck.pop()
// }
//
// function step(player, player_index_card) {
//     if (players[player] === '') {
//
//     }
// }
// function change_player_turn()
// {
//     if (players.indexOf(player_turn) >= players.length - 1) {
//         return player_turn = players[0]
//     } else {
//         return player_turn = players[players.indexOf(player_turn) + 1]
//     }
// }






