import React, { FC } from 'react';
import Home from '../HomePage/Home';
import Create from '../CreatePage/Create';
import BlogDetails from '../HomePage/BlogDetails/BlogDetails';
import { Navigate, Route, Routes} from 'react-router-dom';
import styles from './Router.module.scss';
import NotFound from '../NotFoundPage/NotFound';

interface RouterProps {}

const Router: FC<RouterProps> = () => (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/blogs/:id' element={<BlogDetails />} />
        <Route path="/" element={<Navigate to="/Home" />} /> {/* default route path */}
        <Route path="*" element={<NotFound />} /> {/* must be at bottom bc it catches anything that doesn't match the above routes */}
    </Routes>
);

// to install router in terminal : "npm i react-router-dom @types/react-router-dom"
export default Router;
