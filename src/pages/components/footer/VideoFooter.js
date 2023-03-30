import React from 'react'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import './VideoFooter.css'

function VideoFooter() {
  return (
    <div className='video__footer'>
      <div className='video__footer__text'>
        <h3>@paulo Ebac</h3>
        <p>Descrição do video</p>
        <div className='video__footer__music'>
          <MusicNoteIcon className='video__footer__icons'/>
          <div className='video__footer__music-text'>
            <p>Título da música</p>
          </div>
        </div>
      </div>
      <img
        className='video__footer__record'
        alt='Imagem de um vinil girando'
        src='https://firebasestorage.googleapis.com/v0/b/jornada3-a7924.appspot.com/o/vinil.png?alt=media&token=8ab56d00-5de7-4332-a680-c6c22134c365'
      />
    </div>
  )
}

export default VideoFooter