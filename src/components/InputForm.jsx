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
        className="bg-slate-200 border border-slate-700 placeholder-gray-700 text-black text-md rounded-lg focus:ring-blue-900 focus:border-slate-900 block w-full p-2.5" />
        {/* ark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 */}
    </form>
    )
}

export default InputForm