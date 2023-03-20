import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Create.module.scss';

interface CreateProps {}

const Create: FC<CreateProps> = () => {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("");
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e: React.SyntheticEvent): void => {
        e.preventDefault(); //prevents page from refreshing everytime we press submit
        const blog = { title, body, author };

        setIsPending(true);
        setTimeout(() => {
            fetch('http://localhost:8000/blogs', {
                method: 'POST',
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(blog)
            }).then(() => {
                console.log('new blog added');
                setIsPending(false);
                // navigate(-1); goes back 1 page
                navigate('/'); //navigate to home page
            }) 
        }, 1000);

    }

    return(
        <div className={`${styles.Create} create`}>
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} //two way binding. if we didn't have this, then we would not be able to change the value of the use state title
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="" disabled>-choose an option-</option>
                    <option value="mario">Mario</option>
                    <option value="luigi">Luigi</option>
                    <option value="peach">Peach</option>
                </select>
                {!isPending && <button>Add blog</button>}
                {isPending && <button disabled>Adding blog...</button>}
                <p>{ title }</p>
                <p>{ body }</p>
                <p>{ author }</p>
            </form>
        </div>
    );
}



export default Create;
