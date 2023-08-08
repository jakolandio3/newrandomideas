const express = require('express');
const port = 5000;
const app = express();

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
	res.send({ message: 'Welcome top the Random Ideas API' });
});

const ideasRouter = require('./routes/ideas');
app.use('/api/ideas', ideasRouter);

app.listen(port, () => console.log('server listening on port 5000'));
