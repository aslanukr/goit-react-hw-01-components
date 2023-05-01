import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';
import { Transaction } from './Transaction/Transaction';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionTable}>
      <thead className={css.tableHeader}>
        <tr>
          <th className={css.tableColumn}>Type</th>
          <th className={css.tableColumn}>Amount</th>
          <th className={css.tableColumn}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <Transaction item={item} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
