import React from 'react'
import Link from 'gatsby-link'

import ImageRow from '../components/ImageRow'

const images = [
  'tXmc2mVDxJc',
  'WhayBiwx8Ng',
  'tnv84LOjes4',
  'ZtA5lS-dHuc',
  'mw2JSzUxVLg',
  'VgDYzIGLOqk',
  'ewtdGmhY1vI',
]

const template = 'https://source.unsplash.com/$0/900x600'

export default class AttendPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="text-primary">300 S. Riverside Plaza Suite 1000</h1>
        <p class="lead">
          The conference is taking place 10 stories above the Chicago River.
          Enjoy beautiful views of the city as well as the river!
        </p>
        <p class="lead">
          Chicago is known for its skyscrapers, museums, parks, beaches and
          river. There's so much to explore on your days before / after the
          conference.
        </p>
        <ImageRow images={images.map(i => template.replace('$0', i))} />
      </React.Fragment>
    )
  }
}
