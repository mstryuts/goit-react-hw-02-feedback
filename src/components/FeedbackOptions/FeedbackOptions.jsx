import css from '../FeedbackOptions/FeedbackOptions.module.css';

const FeedbackOptions = ({
  onClickGood,
  handleClickNeutral,
  handleClickBad,
}) => (
  <ul className={css.btnList}>
    <li className={css.btnItem}>
      <button className={css.btn} onClick={onClickGood}>
        Good
      </button>
    </li>
    <li className={css.btnItem}>
      <button className={css.btn} onClick={handleClickNeutral}>
        Neutral
      </button>
    </li>
    <li className={css.btnItem}>
      <button className={css.btn} onClick={handleClickBad}>
        Bad
      </button>
    </li>
  </ul>
);

export default FeedbackOptions;
