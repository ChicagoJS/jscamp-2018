import React from 'react'
import Link from 'gatsby-link'
import { siteMetadata } from '../../gatsby-config'

import './gatstrap.scss'

import Footer from './footer'
import Header from './header'
import PageHeader from '../components/PageHeader'

const CONFIG = {
  title: 'JSCamp 2018',
  date: 'September 29, 2018',
  city: 'Chicago, IL',
  images: {
    hero: 'https://source.unsplash.com/75vZiZuLHWc/1200x400',
    // hero: 'https://source.unsplash.com/-icmOdYWXuQ/1200x400',
    featured: {
      featured1: 'https://source.unsplash.com/QbD-LmFZ-uk/300x500',
      featured2: 'https://source.unsplash.com/1nashFHSKaU/300x500',
      featured3: 'https://source.unsplash.com/Ye60h3tJuU0/300x500',
    },
  },
}

function getPageInfo(pathname) {
  switch (pathname) {
    case '/speakers':
      return {
        title: 'Speakers',
        imageUrl: 'https://source.unsplash.com/Inv8D-Ur3Nc/1200x400',
      }
    case '/schedule':
      return {
        title: 'Schedule',
        imageUrl: 'https://source.unsplash.com/Hq_K7X2NkGE/1200x400',
      }
    case '/code-of-conduct':
      return {
        title: 'Code of Conduct',
        imageUrl: 'https://source.unsplash.com/F-axbQfWoK0/1200x400',
      }
    case '/attend':
      return {
        title: 'Attend',
        imageUrl: 'https://source.unsplash.com/BwmOGbS2POw/1200x400',
      }
    case '/sponsors':
      return {
        title: 'Sponsors',
        imageUrl: 'https://source.unsplash.com/v-b_6-I1oLE/1200x400',
      }
    default:
      return null
  }
}

const HomePageHero = ({ backgroundImage, title, date, city }) => (
  <div
    style={{
      backgroundSize: 'cover',
      backgroundImage: `url(${backgroundImage})`,
    }}
    className="position-relative overflow-hidden p-3 p-md-5 text-center bg-light"
  >
    <div className="p-lg-7 mx-auto my-5 text-white">
      <h1 className="display-1 font-weight-bold">{title}</h1>
      <p className="lead font-weight-normal">
        {date}
        <br />
        {city}
      </p>
      <a
        href="https://goo.gl/forms/mY67O8XvQpiWSxN52"
        className="btn btn-primary"
      >
        SPEAK AT JSCAMP
      </a>
    </div>
  </div>
)

export default class Template extends React.Component {
  render() {
    const { location, children, data } = this.props
    const isHome = location.pathname === '/'
    return (
      <React.Fragment>
        <Header title={data.site.siteMetadata.title} />
        {isHome ? (
          <HomePageHero
            backgroundImage={CONFIG.images.hero}
            title={CONFIG.title}
            city={CONFIG.city}
            date={CONFIG.date}
          />
        ) : (
          <PageHeader {...getPageInfo(location.pathname)} />
        )}
        <main class="container">{children()}</main>
        <Footer title={data.site.siteMetadata.title} />
      </React.Fragment>
    )
  }
}

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
