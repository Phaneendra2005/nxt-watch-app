import {Link, withRouter} from 'react-router-dom'
import {SidebarContainer, NavContainer, NavList} from './styledComponents'

const navItemsList = [
  {id: 'HOME', displayText: 'Home', path: '/'},
  {id: 'TRENDING', displayText: 'Trending', path: '/trending'},
  {id: 'GAMING', displayText: 'Gaming', path: '/gaming'},
  {id: 'SAVED_VIDEOS', displayText: 'Saved Videos', path: '/saved-videos'},
]

const Sidebar = props => {
  const {location = {pathname: ''}} = props

  return (
    <SidebarContainer>
      <NavContainer>
        <NavList>
          {navItemsList.map(item => (
            <li key={item.id}>
              <Link
                to={item.path}
                style={{
                  display: 'block',
                  padding: '12px 24px',
                  textDecoration: 'none',
                  color:
                    location.pathname === item.path ? '#ff0000' : '#313131',
                  fontWeight:
                    location.pathname === item.path ? 'bold' : 'normal',
                  backgroundColor:
                    location.pathname === item.path ? '#f1f5f9' : 'transparent',
                }}
              >
                {item.displayText}
              </Link>
            </li>
          ))}
        </NavList>
      </NavContainer>

      <div style={{padding: '16px'}}>
        <p style={{fontWeight: 'bold'}}>CONTACT US</p>
        <div style={{display: 'flex', gap: '12px', margin: '12px 0'}}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
            alt="facebook logo"
            style={{width: '30px'}}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
            alt="twitter logo"
            style={{width: '30px'}}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
            alt="linked in logo"
            style={{width: '30px'}}
          />
        </div>
        <p style={{fontSize: '14px'}}>
          Enjoy! Now to see your channels and recommendations!
        </p>
      </div>
    </SidebarContainer>
  )
}

export default withRouter(Sidebar)
