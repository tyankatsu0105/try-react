import React, { FC, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import '@styles/animations/fade.scss';

const Contents: FC = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <CSSTransition in={isShow} timeout={200} classNames="fade">
        <p>show text</p>
      </CSSTransition>
      <button type="button" onClick={() => setIsShow(true)}>
        show
      </button>
      <button type="button" onClick={() => setIsShow(false)}>
        hide
      </button>
    </>
  );
};

export default Contents;
