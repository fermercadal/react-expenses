import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense__date">
      <div className="date__year">{year}</div>
      <span className="date__month">{month}</span>
      <span className="date__day">{day}</span>
    </div>
  );
};

export default ExpenseDate;
