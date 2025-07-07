import React from "react"
import Button from "./components/Button"
import Input from "./components/Input"

function Test ({ number }) {
    let a = number === 0 ? 'Zero' : 'No zero'
    return (
        <div className="Test">
            <h1>{a}</h1>
            <Input />
            <Button />
        </div>
    )
}

export default Test