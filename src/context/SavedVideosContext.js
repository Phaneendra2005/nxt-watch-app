import React from 'react'

const SavedVideosContext = React.createContext({
  savedVideos: [],
  addVideo: () => {},
  removeVideo: () => {},
})

export const SavedVideosProvider = ({children}) => {
  const [savedVideos, setSavedVideos] = React.useState([])

  const addVideo = video => {
    setSavedVideos(prev =>
      prev.some(v => v.id === video.id) ? prev : [...prev, video],
    )
  }

  const removeVideo = id => {
    setSavedVideos(prev => prev.filter(video => video.id !== id))
  }

  return (
    <SavedVideosContext.Provider value={{savedVideos, addVideo, removeVideo}}>
      {children}
    </SavedVideosContext.Provider>
  )
}

export default SavedVideosContext
