import { useState, useEffect } from 'react';

const useFetch = (url:string) => {

    const [data, setData] = useState(null); //originally, blogs is null but will be replaced with data using useState
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController(); // stops the useEffect fetch request when changing pages
        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })  //signal: associates abort controller with the fetch. The url is a custom url we choose and insert into the fetch hook
                .then(res => { //once the fetch promise is resolved, we will get a response object. this response object isn't actually the data. To get the data, we need to do something with the response object.
                    console.log(res); //ok:true means that we get data back and ok:false means that endpoint is faulty or doesn't exist
                    if(!res.ok){ //check if the response is not ok (false)
                        throw Error('could not fetch the data for that resource!!!') //throwing an error is caught in the .catch with the error we made attached
                    }
                    return res.json(); //this passes the json into a js object for us. "return" this value returns another promise.
                })
                .then(data => { //takes the data as an actual parameter. now we actually have the data
                    console.log(data);
                    setData(data); //takes the array of objects and updates blog state (or other data) with the data array
                    setIsPending(false); //removes loader once we have the data
                    setError(null); //removes error message if we make a subsequent request and eventually get data
                })
                .catch(err => { //catches network error if we can't reach the server properly
                    console.log(err.message);
                    if (err.name === 'AbortError') { //if the fetch is aborted, then we don't want a change state (the setIsPending and the setError)
                        console.log('fetch aborted');
                    } else {
                        setIsPending(false); //removes loader once the error message appears
                        setError(err.message); //changes the data within error from null to whatever error message we chose above
                    }
                })
        }, 1000); //makes the fetch more realistic in data lag. Don't need this with a real request
        return () => abortCont.abort(); //aborts whatever fetch is associated. This is the cleanup function
    }, [url]) //empty dependcy array -- prevents infinite loop and means that the useEffect only fires once on the initial render, not whenever the data changes. by placing "url" inside the array, this means that use effect runs every time the url changes


    return { data, isPending, error } //returns an object. can be an array too. this allows us to grab properties from the hook

}

export default useFetch;