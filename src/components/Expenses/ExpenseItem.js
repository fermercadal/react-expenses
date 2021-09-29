import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';

import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <Card>
      <h2>{props.title}</h2>
      <ExpenseDate date={props.date} />
      <div>{props.amount}</div>
    </Card>
  );
}

export default ExpenseItem;
