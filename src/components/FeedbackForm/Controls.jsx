import React from 'react';
import css from '../FeedbackForm/Controls.module.css';

const Controls = ({ onPlus, onMinus, toggle, showState }) => (
  <div className={css.controls}>
    <button type="button" className={css.btn} onClick={onPlus}>
      +
    </button>
    <button type="button" className={css.btn} onClick={toggle}>
      {showState ? '=)' : '=('}
    </button>
    <button type="button" className={css.btn} onClick={onMinus}>
      -
    </button>
  </div>
);

export default Controls;
