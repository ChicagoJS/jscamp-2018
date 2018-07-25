import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import get from 'lodash.get'

const schedule = [
  {
    time: '8:00AM - 9:00AM',
    title: 'Breakfast & Registration',
  },
  {
    time: '9:00AM - 9:15AM',
    title: 'Opening Remarks by ChicagoJS Camp',
  },
  {
    time: '9:15AM - 10:00AM',
    title: 'TBD',
  },
  {
    time: '10:00AM - 10:45AM',
    title: 'TBD',
  },
  {
    time: '10:45AM - 11:15AM',
    title: 'Break',
  },
  {
    time: '11:15AM - 12:00AM',
    title: 'TBD',
  },
  {
    time: '12:00PM - 1:30PM',
    title: 'Lunch',
  },
  {
    time: '1:30PM - 2:15PM',
    title: 'TBD',
  },
  {
    time: '2:15PM - 3:30PM',
    title: 'TBD',
  },
  {
    time: '3:00PM - 3:30PM',
    title: 'Afternoon Break',
  },
  {
    time: '3:30PM - 4:15PM',
    title: 'TBD',
  },
  {
    time: '4:15PM - 5:00PM',
    title: 'TBD',
  },
  {
    time: '5:00PM - 5:15PM',
    title: 'Closing Remarks by ChicagoJS Camp',
  },
  {
    time: '6:30PM',
    title: 'Evening After Party',
  },
]

export default class SchedulePage extends React.Component {
  render() {
    const siteMetadata = get(this.props, 'data.site.siteMetadata', {})
    return (
      <React.Fragment>
        <Helmet title={`${siteMetadata.title} | Schedule`} />
        <div class="row">
          <div class="col-md-9 offset-md-2">
            {schedule.map(schedule => <ScheduleRow {...schedule} />)}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const ScheduleRow = ({ time, title }) => (
  <div className="row p-2 border-bottom border-bottom-1 mt-4 mb-2">
    <div className="col-md-5">
      <p className="font-weight-bold text-primary">{time}</p>
    </div>
    <div className="col-md-7">
      <p>{title}</p>
    </div>
  </div>
)

export const pageQuery = graphql`
  query ScheduleQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
  }
`
