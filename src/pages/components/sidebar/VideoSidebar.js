import React, { useState } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ChatIcon from '@mui/icons-material/Chat'
import ShareIcon from '@mui/icons-material/Share'

import './VideoSidebar.css'

function VideoSidebar({ likes, messages, shares }) {
  const [liked, setLiked] = useState(false)

  function handleLike() {
    setLiked(!liked)
  }

  return (
    <div className='video__sidebar'>
      <div className='vide__sidebar__options'
        onClick={handleLike}
      >
        {liked 
          ? <FavoriteIcon fontSize='large' /> 
          : <FavoriteBorderIcon fontSize='large' />
        }
        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className='vide__sidebar__options'>
        <ChatIcon fontSize='large' />
        <p>{messages}</p>
      </div>
      <div className='vide__sidebar__options'>
        <ShareIcon fontSize='large' />
        <p>{shares}</p>
      </div>
    </div>
  )
}

export default VideoSidebar