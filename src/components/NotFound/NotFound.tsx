import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NotFound.module.scss';

interface NotFoundProps {}

const NotFound: FC<NotFoundProps> = () => (
    <div className={`${styles.NotFound} not-found`}>
        <h2>Sorry</h2>
        <p>That page cannot be found</p>
        <NavLink to="/">Back to the homepage...</NavLink>
    </div>
);

export default NotFound;
