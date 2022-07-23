import { setUrls, addUrl, viewUrl } from "./actions"
import { useReducer } from "react";


export function reducer(state, action) {

  switch (action.type) {
    case "SET_URLS":
      return setUrls();
    case "ADD_URL":
      return addUrl(state, action);
    case "VIEW_URL":
      return viewUrl(state, action);
    default:
  }
}

export default function useReducerApp() {
  return useReducer(reducer, { urls: [] })
}
