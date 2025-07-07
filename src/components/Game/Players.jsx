import {useState} from "react";

export default function Players({game}) {

    const [gameStats, setGameStats] = useState({
        players: game.players,
        player_points: game.player_points,
        player_turn: game.player_turn
    })
    const [result, setResult] = useState()

    function onClickPlayer(player) {
        setResult(game.step(player))
        setGameStats(({
            players: game.players,
            player_points: game.player_points,
            player_turn: game.player_turn
        }))
        console.log(gameStats.player_points)
    }
    function onClickPlayerSkip(player) {
        setResult(game.skip(player))
        setGameStats(({
            players: game.players,
            player_points: game.player_points,
            player_turn: game.player_turn
        }))
        console.log(gameStats.player_points)
    }

    return (
        <div>
            {
                gameStats.players.map((player) => {
                    return (
                        <div>
                            <button onClick={() => onClickPlayer(player)}>Bid {player}</button>
                            <button onClick={() => onClickPlayerSkip(player)}>Skip {player}</button>
                        </div>
                    )
                })
            }
            <p>{result}</p>
            <p>{game.players_all.join(' ')}</p>
        </div>
    )
}