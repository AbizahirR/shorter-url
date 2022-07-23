import { useEffect } from "react"
import InputForm from "../components/InputForm"
import ShortedURLS from "../components/ShortedURLS"
import useReducerApp from "../store/reducer"

const MainContainer = () => {

    const [state, dispatch] = useReducerApp()

    useEffect(() => {
        dispatch({ type: "SET_URLS" })
    },[])

    return (
        <section className="max-w-4xl bg-slate-400 rounded-xl px-7 py-6 flex flex-col gap-5 text-xl max-h-96">
        <h1 className="text-center text-3xl text-white font-bold">Shorter Url</h1>
        <InputForm dispatch={dispatch} />
        <ShortedURLS state={state} />
        </section>
    )
}

export default MainContainer
