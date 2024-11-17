import express from 'express';
import dotenv from 'dotenv';
import mediaRoutes from './routes/mediaRoutes.js';
import userRoutes from './routes/userRoutes.js';
import likesRoutes from './routes/likesRoutes.js';
import commentsRoutes from './routes/commentsRoutes.js';
import ratingsRoutes from './routes/ratingsRoutes.js';

dotenv.config();
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DB_NAME:', process.env.DB_NAME);

const hostname = '127.0.0.1';
const port = 3000;
const app = express();

app.set('view engine', 'pug');
app.set('views', 'src/views');

app.use(express.json());

// Home page (client) as static html, css, js
app.use(express.static('public'));
// Uploaded media files
app.use('/uploads', express.static('uploads'));

// Mock data for exampleData
const exampleData = [
  { title: 'Sample Media 1', filename: 'sample1.jpg' },
  { title: 'Sample Media 2', filename: 'sample2.jpg' },
];

// Api documentation page rendered with pug
app.get('/api', (req, res) => {
  res.render('index', {
    title: 'Media sharing REST API Documentation',
    version: process.env.npm_package_version,
    exampleData: exampleData,
  });
});

// Media resource endpoints
app.use('/api/media', mediaRoutes);
app.use('/api/users', userRoutes);
app.use('/api/likes', likesRoutes);
app.use('/api/comments', commentsRoutes);
app.use('/api/ratings', ratingsRoutes);

// User resource endpoints
// TODO: implement user resource
//app.use('/api/users', userRouter);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});