import React from 'react';

import styles from "./AppHeader.module.scss";
 
const AppHeader = (props) => {
  const classes = `${styles.appHeader} ${props.className}`;
  return <header className={classes}>{props.children}</header>;
};

export default AppHeader;
