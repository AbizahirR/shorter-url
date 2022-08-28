import { Link } from "react-router-dom"

const ShortedURLS = ({ state }) => {

  return (
    <div className={`${state.urls.length > 1 && "overflow-y-scroll scrollable"} border-slate-900 border mt-4 bg-[#17191b] focus:ring-blue-900 max-h-64`}>

      {state.urls.length > 0 
      ? (
        state.urls.map(item => {
          return (
              <article className=" text-slate-200 pb-2 pt-2 border-b-slate-200/80 border-b" key={item.UUIID}>
                  <h3>{item.url}</h3>
                  <h2><Link className="hover:text-zinc-500 transition-all" to={`/r/${item.shortUrl}`}>link-shorty.netlify.app/r/{item.shortUrl}</Link></h2>
                  <h4><b>Visited:</b> {item.visitCounter}</h4>
              </article>
          )
        })
      ) 
      : (
        <article className="bg-[#17191b] p-2 text-gray-900">
          <h2>No URLs yet, try adding new URL</h2>
        </article>
      )}
    </div>
  )
}

export default ShortedURLS
