import React from 'react';

const Card = ({ filtered90s }) => {
    return (
        <div>
            {filtered90s.map((user) => {
                return (
                    <div>
                        <h1>{user.name}</h1>
                        <ul>
                            <li>{user.birthday}</li>
                            <li>{user.favoriteFoods.fish}</li>
                            <li>{user.favoriteFoods.meats}</li>
                        </ul>
                    </div>
                );
            })}
        </div>
    );
};

export default Card;
