import React, { useEffect, useState } from 'react';
import fetch, { getData, postData } from '../api/service';
import Candidate from './Candidate';

const CandidatesList = (props) => {
    const [candidates, setCandidates] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [newInputVal, setNewInputVal] = useState('');
    const [newInputID, setNewInputID] = useState(null);
    const [newCandidate, setNewCandidate] = useState({
        first: '',
        last: '',
        location: '',
        skills: [],
        img: '',
        disqualified: false,
        id: null,
    });

    const inputHandler = (event) => {
        setNewInputID((prev) => event.target.id);
        setNewInputVal((prev) => event.target.value);
        setNewCandidate((prev) => ({ ...prev, [newInputID]: newInputVal }));
    };

    useEffect(() => {
        async function fetchData() {
            //  await here
            const [data, error, isLoading] = await getData();

            setCandidates(data);
            setError(error);
            setIsLoading(isLoading);
        }
        fetchData();
    }, []);

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
    const isValidImage = (url) => {
        return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
    };

    const createHandler = async () => {
        if (newCandidate.first.length < 5 || newCandidate.last < 5) {
            return;
        } else if (isValidImage(newCandidate.img)) {
            return;
        }

        const createdCandidate = {
            first: newCandidate.first,
            last: newCandidate.last,
            location: newCandidate.location,
            skills: newCandidate.skills,
            img: newCandidate.img,
            disqualified: newCandidate.disqualified,
            id: (candidates.length += 1),
        };
        setNewCandidate((prev) => createdCandidate);

        const [data, error, isLoading] = await postData(newCandidate);

        setError(error);

        setCandidates((prev) => [...prev, data]);

        setNewCandidate((prev) => ({
            first: '',
            last: '',
            location: '',
            skills: [],
            img: '',
            disqualified: false,
            id: prev.id,
        }));
        setIsLoading(isLoading);
    };
    return (
        <div>
            <section>
                {isLoading && <p>Loading...</p>}
                {!isLoading && error && <p>{error}</p>}
                {!isLoading && !error && candidates.length && <>{onRead()}</>}
                {!isLoading && !error && !candidates && (
                    <p>Found no candidates</p>
                )}
            </section>
            <Candidate
                first={newCandidate.first}
                last={newCandidate.last}
                city={newCandidate.city}
                img={newCandidate.img}
                onChangeInput={inputHandler}
                onAddCandidate={createHandler}
            />
        </div>
    );
};

export default CandidatesList;
