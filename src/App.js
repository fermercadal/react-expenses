import React, { useState } from "react";

import AppHeader from "./components/UI/AppHeader";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

import styles from "./App.module.scss";

function App() {
  const DUMMY_EXPENSES = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450.4,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className={styles.reactExpenses}>
      <AppHeader>
        <h1>ReactExpenses</h1>
        <p>Yet another boring expenses tracking app.</p>
      </AppHeader>
      <Expenses items={expenses} />
      <NewExpense onAddExpense={addExpenseHandler} />
    </div>
  );
}

export default App;
