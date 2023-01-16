import PropTypes from "prop-types";
import { TableHistory, Thead, TrColumn, TdString } from "./TransHistory.styled";


export const TransactionHistory = ({items}) => {
   return (
    <TableHistory>
  <Thead>
    <TrColumn>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </TrColumn>
  </Thead>

  <tbody>
    {items.map(({id, type, amount, currency}) => (
        <TrColumn key={id}>
        <TdString>{type}</TdString>
        <TdString>{amount}</TdString>
        <TdString>{currency}</TdString>
        </TrColumn>
    ))} 
</tbody>
</TableHistory>
   );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

TransactionHistory.defaultProps = {
  items: [],
};