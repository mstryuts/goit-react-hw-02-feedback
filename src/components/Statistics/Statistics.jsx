import css from '../Statistics/Statistics.module.css';
// import propType from 'prop-type';

const Statistics = ({ good, neutral, bad, total, percentage }) => (
  <ul className={css.statList}>
    <li className={css.statItem}>
      <p className={css.statText}>Good:{good}</p>
    </li>
    <li className={css.statItem}>
      <p className={css.statText}>Neutral:{neutral}</p>
    </li>
    <li className={css.statItem}>
      <p className={css.statText}>Bad:{bad}</p>
    </li>
    <li className={css.statItem}>
      <p className={css.statText}>Total:{total}</p>
    </li>
    <li className={css.statItem}>
      <p className={css.statText}>Positive feedback:{percentage}%</p>
    </li>
  </ul>
);

export default Statistics;
