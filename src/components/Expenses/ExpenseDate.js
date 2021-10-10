import React from "react";

import styles from "./ExpenseDate.module.scss";

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className={styles.expenseDate}>
      {`${year}, ${month} ${day}.`}
    </div>
  );
};

export default ExpenseDate;
