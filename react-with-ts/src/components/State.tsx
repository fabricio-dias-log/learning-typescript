import React, {useState,ChangeEvent} from 'react'

const State = () => {
    const [text, setText] = useState<string | null>(null)
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }
    
    return (
    <div>
        <p>the text is {text}</p>
        <input type="text" name="iptText" id="iptText" onChange={handleChange} />
    </div>
    )
}

export default State