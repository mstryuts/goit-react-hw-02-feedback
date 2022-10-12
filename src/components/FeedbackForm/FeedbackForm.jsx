import React, { Component } from 'react';

import css from '../FeedbackForm/FeedbackForm.module.css';

import Controls from '../FeedbackForm/Controls';

import Values from '../FeedbackForm/Values';

class Counter extends Component {
  static defaultProps = {
    initValue: 10000,
  };
  state = {
    value1: this.props.initValue,
    value2: 10,
    value3: 15,
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  handleClickPlus = e => {
    this.setState(prevState => ({
      value1: prevState.value1 + 1,
    }));
  };
  handleClickMinus = e => {
    this.setState(prevState => ({
      value1: prevState.value1 - 1,
    }));
  };

  render() {
    const { value1 } = this.state;
    const { value2 } = this.state;
    const { value3 } = this.state;
    // const { visible } = this.state;
    return (
      <div className={css.counter}>
        <Values value1={value1} value2={value2} value3={value3} />
        <Controls
          onPlus={this.handleClickPlus}
          onMinus={this.handleClickMinus}
          toggle={this.toggle}
          showState={this.state.visible}
        />
        {value1 === 300 && (
          <div className={css.traktorist}>отсоси у тракториста</div>
        )}

        {Math.random() > 0.4 ? (
          <div className={css.dropmenu}>ТЫ ПИДОР </div>
        ) : (
          <div className={css.dropmenu}>ТЫ не ПИДОР </div>
        )}
      </div>
    );
  }
}

export default Counter;
