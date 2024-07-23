import React, { useRef, useEffect } from 'react';
import Config from './components/Config';
import FieldList from './components/FieldList';

import './index.less';

const SortablePro = () => {

  return (
    <div className='sortable-pro'>
      <FieldList></FieldList>
      <Config></Config>
    </div>
  )
};

export default SortablePro;
