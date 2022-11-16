import React from 'react';
import Fetch from '../api/Fetch';

const CandidatesList = (props) => {
    const [candidates, error, isLoading] = Fetch();

    const onRead = () => {
        const res = candidates.map((candidate) => {
            return (
                <div key={candidate.id}>
                    <h3>
                        {candidate.first} {candidate.last}
                    </h3>
                </div>
            );
        });
        return res;
    };
    return (
        <section>
            {isLoading && <p>Loading...</p>}
            {!isLoading && error && <p>{error}</p>}
            {!isLoading && !error && candidates && <>{onRead()}</>}
            {!isLoading && !error && !candidates && <p>Found no candidates</p>}
        </section>
    );
};

export default CandidatesList;
