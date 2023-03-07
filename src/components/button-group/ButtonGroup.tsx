import React from 'react';

import { Props } from './ButtonGroup.interface';

import styles from './ButtonGroup.module.scss';

export default ({
  children,
  className,
  block,
  reverse,
  toolbar,
  column,
}: Props): JSX.Element => {
  const blockClass = block !== undefined ? styles.buttonGroup___block : '';
  const reverseClass =
    reverse !== undefined ? styles.buttonGroup___reverse : '';
  const toolbarClass =
    toolbar !== undefined ? styles.buttonGroup___toolbar : '';
  const columnClass = column !== undefined ? styles.buttonGroup___column : '';

  return (
    <div
      className={`${styles.buttonGroup} ${
        className ? className : ''
      } ${blockClass} ${columnClass} ${reverseClass} ${toolbarClass}`}
    >
      {children}
    </div>
  );
};
