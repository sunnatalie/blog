import React, { FC } from 'react';
import styles from './Loader.module.scss';

interface LoaderProps {}

const Loader: FC<LoaderProps> = () => (
  <div className={styles.Loader}>
    Loading...
  </div>
);

export default Loader;
