export const setUrls = () => {
  const data = JSON.parse(localStorage.getItem("urls")) || []
  
  return { urls: [...data] }
}

export function addUrl(state, action) {
  const findUrl = state.urls.find(item => item.url === action.url)
  const existUrl = findUrl === undefined ? true : false

  if (existUrl) {
    const newUrl = {
      UUIID: Math.random().toString(8).substring(2, 6),
      url: action.url,
      shortUrl: shortUrl(),
      visitCounter: 0
    }

    const urls = [...state.urls, newUrl]
    localStorage.setItem("urls", JSON.stringify(urls))

    return {urls: urls}

  } else alert("This URL is already in the list")

  return {urls: state.urls}
}

export function viewUrl(state, action) {

  const urls = [...state.urls];
  const targetUrl = urls.find((item) => item.shortUrl === action.urls);

  targetUrl.visitCounter++;
  localStorage.setItem("urls", JSON.stringify(urls));

  return { urls: [...urls] };
}

const shortUrl = () => {
    return Math.random().toString(36).substring(2, 8)
}