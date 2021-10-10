import React, { useState } from "react";

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
      {!enableForm && <button className={styles.expenseForm__button} onClick={toggleFormHandler}>Add New</button>}

      {enableForm && (
        <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                type="text"
                value={enteredTitle}
                onChange={titleChangeHandler}
              />
            </div>

            <div className="new-expense__control">
              <label>Amount:</label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                value={enteredAmount}
                onChange={amountChangeHandler}
              />
            </div>

            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                min="2019-01-01"
                max="2022-12-31"
                value={enteredDate}
                onChange={dateChangeHandler}
              />
            </div>
          </div>

          <div className="new-expense__actions">
            <button type="submit">Add expense</button>
          </div>

          <button onClick={toggleFormHandler}>Cancel</button>
        </form>
      )}
    </>
  );
};

export default ExpenseForm;
