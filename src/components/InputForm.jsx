import { useState } from "react"

const InputForm = ({ dispatch }) => {

    const [url, setUrl] = useState("")

    const handleSubmit = (e) => {

        e.preventDefault()
        const isURL = /^((https|http):\/\/){1}(www\.)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.([a-z]\/?){2,6}$/gi.test(url)

        if (isURL) {
            dispatch({ type: "ADD_URL", url })
            setUrl("")
           
        } else alert("Please enter a valid URL")

        setUrl("")
    }

    const handleChange = (e) => {
        setUrl(e.target.value)
    }

    return (
    <form onSubmit={handleSubmit}>
        <input 
        type={"url"}
        onChange={handleChange}
        value={url}
        onInvalid={(e) => e.target.setCustomValidity("Please enter a valid URL with http or https format")}
        placeholder={"Type a valid URL..."} 
        className="w-full outline-none rounded-lg px-2 py-1 border-slate-900 border-2" />
    </form>
    )
}

export default InputForm