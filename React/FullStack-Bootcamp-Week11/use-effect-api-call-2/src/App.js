import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import AvatarMap from './components/AvatarMap';
import avatarFilter from './utils/avatarFilter';

function App() {
    const [avatars, setAvatars] = useState([]);
    const [avatar, setAvatar] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchInput, setSearchInput] = useState('');
    const [filteredContent, setFilteredContent] = useState('');

    useEffect(() => {
        const fetchAvatarHandler = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const response = await fetch(
                    `https://randomuser.me/api/?results=10`
                );
                if (!response.ok) {
                    throw new Error('Error');
                }
                const data = await response.json();
                console.log(data);
                const transformedAvatars = data.results.map((avatarData) => {
                    return {
                        name: `${avatarData.name.first} ${avatarData.name.last}`,
                        img: avatarData.picture.large,
                    };
                });
                setAvatars(transformedAvatars);
                console.log(transformedAvatars);
            } catch (error) {
                setError(error.message);
            }
            setIsLoading(false);
        };
        fetchAvatarHandler();
    }, []);

    let content = <p>Found no Avatars.</p>;

    if (avatars.length > 0) {
        content = <AvatarMap avatars={avatars} />;
    }

    if (error) {
        content = <p>{error}</p>;
    }

    if (isLoading) {
        content = <p>Loading...</p>;
    }

    useEffect(() => {
        const onSearchSubmit = () => {
            if (searchInput) {
                const res = avatarFilter(avatars, searchInput);
                console.log(res);
                setAvatar(res);
                setFilteredContent(<AvatarMap avatars={res} />);
            }
        };
        onSearchSubmit();
        const debounce = setTimeout(() => {
            setAvatar(searchInput);
        }, 2000);
        return () => {
            clearTimeout(debounce);
        };
    }, [searchInput, avatars]);
    return (
        <>
            <input
                onChange={(e) => {
                    setSearchInput(e.target.value);
                }}
            />
            <section>{avatar.length > 0 ? filteredContent : content}</section>
        </>
    );
}

export default App;
