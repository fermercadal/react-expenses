import React from "react";

import styles from "./ExpensesFilter.module.scss";

const ExpensesFilter = (props) => {
  const queryChangeHandler = (event) => {
    props.onSetQuery(event.target.value);
  };

  return (
    <div className={styles.expensesFilter}>
      <label htmlFor="expensesFilter">Filter by year</label>
      <select
        id="expensesFilter"
        value={props.selected}
        onChange={queryChangeHandler}
      >
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select>
    </div>
  );
};

export default ExpensesFilter;
