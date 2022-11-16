import api from './api';
let isLoading;
let error;
let data;

export const getData = async () => {
    try {
        isLoading = true;
        const response = await api.get('/Candidates');
        data = response.data;
    } catch (err) {
        if (err.response) {
            // Not in the 200 response range
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else {
            console.log(error.message);
            error = error.message;
        }
    } finally {
        isLoading = false;
    }

    return [data, error, isLoading];
};

export const postData = async (newCandidate) => {
    try {
        isLoading = true;
        const response = await api.post('/Candidates', newCandidate);
        data = response.data;
    } catch (err) {
        if (err.response) {
            // Not in the 200 response range
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else {
            console.log(error.message);
            error = error.message;
        }
    } finally {
        isLoading = false;
    }

    return [data, error, isLoading];
};
