import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
`

export const ContentContainer = styled.div`
  flex-grow: 1;
  padding: 24px;
  min-height: 100vh;
`

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  display: flex;
  justify-content: space-between;
  padding: 24px;
  margin-bottom: 24px;
`

export const BannerContent = styled.div`
  max-width: 400px;
`

export const BannerLogo = styled.img`
  width: 150px;
  margin-bottom: 16px;
`

export const BannerText = styled.p`
  font-size: 16px;
  margin-bottom: 16px;
`

export const BannerButton = styled.button`
  padding: 8px 16px;
`

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
`

export const SearchContainer = styled.div`
  display: flex;
  margin-bottom: 24px;
`

export const SearchInput = styled.input`
  flex-grow: 1;
  padding: 8px;
`

export const SearchButton = styled.button`
  padding: 8px 16px;
`

export const VideosList = styled.ul`
  list-style-type: none;
  padding: 0;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
`
