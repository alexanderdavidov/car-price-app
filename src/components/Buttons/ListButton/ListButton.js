import React from 'react';
// styles
import './ListButton.css';

const listButton = (props) => {
  let color = '#FFF';
  if (props.type === 'list') color = '#d7ffe6';
  return (
    <div className='ListButton' onClick={props.onClickListButton}>
      <svg width='40' height='40' viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'>
        <g id='List' fill='none' fillRule='evenodd'>
          <rect rx='50' ry='50' fill={color} width='300' height='300' />
          <g id='Group' transform='translate(78 78)' fill='#38B86F'>
            <rect id='Rectangle' width='145' height='35' rx='5' />
            <rect id='Rectangle' y='55' width='145' height='35' rx='5' />
            <rect id='Rectangle' y='110' width='145' height='35' rx='5' />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default listButton;
