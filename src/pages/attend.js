import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import get from 'lodash.get'

import ImageRow from '../components/ImageRow'

const images = [
  'tXmc2mVDxJc',
  'WhayBiwx8Ng',
  'tnv84LOjes4',
  'ZtA5lS-dHuc',
  'mw2JSzUxVLg',
  'ZOG7Zj7cfR8',
  'ewtdGmhY1vI',
]

const template = 'https://source.unsplash.com/$0/900x600'

export default class AttendPage extends React.Component {
  render() {
    const siteMetadata = get(this.props, 'data.site.siteMetadata', {})
    return (
      <React.Fragment>
        <Helmet
          title={`${siteMetadata.title} | Attend`}
          description="Attend Chicago JSCamp at 300 S. Riverside Plaza, Suite 1000 on September 22, 2018"
        />
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

export const pageQuery = graphql`
  query AttendQuery {
    site {
      siteMetadata {
        title
        description
        keywords
        siteUrl
        author
        twitter
        city
        date
        ticketLink
      }
    }
  }
`
