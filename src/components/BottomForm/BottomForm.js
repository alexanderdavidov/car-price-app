import React from 'react';
// styles
import './BottomForm.css';

const bottomForm = (props) => {
  let borderStyleTitle = '1px solid #ffffff';
  let borderStyleAttributes = '1px solid #ffffff';
  let borderStyleDescription = '1px solid #ffffff';

  if (props.check.title === false) {
    borderStyleTitle = '1px solid #B32F48';
  }

  if (props.check.attributes === false) {
    borderStyleAttributes = '1px solid #B32F48';
  }

  if (props.check.description === false) {
    borderStyleDescription = '1px solid #B32F48';
  }


  return (
    <div className='Wrapper'>
      <div className='BottomFormTitle'>Добавить новый объект</div>
      <form className='BottomForm'>
        <label>
          Заголовок *
          <br />
          <input
            style={{border: borderStyleTitle}}
            onChange={props.onChangeTitle}
            value={props.titleValue}
            type="text"
            placeholder='Заголовок не более 50 символов' />
        </label>
        <label>
          Пункты
          <br />
          <input
            style={{border: borderStyleAttributes}}
            onChange={props.onChangeAttributes}
            value={props.attributesValue}
            type="text"
            placeholder='Не более 7 пунктов. Добавьте пункты через запятую. Не более 200 символов на все пункты.'/>
        </label>
        <label>
          Описание
          <br />
          <input
            style={{border: borderStyleDescription}}
            onChange={props.onChangeDescription}
            value={props.descriptionValue}
            type="text"
            placeholder='Описание не более 200 символов'/>
        </label>
        <button onClick={props.onClickAdd}>Добавить</button>
      </form>
    </div>
  );
};

export default bottomForm;
