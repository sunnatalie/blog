import React, { FC } from 'react';
import styles from './Footer.module.scss';

interface FooterProps {}

const Footer: FC<FooterProps> = () => (
  <footer className={styles.Footer}>
    Made by Natalie Sun ©
  </footer>
);

export default Footer;
