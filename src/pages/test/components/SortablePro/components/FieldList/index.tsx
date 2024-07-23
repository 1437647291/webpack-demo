import React, { useEffect } from 'react';
import { Sortable, MultiDrag } from 'sortablejs';

import './index.less';

Sortable.mount(new MultiDrag());

const FieldList = () => {
  useEffect(() => {
    const el = document.getElementById('field-list');
    if (el) {
      console.log('zhixing')
      new Sortable(el, {
        group: {
          name: 'shared',
          pull: 'clone',
          put: false,
        },
        multiDrag: true,
        selectedClass: "selected",
        sort: false,
        animation: 150,
        onEnd: (e) => {
          console.log(e);
        },
        onMove: (e, originalEvent) => {
          console.log(e, originalEvent)
        }
      })
    }
  }, []);
  return (
    <ul className='field-list' id="field-list">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
  )
};

export default FieldList;
