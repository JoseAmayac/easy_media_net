import app from './src/app';

const port = process.env.PORT || 3000;

// Start server
app.listen( port, () => {
    console.log(`Server started on ${port}`);
})