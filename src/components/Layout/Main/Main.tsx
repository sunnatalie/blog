import React, { FC } from 'react';
import Router from '../../Router/Router';
import styles from './Main.module.scss';

interface MainProps {}

const Main: FC<MainProps> = () => (
    <main className={styles.Main}>
        <Router />
    </main>
);

export default Main;
