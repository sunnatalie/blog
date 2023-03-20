import React, { FC } from 'react';
import Navbar from './Navbar/Navbar';
import Main from './Main/Main';
import styles from './Layout.module.scss';
import Footer from './Footer/Footer';

interface LayoutProps {}

const Layout: FC<LayoutProps> = () => (
    <div className={styles.Layout}>
        <Navbar />
        <Main />
        <Footer />
    </div>
);

export default Layout;
