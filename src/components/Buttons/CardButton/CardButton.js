import React from 'react';
// styles
import './CardButton.css';

const cardButton = (props) => {
  let color = '#FFF';
  if (props.type === 'card') color = '#d7ffe6';
  return (
    <div className='CardButton' onClick={props.onClickCardButton}>
      <svg width='40' height='40' viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'>
        <g id='Card' fill='none' fillRule='evenodd'>
          <rect rx='50' ry='50' fill={color} width='300' height='300' />
          <g id='Group-2' transform='translate(78 78)' fill='#38B86F'>
            <g id='Group'>
              <rect id='Rectangle' width='35' height='35' rx='5' />
              <rect id='Rectangle' y='55' width='35' height='35' rx='5' />
              <rect id='Rectangle' y='110' width='35' height='35' rx='5' />
            </g>
            <g id='Group' transform='translate(55)'>
              <rect id='Rectangle' width='35' height='35' rx='5' />
              <rect id='Rectangle' y='55' width='35' height='35' rx='5' />
              <rect id='Rectangle' y='110' width='35' height='35' rx='5' />
            </g>
            <g id='Group' transform='translate(110)'>
              <rect id='Rectangle' width='35' height='35' rx='5' />
              <rect id='Rectangle' y='55' width='35' height='35' rx='5' />
              <rect id='Rectangle' y='110' width='35' height='35' rx='5' />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default cardButton;
