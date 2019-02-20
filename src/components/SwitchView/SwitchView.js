import React from 'react';
// components
import ListButton from '../Buttons/ListButton/ListButton';
import CardButton from '../Buttons/CardButton/CardButton';
// styles
import './SwitchView.css';


const switchView = (props) => {
  let switchViewTitleText = 'Список объектов';
  if (props.type === 'card') switchViewTitleText = 'Карточки объектов';
  return (
    <div className='SwitchView'>
      <div className='SwitchViewTitle'>{switchViewTitleText}</div>
      <div className='SwitchViewButtonsWrapper'>
        <ListButton type={props.type} onClickListButton={props.onClickListButton} />
        <CardButton type={props.type} onClickCardButton={props.onClickCardButton} />
      </div>
    </div>
  );
};

export default switchView;
