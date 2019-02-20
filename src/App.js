import React, { Component } from 'react';
// components
import TopButtonsMenu from './components/TopButtonsMenu/TopButtonsMenu';
import SwitchView from './components/SwitchView/SwitchView';
import Items from './components/Items/Items';
import BottomForm from './components/BottomForm/BottomForm';

// data
import dataObj from './data/data';
// styles
import './App.css';

class App extends Component {

  state = {
    check: {
      title: true,
      attributes: true,
      description: true
    },
    data: {...dataObj},
    type: 'list',
    currentItem: {
      title: '',
      attributes: '',
      description: ''
    }
  }

  handlerListButton = () => {
    this.setState({type: 'list'});
  }

  handlerCardButton = () => {
    this.setState({type: 'card'});
  }

  handlerInput(code, e) {
    let currentItem = {...this.state.currentItem};
    currentItem[code] = e.target.value;
    this.setState({
      currentItem: currentItem
    });
  }

  handlerTitle = (e) => {
    this.handlerInput('title', e);
  }

  handlerAttributes = (e) => {
    this.handlerInput('attributes', e);
  }

  handlerDescription = (e) => {
    this.handlerInput('description', e);
  }

  handlerAdd = (e) => {
    e.preventDefault();
    let currentItem = {...this.state.currentItem};
    let data = {...this.state.data};
    let check = {...this.state.check};
    let newTitle = currentItem.title;
    let newAttributes = (currentItem.attributes).replace(/\s/g, "");
    let newDescription = currentItem.description;
    let newObj = {};

    let setFalseToCheck = (code) => {
      check[code] = false;
      this.setState({
        check: check
      });
    }

    let setTrueToCheck = (code) => {
      check[code] = true;
      this.setState({
        check: check
      });
    }

    if (newTitle.length > 50 || newTitle.length === 0) {
      setFalseToCheck('title');
    } else {
      setTrueToCheck('title');
    }

    if (newDescription.length > 200) {
      setFalseToCheck('description');
    } else {
      setTrueToCheck('description');
    }

    let attributesArr = newAttributes.split(',');
    attributesArr = attributesArr.filter(el => el.length > 0);

    if (newAttributes.length > 200 || attributesArr.length > 7) {
      setFalseToCheck('attributes');
    } else {
      setTrueToCheck('attributes');
    }

    if (newTitle.length <= 50 &&
        newTitle.length !== 0 &&
        newDescription.length <= 200 &&
        newAttributes.length <= 200 &&
        attributesArr.length <= 7) {
      newObj.title = newTitle;
      newObj.description = newDescription;
      newObj.attributes = attributesArr;
      data.data.push(newObj);
      this.setState({
        data: data,
        currentItem: {
          title: '',
          attributes: '',
          description: ''
        }
      });
    }
  }


  handlerCopyLastToStart = () => {
    let data = {...this.state.data};
    if (data.data.length > 0) {
      let lastElement = data.data[data.data.length - 1];
      data.data.unshift(lastElement);
      this.setState({
        data: data
      });
    }
  }

  handlerCopyFirstToEnd = () => {
    let data = {...this.state.data};
    if (data.data.length > 0) {
      let firstElement = data.data[0];
      data.data.push(firstElement);
      this.setState({
        data: data
      });
    }
  }

  handlerDeleteFirst = () => {
    let data = {...this.state.data};
    if (data.data.length > 0) {
      data.data.shift();
      this.setState({
        data: data
      });
    }
  }

  handlerDeleteLast = () => {
    let data = {...this.state.data};
    if (data.data.length > 0) {
      data.data.pop();
      this.setState({
        data: data
      });
    }
  }

  render() {
    return (
      <div className="App">
        <TopButtonsMenu
          onClickDeleteLast={this.handlerDeleteLast}
          onClickDeleteFirst={this.handlerDeleteFirst}
          onClickCopyFirstToEnd={this.handlerCopyFirstToEnd}
          onClickCopyLastToStart={this.handlerCopyLastToStart} />
        <SwitchView
          type={this.state.type}
          onClickListButton={this.handlerListButton}
          onClickCardButton={this.handlerCardButton} />
        <Items data={this.state.data} type={this.state.type} />
        <BottomForm
          check={this.state.check}
          titleValue={this.state.currentItem.title}
          attributesValue={this.state.currentItem.attributes}
          descriptionValue={this.state.currentItem.description}
          onClickAdd={this.handlerAdd}
          onChangeTitle={this.handlerTitle}
          onChangeAttributes={this.handlerAttributes}
          onChangeDescription={this.handlerDescription} />
      </div>
    );
  }
}

export default App;
