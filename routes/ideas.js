const express = require('express');
const router = express.Router();
const ideas = [
	{
		id: 1,
		text: 'Positive Newsletter, but the bad kind of positive news really,the type you get from the doctor after a test',
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
// get all ideas
router.get('/', (req, res) => {
	res.json({ success: true, data: ideas });
});
// get specific idea from id
router.get('/:id', (req, res) => {
	const idea = ideas.find((idea) => idea.id === +req.params.id);
	if (!idea) {
		return res
			.status(404)
			.json({ success: false, error: 'Resource not found' });
	}
	res.json({ success: true, data: idea });
});
// update id
router.put('/:id', (req, res) => {
	const idea = ideas.find((idea) => idea.id === +req.params.id);
	if (!idea) {
		return res
			.status(404)
			.json({ success: false, error: 'Resource not found' });
	}
	idea.text = req.body.text || idea.text;
	idea.tag = req.body.tag || idea.tag;

	res.json({ success: true, data: idea });
});
// remove id
router.delete('/:id', (req, res) => {
	const ideaIndex = ideas.findIndex((idea) => idea.id === +req.params.id);

	if (!ideas[ideaIndex]) {
		return res
			.status(404)
			.json({ success: false, error: 'Resource not found' });
	}

	ideas.splice(ideaIndex, 1);

	res.json({ success: true, data: {} });
});
// add idea
router.post('/', (req, res) => {
	const idea = {
		id: ideas.length + 1,
		text: req.body.text,
		tag: req.body.tag,
		username: req.body.username,
		date: new Date().toISOString().slice(0, 10),
	};
	ideas.push(idea);

	res.json({ success: true, data: idea });
});

module.exports = router;
