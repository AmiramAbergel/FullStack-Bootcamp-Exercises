import express from 'express';

const app = express();
const PORT = 3000;
const BASE_URL = '/numbers';

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}...`);
});

app.get(BASE_URL, (req, res) => {
    res.status(200).json({ message: 'success using (GET)' });
});

app.post(BASE_URL, (req, res) => {
    res.send(`message: success using (POST)`);
});

app.put(BASE_URL, (req, res) => {
    res.status(200).json({ message: 'success using (PUT)' });
});

app.delete(BASE_URL, (req, res) => {
    res.status(200).json({ message: 'success using (DELETE)' });
});
