import React, { FC } from 'react';
import Navbar from './Navbar/Navbar';
import Main from './Main/Main';
import styles from './Layout.module.scss';

interface LayoutProps {}

const Layout: FC<LayoutProps> = () => (
    <div className={styles.Layout}>
        <Navbar />
        <Main />
    </div>
);

export default Layout;
