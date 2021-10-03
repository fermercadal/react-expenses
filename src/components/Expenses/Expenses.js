import React, { useState } from "react";

import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";

import "./Expenses.css";

function Expenses(props) {
  const [enteredQuery, setEnteredQuery] = useState("2020");

  const setQueryHandler = (query) => {
    setEnteredQuery(query);
  };

  const expenseItems = props.items.map((expense) => {
    return (
      <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        key={expense.id}
      />
    );
  });
  return (
    <div>
      <ExpensesFilter selected={enteredQuery} onSetQuery={setQueryHandler} />
      <div className="expenses__list">{expenseItems}</div>
    </div>
  );
}

export default Expenses;
