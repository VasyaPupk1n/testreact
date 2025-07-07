export default function Quiz({quiz}) {
    return (
        <div>
            {quiz.map((i) => {
                return <div>
                    <p>Question {quiz.indexOf(i) + 1}</p>
                    <p>{i.question}</p>
                    {i.answers.map((a) => {return  <p>{a}</p> })}
                </div>
            })}
        </div>
    )
}