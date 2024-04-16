import React from 'react'

const MenuItem = ({title,url}) => {
  return (
    <li className="dropdown">
    <a href={url}>{title}</a>
  </li>
  )
}

export default MenuItem