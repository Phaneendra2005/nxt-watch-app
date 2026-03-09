import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import Sidebar from '../Sidebar'
import VideoItem from '../VideoItem'
import FailureView from '../FailureView'

import {
  TrendingRouteContainer,
  ContentContainer,
  TrendingHeader,
  IconContainer,
  TrendingIcon,
  Heading,
  VideosList,
} from './styledComponents'

class Trending extends Component {
  state = {
    videos: [],
    apiStatus: 'LOADING',
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: 'LOADING'})
    const jwtToken = Cookies.get('jwt_token')

    const response = await fetch('https://apis.ccbp.in/videos/trending', {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    })

    if (response.ok) {
      const data = await response.json()
      const updatedVideos = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        channelName: each.channel.name,
        channelProfileUrl: each.channel.profile_image_url,
        viewCount: each.view_count,
        publishedAt: each.published_at,
      }))

      this.setState({videos: updatedVideos, apiStatus: 'SUCCESS'})
    } else {
      this.setState({apiStatus: 'FAILURE'})
    }
  }

  renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" height={50} width={50} />
    </div>
  )

  renderSuccess = () => {
    const {videos} = this.state

    return (
      <VideosList>
        {videos.map(video => (
          <VideoItem key={video.id} details={video} />
        ))}
      </VideosList>
    )
  }

  renderFailure = () => <FailureView retry={this.getTrendingVideos} />

  renderContent = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case 'SUCCESS':
        return this.renderSuccess()
      case 'FAILURE':
        return this.renderFailure()
      case 'LOADING':
        return this.renderLoader()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <TrendingRouteContainer>
          <Sidebar />
          <ContentContainer data-testid="trending">
            <TrendingHeader>
              <IconContainer>
                <TrendingIcon />
              </IconContainer>
              <Heading>Trending</Heading>
            </TrendingHeader>
            {this.renderContent()}
          </ContentContainer>
        </TrendingRouteContainer>
      </>
    )
  }
}

export default Trending
