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
        <label 
        htmlFor="addUrl"
        className="text-slate-300 text-sm select-none bg-zinc-800 p-1 rounded-md">
            Add shorted URL
        </label>

        <input
        name="addUrl"
        type={"url"}
        onChange={handleChange}
        value={url}
        onInvalid={(e) => e.target.setCustomValidity("Please enter a valid URL with http or https format")}
        placeholder={"Type a valid URL..."} 
        className="bg-[#17191b] placeholder-slate-500 text-white text-md w-full p-2.5 border-t-0 border-l-0 border-r-0 border-b-1 border-[#343434] focus:ring-0 focus:border-[#343434]"
        />
    </form>
    )
}

export default InputForm