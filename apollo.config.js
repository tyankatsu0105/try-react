require('dotenv').config();

module.exports = {
  client: {
    name: 'GitHub',
    service: {
      name: 'GitHub',
      url: 'https://api.github.com/graphql',
      headers: {
        authorization: `Bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`,
      },
    },
    includes: ['**/*.graphql'],
  },
};
