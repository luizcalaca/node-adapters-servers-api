import app from './app';

const PORT = process.env.PORT || 3012;

app.listen(PORT, () => {
    console.log(`Listening port ${PORT}`);
});