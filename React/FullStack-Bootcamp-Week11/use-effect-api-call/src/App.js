import './App.css';
import RandChuckNorris from './components/RandChuckNorris/RandChuckNorris';
import React, { useState } from 'react';

function App() {
    const [joke, setJoke] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchJokeHandler = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(
                `https://api.chucknorris.io/jokes/random`
            );
            if (!response.ok) {
                throw new Error('Error');
            }
            const data = await response.json();

            setJoke(data);
        } catch (error) {
            setError(error.message);
        }

        setIsLoading(false);
    };

    let content = <p>Found no joke</p>;

    if (joke) {
        content = <RandChuckNorris joke={joke.value} />;
    }

    if (error) {
        content = <p>{error}</p>;
    }
    if (isLoading) {
        content = <p>Loading...</p>;
    }
    return (
        <div className='App'>
            <section>
                <button onClick={fetchJokeHandler}>Fetch Joke</button>
            </section>
            <section>{content}</section>
        </div>
    );
}

export default App;
