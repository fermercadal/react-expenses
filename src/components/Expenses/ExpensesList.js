import React from 'react';

import ExpenseItem from "./ExpenseItem";

import styles from "./ExpensesList.module.scss";

const ExpensesList = (props) => {
  
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

  const noItems = <p>No expenses found.</p>

  return (
    <div className={styles.expensesList}>
      {props.items.length ? expenseItems : noItems}
    </div>
  );
};

export default ExpensesList;
