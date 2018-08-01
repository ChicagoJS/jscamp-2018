import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import get from 'lodash.get'

const AVATAR_SIZE = 60

const schedule = [
  {
    time: '8:00AM',
    title: 'Breakfast & Registration',
  },
  {
    time: '9:00AM',
    title: 'Opening Remarks by ChicagoJS Camp',
  },
  {
    time: '9:15AM',
    talkTitle: 'Data Visualization for JS Developers',
    photoUrl: 'https://i.imgur.com/n95OrJ6.jpg',
    fullName: 'Shirley Wu',
    talkDescription: '',
  },
  {
    time: '9:50AM',
    fullName: 'Brandon Willis',
    photoUrl: 'https://i.imgur.com/SILdFM0.jpg',
    talkTitle:
      'Turn your database into a fully functioning GraphQL API in just 1 line',
    talkDescription: '',
  },
  {
    time: '10:00AM',
    fullName: 'Pratik Patel',
    talkTitle: 'Applied Machine Learning in the Browser',
    talkDescription:
      "In this presentation, we'll discuss the basics of machine learning, and learn how to use pre-built ML models - right in the web browser! We'll use a pre-trained model, load it up in the browser, and build a Web application that allows us to query the IMDB dataset - all without going to a server. We'll use Tensorflow.js, take a standard HD5 Tensorflow trained model, and use it right in the web browser!",
  },
  {
    time: '10:35AM',
    fullName: 'Mercedes Bernard',
    talkTitle: 'Optimizing SEO for Single Page Applications',
    talkDescription: '',
    photoUrl:
      'https://images.ctfassets.net/kueynwv98jit/70PYtOOlhKgwG40WoicIc0/2d41abe26487b6310eff9ccc390e7a18/MerBer-circle.png',
  },
  {
    time: '10:45AM',
    title: 'Break',
  },
  {
    time: '11:15AM',
    photoUrl: 'https://i.imgur.com/iqsBgoi.jpg',
    fullName: 'Samantha Bretous',
    talkTitle: 'The Mentor I Wish I Had',
    talkDescription:
      "The first year as an engineer is scary. Is it imposter syndrome? Or is it the lack of experience? Who knows. But one thing is for certain, to be a successful junior you need a great senior. Hear my pitfalls, big wins and oops I pushed to master moments as I walk you through my first year as an engineer learning react and react native. \n\nDetails:\nHere are a of the many few topics I will go over: \nhaving a good mentorship program\ntools I didn't learn in bootcamp and now I could never live without\n- learning chrome dev tools\n- visual studio code and extensions (prettier, bracket highlighting, etc)\nthinking before coding\nreviewing pull requests\nunderstanding git when you accident push to master\ncontinuous learning \ntaking away element of learning - importance of GraphQL vs API's",
  },
  {
    time: '11:50AM',
    fullName: 'Nader Dabit',
    photoUrl: 'https://i.imgur.com/pN310K9.jpg',
    talkTitle: 'GraphQL Can do What?',
    talkDescription:
      "GraphQL has evolved from being a new and cutting edge technology to something that is widely adopted by stable & enterprise companies over the course of the past couple of years. With new tools & services like AWS AppSync, your GraphQL API can be pushed and extended into amazing realms like AR / VR, Machine Learning, Artificial Intelligence, & Geospacial Queries. In this talk, we'll look at some crazy use yet interesting & real world use cases of a bleeding edge GraphQL API, and how we can go about easily implementing this functionality today.",
  },
  {
    time: '12:00PM - 1:30PM',
    title: 'Lunch',
  },
  {
    time: '1:30PM',
    photoUrl: 'https://i.imgur.com/ImalSG2.jpg',
    fullName: 'Josh Justice',
    photoUrl: 'https://i.imgur.com/ImalSG2.jpg',
    talkTitle: 'Newbie’s Guide to Contributing to Babel',
    talkDescription:
      'Babel is a tool many JavaScript developers use to enable writing modern language features on all platforms. It’s incredibly useful, but for most of us it feels like a mysterious black box. We just drop in preset-env and we’re set! It’s great that it’s so easy to get started with Babel, but there’s also value in understanding how it works.\n\nI got to spend a week contributing to the private class fields feature for Babel that was recently released to beta. During that week, I went from knowing nothing about how Babel works to being able to fix some failing tests and implement new edge cases. As part of this process, I had to get up to speed quickly on Babel’s plugin and transformation systems. And I’d like to share what I learned with you.\n\nWe’ll go through:\n\n- What public and private class fields are, and how they work.\n- The code Babel transforms class fields into to get them to work on JavaScript engines that don’t support them—and how you can find this info in the Babel tests.\n- A brief overview of what Abstract Syntax Trees (ASTs) and transformations are, in case you aren’t familiar.\n- How the class fields transformations are implemented: the steps Babel goes through to transform your code.\n- The difference between loose and strict mode, and how strict modes reveals some details about the class fields spec.\n- How different Babel plugins interact with one another, and how it can lead to difficult-to-track bugs during plugin development.\n\nThis information will help you understand JavaScript more deeply and have greater confidence in the Babel features you’re using. And you can even apply it to writing your own personal Babel plugins, or contributing to Babel itself!',
  },
  {
    time: '2:05PM',
    photoUrl: 'https://i.imgur.com/T3OpGxi.jpg',
    fullName: 'Olivia Liddell',
    talkTitle: 'Building and Sustaining Strong Teams',
    talkDescription:
      "In this talk, you'll learn some quick strategies for how to improve your group dynamics and work more effectively as a team.",
  },
  {
    time: '2:15PM',
    photoUrl: 'https://i.imgur.com/46dvEv1.jpg',
    fullName: 'Christian Schlensker',
    talkTitle: 'Parlez-vous Javascript?',
    talkDescription:
      'The overall theme of the talk is an exploration of what makes good programming language design. What steps can be taken that eases use, predictability and understanding. I will give specific examples of « warts » in JavaScript that violate good design practices (as well as other programming languages) and discuss why it is the way it is. Additionally, for the fun absurdity of it, I will examine different spoken languages from the perspective of programming language design principles and dissect the "public API" of these languages (specifically English, French, and Japanese). \n\nTopics covered\n- Basic principles of language design\n- Why Javascript is so weird\n- Why counting in Japanese is easy?\n- What do French numbers have to do with Abe Lincoln and stoner culture?\n- HISTORY!',
  },
  {
    time: '2:50PM',
    photoUrl: 'https://avatars2.githubusercontent.com/u/2512748',
    fullName: 'Colin Ihrig',
    talkTitle: 'The State of Node Core',
    talkDescription:
      "Node.js, as a platform, is constantly changing and evolving. Node's core is a melting pot of features from our own community, as well as dependencies such as V8 and libuv. This talk will cover the latest developments in Node core, including the upcoming Node 11.",
  },
  {
    time: '3:00PM',
    title: 'Afternoon Break',
  },
  {
    time: '3:30PM',
    photoUrl:
      'https://incl.ca/wp-content/uploads/2008/04/nicsteenhout-300x300.jpg',
    fullName: 'Nic Steenhout',
    talkTitle: "Accessibility: Don't turn off that JavaScript just yet!",
    talkDescription:
      "Long gone are the days when you couldn’t use JavaScript on a site and make it work for people with disabilities. Many now even use JavaScript to increase accessibility, and not just by throwing in a couple ARIA tags. Considering accessibility when building scripts remains essential! We will look at a few ways to use JavaScript and ensure that accessibility is not only preserved, but even improved.\n\nUsed to be you couldn't use JavaScript and have an accessible site for people with disabilities. These days are long gone. You can now even use JavaScript to increase accessibility. We will look at a few ways to use JavaScript and ensure that accessibility is not only preserved, but even improved.\n\nAbstract: \n\nIt wasn’t so many years ago that some accessibility experts would turn off JavaScript to test a site and deem it inaccessible if they couldn’t use the site. Things have changed. Assistive technology, including screenreaders, have come a long way and can interact with JavaScript, if accessibility has been kept in mind. Surveys consistently show that over 97% of screenreader users have JavaScript enabled. Not to mention people with disabilities that don’t use screenreader software and also have JavaScript enabled. Planning for (and maintaining) a <noscript> solution is not going to make a page accessible.\n\nIf you develop websites or web-based applications and use JavaScript, this presentation is for you. People with disabilities account for over a billion people worldwide. That’s roughly 15% of the world population who experiences challenges on the web because they can’t see the screen, hear media files, use a mouse, concentrate for long periods of time, perceive colors, etc. This, in effect, makes people with disabilities the world’s largest minority on the web with $220 Billion in discretionary spending power in the United States alone. Much bigger and influential than any other minority. Considering the needs of this population is only wise.\n\nIn this presentation, I will talk about some of the issues that can arise from using JavaScript, and how to use it while maintaining accessibility. I will briefly discuss ARIA, but the meat of the presentation will consist of:\n\n• Event handlers,\n• Pop-up windows,\n• Page refreshes,\n• JavaScript generated content.\n\nTakeaway for the audience\n\nThe audience will gain an understanding of the impact of disabilities on using the web, beyond screenreaders, and will see some simple ways to improve the accessibility of common tasks conducted with JavaScript.",
  },
  {
    time: '4:05PM',
    talkTitle: 'JavaScript Survival Skills',
    photoUrl: 'https://8thlight.com/images/team/becca-nelson-9d7b86ca.jpg',
    fullName: 'Becca Nelson',
    talkDescription:
      'New technology fatigue is real.\n\nIn my first year and a half as a software consultant, I have worked on projects in Backbone, Angular 2, React, and Vue.js—and that’s just the JavaScript frameworks. I have worked on front-end code and back-end code with dozens of different testing frameworks, libraries, and build tools. Needless to say, I am exhausted.\n\nI know I am not alone in this, because the JavaScript world is always changing. Life as a perpetual beginner is both exciting and daunting, and it can supercharge imposter syndrome, especially for those of us who are new to the industry. In order to save us all, I have explored a few strategies for surviving the world of front-end development as a consultant, a beginner, or a frequent context-switcher. Let’s talk about some of the pros and cons of micro architecture, web components, and framework-agnostic design patterns.',
  },
  {
    time: '4:15PM',
    title: 'TBD',
    fullName: 'Evan Bacon',
    photoUrl: 'https://i.imgur.com/353phgH.jpg',
    talkTitle: 'The Future of AR & VR in React Native',
    talkDescription: '',
  },
  {
    time: '4:45PM',
    fullName: 'Josh Beckman',
    photoUrl: 'http://www.andjosh.com/images/page/mustache.jpg',
    talkTitle: 'Dynamically Upgrading Long-Running App Sessions',
    talkDescription:
      'Do you have a client-side JavaScript app that has long-running user sessions? How can you deliver them a new app version without breaking their session?\nWe have users that stay on our JS app for days or weeks at a time and needed a way to continuously deliver new app versions. This talk will quickly detail our tried and tested methods for delivering new app bundles at just the right time!',
  },
  {
    time: '5:00PM',
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
        {schedule.map(schedule => <ScheduleRow {...schedule} />)}
      </React.Fragment>
    )
  }
}

const ScheduleRow = ({
  time,
  title,
  talkTitle,
  talkDescription,
  fullName,
  photoUrl,
}) => (
  <div className="row border-bottom border-bottom-1 pt-4 pb-4">
    <div className="col-md-2">
      <p className="font-weight-bold text-primary">{time}</p>
    </div>
    <div className="col-md-2">
      {photoUrl && (
        <img
          src={photoUrl}
          alt={fullName}
          width={AVATAR_SIZE}
          height={AVATAR_SIZE}
          style={{
            marginBottom: 0,
            paddingBottom: 0,
            width: AVATAR_SIZE,
            height: AVATAR_SIZE,
            borderRadius: AVATAR_SIZE / 2,
          }}
        />
      )}
    </div>
    <div className="col-md-7">
      {fullName && (
        <span
          style={{ display: 'block' }}
          className="text-secondary font-weight-bold mb-2"
        >
          {fullName}
        </span>
      )}
      <h2 style={{ margin: 0 }} className="text-primary">
        {title || talkTitle}
      </h2>
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
