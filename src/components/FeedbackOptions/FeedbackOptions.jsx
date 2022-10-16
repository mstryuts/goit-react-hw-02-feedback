import css from '../FeedbackOptions/FeedbackOptions.module.css';
import PropTypes from 'prop-types';

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

FeedbackOptions.propTypes = {
  onClickGood: PropTypes.func.isRequired,
  handleClickNeutral: PropTypes.func.isRequired,
  handleClickBad: PropTypes.func.isRequired,
};
