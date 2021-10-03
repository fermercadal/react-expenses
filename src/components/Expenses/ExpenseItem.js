import React, { useState } from 'react';

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    console.log("Clicked");
    setTitle('Updated');
  };

  return (
    <Card>
      <ExpenseDate date={props.date} />
      <h2 className="expense__title">{title}</h2>
      <div className="expense__amount">{props.amount}</div>

      <button onClick={clickHandler}>Change name</button>
    </Card>
  );
};

export default ExpenseItem;
