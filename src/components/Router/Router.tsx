import React, { FC } from 'react';
import Home from '../Home/Home';
import Create from '../Create/Create';
import BlogDetails from '../BlogDetails/BlogDetails';
import { Navigate, Route, Routes} from 'react-router-dom';
import styles from './Router.module.scss';

interface RouterProps {}

const Router: FC<RouterProps> = () => (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/blogs/:id' element={<BlogDetails />} />
        <Route path="/" element={<Navigate to="/Home" />} /> {/* default route path */}
    </Routes>
);

// to install router in terminal : "npm i react-router-dom @types/react-router-dom"
export default Router;
