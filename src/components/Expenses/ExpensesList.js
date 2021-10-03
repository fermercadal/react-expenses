import React from 'react';

import ExpenseItem from "./ExpenseItem";

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
    <div className="expenses__list">
      {props.items.length ? expenseItems : noItems}
    </div>
  );
};

export default ExpensesList;
