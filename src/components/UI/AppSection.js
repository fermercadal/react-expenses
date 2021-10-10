import React from 'react';

import styles from "./AppSection.module.scss";
 
const AppSection = (props) => {
  const classes = `${styles.appSection} ${props.className}`;
  return <section className={classes}>{props.children}</section>;
};

export default AppSection;
