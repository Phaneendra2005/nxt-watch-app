import {Link} from 'react-router-dom'

const VideoItem = props => {
  const {details} = props

  const {
    id,
    title,
    thumbnailUrl,
    channelName,
    channelProfileUrl,
    viewCount,
    publishedAt,
  } = details

  return (
    <li>
      <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
        <img src={thumbnailUrl} alt="video thumbnail" />

        <div>
          <img src={channelProfileUrl} alt="channel logo" />

          <div>
            <p>{title}</p>
            <p>{channelName}</p>
            <p>{viewCount}</p>
            <p>{publishedAt}</p>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default VideoItem
