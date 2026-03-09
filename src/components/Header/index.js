import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import ThemeContext from '../../context/ThemeContext'

const Header = ({history}) => (
  <ThemeContext.Consumer>
    {({isDarkTheme, toggleTheme}) => {
      const logoUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      const onConfirmLogout = () => {
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      return (
        <header>
          <Link to="/">
            <img src={logoUrl} alt="website logo" />
          </Link>

          <button type="button" data-testid="theme" onClick={toggleTheme}>
            Theme
          </button>

          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
            alt="profile"
          />

          <Popup modal trigger={<button type="button">Logout</button>}>
            {close => (
              <div>
                <p>Are you sure, you want to logout</p>

                <button type="button" onClick={close}>
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={() => {
                    onConfirmLogout()
                    close()
                  }}
                >
                  Confirm
                </button>
              </div>
            )}
          </Popup>
        </header>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Header)
