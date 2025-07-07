import {useState} from "react"
import InputQuestion from "./InputQuestion"
import InputAnswer from "./InputAnswer"

export default function AddQuestion({setAddQuestion, quiz, setQuiz}) {
    const [tempQuestion, setTempQuestion] = useState({question: null, answers: null, correctAnswer: []})

    function addCurrentQuestion() {
        if (tempQuestion.question !== null && tempQuestion.answers !== null && tempQuestion.correctAnswer !== []) {
            setAddQuestion(false)
            setQuiz({...quiz, tempQuestion})
        } else {
            return alert('Question not full')
        }
    }

    function setCorrectAnswer(index) {
        let temp = tempQuestion.correctAnswer
        if (!tempQuestion.correctAnswer.includes(index)) {
            temp.push(index)
            setTempQuestion({
                ...tempQuestion,
                correctAnswer: temp
            })
        } else {
            temp.splice(tempQuestion.correctAnswer.indexOf(index), 1)
            setTempQuestion({...tempQuestion, correctAnswer: temp})
        }

    }

    function deleteAnswer(index) {
        let temp_answers = tempQuestion.answers
        let temp_correctAnswer = tempQuestion.correctAnswer
        if (tempQuestion.correctAnswer.includes(index)) {
            temp_correctAnswer.splice(tempQuestion.correctAnswer.indexOf(index))
        }
        temp_answers.splice(index, 1)
        setTempQuestion({...tempQuestion, answers: temp_answers, correctAnswer: temp_correctAnswer })
    }

    return (
        <div>
            {tempQuestion.question == null ?
                <InputQuestion tempQuestion={tempQuestion} setTempQuestion={setTempQuestion}/> :
                <>
                    <p>{tempQuestion.question}</p>
                    <button onClick={() => {
                        setTempQuestion({...tempQuestion, question: null})
                    }}>Edit question
                    </button>
                </>}
            <InputAnswer tempQuestion={tempQuestion} setTempQuestion={setTempQuestion}/>
            <p>Click checkbox on correct answer</p>
            {tempQuestion.answers === null ? <p>No answers </p> : tempQuestion.answers.map((i, index) => {
                return <p>
                    {i}
                    <input type={"checkbox"} onChange={() => {
                        setCorrectAnswer(index)
                    }}/>
                    <button onClick={() => {deleteAnswer(index)} }>Delete</button>
                </p>
            })}

            <button onClick={() => {
                addCurrentQuestion()
            }}>Add curent question
            </button>
            <button onClick={() => {
                setTempQuestion({question: null, answers: null, correctAnswer: []})
            }}>Clear all
            </button>
            <p>{ tempQuestion.correctAnswer }</p>
        </div>
    )
}