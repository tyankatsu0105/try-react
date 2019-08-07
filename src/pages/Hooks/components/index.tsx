import React, { FunctionComponent } from 'react';

import { State } from '@pages/Hooks/components/State/components';
import { Effect } from '@pages/Hooks/components/Effect/components';

const Hooks: FunctionComponent = () => {
  return (
    <>
      <State />
      <Effect />
    </>
  );
};

export default Hooks;
