import React, { FC } from 'react';
import styles from './BlogList.module.scss';

interface BlogListProps {blogs: any, title: string, blog: any}

const BlogList: FC<BlogListProps> = ({blogs}) => {
    
    return(
        <div className={`${styles.BlogList} blog-list`}>
            {blogs.map((blog:any) => (
                <div className="blog-preview" key={blog.id} >
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                </div>
            ))}
        </div>
      );
}



export default BlogList;
