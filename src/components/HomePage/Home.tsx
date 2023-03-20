import React, { FC } from 'react';
import useFetch from '../../hooks/useFetch';
import Loader from '../Loader/Loader';
import BlogList from './BlogList/BlogList';
import styles from './Home.module.scss';

interface HomeProps {}

const Home: FC<HomeProps> = () => {

    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs'); //destructuring and uses the useFetch hook to fetch data. //how to connect to json server in terminal: "npx json-server --watch data/db.json --port 8000". Specifying port 8000 so that the data is not connected to the port we're currently on (usually 3000)

    return(
        <div className={`${styles.Home} home`}>
            { error && <div>{ error }</div>} {/* displays the error on the page. Here, we use conditional rendering with the logical && */}
            { isPending && <Loader />} {/* we only want to show loading when we don't have the data */}
            {blogs && <BlogList blogs={blogs} title="all blogs" blog />} {/* The part on the right is evaluated and output only if the thing on the left is true. Don't want to output until there's data in blogs (not null as is originally set). Otherwise, without the logical &, when we try to map the blogs in the BlogList, then it won't work. */}
        </div>
    );
}

export default Home;
