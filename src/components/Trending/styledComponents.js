import styled from 'styled-components'
import {HiFire} from 'react-icons/hi'

export const TrendingRouteContainer = styled.div`
  display: flex;
`

export const ContentContainer = styled.div`
  flex-grow: 1;
  padding: 24px;
`

export const TrendingHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`

export const IconContainer = styled.div`
  background-color: #f1f5f9;
  border-radius: 50%;
  padding: 16px;
  margin-right: 16px;
`

export const TrendingIcon = styled(HiFire)`
  color: #ff0000;
  font-size: 30px;
`

export const Heading = styled.h1`
  font-family: Roboto;
  font-size: 24px;
`

export const VideosList = styled.ul`
  list-style-type: none;
  padding: 0;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`
