import React from 'react';
import Fetch from '../api/Fetch';

const CandidatesList = (props) => {
    const [candidates, error, isLoading] = Fetch();

    return (
        <ul>
            <section>
                {isLoading && <p>Loading...</p>}
                {!isLoading && error && <p>{error}</p>}
                {!isLoading && !error && candidates && (
                    <p>{candidates[0].first}</p>
                )}
                {!isLoading && !error && !candidates && (
                    <p>Found no candidates</p>
                )}
            </section>
        </ul>
    );
};

export default CandidatesList;
