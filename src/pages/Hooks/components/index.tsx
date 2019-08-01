import React, { FC } from 'react';

import { State } from '@pages/Hooks/components/State/components';
import { Effect } from '@pages/Hooks/components/Effect/components';

const Hooks: FC = () => {
  return (
    <>
      <State />
      <Effect />
    </>
  );
};

export default Hooks;
