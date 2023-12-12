// server.ts
import express from 'express';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

console.log("Getting ready to app.prepare()")

app.prepare().then(() => {
  console.log("app.prepare().then: ")
  try {
    console.log("try block")
    const server = express();

    server.get('/api/hello', (req, res) => {
      res.json({ message: 'Hello from the server!' });
    });

    server.all('*', (req, res) => {
      return handle(req, res);
    });

    const PORT = process.env.PORT || 3000;
    server.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error during server startup:', error);
  }
});
