import React, { useRef, useEffect } from 'react';
import { Sortable, MultiDrag } from 'sortablejs';

import './index.less';

const Config = () => {
  const sortTable = useRef<any>();

  const createSortTable = (el) => {
    new Sortable(el, {
      group: {
        name: 'shared',
        pull: 'clone',
      },
      multiDrag: true,
      selectedClass: "selected",
      sort: false,
      animation: 150,
      onEnd: (e) => {
        console.log(e);
        // onFieldEnd(e);
      },
      onMove: (e, originalEvent) => {
        console.log(e, originalEvent)
      }
    })
  }
  
  useEffect(() => {
    const leftEl = document.getElementById('left-list');
    const rightEl = document.getElementById('right-list');

    if (leftEl) {
      createSortTable(leftEl)
    }

    if (rightEl) {
      createSortTable(rightEl)
    }
  }, []);

  return (
    <div className='config'>
      <ul className='left-list' id="left-list">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
      <ul className='right-list' id="right-list">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
    </div>
  )
};

export default Config;
