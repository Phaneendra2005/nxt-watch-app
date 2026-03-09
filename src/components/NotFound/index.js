import {Link} from 'react-router-dom'
import Header from '../Header'
import Sidebar from '../Sidebar'
import ThemeContext from '../../context/ThemeContext'

const NotFound = () => (
  <ThemeContext.Consumer>
    {({isDarkTheme}) => {
      const notFoundImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <>
          <Header />
          <Sidebar />
          <div>
            <img src={notFoundImg} alt="not found" />
            <h1>Page Not Found</h1>
            <p>We are sorry, the page you requested could not be found.</p>
            <Link to="/">Go to Home</Link>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
