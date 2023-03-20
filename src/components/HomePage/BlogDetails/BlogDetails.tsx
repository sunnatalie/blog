import React, { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import Blog from '../../../models/blog';
import styles from './BlogDetails.module.scss';
import Loader from '../../Loader/Loader';

interface BlogDetailsProps {}

const BlogDetails: FC<BlogDetailsProps> = () => {

    const { id } = useParams(); //hook to access whatever id is in the route of blogdetails component like 1, 2, 3, etc. useparams allows us to grab route parameters from route (the id)
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const navigate = useNavigate();

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE'
        }).then(() => {
            navigate('/');
        })
    }

    return(
        <div className={`${styles.BlogDetails} blog-details`}>
            { isPending && <Loader />}
            { error && <div>{ error }</div> }
            {blog && (
                <article>
                    <h2>{ blog["title"] }</h2>
                    <p>Written by { blog["author"] } </p>
                    <div>{ blog["body"] } </div>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;
