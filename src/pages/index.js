import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Section from '../components/Section'
import ImageRow from '../components/ImageRow'

const TICKET_LINK = 'https://ti.to/chicagojs/chicago-js-camp-2018'
const CONFIG = {
  title: 'JSCamp 2018',
  date: 'September 22, 2018',
  city: 'Chicago, IL',
  images: {
    hero: 'https://source.unsplash.com/75vZiZuLHWc/1200x400',
    // hero: 'https://source.unsplash.com/-icmOdYWXuQ/1200x400',
    featured: {
      featured1: 'https://source.unsplash.com/QbD-LmFZ-uk/200x400',
      featured2: 'https://source.unsplash.com/1nashFHSKaU/200x400',
      featured3: 'https://source.unsplash.com/Ye60h3tJuU0/200x400',
    },
  },
  sponsor: {
    title: 'SPONSORSHIPS',
    description: `We're currently offering sponsorship packages for JSCamp. Contact us to learn more.`,
  },
  coc: {
    title: 'CODE OF CONDUCT',
    description:
      'We expect, and require, all organizers, sponsors, speakers, volunteers, delegates, and attendees of all levels to adhere to our Code of Conduct.',
  },
}

const cfpLink = 'https://goo.gl/forms/mY67O8XvQpiWSxN52'

export default class HomePage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Helmet
          title="JSCamp Chicago"
          description={`Chicago's first single track Javascript conference for developers`}
        />
        <Section
          text="JSCamp is a one day single track conference for developers interested in Javascript. Speakers are covering topics such as Node, React, Vue, Ember for both beginners and experts. Come check out Chicago and meet the developers you hear about online!"
          cta={() => (
            <div className="text-center">
              <a href={cfpLink} className="mr-2 btn btn-primary">
                CALL FOR PAPERS
              </a>
              <a href={TICKET_LINK} className="btn btn-primary">
                BUY TICKETS
              </a>
            </div>
          )}
        />
        <ImageRow images={Object.values(CONFIG.images.featured)} />
        <Section
          title={CONFIG.sponsor.title}
          text={CONFIG.sponsor.description}
          cta={() => (
            <div className="text-center">
              <a
                href="mailto:mike@epicfirm.com"
                className="btn btn-primary mr-3"
              >
                SPONSOR US
              </a>
            </div>
          )}
        />
        <Section
          title={CONFIG.coc.title}
          text={CONFIG.coc.description}
          cta={() => (
            <div className="text-center">
              <Link to="/code-of-conduct" className="btn btn-primary">
                CODE OF CONDUCT
              </Link>
            </div>
          )}
        />
      </React.Fragment>
    )
  }
}
