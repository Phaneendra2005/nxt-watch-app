import ThemeContext from '../../context/ThemeContext'

const FailureView = props => {
  const {retry} = props

  return (
    <ThemeContext.Consumer>
      {({isDarkTheme}) => {
        const failureImg = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <div>
            <img src={failureImg} alt="failure view" />
            <h1>Oops! Something Went Wrong</h1>
            <p>
              We are having some trouble completing your request. Please try
              again.
            </p>
            <button type="button" onClick={retry}>
              Retry
            </button>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default FailureView
