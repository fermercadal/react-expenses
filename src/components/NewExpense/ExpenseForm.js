import React, { useState } from "react";

import globalStyles from "../Global.module.scss";
import styles from "./ExpenseForm.module.scss";

const ExpenseForm = (props) => {
  const [enableForm, setEnableForm] = useState(false);

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const toggleFormHandler = () => {
    setEnableForm((prevState) => !prevState);
  };

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <>
      {!enableForm && (
        <button className={styles.expenseForm__add} onClick={toggleFormHandler}>
          Add New
        </button>
      )}

      {enableForm && (
        <form className={styles.expenseForm} onSubmit={submitHandler}>
          <div className={styles.expenseForm__fields}>
            <div className={styles.expenseForm__field}>
              <label for="title">Title</label>
              <input
                id="title"
                type="text"
                value={enteredTitle}
                onChange={titleChangeHandler}
              />
            </div>

            <div className={styles.expenseForm__field}>
              <label for="amount">Amount</label>
              <input
                id="amount"
                type="number"
                min="0.01"
                step="0.01"
                value={enteredAmount}
                onChange={amountChangeHandler}
              />
            </div>

            <div className={styles.expenseForm__field}>
              <label for="date">Date</label>
              <input
                id="date"
                type="date"
                min="2019-01-01"
                max="2022-12-31"
                value={enteredDate}
                onChange={dateChangeHandler}
              />
            </div>
          </div>

          <div className={styles.expenseForm__actions}>
            <button className={`${globalStyles.btn} ${globalStyles["btn--secondary"]}`} onClick={toggleFormHandler}>Cancel</button>
            <button className={`${globalStyles.btn} ${globalStyles["btn--primary"]}`} type="submit">Add expense</button>
          </div>
        </form>
      )}
    </>
  );
};

export default ExpenseForm;
