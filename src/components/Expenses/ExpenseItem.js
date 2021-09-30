import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';

import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <Card>
      <ExpenseDate date={props.date} />
      <h2 className="expense__title">{props.title}</h2>
      <div className="expense__amount">{props.amount}</div>
    </Card>
  );
}

export default ExpenseItem;
