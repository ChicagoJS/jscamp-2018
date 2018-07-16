import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import get from 'lodash.get'
import PageHeader from './'

const sponsors = [
  // {
  //   title: 'Platinum Sponsors',
  //   width: 340,
  //   items: [
  //     {
  //       imageUrl:
  //         'https://infinite.red/thesis/files/8rjpmbit4b-platinumsquarespace2x.png',
  //     },
  //   ],
  // },
  // {
  //   title: 'Gold Sponsors',
  //   width: 300,
  //   items: [
  //     {
  //       imageUrl:
  //         'https://infinite.red/thesis/files/8rjpmbit4b-platinumsquarespace2x.png',
  //     },
  //     {
  //       imageUrl:
  //         'https://infinite.red/thesis/files/5ybzzpvoty-goldformidable2x.png',
  //     },
  //     {
  //       imageUrl:
  //         'https://infinite.red/thesis/files/nttpeelzbv-goldamazonaws2x.png',
  //     },
  //   ],
  // },
  // {
  //   title: 'Silver Sponsors',
  //   width: 270,
  //   items: [
  //     {
  //       imageUrl:
  //         'https://infinite.red/thesis/files/8rjpmbit4b-platinumsquarespace2x.png',
  //     },
  //   ],
  // },
  // {
  //   title: 'Bronze Sponsors',
  //   width: 200,
  //   items: [
  //     {
  //       imageUrl:
  //         'https://infinite.red/thesis/files/8rjpmbit4b-platinumsquarespace2x.png',
  //     },
  //   ],
  // },
  // {
  //   title: 'Additional Sponsors',
  //   width: 140,
  //   items: [
  //     {
  //       imageUrl:
  //         'https://infinite.red/thesis/files/8rjpmbit4b-platinumsquarespace2x.png',
  //     },
  //     {
  //       imageUrl:
  //         'https://infinite.red/thesis/files/frpmqvgf5z-silvercallstack2x.png',
  //     },
  //     {
  //       imageUrl:
  //         'https://infinite.red/thesis/files/lbprytgdl7-silverbuilderx2x.png',
  //     },
  //   ],
  // },
]

export default class SponsorshipPage extends React.Component {
  render() {
    const siteMetadata = get(this.props, 'data.site.siteMetadata', {})
    return (
      <React.Fragment>
        <Helmet title={`${siteMetadata.title} | Sponsors`} />
        <div className="container">
          <h1 className="text-primary text-center">
            Sponsor {siteMetadata.title}
          </h1>
          <br />
          <p>
            At {siteMetadata.title}, the best JS programmers will gather for a
            one track, one day conference that will showcase the future of
            JavaScript and we want you there as a sponsor!
          </p>
          <p>
            There are no booths, no exhibit halls and we encourage you to send
            your best technical talent. We focus the sponsorships on creating
            amazing shared experiences which have a far broader and longer
            lasting effects for you and our attendees.
          </p>
          <p>
            Whether your goal is brand exposure, recruiting, product launch, or
            something else, we have a sponsorship opportunity for you.
          </p>
          <div className="text-center mb-5">
            <a href="mailto:mike@epicfirm.com" className="btn btn-primary">
              Sponsor Us
            </a>
          </div>
        </div>
        {sponsors.length > 0 && (
          <h1 className="text-primary text-center">Our Sponsors</h1>
        )}
        <br />
        {sponsors.length > 0 &&
          sponsors.map(sponsor => <SponsorRow {...sponsor} />)}
      </React.Fragment>
    )
  }
}

const SponsorRow = ({ title, items, width }) => (
  <div className="p2 border-bottom border-bottom-1 mt-4 mb-2">
    <p className="font-weight-bold text-primary">{title}</p>
    <div>
      {items.map(item => (
        <a href="#">
          <img
            className="d-inline-block px-2"
            width={width}
            src={item.imageUrl}
          />
        </a>
      ))}
    </div>
  </div>
)

export const query = graphql`
  query SponsorQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
