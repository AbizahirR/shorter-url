import { Link } from "react-router-dom"

const ShortedURLS = ({ state }) => {

  return (
    <div className={`${state.urls.length > 0 && "overflow-y-scroll"} rounded-md border-slate-900 border-2`}>
      {state.urls.length > 0 
      ? (
        state.urls.map(item => {
          return (
              <article className="bg-lime-50 p-2 text-gray-900" key={item.UUIID}>
                  <h2><b>Shortcut:</b> <Link className="hover:text-indigo-600 transition-all" to={`/r/${item.shortUrl}`}>link-shorty.netlify.app/r/{item.shortUrl}</Link></h2>
                  <h3><b>Original URL:</b> {item.url}</h3>
                  <h4><b>Visited:</b> {item.visitCounter}</h4>
              </article>
          )
        })
      ) 
      : (
        <article className="bg-lime-50 p-2 text-gray-900">
          <h2>No URLs yet, try adding new URL</h2>
        </article>
      )}
    </div>
  )
}

export default ShortedURLS
