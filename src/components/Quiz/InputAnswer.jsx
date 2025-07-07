import {useState} from "react";

export default function InputAnswer({tempQuestion, setTempQuestion}) {
    const [answer, setAnswer] = useState('')
    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                setTempQuestion({...tempQuestion, answers: tempQuestion.answers == null ? [answer] : [...tempQuestion.answers, answer]})
            }}>
                <input onChange={(e) => {setAnswer(e.target.value)}}/>
                <button>Add answer</button>
            </form>
        </div>
    )
}