import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de usuários');

    // JSON
    response.json([
        'Lucas',
        'Diego',
        'Daniel',
        'Caio'
    ]);
});

app.listen(3333);