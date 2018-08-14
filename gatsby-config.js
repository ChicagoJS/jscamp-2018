module.exports = {
  siteMetadata: {
    title: 'JSCamp 2018',
    description: `Chicago's premier JavaScript conference September 22, 2018 featuring Node, React, Ember, Vue, Accessibility and much more.`,
    keywords: 'JavaScript, JS, Conference, Chicago JavaScript, Chicago, IL',
    siteUrl: 'https://www.chicagojs.org',
    author: 'ChicagoJS',
    twitter: 'chicago_js',
    city: 'Chicago, IL',
    date: 'September 22, 2018',
    ticketLink: 'https://ti.to/chicagojs/chicago-js-camp-2018',
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'ChicagoJS',
        short_name: 'ChicagoJS',
        display: 'standalone',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
        theme_color: '#ffffff',
        background_color: '#ffffff',
        description: `Chicago's premier JavaScript conference September 22, 2018 featuring Node, React, Ember, Vue, Accessibility and much more.`,
        homepage_url: 'https://www.chicagojs.org',
        start_url: '/',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-122479330-1',
      },
    },
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        mergeSecurityHeaders: true,
        mergeLinkHeaders: true,
        mergeCachingHeaders: true,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.chicagojs.org`,
      },
    },
    `gatsby-transformer-json`,
    'gatsby-plugin-catch-links',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-next',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-sharp',
  ],
}
