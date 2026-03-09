import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ThemeContext from '../../context/ThemeContext'

import Header from '../Header'
import Sidebar from '../Sidebar'
import VideoItem from '../VideoItem'
import FailureView from '../FailureView'

import {
  HomeContainer,
  ContentContainer,
  BannerContainer,
  BannerContent,
  BannerLogo,
  BannerText,
  BannerButton,
  CloseButton,
  SearchContainer,
  SearchInput,
  SearchButton,
  VideosList,
} from './styledComponents'

const apiStatusConstants = {
  INITIAL: 'INITIAL',
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE',
}

class Home extends Component {
  state = {
    videosList: [],
    apiStatus: apiStatusConstants.INITIAL,
    showBanner: true,
    searchInput: '',
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.LOADING})

    const jwtToken = Cookies.get('jwt_token')
    const {searchInput} = this.state

    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)

    if (response.ok) {
      const data = await response.json()

      const updatedData = data.videos.map(video => ({
        id: video.id,
        title: video.title,
        thumbnailUrl: video.thumbnail_url,
        channelName: video.channel.name,
        channelProfileUrl: video.channel.profile_image_url,
        viewCount: video.view_count,
        publishedAt: video.published_at,
      }))

      this.setState({
        videosList: updatedData,
        apiStatus: apiStatusConstants.SUCCESS,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.FAILURE})
    }
  }

  onClickSearch = () => {
    this.getVideos()
  }

  renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" height={50} width={50} />
    </div>
  )

  renderNoVideosView = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <h1>No Search results found</h1>
      <p>Try different key words or remove search filter</p>
      <button type="button" onClick={this.getVideos}>
        Retry
      </button>
    </div>
  )

  renderSuccessView = () => {
    const {videosList} = this.state

    if (videosList.length === 0) {
      return this.renderNoVideosView()
    }

    return (
      <VideosList>
        {videosList.map(video => (
          <VideoItem key={video.id} details={video} />
        ))}
      </VideosList>
    )
  }

  renderContent = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.LOADING:
        return this.renderLoader()
      case apiStatusConstants.SUCCESS:
        return this.renderSuccessView()
      case apiStatusConstants.FAILURE:
        return <FailureView retry={this.getVideos} />
      default:
        return null
    }
  }

  render() {
    const {searchInput, showBanner} = this.state

    return (
      <ThemeContext.Consumer>
        {({isDarkTheme}) => (
          <>
            <Header />
            <HomeContainer>
              <Sidebar />
              <ContentContainer
                data-testid="home"
                style={{
                  backgroundColor: isDarkTheme ? '#181818' : '#f9f9f9',
                }}
              >
                {showBanner && (
                  <BannerContainer data-testid="banner">
                    <BannerContent>
                      <BannerLogo
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <BannerText>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </BannerText>
                      <BannerButton type="button">GET IT NOW</BannerButton>
                    </BannerContent>

                    <CloseButton
                      type="button"
                      data-testid="close"
                      onClick={() => this.setState({showBanner: false})}
                    >
                      X
                    </CloseButton>
                  </BannerContainer>
                )}

                <SearchContainer>
                  <SearchInput
                    type="search"
                    value={searchInput}
                    onChange={e => this.setState({searchInput: e.target.value})}
                  />
                  <SearchButton
                    type="button"
                    data-testid="searchButton"
                    onClick={this.onClickSearch}
                  >
                    Search
                  </SearchButton>
                </SearchContainer>

                {this.renderContent()}
              </ContentContainer>
            </HomeContainer>
          </>
        )}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
