const express = require('express');
const port = 5000;
const app = express();
const ideas = [
	{
		id: 1,
		text: 'Positive Newsletter, but kind of the bad news really,the type you get from the doctor after a test',
		tag: 'Technology',
		username: 'TonyStark',
		date: '2023-07-08',
	},
	{
		id: 2,
		text: 'Milk cartons that display how much acid youve taken and how much milk you need to drink to counteract the affects',
		tag: 'Inventions',
		username: 'SteveRogers',
		date: '2023-01-02',
	},
	{
		id: 3,
		text: 'Location of the closest vending machine in Japan that sells those products Weebs like',
		tag: 'Software',
		username: 'BruceBanner',
		date: '2020-10-18',
	},
];

app.get('/', (req, res) => {
	res.send({ message: 'Welcome top the Random Ideas API' });
});
// get all ideas
app.get('/api/ideas', (req, res) => {
	res.json({ success: true, data: ideas });
});
// get specific idea from id
app.get('/api/ideas/:id', (req, res) => {
	const idea = ideas.find((idea) => idea.id === +req.params.id);
	if (!idea) {
		return res
			.status(404)
			.json({ success: false, error: 'Resource not found' });
	}
	res.json({ success: true, data: idea });
});

app.listen(port, () => console.log('server listening on port 5000'));
