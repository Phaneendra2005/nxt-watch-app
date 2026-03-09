import {Component} from 'react'
import {Link} from 'react-router-dom' // Fixed missing import
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import Sidebar from '../Sidebar'
import FailureView from '../FailureView'
import {
  GamingRouteContainer,
  ContentContainer,
  GamingList,
  GamingItem,
  Thumbnail,
  Title,
  Views,
} from './styledComponents'

class Gaming extends Component {
  state = {
    gamingVideos: [],
    apiStatus: 'LOADING',
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: 'LOADING'})
    const jwtToken = Cookies.get('jwt_token')

    const response = await fetch('https://apis.ccbp.in/videos/gaming', {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    })

    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(video => ({
        id: video.id,
        title: video.title,
        thumbnailUrl: video.thumbnail_url,
        viewCount: video.view_count,
      }))

      this.setState({
        gamingVideos: updatedData,
        apiStatus: 'SUCCESS',
      })
    } else {
      this.setState({apiStatus: 'FAILURE'})
    }
  }

  renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" height={50} width={50} />
    </div>
  )

  renderGamingVideos = () => {
    const {gamingVideos} = this.state

    return (
      <GamingList>
        {gamingVideos.map(video => {
          const {id, title, thumbnailUrl, viewCount} = video
          return (
            <Link key={id} to={`/videos/${id}`}>
              <GamingItem>
                <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
                <Title>{title}</Title>
                <Views>{viewCount} Watching Worldwide</Views>
              </GamingItem>
            </Link>
          )
        })}
      </GamingList>
    )
  }

  renderContent = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case 'LOADING':
        return this.renderLoader()
      case 'SUCCESS':
        return this.renderGamingVideos()
      case 'FAILURE':
        return <FailureView retry={this.getGamingVideos} />
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <GamingRouteContainer>
          <Sidebar />
          <ContentContainer data-testid="gaming">
            <h1>Gaming</h1>
            {this.renderContent()}
          </ContentContainer>
        </GamingRouteContainer>
      </>
    )
  }
}

export default Gaming
