import styled from 'styled-components'

export const HeaderContainer = styled.nav`
  height: 60px;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.img`
  width: 120px;
`

export const RightSection = styled.div`
  display: flex;
  align-items: center;
`

export const ThemeButton = styled.button`
  background: transparent;
  border: none;
  margin-right: 16px;
  cursor: pointer;
`

export const ProfileImg = styled.img`
  width: 32px;
  margin-right: 16px;
`

export const LogoutButton = styled.button`
  background: transparent;
  border: 1px solid #3b82f6;
  color: #3b82f6;
  padding: 6px 12px;
  cursor: pointer;
`

export const PopupContainer = styled.div`
  padding: 24px;
  background-color: #ffffff;
`

export const PopupButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`
