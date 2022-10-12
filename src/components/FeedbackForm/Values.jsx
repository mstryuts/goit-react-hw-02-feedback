import React from 'react';
import css from '../FeedbackForm/Values.module.css';

const Values = ({ value1, value2, value3 }) => {
  return (
    <div className={css.values}>
      <span className={css.value}>{value1}</span>
      <span className={css.value}>{value2}</span>
      <span className={css.value}>{value3}</span>
    </div>
  );
};

export default Values;
