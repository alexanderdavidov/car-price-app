import React from 'react';
// styles
import './TopButtonsMenu.css';

const topButtonsMenu = (props) => {
  return (
    <div className='TopButtonsMenu'>
      <button onClick={props.onClickCopyLastToStart}>Добавить в начало</button>
      <button onClick={props.onClickCopyFirstToEnd}>Добавить в конец</button>
      <button onClick={props.onClickDeleteFirst}>Удалить первый</button>
      <button onClick={props.onClickDeleteLast}>Удалить последний</button>
    </div>
  );
};

export default topButtonsMenu;
