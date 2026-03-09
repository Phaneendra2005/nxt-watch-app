import {Component} from 'react'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'
import ThemeContext from '../../context/ThemeContext'
import SavedVideosContext from '../../context/SavedVideosContext'
import FailureView from '../FailureView'
import Header from '../Header'
import Sidebar from '../Sidebar'
import {ActionButton} from './styledComponents'

class VideoItemDetails extends Component {
  state = {
    video: null,
    rawVideo: null,
    status: 'LOADING',
    liked: false,
    disliked: false,
  }

  componentDidMount() {
    this.fetchVideo()
  }

  fetchVideo = async () => {
    this.setState({status: 'LOADING'})
    const {match} = this.props
    const jwt = Cookies.get('jwt_token')

    const response = await fetch(
      `https://apis.ccbp.in/videos/${match.params.id}`,
      {headers: {Authorization: `Bearer ${jwt}`}},
    )

    if (response.ok) {
      const data = await response.json()
      const d = data.video_details

      const rawVideo = {
        id: d.id,
        title: d.title,
        video_url: d.video_url,
        thumbnail_url: d.thumbnail_url,
        view_count: d.view_count,
        published_at: d.published_at,
        description: d.description,
        channel: {
          name: d.channel.name,
          profile_image_url: d.channel.profile_image_url,
          subscriber_count: d.channel.subscriber_count,
        },
      }

      const video = {
        id: d.id,
        title: d.title,
        videoUrl: d.video_url,
        thumbnailUrl: d.thumbnail_url,
        viewCount: d.view_count,
        publishedAt: d.published_at,
        description: d.description,
        channel: {
          name: d.channel.name,
          profileImageUrl: d.channel.profile_image_url,
          subscriberCount: d.channel.subscriber_count,
        },
      }

      this.setState({video, rawVideo, status: 'SUCCESS'})
    } else {
      this.setState({status: 'FAILURE'})
    }
  }

  onClickLike = () =>
    this.setState(prev => ({liked: !prev.liked, disliked: false}))

  onClickDislike = () =>
    this.setState(prev => ({disliked: !prev.disliked, liked: false}))

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" height={50} width={50} />
    </div>
  )

  renderVideoDetails = () => {
    const {video, rawVideo, liked, disliked} = this.state

    return (
      <ThemeContext.Consumer>
        {({isDarkTheme}) => (
          <SavedVideosContext.Consumer>
            {({savedVideos, addVideo, removeVideo}) => {
              const isSaved = savedVideos.some(v => v.id === video.id)

              const onClickSave = () => {
                if (isSaved) {
                  removeVideo(video.id)
                } else {
                  addVideo(rawVideo)
                }
              }

              return (
                <>
                  <Header />
                  <div style={{display: 'flex'}}>
                    <Sidebar />
                    <div
                      data-testid="videoItemDetails"
                      style={{
                        flex: 1,
                        backgroundColor: isDarkTheme ? '#0f0f0f' : '#f9f9f9',
                        minHeight: '100vh',
                        padding: '24px',
                      }}
                    >
                      <ReactPlayer url={video.videoUrl} width="100%" controls />
                      <p>{video.title}</p>
                      <p>{video.viewCount} views</p>
                      <p>{video.publishedAt}</p>

                      <ActionButton
                        type="button"
                        active={liked}
                        onClick={this.onClickLike}
                      >
                        Like
                      </ActionButton>
                      <ActionButton
                        type="button"
                        active={disliked}
                        onClick={this.onClickDislike}
                      >
                        Dislike
                      </ActionButton>
                      <ActionButton
                        type="button"
                        active={isSaved}
                        onClick={onClickSave}
                      >
                        {isSaved ? 'Saved' : 'Save'}
                      </ActionButton>

                      <div>
                        <img
                          src={video.channel.profileImageUrl}
                          alt="channel logo"
                        />
                        <div>
                          <p>{video.channel.name}</p>
                          <p>{video.channel.subscriberCount} subscribers</p>
                        </div>
                      </div>
                      <p>{video.description}</p>
                    </div>
                  </div>
                </>
              )
            }}
          </SavedVideosContext.Consumer>
        )}
      </ThemeContext.Consumer>
    )
  }

  render() {
    const {status} = this.state
    switch (status) {
      case 'LOADING':
        return this.renderLoader()
      case 'FAILURE':
        return <FailureView retry={this.fetchVideo} />
      case 'SUCCESS':
        return this.renderVideoDetails()
      default:
        return null
    }
  }
}

export default VideoItemDetails
