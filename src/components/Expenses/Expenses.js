import React, { useState } from "react";

import AppSection from "../UI/AppSection";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [enteredQuery, setEnteredQuery] = useState("2021");

  const setQueryHandler = (query) => {
    setEnteredQuery(query);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === enteredQuery;
  });

  return (
    <>
      <AppSection>
        <ExpensesFilter selected={enteredQuery} onSetQuery={setQueryHandler} />
        <ExpensesList items={filteredExpenses} />
      </AppSection>

      <AppSection>
        <ExpensesChart expenses={filteredExpenses} />
      </AppSection>
    </>
  );
}

export default Expenses;
