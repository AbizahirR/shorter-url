import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useReducerApp from "../store/reducer";

const Redirect = () => {
    
    const [state, dispatch] = useReducerApp();
    const [counter, setCounter] = useState(3);
    const { shortedUrl } = useParams();

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("urls")) ?? []
        
        const thisUrl = data.find((item) => item.shortUrl == shortedUrl) ?? null
        if (thisUrl) {
 
            dispatch({ type: "SET_URLS" })
            dispatch({ type: "VIEW_URL", urls: thisUrl.shortUrl })

            const interval = setInterval(() => {
                if (counter <= 1) {
                    clearInterval(interval)
                }
                setCounter(counter => counter - 1)
            }, 1000)

            setTimeout(() => {               
                window.location.href = thisUrl.url;
            }, 3000);           
        }
    },[])

  return (
    <div className="grid gap-6">
        <h1 className="text-white text-5xl font-bold">Redirecting in</h1>
        <span className="text-slate-300 text-4xl font-semibold text-center">{counter}</span>
    </div>
  )
}

export default Redirect