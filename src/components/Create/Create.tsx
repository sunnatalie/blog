import React, { FC } from 'react';
import styles from './Create.module.scss';

interface CreateProps {}

const Create: FC<CreateProps> = () => (
    <div className={`${styles.Create} create`}>
        <h2>Add a new blog</h2>
    </div>
);

export default Create;
