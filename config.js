const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://picksy.redq.now.sh',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://s3.amazonaws.com/redqteam.com/picksy/assets/thumb.png',
    logoLink: '/',
    title: 'Picksy Documentation',
    githubUrl: '',
    helpUrl: '',
    tweetText: '',
    social: ``,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/installation',
      '/deployment',
      '/automatic-build',
      '/gatsby-configjs',
      '/gatsby-nodejs',
      '/home-page',
      '/search',
      '/cart',
      '/checkout',
      '/order',
    ],
    collapsedNav: [
      '/codeblock', // add trailing slash if enabled above
    ],
    links: [{ text: 'Picksy', link: 'https://picksy.redq.now.sh' }],
    frontline: false,
    ignoreIndex: true,
    title: '',
  },
  siteMetadata: {
    title: 'Picksy Documentation | Redq, Inc',
    description: 'Documentation built with love',
    ogImage: null,
    docsLocation: 'https://github.com/redq/picksy',
    favicon: 'https://s3.amazonaws.com/redqteam.com/picksy/assets/thumb.png',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
