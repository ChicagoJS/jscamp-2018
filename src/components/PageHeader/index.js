import * as React from 'react'
import './style.scss'

export default ({ title, imageUrl }) => (
  <div
    style={{
      backgroundSize: 'cover',
      backgroundImage: `url(${imageUrl})`,
    }}
    className="Hero py-md-5 mb-3 mb-md-5 position-relative overflow-hidden text-center text-white"
  >
    <h1 className="py-4 display-1 font-weight-bold">{title}</h1>
  </div>
)
