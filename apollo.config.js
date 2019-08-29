const path = require('path');

const envPath = path.join(__dirname, `.env.${process.env.NODE_ENV}`);
require('dotenv').config({ path: envPath });

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
