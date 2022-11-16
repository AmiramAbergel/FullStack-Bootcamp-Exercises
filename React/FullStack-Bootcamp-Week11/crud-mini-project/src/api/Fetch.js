import React, { useEffect, useState } from 'react';
import api from './api';

const Fetch = () => {
    const [response, setResponse] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const sendRequest = async () => {
            try {
                setIsLoading(true);
                const response = await api.get('/Candidates');
                setResponse(response.data);
            } catch (error) {
                if (error.response) {
                    // Not in the 200 response range
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else {
                    console.log(error.message);
                    setError(error.message);
                }
            } finally {
                setIsLoading(false);
            }
        };

        sendRequest();

        //useEffect cleanup function

        //return () => {};
    }, []);

    return [response, error, isLoading];
};

export default Fetch;
