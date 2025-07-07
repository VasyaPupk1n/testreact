import {useState} from "react";

export default function InputQuestion({tempQuestion, setTempQuestion}) {
    const [question, setQuestion] = useState('')
    return (
        <div>
            <form onSubmit={ e => {
                e.preventDefault()
                setTempQuestion({...tempQuestion, question: question})
            }}>
            <input onChange={(e) => {setQuestion(e.target.value)}} />
            <button>Set question</button>
            </form>
        </div>
    )
}