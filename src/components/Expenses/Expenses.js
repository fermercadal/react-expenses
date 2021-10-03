import React, { useState } from "react";

import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";

import "./Expenses.css";

function Expenses(props) {
  const [enteredQuery, setEnteredQuery] = useState("2021");

  const setQueryHandler = (query) => {
    setEnteredQuery(query);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === enteredQuery;
  });

  const expenseItems = filteredExpenses.map((expense) => {
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
