import BlackJackGame from "./Src";
import {useState} from "react";
import Players from "./Players";

export default function MainGame() {

    const players = ['first', 'second']
    const [start, setStart] = useState(true)
    const game = new BlackJackGame(players)

    function onClickStart() {
        setStart(false)
    }

    return (
        <div>
            {start ?
                <button onClick={onClickStart}>Start game</button>
                :
                <Players players={players} game={game} />}
        </div>
    )
}