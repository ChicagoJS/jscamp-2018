import React from 'react'
import Link from 'gatsby-link'

const schedule = [
  {
    time: '7:30AM - 9:00 AM',
    title: 'Hot Breakfast, Coffee, and Registration',
  },
  {
    time: '9:00AM - 9:30AM',
    title: 'Opening Remarks by the JSConf US Curators',
  },
  {
    time: '9:30AM - 10:00AM',
    title: 'Opening Remarks by the JSConf US Curators',
  },
  {
    time: '10:00AM - 10:30AM',
    title: 'TBD',
  },
  {
    time: '10:30AM - 11:00AM',
    title: 'TBD',
  },
  {
    time: '11:00AM - 11:30AM',
    title: 'TBD',
  },
  {
    time: '11:30AM - 12:30PM',
    title: 'Lunch',
  },
  {
    time: '12:30PM - 1:00PM',
    title: 'TBD',
  },
  {
    time: '1:00PM - 1:30PM',
    title: 'TBD',
  },
  {
    time: '1:30PM - 2:00PM',
    title: 'TBD',
  },
  {
    time: '2:00PM - 2:30PM',
    title: 'TBD',
  },
  {
    time: '2:30PM - 3:00PM',
    title: 'TBD',
  },
  {
    time: '3:00PM - 3:30PM',
    title: 'TBD',
  },
  {
    time: '3:30PM - 4:00PM',
    title: 'TBD',
  },
  {
    time: '4:00PM - 4:30PM',
    title: 'TBD',
  },
  {
    time: '4:30PM - 5:00PM',
    title: 'TBD',
  },
  {
    time: '5:00PM - 5:30PM',
    title: 'TBD',
  },
  {
    time: '5:30PM - 6:00PM',
    title: 'TBD',
  },
  {
    time: '6:00PM - 6:30PM',
    title: 'Lightning Talks',
  },
  {
    time: '6:30PM - 7:00PM',
    title: 'Closing Remarks',
  },
  {
    time: '7:00PM - 11:00PM',
    title: 'Evening Dinner Party',
  },
]

export default class SchedulePage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div class="row">
          <div class="col-md-9 offset-md-2">
            <p className="lead text-primary text-center">
              Schedule will be released soon!
            </p>
            {/* schedule.map(schedule => <ScheduleRow {...schedule} />) */}
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
