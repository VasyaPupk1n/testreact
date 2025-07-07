import Quiz from "./Quiz.jsx"
import {useState} from "react"
import AddQuestion from "./AddQuestion"

let quiz_main = [
    {
        "question": "da?",
        "answers": [
            "da",
            "net"
        ],
        "correctAnswer": 0
    },
    {
        "question": "net?",
        "answers": [
            "da",
            "net"
        ],
        "correctAnswer": 1
    }
]

export default function MainQuiz() {
    const [addQuestion, setAddQuestion] = useState(false)
    const [quiz, setQuiz] = useState(quiz_main)
    return (
        <div>
            {!addQuestion ?
                <>
                    <Quiz quiz={quiz}/>
                </>
                : <AddQuestion setAddQuestion={setAddQuestion} quiz={quiz} setQuiz={setQuiz} />
            }
            <button onClick={() => {
                setAddQuestion(!addQuestion)
            }}>{ !addQuestion ? 'Add question' : 'Break make question' }
            </button>
        </div>
    )
}