import React from 'react'
import Link from 'gatsby-link'

const speakers = [
  {
    name: 'Peter Piekarczyk',
    title: 'Founder @ Draftbit',
    imageUrl: 'https://avatars0.githubusercontent.com/u/1211905?s=460&v=4',
    githubUrl: 'https://github.com/peterpme',
    twitterUrl: 'https://twitter.com/peterpme',
    personalUrl: 'https://peterp.me',
  },
  {
    name: 'Peter Piekarczyk',
    title: 'Founder @ Draftbit',
    imageUrl: 'https://avatars0.githubusercontent.com/u/1211905?s=460&v=4',
    githubUrl: 'https://github.com/peterpme',
    twitterUrl: 'https://twitter.com/peterpme',
    personalUrl: 'https://peterp.me',
  },
  {
    name: 'Peter Piekarczyk',
    title: 'Founder @ Draftbit',
    imageUrl: 'https://avatars0.githubusercontent.com/u/1211905?s=460&v=4',
    githubUrl: 'https://github.com/peterpme',
    twitterUrl: 'https://twitter.com/peterpme',
    personalUrl: 'https://peterp.me',
  },
  {
    name: 'Peter Piekarczyk',
    title: 'Founder @ Draftbit',
    imageUrl: 'https://avatars0.githubusercontent.com/u/1211905?s=460&v=4',
    githubUrl: 'https://github.com/peterpme',
    twitterUrl: 'https://twitter.com/peterpme',
    personalUrl: 'https://peterp.me',
  },
]

export default class AttendPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row text-center">
            {speakers.map(speaker => <Speaker {...speaker} />)}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const Speaker = ({
  name,
  title,
  description,
  imageUrl,
  githubUrl,
  twitterUrl,
  personalUrl,
}) => (
  <div className="col-lg-4">
    <img
      className="rounded-circle"
      src={imageUrl}
      alt={`Headshot of ${name}`}
      width={140}
      height={140}
    />
    <h2>{name}</h2>
    <p>{title}</p>
  </div>
)
