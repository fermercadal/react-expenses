import React, { useState } from "react";

import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

import "./Expenses.css";

function Expenses(props) {
  const [enteredQuery, setEnteredQuery] = useState("2021");

  const setQueryHandler = (query) => {
    setEnteredQuery(query);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === enteredQuery;
  });

  return (
    <div>
      <ExpensesFilter selected={enteredQuery} onSetQuery={setQueryHandler} />
      <ExpensesList items={filteredExpenses} />
    </div>
  );
}

export default Expenses;
