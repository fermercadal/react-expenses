import "./Card.css";

const Card = (props) => {
  const classes = `expense-item ${props.className}`;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
