const express = require('express');
const router = express.Router();
const { communities, users } = require('../data/mockData');

// GET /communities/:id - returns community details along with member info
router.get('/:id', (req, res) => {
    const communityId = parseInt(req.params.id);
    const community = communities.find(c => c.id === communityId);

    if (!community) {
        return res.status(404).json({ message: 'Community not found' });
    }

    const memberDetails = community.members.map(memberId => {
        const user = users.find(u => u.id === memberId);
        return user ? { id: user.id, name: user.name, role: user.role } : null;
    }).filter(member => member !== null);

    res.json({ ...community, members: memberDetails });
});

// POST /communities - add a new community (validate name and members)
router.post('/', (req, res) => {
    const { name, members } = req.body;

    if (!name || typeof name !== 'string' || !name.trim()) {
        return res.status(400).json({ error: 'name is required and must be a non-empty string' });
    }

    if (!Array.isArray(members)) {
        return res.status(400).json({ error: 'members is required and must be an array of user IDs' });
    }

    // ensure all member IDs are numbers and exist in users
    const invalidIds = members.filter(id => typeof id !== 'number' || !users.some(u => u.id === id));
    if (invalidIds.length > 0) {
        return res.status(400).json({ error: 'Some member IDs are invalid or do not exist', invalidIds });
    }

    const newId = communities.length ? Math.max(...communities.map(c => c.id)) + 1 : 1;
    const newCommunity = { id: newId, name: name.trim(), members: [...members] };
    communities.push(newCommunity);

    res.status(201).json(newCommunity);
});

module.exports = router;
