import React from 'react'
import { css } from 'glamor'
//import picturePath from '../../assets/profile.jpg'

const picturePath = '../../assets/profile.jpg'

const ProfilePicture = ({ path = picturePath, alt = 'Profile Picture', side = 140 }) => {
  const pictureSide = `${side}px`
  const pictureStyle = css({
    width: pictureSide,
    height: pictureSide,
    borderRadius: '50%',
    borderWidth: side < 100 ? '2px' : '4px',
    borderColor: '#ffffff',
    borderStyle: 'solid'
  })

  return (
    <img {...pictureStyle} src={path} alt={alt} />
  )
}

export default ProfilePicture