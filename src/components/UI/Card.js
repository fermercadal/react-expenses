import React from 'react';

const Card = (props) => {
  const classes = `expenses__card ${props.className}`;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
