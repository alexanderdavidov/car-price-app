import React from 'react';
// components
import Item from './Item/Item';
// styles
import './Items.css';

const items = (props) => {

  let flexDirection = 'column';
  let flexWrap = 'nowrap';

  if (props.type === 'card') {
    flexDirection = 'row';
    flexWrap = 'wrap';
  }

  let itemArr = props.data.data.map((el, index) => {
    return <Item
              key={index}
              type={props.type}
              index={index}
              title={el.title}
              attributes={el.attributes}
              description={el.description} />;
  });

  return (
    <div style={{flexWrap: flexWrap, flexDirection: flexDirection}} className='Items'>
      {itemArr}
    </div>
  );
};

export default items;
