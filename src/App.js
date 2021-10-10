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
      date: new Date(2021, 3, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450.4,
      date: new Date(2021, 5, 12),
    },
    {
      id: "e5",
      title: "Mouse",
      amount: 34.56,
      date: new Date(2020, 8, 8),
    },
    { id: "e6", title: "Keyboard", amount: 99.49, date: new Date(2021, 9, 2) },
    {
      id: "e7",
      title: "T-Shirt",
      amount: 24.67,
      date: new Date(2021, 1, 3),
    },
    {
      id: "e8",
      title: "Another book",
      amount: 50.4,
      date: new Date(2021, 9, 24),
    },
    {
      id: "e9",
      title: "Food",
      amount: 4.32,
      date: new Date(2020, 11, 14),
    },
    {
      id: "e10",
      title: "Computer",
      amount: 999.99,
      date: new Date(2021, 12, 24),
    },
    {
      id: "e11",
      title: "Cofee",
      amount: 12.34,
      date: new Date(2021, 6, 2),
    },
    {
      id: "e12",
      title: "Basket Ball",
      amount: 49.99,
      date: new Date(2021, 4, 23),
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
