import React, { useRef, useState } from 'react';
import RandChuckNorris from './RandChuckNorris';

const CategoriesList = (props) => {
    const [joke, setJoke] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [category, setCategory] = useState(null);
    const btnRef = useRef('');
    const fetchJokeHandler = async () => {
        const val = btnRef.current.value;
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(
                `https://api.chucknorris.io/jokes/random?category=${val}`
            );
            if (!response.ok) {
                throw new Error('Error');
            }
            const data = await response.json();
            console.log(data);
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
        <ul>
            {props.categories.map((category) => {
                return (
                    <div>
                        <button
                            ref={btnRef}
                            onClick={fetchJokeHandler}
                            value={category}
                        >
                            {category}
                        </button>
                    </div>
                );
            })}
            <section>{content}</section>
        </ul>
    );
};

export default CategoriesList;
