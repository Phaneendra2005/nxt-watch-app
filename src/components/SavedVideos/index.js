import {Link} from 'react-router-dom'
import Header from '../Header'
import Sidebar from '../Sidebar'
import SavedVideosContext from '../../context/SavedVideosContext'

import {
  SavedVideosContainer,
  SavedVideosContent,
  EmptyViewContainer,
  EmptyImage,
  EmptyHeading,
  VideosList,
} from './styledComponents'

const SavedVideos = () => (
  <SavedVideosContext.Consumer>
    {({savedVideos}) => {
      const renderEmptyView = () => (
        <EmptyViewContainer>
          <EmptyImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <EmptyHeading>No saved videos found</EmptyHeading>
          <p>You can save your videos while watching them</p>
        </EmptyViewContainer>
      )

      const renderVideos = () => (
        <>
          <h1>Saved Videos</h1>
          <VideosList>
            {savedVideos.map(video => (
              <li key={video.id}>
                <Link
                  to={`/videos/${video.id}`}
                  style={{textDecoration: 'none', color: 'inherit'}}
                >
                  <img src={video.thumbnail_url} alt="video thumbnail" />
                  <div>
                    <img
                      src={video.channel.profile_image_url}
                      alt="channel logo"
                    />
                    <div>
                      <p>{video.title}</p>
                      <p>{video.channel.name}</p>
                      <p>{video.view_count}</p>
                      <p>{video.published_at}</p>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </VideosList>
        </>
      )

      return (
        <>
          <Header />
          <SavedVideosContainer>
            <Sidebar />
            <SavedVideosContent data-testid="saved-videos">
              {savedVideos.length === 0 ? renderEmptyView() : renderVideos()}
            </SavedVideosContent>
          </SavedVideosContainer>
        </>
      )
    }}
  </SavedVideosContext.Consumer>
)

export default SavedVideos
