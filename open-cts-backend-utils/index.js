import http from 'http';
import app from './app';

const server = http.createServer(app);

const PORT = '4000';

server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});