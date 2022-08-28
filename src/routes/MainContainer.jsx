import { useEffect } from "react"
import InputForm from "../components/InputForm"
import ShortedURLS from "../components/ShortedURLS"
import useReducerApp from "../store/reducer"

const MainContainer = () => {

    const [state, dispatch] = useReducerApp()

    useEffect(() => {
        dispatch({ type: "SET_URLS" })
    }, [])

    return (
        <section className="w-full max-w-lg border p-2 border-[#343434] bg-[#17191b] rounded-lg flex-col text-xl max-h-96">
            <InputForm dispatch={dispatch} />
            <ShortedURLS state={state} />
        </section>
    )
}

export default MainContainer
