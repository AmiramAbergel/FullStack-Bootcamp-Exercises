import './App.css';
import CategoriesList from './components/RandChuckNorris/CategoriesList';
import React, { useState } from 'react';

function App() {
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchCategoriesHandler = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(
                `https://api.chucknorris.io/jokes/categories`
            );
            if (!response.ok) {
                throw new Error('Error');
            }
            const data = await response.json();
            console.log(data);
            setCategories(data);
        } catch (error) {
            setError(error.message);
        }

        setIsLoading(false);
    };

    let content = <p>Found no Categories</p>;

    if (categories.length > 0) {
        content = <CategoriesList categories={categories}></CategoriesList>;
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
                <button onClick={fetchCategoriesHandler}>
                    Fetch Categories
                </button>
            </section>
            <section>{content}</section>
        </div>
    );
}

export default App;
