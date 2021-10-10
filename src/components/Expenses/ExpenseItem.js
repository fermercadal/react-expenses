import React from "react";

import ExpenseDate from "./ExpenseDate";

import styles from "./ExpenseItem.module.scss";

const ExpenseItem = (props) => {
  return (
    <article className={styles.expenseItem}>
      <ExpenseDate date={props.date} />
      <h2 className={styles.expenseItem__title}>{props.title}</h2>
      <div className={styles.expenseItem__amount}>{props.amount}</div>
    </article>
  );
};

export default ExpenseItem;
