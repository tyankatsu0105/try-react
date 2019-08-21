import React, { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet';

import { AboutTab } from './components/AboutTab';

const About: FunctionComponent = () => (
  <>
    <Helmet>
      <title>This is About</title>
      <meta name="description" content="About desc" />
    </Helmet>
    <AboutTab />
  </>
);

export default About;
