import React from 'react';
// styles
import './Item.css';

const item = (props) => {

  let margin = '0 10px 0 0';
  let flexDirection = 'row';
  let textAlignIndex = 'left';
  let width = '100%';
  let height = 'auto';

  if (props.type === 'card') {
    margin = '0';
    flexDirection = 'column';
    textAlignIndex = 'right';
    width = '30%';
    height = '400px';
  }

  let arrAttributes = props.attributes.map((el,index) => {
    return <div key={index} style={{margin: margin}} className='Attributes'>{el}</div>;
  });

  return (
    <div style={{width: width, height: height}} className='Item'>
      <div style={{textAlign: textAlignIndex}} className='Index'>{props.index + 1}</div>
      <div className='Title'>{props.title}</div>
      <div style={{display: 'flex', flexDirection: flexDirection}}>
        {arrAttributes}
      </div>
      <div className='Description'>{props.description}</div>
    </div>
  );
};

export default item;
