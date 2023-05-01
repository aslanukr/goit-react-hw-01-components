import PropTypes from 'prop-types';
import css from './Transaction.module.css';

export const Transaction = ({ item: { type, amount, currency } }) => {
  return (
    <>
      <td className={css.tableRow}>{type}</td>
      <td className={css.tableRow}>{amount}</td>
      <td className={css.tableRow}>{currency}</td>
    </>
  );
};

Transaction.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};
