import React from 'react'
import cloudinaryUrl from 'cloudinary-microurl'
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
  {
    title: 'Gold Sponsors',
    width: 300,
    items: [
      {
        name: 'Accenture Interactive',
        cloudinary: 'Accenture',
      },
      {
        name: 'Cars.Com',
        cloudinary: 'CarsDotCom',
      },
      {
        name: 'Server Central',
        cloudinary: 'ServerCentral',
      },
      {
        name: 'Turing Group',
        cloudinary: 'TuringGroup',
      },
    ],
  },
  {
    title: 'Silver Sponsors',
    width: 270,
    items: [
      {
        name: 'Fraight AI',
        cloudinary: 'FraightAi',
        url:
          'https://res.cloudinary.com/chicagojs/image/upload/co_rgb:000000,e_colorize:100,f_auto,w_270/v1537038153/2018Sponsors/FraightAI.png',
        options: {
          co_rgb: '000000',
          e_colorize: '100',
        },
      },
      {
        name: 'One North',
        cloudinary: 'OneNorth',
        url:
          'https://res.cloudinary.com/chicagojs/image/upload/co_rgb:000000,e_colorize:100,f_auto,w_270/v1537038153/2018Sponsors/OneNorth.png',
        options: {
          co_rgb: '000000',
          e_colorize: '100',
        },
      },
      {
        name: 'Braintree',
        cloudinary: 'Braintree',
      },
      {
        name: 'Fly IO',
        cloudinary: 'Fly',
      },
      {
        name: 'Active Campaign',
        cloudinary: 'ActiveCampaign',
      },
      {
        name: 'Quik Order',
        cloudinary: 'QuikOrder',
      },
      {
        name: 'Hash Rocket',
        cloudinary: 'HashRocket',
      },
      {
        name: 'Dragon Spears',
        cloudinary: 'DragonSpears',
      },
      {
        name: 'Draftbit',
        url:
          'https://res.cloudinary.com/chicagojs/image/upload/co_rgb:000000,e_colorize:100,f_auto,w_270/v1537038153/2018Sponsors/Draftbit.png',
        cloudinary: 'Draftbit',
      },
      {
        name: 'Next Capital',
        cloudinary: 'NextCapital',
      },
    ],
  },
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
            <a
              href="http://bit.ly/JSCamp2018Sponsor"
              className="btn btn-primary"
            >
              Sponsor Us
            </a>
            <br />
            <br />
            <a
              href="https://drive.google.com/file/d/1KT2oN9REmW0T-FrSUmePLDWOnoXsrb_0/view?usp=sharing"
              className="btn btn-primary"
            >
              Sponsor Prospectus
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

const buildCloudinaryUrl = ({ name, width, url, ...rest }) => {
  if (url) return url
  return cloudinaryUrl(`/2018Sponsors/${name}`, {
    secure: true,
    cloud_name: 'chicagojs',
    quality: 80,
    format: 'auto',
    crop: 'fill',
    width,
    ...rest,
  })
}

const SponsorRow = ({ title, items, width }) => (
  <div className="p2 border-bottom border-bottom-1 mt-4 mb-2">
    <h2 className="font-weight-bold text-primary">{title}</h2>
    <div>
      {items.map(item => (
        <img
          className="d-inline-block px-2"
          width={width}
          src={buildCloudinaryUrl({
            url: item.url,
            name: item.cloudinary,
            width,
            options: item.options,
          })}
          alt={item.name}
        />
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
