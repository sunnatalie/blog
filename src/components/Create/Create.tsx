import React, { FC, useState } from 'react';
import styles from './Create.module.scss';

interface CreateProps {}

const Create: FC<CreateProps> = () => {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("")

    return(
        <div className={`${styles.Create} create`}>
            <form action="">
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
                <button>Add blog</button>
                <p>{ title }</p>
                <p>{ body }</p>
                <p>{ author }</p>
            </form>
        </div>
    );
}



export default Create;
